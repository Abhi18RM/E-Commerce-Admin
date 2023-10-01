import React from "react";
import "./newUser.css";
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sidebar/SideBar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/apiCalls";

const NewUser = () => {
    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        e.preventDefault();
        setInputs(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        addUser(inputs, dispatch);
    }

    return (
        <>
            <TopBar />
            <div className="container">
                <SideBar />
                <div className="newUser">
                    <h1 className="newUserTitle">New User</h1>
                    <form className="newUserForm">
                        <div className="newUserItem">
                            <label>Username</label>
                            <input name="username" type="text" placeholder="john" onChange={handleChange} />
                        </div>
                        <div className="newUserItem">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Smith" />
                        </div>
                        <div className="newUserItem">
                            <label>Email</label>
                            <input name="email" type="text" placeholder="john@gmail.com" onChange={handleChange} />
                        </div>
                        <div className="newUserItem">
                            <label>Password</label>
                            <input name="password" type="password" placeholder="password" onChange={handleChange} />
                        </div>
                        <button className="newUserButton" onClick={handleClick}>Create</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewUser;
