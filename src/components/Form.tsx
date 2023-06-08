type FormProps = {
  setDisplayForm: React.Dispatch<React.SetStateAction<boolean>>
};

function Form({ setDisplayForm }: FormProps) {
  return (
    <form action="submit">
      <label>
        Nome do serviço
        <input type="text" />
      </label>
      <label>
        Login
        <input type="text" />
      </label>
      <label>
        Senha
        <input type="password" />
      </label>
      <label>
        URL
        <input type="text" />
      </label>
      <button>Cadastrar</button>
      <button type="button" onClick={ () => setDisplayForm(true) }>Cancelar</button>
    </form>
  );
}

export default Form;
