import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import DataItem1 from '../components/DataItem1';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from './../api';
import MaintenanceChart from '../components/MaintenanceChart';

const items = [
    {title: 'stat1', value: '40%'},
    {title: 'stat1', value: '40%'},
    {title: 'stat1', value: '40%'},
    {title: 'stat1', value: '40%'},];

export default function Dashboard() {
    const [data, setData] = useState([]);
    function get_data(){
        api.DashboardData().then(function(response){
            console.log(response);
            setData(response.data.small_data);
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
                {data.map((item) => (
                    <div className="col-xl-3 col-md-6 mb-4">
                        <DataItem1 title={item.title} value={item.value}/>
                    </div>
                ))}
            </div>
            <div className="row">
                        <div className="col-xl-8 col-lg-7">
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
                                        <MaintenanceChart/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-my-primary">Revenue Sources</h6>
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
                                    <div className="chart-pie pt-4 pb-2">
                                        <canvas id="myPieChart"></canvas>
                                    </div>
                                    <div className="mt-4 text-center small">
                                        <span className="mr-2">
                                            <i className="fas fa-circle text-my-primary"></i> Direct
                                        </span>
                                        <span className="mr-2">
                                            <i className="fas fa-circle text-success"></i> Social
                                        </span>
                                        <span className="mr-2">
                                            <i className="fas fa-circle text-info"></i> Referral
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}
