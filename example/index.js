import 'babel-polyfill';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Panel } from './../src/';
import styles from './../src/Panel/panel.css';
import {PrismCode} from "react-prism";

export class Root extends Component {
  render() {
    return (
        <div className="container mw mx-auto p1">
            <div className="col col-12 py3 px1">
                <h1 className="m0">react-image-panel</h1>
                <p className="m0 mt1 gray">A reusable panel component! View <a className="green" href="https://github.com/clintonhalpin/react-image-panel">Github</a> repo!</p>
            </div>
            <div className="sm-col sm-col-3 p1">
                <Panel 
                    title="Hiking is fun"
                    description="What a killer day hiking!"
                    image="https://unsplash.it/600/600/?image=540"
                    linkTo="http://clintonhalpin.com" />
            </div>
            <div className="sm-col sm-col-9 p1">                
                <Panel 
                    title="Beach day!"
                    description="Spent the whole day at the beach yolo!"
                    image="https://unsplash.it/900/700/?image=333"
                    panelInnerYPosition="top"/>
            </div>
            <div className="sm-col sm-col-9 p1">
            <Panel 
                title="Foggy Forest"
                description="The fog was thick"
                height={450}
                image="https://unsplash.it/900/700/?image=1021"/>
            </div>
            <div className="sm-col sm-col-3 p1">
            <Panel 
                title="Drove through a mountain"
                description="nbd"
                height={450}
                loading={true}
                image="https://unsplash.it/900/700/?image=772"/>
            </div>
            <div className="sm-col sm-col-12 p1">
                <Panel 
                    title="Hello world!"
                    description="Sunsets!"
                    image="https://unsplash.it/1600/800/?image=991"/>
            </div>
            <div className="col col-12 py3 px1">
                <h3 className="m0 mb1">Props</h3>
                <p className="m0 gray mb2">All of the options you can pass into react-image-panel</p>
            </div>
            <div className="col col-12 px1">
                <pre><PrismCode className="language-javascript mt2 mb2">{require('raw-loader!./example.txt').trim()}</PrismCode></pre>
            </div>
            <div className="col col-12 px1 py3 center">
                <h3 className="m0 mb1">built with <span className="red">♥</span> by <a href="http://twitter.com/clintonhalpin">@clintonhalpin</a></h3>
            </div>
        </div>
    )
  }
};

render(
  <Root />,
  document.getElementById('root')
)
