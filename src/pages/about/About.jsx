import React from "react"
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
            安靜的像隻貓、活潑的像隻貓、懶惰的像隻貓、敏捷的像隻貓，喜歡聆聽，喜歡美麗的事物， 喜歡理解別人心中的想法，專注在前端javascript開發，同時也與一大堆CSS與UI/UX抗戰， 希望能做出舒服的介面，帶給使用者更好的體驗。
          </div>
        </div>

        <br/><br/>
        <div style={{ marginLeft: 2 }}>
          <h4>連結</h4>
          <dl>
          <dt className='text-upper'>Profolio:</dt>
          <dd><a href='https://ernieyang09.github.io/Portfolio' target='_blank'>https://ernieyang09.github.io/Portfolio/</a></dd>
          <dt className='text-upper'>github:</dt>
          <dd><a href='https://github.com/ernieyang09' target='_blank'>https://github.com/ernieyang09/</a></dd>
          </dl>
          <br/><br/>
          <h4>寫寫BLOG</h4>
          <p>
          每看一篇技術文章，就多了好幾篇文章要看，實際寫code的時候覺得好像是這樣，又好像少了什麼，同樣的東西總是要再google一次。再來，網路上的文章大部份還是英文為主，於是開始花時間整理看過的文章與工作上遇到的問題，
          研究後統整成心得，一方面留下學習的歴程，一方面將思緒釐清，強迫去弄懂觀念而非只使用，最後中文對於華人還是比較好閱讀，希望能寫更多的文章增加中文的技術文章。
          </p>
        </div>

        <br/><br/><br/>
      </div>
    )
  }
}
