export const extractRgbFromHex = (hex: string) => {
  // Extracts the RGB components from a hexadecimal color (e.g., "#RRGGBB")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const r = parseInt(result![1], 16);
  const g = parseInt(result![2], 16);
  const b = parseInt(result![3], 16);
  return `${r}, ${g}, ${b}`;
};
