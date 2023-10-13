export const getData = async () => {
  const params = {}

  const response = await fetch('/api/member/List', {
    method: 'POST',
    body: JSON.stringify(params),
  })

  const result = await response.json()
  return result
}
