import React from 'react';

const ProjectsPage = () => {
    return (
        <div>
            <h1>Projects Page</h1>
            {/* Add your projects here */}
            <div>
                <h2>Project 1</h2>
                <img src="placeholder1.jpg" alt="Project 1" />
                <a href="project1link">Project 1 Link</a>
            </div>
            <div>
                <h2>Project 2</h2>
                <img src="placeholder2.jpg" alt="Project 2" />
                <a href="project2link">Project 2 Link</a>
            </div>
            <div>
                <h2>Project 3</h2>
                <img src="placeholder3.jpg" alt="Project 3" />
                <a href="project3link">Project 3 Link</a>
            </div>
        </div>
    );
};

export default ProjectsPage;
