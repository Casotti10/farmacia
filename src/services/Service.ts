/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import axios from "axios";

const api = axios.create({
    baseURL: 'https://farmacia-jjxo.onrender.com/'
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const buscar = async (url: string, setDados: Function, p0?: {},) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unused-vars
export const deletar = async (url: string, p0?: {}) => {
    await api.delete(url)
}