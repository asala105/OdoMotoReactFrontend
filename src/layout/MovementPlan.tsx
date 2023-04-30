import FleetTable from '../components/Fleet/FleetTable'

export function MovementPlan() {
    return (
        <div>
            <div className="row" style={{ marginLeft: 10, marginRight: 10 }}>
                <div className="col">
                    <div className="card shadow mb-4">
                        <FleetTable />
                    </div>
                </div>
            </div>
        </div>
    )
}
