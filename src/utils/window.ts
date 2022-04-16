const getBasename = (): string | undefined => {
  if (process.env.NODE_ENV === "development") {
    return;
  }
  const [, basename] = location.pathname.split("/");

  return basename;
};

export const routerBasename = getBasename();
