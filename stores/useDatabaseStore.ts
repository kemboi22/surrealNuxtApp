import type {DatabaseConnection, ErrorMessage, SuccessMessage} from "~/types";
import {useToast} from "~/components/ui/toast";

export const useDatabaseStore = defineStore("database", () => {
    const storageId = ref<string>("")
    const form = ref<DatabaseConnection>({
        username: '',
        password: '',
        database: '',
        namespace: '',
        host: '',
    })
    const isLoading = ref(false)
    const {toast} = useToast()
    const connectToDatabase = async () => {
        isLoading.value = true
        const {data, error, pending} = await useFetch<SuccessMessage, ErrorMessage>("/api/database", {
            method: "POST",
            body: form.value,
        })
        if (error.value) {
            toast({
                title: "Database Connection",
                description: error.value.statusMessage,
                variant: "destructive",
                duration: 1000,
                type: "background"
            }, )
            isLoading.value = false
        }else {
            toast({
                title: "Database Connection",
                description: data.value?.message,
                class: 'bg-green-500 hover:bg-green-600',
                duration: 1000
            } )
            isLoading.value = false
            storageId.value = <string>data.value?.id
        }
    }
    const getCredentials = () => {
        const {data} = useFetch("/api/database", {
            method: "GET",
            credentials: "include",
        })
    }

    return {isLoading, form, storageId, connectToDatabase, getCredentials}
}, {
    persist: true,
})