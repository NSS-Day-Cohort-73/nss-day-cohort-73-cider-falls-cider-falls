/* import buildGuestsHTML() from parkGuestsHTML.js
    buildAreasHTML() from parkAreasHTML.js
    buildServicesHTML() from parkServicesHTML.js */

import { buildGuestsHTML } from './parkGuestsHTML.js'
import { buildAreasHTML } from './parkAreasHTML.js'
import { parkServices } from './parkServicesHTML.js'

// Invoke buildGuestsHTML() and storing the value
const guestsHTMLString = buildGuestsHTML()

// Invoke buildAreasHTML() and storing the value
const areasHTMLString = buildAreasHTML()

// Invoke buildServicesHTML() and storing the value
const servicesHTMLString = parkServices()

// Build HTML structure
const fullHTMLString = `
	<header id="park-header">
		<div id="logo">Park Logo</div>
		<div id="park-name">Park Name<div>
	</header>
	<main>
		<div>
			<article id="services">
				<section>Services</section>
				<section>
                    ${servicesHTMLString}
				</section>
			</article>
			<article id="areas">
                ${areasHTMLString}
			</article>
		</div>
		<div>
			<article id="guests">
				<div>Guests</div>
                ${guestsHTMLString}
			</article>
		</div>
	</main>
	<foot>
		<div id="info-list">Phone Number ·  E-mail ·  Street Address</div>
	</foot>
`

// Get DOM container
const container = document.querySelector('.container')

// Render HTML to the DOM
container.innerHTML = fullHTMLString
