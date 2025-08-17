function ResumePreview({ resumeData }) {
  return (
    <section className="bg-white p-6 rounded-xl shadow-lg sticky top-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Resume Preview</h2>
      <div className="a4-paper p-8 border border-gray-200 bg-white shadow-inner">
        {/* Header */}
        <header className="text-center border-b-2 border-gray-100 pb-6 mb-6">
          <h1 className="text-4xl font-bold tracking-tight text-primary-600">{resumeData.personalInfo.name || "Your Name"}</h1>
          <p className="text-sm text-gray-500 mt-2">
            {resumeData.personalInfo.email}
            {resumeData.personalInfo.phone && ` • ${resumeData.personalInfo.phone}`}
            {resumeData.personalInfo.address && ` • ${resumeData.personalInfo.address}`}
          </p>
        </header>

        <div className="space-y-6">
          {/* Skills */}
          {resumeData.skills && resumeData.skills.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary-600 mb-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <span key={index} className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{skill}</span>
                ))}
              </div>
            </section>
          )}

          {/* Experience */}
          {resumeData.experience && resumeData.experience.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary-600 mb-2">Work Experience</h2>
              <div className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-lg font-semibold text-gray-800">{exp.role || "Role"}</h3>
                      <p className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</p>
                    </div>
                    <p className="text-md font-medium text-gray-600">{exp.company || "Company"}</p>
                    <p className="text-sm mt-1 text-gray-600 whitespace-pre-wrap">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {resumeData.education && resumeData.education.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary-600 mb-2">Education</h2>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-lg font-semibold text-gray-800">{edu.degree || "Degree"}</h3>
                      <p className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</p>
                    </div>
                    <p className="text-md font-medium text-gray-600">{edu.institution || "Institution"}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}

export default ResumePreview;
