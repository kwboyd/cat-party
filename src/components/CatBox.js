import React, { useState } from 'react';
import './CatBox.scss';
import CatBody from './CatBody';

const CatBox = ({cat}) => {
    const [showGenes, setShowGenes] = useState(false);

    const toggleShowGenes = () => {
        setShowGenes(!showGenes);
    }

    return (
        <div className="cat-box">
            <CatBody cat={cat}></CatBody>
            {
                showGenes && (
                    <GeneMakeup cat={cat}></GeneMakeup>
                )
            }
            <button onClick={toggleShowGenes}>{showGenes ? 'Hide Genes' : 'Show Genes'}</button>
        </div>
    )
}

export default CatBox;