import React from 'react'

import Layout from '../theme/layout'
import HelloWorld from '../components/HelloWorld'

import { StyledContainer } from '../styles/global/layout'

export default () => (
	<Layout>
		<StyledContainer>
			<HelloWorld />
		</StyledContainer>
	</Layout>
)
