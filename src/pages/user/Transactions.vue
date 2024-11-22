<template>
    <SectionContainer>
        <BackButton
            text="Profile"
            :link="{ name: 'user.profile' }"
        />

        <Card>
            <template #title>
                <div class="flex items-center gap-6 mb-4">
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
                    :value="sampleAppsTableDatas"
                    paginator
                    :rows="5"
                    dataKey="id"
                    tableClass="overflow-x-auto dark:bg-surface-950"
                    paginatorTemplate="PrevPageLink PageLinks NextPageLink  CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    :dt="{
                        header: {
                            background: 'transparent'
                        },
                        headerCell: {
                            background: 'transparent'
                        },
                        row: {
                            background: 'transparent'
                        }
                    }"
                >
                    <Column
                        header="Id"
                        class="w-1/12"
                    >
                        <template #body="slotProps">
                            <div class="text-muted-color">{{ slotProps.data.id }}</div>
                        </template>
                    </Column>
                    <Column
                        header="Name"
                        class="w-1/4"
                    >
                        <template #body="slotProps">
                            <div class="flex items-center">
                                <Avatar
                                    :label="slotProps.data.name.label"
                                    class="mr-2 text-xs font-medium"
                                    style="background-color: #ece9fc; color: #2a1261"
                                    shape="circle"
                                />
                                <div class="flex-1 leading-6 text-muted-color">{{ slotProps.data.name.text }}</div>
                            </div>
                        </template>
                    </Column>
                    <Column
                        header="Date"
                        class="w-1/6"
                    >
                        <template #body="slotProps">
                            <div class="text-muted-color">{{ slotProps.data.date }}</div>
                        </template>
                    </Column>
                    <Column
                        header="Process"
                        class="w-1/6"
                    >
                        <template #body="slotProps">
                            <Tag
                                :severity="slotProps.data.process.type"
                                :value="slotProps.data.process.value"
                                class="font-medium"
                            ></Tag>
                        </template>
                    </Column>
                    <Column
                        header="Amount"
                        class="w-1/6 text-center"
                    >
                        <template #body="slotProps">
                            <div class="text-center text-muted-color">{{ slotProps.data.amount }}</div>
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
import { ref } from 'vue';

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

const menu = ref();

function toggle(event: any) {
    menu.value.toggle(event);
}
const sampleAppsTableDatas = ref([
    { id: '#1254', name: { text: 'Amy Yelsner', label: 'AY', color: 'blue' }, coin: 'btc', date: 'May 5th', process: { type: 'success', value: 'Buy' }, amount: '3.005 BTC' },
    { id: '#2355', name: { text: 'Anna Fali', label: 'AF', color: '#ECFCCB' }, coin: 'eth', date: 'Mar 17th', process: { type: 'success', value: 'Buy' }, amount: '0.050 ETH' },
    { id: '#1235', name: { text: 'Stepen Shaw', label: 'SS', color: '#ECFCCB' }, coin: 'btc', date: 'May 24th', process: { type: 'danger', value: 'Sell' }, amount: '3.050 BTC' },
    { id: '#2355', name: { text: 'Anna Fali', label: 'AF', color: '#ECFCCB' }, coin: 'eth', date: 'Mar 17th', process: { type: 'danger', value: 'Sell' }, amount: '0.050 ETH' },
    { id: '#2355', name: { text: 'Anna Fali', label: 'AF', color: '#ECFCCB' }, coin: 'eth', date: 'Mar 17th', process: { type: 'danger', value: 'Sell' }, amount: '0.050 ETH' },
    { id: '#7896', name: { text: 'John Doe', label: 'JD', color: 'green' }, coin: 'btc', date: 'Jun 12th', process: { type: 'success', value: 'Buy' }, amount: '2.500 BTC' },
    { id: '#5648', name: { text: 'Jane Smith', label: 'JS', color: '#FFDDC1' }, coin: 'eth', date: 'Feb 23rd', process: { type: 'success', value: 'Buy' }, amount: '1.200 ETH' },
    { id: '#3265', name: { text: 'Michael Johnson', label: 'MJ', color: '#FFD700' }, coin: 'btc', date: 'Apr 30th', process: { type: 'danger', value: 'Sell' }, amount: '4.000 BTC' },
    { id: '#1423', name: { text: 'Emily Davis', label: 'ED', color: '#FFCCCB' }, coin: 'btc', date: 'Jan 15th', process: { type: 'danger', value: 'Sell' }, amount: '5.050 LTC' },
    { id: '#6854', name: { text: 'Robert Brown', label: 'RB', color: '#C0C0C0' }, coin: 'eth', date: 'Dec 2nd', process: { type: 'success', value: 'Buy' }, amount: '0.300 ETH' }
]);
</script>

<style scoped></style>