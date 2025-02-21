<template>
  <div
    v-if="show"
    class="fixed top-4 right-4 z-50 min-w-[320px] transform transition-all duration-300"
    :class="[
      show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
      typeClasses[type],
    ]"
  >
    <div class="flex items-center p-4 rounded-lg shadow-lg">
      <!-- Icon -->
      <div
        class="flex-shrink-0 mr-3"
        v-html="type === 'success' ? icons.success : icons.error"
      ></div>

      <!-- Message -->
      <div class="flex-1">
        <p class="text-sm font-medium">{{ message }}</p>
      </div>

      <!-- Close Button -->
      <button
        @click="closeToast"
        class="flex-shrink-0 ml-3 text-current hover:text-current/80 transition-colors"
        v-html="icons.close"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { icons } from "@/assets/icons";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "success",
    validator: (value) => ["success", "error"].includes(value),
  },
  duration: {
    type: Number,
    default: 3000,
  },
});

const emit = defineEmits(["close"]);

const typeClasses = {
  success: "bg-indigo-600 text-white",
  error: "bg-red-600 text-white",
};

const closeToast = () => {
  emit("close");
};

// Auto-close timer
watch(
  () => props.show,
  (newValue) => {
    if (newValue && props.duration > 0) {
      setTimeout(() => {
        closeToast();
      }, props.duration);
    }
  }
);
</script>
