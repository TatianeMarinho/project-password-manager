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

  const handlePassword = (event: React.FormEvent<HTMLFormElement>, form: FormTypes) => {
    event.preventDefault();
    const passwordId = { ...form, id: Date.now() };

    setpasswordArray([...passwordArray, { ...passwordId }]);

    setDisplayForm(true);
  };

  const handleDeleteService = (id: string | number) => {
    const filterPassword = passwordArray.filter((password) => password.id !== id);
    setpasswordArray(filterPassword);
  };

  return (
    <main>
      <Title />
      {
        displayForm
          ? (<button onClick={ handleClick }>Cadastrar nova senha</button>)
          : (<Form
              setDisplayForm={ setDisplayForm }
              handleForm={ handlePassword }
          />)
      }
      <div className="list-service">
        {
          passwordArray.length === 0
            ? (<div>Nenhuma senha cadastrada</div>)
            : (passwordArray.map(
              (password) => (<NewService
                key={ password.id }
                list={ password }
                handleDelete={ handleDeleteService }
              />),
            ))
        }
      </div>
    </main>
  );
}

export default App;
