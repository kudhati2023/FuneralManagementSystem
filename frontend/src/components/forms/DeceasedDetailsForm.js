import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Grid, Button, MenuItem } from '@mui/material';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  age: Yup.number().required('Age is required').positive('Age must be positive'),
  gender: Yup.string().required('Gender is required'),
  causeOfDeath: Yup.string().required('Cause of death is required'),
  dateOfDeath: Yup.date().required('Date of death is required'),
});

const DeceasedDetailsForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    age: '',
    gender: '',
    causeOfDeath: '',
    dateOfDeath: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="name"
                label="Full Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="age"
                label="Age"
                type="number"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.age && Boolean(errors.age)}
                helperText={touched.age && errors.age}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                select
                name="gender"
                label="Gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.gender && Boolean(errors.gender)}
                helperText={touched.gender && errors.gender}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="causeOfDeath"
                label="Cause of Death"
                multiline
                rows={3}
                value={values.causeOfDeath}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.causeOfDeath && Boolean(errors.causeOfDeath)}
                helperText={touched.causeOfDeath && errors.causeOfDeath}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="dateOfDeath"
                label="Date of Death"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={values.dateOfDeath}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.dateOfDeath && Boolean(errors.dateOfDeath)}
                helperText={touched.dateOfDeath && errors.dateOfDeath}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default DeceasedDetailsForm;