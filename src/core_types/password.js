export default async (value, confirmation) => value === confirmation && /^[A-Za-z0-9!@#$%^&*()_.]{6,32}$/.test(value)
