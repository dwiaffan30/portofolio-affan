const Project = () => {
  return (
    <section id="projects" className="bg-gray-200 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-600">Description of project 1 goes here. It was built using React and Tailwind CSS.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-600">Description of project 2 goes here. It was built using React and Tailwind CSS.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p className="text-gray-600">Description of project 3 goes here. It was built using React and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;


