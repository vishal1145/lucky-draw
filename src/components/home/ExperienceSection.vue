<template>
  <section
    class="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8 lg:px-32 py-10 lg:py-20 w-full h-full"
  >
    <!-- Left Section (Experience Box) -->
    <div
      class="bg-indigo-600 left-container text-indigo-100 w-full lg:w-1/2 h-98 rounded-lg relative mb-8 lg:mb-0"
    >
      <div
        class="transform -rotate-90 text-4xl font-semibold absolute left-12 bottom-0 top-0 ans-date-size"
      >
        ANNOUNCE &nbsp; DATE
      </div>
      <!-- <div class="absolute right-0 top--30"> -->
      <h1
        class="text-[340px] font-bold absolute -right-10 -top-20 for-text-size"
      >
        {{ getAnnouncementDays }}
      </h1>
      <div class="text-2xl absolute right-5 bottom-5">
        {{ getAnnouncementData }}
      </div>
      <!-- </div> -->
    </div>
    <!-- <div
      class="bg-indigo-600 text-white w-1/2 lg:w-1/2 h-64 lg:h-98 rounded-lg relative mb-8 lg:mb-0"
    >
      <div
        class="transform lg:-rotate-90 text-2xl lg:text-4xl font-semibold text-center lg:text-left lg:absolute lg:left-12 lg:bottom-0 lg:top-0 pt-4 lg:pt-0"
      >
        ANNOUNCE DATE
      </div>
      <h1
        class="text-[150px] lg:text-[350px] font-bold text-center lg:absolute lg:-right-10 lg:-top-20"
      >
        18
      </h1>
      <div
        class="text-xl lg:text-2xl text-center lg:text-left lg:absolute lg:right-5 lg:bottom-5 pb-4 lg:pb-0"
      >
        Years of Experience
      </div>
    </div> -->

    <!-- Right Section (About Info) -->
    <div class="w-full lg:w-1/2 lg:ml-12 px-4 lg:px-0 left-container">
      <h3
        class="text-lg lg:text-xl font-semibold text-gray-500 mb-2 text-center lg:text-left"
      >
        ⇤ About Me
      </h3>

      <h2 class="text-3xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
        Who is <span class="text-indigo-600">Jenny Alexander?</span>
      </h2>
      <p class="text-gray-600 mb-6 text-lg lg:text-xl text-center lg:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="flex justify-center lg:justify-start gap-8 mb-6">
        <div class="text-center lg:text-left">
          <div class="text-2xl lg:text-3xl font-bold text-indigo-600">
            {{ noOfUser }} +
          </div>
          <div class="text-gray-500 text-lg lg:text-xl">Registered</div>
        </div>
        <!-- <div class="text-center lg:text-left">
          <div class="text-2xl lg:text-3xl font-bold text-indigo-600">50+</div>
          <div class="text-gray-500 text-lg lg:text-xl">Industry Covered</div>
        </div> -->
      </div>
      <div
        class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 relative"
      >
        <div
          class="flex items-center relative justify-center md:justify-end"
          v-if="fromResult != 'Result'"
        >
          <button
            class="flex items-center pl-1 pr-10 py-2 bg-indigo-500 text-white rounded-full font-medium"
          >
            <div
              class="w-7 h-7 rounded-full bg-white border-2 border-white flex items-center justify-center text-xs text-gray-600"
              v-html="icons.arrowDown"
            ></div>
          </button>

          <button
            class="flex items-center px-6 py-2.5 bg-lime-500 text-white cursor-pointer rounded-full font-medium hover:bg-lime-600 whitespace-nowrap ml-2 md:ml-0"
            @click="scrollToContactSection"
            style="margin-left: -2em"
          >
            {{ fromResult != "Result" ? "Participate Now" : "Result" }}
          </button>
        </div>
        <!-- <div class="flex">
          <button
            class="flex items-center pl-1 pr-10 py-2 bg-indigo-500 text-white rounded-full font-medium w-full sm:w-auto"
          >
            <div
              class="w-7 h-7 rounded-full bg-white border-2 border-white flex items-center justify-center text-xs text-gray-600"
              v-html="icons.arrowDown"
            ></div>
          </button>

          <button
            class="flex items-center px-6 py-2.5 bg-lime-500 text-white rounded-full font-medium hover:bg-lime-600 w-full sm:w-auto"
            @click="scrollToContactSection"
            style="margin-left: -2em"
          >
            Participate Now
          </button>
        </div> -->

        <!-- <img
          :src="signImage"
          alt="Signature"
          class="h-8 w-20 mt-3 sm:mt-0 sm:ml-8"
        /> -->
      </div>
    </div>
  </section>

  <div class="text-center px-4 mt-8 lg:mt-16">
    <h3 class="text-xl lg:text-2xl font-semibold text-gray-500 mb-2">
      -- Services & Prices
    </h3>
    <h2 class="text-3xl lg:text-5xl font-bold">
      Our <span class="text-indigo-600">Services & Developer Prices</span>
    </h2>
  </div>

  <!-- Bottom Section (Education & Work) -->
</template>

<script setup>
import { icons } from "@/assets/icons";
import signImage from "@/assets/Images/sig.png";
// Add any necessary script setup here

const props = defineProps({
  noOfUser: String,
  allUserRegistered: Array,
  getAnnouncementDays: String,
  getAnnouncementData: String,
  fromResult: String,
});

const scrollToContactSection = () => {
  let contactSection = "";
  if (props.fromResult != "Result") {
    contactSection = document.getElementById("contact-section");
  } else {
    contactSection = document.getElementById("result-section");
  }
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>

<style scoped>
@media (min-width: 600px) and (max-width: 1023px) {
  /* Styles for screens between 0 and 503px */
  .left-container {
    width: 70%;
  }
}
@media (max-width: 396px) {
  .for-text-size {
    top: 10px;
    font-size: 230px;
  }
  .ans-date-size {
    font-size: 22px;
    left: 5em;
  }
}
/* Add any additional styles here */
</style>
