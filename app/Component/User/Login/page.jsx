'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


function Login() {
    const router = useRouter();

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const data = {
            email: user.email,
            password: user.password,
        };




        axios
            .post('http://localhost:3000/api/users/Login', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert(response.data.message);
                localStorage.setItem('user_id', response.data.data._id);
                router.push('/Component/Blog/Home');
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const RegisterPage = () => {
        router.push("Component/User/SignUp")
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100  text-black">
            <div className=" bg-gray-600 p-8 rounded shadow-md w-96">
                <h1 className="text-2xl text-center  font-semibold mb-6">Login Page</h1>
                <form>
                    <div className="mb-4">
                        <Input
                            type="email"
                            placeholder="Enter Email"
                            value={user.email}
                            name="email"
                            handleChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            type="password"
                            placeholder="Enter Password"
                            value={user.password}
                            name="password"
                            handleChange={handleChange}
                        />
                    </div>
                    <div className="w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">
                        <button type="button" onClick={handleSubmit}>
                            Login
                        </button>
                    </div>
                    <div className="mt-2 w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">
                        <button type="button" onClick={RegisterPage}>
                            Register Here
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}

const Input = ({ type, placeholder, value, name, handleChange }) => {
    return (
        <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={(e) => handleChange(e)}
        />
    );
};

export default Login;
