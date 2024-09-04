import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const PostModal = ({ onClose, onSave }) => {
  const { isAuthenticated,  user, logout } =
    useAuth0();
  const isUser = isAuthenticated && user; 
   const [formData, setFormData] = useState({
    description: "",
    imageFile: null, // Store the file object
    imagePreviewUrl: "", // URL for image preview
    tags: "",
    readingTime: "",
    views: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        imageFile: file, // Set the file object
        imagePreviewUrl: reader.result, // Use FileReader to get Data URL
      });
    };
    reader.readAsDataURL(file); // Read the file as a Data URL
  }
};

 const handleSubmit = async (e) => {
   e.preventDefault();

   const newPost = {
     ...formData,
     id: Date.now(),
     datePublished: new Date().toISOString(),
     tags: formData.tags.split(",").map((tag) => tag.trim()),
     username: user.name,
     avatar: user.picture,
     image: formData.imagePreviewUrl,
   };

   await onSave(newPost);
   onClose(); 
 };

 return (
   <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
     <div className="bg-white rounded-lg w-full max-w-lg p-6 shadow-lg">
       <h2 className="text-2xl font-semibold mb-4">Add a New Post</h2>
       <form onSubmit={handleSubmit}>
         <div className="mb-4">
           <label className="label">
             <span className="label-text">Description</span>
           </label>
           <textarea
             name="description"
             value={formData.description}
             onChange={handleChange}
             className="textarea textarea-bordered w-full bg-white text-gray-700"
             required
           />
         </div>

         <div className="mb-4">
           <label className="label">
             <span className="label-text">Image</span>
           </label>
           <input
             type="file"
             name="image"
             onChange={handleImageChange}
             className="file-input file-input-bordered w-full bg-white text-gray-700"
             accept="image/*"
             required
           />
         </div>

         <div className="mb-4">
           <label className="label">
             <span className="label-text">Tags (comma separated)</span>
           </label>
           <input
             type="text"
             name="tags"
             value={formData.tags}
             onChange={handleChange}
             className="input input-bordered w-full bg-white text-gray-700"
           />
         </div>

         <div className="mb-4">
           <label className="label">
             <span className="label-text">Reading Time</span>
           </label>
           <input
             type="text"
             name="readingTime"
             value={formData.readingTime}
             onChange={handleChange}
             className="input input-bordered w-full bg-white  text-gray-700"
           />
         </div>

         <div className="flex justify-end space-x-4">
           <button
             type="button"
             onClick={onClose}
             className="btn btn-outline hover:border-red-700 hover:text-red-600 hover:bg-transparent"
           >
             Cancel
           </button>
           <button
             type="submit"
             className="btn bg-[#0c2b64] hover:bg-transparent text-white hover:text-[#0c2b64]"
           >
             Post
           </button>
         </div>
       </form>
     </div>
   </div>
 );
};

export default PostModal;
