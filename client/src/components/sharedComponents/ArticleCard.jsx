import React from 'react';
import PropTypes from 'prop-types';
import { TbWorldUpload } from 'react-icons/tb';
import Button from './ActionButton';
import LinkButton from './LinkButton';

const ArticleCard = ({ title, imagePlaceholderText, avatarUrl, name, date, onButtonClick, buttonLabel }) => (
    <div className="card bg-gray-100 w-full shadow-md">
        <div className="card-body p-0">
            <div className="h-40 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">{imagePlaceholderText}</span>
            </div>
            <h3 className="card-title mt-4 text-gray-900 pl-2">{title}</h3>
            <div className='p-2'>
                <div className="flex items-center text-gray-500 mt-7 rounded-full">
                    <img src={avatarUrl} alt="Avatar" className="w-10 rounded-full pr-3" />
                    {name}
                </div>
                <div className="flex items-center justify-between ">
                    <div className="flex items-center">
                        <TbWorldUpload className="pr-3" style={{ fontSize: "2.5rem" }} />
                        <p className="text-gray-500">Date {date}</p>
                    </div>
                    <LinkButton variant="primary" size="medium">Read</LinkButton>
                </div>
            </div>
        </div>
    </div>
);

ArticleCard.propTypes = {
    title: PropTypes.string.isRequired,
    imagePlaceholderText: PropTypes.string,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func,
    buttonLabel: PropTypes.string,
};

ArticleCard.defaultProps = {
    imagePlaceholderText: 'Image Placeholder',
    onButtonClick: () => { },
    buttonLabel: 'Click Me',
};

export default ArticleCard;
