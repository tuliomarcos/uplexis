export const allSources = () => {
  return fetch('https://demo3241810.mockable.io/sources')
    .then(res => res.json())
    .catch(err => {
      throw err
    })
}