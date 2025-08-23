export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // light mode settings
        }
      : {
          // dark mode settings
        }),
  },
});
