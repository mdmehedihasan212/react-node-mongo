import React, { useEffect, useState } from 'react';
import Adduser from '../Adduser/Adduser';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleUserDelete = id => {
        const process = window.confirm('Are you sure delete');
        if (process) {
            console.log('this is delete user', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const reaming = users.filter(user => user._id !== id)
                        setUsers(reaming);
                    }
                })
        }
    }

    return (
        <div>
            <h1>Available now: {users.length}</h1>
            <Adduser></Adduser>
            <ul>
                {
                    users.map(user => <li key={user._id}>
                        Name: {user.name}:: Email: {user.email}
                        <button onClick={() => handleUserDelete(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;