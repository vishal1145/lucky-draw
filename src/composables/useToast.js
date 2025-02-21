import { ref } from "vue";

const isVisible = ref(false);
const message = ref("");
const type = ref("success");
const duration = ref(3000);

export function useToast() {
  const showToast = ({ message: msg, type: toastType = "success", duration: toastDuration = 3000 }) => {
    message.value = msg;
    type.value = toastType;
    duration.value = toastDuration;
    isVisible.value = true;

    setTimeout(() => {
      isVisible.value = false;
    }, toastDuration);
  };
  console.log( isVisible,
    message,
    type,
    duration,
    showToast);
  return {
    isVisible,
    message,
    type,
    duration,
    showToast,
  };
}
