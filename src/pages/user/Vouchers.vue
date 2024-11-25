<template>
    <SectionContainer>
        <BackButton
            text="Profile"
            :link="{ name: 'user.profile' }"
        />

        <Card>
            <template #title>
                <div class="flex items-center gap-6">
                    <div class="flex-1 font-semibold leading-6">Vouchers</div>
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
                <div class="flex items-center justify-center gap-2 md:gap-4">
                    <template
                        v-for="(game, index) in gameTypes"
                        :key="index"
                    >
                        <div
                            class="px-4 py-2 text-white rounded cursor-pointer md:px-6 hover:bg-slate-400 bg-slate-500"
                            :class="{
                                'main-gradient': filters.type == game.type
                            }"
                            @click="changeGameType(game)"
                        >
                            {{ game.label }}
                        </div>
                    </template>
                </div>
                <DataTable
                    :value="vouchers"
                    removableSort
                    paginator
                    dataKey="id"
                    :rows="5"
                    paginatorTemplate="PrevPageLink PageLinks NextPageLink  CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                >
                    <template #header>
                        <div class="flex flex-col items-end gap-2">
                            <template v-if="filters.type == 'twod'">
                                <div class="flex items-center gap-2">
                                    <DatePicker
                                        id="datepicker-timeonly"
                                        v-model="filters.time"
                                        timeOnly
                                        hourFormat="12"
                                        showIcon
                                        fluid
                                        iconDisplay="input"
                                        showButtonBar
                                    >
                                        <template #inputicon="slotProps">
                                            <i
                                                class="pi pi-clock"
                                                @click="slotProps.clickCallback"
                                            />
                                        </template>
                                    </DatePicker>
                                    <DatePicker
                                        v-model="filters.date"
                                        showIcon
                                        fluid
                                        iconDisplay="input"
                                        showButtonBar
                                    />
                                </div>
                            </template>
                            <template v-if="filters.type == 'threed'">
                                <Select
                                    v-model="filters.date"
                                    :options="dateType"
                                    optionLabel="label"
                                    optionValue="value"
                                    showClear
                                    placeholder="Select Date Type"
                                    checkmark
                                    :highlightOnSelect="false"
                                />
                            </template>
                            <template v-if="filters.type == 'maung'">
                                <DatePicker
                                    v-model="filters.date"
                                    showIcon
                                    fluid
                                    iconDisplay="input"
                                    showButtonBar
                                />
                            </template>
                            <template v-if="filters.type == 'body'">
                                <DatePicker
                                    v-model="filters.date"
                                    showIcon
                                    fluid
                                    iconDisplay="input"
                                    showButtonBar
                                />
                            </template>
                            <Button
                                label="Search"
                                icon="pi pi-search"
                                variant="outlined"
                            />
                        </div>
                    </template>
                    <Column
                        header="Voucher Id"
                        field="id"
                    >
                    </Column>
                    <Column
                        header="Remark"
                        field="remark"
                    >
                        <template #body="{ data }">
                            <template v-if="data.remark">
                                <p>{{ data.remark }}</p>
                            </template>
                            <template v-else>
                                <i class="text-red-500 pi pi-times"></i>
                            </template>
                        </template>
                    </Column>
                    <Column
                        header="Amount"
                        sortable
                    >
                        <template #body="{ data }">
                            <p>
                                {{ addThousandSeparator(data.amount) }}
                            </p>
                        </template>
                    </Column>
                    <Column
                        header="Bet Date"
                        sortable
                    >
                        <template #body="{ data }">
                            <p>
                                {{ formatVoucherDate(data.created_at) }}
                            </p>
                        </template>
                    </Column>
                </DataTable>
            </template>
        </Card>
    </SectionContainer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Filters, Game } from '@/types/common';

import BackButton from '@/components/BackButton.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import { formatVoucherDate } from '@/helpers/date-helpers';
import { addThousandSeparator } from '@/helpers/number-helpers';

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


const initialFilters: Filters = {
    type: 'twod'
}

const filters = ref<Filters>({ ...initialFilters })
const clearFilters = () => filters.value = { ...initialFilters }

function changeGameType(game: Game) {
    clearFilters()
    filters.value.type = game.type

    if (game.type == 'twod') {
        filters.value.date = new Date();
        filters.value.time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    } else if (game.type == 'threed') {
        filters.value.date = 'current';
    } else if (game.type == 'maung' || game.type == 'body') {
        filters.value.date = new Date();
    }
}

onMounted(() => {
    filters.value.date = new Date();
    filters.value.time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
})

const dateType = ref([
    {
        'label': 'Current Draw',
        'value': 'current'
    },
    {
        'label': 'Last Draw',
        'value': 'last'
    }
])

const gameTypes = ref([
    {
        id: 1,
        type: 'twod',
        label: '2D'
    },
    {
        id: 1,
        type: 'threed',
        label: '3D'
    },
    {
        id: 1,
        type: 'maung',
        label: 'Maung'
    },
    {
        id: 1,
        type: 'body',
        label: 'Body'
    }
])


const vouchers = ref([
    {
        "id": 20212081,
        "remark": "yyrsmyy27100",
        "amount": 46520.7,
        "created_at": "2024-11-21T15:29:46.000000Z",
    },
    {
        "id": 20211853,
        "remark": "yyrsmyy27100",
        "amount": 9100,
        "created_at": "2024-11-21T15:26:12.000000Z",
    },
    {
        "id": 20211621,
        "remark": "yyrsmyy27100",
        "amount": 2600,
        "created_at": "2024-11-21T15:22:52.000000Z",
    },
    {
        "id": 20136898,
        "remark": null,
        "amount": 1500,
        "created_at": "2024-11-20T06:37:07.000000Z",
    },
    {
        "id": 20136879,
        "remark": "yyrsmyy27100",
        "amount": 200,
        "created_at": "2024-11-20T06:36:24.000000Z",
    },
    {
        "id": 20016620,
        "remark": null,
        "amount": 300,
        "created_at": "2024-11-17T09:14:13.000000Z",
    },
    {
        "id": 19940838,
        "remark": "yyrsmyy27100",
        "amount": 1000,
        "created_at": "2024-11-15T20:01:09.000000Z",
    },
    {
        "id": 19940834,
        "remark": null,
        "amount": 400,
        "created_at": "2024-11-15T19:59:24.000000Z",
    },
    {
        "id": 19940827,
        "remark": "yyrsmyy27100",
        "amount": 17800,
        "created_at": "2024-11-15T19:57:40.000000Z",
    },
    {
        "id": 19940816,
        "remark": "yyrsmyy27100",
        "amount": 600,
        "created_at": "2024-11-15T19:54:56.000000Z",
    }
]);
</script>

<style scoped></style>