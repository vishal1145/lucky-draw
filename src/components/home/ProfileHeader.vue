<template>
  <div
    class="flex relative flex-col items-center justify-center pt-3 px-4 sm:px-6 lg:px-8"
  >
    <!-- Client Count -->
    <div
      class="flex items-start flex-col justify-start absolute left-4 sm:left-8 md:left-16 lg:left-32 bottom-17 sm:bottom-10 z-30"
    >
      <h1 class="text-2xl sm:text-4xl font-bold text-gray-500 p-0 m-0">
        {{ noOfUser }} +
      </h1>
      <h4 class="font-semibold p-0 m-0 text-sm sm:text-xl text-gray-400 mb-2">
        Happy Clients
      </h4>
      <div class="flex -space-x-2">
        <div v-for="i in allUserRegistered.splice(0, 3)" :key="i">
          <template v-if="i.image_url">
            <img
              :src="i.image_url"
              class="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-sm"
              alt="Client"
            />
          </template>
          <template v-else>
            <div
              class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-xs text-white"
            >
              {{ i.name ? i.name.charAt(0) : "+" }}
            </div>
          </template>
        </div>
        <div
          class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-600"
        >
          +
        </div>
      </div>
    </div>

    <div class="absolute top-2 right-4 sm:right-8 lg:right-32">
      <img
        src="/src/assets/Images/logo.png"
        alt="Logo"
        class="h-12 sm:h-16 lg:h-20 w-auto rounded-full"
      />
    </div>

    <!-- Header Text -->
    <div class="absolute top-0 text-center w-full px-4">
      <h1 class="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        I'm <span class="text-indigo-600 underline decoration-2">Jenny</span>,
      </h1>
      <h2
        class="text-xl sm:text-4xl lg:text-5xl text-gray-800 font-bold tracking-widest"
      >
        Product Designer
      </h2>
    </div>

    <!-- Main Content Container -->
    <div class="w-full text-center flex justify-center mt-24 sm:mt-16">
      <!-- Profile Image Section -->
      <div
        class="relative w-full sm:w-[470px] h-[400px] sm:h-[470px] flex justify-center"
      >
        <!-- Background Shape -->
        <div
          class="absolute bottom-0 w-[200px] sm:w-[280px] -left-6 sm:-left-10 h-[200px] sm:h-[250px] bg-indigo-600 rounded-2xl relativre hidden sm:block"
          style="transform: rotate(77deg)"
        ></div>

        <!-- Profile Image -->
        <img
          :src="profileImage"
          alt="Jenny"
          class="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[360px] h-[320px] sm:h-[390px] object-cover object-top rounded-2xl"
        />

        <div
          class="absolute bottom-0 w-[200px] sm:w-[280px] -right-8 sm:-right-12 h-[200px] sm:h-[250px] bg-sky-50 z-10 rounded-2xl relative-second hidden sm:block"
          style="transform: rotate(-77deg)"
        ></div>

        <div
          class="flex flex-col for-button sm:flex-row bg-white justify-center gap-2 sm:gap-4 absolute -bottom-20 sm:bottom-4 z-30 p-2 rounded-full w-full sm:w-auto"
        >
          <button
            class="px-4 sm:px-6 py-2.5 btn-padding bg-indigo-600 text-white rounded-full cursor-pointer flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
            @click="scrollToContactSection"
          >
            Participate Now
            <div
              class="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-lime-500 border-2 border-lime-500 flex items-center justify-center text-xs text-white"
              v-html="icons.arrowDown"
            ></div>
          </button>
          <button
            class="px-6 sm:px-10 py-2.5 bg-white btn-padding border border-dark-200 text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 transition-colors"
          >
            <div class="flex justify-center space-x-3 sm:space-x-6">
              <a
                href="#"
                class="hover:text-gray-300 transition-colors"
                v-html="socialIcons.facebook"
              ></a>
              <a
                href="#"
                class="hover:text-gray-300 transition-colors"
                v-html="socialIcons.github"
              ></a>
              <a
                href="#"
                class="hover:text-gray-300 transition-colors"
                v-html="socialIcons.twitter"
              ></a>
            </div>
            <!-- Hire Me -->
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { socialIcons } from "@/assets/icons/socialIcons";
import { ref, onMounted } from "vue";
import { icons } from "@/assets/icons";
import profileImage from "@/assets/Images/profile.png";

defineProps({
  noOfUser: String,
  allUserRegistered: Array,
});

const loading = ref(false);

const scrollToContactSection = () => {
  const contactSection = document.getElementById("contact-section");
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

.grayscale {
  filter: grayscale(100%) contrast(1.1);
  mix-blend-mode: multiply;
}

.relativre[data-v-0527c9ee] {
  clip-path: polygon(18% 0%, 100% 0, 87% 96%, -2% 100%);
}

.relative-second {
  clip-path: polygon(0% 1%, 66% 0%, 84% 100%, 14% 100%);
}

/* Font settings */
h1,
h2,
button {
  font-family: "Inter", sans-serif;
}

@media (max-width: 640px) {
  .relative {
    height: 260px;
  }
  .for-button {
    display: flex;
    flex-direction: row;
    width: auto;
    bottom: 3.5em;
  }

  .btn-padding {
    font-size: 12px;
    padding: 0.5em 2em 0.5em 2em;
  }

  img.absolute {
    width: 60%;
    height: 250px;
  }
}
@media (min-width: 0px) and (max-width: 503px) {
  /* Styles for screens between 0 and 503px */
  img.absolute {
    width: 80%;
    height: 250px;
  }
}

/*
 @media only screen and (min-width: 1440px) {
  .relative {
    height: 380px;
  }

  img.absolute {
    width: 100%;
    height: 360px;
  }
} */
</style>
