import React from 'react'
export default function InspectionTasks(props) {
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
                {props.tasks.map((task)=>
                    <tr id={task.id}>
                    <td>{task.vehicle.registration_code}</td>
                    <td>{task.driver.first_name + ' ' + task.driver.last_name}</td>
                    <td>{task.inspection_type? 'Maintenance': 'Safety Inspection'}</td>
                    <td>{task.status.status}</td>
                    <td>
                    <a href="#" className="btn btn-success btn-circle mr-1">
                                            <i className="fas fa-check"></i>
                                        </a>
                                        <a href="#" className="btn btn-danger btn-circle ml-1">
                                            <i className="fas fa-trash"></i>
                                        </a>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
    )
}
