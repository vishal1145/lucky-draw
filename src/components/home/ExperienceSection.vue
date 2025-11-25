<template>
  <section
    class="flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-10 lg:py-20 w-full h-full"
  >
    <div class="flex flex-col lg:flex-row justify-center items-center w-full">
      <!-- Left Section (Experience Box) -->
      <div class="w-full lg:w-1/2 flex flex-col">
      <div
        class="bg-indigo-600 left-container text-indigo-100 w-full h-72 sm:h-98 rounded-lg relative mb-8 lg:mb-0"
      >
        <div
          class="transform -rotate-90 text-2xl sm:text-4xl font-semibold absolute left-12 bottom-0 top-0 ans-date-size"
        >
          ANNOUNCE &nbsp; DATE
        </div>
        <!-- <div class="absolute right-0 top--30"> -->
        <h1
          class="text-[250px] sm:text-[320px] font-bold absolute right-0 sm:-right-10 -top-15 for-text-size"
        >
          {{
            getAnnouncementDays.toString().length === 1
              ? `0${getAnnouncementDays}`
              : getAnnouncementDays
          }}
        </h1>
        <div class="text-2xl absolute right-5 bottom-5 font-bold">
          {{ getAnnouncementData }}
        </div>
        <!-- </div> -->
      </div>
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
    <div class="w-full lg:w-1/2 lg:ml-12 px-0 lg:px-0 left-container">
      <h3
        class="text-lg lg:text-xl font-semibold text-gray-500 mb-2 text-center lg:text-left"
      >
        ⇤ About Event
      </h3>

      <!-- <h2 class="text-3xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
        Who is <span class="text-indigo-600">Jenny Alexander?</span>
      </h2> -->
      <h2 class="text-3xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
        Why We’re <span class="text-indigo-600">Organizing </span>This?
      </h2>
      <p class="text-gray-600 mb-6 text-lg lg:text-xl text-center lg:text-left">
         We believe in rewarding loyalty. This event encourages engagement and gives every participant an opportunity to benefit from attractive discounts and prizes.
      </p>
      <div class="flex flex-col justify-center lg:justify-start mb-6">
        <div class="flex flex-row items-center justify-center lg:justify-start gap-0 mb-0">
          <div class="text-3xl lg:text-5xl font-bold text-indigo-600 leading-none text-center lg:text-left">
            <!-- {{ noOfUser.toString().length === 1 ? `0${noOfUser}` : noOfUser
            }} -->
            100+
            <!-- <sup>+</sup> -->
          </div>
          <div
            class="flex items-center relative justify-center ml-3 sm:ml-4"
            v-if="fromResult != 'Result'"
          >
            <button
              class="flex items-center justify-center w-10 h-10 bg-indigo-500 text-white rounded-full font-medium"
            >
              <div
                class="w-7 h-7 rounded-full bg-white border-2 border-white flex items-center justify-center text-xs text-gray-600 cursor-pointer" @click="scrollToContactSection"
                v-html="icons.arrowDown"
              ></div>
            </button>

            <!-- <button
              class="flex items-center px-6 py-2.5 bg-white text-gray-600 cursor-pointer rounded-full font-medium hover:bg-lime-600 whitespace-nowrap"
              @click="scrollToContactSection"
              style="margin-left: -2em"
            >
              {{ fromResult != "Result" ? "Participate Now" : "Result" }}
            </button> -->
          </div>
        </div>
        <div class="text-gray-500 text-lg font-bold lg:text-xl text-center lg:text-left">
          Participants Expected
        </div>
        <!-- <div class="text-center lg:text-left">
          <div class="text-2xl lg:text-3xl font-bold text-indigo-600">50+</div>
          <div class="text-gray-500 text-lg lg:text-xl">Industry Covered</div>
        </div> -->
      </div>
      
      <!-- Winner Benefits Note -->
      <div class="mt-4 w-fit">
        <p class="text-xs text-white bg-indigo-600 rounded-[17px] pl-[13px] leading-relaxed py-1 pr-4">
          Winners will receive a discount code plus a free project consultation.
        </p>
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

  <div class="text-center pt-10 lg:pt-20 bg-white">
    <h3 class="text-xl lg:text-2xl font-semibold text-gray-500 mb-2">
      -- Our Services & Development
    </h3>
    <h2 class="text-3xl lg:text-5xl font-bold">
      What <span class="text-indigo-600">You Can Use Your Reward Credits For</span>
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

<style>
@media (min-width: 600px) and (max-width: 1023px) {
  /* Styles for screens between 0 and 503px */
  .left-container {
    width: 70%;
  }
}
@media (max-width: 640px) {
  .for-text-size {
    top: -49px;
    font-size: 230px;
  }
}
@media (max-width: 396px) {
  .ans-date-size {
    font-size: 22px;
    /*  left: 10%; */
  }
}
sup {
  top: -0.4em;
}

/* Creative animations for winner benefits section */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Add any additional styles here */
</style>
