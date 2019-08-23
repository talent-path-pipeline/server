const { ExtractJwt, Strategy } = require('passport-jwt');
const { getUserToken } = require('../db/user');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.PRIVATE_KEY;
opts.issuer = 'accounts.tppipeline.com';
opts.audience = 'tppipeline.com';
opts.expiresIn = process.env.JWT_EXPIRATION_TIME;

const JWTStrategy = new Strategy(opts, async (jwtPayload, done) => {
  try {
    console.log(`These are values:${jwtPayload.id}`);
    const storedToken = await getUserToken(jwtPayload.id);
    if (storedToken.token) {
      return done(null, storedToken.id);
    }
    return done(null, false);
  } catch (err) {
    console.error('SOMETHING WENT WRONG ON PASSPORTs')
    throw err;
  }
});
module.exports = JWTStrategy;
