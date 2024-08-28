<template>
    <v-row>
        <v-col>
            <v-card
                v-for="(order, i) in orders"
                :key="i"
                border
                :class="i !== 0 && 'mt-12'"
                rounded="lg"
                variant="text"
            >
                <div class="d-flex align-center ga-2 bg-surface-light pa-4">
                    <div class="d-flex align-center ga-2 flex-wrap">
                        <strong class="text-h6 font-weight-bold text-high-emphasis text-no-wrap"
                            >Order #{{ order.id }}</strong
                        >

                        <span class="text-body-2 text-medium-emphasis mt-md-1"
                            >Delivered on {{ order.deliveredDate }}</span
                        >
                    </div>

                    <v-spacer />

                    <template v-if="mobile">
                        <v-btn
                            border
                            class="text-none"
                            color="surface"
                            :ripple="false"
                            rounded="lg"
                            text="View Order"
                            variant="flat"
                        />

                        <v-btn
                            border
                            class="text-none"
                            color="surface"
                            :ripple="false"
                            rounded="lg"
                            text="View Invoice"
                            variant="flat"
                        />
                    </template>

                    <v-btn
                        v-else
                        icon
                        variant="plain"
                    >
                        <v-icon icon="mdi-menu" />

                        <v-menu
                            activator="parent"
                            transition="scale-transition"
                        >
                            <v-list>
                                <v-list-item
                                    class="text-none"
                                    link
                                    title="View Order"
                                />

                                <v-list-item
                                    class="text-none"
                                    link
                                    title="View Invoice"
                                />
                            </v-list>
                        </v-menu>
                    </v-btn>
                </div>

                <v-divider />

                <template
                    v-for="(product, j) in order.products"
                    :key="j"
                >
                    <v-divider v-if="j !== 0" />

                    <v-card-text>
                        <v-row>
                            <v-col
                                cols="12"
                                sm="3"
                            >
                                <v-img
                                    color="surface-light"
                                    cover
                                    height="128"
                                    rounded="lg"
                                    :src="product.image"
                                />
                            </v-col>

                            <v-col
                                cols="12"
                                sm="6"
                            >
                                <strong class="text-high-emphasis">{{ product.name }}</strong>

                                <div class="text-medium-emphasis my-1">{{ product.description }}</div>

                                <strong class="text-subtitle-1 font-weight-medium"
                                    >${{ parseFloat(product.price).toFixed(2) }}</strong
                                >
                            </v-col>

                            <v-col
                                cols="12"
                                md="2"
                                offset-md="1"
                                sm="3"
                            >
                                <v-btn
                                    block
                                    class="text-none mb-2"
                                    color="primary"
                                    :ripple="false"
                                    rounded="lg"
                                    text="Buy again"
                                    variant="flat"
                                />

                                <v-btn
                                    block
                                    border
                                    class="text-none"
                                    :ripple="false"
                                    rounded="lg"
                                    text="Find similar"
                                    variant="plain"
                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
                </template>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
    import { inject } from 'vue';

    const mobile = inject('mobile');

    const orders = [
        {
            id: 1001,
            deliveredDate: 'March 28th, 2024',
            products: [
                {
                    name: 'Essential Utility Pouch',
                    description:
                        'Compact and versatile, the Essential Utility Pouch is perfect for organizing small items. Ideal for daily use or travel.',
                    price: 25.0,
                    image: 'https://images.unsplash.com/photo-1473441732394-649138d63985?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
            ],
        },
        {
            id: 1002,
            deliveredDate: 'April 10th, 2024',
            products: [
                {
                    name: 'Traveler’s Laptop Bag',
                    description:
                        'Designed for the modern traveler, this laptop bag provides ample space and protection for your device and accessories.',
                    price: 120.0,
                    image: 'https://images.unsplash.com/photo-1554412664-6e7b242f969d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
                {
                    name: 'Sporty Water Bottle',
                    description:
                        'Stay hydrated on the go with this durable and stylish water bottle, perfect for sports and outdoor activities.',
                    price: 30.0,
                    image: 'https://images.unsplash.com/photo-1544003484-3cd181d17917?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
                {
                    name: 'Classic Leather Wallet',
                    description:
                        'Keep your essentials organized with this classic leather wallet, featuring multiple card slots and a coin pocket.',
                    price: 45.0,
                    image: 'https://images.unsplash.com/photo-1620109176813-e91290f6c795?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
            ],
        },
    ];
</script>
