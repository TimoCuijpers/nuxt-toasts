interface Notification {
  id: number | null
  type: string
  title: string
  text: string | null | undefined
  interval: number
  callback(): () => unknown | null
}
