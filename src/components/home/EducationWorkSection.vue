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
            Education
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
              <div class="text-gray-500 text-xs sm:text-sm">
                {{ education.degree }}
              </div>
            </div>
            <div
              class="text-gray-500 bg-white px-2 py-1.5 sm:py-2 rounded text-center text-sm sm:text-base w-full sm:w-32"
            >
              {{ education.years }}
            </div>
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
            Developers
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
              <div class="text-gray-500 text-xs sm:text-sm">
                {{ work.position }}
              </div>
            </div>
            <div
              class="text-gray-500 bg-white px-2 py-1.5 sm:py-2 rounded text-center text-sm sm:text-base w-full sm:w-32"
            >
              {{ work.years }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const educations = [
  {
    institution: "Junior Developer",
    degree: " Building Skills and Gaining Experience in Tech",
    years: "$10 - $12",
  },
  {
    institution: "Senior Developers",
    degree: "Solving Complex Problems and Mentoring Others",
    years: "$12 - $15",
  },
  {
    institution: "Team Lead",
    degree: " Managing Projects and Leading Development Teams",
    years: "$18 - $20",
  },
];

const workExperiences = [
  {
    company: "Web Developer",
    position: "Frontend, Full-Stack, E-Commerce, CMS",
    years: "$250 - $500",
  },
  {
    company: "App Development",
    position: "Mobile, Cross-Platform, API, UI/UX, PWA",
    years: "$500 - $1000",
  },
  {
    company: "Gen AI / ML Development ",
    position: "AI, Machine Learning, NLP, Automation",
    years: "$1000 +",
  },
];
</script>

<style scoped>
/* Add any additional styles here */
</style>
