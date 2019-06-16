import catBodies from '../catData/catBodies';

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
    const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    const vowels = ['a','e','i','o','u'];
    const nameLength = 6;
    const name = [];
    for (let i = 0; i < nameLength; i++) {
        if (i % 2 === 0) {
            name.push(consonants[getRandomNumber(consonants.length)]);
        } else {
            name.push(vowels[getRandomNumber(vowels.length)]);
        }
    }
    return name.join('');
}

export { pickBody, pickGenes, pickSex, pickName };