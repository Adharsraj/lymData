import React, { Component } from 'react';
import img from "../assets/Images/coming.jpg"

class ComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: true,
    };
  }

  componentDidMount() {
    this.timerInterval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  tick = () => {
    this.setState((prevState) => ({
      time: prevState.time + 1,
    }));
  }

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  render() {
    const { time } = this.state;

    return (
      <section className="pocket-block bg-black text-white py-2 md:py-2 min-h-screen relative">
        <div className="md:ml-9 ml-3 mt-0"> 
          <img
            id="logo"
            className="lg:w-[106px] lg:h-[80px] md:w-16 w-20 logo"
            src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691419210/LYMDATALABS/Pages/Companylogo_lok0s3_fgcea5.svg"
            alt="companylogo"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10 md:mt-20 mt-20">
            <span className="text-gray-500 lg:text-[50px] text-[40px] ">Looks small.</span>
            <br />
            Thinks big.
          </h2>
          <div className="relative z-10">
            <a
              target="_blank"
              aria-label="Notify Me"
              title="Notify Me"
              href="https://itunes.apple.com/us/app/procreate-pocket/id916366645?mt=8"
              className="bg-gray-900 text-white py-2 px-4 md:py-3 md:px-6 rounded-full hover:bg-gray-800 inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 inline mr-2"
              >
                <path
                  fill="currentColor"
                  d="M21 20H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm-10-2h8V7H11zm-2-9V5h6v4z"
                />
              </svg>
              Notify Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                className="ml-2 h-6 w-6 inline"
              >
                <path
                  d="M17.53,16,6.77,5.19A3.08,3.08,0,0,1,5.9,3,3.12,3.12,0,0,1,6.79.89a3,3,0,0,1,4.29,0L26.13,16l-4.3,4.32L11.08,31.09a3,3,0,0,1-1,.67A3,3,0,0,1,8.92,32a3.13,3.13,0,0,1-1.17-.23A3,3,0,0,1,6.1,30.11a3.06,3.06,0,0,1,0-2.35,3.12,3.12,0,0,1,.66-1Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="lg:text-[200px] text-[45px] md:text-[100px] text-gray-300 mt-[360px] font-extrabold opacity-20 z-0 shadow-transparent">
            LYMData Labs
          </h2>
          <img src={img} alt="image" className='lg:w-[300px] lg:h-[450px] h-[362px] w-[200px] absolute mt-[360px] rounded-t-3xl' />
          <div className="absolute top-0 right-0 m-4 text-white font-bold">
            <span>Timer: {this.formatTime(time)}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default ComingSoon;
