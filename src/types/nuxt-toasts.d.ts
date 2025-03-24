type Notification = {
  id: string
  type: string
  title: string
  text: string | null | undefined
  interval: number
  callback: null | Function
}
