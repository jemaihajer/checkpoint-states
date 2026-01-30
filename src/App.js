import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // State contains the Person object and a boolean `shows` to toggle visibility
    this.state = {
      person: {
        fullName: "Nidhal Gharbi",
        bio: "MERN stack developer passionate about building full-stack applications (MongoDB, Express, React, Node.js).",
        imgSrc:
          "logo.jpg",
        profession: "MERN Stack Developer",
      },
      shows: false,
      secondsSinceMount: 0,
    };
    // Bindings for handlers
    this.toggleShow = this.toggleShow.bind(this);
  }

  // Lifecycle: start an interval when the component mounts
  componentDidMount() {
    // Update `secondsSinceMount` every 1 second
    this.intervalId = setInterval(() => {
      this.setState((prev) => ({
        secondsSinceMount: prev.secondsSinceMount + 1,
      }));
    }, 1000);
  }

  // Cleanup the interval when the component unmounts
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Toggle the `shows` flag to show/hide the profile
  toggleShow() {
    this.setState((prev) => ({ shows: !prev.shows }));
  }

  render() {
    const { person, shows, secondsSinceMount } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/* Button to toggle profile visibility */}
          <button onClick={this.toggleShow} className="App-button">
            {shows ? "Hide Profile" : "Show Profile"}
          </button>

          {/* Time since last mount */}
          <p>Time since mount: {secondsSinceMount}s</p>

          {/* Conditionally render the Person profile when `shows` is true */}
          {shows && (
            <div className="profile">
              <img
                src={person.imgSrc}
                alt={person.fullName}
                className="profile-image"
              />
              <h2>{person.fullName}</h2>
              <h4>{person.profession}</h4>
              <p className="bio">{person.bio}</p>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
