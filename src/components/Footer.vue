<template>
  <!-- Trust Bar -->
  <section class="relative overflow-hidden py-16 sm:py-20 lg:py-24">
    <!-- Animated background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50/80 to-indigo-50"></div>
    
    <!-- Decorative floating elements -->
    <div class="absolute top-10 left-10 w-20 h-20 bg-indigo-200/40 rounded-full blur-2xl animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-32 h-32 bg-purple-200/40 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-300/30 rounded-full blur-xl animate-pulse" style="animation-delay: 0.5s;"></div>
    
    <!-- Pattern overlay -->
    <div class="absolute inset-0 opacity-5 pattern-dots"></div>
    
    <!-- Main content container -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
        <!-- Enhanced Trust Badge/Icon with animations -->
        <div class="flex-shrink-0 group">
          <div class="relative">
            <!-- Outer glow ring -->
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
            
            <!-- Middle ring with animation -->
            <div class="absolute inset-0 -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-spin-slow"></div>
            
            <!-- Icon container with enhanced gradient -->
            <div class="relative bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-600 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <!-- Inner shine effect -->
              <div class="absolute inset-0 rounded-full bg-white/20 blur-sm"></div>
              <div class="absolute top-2 left-2 w-8 h-8 bg-white/30 rounded-full blur-md"></div>
              
              <!-- Shield with checkmark -->
              <svg class="relative z-10 w-10 h-10 sm:w-12 sm:h-12 text-white transform group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Enhanced Trust Text with better typography -->
        <div class="text-center sm:text-left flex-1">
          <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            <span class="text-gray-800">Trusted by founders & businesses in </span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 font-extrabold animate-gradient">
              46 U.S. states
            </span>
          </p>
        </div>
      </div>
      
      <!-- Decorative bottom accent -->
      <div class="mt-12 flex justify-center">
        <div class="h-1 w-32 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full"></div>
      </div>
    </div>
  </section>

  <footer class="text-zinc-950 py-8 sm:py-12 lg:py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Navigation Links -->
      <!-- <div class="mb-8 sm:mb-10 lg:mb-12">
        <nav class="flex flex-col sm:flex-row justify-center items-center">
          <div class="grid grid-cols-2 sm:flex sm:flex-row gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base">
            <a href="#" class="hover:text-gray-300 transition-colors py-2">About</a>
            <a href="#" class="hover:text-gray-300 transition-colors py-2">Blog</a>
            <a href="#" class="hover:text-gray-300 transition-colors py-2">Jobs</a>
            <a href="#" class="hover:text-gray-300 transition-colors py-2">Press</a>
            <a href="#" class="hover:text-gray-300 transition-colors py-2">Accessibility</a>
            <a href="#" class="hover:text-gray-300 transition-colors py-2">Partners</a>
          </div>
        </nav>
      </div> -->

      <!-- Social Media Links -->
      <!-- <div class="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
        <a
          v-for="(icon, name) in socialIcons"
          :key="name"
          href="#"
          @click="clickOnIcons(name)"
          class="hover:text-indigo-600 transition-colors cursor-pointer p-2 sm:p-0"
          v-html="icon"
        ></a>
      </div> -->

      <!-- Copyright -->
      <div class="text-center text-xs sm:text-sm text-gray-600 px-4">
        © 2025 Algofolks PVT LTD, Inc. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { socialIcons } from "@/assets/icons/socialIcons";

const currentURL = encodeURIComponent(window.location.href);
const message = encodeURIComponent("Check this and register now!");

const clickOnIcons = (index) => {
  console.log(index);
  if (index == "facebook") {
    shareOnFacebook();
  } else if (index == "whatsapp") {
    shareOnWhatsApp();
  } else if (index == "instagram") {
    shareOnInstagram();
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
</script>

<style scoped>
.pattern-dots {
  background-image: radial-gradient(circle, #6366f1 1px, transparent 1px);
  background-size: 20px 20px;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient 3s ease infinite;
}
</style>
