import { readFileSync, writeFileSync } from 'node:fs';
import { simpleGit } from 'simple-git';

const filePath = 'CHANGELOG.md';

const content = readFileSync(filePath, { encoding: 'utf8' });
if (!content.startsWith('# Changelog')) {
  writeFileSync(filePath, `# Changelog\n\n${content}`);
}

simpleGit().add(filePath);
