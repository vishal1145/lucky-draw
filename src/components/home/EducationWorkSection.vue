<template>
  <section class="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-32">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      <!-- Education Card -->
      <div class="bg-gray-200 shadow-lg rounded-lg p-4 sm:p-5 lg:p-6">
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
          <h3 class="ml-3 text-lg sm:text-xl font-semibold text-indigo-600">
            Service-Based Pricing
          </h3>
        </div>
        <ul class="space-y-3 sm:space-y-4">
          <li
            v-for="education in educations"
            :key="education.institution"
            class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4"
          >
            <div class="flex-1">
              <div class="font-semibold text-gray-600 text-sm sm:text-base">
                {{ education.institution }}
              </div>
              <!-- <div class="text-gray-500 text-xs sm:text-sm">
                {{ education.degree }}
              </div> -->
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
      <div class="bg-gray-200 shadow-lg rounded-lg p-4 sm:p-5 lg:p-6">
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
          <h3 class="ml-3 text-lg sm:text-xl font-semibold text-indigo-600">
            Developer-Based Pricing
          </h3>
        </div>
        <ul class="space-y-3 sm:space-y-4">
          <li
            v-for="work in workExperiences"
            :key="work.company"
            class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4"
          >
            <div class="flex-1">
              <div class="font-semibold text-gray-600 text-sm sm:text-base">
                {{ work.company }}
              </div>
              <!-- <div class="text-gray-500 text-xs sm:text-sm">
                {{ work.position }}
              </div> -->
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
    <div class="mt-8 sm:mt-10 lg:mt-12">
      <div class="shadow-md rounded-lg p-6 sm:p-8 lg:p-10">
        <h3 class="text-xl sm:text-2xl font-semibold text-indigo-600 mb-6 text-center">
          Exclusive Perks for Participants
        </h3>
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div class="flex flex-col items-center text-center flex-1 relative border-r-0 sm:border-r lg:border-r border-gray-300 sm:pr-6">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-500 border-2 border-indigo-500 flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 sm:h-7 sm:w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <p class="text-sm sm:text-base font-medium text-gray-700">Priority onboarding</p>
          </div>
          <div class="flex flex-col items-center text-center flex-1 relative border-r-0 sm:border-r-0 lg:border-r border-gray-300 lg:pr-6">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-500 border-2 border-indigo-500 flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 sm:h-7 sm:w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <p class="text-sm sm:text-base font-medium text-gray-700">Free consultation</p>
          </div>
          <div class="flex flex-col items-center text-center flex-1 relative border-r-0 sm:border-r lg:border-r border-gray-300 sm:pr-6 lg:pr-6">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-500 border-2 border-indigo-500 flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 sm:h-7 sm:w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p class="text-sm sm:text-base font-medium text-gray-700">Free project scope review</p>
          </div>
          <div class="flex flex-col items-center text-center flex-1">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-500 border-2 border-indigo-500 flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 sm:h-7 sm:w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p class="text-sm sm:text-base font-medium text-gray-700">
              Extra 5% discount if you start a project within 7 days
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const educations = [
  {
    institution: "Web & App Development",
    // degree: "Empowering Your Business with Scalable Solutions! Perfect for startups and small businesses looking for reliable development services.",
    // years: "$999.00",
  },
  {
    institution: "AI & Chatbot Development",
    // degree: "Unleash the Power of Advanced Features! Designed for growing businesses seeking robust and high-performing solutions.",
    // years: "$2999.00",
  },
  {
    institution: "UI/UX Design",
    // degree: "Tailored to Meet Your Unique Business Needs! Perfect for enterprises requiring large-scale, highly customized solutions.",
    // years: "Custom Pricing",
  },
];

const workExperiences = [
  {
    company: "Business Automation",
    // position: "Get Started with Reliable Development Support! Ideal for small projects or quick tasks.",
    // years: "$10/hour",
  },
  {
    company: "Custom Software",
    // position: "Scale Your Projects with Skilled Developers! Perfect for mid-sized projects requiring advanced expertise.",
    // years: "$15/hour",
  },
  {
    company: "API Development",
    // position: "Hire Dedicated Developers for Your Business! Ideal for long-term projects and consistent support.",
    // years: "$2,000/month",
  },
];
</script>

<style scoped>
/* Add any additional styles here */
</style>
