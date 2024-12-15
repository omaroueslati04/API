import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const UserList = () => {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        const afficherusers = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(response.data);
            } catch (error) {
                console.error("error fetching users", error);
            }
        };
        afficherusers();
    }, []);

    return (
        <div>
            {
                Users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))
            }
        </div>
    );
};

export default UserList;
