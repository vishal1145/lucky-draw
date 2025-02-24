<template>
  <section id="contact-section" class="w-full">
    <div class="text-center p-4">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold">
        <span class="text-indigo-600">Register!</span>
      </h2>
    </div>
  </section>

  <section
    class="flex flex-col lg:flex-row w-full min-h-[600px] my-4 md:my-6 lg:my-10 px-4 md:px-8 lg:px-32"
  >
    <div
      class="bg-indigo-600 p-4 md:p-8 lg:p-16 w-full rounded-2xl bg-cover bg-center bg-no-repeat"
      style="background-image: url('/src/assets/Images/gradient_bg.png')"
    >
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
        LET'S WORK TOGETHER
      </h2>
      <p class="text-indigo-200 mb-4 md:mb-8 text-center text-sm md:text-base">
        Fill out the form below to start a conversation
      </p>

      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
        <!-- Name Input -->
        <div>
          <input
            type="text"
            maxlength="30"
            v-model="formData.name"
            @input="capitalizeFirstLetter"
            placeholder="Your name"
            :class="[
              'w-full px-3 md:px-4 py-2 md:py-3 bg-indigo-500/30 text-white placeholder-indigo-300 rounded-lg focus:outline-none focus:ring-2 text-sm md:text-base',
              errors.name ? 'ring-2 ring-red-400' : 'focus:ring-white',
            ]"
          />
          <span
            v-if="errors.name"
            class="text-xs md:text-sm text-red-300 mt-1"
            >{{ errors.name }}</span
          >
        </div>

        <!-- Phone Input with Country Code -->
        <div>
          <div class="flex gap-2">
            <!-- Country Selector -->
            <div class="relative w-20 md:w-24">
              <select
                v-model="selectedCountry"
                class="w-full px-1 md:px-2 py-2 md:py-3 bg-indigo-500/30 text-white rounded-lg focus:outline-none focus:ring-2 appearance-none cursor-pointer text-sm md:text-base"
                :class="[
                  errors.phone ? 'ring-2 ring-red-400' : 'focus:ring-white',
                ]"
              >
                <option
                  v-for="country in countries"
                  :key="country.code"
                  :value="country"
                  class="bg-indigo-600 text-white"
                >
                  {{ country.flag }} {{ country.code }}
                </option>
              </select>
              <div
                class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-white"
              >
                <svg
                  class="w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <!-- Phone Number Input -->
            <input
              type="number"
              v-model="formData.phone"
              placeholder="Phone number"
              maxlength="10"
              :class="[
                'flex-1 px-3 md:px-4 py-2 md:py-3 bg-indigo-500/30 text-white placeholder-indigo-300 rounded-lg focus:outline-none focus:ring-2 text-sm md:text-base',
                errors.phone ? 'ring-2 ring-red-400' : 'focus:ring-white',
              ]"
              @input="formData.phone = formData.phone.toString().slice(0, 10)"
            />
          </div>
          <span
            v-if="errors.phone"
            class="text-xs md:text-sm text-red-300 mt-1"
            >{{ errors.phone }}</span
          >
        </div>

        <!-- Email Input -->
        <div>
          <input
            type="email"
            v-model="formData.email"
            placeholder="Your email"
            maxlength="30"
            :class="[
              'w-full px-3 md:px-4 py-2 md:py-3 bg-indigo-500/30 text-white placeholder-indigo-300 rounded-lg focus:outline-none focus:ring-2 text-sm md:text-base',
              errors.email ? 'ring-2 ring-red-400' : 'focus:ring-white',
            ]"
          />
          <span
            v-if="errors.email"
            class="text-xs md:text-sm text-red-300 mt-1"
            >{{ errors.email }}</span
          >
        </div>

        <div class="flex flex-col md:flex-row gap-4 w-full">
          <!-- Hidden File Input -->
          <input
            id="imgIconId"
            type="file"
            accept="image/*"
            @change="onImageChange"
            class="hidden"
          />

          <!-- Clickable Div -->
          <div
            :class="[
              'w-full md:w-48 px-3 md:px-4 py-2 md:py-3 bg-indigo-500/30 text-white placeholder-indigo-300 rounded-lg flex justify-center items-center align-center focus:outline-none focus:ring-2 cursor-pointer text-sm md:text-base',
              errors.profileImg ? 'ring-2 ring-red-400' : 'focus:ring-white',
            ]"
            @click="handleImageClick"
          >
            {{ profileImg ? "Change Profile Image" : "Select Profile Image" }}
          </div>

          <!-- Preview Image -->
          <img
            v-if="profileImg"
            :src="profileImg"
            class="w-12 h-12 md:w-14 md:h-14 object-cover rounded-lg"
            alt="Profile Preview"
          />
        </div>

        <div>
          <multiselect
            :class="[
              'w-full bg-indigo-500/30 text-white placeholder-indigo-300 rounded-lg focus:outline-none focus:ring-2 text-sm md:text-base',
              errors.technologies ? 'ring-2 ring-red-400' : 'focus:ring-white',
            ]"
            @update:modelValue="handleChange"
            v-model="selectedTechnologies"
            placeholder="Select Technologies"
            :options="[...allTechnologies]"
            :multiple="true"
          ></multiselect>
          <span
            v-if="errors.technologies"
            class="text-xs md:text-sm text-red-300 mt-1"
            >{{ errors.technologies }}</span
          >
        </div>

        <!-- Message Input -->
        <div>
          <quill-editor
            :class="[
              'bg-indigo-500/30 text-white placeholder-indigo-300 rounded-b-lg focus:outline-none border-indigo-300 focus:ring-2 resize-none text-sm md:text-base',
            ]"
            v-model:value="formData.message"
            contentType="html"
            theme="snow"
          />
          <span
            v-if="errors.message"
            class="text-xs md:text-sm text-red-300 mt-1"
            >{{ errors.message }}</span
          >
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full px-4 md:px-6 py-2 md:py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? "Sending..." : "Submit" }}
        </button>

        <!-- Success Message -->
        <div
          v-if="submitSuccess"
          class="text-center text-green-300 text-sm md:text-base"
        >
          Thank you! Your message has been sent successfully.
        </div>
      </form>
    </div>
  </section>

  <!-- Add OTP Modal -->
  <OtpVerificationModal
    :show="showOtpModal"
    :phone="formData.phone"
    :email="formData.email"
    :tempId="tempId"
    @close="showOtpModal = false"
    @verified="handleOtpVerified"
  />
