import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid'

function ResumeForm({ resumeData, setResumeData }) {
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      personalInfo: { ...prevData.personalInfo, [name]: value },
    }));
  };

  const handleSkillsChange = (e) => {
    const { value } = e.target;
    setResumeData((prevData) => ({ ...prevData, skills: value.split(',').map(skill => skill.trim()) }));
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const newExperience = [...resumeData.experience];
    newExperience[index][name] = value;
    setResumeData((prevData) => ({ ...prevData, experience: newExperience }));
  };

  const addExperience = () => {
    setResumeData((prevData) => ({
      ...prevData,
      experience: [...prevData.experience, { company: '', role: '', startDate: '', endDate: '', description: '' }],
    }));
  };

  const removeExperience = (index) => {
    const newExperience = [...resumeData.experience];
    newExperience.splice(index, 1);
    setResumeData((prevData) => ({ ...prevData, experience: newExperience }));
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const newEducation = [...resumeData.education];
    newEducation[index][name] = value;
    setResumeData((prevData) => ({ ...prevData, education: newEducation }));
  };

  const addEducation = () => {
    setResumeData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { institution: '', degree: '', startDate: '', endDate: '' }],
    }));
  };

  const removeEducation = (index) => {
    const newEducation = [...resumeData.education];
    newEducation.splice(index, 1);
    setResumeData((prevData) => ({ ...prevData, education: newEducation }));
  };

  const inputClasses = "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-colors";
  const labelClasses = "block text-sm font-medium text-gray-700";
  const buttonClasses = "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors";
  const removeButtonClasses = "absolute -top-2 -right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-transform hover:scale-110";

  return (
    <section className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Resume Details</h2>
      <form className="space-y-10">
        {/* Personal Info Section */}
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <label htmlFor="name" className={labelClasses}>Full Name</label>
              <input type="text" id="name" name="name" value={resumeData.personalInfo.name} onChange={handlePersonalInfoChange} className={inputClasses} />
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>Email</label>
              <input type="email" id="email" name="email" value={resumeData.personalInfo.email} onChange={handlePersonalInfoChange} className={inputClasses} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClasses}>Phone</label>
              <input type="tel" id="phone" name="phone" value={resumeData.personalInfo.phone} onChange={handlePersonalInfoChange} className={inputClasses} />
            </div>
            <div>
              <label htmlFor="address" className={labelClasses}>Address</label>
              <input type="text" id="address" name="address" value={resumeData.personalInfo.address} onChange={handlePersonalInfoChange} className={inputClasses} />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Skills</h3>
          <div>
            <label htmlFor="skills" className={labelClasses}>Skills (comma-separated)</label>
            <input type="text" id="skills" name="skills" value={resumeData.skills.join(', ')} onChange={handleSkillsChange} className={inputClasses} />
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Work Experience</h3>
            <button type="button" onClick={addExperience} className={buttonClasses}>
              <PlusIcon className="h-4 w-4 mr-1" />
              Add
            </button>
          </div>
          <div className="space-y-4">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg relative bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <input type="text" name="company" value={exp.company} onChange={(e) => handleExperienceChange(e, index)} placeholder="Company" className={inputClasses}/>
                  <input type="text" name="role" value={exp.role} onChange={(e) => handleExperienceChange(e, index)} placeholder="Role" className={inputClasses}/>
                  <input type="date" name="startDate" value={exp.startDate} onChange={(e) => handleExperienceChange(e, index)} className={inputClasses}/>
                  <input type="date" name="endDate" value={exp.endDate} onChange={(e) => handleExperienceChange(e, index)} className={inputClasses}/>
                  <textarea name="description" value={exp.description} onChange={(e) => handleExperienceChange(e, index)} placeholder="Description" rows="3" className={`md:col-span-2 ${inputClasses}`}></textarea>
                </div>
                <button type="button" onClick={() => removeExperience(index)} className={removeButtonClasses}>
                  <span className="sr-only">Remove</span>
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Education</h3>
            <button type="button" onClick={addEducation} className={buttonClasses}>
              <PlusIcon className="h-4 w-4 mr-1" />
              Add
            </button>
          </div>
          <div className="space-y-4">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg relative bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <input type="text" name="institution" value={edu.institution} onChange={(e) => handleEducationChange(e, index)} placeholder="Institution" className={inputClasses}/>
                  <input type="text" name="degree" value={edu.degree} onChange={(e) => handleEducationChange(e, index)} placeholder="Degree" className={inputClasses}/>
                  <input type="date" name="startDate" value={edu.startDate} onChange={(e) => handleEducationChange(e, index)} className={inputClasses}/>
                  <input type="date" name="endDate" value={edu.endDate} onChange={(e) => handleEducationChange(e, index)} className={inputClasses}/>
                </div>
                <button type="button" onClick={() => removeEducation(index)} className={removeButtonClasses}>
                  <span className="sr-only">Remove</span>
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </form>
    </section>
  );
}

export default ResumeForm;
