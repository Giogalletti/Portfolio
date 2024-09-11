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
        <p>WhatsApp: <a href="https://wa.me/5561999095049" target="_blank">+55 61 99909-5049</a></p>
        <p>E-mail: <a href="mailto:giovannegalletti@gmail.com" target="_blank">giovannegallettied@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/giovanne-galletti-b5b004204/" target="_blank">giovanne-galletti</a></p>
        <p>GitHub: <a href="https://github.com/Giogalletti" target="_blank">Giogalletti</a></p>
        <p>Curriculo: <a href="https://drive.google.com/file/d/1yrFiZvItFxmuwsANjW1l66cMfxFk3eN0/view?usp=drive_link" download>Download</a></p>
      </footer>
    </div>
  )
}
export default App