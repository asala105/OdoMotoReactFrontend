import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import DataItem1 from '../components/dashboard/DataItem1';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from './../api';
import MaintenanceChart from '../components/dashboard/MaintenanceChart';
import { saveAs } from 'file-saver';

export default function Dashboard() {
    const [smallData, setSmallData] = useState([]);
    const [maintenanceChartLabels, setMaintenanceChartLabels] = useState([]);
    const [maintenanceChartData, setMaintenanceChartData] = useState([]);
    function get_data(){
        api.DashboardData().then(function(response){
            console.log(response);
            setSmallData(response.data.small_data);
            setMaintenanceChartLabels(response.data.maintenance_chart.ChartLabels);
            setMaintenanceChartData(response.data.maintenance_chart.ChartData);
        }).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(() => {
        get_data()
    }, []
    )
    return (
        <div className="container-fluid">
            <PageHeader />
            <div className="row">
                {smallData.map((item) => (
                    <div className="col-xl-3 col-md-6 mb-4">
                        <DataItem1 title={item.title} value={item.value}/>
                    </div>
                ))}
            </div>
            <div className="row">
                        <div className="col">
                            <div className="card shadow mb-4">
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-my-primary">Earnings Overview</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area">
                                        <MaintenanceChart MLabels={maintenanceChartLabels} MData={maintenanceChartData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}
