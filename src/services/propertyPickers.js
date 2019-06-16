import catBodies from '../catData/catBodies';

function pickBody() {
    return catBodies[Math.floor(Math.random() * catBodies.length)];
}

function pickGenes(geneSet1, geneSet2) {
    const gene1 = geneSet1[Math.floor(Math.random() * 2)];
    const gene2 = geneSet2[Math.floor(Math.random() * 2)];
    return [gene1, gene2];
}

function pickSex() {
    return Math.floor(Math.random() * 2) === 1;
}

export { pickBody, pickGenes, pickSex };