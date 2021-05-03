import React from 'react'
import { HeaderContainer } from '../containers/header'
import { FaqsContainter } from '../containers/faq'
import { FooterContainer } from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron'
import { OptForm } from '../components'

export default function Home() {
	return (
		<>
			<HeaderContainer>
				<OptForm>
					<OptForm.Input placeholder='Email Address' />
					<OptForm.Button>Try it Now</OptForm.Button>
					<OptForm.Break />
					<OptForm.Text>
						Ready to watch? Enter your email to create or restart
						your membership
					</OptForm.Text>
				</OptForm>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqsContainter />
			<FooterContainer />
		</>
	)
}
