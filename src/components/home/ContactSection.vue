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
      :style="{ backgroundImage: `url(${bgImage})` }"
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
              type="tel"
              v-model="formData.phone"
              placeholder="Phone number"
              maxlength="10"
              :class="[
                'flex-1 px-3 md:px-4 py-2 md:py-3 bg-indigo-500/30 text-white placeholder-indigo-300 rounded-lg focus:outline-none focus:ring-2 text-sm md:text-base',
                errors.phone ? 'ring-2 ring-red-400' : 'focus:ring-white',
              ]"
              @input="validatePhoneNumber"
            />
          </div>
          <!--  @input="formData.phone = formData.phone.toString().slice(0, 10)"
 -->
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
              'w-full px-3 md:px-4 py-2 md:py-3 bg-indigo-500/30 text-white placeholder-indigo-300 rounded-lg focus:outline-none focus:ring-2 text-sm md:text-base ',
              errors.email ? 'ring-2 ring-red-400' : 'focus:ring-white',
            ]"
            size="10"
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
            class="placeholder-gray-900"
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
            :options="editorOptions"
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
          class="w-full px-4 md:px-6 py-2 md:py-3 bg-indigo-500/30 text-white cursor-pointer rounded-lg font-medium hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
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
import bgImage from "@/assets/Images/gradient_bg.png";
import Quill from "quill"; // Manually import Quill
import { parsePhoneNumberFromString } from "libphonenumber-js";
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
  { code: "+91", flag: "🇮🇳", name: "India", iso: "IN" },
  { code: "+1", flag: "🇺🇸", name: "USA", iso: "US" },
  { code: "+44", flag: "🇬🇧", name: "UK", iso: "GB" },
  { code: "+61", flag: "🇦🇺", name: "Australia", iso: "AU" },
  { code: "+86", flag: "🇨🇳", name: "China", iso: "CN" },
  { code: "+81", flag: "🇯🇵", name: "Japan", iso: "JP" },
  { code: "+49", flag: "🇩🇪", name: "Germany", iso: "DE" },
  { code: "+33", flag: "🇫🇷", name: "France", iso: "FR" },
  { code: "+7", flag: "🇷🇺", name: "Russia", iso: "RU" },
  { code: "+971", flag: "🇦🇪", name: "UAE", iso: "AE" },
  { code: "+39", flag: "🇮🇹", name: "Italy", iso: "IT" },
  { code: "+34", flag: "🇪🇸", name: "Spain", iso: "ES" },
  { code: "+55", flag: "🇧🇷", name: "Brazil", iso: "BR" },
  { code: "+27", flag: "🇿🇦", name: "South Africa", iso: "ZA" },
  { code: "+82", flag: "🇰🇷", name: "South Korea", iso: "KR" },
  { code: "+47", flag: "🇳🇴", name: "Norway", iso: "NO" },
  { code: "+46", flag: "🇸🇪", name: "Sweden", iso: "SE" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands", iso: "NL" },
  { code: "+41", flag: "🇨🇭", name: "Switzerland", iso: "CH" },
  { code: "+351", flag: "🇵🇹", name: "Portugal", iso: "PT" },
  { code: "+48", flag: "🇵🇱", name: "Poland", iso: "PL" },
  { code: "+90", flag: "🇹🇷", name: "Turkey", iso: "TR" },
  { code: "+52", flag: "🇲🇽", name: "Mexico", iso: "MX" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand", iso: "NZ" },
  { code: "+63", flag: "🇵🇭", name: "Philippines", iso: "PH" },
  { code: "+66", flag: "🇹🇭", name: "Thailand", iso: "TH" },
  { code: "+62", flag: "🇮🇩", name: "Indonesia", iso: "ID" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia", iso: "MY" },
  { code: "+65", flag: "🇸🇬", name: "Singapore", iso: "SG" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria", iso: "NG" },
  { code: "+54", flag: "🇦🇷", name: "Argentina", iso: "AR" },
  { code: "+20", flag: "🇪🇬", name: "Egypt", iso: "EG" },
  { code: "+212", flag: "🇲🇦", name: "Morocco", iso: "MA" },
  { code: "+98", flag: "🇮🇷", name: "Iran", iso: "IR" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan", iso: "PK" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh", iso: "BD" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka", iso: "LK" },
  { code: "+977", flag: "🇳🇵", name: "Nepal", iso: "NP" },
  { code: "+84", flag: "🇻🇳", name: "Vietnam", iso: "VN" },
  { code: "+56", flag: "🇨🇱", name: "Chile", iso: "CL" },
  { code: "+58", flag: "🇻🇪", name: "Venezuela", iso: "VE" },
  { code: "+53", flag: "🇨🇺", name: "Cuba", iso: "CU" },
  { code: "+32", flag: "🇧🇪", name: "Belgium", iso: "BE" },
  { code: "+43", flag: "🇦🇹", name: "Austria", iso: "AT" },
  { code: "+420", flag: "🇨🇿", name: "Czech Republic", iso: "CZ" },
  { code: "+45", flag: "🇩🇰", name: "Denmark", iso: "DK" },
  { code: "+358", flag: "🇫🇮", name: "Finland", iso: "FI" },
  { code: "+30", flag: "🇬🇷", name: "Greece", iso: "GR" },
  { code: "+36", flag: "🇭🇺", name: "Hungary", iso: "HU" },
  { code: "+353", flag: "🇮🇪", name: "Ireland", iso: "IE" },
  { code: "+40", flag: "🇷🇴", name: "Romania", iso: "RO" },
  { code: "+421", flag: "🇸🇰", name: "Slovakia", iso: "SK" },
  { code: "+386", flag: "🇸🇮", name: "Slovenia", iso: "SI" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine", iso: "UA" },
  { code: "+972", flag: "🇮🇱", name: "Israel", iso: "IL" },
  { code: "+964", flag: "🇮🇶", name: "Iraq", iso: "IQ" },
  { code: "+962", flag: "🇯🇴", name: "Jordan", iso: "JO" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait", iso: "KW" },
  { code: "+961", flag: "🇱🇧", name: "Lebanon", iso: "LB" },
  { code: "+968", flag: "🇴🇲", name: "Oman", iso: "OM" },
];

const editorOptions = {
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }], // Header options
      ["bold", "italic", "underline"], // Text formatting
      [{ list: "ordered" }, { list: "bullet" }], // Lists
      [{ align: [] }], // Text alignment
      ["link"], // Links
      ["clean"], // Remove formatting
    ],
  },
};

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
const validatePhoneNumber = () => {
  let phone = formData.phone.replace(/\D/g, ""); // Remove non-numeric characters

  // Limit to 10 digits
  formData.phone = phone.slice(0, 10);

  // Validate phone number using libphonenumber-js
  const phoneNumber = parsePhoneNumberFromString(
    phone,
    selectedCountry.value.iso
  ); // Change "IN" to your country code

  if (!phoneNumber || !phoneNumber.isValid()) {
    errors.phone = "Please enter a valid phone number";
  } else {
    errors.phone = "";
  }
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
  } else if (formData.phone.length < 10) {
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
  // if (!formData.message.trim()) {
  //   errors.message = "Message is required";
  //   isValid = false;
  // }
  const plainText = stripHtml(formData.message);
  if (!plainText.trim()) {
    errors.message = "Message is required";
    isValid = false;
    formData.message = ""; // Reset input
  }

  if (!formData.technologies) {
    errors.technologies = "Technologies is required";
    isValid = false;
  }

  return isValid;
};

const stripHtml = (html) => {
  return html.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
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
    requestData.image = formData.profileImg;
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
        message: "OTP sent successfully!",
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
  // const inputValue = event.target.value;
  // formData.name = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  let inputValue = event.target.value.trimStart(); // Remove leading spaces
  inputValue = inputValue.replace(/\s+/g, " "); // Replace multiple spaces with a single space
  inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1); // Capitalize first letter
  formData.name = inputValue;
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
  height: 250px;
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

.multiselect__content-wrapper {
  background: #311c88;
  color: white;
  border: 1px solid transparent !important;
}
.multiselect__tag {
  background: transparent;
}
.multiselect__input,
.multiselect__single {
  background: transparent;
}
.ql-editor .ql-blank {
  color: red !important; /* Change to any color */
}
</style>
