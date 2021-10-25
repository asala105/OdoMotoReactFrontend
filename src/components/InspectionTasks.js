import React from 'react'
export default function InspectionTasks() {
    return (
    <div className="table-responsive">
        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Vehicle</th>
                    <th>Driver</th>
                    <th>Inspection Type</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rec 001</td>
                    <td>John Doe</td>
                    <td>Maintenance</td>
                    <td>In Progress</td>
                    <td>
                    <a href="#" className="btn btn-success btn-circle mr-1">
                                            <i className="fas fa-check"></i>
                                        </a>
                                        <a href="#" className="btn btn-danger btn-circle ml-1">
                                            <i className="fas fa-trash"></i>
                                        </a>
                    </td>
                </tr>
                <tr>
                                    <td>Rec 001</td>
                                    <td>John Doe</td>
                                    <td>Maintenance</td>
                                    <td>In Progress</td>
                                    <td>
                                    <a href="#" className="btn btn-success btn-circle mr-1">
                                            <i className="fas fa-check"></i>
                                        </a>
                                        <a href="#" className="btn btn-danger btn-circle ml-1">
                                            <i className="fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Rec 001</td>
                                    <td>John Doe</td>
                                    <td>Maintenance</td>
                                    <td>In Progress</td>
                                    <td>
                                        <a href="#" className="btn btn-success btn-circle mr-1">
                                            <i className="fas fa-check"></i>
                                        </a>
                                        <a href="#" className="btn btn-danger btn-circle ml-1">
                                            <i className="fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    )
}
