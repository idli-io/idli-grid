import {Component, Prop, h, Element, Watch, Event, EventEmitter, State} from '@stencil/core';
import renderEmptyData from "./empty-image";

const DEFAULT_CELL_WIDTH = 300;

@Component({
    tag: 'idli-table',
    styleUrl: 'idli-table.scss',
    shadow: true
})
export class IdliTable {

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

    @Prop() selectionType: 'checkbox' | undefined;

    @Prop() rowKey: string = 'id';

    @Watch('data')
    dataWatcher(newValue: any[] | string) {
        if (typeof newValue === 'string') {
            this._data = JSON.parse(newValue);
        } else {
            this._data = newValue;
        }
    }

    @Event() cellClicked: EventEmitter;

    @Event() selectChange: EventEmitter;

    @Element() private element: HTMLElement;

    @State() private hoverRecord: any;

    @State() private isSelectAll: boolean = false;

    @State() private selectedRowKeys: {} = {};

    async loadScriptModule(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.type = "module";
            script.addEventListener('load', () => {
                resolve();
            });
            document.head.appendChild(script);
        });
    }

    async componentWillLoad() {
        if (this.selectionType === 'checkbox' && !customElements.get('idli-checkbox'))
            await this.loadScriptModule("https://unpkg.com/@idli/idli-checkbox@0.1.8/dist/idli-checkbox/idli-checkbox.esm.js");
        this.columnConfigWatcher(this.columnConfig);
        this.dataWatcher(this.data);
    }

    getKeys(selectedRowKeys) {
        const result = [];
        for (let key in selectedRowKeys)
            if (selectedRowKeys[key])
                result.push(key);
        return result;
    }

    handleSelectChange(selectedRowKeys: any) {
        const oldValue = this.selectedRowKeys;
        this.selectedRowKeys = selectedRowKeys;
        this.selectChange.emit({oldValue: this.getKeys(oldValue), newValue: this.getKeys(this.selectedRowKeys)});
    }

    getTableHeaderDetails() {
        const that = this;
        let totalLeftPanelWidth = 0;
        const leftHeaderRow = [];
        const rightHeaderRow = [];

        if (this.selectionType === 'checkbox') {
            const checkboxWidth = 50;
            totalLeftPanelWidth += checkboxWidth;
            leftHeaderRow.push(<div class="col" style={{width: checkboxWidth + "px"}}>
                <idli-checkbox
                    value={that.isSelectAll}
                    onInputChange={() => {
                        const selectedRowKeys = {};
                        that._data.forEach(function (row) {
                            selectedRowKeys[row[that.rowKey]] = !that.isSelectAll;
                        });
                        that.isSelectAll = !that.isSelectAll;
                        that.handleSelectChange(selectedRowKeys);
                    }}/>
            </div>);
        }
        this._columnConfig.forEach(function (col) {
            let colWidth = DEFAULT_CELL_WIDTH;
            if (col.width)
                colWidth = parseInt(col.width) + 1;

            const colEl = <div class="col" style={{width: colWidth + "px"}}>{col.label}</div>;
            if (col.fixed) {
                totalLeftPanelWidth += colWidth;
                leftHeaderRow.push(colEl);
            } else
                rightHeaderRow.push(colEl);
        });
        return {
            totalLeftPanelWidth,
            leftHeaderRow,
            rightHeaderRow
        }
    }


    render() {
        const that = this;
        const rowHeight = 50;
        const bodyRightPanel = [];
        const bodyLeftPanel = [];

        const headerDetails = this.getTableHeaderDetails();

        if (that._data && that._data.length)
            that._data.forEach(function (row) {
                const bodyLeftRow = [];
                const bodyRightRow = [];

                if (that.selectionType === 'checkbox')
                    bodyLeftRow.push(<div class={"col " + (that.hoverRecord === row ? 'col-hover' : '')}
                                          style={{width: "50px", height: rowHeight + "px"}}
                                          onMouseOver={() => that.handleMouseOver(row)}>
                        <div class="col-content"
                             style={{width: (25 /* remove padding */) + "px"}}>
                            <idli-checkbox
                                value={that.selectedRowKeys[row[that.rowKey]]}
                                onInputChange={() => {
                                    const selectedRowKeys = {...that.selectedRowKeys};
                                    if (selectedRowKeys[row[that.rowKey]])
                                        that.isSelectAll = false;
                                    selectedRowKeys[row[that.rowKey]] = !selectedRowKeys[row[that.rowKey]];
                                    that.handleSelectChange(selectedRowKeys);
                                }}/>
                        </div>
                    </div>);

                that._columnConfig.forEach(function (col) {
                    let colWidth = DEFAULT_CELL_WIDTH;
                    if (col.width)
                        colWidth = parseInt(col.width);
                    const colEl = <div class={"col " + (that.hoverRecord === row ? 'col-hover' : '')}
                                       style={{width: colWidth + "px", height: rowHeight + "px"}}
                                       onMouseOver={() => that.handleMouseOver(row)}
                                       onClick={(evt) => {
                                           const selection = window.getSelection();
                                           if(selection.type != "Range") {
                                               that.handleCellClick(evt, row, col);
                                           }
                                       }}>
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

        return <div class="idli-table-component">
            <div class="list-scroll-wrapper" onScroll={(ev) => this.handleScroll(ev)}>
                {this.renderHeader(headerDetails)}
                {
                    (function () {
                        if (that._data && that._data.length) {
                            return <div class="body">
                                <div class="body-container">
                                    <div class="left-panel" style={{width: headerDetails.totalLeftPanelWidth + "px"}}>
                                        <div class="table">
                                            {bodyLeftPanel.map((row) => <div class="row">{row}</div>)}
                                        </div>
                                    </div>
                                    <div class="right-panel"
                                         style={{paddingLeft: headerDetails.totalLeftPanelWidth + "px"}}>
                                        <div class="table">
                                            {bodyRightPanel.map((row) => <div class="row">{row}</div>)}
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

    renderHeader(headerDetails: any) {
        return <div class="header">
            <div class="left-panel" style={{width: headerDetails.totalLeftPanelWidth + "px"}}>
                <div class="table">
                    <div class="row">
                        {headerDetails.leftHeaderRow}
                    </div>
                </div>
            </div>
            <div class="right-panel" style={{paddingLeft: headerDetails.totalLeftPanelWidth + "px"}}>
                <div class="table">
                    <div class="row">
                        {headerDetails.rightHeaderRow}
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
