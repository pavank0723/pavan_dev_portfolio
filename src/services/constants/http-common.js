import axios from "axios";
// import { BASE_URL } from "../../config";

export default axios.create({
  baseURL: "http://localhost:5100",
  headers: {
    "Content-type": "application/json"
  }
});