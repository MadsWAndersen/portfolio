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
        title: 'Fingerspitz',
        content: '<h3>Maj 2021 -</h3>' +
        '<p>'
    },
    {
        title: 'OnlinePlus',
        content: '<h3>August 2020 - Oktober 2020</h3>' +
        '<p>During my internship as a Frontend Developer, I had the pleasure of working with a diverse clientele, which granted me ample opportunities to enhance my skills. In particular, I gained extensive experience working with WordPress sites and worked particular a lot with Advanced Custom Fields. This experince helped me honing my proficiency in this popular content management system.</p>'
    },

    {
        title: 'School Projects',
        content: '<p>Content for tab 3 goes here</p>',
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
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    display: flex;
    max-width: 800px;
    width: 100%;
    margin: auto;
    padding: 50px;
    border-radius: 10px;
	background:linear-gradient(90deg, rgba(255, 102, 0, 1) 0%, rgba(213, 141, 94, 1) 100%);


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
                font-weight: bolder;
                transition: 0.5s ease;
                font-weight: 900;

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