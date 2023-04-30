import { api } from '../../api';

export default function FuelOdometerItem(props) {
    function handleDelete(id){
        api.deleteVehicle(id)
        .then((response) => {
            console.log(response.data);
            props.onRemove();
        })
        .catch((error) => {
            alert("Oops! An error has occurred :(");
        });
    }
    return (
        <tr id={props.id}>
            <td>{props.vehicle}</td>
            <td>{props.date}</td>
            <td>{props.odometer_before}</td>
            <td>{props.odometer_after}</td>
            <td>{props.fuel_before}</td>
            <td>{props.fuel_after}</td>
        </tr>
    )
}
