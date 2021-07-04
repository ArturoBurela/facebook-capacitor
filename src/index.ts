import { registerPlugin } from '@capacitor/core';

import type { FacebookCapacitorPlugin } from './definitions';

const FacebookCapacitor = registerPlugin<FacebookCapacitorPlugin>(
  'FacebookCapacitor',
  {
    web: () => import('./web').then(m => new m.FacebookCapacitorWeb()),
  },
);

export * from './definitions';
export { FacebookCapacitor };
