<template>
    <SectionContainer class="mx-1">
        <BackButton
            text="nav.profile"
            :link="{ name: 'user.profile' }"
        />

        <Card>
            <template #title>
                <div class="flex items-center gap-6">
                    <div class="flex-1 font-semibold leading-6">{{ t('profile.vouchers') }}</div>
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
                    >
                        <template #item="{ item, props }">
                            <a
                                v-ripple
                                class="flex items-center"
                                v-bind="props.action"
                            >
                                <span
                                    class="text-xs"
                                    :class="item.icon"
                                />
                                <span>{{ t(item.label as string) }}</span>
                            </a>
                        </template>
                    </Menu>
                </div>
            </template>
            <template #content>
                <div class="flex items-center justify-center gap-2 md:gap-4">
                    <template
                        v-for="(game, index) in gameTypes"
                        :key="index"
                    >
                        <div
                            class="px-4 py-2 text-white rounded cursor-pointer md:px-6 hover:bg-slate-400 bg-slate-500 text-nowrap"
                            :class="{
                                'main-gradient': filters.type == game.type
                            }"
                            @click="changeGameType(game)"
                        >
                            {{ t(game.label) }}
                        </div>
                    </template>
                </div>
                <div class="flex flex-col items-end gap-2 my-2">
                    <template v-if="filters.type == 'twod'">
                        <div class="flex items-center gap-2">
                            <Select
                                v-model="filters.time"
                                :options="twoDTimes"
                                option-label="label"
                                option-value="value"
                            />
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
                        :label="t('vouchers.search')"
                        icon="pi pi-search"
                        variant="outlined"
                    />
                </div>
                <DataTable
                    :value="vouchers"
                    removableSort
                    paginator
                    dataKey="id"
                    :rows="5"
                    paginatorTemplate="PrevPageLink PageLinks NextPageLink  CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    @row-click="openBetSlipDialog"
                >
                    <Column
                        :header="t('vouchers.voucher_id')"
                        field="id"
                        sortable
                        header-class="text-nowrap"
                    >
                    </Column>
                    <Column
                        :header="t('vouchers.remark')"
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
                        :header="t('vouchers.amount')"
                        field="amount"
                        sortable
                    >
                        <template #body="{ data }">
                            <p>
                                {{ addThousandSeparator(data.amount) }}
                            </p>
                        </template>
                    </Column>
                    <Column
                        :header="t('vouchers.bet_date')"
                        header-class="text-nowrap"
                    >
                        <template #body="{ data }">
                            <p>
                                {{ formatVoucherDate(data.created_at) }}
                            </p>
                        </template>
                    </Column>
                </DataTable>
                <Dialog
                    v-model:visible="isOpenBetSlipDialog"
                    modal
                    :header="t('vouchers.bet_slip')"
                    class="w-11/12"
                    style="max-height: 70vh;"
                >
                    <div class="space-y-2">
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col text-center">
                                <p>{{ t('vouchers.date') }}</p>
                                <p class="text-sm font-semibold">{{ formatVoucherDate(activeBetSlip.created_at) }}</p>
                            </div>
                            <div class="flex flex-col text-center">
                                <p>{{ t('vouchers.board') }}</p>
                                <p class="text-sm font-semibold">{{ activeBetSlip.detail?.length ?? 0 }}</p>
                            </div>
                            <div class="flex flex-col text-center">
                                <p>{{ t('vouchers.total') }}</p>
                                <p class="text-sm font-semibold">{{ activeBetSlip.amount }} MMK
                                </p>
                            </div>
                        </div>
                        <template v-if="activeBetSlip.detail?.length">
                            <DataTable
                                showGridlines
                                removableSort
                                scrollable
                                scrollHeight="200px"
                                dataKey="number"
                                :value="activeBetSlip.detail"
                            >
                                <Column
                                    field="number"
                                    :header="t('vouchers.number')"
                                    sortable
                                > </Column>
                                <Column
                                    :header="t('vouchers.amount')"
                                    field="amount"
                                ></Column>
                            </DataTable>
                        </template>
                    </div>
                </Dialog>
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
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const activeBetSlip: any = ref(null);
const openBetSlipDialog = (event: any) => {
    activeBetSlip.value = event.data;
    console.log("CLICKED", event)
    console.log("Data", event.data.amount)
    isOpenBetSlipDialog.value = true
}
const isOpenBetSlipDialog = ref(false);

const menu = ref();
const menuItems = ref([
    {
        label: 'transactions.refresh',
        icon: 'pi pi-refresh'
    },
    {
        label: 'transactions.export',
        icon: 'pi pi-upload'
    }
])
function toggle(event: any) {
    menu.value.toggle(event);
}

const twoDTimes = ref([
    { label: '10:45 AM', value: '1045' },
    { label: '12:00 AM', value: '1200' },
    { label: '02:45 PM', value: '1445' },
    { label: '04:30 PM', value: '1630' },
])

