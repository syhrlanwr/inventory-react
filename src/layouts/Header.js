import React, { useState, useContext } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import AuthContext from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'


function Header(){

    const [isOpen, setIsOpen] = useState(false)
    const [token, setToken] = useState("");
    const [expired, setExpired] = useState("");
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const toggle = () => {
        setIsOpen(!isOpen)
    }        

    let dropdownMenu = null;

    if (isOpen) {
        dropdownMenu = (
            <div className="flex flex-col absolute bg-white shadow-lg rounded-lg px-4 py-2 w-48 justify-center items-center">
                <button onClick={() => {
                    logout();
                    navigate('/login')
                }} className="text-gray-700 w-full flex items-center px-2 py-2 hover:bg-gray-200 rounded-lg">
                    <span className="mdi mdi-logout mr-2">
                    </span>
                    Logout
                </button>
            </div>
        )
    } else {
        dropdownMenu = null
    }

    return (
        <div className="flex justify-between items-center bg-zinc-900 p-4 px-24">
            <a className="text-white text-3xl font-bold">
                <span className="text-sky-400">my</span>
                <span className="text-white">inventory</span>
            </a>
            <div className="flex text-white text-xl font-semibold">
                Dashboard
            </div>
            <div className="text-xl font-semibold">
                <button className="flex items-center text-white justify-between" onClick={() => toggle()}>
                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="w-10 h-10 rounded-full mr-2" />
                    <span className="text-white text-xl font-semibold">{user.name}</span>
                    <span className="mdi mdi-chevron-down"></span>
                </button>
                {dropdownMenu}
            </div>
        </div>
    )
}

export default Header