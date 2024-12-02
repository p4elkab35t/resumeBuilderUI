import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Skeleton } from '@mui/material';
import { CloudUpload, Create } from '@mui/icons-material';

interface Resume {
  id: number;
  name: string;
}

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

const Dashboard: React.FC = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const query = useQuery();

  useEffect(() => {
    const fetchResumes = async () => {
      setLoading(true)
        const response = await fetch('/api/resumes'); // Replace with your API endpoint
        const data = await response.json();
        setResumes(data);
        setLoading(false);
    };

    fetchResumes();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {loading
        ? Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="p-4">
              <CardContent>
                <Skeleton variant="text" width="80%" height={30} className="mb-4" />
                <Skeleton variant="rectangular" width="60%" height={40} />
              </CardContent>
            </Card>
          ))
        : resumes.map((resume) => (
            <Card
              key={resume.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent>
                <Typography variant="h6" className="text-gray-800">
                  {resume.name}
                </Typography>
                <div className="mt-4 flex justify-between">
                  <Button
                    component={Link}
                    to={`/resumes/${resume.id}`}
                    size="small"
                    variant="outlined"
                    color="primary"
                  >
                    View
                  </Button>
                  <Button
                    component={Link}
                    to={`/resumes/${resume.id}/edit`}
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
      {!loading && (
        <>
          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer"
            component={Link}
            to="/new"
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
            to="/new"
          >
            <CardContent className="flex flex-col items-center">
              <Create fontSize="large" className="text-gray-600 mb-2" />
              <Typography variant="h6" className="text-gray-800">
                Create Resume
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default Dashboard;
