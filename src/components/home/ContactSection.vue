<template>
  <section id="contact-section" class="w-full">
    <div class="text-center pt-8 pb-4 sm:pb-8 sm:pt-12 lg:pt-16">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold">
        <span class="text-indigo-600">Register!</span>
      </h2>
    </div>
  </section>

  <section
    class="flex flex-col lg:flex-row w-full min-h-[600px]  pb-8 sm:pb-12 lg:pb-16 px-4 md:px-8 lg:px-32"
  >
    <div
      class="bg-indigo-600 p-4 md:p-8 lg:p-16 w-full rounded-2xl bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
        LET'S WORK TOGETHER
      </h2>
      <p class="text-indigo-200 mb-4 md:mb-8 text-center text-sm md:text-base">
       Fill out the form below to start a conversation about your next project.
      </p>

      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
        <!-- Profile Image + Name, Email, and Phone Section -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-6 w-full items-stretch">
          <!-- Profile Image Section -->
          <!-- <div class="flex flex-col items-center justify-between gap-2 w-full md:w-auto md:self-stretch">
            <input
              id="imgIconId"
              type="file"
              accept="image/*"
              @change="onImageChange"
              class="hidden"
            />

            <div class="relative">
              <div
                class="relative w-16 h-16 md:w-18 md:h-18 rounded-full overflow-hidden border-2 border-indigo-400 shadow-xl bg-indigo-500/20 flex items-center justify-center"
                :class="[
                  errors.profileImg ? 'ring-2 ring-red-400' : '',
                ]"
              >
                <img
                  v-if="profileImg"
                  :src="profileImg"
                  class="w-full h-full object-cover"
                  alt="Profile Preview"
                />
                <svg
                  v-else
                  class="w-6 h-6 md:w-8 md:h-8 text-indigo-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <div
                  v-if="profileImg"
                  class="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                  @click.stop="handleImageClick"
                >
                  <span class="text-white text-xs font-medium">Change</span>
                </div>
              </div>
              <span
                v-if="errors.profileImg"
                class="text-xs md:text-sm text-red-300 mt-1 block text-center"
                >{{ errors.profileImg }}</span
              >
            </div>

            <div
              :class="[
                'w-full px-3 md:px-4 py-2 md:py-3 bg-indigo-500/30 text-white rounded-lg flex justify-center items-center focus:outline-none focus:ring-2 cursor-pointer text-sm md:text-base transition-all hover:bg-indigo-500/50 hover:shadow-lg',
                errors.profileImg ? 'ring-2 ring-red-400' : 'focus:ring-white',
              ]"
              @click="handleImageClick"
            >
              <svg
                class="w-3 h-3 md:w-4 md:h-4 mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {{ profileImg ? "Change Profile Image" : "Select Profile Image" }}
            </div>
          </div> -->

          <!-- Name, Email, and Phone Section -->
          <div class="flex flex-col justify-between gap-4 md:gap-6 flex-1 w-full">
            <!-- Row 1: Company Name (Full Width) -->
            <div class="w-full">
              <input
                type="text"
                maxlength="50"
                v-model="formData.companyName"
                @input="capitalizeCompanyName"
                placeholder="Company Name"
                :class="[
                  'w-full px-3 md:px-4 py-2 md:py-3 bg-indigo-500/30 text-white placeholder-indigo-300 rounded-lg focus:outline-none focus:ring-2 text-sm md:text-base',
                  errors.companyName ? 'ring-2 ring-red-400' : 'focus:ring-white',
                ]"
              />
              <span
                v-if="errors.companyName"
                class="text-xs md:text-sm text-red-300 mt-1 block"
                >{{ errors.companyName }}</span
              >
            </div>

            <!-- Row 2: Name and Email -->
            <div class="flex flex-col md:flex-row gap-4 md:gap-6">
              <!-- Name Input -->
              <div class="flex-1">
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
                  class="text-xs md:text-sm text-red-300 mt-1 block"
                  >{{ errors.name }}</span
                >
              </div>

              <!-- Email Input -->
              <div class="flex-1">
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
                  class="text-xs md:text-sm text-red-300 mt-1 block"
                  >{{ errors.email }}</span
                >
                <!-- Email Verification Warning -->
                <p class="text-xs md:text-sm text-yellow-300 mt-2 font-medium">
                  ⚠️ Winner notification and Service Credit Codes are sent via email. Invalid emails forfeit the prize.
                </p>
              </div>
            </div>

            <!-- Row 3: Phone Input with Country Code -->
            <div>
              <div class="flex gap-4 md:gap-6">
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
              <span
                v-if="errors.phone"
                class="text-xs md:text-sm text-red-300 mt-1 block"
                >{{ errors.phone }}</span
              >
            </div>
          </div>
        </div>

        <!-- Row 4: Industry (Full Width) -->
        <div class="w-full">
          <multiselect
            :class="[
              'w-full bg-indigo-500/30 text-white placeholder-indigo-300 rounded-lg focus:outline-none focus:ring-2 text-sm md:text-base',
              errors.industry ? 'ring-2 ring-red-400' : 'focus:ring-white',
            ]"
            @update:modelValue="handleChange"
            v-model="selectedIndustries"
            placeholder="Select Industry"
            :options="[...allIndustries]"
            :multiple="true"
          ></multiselect>
          <span
            v-if="errors.industry"
            class="text-xs md:text-sm text-red-300 mt-1 block"
            >{{ errors.industry }}</span
          >
        </div>


        <!-- Start Date Selection (Optional) -->
        <div class="w-full flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
          <label class="text-white text-sm md:text-base whitespace-nowrap">
            When do you plan to start:
          </label>
          <div class="flex flex-wrap gap-3 md:gap-4">
            <span
              v-for="option in startDateOptions"
              :key="option.value"
              @click="formData.startDate = option.value"
              :class="[
                'inline-flex items-center justify-center px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-sm md:text-base font-medium cursor-pointer transition-all duration-200 min-w-[120px] md:min-w-[140px]',
                formData.startDate === option.value
                  ? 'bg-indigo-400/40 text-white border-2 border-indigo-300/60 shadow-[0_0_15px_rgba(129,140,248,0.4)] backdrop-blur-sm'
                  : 'bg-indigo-600/30 text-white border border-indigo-500/30 hover:bg-indigo-600/40 hover:border-indigo-400/50',
              ]"
            >
              {{ option.label }}
            </span>
          </div>
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

      <!-- Consultation Offer Text -->
      <div class="text-center mt-4 md:mt-6 w-full">
        <p class="inline-block text-xs text-white bg-indigo-600 rounded-[17px] pl-[13px] leading-relaxed py-1 pr-4">
          Every participant receives a free project consultation worth $99.
        </p>
      </div>
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
import bgImage from "@/assets/Images/gradient_bg.webp";
import Quill from "quill"; // Manually import Quill
import { parsePhoneNumberFromString } from "libphonenumber-js";
// import "quill/dist/quill.snow.css";

