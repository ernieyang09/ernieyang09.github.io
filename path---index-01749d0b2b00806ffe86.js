webpackJsonp([5],{"./node_modules/json-loader/index.js!./.cache/json/index.json":function(n,t){n.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/fetch-in-react-life-cycle/"},frontmatter:{title:"在React life cyle中做async",date:"2017-07-30T21:15",tags:["react","redux","javascript","前端"]},html:'<snippet>\n最近需要幫網站加入權限的機制，到底該怎們將權限加入React中\n</snippet>\n<p>由於公司是走oauth2.0，oauth2.0的官網在SPA推薦的是implicit flow，在npm也可以找到此部分的套件，但這不是這篇文章的重點，重點在於接完之後，該如何進行下一步驗證。</p>\n<p>通常SPA要驗證一定會有一個flag或一組key，來做後續的動作，當然server端一定也要驗證，不然我前台亂輸入flag與key，資料就全部被弄出來了，以oauth來說我們就必須將accessToken當作前台的一個驗證。</p>\n<p>這邊我的作法如下</p>\n<p>確認是否有token -> request api取得個人資訊 -> 有了才登入 沒有就是假token</p>\n<p>所以我們可以在首次render SPA的時候(也就是使用者第一次點開你的網頁的時候)進行request api的行為。</p>\n<p>那到底要放在componentWillMount還是componentDidMount呢</p>\n<h3>componentWillMount</h3>\n<p>在Component Render之前就會執行，但是fetch資料屬於非同步，render並不會等待，此時還拿不到init state，有可能會出錯，必須自己在constructor先init state，<a href="https://daveceddia.com/watch-out-for-undefined-state/">詳情見此</a>，會render兩次。</p>\n<h3>componentDidMount</h3>\n<p>就跟上面做了個對比，是比較建議放入ajax的地方，也會render兩次。</p>\n<p>不過剛好最近出了v0.16，依照這篇<a href="https://www.reddit.com/r/reactjs/comments/5fg7iq/why_should_ajax_requests_go_in_componentdidmount/">文章</a>來看，componentWillMount似乎是個好選擇(我還沒有驗證)</p>\n<p>但其實React的Lifecycle是可以寫async await或是promise的，這邊就有很好的<a href="https://medium.com/front-end-hacking/async-await-with-react-lifecycle-methods-802e7760d802">例子</a></p>\n<p>在此情況下，我們可以在componentWillMount裡面await資料傳回來在繼續進行動作，經過測試後真的只會執行一次。</p>\n<p>所以說拉，目前看起來在componentWillMount裡面等待應該是最好的方法。</p>'}},{node:{fields:{slug:"/react-setstate/"},frontmatter:{title:"React的setState非同步行為",date:"2017-07-28T20:00",tags:["react","javascript","前端"]},html:'<snippet>\n其實我想很多人都知道React的setState是非同步的行為，但是通常還是會順順地使用它，直到他真的發生了奇妙的事情以後，才會開始認真思考這個問題。\n</snippet>\n<p>沒錯，那個認真思考問題的人就是我。在專案裡面的登入頁面中，被埋了sleep 1秒的code，前人告訴我那是為了他debug方便而寫的，當我把這行code拿掉的時候，怎麼登都無法登入，這時候我臉上都冒出三條線了...</p>\n<p>一定很多人都看過React的官方文件</p>\n<blockquote>\n<p>setState() does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value. There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains.</p>\n</blockquote>\n<p>在react的github上也很多人再討論是否要加入promise的<a href="https://github.com/facebook/react/issues/2642">功能</a>，因為開發者說明performance issues就不提供了。</p>\n<p>不過其實setState提供了callback方法。(很顯然大家不喜歡寫callback)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>整理以後可以寫成下方的這種形式，就可以接者await使用</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">extends</span> Component <span class="token punctuation">{</span>\n    setStateAsync <span class="token operator">=</span> state <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> resolve<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>這樣我要來解我的登入BUG了..</p>'}},{node:{fields:{slug:"/first-post/"},frontmatter:{title:"使用gatsby做自己的blog",date:"2017-07-26T22:06",tags:["blog"]},html:"<snippet>\n測試一下\n</snippet>\n<p>其實沒什麼要說的</p>\n<p>晚點再補</p>"}}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-01749d0b2b00806ffe86.js.map