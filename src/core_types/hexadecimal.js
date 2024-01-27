export default async (value) => (typeof value !== 'string' ? false : /^[0-9a-fA-F]+$/.test(value))
