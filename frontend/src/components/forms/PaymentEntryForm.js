import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Grid, Button, MenuItem } from '@mui/material';

const validationSchema = Yup.object({
  payment_number: Yup.string().required('Payment number is required'),
  deceased_id: Yup.number().required('Deceased record is required'),
  payment_type: Yup.string().required('Payment type is required'),
  amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
  payment_method: Yup.string().required('Payment method is required'),
  paid_by: Yup.string().required('Payer name is required'),
});

const PaymentEntryForm = ({ onSubmit }) => {
  const initialValues = {
    payment_number: '',
    deceased_id: '',
    payment_type: '',
    amount: '',
    payment_method: '',
    paid_by: '',
    status: 'pending',
  };

  const paymentTypes = [
    { value: 'BURIAL', label: 'Burial Service' },
    { value: 'PLOT', label: 'Plot Purchase' },
    { value: 'MORTUARY', label: 'Mortuary Services' },
    { value: 'TRANSPORT', label: 'Transport Services' },
  ];

  const paymentMethods = [
    { value: 'CASH', label: 'Cash' },
    { value: 'CARD', label: 'Credit/Debit Card' },
    { value: 'TRANSFER', label: 'Bank Transfer' },
    { value: 'MOBILE', label: 'Mobile Money' },
  ];

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
                name="payment_number"
                label="Payment Number"
                value={values.payment_number}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.payment_number && Boolean(errors.payment_number)}
                helperText={touched.payment_number && errors.payment_number}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                name="payment_type"
                label="Payment Type"
                value={values.payment_type}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.payment_type && Boolean(errors.payment_type)}
                helperText={touched.payment_type && errors.payment_type}
              >
                {paymentTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="amount"
                label="Amount"
                type="number"
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.amount && Boolean(errors.amount)}
                helperText={touched.amount && errors.amount}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                name="payment_method"
                label="Payment Method"
                value={values.payment_method}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.payment_method && Boolean(errors.payment_method)}
                helperText={touched.payment_method && errors.payment_method}
              >
                {paymentMethods.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="paid_by"
                label="Paid By"
                value={values.paid_by}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.paid_by && Boolean(errors.paid_by)}
                helperText={touched.paid_by && errors.paid_by}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit Payment
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentEntryForm;