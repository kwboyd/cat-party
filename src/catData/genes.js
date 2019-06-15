const geneData = {
    whiskers: {
        '>': {
            dominant: true,
            basePhenotype: {
                left: '>>',
                right: '<<'
            }
        },
        '=': {
            dominant: true,
            basePhenotype: {
                left: '==',
                right: '=='
            }
        },
        '~': {
            dominant: false,
            basePhenotype: {
                left: '~~',
                right: '~~'
            }
        }
    },
    eyes: {
        'o': {
            dominant: true,
            basePhenotype: {
                left: 'o',
                right: 'o'
            }
        },
        '-': {
            dominant: false,
            basePhenotype: {
                left: '-',
                right: '-'
            }
        },
        '@': {
            dominant: false,
            basePhenotype: {
                left: '@',
                right: '@'
            }
        }
    },
    nose: {
        'v': {
            dominant: true,
            basePhenotype: {
                center: 'v'
            }
        },
        '^': {
            dominant: true,
            basePhenotype: {
                center: '^'
            }
        },
        'u': {
            dominant: false,
            basePhenotype: {
                center: 'u'
            }
        }
    }
}

const combinations = {
    whiskers: {
        '>=': {
            left: '>=',
            right: '=<'
        }
    },
    nose: {
        'v^': {
            center: '-'
        }
    },
    eyes: {
        '-@': {
            left: '-',
            right: '@'
        }
    }
}

export { geneData, combinations };