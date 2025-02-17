import { readFileSync } from 'fs'

// Get the version from the package.json file
export const projectVersion = JSON.parse(readFileSync('package.json', 'utf-8')).version;