import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import { createLogger } from 'redux-logger'

let middleware = [thunk];

if(__DEV__){
	const logger = createLogger ({collapsed: true});
	middleware = [...middleware, logger];
}else{
	middleware = [...middleware]
}

export default function configureStore(initialState){
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middleware)
	)
}