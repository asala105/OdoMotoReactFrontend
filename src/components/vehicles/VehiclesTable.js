import { useState, useEffect } from 'react'
import { api } from '../../api';
import VehicleItem from './VehicleItem';

export default function VehiclesTable() {
    const [vehicles, setVehicles] = useState([]);
    function get_data() {
        api.VehicleData().then(function (response) {
            setVehicles(response.data.data);
        }).catch((error) => {
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
                        <th>Driver</th>
                        <th>Category</th>
                        <th>Registration code</th>
                        <th>Plate</th>
                        <th>Model</th>
                        <th>Gross Weight</th>
                        <th>Odometer</th>
                        <th>Fuel</th>
                        <th>Ownership</th>
                        <th>Driver License Requirements</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map(vehicle =>
                        <VehicleItem
                            key={vehicle.id}
                            onRemove={removeRow}
                            id={vehicle.id}
                            driver={vehicle.driver !== null ? vehicle.driver.first_name + ' ' + vehicle.driver.last_name : " "}
                            category={vehicle.category}
                            reg_code={vehicle.registration_code}
                            plate={vehicle.plate_number}
                            model={vehicle.model}
                            weight={vehicle.weight}
                            odometer={vehicle.odometer}
                            fuel={vehicle.fuel_level}
                            ownership={vehicle.is_rented}
                            extra_reqs={vehicle.driver_license_requirements}
                        />)}
                </tbody>
            </table>
        </div>
    )
}
