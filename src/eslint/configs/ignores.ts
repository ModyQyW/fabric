import { GLOB_EXCLUDE } from '../../constants';
import type { Config } from '../types';

export function ignores({ ignores = GLOB_EXCLUDE } = {}): Config[] {
  return [{ ignores }];
}
