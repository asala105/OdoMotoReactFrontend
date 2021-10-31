import React from 'react'
import {Bar} from 'react-chartjs-2'

export default function MaintenanceChart(props) {
    const chartLabels = props.MLabels;
    const chartData = props.MData;
    return (
            <Bar  
                height= {50}
                width= {50}
                data= {{
                    labels:chartLabels,
                    datasets: [{
                        label: "Maintenance",
                        backgroundColor: ["#005959"],
                        hoverBackgroundColor: "#008080",
                        borderColor: "#005959",
                        data: chartData,
                    }],
                }}
                options= {{
                    responsive: true,
                    maintainAspectRatio: false
                }}
                />
    )
}