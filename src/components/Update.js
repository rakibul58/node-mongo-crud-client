import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser);
    const handleUpdateUser = event => {
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/users/${storedUser._id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                alert('user updated');
                console.log(data);
            }
        })

        
    }

    const handleInputChange = event => {

        const field = event.target.name;
        const value = event.target.value;

        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);

    }
    return (
        <div>
            <h1>update user: {storedUser.name}</h1>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} type="text"  name='name' defaultValue={storedUser.name} placeholder='name' /><br />
                <input onChange={handleInputChange} type="email" name="email" defaultValue={storedUser.email} placeholder='email' id="" /><br />
                <input onChange={handleInputChange} type="text" name="address" defaultValue={storedUser.address} placeholder='address' id="" /><br />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default Update;