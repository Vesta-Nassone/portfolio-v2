const Resume = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Resume</h1>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Download PDF
          </button>
        </div>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Experience
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Senior Software Developer
              </h3>
              <p className="text-gray-600 mb-2">Company Name • 2023 - Present</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Led development of key features...</li>
                <li>Improved performance by X%...</li>
                <li>Mentored junior developers...</li>
              </ul>
            </div>
            {/* Add more experiences */}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Education
          </h2>
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Degree Name
            </h3>
            <p className="text-gray-600">University Name • Year</p>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-gray-900">AWS Certified</h3>
              <p className="text-gray-600 text-sm">Amazon Web Services</p>
            </div>
            {/* Add more certifications */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
