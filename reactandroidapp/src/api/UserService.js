import ApiService from "./ApiService";


export const Login = async data => {
    try {
        const result = await ApiService('/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: data,
        });
            return result;
        } catch (error) {
            return error.response.data;
        }
    };