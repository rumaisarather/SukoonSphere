import React from 'react';

const ContentEditor = ({
    content,
    setContent,
    onSave,
    onCancel,
    isLoading = false,
    rows = "2",
    buttonSize = "sm"
}) => {
    return (
        <div className="mt-2">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className={`w-full p-2 border rounded-md text-${buttonSize} resize-none`}
                rows={rows}
            />
            <div className="mt-2 flex gap-2">
                <button
                    onClick={onSave}
                    disabled={isLoading}
                    className={`px-3 py-1 text-${buttonSize} bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50`}
                >
                    {isLoading ? 'Saving...' : 'Save'}
                </button>
                <button
                    onClick={onCancel}
                    className={`px-3 py-1 text-${buttonSize} text-gray-600 hover:text-gray-800`}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ContentEditor; 