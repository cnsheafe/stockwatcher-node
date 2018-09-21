import { sanitizeLike } from './util.sanitize-like'

describe('#sanitizeLike', () => {
  it('should replace LIKE wildcards with escaped characters', () => {
    const query = 'Mirco%soft_;drop table'
    expect(sanitizeLike(query)).toBe('Mirco\\%soft\\_;drop table')
  })
})
