import UsersTable from '../components/users/UsersTable';

export function UsersList() {
    return (
        <div>
            <div className="row" style={{ marginLeft: 10, marginRight: 10 }}>
                <div className="col">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-my-primary">Users List</h6>
                        </div>
                        <div className="card-body">
                            <UsersTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
