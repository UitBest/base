<template>
    <v-app>
        <v-navigation-drawer
            v-model="drawer"
            color="surface-variant"
            expand-on-hover
            :location="mobile ? 'bottom' : 'left'"
            :permanent="!mobile"
            rail
        >
            <v-list
                density="compact"
                item-props
                nav
            >
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    link
                    nav
                    :to="item?.to"
                    v-bind="item"
                />
            </v-list>

            <template #append>
                <v-list-item
                    class="ma-2"
                    link
                    nav
                    prepend-icon="mdi-cog-outline"
                    title="Settings"
                    :to="{ name: 'Settings' }"
                />
            </template>
        </v-navigation-drawer>

        <v-app-bar
            border="b"
            class="ps-4"
            flat
        >
            <template
                v-if="mobile"
                #append
            >
                <v-app-bar-nav-icon @click="drawer = !drawer" />
            </template>

            <template
                v-else
                #append
            >
                <div class="d-flex ga-2 align-center">
                    <v-btn
                        color="medium-emphasis"
                        icon="mdi-magnify"
                    />

                    <v-btn
                        color="medium-emphasis"
                        icon="mdi-bell-outline"
                    />

                    <v-divider
                        class="align-self-center"
                        length="24"
                        vertical
                    />

                    <v-btn
                        class="me-2"
                        height="48"
                        icon
                    >
                        <v-avatar
                            color="surface-light"
                            image="/img/avatars/timo.jpg"
                            size="32"
                        />

                        <v-menu activator="parent">
                            <v-list
                                density="compact"
                                nav
                            >
                                <v-list-item
                                    append-icon="mdi-cog-outline"
                                    link
                                    title="Settings"
                                    :to="{ name: 'Settings' }"
                                />

                                <v-list-item
                                    append-icon="mdi-logout"
                                    link
                                    title="Logout"
                                />
                            </v-list>
                        </v-menu>
                    </v-btn>
                </div>
            </template>

            <v-app-bar-title>Application</v-app-bar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
    import { computed, provide, ref, watch } from 'vue';
    import { useDisplay } from 'vuetify';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const display = useDisplay();
    const mobile = computed(() => route.meta.mobile.value);

    provide('mobile', mobile);

    const drawer = ref(false);

    const items = ref([
        {
            title: 'Dashboard',
            prependIcon: 'mdi-view-dashboard-outline',
            link: true,
            to: { name: 'Dashboard' },
        },
        {
            title: 'Team',
            prependIcon: 'mdi-account-group',
            link: true,
        },
        {
            title: 'Projects',
            prependIcon: 'mdi-briefcase-outline',
            link: true,
        },
        {
            title: 'Calendar',
            prependIcon: 'mdi-calendar',
            link: true,
        },
        {
            title: 'Reports',
            prependIcon: 'mdi-file-chart-outline',
            link: true,
        },
    ]);

    watch(
        display.smAndDown,
        (value) => {
            route.meta.mobile.value = value;
            drawer.value = !value;
        },
        { immediate: true }
    );
</script>
