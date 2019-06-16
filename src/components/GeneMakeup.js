import React from 'react';
import { geneData } from '../catData/genes';
import './GeneMakeup.scss';

const GeneMakeup = ({cat}) => {

    const isDominant = (type, gene) => {
        return geneData[type][gene].dominant;
    }

    const geneDisplay = (geneType) => {
        return (
            <>
                {
                    cat.genes[geneType].map((gene, i) => (
                        <p className={isDominant(geneType, gene) ? 'dominant' : ''} key={`${geneType}${i}`}>{gene}</p>
                    ))
                }
            </>
        )
    }

    return (
        <div className="gene-makeup" data-testid="gene-makeup">
            <div className="gene-row">
                <p>👀:</p>
                {
                    geneDisplay('eyes')
                }
            </div>
            <div className="gene-row">
                <p>👃:</p>
                {
                    geneDisplay('nose')
                }
            </div>
            <div className="gene-row">
                <p>彡:</p>
                {
                    geneDisplay('whiskers')
                }
            </div>
        </div>
    )
}

export default GeneMakeup;