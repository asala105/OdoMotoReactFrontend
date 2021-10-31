import React, {useState, useEffect} from 'react';
import api from '../api'
import LeavesTable from '../components/AttendanceRecords/LeavesTable'
import SideBar from '../components/navigation/SideBar'
import Navbar from '../components/navigation/Navbar'

export default function LeavesRequests() {
    const [drivers, setDrivers] = useState([]);
    const [data, setData] = useState([]);
    const [statusId, setStatusId] = useState('');
    const [driverId, setDriverId] = useState('');

    function getData(){
        api.driverData()
        .then(function(response){
            setDrivers(response.data.data);
        })
    }

    function handleFilter(){
        let dataToSend ={
            status_id:statusId,
            user_id:driverId
        }
        console.log(dataToSend);
        api.getFilteredLeaves(dataToSend)
        .then(function(response){
            setData(response.data.Leaves);
            console.log(response.data.Leaves);
        })
    }

    useEffect(()=>{
        getData();
    },[])
    return (
<div id="wrapper">
    <SideBar />
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <Navbar />
            <div className="row" style={{ marginLeft:10, marginRight:10 }}>
                <div className="col">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <div className="d-sm-flex align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-my-primary">Leave Requests</h6>
                                <form
                                    class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div class="input-group">
                                        <select className="form-select form-control bg-light border-0 small" aria-label=".form-select-lg example" onChange={(event)=>{setStatusId(event.target.value)}}>
                                            <option value='null'>Select the status</option>
                                            <option value={1}>Pending</option>
                                            <option value={4}>Approved</option>
                                            <option value={5}>Rejected</option>
                                        </select>
                                        <select className="form-select form-control bg-light border-0 small" aria-label=".form-select-lg example" onChange={(event)=>setDriverId(event.target.value)}>
                                            <option value='null'>Select the driver</option>
                                            {drivers.map((driver)=>
                                                <option key={driver.id} value={driver.id}>{driver.first_name + " " + driver.last_name}</option>
                                                )}
                                        </select>
                                        <div class="input-group-append">
                                            <button class="btn btn-my-primary" type="button" onClick={handleFilter}>
                                                <i class="fas fa-filter fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card-body">
                            <LeavesTable data={data}/>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div> 
    )
}
