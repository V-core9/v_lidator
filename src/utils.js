export const createFunctionName = (name) => {
  return 'is' + name.charAt(0).toUpperCase() + name.slice(1)
}

export const getNameFromFunction = (name) => {
  name = name.replace('is', '')
  return name.charAt(0).toLowerCase() + name.slice(1)
}
