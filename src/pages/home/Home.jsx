import React from "react";
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sidebar/SideBar";
import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { userUrl } from "../../requestMethods";

const Home = () => {
    const [userStats, setUserStats] = useState([]);
    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    );

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userUrl.get("/users/stats");
                res.data.map((item) => {
                    return setUserStats((prev) => [
                        ...prev,
                        {
                            name: MONTHS[item._id - 1],
                            "Active User": item.tot,
                        },
                    ]);
                });
            } catch (err) {
                console.log(err);
            }
        };
        getStats();
    }, [MONTHS]);

    return (
        <>
            <TopBar />
            <div className="container">
                <SideBar />

                <div className="home">
                    <FeaturedInfo />
                    <Chart
                        data={userStats}
                        title="User Analytics"
                        grid
                        dataKey="Active User"
                    />
                    <div className="homeWidgets">
                        <WidgetSm />
                        <WidgetLg />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
