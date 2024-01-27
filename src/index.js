import { createFunctionName, getNameFromFunction } from './utils'
import * as coreTypes from './core_types'

const v_rifier = (options = {}) => {
  let builtIns = typeof options.builtIns === 'boolean' ? options.builtIns : true

  const verify = async (type, ...args) => {
    type = createFunctionName(type)
    if (verify[type] === undefined) return false
    return verify[type](...args)
  }

  verify.register = (type, fn) => {
    if (typeof fn === 'function' && typeof type === 'string') {
      type = createFunctionName(type)
      if (verify[type] === undefined) {
        verify[type] = fn
        verify[type].custom = true
        return true
      }
      return false
    }
    return false
  }

  verify.unregister = (type) => {
    type = createFunctionName(type)
    if (typeof type === 'string' && verify[type] !== undefined) {
      if (verify[type].custom === true) {
        delete verify[type]
        return true
      }
    }
    return false
  }

  verify.listTypes = () => {
    const types = []
    for (let type in verify) {
      if (verify[type].custom === true) {
        types.push(getNameFromFunction(type))
      }
    }
    return types
  }

  //? Maybe Load BuiltIns
  if (builtIns) {
    for (let type in coreTypes) {
      verify.register(type, coreTypes[type])
    }
  }

  return verify
}

export default v_rifier
