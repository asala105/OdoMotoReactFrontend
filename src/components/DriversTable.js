import React from 'react'

export default function DriversTable() {
    return (
        <div className="table-responsive">
        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Driver</th>
                    <th>From</th>
                    <th>Till</th>
                    <th>Leave Type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>2021/10/18</td>
                    <td>2021/10/19</td>
                    <td>Sick Leave</td>
                    <td>
                        <a href="#" className="btn btn-success btn-circle mr-1">
                            <i className="fas fa-check"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-circle ml-1">
                            <i className="fas fa-times"></i>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>2021/10/18</td>
                    <td>2021/10/19</td>
                    <td>Sick Leave</td>
                    <td>
                        <a href="#" className="btn btn-success btn-circle mr-1">
                            <i className="fas fa-check"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-circle ml-1">
                            <i className="fas fa-times"></i>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>2021/10/18</td>
                    <td>2021/10/19</td>
                    <td>Sick Leave</td>
                    <td>
                        <a href="#" className="btn btn-success btn-circle mr-1">
                            <i className="fas fa-check"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-circle ml-1">
                            <i className="fas fa-times"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
