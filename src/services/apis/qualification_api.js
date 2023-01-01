import http from "../constants/http-common"

class QualificationDataService {
    getAll(){
        return http.get("/qualification_category/views")
    }
}

export default QualificationDataService