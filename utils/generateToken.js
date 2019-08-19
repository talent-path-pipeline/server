const JWT_EXPIRATION_TIME = '2m';
const jwt = require('jsonwebtoken');

async function createToken(id, persona) {
  const payload = {
    id,
    persona
  };
  const additionalInformation = {
    issuer: 'TalentPathPipeLineServer',
    expiresIn: JWT_EXPIRATION_TIME
  };
  return jwt
    .sign(payload, process.env.PRIVATE_KEY, additionalInformation)
    .toString();
}
module.exports = createToken;
