import React from 'react'
import VehiclesTable from '../components/VehiclesTable'

export default function Vehicles() {
    return (
        <div className="row" style={{ marginLeft:10, marginRight:10 }}>
            <div className="col">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-my-primary">Vehicles List</h6>
                    </div>
                    <div className="card-body">
                        <VehiclesTable/>
                    </div>
                </div>
            </div>
        </div>  
    )
}
