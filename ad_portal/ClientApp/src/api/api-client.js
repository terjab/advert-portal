export const api = async url => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    }
  })

  return response.json()
}

