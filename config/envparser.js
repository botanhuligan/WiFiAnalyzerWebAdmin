const DotEnv = require('dotenv')
const parsedEnv = DotEnv.config().parsed

module.exports = function () {
  let env = { ...parsedEnv }
  for (let key in env) {
    if (typeof env[key] === 'string') {
      env[key] = JSON.stringify(env[key])
    }
  }
  return env
}
