import AttendanceForm from '../components/AttendanceRecords/AttendanceForm'
import React, { useState } from 'react'
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import SideBar from '../components/navigation/SideBar'
import Navbar from '../components/navigation/Navbar'
import { api } from '../api'
import AttendanceItem from '../components/AttendanceRecords/AttendanceItem';
import './calendar.css'

export function AttendanceRecord() {
    const today = new Date();
    const [value, onChange] = useState(today);
    const [date, setDate] = useState(today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate());
    const [records, setRecords] = useState([]);
    const [markedDates, setMarkedDates] = useState([]);
    const [loading, setLoading] = useState(false);
    const setClass = (date) => {
        const dateobj =
            markedDates.find((x) => {
                return (
                    date.getDay() === new Date(x.date).getDay() &&
                    date.getMonth() === new Date(x.date).getMonth() &&
                    date.getDate() === new Date(x.date).getDate()
                );
            });
        return dateobj ? 'highlight' + dateobj.status : "";
    }

    async function getData(value) {
        if (value.filter === '1' && value.driver !== "") {
            // api.getAttendance(value)
            // .then(function(response){
            //     setMarkedDates(response.data.marked_dates);
            // }).catch((error)=>{
            //     console.log(error);
            // })
        } else if (value.filter === '2' && value.driver !== "") {
            // api.getLeaves(value)
            // .then(function(response){
            //     setMarkedDates(response.data.marked_dates);
            // }).catch((error)=>{
            //     console.log(error);
            // })
        } else {
            return
        }
    }

    function handleClick(value) {
        let dd = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate()
        setDate(dd);
        setLoading(true);
        // api.getAttendanceByDate(dd)
        // .then(function(response){
        //     setRecords(response.data.data);
        //     setLoading(false);
        // }).catch((error)=>{
        //     console.log(error);
        // })

    }

    return (
        <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    <div style={{ marginLeft: 10, marginRight: 10 }}>
                        <div className="row">
                            <div className="col-xl-6 col-lg-5 col">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-my-primary">Attendance And Leaves Calendar</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart-area align-items-center justify-content-around">
                                            <Calendar value={value} style={{ height: '100%' }}
                                                onChange={onChange}
                                                tileClassName={({ activeStartDate, date, view }) => setClass(date)}
                                                onClickDay={(value) => handleClick(value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-my-primary">Add information to view the attendance record</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart-area center">
                                            <AttendanceForm onSend={getData} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-my-primary">Attendance Record For {date}</h6>
                                    </div>
                                    <div className="card-body">
                                        {loading ? <h6 className="m-0 text-my-primary">Loading...</h6> :
                                            records.length > 0 ?
                                                <div className="table-responsive">
                                                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                                        <thead>
                                                            <tr>
                                                                <th>Driver</th>
                                                                <th>Date</th>
                                                                <th>From</th>
                                                                <th>Till</th>
                                                                <th>Status</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {records.map((dd) =>
                                                                <AttendanceItem
                                                                    key={dd.id}
                                                                    id={dd.id}
                                                                    driver={dd.user !== null ? dd.user.first_name + ' ' + dd.user.last_name : ""}
                                                                    date={dd.date}
                                                                    from={dd.working_from}
                                                                    till={dd.working_to}
                                                                    status={dd.status.status}
                                                                />)}
                                                        </tbody>
                                                    </table>
                                                </div> :
                                                <h6 className="m-0 text-my-primary">There are no Attendance records on {date}</h6>

                                        }
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
