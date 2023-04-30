import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { api } from '../../api';;

export default function AddVehicleForm() {
    const user = useSelector((state) => state?.user);
    const [recNum, setRecNum] = useState('');
    const [plate, setPlate] = useState('');
    const [fuel, setFuel] = useState('');
    const [odometer, setOdometer] = useState('');
    const [model, setModel] = useState('');
    const [weight, setWeight] = useState('');
    const [category, setCategory] = useState('');
    const [driver, setDriver] = useState('');
    const [ownership, setOwnership] = useState('');
    const [licenseReq, setLicenseReq] = useState('');
    const [driverList, setDriverList] = useState([]);
    const [organization, setOrganization] = useState(user?.userProfile?.organization_id ? user.userProfile.organization_id : null);
    const [error, setError] = useState('');
    const history = useHistory();

    function handleSubmit() {
        let dataToSend = {
            registration_code: recNum,
            plate_number: plate,
            category: category,
            driver_id: driver,
            model: model,
            weight: weight,
            odometer: odometer,
            fuel_level: fuel,
            is_rented: ownership,
            driver_license_requirements: licenseReq,
            organization_id: organization
        };
        console.log(dataToSend);
        api.addVehicle(dataToSend)
            .then((response) => {
                console.log('Added successfully');
                history.push('/vehicles_list');
            })
            .catch((error) => {
                console.log(error);
            });
    }
    function getData() {
        api.driverData()
            .then(function (response) {
                setDriverList(response.data.data);
            })
            .catch((error) => {
                console.log('error', error);
            })
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <form className="user" action="/vehicles_list">
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="rcode" className="label">Registration Code</label>
                    <input type="text" className="form-control"
                        id="rcode" placeholder="Enter the registration code"
                        onChange={(event) => { setRecNum(event.target.value) }} required />
                </div>
                <div className="form-group col">
                    <label htmlFor="plate" className="label">Plate Number</label>
                    <input type="text" className="form-control"
                        id="plate" placeholder="Enter the plate number"
                        onChange={(event) => { setPlate(event.target.value) }} required />
                </div>
            </div>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="model" className="label">Car Model</label>
                    <input type="text" className="form-control"
                        id="model" placeholder="Enter the car model and year"
                        onChange={(event) => { setModel(event.target.value) }} required />
                </div>
                <div className="form-group col">
                    <label htmlFor="date" className="label">Category</label>
                    <select className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(event) => { setCategory(event.target.value) }}>
                        <option >Select the category of the vehicle</option>
                        <option value="Car">Car</option>
                        <option value="Van">Van</option>
                        <option value="4x4">4x4</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="date" className="label">Ownership status</label>
                <div className="btn-secondary btn-group btn-group-toggle btn-block rounded" data-toggle="buttons" onClick={(event) => { setOwnership(event.target.value) }}>
                    <label className="btn btn-secondary active" style={{ width: '50%' }}>
                        <input type="radio" name="options" id="option1" value='0' /> Owned
                    </label>
                    <label className="btn btn-secondary" style={{ width: '50%' }}>
                        <input type="radio" name="options" id="option2" value='1' /> Rented
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="odometer" className="label">Odometer at the time of rental/ownership (Km)</label>
                    <input type="text" className="form-control"
                        id="odometer" placeholder="Enter the odometer value in Km"
                        onChange={(event) => { setOdometer(event.target.value) }} required />
                </div>
                <div className="form-group col">
                    <label htmlFor="fuel" className="label">Fuel level at the time of rental/ownership (Liters)</label>
                    <input type="text" className="form-control"
                        id="fuel" placeholder="Enter the fuel level in liters"
                        onChange={(event) => { setFuel(event.target.value); console.log(event.target.value) }} required />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="weight" className="label">Gross Weight (Kg)</label>
                <input type="text" className="form-control"
                    id="weight" placeholder="Enter the gross weight in Kg"
                    onChange={(event) => { setWeight(event.target.value) }} required />
            </div>
            <div className="form-group">
                <label htmlFor="date" className="label">Driver</label>
                <select className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(event) => { setDriver(event.target.value) }}>
                    <option >Select the driver's name</option>
                    {driverList.map((driver) =>
                        <option key={driver.id} value={driver.id}>{driver.first_name + " " + driver.last_name}</option>
                    )}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="license" className="label">Driver License Requirements</label>
                <input type="text" className="form-control"
                    id="license" placeholder="Enter the requirements"
                    onChange={(event) => { setLicenseReq(event.target.value) }} required />
            </div>
            <a className="btn btn-my-primary btn-block" onClick={handleSubmit}>
                Save
            </a>
        </form>
    )
}
