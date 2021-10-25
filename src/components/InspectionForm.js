import React from 'react'

export default function InspectionForm() {
    return (
        <form className="user">
            <div className="form-group row">
                <div className="col-5">
                <label for="date" style={{ paddingLeft: 10 }}>Inspection Date</label>
                </div>
                <div className="col-7">
                <input type="date" className="form-control"
                    id="date"/>
                    </div>
            </div>
            <div className="form-group">
                <label for="date" style={{ paddingLeft: 10 }}>Inspection Type</label>
                <div className="btn-secondary btn-group btn-group-toggle btn-block" data-toggle="buttons">
                    <label className="btn btn-secondary active">
                        <input type="radio" name="options" id="option1" checked/> Safety Check
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2"/> Maintenance
                    </label>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-5">
                <label for="date" style={{ paddingLeft: 10 }}>Driver's Name</label>
                </div>
                <div className="col-7">
                <select className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Select the driver's name</option>
                    <option value="1">John</option>
                    <option value="2">Jim</option>
                    <option value="3">Tim</option>
                </select>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-5">
                <label for="date" style={{ paddingLeft: 10 }}>Vehicle ID</label>
                </div>
                <div className="col-7">
                <select className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Select the vehicle's id</option>
                    <option value="1">Rec 001</option>
                    <option value="2">Rec 002</option>
                    <option value="3">Rec 003</option>
                </select>
                </div>
            </div>
            <a href="index.html" className="btn btn-my-primary btn-block">
                Save To Calendar
            </a>
        </form>
    )
}
