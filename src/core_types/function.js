export default async (value) => (value !== null ? typeof value === 'function' : false)
