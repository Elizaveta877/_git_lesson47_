import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Form.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Це поле є обовʼязкове")
    .min(2, "Мінімум 2 символи"),
  email: Yup.string()
    .email("Невірний формат email")
    .required("Це поле є обовʼязкове"),
  password: Yup.string()
    .min(6, "Мінімум 6 символів")
    .required("Це поле є обовʼязкове"),
});

const FormComponent = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className="page">
      <div className="form-card">
        <h2 className="form-title">Реєстрація</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="form">
            <div className="field">
              <label className="label">Імʼя</label>
              <Field className="input" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="field">
              <label className="label">Email</label>
              <Field className="input" name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="field">
              <label className="label">Пароль</label>
              <Field className="input" name="password" type="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button className="btn" type="submit">
              Відправити
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormComponent;