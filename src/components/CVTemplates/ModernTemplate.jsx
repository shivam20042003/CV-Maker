import { Paper, Typography, Box, Grid, Chip } from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';

const ModernTemplate = ({ data }) => {
  if (!data) return null;

  const { personalInfo, education, experience, skills } = data;

  return (
    <Paper 
      elevation={0}
      sx={{
        width: '210mm',
        minHeight: '297mm',
        margin: '0 auto',
        backgroundColor: '#fff',
        position: 'relative',
        overflow: 'hidden',
        '@media print': {
          margin: 0,
          width: '210mm',
          height: '297mm',
          breakAfter: 'avoid',
          breakBefore: 'avoid',
        }
      }}
    >
      {/* Header with modern design */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          padding: '40px 20px',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-50px',
            left: 0,
            right: 0,
            height: '100px',
            background: 'inherit',
            transform: 'skewY(-4deg)',
            '@media print': {
              printColorAdjust: 'exact',
              WebkitPrintColorAdjust: 'exact',
            }
          },
          '@media print': {
            printColorAdjust: 'exact',
            WebkitPrintColorAdjust: 'exact',
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1, px: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 300 }}>
            {personalInfo.firstName}
            <Typography
              component="span"
              variant="h3"
              sx={{ fontWeight: 600, ml: 1 }}
            >
              {personalInfo.lastName}
            </Typography>
          </Typography>
          
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" />
                <Typography>{personalInfo.email}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" />
                <Typography>{personalInfo.phone}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationIcon fontSize="small" />
                <Typography>{personalInfo.address}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ px: 6, py: 8, mt: 2 }}>
        {/* Professional Summary */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '40px',
                height: '4px',
                backgroundColor: 'primary.main',
                '@media print': {
                  printColorAdjust: 'exact',
                  WebkitPrintColorAdjust: 'exact',
                }
              },
            }}
          >
            Professional Summary
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ mt: 3, color: 'text.secondary', lineHeight: 1.8 }}
          >
            {personalInfo.summary}
          </Typography>
        </Box>

        {/* Experience */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              position: 'relative',
              mb: 4,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '40px',
                height: '4px',
                backgroundColor: 'primary.main',
                '@media print': {
                  printColorAdjust: 'exact',
                  WebkitPrintColorAdjust: 'exact',
                }
              },
            }}
          >
            Experience
          </Typography>
          {experience.map((exp, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{ color: 'primary.main', fontWeight: 600 }}
              >
                {exp.position}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: 'text.secondary', mb: 1 }}
              >
                {exp.company} | {exp.duration}
              </Typography>
              <Typography 
                variant="body2" 
                paragraph
                sx={{ color: 'text.secondary' }}
              >
                {exp.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Education */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              position: 'relative',
              mb: 4,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '40px',
                height: '4px',
                backgroundColor: 'primary.main',
                '@media print': {
                  printColorAdjust: 'exact',
                  WebkitPrintColorAdjust: 'exact',
                }
              },
            }}
          >
            Education
          </Typography>
          {education.map((edu, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ color: 'primary.main' }}>
                {edu.degree}
              </Typography>
              <Typography 
                variant="subtitle1" 
                paragraph
                sx={{ color: 'text.secondary' }}
              >
                {edu.institution} | {edu.year}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Skills */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              position: 'relative',
              mb: 4,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '40px',
                height: '4px',
                backgroundColor: 'primary.main',
                '@media print': {
                  printColorAdjust: 'exact',
                  WebkitPrintColorAdjust: 'exact',
                }
              },
            }}
          >
            Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  fontWeight: 500,
                  '@media print': {
                    printColorAdjust: 'exact',
                    WebkitPrintColorAdjust: 'exact',
                  }
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ModernTemplate; 