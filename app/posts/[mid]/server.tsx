export const getData = async () => {
  const data = {
    documentId: 1,
  }

  const response = await fetch('/api/posts/List', {
    method: 'POST',
    body: JSON.stringify(data),
  })
  console.log(response)
  const result = await response.json()
  return result
}
