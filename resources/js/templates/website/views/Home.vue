<template>
    <v-container
        class="pa-sm-6 pa-md-12"
        fluid
    >
        <v-responsive
            class="text-center mx-auto mb-12 mb-md-0"
            max-width="700"
        >
            <p class="font-weight-medium text-primary">Professional Services</p>

            <p class="mt-2 text-h5 font-weight-bold text-sm-h4">No design skills? No problem.</p>

            <p class="mt-4 text-body-1 text-medium-emphasis">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis.
            </p>
        </v-responsive>

        <v-row class="mt-md-8 mt-sm-4">
            <v-col
                v-for="(item, i) in features"
                :key="i"
                class="text-center"
                cols="12"
                md="3"
                sm="6"
            >
                <v-avatar
                    class="mb-4"
                    color="surface-light"
                    :icon="item.icon"
                    rounded
                >
                    <v-icon color="primary" />
                </v-avatar>

                <div class="text-h6 font-weight-bold">{{ item.title }}</div>

                <v-divider
                    class="mx-auto mt-1 mb-4"
                    color="primary"
                    length="26"
                    opacity="1"
                    thickness="3"
                />

                <div class="text-body-2 text-medium-emphasis">{{ item.subtitle }}</div>
            </v-col>
        </v-row>
    </v-container>
    <v-container
        class="pa-6 pa-md-12"
        fluid
    >
        <p class="font-weight-bold text-h4 mt-8 text-center">About Planet Earth</p>

        <p class="mt-2 text-subtitle-1 text-medium-emphasis text-center mb-8">
            Learn about the wonders of our planet and the importance of conservation.
        </p>

        <v-row>
            <v-col
                v-for="(article, i) in articles"
                :key="i"
                cols="12"
                md="4"
            >
                <v-card
                    class="pb-3"
                    link
                    :ripple="false"
                    rounded="lg"
                >
                    <v-img
                        content-class="d-flex align-end justify-end"
                        cover
                        gradient="to bottom, rgba(var(--v-theme-surface), 0.1) 60%, rgba(0,0,0, 1)"
                        height="200"
                        :src="article.src"
                    >
                        <div class="d-flex align-center py-2 px-4 ga-2 text-body-2 text-white">
                            <v-icon
                                icon="mdi-clock-outline"
                                size="small"
                            />

                            {{ article.readTime }}
                        </div>
                    </v-img>

                    <v-card-item>
                        <v-card-title class="text-wrap text-h6 mb-2">{{ article.title }}</v-card-title>

                        <v-card-subtitle class="text-wrap">{{ article.description }}</v-card-subtitle>
                    </v-card-item>

                    <v-list-item
                        :prepend-avatar="article.avatar"
                        :title="article.author"
                    >
                        <template #append>
                            <v-icon
                                icon="mdi-calendar"
                                size="small"
                                start
                            />
                            <span class="text-body-2 text-medium-emphasis">{{ article.date }}</span>
                        </template>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    const features = [
        {
            title: 'Trendy Design',
            subtitle:
                'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
            icon: 'mdi-keyboard',
        },
        {
            title: 'Photography',
            subtitle:
                'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
            icon: 'mdi-camera',
        },
        {
            title: 'Brand Making',
            subtitle:
                'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
            icon: 'mdi-pencil-ruler',
        },
        {
            title: '24/7 Support',
            subtitle:
                'QuiArcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
            icon: 'mdi-puzzle',
        },
    ];

    const articles = [
        {
            title: 'Exploring the Majestic Forests of North America',
            description: 'Discover the diverse flora and fauna of the vast forests that stretch across the continent.',
            author: 'Samuel Frew',
            date: '12/24/2022',
            readTime: '5 Min Read',
            src: 'https://images.unsplash.com/photo-1533255871546-932921d75bc0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            avatar: 'https://vuetifyjs.b-cdn.net/images/john-smirk.png',
        },
        {
            title: 'The Impact of Climate Change on Ocean Life',
            description:
                'Emma delves into the effects of climate change on marine ecosystems and what the future holds.',
            author: 'Emmit Smith',
            date: '12/23/2022',
            readTime: '7 Min Read',
            src: 'https://images.unsplash.com/photo-1580696499419-84ca9688f947?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            avatar: 'https://vuetifyjs.b-cdn.net/images/john.png',
        },
        {
            title: 'Top 20 National Parks to Visit in 2023',
            description: 'Explore the best national parks to visit this year, from the Grand Canyon to Yellowstone.',
            author: 'John Beard',
            date: '12/23/2022',
            readTime: '15 Min Read',
            src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            avatar: 'https://vuetifyjs.b-cdn.net/images/john-beard.png',
        },
    ];
</script>
