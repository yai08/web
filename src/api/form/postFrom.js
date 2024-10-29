import { instance } from "../instance";

export const dataForm = async (data) => {
    try {
        await instance.post('/todos', data)

    } catch (error) {
        console.log(error)
    }
}