import React from 'react';
import Project from '../Project/Project';
import UseProjects from '../UseProjects/UseProjects';

const Projects = () => {
    const [projects,setprojects] = UseProjects()
    return (
        <div id='projects'  className='bg-neutral pt-10'>
            <h1 className='text-4xl font-semibold text-center text-[#e1815f] mb-10'>Projects :</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                {
                    projects.map(project=><Project project={project}  ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;