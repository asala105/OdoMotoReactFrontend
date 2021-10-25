import AttendanceForm from '../components/AttendanceForm'
import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function AttendanceRecord() {
    const [value, onChange] = useState(new Date());
    const [date, setDate] = useState();
    return (
        <div style={{ marginLeft:10, marginRight:10 }}>
<div className="row">
        <div className="col-xl-6 col-lg-5 col">
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-my-primary">Attendance And Leaves Calendar</h6>
                </div>
                <div className="card-body">
                    <div className="chart-area center">
                        <Calendar value={value} style={{ height:'100%' }}
                        onChange={onChange} onClickDay={(value)=>{setDate(value.getFullYear()+ '-'+ value.getMonth() + '-' + value.getDate()); console.log(value.getFullYear()+ '-'+ value.getMonth() + '-' + value.getDate())}}/>   
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-5 col-lg-6">
        <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-my-primary">Add information to view the attendance record</h6>
                </div>
                <div className="card-body">
                    <div className="chart-area center">
                        <AttendanceForm/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="row">
            <div className="col">
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-my-primary">Pending Attendance Record</h6>
                </div>
                <div className="card-body">
                <div className="table-responsive">
        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Driver</th>
                    <th>Date</th>
                    <th>From</th>
                    <th>Till</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>2021/10/18</td>
                    <td>10:00am</td>
                    <td>4:00pms</td>
                    <td>
                        <a href="#" className="btn btn-success btn-circle mr-1">
                            <i className="fas fa-check"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-circle ml-1">
                            <i className="fas fa-times"></i>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>2021/10/18</td>
                    <td>8:00am</td>
                    <td>2:30pm</td>
                    <td>
                        <a href="#" className="btn btn-success btn-circle mr-1">
                            <i className="fas fa-check"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-circle ml-1">
                            <i className="fas fa-times"></i>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>2021/10/18</td>
                    <td>9:43am</td>
                    <td>1:40pm</td>
                    <td>
                        <a href="#" className="btn btn-success btn-circle mr-1">
                            <i className="fas fa-check"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-circle ml-1">
                            <i className="fas fa-times"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
