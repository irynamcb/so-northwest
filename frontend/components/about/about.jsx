import React from 'react';
import { Link } from 'react-router-dom';


export default class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about"> 
                <h1>Who we are</h1>
                <p>At Recreational Equipment, Inc. (REI) we believe a life outdoors is a life well-lived.</p>

                <p>We believe that it’s in the wild, untamed and natural places that we find our best selves, so our purpose is to awaken a lifelong love of the outdoors, for all.</p> 

                <p>Since 1938, we have been your local outdoor co-op, working to help you experience the transformational power of nature. We bring you top-quality gear and apparel, expert advice, rental equipment, inspiring stories of life outside and outdoor experiences to enjoy alone or share with your friends and family. And because we have no shareholders, with every purchase you make with REI, you are choosing to steward the outdoors, support sustainable business and help the fight for life outside.</p>

                <p>So whether you’re new to the outdoors or a seasoned pro, we hope you’ll join us.</p>
               
                <h1>Our history: It all started with an ice axe</h1>
                <p>We’ve been your outdoor co-op for 81 years. REI was founded in 1938 when a group of 23 climbing friends, united by their love for the outdoors, decided to source quality and affordable gear for their adventures. Read about how it all started.</p>

                <p>Today the REI community has 18 million lifetime members, more than 13,000 employees and 162 stores in 39 states and the District of Columbia.</p>

                <p>While much has changed since REI’s beginnings, our passion for life outside lives on in everything we do.</p >
                
            </div>
        )
         
    }
}