<template>
    <v-row
        class="border"
        no-gutters
    >
        <v-col
            class="pa-0"
            cols="12"
            lg="3"
            md="6"
        >
            <v-card
                :class="['py-10 px-4', mobile ? 'border-b' : '']"
                rounded="0"
                subtitle="Revenue"
                variant="flat"
            >
                <template #append>
                    <h1 class="text-body-2">+4.75%</h1>
                </template>

                <v-card-text><h1 class="text-h4">$405,091.00</h1></v-card-text>
            </v-card>
        </v-col>

        <v-col
            class="pa-0"
            cols="12"
            lg="3"
            md="6"
        >
            <v-card
                :class="['py-10 px-4', mobile ? 'border-b' : 'border-s']"
                rounded="0"
                subtitle="Overdue invoices"
                variant="flat"
            >
                <template #append>
                    <h1 class="text-body-2 text-error">+54.02%</h1>
                </template>

                <v-card-text><h1 class="text-h4">$12,787.00</h1></v-card-text>
            </v-card>
        </v-col>

        <v-col
            class="pa-0"
            cols="12"
            lg="3"
            md="6"
        >
            <v-card
                :class="['py-10 px-4', mobile ? 'border-b' : 'border-s']"
                rounded="0"
                subtitle="Outstanding invoices"
                variant="flat"
            >
                <template #append>
                    <h1 class="text-body-2 text-error">+10.18%</h1>
                </template>

                <v-card-text><h1 class="text-h4">$30,156.00</h1></v-card-text>
            </v-card>
        </v-col>

        <v-col
            class="pa-0"
            cols="12"
            lg="3"
            md="6"
        >
            <v-card
                :class="['py-10 px-4', mobile ? '' : 'border-s']"
                rounded="0"
                subtitle="Expenses"
                variant="flat"
            >
                <template #append>
                    <h1 class="text-body-2 text-error">+10.18%</h1>
                </template>

                <v-card-text><h1 class="text-h4">$30,156.00</h1></v-card-text>
            </v-card>
        </v-col>
    </v-row>

    <v-row>
        <v-col>
            <h4>Recent activity</h4>
        </v-col>
    </v-row>

    <v-row>
        <v-col>
            <v-data-table
                :group-by="groupBy"
                hide-default-footer
                hide-default-header
                item-value="invoice"
                :items="activities"
            >
                <template #item="{ item }">
                    <tr>
                        <td>
                            <div class="d-flex align-start gc-6 py-3">
                                <v-icon
                                    :icon="item.type === 'expense' ? 'mdi-arrow-down-circle' : 'mdi-arrow-up-circle'"
                                />

                                <div>
                                    <p class="text-subtitle-1">${{ item.amount }} USD</p>

                                    <p
                                        v-if="item.tax"
                                        class="text-caption text-medium-emphasis"
                                    >
                                        ${{ item.tax }} USD
                                    </p>
                                </div>

                                <v-chip :color="item.statusColor">{{ item.status }}</v-chip>
                            </div>
                        </td>

                        <td class="py-3">
                            <div>
                                <p class="text-subtitle-1">{{ item.billingName }}</p>

                                <p class="text-caption text-medium-emphasis">{{ item.billingJob }}</p>
                            </div>
                        </td>

                        <td class="text-right py-3">
                            <v-btn
                                class="text-none mr-n2"
                                color="primary"
                                :ripple="false"
                                slim
                                text="View transaction"
                                variant="text"
                            />

                            <p class="text-caption">
                                <span class="text-medium-emphasis">Invoice</span> #{{ item.invoice }}
                            </p>
                        </td>
                    </tr>
                </template>

                <template #group-header="{ item, columns, toggleGroup, isGroupOpen }">
                    <tr class="bg-surface-light">
                        <td :colspan="columns.length">
                            <span
                                :ref="
                                    (_) => {
                                        if (!isGroupOpen(item)) toggleGroup(item);
                                    }
                                "
                            />

                            {{ item.value }}
                        </td>
                    </tr>
                </template>
            </v-data-table>

            <v-divider />
        </v-col>
    </v-row>

    <v-row>
        <v-col>
            <div class="d-flex justify-space-between">
                <h4>Recent clients</h4>

                <v-btn
                    class="text-none"
                    color="primary"
                    :ripple="false"
                    slim
                    text="View all"
                    variant="text"
                />
            </div>
        </v-col>
    </v-row>

    <v-row>
        <v-col
            v-for="client in recentClients"
            :key="client.id"
            cols="12"
            lg="4"
            md="6"
        >
            <v-card
                class="border"
                variant="flat"
            >
                <v-card-item
                    class="bg-surface-light"
                    prepend-icon="$vuetify"
                    :subtitle="client.name"
                >
                    <template #append>
                        <v-btn
                            icon
                            variant="plain"
                        >
                            <v-icon icon="mdi-menu" />

                            <v-menu
                                activator="parent"
                                origin="top"
                            >
                                <v-list>
                                    <v-list-item
                                        link
                                        title="View"
                                    />

                                    <v-list-item
                                        link
                                        title="Edit"
                                    />
                                </v-list>
                            </v-menu>
                        </v-btn>
                    </template>
                </v-card-item>

                <v-card-text class="pa-3">
                    <div class="d-flex justify-space-between">
                        <p class="text-medium-emphasis">Last invoice</p>

                        <p class="text-high-emphasis">{{ client.lastInvoiceDate }}</p>
                    </div>

                    <v-divider class="my-3" />

                    <div class="d-flex justify-space-between">
                        <p class="text-medium-emphasis">Amount</p>

                        <div class="d-flex gc-3 align-center">
                            <p class="text-high-emphasis">${{ client.amount }}</p>

                            <v-chip :color="client.statusColor">{{ client.status }}</v-chip>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
    import { inject } from 'vue';

    const mobile = inject('mobile');

    const groupBy = [
        {
            key: 'date',
            order: 'asc',
        },
    ];

    function getInvoiceStatusColor(status) {
        const colorMapping = {
            paid: 'success',
            withdraw: null,
            overdue: 'error',
        };
        return colorMapping[status];
    }

    const activities = [
        {
            invoice: '00012',
            billingName: 'Reform',
            billingJob: 'Website redesign',
            amount: '7,600.00',
            tax: '500.00',
            type: 'income',
            status: 'paid',
            statusColor: getInvoiceStatusColor('paid'),
            date: 'Today',
        },
        {
            invoice: '00011',
            billingName: 'Tom Cook',
            billingJob: 'Salary',
            amount: '10,000.00',
            tax: null,
            type: 'expense',
            status: 'withdraw',
            statusColor: getInvoiceStatusColor('withdraw'),
            date: 'Today',
        },
        {
            invoice: '00009',
            billingName: 'Tuple',
            billingJob: 'Logo design',
            amount: '2,000.00',
            tax: '130.00',
            type: 'income',
            status: 'overdue',
            statusColor: getInvoiceStatusColor('overdue'),
            date: 'Today',
        },
        {
            invoice: '00010',
            billingName: 'SavvyCal',
            billingJob: 'Website redesign',
            amount: '14,000.00',
            tax: '900.00',
            type: 'income',
            status: 'paid',
            statusColor: getInvoiceStatusColor('paid'),
            date: 'Yesterday',
        },
    ];

    const recentClients = [
        {
            id: 1,
            name: 'Tuple',
            lastInvoiceDate: 'December 13, 2022',
            amount: '2,000.00',
            status: 'overdue',
            statusColor: getInvoiceStatusColor('overdue'),
        },
        {
            id: 2,
            name: 'SavvyCal',
            lastInvoiceDate: 'January 22, 2023',
            amount: '14,000.00',
            status: 'paid',
            statusColor: getInvoiceStatusColor('paid'),
        },
        {
            id: 3,
            name: 'Reform',
            lastInvoiceDate: 'January 23, 2023',
            amount: '7,600.00',
            status: 'paid',
            statusColor: getInvoiceStatusColor('paid'),
        },
    ];
</script>
