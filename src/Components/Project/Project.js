import React from 'react';
import './Project.css'

const Project = (props) => {
    const { name, title, url, img, description, technology, client, server, } = props.project
    return (
        <div>
            <div class=" w-[80%] mx-auto card w-96 bg-[aqua] shadow-xl">
                <a href={url}><figure><img src={img} alt="Shoes" /></figure>
                </a>
                <div class="card-body">
                    <h2 class="card-title">
                        {name}
                        <div class=" live-site badge text-[aqua]"><a href={url}>Live Site</a></div>
                    </h2>
                    <p>{title}</p>
                    <div class="card-actions justify-end">
                        {
                            server ? <div class="badge badge-outline"><a href={client}>Client Side Code</a></div>
                                :
                                <div class="badge badge-outline"><a href={client}>Source Code</a></div>
                        }
                        {
                            server && <div class="badge badge-outline"><a href={server}>Server Side Code</a></div>

                        }    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;