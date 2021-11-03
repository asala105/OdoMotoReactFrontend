import axios from 'axios';

const BASE_URL = 'https://odomoto.tk/api';

const cookie = localStorage.getItem('access_token');

const token = {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + cookie,
        'Access-Control-Allow-Origin': '*'
    },
}

export default{

    Login: (login) =>
    axios.post(`${BASE_URL}/login`,login),

    RegisterOrganization: (data) =>
    axios.post(`${BASE_URL}/register_organization`, data, token),

    RegisterDepartment: (data) =>
    axios.post(`${BASE_URL}/add_department`, data, token),

    RegisterAdmin: (data) =>
    axios.post(`${BASE_URL}/register`, data),

    RegisterUser: (data) =>
    axios.post(`${BASE_URL}/register`, data, token),

    DashboardData: () =>
    axios.get(`${BASE_URL}/dashboard`,token),

    userData: () =>
    axios.get(`${BASE_URL}/get_users`,token),

    departmentData: () =>
    axios.get(`${BASE_URL}/get_departments`,token),

    VehicleData: () =>
    axios.get(`${BASE_URL}/view_vehicles`,token),

    deleteVehicle: (id) =>
    axios.get(`${BASE_URL}/delete_vehicle/${id}`,token),

    driverData: () =>
    axios.get(`${BASE_URL}/get_drivers`,token),

    deleteUser: (id) =>
    axios.get(`${BASE_URL}/delete_user/${id}`,token),

    getInspectionTasks: (date) =>
    axios.get(`${BASE_URL}/get_inspection_task/${date}`,token),

    addInspectionTask: (data) =>
    axios.post(`${BASE_URL}/add_inspection_task`, data, token),

    deleteTask: (id) =>
    axios.get(`${BASE_URL}/delete_inspection_task/${id}`, token),

    markTaskDone: (id) =>
    axios.get(`${BASE_URL}/mark_task_done/${id}`, token),

    getAttendance: (data) =>
    axios.post(`${BASE_URL}/attendance_records`,data,token),

    getAttendanceByDate: (date) =>
    axios.get(`${BASE_URL}/attendance_records_date/${date}`,token),

    getLeaves: (data) =>
    axios.post(`${BASE_URL}/leaves_records`,data,token),

    addVehicle: (data) =>
    axios.post(`${BASE_URL}/add_vehicle`,data,token),

    getFilteredLeaves: (data) =>
    axios.post(`${BASE_URL}/get_filtered_leaves`,data,token),

    FleetData: () =>
    axios.get(`${BASE_URL}/fleet_requests`,token)
}