import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();

    return (
        <div>
            <h2>All user: {users.length}</h2>
            {
                users.map(user => <p key={user._id}>{user.email}</p>)
            }
        </div>
    );
};

export default Home;