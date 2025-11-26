<template>
  <!-- Trust Bar -->
  <section class="relative overflow-hidden py-6 sm:py-10 md:py-12 lg:py-16">
    <!-- Solid very light pastel blue/periwinkle background -->
    <div class="absolute inset-0 bg-blue-50/60"></div>
    
    <!-- Main content container -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      <!-- Icon and Heading Section -->
      <div class="flex flex-col items-center justify-center mb-2 sm:mb-3">
        <!-- Shield Icon with Checkmark -->
        <div class="flex-shrink-0 mb-2 sm:mb-0">
          <div class="shield-container">
            <!-- Shield SVG with checkmark -->
            <svg class="w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 lg:w-32 lg:h-36 shield-svg" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <!-- Main gradient: light purple top to purple-600 bottom (matching Get Started button) -->
                <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#c4b5fd;stop-opacity:1" />
                  <stop offset="30%" style="stop-color:#a78bfa;stop-opacity:1" />
                  <stop offset="60%" style="stop-color:#9333ea;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#9333ea;stop-opacity:1" />
                </linearGradient>
                <!-- Soft glossy highlight -->
                <linearGradient id="shieldHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.6" />
                  <stop offset="30%" style="stop-color:#ffffff;stop-opacity:0.3" />
                  <stop offset="60%" style="stop-color:transparent;stop-opacity:0" />
                </linearGradient>
                <!-- Checkmark gradient -->
                <linearGradient id="checkmarkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.95" />
                  <stop offset="50%" style="stop-color:#e9d5ff;stop-opacity:0.9" />
                  <stop offset="100%" style="stop-color:#c4b5fd;stop-opacity:0.85" />
                </linearGradient>
                <!-- Drop shadow filter -->
                <filter id="shieldDropShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                  <feOffset dx="0" dy="3" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <!-- Shield base shape with translucent glass effect -->
              <path d="M14 2.5C14 2.5 21.2 6 21.8 6.4L22.2 6.8V13.2C22.2 17.8 18.8 21.2 14 22.6C9.2 21.2 5.8 17.8 5.8 13.2V6.8L6.2 6.4C6.8 6 14 2.5 14 2.5Z" 
                    fill="url(#shieldGradient)" 
                    filter="url(#shieldDropShadow)"/>
              
              <!-- Glass-like glossy highlight overlay -->
              <path d="M14 2.5C14 2.5 21.2 6 21.8 6.4L22.2 6.8V13.2C22.2 17.8 18.8 21.2 14 22.6C9.2 21.2 5.8 17.8 5.8 13.2V6.8L6.2 6.4C6.8 6 14 2.5 14 2.5Z" 
                    fill="url(#shieldHighlight)"/>
              
              <!-- Large checkmark with same translucent gradient purple-blue -->
              <path d="M9 14L11.5 16.5L19 9" 
                    stroke="url(#checkmarkGradient)" 
                    stroke-width="4" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        
        <!-- Trust Text -->
        <div class="text-center mb-2 sm:mb-2">
          <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight px-2">
            Trusted by founders & businesses
          </h2>
        </div>
        
        <!-- Subheading -->
        <div class="text-center mb-4 sm:mb-5 md:mb-6">
          <p class="text-xs sm:text-sm md:text-base text-gray-600 px-4 sm:px-2">
            We've delivered 100+ projects for startups, SMEs, and enterprise clients across the globe.

          </p>
        </div>
      </div>
      
      <!-- Partner Logos Carousel -->
      <div class="mb-5 sm:mb-6 md:mb-12">
        <div class="relative flex items-center justify-center px-10 sm:px-12 md:px-0">
          <!-- Left Navigation Button -->
          <button 
            @click="scrollCarousel('left')"
            class="absolute left-0 sm:left-2 md:left-4 lg:left-6 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center border border-gray-200"
            aria-label="Previous partners"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <!-- Logos Container -->
          <div class="flex-1 overflow-hidden mx-0 sm:mx-0">
            <div 
              ref="carouselRef"
              class="flex items-center justify-center overflow-x-auto scrollbar-hide gap-3 sm:gap-4 md:gap-6"
              style="scroll-behavior: smooth;"
            >
              <!-- Shopify -->
              <div class="flex-shrink-0 flex items-center justify-center h-8 sm:h-10 md:h-12">
                <img 
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/shopify.svg" 
                  alt="Shopify" 
                  class="h-6 sm:h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  @load="imageLoaded.shopify = true"
                  @error="handleImageError($event, 'shopify')"
                />
                <span v-show="!imageLoaded.shopify" class="text-gray-500 text-xs sm:text-sm font-semibold ml-2">shopify</span>
              </div>
              
              <!-- Slack -->
              <div class="flex-shrink-0 flex items-center justify-center h-8 sm:h-10 md:h-12">
                <img 
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg" 
                  alt="Slack" 
                  class="h-6 sm:h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  @load="imageLoaded.slack = true"
                  @error="handleImageError($event, 'slack')"
                />
                <span v-show="!imageLoaded.slack" class="text-gray-500 text-xs sm:text-sm font-semibold ml-2">Slack</span>
              </div>
              
              <!-- Adobe -->
              <div class="flex-shrink-0 flex items-center justify-center h-8 sm:h-10 md:h-12">
                <img 
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobe.svg" 
                  alt="Adobe" 
                  class="h-6 sm:h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  @load="imageLoaded.adobe = true"
                  @error="handleImageError($event, 'adobe')"
                />
                <span v-show="!imageLoaded.adobe" class="text-gray-500 text-xs sm:text-sm font-semibold ml-2">Adobe</span>
              </div>
              
              <!-- Salesforce -->
              <div class="flex-shrink-0 flex items-center justify-center h-8 sm:h-10 md:h-12">
                <img 
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/salesforce.svg" 
                  alt="Salesforce" 
                  class="h-6 sm:h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  @load="imageLoaded.salesforce = true"
                  @error="handleImageError($event, 'salesforce')"
                />
                <span v-show="!imageLoaded.salesforce" class="text-gray-500 text-xs sm:text-xs font-semibold lowercase ml-2">salesforce</span>
              </div>
              
              <!-- Microsoft -->
              <div class="flex-shrink-0 flex items-center justify-center h-8 sm:h-10 md:h-12">
                <img 
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoft.svg" 
                  alt="Microsoft" 
                  class="h-6 sm:h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  @load="imageLoaded.microsoft = true"
                  @error="handleImageError($event, 'microsoft')"
                />
                <span v-show="!imageLoaded.microsoft" class="text-gray-500 text-xs sm:text-sm font-semibold ml-2">Microsoft</span>
              </div>
              
              <!-- Google -->
              <div class="flex-shrink-0 flex items-center justify-center h-8 sm:h-10 md:h-12">
                <img 
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg" 
                  alt="Google" 
                  class="h-6 sm:h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  @load="imageLoaded.google = true"
                  @error="handleImageError($event, 'google')"
                />
                <span v-show="!imageLoaded.google" class="text-gray-500 text-xs sm:text-sm font-semibold ml-2">Google</span>
              </div>
              
              <!-- AWS -->
              <div class="flex-shrink-0 flex items-center justify-center h-8 sm:h-10 md:h-12">
                <img 
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazonaws.svg" 
                  alt="AWS" 
                  class="h-6 sm:h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  @load="imageLoaded.aws = true"
                  @error="handleImageError($event, 'aws')"
                />
                <span v-show="!imageLoaded.aws" class="text-gray-500 text-xs sm:text-xs font-semibold lowercase ml-2">aws</span>
              </div>
            </div>
          </div>
          
          <!-- Right Navigation Button -->
          <button 
            @click="scrollCarousel('right')"
            class="absolute right-0 sm:right-2 md:right-4 lg:right-6 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center border border-gray-200"
            aria-label="Next partners"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Get Started Button -->
      <div class="flex justify-center px-4">
        <button @click="handleGetStarted" class="get-started-btn px-6 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-200 text-sm sm:text-base md:text-lg">
          Get Started
        </button>
      </div>
    </div>
  </section>

  <footer class="text-zinc-950 py-3 sm:py-4">
    <div class="max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
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
      <div class="text-center text-xs sm:text-sm text-gray-600 px-2 sm:px-4">
        © 2025 Algofolks PVT LTD, Inc. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { socialIcons } from "@/assets/icons/socialIcons";

