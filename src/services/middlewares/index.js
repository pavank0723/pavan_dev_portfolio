import { all } from 'redux-saga/effects'
import qualificationSaga from "../middlewares/qualificationSaga"
import skillSaga from "../middlewares/skillSaga"

export default function* rootSaga() {
    yield all([
        skillSaga(),
        qualificationSaga()
    ])
}

// export default rootSaga