import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Button, Skeleton, Typography } from '@mui/material';

const ResumeViewPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [resumeHtml, setResumeHtml] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchResume = async () => {
      setIsLoading(true);
      try {
        // Replace with your actual backend endpoint
        const response = await axios.get(`/api/resumes/${id}/view`);
        setResumeHtml(response.data.html); // Replace with actual key from backend
      } catch (error) {
        console.error('Failed to fetch resume:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResume();
  }, [id]);

  const downloadResume = async (format: string) => {
    try {
      const response = await axios.get(`/api/resumes/${id}/download?format=${format}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `resume.${format}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error(`Failed to download resume in ${format} format`, error);
    }
  };

  return (
    <Box display="flex">
      {/* Left Side: Resume Preview */}
      <Box flex={1} p={2}>
        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" height={600} animation="wave" />
        ) : (
          <Box
            dangerouslySetInnerHTML={{ __html: resumeHtml || '' }}
            className="resume-preview"
            sx={{ overflow: 'auto', height: '100%' }}
          />
        )}
      </Box>

      {/* Right Side: Download Options */}
      <Box width="25%" p={2} bgcolor="background.paper">
        <Typography variant="h6" gutterBottom>
          Download Options
        </Typography>
        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" height={40} animation="wave" sx={{ mb: 2 }} />
        ) : (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 2 }}
            onClick={() => downloadResume('pdf')}
          >
            Download as PDF
          </Button>
        )}
        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" height={40} animation="wave" sx={{ mb: 2 }} />
        ) : (
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ mb: 2 }}
            onClick={() => downloadResume('docx')}
          >
            Download as DOCX
          </Button>
        )}
        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" height={40} animation="wave" />
        ) : (
          <Button
            variant="contained"
            color="inherit"
            fullWidth
            onClick={() => downloadResume('txt')}
          >
            Download as TXT
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ResumeViewPage;
