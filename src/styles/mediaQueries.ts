const size = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;

export const device = {
  sm: `screen and (max-width: ${size.sm})`,
  md: `screen and (max-width: ${size.md})`,
  lg: `screen and (max-width: ${size.lg})`,
  xl: `screen and (max-width: ${size.xl})`,
} as const;
