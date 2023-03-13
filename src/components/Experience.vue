<template>
    <div class="tabs">
        <div class="tabs__tab-container">
            <div v-for="(tab, index) in tabs" :key="index"
                :class="['tabs__tab', { 'tabs__tab--active': activeTab === index }]" @click="setActiveTab(index)">
                {{ tab.title }}
            </div>
        </div>
        <div class="tabs__content-container">
            <div class="tabs__content" v-html="activeTabContent"></div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';

const tabs = [
    {
        title: 'Erfaring',
        content: '<p>Content for tab 1 goes here</p>',
    },
    {
        title: 'Tab 2',
        content: '<p>Content for tab 2 goes here</p>',
    },
    {
        title: 'Tab 3',
        content: '<p>Content for tab 3 goes here</p>',
    },
    {
        title: 'Tab 4',
        content: '<p>Content for tab 4 goes here</p>',
    },
    {
        title: 'Tab 5',
        content: '<p>Content for tab 5 goes here</p>',
    },
];

const activeTab = ref(0);

function setActiveTab(index) {
    activeTab.value = index;
}

const activeTabContent = computed(() => tabs[activeTab.value].content);
</script>


<style lang="scss">
.tabs {
    display: flex;
    max-width: 600px;
    margin: auto;

    .tabs__tab-container {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .tabs__tab {
            cursor: pointer;
            color: #fff;

            &:after {
                content: "";
                width: 0%;
                height: 4px;
                background-color: #fff;
                display: flex;
                transition: 0.5s ease;
            }

            &--active {
                font-weight: bold;
                transition: 0.5s ease;

                &:after {
                    content: "";
                    width: 100%;

                    background-color: #fff;
                    display: flex;
                    transition: 0.5s ease;
                }
            }
        }
    }

    .tabs__content-container {
        color: #fff;
        margin-left: 20px;
    }
}
</style>