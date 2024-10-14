import { ResponseDefault } from "@/shared/lib/api/createRequest";

import { DappApiResponse } from './types'
import { Rarity } from "@/entities/dapp/model/types";

const mockImage = 'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b'

export const dappApi = {
    fetch: async (_gen: number): Promise<ResponseDefault<DappApiResponse>> => {
        await new Promise(resolve => setTimeout(resolve, 1000))

        return {
            error: false,
            payload: {
                list: [
                    {
                        id: 1,
                        rarity: Rarity.STANDART,
                        img: mockImage,
                    },
                    {
                        id: 2,
                        rarity: Rarity.SILVER,
                        img: mockImage,
                    },
                    {
                        id: 3,
                        rarity: Rarity.GOLD,
                        img: mockImage,
                    },
                    {
                        id: 4,
                        rarity: Rarity.DIAMOND,
                        img: mockImage,
                    },
                    {
                        id: 5,
                        rarity: Rarity.SILVER,
                        img: mockImage,
                    },
                    {
                        id: 6,
                        rarity: Rarity.GOLD,
                        img: mockImage,
                    },
                    {
                        id: 7,
                        rarity: Rarity.DIAMOND,
                        img: mockImage,
                    }
                ]
            }
        }
    }
}