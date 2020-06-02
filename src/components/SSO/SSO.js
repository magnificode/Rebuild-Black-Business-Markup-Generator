import React from 'react'
import { graphql, StaticQuery } from "gatsby"

const LocalBOB = ( { data } ) => (
	<pre>
		{data.map((row) => {
			const { Service_Org_Name, Category, Location__Zip_Code_, General_website  } = row.node

			return(
				`
				<div style="text-align: left;">
					<span style="font-size:18px">
						<strong>Organization:</strong> ${Service_Org_Name}<br />
						<strong>Specialty:</strong> ${Category}
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
		query={SSOQuery}
		render={ data => <LocalBOB data={data.allServiceSupportingOrgsCsv.edges} {...props} /> }
	/>
)

export const SSOQuery = graphql`
	query SSOQuery {
		allServiceSupportingOrgsCsv {
			edges {
				node {
					Service_Org_Name
					Category
					Location__Zip_Code_
					General_website
				}
			}
		}
	}
`