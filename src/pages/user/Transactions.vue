<template>
    <SectionContainer class="mx-1">
        <BackButton
            text="Profile"
            :link="{ name: 'user.profile' }"
        />

        <Card>
            <template #title>
                <div class="flex items-center gap-6">
                    <div class="flex-1 font-semibold leading-6">Transactions</div>
                    <Button
                        type="button"
                        icon="pi pi-ellipsis-h"
                        severity="secondary"
                        text
                        @click="toggle"
                    />
                    <Menu
                        ref="menu"
                        id="overlay_menu"
                        :model="menuItems"
                        :popup="true"
                    />
                </div>
            </template>
            <template #content>
                <DataTable
                    :value="transactions"
                    showHeaders
                    removableSort
                    paginator
                    dataKey="id"
                    :rows="5"
                    paginatorTemplate="PrevPageLink PageLinks NextPageLink  CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                >
                    <template #header>
                        <div class="flex flex-col items-center justify-end gap-2 md:items-end">
                            <SelectButton
                                v-model="filters.status"
                                option-label="name"
                                option-value="value"
                                :options="statusOptions"
                                size="small"
                            />
                            <div class="flex flex-col gap-2 md:flex-row">
                                <DatePicker
                                    v-model="filters.date"
                                    showIcon
                                    fluid
                                    iconDisplay="input"
                                    showButtonBar
                                />
                                <Button
                                    label="Search"
                                    icon="pi pi-search"
                                    variant="outlined"
                                    class="text text-end"
                                    @click="fetchTransactions"
                                />
                            </div>
                        </div>
                    </template>
                    <template #empty> No transactions found. </template>
                    <template #loading> Loading transactions data. Please wait. </template>
                    <Column
                        field="amount"
                        header="Total Amount"
                        sortable
                    >
                        <template #body="{ data }">
                            <p>
                                {{ addThousandSeparator(data.amount) }}
                            </p>
                        </template>
                    </Column>
                    <Column
                        field="current_amount"
                        header="Current Amount"
                        sortable
                    >
                        <template #body="{ data }">
                            <p>
                                {{ addThousandSeparator(data.current_amount) }}
                            </p>
                        </template>
                    </Column>
                    <Column
                        header="Type"
                        field="type"
                        class="text-nowrap"
                        sortable
                    ></Column>
                    <Column
                        field="status"
                        header="Status"
                        sortable
                    >
                        <template #body="{ data }">
                            <Tag
                                :value="getStatusText(data.status)"
                                :severity="getSeverity(data.status)"
                                class="text-xs capitalize"
                            />
                        </template>
                    </Column>
                    <Column header="Name">
                        <template #body="{ data }">
                            <p>
                                {{ data.by_user_name ?? '-' }}
                            </p>
                        </template>
                    </Column>
                    <Column
                        header="Bet Date"
                        class="text-nowrap"
                    >
                        <template #body="{ data }">
                            <p>
                                {{ formatTransactionDate(data.by_user_name) }}
                            </p>
                        </template>
                    </Column>
                </DataTable>
            </template>
        </Card>
    </SectionContainer>
</template>

<script setup lang="ts">
import BackButton from '@/components/BackButton.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import { formatTransactionDate } from '@/helpers/date-helpers';
import { addThousandSeparator } from '@/helpers/number-helpers';
import { getSeverity, getStatusText } from '@/helpers/string-helpers';
import { useToast } from 'primevue';
import { ref, watch } from 'vue';

const toast = useToast();

const filters = ref({
    status: 'all',
    date: new Date()
})

watch(() => filters.value.status, (newFilters) => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Fetching API', life: 3000 });
})

const menu = ref();
const menuItems = ref([
    {
        label: 'Refresh',
        icon: 'pi pi-refresh'
    },
    {
        label: 'Export',
        icon: 'pi pi-upload'
    }
])
function toggle(event: any) {
    menu.value.toggle(event);
}

const statusOptions = ref([
    { name: 'All', value: 'all' },
    { name: 'Deposit', value: 'in' },
    { name: 'Withdraw', value: 'out' }
]);

const fetchTransactions = () => {
    const message = `Fetching API for ${filters.value.date}`;
    toast.add({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
}

const transactions = ref([
    {
        "id": 20212081,
        "name": "yyrsmyy27100",
        "type": "Shan Koe Mee",
        "status": "in",
        "amount": 46520.7,
        "created_at": "2024-11-21T15:29:46.000000Z",
        "current_amount": "52179.30",
        "by_user_name": null,
        "voucher": null,
    },
    {
        "id": 20211853,
        "name": "yyrsmyy27100",
        "type": "Shan Koe Mee",
        "status": "in",
        "amount": 9100,
        "created_at": "2024-11-21T15:26:12.000000Z",
        "current_amount": "45179.30",
        "by_user_name": null,
        "voucher": null,
    },
    {
        "id": 20211621,
        "name": "yyrsmyy27100",
        "type": "2D",
        "status": "in",
        "amount": 2600,
        "created_at": "2024-11-21T15:22:52.000000Z",
        "current_amount": "46079.30",
        "by_user_name": null,
        "voucher": null,
    },
    {
        "id": 20136898,
        "name": "yyrsmyy27100",
        "type": "Shan Koe Mee",
        "status": "in",
        "amount": 1500,
        "created_at": "2024-11-20T06:37:07.000000Z",
        "current_amount": "48879.30",
        "by_user_name": null,
        "voucher": null,
    },
    {
        "id": 20136879,
        "name": "yyrsmyy27100",
        "type": "3D",
        "status": "in",
        "amount": 200,
        "created_at": "2024-11-20T06:36:24.000000Z",
        "current_amount": "47879.30",
        "by_user_name": null,
        "voucher": null,
    },
    {
        "id": 20016620,
        "name": "yyrsmyy27100",
        "type": "Shan Koe Mee",
        "status": "in",
        "amount": 300,
        "created_at": "2024-11-17T09:14:13.000000Z",
        "current_amount": "48679.30",
        "by_user_name": null,
        "voucher": null,
    },
    {
        "id": 19940838,
        "name": "yyrsmyy27100",
        "type": "Shan Koe Mee",
        "status": "in",
        "amount": 1000,
        "created_at": "2024-11-15T20:01:09.000000Z",
        "current_amount": "50579.30",
        "by_user_name": null,
        "voucher": null,
    },
    {
        "id": 19940834,
        "name": "yyrsmyy27100",
        "type": "Shan Koe Mee",
        "status": "out",
        "amount": 400,
        "created_at": "2024-11-15T19:59:24.000000Z",
        "current_amount": "51579.30",
        "by_user_name": null,
        "voucher": null,
    },
    {
        "id": 19940827,
        "name": "yyrsmyy27100",
        "type": "2D",
        "status": "in",
        "amount": 17800,
        "created_at": "2024-11-15T19:57:40.000000Z",
        "current_amount": "51579.30",
        "by_user_name": null,
        "voucher": null,
    },
    {
        "id": 19940816,
        "name": "yyrsmyy27100",
        "type": "2D",
        "status": "out",
        "amount": 600,
        "created_at": "2024-11-15T19:54:56.000000Z",
        "current_amount": "50179.30",
        "by_user_name": null,
        "voucher": null,
    }
]);
</script>

<style scoped></style>