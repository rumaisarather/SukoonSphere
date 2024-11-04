import React, { useState } from "react";
import { TAGS } from "../../../../utils/constants"
import { Form } from "react-router-dom";
const PostModal = ({ onClose, onSave }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Add a New Post</h2>
        <Form method="post" encType="multipart/form-data">
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full bg-white text-gray-700"
            />
          </div>

          <div className="mb-4">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              name="imageUrl"
              className="file-input file-input-bordered w-full bg-white text-gray-700"
              accept="image/*"
            />
          </div>

          <div className="mb-4">
            <label className="label">
              <span className="label-text">Select Tags</span>
            </label>
            <select
              name="tags"
              multiple
              className="select select-bordered w-full bg-white text-gray-700 min-h-[100px]"
            >
              {Object.values(TAGS).map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <span className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple tags</span>
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
              className="action-button"
            >
              Post
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PostModal;
