import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import './about.scss';

export default class About extends React.Component {
  render() {
    return (
      <div className='about content-container'>
        <div className='profile'>
          <div className='avatar' />
          <div className='divide' />
          <div className='description'>
            eysyseysey
          </div>
        </div>
        每看一篇技術文章，就多了好幾篇文章要看，實際寫code的時候覺得好像是這樣，又好像少了什麼，同樣的東西總是要再google一次。再來，網路上的文章大部份還是英文為主，於是開始花時間整理看過的文章與工作上遇到的問題，
        研究後統整成心得，一方面留下學習的歴程，一方面將思緒釐清，強迫去弄懂觀念而非只使用，最後中文對於華人還是比較好閱讀，希望能寫更多的文章增加中文的技術文章。
        <div>github: https://github.com/ernieyang09/</div>
        <div>Profolio: https://ernieyang09.github.io/Portfolio/</div>
      </div>
    )
  }
}
