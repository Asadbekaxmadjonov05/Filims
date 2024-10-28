import axios from "axios";
import { REQUEST } from "./UseEnv";



export const UseAxios = () => axios.create({baseURL:REQUEST})