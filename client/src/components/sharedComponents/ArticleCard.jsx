import React from 'react';
import PropTypes from 'prop-types';
import { TbWorldUpload } from 'react-icons/tb';
import LinkButton from './Buttons/LinkButton';

const ArticleCard = ({ title, imagePlaceholderText, subtile, avatarUrl, name, date, onButtonClick, buttonLabel }) => (

    <div style={{ display: 'flex', }}>
        <div style={{ flex: 2, marginRight: '15px' }}>
            <h2 style={{ fontSize: '1.33em', lineHeight: '1.3', letterSpacing: '0.005em', margin: '0 0 10px 0' }} className='font-bold text-[var(--black-color)]'>{title}</h2>
            <p style={{ margin: '0 0 20px 0', fontFamily: "Luxurious Roman", fontWeight: 400, fontStyle: ' normal', lineHeight: '1.5', letterSpacing: "0.005em", color: 'var(--light-color)' }} >{subtile}</p>
            <div className="flex items-center mt-4">
                <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' alt="Avatar" style={{ width: '25px', height: '25px', borderRadius: '50%', marginRight: '10px' }} />
                <span className="text-sm font-semibold">Sartaj Ashraf</span>
                <span className="mx-2">|</span>
                <span className="text-sm font-semibold" >20-12-2002</span>
                <span className="mx-2 font-semibold">|</span>
                <LinkButton size="small" variant="secondary" className="text-sm font-semibold" to='#'>Read more</LinkButton>
            </div>
        </div>
        <div style={{ flex: 1 }}>
            <img src={avatarUrl} alt={imagePlaceholderText} style={{ width: '80%', height: 'auto', objectFit: 'cover' }} />
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
