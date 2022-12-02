
export default function ({ $auth, redirect }) {
  $auth.onError(() => {
    redirect('/login')
  })
}
