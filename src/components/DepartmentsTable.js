import React from 'react';

export default function DepartmentsTable(props) {
    
    return (
<tr id={props.id}>
    <td>{props.name}</td>
    <td>
        <a href="#" className="btn btn-danger btn-circle ml-1">
            <i className="fas fa-times"></i>
        </a>
    </td>
</tr>
    )
}
