import { Rarity } from "@/entities/dapp/model/types"

export type DappApiResponse = {
    list: {
        id: number
        rarity: Rarity
        img: string
    }[]
}