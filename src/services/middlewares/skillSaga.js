import { takeEvery,put } from 'redux-saga/effects'
import SkillDataService from '../apis/skill_api'
import { GET_SKILL_LIST, SET_SKILL_LIST } from '../constants/const'


function* getSkills() {
    // try {
    //     let data = yield fetch('http://localhost:5100/skill_category/views')
    //     data = yield data.json()

    //     yield put({type:SET_SKILL_LIST,data})
    // } catch (error) {
    //     console.log(error)
    // }
    let data = yield fetch('http://localhost:5100/skill_category/views')
    data = yield data.json() // convert to json format

    yield put({type:SET_SKILL_LIST,data})
}
function* skillSaga(){
    yield takeEvery(GET_SKILL_LIST,getSkills)
}

export default skillSaga