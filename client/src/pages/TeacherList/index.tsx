import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';

import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {

  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

 async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
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
            onChange={e => { setSubject(e.target.value) }}
            label="Matéria" />
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
            value={week_day}
            onChange={e => { setWeekDay(e.target.value) }}
            label="Dia da Semana" />

          <Input
            type="time"
            name="time"
            label="Horário"
            value={time}
            onChange={e => {
              setTime(e.target.value)
            }}
          />

          <button type="submit">
            delicia
        </button>

        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) =>{
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div >
  );
}

export default TeacherList;