import React, {useState} from 'react'
import api from '../../api'
import InspectionTaskItem from './InspectionTaskItem'

export default function InspectionTasks(props) {
    function removeRow(id) {
        document.getElementById(id).remove();
    }
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
                    <InspectionTaskItem onRemove={()=>removeRow(task.id)} task={task}/>
                )}
            </tbody>
        </table>
    </div>
    )
}
