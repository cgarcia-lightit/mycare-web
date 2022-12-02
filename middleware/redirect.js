export default function ({ store, redirect, route }) {
  const hasUser = store.state.auth.user
  if (!hasUser && route.path !== '/register' && route.path !== '/email/verify' && route.path !== '/login') {
    redirect('/login')
  }
  if ((route.path === '/login' || route.path === '/') && hasUser) {
    redirect('/home')
  }
}
