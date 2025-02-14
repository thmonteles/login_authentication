import React, { useState } from 'react';
import './App.css';
import profile from './img/undraw_profile_pic_re_iwgo.svg';
import axios from 'axios';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', {
        nome,
        email,
        password,
      });
  
      alert(response.data.message);
    } catch (error) {
      console.error('Erro ao enviar a requisição:', error);
    }

  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} >
       <div className="img">
         <img src={profile} alt="Descrição da imagem" />
       </div>
       <p className="p-1">Login</p>
   
        <div className="infos">
          <div className="item">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={handleNomeChange}
              placeholder="Nome do usuário" required
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Digite seu email"
            />
          </div>
          <div className="item">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="your password" required
            />
          </div>
        </div>
        <div className="button">
          <button className="submit" type="submit">
            Entrar
          </button>
          <p className="or">ou</p>
          <button className="submit2" type="submit">
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
