function ResumePreview({ resumeData }) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Resume Preview</h2>
      <div className="text-center">
        <h1 className="text-3xl font-bold">{resumeData.personalInfo.name}</h1>
        <p>{resumeData.personalInfo.email} | {resumeData.personalInfo.phone}</p>
        <p>{resumeData.personalInfo.address}</p>
      </div>
    </div>
  )
}

export default ResumePreview
