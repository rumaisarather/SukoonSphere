import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const AddArticles = () => {
    const [articleContent, setArticleContent] = useState('');

    const handleContentChange = (content) => {
        setArticleContent(content);
    };

    const handleSubmit = () => {
        // Handle form submission, e.g., send data to an API
        console.log('Article Content:', articleContent);
        alert('Article submitted successfully!');
    };

    console.log({ articleContent })

    return (
        <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-semibold mb-4 text-center">Write a New Article</h1>

            <div className='my-4'>
                <h3>Title of the Article?</h3>
                <input type="text" className='w-full bg-[var(--grey--400)] text-black p-2 rounded-[6px]' placeholder='type title here...' />
            </div>
            <ReactQuill
                value={articleContent}
                onChange={handleContentChange}
                theme="snow"
                modules={{
                    toolbar: [
                        [{ 'header': [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        ['link', 'image'],
                        ['clean']
                    ]
                }}
                formats={[
                    'header', 'bold', 'italic', 'underline', 'strike',
                    'list', 'bullet', 'link', 'image'
                ]}
                className="mb-4"
            />
            <button
                onClick={handleSubmit}
                className="btn-3"
            >
                Submit Article
            </button>
        </div>
    );
};

export default AddArticles;
