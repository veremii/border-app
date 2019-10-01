<template>
    <div class="tabs-container">
        <div class="tabs">
            <div v-for="tab in tabs"
                 :key="tab.id"
                 :class="{'tab': true, 'tab-selected': tab.id === selectedTab.id}"
                 @click="selectTab(tab)"
            >
                <div class="tab-name">
                    {{tab.name}}
                </div>

            </div>
        </div>

        <div v-if="selectedTab.module" class="tab-content">
            <transition name="component-fade" mode="out-in">
                <component :is="selectedTab.module"></component>
            </transition>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        props: {
            tabs: {
                required: true,
                type: Array
            }
        },
        data() {
            return {
                selectedTab: {

                }
            }
        },
        beforeMount(){
            this.selectTab()
        },
        methods: {
            selectTab(tab){
                if (!tab){
                    this.selectedTab = this.tabs[0]
                } else {
                    //check provided ID
                    this.tabs.forEach(item => {if (item.id === tab.id) this.selectedTab = item} );
                    if (!this.selectedTab){
                        throw new Error('No such ID in provided tabs array')
                    }

                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../less/Variables';

    .tabs-container{
        min-width: 100%;
        min-height: 400px;
        background-color: white;
        max-width: 700px;
        @media @tablet {
            min-width: 80%;
        }
        @media @desktop {
            min-width: 50%;
        }
        .tabs {
            display: flex;
            flex-direction: row;
            min-height: 60px;
            border-bottom: 1px solid green;
        }
        .tab {
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 20px;
            &-name {
                color: #5f8bb1;
                font-size: medium;
                font-weight: bold;
                cursor: pointer;
            }
            &-content {
                border-left: 1px solid green;
                border-right: 1px solid green;
                border-bottom: 1px solid green;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                padding: 20px;
                height: 100%;
                position: relative;

                .component-fade-enter-active, .component-fade-leave-active {
                    transition: opacity .3s ease;
                }
                .component-fade-enter, .component-fade-leave-to
                    /* .component-fade-leave-active below version 2.1.8 */ {
                    opacity: 0;
                }
            }
            &-selected {
                border-top: 1px solid green;
                border-left: 1px solid green;
                border-right: 1px solid green;
                border-bottom: none;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                position: relative;
                background-color: white;
                bottom: -1px;
                & .tab-name {
                    color: black
                }
            }
        }

    }






</style>