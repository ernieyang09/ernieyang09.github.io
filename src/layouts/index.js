import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { Header } from '../components/Header'

import "../css/normalize.css"
import "../css/main.css"

export default class Template extends React.Component {

  static propTypes = {
    children: PropTypes.func,
  }
  componentDidMount () {
    (function(d) {
      var config = {
        kitId: 'gex3cng',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){
        h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout)
        ,tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;
      h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';
        tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;
        if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};
        s.parentNode.insertBefore(tk,s)
    })(document);
  }

  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <Header />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}
