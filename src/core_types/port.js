import isInteger from './integer'

export default async (value) => (await isInteger(value)) && 0 < value && value < 65536
