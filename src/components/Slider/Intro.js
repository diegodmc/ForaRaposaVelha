import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './css/slider-animations.css';
import './css/styles.css';
import './css/normalize.css'

function Intro() {
				return (
						<div>
							<Slider className="slider-wrapper" autoplay={4000}>
								<div className="slider-content" style={{ background: `#3F51B1 no-repeat center center` }}>
									<div className="inner">
										<h1>Vai ou Racha<br />
											<span style={{ color: '#3F51B1' }}>#ForaRaposaVelha</span>
										</h1>
										<p style={{ color: '#c8c8c8', fontWeight: 'bold' }}>Juntos podemos fazer um novo Cruzeiro.</p>
										<div to="../ComoFunciona">
											<button style={{ backgroundColor: '#F49B00', color: 'white', "&:hover": { backgroundColor: "#F49B00", color: 'white', } }}> Como Funciona</button>
										</div>
									</div>
									<section>
										<span>
											<strong style={{ color: '#c8c8c8' }}>Feito para os verdadeiros cruzeirenses!</strong>
										</span>
									</section>
								</div>
								
								<div className="slider-content" style={{ background: `radial-gradient(circle at 30% -300%,#3F51B1 100%,transparent 90.5%) no-repeat center center` }}>
									<div className="inner">
										<h1>O que exigimos? <br />
											<span style={{ color: '#FFC709' }}>#listaExigencia!</span>
										</h1>
										<p style={{ color: '#c8c8c8', fontWeight: 'bold' }}>Movimento de Reconstrução do Cruzeiro!</p>
										<div to="../ComoFunciona">
											<button style={{ backgroundColor: '#FFC709', color: 'white', "&:hover": { backgroundColor: "#FFC709", color: 'white' }}}> Acesse agora!</button>
										</div>
									</div>
									<section>
										<span>
											<strong style={{ color: '#c8c8c8' }}>Queremos a extinção dos conselheiros!</strong>
										</span>
									</section>
								</div >
								
								<div className="slider-content" style={{ background: `radial-gradient(circle at 50% -300%,#3F51B1 100%,transparent 90.5%) no-repeat center center` }}>
									<div className="inner">
										<h1 style={{ color: 'white', fontWeight: 'bold' }}>Como faremos?</h1>
										<p style={{ color: '#c8c8c8', fontWeight: 'bold' }}>União dos torcedores e controlando a receita do cruzeiro</p>
										<div to="../Home/Graph">
											<button style={{ backgroundColor: '#ff0000', color: 'white', "&:hover": { backgroundColor: "white", color: '#ff0000'}}}> Saiba Mais</button>
										</div>
									</div>
									<section>
										<span>
											<strong style={{ color: '#c8c8c8' }}>Sócio: Inadinplência/cancelamento/continuidade!</strong>
											<strong style={{ color: '#c8c8c8' }}>Não Sócio: Aderir o sócio, nao comprar produtos e acompanhar noticias nas midias!</strong>
										</span>
									</section>
								</div>				
							</Slider >
						</div>
					);
 }
 export default Intro;
