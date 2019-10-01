<template>
    <div v-if="Object.keys(options.header).length > 0" class="table">
        <div ref="header" class="table-head">
                <div :key="header" v-for="header in Object.keys(options.header)" style="'width: 100%" class="header-cell">{{header}}</div>
                <div v-if="options.deletableRows === true" style="width: 100%" class="header-cell"></div>


        </div>
        <div v-if="data.length > 0" class="table-body">
            <transition-group name="list-complete" tag="div">
                <div :key="row.key"  class="table-row list-complete-item" v-for="row in data">
                    <div v-html="row.key"  :style="'width:' + columnsConfig[0].width + 'px'" class="table-cell">
                    </div>
                    <div v-html="row.activity"  :style="'width:' + columnsConfig[1].width + 'px'" class="table-cell">
                    </div>
                    <div v-html="row.participants"  :style="'width:' + columnsConfig[2].width + 'px'" class="table-cell">
                    </div>
                    <div v-html="row.price" :style="'width:' + columnsConfig[3].width + 'px'" class="table-cell">
                    </div>
                    <div v-if="options.deletableRows === true" :style="'width:' + columnsConfig[3].width + 'px'" class="table-cell">
                        <i @click="$emit('removeRow', row.key)">✖</i>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Table",
        props: {
            options: {
                type: Object,
                required: true
            },
            data: {
                type: Array,
                required: true,
            }
        },
        data(){
            return {
                columnsConfig: []
            }
        },
        mounted(){
            this.setColumnWidth();
            window.addEventListener('resize', this.setColumnWidth)
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.setColumnWidth)
        },
        created(){
            Object.keys(this.options.header).forEach((column, index)=> {
                this.columnsConfig[index] = {};
                this.columnsConfig[index].name = column
            })
        },
        methods:{
            setColumnWidth(){
                if (!this.$refs.header){
                    return
                }
                let headers = this.$refs.header.childNodes;
                Array.prototype.forEach.call(headers, (item, index) => {
                    if(!this.columnsConfig[index]) this.columnsConfig[index]  = {};
                    this.columnsConfig[index].width = item.offsetWidth})
            }
        }
    }
</script>

<style lang="less" scoped>
    .list-complete-item {
        transition: all 0.5s;
        display: inline-block;
        margin-right: 10px;
    }
    .list-complete-enter, .list-complete-leave-to
        /* .list-complete-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete-leave-active {
        position: absolute;
    }

    .table-head, .table-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .table-row {
        padding-top: 10px;
        padding-bottom:10px;
        border-bottom: 1px solid gray;
        & .table-cell {
            width: 100%;
            & i {
                cursor: pointer;
                height: 20px;
                width: 20px;
                font-style: normal;
                font-size: x-large;
                transition: all 0.3s;
                background-color: rgb(219, 82, 76);
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: 30px;
                height: 30px;
                border-radius: 10%;
                &:hover {
                    box-shadow:0 0 10px rgb(219, 82, 76);
                }
            }
        }
        & .table-cell:first-child {
            padding-left: 20px;
            text-align: left;
        }
        & .table-cell:last-child {
            padding-right: 20px;
            text-align: right;
        }

    }
    .table-head {
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #f7f7f7;
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        font-size: large;
        font-weight: bold;
        & .header-cell {
            width: 100%;
        }
        & .header-cell:first-child {
            padding-left: 20px;
            text-align: left;
        }
        & .header-cell:last-child {
            padding-right: 20px;
            text-align: right;
        }
    }

</style>