export default function ({ $axios, store }) {
    // $axios.setHeader('Authorization', `Bearer ${store.state.auth.token}`);
  
    $axios.onRequest(config => {
      console.log('Making request to ', config.url)
    })
  
    $axios.onResponse(response => {
      console.log('Response received from ', response.config.url)
    })
  
    $axios.onError(error => {
      console.log('Error occurred during request to ', error.config.url)
      console.log(error.response.data)
      return Promise.reject(error)
    })
}