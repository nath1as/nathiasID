import React, { Component, dotenv } from 'react';
import { Query, ApolloProvider } from "react-apollo";
import 'cross-fetch/polyfill';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import "./Code.css";

// require('dotenv').config();

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });
  },
});


const query =gql`query {
    user(login:"nath1as") {
      repositories(isFork: false, first: 10, orderBy: {field: PUSHED_AT, direction: DESC}) {
        nodes {name}}
      }
  }
`;


class Code extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      max: 10,
    };

    this.upScroll = this.upScroll.bind(this);
    this.downScroll = this.downScroll.bind(this);
  }

  downScroll() {
    if (this.state.counter < this.state.max - 3) {
      this.setState({
        counter: this.state.counter + 1,

      });
    }
  }

  upScroll() {
    if (this.state.counter > 1) {
      this.setState({
        counter: this.state.counter - 1,

      });
    }
  }


  render() {

  const counter = this.state.counter;


    return(
      <div className="code">
        <div className="up-scroll"
          onClick={this.upScroll}>
          ▲
        </div>
        <h2>CODE --</h2>
        <ul>
          <li className="li-decoration">
          ┌[▓▒░<ApolloProvider client={ client }>
              <Query query={ query } >
                {({ loading, error, data }) => {
                  if (loading) return <div className="loading"> Loading...</div>;
                  if (error) return <p>{console.log(error)}Connection failed...</p>;
                  return data.user.repositories.nodes.map((node, idx) => (
                    <a key={node.name}
                      href={`https://github.com/nath1as/${node.name}`}
                      title='github'
                      target='_blank'
                      rel='noopener noreferrer'>
                      {' '}{ (idx < counter + 1 && idx > counter - 1) ? node.name : ''  }
                    </a>
                  ));
                }}
              </Query>
            </ApolloProvider>
          </li>
          <li className="li-decoration">├[▓▒░
            <ApolloProvider client={ client }>
              <Query query={ query } >
                {({ loading, error, data }) => {
                  if (loading) return <div className="loading"> Loading...</div>;
                  if (error) return <p>{console.log(error)}Connection failed...</p>;
                  return data.user.repositories.nodes.map((node, idx) => (
                    <a key={node.name}
                      href={`https://github.com/nath1as/${node.name}`}
                      title='github'
                      target='_blank'
                      rel='noopener noreferrer'>
                      {' '}{ (idx < counter + 2 && idx > counter) ? node.name : ''  }
                    </a>
                  ));
                }}
              </Query>
            </ApolloProvider>
          </li>
          <li className="li-decoration">
            └[▓▒░<ApolloProvider client={ client }>
              <Query query={ query } >
                {({ loading, error, data }) => {
                  if (loading) return <div className="loading"> Loading...</div>;
                  if (error) return <div >{console.log(error)}Connection failed...</div>;
                  return data.user.repositories.nodes.map((node, idx) => (
                    <a key={node.name}
                      href={`https://github.com/nath1as/${node.name}`}
                      title='github'
                      target='_blank'
                      rel='noopener noreferrer'>
                      {' '}{ (idx < counter + 3 && idx > counter + 1) ? node.name : ''  }
                    </a>
                  ));
                }}
              </Query>
            </ApolloProvider>
          </li>
        </ul>
        <div className="down-scroll" onClick={this.downScroll}>
          ▼
        </div>
      </div>

    );
  }
}

export default Code;
