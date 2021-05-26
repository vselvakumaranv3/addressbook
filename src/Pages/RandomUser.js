import React from "react";
import {Link} from "react-router-dom";

export default class RandomUser extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    document.title = "Address Book"
    const url = "https://randomuser.me/api/1.3/?results=5&seed=foobar";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        {this.state.people.map(person => (
          <div>
            <div><Link to={'/details/' + person.name.first +'/' + person.name.last+'/' + person.phone}><img src={person.picture.large} alt="sample images" /></Link></div>
            
            
          </div>
        ))}
      </div>
    );
  }
}
