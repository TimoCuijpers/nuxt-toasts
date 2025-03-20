<template>
  <v-sheet
    class="bg-transparent mt-8 mr-10 d-flex flex-column align-end"
    location="top right"
    position="fixed"
    style="z-index: 999999999999"
  >
    <v-scroll-y-reverse-transition group>
      <v-alert
        v-for="notification in notificationStore.notifications"
        :key="notification.id"
        v-model="notification.show"
        class="mt-2 flex-grow-0 rounded-lg cursor-pointer"
        density="compact"
        max-width="400px"
        :text="notification.text"
        :title="notification.title"
        :type="notification.type"
        variant="tonal"
        @click="clickHandler(notification.id, notification?.callback)"
      />
    </v-scroll-y-reverse-transition>
  </v-sheet>
</template>

<script setup>
import { useNotificationStore } from '../composables/useNotificationStore.ts'

const notificationStore = useNotificationStore()

const clickHandler = (id, callback) => {
  if (callback) {
    return callback()
  }

  notificationStore.remove(id)
}
</script>
