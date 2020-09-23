import React from 'react'
import './SearchPage.css';
import TuneOutLinedIcon from '@material-ui/icons/TuneOutlined';
import Youtube_thumbnail6 from './images/Youtube_thumbnail6.jpg';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import Become_a_web_developer from './images/Become_a_web_developer.jpg';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutLinedIcon />
                <h2>FILTER</h2>
            </div>
          <hr />

          <ChannelRow 
          image={Youtube_thumbnail6}
          channel="Brandon the Programmer"
          verified
          subs="660K"
          noOfVideos={345}
          description="How to become a web developer in 10 minutes!! sounds impossible but actually not. Find the most interesting videos about the Web, build apps, learn new things, score booster points and many more. Let's begin this exciting journey by subscribing to this channel and hitting up the like button."
          />

          <hr />   

          <VideoRow 
          views="1.4M"
          subs='659K'
          description="Do you want a FREE one hour training... checkout the video"
          timestamp="59 seconds ago"
          channel="Brandon the Programmer"
          title="Let's build a Whatsapp clone with MERN stack" 
          image={Become_a_web_developer}
          />
           <VideoRow 
          views="1.4M"
          subs='659K'
          description="Do you want a FREE one hour training... checkout the video"
          timestamp="59 seconds ago"
          channel="Brandon the Programmer"
          title="Let's build a Whatsapp clone with MERN stack" 
          image={Become_a_web_developer}
          />
           <VideoRow 
          views="1.4M"
          subs='659K'
          description="Do you want a FREE one hour training... checkout the video"
          timestamp="59 seconds ago"
          channel="Brandon the Programmer"
          title="Let's build a Whatsapp clone with MERN stack" 
          image={Become_a_web_developer}
          />
           <VideoRow 
          views="1.4M"
          subs='659K'
          description="Do you want a FREE one hour training... checkout the video"
          timestamp="59 seconds ago"
          channel="Brandon the Programmer"
          title="Let's build a Whatsapp clone with MERN stack" 
          image={Become_a_web_developer}
          />
           <VideoRow 
          views="1.4M"
          subs='659K'
          description="Do you want a FREE one hour training... checkout the video"
          timestamp="59 seconds ago"
          channel="Brandon the Programmer"
          title="Let's build a Whatsapp clone with MERN stack" 
          image={Become_a_web_developer}
          />
        </div>
    )
}

export default SearchPage
