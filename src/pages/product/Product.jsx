import React from "react";
import "./product.css";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { Publish } from "@mui/icons-material";
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sidebar/SideBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { userUrl } from "../../requestMethods";

const Product = () => {
    const [pStats, setProductStats] = useState([]);
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const product = useSelector((state) =>
        state.product.products.find((product) => product._id === productId)
    );

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
                const res = await userUrl.get(
                    "/orders/income?pid=" + productId
                );
                res.data.map((item) =>
                    setProductStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], Sales: item.total },
                    ])
                );
            } catch (err) {
                console.log(err);
            }
        };
        getStats();
    }, [productId, MONTHS]);

    return (
        <>
            <TopBar />
            <div className="container">
                <SideBar />
                <div className="product">
                    <div className="productTitleContainer">
                        <h1 className="productTitle">Product</h1>
                        <Link to="/newProduct">
                            <button className="productAddButton">Create</button>
                        </Link>
                    </div>
                    <div className="productTop">
                        <div className="productTopLeft">
                            <Chart
                                data={pStats}
                                dataKey="Sales"
                                title="Sales Performance"
                            />
                        </div>
                        <div className="productTopRight">
                            <div className="productInfoTop">
                                <img
                                    src={product.img}
                                    alt=""
                                    className="productInfoImg"
                                />
                                <span className="productName">
                                    {product.title}
                                </span>
                            </div>
                            <div className="productInfoBottom">
                                <div className="productInfoItem">
                                    <span className="productInfoKey">id:</span>
                                    <span className="productInfoValue">
                                        {product._id}
                                    </span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">
                                        Description
                                    </span>
                                    <span className="productInfoValue">
                                        {product.description}
                                    </span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">
                                        Price:
                                    </span>
                                    <span className="productInfoValue">
                                        {product.price}
                                    </span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">
                                        Sales:
                                    </span>
                                    <span className="productInfoValue">
                                        5334
                                    </span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">
                                        Instock:
                                    </span>
                                    <span className="productInfoValue">
                                        {product.inStock ? "yes" : "no"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productBottom">
                        <div className="productForm">
                            <div className="productFormLeft">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    placeholder={product.title}
                                />
                                <label>Product Description</label>
                                <input
                                    type="text"
                                    placeholder={product.description}
                                />
                                <label>Price</label>
                                <input
                                    type="text"
                                    placeholder={product.price}
                                />
                                <label>In Stock</label>
                                <select name="inStock" id="inStock">
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div className="productFormRight">
                                <div className="productUpload">
                                    <img
                                        src={product.img}
                                        alt=""
                                        className="productUploadImg"
                                    />
                                    <label htmlFor="file">
                                        <Publish />
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        style={{ display: "none" }}
                                    />
                                </div>
                                <button className="productButton">
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
