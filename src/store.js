import { reactive } from "vue"
export const store = reactive({
    apiTopTracks: "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks",
    apiKey: "api_key=ef2ef39365afcf57864b39c8a15c6cd4",
    apiSearchTracks: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=",
    arrayTracks: [],
    searchInput: "",
})