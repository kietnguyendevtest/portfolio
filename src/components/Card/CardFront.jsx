import React from 'react';

function CardFront(props) {
    const { children } = props;

    return (
        <div className="front">{children}</div>
    );
}

export default CardFront;