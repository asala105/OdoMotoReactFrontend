import React, {useState} from 'react'
import FleetTable from '../components/Fleet/FleetTable'
import SideBar from '../components/navigation/SideBar'
import Navbar from '../components/navigation/Navbar'
import api from '../api'


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
                                <FleetTable/>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
