export function emailValidator(email: string) {
  return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
}
export function dateValidator(date: string) {
  return !(new Date() < new Date(date))
}
