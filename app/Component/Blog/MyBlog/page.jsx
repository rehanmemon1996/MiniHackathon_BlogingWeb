"use client"
import React, { useEffect, useState } from "react";
import axios from 'axios';



function Home() {
    const [res, setRes] = useState([]);

    useEffect(() => {
        // const /userId = localStorage.getItem("user_id");

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/Blog/Blogs.js/${userId}`);
                setRes(response.data.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return (




        <div className="min-h-screen    p-4">
            <div className="bg-blue-500 py-4 px-8 text-white">
                <div className="text-3x1 font-semibold  text-lg">Personal Bloging App</div>
            </div>
            <div className=" border border-solid w-1/2 items-center border-white p-4" style={{ margin: "auto", marginTop: "20px", width: "100%" }}>
                <div>
                    <h1 className="text-3xl font-semibold mb-4 text-gray text-center">Dashboard</h1>
                </div>
                <div className="text-3xl font-semibold mb-4 text-gray text-center">
                    <input className="w-3/4" type="text" id="inputField" name="inputField" placeholder="Blog title" />
                </div>
                <br />
                <div className="text-3xl  font-semibold mb-4 text-gray text-center">
                    <textarea className="w-3/4" id="textareaField" name="textareaField" rows="4" placeholder="Write your Blog"></textarea>
                </div>
                <div className="text-3xl font-semibold mb-4 text-gray text-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Publish Blog</button>
                </div>
            </div>
            <div className="bg-blue-500 py-4 px-8 rounded-sm text-white" style={{marginTop:"20px"}}>
                <div className=" font-semibold text-5xl   text-center">My Blogs</div>
            </div>
            <br />

            <div className=" border border-solid w-1/2 items-center border-white p-4" style={{ margin: "auto", marginTop: "20px", width: "100%" }}>
                <div className="bg-gray-100 p-4   ">
                    {/* Replace 'your_image.jpg' with the actual image URL */}
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="Image Description"
                        width={180} // Set the desired width
                        height={150} // Set the desired height
                        className="rounded-lg"
                    />
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    {/* Card content goes here */}
                    <h2 className="text-2xl font-semibold mb-4">Card Title</h2>
                    <p className="text-gray-700">
                        This is the content of the card. You can add text, images, or other elements here.
                    </p>
                    <div className="mt-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            Delete
                        </button>
                    </div>
                    <div className="mt-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            Edit
                        </button>
                    </div>
                </div>
            </div>


          
        </div>
    );
}

export default Home;
