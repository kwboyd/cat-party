import catBodies from '../catData/catBodies';
import { names, titles } from '../catData/names';

function getRandomNumber(length) {
   return Math.floor(Math.random() * length);
} 

function pickBody() {
    return catBodies[getRandomNumber(catBodies.length)];
}

function pickGenes(geneSet1, geneSet2) {
    const gene1 = geneSet1[getRandomNumber(geneSet1.length)];
    const gene2 = geneSet2[getRandomNumber(geneSet2.length)];
    return [gene1, gene2];
}

function pickSex() {
    return getRandomNumber(2) === 1;
}

function pickName() {
    const name = names[getRandomNumber(names.length)];
    const title = titles[getRandomNumber(titles.length)];
    return `${name} the ${title}`;
}

export { pickBody, pickGenes, pickSex, pickName };