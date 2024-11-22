<template>
    <div>
        <Button
            :label="text"
            severity="secondary"
            variant="text"
            icon="pi pi-chevron-circle-left"
            size="large"
            :to="link"
            as="router-link"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    link: {
        type: [String, Object],
        required: true,
    },
})
</script>

<style scoped></style>