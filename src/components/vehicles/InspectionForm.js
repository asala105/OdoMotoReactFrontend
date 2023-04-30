import {useState,useEffect} from 'react'
import { api } from '../../api';;

export default function InspectionForm() {
    const [driversNames, setDriversNames] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [date, setDate] = useState(new Date());
    const [type, setType] = useState(0);
    const [driver, setDriver] = useState(null);
    const [vehicle, setVehicle] = useState(null);
    const [error, setError] = useState('');

    function handleSubmit(){
        console.log('Submit');
        if(driver === null || vehicle === null){
            setError('All fields are required');
        }
        else{
            let dataToSend = {
                date: date,
                inspection_type: type,
                driver_id: driver,
                vehicle_id: vehicle,
            };
            api.addInspectionTask(dataToSend)
            .then((response) => {
                console.log('Added successfully')
            })
            .catch((error) => {
                console.log(error);
            });
            
            console.log(dataToSend);
        }
    }
    function getData(){
        api.driverData()
        .then(function(response){
            setDriversNames(response.data.data);
        })
        .catch((error)=>{
            console.log('error', error);
        })

        api.VehicleData()
        .then(function(response){
            setVehicles(response.data.data);
        })
        .catch((error)=>{
            console.log('error', error);
        })
    }

    useEffect(() => {
        getData();
    },[])

    return (
        <form className="user">
            <div className="form-group row">
                <div className="col-5">
                <label htmlFor="date" style={{ paddingLeft: 10 }}>Inspection Date</label>
                </div>
                <div className="col-7">
                <input type="date" className="form-control"
                    id="date" onChange={(event)=>{setDate(event.target.value);}}/>
                    </div>
            </div>
            <div className="form-group">
                <label htmlFor="date" style={{ paddingLeft: 10 }}>Inspection Type</label>
                <div className="btn-secondary btn-group btn-group-toggle btn-block rounded" data-toggle="buttons" onClick={(event)=>{setType(event.target.value);}}>
                    <label className="btn btn-secondary active" style={{ width:'50%' }}>
                        <input type="radio" name="options" id="option1" value='0' /> Safety Check
                    </label>
                    <label className="btn btn-secondary" style={{ width:'50%' }}>
                        <input type="radio" name="options" id="option2" value='1'/> Maintenance
                    </label>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-5">
                <label htmlFor="date" style={{ paddingLeft: 10 }}>Driver's Name</label>
                </div>
                <div className="col-7">
                <select className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(event)=>{setDriver(event.target.value);}}>
                    <option velue='null'>Select the driver's name</option>
                    {driversNames.map((driver)=>
                    <option key={driver.id} value={driver.id}>{driver.first_name + " " + driver.last_name}</option>
                    )}
                </select>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-5">
                <label htmlFor="date" style={{ paddingLeft: 10 }}>Vehicle ID</label>
                </div>
                <div className="col-7">
                <select className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(event)=>{setVehicle(event.target.value);}}>
                    <option value='null'>Select the vehicle's id</option>
                    {vehicles.map((vehicle) => 
                        <option key={vehicle.id} value={vehicle.id}>{vehicle.registration_code}</option>
                    )}
                </select>
                </div>
            </div>
            <a className="btn btn-my-primary btn-block" onClick={handleSubmit}>
                Save To Calendar
            </a>
        </form>
    )
}
