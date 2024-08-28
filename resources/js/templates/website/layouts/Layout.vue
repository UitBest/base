<template>
    <v-app>
        <v-app-bar
            border="b"
            class="px-3"
            flat
        >
            <template #prepend>
                <v-app-bar-nav-icon
                    v-if="mobile"
                    @click="drawer = !drawer"
                />

                <v-img
                    v-if="!mobile"
                    src="/img/avatars/uit_best_cutout.png"
                    width="40"
                />
            </template>

            <template
                v-if="mobile"
                #image
            >
                <v-img
                    class="align-self-center"
                    height="60%"
                    src="/img/avatars/uit_best_cutout.png"
                />
            </template>

            <div
                v-if="!mobile"
                class="d-flex ms-4 ga-2"
            >
                <template
                    v-for="(item, i) in items"
                    :key="i"
                >
                    <v-btn
                        v-if="item?.children"
                        append-icon="mdi-chevron-down"
                        class="text-none"
                        :prepend-icon="item.prependIcon"
                        :to="item?.to"
                    >
                        {{ item.title }}

                        <v-menu
                            activator="parent"
                            width="250"
                        >
                            <v-list slim>
                                <template
                                    v-for="(child, c) in item.children"
                                    :key="c"
                                >
                                    <v-list-item
                                        v-if="child?.children"
                                        append-icon="mdi-chevron-right"
                                        link
                                        :prepend-icon="child.prependIcon"
                                    >
                                        {{ child.title }}

                                        <v-menu
                                            activator="parent"
                                            location="end"
                                            origin="top start"
                                            width="250"
                                        >
                                            <v-list slim>
                                                <v-list-item
                                                    v-for="(subChild, s) in child.children"
                                                    :key="s"
                                                    link
                                                    :prepend-icon="subChild.prependIcon"
                                                    :title="subChild.title"
                                                    :to="subChild?.to"
                                                />
                                            </v-list>
                                        </v-menu>
                                    </v-list-item>

                                    <v-list-item
                                        v-else
                                        link
                                        prepend-icon="mdi-account-plus-outline"
                                        :title="child.title"
                                        :to="child?.to"
                                    />
                                </template>
                            </v-list>
                        </v-menu>
                    </v-btn>

                    <v-btn
                        v-else
                        class="text-none"
                        :prepend-icon="item.prependIcon"
                        :text="item.title"
                        :to="item?.to"
                    />
                </template>
            </div>

            <v-spacer />

            <template #append>
                <v-btn
                    class="ms-1"
                    color="medium-emphasis"
                    icon="mdi-bell-outline"
                />

                <v-btn
                    class="ms-1"
                    icon
                >
                    <v-avatar image="/img/avatars/timo.jpg" />

                    <v-menu
                        activator="parent"
                        origin="top"
                    >
                        <v-list>
                            <v-list-item
                                link
                                title="Update profile"
                            />

                            <v-list-item
                                link
                                title="Sign out"
                            />
                        </v-list>
                    </v-menu>
                </v-btn>
            </template>
        </v-app-bar>

        <v-navigation-drawer
            v-if="mobile"
            v-model="drawer"
            location="top"
            temporary
            width="355"
        >
            <v-list
                class="py-0"
                slim
            >
                <template
                    v-for="(item, i) in items"
                    :key="i"
                >
                    <v-list-group v-if="item?.children">
                        <template #activator="{ props }">
                            <v-list-item
                                v-bind="props"
                                append-icon="mdi-chevron-down"
                                link
                                :prepend-icon="item.prependIcon"
                                :title="item.title"
                            />
                        </template>

                        <template
                            v-for="(child, c) in item.children"
                            :key="c"
                        >
                            <v-list-group
                                v-if="child?.children"
                                fluid
                            >
                                <template #activator="{ props }">
                                    <v-list-item
                                        v-bind="props"
                                        link
                                        :prepend-icon="child.prependIcon"
                                        :title="child.title"
                                    />
                                </template>

                                <v-list-item
                                    v-for="(subChild, s) in child.children"
                                    :key="s"
                                    link
                                    :prepend-icon="subChild.prependIcon"
                                    :title="subChild.title"
                                    :to="subChild?.to"
                                />
                            </v-list-group>

                            <v-list-item
                                v-else
                                link
                                prepend-icon="mdi-account-plus-outline"
                                :title="child.title"
                                :to="child?.to"
                            />
                        </template>
                        <v-divider />
                    </v-list-group>

                    <v-list-item
                        v-else
                        link
                        :prepend-icon="item.prependIcon"
                        :title="item.title"
                        :to="item?.to"
                    />
                </template>

                <v-divider />

                <v-list-item
                    link
                    prepend-icon="mdi-inbox-outline"
                    title="Inbox"
                />

                <v-list-item
                    link
                    prepend-icon="mdi-bell-outline"
                    title="Notifications"
                />

                <v-divider />

                <v-list-item
                    lines="two"
                    link
                    prepend-avatar="/img/avatars/timo.jpg"
                    subtitle="Vuetify Engineer"
                    title="John Leider"
                />
            </v-list>
        </v-navigation-drawer>

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
            title: 'Home',
            prependIcon: 'mdi-view-dashboard-outline',
            to: { name: 'Home' },
        },
        {
            title: 'Users',
            prependIcon: 'mdi-account-multiple-outline',
            children: [
                {
                    title: 'Create New',
                    prependIcon: 'mdi-account-plus-outline',
                },
                {
                    title: 'Search',
                    prependIcon: 'mdi-magnify',
                    children: [
                        {
                            title: 'By Name',
                            prependIcon: 'mdi-account-outline',
                        },
                        {
                            title: 'By Email',
                            prependIcon: 'mdi-email-outline',
                        },
                        {
                            title: 'By Phone',
                            prependIcon: 'mdi-phone-outline',
                        },
                    ],
                },
            ],
        },
        {
            title: 'Projects',
            prependIcon: 'mdi-briefcase-outline',
        },
        {
            title: 'Calendar',
            prependIcon: 'mdi-calendar',
        },
        {
            title: 'Reports',
            prependIcon: 'mdi-file-chart-outline',
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
