import React, { useState } from "react";
import { TAGS } from "../../../../utils/constants"
import { Form } from "react-router-dom";

const PostModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 h-[40vh] top-24">
      <div className="bg-white rounded-xl w-full max-w-lg p-8 shadow-2xl transform transition-all">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">Share Your Story</h2>

        <Form method="post" encType="multipart/form-data" className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What's on your mind?
            </label>
            <textarea
              name="description"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none min-h-[120px]"
              placeholder="Share your thoughts, experiences or questions..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add an Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-colors">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      name="imageUrl"
                      className="sr-only"
                      accept="image/*"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add Relevant Tags
            </label>
            <select
              name="tags"
              multiple
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              {Object.values(TAGS).map((tag) => (
                <option key={tag} value={tag} className="py-1">
                  {tag}
                </option>
              ))}
            </select>
            <p className="mt-2 text-sm text-gray-500">
              Pro tip: Hold Ctrl/Cmd to select multiple tags that best describe your post
            </p>
          </div>

          <div className="flex justify-end space-x-4 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Share Post
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PostModal;