const carouselRef = ref(null);

// Track which images have loaded successfully - start as false so text shows initially
const imageLoaded = reactive({
  shopify: false,
  slack: false,
  adobe: false,
  salesforce: false,
  microsoft: false,
  google: false,
  aws: false
});

// Handle image loading errors
const handleImageError = (event, logoName) => {
  imageLoaded[logoName] = false;
  // Keep the image hidden but show text fallback
  if (event.target) {
    event.target.style.display = 'none';
  }
};

const scrollCarousel = (direction) => {
  if (!carouselRef.value) return;
  // Responsive scroll amount based on screen size
  const isMobile = window.innerWidth < 640;
  const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
  const scrollAmount = isMobile ? 150 : isTablet ? 180 : 200;
  const currentScroll = carouselRef.value.scrollLeft || 0;
  const newScroll = direction === 'left' 
    ? currentScroll - scrollAmount 
    : currentScroll + scrollAmount;
  
  carouselRef.value.scrollTo({
    left: newScroll,
    behavior: 'smooth'
  });
};

// Redirect to Algofolks website
const handleGetStarted = () => {
  window.open('https://algofolks.com/', '_blank');
};

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
/* Radial gradient utility for background */
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}

/* Shield container */
.shield-container {
  display: inline-block;
  filter: drop-shadow(0 8px 16px rgba(147, 51, 234, 0.3)) drop-shadow(0 4px 8px rgba(99, 102, 241, 0.25));
  line-height: 0;
  margin: 0;
  padding: 0;
}

/* Shield SVG styling - glossy translucent glass effect */
.shield-svg {
  filter: brightness(1.15) contrast(1.2) saturate(1.1);
  display: block;
  margin: 0;
  padding: 0;
}

/* Hide scrollbar */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Get Started Button - soft shadow */
.get-started-btn {
  box-shadow: 0 2px 6px rgba(147, 51, 234, 0.2);
}

.get-started-btn:hover {
  box-shadow: 0 4px 8px rgba(147, 51, 234, 0.25);
}
</style>

