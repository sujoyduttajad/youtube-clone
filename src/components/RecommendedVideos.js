import React from 'react'
import './RecommendedVideos.css';
import VideoCard from './VideoCard';
import Youtube_thumbnail3 from './images/Youtube_thumbnail3.jpg';
import Youtube_thumbnail4 from './images/Youtube_thumbnail4.jpg';
import Morning_motivation from './images/Morning_motivation.png';
import Youtube_thumbnail6 from './images/Youtube_thumbnail6.jpg';
import Youtube_thumbnail7 from './images/Youtube_thumbnail7.jpg';
import Youtube_thumbnail8 from './images/Youtube_thumbnail8.jpg';
import Youtube_thumbnail9 from './images/Youtube_thumbnail9.jpg';
import Youtube_thumbnail10 from './images/Youtube_thumbnail10.jpg';
import Become_a_web_developer from './images/Become_a_web_developer.jpg';
import businessman from './images/businessman.svg';
import butcher from './images/butcher.svg';
import chinese from './images/chinese.svg';
import designer from './images/designer.svg';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended Videos</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                title="10 Tips from a LA Celebrity Stylist"
                views="2.3M Views"
                timestamp="3 days ago"
                channelImage={Youtube_thumbnail7}
                channel="Batty Young"
                image={Youtube_thumbnail3}/>
                <VideoCard 
                title="Healthy Dog Meat Prep"
                views="765K Views"
                timestamp="5 months ago"
                channelImage={chinese}
                channel="Sara McKinnley"
                image={Youtube_thumbnail4}/>
                <VideoCard 
                title="Become a web developer in 10 minutes"
                views="1.2M Views"
                timestamp="6 days ago"
                channelImage={businessman}
                channel="Ryan Howard"
                image={Become_a_web_developer}/>
                <VideoCard 
                title="10 Ways To be PROFESSIONAL YouTuber"
                views="1.7M Views"
                timestamp="3 days ago"
                channelImage={butcher}
                channel="Alan Helsinki"
                image={Youtube_thumbnail3}/>
                <VideoCard 
                title="Morning Workout Motivation"
                views="6.3M Views"
                timestamp="2 weeks ago"
                channelImage={Youtube_thumbnail6}
                channel="Alex Deronio"
                image={Morning_motivation}/>
                <VideoCard 
                title="Top 10 Youtuber Camera Equipment on Amazon - What You Need to Create Content"
                views="117K Views"
                timestamp="11 months ago"
                channelImage={Youtube_thumbnail8}
                channel="John Fallock"
                image={Youtube_thumbnail10}/>
                <VideoCard 
                title="How to become a Web Developer"
                views="80K Views"
                timestamp="6 weeks ago"
                channelImage={Youtube_thumbnail9}
                channel="Jeff Rielly"
                image={Become_a_web_developer}/>
                <VideoCard 
                title="Travel Guide to LA"
                views="92K Views"
                timestamp="3 days ago"
                channelImage={designer}
                channel="Stacy Bernard"
                image={Youtube_thumbnail3}/>
                 <VideoCard 
                title="10 Tips from a LA Celebrity Stylist"
                views="2.3M Views"
                timestamp="3 days ago"
                channelImage={Youtube_thumbnail7}
                channel="Batty Young"
                image={Youtube_thumbnail3}/>
                <VideoCard 
                title="Healthy Dog Meat Prep"
                views="765K Views"
                timestamp="5 months ago"
                channelImage={chinese}
                channel="Sara McKinnley"
                image={Youtube_thumbnail4}/>
                <VideoCard 
                title="Become a web developer in 10 minutes"
                views="1.2M Views"
                timestamp="6 days ago"
                channelImage={businessman}
                channel="Ryan Howard"
                image={Become_a_web_developer}/>
                <VideoCard 
                title="10 Ways To be PROFESSIONAL YouTuber"
                views="1.7M Views"
                timestamp="3 days ago"
                channelImage={butcher}
                channel="Alan Helsinki"
                image={Youtube_thumbnail3}/>
                <VideoCard 
                title="Morning Workout Motivation"
                views="6.3M Views"
                timestamp="2 weeks ago"
                channelImage={Youtube_thumbnail6}
                channel="Alex Deronio"
                image={Morning_motivation}/>
                <VideoCard 
                title="Top 10 Youtuber Camera Equipment on Amazon - What You Need to Create Content"
                views="117K Views"
                timestamp="11 months ago"
                channelImage={Youtube_thumbnail8}
                channel="John Fallock"
                image={Youtube_thumbnail10}/>
                <VideoCard 
                title="How to become a Web Developer"
                views="80K Views"
                timestamp="6 weeks ago"
                channelImage={Youtube_thumbnail9}
                channel="Jeff Rielly"
                image={Become_a_web_developer}/>
                <VideoCard 
                title="Travel Guide to LA"
                views="92K Views"
                timestamp="3 days ago"
                channelImage={designer}
                channel="Stacy Bernard"
                image={Youtube_thumbnail3}/>
            </div>
        </div>
    )
}

export default RecommendedVideos;
