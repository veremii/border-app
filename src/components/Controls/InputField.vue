<template>
    <div style="width: 100%">
        <label>
            {{title}}
        </label>
        <input :value="value" :type="type" min="0" @input="emitSelectedValue">
    </div>
</template>

<script>
    export default {
        name: "InputField",
        props: {
            type: {
                type: String
            },
            value: {
                type: Number
            },
            title: {
                type: String
            }
        },
        methods: {
            emitSelectedValue(event){
                    event.target.setCustomValidity("");
                    if (this.type === 'number'){
                        event.target.value = Number(event.target.value)
                    }
                    this.$emit('input', this.type === 'number' ? Number(event.target.value) : event.target.value)
            }
        }
    }
</script>

<style scoped>
    label {
        float: left;
        margin-left: 15px;
        margin-bottom: 5px;
        color: #979797;
        font-weight: bold;
    }
    input {
        width: 100%;
        height: 36px;
        border: 1px solid gray;
        border-radius: 5px;
        font-size: large;
    }
</style>