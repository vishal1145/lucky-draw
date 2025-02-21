<template>
  <div class="min-h-screen bg-gray-100">
    <!-- <NavBar /> -->
    <main>
      <Toaster
        v-if="isVisible"
        :message="message"
        :type="type"
        :show="isVisible"
      />
      <router-view></router-view>
    </main>
    <!-- <Toaster
      :show="toast.isVisible"
      :message="toast.message"
      :type="toast.type"
      :duration="toast.duration"
      @close="toast.hideToast"
    /> -->
  </div>
</template>

<script setup>
// import NavBar from "./components/NavBar.vue";
import Toaster from "@/components/common/Toaster.vue";

import { useToast } from "@/composables/useToast";

const { isVisible, message, type } = useToast();

// import Toaster from "./components/common/Toaster.vue";
// import { useToast } from "./composables/useToast";

// const toast = useToast();
</script>
