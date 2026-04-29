import fs from 'fs';
import path from 'path';

const cache: Record<string, string> = {};

export const getSQL = (fileName: string) => {
    if (cache[fileName]) return cache[fileName];

    const filePath = path.join(__dirname, 'db', fileName);
    const sql = fs.readFileSync(filePath, 'utf-8');

    cache[fileName] = sql;
    return sql;
};