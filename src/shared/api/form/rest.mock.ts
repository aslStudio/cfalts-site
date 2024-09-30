import { FormApi } from './types'

export const formApi: FormApi = {
    send: async () => {
        await new Promise(resolve => setTimeout(resolve, 1000))

        return {
            error: false,
            payload: 0,
        }
    }
}