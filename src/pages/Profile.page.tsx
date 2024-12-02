import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Avatar, CircularProgress } from '@mui/material';

interface Profile {
  name: string;
  email: string;
  avatarUrl: string;
}

const mockProfile: Profile = {
    name: 'Pavel Fedorov',
    email: 'saganiter234@gmail.com',
    avatarUrl: 'https://example.com/avatar.jpg',
  };

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/profile'); // Replace with your API endpoint
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading || !profile) {
    return (
      <div className="flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }


  return (
    <div className="flex justify-center items-center mt-32 bg-white">
      <Card className="p-6 max-w-sm w-full shadow-md">
        <CardContent className="flex flex-col items-center">
          <Avatar
            src={profile.avatarUrl}
            alt={profile.name}
            className="w-24 h-24 mb-4"
          />
          <Typography variant="h5" className="text-gray-800 mb-2">
            {profile.name}
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            {profile.email}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
