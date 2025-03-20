import { createPinia, defineStore } from 'pinia'
import lodash from 'lodash'
import { ref } from 'vue'
import type Notification from '../../types/noti-nuxt'

const pinia = createPinia()

export const useNotificationStore = defineStore('notification', () => {
  // interface Notification {
  //   id: number | null
  //   type: string
  //   title: string
  //   text: string | null | undefined
  //   interval: number
  //   callback(): () => unknown | null
  // }

  const notifications = ref<Notification[]>([])

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
  const add = (notification: Notification) => {
    notifications.value.push(notification)

    setTimeout(() => {
      lodash.remove(notifications.value, notification)
    }, notification.interval)
  }

  /**
   * Removes a notification.
   *
   * @param {number} notificationId - The id of the notification to remove.
   */

  /**
   *
   * @example
   * // Removes a notification
   * remove(notificationId);
   */
  function remove(notificationId: number) {
    lodash.remove(notifications.value, { id: notificationId })
  }

  return {
    notifications,
    add,
    remove,
  }
})

useNotificationStore(pinia)
