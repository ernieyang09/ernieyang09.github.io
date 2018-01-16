webpackJsonp([0x81b8806e4260],{"./node_modules/json-loader/index.js!./.cache/json/index.json":function(n,s){n.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/posts/react-setstate-2/"},frontmatter:{title:"React的setState非同步行為2",date:"2018-01-16T10:33",tags:["react","javascript"],release:!0},html:'<snippet>\n都2018了，現在的感覺是redux統一天下。不過在清書籤頁，希望是近期內最後一次深入了解state。\n</snippet>\n<p>因為state的改變會觸發re-render，而re-render是一個expensive的行為，所以React做了batch，在一連串state改變中只會render一次。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    something<span class="token punctuation">:</span> thisThing<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      something<span class="token punctuation">:</span> thatThing<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>有時候就是會寫出這種code(尤其是在lifecyle componentWillReceiveProps之類的)</p>\n<p>但因為非同步所以會拿到不對的state值，所以大家很喜歡在這事上討論(打轉)。</p>\n<h4>常見解決辨法</h4>\n<ol>\n<li>\n<p>update完成後，callback，看<a href="https://ernieyang09.github.io/posts/react-setstate/">這裡</a></p>\n</li>\n<li>\n<p>校正lifecyle，在正確的lifecycle裡面呼叫setState。</p>\n</li>\n</ol>\n<p>3\b. 直接呼叫callback，介紹一下</p>\n<p>\bsetState是可以直接帶入一個callback的</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prevState<span class="token punctuation">,</span> currentProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  reurn <span class="token punctuation">{</span> prevState<span class="token punctuation">,</span> something<span class="token punctuation">:</span> currentProps<span class="token punctuation">.</span>something <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>不過這一點都不能解決非同步state問題(還是會拿到舊的state)</p>\n<p>很認真的看了<a href="https://medium.com/@wereHamster/beware-react-setstate-is-asynchronous-ce87ef1a9cf3">文章</a>以後，我是覺得結論有點難懂</p>\n<p>，結論是說，將function移出class會讓需要修改的值變得更明確(agree)。但是仍然有小機率會用到舊的state(這邊不太理解小機率\b...)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">incrementFooBy</span><span class="token punctuation">(</span>delta<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>previousState<span class="token punctuation">,</span> currentProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>previousState<span class="token punctuation">,</span> foo<span class="token punctuation">:</span> previousState<span class="token punctuation">.</span>foo <span class="token operator">+</span> delta <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    onClick <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token function">incrementFooBy</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span><span class="token operator">></span>click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>不過最大的變數應該是react setstate行為以後可能會全部重新定義吧。</p>\n<p>截錄另一篇<a href="http://vwangluo.com/article/detail/42214">文章</a>兩段話</p>\n<blockquote>\n<p>Honestly, the current batching strategy comes with a set of problems right now. I\'m hesitant to expand on it\'s API before we\'re sure that we\'re going to keep the current model. I think of it as a temporary escape until we figure out something better.</p>\n</blockquote>\n<p>問題的根源在於現有的 batching 策略，實話實說，這個策略帶來了一系列問題。也許這個在後期後有調整，在 batching 策略是否調整之前，盲目的擴充 setState 接口只會是一個短視的行為。</p>\n<blockquote>\n<p>In my experience, whenever I\'m tempted to use setState callback, I can achieve the same by overriding componentDidUpdate (and/or componentDidMount).</p>\n</blockquote>\n<p>對此，Redux 原作者 Dan Abramov 也發表了自己的看法。他認為，以他的經驗來看，任何需要使用 setState 第二個參數 callback 的場景，都可以使用生命周期函數 componentDidUpdate (and/or componentDidMount) 來覆寫。</p>\n<p>如果確認專案是使用redux flux等，state只用來處理一小部份short-time data，那我是覺得真正遇到問題的時候再研究啦。</p>'}},{node:{fields:{slug:"/posts/circular-dependency-plugin/"},frontmatter:{title:"Circular Dependency Plugin",date:"2018-01-15T15:25",tags:["webpack"],release:!0},html:'<snippet>\n之前在build的時候遇到的問題，主要就是開發的時候完全沒問題，但是在build的時候會發生error，error的畫面我忘記截圖了。最後的結果是import的順序有重復。\n</snippet>\n<p>Circular Dependency最常見的錯誤</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// A.js</span>\n<span class="token keyword">import</span> B <span class="token keyword">from</span> <span class="token string">\'./B\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// B.js</span>\n<span class="token keyword">import</span> C <span class="token keyword">from</span> <span class="token string">\'./C\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// C.js</span>\n<span class="token keyword">import</span> A <span class="token keyword">from</span> <span class="token string">\'./A\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// A -> B -> C -> A</span>\n</code></pre>\n      </div>\n<p>常常發現\bimport之後<a href="https://stackoverflow.com/questions/35240716/webpack-import-returns-undefined-depending-on-the-order-of-imports">拿到undefined</a></p>\n<p>專案中我將網頁的router抽出來整理(router.js，裡面有import所有router用的component)，然後對每個頁面包覆Page component。</p>\n<p>Like this</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> routers <span class="token keyword">from</span> <span class="token string">\'./routers\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token punctuation">{</span>\n  routers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>router <span class="token operator">=></span><span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>Route\n      path<span class="token operator">=</span><span class="token punctuation">{</span>router<span class="token punctuation">.</span>path<span class="token punctuation">}</span>\n      component<span class="token operator">=</span><span class="token punctuation">{</span>router<span class="token punctuation">.</span>component<span class="token punctuation">}</span>\n    <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">SomePage</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>Page<span class="token operator">></span>\n          <span class="token operator">...</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Page<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>其中，Page component裡面寫了一個Breadcrumb，Breadcrumb理所當然跟router有關，所以我就在Breadcrumb import routers，開發時完全沒問題，build的時候就爆炸啦XD</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>index <span class="token operator">-</span><span class="token operator">></span>  routers <span class="token operator">-</span><span class="token operator">></span> Page <span class="token operator">-</span><span class="token operator">></span> Breadcrumb <span class="token operator">-</span><span class="token operator">></span> routers\n</code></pre>\n      </div>\n<p>這種重覆import的例子並不是只要有任何的寫到就會出錯，是一種機率性的，就像有時候build起來的css跑掉了，可能是import了某個module(但不一定有用到css)，造成webpack build的時候順序不一樣了，這種build的時候才會出現問題的最麻煩了。</p>\n<p>不過了解了這個問題之後，google了一下，有一個webpack plugin - <a href="https://github.com/aackerman/circular-dependency-plugin">Circular Dependency Plugin</a></p>\n<p>能在runtime的時候，發現重覆import的問題，直接不能執行，並且show出哪些文件有問題，我個人是覺得蠻好用的。</p>\n<p>最後我的作法是把index跟Breadcrumb load的router切開來寫成兩個檔案，只是以mainatin上就要保持兩邊一致(加入新的\broute，兩邊都要設計一遍)，目前還沒想到比較好的做法，不過這要看專案設計囉。</p>'}},{node:{fields:{slug:"/posts/what-s-thunk/"},frontmatter:{title:"thunk是什麼",date:"2018-01-13T10:32",tags:["react","functional programming"],release:!0},html:'<snippet>\n會知道thunk這個單字也是因為react-thunk，一開始也是傻傻的用，後來才常常在functional的文章看到這個詞，整理整理希望能對functional programming更了解。\n</snippet>\n<p>根據wiki的定義</p>\n<blockquote>\n<p>In computer programming, a thunk is a subroutine used to inject an additional calculation into another subroutine. Thunks are primarily used to delay a calculation until it is needed, or to insert operations at the beginning or end of the other subroutine. They have a variety of other applications to compiler code generation and in modular programming.</p>\n</blockquote>\n<p>我的翻譯是thunk是其他程序要計算之前的另一個處理程序，不過聽起來很繞口，也不知道實際用途。</p>\n<p>這就要探討電腦世界中的求值策略(Evaluation strategy)了-定義何時和以何種次序求值給函式的實際參數，什麼時候把它們代換入函式，和代換以何種形式發生。</p>\n<p>假設我們在\bjavascript中，做以下的事情</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> add <span class="token operator">=</span> num <span class="token operator">=></span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token function">add</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>那function的參數到底是什麼時候被計算?</p>\n<p>if 傳值呼叫(call by value)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> add <span class="token operator">=</span> num <span class="token operator">=></span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token function">add</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// ==> add(3)</span>\n</code></pre>\n      </div>\n<p>if 傳名呼叫 (Call by name)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> add <span class="token operator">=</span> num <span class="token operator">=></span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token function">add</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// ==> (x + 2) + 1</span>\n</code></pre>\n      </div>\n<p>如果今天的參數不是一個簡單的(x + 2)，而是一個複雜的計算，且function裡面沒有用到(可能沒有走進if else \bcondition)，那其實先將值求好是沒有義意的，所以傳名呼叫更傾向於原封不動的將參數先放入，等有需要的時候再使用。</p>\n<p>不過javascript的實作是傳值呼叫，所以我們會依靠thunk來幫我們處理此問題。</p>\n<p>所以thunk有一個很重要的特性就是lazy evaluation，表達式不在它被綁定到變量之後就立即求值，而是在該值被取用的時候求值。</p>\n<p>所以redux-thunk表達的是delay(\blazy) dispatch的直接使用。</p>\n<p>在javscript裡面寫成high order function就是thunk的應用(待求証)。假設我有一個判斷session的\b\bapi，可能在很多地方使用，可以寫成以下。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>\b<span class="token keyword">const</span> checkSession <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'MY_API/session\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// any place</span>\n<span class="token keyword">const</span> isLoggin <span class="token operator">=</span> <span class="token function">checkSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>你不用直接的把值求出來，而是用到的時候再呼叫。</p>\n<p>如果是每次都一定會用到的值或是沒必要delay就不要用thunk了，因為thunk多跑了一層function反而會降低效率。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> action1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  type<span class="token punctuation">:</span> TEST<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">//多跑一層</span>\n<span class="token keyword">const</span> action2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> dispatch <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> TEST<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>正規的lazy evaluation是call by need，這是進階的call by name</p>\n<blockquote>\n<p>Call by need is a memoized version of call by name.</p>\n</blockquote>\n<p>在function\bal的世界中，給定一個function，每次給相同的input必定得到相同的output，我們可以稱這為pure function。</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>f(x) = g(x) + 1</code></pre>\n      </div>\n<p>若是g(x)為很heavy或是expensive的function，那我們可以做memized將算完的結果儲存。</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>cache = {}\ncache[v] = y</code></pre>\n      </div>\n<p>另外一個lazy evaluation的特性是最小化求值，這下次講functional的performance issue再提囉。</p>'}},{node:{fields:{slug:"/posts/faster-component/"},frontmatter:{title:"Faster Functional Component",date:"2018-01-12T10:32",tags:["react"],release:!0},html:'<snippet>\nOMG，好久沒更新了網誌了，其實有很多該記錄的都忘了...趕快來補一點文章。\n</snippet>\n<p>今天在整理書籤裡面的網頁，點出了<a href="https://medium.com/missive-app/45-faster-react-functional-components-now-3509a668e69f">這篇</a>。</p>\n<p>其實我不知道大部份人的寫作風格是不是stateless component，因為有一些人蠻強調這點，全部state寫進redux，還可以輔以recompose之，但我是沒看過這種專案。</p>\n<p>stateless component乾淨但是沒有實作performance優化。我自己習慣就算只寫render還是寫class。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span>This is a Stateless Component<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>所以作者提出了直接用function，functional component!!</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span>This is a Stateless Component<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token punctuation">{</span><span class="token function">Component</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>原文說效能提升，我就不特別驗証了。</p>\n<p>如果未來的某天，stateless component實作優化了，還請留言通知我啊(等好久啦)。</p>'}},{node:{fields:{slug:"/posts/undefined/"},frontmatter:{title:"React開發決策",date:"2017-10-17T23:34",tags:["react"],release:!0},html:'<p><snippet>來自: <a href="https://medium.freecodecamp.org/8-key-react-component-decisions-cc965db11594">8 Key React Component Decisions</a></p>\n<p>順便整理一下目前開發的心得\n</snippet></p>\n<p>整篇文章蠻簡單的，不照翻，文章內有投票可以知道世界各地大家是怎麼開發react的。\n(統計結果一直在變動，因為是即時的)</p>\n<h4>Decision 1: Dev Environment</h4>\n<p>主要講的是你的boilerplate從哪來，我個人prefer custom webpack，原因很簡單，用包裝好的常常不容易customize，公司有使用nwb做為開發，但我踩了很多雷，create-react-app預設了計多套件，也不一定每一個都是match的，custom也能讓自己更容易多了解各套件要如何設定，雖然繁瑣，但是增加練習機會。我使用atom，也不喜歡vscode的auto eslint，有人強調我們是來寫code的，而不該花時間在這上面。我覺得很多東西需要自動化(ci)，但這些應該是工程師要會的。</p>\n<p>統計結果: 65% create-react-app，不知道業界是不是都這樣@ _ @</p>\n<h4>Decision 2: Types</h4>\n<p>check type的選擇，我不是微軟派的，不會typescript!!正用proptypes，但想練習flow，久聞flow，不過沒有survey與proptypes的比較。</p>\n<p>統計結果: 42% proptypes，預設樂勝，不過沒想到typescript也很高。</p>\n<h4>Decision 3: createClass vs ES Class</h4>\n<p>不說了，ES class，結案。</p>\n<h4>Decision 4: Class vs Functional</h4>\n<p>stateful vs stateless，我有點忘記了，以前吃過蠻多stateless component的雷，而且實際上react沒有優化stateless，所以我就算只有render function也會寫class。stateless是真的讓code蠻乾淨的，如果真的要寫stateless可以搭配recompose使用，也更像functional programing，也計之後有機會再試試吧。</p>\n<h4>Decision 5: State</h4>\n<p>控管state的方法，啥是show answers XDD，目前就是用redux囉，業界應該也最常用。</p>\n<p>統計結果: 48% redux</p>\n<h4>Decision 6: Binding</h4>\n<p>Class prop arrow function for the win!!雖然javascript的dynamic Binding是特色之一，但我是覺得寫成class(尤其是react)，給class以外使用是很怪的，寫class arrow function最方便了XD，作者又提了一次別在render裡面使用arrow function與bind(重要)。</p>\n<p>統計結果: 36% Class prop arrow function</p>\n<h4>Decision 7: Styling</h4>\n<p>個人認為最頭痛的比較...我就是SASS派的，真心覺得css module Z > B，oocss、smacss、bem真的很夠用，不過我自認css沒這麼強，沒辨法給太多好的建議。以趨勢而言，2016 -> 2017 確實css module比例下降了，但我跟作者一樣，也在觀望styled-components，又是一個坑啦。</p>\n<p>統計結果: 58% plain CSS</p>\n<h4>Decision 8: Reusable Logic</h4>\n<p>hoc最有名，但render props正夯，之前有寫一兩篇文章介紹。我認為應該render props會強點，之後會更多人使用。</p>\n<p>統計結果: 45% \bhoc</p>\n<p>感謝作者的歸納與統計，拿來做自我的檢視剛剛好，建議對react不熟的人也可以多多去思考上面這些issue，對整個react會有更不一樣的認知。</p>'}},{node:{fields:{slug:"/posts/render-props/"},frontmatter:{title:"render prop正夯",date:"2017-10-07T22:54",tags:["react"],release:!0},html:'<snippet>\n前陣了寫了跟HOC有關的文章，我從來沒用過mixin，雖然介紹了HOC，但自己使用的時候總覺得哪裡怪怪的，看了最近蠻紅的影片，終於恍然大悟，讓我們來介紹render props吧。\n</snippet>\n<p>一切要從Michael Jackson的<a href="https://www.youtube.com/watch?v=BcVAq3YFiuc">影片</a>開始，或是你也可以看他寫的<a href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce">文章</a>。(他是react-router的創始人之一)</p>\n<h3>mixin</h3>\n<p>本來mixin的出現是為了code的reusable，這邊不特別介紹mixin的寫法，在我開始寫的時候，就已經不流行了。</p>\n<h4>mixin的問題</h4>\n<ol>\n<li>\n<p>不支持es6 class<br/>\n沒錯，就是這點，所以我沒寫過，我也以前也只知道這點XDD。</p>\n</li>\n<li>\n<p>無方向性<br/>\n我是看文章翻譯的，簡言之，mixin使用了state，這樣會使被附加的component不知道state從哪裡來，尤其是一個component內用了不只一個mixin，code會變的implict。</p>\n</li>\n<li>\n<p>命名衝突<br/>\n如果有兩個mixin操作了相同名稱的state，這時候就會發生命名衝突，而且程式會直接掛掉，無法跑。</p>\n</li>\n</ol>\n<h3>HOC</h3>\n<p>採用了decorator的方式，跟\bmixin相比支援es6 class。想了解的可以去翻我之前寫的文章。</p>\n<h4>HOC的問題</h4>\n<ol>\n<li>\n<p>一樣無方向性。</p>\n</li>\n<li>\n<p>一樣命名衝突，但是可以跑，後面的會覆蓋前面的，react不會警告。比起mixin，這樣應該算更不好的缺點。</p>\n</li>\n</ol>\n<h3>render prop</h3>\n<p>在render裡面做處理，跟前兩種很不一樣的點，前面兩種被視為static composition，你只會做一次composition，在你create class的時候，而render prop為dynamic composition，每一次render的時候都會。我對這些是沒辨法自己想到見解，但我覺得這是蠻有道理的。</p>\n<p>雖然我寫render prop，但其實常見的是Function as children?不過原理是一模一樣的，請安心使用。</p>\n<p>試寫Function as children</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">chilren</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>A<span class="token operator">></span>\n      <span class="token punctuation">{</span> AState <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token operator">...</span>\n        <span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>A<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>無方向性解決，你可以很簡單的從function的params得知是哪來的。</p>\n<p>命名衝突解決，\bfunction的params就像module or block一樣。隸屬於不同的params，永遠不會衝突。</p>\n<p>唯一的問題(我想的)，因為變成兩個class，多了一個&#x3C;div>Root，我個人很討厭react的一堆div(炸)。</p>\n<p>打完啦，我是看影片學的，影片裡面有更多有趣的說法，像是問題就像nail，而mixin就是hammer，然後敲敲敲，react-router其實不想寫HOC，但是因為社群需要\b...建議聽的懂英文而有時間的可以看看影片，很精采。</p>\n<p>我個人是覺得應該還是各有優缺點(雖然原文是render prop必勝)，HOC有recompose這個套件，render prop有react-powerplugin這個套件，目前在寫的時候目標是往render prop走，再看看會遇到什麼坑囉。</p>'}}]}},pathContext:{offset:0,paginations:6,total:20}}}});
//# sourceMappingURL=path---index-09d204f0ac9ab4e6945e.js.map