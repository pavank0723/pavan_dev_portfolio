import http from "../constants/http-common"

class SkillDataService {
    getAll(){
        return http.get("/skill_category/views")
    }
}

export default SkillDataService