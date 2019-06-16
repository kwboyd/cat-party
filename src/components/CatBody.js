import React from 'react';

const CatBody = ({ bodyText }) => {
    return (
        <div className="cat">
            <span className="cat-body" data-testid="cat-body">
                {bodyText}
            </span>
        </div>
    )
}

export default CatBody;