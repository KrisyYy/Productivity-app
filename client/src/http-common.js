import axios from "axios";

export default axios.create({
    baseURL:"http://192.168.0.249:8080",
    headers: {
        "Content-Type": "application/json"
    }
})