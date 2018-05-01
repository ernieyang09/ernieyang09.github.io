import React from "react"

export default class Todo extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div>
          To Write
          <ul>
            <li>Functional performance</li>
            <li>Unit test & CI</li>
            <li>Jest & enzyme</li>
            <li>Webpack code split</li>
            <li>Javascript event loop & async & first class function & clousure </li>
            <li>Clean Code Skill</li>
            <li>BEM OOCSS SMACSS</li>
            <li>git rebase</li>
            <li>client-side render & server-side render</li>
          </ul>
        </div>
        <div>
          To Survey
          <ul>
            <li>Ramda curry</li>
            <li>Reactive JS & redux-observable</li>
            <li>Optimize-js-plugin</li>
            <li>Chrome dev tool(pixel rendering & painting)</li>
            <li>React 0.16 feature</li>
            <li>SPA & critical render path & composite layer</li>
            <li>Functional & algorithm</li>
            <li>Reselect</li>
            <li>Immutable performance</li>
            <li>normalizr</li>
          </ul>
        </div>
      </div>
    )
  }
}