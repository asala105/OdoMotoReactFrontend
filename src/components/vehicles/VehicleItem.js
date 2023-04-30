import { api } from '../../api';

export default function VehicleItem(props) {
    function handleDelete(id){
        api.deleteVehicle(id)
        .then((response) => {
            console.log(response.data);
            props.onRemove(id);
        })
        .catch((error) => {
            alert("Oops! An error has occurred :(");
        });
    }
    return (
        <tr id={props.id}>
            <td>{props.driver}</td>
            <td>{props.category}</td>
            <td>{props.reg_code}</td>
            <td>{props.plate}</td>
            <td>{props.model}</td>
            <td>{props.weight}</td>
            <td>{props.odometer}</td>
            <td>{props.fuel}</td>
            <td>{props.ownership}</td>
            <td>{props.extra_reqs}</td>
            <td>
                <a href="#" className="btn btn-success btn-circle mr-1">
                    <i className="fas fa-edit"></i>
                </a>
                <a href="#" className="btn btn-danger btn-circle ml-1" onClick={()=> handleDelete(props.id)}>
                    <i className="fas fa-times"></i>
                </a>
            </td>
        </tr>
    )
}
