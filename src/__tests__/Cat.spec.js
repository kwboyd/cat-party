import { geneData } from '../catData/genes';
import Cat from '../classes/Cat';
import generateRandomCat from '../services/randomCatGenerator';

function generateFather() {
    const cat = generateRandomCat();
    cat.male = true;
    return cat;
}

function generateMother() {
    const cat = generateRandomCat();
    cat.male = false;
    return cat;
}

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

test('breeding two cats with all the same genes returns a cat with those genes', () => {
    const dominantEyeGene = findDominant('eyes');
    const father = generateFather();
    father.genes.eyes = [dominantEyeGene, dominantEyeGene];
    const mother = generateMother();
    mother.genes.eyes = [dominantEyeGene, dominantEyeGene];

    const kitten = new Cat(mother, father);
    expect(kitten.genes.eyes).toEqual(father.genes.eyes);
})

test('breeding a cat with two recessive genes and a cat with two dominant returns a cat with one recessive and one dominant', () => {
    const dominantEyeGene = findDominant('eyes');
    const recessiveEyeGene = findRecessive('eyes');

    const father = generateFather();
    father.genes.eyes = [dominantEyeGene, dominantEyeGene];
    const mother = generateMother();
    mother.genes.eyes = [recessiveEyeGene, recessiveEyeGene];

    const kitten = new Cat(mother, father);
    expect(kitten.genes.eyes.includes(recessiveEyeGene)).toBe(true);
    expect(kitten.genes.eyes.includes(dominantEyeGene)).toBe(true);
})

test('breeding a cat with two recessive genes and a cat with two dominant returns a cat with one recessive and one dominant', () => {
    const dominantWhiskerGene = findDominant('whiskers');
    const recessiveWhiskerGene = findRecessive('whiskers');

    const father = generateFather();
    father.genes.whiskers = [dominantWhiskerGene, dominantWhiskerGene];
    const mother = generateMother();
    mother.genes.whiskers = [recessiveWhiskerGene, recessiveWhiskerGene];

    const kitten = new Cat(mother, father);
    expect(kitten.genes.whiskers.includes(recessiveWhiskerGene)).toBe(true);
    expect(kitten.genes.whiskers.includes(dominantWhiskerGene)).toBe(true);
})

test('new cats can only have genes from their parents', () => {
    const father = generateFather()
    const mother = generateMother();

    const kitten = new Cat(mother, father);
    kitten.genes.nose.forEach(gene => {
        expect([...mother.genes.nose, ...father.genes.nose].includes(gene)).toBe(true);
    })
})