import React from 'react'
import { graphql, StaticQuery } from "gatsby"

const LocalBOB = ( { data } ) => (
	<pre>
		{data.map((row) => {
			const { Impacted_Business_Name, Location__Zip_Code_, General_website, Donation_Website  } = row.node

			return(
				`
				<div style="text-align: left;">
					<span style="font-size:18px">
						<strong>Business Name:</strong> ${Impacted_Business_Name}<br />
						<strong>Location:</strong> ${Location__Zip_Code_}<br />
						<strong>News Article:</strong> <a href="${Donation_Website}" target="_blank">Click Here</a>
						<strong>Website:</strong> <a href="${General_website}" target="_blank">Click Here</a>
					</span>
				</div>
				`
			)
		})}
	</pre>
)

export default props => (
	<StaticQuery
		query={ImpactedBOBQuery}
		render={ data => <LocalBOB data={data.allImpactedBobCsv.edges} {...props} /> }
	/>
)

export const ImpactedBOBQuery = graphql`
	query ImpactedBOBQuery {
		allImpactedBobCsv {
			edges {
				node {
					Impacted_Business_Name
					General_website
					Location__Zip_Code_
					Donation_Website
				}
			}
		}
	}
`