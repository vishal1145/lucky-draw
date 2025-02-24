<template>
  <div class="min-h-screen bg-indigo-100 font-roboto w-full">
    <div class="max-w mx-auto">
      <ProfileHeader
        :noOfUser="noOfUser"
        :allUserRegistered="allUserRegistered"
        fromResult="Result"
      />
      <ServicesSection
        v-if="selectedWinners.length > 0"
        fromResult="Result"
        :selectedWinners="selectedWinners"
      />
      <ExperienceSection
        :getAnnouncementDays="getAnnouncementDays"
        :getAnnouncementData="getAnnouncementData"
        :noOfUser="noOfUser"
        :allUserRegistered="allUserRegistered"
        fromResult="Result"
      />
      <EducationWorkSection />
      <!-- <ContactSection @refreshUser="refreshUserData" /> -->
      <Footer />
    </div>
  </div>
</template>

<script setup>
import ProfileHeader from "../components/home/ProfileHeader.vue";
import ServicesSection from "../components/home/ServicesSection.vue";
import ExperienceSection from "../components/home/ExperienceSection.vue";
import EducationWorkSection from "@/components/home/EducationWorkSection.vue";
import Footer from "@/components/Footer.vue";
import moment from "moment";

import { ref, reactive, onMounted } from "vue";
import { useToast } from "@/composables/useToast";
import apiService from "@/core/api/api-service";
// import toast from "@/utils/toast"; // Import toast service
const toast = useToast();
const noOfUser = ref("0");
const getAnnouncementData = ref("");
const getAnnouncementDays = ref("");
const selectedWinners = ref([]);
const allUserRegistered = ref([]);
const loading = ref(false); // Loader state

// const refreshUserData = () => {
//   startParty();
//   setTimeout(() => {
//     startParty();
//   }, 300);
//   getAllUser();
// };

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
const getSelectWinners = async () => {
  try {
    const response = await apiService.getCall("select-winners");

    if (!response.isError) {
      var responseData = response;
      selectedWinners.value = responseData.winners;

      console.log("sdjhsdfhj", selectedWinners.value[0]);

      // find((item) => item.status == "active");
    } else {
      toast.showToast({
        message: "Error fetching winners data",
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

// Call API on page load
onMounted(() => {
  // setTimeout(() => {
  //   startParty();
  // }, 500);
  getAllUser();
  getAnnounceDate();
  getSelectWinners();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
</style>
