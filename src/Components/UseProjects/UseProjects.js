import React, { useEffect, useState } from 'react';

const UseProjects = () => {

    const [projects,setprojects] =useState([])

    useEffect(()=>{
        fetch('projects.json')
        .then(res=>res.json())
        .then(data=>setprojects(data))
    },[])

    return [projects]
};

export default UseProjects;