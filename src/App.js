import React, { useState } from 'react';
import Form from "./Form";
import Team from "./Team";


const initialForm =  { name : "", email : "", role : "" };


function App() 
{
  const [ counter, setCounter ] = useState( 0 );
  const [ team, setTeam       ] = useState( [] );
  const [ form, setForm       ] = useState( initialForm );


  const change = e => setForm( { ...form, [ e.target.name ] : e.target.value } );

  const submit = e2 => 
  {
    e2.preventDefault();

    if( !form.name.trim() || !form.email.trim() || !form.role.trim() ) return;

    setCounter( counter + 1 );
    setTeam( [ ...team, { ...form, id : counter } ] );
    setForm( initialForm );
  }

  return (
    <>
      <Form 
        name = { form.name }
        email = { form.email }
        role = { form.role }
        change = { change }
        submit = { submit } 
      />

      {
        team.map( m => <Team key={ m.id } info = { m }/> )
      }
    </>
  );
}

export default App;
