import { WebPlugin } from '@capacitor/core';

import type { FacebookCapacitorPlugin } from './definitions';

export class FacebookCapacitorWeb
  extends WebPlugin
  implements FacebookCapacitorPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
