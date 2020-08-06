import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import'./styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/48107780?s=400&u=1ad162dddef2d125224a6ab0b63d06174e8cce53&v=4" alt="Lucas Ricardo"/>
        <div>
          <strong>Lucas Ricardo</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt 
        <br/> <br/>
        repudiandae, accusantium architecto, voluptate corporis obcaecati 
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button" >
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;