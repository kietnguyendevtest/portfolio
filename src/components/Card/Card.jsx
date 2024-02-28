import React from 'react';

function Card(props) {
    const { children } = props;

    return (
        <div className="card">
            <div className="box">
                {children}
            </div>
        </div>
    );
}

export default Card;
