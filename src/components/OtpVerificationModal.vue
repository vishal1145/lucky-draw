<template>
  <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Backdrop -->
    <div class="fixed inset-0 opacity-50 bg-black transition-opacity"></div>

    <!-- Modal -->
    <div class="flex min-h-full items-center justify-center p-4">
      <div
        class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
      >
        <div class="absolute right-0 top-0 pr-4 pt-4">
          <button
            @click="$emit('close')"
            class="rounded-md bg-white text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Close</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="text-center sm:mt-5">
          <h3 class="text-2xl font-semibold leading-6 text-indigo-600 mb-4">
            Verify Your Phone Number
          </h3>
          <p class="text-sm text-gray-500 mb-6">
            We've sent a verification code to
            <span class="text-indigo-600"> {{ phone }} </span>
          </p>

          <!-- Phone OTP Input -->
          <div class="flex justify-center gap-2 mb-6">
            <input
              v-for="(digit, index) in 6"
              :key="`phone-${index}`"
              v-model="phoneOtp[index]"
              type="text"
              maxlength="1"
              class="w-12 h-12 text-center text-xl border-2 border-indigo-300 rounded-lg focus:border-indigo-600 focus:outline-none"
              @input="(e) => handleInput(e, index, 'phone')"
              @keydown="(e) => handleKeydown(e, index, 'phone')"
              :ref="(el) => (phoneOtpInputs[index] = el)"
            />
          </div>

          <div v-if="error" class="text-red-500 text-sm mb-4">
            {{ error }}
          </div>

          <!-- Phone Resend Button -->
          <p class="text-sm text-gray-500 mb-6">
            Didn't receive the code?
            <button
              @click="handleResendPhone"
              :disabled="phoneResendTimer > 0"
              class="text-indigo-600 hover:text-indigo-500 font-medium disabled:opacity-50"
            >
              {{
                phoneResendTimer > 0
                  ? `Resend in ${phoneResendTimer}s`
                  : "Resend"
              }}
            </button>
          </p>
        </div>

        <!-- Email OTP Section -->
        <div class="text-center sm:mt-5">
          <h3 class="text-2xl font-semibold leading-6 text-indigo-600 mb-4">
            Verify Your Gmail Account
          </h3>
          <p class="text-sm text-gray-500 mb-6">
            We've sent a verification code to
            <span class="text-indigo-600"> {{ email }} </span>
          </p>

          <!-- Email OTP Input -->
          <div class="flex justify-center gap-2 mb-6">
            <input
              v-for="(digit, index) in 6"
              :key="`email-${index}`"
              v-model="emailOtp[index]"
              type="text"
              maxlength="1"
              class="w-12 h-12 text-center text-xl border-2 border-indigo-300 rounded-lg focus:border-indigo-600 focus:outline-none"
              @input="(e) => handleInput(e, index, 'email')"
              @keydown="(e) => handleKeydown(e, index, 'email')"
              :ref="(el) => (emailOtpInputs[index] = el)"
            />
          </div>

          <div v-if="error" class="text-red-500 text-sm mb-4">
            {{ error }}
          </div>

          <!-- Email Resend Button -->
          <p class="text-sm text-gray-500 mb-6">
            Didn't receive the code?
            <button
              @click="handleResendEmail"
              :disabled="emailResendTimer > 0"
              class="text-indigo-600 hover:text-indigo-500 font-medium disabled:opacity-50"
            >
              {{
                emailResendTimer > 0
                  ? `Resend in ${emailResendTimer}s`
                  : "Resend"
              }}
            </button>
          </p>
        </div>

        <div class="mt-5 sm:mt-6">
          <button
            type="button"
            :disabled="!isOtpComplete || verifying"
            @click="verifyOtp"
            class="inline-flex w-full justify-center cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ verifying ? "Verifying..." : "Verify" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useToast } from "@/composables/useToast";
import apiService from "@/core/api/api-service";

const toast = useToast();

const props = defineProps({
  show: Boolean,
  phone: String,
  email: String,
  tempId: String,
});

const emit = defineEmits(["close", "verified"]);

// Separate OTP states for phone and email
const phoneOtp = ref(Array(6).fill(""));
const emailOtp = ref(Array(6).fill(""));
const phoneOtpInputs = ref([]);
const emailOtpInputs = ref([]);
const error = ref("");
const verifying = ref(false);
const phoneResendTimer = ref(0);
const emailResendTimer = ref(0);

const isOtpComplete = computed(() => {
  return (
    phoneOtp.value.every((digit) => digit !== "") &&
    emailOtp.value.every((digit) => digit !== "")
  );
});

const handleInput = (event, index, type) => {
  const value = event.target.value;
  if (value && index < 5) {
    const inputs =
      type === "phone" ? phoneOtpInputs.value : emailOtpInputs.value;
    inputs[index + 1]?.focus();
  }
};

const handleKeydown = (event, index, type) => {
  const otpArray = type === "phone" ? phoneOtp.value : emailOtp.value;
  const inputs = type === "phone" ? phoneOtpInputs.value : emailOtpInputs.value;

  if (event.key === "Backspace" && !otpArray[index] && index > 0) {
    inputs[index - 1]?.focus();
  }
};

const startResendTimer = (type) => {
  const timer = type === "phone" ? phoneResendTimer : emailResendTimer;
  timer.value = 30;
  const interval = setInterval(() => {
    if (timer.value > 0) {
      timer.value--;
    } else {
      clearInterval(interval);
    }
  }, 1000);
};

const handleResendPhone = () => {
  startResendTimer("phone");
};

const handleResendEmail = () => {
  startResendTimer("email");
};

const verifyOtp = async () => {
  error.value = "";
  verifying.value = true;

  const requestData = {
    temp_id: props.tempId,
    email_otp: emailOtp.value.join(""),
    phone_otp: phoneOtp.value.join(""),
  };

  try {
    const response = await apiService.postCall("register/verify", requestData);

    if (!response.isError) {
      emit("verified");
      phoneOtp.value = Array(6).fill("");
      emailOtp.value = Array(6).fill("");
      toast.showToast({
        message: "Verification successful!",
        type: "success",
        duration: 3000,
      });
    } else {
      toast.showToast({
        message: "Invalid OTP. Please try again.",
        type: "error",
        duration: 4000,
      });
      error.value = "Invalid OTP. Please try again.";
    }
  } catch (err) {
    toast.showToast({
      message: "Verification failed. Please try again",
      type: "error",
      duration: 4000,
    });
    error.value = "Verification failed. Please try again.";
  } finally {
    verifying.value = false;
  }
};

// Start timers when modal opens
watch(
  () => props.show,
  (newValue) => {
    if (newValue) {
      startResendTimer("phone");
      startResendTimer("email");
    }
  }
);
</script>
