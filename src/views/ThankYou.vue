<template>
  <div class="min-h-screen bg-indigo-100 font-roboto w-full flex flex-col items-center justify-center px-4 lg:px-8 relative overflow-hidden">
    <!-- Confetti Animation -->
    <div
      v-if="confettiItems.length > 0"
      class="d-flex animation-overlay justify-content-center align-items-center z-50"
    >
      <span class="confetti">
        <span v-for="index in confettiItems" :key="index"></span>
      </span>
    </div>

    <!-- Logo at top right -->
    <div class="absolute top-4 right-4 sm:right-8 md:right-16 lg:right-32 z-50">
      <img
        @click="redirectToAlgoFolks"
        src="/src/assets/Images/logo.png"
        alt="Logo"
        class="h-12 sm:h-14 md:h-16 lg:h-20 w-auto rounded-full cursor-pointer hover:scale-105 transition-transform"
      />
    </div>

    <!-- Main Content Container -->
    <div class="w-full text-center flex flex-col items-center justify-center mt-16 sm:mt-20 md:mt-24 max-w-4xl mx-auto">
      <!-- Success Icon/Animation -->
      <div class="relative mb-6 sm:mb-8">
        <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-indigo-600 flex items-center justify-center shadow-2xl animate-bounce-slow">
          <svg
            class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <!-- Decorative circles -->
        <div
          class="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-indigo-300 rounded-full opacity-50 -z-10 animate-pulse"
        ></div>
        <div
          class="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-indigo-300 rounded-full opacity-50 -z-10 animate-pulse"
          style="animation-delay: 0.5s"
        ></div>
      </div>

      <!-- Thank You Heading -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
        <span class="text-indigo-600">Thank You!</span>
      </h1>

      <!-- Subheading -->
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 font-bold mb-4 sm:mb-6 tracking-wide">
        You're Successfully Registered
      </h2>

      <!-- Description -->
      <p class="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
        Congratulations! Your registration has been completed successfully. 
        You're now part of our exclusive giveaway and will receive a 
        <span class="text-indigo-600 font-semibold">free project consultation worth $99</span>.
      </p>

      <!-- Benefits Card -->
      <div class="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 border-2 border-indigo-200">
        <h3 class="text-2xl sm:text-3xl font-bold text-indigo-600 mb-4 sm:mb-6">
          What's Next?
        </h3>
        <div class="space-y-4 sm:space-y-6 text-left">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800 mb-1 text-base sm:text-lg">Stay Tuned</h4>
              <p class="text-gray-600 text-sm sm:text-base">We'll notify you about the lucky draw results and exciting updates.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800 mb-1 text-base sm:text-lg">Free Consultation</h4>
              <p class="text-gray-600 text-sm sm:text-base">Claim your free project consultation worth $99 at any time.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800 mb-1 text-base sm:text-lg">Share & Win More</h4>
              <p class="text-gray-600 text-sm sm:text-base">Share with friends to increase your chances of winning amazing rewards.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl">
        <button
          @click="goToHome"
          class="flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
        >
          Back to Home
        </button>
        <button
          @click="shareOnWhatsApp"
          class="flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-[#25D366] text-white rounded-full font-semibold text-base sm:text-lg hover:bg-[#20BA5A] transition-all shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
        >
          <svg class="w-5 h-5" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Share on WhatsApp
        </button>
      </div>

      <!-- Social Share Section -->
      <div class="mt-8 sm:mt-10">
        <p class="text-gray-600 mb-4 text-sm sm:text-base">Share with friends on social media:</p>
        <div class="flex items-center justify-center gap-4 sm:gap-6">
          <!-- WhatsApp Button -->
          <button
            @click="shareOnWhatsApp"
            class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] flex items-center justify-center transition-all shadow-md hover:shadow-lg border-2 border-white cursor-pointer transform hover:scale-110"
            title="Share on WhatsApp"
          >
            <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </button>
          
          <!-- Instagram Button -->
          <button
            @click="shareOnInstagram"
            class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:from-[#6B2A95] hover:via-[#E01A1A] hover:to-[#E59E3A] flex items-center justify-center transition-all shadow-md hover:shadow-lg border-2 border-white cursor-pointer transform hover:scale-110"
            title="Share on Instagram"
          >
            <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="white" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-3.5a1 1 0 11-2 0 1 1 0 012 0z"/>
            </svg>
          </button>
          
          <!-- Facebook Button -->
          <button
            @click="shareOnFacebook"
            class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1877F2] hover:bg-[#166FE5] flex items-center justify-center transition-all shadow-md hover:shadow-lg border-2 border-white cursor-pointer transform hover:scale-110"
            title="Share on Facebook"
          >
            <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="white" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useMixpanel } from "@/composables/useMixpanel";

