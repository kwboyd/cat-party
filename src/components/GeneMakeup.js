import React from 'react';
import { geneData } from '../catData/genes';
import './GeneMakeup.scss';

const GeneMakeup = ({cat}) => {

    const isDominant = (type, gene) => {
        return geneData[type][gene].dominant;
    }

    return (
        <div className="gene-makeup">
            <div className="gene-row">
                <p>👀:</p>
                {
                    cat.genes.eyes.map((gene, i) => (
                        <p className={isDominant('eyes', gene) ? 'dominant' : ''} key={'eyes' + gene + i}>{gene}</p>
                    ))
                }
            </div>
            <div className="gene-row">
                <p>👃:</p>
                {
                    cat.genes.nose.map((gene, i) => (
                        <p className={isDominant('nose', gene) ? 'dominant' : ''} key={'nose' + gene + i}>{gene}</p>
                    ))
                }
            </div>
            <div className="gene-row">
                <p>彡:</p>
                {
                    cat.genes.whiskers.map((gene, i) => (
                        <p className={isDominant('whiskers', gene) ? 'dominant' : ''} key={'whiskers' + gene + i}>{gene}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default GeneMakeup;