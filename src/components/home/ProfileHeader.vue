<template>
  <div class="flex relative flex-col items-center justify-center px-4 lg:px-8">
    <!-- Client Count -->
    <div
      class="flex items-start flex-col justify-start absolute left-4 sm:left-8 md:left-16 lg:left-32 bottom-17 sm:bottom-10 md:bottom-10 z-30"
    >
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 p-0 m-0">
        <!-- {{ noOfUser.toString().length === 1 ? `0${noOfUser}` : noOfUser
        }}<sup>+</sup> -->
        100+
      </h1>
      <h4 class="font-bold p-0 m-0 text-sm sm:text-lg md:text-xl text-gray-500 mb-1">
        Participants Expected
      </h4>
      <!-- Social Media Share Buttons -->
      <div class="flex items-center -space-x-3 sm:-space-x-4">
        <!-- WhatsApp Button -->
        <button
          @click="shareOnWhatsApp"
          class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20BA5A] flex items-center justify-center transition-colors shadow-md hover:shadow-lg border-2 border-white relative z-10 cursor-pointer"
          title="Share on WhatsApp"
        >
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
        
        <!-- Instagram Button -->
        <button
          @click="shareOnInstagram"
          class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:from-[#6B2A95] hover:via-[#E01A1A] hover:to-[#E59E3A] flex items-center justify-center transition-all shadow-md hover:shadow-lg border-2 border-white relative z-20 cursor-pointer"
          title="Share on Instagram"
        >
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="white" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-3.5a1 1 0 11-2 0 1 1 0 012 0z"/>
          </svg>
        </button>
        
        <!-- Facebook Button -->
        <button
          @click="shareOnFacebook"
          class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1877F2] hover:bg-[#166FE5] flex items-center justify-center transition-colors shadow-md hover:shadow-lg border-2 border-white relative z-30 cursor-pointer"
          title="Share on Facebook"
        >
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="white" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
          </svg>
        </button>
      </div>
      <!-- <div class="flex -space-x-2">
        <div v-for="i in allUserRegistered.splice(0, 3)" :key="i">
          <template v-if="i.image_url">
            <img
              :src="i.image_url"
              class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white shadow-sm"
              alt="Client"
            />
          </template>
          <template v-else>
            <div
              class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-xs text-white"
            >
              {{ i.name ? i.name.charAt(0) : "+" }}
            </div>
          </template>
        </div>
        <div
          v-if="fromResult != 'Result'"
          @click="scrollToContactSection"
          class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-100 border-2 border-white cursor-pointer flex items-center justify-center text-xs text-gray-600"
        >
          +
        </div>
      </div> -->
    </div>

    <div class="absolute top-2 right-4 sm:right-8 md:right-16 lg:right-32 z-50">
      <img
        @click="redirectToAlgoFolks"
        src="/src/assets/Images/logo.png"
        alt="Logo"
        class="h-12 sm:h-14 md:h-16 lg:h-20 w-auto rounded-full cursor-pointer"
      />
    </div>

    <!-- Header Text -->
    <div class="absolute top-3 text-center w-full px-4">
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        I'm <span class="text-indigo-600 underline decoration-2">AlgoFolks</span>,
      </h1>
      <h2
        class="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold tracking-widest"
      >
        Celebrating Customer Loyalty
      </h2>
      <!-- <p class="text-gray-600 my-4 text-lg lg:text-xl text-center "> Participate in our Lucky Draw and enjoy exclusive rewards designed to thank you.
</p> -->
    </div>

    <!-- Main Content Container -->
    <div class="w-full text-center flex justify-center mt-24 sm:mt-20 md:mt-16">
      <!-- Profile Image Section -->
      <div
        class="relative w-full relative-height sm:w-[400px] md:w-[470px] h-[500px] sm:h-[520px] md:h-[570px] flex justify-center"
      >
        <!-- Background Shape -->
        <div
          class="absolute bottom-0 w-[200px] sm:w-[250px] md:w-[280px] -left-6 sm:-left-8 md:-left-10 h-[200px] sm:h-[230px] md:h-[250px] bg-indigo-600 rounded-2xl relativre hidden sm:block"
          style="transform: rotate(77deg)"
        ></div>

        <!-- Profile Image -->
        <img
          :src="profileImage"
          alt="Jenny"
          class="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[320px] md:w-[360px] h-[400px] sm:h-[450px] md:h-[500px] object-cover object-top rounded-t-2xl"
        />

        <div
          class="absolute bottom-0 w-[200px] sm:w-[250px] md:w-[280px] -right-8 sm:-right-10 md:-right-12 h-[200px] sm:h-[230px] md:h-[250px] bg-sky-50 z-10 rounded-2xl relative-second hidden sm:block"
          style="transform: rotate(-77deg)"
        ></div>

        <div
          class="flex flex-col for-button md:flex-row bg-white justify-center gap-2 md:gap-4 absolute -bottom-20 md:bottom-4 z-30 p-2 rounded-full w-full md:w-auto"
        >
          <button
            class="px-1 md:px-4 py-2.5 btn-padding bg-indigo-600 text-white rounded-full cursor-pointer flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
            @click="scrollToContactSection"
          >
            <div class="flex flex-col items-center">
              <span class="whitespace-nowrap text-xs md:text-base">
                {{ fromResult != "Result" ? "Participate Now — Get Rewards + Discounts on Services" : "Result" }}
              </span>
              <span v-if="fromResult != 'Result'" class="text-[10px] md:text-xs text-white/80 mt-0.5">
                Free participation. Limited entries.
              </span>
            </div>
            <!-- <div
              class="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-lime-500 border-2 border-lime-500 flex items-center justify-center text-xs text-white"
              v-html="icons.arrowDown"
            ></div> -->
          </button>
          <!-- <button
            class="hidden md:flex px-4 py-2.5 bg-white btn-padding border-2 border-[#25D366] text-gray-800 rounded-full hover:border-[#20BA5A] hover:bg-green-50 transition-colors"
          > -->
            <!-- <div class="flex justify-center space-x-3 md:space-x-6"> -->
              <!-- <div
                @click="shareOnWhatsApp"
                class="hover:text-gray-300 transition-colors cursor-pointer"
                v-html="socialIcons.whatsapp"
              ></div> -->
              <!-- <a
                href="#"
                @click="shareOnFacebook"
                class="hover:text-gray-300 transition-colors"
                v-html="socialIcons.facebook"
              ></a> -->
              <!-- <a
                href="#"
                class="hover:text-gray-300 transition-colors"
                v-html="socialIcons.facebook"
              ></a> -->
            <!-- </div> -->
            <!-- Hire Me -->
          <!-- </button> -->
        </div>
      </div>
    </div>
  </div>
  <!-- Marquee section -->
  <!-- <section class="bg-lime-500 py-2 px-2 relative z-30 overflow-hidden">
    <div class="relative flex overflow-x-hidden">
      <div class="py-3 w-full">
        <div class="inline-flex items-center whitespace-nowrap animate-marquee">
          <div
            v-for="(skill, index) in repeatedSkills"
            :key="`skill-${index}`"
            class="flex items-center text-[10px] sm:text-xs md:text-sm font-medium text-black"
            style="margin-right: 20px"
          >
            <span class="mr-1 md:mr-2 text-indigo-800">✦</span>
            <div>{{ skill }}</div>
          </div>
        </div>
      </div>

      <div class="py-3 w-full" style="margin-left: 7em">
        <div
          class="inline-flex items-center whitespace-nowrap animate-marquee2"
        >
          <div
            v-for="(skill, index) in repeatedSkills"
            :key="`skill2-${index}`"
            class="flex items-center text-[10px] sm:text-xs md:text-sm font-medium text-black"
            style="margin-right: 20px"
          >
            <span class="mr-1 md:mr-2 text-indigo-800">✦</span>
            <div>{{ skill }}</div>
          </div>
        </div>
      </div>
      <div class="py-3 w-full" style="margin-left: 7em">
        <div
          class="inline-flex items-center whitespace-nowrap animate-marquee2"
        >
          <div
            v-for="(skill, index) in repeatedSkills"
            :key="`skill2-${index}`"
            class="flex items-center text-[10px] sm:text-xs md:text-sm font-medium text-black"
            style="margin-right: 20px"
          >
            <span class="mr-1 md:mr-2 text-indigo-800">✦</span>
            <div>{{ skill }}</div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script setup>
import { socialIcons } from "@/assets/icons/socialIcons";
import { ref, onMounted } from "vue";
import { icons } from "@/assets/icons";
import profileImage from "@/assets/Images/profile_img-removebg-preview.png";
import { useRouter } from "vue-router";

const props = defineProps({
  noOfUser: String,
  allUserRegistered: Array,
  fromResult: String,
});
const currentURL = encodeURIComponent(window.location.href);
const message = encodeURIComponent("Check this and register now!");
const router = useRouter();
const loading = ref(false);

const skills = [
  "App Design",
  "Dashboard UI",
  "Wireframe",
  "User Research",
  "UX/UI Design",
  // "Mobile Apps",
  // "Web Design",
  // "Brand Identity",
  // "User Testing",
  // "Prototyping",
];

// Repeat the skills multiple times to ensure no gaps
const repeatedSkills = [...skills]; // Adjust the number of repetitions as needed

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
// WhatsApp Share
const shareOnWhatsApp = () => {
  const whatsappURL = `https://wa.me/?text=${message} ${currentURL}`;
  window.open(whatsappURL, "_blank");

  const whatsappMessage = `Hey! Check out this referral link: ${currentURL}`;
  const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Open WhatsApp with the message
  const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener");

  // If opening WhatsApp using URI scheme fails, open WhatsApp Web
  if (
    !whatsappWindow ||
    !whatsappWindow.closed ||
    typeof whatsappWindow.closed == "undefined"
  ) {
    const whatsappWebUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp Web in a new tab
    window.open(whatsappWebUrl, "_blank", "noopener");
  }
};

// Instagram Share (Instagram does not allow direct URL sharing, but you can use stories)
const shareOnInstagram = () => {
  const instagramUrl = "https://www.instagram.com/direct/inbox/";

  // Open the link in a new tab
  window.open(instagramUrl, "_blank", "noopener");
  // const currentURL = window.location.href;
  // navigator.clipboard.writeText(currentURL).then(() => {
  //   alert("Link copied! Open Instagram and paste it in a post or story.");
  // });
};

// Facebook Share
const shareOnFacebook = () => {
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
  window.open(facebookURL, "_blank", "noopener");
};
const redirectToAlgoFolks = () => {
  window.open("https://algofolks.com/", "_blank");
  // window.location.href = "https://algofolks.com/";
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

.grayscale {
  filter: grayscale(100%) contrast(1.1);
  mix-blend-mode: multiply;
}

.relativre {
  clip-path: polygon(18% 0%, 100% 0, 89% 96%, -2% 100%);
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
  .relative-height {
    height: 350px;
  }
  .for-button {
    display: flex;
    flex-direction: row;
    width: auto;
    bottom: 0.5em;
  }

  .btn-padding {
    font-size: 12px;
    padding: 0.5em 1em 0.5em 1em;
  }

  img.absolute {
    width: 60%;
    height: 350px;
  }
}
@media (min-width: 0px) and (max-width: 503px) {
  /* Styles for screens between 0 and 503px */
  img.absolute {
    width: 80%;
    height: 350px;
  }
}

/* Tablet styles - same as desktop */
@media (min-width: 768px) and (max-width: 1023px) {
  .relative-height {
    height: 570px;
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

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee2 {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
  width: calc(100% + 50px);
}

.animate-marquee2 {
  animation: marquee2 25s linear infinite;
  width: calc(100% + 50px);
}
sup {
  top: -0.4em;
}
</style>
