<template>
  <div class="min-h-screen bg-indigo-100 font-roboto w-full">
    <div class="max-w mx-auto">
      <!-- <div v-if="loading" class="loader-overlay">
        <div class="loader"></div>
      </div> -->
      <div
        v-if="confettiItems.length > 0"
        class="d-flex animation-overlay justify-content-center align-items-center z-50"
      >
        <span class="confetti">
          <span v-for="index in confettiItems" :key="index"></span>
        </span>
      </div>

      <ProfileHeader
        :noOfUser="noOfUser"
        :allUserRegistered="allUserRegistered"
      />
      <ServicesSection selectedWinners="[]" />
      <ExperienceSection
        :getAnnouncementDays="getAnnouncementDays"
        :getAnnouncementData="getAnnouncementData"
        :noOfUser="noOfUser"
        :allUserRegistered="allUserRegistered"
      />
      <EducationWorkSection />
      <ContactSection @refreshUser="refreshUserData" />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import ProfileHeader from "../components/home/ProfileHeader.vue";
import ServicesSection from "../components/home/ServicesSection.vue";
import ExperienceSection from "../components/home/ExperienceSection.vue";
import EducationWorkSection from "@/components/home/EducationWorkSection.vue";
import ContactSection from "@/components/home/ContactSection.vue";
import Footer from "@/components/Footer.vue";
import moment from "moment";
import { useRouter } from "vue-router";

import { ref, reactive, onMounted } from "vue";
import { useToast } from "@/composables/useToast";
import apiService from "@/core/api/api-service";
// import toast from "@/utils/toast"; // Import toast service
const router = useRouter();
const toast = useToast();
const noOfUser = ref("0");
const getAnnouncementData = ref("");
const getAnnouncementDays = ref("");
// const message = ref("");
const showTost = ref(false);
const confettiItems = ref([]);
const allUserRegistered = ref([]);
const loading = ref(false); // Loader state

const tostData = reactive({
  message: "",
  error: "",
});

const refreshUserData = () => {
  startParty();
  setTimeout(() => {
    startParty();
  }, 300);
  getAllUser();
};

// API Call
const getAllUser = async () => {
  loading.value = true; // Show loader

  try {
    const response = await apiService.getCall("users");

    if (!response.isError) {
      noOfUser.value = response.no_of_users.toString();
      allUserRegistered.value = response.users;
    } else {
      toast.showToast({
        message: "Error fetching users.",
        type: "error",
        duration: 4000,
      });
    }
  } catch (err) {
    toast.showToast({
      message: "Server Error. Please try again.",
      type: "error",
      duration: 4000,
    });
  } finally {
    // $bvToast.show("example-toast");
    loading.value = false; // Hide loader
  }
};

const getAnnounceDate = async () => {
  try {
    const response = await apiService.getCall("announcement");
    // console.log(response);

    if (!response.isError) {
      var responseData = response.data.find((item) => item.status == "active");

      const date = moment(
        responseData.announcement_date,
        "YYYY-MM-DD HH:mm:ss"
      );
      const now = moment();
      if (date.isBefore(now)) {
        router.push("/announce-result");
        console.log("Expired");
      } else {
        console.log("Not Expired");
      }

      getAnnouncementDays.value = date.format("D"); // 21
      getAnnouncementData.value = date.format("MMM YYYY");
    } else {
      toast.showToast({
        message: "Error fetching announce date",
        type: "error",
        duration: 4000,
      });
    }
  } catch (err) {
    toast.showToast({
      message: "Server Error. Please try again.",
      type: "error",
      duration: 4000,
    });
  } finally {
    // $bvToast.show("example-toast");
    loading.value = false; // Hide loader
  }
};
const startParty = () => {
  confettiItems.value = Array.from({ length: 300 }, (_, index) => index);

  applyDynamicStyles();
};

const applyDynamicStyles = () => {
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
  setTimeout(() => {
    confettiItems.value = [];
  }, 5000);
  // Remove the semicolon here
};

// Call API on page load
onMounted(() => {
  // startParty();
  // setTimeout(() => {
  //   startParty();
  // }, 500);
  getAllUser();
  getAnnounceDate();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
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
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  z-index: 100;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.party:active,
.party:active span {
  animation: none;
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
  animation: confettiSpread var(--preloadDuration, 6s)
    cubic-bezier(0, 0.85, 0, 1);
}

/* .party {
  animation: preventAnimationTrigger 0s;
} */

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
    /* opacity: 0; */
    transform: translateY(70vh);
  }
}
</style>
