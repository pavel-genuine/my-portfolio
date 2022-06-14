import Carousel from 'nuka-carousel';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import UseProjects from '../UseProjects/UseProjects';

const Details = () => {

    const {id} =useParams()

    const [projects,setprojects] =UseProjects()

    
    const project = projects.find(pro=>id==pro?.id)
    

    console.log(project);

      

    return (
        <div className='bg-neutral py-10'>
            <div class="w-[80%] mx-auto card w-96 bg-[aqua] shadow-xl">
                        <Carousel
                    wrapAround={true}
                    autoplay={true}
                    slidesToShow={1}
                >
                    <img className='img' src={project?.img} />
                    <img className='img' src={project?.img2} />
                    <img className='img' src={project?.img3} />

                </Carousel>

                            <div class="card-body">
                                <h2 class="card-title">
                                    {project?.name}
                                    <div class=" live-site badge text-[aqua]"><a href={project?.url}>Live Site</a></div>
                                </h2>
                                <p>{project?.title}</p>
                                <p>{project?.description[0]}</p>
                                <p>{project?.description[1]}</p>
                                <p>{project?.description[2]}</p>
                                <p>{project?.description[3]}</p>
                                <p><span className='font-semibold'>Technologised Used: </span>
                                    <span>{ project?.technology[0]}</span>, 
                                    <span>{project?.technology[1]}</span>, 
                                    <span>{project?.technology[2]}</span>, 
                                    <span>{project?.technology[3]}</span>, 
                                    <span>{project?.technology[4]}</span>, 
                                    <span>{project?.technology[5]}</span>, 
                                    <span>{project?.technology[6]}</span>, 
                                    <span>{project?.technology[7]}</span>.
                                    <span>{project?.technology[8]}</span>
                                </p>
                                <div class="card-actions justify-end">
                                    {
                                        project?.server ? <div class="badge badge-outline"><a href={project?.client}>Client Side Code</a></div>
                                            :
                                            <div class="badge badge-outline"><a href={project?.client}>Source Code</a></div>
                                    }
                                    {
                                       project?.server && <div class="badge badge-outline"><a href={project?.server}>Server Side Code</a></div>

                                    }    </div>
                            </div>
                        </div>
            
        </div>
    );
};

export default Details;