import React, { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { userUrl } from "../../requestMethods";
import { Link } from "react-router-dom";

const WidgetSm = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userUrl.get("/users");
                setUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUsers();
    }, []);

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {users.map((user) => (
                    <li className="widgetSmListItem" key={user._id}>
                        <img
                            src={
                                user.img
                                    ? user.img
                                    : "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
                            }
                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <div className="widgetSmUserTitle">
                                {user.username}
                            </div>
                        </div>
                        <Link to={`/user/${user._id}`} style={{ textDecoration: "none", color: "black" }}>
                            <button className="widgetSmBtn">
                                <Visibility className="widgetSmIcon" />
                                <p>Display</p>
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WidgetSm;
