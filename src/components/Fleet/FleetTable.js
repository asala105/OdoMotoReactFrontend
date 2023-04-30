import { useState, useEffect } from 'react'
import { api } from '../../api';
import FleetItem from './FleetItem';

export default function FleetTable() {
    const [fleet, setFleet] = useState([]);
    function handleGenerate() {
        api.generatePlan()
            .then((response) => {
                console.log(response.data);
                setFleet(response.data.generated);
            }
            )
            .catch((error) => { console.log(error) });
    }
    function get_data() {
        api.FleetData().then(function (response) {
            console.log(response);
            setFleet(response.data.Fleet);
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
        <><div className="card-header py-3 align-items-center justify-content-between d-sm-flex">
            <h6 className="m-0 font-weight-bold text-my-primary">Fleet Request For Tomorrow</h6>
            <button className="d-none d-sm-inline-block btn btn-sm btn-my-primary shadow-sm" onClick={handleGenerate}>
                <i className="fas fa-clipboard-list fa-sm text-white-50 m-1"></i>
                Generate Plan</button>
        </div>
            <div className="card-body">
                <div className="table-responsive text-nowrap">
                    <table className="table table-bordered" id="dataTable" width="100%">
                        <thead>
                            <tr>
                                <th>Department</th>
                                <th>Date</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Purpose</th>
                                <th>From Location</th>
                                <th>To Location</th>
                                <th>Vehicle</th>
                                <th>Driver</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fleet.map(request =>
                                <FleetItem
                                    key={request.id}
                                    id={request.id}
                                    department={request.department.name}
                                    date={request.date}
                                    start={request.start_time}
                                    end={request.end_time}
                                    purpose={request.purpose}
                                    from={request.destinations.length !== 0 ? request.destinations[0].location_from : ""}
                                    to={request.destinations.length !== 0 ? request.destinations[0].location_to : ""}
                                    driver={request.driver !== null ? request.driver.first_name + ' ' + request.driver.last_name : ""}
                                    vehicle={request.vehicle !== null ? request.vehicle.registration_code : ''}

                                />)}
                        </tbody>
                    </table>
                </div>
            </div></>
    )
}
