import React from 'react'

export default function LeavesItem(props) {
    return (
        <tr>
            <td>{props.driver}</td>
            <td>{props.from}</td>
            <td>{props.till}</td>
            <td>{props.type}</td>
            <td>
                <a href="#" className="btn btn-success btn-circle mr-1">
                    <i className="fas fa-check"></i>
                </a>
                <a href="#" className="btn btn-danger btn-circle ml-1">
                    <i className="fas fa-times"></i>
                </a>
            </td>
        </tr>
    )
}
