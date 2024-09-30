import { ResponseDefault } from "@/shared/lib/api/createRequest"

export type FormParams = {
    email: string
    topic: string
    message: string
}

export type FormApi = {
    send: (data: FormParams) => Promise<ResponseDefault<unknown>>
}