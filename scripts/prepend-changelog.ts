import { readFileSync, writeFileSync } from 'node:fs';

const filePath = 'CHANGELOG.md';

const content = readFileSync(filePath, { encoding: 'utf8' });
if (!content.startsWith('# Changelog')) {
  writeFileSync(filePath, `# Changelog\n\n${content}`);
}
