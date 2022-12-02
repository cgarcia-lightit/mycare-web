export default function ({ $axios, redirect, env, $toast }) {
  $axios.onError((error) => {
    const authBase = env.AUTH_BASE_URL
    const authUrls = [
      authBase + env.AUTH_PATH_URL,
      authBase + '/api/user',
      env.AUTH_PATH_URL,
      '/api/user'
    ]
    if (error.response.status === 401 && !authUrls.includes(error.config.url)) {
      $toast.error('Your session has expired')
      redirect('/logout')
    }
    return Promise.reject(error)
  })
}
