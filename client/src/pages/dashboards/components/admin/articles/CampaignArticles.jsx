import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CampaignArticles = () => {
    return (
        <>
            <section id="articles" class="bg-white p-6 rounded-[10px] shadow-md mb-6 space-y-2">
                <h2 class="text-2xl font-semibold mb-4">Manage Articles & Resources</h2>
                <Link to={"/admin/add-articles"}>
                    <button class="btn-2">Add New Article</button>
                </Link>
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-[4px]">
                    <span>Article 1: Mental Health & Wellness</span>
                    <div className="flex gap-2">
                        {/* Edit Button */}
                        <button className="flex items-center gap-2 btn-3">
                            <FaEdit className="text-sm" />
                            <span>Edit</span>
                        </button>

                        {/* Delete Button */}
                        <button className="flex items-center gap-1 btn-red">
                            <FaTrashAlt className="text-sm" />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-[4px]">
                    <span>Article 1: Mental Health & Wellness</span>
                    <div className="flex gap-2">
                        {/* Edit Button */}
                        <button className="flex items-center gap-2 btn-3">
                            <FaEdit className="text-sm" />
                            <span>Edit</span>
                        </button>

                        {/* Delete Button */}
                        <button className="flex items-center gap-1 btn-red">
                            <FaTrashAlt className="text-sm" />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>




                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-[4px]">
                    <span>Article 1: Mental Health & Wellness</span>
                    <div className="flex gap-2">
                        {/* Edit Button */}
                        <button className="flex items-center gap-2 btn-3">
                            <FaEdit className="text-sm" />
                            <span>Edit</span>
                        </button>

                        {/* Delete Button */}
                        <button className="flex items-center gap-1 btn-red">
                            <FaTrashAlt className="text-sm" />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>




                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-[4px]">
                    <span>Article 1: Mental Health & Wellness</span>
                    <div className="flex gap-2">
                        {/* Edit Button */}
                        <button className="flex items-center gap-2 btn-3">
                            <FaEdit className="text-sm" />
                            <span>Edit</span>
                        </button>

                        {/* Delete Button */}
                        <button className="flex items-center gap-1 btn-red">
                            <FaTrashAlt className="text-sm" />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>



                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-[4px]">
                    <span>Article 1: Mental Health & Wellness</span>
                    <div className="flex gap-2">
                        {/* Edit Button */}
                        <button className="flex items-center gap-2 btn-3">
                            <FaEdit className="text-sm" />
                            <span>Edit</span>
                        </button>

                        {/* Delete Button */}
                        <button className="flex items-center gap-1 btn-red">
                            <FaTrashAlt className="text-sm" />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>



                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-[4px]">
                    <span>Article 1: Mental Health & Wellness</span>
                    <div className="flex gap-2">
                        {/* Edit Button */}
                        <button className="flex items-center gap-2 btn-3">
                            <FaEdit className="text-sm" />
                            <span>Edit</span>
                        </button>

                        {/* Delete Button */}
                        <button className="flex items-center gap-1 btn-red">
                            <FaTrashAlt className="text-sm" />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>


            </section>
            {/* <section id="stories" class="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 class="text-2xl font-semibold mb-4">Manage Stories & Discussions</h2>
                <button class="p-2 bg-primary text-white rounded-md mb-4">Create Story</button>
                <p>Configure and review user stories, discussions, and expert Q&A sessions.</p>
            </section> */}
        </>


    )
}

export default CampaignArticles
