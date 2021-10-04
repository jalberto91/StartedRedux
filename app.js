import store from './store/store';
import { addRecipe } from './actions/recipes';
import { addIngredient } from './actions/ingredients';

store.dispatch(addRecipe('Pancake'));
store.dispatch(addIngredient('Pancake', 'Eggs', 3));
window.store = store;

////import { createStore } from 'redux';

////const initialState = {
////    recipes: [
////        {
////            name: 'Omelette'
////        }
////    ],
////    ingredients: [
////        {
////            recipe: 'Omelette',
////            name: 'Egg',
////            quantity: 2
////        }
////    ]
////};

////const reducer = (state, action) => {
////    switch (action.type) {
////        case 'ADD_RECIPE':
////            return Object.assign({}, state, {
////                recipes: state.recipes.concat({ name: action.name })
////            });
////        case 'ADD_INGREDIENT':
////            const newIngredient = {
////                name: action.name,
////                recipe: action.recipe,
////                quantity: action.quantity
////            };
////            return Object.assign({}, state, {
////                ingredients: state.ingredients.concat(newIngredient)
////            });
////    }
////    return state;
////};

////const store = createStore(reducer, initialState);
////window.store = store;

//const reducer = (state, action) =>
//	action.type === 'INC'
//		? state + 1
//		: state;

//const initialState = 0;

//const store = createStore(reducer, initialState);

//store.subscribe(() => document.getElementById('counter').innerText = store.getState());

//setInterval(() => store.dispatch({ type: 'INC' }), 500);

//console.log("Redux started");

//linea desde gitHub

//linea desde local

//linea 1 desde rama2 local

//agrego esta linea desde master local
//agrego esta linea desde master online


//agrego esta lina desde rama2 local

//linea agregada online en la 75
