import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import { FormTypesId, FormTypes } from './components/types';
import NewService from './components/NewService';

function App() {
  const [displayForm, setDisplayForm] = useState(true);
  const [passwordArray, setpasswordArray] = useState<FormTypesId[]>([]);

  function handleClick() {
    setDisplayForm(false);
  }

  function handlePassword(form: FormTypes) {
    const passwordId = { ...form, id: Date.now() };

    setpasswordArray([...passwordArray, passwordId]);
  }

  return (
    <main>
      <Title />
      {
        displayForm
          ? (<button onClick={ handleClick }>Cadastrar nova senha</button>)
          : (<Form
              setDisplayForm={ setDisplayForm }
              handleSubmit={ (form) => handlePassword(form) }
          />)
      }
      {
        passwordArray.length === 0
          ? (<div>Nenhuma senha cadastrada</div>)
          : (passwordArray.map(
            (password) => <NewService key={ password.id } list={ password } />,
          ))
      }
    </main>
  );
}

export default App;
