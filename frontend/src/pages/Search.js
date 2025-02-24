import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error.response.data);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Search for Matches</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
