import type { UserConfig } from '@commitlint/types';

export type Config = UserConfig;

export interface Options {
  /**
   * Monorepo support.
   *
   * Option true: auto detect.
   *
   * Option false: no monorepo.
   *
   * @default true
   */
  monorepo?: 'lerna' | 'nx' | 'pnpm-workspace' | 'rush' | boolean;
  /**
   * Commit style.
   *
   * @default 'conventional'
   */
  style?: 'angular' | 'conventional';
}
