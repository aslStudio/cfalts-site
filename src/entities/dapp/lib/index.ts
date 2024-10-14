import { Rarity } from "../model";

export function getRarityText(rarity?: Rarity) {
    switch (rarity) {
        case Rarity.STANDART:
            return 'STANDART'
        case Rarity.SILVER:
            return 'SILVER'
        case Rarity.GOLD:
            return 'GOLD'
        case Rarity.DIAMOND:
            return 'DIAMOND'
        default:
            return 'N/A'
    }
}