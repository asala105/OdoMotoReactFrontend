import DriversTable from '../components/users/DriversTable';
import SideBar from '../components/navigation/SideBar'
import Navbar from '../components/navigation/Navbar'

export function DriverList() {
    return (
        <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Navbar />
        <div className="row" style={{ marginLeft:10, marginRight:10 }}>
            <div className="col">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-my-primary">Drivers List</h6>
                    </div>
                    <div className="card-body">
                        <DriversTable/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}
