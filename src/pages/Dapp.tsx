import { dappModel } from "@/entities/dapp";
import { NFTList } from "@/entities/dapp/ui";
import { DappWrapper } from "@/widgets/dapp";
import { Footer } from "@/widgets/Footer";
import { Form } from "@/widgets/Form";
import { Header } from "@/widgets/Header";
import { GradientSecond } from "@/widgets/mint";
import { reflect } from "@effector/reflect";
import { useEffect } from "react";

export const Dapp = () => {
    useEffect(() => {
        dappModel.listModule.listInited()
    }, [])

    return (
        <>
            <Header type={'dapp'} />
            <DappWrapper>
                <NFTListReflect />
            </DappWrapper>
            <GradientSecond>
                <Form />
                <Footer />
            </GradientSecond>
        </>
    )
}

const NFTListReflect = reflect({
    view: NFTList,
    bind: {
        list: dappModel.listModule.$activeList,
        selectedList: dappModel.listModule.$selectedList,
        gen: dappModel.listModule.$gen,
        isLoading: dappModel.listModule.$isLoading,
        onSelect: dappModel.listModule.nftSelected,
    }
})