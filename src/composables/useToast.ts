import { UiToast } from "@/components/ui";
import { createApp, h, ref } from "vue";

type Toast = {
  key: number;
  message: string;
}

const toastList = ref<Toast[]>([]);

export const useToast = () => {
  const showToast = (message: string, duration: number = 2000) => {
    const key = Date.now();

    const toast = {
      key,
      message,
    }

    toastList.value.push(toast);

    setTimeout(() => {
      toastList.value = toastList.value.filter((toast) => toast.key !== key);
    }, duration);
  }

  const ToastContainer = {
    render() {
      return h("div", toastList.value.map((toast, index) => h(UiToast, { ...toast, index })));
    }
  }

  const app = createApp(ToastContainer);

  app.mount(document.createElement("div"));
  return {
    showToast
  }
};
