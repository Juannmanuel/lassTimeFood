import axios from "axios"

export const RESULTSEARCH = "RESULTSEARCH"
export const CATEGORIES = "CATEGORIES"
export const FOODBYCATEGORY = "FOODBYCATEGORY"
export const DETAILFOOD = "DETAILFOOD"

export function SearchFood(params) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params}`)
            dispatch({ type: RESULTSEARCH, payload: response.data.meals })
        } catch (error) {
            console.error(`error SearchFood, status: ${error, error.message}`);
        }

    }
}
export function getAllCategiries() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            dispatch({ type: CATEGORIES, payload: response.data.categories })
        } catch (error) {
            console.error({ "error in getAllCategories": error.message })
        }
    }
}

export function getFoodByCategorie(categories) {
    return async (dispatch) => {
        for (const category of categories) {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
                let data = response.data.meals
                console.log(data, "data", category);
                dispatch({ type: FOODBYCATEGORY, payload: {category, data }})
            } catch (error) {
                console.error(`error in getAllFoodByCategories for ${category} : ${error.message}`)
            }
        }
    }
}
export function getDetailFood(id){
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            let data = response.data.meals
            console.log(data, "data");
            dispatch({type: DETAILFOOD, payload: data})
        } catch (error) {
            console.error(`error in getDetailFood for id ${id} : ${error.message}`)
        }
    }
}