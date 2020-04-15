import React, { useEffect, useState } from 'react';
import axios from 'axios';

import UserDisplay from './UserDisplay';

const UserFetch = () => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const getUserData = () => {
            axios.get('https://api.github.com/users/Benjamin-Earley')
                .then(userInfo => {
                    console.log(userInfo.data)
                    setUserData(userInfo.data)
                })
                .catch(err => {
                    console.log(`Error: ${err}`)
                })
        };
        getUserData();
    }, []);
    
    return(
        <div>
            <UserDisplay login={userData.login} />
        </div>
    );
};

export default UserFetch