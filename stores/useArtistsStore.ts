import type {Artist, Response, SuccessMessage} from "~/types";

export const useArtistsStore = defineStore('artists', () => {
    const artists = ref<Artist[]>([]);
    const databaseStore = useDatabaseStore();

    const getArtists = async () => {
        const {data} = await useFetch<SuccessMessage>("/api/artist", {
            headers: {
                cookie: "Id="+databaseStore.storageId
            }
        })
        if (data.value?.data) {
            artists.value = data.value.data as Artist[];
        }
    }

    const createArtist = async (artist: Artist) => {
        const {data} = await useFetch<SuccessMessage>("/api/artist", {
            method: "POST",
            headers: {
                cookie: "Id="+databaseStore.storageId
            },
            body: artist
        })
        if (data.value?.data) {
            artists.value = data.value.data as Artist[];
        }
    }

    return {getArtists, artists, createArtist}

})