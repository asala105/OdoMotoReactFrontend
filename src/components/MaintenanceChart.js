import React from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

export default function MaintenanceChart() {
    // const chartlabels = props.labels;
    // const chartdata = props.data;
    return (
            <Bar  
                height= {200}
                width= {200}
                data= {{
                    labels:['car1', 'car2', 'car3', 'car4'],
                    datasets: [{
                        label: "Maintenance",
                        backgroundColor: "#005959",
                        hoverBackgroundColor: "#008080",
                        borderColor: "#005959",
                        data: [20,13,5,9],
                    }],
                }}
                options= {{}}
                />
    )
}