import React from "react";

class UserProfile extends React.Component {
    render() {
        return (
            <p>{this.props.user.name}</p>
        )
    }
}

export default UserProfile