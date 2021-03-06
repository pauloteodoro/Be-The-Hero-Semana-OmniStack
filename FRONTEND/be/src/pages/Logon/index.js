import React,{useState} from 'react';
import  './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import {Link,useHistory} from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api'

export default function Logon() {

  const [id,setid]= useState('')
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    try{

      const response = await api.post('sessions',{id})
      localStorage.setItem('ongId',id)
      localStorage.setItem('ongNome',response.data.nome)
      history.push('/profile')

    }catch(err){
      alert('Falha no login tente novamente')
    }

  }

  return (
      <div className="logon-container">
          <section className="form">
            <img src={logoImg} alt="Be The Hero"/>
            <form onSubmit={handleLogin}> 
                <h1>faça seu logon</h1>
                <input 
                  placeholder="id"
                  value={id}
                  onChange = {e => setid(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E03041" />
                    Não tenho cadastro
                </Link>

            </form>
          </section>
          <img src={heroesImg} alt="Heroes"/>
      </div>
    
  );
}
