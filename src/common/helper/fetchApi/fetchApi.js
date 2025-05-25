import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const HttpKit={
fetchAllCast:async()=>{
        try {
            const response = await axios.get(`${BASE_URL}/character`);
            const data = await response.data;
            return data.results;
        } catch (error) {
            console.log(error);
        }
    },
fetchAllEpisode:async()=>{
    try {
        const response =await axios.get(`${BASE_URL}/episode`);
        const data = await response.data;
        return data.results;
    } catch (error) {
        console.log(error);
    }
},
fetchAllLocation:async()=>{
    try {
        const response =await axios.get(`${BASE_URL}/location`);
        const data = await response.data;
        return data.results;
    } catch (error) {
        console.log(error);
    }
},
fetchCastById:async(id)=>{
    try {
        const response =await axios.get(`${BASE_URL}/character/${id}`);
        const data = await response.data;
        data.episode = await Promise.all(data.episode.map(async (episodeUrl) => {
            const episodeResponse = await axios.get(episodeUrl);
            return episodeResponse.data;
        }));    
        return data;

    } catch (error) {
        console.log(error);
    }
}
}
export default HttpKit
