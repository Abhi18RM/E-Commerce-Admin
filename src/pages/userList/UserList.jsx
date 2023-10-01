import React, { useEffect, useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sidebar/SideBar";
import { getUsers } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
    const [data, setData] = useState(userRows);
    const usersData = useSelector((state) => state.users.users);
    const dispatch = useDispatch();
    const profileImg = "https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg";

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 200 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img
                            className="userListImg "
                            src={params.row.img ? params.row.img : profileImg}
                            alt=""
                        />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        // { field: "transaction", headerName: "Transaction Volume", width: 160 },
        // { field: "status", headerName: "Status", width: 90 },
        {
            field: "action",
            headerName: "Action",
            with: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row._id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
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
                <div className="userList">
                    <DataGrid
                        rows={usersData}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 8 },
                            },
                        }}
                        getRowId={(row) => row._id}
                        pageSizeOptions={[5, 8, 10]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </div>
            </div>
        </>
    );
};

export default UserList;
