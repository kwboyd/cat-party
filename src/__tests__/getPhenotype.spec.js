import getPhenotype from '../services/getPhenotype';
import { geneData } from '../catData/genes';

// we want to make sure that all combinations of phenotypes are valid

describe('whiskers genes', () => {
    test('all gene combinations have a phenotype', () => {
        const whiskerGenes = Object.keys(geneData.whiskers);
        for (let i = 0; i < whiskerGenes.length; i++) {
            const primaryGene = whiskerGenes[i];
            for (let j = i; j < whiskerGenes.length; j++) {
                const secondaryGene = whiskerGenes[j];
                console.log(`testing for ${primaryGene}${secondaryGene} in whiskers`);
                const phenotype = getPhenotype([primaryGene, secondaryGene], 'whiskers');
                expect(phenotype.left).toBeTruthy();
                expect(phenotype.right).toBeTruthy();
            }
        }
    })
})

describe('eyes genes', () => {
    test('all gene combinations have a phenotype', () => {
        const eyeGenes = Object.keys(geneData.eyes);
        for (let i = 0; i < eyeGenes.length; i++) {
            const primaryGene = eyeGenes[i];
            for (let j = i; j < eyeGenes.length; j++) {
                const secondaryGene = eyeGenes[j];
                console.log(`testing for ${primaryGene}${secondaryGene} in eyes`);
                const phenotype = getPhenotype([primaryGene, secondaryGene], 'eyes');
                expect(phenotype.left).toBeTruthy();
                expect(phenotype.right).toBeTruthy();
            }
        }
    })
})

describe('nose genes', () => {
    test('all gene combinations have a phenotype', () => {
        const noseGenes = Object.keys(geneData.nose);
        for (let i = 0; i < noseGenes.length; i++) {
            const primaryGene = noseGenes[i];
            for (let j = i; j < noseGenes.length; j++) {
                const secondaryGene = noseGenes[j];
                console.log(`testing for ${primaryGene}${secondaryGene} in nose`);
                const phenotype = getPhenotype([primaryGene, secondaryGene], 'nose');
                expect(phenotype.center).toBeTruthy();
            }
        }
    })
})