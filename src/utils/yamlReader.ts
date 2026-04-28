import fs from 'fs';
import YAML from 'yaml';

export function getYamlData(filePath: string) {
  const file = fs.readFileSync(filePath, 'utf8');

  const parsed = YAML.parse(file);

  if (!parsed) {
    throw new Error('YAML parsing failed - check file format');
  }

  return parsed;
}