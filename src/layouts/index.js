import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from 'styled-components'
import { Header } from '../components/Header'
import { Aside } from '../components/Aside'
import { Footer } from '../components/Footer'

import 'flexboxgrid';
import "prismjs/themes/prism-okaidia.css"
import "../css/normalize.css"
import "../css/main.scss"


const Wrapper = styled.div`
  margin:0 auto;
`;

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
      <Wrapper className='col-lg-12'>
        <Helmet
          title="前端小誌"
          meta={[
            { name: "description", content: "ernieyang09的blog，用來記錄前端的學習歷程" },
            { name: "keywords", content: "Frond-End,javascript" },
            { name: "google-site-verification", content: "Fwf4fkSVzuuPvX1cMlMn75ih2EVk7TomT8luoiPOuJs" },
          ]}
        />
        <Header path={this.props.location.pathname} />
        <div style={{display:'flex', flexWrap: 'wrap'}}>
        {this.props.children()}
        <Aside />
        </div>
        <Footer />
      </Wrapper>
    )
  }
}
