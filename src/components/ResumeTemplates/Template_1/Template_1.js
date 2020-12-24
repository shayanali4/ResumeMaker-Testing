import React from 'react';
import profile from './images/profile.jpg';
import tourismIco from './images/item-1.jpg';
import travellingIco from './images/item-2.jpg';
import gamesIco from './images/item-4.jpg';
import aviationIco from './images/item-5.jpg';
import booksIco from './images/item-3.jpg';
import djIco from './images/item-6.jpg';
import './styles.css';

function Template_1() {
    return (
        <div className="print-area">
            <div class="content">
                <div class="left-area">
                    <div class="info">
                        <div className="photo">
                            <img src={profile} alt="" />
                        </div>
                        <div class="text">
                            <h1>AMBER BRIS</h1>
                            <p>GRAPHIC DESIGNER</p>
                        </div>
                    </div>
                    <div class="profile">
                        <h3>PROFILE</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dolore deleniti ut. 
                        Eveniet quod aperiam quam nobis illo laboriosam, at 
                        obcaecati neque iure explicabo ratione ab sint quis voluptatem. Minima.</p>
                    </div>
                    <div class="contact">
                        <div class="phone">
                            <h3>CONTACT</h3>
                            <p>+421-944-123-000</p>
                            <p>+421-944-123-000</p>
                        </div>
                        <div class="email">
                            <p>website@outlook.com</p>
                            <p>xyz@gmail.com</p>                        
                        </div>
                        <div class="home">
                            <p>993 Carson St. west New York, NJ 07093</p>
                        </div>
                    </div>
                    <div class="interests">
                        <h3>INTERESTS</h3>
                        <div class="bars">
                            <div class="bar">
                                <img src={tourismIco} alt="" />
                                <p>TOURISM</p>
                            </div>
                            <div class="bar">
                                <img src={travellingIco} alt="" />
                                <p>TRAVELING</p>
                            </div>
                            <div class="bar">
                                <img src={gamesIco} alt="" />
                                <p>VIDEO GAMES</p>
                            </div>
                            <div class="bar">
                                <img src={aviationIco} alt="" />
                                <p>AVIATION</p>
                            </div>
                            <div class="bar">
                                <img src={booksIco} alt="" />
                                <p>BOOKS</p>
                            </div>
                            <div class="bar">
                                <img src={djIco} alt="" />
                                <p>DJ PLAYING</p>
                            </div>
                        </div>  
                    </div>
                </div>
                <div class="right-area">
                    <div class="about">
                        <h3 class="right"><span>ABOUT</span></h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Quibusdam voluptatem modi tempora ea eveniet magnam officia doloribus 
                        impedit suscipit, odio explicabo! Delectus sunt aperiam, voluptatem eum q
                        uae ipsa, dicta magnam, dolore illo praesentium fugiat alias minus doloremque c
                        orporis perspiciatis pariatur eligendi saepe optio reiciendis asperiores aspernatur 
                        impedit dolor sit amet!</p>
                    </div>
                    <div class="education">
                        <h3 class="right"><span>EDUCATION</span></h3>
                        <div class="main">
                            <div class="left-part">
                                <div class="first">
                                    <p>2004 - 2009</p>
                                    <span>&#8226;</span>
                                </div>
                                <div class="second">
                                    <p>2010 - 2012</p>
                                    <span>&#8226;</span>
                                </div>
                                <div class="third">
                                    <p>2012 - 2018</p>
                                    <span>&#8226;</span>
                                </div>
                            </div>
                            <div class="right-part">
                                <div class="first">
                                    <h4>Degree Title</h4>
                                    <h5>University / School Name</h5>
                                    <p>Write Your Answer Here</p>
                                </div>
                                <div class="second">
                                    <h4>Degree Title</h4>
                                    <h5>University / School Name</h5>
                                </div>
                                <div class="third">
                                    <h4>Degree Title</h4>
                                    <h5>University / School Name</h5>
                                    <p>Write Your Answer Here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="language">
                        <h3 class="right"><span>LANGUAGE SKILLS</span></h3>
                        <div class="main">
                            <p class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam maiores harum soluta facere saepe praesentium quae impedit itaque quasi vel! Omnis, itaque eaque tempore pariatur optio rerum voluptatem doloribus odit. Doloribus soluta porro quisquam ipsum laboriosam ad deserunt. Rerum, consectetur quasi. Quaerat exercitationem perferendis consequuntur nihil optio accusamus iure dolores?</p>
                            <div class="circles">
                                <div class="circle circle1">50% <span class="loading"></span></div>
                                <div class="circle circle2">25% <span class="loading"></span></div>
                                <div class="circle circle3">75% <span class="loading"></span></div>
                                <div class="circle circle4">50% <span class="loading"></span></div>
                            </div>
                    </div>
                    </div>
                    <div class="facts">
                        <h3 class="right"><span>FACTS</span></h3>
                        <p><span>&#8226;</span>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p><span>&#8226;</span>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. adipisicing.</p>
                        <p><span>&#8226;</span>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p><span>&#8226;</span>Lorem ipsum Lorem ipsum dolor sit. sit amet consectetur adipisicing.</p>
                        <p><span>&#8226;</span>Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor. adipisicing.</p>
                        <p><span>&#8226;</span>Lorem ipsum dolor sit amet  adipisicing.</p>
                    </div>
                    <div class="employement">
                        <h3 class="right"><span>EMPLOYEMENT HISTORY</span></h3>
                        <div class="main">
                            <div class="left-part">
                                <div class="first">
                                    <p>2004 - 2009</p>
                                    <span>&#8226;</span>
                                </div>
                                <div class="second">
                                    <p>2010 - 2012</p>
                                    <span>&#8226;</span>
                                </div>
                                <div class="third">
                                    <p>2012 - 2018</p>
                                    <span>&#8226;</span>
                                </div>
                            </div>
                            <div class="right-part">
                                <div class="first">
                                    <h4>Designation Title</h4>
                                    <h5>Company Name</h5>
                                    <p>Write About Your Employement</p>
                                </div>
                                <div class="second">
                                    <h4>Designation Title</h4>
                                    <h5>Company Name</h5>
                                    <p>Write About Your Employement</p>
                                </div>
                                <div class="third">
                                    <h4>Designation Title</h4>
                                    <h5>Company Name</h5>
                                    <p>Write About Your Employement</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>    
    )
}

export default Template_1
