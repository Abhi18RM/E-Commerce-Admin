import React from "react";
import "./widgetLg.css";
import { useState } from "react";
import { useEffect } from "react";
import { userUrl } from "../../requestMethods";
import Moment from "react-moment";

const WidgetLg = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userUrl.get("/orders/latest");
                setOrders(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUsers();
    }, []);

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr className="widgetLgTr" key={order._id}>
                            <td className="widgetLgUser">
                                {/* <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                                alt=""
                                className="widgetLgImg"
                            /> */}
                                <span className="widgetLgName">{order.userId}</span>
                            </td>
                            <td className="widgetLgDate">
                                <Moment format="DD-MM-YYYY HH:mm">
                                    {order.createdAt}
                                </Moment>
                            </td>
                            <td className="widgetLgAmount">{order.amount}</td>
                            <td className="widgetLgStatus">
                                <Button type={order.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WidgetLg;
