import axios from "axios";

const jwtInterceptor = axios.create({});

jwtInterceptor.interceptors.request.use((config) => {
    let token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});

jwtInterceptor.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response.status === 403) {
            let token = localStorage.getItem("token");
            if (token) {
                const { data } = await axios.get("http://localhost:5000/auth/token", {
                    withCredentials: true,
                });
                console.log(data);
                localStorage.setItem("token", data.accessToken);
                error.config.headers.Authorization = `Bearer ${data.accessToken}`;
                return axios.request(error.config);
            }
        }
        return Promise.reject(error);
    }
);

export default jwtInterceptor;