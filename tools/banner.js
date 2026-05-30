const packageJson = require('../package.json')

const banner = `/*!
 * ${packageJson.name} v${packageJson.version}
 * (c) 2022-2026 Michael Sun
 * Released under the ${packageJson.license} License.
 */`

module.exports = { banner }
