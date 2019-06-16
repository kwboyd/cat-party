function pickGenes(geneSet1, geneSet2) {
    const gene1 = geneSet1[Math.floor(Math.random() * 2)];
    const gene2 = geneSet2[Math.floor(Math.random() * 2)];
    return [gene1, gene2];
}

export default pickGenes;