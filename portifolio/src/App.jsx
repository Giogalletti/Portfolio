import React from 'react'
import './App.css'
import MovieRow from './components/MovieRow'
import Destaque from './components/destaque'
import Header from './components/Header'
const App = () => {

  return (
    <div className='page'>
      <Header />
      <Destaque />
      <section className='lists'>
        <div>
          <MovieRow />
        </div>
      </section>
      <div className="divisor"></div>
      <footer>
        <h2>Contatos</h2>
        <div className='movieRow--item--c'>
          <a href="https://wa.me/5561999095049" target="_blank" rel="noopener noreferrer">
            <img src="whatsapp.png" alt="WhatsApp" />
          </a>
          <a href="mailto:giovannegallettied@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="gmail.png" alt="Gmail" />
          </a>
          <a href="https://www.linkedin.com/in/giovanne-galletti-b5b004204/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Giogalletti" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="GitHub" />
          </a>
          <a href="https://drive.google.com/file/d/1yrFiZvItFxmuwsANjW1l66cMfxFk3eN0/view?usp=drive_link" download>
            <img src="curriculo.png" alt="Curriculo" />
          </a>
        </div>
      </footer>
    </div>
  )
}
export default App