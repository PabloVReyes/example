import * as React from 'react';
import createCache from '@emotion/cache';
import type { EmotionCache, Options as OptionsOfCreateCache } from '@emotion/cache';
import { CacheProvider as DefaultCacheProvider } from '@emotion/react';

export interface EmotionCacheProviderProps {
  options: Omit<OptionsOfCreateCache, 'insertionPoint'>;
  CacheProvider?: (props: { value: EmotionCache; children: React.ReactNode }) => any | null;
  children: React.ReactNode;
}

export default function EmotionCacheProvider({
  options,
  CacheProvider = DefaultCacheProvider,
  children,
}: EmotionCacheProviderProps) {
  const [cache] = React.useState<EmotionCache>(() => {
    const cache = createCache(options);
    cache.compat = true;
    return cache;
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
