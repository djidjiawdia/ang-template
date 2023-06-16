export type Layout = 'empty' | 'portal';

export interface AppConfig {
  layout: Layout;
}

export const appConfig: AppConfig = {
  layout: 'portal',
};
