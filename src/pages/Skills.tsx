const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
    },
    {
      title: 'Other',
      skills: ['Git', 'REST APIs', 'GraphQL', 'Testing'],
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Skills & Technologies
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h2>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
