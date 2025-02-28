<template>
  <!-- Main section -->
  <section class="bg-indigo-600 px-4 sm:px-8 md:px-16 lg:px-32 py-8 md:py-16">
    <div
      class="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12"
    >
      <!-- Title section -->
      <div class="text-white text-center md:text-left mb-6 md:mb-0">
        <h2 class="text-xl md:text-2xl font-medium">--- Prizes</h2>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Winner <span class="text-lime-500"> Prizes</span>
        </h2>
      </div>

      <!-- Button section -->
      <div class="flex items-center relative justify-center md:justify-end">
        <button
          class="flex items-center pl-2 pr-10 py-2 bg-indigo-500 text-white rounded-full font-medium"
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
    </div>

    <!-- Services Grid -->
    <div
      class="flex flex-col lg:flex-row justify-center gap-6 md:gap-8"
      id="result-section"
    >
      <div
        v-for="service in services"
        :key="service.title"
        class="bg-indigo-400 w-full lg:w-80 rounded-full md:rounded-full px-6 sm:px-8 md:px-16 py-8 md:py-16 text-center shadow-lg transform transition-transform hover:-translate-y-2"
      >
        <div
          class="bg-white w-16 h-16 md:w-25 md:h-25 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <div
            class="text-indigo-600 flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full"
          >
            <img
              :src="service.icon"
              alt="Service Icon"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <h3 class="text-2xl md:text-[2em] font-bold text-white mb-2">
          {{ service.title }}
        </h3>
        <p class="text-base md:text-lg text-white mb-4">
          {{ service.description }}
        </p>
        <div
          v-if="fromResult == 'Result'"
          class="border-b-2 border-dotted border-white w-full my-4"
        ></div>

        <div class="flex flex-col">
          <div
            v-if="
              fromResult == 'Result' &&
              service.selectedWinner &&
              service.selectedWinner.image != null
            "
            class="w-17 h-17 rounded-full bg-gray-100 border-2 border-white cursor-pointer flex items-center justify-center text-xs text-gray-600"
          >
            <img
              :src="service.selectedWinner.image"
              alt=""
              class="w-full h-full object-cover rounded-full"
            />

            <p class="m-0 p-0" v-if="service.selectedWinner.image == null">=</p>
          </div>
          <div v-else class="self-center">
            <div
              v-if="fromResult == 'Result'"
              class="w-17 h-17 rounded-full text-center bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-60 mb-2"
            >
              <!-- ❌ -->
              <img
                :src="profileImage"
                alt=""
                class="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <h4
            v-if="service.selectedWinner && service.selectedWinner.name"
            class="m-0 p-0 text-xl font-bold text-white"
          >
            {{ service.selectedWinner.name }}
          </h4>
          <h4
            v-if="service.selectedWinner && service.selectedWinner.name"
            class="m-0 p-0 text-xl font-bold text-white"
          >
            <span class="text-gray-600"
              >({{ service.selectedWinner.country }})</span
            >
          </h4>
        </div>
        <div
          v-if="fromResult != 'Result'"
          class="text-indigo-600 font-medium cursor-pointer underline py-2.5 px-6 hover:text-white transition-colors duration-300 text-sm md:text-base inline-block"
          @click="scrollToContactSection"
        >
          {{ fromResult != "Result" ? "Participate Now" : "" }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { icons } from "@/assets/icons";
import first_win from "@/assets/Images/first_win.png";
import sec_winner from "@/assets/Images/sec_winner.png";
import third_win from "@/assets/Images/third_win.png";
import profileImage from "@/assets/Images/profile.png";

const props = defineProps({
  fromResult: String,
  selectedWinners: Array,
});

const services = ref([
  {
    title: "$1,000",
    description: "Exclusive Highest Discount on Your Project Deal",
    icon: first_win,
  },
  {
    title: "$500",
    description: "Special Discount for Your Innovative Project",
    icon: sec_winner,
  },
  {
    title: "$251",
    description: "Great Savings on Your Upcoming Project",
    icon: third_win,
  },
]);

onMounted(() => {
  if (props.selectedWinners.length > 0) {
    services.value = services.value.map((service, index) => ({
      ...service,
      selectedWinner: props.selectedWinners[index] || null, // Add selectedWinner based on index
    }));
  }
});

const scrollToContactSection = () => {
  let contactSection = "";
  if (props.fromResult !== "Result") {
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
.bg-indigo-600 {
  background-color: #4f46e5;
}

@media (min-width: 767px) and (max-width: 900px) {
  /* Styles for screens between 0 and 503px */
  .item-container {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
}
</style>
