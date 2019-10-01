import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://www.boredapi.com/api/'
});

export default {
    GetRandomActivity(){
        return instance.get('activity/')
    },
    FilterActivity(filters){
        return instance.get('activity/', {params: filters})
    },
    GetByKeyActivity(key){
        if (!key) return Promise.reject('No key was provided');
        return instance.get('activity/', {params: {key: key}})
    },
    GetByTypeActivity(type){
        if (!type) return Promise.reject('No type was provided');
        return instance.get('activity/', {params: {type: type}})
    },
    GetByParticipantsActivity(participants){
        if (!participants) return Promise.reject('No participants was provided');
        if (Math.round(participants) !== participants) return Promise.reject('Participants should be an integer');
        return instance.get('activity/', {params: {participants: participants}})
    },
    GetByPriceActivity(price = null){
        if (!price) return Promise.reject('No price was provided');
        if (isNaN(price)) return Promise.reject('Price should be a Number');
        return instance.get('activity/', {params: {price: price}})
    },
    GetByPriceRangeActivity(minprice = null, maxprice = null){
        if (!minprice && !maxprice) return Promise.reject('No price limits was provided');
        if (isNaN(minprice) || isNaN(minprice)) return Promise.reject('Price limits should be a Number');
        return instance.get('activity/', {params: {minprice: minprice, maxprice: maxprice}})
    },
    GetByAccessibilityActivity(accessibility){
        if (!accessibility) return Promise.reject('No price was provided');
        if (isNaN(accessibility)) return Promise.reject('Accessibility should be a Number');
        return instance.get('activity/', {params: {accessibility: accessibility}})
    },
    GetByAccessibilityRangeActivity(minaccessibility = null, maxaccessibility = null){
        if (!maxaccessibility && !maxaccessibility) return Promise.reject('No price limits was provided');
        if (isNaN(minaccessibility) || isNaN(maxaccessibility)) return Promise.reject('Price limits should be a Number');
        return instance.get('activity/', {params: {minaccessibility: minaccessibility, maxaccessibility: maxaccessibility}})
    },

}