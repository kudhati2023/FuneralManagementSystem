import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Grid, Button, MenuItem } from '@mui/material';

const validationSchema = Yup.object({
  order_number: Yup.string().required('Order number is required'),
  deceased_id: Yup.number().required('Deceased record is required'),
  funeral_date: Yup.date().required('Funeral date is required'),
  service_type: Yup.string().required('Service type is required'),
  funeral_location: Yup.string().required('Funeral location is required'),
  additional_services: Yup.string(),
  status: Yup.string().required('Status is required'),
});

const BurialOrderForm = ({ onSubmit }) => {
  const initialValues = {
    order_number: '',
    deceased_id: '',
    funeral_date: '',
    service_type: '',
    funeral_location: '',
    additional_services: '',
    status: 'pending',
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
                name="order_number"
                label="Order Number"
                value={values.order_number}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.order_number && Boolean(errors.order_number)}
                helperText={touched.order_number && errors.order_number}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="funeral_date"
                label="Funeral Date"
                type="datetime-local"
                InputLabelProps={{ shrink: true }}
                value={values.funeral_date}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.funeral_date && Boolean(errors.funeral_date)}
                helperText={touched.funeral_date && errors.funeral_date}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                name="service_type"
                label="Service Type"
                value={values.service_type}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.service_type && Boolean(errors.service_type)}
                helperText={touched.service_type && errors.service_type}
              >
                <MenuItem value="standard">Standard</MenuItem>
                <MenuItem value="premium">Premium</MenuItem>
                <MenuItem value="custom">Custom</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="funeral_location"
                label="Funeral Location"
                value={values.funeral_location}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.funeral_location && Boolean(errors.funeral_location)}
                helperText={touched.funeral_location && errors.funeral_location}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                name="additional_services"
                label="Additional Services"
                value={values.additional_services}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.additional_services && Boolean(errors.additional_services)}
                helperText={touched.additional_services && errors.additional_services}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit Burial Order
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

