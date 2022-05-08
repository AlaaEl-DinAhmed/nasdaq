import { createOvermind } from 'overmind';
import { config } from './stocks';

export const overmind = createOvermind(config, { devtools: true });
