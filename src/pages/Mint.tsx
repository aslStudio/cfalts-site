import { Footer } from "@/widgets/Footer"
import { Form } from "@/widgets/Form"
import { Header } from "@/widgets/Header"
import {Slider, GradientFirst, GradientSecond, Particles} from "@/widgets/mint"

export const Mint = () => {
    return (
        <>
            <Particles>
                <GradientFirst>
                    <Header />
                    <Slider />
                </GradientFirst>
                <GradientSecond>
                    <Form />
                    <Footer />
                </GradientSecond>
            </Particles>
        </>
    )
}