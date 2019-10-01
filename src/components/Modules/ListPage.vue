<template>
    <div>
        <Table @removeRow="removeRow" :options="options" :data="tableData"></Table>
        <Button text="Clear all" :callback="removeAll"></Button>
    </div>
</template>

<script>
    export default {
        name: "ListPage",
        data(){
            return {
                options: {
                    header:{
                        '#': {},
                        'Activity': {},
                        'Participants': {},
                        'Budget': {},
                    },
                    deletableRows: true
                },
                tableData: []
            }
        },
        created(){
            this.getRows()
        },
        methods: {
            stub(){},
            removeAll(){
                for(let key in localStorage) {
                    if (!localStorage.hasOwnProperty(key)) {
                        continue;
                    }
                    if (key.slice(0, 3) !== 'row') {
                        continue;
                    }
                    localStorage.removeItem(key);
                    this.tableData = [];
                }
            },
            removeRow(key){
                localStorage.removeItem('row'+key);
                this.getRows()
            },
            getRows(){
                this.tableData = [];
                for(let key in localStorage) {
                    if (!localStorage.hasOwnProperty(key)) {
                        continue;
                    }
                    if (key.slice(0, 3) !== 'row') {
                        continue;
                    }

                    this.tableData.push(JSON.parse(localStorage.getItem(key)));
                }
            }
        }
    }
</script>

<style scoped>
.button {
    margin-top: 20px;
}
</style>