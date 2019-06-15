import React from 'react';
import './CatBody.scss';

const CatBody = ({body}) => {
    return (
        <div className="cat">
            <span className="cat-body">
                {body}
            </span>
        </div>
    )
}

export default CatBody;