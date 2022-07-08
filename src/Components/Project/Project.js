import Carousel from 'nuka-carousel';
import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import UseProjects from '../UseProjects/UseProjects';
import './Project.css'

const Project = (props) => {
    const { id, name, title, url, img, img2, img3, description, technology, client, server, } = props.project

    const navigate = useNavigate()

    const detailProject = (id) => {
        navigate(`/${id}`)
    }

    return (
        <div>
            <div class=" w-[80%] mx-auto card w-[93%] bg-[aqua] shadow-xl">
                <Carousel
                    wrapAround={true}
                    autoplay={true}
                    slidesToShow={1}
                >
                    <img className='img' src={img} />
                    <img className='img' src={img2} />
                    <img className='img' src={img3} />

                </Carousel>

                <div class="card-body">
                    <h2 class="card-title">
                        {name}
                        <div class=" live-site live btn btn-sm text-[aqua]"><a  href={url} target="-blank">Live Site</a></div>
                    </h2>
                    <p>{title}</p>
                    <div class="card-actions ">
                        {
                            server ? <div class="badge md:badge-lg"><a   href={client} target="-blank">Client Side Code</a></div>
                                :
                                <div class="badge badge-outline md:badge-lg"><a  href={client} target="-blank">Source Code</a></div>
                        }
                        {
                            server && <div class="badge badge-outline md:badge-lg"><a href={server} target="-blank">Server Side Code</a></div>

                        }    </div>

                    <button onClick={() => detailProject(id)} className='btn mt-5'> Detail </button>

                </div>





            </div>



        </div >
    );
};

export default Project;