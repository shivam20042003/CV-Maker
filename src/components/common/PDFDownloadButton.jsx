import { Button } from '@mui/material';
import { PictureAsPdf as PdfIcon } from '@mui/icons-material';
import html2pdf from 'html2pdf.js';

const PDFDownloadButton = ({ targetRef }) => {
  const handleDownload = async () => {
    if (!targetRef.current) {
      console.error('Target element not found');
      return;
    }

    const element = targetRef.current;
    const opt = {
      margin: 0,
      filename: 'my-cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' 
      }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleDownload}
      startIcon={<PdfIcon />}
      sx={{ mt: 2 }}
    >
      Download PDF
    </Button>
  );
};

export default PDFDownloadButton; 