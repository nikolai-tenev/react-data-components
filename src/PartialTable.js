import React, {Component} from "react";
import Table from "./Table";
import Pagination from "./Pagination";

export default class PartialTable extends Component {

    render() {
        const {
            onFilter, onPageSizeChange, onPageNumberChange, onSort,
            pageLengthOptions, columns, keys, buildRowOptions,
        } = this.props;

        const {
            page, pageSize, pageNumber,
            totalPages, totalItems, sortBy, filterValue,
        } = this.props.data;

        const infoStartItem = pageNumber * pageSize + 1;
        const infoEndItem = infoStartItem - 1 + page.length;

        return <div className="row">
            <div className="col-xs-12">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="form-inline">
                                <label className="control-label" htmlFor="search-field">Search:</label>
                                <input
                                    id="search-field"
                                    className="form-control input-sm"
                                    type="search"
                                    value={filterValue}
                                    onChange={onFilter}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group pull-right">
                            <div className="form-inline">
                                <label className="control-label" htmlFor="page-menu">Page size:</label>
                                <div className="input-group">
                                    <select
                                        id="page-menu"
                                        className="form-control input-sm"
                                        value={pageSize}
                                        onChange={onPageSizeChange}
                                    >
                                        {pageLengthOptions.map(opt =>
                                            <option key={opt} value={opt}>
                                                {opt === 0 ? 'All' : opt}
                                            </option>
                                        )}
                                    </select>
                                    <span className="input-group-addon">items</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 table-responsive">
                        <Table
                            className="table table-bordered table-striped table-hover table-condensed"
                            dataArray={page}
                            columns={columns}
                            keys={keys}
                            buildRowOptions={buildRowOptions}
                            sortBy={sortBy}
                            onSort={onSort}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <p>Displaying {infoStartItem}-{infoEndItem} of {totalItems}</p>
                    </div>
                    <div className="col-sm-4">
                        <Pagination
                            className="pagination pull-right"
                            currentPage={pageNumber}
                            totalPages={totalPages}
                            onChangePage={onPageNumberChange}
                        />
                    </div>
                </div>
            </div>
        </div>;
    }

}
