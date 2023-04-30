import ProfileItem from '../components/users/ProfileItem';

export function Profile() {

    return (
        <div>
            <div className="row" style={{ marginLeft: 10, marginRight: 10 }}>
                <div className="col">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-my-primary">User Profile</h6>
                        </div>
                        <div className="card-body">
                            <ProfileItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
