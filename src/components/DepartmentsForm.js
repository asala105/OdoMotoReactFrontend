import React, {useState} from 'react'
import api from '../api';

export default function DepartmentsForm(props) {
    const [department, setDepartment] = useState('');
    function handleSubmit(){
        let dataToSend = {
            name: department
        };
        api.RegisterDepartment2(dataToSend)
        .then((response)=>{
            console.log(response.data);
            props.callback(response.data.department)
        })
        .catch(error=>console.log(error));
    }
    return (
        <form className="user center justify-content-center">
            <div className="form-group">
                <label htmlFor="date" style={{ paddingLeft: 5 }}>Name of the Department</label>
                <input type="text" className="form-control"
                    id="text" onChange={(event)=>{setDepartment(event.target.value);}}/>
            </div>
            <a className="btn btn-my-primary btn-block" onClick={handleSubmit}>
                Save
            </a>
        </form>
    )
}
