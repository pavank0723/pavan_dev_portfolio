import { takeEvery,put } from 'redux-saga/effects'
// import SkillDataService from '../apis/qualification_api'
import { GET_QUALIFICATION_LIST, SET_QUALIFICATION_LIST } from '../constants/const'


function* getQualification() {
    // try {
    //     let data = yield fetch('http://localhost:5100/qualification_category/views')
    //     data = yield data.json()

    //     yield put({type:SET_SKILL_LIST,data})
    // } catch (error) {
    //     console.log(error)
    // }
    let data = yield fetch('http://localhost:5100/qualification_category/views')
    data = yield data.json() // convert to json format

    yield put({type:SET_QUALIFICATION_LIST,data})
}
function* qualificationSaga(){
    yield takeEvery(GET_QUALIFICATION_LIST,getQualification)
}

export default qualificationSaga