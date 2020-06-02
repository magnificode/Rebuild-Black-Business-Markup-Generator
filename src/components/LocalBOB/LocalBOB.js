import React from 'react'
import { graphql, StaticQuery } from "gatsby"

const LocalBOB = ( { data } ) => (
	<pre>
		{data.map((row) => {
			const { Impacted_Business_Name, Location__Zip_Code_, General_website  } = row.node

			return(
				`
				<div style="text-align: left;">
					<span style="font-size:18px">
						<strong>Business Name:</strong> ${Impacted_Business_Name}<br />
						<strong>Location:</strong> ${Location__Zip_Code_}<br />
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
		query={LocalBOBQuery}
		render={ data => <LocalBOB data={data.allLocalBobCsv.edges} {...props} /> }
	/>
)

export const LocalBOBQuery = graphql`
	query LocalBOBQuery {
		allLocalBobCsv {
			edges {
				node {
					Impacted_Business_Name
					Location__Zip_Code_
					General_website
				}
			}
		}
	}
`