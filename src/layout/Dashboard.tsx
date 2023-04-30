import { useEffect, useState } from 'react';
import { PageHeader } from '../components';
import DataItem1 from '../components/dashboard/DataItem1';
import 'bootstrap/dist/css/bootstrap.min.css';
import { api } from '../api';
import MaintenanceChart from '../components/dashboard/MaintenanceChart';
import SideBar from '../components/navigation/SideBar'
import Navbar from '../components/navigation/Navbar';
import FuelChart from '../components/dashboard/FuelChart';
import { useSelector } from 'react-redux';

export function Dashboard() {
    const [smallData, setSmallData] = useState([]);
    const [maintenanceChartLabels, setMaintenanceChartLabels] = useState([]);
    const [maintenanceChartData, setMaintenanceChartData] = useState([]);
    const [fuelChartLabels, setFuelChartLabels] = useState([]);
    const [fuelChartData, setFuelChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    function get_data() {
        //     api.DashboardData().then(function(response){
        //         setSmallData(response.data.small_data);
        //         setMaintenanceChartLabels(response.data.maintenance_chart.ChartLabels);
        //         setMaintenanceChartData(response.data.maintenance_chart.ChartData);
        //         setFuelChartLabels(response.data.fuel_consumption.ChartLabels);
        //         setFuelChartData(response.data.fuel_consumption.ChartData);
        //         setLoading(false);
        //     }).catch((error)=>{
        //         console.log(error);
        //     })
    }
    // const token = useSelector((state) => state?.token);
    useEffect(() => {
        get_data();
    }, [])
    return (
        <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    <div className="container-fluid">
                        <PageHeader />
                        <div className="row">
                            {loading ? null :
                                smallData.map((item, index) => (
                                    <div key={item.title} className="col-xl-3 col-md-6 mb-4">
                                        <DataItem1 title={item.title} value={item.value} />
                                    </div>
                                ))}
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card shadow mb-4">
                                    <div
                                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-my-primary">Maintenance Rate</h6>
                                    </div>
                                    <div className="card-body">
                                        {loading ? <h6 className="m-0 text-my-primary">Loading...</h6> :
                                            <div className="chart-area">
                                                <MaintenanceChart MLabels={maintenanceChartLabels} MData={maintenanceChartData} />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card shadow mb-4">
                                    <div
                                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-my-primary">Fuel Consumption</h6>
                                    </div>
                                    <div className="card-body">
                                        {loading ? <h6 className="m-0 text-my-primary">Loading...</h6> :
                                            <div className="chart-area">
                                                <FuelChart FLabels={fuelChartLabels} FData={fuelChartData} />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
