import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResumeViewPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [resumeHtml, setResumeHtml] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(`/api/resumes/${id}/view`);
        setResumeHtml(response.data.html); // Assuming the backend returns `html` as a key
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
        responseType: 'blob', // Important for file downloads
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `resume.${format}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Failed to download resume:', error);
    }
  };

  if (isLoading) {
    return <div className="text-center p-4">Loading resume...</div>;
  }

  return (
    <div className="flex">
      {/* Left Side: Resume Display */}
      <div className="flex-1 border-r p-4">
        {resumeHtml ? (
          <div
            dangerouslySetInnerHTML={{ __html: resumeHtml }}
            className="resume-preview"
          />
        ) : (
          <p>Failed to load resume. Please try again.</p>
        )}
      </div>

      {/* Right Side: Download Options */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Download Options</h2>
        <button
          onClick={() => downloadResume('pdf')}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded mb-2 hover:bg-blue-600"
        >
          Download as PDF
        </button>
        <button
          onClick={() => downloadResume('docx')}
          className="w-full bg-green-500 text-white px-4 py-2 rounded mb-2 hover:bg-green-600"
        >
          Download as DOCX
        </button>
        <button
          onClick={() => downloadResume('txt')}
          className="w-full bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Download as TXT
        </button>
      </div>
    </div>
  );
};

export default ResumeViewPage;
