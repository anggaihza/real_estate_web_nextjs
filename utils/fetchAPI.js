import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '32030df0e5msh1b7786155b1484cp16971fjsna7123886bdcb',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    return data
}