import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);

    const handleDelete = user => {
        const { _id, name } = user;
        const agree = window.confirm(`Are you confirm to delete ${name}?`);
        if (agree) {
            fetch(`http://localhost:5000/users/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("User Deleted Successfully");
                        const remainingUsers = displayUsers.filter(usr => usr._id !== _id);
                        setDisplayUsers(remainingUsers);
                    }
                })
        }
    }

    return (
        <div>
            <h2>All user: {displayUsers.length}</h2>
            {
                displayUsers.map(user => <p key={user._id}>
                    {user.email} <button onClick={() => handleDelete(user)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Home;