import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import { INICIAL_STATES, FormTypes } from './components/types';

function App() {
  const [displayForm, setDisplayForm] = useState(true);
  const [passwordArray, setpasswordArray] = useState<FormTypes[]>([INICIAL_STATES]);

  function handleClick() {
    setDisplayForm(false);
  }

  function handlePassword(prop: FormTypes) {
    setpasswordArray([...passwordArray, prop]);
  }

  return (
    <main>
      <Title />
      {
        displayForm
          ? (<button onClick={ handleClick }>Cadastrar nova senha</button>)
          : (<Form setDisplayForm={ setDisplayForm } submit={ handlePassword } />)
      }
    </main>
  );
}

export default App;
