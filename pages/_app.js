import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

/*
function MyApp({ Component, pageProps }) {
	return (
		<html lang="es">
			<Component {...pageProps} />
		</html>
	);
}
*/

export default MyApp;
