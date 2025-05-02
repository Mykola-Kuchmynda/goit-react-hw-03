import { Formik, Form, Field } from 'formik';
export default function SearchBox({ filterValue, onFilterChange }) {
  return (
    <Formik
      initialValues={{ search: filterValue }}
      enableReinitialize
      onSubmit={() => {}}
    >
      {({ values }) => (
        <Form>
          <label>
            Find contacts by name:{' '}
            <Field
              type="text"
              name="search"
              value={values.search}
              onChange={(e) => onFilterChange(e.target.value)}
            />
          </label>
        </Form>
      )}
    </Formik>
  );
}
