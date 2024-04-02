export const getData = async () => {
  const params = {
    id: 1,
  }

  const response = await fetch('/api/member/View', {
    method: 'POST',
    body: JSON.stringify(params),
  })

  const result = await response.json()
  return result
}


export const updateUserInfo = async info => {
  const params = {
    id: info.id,
    email: info.email,
    nickname: info.nickname,
    password: info.password,
    isAdmin: info.isAdmin,
  }

  const response = await fetch('/api/member/Update', {
    method: 'POST',
    body: JSON.stringify(params),
  })

  const result = await response.json()
  return result
}


