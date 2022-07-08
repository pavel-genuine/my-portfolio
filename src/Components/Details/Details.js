import Carousel from 'nuka-carousel';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import UseProjects from '../UseProjects/UseProjects';

const Details = () => {

    const { id } = useParams()

    const [projects, setprojects] = UseProjects()


    const project = projects.find(pro => id == pro?.id)


    console.log(project);



    return (

        <div className='bg-neutral h-[110vh] md:h-[80vh] flex justiy-center items-center pt-10 md:pt-0 '>

            <div class="hero bg-neutral ">
                <div class="hero-content flex-col lg:flex-row md:w-[100%] w-[100%]">
                    <div className='md:w-[95%] border border-[aqua] p-2'>
                        <Carousel
                            wrapAround={true}
                            autoplay={true}
                            slidesToShow={1}
                        >
                            <img className='' src={project?.img} />
                            <img className='' src={project?.img2} />
                            <img className='' src={project?.img3} />

                        </Carousel>
                    </div>
                    <div class="card-body text-[whitesmoke] ">
                        <h2 class="card-title">
                            {project?.name}
                        </h2>

                        <div className=''>
                            <p>{project?.title}</p>
                            <p>{project?.description[0]}</p>
                            <p>{project?.description[1]}</p>
                            <p>{project?.description[2]}</p>
                            <p>{project?.description[3]}</p>
                            <p className='mt-3'><span className='font-semibold '>Technologies Used :  </span>
                                <span>{project?.technology[0]}, { project?.technology[1]}, {project?.technology[2]}, {project?.technology[3]}, 
                                {project?.technology[4]}, {project?.technology[5]}</span>, {project?.technology[6]}, {project?.technology[7]}. {project?.technology[8]}.
                              
                            </p>
                        </div>


                        <div class="card-actions flex flex-col mt-5 ">
                            <div class=" live-site btn btn-sm btn-outline border-[aqua] text-[aqua]"><a  href={project?.url} target="-blank">Live Site</a></div>

                            {
                                project?.server ? <div class="btn btn-sm btn-outline border-[#e1815f] text-[#e1815f]"><a href={project?.client}  target="-blank">Client Side Code</a></div>
                                    :
                                    <div class="btn btn-sm btn-outline btn-error"><a href={project?.client} target="-blank">Source Code</a></div>
                            }
                            {
                                project?.server && <div class="btn btn-sm btn-outline border-[whitesmoke] text-[whitesmoke]"><a href={project?.server}  target="-blank">Server Side Code</a></div>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;