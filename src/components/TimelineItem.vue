<template>
  <div class="relative pl-8 border-l-2 border-gray-200">
    <div
      class="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full"
    ></div>
    <h4 class="font-medium text-lg">{{ title }}</h4>
    <p class="text-gray-600">{{ subtitle }}</p>
    <span class="text-sm text-gray-500">{{ years }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  years: String,
});
</script>
