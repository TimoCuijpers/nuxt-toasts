export interface Notification {
  id?: string;
  title: string;
  text?: string;
  type: "success" | "warning" | "info" | "error";
  interval: number;
  callback?: Function;
}
