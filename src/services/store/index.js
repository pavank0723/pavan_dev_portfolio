import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from '../reducers'
import skillSaga from "../middlewares/skillSaga";
import qualificationSaga from "../middlewares/qualificationSaga";
import rootSaga from "../middlewares";

const sagaMiddleWare = createSagaMiddleware()

const store = configureStore(
    {
        reducer:rootReducer,
        middleware:() =>[sagaMiddleWare]
    }
)

sagaMiddleWare.run(rootSaga)
export default store