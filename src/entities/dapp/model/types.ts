export enum FilterValues {
    CLAIM_TOKENS = 1,
    SELECT_STACKED,
    SELECT_UNSTACKED,
    UNSELECT_ALL,
    STAKE,
    UNSTAKE,
    BUY_PROTECTION
}

export enum Rarity {
    STANDART = 1,
    SILVER,
    GOLD,
    DIAMOND
}

export type NFT = {
    id: number
    rarity: Rarity
    img: string
}