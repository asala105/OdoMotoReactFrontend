import FleetOdometerTable from '../components/Fleet/FleetOdometerTable'

export function FuelAndOdometerData() {
    return (
        <div>
            <div className="row" style={{ marginLeft: 10, marginRight: 10 }}>
                <div className="col">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-my-primary">Fuel and Odometer data</h6>
                        </div>
                        <div className="card-body">
                            <FleetOdometerTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
