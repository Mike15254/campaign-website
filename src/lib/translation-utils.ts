export function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}
