import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'

const title = 'Info';

export default function Info() {
	return (
		<>
			<Head>
				<title>WasteWise • {title}</title>
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<NavBar />
			<Header title={title} />
			<main class="info">
				<iframe class="info__iframe" src="https://julianabquiroga-streamlit-testing-streamlit-5s44p4.streamlit.app/~/+/" title="Streamlit App"></iframe>
			</main>
		</>
    )
}