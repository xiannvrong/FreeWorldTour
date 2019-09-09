import axios from "axios";
import { Request } from "../request";


 
export function getVerifyfn(params) {
    return Request.http.get("/pub/xview/getVerify", params, 66);
}
export function checkVerify(params,coded) { 
    return Request.http.get(`/pub/xview/checkVerify/${coded.num}`, params, 66);
}
export function insertConsult(params) {
    // console.log(JSON.stringify(params))
    return Request.http.post("/pub/xview/insertConsult", params, 66);
}

export function insertConsult2(params) {
    return Request.http.post("/pub/xview/insertConsult", params, 77);
}
 