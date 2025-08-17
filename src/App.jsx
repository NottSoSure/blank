import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
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
    <article className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
        <ResumePreview resumeData={resumeData} />
      </main>
    </article>
  )
}

export default App
