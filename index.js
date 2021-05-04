
// Action
const BUY_CAKE='BUY_CAKE'

function buycake(){
    return {
        type:BUY_CAKE,
        info: 'This is first redux action'
    }
}



const initialState={
    numberOfCakes:10
}

// Reducer

const reducer = (state=initialState,action ) =>{
    switch (action.type) {
        case BUY_CAKE:return {
            ...state,
            numberOfCakes:state.numberOfCakes-1
        }
            
           
    
        default: return state
            
    }
}