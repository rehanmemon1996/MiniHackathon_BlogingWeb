"use client"
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Link from "next/link";



function Home() {
    const [res, setRes] = useState([]);
    const [title, settitle] = useState([])
    const [description, setdescription] = useState([])
    const [imagelink, setimagelink] = useState([])

    // Inside your Home component
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editImageLink, setEditImageLink] = useState("");

    // Inside your Home component
    const openEditModal = (title, description, imagelink) => {
        setEditTitle(title);
        setEditDescription(description);
        setEditImageLink(imagelink);
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    // Inside your Home component
const saveEditModalData = () => {
    // Implement your logic to save the edited data here
    // You can use editTitle, editDescription, and editImageLink to update the data
    
    // For example, you can make a POST request to your API to save the changes
    const editedData = {
      title: editTitle,
      description: editDescription,
      imagelink: editImageLink,
    };
  
    axios
      .post(`http://localhost:3000/api/updateBlog/${v._id}`, editedData)
      .then((response) => {
        // Handle the success response here
        console.log(response.data);
  
        // Close the modal after saving
        closeEditModal();
  
        // Fetch the updated data to refresh your component
        getData();
      })
      .catch((error) => {
        // Handle the error here
        console.error(error);
      });
  };
  

  




        useEffect(() => {
            // const /userId = localStorage.getItem("user_id");


            try {
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:3000/api/Blog',
                    headers: {}
                };

                axios.request(config)
                    .then((response) => {
                        console.log(JSON.stringify(response.data));
                        setRes(response.data.data)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.error(error);
            }

        }, []);

        const getData = () => {
            setRes([])
            try {
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:3000/api/Blog',
                    headers: {}
                };

                axios.request(config)
                    .then((response) => {
                        console.log(JSON.stringify(response.data));
                        setRes(response.data.data)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.error(error);
            }
        }


        const submitData = () => {
            let data = JSON.stringify({
                "title": title.toString(),
                "description": description.toString(),
                "imagelink": imagelink.toString(),
                "userid": localStorage.getItem('user_id')

            });

            console.log(data)

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:3000/api/Blog',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    getData()
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        const deleteBlog = (id) => {
            console.log(id)
            let config = {
                method: 'delete',
                maxBodyLength: Infinity,
                url: `http://localhost:3000/api/Blog/${id}`,
                headers: {}
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });
            getData()
        }
        const handleEdit = (id) => {
            console.log(id)
        }

        return (




            <div className="min-h-screen    p-4">
                <div className="bg-blue-500 py-4 px-8 text-white">
                    <div className="text-3x1 font-semibold  text-lg">Personal Bloging App</div>
                </div>
                <div className=" border border-solid w-1/2 items-center border-white p-4" style={{ margin: "auto", marginTop: "20px", width: "100%" }}>
                    <div>
                        <h1 className="text-3xl font-semibold mb-4 text-gray text-center">Dashboard</h1>
                    </div>
                    <div className="text-3xl font-semibold mb-4 text-gray  text-black text-center">
                        <input
                            value={title}
                            onChange={(e) => settitle(e.target.value)}
                            className="w-3/4" type="text" id="inputField" name="inputField" placeholder="Blog title" />
                    </div>
                    <br />
                    <div className="text-3xl  text-black  font-semibold mb-4 text-gray text-center">
                        <textarea
                            value={description}
                            onChange={(e) => setdescription(e.target.value)} className="w-3/4" id="textareaField" name="textareaField" rows="4" placeholder="Write your Blog"></textarea>
                    </div>
                    <div className="text-3xl  text-black  font-semibold mb-4 text-gray text-center">
                        <input
                            value={imagelink}
                            onChange={(e) => setimagelink(e.target.value)}
                            className="w-3/4" type="text" id="inputField" name="inputField" placeholder="Put Image URL" />
                    </div>


                    <div className="text-3xl font-semibold mb-4 text-gray text-center">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"

                            onClick={() => submitData()}
                        >Publish Blog</button>
                    </div>
                </div>
                <div className="bg-blue-500 py-4 px-8 rounded-sm text-white" style={{ marginTop: "20px" }}>
                    <div className=" font-semibold text-5xl   text-center">My Blogs</div>
                </div>
                <br />




                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {res.map((v, i) => (
                        <>
                            <div className=" border border-solid w-1/2 items-center border-white p-4" style={{ margin: "auto", marginTop: "20px", width: "100%" }}>
                                <div className="bg-gray-100 p-4   ">
                                    {/* Replace 'your_image.jpg' with the actual image URL */}
                                    <img
                                        src={v.imagelink}
                                        alt="Image Description"
                                        width={180} // Set the desired width
                                        height={150} // Set the desired height
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    {/* Card content goes here */}
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">${v.title}</h2>
                                    <p className="text-gray-700">
                                        {v.description}
                                    </p>
                                    <div className="mt-4">
                                        <button
                                            onClick={() => deleteBlog(v._id)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                            Delete
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        {/* <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                                    >
                                        <Link href={`/Component/Blog/Home/${v._id}`}>
                                            Edit
                                        </Link>
                                    </button> */}
                                        <button
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                                            onClick={() => openEditModal(v.title, v.description, v.imagelink)}
                                        >
                                            Edit
                                        </button>



                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div>
                    {/* // Inside your return statement, before the closing  */}
                </div>
                {isEditModalOpen && (
                    <div className="modal-container">
                        {/* Your modal content */}
                        <input
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        // Add the rest of your modal input fields here
                        />
                        {/* <button onClick={closeEditModal}>Close</button>
                    // <button onClick={saveEditModalData}>Save</button> */}
                    </div>
                )}

            </div>

        );
    }

    export default Home;
