import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sidebar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getProduct } from "../../redux/apiCalls";

const ProductList = () => {
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    useEffect(() => {
        getProduct(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteProduct(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 200 },
        {
            field: "product",
            headerName: "Product",
            width: 220,
            renderCell: (params) => {
                return (
                    <div className="productListUser">
                        <img
                            className="productListImg "
                            src={params.row.img}
                            alt=""
                        />
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: "inStock", headerName: "Stock", width: 200 },
        { field: "price", headerName: "Price", width: 160 },
        {
            field: "action",
            headerName: "Action",
            with: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row._id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];
    return (
        <>
            <TopBar />
            <div className="container">
                <SideBar />
                <div className="productList">
                    <DataGrid
                        rows={products}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 8 },
                            },
                        }}
                        pageSizeOptions={[5, 8, 10]}
                        getRowId={(row) => row._id}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </div>
            </div>
        </>
    );
};

export default ProductList;
