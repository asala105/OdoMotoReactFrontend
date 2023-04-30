import AddUserForm from '../components/users/AddUserForm'
import DepartmentsTable from '../components/DepartmentsTable'
import DepartmentsForm from '../components/DepartmentsForm'
import { useState, useEffect } from 'react'
import { api } from '../api';

export function AddUser() {
    const [departmentList, setDepartmentList] = useState([]);
    function getData() {
        // api.departmentData()
        //     .then(function (response) {
        //         console.log(response.data)
        //         setDepartmentList(response.data.data);
        //     })
        //     .catch((error) => {
        //         console.log('error', error);
        //     })
        return
    }
    function appendValue(value) {
        setDepartmentList(oldArray => [...oldArray, value])
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <div className="row" style={{ marginLeft: 10, marginRight: 10 }}>
                <div className="col-xl-6 col-lg-5 col">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-my-primary">Departments</h6>
                        </div>
                        <div className="card-body align-items-center">
                            <div className="chart-area center">
                                <div className="table-responsive text-nowrap">
                                    <table className="table table-bordered" id="dataTable" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Department</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {departmentList.map(department =>
                                                <DepartmentsTable id={department.id} name={department.name} />
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                    <div className="card shadow mb-4 align-content-center justify-content-around">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-my-primary">Add New Department</h6>
                        </div>
                        <div className="card-body">
                            <div className="chart-area center">
                                <DepartmentsForm callback={appendValue} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginLeft: 10, marginRight: 10 }}>
                <div className="col">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-my-primary">Add User</h6>
                        </div>
                        <div className="card-body">
                            <AddUserForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
