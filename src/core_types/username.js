import { isEmpty } from 'v_is_empty_value'

export default async (value) => {
  if (isEmpty(value)) return false

  const usernameRegex = /^[A-Za-z][A-Za-z0-9_.]{2,32}$/

  return usernameRegex.test(value)
}
