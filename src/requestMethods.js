import axios from "axios";

const BASE_URL = "http://localhost:8800/api";
const TOKEN = localStorage.getItem("persist:root")
    ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser
    : {};

export const publicUrl = axios.create({
    baseURL: BASE_URL,
});

export const userUrl = axios.create({
    baseURL: BASE_URL,
    user: TOKEN,
    headers: {
        token: `Bearer ${TOKEN ? TOKEN.accessToken : ""}`,
    },
});
