// import axios from "axios"

export const allApps = () => {
  return fetch('https://demo3241810.mockable.io/apps')
    .then( res => res.json() )
    .catch( err => {
      throw err 
    })
}