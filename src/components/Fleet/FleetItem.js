import React from 'react'

export default function FleetItem(props) {
    return (
        <tr id={props.id}>
            <td>{props.department}</td>
            <td>{props.date}</td>
            <td>{props.start}</td>
            <td>{props.end}</td>
            <td>{props.purpose}</td>
            <td>{props.from}</td>
            <td>{props.to}</td>
            <td>{props.vehicle}</td>
            <td>{props.driver}</td>
        </tr>
    )
}
