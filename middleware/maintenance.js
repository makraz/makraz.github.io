export default function ({ redirect, route }) {
  const isMaintenance = false
  if (isMaintenance && route.path !== '/maintenance') {
    return redirect('/maintenance')
  }
}
