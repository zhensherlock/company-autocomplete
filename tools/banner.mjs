import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const packageJsonPath = resolve(__dirname, '../package.json')
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'))

export const banner = `/*!
 * ${packageJson.name} v${packageJson.version}
 * (c) 2022-2026 Michael Sun
 * Released under the ${packageJson.license} License.
 */`
