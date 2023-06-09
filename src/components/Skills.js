import React from 'react'
import html from '../img/icon/html.png'
import css from '../img/icon/css.png'
import javascript from '../img/icon/javascript.png'
import react from '../img/icon/react.png'
import node from '../img/icon/node.png'
import express from '../img/icon/express.png'
import mongodb from '../img/icon/mongodb.png'
import github from '../img/icon/github.png'
import php from '../img/icon/php.png'

export default function Skills() {
    return (
        <>

            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">My Skills</h2>
                    <div className="skills-content">
                        <div className="column left">
                            <div className="text">My Creative Skills & Expriences.</div>
                            <p>
                                specialize in developing web applications using powerful technologies:
                                MongoDB, Express.js, React.js, and Node.js. I have honed my skills in creating efficient, scalable, and user-friendly
                                web applications that meet the unique needs of each client <br /> <br />

                                My skills in React.js enable me to create highly interactive and responsive user interfaces that provide
                                an engaging user experience. Finally, my expertise in Node.js allows me to develop fast and reliable
                                server-side applications that can handle multiple concurrent requests.  <br /> <br />


                                My skills in MongoDB allows me to develop dynamic databases that can handle large amounts
                                of data . Additionally, I am good in using Express.js
                                to build RESTful API and robust web servers that can handle complex API requests and integrate with various front-end
                                frameworks. <br /> <br />

                                Overall, I am passionate about Web Development and eager to contribute my skills and knowledge to create
                                innovative and impactful web applications using the MERN stack. With a strong foundation in
                                web development and a willingness to learn and grow, I am confident that I will be an asset to
                                any team or project.
                            </p>

                            {/* <p className="certiInfo">
                                And i have completed Web Development Training course and got a
                                certificate from internshala trainings where i learned both
                                front-end and back-end web technologies .
                            </p> */}
                            {/* <a rel="noreferrer" href="https://drive.google.com/file/d/1rKKISBzyMv7G6noNQNjHyu77llc-3oeW/view?usp=share_link" target="_blank">  Certificate <i className="fa-solid fa-award"></i></a> */}
                        </div>
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>HTML</span>
                                    <div className="lines html inner_line" ></div>
                                    <span><img width="60" height="60" src={html} alt="html-5--v1" /></span>
                                </div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>CSS</span>
                                    <div className="lines css inner_line"></div>
                                    <span><img width="60" height="60" src={css} alt="css3" /></span>
                                </div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>JavaScript</span>
                                    <div className="lines javascript inner_line"></div>
                                    <span><img width="60" height="60" src={javascript} alt="javascript--v1" /></span>
                                </div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>React.js</span>
                                    <div className="lines React inner_line"></div>
                                    <span><img width="50" height="50" src={react} alt="react" /></span>
                                </div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Node.js</span>
                                    <div className="lines Node inner_line"></div>
                                    <span><img src={node} width="60" alt="javascript nodejs logo" /></span>
                                </div>
                            </div>

                            <div className="bars">
                                <div className="info">
                                    <span>Express.js</span>
                                    <div className="lines Express inner_line"></div>
                                    <span><img src={express} width="60" alt="javascript nodejs logo" /></span>
                                </div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>MongoDB</span>
                                    <div className="lines MongoDB inner_line"></div>
                                    <span><img width="60" height="60" src={mongodb} alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo" /></span>
                                </div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Github & Git</span>
                                    <div className="lines Github inner_line"></div>
                                    <span><img width="50" height="50" src={github} alt="github" /></span>
                                </div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>PHP & MySql</span>
                                    <div className="lines PHP inner_line"></div>
                                    <span><img src={php}  width="" alt="php custom programming solutions" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
