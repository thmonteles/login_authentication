import React, { useState } from 'react';
import './App.css'
import profile from './img/undraw_profile_pic_re_iwgo.svg'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Nome:', nome)
    console.log('Email:', email);
    console.log('Password:', password);
  };
  
  return (
    <div class="container">
      <div class="componentes">
        <h2 class="h-1">Welcome to the System</h2>
        <div class="img">
      <img src={profile} alt="Descrição da imagem" />
    </div>
        <p class="p-1">User login</p>
      </div>
        
        <form onSubmit={handleSubmit}>
        <div class="infos">
            <div class="item">
                <label for="">Name</label>
                <input type="text" value={nome} onChange={handleNomeChange} placeholder='Nome do usuário'/>
            </div>
            <div class="item">
                <label for="">Email</label>
                <input type="email" value={email} onChange={handleEmailChange} placeholder='Digite seu email'/>
            </div>
            <div class="item">
                <label for="">Password</label>
                <input type="password" value={password} onChange={handlePasswordChange} placeholder='your password'/>
            </div>
        </div>
        <div class="button">
          <button class="submit" type="submit">Login</button>
        </div>
        </form>
    </div>
  )
}
export default App;