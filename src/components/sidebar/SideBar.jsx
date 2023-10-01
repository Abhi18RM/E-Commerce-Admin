import React, { useState } from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import {
    AttachMoney,
    BarChart,
    DynamicFeed,
    LineStyle,
    MailOutline,
    MessageOutlined,
    PersonOutline,
    Report,
    Storefront,
    Timeline,
    TrendingUp,
    WorkOutline,
} from "@mui/icons-material";
import { useEffect } from "react";

const SideBar = () => {
    const location = useLocation();
    const [activeHome, setActiveHome] = useState(false);
    const [activeUsers, setActiveUsers] = useState(false);
    const [activeProducts, setActiveProducts] = useState(false);

    useEffect(() => {
        const currentPath = location.pathname;
        setActiveHome(currentPath === "/");
        setActiveUsers(currentPath === "/users");
        setActiveProducts(currentPath === "/products");
    }, [location]);

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Dashboard</div>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className={`sidebarListItem ${activeHome && "active"}`}>
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Quick Menu</div>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className={`sidebarListItem ${activeUsers && "active"}`}>
                                <PersonOutline className="sidebarIcon" />
                                Users
                            </li>
                        </Link>

                        <Link to="/products" className="link">
                            <li className={`sidebarListItem ${activeProducts && "active"}`}>
                                <Storefront className="sidebarIcon" />
                                Products
                            </li>
                        </Link>

                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Notifications</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <MessageOutlined className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Staff</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
