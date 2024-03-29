import { APICore } from './apiCore';

const api = new APICore();

// account
function login(params: { email: string; password: string }) {
    const baseUrl = '/users/login/';
    return api.create(`${baseUrl}`, params);
}

function logout() {
    const baseUrl = '/logout/';
    return api.create(`${baseUrl}`, {});
}

function signup(params: { fullname: string; email: string; password: string }) {
    const baseUrl = '/users/register/';
    return api.create(`${baseUrl}`, params);
}

function forgotPassword(params: { email: string }) {
    const baseUrl = '/forget-password/';
    return api.create(`${baseUrl}`, params);
}

function reset(params: { email: string }) {
    const baseUrl = '/reset/';
    return api.create(`${baseUrl}`, params);
}

export { login, logout, signup, forgotPassword };