window.Quill = Quill;
// import { STRINGS } from "@/constants/strings";
// import { VALIDATION } from "@/constants/validation";
// import { contactService } from "@/api/services/contactService";
import OtpVerificationModal from "../OtpVerificationModal.vue";
import { useToast } from "@/composables/useToast";
import { useMixpanel } from "@/composables/useMixpanel";
import { useRouter } from "vue-router";

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
  companyName: "",
  message: "",
  industry: "",
  projectDescription: "",
  startDate: "",
});

const errors = reactive({
  name: "",
  phone: "",
  email: "",
  companyName: "",
  message: "",
  industry: "",
});

const allIndustries = ref([
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Manufacturing",
  "Real Estate",
  "Other"
]);
const selectedIndustries = ref([]);
const isSubmitting = ref(false);
const submitSuccess = ref(false);
const showOtpModal = ref(false);

// Start date options
const startDateOptions = [
  { label: "This week", value: "this_week" },
  { label: "This month", value: "this_month" },
  { label: "Not decided", value: "not_decided" },
];

const emit = defineEmits(["refreshUser"]);

const toast = useToast();
const { track } = useMixpanel();

// Function to track GA4 events using gtag with retry mechanism
const trackGA4 = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined') return;
  
  // Function to actually send the event
  const sendEvent = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
      console.log('GA4 Event sent:', eventName, eventParams);
    } else if (window.dataLayer) {
      // Fallback to dataLayer if gtag is not available yet
      window.dataLayer.push({
        event: eventName,
        ...eventParams
      });
      console.log('GA4 Event pushed to dataLayer:', eventName, eventParams);
    }
  };
  
  // Try to send immediately
  if (typeof window.gtag === 'function' || window.dataLayer) {
    sendEvent();
  } else {
    // If gtag is not loaded yet, wait a bit and retry
    let retries = 0;
    const maxRetries = 10;
    const checkGtag = setInterval(() => {
      retries++;
      if (typeof window.gtag === 'function' || window.dataLayer) {
        clearInterval(checkGtag);
        sendEvent();
      } else if (retries >= maxRetries) {
        clearInterval(checkGtag);
        console.warn('GA4 gtag not available after retries:', eventName);
      }
    }, 100);
  }
};
const router = useRouter();
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
  if (!formData.phone) {
    errors.phone = "";
    return;
  }
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

  // Company Name validation (mandatory)
  if (!formData.companyName.trim()) {
    errors.companyName = "Company Name is required";
    isValid = false;
  }

  // Name validation
  if (!formData.name.trim()) {
    errors.name = "Name is required";
    isValid = false;
  }

  // Phone validation (Optional)
  if (formData.phone && formData.phone.trim()) {
    if (formData.phone.length < 10) {
      errors.phone = "Please enter a valid phone number";
      isValid = false;
    }
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

  // Industry validation (Optional now)
  // if (!formData.industry) {
  //   errors.industry = "Industry is required";
  //   isValid = false;
  // }

  return isValid;
};

