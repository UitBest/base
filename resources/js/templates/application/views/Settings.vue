<template>
    <v-toolbar
        class="border-b"
        color="surface"
        density="compact"
    >
        <v-tabs
            v-model="active"
            grow
        >
            <v-tab
                v-for="(item, i) in items"
                :key="i"
                v-bind="item"
                :ripple="false"
                rounded="lg"
                :value="i"
                variant="text"
            />
        </v-tabs>
    </v-toolbar>

    <v-container
        class="px-md-6 py-12"
        fluid
    >
        <v-window v-model="active">
            <v-window-item
                v-for="(item, i) in items"
                :key="i"
                :value="i"
            >
                <component :is="item.component" />
            </v-window-item>
        </v-window>
    </v-container>
</template>

<script setup>
    import Account from './Settings/Account.vue';
    import Orders from './Settings/Orders.vue';
    import { ref } from 'vue';

    const active = ref(0);

    const items = [
        {
            text: 'Account',
            component: Account,
        },
        {
            text: 'Orders',
            component: Orders,
        },
        {
            text: 'Billing',
        },
        {
            text: 'Teams',
        },
        {
            text: 'Integrations',
        },
    ];
</script>
