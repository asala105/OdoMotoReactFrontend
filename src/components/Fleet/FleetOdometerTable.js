import React, {useState, useEffect} from 'react'
import api from '../../api'
import FuelOdometerItem from './FuelOdometerItem';

export default function FleetOdometerTable() {
        const [vehicles, setVehicles] = useState([]);
        function get_data(){
            api.VehicleData().then(function(response){
                console.log(response);
                setVehicles(response.data.data);
            }).catch((error)=>{
                console.log(error);
            })
        }
    
        function removeRow(id) {
            document.getElementById(id).remove();
          }
    
        useEffect(() => {
            get_data()
        }, []
        )
        return (
        <div className="table-responsive text-nowrap">
            <table className="table table-bordered" id="dataTable" width="100%">
                <thead>
                    <tr>
                        <th>Vehicle</th>
                        <th>Date</th>
                        <th>Odometer Before Trip</th>
                        <th>Odometer After Trip</th>
                        <th>Fuel Level Before Trip</th>
                        <th>Fuel Level After Trip</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map(vehicle => 
                        <FuelOdometerItem
                        onRemove={function decline() {
                            removeRow(vehicle.id);
                          }}
                         id={vehicle.id} 
                            driver ={vehicle.driver !==null? vehicle.driver.first_name + ' ' + vehicle.driver.last_name: " "}
                            category ={vehicle.category}
                            reg_code = {vehicle.registration_code}
                            plate = { vehicle.plate_number}
                            model = { vehicle.model}
                            weight = { vehicle.weight}
                    />)}
                </tbody>
            </table>
        </div>
        )
    }
    
