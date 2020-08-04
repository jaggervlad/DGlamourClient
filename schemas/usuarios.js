import * as Yup from 'yup';

export const initialValues = {
  nombre: '',
  username: '',
  password: '',
  rol: '',
};

export const validationSchema = Yup.object().shape({
  nombre: Yup.string().required('Este campo es obligatorio'),
  username: Yup.string().required('Este campo es obligatorio'),
  password: Yup.string().required('Este campo es obligatorio'),
  rol: Yup.string().required('Este campo es obligatorio'),
});

export const loginValues = { username: '', password: '' };

export const validationSchemaLogin = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Minimo 3 caracteres')
    .max(20, 'Maximo 20 caracteres')
    .required('El nombre de usuario es obligatorio'),
  password: Yup.string()
    .min(3, 'Minimo 3 caracteres')
    .max(20, 'Maximo 20 caracteres')
    .required('La contraseña es obligatoria'),
});