</template>

<script setup>
import { ref, reactive, defineEmits, onMounted, getCurrentInstance } from "vue";
import Multiselect from "vue-multiselect";
import { quillEditor } from "vue3-quill";
import "quill/dist/quill.snow.css";
import Quill from "quill"; // Manually import Quill
// import "quill/dist/quill.snow.css";

window.Quill = Quill;
// import { STRINGS } from "@/constants/strings";
// import { VALIDATION } from "@/constants/validation";
// import { contactService } from "@/api/services/contactService";
import OtpVerificationModal from "../OtpVerificationModal.vue";
import { useToast } from "@/composables/useToast";

// Get app instance to access global properties
const app = getCurrentInstance();
const apiService = app.appContext.config.globalProperties.$apiService;

// const editorOptions = {
//   theme: "snow", // or 'bubble'
//   modules: {
//     toolbar: [
//       [{ header: "1" }, { header: "2" }],
//       ["bold", "italic", "underline"],
//       ["blockquote", "code-block"],
//       [{ list: "ordered" }, { list: "bullet" }],
//       [{ script: "sub" }, { script: "super" }],
//       [{ indent: "-1" }, { indent: "+1" }],
//       [{ direction: "rtl" }],
//       [{ size: ["small", "medium", "large", "huge"] }],
//       [{ color: [] }, { background: [] }],
//       [{ font: [] }],
//       [{ align: [] }],
//       ["clean"], // remove formatting button
//     ],
//   },
// };

const formData = reactive({
  name: "",
  phone: "",
  email: "",
  message: "",
  technologies: "",
});

const errors = reactive({
  name: "",
  phone: "",
  email: "",
  message: "",
  technologies: "",
});

