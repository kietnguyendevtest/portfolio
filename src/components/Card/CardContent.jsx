import React from 'react';

function CardContent(props) {
    const { children } = props;

    return (
        <div className="content">{children}</div>
    );
}

export default CardContent;