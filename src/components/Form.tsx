import { useState } from 'react';

type FormProps = {
  setDisplayForm: React.Dispatch<React.SetStateAction<boolean>>
};

function Form({ setDisplayForm }: FormProps) {
  const INICIAL_STATES = {
    service: '',
    login: '',
    password: '',
    url: '',
  };

  const [form, setForm] = useState(INICIAL_STATES);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function validateForm() {
    const validService = form.service.length > 0;
    const validLogin = form.login.length > 0;
    const regex = /^(?=.*[a-zA-Z0-9])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z0-9\d@$!%*?&]{8,16}$/;
    const validPassword = regex.test(form.password);
    return validService && validLogin && validPassword;
  }

  return (
    <form action="submit">
      <label>
        Nome do serviço
        <input
          type="text"
          name="service"
          value={ form.service }
          onChange={ handleChange }
        />
      </label>
      <label>
        Login
        <input
          type="text"
          name="login"
          value={ form.login }
          onChange={ handleChange }
        />
      </label>
      <label>
        Senha
        <input
          type="password"
          name="password"
          value={ form.password }
          onChange={ handleChange }
        />
      </label>
      <label>
        URL
        <input type="text" name="url" />
      </label>
      <button type="submit" disabled={ !validateForm() }>Cadastrar</button>
      <button type="button" onClick={ () => setDisplayForm(true) }>Cancelar</button>
    </form>
  );
}

export default Form;
