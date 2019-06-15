import React from 'react';
import getPhenotype from '../services/getPhenotype';
import replaceCatFeatures from '../services/replaceCatFeatures';
import './CatBody.scss';

const CatBody = ({cat}) => {
    const whiskers = getPhenotype(cat.genes.whiskers, 'whiskers');
    const eyes = getPhenotype(cat.genes.eyes, 'eyes');
    const nose = getPhenotype(cat.genes.nose, 'nose');
    const catText = replaceCatFeatures({body: cat.body, whiskers, eyes, nose});

    return (
        <div className="cat">
            <span className="cat-body">
                {catText}
            </span>
        </div>
    )
}

export default CatBody;