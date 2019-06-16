import React from 'react';
import { render, cleanup } from '@testing-library/react';
import GeneMakeup from '../components/GeneMakeup';
import { geneData } from '../catData/genes';
import 'jest-dom/extend-expect'

function findDominant(geneType) {
    const genesOfType = geneData[geneType];
    const dominantGene = Object.keys(genesOfType).find(geneName => genesOfType[geneName].dominant);
    return dominantGene;
}

function findRecessive(geneType) {
    const genesOfType = geneData[geneType];
    const recessiveGene = Object.keys(genesOfType).find(geneName => !genesOfType[geneName].dominant);
    return recessiveGene;
}

const mockCat = {
    genes: {
        eyes: [findDominant('eyes'), findRecessive('eyes')],
        whiskers: [findRecessive('whiskers'), findDominant('whiskers')],
        nose: [findDominant('nose'), findRecessive('nose')],
    }
}

afterEach(cleanup);

test('renders the eye genes', () => {
    const {getByText} = render(<GeneMakeup cat={mockCat} />)
    expect(getByText(mockCat.genes.eyes[0])).toBeTruthy();
    expect(getByText(mockCat.genes.eyes[1])).toBeTruthy();
})

test('renders the nose genes', () => {
    const {getByText} = render(<GeneMakeup cat={mockCat} />)
    expect(getByText(mockCat.genes.nose[0])).toBeTruthy();
    expect(getByText(mockCat.genes.nose[1])).toBeTruthy();
})

test('renders the whiskers genes', () => {
    const {getByText} = render(<GeneMakeup cat={mockCat} />)
    expect(getByText(mockCat.genes.whiskers[0])).toBeTruthy();
    expect(getByText(mockCat.genes.whiskers[1])).toBeTruthy();
})

test('renders the dominant genes with a dominant class', () => {
    const {getByText} = render(<GeneMakeup cat={mockCat} />)
    expect(getByText(mockCat.genes.whiskers[0])).not.toHaveClass('dominant');
    expect(getByText(mockCat.genes.whiskers[1])).toHaveClass('dominant');
})