webpackJsonp([4],{"./node_modules/json-loader/index.js!./.cache/json/react-setstate.json":function(s,a){s.exports={data:{site:{siteMetadata:{title:"前端小誌",author:"Ernie Yang"}},markdownRemark:{id:"/Users/ernieyang09/Desktop/workspace/gatsby-blog/src/pages/posts/2017/07/0728--react-setstate.md absPath of file >>> MarkdownRemark",html:'<snippet>\n其實我想很多人都知道React的setState是非同步的行為，但是通常還是會順順地使用它，直到他真的發生了奇妙的事情以後，才會開始認真思考這個問題。\n</snippet>\n<p>沒錯，那個認真思考問題的人就是我。在專案裡面的登入頁面中，被埋了sleep 1秒的code，前人告訴我那是為了他debug方便而寫的，當我把這行code拿掉的時候，怎麼登都無法登入，這時候我臉上都冒出三條線了...</p>\n<p>一定很多人都看過React的官方文件</p>\n<blockquote>\n<p>setState() does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value. There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains.</p>\n</blockquote>\n<p>在react的github上也很多人再討論是否要加入promise的<a href="https://github.com/facebook/react/issues/2642">功能</a>，因為開發者說明performance issues就不提供了。</p>\n<p>不過其實setState提供了callback方法。(很顯然大家不喜歡寫callback)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>整理以後可以寫成下方的這種形式，就可以接者await使用</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">extends</span> Component <span class="token punctuation">{</span>\n    setStateAsync <span class="token operator">=</span> state <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> resolve<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>這樣我要來解我的登入BUG了..</p>',frontmatter:{title:"React的setState非同步行為",date:"2017-07-28T20:00",tags:["react","javascript","前端"]}}},pathContext:{slug:"/react-setstate/"}}}});
//# sourceMappingURL=path---react-setstate-0c9ab7388523d2339173.js.map