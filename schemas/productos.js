import * as Yup from 'yup';

export const initialValues = {
  codigo: '',
  nombre: '',
  existencia: '',
  precio: '',
  marca: '',
  undMed: '',
  presentacion: '',
  categoria: '',
};
export const validationSchema = Yup.object().shape({
  codigo: Yup.string().required('El campo es obligatorio'),
  nombre: Yup.string().required('El campo es obligatorio'),
  existencia: Yup.number()
    .required('El campo es obligatorio')
    .positive('No se aceptan números negativos')
    .integer('La existencia deben ser números enteros'),
  precio: Yup.number()
    .required('El campo es obligatorio')
    .positive('No se aceptan números negativos'),
  marca: Yup.string().required('El campo es obligatorio'),
  undMed: Yup.string().required('El campo es obligatorio'),
  presentacion: Yup.string().required('El campo es obligatorio'),
  categoria: Yup.string().required('El campo es obligatorio'),
});
