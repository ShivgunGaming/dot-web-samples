<script setup lang="ts">
import { ref } from "vue";
import { Step } from "../types";
import MagnifEyeLivenessCamera from "./MagnifEyeLivenessCamera.vue";
import MagnifEyeLivenessUi from "./MagnifEyeLivenessUi.vue";
import { MagnifEyeLivenessCallback } from "@innovatrics/dot-magnifeye-liveness";
import { FaceComponentData } from "@innovatrics/dot-face-auto-capture/.";

const emit = defineEmits<{
  (e: "onComplete", image: Blob, data: Partial<FaceComponentData>): void;
  (e: "onError", error: Error): void;
  (e: "onBack", step: Step): void;
}>();

const isButtonDisabled = ref(true);

/**
 * At this point use @content property with Digital Identity Service in order to evaluate the MagnifEye liveness score.
 * See: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-dis/latest/documentation/#_magnifeye_liveness_check
 */
const onComplete: MagnifEyeLivenessCallback = (imageData, content) => {
  isButtonDisabled.value = false;
  emit("onComplete", imageData.image, imageData.data);
};

const onError = (error: Error) => {
  emit("onError", error);
};
</script>

<template>
  <div>
    <h2>MagnifEye Liveness</h2>
    <button @click="emit('onBack', Step.SELECT_COMPONENT)" class="button">
      Go back
    </button>
    <div class="container overflow-hidden">
      <MagnifEyeLivenessCamera :cameraOptions="{
        onComplete: onComplete,
        onError: onError,
      }" />
      <MagnifEyeLivenessUi :uiProps="{ showCameraButtons: true }" />
    </div>
  </div>
</template>