const stripHtml = (html) => {
  return html.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  // Track form submission
  track("Form Submitted", {
    form_location: "ContactSection",
    form_type: "Registration"
  });

  // Track form_start event in GA4
  trackGA4('form_start', {
    form_id: 'registration_form',
    form_name: 'Registration Form',
    form_location: 'ContactSection',
    page_path: window.location.pathname,
    page_title: document.title
  });

  // Format phone number with country code
  const fullPhoneNumber = `${selectedCountry.value.code}${formData.phone}`;

  isSubmitting.value = true;

  const requestData = {
    name: formData.name,
    email: formData.email,
    company_name: formData.companyName,
    country_code: selectedCountry.value.code,
    phone: formData.phone,
    technologies: formData.industry,
    requirements: formData.message,
  };

  // Add optional fields if they have values
  if (formData.projectDescription && formData.projectDescription.trim()) {
    requestData.project_description = formData.projectDescription.trim();
  }

  if (formData.startDate) {
    requestData.start_date = formData.startDate;
  }

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
      toast.showToast({
        message: response.message || "Registration successful!",
        type: "success",
        duration: 3000,
      });

      tempId.value = response.temp_id?.toString?.() || "";
      
      // Track generate_lead event in GA4 (standard GA4 event for successful form submission)
      trackGA4('generate_lead', {
        currency: 'USD',
        value: 99,
        form_id: 'registration_form',
        form_name: 'Registration Form',
        form_location: 'ContactSection',
        page_path: window.location.pathname,
        page_title: document.title
      });
      
      handleOtpVerified();
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
  selectedIndustries.value = [];
  profileImg.value = "";
  
  // Track successful registration
  track("Registration Completed", {
    form_location: "ContactSection",
    form_type: "Registration"
  });
  
  // Redirect to thank you page
  setTimeout(() => {
    router.push("/thank-you");
  }, 500);
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
  formData.industry = event.toString();
};
const capitalizeFirstLetter = (event) => {
  // const inputValue = event.target.value;
  // formData.name = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  let inputValue = event.target.value.trimStart(); // Remove leading spaces
  inputValue = inputValue.replace(/\s+/g, " "); // Replace multiple spaces with a single space
  inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1); // Capitalize first letter
  formData.name = inputValue;
};

