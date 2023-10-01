import "./App.css";
import Home from "./pages/home/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
    const user = useSelector((state) => state.user.currentUser?.isAdmin);
    return (
        <Router basename={process.env.REACT_APP_PUBLIC_URL}>
            <Routes>
                <Route
                    path="/login"
                    element={user ? <Navigate to="/" /> : <Login />}
                />
                <Route
                    path="/"
                    element={user ? <Home /> : <Navigate to="/login" />}
                />
                <Route
                    path="/users"
                    element={user ? <UserList /> : <Navigate to="/login" />}
                />
                <Route
                    path="/user/:userId"
                    element={user ? <User /> : <Navigate to="/login" />}
                />
                <Route
                    path="/newUser"
                    element={user ? <NewUser /> : <Navigate to="/login" />}
                />
                <Route
                    path="/products"
                    element={user ? <ProductList /> : <Navigate to="/login" />}
                />
                <Route
                    path="/product/:productId"
                    element={user ? <Product /> : <Navigate to="/login" />}
                />
                <Route
                    path="/newProduct"
                    element={user ? <NewProduct /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
}

export default App;
