import { createPinia, defineStore } from "pinia";
import { ref } from "vue";

import type { Notification } from "../types";
import _ from "../packages/lodash.js";

const pinia = createPinia();

export const useNotificationStore = defineStore("notification", () => {
  const notifications = ref<Notification[]>([]);

  const addNotification = (
    type: "success" | "warning" | "info" | "error",
    title: string,
    text: string = "",
    interval: number = 3000,
    callback: any = null,
  ) => {
    const notification = {
      id: _.uniqueId(),
      title,
      text,
      type,
      interval,
      callback,
    };

    // Beschikbare types: success, warning, info en error
    notifications.value.push(notification);

    setTimeout(() => {
      removeNotification(notification.id);
    }, interval);

    return notification;
  };

  /**
   * Adds a notification.
   *
   * @param {Notification} notification - The notification object or parameters to convert.
   * @returns {void}
   */

  /**
   * @example
   * // Adds a notification with default values
   * add();
   *
   * @example
   * // Adds a notification with custom values
   * add({ type: 'error', title: 'Error!', text: 'Something went wrong.', interval: 5000 });
   *
   * @example
   * // Adds a notification using NotificationParams
   * const params = { type: 'success', title: 'Great!', text: 'Everything is fine.', interval: 2000 };
   * add(params);
   */
  const add = async (notification: Partial<Omit<Notification, "id">> = {}) => {
    const {
      type = "info",
      title = "",
      text = "",
      interval = 3000,
      callback = null,
    } = notification;

    return addNotification(type, title, text, interval, callback);
  };

  /**
   * Removes a notification.
   *
   * @param {string} notificationId - The id of the notification to remove.
   */

  /**
   *
   * @example
   * // Removes a notification
   * remove(notificationId);
   */
  function removeNotification(notificationId?: string) {
    _.remove(notifications.value, { id: notificationId });
  }

  return {
    notifications,
    add,
    removeNotification,
  };
});

useNotificationStore(pinia);

export default useNotificationStore;
