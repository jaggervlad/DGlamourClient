import * as Yup from 'yup';

export const initialValues = {
  nombre: '',
};
export const validationSchema = Yup.object().shape({
  nombre: Yup.string().required('El campo es obligatorio'),
});
