import { Footer } from "@/widgets/Footer"
import { Form } from "@/widgets/Form"
import { Header } from "@/widgets/Header"
import {Info, Slider, GradientFirst, GradientSecond} from "@/widgets/mint"

export const Mint = () => {
    return (
        <>
            <Header />
            <Info />
            <GradientFirst>
                <Slider />
            </GradientFirst>
            <GradientSecond>
                <Form />
                <Footer />
            </GradientSecond>
        </>
    )
}