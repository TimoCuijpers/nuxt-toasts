<script setup lang="ts">
import {useNotificationStore} from "../../src/runtime/composables/useNotificationStore";
import Notification from "../../src/runtime/components/Notification.vue";

const notificationStore = useNotificationStore()

const notificationProps = ref({
  type: 'info',
  title: 'Test',
  text: 'This is a test notification',
  interval: 3000,
  callback: null
})

const notify = () => {
  notificationStore.add(notificationProps.value)
}
</script>

<template>
  <v-container>
<v-card>
  <v-card-title>
    <h1>Playground</h1>
  </v-card-title>

  <v-card-text>
    <v-select :items="[ 'info', 'success', 'error', 'warning' ]" v-model="notificationProps.type" label="Type" />
    <v-text-field v-model="notificationProps.title" label="Title" />
    <v-text-field v-model="notificationProps.text" label="Text" />
    <v-text-field v-model="notificationProps.interval" label="Interval" />
<!--    <v-textarea v-model="notificationProps.callback" label="Callback" />-->
    <v-btn color="blue" text="show notification" @click="notify()" />
  </v-card-text>

  <v-card-actions>

    <v-btn color="blue" text="show info" @click="(notificationProps.type = 'info') && notify()" />

    <v-btn color="green" text="show success" @click="(notificationProps.type = 'success') && notify()" />

    <v-btn color="red" text="show error" @click="(notificationProps.type = 'error') && notify()" />

    <v-btn color="yellow" text="show warning" @click="(notificationProps.type = 'warning') && notify()" />
  </v-card-actions>

</v-card>

    <Notification />
  </v-container>
</template>

<style scoped>

</style>
