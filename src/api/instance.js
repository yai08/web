import axios from "axios";

const baseUrl = "http://localhost:3001"

export const instance = axios.create({baseUrl})