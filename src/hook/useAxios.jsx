import axios from "axios";
import {HTTP, TOKEN} from "./useEnv";




export  const useAxios  = () => axios.create({baseURL:HTTP, headers:{"Authorization":`Bearer ${TOKEN}`}})