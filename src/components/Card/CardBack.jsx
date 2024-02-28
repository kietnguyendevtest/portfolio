import React from 'react';

function CardBack(props) {
    const { children } = props;

    return (
        <div className="back">{children}</div>
    );
}

export default CardBack;