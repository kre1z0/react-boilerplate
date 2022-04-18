import React, { lazy, Suspense, ReactNode, ComponentType, ComponentProps } from "react";

interface Opts {
  fallback: ReactNode;
}

type Unpromisify<T> = T extends Promise<infer P> ? P : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lazyLoad = <T extends Promise<any>, U extends ComponentType<any>>(
  importFunc: () => T,
  selectorFunc?: (s: Unpromisify<T>) => U,
  opts: Opts = { fallback: null },
) => {
  let lazyFactory: () => Promise<{ default: U }> = importFunc;

  if (selectorFunc) {
    lazyFactory = () => importFunc().then((module) => ({ default: selectorFunc(module) }));
  }

  const LazyComponent = lazy(lazyFactory);

  return (props: ComponentProps<U>): JSX.Element => (
    <Suspense fallback={opts.fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
