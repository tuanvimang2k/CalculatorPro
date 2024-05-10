import AxiosInstance from "../helper/AxiosInstance";
export const  getAllUsers = async () => {
    const response = await AxiosInstance().get('/user');
    return response;

}
export const  getUserById = async (id) => {
    const response = await AxiosInstance().get(`/user/${id}`);
    return response;
}

export const register = async (email,password) => {
    const body = {
        email,
        password
    }
    const response = await AxiosInstance().post('/user/register',body);
    return response;
}
export const login = async (email,password) => {
    const body = {
        email,
        password
    }
    const response = await AxiosInstance().post('/user/login',body);
    return response;
}
export const updateLocalPass = async (id,localPass) => {
    const body = {
        localPass
    }
    const response = await AxiosInstance().put(`/user/update-localPass/${id}`,body);
    return response;
}