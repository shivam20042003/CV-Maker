import { useState, useRef } from 'react'
import { ThemeProvider, CssBaseline, Container, Box, Paper, Tabs, Tab, AppBar, Toolbar, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import UserDetailsForm from './components/CVForm/UserDetailsForm'
import ATSTemplate from './components/CVTemplates/ATSTemplate'
import ModernTemplate from './components/CVTemplates/ModernTemplate'
import PDFDownloadButton from './components/common/PDFDownloadButton'
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

function App() {
  const [cvData, setCvData] = useState(null)
  const [selectedTemplate, setSelectedTemplate] = useState(0)
  const cvRef = useRef(null)

  const handleFormSubmit = (data) => {
    setCvData(data)
  }

  const handleTemplateChange = (event, newValue) => {
    setSelectedTemplate(newValue)
  }

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 0:
        return <ATSTemplate data={cvData} />
      case 1:
        return <ModernTemplate data={cvData} />
      default:
        return <ATSTemplate data={cvData} />
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" elevation={0} sx={{ mb: 3 }}>
        <Toolbar>
          <Box
            component="img"
            src="/cv-icon.svg"
            alt="CV Builder Logo"
            sx={{ width: 40, height: 40, mr: 2 }}
          />
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            CV Builder
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          {!cvData ? (
            <UserDetailsForm onSubmit={handleFormSubmit} />
          ) : (
            <Box>
              <Paper sx={{ mb: 2 }}>
                <Tabs
                  value={selectedTemplate}
                  onChange={handleTemplateChange}
                  centered
                >
                  <Tab label="ATS-Optimized Template" />
                  <Tab label="Modern Visual Template" />
                </Tabs>
              </Paper>
              <div ref={cvRef} style={{ backgroundColor: '#fff' }}>
                {renderTemplate()}
              </div>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <PDFDownloadButton targetRef={cvRef} />
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
