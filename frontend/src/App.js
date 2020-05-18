import React from 'react';

import './App.css'
import './global.css';
import './Sidebar.css';
import './Main.css'

function App() {
  return (
    <div className="app">
      <aside>
        <strong>Cadastar</strong>
        <form>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do GitHub</label>
          <input name="github_username" id="username_github" required/>
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required/>
        </div>

        <div className="input-block">

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
      </aside>
     
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/64540367?s=460&u=b24e641144501c2d733f23450d8a34a6e238ba35&v=4" alt="Gabriel Cancio"/>
              <div className="user-info">
                <strong>Gabriel Cancio</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
              <p>Apaixonado por programação e pelo mundo da tecnologia. Fascinado em aprender coisas novas.</p>
              <a href="https://github.com/gabrielcancio">Acessar perfil no GitHub</a>
            
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/64540367?s=460&u=b24e641144501c2d733f23450d8a34a6e238ba35&v=4" alt="Gabriel Cancio"/>
              <div className="user-info">
                <strong>Gabriel Cancio</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
              <p>Apaixonado por programação e pelo mundo da tecnologia. Fascinado em aprender coisas novas.</p>
              <a href="https://github.com/gabrielcancio">Acessar perfil no GitHub</a>
            
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/64540367?s=460&u=b24e641144501c2d733f23450d8a34a6e238ba35&v=4" alt="Gabriel Cancio"/>
              <div className="user-info">
                <strong>Gabriel Cancio</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
              <p>Apaixonado por programação e pelo mundo da tecnologia. Fascinado em aprender coisas novas.</p>
              <a href="https://github.com/gabrielcancio">Acessar perfil no GitHub</a>
            
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/64540367?s=460&u=b24e641144501c2d733f23450d8a34a6e238ba35&v=4" alt="Gabriel Cancio"/>
              <div className="user-info">
                <strong>Gabriel Cancio</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
              <p>Apaixonado por programação e pelo mundo da tecnologia. Fascinado em aprender coisas novas.</p>
              <a href="https://github.com/gabrielcancio">Acessar perfil no GitHub</a>
            
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;