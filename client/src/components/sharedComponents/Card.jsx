import React from 'react';

const Card = ({ title, content, buttonLabel, onButtonClick }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={onButtonClick}>
                        {buttonLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
