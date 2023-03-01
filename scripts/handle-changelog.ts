import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { simpleGit } from 'simple-git';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const changelogPath = resolve(__dirname, '..', 'CHANGELOG.md');

(async () => {
  await simpleGit().add(changelogPath);
})();
