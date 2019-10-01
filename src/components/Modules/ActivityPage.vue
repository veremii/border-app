<template>
    <div class="container">
        <div class="description">
            <div class="label">
                You should:
            </div>
            <TextField v-model="formData.activity"></TextField>
            <div class="buttons">
                <Button text="Save for later" :callback="saveActivity"></Button>
            </div>
        </div>
        <div class="details">
            <div class="label">
                Activity details:
            </div>
            <div class="items">
                <dropdown v-model="formData.type" title="Type" @input="touchField('type')" :options="getActyvityTypes()"></dropdown>
                <input-field v-model="formData.participants" @input="touchField('participants')" type="number" title="Participants" :options="getActyvityTypes()"></input-field>
                <slider title="Budget" :pips="['cheap', 'expensive']" @input="touchField('price')" :range="[0,1]" v-model="formData.price"></slider>
                <Button text="Hit me with a new one!" :callback="init" color="#6567fa"></Button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ActivityPage",
        data(){
            return {
                formData: {
                    type: '',
                    participants: 0,
                    activity: '',
                    price: 0,
                    key: '',
                    accessibility: ''
                },
                touchedFields: []
            }
        },
        created(){
            this.init(true)
        },
        methods: {
            touchField(name){
                if (this.touchedFields.indexOf(name) === -1){
                    this.touchedFields.push(name)
                }
            },
            getActyvityTypes(){
                return ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
            },
            init(random=false){
                if (random){
                    this.api.GetRandomActivity().then(data => {
                        this.formData.type= data.data.type;
                        this.formData.participants= data.data.participants;
                        this.formData.activity= data.data.activity;
                        this.formData.price= data.data.price;
                        this.formData.key= data.data.key;
                        this.formData.accessibility= data.data.accessibility;
                        this.touchedFields = [];
                    })
                } else {
                    let filters = {};
                    this.touchedFields.forEach(item=>{
                        filters[item] = this.formData[item]
                    });
                    this.api.FilterActivity(filters).then(data => {
                        this.formData.type= data.data.type;
                        this.formData.participants= data.data.participants;
                        this.formData.activity= data.data.activity;
                        this.formData.price= data.data.price;
                        this.formData.key= data.data.key;
                        this.formData.accessibility= data.data.accessibility;
                    })
                }

            },
            saveActivity(){
                localStorage.setItem('row' + this.formData.key, JSON.stringify(this.formData))
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../less/Variables';
    .buttons {
        width: 90%

    }
    .label {
        text-align: left;
        padding-top: 20px;
        padding-bottom: 20px;
        font-weight: bold;
    }
    .container {
        display: flex;
        flex-direction: column;
        @media @tablet {
            flex-direction: row;
        }
    }

    .description {
        width: 100%;
        @media @tablet {
            width: 60%;
        }
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .details {
        width: 100%;
        @media @tablet {
            width: 40%;
        }
        display: flex;
        flex-direction: column;
        .items {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: end;
            height: 100%;
        }
    }
    .label {
        width: 100%;
    }


</style>