const router = useRouter();
const { track } = useMixpanel();
const confettiItems = ref([]);

const currentURL = encodeURIComponent(window.location.origin);
const message = encodeURIComponent("Check this out! I just registered for an exclusive giveaway and got a free consultation worth $99! 🎉");

// Start confetti animation on mount
onMounted(() => {
  startParty();
  setTimeout(() => {
    startParty();
  }, 500);
  
  // Track page view
  track("Thank You Page Viewed", {
    page: "ThankYou"
  });
});

const startParty = () => {
  confettiItems.value = Array.from({ length: 300 }, (_, index) => index);
  applyDynamicStyles();
};

const applyDynamicStyles = () => {
  setTimeout(() => {
    const confettiSpans = document.querySelectorAll(".confetti > span");
    confettiSpans.forEach((span) => {
      const shape = `calc((Math.random() - 0.5) * 60vw)`;
      const confettiSize = `${Math.random() * (20 - 5) + 5}px`;
      const hue = Math.random() * 360;
      const offsetY = `${(Math.random() - 0.5) * 100}vh`;
      const offsetX = `${(Math.random() - 0.5) * 100}vw`;
      const offsetZ = `${(Math.random() - 0.5) * 50}px`;
      const spin = `${Math.random() * 30}turn`;
      span.style.setProperty("--shape", shape);
      span.style.setProperty("--confetti-size", confettiSize);
      span.style.setProperty("--hue", hue);
      span.style.setProperty("--offsetY", offsetY);
      span.style.setProperty("--offsetX", offsetX);
      span.style.setProperty("--offsetZ", offsetZ);
      span.style.setProperty("--spin", spin);
    });
  }, 100);
  
  setTimeout(() => {
    confettiItems.value = [];
  }, 5000);
};

const goToHome = () => {
  track("Back to Home Clicked", {
    page: "ThankYou"
  });
  router.push("/");
};

const redirectToAlgoFolks = () => {
  window.open("https://algofolks.com/", "_blank");
};

// WhatsApp Share
const shareOnWhatsApp = () => {
  track("WhatsApp Share Clicked", {
    page: "ThankYou"
  });
  
  const whatsappMessage = `Hey! I just registered for an exclusive giveaway and got a free consultation worth $99! 🎉 Check it out: ${currentURL}`;
  const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(whatsappMessage)}`;

  const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener");

  if (!whatsappWindow || !whatsappWindow.closed || typeof whatsappWindow.closed == "undefined") {
    const whatsappWebUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappWebUrl, "_blank", "noopener");
  }
};

// Instagram Share
const shareOnInstagram = () => {
  track("Instagram Share Clicked", {
    page: "ThankYou"
  });
  
  const instagramUrl = "https://www.instagram.com/direct/inbox/";
  window.open(instagramUrl, "_blank", "noopener");
};

// Facebook Share
const shareOnFacebook = () => {
  track("Facebook Share Clicked", {
    page: "ThankYou"
  });
  
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
  window.open(facebookURL, "_blank", "noopener");
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

.font-roboto {
  font-family: "Inter", sans-serif;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animation-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.confetti {
  position: absolute;
  inset: 50%;
  transform-style: preserve-3d;
  opacity: 0;
  z-index: 1000;
}

.confetti > span {
  --max-width: 20px;
  --min-width: 5px;
  --shape: 0.5;
  --horizontal-max: 80vw;
  --vertical-max: 35vh;
  --depth-max: 500px;
  --base-hue: 1;
  --hue-variation: 360;
  --max-spin: 10;

  position: absolute;
  width: 25px;
  aspect-ratio: 1;
  background-color: hsl(var(--hue), 100%, 50%);
  border-radius: var(--shape);
  width: max(var(--min-width), var(--confetti-size));
}

.confetti {
  animation: confettiSettle var(--preloadDuration, 15s);
}

.confetti > span {
  animation: confettiSpread var(--preloadDuration, 6s) cubic-bezier(0, 0.85, 0, 1);
}

@keyframes confettiSpread {
  25% {
    transform: translateY(-90vh) translateX(45vh);
  }
  100% {
    transform: translateY(var(--offsetY)) translateX(var(--offsetX))
      translateZ(var(--offsetZ)) rotateX(var(--spin));
  }
}

@keyframes confettiSettle {
  0%,
  70% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateY(70vh);
  }
}
</style>

