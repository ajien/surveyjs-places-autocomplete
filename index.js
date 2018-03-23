import React, { Component } from 'react';
import { render } from 'react-dom';

import * as Survey from 'survey-react';
import 'survey-react/survey.css';

import 'bootstrap/dist/css/bootstrap.css'
import './style.css';
import PlacesWrapper from 'places_wrapper';


class App extends Component {

  componentWillMount() {
        Survey.CustomWidgetCollection.Instance.addCustomWidget({
            name: 'places',
            isFit: question => {
              return question.name === 'address';
            },
            render: question => {
              return <PlacesWrapper question={ question } />
            }
        })
  }

  onChange = ( address ) => this.setState({ address })

  sendDataToServer(survey) {
    document.getElementById("results").innerHTML = JSON.stringify( survey.data );
  }

  render() {    
    var json = {
      pages: [
        {
        name: "page1",
        elements: [
          {
          "type": "text",
          "name": "name",
          "isRequired": true,
          "title": "Name"
          },
          {
          "type": "text",
          "name": "address",
          "isRequired": true,
          "title": "Address"
          },
          {
          "type": "text",
          "name": "phone",
          "isRequired": true,
          "title": "Phone"
          },
        ]
        }
      ]
    };

    var model = new Survey.Model(json);    
    return (
      <div>
        <Survey.Survey model={model} onComplete={ this.sendDataToServer } />
        <div id="results"></div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
