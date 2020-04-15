import React from 'react';

const UserDisplay = props => {
    return (
        <div>
            {`Username: ${props.login}`}
        </div>
    );
};

export default UserDisplay;