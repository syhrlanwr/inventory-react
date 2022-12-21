import bg from "./bg.jpg";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errorRef = useRef();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [user, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/auth/login", {
                username: user,
                password: password,
            }, { headers: { "Content-Type": "application/json" }});
            console.log(res.data);
            navigate("/");
        } catch (error) {
            console.log(error);
            setErrMsg(error.response.data.message);
            errorRef.current.focus();
        }
    };


  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="h-screen bg-cover bg-center">
        <div className="h-screen flex flex-col justify-center items-center bg-gray-900 bg-opacity-75">
            <a className="text-white text-center mb-12 text-3xl font-bold" href="/">
                <span className="text-sky-400">my</span>
                <span className="text-white">inventory</span>
            </a>
            <div className="bg-white lg:w-1/3 md:w-1/2 rounded-lg shadow-xl p-10">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold">
                        Login
                    </h1>
                </div>
                <form className="mt-10" onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                            Username
                        </label>
                        <input className="border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-gray-500" type="text" placeholder="Username" ref={userRef} autoComplete="off" onChange={(e) => setUser(e.target.value)} value={user} required/>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                            Password
                        </label>
                        <input className="border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-gray-500" type="password" placeholder="Password" ref={userRef} onChange={(e) => setPassword(e.target.value)} value={password} required/>
                    </div>
                    <div className="flex flex-col mb-6">
                        <p ref={errorRef} className={errMsg ? "text-red-500 text-xs italic" : "hidden"} aria-live="assertive">
                            {errMsg}
                        </p>
                    </div>
                    <div className="flex flex-col mb-6">
                        <button className="bg-sky-400 text-white py-2 px-4 rounded-lg hover:bg-sky-500 focus:outline-none">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
      
  );
}

export default Login;