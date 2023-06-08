import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer #00897b teal darken-1">
            <div className="footer-copyright #00897b teal darken-1">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
                </div>
            </div>
        </footer>

    );
};

export default Footer;