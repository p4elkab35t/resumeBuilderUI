import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { CloudUpload, Create } from '@mui/icons-material';

interface Resume {
  id: number;
  name: string;
}

const Dashboard: React.FC = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);

  // Fetch resumes from the database
  useEffect(() => {
    // Replace with your API call
    const fetchResumes = async () => {
      const data = [
        { id: 1, name: 'Resume 1' },
        { id: 2, name: 'Resume 2' },
        { id: 3, name: 'Resume 3' },
        { id: 4, name: 'Resume 4' },
        { id: 5, name: 'Resume 5' },
      ]; // Example data
      setResumes(data);
    };

    fetchResumes();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Render resume cards */}
      {resumes.map((resume) => (
        <Card
          key={resume.id}
          className="hover:shadow-lg transition-shadow cursor-pointer"
          component={Link}
          to={`/resume/${resume.id}`}
        >
          <CardContent>
            <Typography variant="h6" className="text-gray-800">
              {resume.name}
            </Typography>
            <div className="mt-4 flex justify-between">
              <Button
                component={Link}
                to={`/resume/${resume.id}`}
                size="small"
                variant="outlined"
                color="primary"
              >
                View
              </Button>
              <Button
                component={Link}
                to={`/resume/${resume.id}/edit`}
                size="small"
                variant="outlined"
                color="secondary"
              >
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Extra cards */}
      <Card
        className="hover:shadow-lg transition-shadow cursor-pointer"
        component={Link}
        to="/upload-resume"
      >
        <CardContent className="flex flex-col items-center">
          <CloudUpload fontSize="large" className="text-gray-600 mb-2" />
          <Typography variant="h6" className="text-gray-800">
            Upload Resume
          </Typography>
        </CardContent>
      </Card>

      <Card
        className="hover:shadow-lg transition-shadow cursor-pointer"
        component={Link}
        to="/create-resume"
      >
        <CardContent className="flex flex-col items-center">
          <Create fontSize="large" className="text-gray-600 mb-2" />
          <Typography variant="h6" className="text-gray-800">
            Create Resume
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
