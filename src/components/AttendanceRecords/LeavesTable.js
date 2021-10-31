import React from 'react'
import LeavesItem from './LeavesItem'

export default function LeavesTable(props) {
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
                {props.data.map(leave =>
                <LeavesItem
                    id = {leave.id}
                    driver = {leave.driver.first_name+ ' ' + leave.driver.last_name}
                    from = {leave.leave_from_date}
                    till = {leave.leave_till_date}
                    type = {leave.leave_type}
                />)}
            </tbody>
        </table>
    </div>
    )
}
