import catBodies from '../catData/catBodies';

function pickBody() {
    return catBodies[Math.floor(Math.random() * catBodies.length)];
}

export default pickBody;