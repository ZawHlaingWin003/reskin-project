<template>
    <SectionContainer>
        <BackButton
            text="Profile"
            :link="{ name: 'user.profile' }"
        />
    </SectionContainer>
</template>

<script setup lang="ts">
import BackButton from '@/components/BackButton.vue';
import SectionContainer from '@/components/SectionContainer.vue';
</script>

<style scoped></style>