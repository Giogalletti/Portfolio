import React, { useState, useRef } from 'react';
import './MovieRow.css';

const MovieRow = () => {
  const [modalData, setModalData] = useState({ isOpen: false, src: '', description: '' });
  const techListRef = useRef(null);
  const projListRef = useRef(null);

  const handleImageClick = (src, description) => {
    setModalData({ isOpen: true, src, description, isVideo: true  });
  };

  const handleCloseModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='movieRow'>
      <div className='movieRow--left--t'>
        <button onClick={() => scrollLeft(techListRef)}>◀</button>
      </div>
      <div className='movieRow--right--t'>
        <button onClick={() => scrollRight(techListRef)}>▶</button>
      </div>
      <div className='movieRow--listarea'>
        <div className='movieRow--list'>
          <h2>Tecnologias</h2>
          <div className='movieRow--item--t' ref={techListRef}>
            <img src="/public/html5.png" alt="HTML5" />
            <img src="/public/social.png" alt="Social" />
            <img src="/public/js.png" alt="JavaScript" />
            <img src="/public/react.png" alt="React" />
            <img src="/public/java.png" alt="Java" />
            <img src="/public/python.png" alt="Python" />
            <img src="/public/typescript.png" alt="TypeScript" />
            <img src="/public/C.png" alt="C" />
            <img src="/public/git.png" alt="Git" />
            <img src="/public/Visual_Studio_Code.png" alt="Visual Studio Code" />
          </div>
        </div>
      </div>
      <div className='movieRow--left--p'>
        <button onClick={() => scrollLeft(projListRef)}>◀</button>
      </div>
      <div className='movieRow--right--p'>
        <button onClick={() => scrollRight(projListRef)}>▶</button>
      </div>
      <div className='movieRow--listarea'>
        <div className='movieRow--list'>
          <h2>Projetos</h2>
          <div className='movieRow--item--p' ref={projListRef}>
            <img src="/public/Galeria.png" alt="Galeria de Fotos" onClick={() => handleImageClick("/public/Galeria.mp4", "Aplicação web responsiva que usa APIs para exibir imagens.")} />
            <img src="/public/clone_apple.png" alt="Clone Apple" onClick={() => handleImageClick("/public/IPhone.mp4", "Um clone da página da Apple, replicando seu design elegante com responsividade mobile")} />
            <img src="/public/tabuada.png" alt="Tabuada" onClick={() => handleImageClick("/public/Tabuada.mp4", "Um aplicativo para aprender e praticar tabuadas.")} />
            <img src="/public/gerador_qr_code.png" alt="Gerador QR Code" onClick={() => handleImageClick("/public/GeradorQRCode.mp4", "Um gerador de QR Codes, útil para compartilhamento rápido.")} />
            <img src="/public/clone_instagram.png" alt="Clone Instagram" onClick={() => handleImageClick("/public/clone_instagram.png", "Um clone da interface do Instagram, destacando suas funcionalidades.")} />
            <img src="/public/site_venda_de_carros.png" alt="Site de Venda de Carros" onClick={() => handleImageClick("/public/site_venda_de_carros.png", "Um site para a venda de carros usados, com recursos simples.")} />
            <img src="/public/black.png" alt="Tabuada" onClick={() => handleImageClick("/public/tabuada.png", "Um aplicativo para aprender e praticar tabuadas.")} />
            <img src="/public/black.png" alt="Tabuada" onClick={() => handleImageClick("/public/tabuada.png", "Um aplicativo para aprender e praticar tabuadas.")} />
            <img src="/public/black.png" alt="Tabuada" onClick={() => handleImageClick("/public/tabuada.png", "Um aplicativo para aprender e praticar tabuadas.")} />
            <img src="/public/black.png" alt="Tabuada" onClick={() => handleImageClick("/public/tabuada.png", "Um aplicativo para aprender e praticar tabuadas.")} />
          </div>
        </div>
      </div>
      <h2>Contatos</h2>
      <div className='movieRow--item--c'>
        <a href="https://wa.me/5561999095049" target="_blank" rel="noopener noreferrer">
          <img src="/public/whatsapp.png" alt="WhatsApp" />
        </a>
        <a href="mailto:giovannegallettied@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="/public/gmail.png" alt="Gmail" />
        </a>
        <a href="https://www.linkedin.com/in/giovanne-galletti-b5b004204/" target="_blank" rel="noopener noreferrer">
          <img src="/public/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Giogalletti" target="_blank" rel="noopener noreferrer">
          <img src="/public/github.png" alt="GitHub" />
        </a>
      </div>

      {modalData.isOpen && (
    <div 
      className={`modal ${modalData.isOpen ? 'modal-active' : ''}`} 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleCloseModal();
        }
      }}
    >
      <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>&times;</span>
        {modalData.isVideo ? (
            <video controls>
                <source src={modalData.src} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
        ) : (
            <img src={modalData.src} alt={modalData.description} />
        )}
        <p>{modalData.description}</p>
      </div>
    </div>
)}

    </div>
  );
}

export default MovieRow;
