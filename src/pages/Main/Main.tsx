import React from 'react'
import {
	About,
	Concept,
	FirstGradientBackground, Footer, Form,
	Game,
	Goal,
	Header,
	Info,
	Marquee,
	RarityProperties,
	RaritySlider,
	Room,
	SecondGradientBackground,
	Team, ThirdGradientBackground
} from '@/widgets/main';
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