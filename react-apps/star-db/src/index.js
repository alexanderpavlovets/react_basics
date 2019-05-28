console.log('Hello from React')

const getResource = async (url) => {
  const resp = await fetch(url)

  if (!resp.ok) {
    throw new Error(`Could not fetch ${url}. Got ${resp.status}`)
  }
  const body = await resp.json()
  return body
}

getResource('https://swapi.co/api/people/1asdasd')
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

console.log('React app')