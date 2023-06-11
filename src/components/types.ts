export type FormTypes = {
  service: string;
  login: string;
  password: string;
  url: string;
};
export type FormTypesId = FormTypes & { id: number | string };
export const INICIAL_STATES = {
  service: '',
  login: '',
  password: '',
  url: '',
};

export default FormTypes;
