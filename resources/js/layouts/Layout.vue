<template>
    <v-app>
        <v-app-bar
            v-show="showAppBar"
            style="z-index: 50"
        >
            <v-btn icon>
                <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-account</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-briefcase</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-email</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-sheet
                ref="content"
                 class="mx-auto mt-4"
                 color="page"
                 elevation="10"
                 max-width="64rem"
                 rounded="t-xl"
            >
                <router-view />
            </v-sheet>
        </v-main>
    </v-app>
</template>

<script setup>
    import { onMounted, onUnmounted, ref } from 'vue';

    const content = ref(null);
    const showAppBar = ref(true);
    let lastScrollPosition = 0;
    let lastAppBarPosition = 0;

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
