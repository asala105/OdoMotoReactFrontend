import React from 'react'

export default function AddUserForm() {
    return (
<form className="user">
            <div className="form-group">
                <label for="fname" style={{ padding: 10 }}>First Name</label>
                <input type="text" className="form-control"
                    id="fname" placeholder="First Name"/>
            </div>
            <div className="form-group">
                <label for="lname" style={{ padding: 10 }}>Last Name</label>
                <input type="text" className="form-control"
                    id="lname" placeholder="Last Name"/>
            </div>
            <div className="form-group">
                <label for="email" style={{ padding: 10 }}>Email</label>
                <input type="email" className="form-control"
                    id="email" placeholder="Enter the employee's email address"/>
            </div>
            <div className="form-group">
                <label for="dob" style={{ padding: 10 }}>Date of Birth</label>
                <input type="date" className="form-control"
                    id="dob"/>
            </div>
            <div className="form-group">
                <label for="phone_nb" style={{ padding: 10 }}>Phone Number</label>
                <input type="text" className="form-control"
                    id="phone_nb" placeholder="Enter the employee's phone number"/>
            </div>
            <div className="form-group">
                <label for="rank" style={{ padding: 10 }}>Rank</label>
                <input type="text" className="form-control"
                    id="rank" placeholder="Enter the employee's phone number"/>
            </div>
            <div className="form-group">
                <label for="date" style={{ padding: 10 }}>Inspection Type</label>
                <div className="btn-secondary btn-group btn-group-toggle btn-block" data-toggle="buttons">
                    <label className="btn btn-secondary active">
                        <input type="radio" name="options" id="option1" checked/> Admin
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2"/> HR
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2"/> Driver
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2"/> Employee
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label for="date" style={{ padding: 10 }}>Department</label>
                <select className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Select the department name</option>
                    <option value="1">Logistics</option>
                    <option value="2">Marketing</option>
                    <option value="3">Accounting</option>
                </select>
            </div>
            <div className="form-group">
                <label for="date" style={{ padding: 10 }}>Manager</label>
                <select className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Select the employee's manager name</option>
                    <option value="1">Rec 001</option>
                    <option value="2">Rec 002</option>
                    <option value="3">Rec 003</option>
                </select>
            </div>
            <a href="index.html" className="btn btn-my-primary btn-block">
                Save To Calendar
            </a>
        </form>
    )
}
