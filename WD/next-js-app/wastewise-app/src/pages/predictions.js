import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import IFrame from '@/components/IFrame'

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
					<h2>Sorry, there's not enough data yet.</h2>
					<p>I'm so sorry to say you haven't used the app enough yet. To get some predictions about your waste production, please come back later.</p>
				</div>
				<img className="predictions__img" src="images/undraw_blank_canvas_modified.svg" alt="a person looking at a blank canvas" />
			</main>
		</>
    )
}