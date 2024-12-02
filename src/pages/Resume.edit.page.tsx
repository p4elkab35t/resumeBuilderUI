import React, { useState, useEffect } from 'react';
import { Breadcrumbs, Typography, TextField, Button, Box, Card, CardContent, CircularProgress } from '@mui/material';
import { Link, useParams, useNavigate } from 'react-router-dom'; // For routing and params

interface Resume {
  title: string;
  name: string;
  email: string;
  education: string;
  experience: string;
  skills: string[];
}

const ResumeEdit: React.FC = () => {
  const [resume, setResume] = useState<Resume | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [formData, setFormData] = useState<Resume>({
    title: '',
    name: '',
    email: '',
    education: '',
    experience: '',
    skills: [''],
  });

  const { id } = useParams(); // Get the resume ID if we are editing
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setEdit(true);
      fetchResumeData(id);
    }
  }, [id]);

  const fetchResumeData = async (resumeId: string) => {
    setLoading(true);
    try {
    //   const response = await fetch(`/api/resumes/${resumeId}`); // Replace with your API endpoint
    //   const data = await response.json();
    //   setResume(data);
    //   setFormData({
    //     title: data.title,
    //     name: data.name,
    //     email: data.email,
    //     education: data.education,
    //     experience: data.experience,
    //     skills: data.skills,
    //   });
      // mock data here
    } catch (error) {
      console.error('Error fetching resume data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      skills: newSkills,
    }));
  };

  const handleAddSkill = () => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, ''],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const requestMethod = edit ? 'PUT' : 'POST';
    const apiUrl = edit ? `/api/resumes/${id}` : '/api/resumes';

    try {
      const response = await fetch(apiUrl, {
        method: requestMethod,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate('/dashboard'); // Redirect to dashboard after success
      } else {
        console.error('Error saving resume');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="p-6 max-w-4xl w-full shadow-md">
        <CardContent>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/dashboard">Dashboard</Link>
            <Typography color="textPrimary">{edit ? 'Edit Resume' : 'Create Resume'}</Typography>
          </Breadcrumbs>

          <form onSubmit={handleSubmit}>
            <section className="mb-6">
              <Typography variant="h6" className="mb-4">Resume Information</Typography>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mb-4"
              />
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mb-4"
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mb-4"
              />
            </section>

            <section className="mb-6">
              <Typography variant="h6" className="mb-4">Education</Typography>
              <TextField
                fullWidth
                label="Education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="mb-4"
              />
            </section>

            <section className="mb-6">
              <Typography variant="h6" className="mb-4">Work Experience</Typography>
              <TextField
                fullWidth
                label="Experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="mb-4"
              />
            </section>

            <section className="mb-6">
              <Typography variant="h6" className="mb-4">Skills</Typography>
              {formData.skills.map((skill, index) => (
                <TextField
                  key={index}
                  fullWidth
                  label={`Skill ${index + 1}`}
                  name={`skill-${index}`}
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  className="mb-4"
                />
              ))}
              <Button variant="outlined" color="primary" onClick={handleAddSkill} className="mb-4">
                Add Skill
              </Button>
            </section>

            <Box className="flex justify-between">
              <Button type="submit" variant="contained" color="primary">
                {edit ? 'Update Resume' : 'Create Resume'}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeEdit;
