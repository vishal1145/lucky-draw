<template>
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
      <div class="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
        <a
          v-for="(icon, name) in socialIcons"
          :key="name"
          href="#"
          @click="clickOnIcons(name)"
          class="hover:text-gray-900 transition-colors p-2 sm:p-0"
          v-html="icon"
        ></a>
      </div>

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
/*.bg-indigo-600 {
  background-color: #4f46e5;
} */
</style>
