import React from 'react';
import './About.css'

const About = () => {
    return (
        <div id='about'>
            <div className="about  hero min-h-screen bg-[aqua]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img  src="https://media-exp2.licdn.com/dms/image/C4D03AQEEIcMDvk4OEw/profile-displayphoto-shrink_800_800/0/1654664592093?e=1660176000&v=beta&t=gF-e1iV71Jb1l_g5RWWDsF5JmXCXLyOFLS8nUlSfYwA" className="max-w-sm w-[90%] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-semibold">About Me</h1>
                        <p className="py-6">Hello! My name is Md Joynul Abedin and I enjoy creating things that live on the internet.
                            My studies centered on web development, database management, programming software used to create websites, and coding problem-solving. I'm proficient in HTML5, CSS3 ,Bootstrap5, Tailwind CSS, JavaScript, ReactJS, Authentication, NodeJS, ExpressJS, MongoDB. I’ve done several full-stack projects, some are included in my resume.
                            I am a fast learner. I stay updated on the latest trends and developments in the industry and apply the updates to my features. I also can adhere to all rules and coding standards set forth by management.
                            I love to install good habits, I can manage my time wisely to meet deadlines. I am very flexible with the ability to work different shifts and weekends when necessary and I can adapt to different types of work environments easily. I have a pleasant and friendly personality with the ability to work as a team or independently. I have excellent verbal and written skills that make it easy to understand information and to articulate my ideas clearly, so others can understand.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;