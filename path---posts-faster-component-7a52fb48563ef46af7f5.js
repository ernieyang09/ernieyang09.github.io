webpackJsonp([0xe8af4c69d4b8],{"./node_modules/json-loader/index.js!./.cache/json/posts-faster-component.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"前端小誌",author:"Ernie Yang"}},markdownRemark:{id:"/Users/ernieyang09/Desktop/workspace/gatsby-blog/src/pages/posts/2018/01/0112--faster-component.md absPath of file >>> MarkdownRemark",html:'<snippet>\nOMG，好久沒更新了網誌了，其實有很多該記錄的都忘了...趕快來補一點文章。\n</snippet>\n<p>今天在整理書籤裡面的網頁，點出了<a href="https://medium.com/missive-app/45-faster-react-functional-components-now-3509a668e69f">這篇</a>。</p>\n<p>其實我不知道大部份人的寫作風格是不是stateless component，因為有一些人蠻強調這點，全部state寫進redux，還可以輔以recompose之，但我是沒看過這種專案。</p>\n<p>stateless component乾淨但是沒有實作performance優化。我自己習慣就算只寫render還是寫class。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span>This is a Stateless Component<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>所以作者提出了直接用function，functional component!!</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span>This is a Stateless Component<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token punctuation">{</span><span class="token function">Component</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>原文說效能提升，我就不特別驗証了。</p>\n<p>如果未來的某天，stateless component實作優化了，還請留言通知我啊(等好久啦)。</p>',fields:{slug:"/posts/faster-component/"},frontmatter:{title:"Faster Functional Component",date:"2018-01-12T10:32",tags:["react"]}}},pathContext:{slug:"/posts/faster-component/"}}}});
//# sourceMappingURL=path---posts-faster-component-7a52fb48563ef46af7f5.js.map