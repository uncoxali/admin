import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducers from './reducers';
import rootSaga from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });
  
export function configureStore(initialState: any) {

    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares)
        ),
    );
    sagaMiddleware.run(rootSaga);
    return store;
}

