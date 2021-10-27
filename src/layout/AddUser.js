import React from 'react'
import AddUserForm from '../components/users/AddUserForm'

export default function AddUser() {
    return (
        <div className="row" style={{ marginLeft:10, marginRight:10 }}>
            <div className="col">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-my-primary">Leave Requests</h6>
                    </div>
                    <div className="card-body">
                        <AddUserForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}
