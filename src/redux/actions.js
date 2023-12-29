import axios from "axios"

export const RESULTSEARCH = "RESULTSEARCH"
export const CATEGORIES = "CATEGORIES"
export const FOODBYCATEGORY = "FOODBYCATEGORY"
export const DETAILFOOD = "DETAILFOOD"
export const RANDOMDISHES = "RANDOMDISHES"

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
                dispatch({ type: FOODBYCATEGORY, payload: { category, data } })
            } catch (error) {
                console.error(`error in getAllFoodByCategories for ${category} : ${error.message}`)
            }
        }
    }
}
export function getDetailFood(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = response.data.meals[0];

            // Organizar ingredientes y cantidades en arrays separados
            const ingredients = [];
            const quantities = [];
            for (let i = 1; i <= 20; i++) {
                const ingredient = data[`strIngredient${i}`];
                const measure = data[`strMeasure${i}`];
                if (ingredient && measure) {
                    ingredients.push(ingredient);
                    quantities.push(measure);
                }
            }

            // Organizar instrucciones en un array de pasos
            const instructions = data.strInstructions.split('\r\n');
            const steps = instructions.filter(instruction => instruction.trim() !== '');

            dispatch({
                type: DETAILFOOD,
                payload: {
                    ...data,
                    ingredients,
                    quantities,
                    steps,
                },
            });
        } catch (error) {
            console.error(`error in getDetailFood for id ${id} : ${error.message}`)
        }
    }
}
export  function clearSelectedfood() {
    return async (dispatch) => {
        dispatch({ type: DETAILFOOD, payload: {} })
    }
}
export  function getRandomDishes() {
    return async (dispatch) => {
        try {
            let randomDishes = [];
            for (let i = 0; i <= 10; i++) {
                const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
                randomDishes.push(data.meals[0])
            }
            dispatch({ type: RANDOMDISHES, payload: randomDishes })
        } catch (error) {
            console.error(`error in getRandomDishes: ${error.message}`)
        }


    }
}