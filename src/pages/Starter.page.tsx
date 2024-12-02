import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Card, CardContent } from '@mui/material';
import { Create } from '@mui/icons-material';

const StarterPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-full">
      <Card className="p-8 mt-10 text-center shadow-md max-w-lg">
        <CardContent className="flex flex-col justify-around gap-10">
          <Typography variant="h4" className="mb-4 text-gray-800 font-semibold">
            Welcome to Resume Builder
          </Typography>
          <Typography variant="body1" className="mb-6 text-gray-600">
            Start your journey to create professional resumes in just a few
            clicks. Ready to begin?
          </Typography>
          <Button
            component={Link}
            to="/create-resume"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<Create />}
          >
            Create New Resume
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StarterPage;
