import { Paper, Typography, Box, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const Template1 = ({ data }) => {
  if (!data) return null;

  const { personalInfo, education, experience, skills } = data;

  return (
    <Paper 
      elevation={0}
      sx={{
        width: '210mm',
        minHeight: '297mm',
        padding: '20mm',
        margin: '0 auto',
        backgroundColor: '#fff',
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          {personalInfo.firstName} {personalInfo.lastName}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {personalInfo.email} | {personalInfo.phone}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {personalInfo.address}
        </Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Professional Summary */}
      <Section>
        <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
          Professional Summary
        </Typography>
        <Typography variant="body1">
          {personalInfo.summary}
        </Typography>
      </Section>

      {/* Experience */}
      <Section>
        <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
          Professional Experience
        </Typography>
        {experience.map((exp, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {exp.position}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {exp.company} | {exp.duration}
            </Typography>
            <Typography variant="body2">
              {exp.description}
            </Typography>
          </Box>
        ))}
      </Section>

      {/* Education */}
      <Section>
        <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
          Education
        </Typography>
        {education.map((edu, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {edu.degree}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {edu.institution} | {edu.year}
            </Typography>
          </Box>
        ))}
      </Section>

      {/* Skills */}
      <Section>
        <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
          Skills
        </Typography>
        <Grid container spacing={1}>
          {skills.map((skill, index) => (
            <Grid item key={index}>
              <Typography variant="body2">• {skill}</Typography>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Paper>
  );
};

export default Template1; 