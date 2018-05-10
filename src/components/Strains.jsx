import React from 'react';
// function Strains() {
//   fetch('http://localhost:3000/strains', {
//     method: 'GET', // or 'PUT'
//     headers: {
//       'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE1MjU5ODE4NzZ9.TW0GyIcXT1XSXNs2wvpJDkvqo1-01HQjhujSrp9rHfg',
//       'Content-Type': 'text/plain'
//     }
//   }).then(res => res.json())
//   // console.log(res)
//   .catch(error => console.error('Error:', error))
//   .then(response => {
//     alert("hello");
//   });
//   return (
//
//   );
// }



class Strains extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      strains: {}
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/strains', {
      method: 'GET', // or 'PUT'
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE1MjU5ODE4NzZ9.TW0GyIcXT1XSXNs2wvpJDkvqo1-01HQjhujSrp9rHfg',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            strains: result
          });
        console.log(this.state.strains)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, strains } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(strains)
      return (
        <ul>
          {strains.map(strain => (
            <li key={strain.name}>
              {strain.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Strains;
