<template>
    <div style="width: 100%">
        <label>
            {{title}}
        </label>
        <input type="range" min="0" step="0.01" max="1" :value="value">
        <div class="pips">
            <div class="pip" v-for="pip in pips">{{pip}}</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Slider",
        props: {
            value: {
              type: Number
            },
            range: {
                required: true,
                type: Array
            },
            title: {
                type: String
            },
            pips: {
                type: Array
            }
        },
        mounted(){
            this.initSlider()
        },
        methods: {
            rangeValue (){
                let elem = document.querySelector('input[type="range"]');
                let newValue = elem.value;
                this.$emit('input', Number(newValue))
            },
            initSlider(){
                let elem = document.querySelector('input[type="range"]');

                elem.addEventListener("input", this.rangeValue);
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
    body {
        font-family: "Dosis", Helvetica, Arial, sans-serif;
        background: #ecf0f1;
        color: #34495e;
        padding-top: 50px;
        text-shadow: white 1px 1px 1px;
    }
    .pips {
        display: flex;
        justify-content: space-between;
        font-size: smaller;
        margin-top: 10px;
        color: #979797;
    }
    input[type="range"] {
        display: block;
        -webkit-appearance: none;
        background-color: #bdc3c7;
        width: 100%;
        height: 10px;
        border-radius: 5px;
        margin: 0 auto;
        outline: 0;
    }
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: #e74c3c;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid white;
        cursor: pointer;
        transition: .3s ease-in-out;
    }​
     input[type="range"]::-webkit-slider-thumb:hover {
         background-color: white;
         border: 2px solid #e74c3c;
     }
    input[type="range"]::-webkit-slider-thumb:active {
        transform: scale(1.2);
    }
</style>