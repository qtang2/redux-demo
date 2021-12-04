// import redux from 'redux   for React app

const redux = require('redux') // for node.js app
const reduxLogger = require("redux-logger")

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleWare = redux.applyMiddleware
const logger = reduxLogger.createLogger() 

console.log("JJJJJJJJJJJJJJ")
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake(){
    return {
        type: BUY_CAKE,
        info: "First Redux cation",
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: "First action",
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams:20,
// }

const cakeState = {
    numOfCakes: 10,
}

const iceCreamState = {
    numOfIceCreams:20,
}

// const reducer =  (state=initialState, action)=>{
//     switch(action.type){
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes-1}
//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numOfIceCreams: state.numOfIceCreams-1}
//         default: return state
//     }
// }

const cakeReducer =  (state=cakeState, action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes-1}
        default: return state
    }
}

const iceCreamReducer =  (state=iceCreamState, action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams-1}
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleWare(logger))

console.log("inital", store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()