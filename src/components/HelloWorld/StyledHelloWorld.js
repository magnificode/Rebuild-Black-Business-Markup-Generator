import styled from 'styled-components'
import { colors } from '../../styles/base/variables'

export const StyledHelloWorld = styled.header`
	background-color: ${colors.black};
	color: ${colors.white};

	& h1 {
		font-size: 4rem;
		margin: 0;
	}

	& p {
		font-size: 1rem;
		margin: 1rem 0;
	}
`