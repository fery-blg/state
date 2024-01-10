import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Feriel blg',
        bio: 'just a student',
        imgSrc: 'https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/324441257_1550752822111540_8201395479327481844_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=Rzjrnb96XL4AX-l00Ci&_nc_ht=scontent.ftun9-1.fna&oh=00_AfDWirbPsGn-UZxefXa-KegGONbnoH37ju3yxZFAvc1OGw&oe=65A3B50D',
        profession: 'Software Developer working on that hihi ☻',
      },
      show: false,
      timeSinceMount: 0,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { person, show, timeSinceMount } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Person" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
