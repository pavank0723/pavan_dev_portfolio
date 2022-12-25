import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from '../reducers'
import skillSaga from "../middlewares/skillSaga";

const sagaMiddleWare = createSagaMiddleware()

const store = configureStore(
    {
        reducer:rootReducer,
        middleware:() =>[sagaMiddleWare]
    }
)

sagaMiddleWare.run(skillSaga)
export default store