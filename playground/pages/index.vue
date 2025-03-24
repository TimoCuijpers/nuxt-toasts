<script setup lang="ts">
// import { useNotificationStore } from "../../src/runtime/composables/useNotificationStore";
// import NotificationComponent from "../../src/runtime/components/Notification.vue";
// import type { Notification } from "../../src/runtime/types";

const notificationStore = useNotificationStore();

const notificationProps = ref<Notification>({
  type: "info",
  title: "Test",
  text: "This is a test notification",
  interval: 3000,
});

const notify = () => {
  notificationStore.add(notificationProps.value);
};

const Download = (notification: Notification) => {
  // Perform download
  alert("Downloaded your file");

  // Remove notification
  notificationStore.removeNotification(notification.id);
};

const downloadFile = async () => {
  const notification = await notificationStore.add({
    type: "info",
    title: "Download ready",
    text: "Your file is ready to be downloaded. Click here to download.",
    interval: 30000,
    callback: () => Download(notification),
  });
};
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h1>Playground</h1>
      </v-card-title>

      <v-card-text class="d-flex flex-column">
        <v-select
          :items="['info', 'success', 'error', 'warning']"
          v-model="notificationProps.type"
          label="Type"
        />
        <v-text-field v-model="notificationProps.title" label="Title" />
        <v-text-field v-model="notificationProps.text" label="Text" />
        <v-text-field v-model="notificationProps.interval" label="Interval" />
        <!--    <v-textarea v-model="notificationProps.callback" label="Callback" />-->
        <v-btn
          color="blue"
          text="show notification"
          @click="notify()"
          class="mb-4"
        />

        <v-btn
          color="purple"
          text="Download (example)"
          @click="downloadFile()"
        />
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn
          color="blue"
          text="show info"
          @click="(notificationProps.type = 'info') && notify()"
        />

        <v-btn
          color="green"
          text="show success"
          @click="(notificationProps.type = 'success') && notify()"
        />

        <v-btn
          color="red"
          text="show error"
          @click="(notificationProps.type = 'error') && notify()"
        />

        <v-btn
          color="yellow"
          text="show warning"
          @click="(notificationProps.type = 'warning') && notify()"
        />
      </v-card-actions>
    </v-card>

    <Notification />
  </v-container>
</template>

<style scoped></style>
