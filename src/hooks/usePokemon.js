import { useEffect, useState } from "react";
import axios from "axios";

export const usePokemon = (url, namePokemon, estadoInicial) => {
    const [data, setData] = useState(estadoInicial)
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState(false)
    const [mostrarErro, setMostrarErro] = useState("")

   const carregarData = () => {
        setCarregando(true)
        axios.get(`${url}${namePokemon}`)
        .then((response) => {
            namePokemon ? setData(response.data) : setData(response.data.results)
            setCarregando(false)
        })
        .catch((erro) => {
            setCarregando(false)
            setErro(true)
            setMostrarErro(erro.response.status)
        })
   }
    
    useEffect( () => {
        carregarData()
    },
    [])
    return [data, carregando, erro, mostrarErro]
}