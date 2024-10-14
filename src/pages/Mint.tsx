import { Footer } from "@/widgets/Footer"
import { Form } from "@/widgets/Form"
import { Header } from "@/widgets/Header"
import { Slider, GradientFirst, GradientSecond } from "@/widgets/mint"

export const Mint = () => {
    return (
        <>
            <GradientFirst>
                <Header />
                <Slider />
            </GradientFirst>
            <GradientSecond>
                <Form />
                <Footer />
            </GradientSecond>
        </>
    )
}