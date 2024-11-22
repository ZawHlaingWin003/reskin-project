<template>
    <div class="flex items-center gap-4">
        <Button
            label="Add Money"
            as="router-link"
            icon="pi pi-plus"
            :to="{ name: 'user.deposit' }"
            class="w-full whitespace-nowrap"
        />
        <Button
            label="Withdraw"
            severity="help"
            as="router-link"
            icon="pi pi-send"
            :to="{ name: 'user.withdraw' }"
            class="w-full whitespace-nowrap"
        />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>