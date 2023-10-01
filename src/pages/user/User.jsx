import React from "react";
import "./user.css";
import { Link, useLocation } from "react-router-dom";
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentityOutlined,
    PhoneAndroid,
    Publish,
} from "@mui/icons-material";
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sidebar/SideBar";
import { useSelector } from "react-redux";

const User = () => {
    const location = useLocation();
    const userId = location.pathname.split("/")[2];
    const user = useSelector((state) =>
        state.users.users.find((user) => user._id === userId)
    );
    const profileImg = "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg";
    return (
        <>
            <TopBar />
            <div className="container">
                <SideBar />
                <div className="user">
                    <div className="userTitleContainer">
                        <h1 className="userTitle">Edit User</h1>
                        <Link to="/newUser">
                            <button className="userAddButton">Create</button>
                        </Link>
                    </div>
                    <div className="userContainer">
                        <div className="userShow">
                            <div className="userShowTop">
                                <img
                                    src={user.img ? user.img : profileImg}
                                    alt=""
                                    className="userShowImg"
                                />
                                <div className="userShowTopTitle">
                                    <div className="userShowUsername">
                                        {user.username}
                                    </div>
                                    <div className="userShowUserTitle">
                                        Software Developer
                                    </div>
                                </div>
                            </div>
                            <div className="userShowBottom">
                                <span className="userShowTitle">
                                    Account Details
                                </span>
                                <div className="userShowInfo">
                                    <PermIdentityOutlined className="userShowIcon" />
                                    <span className="userShowInfoTitle">
                                        {user.username}
                                    </span>
                                </div>
                                <div className="userShowInfo">
                                    <CalendarToday className="userShowIcon" />
                                    <span className="userShowInfoTitle">
                                        18 Nov 2003
                                    </span>
                                </div>
                                <span className="userShowTitle">
                                    Contact Details
                                </span>
                                <div className="userShowInfo">
                                    <PhoneAndroid className="userShowIcon" />
                                    <span className="userShowInfoTitle">
                                        9494430527
                                    </span>
                                </div>
                                <div className="userShowInfo">
                                    <MailOutline className="userShowIcon" />
                                    <span className="userShowInfoTitle">
                                        {user.username}@gmail.com
                                    </span>
                                </div>
                                <div className="userShowInfo">
                                    <LocationSearching className="userShowIcon" />
                                    <span className="userShowInfoTitle">
                                        Delhi, India
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="userUpdate">
                            <span className="userUpdateTitle">Edit</span>
                            <form className="userUpdateForm">
                                <div className="userUpdateLeft">
                                    <div className="userUpdateItem">
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            placeholder={user.username}
                                            className="userUpdateInput"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Anna Becker"
                                            className="userUpdateInput"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            placeholder={user.email}
                                            className="userUpdateInput"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Phone</label>
                                        <input
                                            type="text"
                                            placeholder="9494430527"
                                            className="userUpdateInput"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            placeholder="Delhi, India"
                                            className="userUpdateInput"
                                        />
                                    </div>
                                </div>
                                <div className="userUpdateRight">
                                    <div className="userUpdateUpload">
                                        <img
                                            src={user.img ? user.img : profileImg}
                                            alt=""
                                            className="userUpdateImg"
                                        />
                                        <label htmlFor="file">
                                            <Publish className="userUpdateIcon" />
                                        </label>
                                        <input
                                            type="file"
                                            name=""
                                            id="file"
                                            style={{ display: "none" }}
                                        />
                                    </div>
                                    <button className="userUpdateButton">
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;
