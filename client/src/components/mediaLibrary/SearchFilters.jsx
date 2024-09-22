import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { RxReset } from 'react-icons/rx';
import { Form, Link, useLoaderData } from "react-router-dom";
function SearchFilters() {
    const { category } = useLoaderData()
    return (
        <Form className=' flex gap-4 sm:flex items-center justify-center'>
            <label className="input bg-transparent flex items-center gap-2 " style={{ borderBottom: '2px solid #13404f', borderRadius: '0px' }}>
                <input
                    type="text"
                    className="grow"
                    placeholder="Search by name or category"
                    name="search"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                >
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            </label>
            <label>
                <select
                    name="category"
                    className="select bg-transparent  "
                    style={{ borderBottom: '2px solid #13404f', borderRadius: '0px' }}
                >
                    <option disabled selected>
                        category
                    </option>
                    {category.map((tag) => {
                        return <option key={tag}>{tag}</option>;
                    })}
                </select>
            </label>
            <button
                type="submit"
                className="text-white  rounded-xl "
            >
                <FaSearch className="text-[var(--primary)] text-6 hover:text-[var(--ternery)] size-5" />

            </button>
            <Link to="/media/all-videos" >
                <RxReset className="font-extrabold text-[var(--primary)] text-6 hover:text-[var(--ternery)] size-6" />
            </Link>
        </Form>
    );
}

export default SearchFilters
