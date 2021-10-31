import React from 'react'
import FleetTable from '../components/Fleet/FleetTable'
import SideBar from '../components/navigation/SideBar'
import Navbar from '../components/navigation/Navbar'

export default function MovementPlan() {
    return (
    <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Navbar />
                <div className="row" style={{ marginLeft:10, marginRight:10 }}>
                    <div className="col">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 align-items-center justify-content-between d-sm-flex">
                                <h6 className="m-0 font-weight-bold text-my-primary">Fleet Request</h6>
                                <button className="d-none d-sm-inline-block btn btn-sm btn-my-primary shadow-sm">
                                    <i className="fas fa-clipboard-list fa-sm text-white-50 m-1"></i>
                                Generate Plan</button>
                            </div>
                            <div className="card-body">
                                <FleetTable/>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    )
}
