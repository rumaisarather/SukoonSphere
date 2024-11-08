import React, { useState } from "react";

import Select from "react-select";

import { useAuth0 } from "@auth0/auth0-react";

import { TAGS } from "../../../../utils/constants";

import { Form } from "react-router-dom";



const QuestionModal = ({ isOpen, onClose }) => {

  if (!isOpen) return null;



  const handleCancel = (e) => {

    e.preventDefault();

    onClose();

  };



  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">

      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg transition duration-300 transform scale-95 hover:scale-100">

        <h3 className="text-lg font-bold mb-4">Ask a Question</h3>

        <Form method="post" className="space-y-6">

          <input

            type="text"

            name="questionText"

            placeholder="Your Question"

            className="input input-bordered w-full mb-2 bg-white text-black border border-gray-300"

          />

          <textarea

            placeholder="More Details"

            name="context"

            className="textarea textarea-bordered w-full mb-2 bg-white text-black border border-gray-300"

          />

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

          <div className="flex justify-end gap-2">

            <button

              type="button"

              onClick={handleCancel}

              className="btn btn-outline rounded-none"

            >

              Cancel

            </button>

            <button

              type="submit"

              className="flex items-center action-button"

            >

              Add Question

            </button>

          </div>

        </Form>

      </div>

    </div>

  );

};



export default QuestionModal;


