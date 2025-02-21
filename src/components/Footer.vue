<template>
  <footer class="bg-indigo-600 text-white py-8 sm:py-12 lg:py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Navigation Links -->
      <!-- <div class="mb-8 sm:mb-10 lg:mb-12">
        <nav class="flex flex-col sm:flex-row justify-center items-center">
          <div class="grid grid-cols-2 sm:flex sm:flex-row gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base">
            <a href="#" class="hover:text-gray-300 transition-colors py-2">About</a>
            <a href="#" class="hover:text-gray-300 transition-colors py-2">Blog</a>
            <a href="#" class="hover:text-gray-300 transition-colors py-2">Jobs</a>
            <a href="#" class="hover:text-gray-300 transition-colors py-2">Press</a>
            <a href="#" class="hover:text-gray-300 transition-colors py-2">Accessibility</a>
            <a href="#" class="hover:text-gray-300 transition-colors py-2">Partners</a>
          </div>
        </nav>
      </div> -->

      <!-- Social Media Links -->
      <div class="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
        <a
          v-for="(icon, name) in socialIcons"
          :key="name"
          href="#"
          class="hover:text-gray-300 transition-colors p-2 sm:p-0"
          v-html="icon"
        ></a>
      </div>

      <!-- Copyright -->
      <div class="text-center text-xs sm:text-sm text-gray-300 px-4">
        © 2025 Algofolks PVT LTD, Inc. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { socialIcons } from "@/assets/icons/socialIcons";
</script>

<style scoped>
.bg-indigo-600 {
  background-color: #4f46e5;
}
</style>
