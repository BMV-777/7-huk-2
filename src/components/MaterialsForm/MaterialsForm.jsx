import { Formik, Form, Field } from 'formik';

export const MaterialForm = ({ onSubmit }) => {
  const handelSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handelSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Описание <Field name="title" />
          </label>
          <br />
          <label>
            Ссылка <Field name="link" type="text" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Добавить
          </button>
        </Form>
      )}
    </Formik>
  );
};
