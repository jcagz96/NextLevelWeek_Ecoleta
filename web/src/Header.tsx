import React from 'react';

interface IHeaderProps {
    title: string;
}

const Header: React.FC<IHeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>

        </header>
    );
}

export default Header;