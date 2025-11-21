<template>
  <!-- Main section -->
  <section class="prize-section relative overflow-hidden px-4 sm:px-8 md:px-16 lg:px-32 py-12 md:py-20">
    <!-- Background gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800"></div>
    <div class="absolute inset-0 pattern-overlay opacity-20"></div>
    
    <div class="relative z-10">
      <!-- Header section -->
      <div
        class="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16"
      >
        <!-- Title section -->
        <div class="text-white text-center md:text-left mb-8 md:mb-0 animate-fade-in">
          <p class="text-sm md:text-base font-medium text-indigo-200 mb-2 tracking-wider uppercase">
            --- Prizes
          </p>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Winner <span class="text-lime-400 bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">Prizes</span>
          </h2>
          <p class="text-indigo-200 mt-3 text-sm md:text-base max-w-md">
            Every participation increases your chance to win project credits you can use on Algofolks services.
          </p>
        </div>

        <!-- Button section -->
        <div class="flex items-center gap-3 justify-center md:justify-end animate-fade-in">
          <button
            class="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            @click="scrollToContactSection"
          >
            <div
              class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs text-white group-hover:bg-white/30 transition-colors"
              v-html="icons.arrowDown"
            ></div>
            <span>Scroll</span>
          </button>

          <button
            class="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-full font-semibold hover:from-lime-600 hover:to-green-600 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            @click="scrollToContactSection"
          >
            <span>{{ fromResult != "Result" ? "Participate Now" : "View Results" }}</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Prize Cards Grid -->
      <div
        class="flex flex-col lg:flex-row justify-center gap-6 md:gap-8 lg:gap-10"
        id="result-section"
      >
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="prize-card group relative bg-gradient-to-br from-indigo-400/90 via-indigo-500/90 to-purple-500/90 backdrop-blur-sm w-full lg:w-96 rounded-3xl px-8 sm:px-10 md:px-12 py-10 md:py-14 text-center shadow-2xl transform transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-3xl"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Decorative elements -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div class="absolute bottom-0 left-0 w-24 h-24 bg-lime-400/10 rounded-full -ml-12 -mb-12 blur-xl"></div>
          
          <!-- Medal/Icon Container -->
          <div class="relative z-10 mb-6">
            <div class="relative inline-block">
              <div class="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse"></div>
              <div
                class="relative bg-gradient-to-br from-white to-indigo-50 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl transform group-hover:rotate-12 transition-transform duration-500"
              >
                <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-white p-2">
                  <img
                    :src="service.icon"
                    alt="Prize Icon"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Prize Amount -->
          <h3 class="text-3xl md:text-4xl font-extrabold text-white mb-3 relative z-10">
            {{ service.title }}
          </h3>
          
          <!-- Description -->
          <p class="text-base md:text-lg text-indigo-50 mb-6 leading-relaxed relative z-10">
            {{ service.description }}
          </p>

          <!-- Credit Usage Info -->
          <p class="text-sm md:text-base text-indigo-200/80 mb-6 leading-relaxed relative z-10 italic">
            Credit can be used on any web, mobile, or AI development project.
          </p>

          <!-- Winner Section Divider -->
          <div
            v-if="fromResult == 'Result'"
            class="relative z-10 my-6"
          >
            <div class="flex items-center justify-center gap-2 mb-4">
              <div class="h-px bg-white/30 flex-1"></div>
              <div class="w-2 h-2 bg-lime-400 rounded-full"></div>
              <div class="h-px bg-white/30 flex-1"></div>
            </div>
            <p class="text-sm text-indigo-200 font-medium uppercase tracking-wider">Winner</p>
          </div>

          <!-- Winner Display -->
          <div v-if="fromResult == 'Result'" class="relative z-10">
            <div class="flex flex-col items-center gap-3">
              <!-- Winner Image -->
              <div class="relative">
                <div class="absolute inset-0 bg-lime-400/20 rounded-full blur-lg"></div>
                <div
                  v-if="service.selectedWinner && service.selectedWinner.image != null"
                  class="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-white to-indigo-50 border-4 border-white shadow-xl overflow-hidden"
                >
                  <img
                    :src="service.selectedWinner.image"
                    alt="Winner"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div
                  v-else
                  class="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-white/80 to-indigo-50/80 border-4 border-white/50 shadow-xl flex items-center justify-center"
                >
                  <img
                    :src="profileImage"
                    alt="Default Profile"
                    class="w-full h-full object-cover rounded-full opacity-50"
                  />
                </div>
              </div>

              <!-- Winner Name -->
              <div v-if="service.selectedWinner && service.selectedWinner.name" class="text-center">
                <h4 class="text-xl md:text-2xl font-bold text-white mb-1">
                  {{ service.selectedWinner.name }}
                </h4>
                <p class="text-sm md:text-base text-indigo-200 font-medium">
                  {{ service.selectedWinner.country }}
                </p>
              </div>
              <div v-else class="text-center">
                <p class="text-indigo-200 italic">No winner selected yet</p>
              </div>
            </div>
          </div>

          <!-- Participate Button -->
          <div
            v-if="fromResult != 'Result'"
            class="relative z-10 mt-6"
          >
            <button
              class="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:scale-105"
              @click="scrollToContactSection"
            >
              <span>Participate Now</span>
              <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
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
    description: "Congrats! Exclusive Highest Discount on Your Project Deal",
    icon: first_win,
  },
  {
    title: "$500",
    description:
      "Congratulations! Special Discount for Your Innovative Project",
    icon: sec_winner,
  },
  {
    title: "$251",
    description: "Congratulations! Great Savings on Your Upcoming Project",
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
.prize-section {
  background: linear-gradient(135deg, #4f46e5 0%, #5b21b6 50%, #6d28d9 100%);
}

.pattern-overlay {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
}

.prize-card {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.prize-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 2px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
}

.prize-card:hover::before {
  opacity: 1;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Enhanced hover effects */
.prize-card:hover {
  border-color: rgba(255, 255, 255, 0.3);
}

/* Responsive adjustments */
@media (min-width: 767px) and (max-width: 900px) {
  .prize-card {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .prize-card {
    padding: 2rem 1.5rem;
  }
}

/* Smooth transitions for all interactive elements */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
