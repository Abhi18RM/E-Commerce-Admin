import React from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import { userUrl } from "../../requestMethods";

const FeaturedInfo = () => {
    const [income, setIncome] = useState([]);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userUrl.get("/orders/income");
                setIncome(res.data);
                setPercentage(
                    (res.data[1].total * 100) / res.data[0].total - 100
                );
            } catch (err) {
                console.log(err);
            }
        };
        getIncome();
    }, []);

    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">${income[1]?.total}</span>
                    <span className="featuredMoneyRate">
                        {percentage.toFixed(2)}%
                        {percentage > 0 ? (
                            <ArrowUpward className="featuredIcon positive" />
                        ) : (
                            <ArrowDownward className="featuredIcon negative" />
                        )}
                    </span>
                </div>
                <span className="featuredSub">Compared to previous month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">
                        -13.4
                        <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to previous month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to previous month</span>
            </div>
        </div>
    );
};

export default FeaturedInfo;
