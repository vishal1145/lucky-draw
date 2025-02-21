<template>
  <nav class="bg-white text-gray-600">
    <div class="w-full px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-xl font-bold">
            <img
              src="/src/assets/Images/logo.png"
              alt="Logo"
              class="h-20 w-auto rounded-full"
            />
          </router-link>
        </div>
        <div class="flex space-x-4">
          <!-- <router-link
            to="/"
            class="hover:bg-white px-3 py-2 rounded-md"
            active-class="bg-indigo-700"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="hover:bg-white px-3 py-2 rounded-md"
            active-class="bg-indigo-700"
          >
            About
          </router-link>
          <router-link
            to="/contact"
            class="hover:bg-white px-3 py-2 rounded-md"
            active-class="bg-indigo-700"
          >
            Contact
          </router-link> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Component logic here if needed
</script>
