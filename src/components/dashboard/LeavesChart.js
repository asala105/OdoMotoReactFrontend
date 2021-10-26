import React from 'react'
import {Line} from 'react-chartjs-2'

export default function LeavesChart() {
    const chartLabels = props.FLabels;
    const chartData = props.FData;
    return (
        <Line  
                height= {50}
                width= {50}
                data= {{
                    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: "Maintenance",
                        backgroundColor: ["#005959"],
                        hoverBackgroundColor: "#008080",
                        borderColor: "#005959",
                        data: chartData,
                    }],
                }}
                options= {{}}
                />
    )
}
