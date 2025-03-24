<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Nuxt Toasts
- Package name: nuxt-toasts
- Description: Notification manager for Nuxt.
-->

# Nuxt Toasts

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things.

- [✨ &nbsp;Release Notes](./CHANGELOG.md)

## Features

### Notification Store

This project provides a Pinia store for managing notifications within a Vue.js application. It leverages Vue's reactivity and lodash utility functions to handle notifications that are automatically removed after a specified interval.

### Notification Component

The project also includes a notification component that displays notifications from the store. The component listens for changes in the notifications list and displays a toast for each notification. The toast includes a title, text, and when clicked, it automatically disappears. The toast is styled based on the notification type (success, warning, info, error).

## Overview

The store manages a list of notifications. Each notification includes:
- **id**: A unique identifier generated using `_.uniqueId()`.
- **title**: The title of the notification.
- **text**: (Optional) A description or additional information.
- **type**: The notification type. Available types include: `success`, `warning`, `info`, and `error`.
- **interval**: The duration (in milliseconds) after which the notification is automatically removed (default is 3000 ms).
- **response**: (Optional) Additional data or response information.

## Functions

### addNotification()
- **Description:** Creates a notification object and adds it to the notifications list.
- **Operation:**
  - Generates a unique id using `_.uniqueId()`.
  - Pushes the notification into a reactive array.
  - Sets a timer with `setTimeout` to remove the notification after the specified interval.

### add()
- **Description:** An asynchronous function that adds notifications with default values if not all parameters are provided.
- **Usage:** Accepts a partial notification object (excluding the id), fills in missing values, and then calls `addNotification`.
- **Example:**
  ```js
  // Notification with default values
  add();

  // Notification with custom values
  add({ type: 'error', title: 'Error!', text: 'Something went wrong.', interval: 5000 });

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-toasts
```

Now use the Notification.vue component in your Nuxt application:

```vue
<template>
  <v-main>
    <!-- Your app content -->
    
    <Notification /> <- Add this line
  </v-main>
</template>
```

You can create notifications using the `useNotificationStore` function:

```vue
<script setup lang="ts">
  import { useNotificationStore } from 'nuxt-toasts';
  
  const notificationStore = useNotificationStore();
  
  const onSubmit = async () => {
    try {
      // Perform an action
    } catch (error) {
      notificationStore.add({ type: 'error', title: 'Error!', text: 'Something went wrong.' });
    }
  };
  
  const onLogout = async () => {
    notificationStore.add({ type: 'info', title: 'Logged out', text: 'You have been logged out.' });
  };

  const Download = (notification) => {
    // Perform download
    alert('Downloaded your file');

    // Remove notification
    notificationStore.remove(notification.id);
  }

  const downloadFile = async () => {
    const notification = await notificationStore.add({
      type: 'info',
      title: 'Download ready',
      text: 'Your file is ready to be downloaded. Click here to download.',
      interval: 30000,
      callback: () => Download(notification)
    });
  };
</script>
```

That's it! You can now use Nuxt Toasts in your Nuxt app ✨


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-toasts/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-toasts

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-toasts.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-toasts

[license-src]: https://img.shields.io/npm/l/nuxt-toasts.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-toasts

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
