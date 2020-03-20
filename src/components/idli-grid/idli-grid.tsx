import {Component, Prop, h, Element, Watch, Event, EventEmitter, State} from '@stencil/core';

@Component({
    tag: 'idli-grid',
    styleUrl: 'idli-grid.scss',
    shadow: true
})
export class IdliGrid {

    /**
     * The grid columns configuration.
     * Sample [{"name":"name","label":"Name","width":300,"fixed":true},{"name":"age","label":"Age"},{"name":"eyeColor","label":"Eye Color","width":500}].
     */
    @Prop() columnConfig: any[] | string = [];
    private _columnConfig: any[];

    @Watch('columnConfig')
    columnConfigWatcher(newValue: any[] | string) {
        if (typeof newValue === 'string') {
            this._columnConfig = JSON.parse(newValue);
        } else {
            this._columnConfig = newValue;
        }
    }

    @Prop() data: any[] | string = [];
    private _data: any[];

    @Watch('data')
    dataWatcher(newValue: any[] | string) {
        if (typeof newValue === 'string') {
            this._data = JSON.parse(newValue);
        } else {
            this._data = newValue;
        }
    }

    @Event() cellClicked: EventEmitter;

    @Element() private element: HTMLElement;

    @State() private hoverRecord: any;

    componentWillLoad() {
        this.columnConfigWatcher(this.columnConfig);
        this.dataWatcher(this.data);
    }

    handleCellClick(event: any, row: any, col: any) {
        this.cellClicked.emit({event, record: row, column: col});
    }

    handleScroll(ev) {
        const $root = this.element.shadowRoot;
        const $headerPanel: HTMLElement = $root.querySelector('.header');
        const $bodyPanel = $root.querySelector('.body');
        const $bodyRightPanel = $bodyPanel.querySelector('.right-panel');
        const $leftPanels = $root.querySelectorAll('.left-panel');
        const movedBy = ev.target.getBoundingClientRect().x - $bodyRightPanel.getBoundingClientRect().x;
        $headerPanel.style.top = (ev.target.getBoundingClientRect().y - $bodyPanel.getBoundingClientRect().y) + 'px';
        $leftPanels.forEach(function ($leftPanel: HTMLElement) {
            $leftPanel.style.left = movedBy + 'px';
        });
    }

    handleMouseOver(row: any) {
        this.hoverRecord = row;
    }


    render() {
        const that = this;
        let totalLeftPanelWidth = 0;
        const leftHeaderRow = [];
        const rightHeaderRow = [];
        const bodyRightPanel = [];
        const bodyLeftPanel = [];

        this._columnConfig.forEach(function (col) {
            let colWidth = 300;
            if (col.width)
                colWidth = col.width;

            const colEl = <div class="col" style={{width: colWidth + "px"}}>{col.label}</div>;
            if (col.fixed) {
                totalLeftPanelWidth += col.width;
                leftHeaderRow.push(colEl);
            } else
                rightHeaderRow.push(colEl);
        });

        return <div class="idli-grid-component">
            <div class="list-scroll-wrapper" onScroll={(ev) => this.handleScroll(ev)}>
                <div class="header">
                    <div class="left-panel" style={{width: totalLeftPanelWidth + "px"}}>
                        <div class="table">
                            <div class="row">
                                {leftHeaderRow}
                            </div>
                        </div>
                    </div>
                    <div class="right-panel" style={{paddingLeft: totalLeftPanelWidth + "px"}}>
                        <div class="table">
                            <div class="row">
                                {rightHeaderRow}
                            </div>
                        </div>
                    </div>
                </div>


                {
                    (function () {
                        if (that._data && that._data.length) {
                            that._data.forEach(function (row) {
                                const bodyLeftRow = [];
                                const bodyRightRow = [];
                                that._columnConfig.forEach(function (col) {
                                    let colWidth = 300;
                                    if (col.width)
                                        colWidth = col.width;
                                    const colEl = <div class={"col " + (that.hoverRecord === row ? 'col-hover' : '')} style={{width: colWidth + "px"}}
                                                       onMouseOver={() => that.handleMouseOver(row)}
                                                       onClick={(evt) => that.handleCellClick(evt, row, col)}>
                                        <div class="col-content"
                                             style={{width: (colWidth - 24 /* remove padding */) + "px"}}>
                                            {row[col.name] ? row[col.name] : ''}
                                        </div>
                                    </div>;
                                    if (col.fixed)
                                        bodyLeftRow.push(colEl);
                                    else
                                        bodyRightRow.push(colEl);
                                });
                                bodyLeftPanel.push(bodyLeftRow);
                                bodyRightPanel.push(bodyRightRow);
                            });

                            return <div class="body">
                                <div class="body-container">
                                    <div class="left-panel" style={{width: totalLeftPanelWidth + "px"}}>
                                        <div class="table">
                                            {
                                                bodyLeftPanel.map((row) => <div class="row">{row}</div>)
                                            }
                                        </div>
                                    </div>
                                    <div class="right-panel" style={{paddingLeft: totalLeftPanelWidth + "px"}}>
                                        <div class="table">
                                            {
                                                bodyRightPanel.map((row) => <div class="row">{row}</div>)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>;

                        } else {
                            return <div class="empty-data">
                                <div class="empty-image">
                                    <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
                                        <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
                                            <ellipse fill="#F5F5F5" cx="32" cy="33" rx="32" ry="7"></ellipse>
                                            <g fill-rule="nonzero" stroke="#D9D9D9">
                                                <path
                                                    d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                                                <path
                                                    d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                                                    fill="#FAFAFA"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <p class="empty-image-description">No Data</p>
                            </div>;
                        }
                    })()
                }
            </div>
        </div>;
    }
}
