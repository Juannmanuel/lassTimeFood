import { CATEGORIES, DETAILFOOD, FOODBYCATEGORY, RESULTSEARCH } from "./actions";

const globalState = {
    search: [],
    categories: ["Beef", "Chicken", "Dessert", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegetarian", "Breakfast"],
    foodByCategory: {
        Beef: [],
        Chicken: [],
        Dessert: [],
        Lamb: [],
        Miscellaneous: [],
        Pasta: [],
        Pork: [],
        Seafood: [],
        Side: [],
        Starter: [],
        Vegetarian: [],
        Breakfast: [],
        Goat: [],
    },
    categories_datail: [],
    detailFood: []
}

export default function rootReducer(state = globalState, action) {
    switch (action.type) {
        case RESULTSEARCH:
            return {
                ...state,
                search: action.payload
            }
        case CATEGORIES:
            return {
                ...state,
                categories_datail: action.payload
            }
        case FOODBYCATEGORY:
            const { category, data } = action.payload
            return {
                ...state,
                foodByCategory: {
                    ...state.foodByCategory,
                    [category]: data
                }

            }
        case DETAILFOOD: 
        return {
            ...state,
            detailFood: action.payload
        }    
        default: return { ...state }
    }
}