import { logOutHandle, loginFailure, loginStart, loginSuccess } from "./userRedux";
import { userUrl } from "../requestMethods";
import {
    addProductFailure,
    addProductStart,
    addProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    getProductFailure,
    getProductStart,
    getProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
} from "./productRedux";
import { addUserFailure, addUserStart, addUserSuccess, getUsersFailure, getUsersStart, getUsersSuccess } from "./usersRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await userUrl.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const logOut = async (dispatch) => {
    dispatch(logOutHandle());
}

export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await userUrl.get("/users/");
        dispatch(getUsersSuccess(res.data));
    }
    catch (err) {
        dispatch(getUsersFailure());
    }
};

export const addUser = async (user, dispatch) => {
    dispatch(addUserStart());
    try {
        const res = await userUrl.post("/auth/register", { ...user });
        dispatch(addUserSuccess(res.data));
    }
    catch (err) {
        dispatch(addUserFailure());
    }
}

export const getProduct = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await userUrl.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        await userUrl.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        // const res = await userUrl.delete(`/products/${id}`);
        dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
        dispatch(updateProductFailure());
    }
};

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userUrl.post(`/products`, product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        dispatch(addProductFailure());
    }
};