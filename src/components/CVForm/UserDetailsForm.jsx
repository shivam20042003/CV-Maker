import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Box,
  IconButton,
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

const validationSchema = Yup.object().shape({
  personalInfo: Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    summary: Yup.string().required('Required'),
  }),
  education: Yup.array().of(
    Yup.object().shape({
      institution: Yup.string().required('Required'),
      degree: Yup.string().required('Required'),
      year: Yup.string().required('Required'),
    })
  ),
  experience: Yup.array().of(
    Yup.object().shape({
      company: Yup.string().required('Required'),
      position: Yup.string().required('Required'),
      duration: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
    })
  ),
  skills: Yup.array().of(Yup.string().required('Required')),
});

const initialValues = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
  },
  education: [
    {
      institution: '',
      degree: '',
      year: '',
    },
  ],
  experience: [
    {
      company: '',
      position: '',
      duration: '',
      description: '',
    },
  ],
  skills: [''],
};

const UserDetailsForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
        <Form>
          {/* Personal Information */}
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  name="personalInfo.firstName"
                  as={TextField}
                  fullWidth
                  label="First Name"
                  error={touched?.personalInfo?.firstName && errors?.personalInfo?.firstName}
                  helperText={touched?.personalInfo?.firstName && errors?.personalInfo?.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="personalInfo.lastName"
                  as={TextField}
                  fullWidth
                  label="Last Name"
                  error={touched?.personalInfo?.lastName && errors?.personalInfo?.lastName}
                  helperText={touched?.personalInfo?.lastName && errors?.personalInfo?.lastName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="personalInfo.email"
                  as={TextField}
                  fullWidth
                  label="Email"
                  error={touched?.personalInfo?.email && errors?.personalInfo?.email}
                  helperText={touched?.personalInfo?.email && errors?.personalInfo?.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="personalInfo.phone"
                  as={TextField}
                  fullWidth
                  label="Phone"
                  error={touched?.personalInfo?.phone && errors?.personalInfo?.phone}
                  helperText={touched?.personalInfo?.phone && errors?.personalInfo?.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="personalInfo.address"
                  as={TextField}
                  fullWidth
                  label="Address"
                  error={touched?.personalInfo?.address && errors?.personalInfo?.address}
                  helperText={touched?.personalInfo?.address && errors?.personalInfo?.address}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="personalInfo.summary"
                  as={TextField}
                  fullWidth
                  multiline
                  rows={4}
                  label="Professional Summary"
                  error={touched?.personalInfo?.summary && errors?.personalInfo?.summary}
                  helperText={touched?.personalInfo?.summary && errors?.personalInfo?.summary}
                />
              </Grid>
            </Grid>
          </Paper>

          {/* Education */}
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Education
            </Typography>
            <FieldArray name="education">
              {({ push, remove }) => (
                <div>
                  {values.education.map((_, index) => (
                    <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          name={`education.${index}.institution`}
                          as={TextField}
                          fullWidth
                          label="Institution"
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Field
                          name={`education.${index}.degree`}
                          as={TextField}
                          fullWidth
                          label="Degree"
                        />
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <Field
                          name={`education.${index}.year`}
                          as={TextField}
                          fullWidth
                          label="Year"
                        />
                      </Grid>
                      <Grid item xs={12} sm={1}>
                        <IconButton
                          onClick={() => remove(index)}
                          disabled={values.education.length === 1}
                        >
                          <RemoveIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  ))}
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() => push({ institution: '', degree: '', year: '' })}
                    startIcon={<AddIcon />}
                  >
                    Add Education
                  </Button>
                </div>
              )}
            </FieldArray>
          </Paper>

          {/* Experience */}
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Professional Experience
            </Typography>
            <FieldArray name="experience">
              {({ push, remove }) => (
                <div>
                  {values.experience.map((_, index) => (
                    <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          name={`experience.${index}.company`}
                          as={TextField}
                          fullWidth
                          label="Company"
                        />
                      </Grid>
                      <Grid item xs={12} sm={5}>
                        <Field
                          name={`experience.${index}.position`}
                          as={TextField}
                          fullWidth
                          label="Position"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          name={`experience.${index}.duration`}
                          as={TextField}
                          fullWidth
                          label="Duration"
                        />
                      </Grid>
                      <Grid item xs={12} sm={5}>
                        <Field
                          name={`experience.${index}.description`}
                          as={TextField}
                          fullWidth
                          multiline
                          rows={2}
                          label="Description"
                        />
                      </Grid>
                      <Grid item xs={12} sm={1}>
                        <IconButton
                          onClick={() => remove(index)}
                          disabled={values.experience.length === 1}
                        >
                          <RemoveIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  ))}
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() =>
                      push({
                        company: '',
                        position: '',
                        duration: '',
                        description: '',
                      })
                    }
                    startIcon={<AddIcon />}
                  >
                    Add Experience
                  </Button>
                </div>
              )}
            </FieldArray>
          </Paper>

          {/* Skills */}
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <FieldArray name="skills">
              {({ push, remove }) => (
                <div>
                  {values.skills.map((_, index) => (
                    <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                      <Grid item xs={11}>
                        <Field
                          name={`skills.${index}`}
                          as={TextField}
                          fullWidth
                          label="Skill"
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <IconButton
                          onClick={() => remove(index)}
                          disabled={values.skills.length === 1}
                        >
                          <RemoveIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  ))}
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() => push('')}
                    startIcon={<AddIcon />}
                  >
                    Add Skill
                  </Button>
                </div>
              )}
            </FieldArray>
          </Paper>

          <Box sx={{ mt: 3, mb: 2 }}>
            <Button type="submit" variant="contained" color="primary" size="large">
              Generate CV
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default UserDetailsForm; 