import React from 'react';

const CatBody = ({ bodyText }) => {
    return (
        <div className="cat">
            <span className="cat-body">
                {bodyText}
            </span>
        </div>
    )
}

export default CatBody;