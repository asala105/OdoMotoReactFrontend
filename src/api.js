import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

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

    Logout: () =>
    axios.get(`${BASE_URL}/logout`, token),

    RegisterOrganization: (data) =>
    axios.post(`${BASE_URL}/register_organization`, data),

    RegisterDepartment: (data) =>
    axios.post(`${BASE_URL}/add_department`, data),

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
    axios.get(`${BASE_URL}/fleet_requests`,token),

    getNotifications: ()=>
    axios.get(`${BASE_URL}/get_notifications`,token),

    markRead: (id)=>
    axios.get(`${BASE_URL}/mark_read/${id}`,token),

    rejectAttendance: (id) =>
    axios.get(`${BASE_URL}/reject_attendance/${id}`,token),

    rejectLeave: (id) =>
    axios.get(`${BASE_URL}/reject_leave/${id}`,token),

    acceptAttendanceByManager: (id) =>
    axios.get(`${BASE_URL}/approve_attendance/${id}`, token),

    acceptAttendanceByHR: (id) =>
    axios.get(`${BASE_URL}/approve_attendance_hr/${id}`, token),

    acceptLeaveByManager: (id) =>
    axios.get(`${BASE_URL}/approve_leave/${id}`, token),

    acceptLeaveByHR: (id) =>
    axios.get(`${BASE_URL}/approve_leave_hr/${id}`, token),

    getFuelOdometer: () =>
    axios.get(`${BASE_URL}/fuel_odometer_values`,token),
    
    generatePlan: () =>
    axios.get(`${BASE_URL}/auto_generate`,token)
}