import { FormTypesId } from './types';

type NewServiceProp = {
  list: FormTypesId;
};

function NewService({ list }: NewServiceProp) {
  const { service, login, password, url } = list;

  return (
    <section>
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
