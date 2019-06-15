import React from 'react';
import './Cat.scss';
import replaceCatFeatures from '../services/replaceCatFeatures';

const CatBody = ({cat}) => {
    const catText = replaceCatFeatures(cat);
    console.log(catText);

    return (
        <div className="cat">
            <span className="cat-body">
                {catText}
            </span>
        </div>
    )
}

export default CatBody;