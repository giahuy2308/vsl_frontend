import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_HOST}`,
    timeout: 10000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default AxiosInstance;
