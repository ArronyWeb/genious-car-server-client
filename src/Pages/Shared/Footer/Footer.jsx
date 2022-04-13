import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center mt-5 p-4'>
            <small> {'\u00a9'} copyright restricted  {/\d{4}/.exec(Date())[0]}</small>

        </footer>
    );
};

export default Footer;