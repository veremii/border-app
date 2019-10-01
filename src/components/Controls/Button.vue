<template>
    <div class="button" :style="'background-color:' + color" @click="fakeLoad()">
        <div v-if="!loading" class="button-text">
            {{text}}
        </div>
        <div v-else class="circle">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Button",
        props: {
            text: {
                required: true,
            },
            color: {
                required: false,
                default: ()=> '#db524c'
            },
            callback: {
                required: true,
                type: Function
            }
        },
        data(){
            return {
                loading: false
            }
        },
        methods: {
            fakeLoad(){
                this.loading = true;
                setTimeout(()=> {
                    this.loading = false;
                    this.callback()
                }, 750)
            }
        }
    }
</script>

<style lang="less" scoped>
    @-webkit-keyframes fades {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

    .circle span  {
        display: inline-block;
        width: 15px;
        height: 15px;
        margin: 9.975em auto;
        background: #dbdbdb;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        -ms-border-radius: 50px;
        -o-border-radius: 50px;
        border-radius: 50px;
        -webkit-animation-duration: 1.5s;
        -webkit-animation-name: fades;
        -webkit-animation-iteration-count: infinite;
    }

    .circle span:nth-child(2) {
        -webkit-animation-delay: 0.2s;
    }

    .circle span:nth-child(3) {
        -webkit-animation-delay: 0.4s;
    }
    .button {
        height: 40px;
        width: 100%;
        background-color: #db524c;
        border-radius: 10px;
        color: white;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        white-space: nowrap;

        &-text {

        }
        &:hover {
            box-shadow:0 0 10px #555
        }
    }

</style>