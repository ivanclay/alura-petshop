import axios from "axios";

export const Api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const busca = async (url, setDado) => {
    const resposta = await Api.get(url);
    setDado(resposta.data);
}
