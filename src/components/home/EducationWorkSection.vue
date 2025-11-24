<template>
  <section class="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-32 bg-white">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      <!-- Education Card -->
      <div class="bg-white shadow-lg rounded-lg p-4 sm:p-5 lg:p-6">
        <div class="flex items-center mb-4">
          <div
            class="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-indigo-500 border-2 border-indigo-500 flex items-center justify-center text-lg sm:text-xl text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0l-3-3m3 3l3-3"
              />
            </svg>
          </div>
          <h3 class="ml-3 text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600">
            Services
          </h3>
        </div>
        <ul class="space-y-4 sm:space-y-5 list-disc list-inside">
          <li
            v-for="education in educations"
            :key="education.institution"
            class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4"
          >
            <div class="flex-1">
              <div class="font-bold text-gray-800 text-base sm:text-lg lg:text-xl mb-1.5">
            {{ education.institution }}
              </div>
              <div class="text-gray-600 text-sm sm:text-base leading-relaxed">
                {{ education.degree }}
              </div>
            </div>
            <!-- <div
              class="text-gray-500 bg-white px-2 py-1.5 sm:py-2 rounded text-center text-sm sm:text-base w-full sm:w-32"
            >
              {{ education.years }}
            </div> -->
          </li>
        </ul>
      </div>

      <!-- Work Experience Card -->
      <div class="bg-white shadow-lg rounded-lg p-4 sm:p-5 lg:p-6">
        <div class="flex items-center mb-4">
          <div
            class="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-indigo-500 border-2 border-indigo-500 flex items-center justify-center text-lg sm:text-xl text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm2 4v2h8V6H8zm0 4v2h8v-2H8zm0 4v2h8v-2H8z"
              />
            </svg>
          </div>
          <h3 class="ml-3 text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600">
            Development Solutions
          </h3>
        </div>
        <ul class="space-y-4 sm:space-y-5 list-disc list-inside">
          <li
            v-for="work in workExperiences"
            :key="work.company"
            class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4"
          >
            <div class="flex-1">
              <div class="font-bold text-gray-800 text-base sm:text-lg lg:text-xl mb-1.5">
            {{ work.company }}
              </div>
              <div class="text-gray-600 text-sm sm:text-base leading-relaxed">
                {{ work.position }}
              </div>
            </div>
            <!-- <div
              class="text-gray-500 bg-white px-2 py-1.5 sm:py-2 rounded text-center text-sm sm:text-base w-full sm:w-32"
            >
              {{ work.years }}
            </div> -->
          </li>
        </ul>
      </div>
    </div>

    <!-- Exclusive Perks Section -->
    <div class="mt-4 sm:mt-6 lg:mt-8">
      <div class="bg-white p-4 sm:p-5 lg:p-6">
        <!-- Title -->
        <div class="text-center mb-4 sm:mb-6">
          <h3 class="text-xl lg:text-2xl font-semibold text-gray-500 mb-2">
            Exclusive Perks for Participants
          </h3>
          <!-- <div class="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div> -->
        </div>

        <!-- Perks Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <!-- Perk 1: Priority Onboarding -->
          <div 
            class="perk-card group flex flex-col items-center text-center relative"
            v-for="(perk, index) in perks"
            :key="perk.title"
          >
            <!-- Icon Container with Animation -->
            <div class="relative mb-2 sm:mb-3">
              <!-- Glow effect -->
              <div class="absolute inset-0 bg-indigo-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <!-- Icon circle -->
              <div class="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <div class="absolute inset-0 rounded-full bg-white/20 blur-sm"></div>
                <div class="relative z-10 text-white">
                  <component :is="perk.icon" class="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
              </div>
              <!-- Pulse animation -->
              <div class="absolute inset-0 rounded-full border-2 border-indigo-400 animate-ping opacity-0 group-hover:opacity-75"></div>
            </div>
            
            <!-- Text -->
            <p class="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300 leading-tight">
              {{ perk.title }}
            </p>
            
            <!-- Divider (only on desktop, between items) -->
            <div 
              v-if="index < perks.length - 1"
              class="hidden lg:block absolute top-1/2 -right-4 w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-y-1/2"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

const educations = [
  {
    institution: "Web & App Development",
    degree: "Modern, secure, and scalable digital platforms built to deliver top-tier performance and long-term growth.",
    // years: "$999.00",
  },
  {
    institution: "AI & Chatbot Development",
    degree: "Intelligent automation tools that streamline communication, enhance engagement, and improve operational efficiency.",
    // years: "$2999.00",
  },
  {
    institution: "UI/UX Design",
    degree: "Elegant, user-centered designs that combine aesthetics with functionality to create memorable digital experiences.",
    // years: "Custom Pricing",
  },
];

const workExperiences = [
  {
    company: "Business Automation",
    position: "Transform manual workflows into seamless, automated processes that save time and reduce costs.",
    // years: "$10/hour",
  },
  {
    company: "Custom Software",
    position: "Purpose-built software engineered around your unique business challenges and long-term vision.",
    // years: "$15/hour",
  },
  {
    company: "API Development",
    position: "Reliable, secure, and high-performance APIs that enable smooth integration across systems and services.",
    // years: "$2,000/month",
  },
];

// Icon components
const LightningIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'w-full h-full'
}, [
  h('path', {
    d: 'M13 10V3L4 14h7v7l9-11h-7z'
  })
]);

const ChatIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'w-full h-full'
}, [
  h('path', {
    d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
  })
]);

const DocumentIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'w-full h-full'
}, [
  h('path', {
    d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  })
]);

const DollarIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'w-full h-full'
}, [
  h('path', {
    d: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  })
]);

// Perks data
const perks = [
  {
    title: "Priority onboarding",
    icon: LightningIcon,
  },
  {
    title: "Free consultation",
    icon: ChatIcon,
  },
  {
    title: "Free project scope review",
    icon: DocumentIcon,
  },
  {
    title: "Extra 5% discount if you start a project within 7 days",
    icon: DollarIcon,
  },
];
</script>

<style scoped>
/* Perk Card Animations */
.perk-card {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.perk-card:nth-child(1) {
  animation-delay: 0.1s;
}

.perk-card:nth-child(2) {
  animation-delay: 0.2s;
}

.perk-card:nth-child(3) {
  animation-delay: 0.3s;
}

.perk-card:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover effects for perk cards */
.perk-card:hover {
  transform: translateY(-4px);
}

/* Icon container hover animation */
.perk-card:hover > div > div:last-child {
  animation: iconPulse 1.5s ease-in-out infinite;
}

@keyframes iconPulse {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.05) rotate(3deg);
  }
}

/* Smooth transitions for all elements */
.perk-card * {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .perk-card {
    padding: 1rem 0;
  }
}

/* Enhanced backdrop blur effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>
