import { ALL_COUNTRIES, COUNTRY_BY_ID, GET_NAME_COUNTRY, ORDER_AND_FILTER, POST_ACTIVITY, STATE_NULL } from "./actions_types";
import axios from "axios";
import { funcionOrderAndFilterCountry } from "./utils/utils";

export const all_Countries = ()=>{
    return async(dispatch)=>{
        try {
            const { data } = await axios.get('/countries');

            return dispatch({
                type:ALL_COUNTRIES,
                payload: data
            })
            
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export const countryById = (id)=>{
    return async(dispatch)=>{
        try {
            const { data } = await axios.get(`/countries/${id}`);

            return dispatch({
                type:COUNTRY_BY_ID,
                payload: data
            })
            
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export const getCountryByName = (name)=>{
    return async(dispatch)=>{
        try {
            const { data } = await axios.get(`/countries?name=${name}`);

            return dispatch({
                type:GET_NAME_COUNTRY,
                payload: data
            })
            
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export const orderAndFilterCountry = (value)=>{
    return async(dispatch)=>{
        const resultOrderOrFilter = await funcionOrderAndFilterCountry(value)
        return dispatch ({ 
            type:ORDER_AND_FILTER, 
            payload:resultOrderOrFilter
        })
    }
};

export const stateNull = ()=>{
    return (dispatch)=>{
        return dispatch({
            type:STATE_NULL,
            payload:{}
        })
    }
};

export const postActivity = (activityData)=>{
    return async(dispatch)=>{
        try {
            const { data } = await axios.post('/countries/post_activity', activityData);

            return dispatch({
                type:POST_ACTIVITY,
                payload: data
            })
            
        } catch (error) {
            throw Error(error.message)
        }
    }
};