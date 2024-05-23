// components/AssessmentForm.tsx
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import Question from './question'

const questions = [
  "What is your favorite color?",
  "Describe your last vacation.",
]

const AssessmentForm = () => {
  const router = useRouter()

  const initialValues = { name: '', email: '', answers: questions.map(() => '') }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    answers: Yup.array().of(Yup.string().required('Answer is required'))
  })

  const onSubmit = (values: any) => {
    console.log(values)
    router.push('/results')
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        {questions.map((question, index) => (
          <Question key={index} question={question} index={index} />
        ))}

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default AssessmentForm