const allTechnologies = ref(["Flutter", "dart", "Vue.js", "Git", "Github"]);
const selectedTechnologies = ref([]);
const isSubmitting = ref(false);
const submitSuccess = ref(false);
const showOtpModal = ref(false);

const emit = defineEmits(["refreshUser"]);

const toast = useToast();
const tempId = ref("");
const profileImg = ref("");

// Country codes data
const countries = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇺🇸", name: "USA" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+47", flag: "🇳🇴", name: "Norway" },
  { code: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "+90", flag: "🇹🇷", name: "Turkey" },
  { code: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "+66", flag: "🇹🇭", name: "Thailand" },
  { code: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "+98", flag: "🇮🇷", name: "Iran" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+84", flag: "🇻🇳", name: "Vietnam" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+58", flag: "🇻🇪", name: "Venezuela" },
  { code: "+53", flag: "🇨🇺", name: "Cuba" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+32", flag: "🇧🇪", name: "Belgium" },
  { code: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "+420", flag: "🇨🇿", name: "Czech Republic" },
  { code: "+45", flag: "🇩🇰", name: "Denmark" },
  { code: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "+30", flag: "🇬🇷", name: "Greece" },
  { code: "+36", flag: "🇭🇺", name: "Hungary" },
  { code: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+40", flag: "🇷🇴", name: "Romania" },
  { code: "+421", flag: "🇸🇰", name: "Slovakia" },
  { code: "+386", flag: "🇸🇮", name: "Slovenia" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "+964", flag: "🇮🇶", name: "Iraq" },
  { code: "+962", flag: "🇯🇴", name: "Jordan" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+961", flag: "🇱🇧", name: "Lebanon" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+963", flag: "🇸🇾", name: "Syria" },
  { code: "+967", flag: "🇾🇪", name: "Yemen" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+95", flag: "🇲🇲", name: "Myanmar" },
  { code: "+855", flag: "🇰🇭", name: "Cambodia" },
  { code: "+856", flag: "🇱🇦", name: "Laos" },
  { code: "+66", flag: "🇹🇭", name: "Thailand" },
  { code: "+84", flag: "🇻🇳", name: "Vietnam" },
  { code: "+63", flag: "🇵🇭", name: "Philippines" },
  { code: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+679", flag: "🇫🇯", name: "Fiji" },
  { code: "+682", flag: "🇨🇰", name: "Cook Islands" },
  { code: "+685", flag: "🇼🇸", name: "Samoa" },
  { code: "+686", flag: "🇰🇮", name: "Kiribati" },
  { code: "+687", flag: "🇳🇨", name: "New Caledonia" },
  { code: "+688", flag: "🇹🇻", name: "Tuvalu" },
  { code: "+689", flag: "🇵🇫", name: "French Polynesia" },
  { code: "+690", flag: "🇹🇰", name: "Tokelau" },
  { code: "+691", flag: "🇫🇲", name: "Micronesia" },
  { code: "+692", flag: "🇲🇭", name: "Marshall Islands" },
  { code: "+850", flag: "🇰🇵", name: "North Korea" },
  { code: "+852", flag: "🇭🇰", name: "Hong Kong" },
  { code: "+853", flag: "🇲🇴", name: "Macau" },
  { code: "+855", flag: "🇰🇭", name: "Cambodia" },
  { code: "+856", flag: "🇱🇦", name: "Laos" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+886", flag: "🇹🇼", name: "Taiwan" },
  { code: "+960", flag: "🇲🇻", name: "Maldives" },
  { code: "+961", flag: "🇱🇧", name: "Lebanon" },
  { code: "+962", flag: "🇯🇴", name: "Jordan" },
  { code: "+963", flag: "🇸🇾", name: "Syria" },
  { code: "+964", flag: "🇮🇶", name: "Iraq" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+967", flag: "🇾🇪", name: "Yemen" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+970", flag: "🇵🇸", name: "Palestine" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+975", flag: "🇧🇹", name: "Bhutan" },
  { code: "+976", flag: "🇲🇳", name: "Mongolia" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+992", flag: "🇹🇯", name: "Tajikistan" },
  { code: "+993", flag: "🇹🇲", name: "Turkmenistan" },
  { code: "+994", flag: "🇦🇿", name: "Azerbaijan" },
  { code: "+995", flag: "🇬🇪", name: "Georgia" },
  { code: "+996", flag: "🇰🇬", name: "Kyrgyzstan" },
  { code: "+998", flag: "🇺🇿", name: "Uzbekistan" },
];

const selectedCountry = ref(countries[0]); // Default to first country

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePhone = (phone) => {
  const phoneNumber = phone.replace(/\D/g, ""); // Remove non-digits
  const minLength = selectedCountry.value.code === "+91" ? 10 : 7; // Different lengths for different countries
  return phoneNumber.length >= minLength;
};

const validateForm = () => {
  let isValid = true;

  // Reset errors
  Object.keys(errors).forEach((key) => (errors[key] = ""));

  // Name validation
  if (!formData.name.trim()) {
    errors.name = "Name is required";
    isValid = false;
  }

  // Phone validation
  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
    isValid = false;
  } else if (!validatePhone(formData.phone)) {
    errors.phone = "Please enter a valid phone number";
    isValid = false;
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = "Message is required";
    isValid = false;
  }
  if (!formData.technologies) {
    errors.technologies = "Technologies is required";
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  // Format phone number with country code
  const fullPhoneNumber = `${selectedCountry.value.code}${formData.phone}`;

  isSubmitting.value = true;

  const requestData = {
    name: formData.name,
    email: formData.email,
    country_code: selectedCountry.value.code,
    phone: formData.phone,
    technologies: formData.technologies,
    requirements: formData.message,
  };

  // If there's a profile image, add it to the request data
  if (formData.profileImg) {
    requestData.profile_image = formData.profileImg;
  }

  isSubmitting.value = true;

  try {
    const response = await apiService.postFileCall(
      "register/initiate",
      requestData
    );
    if (!response.error) {
      showOtpModal.value = true;
      toast.showToast({
        message: "Otp submitted successfully!",
        type: "success",
        duration: 3000,
      });

      tempId.value = response.temp_id.toString();
    } else {
      toast.showToast({
        message: response.error || "Something went wrong",
        type: "error",
        duration: 4000,
      });
    }
  } catch (error) {
    toast.showToast({
      message: "Failed to submit form. Please try again.",
      type: "error",
      duration: 4000,
    });
  } finally {
    isSubmitting.value = false;
  }
};

const handleOtpVerified = () => {
  showOtpModal.value = false;
  emit("refreshUser");
  // Reset form
  Object.keys(formData).forEach((key) => (formData[key] = ""));
  selectedTechnologies.value = [];
  profileImg.value = "";
  // Show success toast instead of inline message
  toast.showToast({
    message: "Thank you! You Registered successfully.",
    type: "success",
    duration: 3000,
  });
};

const handleImageClick = () => {
  document.getElementById("imgIconId").click();
};

const onImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Create preview URL
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImg.value = e.target.result;
      formData.profileImg = file; // Store file in form data
    };
    reader.readAsDataURL(file);
  }
};

const handleChange = (event) => {
  formData.technologies = event.toString();
};
const capitalizeFirstLetter = (event) => {
  const inputValue = event.target.value;
  formData.name = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.bg-indigo-600 {
  background-color: #4f46e5;
}

/* Custom input styles */
input::placeholder,
textarea::placeholder {
  color: rgba(199, 210, 254, 0.8);
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px #4338ca inset;
  transition: background-color 5000s ease-in-out 0s;
}

/* Hide default select arrow in Firefox */
select {
  -moz-appearance: none;
}

/* Hide default select arrow in Chrome */
select::-ms-expand {
  display: none;
}

.ql-toolbar.ql-snow {
  box-sizing: border-box;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  padding: 8px;
  border: 1px solid #4f46e5 !important;
  background: #a5b4fc !important;
  color: white;
  border-radius: 10px 10px 0px 0px;
}

.ql-container.ql-snow {
  border: 1px solid #4f46e5 !important;
  color: white;
  height: 100px;
}

.multiselect .multiselect__tags {
  min-height: 40px;
  display: block;
  padding: 8px 40px 0 8px;
  border-radius: 5px;
  border: 1px solid transparent !important;
  background: transparent !important;
  color: white;
}
</style>
