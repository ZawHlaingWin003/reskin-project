<template>
    <div class="image-uploader">
        <label :for="inputId">
            <img
                :src="renderedImage"
                :alt="altText"
                :width="size"
                :height="size"
                class="p-2 border rounded border-light-subtle dark:border-slate-800"
                style="object-fit: contain;"
            />
        </label>
        <input
            class="profile-img"
            style="display:none;"
            :id="inputId"
            type="file"
            @change="handleFileChange"
        />
        <div v-if="previewImage">
            <span
                @click="removeImage"
                class="text-red-500 close-btn"
            >
                <i class="pi pi-times-circle"></i>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps({
    initialImage: {
        type: [String, Object],
        default: ''
    },
    inputId: {
        type: String,
        default: 'image-uploader-id'
    },
    altText: {
        type: String,
        default: 'Image Uploader Image'
    },
    size: {
        type: [String, Number],
        default: 100
    }
});

const emits = defineEmits(['onImageSelected', 'onImageRemoved']);

let previewImage = ref('');
const imagePlaceholder = '/assets/images/capture.jpg';

const removeImage = () => {
    previewImage.value = '';
    emits('onImageRemoved');
};

const renderedImage = computed(() => {
    return props.initialImage.length > 0
        ? `${props.initialImage}`
        : previewImage.value || imagePlaceholder;
});

const handleFileChange = (e: Event) => {
    const selectedFile = (e.target as HTMLInputElement).files?.[0];
    if (selectedFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.value = e.target?.result as string;
            emits('onImageSelected', selectedFile);
        };
        reader.readAsDataURL(selectedFile);
    }
};
</script>

<style scoped>
.image-uploader {
    position: relative;
    width: fit-content;
}

.close-btn {
    position: absolute;
    top: -10px;
    right: -5px;
    font-size: 1.2rem;
    cursor: pointer;
}
</style>