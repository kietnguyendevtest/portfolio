import React from 'react';

function CardHover(props) {
    const { children } = props;

    return (
        <div className="hover">{children}</div>
    );
}

export default CardHover;