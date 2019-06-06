import httpService from "./httpService";
import {apiEndpoint} from "../config.json";
import axios from "axios";

const apiRegister = apiEndpoint;

export function register(user){
    console.log(user.email + " " + user.username + " " + user.password + " " + user.confirmPassword + " ");
    return httpService.post(apiRegister, {
        "username": user.username,
        "email": user.email,
        "password": user.password,
        "passwordConf": user.confirmPassword,
    });
}

export function login(user){
    console.log(user.email + " " + user.password);
    return httpService.post(apiRegister, {
        "logemail": user.email,
        "logpassword": user.password,
    });
}


