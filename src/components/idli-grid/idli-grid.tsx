import {Component, Prop, h, Element, Watch, Event, EventEmitter, State} from '@stencil/core';
import renderEmptyData from "./empty-image";

const DEFAULT_CELL_WIDTH = 300;

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


    render() {
        const that = this;
        let totalLeftPanelWidth = 0;
        const leftHeaderRow = [];
        const rightHeaderRow = [];
        const bodyRightPanel = [];
        const bodyLeftPanel = [];

        this._columnConfig.forEach(function (col) {
            let colWidth = DEFAULT_CELL_WIDTH;
            if (col.width)
                colWidth = parseInt(col.width);

            const colEl = <div class="col" style={{width: colWidth + "px"}}>{col.label}</div>;
            if (col.fixed) {
                totalLeftPanelWidth += colWidth;
                leftHeaderRow.push(colEl);
            } else
                rightHeaderRow.push(colEl);
        });

        if (that._data && that._data.length)
            that._data.forEach(function (row) {
                const bodyLeftRow = [];
                const bodyRightRow = [];
                that._columnConfig.forEach(function (col) {
                    let colWidth = DEFAULT_CELL_WIDTH;
                    if (col.width)
                        colWidth = parseInt(col.width);
                    const colEl = <div class={"col " + (that.hoverRecord === row ? 'col-hover' : '')}
                                       style={{width: colWidth + "px", height: 46 + "px"}}
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

        return <div class="idli-grid-component">
            <div class="list-scroll-wrapper" onScroll={(ev) => this.handleScroll(ev)}>
                {this.renderHeader(totalLeftPanelWidth, leftHeaderRow, rightHeaderRow)}
                {
                    (function () {
                        if (that._data && that._data.length) {
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
                        } else
                            return renderEmptyData();
                    })()
                }
            </div>
        </div>;
    }

    renderHeader(totalLeftPanelWidth: number, leftHeaderRow: any, rightHeaderRow: any) {
        return <div class="header">
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
}
