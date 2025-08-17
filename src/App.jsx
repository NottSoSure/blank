import { useState } from 'react'
import './App.css'
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'

function App() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Anytown, USA',
    },
    experience: [
      {
        company: 'Tech Corp',
        role: 'Software Engineer',
        startDate: '2020-01-01',
        endDate: 'Present',
        description: 'Developed and maintained web applications using React and Node.js.',
      },
    ],
    education: [
      {
        institution: 'University of Technology',
        degree: 'B.S. in Computer Science',
        startDate: '2016-09-01',
        endDate: '2020-05-31',
      },
    ],
    skills: ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
  });

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 py-6">
          AI Resume Builder
        </h1>
      </header>
      <main className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
        <ResumePreview resumeData={resumeData} />
      </main>
    </div>
  )
}

export default App