const capitalizeCompanyName = (event) => {
  let inputValue = event.target.value.trimStart(); // Remove leading spaces
  inputValue = inputValue.replace(/\s+/g, " "); // Replace multiple spaces with a single space
  formData.companyName = inputValue;
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
  height: 300px;
  min-height: 300px;
}

.multiselect {
  min-height: auto !important;
}

.multiselect .multiselect__tags {
  min-height: 42px !important;
  height: auto !important;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px 40px 8px 12px !important;
  border-radius: 8px;
  border: 1px solid transparent !important;
  background: transparent !important;
  color: white;
  gap: 4px;
}

@media (min-width: 768px) {
  .multiselect .multiselect__tags {
    min-height: 48px !important;
    padding: 12px 40px 12px 16px !important;
  }
}

.multiselect__content-wrapper {
  background: #311c88;
  color: white;
  border: 1px solid transparent !important;
}
.multiselect__tag {
  background: rgba(99, 102, 241, 0.4) !important;
  color: white !important;
  border: 1px solid rgba(129, 140, 248, 0.5) !important;
  border-radius: 6px !important;
  padding: 4px 4px 4px 8px !important;
  margin: 0 4px 0 0 !important;
  font-size: 0.875rem !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0 !important;
  transition: all 0.2s ease !important;
  position: relative !important;
}

.multiselect__tag:hover {
  background: rgba(99, 102, 241, 0.6) !important;
  border-color: rgba(129, 140, 248, 0.8) !important;
}

.multiselect__tag-icon {
  background: transparent !important;
  border: none !important;
  color: white !important;
  opacity: 0.9 !important;
  transition: all 0.2s ease !important;
  cursor: pointer !important;
  padding: 0 !important;
  margin: 0 0 0 6px !important;
  width: 16px !important;
  height: 16px !important;
  min-width: 16px !important;
  min-height: 16px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 50% !important;
  flex-shrink: 0 !important;
  vertical-align: middle !important;
  line-height: 1 !important;
  position: relative !important;
}

.multiselect__tag-icon:hover {
  opacity: 1 !important;
  color: #ef4444 !important;
  background: rgba(239, 68, 68, 0.2) !important;
}

.multiselect__tag-icon:after {
  color: white !important;
  font-size: 12px !important;
  font-weight: bold !important;
  line-height: 16px !important;
  display: block !important;
  text-align: center !important;
  width: 16px !important;
  height: 16px !important;
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
}

.multiselect__tag-icon:hover:after {
  color: #ef4444 !important;
  transform: translate(-50%, -50%) scale(1.1) !important;
}

.multiselect__tag > *:not(.multiselect__tag-icon) {
  margin-right: 6px !important;
  padding-right: 0 !important;
}

.multiselect__tag span,
.multiselect__tag strong {
  margin-right: 6px !important;
  padding-right: 0 !important;
  display: inline-block !important;
}

.multiselect__tag .multiselect__tag-icon {
  order: 2 !important;
}
.multiselect__input,
.multiselect__single {
  background: transparent;
  color: white !important;
  padding: 0 !important;
  margin: 0 !important;
  min-height: auto !important;
  line-height: 1.5 !important;
}

.multiselect__input {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.multiselect__placeholder {
  color: rgba(199, 210, 254, 0.8) !important;
  padding: 0 !important;
  margin: 0 !important;
  line-height: 1.5 !important;
  display: inline-block !important;
  vertical-align: middle !important;
}

.multiselect__input::placeholder {
  color: rgba(199, 210, 254, 0.8) !important;
}
.ql-editor .ql-blank {
  color: red !important; /* Change to any color */
}

/* Change the placeholder color */
.ql-editor.ql-blank::before {
  color: #a5b4fc; /* Change this to your desired color */
  content: "Tell us what project you have in mind ..."; /* Ensure the placeholder text is shown */
  font-weight: bold;
}
</style>
