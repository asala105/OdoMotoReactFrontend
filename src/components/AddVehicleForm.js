import React from 'react'

export default function AddVehicleForm() {
    return (
<form className="user">
            <div className="form-group row">
                <label for="rcode" style={{ padding: 10 }}>Registration Code</label>
                    <input type="text" className="form-control"
                        id="rcode" placeholder="Enter the registration code"/>
            </div>
            <div className="form-group row">
                    <label for="plate" style={{ padding: 10 }}>Plate Number</label>
                    <input type="text" className="form-control"
                        id="plate" placeholder="Enter the plate number" required/>
            </div>
            <div className="form-group">
                <label for="model" style={{ padding: 10 }}>Car Model</label>
                <input type="text" className="form-control"
                    id="model" placeholder="Enter the car model and year"/>
            </div>
            <div className="form-group">
                <label for="weight" style={{ padding: 10 }}>Gross Weight (Kg)</label>
                <input type="text" className="form-control"
                    id="weight" placeholder="Enter the gross weight of the vehicle in Kg"/>
            </div>
            <div className="form-group">
                <label for="odometer" style={{ padding: 10 }}>Odometer at the time of rental/ownership (Km)</label>
                <input type="text" className="form-control"
                    id="odometer" placeholder="Enter the odometer value in Km"/>
            </div>
            <div className="form-group">
                <label for="fuel" style={{ padding: 10 }}>Fuel level at the time of rental/ownership (Km)</label>
                <input type="text" className="form-control"
                    id="fuel" placeholder="Enter the fuel level in liters"/>
            </div>
            <div className="form-group">
                <label for="date" style={{ padding: 10 }}>Ownership status</label>
                <div className="btn-secondary btn-group btn-group-toggle btn-block" data-toggle="buttons">
                    <label className="btn btn-secondary active">
                        <input type="radio" name="options" id="option1" checked/> Owned
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2"/> Rented
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label for="date" style={{ padding: 10 }}>Category</label>
                <select className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Select the category of the vehicle</option>
                    <option value="1">Car</option>
                    <option value="2">Van</option>
                    <option value="3">4x4</option>
                </select>
            </div>
            <div className="form-group">
                <label for="date" style={{ padding: 10 }}>Driver</label>
                <select className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Select the driver's name</option>
                    <option value="1">John Doe</option>
                    <option value="2">John Doe</option>
                    <option value="3">John Doe</option>
                </select>
            </div>
            <div className="form-group">
                <label for="license" style={{ padding: 10 }}>Driver License Requirements</label> 
                <input type="text" className="form-control"
                    id="license" placeholder="Enter the requirements"/>
            </div>
            <a href="index.html" className="btn btn-my-primary btn-block">
                Save
            </a>
        </form>
    )
}
