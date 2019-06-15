import React from 'react';
import './CatBody.scss';

const CatBody = ({cat}) => {
    const body = replaceCatFeatures(cat);

    return (
        <div className="cat">
            <span className="cat-body">
                {body}
            </span>
        </div>
    )
}

export default CatBody;