import React, { useState } from 'react'

import Layout from '../theme/layout'
import Allies from '../components/Allies/Allies'
import LocalBOB from '../components/LocalBOB/LocalBOB'
import ImpactedBOB from '../components/ImpactedBOB/ImpactedBOB'
import SSO from '../components/SSO/SSO'

import { StyledContainer } from '../styles/global/layout'

const copy = () => {
	const tempInput = document.createElement('textarea')
	tempInput.value = document.querySelector('pre').innerText

	document.body.appendChild(tempInput)
	tempInput.select()
	document.execCommand('copy')
	document.body.removeChild(tempInput)
}

export default () => {
	const [markupType, setMarkupType] = useState(null)

	return(
		<Layout>
			<StyledContainer>
				<button onClick={() => setMarkupType('Allies')}>Generate Allies Markup</button>
				<button onClick={() => setMarkupType('Impacted Black-Owned Businesses')}>Generate Impacted Black-Owned Businesses Markup</button>
				<button onClick={() => setMarkupType('Local Black-Owned Businesses')}>Generate Local Black-Owned Businesses Markup</button>
				<button onClick={() => setMarkupType('Service And Supporting Organizations')}>Generate Service &amp; Supporting Organizations Markup</button>

				{'Allies' === markupType && <Allies />}
				{'Impacted Black-Owned Businesses' === markupType && <ImpactedBOB />}
				{'Local Black-Owned Businesses' === markupType && <LocalBOB />}
				{'Service And Supporting Organizations' === markupType && <SSO />}
				{null !== markupType && <button onClick={() => copy()}>Copy to Clipboard</button>}
			</StyledContainer>
		</Layout>
	)
}
