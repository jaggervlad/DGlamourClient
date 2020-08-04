import * as Yup from 'yup';

export const initialValues = {
  cedula: '',
  nombre: '',
  mail: '',
  telefono: '',
  direccion: '',
  ciudad: '',
};
export const validationSchema = Yup.object().shape({
  cedula: Yup.string().min(1).max(10).required('Este campo es obligatorio'),
  nombre: Yup.string().required('Este campo es obligatorio'),
  mail: Yup.string()
    .email('Email no válido')
    .required('Este campo es obligatorio'),
  telefono: Yup.number().required('Este campo es obligatorio'),
  direccion: Yup.string().required('Este campo es obligatorio'),
  ciudad: Yup.string().required('Este campo es obligatorio'),
});
