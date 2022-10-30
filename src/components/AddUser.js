import React, { useState } from 'react';

const AddUser = () => {

    const [user , setUser] = useState({});
    const handleAddUser = event =>{
        event.preventDefault();
        // console.log(user);

        fetch('http://localhost:5000/users/' , {
            method: 'POST' ,
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            event.target.reset();
        })
    }

    const handleBlur = event =>{

        const field = event.target.name;
        const value = event.target.value;

        const newUser = {...user};
        newUser[field] = value;

        setUser(newUser);
        
    }
    return (
        <div>
            <h3>please add users</h3>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleBlur} type="text" name='name' placeholder='name' /><br />
                <input onBlur={handleBlur} type="email" name="email" placeholder='email' id="" /><br />
                <input onBlur={handleBlur} type="text" name="address" placeholder='address' id="" /><br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;