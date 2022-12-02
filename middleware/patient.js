function personalDataIsEmpty (data) {
  return !data.contact_phone || !data.weight || !data.height
}

export default function ({ redirect, route, store }) {
  const path = route.path
  if (path === '/logout') {
    return
  }
  const user = store.state.auth.user
  if (path !== '/patient/profile' && user && user.type_id === 'PATIENT' &&
    (!user.personal_data || personalDataIsEmpty(user.personal_data))) {
    redirect('/patient/profile')
  }
}
