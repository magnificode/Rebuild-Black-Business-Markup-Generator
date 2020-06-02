import React from 'react'
import { graphql, StaticQuery } from "gatsby"

const Allies = ( { data } ) => (
	<pre>
		{data.map((row) => {
			const { Your_Name, Location__Zip_Code_, Speciality, Your_Email_Address } = row.node

			return(
				`
				<div style="text-align: left;">
					<span style="font-size:18px">
						<strong>Ally Name:</strong> ${Your_Name}<br />
						<strong>Location:</strong> ${Location__Zip_Code_}<br />
						<strong>Specialty:</strong> ${Speciality}<br />
						<strong>Email:</strong> ${Your_Email_Address}
					</span>
				</div>
				`
			)
		})}
	</pre>
)

export default props => (
	<StaticQuery
		query={IndexQuery}
		render={ data => <Allies data={data.allAlliesCsv.edges} {...props} /> }
	/>
)

export const IndexQuery = graphql`
	query AlliesQuery {
		allAlliesCsv {
			edges {
				node {
					Your_Name
					Location__Zip_Code_
					Speciality
					Your_Email_Address
				}
			}
		}
	}
`