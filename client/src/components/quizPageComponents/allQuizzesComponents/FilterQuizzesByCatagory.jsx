import React from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';

function FilterQuizzesByCategory() {
    const { allCategories } = useLoaderData();

    return (
        <div className="p-4 max-w-4xl ">
            <Form className="grid gap-6 grid-cols-1 md:grid-cols-3 items-center">
                <div className="flex flex-col">
                    <label htmlFor="category" className="text-lg font-semibold mb-2">
                        Category
                    </label>
                    <select
                        name="category"
                        id="category"
                        className="border-b-2 border-blue-800 bg-white rounded-lg p-2 focus:border-blue-800 focus:outline-none focus:ring-0"
                    >
                        <option value="" disabled selected>
                            Select a category
                        </option>
                        {allCategories.map((tag) => (
                            <option key={tag} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:col-span-2 size-2">
                    <button
                        type="submit"
                        className="btn btn-primary btn-outline text-white font-bold rounded-xl "
                    >
                        Search
                    </button>
                    <Link
                        to="/all-quizzes"
                        className="btn btn-ternary py-2 px-4 rounded-xl "
                    >
                        Reset
                    </Link>
                </div>
            </Form>
        </div>
    );
}

export default FilterQuizzesByCategory;
