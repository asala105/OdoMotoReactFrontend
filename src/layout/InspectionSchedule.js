import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import api from '../api';
import InspectionForm from '../components/vehicles/InspectionForm';
import InspectionTasks from '../components/vehicles/InspectionTasks';
import SideBar from '../components/navigation/SideBar'
import Navbar from '../components/navigation/Navbar'


export default function InspectionSchedule() {
    const [value, onChange] = useState(new Date());
    const [date, setDate] = useState();
    const [inspectionTasks, setInspectionTasks] = useState([]);

    async function getTasks(value){
        let dd = value.getFullYear()+ '-'+ (value.getMonth()+1) + '-' + value.getDate()
        setDate(dd);
        api.getInspectionTasks(dd)
        .then(function(response){
            console.log(response.data.inspectionTasks);
            setInspectionTasks(response.data.inspectionTasks);
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
    <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Navbar />
                <div style={{ marginLeft:10, marginRight:10 }}>
                    <div className="row">
                <div className="col-xl-6 col-lg-5 col">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-my-primary">Inspection Calendar</h6>
                        </div>
                        <div className="card-body align-items-center">
                            <div className="chart-area center">
                                <Calendar value={value}
                                onChange={onChange}
                                onClickDay={(value)=>{getTasks(value)}}/>   
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                    <div className="card shadow mb-4 align-content-center justify-content-around">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-my-primary">Add New Inspection Task</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-area center">
                                    <InspectionForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-my-primary">Tasks for {date}</h6>
                            </div>
                            <div className="card-body">
                                <InspectionTasks tasks={inspectionTasks}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}
