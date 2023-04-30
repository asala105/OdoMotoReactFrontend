import {Bar} from 'react-chartjs-2'

export default function LeavesChart(props) {
    const chartLabels = props.FLabels;
    const chartData = props.FData;
    return (
        <Bar  
                height= {50}
                width= {50}
                data= {{
                    labels:chartLabels,
                    datasets: [{
                        label: "Average Fuel consumption liter/100km",
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
