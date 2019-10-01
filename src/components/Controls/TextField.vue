<template>
    <div  class="textarea">
                <textarea @input="emitValue" :value="value" autofocus rows="7">

                </textarea>
    </div>
</template>

<script>
    export default {
        name: "TextField",
        props: {
            value: {
                type: String
            }
        },
        methods: {
            emitValue(event){
                this.$emit('input', event.target.value)
            }
        }
    }
</script>

<style lang="less" scoped>
    .textarea {
        width: 80%;
        textarea {
            width: 100%;
            font-size: xx-large;
            resize: none;
        }

    }
</style>