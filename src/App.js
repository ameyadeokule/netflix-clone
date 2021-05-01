import React from 'react'
import { FaqsContainter } from './containers/faq'
import { FooterContainer } from './containers/footer'
import { JumbotronContainer } from './containers/jumbotron'

export default function App() {
	return (
		<>
			<JumbotronContainer />
			<FaqsContainter />
			<FooterContainer />
		</>
	)
}
