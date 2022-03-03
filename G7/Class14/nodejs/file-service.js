import fs from 'fs';

export const readFile = filePath => {
    return fs.readFileSync(filePath, {encoding: 'utf-8'})
}

export const writeInFile = (filePath, data) => fs.appendFileSync(filePath, data);

export const writeToFile = (filePath, data) => fs.writeFileSync(filePath, data);

export const saveJSON = (filePath, data) => writeToFile(filePath, JSON.stringify(data, null, 2))

export const readJSON = filePath => JSON.parse(readFile(filePath));
