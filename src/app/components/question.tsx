// components/Question.tsx
import { Field, ErrorMessage } from 'formik'

const Question = ({ question, index }: { question: string, index: number }) => (
  <div className="form-group">
    <label htmlFor={`answers.${index}`}>{question}</label>
    <Field name={`answers.${index}`} as="textarea" />
    <ErrorMessage name={`answers.${index}`} component="div" className="error" />
  </div>
)

export default Question
