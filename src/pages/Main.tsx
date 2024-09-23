import {
	About,
	Concept,
	FirstGradientBackground,
	Game,
	Goal,
	Info,
	Marquee,
	RarityProperties,
	RaritySlider,
	Room,
	SecondGradientBackground,
	Team, ThirdGradientBackground
} from '@/widgets/main';
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import { Form } from '@/widgets/Form'
import {useLazyVideo} from "@/shared/lib/hooks/useLazyVideo";

export const Main = () => {
	useLazyVideo()

	return (
		<>
			<Header />
			<Info />
			<Marquee />
			<FirstGradientBackground>
				<Goal />
				<About />
				<Room />
				<RarityProperties />
				<RaritySlider />
			</FirstGradientBackground>
			<SecondGradientBackground>
				<Concept />
				<Team />
			</SecondGradientBackground>
			<ThirdGradientBackground>
				<Game />
				<Form />
			</ThirdGradientBackground>
			<Footer />
		</>
	)
}