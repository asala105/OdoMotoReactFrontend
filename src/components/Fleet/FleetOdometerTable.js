import { useState, useEffect } from 'react'
import { api } from '../../api';
import FuelOdometerItem from './FuelOdometerItem';

export default function FleetOdometerTable() {
    const [data, setData] = useState([]);
    function get_data() {
        api.getFuelOdometer()
            .then(function (response) {
                console.log(response);
                setData(response.data.data);
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
                        <th>Vehicle</th>
                        <th>Date</th>
                        <th>Odometer Before Trip</th>
                        <th>Odometer After Trip</th>
                        <th>Fuel Level Before Trip</th>
                        <th>Fuel Level After Trip</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item =>
                        <FuelOdometerItem
                            onRemove={function decline() {
                                removeRow(item.id);
                            }}
                            key={item.id}
                            id={item.id}
                            vehicle={item.vehicle !== null ? item.vehicle.registration_code : null}
                            date={item.vehicle !== null ? item.fleet.date : null}
                            fuel_before={item.fuel_before_trip}
                            fuel_after={item.fuel_after_trip}
                            odometer_before={item.odometer_before_trip}
                            odometer_after={item.odometer_after_trip}
                        />)}
                </tbody>
            </table>
        </div>
    )
}

