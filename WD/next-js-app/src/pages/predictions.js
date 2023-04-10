import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'

const title = 'Predictions';

export default function Predictions() {
	return (
		<>
			<Head>
				<title>WasteWise • {title}</title>
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<NavBar />
			<Header title={title} />
			<main className="predictions">
				<div>
					<div className="u-badge-coming-soon">Coming soon</div>
					<h2>Hang on, this feature is coming soon.</h2>
					<p>Development is ongoing, I’m sorry! For forecasts of your waste production, please come back later.</p>
				</div>
				<img className="predictions__img" src="images/undraw_blank_canvas_modified.svg" alt="a person looking at a blank canvas" />
			</main>
		</>
    )
}