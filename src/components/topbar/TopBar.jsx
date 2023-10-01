import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { NotificationsNone, Settings } from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/apiCalls";

const TopBar = () => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        logOut(dispatch);
    }

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="topbarLeft">
                        <span className="logo">ABHI.</span>
                    </div>
                </Link>
                <div className="topbarRight">
                    <div className="topbarIconConatiner">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconConatiner">
                        <Settings />
                    </div>
                    <div className="topbarIconConatiner">
                        <LogoutIcon style={{ cursor: "pointer" }} onClick={handleLogOut} />
                    </div>
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                        alt=""
                        className="topAvatar"
                    />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
