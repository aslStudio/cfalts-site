import { combine, createEffect, createEvent, createStore, sample } from "effector";

import { dappApi } from "@/shared/api";
import { reducers } from "@/shared/lib/effector/reducers";

import { NFT } from './types'

const fetchFx = createEffect(dappApi.fetch)

const listInited = createEvent()
const genSelected = createEvent<number>()
const nftSelected = createEvent<NFT>()

const $isLoading = fetchFx.pending

const $gen = createStore(0)
    .on(genSelected, reducers.pipe)

const $pool = createStore<Record<string, NFT[]>>({})
const $selectedList = createStore<NFT[]>([])
    .on(nftSelected, (state, payload) => {
        if (state.findIndex(item => item.id === payload.id) !== -1) {
            const copy = state.filter(item => item.id !== payload.id)
            return copy
        }

        return [
            ...state,
            payload,
        ]
    })

$pool.watch(console.log)

const $activeList = combine($pool, $gen, (pool, gen) => {
    if (pool[gen]) {
        return pool[gen]
    }

    return []
})

sample({
    source: $gen,
    clock: listInited,
    target: fetchFx,
})

sample({
    clock: genSelected,
    target: [$gen, fetchFx],
})

sample({
    source: {
        pool: $pool,
        gen: $gen,
    },
    clock: fetchFx.doneData,
    fn: ({ pool, gen }, { payload }) => ({
        ...pool,
        [gen]: payload?.list,
    }),
    target: $pool,
})

export const listModule = {
    $isLoading,

    $gen,
    $activeList,
    $selectedList,

    listInited,
    genSelected,
    nftSelected,
}