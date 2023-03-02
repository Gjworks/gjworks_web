export const getData = async mid => {
  const data = {
    mid: mid,
  }

  const response = await fetch('/api/posts/List', {
    method: 'POST',
    body: JSON.stringify(data),
  })
  const result = await response.json()
  return result
}
