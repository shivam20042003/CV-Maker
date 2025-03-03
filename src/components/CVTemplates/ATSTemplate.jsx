import { Paper, Typography, Box, Divider } from '@mui/material';

const ATSTemplate = ({ data }) => {
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
        fontFamily: 'Arial, sans-serif',
        '@media print': {
          margin: 0,
          padding: '20mm',
          width: '210mm',
          height: '297mm',
          breakAfter: 'avoid',
          breakBefore: 'avoid',
        }
      }}
    >
      {/* Header - Simple text format for better ATS parsing */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          {personalInfo.firstName} {personalInfo.lastName}
        </Typography>
        <Typography variant="body1" paragraph>
          Email: {personalInfo.email}
        </Typography>
        <Typography variant="body1" paragraph>
          Phone: {personalInfo.phone}
        </Typography>
        <Typography variant="body1" paragraph>
          Address: {personalInfo.address}
        </Typography>
      </Box>

      {/* Professional Summary - Using standard heading */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          PROFESSIONAL SUMMARY
        </Typography>
        <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
          {personalInfo.summary}
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Work Experience - Using standard heading and chronological format */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          PROFESSIONAL EXPERIENCE
        </Typography>
        {experience.map((exp, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {exp.position}
            </Typography>
            <Typography variant="body1" paragraph>
              {exp.company} | {exp.duration}
            </Typography>
            <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
              {exp.description}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Education - Using standard heading */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          EDUCATION
        </Typography>
        {education.map((edu, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {edu.degree}
            </Typography>
            <Typography variant="body1" paragraph>
              {edu.institution} | {edu.year}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Skills - Using standard heading and clear format */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          SKILLS
        </Typography>
        <Typography variant="body1" paragraph>
          {skills.join(' • ')}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ATSTemplate; 