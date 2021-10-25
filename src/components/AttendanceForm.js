import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function AttendanceForm() {

    return (
        <form className="user">
            <div className="form-group">
                <label for="dnme" style={{ padding: 10 }}>Attendance Filters</label>
                <div className="btn-secondary btn-group btn-group-toggle btn-block" data-toggle="buttons">
                    <label className="btn btn-secondary active">
                        <input type="radio" name="options" id="option1" checked/> Attendance
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2"/> Leaves
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2"/> Both
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label for="date" style={{ padding: 10 }}>Driver's Name</label>
                <select className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Select the driver's name</option>
                    <option value="1">John</option>
                    <option value="2">Jim</option>
                    <option value="3">Tim</option>
                </select>
            </div>
            <a href="index.html" className="btn btn-my-primary btn-block">
                View Record
            </a>
        </form>
    )
}
