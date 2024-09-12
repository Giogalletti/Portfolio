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
            <img src="html5.png" alt="HTML5" />
            <img src="social.png" alt="Social" />
            <img src="js.png" alt="JavaScript" />
            <img src="React.png" alt="React" />
            <img src="java.png" alt="Java" />
            <img src="python.png" alt="Python" />
            <img src="typescript.png" alt="TypeScript" />
            <img src="C.png" alt="C" />
            <img src="git.png" alt="Git" />
            <img src="Visual_Studio_Code.png" alt="Visual Studio Code" />
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
            <img src="galeria-pc.png" alt="Galeria de Fotos" onClick={() => handleImageClick("Galeria.mp4", "Aplicação web responsiva que usa APIs para exibir imagens.")} />
            <img src="quiz.png" alt="Quiz"  onClick={() => handleImageClick("quiz.mp4", "Um jogo de perguntas e respostas sobre HTML, CSS e Javascript")} />
            <img src="clone_apple.png" alt="Clone Apple" onClick={() => handleImageClick("IPhone.mp4", "Um clone da página da Apple, replicando seu design elegante com responsividade mobile")} />
            <img src="tabuada.png" alt="Tabuada" onClick={() => handleImageClick("Tabuada.mp4", "Um aplicativo para aprender e praticar tabuadas.")} />
            <img src="gerador_qr_code.png" alt="Gerador QR Code" onClick={() => handleImageClick("GeradorQRCode.mp4", "Um gerador de QR Codes, útil para compartilhamento rápido.")} />
            <img src="Lista.png" alt="Lista de Tarefas" onClick={() => handleImageClick("ListaDeTarefas.mp4", "Um aplicativo para gerenciamento de tarefas feito com react")} />
            <img src="clone_instagram.png" alt="Clone Instagram" onClick={() => handleImageClick("instagram.mp4", "Um clone da interface do Instagram, destacando suas funcionalidades.")} />          </div>
        </div>
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
