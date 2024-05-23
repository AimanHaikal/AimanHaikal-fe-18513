// src/app/components/assessmentForm.tsx
"use client";

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Question from './question';

interface AssessmentFormProps {
  data: any; // Modify this type according to the expected shape of the data
}

const AssessmentForm: React.FC<AssessmentFormProps> = ({ data }) => {
  const router = useRouter();
  const initialValues = { name: '', email: '', answers: ['', ''] };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    answers: Yup.array().of(Yup.string().required('Answer is required'))
  });

  const onSubmit = (values: { name: string, email: string, answers: string[] }) => {
    console.log(values);
    localStorage.setItem('assessmentResults', JSON.stringify(values));
    router.push('/results');
  };

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

        <Question question="What is your favorite color?" index={0} />
        <Question question="Describe your last vacation." index={1} />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AssessmentForm;
