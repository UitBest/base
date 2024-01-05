<template>
    <v-app>
        <v-fade-transition>
            <v-app-bar
                v-show="showAppBar"
                color="navbar"
                density="comfortable"
                style="z-index: 50"
            >
                <v-sheet
                    class="mx-auto w-100 h-100 py-2 align-center d-flex"
                    :class="mobile && 'px-4'"
                    color="transparent"
                    max-width="64rem"
                >
                    <v-btn
                        v-for="(item, key) in navBarItems"
                        :key="key"
                        class="mr-1"
                        height="100%"
                        :icon="mobile"
                    >
                        <v-tooltip v-if="mobile" activator="parent" location="bottom">
                            <div>{{ item.name }}</div>
                        </v-tooltip>

                        <v-icon v-show="mobile" :icon="item.icon" />

                        <span v-show="! mobile">{{ item.name }}</span>
                        <template v-if="! mobile" v-slot:prepend>
                            <v-icon :icon="item.icon" />
                        </template>
                    </v-btn>
                </v-sheet>
            </v-app-bar>
        </v-fade-transition>

        <v-main>
            <v-sheet
                ref="content"
                class="mx-auto my-4 px-4 py-2"
                elevation="10"
                max-width="64rem"
                min-height="90svh"
                rounded="xl"
            >
                <router-view />
            </v-sheet>
        </v-main>
    </v-app>
</template>

<script setup>
    import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
    import { useDisplay } from 'vuetify';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const navBarItems = [
        {
            icon: 'mdi-home',
            name: 'Home',
            to: { name: 'Home' },
        },
        {
            icon: 'mdi-toolbox',
            name: 'Producten',
        },
        {
            icon: 'mdi-account-wrench',
            name: 'Service',
        },
        {
            icon: 'mdi-email',
            name: 'Contact',
        },
    ];

    const content = ref(null);
    const showAppBar = ref(true);
    let lastScrollPosition = 0;
    let lastAppBarPosition = 0;

    const display = useDisplay();
    const mobile = computed(() => route.meta.mobile.value);

    watch(
        display.smAndDown,
        (value) => {
            route.meta.mobile.value = value;
        },
    );

    const handleScroll = () => {
        const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (currentScrollPosition > lastScrollPosition) {
            if (currentScrollPosition > lastAppBarPosition + 300) {
                showAppBar.value = false;
            }
        } else {
            showAppBar.value = true;
            lastAppBarPosition = currentScrollPosition;
        }

        lastScrollPosition = currentScrollPosition;
    };

    onMounted(() => window.addEventListener('scroll', handleScroll));
    onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>
