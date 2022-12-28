import { createContext, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        if (localStorage.getItem("token")) {
            const decoded = jwt_decode(localStorage.getItem("token"));
            return decoded;
        }
        return null;
    }); 

    const login = async (payload) => {
        const { data } = await axios.post("http://localhost:5000/auth/login", payload, {
            withCredentials: true,
        });
        console.log(data);

        const decoded = jwt_decode(data.accessToken);
        console.log(decoded);
        localStorage.setItem("token", data.accessToken);
        setUser(decoded);
    }

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    }

    return <AuthContext.Provider value={{ login, user, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;