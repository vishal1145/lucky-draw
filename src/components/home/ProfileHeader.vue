<template>
  <div class="flex relative flex-col items-center justify-center px-4 lg:px-8">
    <!-- Client Count -->
    <div
      class="flex items-start flex-col justify-start absolute left-4 sm:left-8 md:left-16 lg:left-32 bottom-17 sm:bottom-10 z-30"
    >
      <h1 class="text-2xl sm:text-4xl font-bold text-gray-500 p-0 m-0">
        {{ noOfUser.toString().length === 1 ? `0${noOfUser}` : noOfUser
        }}<sup>+</sup>
      </h1>
      <h4 class="font-semibold p-0 m-0 text-sm sm:text-xl text-gray-400 mb-2">
        Registered
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
          v-if="fromResult != 'Result'"
          @click="scrollToContactSection"
          class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 border-2 border-white cursor-pointer flex items-center justify-center text-xs text-gray-600"
        >
          +
        </div>
      </div>
    </div>

    <div class="absolute top-2 right-4 sm:right-8 lg:right-32 z-50">
      <img
        @click="redirectToAlgoFolks"
        src="/src/assets/Images/logo.png"
        alt="Logo"
        class="h-12 sm:h-16 lg:h-20 w-auto rounded-full cursor-pointer"
      />
    </div>

    <!-- Header Text -->
    <div class="absolute top-3 text-center w-full px-4">
      <h1 class="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        I'm <span class="text-indigo-600 underline decoration-2">AlgoFolks</span>,
      </h1>
      <h2
        class="text-xl sm:text-4xl lg:text-5xl text-gray-800 font-bold tracking-widest"
      >
        Celebrating Customer Loyalty
      </h2>
      <!-- <p class="text-gray-600 my-4 text-lg lg:text-xl text-center "> Participate in our Lucky Draw and enjoy exclusive rewards designed to thank you.
</p> -->
    </div>

    <!-- Main Content Container -->
    <div class="w-full text-center flex justify-center mt-24 sm:mt-16">
      <!-- Profile Image Section -->
      <div
        class="relative w-full relative-height sm:w-[470px] h-[500px] sm:h-[570px] flex justify-center"
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
          class="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[360px] h-[400px] sm:h-[500px] object-cover object-top rounded-t-2xl"
        />

        <div
          class="absolute bottom-0 w-[200px] sm:w-[280px] -right-8 sm:-right-12 h-[200px] sm:h-[250px] bg-sky-50 z-10 rounded-2xl relative-second hidden sm:block"
          style="transform: rotate(-77deg)"
        ></div>

        <div
          class="flex flex-col for-button sm:flex-row bg-white justify-center gap-2 sm:gap-4 absolute -bottom-20 sm:bottom-4 z-30 p-2 rounded-full w-full sm:w-auto"
        >
          <button
            class="px-1 sm:px-4 py-2.5 btn-padding bg-indigo-600 text-white rounded-full cursor-pointer flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
            @click="scrollToContactSection"
          >
            <div class="flex flex-col items-center">
              <span class="whitespace-nowrap">
                {{ fromResult != "Result" ? "Participate Now — Get Rewards + Discounts on Services" : "Result" }}
              </span>
              <span v-if="fromResult != 'Result'" class="text-[10px] sm:text-xs text-white/80 mt-0.5">
                Free participation. Limited entries.
              </span>
            </div>
            <!-- <div
              class="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-lime-500 border-2 border-lime-500 flex items-center justify-center text-xs text-white"
              v-html="icons.arrowDown"
            ></div> -->
          </button>
          <button
            class="px-4 py-2.5 bg-white btn-padding border-2 border-[#25D366] text-gray-800 rounded-full hover:border-[#20BA5A] hover:bg-green-50 transition-colors"
          >
            <div class="flex justify-center space-x-3 sm:space-x-6">
              <div
                @click="shareOnWhatsApp"
                class="hover:text-gray-300 transition-colors cursor-pointer"
                v-html="socialIcons.whatsapp"
              ></div>
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
            </div>
            <!-- Hire Me -->
          </button>
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
  // const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
  // window.open(facebookURL, "_blank");

  const facebookMessage = `Hey! Check out this referral link: ${currentURL}`;

  // Open Facebook Messenger with the message
  const facebookWindow = window.open(
    `fb-messenger://share?link=${encodeURIComponent(
      facebookMessage
    )}&app_id=123456789`,
    "_blank"
  );
  if (
    !facebookWindow ||
    !facebookWindow.closed ||
    typeof facebookWindow.closed == "undefined"
  ) {
    // const facebookWebUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(facebookMessage)}`;
    const facebookWebUrl = `https://www.facebook.com/send?text=${encodeURIComponent(
      facebookMessage
    )}`;

    window.open(facebookWebUrl, "_blank", "noopener");
  }
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
