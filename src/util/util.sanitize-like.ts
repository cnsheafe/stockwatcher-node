export const sanitizeLike = (query: string) => {
  // Escape wildcards
  const regex = /(%|_)/g

  return query.replace(regex, (match) => `\\${match}`)
}
