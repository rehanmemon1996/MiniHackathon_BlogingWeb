"use client"
import React, { useState } from "react";
import axios from "axios";

function EditBlogForm({ blog, onSave, onCancel, params }) {
  console.log(params.blogid)
  EditBlogForm= 
  blog={blog},
   onSave={onSave},
    onCancel={onCancel},
     params={params}

  const [editedTitle, setEditedTitle] = useState(blog.title);
  const [editedDescription, setEditedDescription] = useState(blog.description);
  const [editedImageLink, setEditedImageLink] = useState(blog.imagelink);

  const handleSave = () => {
    const updatedBlog = {
      ...blog,
      title: editedTitle,
      description: editedDescription,
      imagelink: editedImageLink,

    };


  let data = JSON.stringify({
    "title": "String edit",
    "description": "String",
   
  });

  let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: `http://localhost:3000/api/Blog/${params.blogid}`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }      
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Edit Blog</h2>
      <div className="mb-4">
        <label className="text-gray-600">Title:</label>
        <input

          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="w-full border text-black border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-600">Description:</label>
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="w-full border text-black border-gray-300 p-2 rounded-md"
          rows="4"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="text-gray-600">Image Link:</label>
        <input
          type="text"
          value={editedImageLink}
          onChange={(e) => setEditedImageLink(e.target.value)}
          className="w-full border text-black border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditBlogForm;