const getNearestTime = () => {
    const now = new Date();
    const currentTime = now.getHours() * 100 + now.getMinutes(); // e.g., 10:45 => 1045
    let nearest: any = twoDTimes.value[0].value;

    twoDTimes.value.forEach((time: any) => {
        if (Math.abs(currentTime - time.value) < Math.abs(currentTime - nearest)) {
            nearest = time.value;
        }
    });

    return nearest;
};

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
        filters.value.time = getNearestTime();
    } else if (game.type == 'threed') {
        filters.value.date = 'current';
    } else if (game.type == 'maung' || game.type == 'body') {
        filters.value.date = new Date();
    }
}

onMounted(() => {
    filters.value.date = new Date();
    filters.value.time = getNearestTime();
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
        label: 'vouchers.2d'
    },
    {
        id: 1,
        type: 'threed',
        label: 'vouchers.3d'
    },
    {
        id: 1,
        type: 'maung',
        label: 'vouchers.maung'
    },
    {
        id: 1,
        type: 'body',
        label: 'vouchers.body'
    }
])


const vouchers = ref([
    {
        "id": 20212081,
        "name": "yyrsmyy27100",
        "amount": 250.7,
        "created_at": "2024-11-21T15:29:46.000000Z",
        "remark": "2D Bet",
        "detail": [
            {
                "id": 3147,
                "number": "001",
                "amount": "150",
                "bet_date": "Oct 16, 2024 8:33 AM",
                "draw": null,
                "voucher_id": 12158,
                "created_at": "2024-10-16 08:33:20"
            },
            {
                "id": 3148,
                "number": "002",
                "amount": "100.7",
                "bet_date": "Oct 16, 2024 8:33 AM",
                "draw": null,
                "voucher_id": 12158,
                "created_at": "2024-10-16 08:33:20"
            }
        ],
    },
    {
        "id": 20211853,
        "name": "yyrsmyy27100",
        "amount": 9100,
        "created_at": "2024-11-21T15:26:12.000000Z",
        "remark": null
    },
    {
        "id": 20211621,
        "name": "yyrsmyy27100",
        "amount": 2000,
        "created_at": "2024-11-21T15:22:52.000000Z",
        "remark": "3D Bet",
        "detail": [
            {
                "id": 2941,
                "number": "097",
                "amount": "1000",
                "bet_date": "Sep 1, 2024 9:34 PM",
                "draw": null,
                "voucher_id": 10436,
                "created_at": "2024-09-01 21:04:35"
            },
            {
                "id": 2942,
                "number": "098",
                "amount": "1000",
                "bet_date": "Sep 1, 2024 9:34 PM",
                "draw": null,
                "voucher_id": 10436,
                "created_at": "2024-09-01 21:04:35"
            }
        ],
    },
    {
        "id": 20136898,
        "name": null,
        "amount": 1500,
        "created_at": "2024-11-20T06:37:07.000000Z",
        "remark": "2D Bet"
    },
    {
        "id": 20136879,
        "name": "yyrsmyy27100",
        "amount": 200,
        "created_at": "2024-11-20T06:36:24.000000Z",
        "remark": "2D Bet"
    },
    {
        "id": 20016620,
        "name": null,
        "amount": 300,
        "created_at": "2024-11-17T09:14:13.000000Z",
        "remark": "2D Bet"
    },
    {
        "id": 19940838,
        "name": "yyrsmyy27100",
        "amount": 1000,
        "created_at": "2024-11-15T20:01:09.000000Z",
        "remark": "Slot Bet"
    },
    {
        "id": 19940834,
        "name": null,
        "amount": 400,
        "created_at": "2024-11-15T19:59:24.000000Z",
        "remark": "2D Bet"
    },
    {
        "id": 19940827,
        "name": "yyrsmyy27100",
        "amount": 17800,
        "created_at": "2024-11-15T19:57:40.000000Z",
        "remark": null
    },
    {
        "id": 19940816,
        "name": "yyrsmyy27100",
        "amount": 309,
        "created_at": "2024-11-15T19:54:56.000000Z",
        "remark": null,
        "datail": [
            {
                "id": 1560,
                "number": "093",
                "amount": "103",
                "bet_date": "May 16, 2024 10:18 AM",
                "draw": null,
                "voucher_id": 4990,
                "created_at": "2024-05-16 10:18:34"
            },
            {
                "id": 1561,
                "number": "065",
                "amount": "103",
                "bet_date": "May 16, 2024 10:18 AM",
                "draw": null,
                "voucher_id": 4990,
                "created_at": "2024-05-16 10:18:34"
            },
            {
                "id": 1562,
                "number": "072",
                "amount": "103",
                "bet_date": "May 16, 2024 10:18 AM",
                "draw": null,
                "voucher_id": 4990,
                "created_at": "2024-05-16 10:18:34"
            }
        ]
    }
]);
</script>

<style scoped></style>