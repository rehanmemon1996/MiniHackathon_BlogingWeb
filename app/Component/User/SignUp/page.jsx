"use client"
import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
      number: user.number,
    };

    axios
      .post('http://localhost:3000/api/users/SignUp', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <div className=" bg-gray-600 p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-6 text-center">Sign Up</h1>
        <form>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Enter Name"
              value={user.name}
              name="name"
              handleChange={handleChange}
            />
          </div>
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
          <div className="mb-4">
            <Input
              type="number"
              placeholder="Enter Number"
              value={user.number}
              name="number"
              handleChange={handleChange}
            />
          </div>
          <div className="w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">
            <button type="button" onClick={handleSubmit}>
              Create Account
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

export default SignUp;
