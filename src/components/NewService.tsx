import { FormTypesId } from './types';

type NewServiceProp = {
  list: FormTypesId;
  handleDelete: ((id: string | number) => void)
};

function NewService({ list, handleDelete }: NewServiceProp) {
  const { service, login, password, url, id } = list;

  return (
    <section className="service">
      <div className="right">
        <div className="delete">
          <button data-testid="remove-btn" onClick={ () => handleDelete(id) }>x</button>
        </div>
      </div>
      <a href={ url }>
        { service }
      </a>
      <p>
        Login:
        {' '}
        { login }
      </p>
      <p>
        Senha:
        {' '}
        { password }
      </p>
    </section>

  );
}

export default NewService;
