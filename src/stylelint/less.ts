import type { Configuration } from 'stylelint';
import css from './css';

const config: Partial<Configuration> = {
  ...css,
};

export default config;
