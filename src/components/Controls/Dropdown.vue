<template>
    <div style="width: 100%">
        <label>
            {{title}}
        </label>
        <select @input="emitSelectedValue">
            <option v-for="option in options" :selected="option === value"  :value="option">
                {{option}}
            </option>
        </select>
    </div>

</template>

<script>
    export default {
        name: "Dropdown",
        props: {
            value: {
                type: String
            },
            options: {
                required: true,
                type: Array
            },
            title: {
                type: String
            }
        },
        methods: {
            emitSelectedValue(event){
                this.$emit('input', event.target.value)
            }
        }
    }
</script>

<style lang="less" scoped>
    label {
        float: left;
        margin-left: 15px;
        margin-bottom: 5px;
        color: #979797;
        font-weight: bold;
    }
    select {
        width: 100%;
        height: 40px;
        border: 1px solid gray;
        border-radius: 5px;
        font-size: large;
    }

</style>