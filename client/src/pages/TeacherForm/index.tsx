import React, { useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom'
import PageHeader from '../../components/PageHeader/index';
import Input from '../../components/Input';
import './styles.css'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'
import api from '../../services/api';



function TeacherForm() {
  const history = useHistory();

  const [name, setname] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');


  const [scheduleItems, setScheduleItems] = useState([
      { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {

    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])

  }

  function handleCreateClass(e: FormEvent){
    e.preventDefault()

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule : scheduleItems
    }).then(() =>{
      alert('Cadastro realizado com sucesso')

      history.push('/')
    }).catch(()=>{
      alert('Erro no cadastro')
    })

  
  }
  function setScheduleItemsValue(positionSchedule: number, field: string, value: string){
    const updateScheduleItems = scheduleItems.map((scheduleItems, index) =>{
      if(index === positionSchedule){
        return {...scheduleItems, [field]: value}
      }

      return scheduleItems;
    });

    setScheduleItems(updateScheduleItems);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulaskdjas."
        description="O Primeiro passo é preencher este formulário de inscrição"
      />


      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input
              name="name"
              label="Nome Completo"
              value={name}
              onChange={(e) => { setname(e.target.value) }} />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value) }}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value) }}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => { setBio(e.target.value) }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a Aula</legend>
            <Select
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Física', label: 'Física' },
                { value: 'Literatura', label: 'Literatura' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Química', label: 'Química' },
                { value: 'Economia', label: 'Economia' },
                { value: 'Atualidades', label: 'Atualidades' },
              ]}
              name="subject"
              value={subject}
              label="Matéria"
              onChange={(e) => setSubject(e.target.value)}

            />
            <Input
              name="cost"
              label="Custo da sua aula por Hora"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Horários Disponíveis <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button></legend>
            {scheduleItems.map((scheduleItem, positionSchedule) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-Feiras' },
                      { value: '2', label: 'Terças-Feiras' },
                      { value: '3', label: 'Quartas-Feiras' },
                      { value: '4', label: 'Quintas-Feiras' },
                      { value: '5', label: 'Sextas-Feiras' },
                      { value: '6', label: 'Sábado' }
                    ]}
                    name="week_day"
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemsValue(positionSchedule, 'week_day', e.target.value)}
                  />
                  <Input 
                  name="from" 
                  label="Das" 
                  type="Time"
                  value={scheduleItem.from}
                  onChange={e => setScheduleItemsValue(positionSchedule, 'from', e.target.value)}
                  />
                  <Input 
                  name="to" 
                  label="As" 
                  type="Time"
                  value={scheduleItem.to}
                  onChange={e => setScheduleItemsValue(positionSchedule, 'to', e.target.value)}
                  />
                </div>
              )
            })}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
            Importante ! <br />
            Preencha todos os dados
          </p>
            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>

  );
}

export default TeacherForm;