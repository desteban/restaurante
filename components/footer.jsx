import Link from 'next/link';

export default function footer() {
	return (
		<div className="footer">
			<div className="descripcion seccion">
				<p className="titulo">Il Ristorante</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi
					reiciendis dolore accusamus laborum similique ratione enim itaque libero ex.
					Inventore dignissimos et rem modi veniam fugiat tempore soluta. Error. Deleniti
					nam magni delectus odio dolorem, hic nulla corrupti quibusdam, maxime ducimus
					nesciunt debitis ad placeat facere sunt nisi similique aperiam magnam deserunt
					provident labore. Commodi quia eum quam deleniti.
				</p>
			</div>

			<div className="servicios seccion">
				<p className="titulo">Servicios</p>
				<ul>
					<li>
						<Link href="/reservas">
							<a className="black">Reservas</a>
						</Link>
					</li>
				</ul>
			</div>

			<div className="contacto seccion">
				<p className="titulo">Contacto</p>

				<div className="social">
					<span className="click">
						<span>
							<svg
								width="24"
								height="24"
								viewBox="0 0 128 128"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="xMidYMid"
								className=""
							>
								<g>
									<path
										d="M97.2308572,0.923059 L97.2308572,21.230756 L85.1538235,21.230756 C80.743549,21.230756 77.7691736,22.153815 76.2306974,23.999933 C74.6922212,25.84605 73.9229831,28.6152716 73.9229831,32.3075965 L73.9229831,46.8460755 L96.4615294,46.8460755 L93.4614873,69.6153529 L73.9229831,69.6153529 L73.9229831,128 L50.3845125,128 L50.3845125,69.6153529 L30.7691428,69.6153529 L30.7691428,46.8460755 L50.3845125,46.8460755 L50.3845125,30.0768823 C50.3845125,20.538384 53.0512016,13.140945 58.3845798,7.884567 C63.717958,2.628189 70.8205435,0 79.6923362,0 L80.4165827,0 L80.4165827,0 L81.8333781,0.0086446648 L81.8333781,0.0086446648 L83.2079101,0.0240129595 C83.4334769,0.0272146877 83.6572826,0.0307365888 83.8793274,0.0345786628 L85.1904643,0.0614731826 C85.4054652,0.0665959486 85.6187051,0.0720388875 85.830184,0.0778019995 L87.0779258,0.116222748 L87.0779258,0.116222748 L88.2834043,0.162327651 L88.2834043,0.162327651 L89.4466193,0.216116711 C89.6369665,0.2257219 89.8255528,0.235647263 90.0123781,0.245892799 L91.112198,0.311208096 C91.2919794,0.322734325 91.4699998,0.334580728 91.6462592,0.346747304 L92.682684,0.423588842 C92.8518995,0.437036111 93.0193541,0.450803554 93.1850477,0.464891171 L94.1580774,0.553258953 C94.6340264,0.599363885 95.0941267,0.648350379 95.5383781,0.700218436 L96.4057494,0.807796633 C96.5467893,0.82636668 96.6860682,0.845256901 96.8235862,0.864467295 L97.2308572,0.923059 Z"
										fill="currentColor"
									></path>
								</g>
							</svg>
						</span>
					</span>

					<span className="click">
						<svg
							width="24"
							height="24"
							viewBox="0 0 128 128"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="xMidYMid"
							className=""
						>
							<g>
								<path
									d="M128,24.3652431 C124.372226,29.6715007 119.986462,34.1926688 114.842709,37.9287476 L114.86576,38.3055233 L114.86576,38.3055233 L114.893132,38.9716088 L114.893132,38.9716088 L114.916183,40.0481107 L114.916183,40.0481107 L114.923386,40.996778 L114.923386,40.996778 L114.923866,41.339913 C114.923866,48.3788527 113.895116,55.4042424 111.837614,62.4160823 C109.780113,69.4279222 106.653212,76.1554983 102.45691,82.5988106 C98.2606077,89.042123 93.2656667,94.7409484 87.4720866,99.6952871 C81.6785065,104.649626 74.6937191,108.602266 66.5177243,111.553208 C58.3417295,114.504151 49.5972545,115.979622 40.2842993,115.979622 C25.6108873,115.979622 12.1827875,112.054081 0,104.203 C1.89509186,104.419609 4.00674534,104.527914 6.33496045,104.527914 C18.5176532,104.527914 29.3738291,100.791882 38.903488,93.3198191 C33.2182124,93.2115146 28.1285168,91.4653295 23.6344012,88.081264 C19.1402857,84.6971985 16.0539864,80.3790895 14.3755036,75.1269372 C16.1622909,75.3976511 17.8137214,75.533008 19.3297948,75.533008 C21.6580099,75.533008 23.9591726,75.2351943 26.2332828,74.639567 C20.1689889,73.3942073 15.1469955,70.3756103 11.1673026,65.5837757 C7.18760965,60.7919412 5.1977632,55.2284727 5.1977632,48.8933701 L5.1977632,48.5684566 C8.87964242,50.6259578 12.8322829,51.7359605 17.0556846,51.8984646 C13.4821099,49.5160499 10.6394721,46.4026982 8.52777124,42.5584096 C6.41607038,38.7141211 5.36021995,34.544919 5.36021995,30.0508034 C5.36021995,25.2859741 6.55142732,20.8731101 8.93384205,16.8122131 C15.4854589,24.8799031 23.4583946,31.3367653 32.8526492,36.1827995 C42.2469038,41.0288336 52.3044406,43.7225646 63.0252595,44.2639923 C62.5921363,42.2064911 62.3755746,40.2030947 62.3755746,38.2538032 C62.3755746,30.9983493 64.9339486,24.8122481 70.0506967,19.6955001 C75.1674447,14.5787521 81.3535457,12.0203781 88.6089996,12.0203781 C96.1893671,12.0203781 102.578527,14.7818111 107.77648,20.3046771 C113.678364,19.1676221 119.228283,17.0559691 124.426236,13.9697171 C122.422839,20.1964201 118.578503,25.0153551 112.893228,28.4265201 C117.663742,27.9135883 122.434258,26.6717122 127.204893,24.70089 L128,24.3652431 Z"
									fill="currentColor"
								></path>
							</g>
						</svg>
					</span>

					<img src="/instagram.svg" alt="instagram" className="logo click" />

					<Link href="/contacto">
						<a>
							<span className="material-icons black">room</span>
						</a>
					</Link>
				</div>
			</div>

			<div className="derechos">
				<div>
					Icons from{' '}
					<a href="https://www.flaticon.com/" Target="_blanck" title="Flaticon">
						www.flaticon.com
					</a>
				</div>
				<p>Copyright©2021</p>
			</div>
		</div>
	);
}
