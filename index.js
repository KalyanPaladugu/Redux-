const redux=require('redux');
const reduxLogger=require('redux-logger')
const createStore=redux.createStore;
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()
// Action
const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAME'
function buycake(){
    return {
        type:BUY_CAKE,
        info: 'This is first redux action'
    }
}
function buyIceCreame(){
    return {
        type:BUY_ICECREAM,
        info: 'This is first redux action'
    }
}



// const initialState={
//     numberOfCakes:10,
//     numberOfIceCreames:20
// }

const initialCakeState={
    numberOfCakes:10
}
const initialIceCreamState ={
    numberOfIceCreames:20
}

// Reducer

// const reducer = (state=initialState,action ) =>{
//     switch (action.type) {
//         case BUY_CAKE:return {
//             ...state,
//             numberOfCakes:state.numberOfCakes-1
//         }
//         case BUY_ICECREAM:return {
//             ...state,
//             numberOfIceCreames:state.numberOfIceCreames-1
//         }
            
           
    
//         default: return state
            
//     }
// }

const cakeReducer = (state=initialCakeState,action ) =>{
    switch (action.type) {
        case BUY_CAKE:return {
            ...state,
            numberOfCakes:state.numberOfCakes-1
        }
       
            
        default: return state
            
    }
}
const iceCreamReducer = (state=initialIceCreamState,action ) =>{
    switch (action.type) {
        case BUY_ICECREAM:return {
            ...state,
            numberOfIceCreames:state.numberOfIceCreames-1
        }
       
            
        default: return state
            
    }
}


const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store= createStore(rootReducer,applyMiddleware(logger))
console.log("Initial Sate",store.getState())
const unsubscribe=store.subscribe(()=> {})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyIceCreame())
store.dispatch(buyIceCreame())
unsubscribe()