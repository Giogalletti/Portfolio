import React, { useState } from 'react';
import './Destaque.css';

const images = [
  {
    src: 'eu1.jpeg',
    title: 'bem-vindo.png',
    description: 'Olá, eu me chamo Giovanne Galletti! Aqui, você encontrará uma seleção dos meus projetos e habilidades em desenvolvimento web. Sinta-se à vontade para explorar e entrar em contato.',
  },
  {
    src: 'eusou.png',
    title: 'eu-sou-a-lenda.png',
    description: 'Aqui você encontrará as tecnologias que eu utilizo, incluindo HTML, CSS, JavaScript, React e muito mais, continue a explorar! Estou sempre em busca de novos desafios e aprendizados.',
  },
  {
    src: 'sonho.png',
    title: 'sonho-title.png',
    description: 'Continue explorando, você irá encontrar alguns dos meus projetos, clique neles para ver o funcionamento e ler a descrição. Eles refletem um pouco do meu trabalho e aprendizado até agora.',
  },
  {
    src: 'contratar.png',
    title: 'contrate-me.png',
    description: 'Ao final deste portfólio, você encontrará meus contatos. Sinta-se à vontade para me enviar uma mensagem, esclarecer dúvidas, discutir colaborações e realizar orçamentos.',
  },
];

const Destaque = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className='destaque' 
             style={{
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundImage: `url(${images[currentImage].src})`,
             }}>
      <div className='destaque--vertical'>
        <div className='destaque-horizontal'>
          <div className='destaque-info'>
            <h2>
              <img src={images[currentImage].title} alt="Título" className='title-image' />
            </h2>
            <p>{images[currentImage].description}</p>
          </div>
        </div>
        <button className='arrow left' onClick={prevImage}>◀</button>
        <button className='arrow right' onClick={nextImage}>▶</button>
      </div>
    </section>
  );
};

export default Destaque;