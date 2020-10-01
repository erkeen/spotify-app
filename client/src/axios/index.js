import axios from "axios";

// const { REACT_APP_BASE_URL } = process.env;

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export default instance;
