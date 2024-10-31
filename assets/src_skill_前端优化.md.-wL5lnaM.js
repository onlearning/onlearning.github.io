import{_ as n,c as a,a2 as p,o as l}from"./chunks/framework.DPuwY6B9.js";const b=JSON.parse('{"title":"前端优化","description":"","frontmatter":{},"headers":[],"relativePath":"src/skill/前端优化.md","filePath":"src/skill/前端优化.md","lastUpdated":1714964374000}'),e={name:"src/skill/前端优化.md"};function o(c,s,r,t,i,y){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="前端优化" tabindex="-1">前端优化 <a class="header-anchor" href="#前端优化" aria-label="Permalink to &quot;前端优化&quot;">​</a></h1><h2 id="脚本异步载入" tabindex="-1">脚本异步载入 <a class="header-anchor" href="#脚本异步载入" aria-label="Permalink to &quot;脚本异步载入&quot;">​</a></h2><p>传统的脚本加载方式是阻塞式的，即在脚本加载和执行完成之前，浏览器会阻塞页面的渲染。而异步加载脚本采用非阻塞方式，页面会继续渲染，而不必等待脚本的加载和执行。</p><p>异步加载脚本的实现方式主要有两种：</p><h3 id="async" tabindex="-1">async <a class="header-anchor" href="#async" aria-label="Permalink to &quot;async&quot;">​</a></h3><p>使用 <code>async</code> 属性： 将 <code>script</code> 标签的 <code>async</code> 属性设置为 <code>true</code>，浏览器将异步加载和执行脚本，加载完成后立即执行，不阻塞页面渲染。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#6F42C1;"> async</span><span style="color:#6F42C1;"> src</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;example.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用动态创建 <code>script</code> 元素： 使用 <code>JavaScript</code> 动态创建 <code>script</code> 元素，并通过设置 <code>async</code> 属性实现异步加载。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> script</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;script&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">script.src </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;example.js&#39;</span></span>
<span class="line"><span style="color:#24292E;">script.async </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span></span>
<span class="line"><span style="color:#24292E;">document.head.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(script)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="defer" tabindex="-1">defer <a class="header-anchor" href="#defer" aria-label="Permalink to &quot;defer&quot;">​</a></h3><p><code>defer</code> 属性与 <code>async</code> 属性类似，也用于异步加载脚本，但有一个重要的区别：<code>defer </code>保证脚本的执行顺序与它们在页面中的顺序一致。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#6F42C1;"> defer</span><span style="color:#6F42C1;"> src</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;script1.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#6F42C1;"> defer</span><span style="color:#6F42C1;"> src</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;script2.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#6F42C1;"> defer</span><span style="color:#6F42C1;"> src</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;script3.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 按script1 script2 script3依次执行</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="优势" tabindex="-1">优势 <a class="header-anchor" href="#优势" aria-label="Permalink to &quot;优势&quot;">​</a></h3><p>1、提高页面加载速度</p><p>异步加载脚本不会阻塞页面渲染，因此可以加速页面加载速度。尤其对于大型应用或包含多个脚本的页面，异步加载可以更高效地利用网络资源。</p><p>2、提升用户体验</p><p>通过异步加载脚本，可以使页面更快地呈现给用户，提升用户体验。特别是在移动设备或网络状况较差的情况下，异步加载对提高页面的响应速度更为显著。</p><p>3、并行加载多个脚本</p><p>异步加载脚本使得多个脚本能够并行加载，而不是串行加载。这意味着页面可以同时下载多个脚本文件，加快整体加载时间。</p><p>4、动态加载第三方库 在某些情况下，我们可能只有在特定条件下才需要加载某个第三方库。通过动态创建 <code>script</code> 元素，可以根据条件在运行时决定是否加载该库。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (someCondition) {</span></span>
<span class="line"><span style="color:#D73A49;">  const</span><span style="color:#005CC5;"> script</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;script&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  script.src </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;third-party-library.js&#39;</span></span>
<span class="line"><span style="color:#24292E;">  script.async </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span></span>
<span class="line"><span style="color:#24292E;">  document.head.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(script)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>5、异步加载并执行 在某些情况下，可能需要等待一个异步操作完成后再加载并执行脚本。可以使用 <code>onload</code> 事件或 <code>Promise</code> 来实现。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> script</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;script&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">script.src </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;example.js&#39;</span></span>
<span class="line"><span style="color:#24292E;">script.async </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span></span>
<span class="line"><span style="color:#6A737D;">// 使用 onload 事件</span></span>
<span class="line"><span style="color:#24292E;">script.</span><span style="color:#6F42C1;">onload</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Script loaded and executed.&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  document.head.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(script)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 或者使用 Promise</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> loadScript</span><span style="color:#24292E;">(</span><span style="color:#E36209;">src</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  return</span><span style="color:#D73A49;"> new</span><span style="color:#005CC5;"> Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">    const</span><span style="color:#005CC5;"> script</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;script&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    script.src </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> src</span></span>
<span class="line"><span style="color:#24292E;">    script.async </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span></span>
<span class="line"><span style="color:#24292E;">    script.onload </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> resolve</span></span>
<span class="line"><span style="color:#24292E;">    script.onerror </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> reject</span></span>
<span class="line"><span style="color:#24292E;">    document.head.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(script)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">loadScript</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;example.js&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Script loaded and executed.&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h3><p>1、依赖关系</p><p>异步加载脚本可能导致脚本之间的依赖关系变得复杂。在使用异步加载脚本时，需要确保脚本的加载顺序不会破坏它们之间的依赖关系。</p><p>2、兼容性</p><p>虽然大多数现代浏览器都支持异步加载脚本的方式，但在某些旧版本浏览器中可能存在兼容性问题。在实际应用中，需要根据项目的浏览器兼容性要求做出相应的选择。</p><h2 id="预加载和预渲染" tabindex="-1">预加载和预渲染 <a class="header-anchor" href="#预加载和预渲染" aria-label="Permalink to &quot;预加载和预渲染&quot;">​</a></h2><h3 id="预加载" tabindex="-1">预加载 <a class="header-anchor" href="#预加载" aria-label="Permalink to &quot;预加载&quot;">​</a></h3><p>有些资源不需要马上用到，但是希望尽早获取，这时候就可以使用预加载。预加载可以一定程度上降低首屏的加载时间，因为可以将一些不影响首屏但重要的文件延后加载，唯一缺点就是兼容性不好</p><p>预加载其实是声明式的 <code>fetch</code>，强制浏览器请求资源，并且不会阻塞 <code>onload</code> 事件，可以使用以下代码开启预加载：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">link</span><span style="color:#6F42C1;"> rel</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;preload&quot;</span><span style="color:#6F42C1;"> href</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;http://example.com&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="预渲染" tabindex="-1">预渲染 <a class="header-anchor" href="#预渲染" aria-label="Permalink to &quot;预渲染&quot;">​</a></h3><p>可以通过预渲染将下载的文件预先在后台渲染，预渲染虽然可以提高页面的加载速度，但是要确保该页面百分百会被用户在之后打开，否则就白白浪费资源去渲染，可以使用以下代码开启预渲染：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">link</span><span style="color:#6F42C1;"> rel</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;prerender&quot;</span><span style="color:#6F42C1;"> href</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;http://example.com&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="http-缓存" tabindex="-1">HTTP 缓存 <a class="header-anchor" href="#http-缓存" aria-label="Permalink to &quot;HTTP 缓存&quot;">​</a></h2><p>浏览器询问服务器缓存是否有效，服务器返回 304 指示浏览器使用缓存。</p><p>资源仍然处于有效期时，浏览器会直接使用磁盘缓存。</p><p><code>Cache-Control</code> 响应头表示了资源是否可以被缓存，以及缓存的有效期。</p><p><code>Etag</code> 响应头标识了资源的版本，此后浏览器可据此进行缓存以及询问服务器。</p><p><code>Last-Modified</code> 响应头标识了资源的修改时间，此后浏览器可据此进行缓存以及询问服务器。</p><h3 id="cache-control" tabindex="-1">Cache-Control <a class="header-anchor" href="#cache-control" aria-label="Permalink to &quot;Cache-Control&quot;">​</a></h3><p><code>Cache-Control</code> 在 <code>HTTP</code> 响应头中，用于指示代理和 UA(User Agent，简称 UA，浏览器标识，是一种用于标识浏览器类型、版本和操作系统等信息的字符串) 使用何种缓存策略</p><p><code>no-cache</code> 为本次响应不可直接用于后续请求（在没有向服务器进行校验的情况下）</p><p><code>no-store</code> 为禁止缓存（不得存储到非易失性介质，如果有的话尽量移除，用于敏感信息）</p><p><code>private</code> 为仅 UA 可缓存</p><p><code>public</code> 为大家都可以缓存。</p><p>当 <code>Cache-Control</code> 为可缓存时，同时可指定缓存时间（比如 <code>public</code>, <code>max-age:86400</code>）。 这意味着在 1 天（<code>60x60x24=86400</code>）时间内，浏览器都可以直接使用该缓存（此时服务器收不到任何请求）</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> http </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &#39;http&#39;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> server </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> http.</span><span style="color:#6F42C1;">createServer</span><span style="color:#24292E;">((</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">setHeader</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Cache-Control&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;public, max-age=86400&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;harttle.com&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">server.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3333</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>除了 <code>Cache-Control</code> 中的 <code>max-age</code> 外，<code>Expires</code>，<code>Vary</code> 等头字段也可用来设置缓存的有效性。</p><h3 id="etag" tabindex="-1">Etag <a class="header-anchor" href="#etag" aria-label="Permalink to &quot;Etag&quot;">​</a></h3><p>如果资源本身确实会随时发生改动，还用 <code>Cache-Control</code> 就会使用户看到的页面得不到更新。 但如果还希望利用 HTTP 缓存（万一资源没变呢），这就需要有条件的（conditional）HTTP 请求。</p><p><code>Etag</code> 响应头字段表示资源的版本，浏览器在发送请求时会带 <code>If-None-Match</code> 头字段， 来询问服务器该版本是否仍然可用。如果服务器发现该版本仍然是最新的， 就可以返回 304 状态码指示 UA 继续使用缓存。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> http </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &#39;http&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> server </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> http.</span><span style="color:#6F42C1;">createServer</span><span style="color:#24292E;">((</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(req.url, req.headers[</span><span style="color:#032F62;">&#39;if-none-match&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (req.headers[</span><span style="color:#032F62;">&#39;if-none-match&#39;</span><span style="color:#24292E;">]) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查文件版本</span></span>
<span class="line"><span style="color:#24292E;">    res.statusCode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 304</span></span>
<span class="line"><span style="color:#24292E;">    res.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    res.</span><span style="color:#6F42C1;">setHeader</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Etag&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;00000000&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    res.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;harttle.com&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">server.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3333</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="last-modified" tabindex="-1">Last-Modified <a class="header-anchor" href="#last-modified" aria-label="Permalink to &quot;Last-Modified&quot;">​</a></h3><p>与 <code>Etag</code> 类似，<code>Last-Modified</code> HTTP 响应头也用来标识资源的有效性。 不同的是使用修改时间而不是实体标签。对应的请求头字段为 <code>If-Modified-Since</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> http </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &#39;http&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> server </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> http.</span><span style="color:#6F42C1;">createServer</span><span style="color:#24292E;">((</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(req.url, req.headers[</span><span style="color:#032F62;">&#39;if-modified-since&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (req.headers[</span><span style="color:#032F62;">&#39;if-modified-since&#39;</span><span style="color:#24292E;">]) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 检查时间戳</span></span>
<span class="line"><span style="color:#24292E;">    res.statusCode </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 304</span></span>
<span class="line"><span style="color:#24292E;">    res.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    res.</span><span style="color:#6F42C1;">setHeader</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Last-Modified&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">new</span><span style="color:#6F42C1;"> Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">    res.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;harttle.com&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">server.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3333</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="页面刷新" tabindex="-1">页面刷新 <a class="header-anchor" href="#页面刷新" aria-label="Permalink to &quot;页面刷新&quot;">​</a></h3><p>按下刷新按钮或快捷键（在 MacOS 中是 Cmd+R）会触发浏览器的“正常重新加载”（normal reload）， 此时浏览器会执行一次 <code>Conditional GET</code>。 <code>Cache-Control</code> 等缓存头字段会被忽略，并且带 <code>If-None-Match</code>, <code>If-Modified-Since</code> 等头字段。 此时服务器总会收到一次 HTTP GET 请求。 在 Chrome 中按下刷新，浏览器还会带如下请求头：<code>Cache-Control:max-age=0</code></p><p>在 Chrome 中按下 Cmd+Shift+R （MacOS）可以触发强制重新加载（Hard Reload）， 此时包括页面本身在内的所有资源都不会使用缓存。 浏览器直接发送 HTTP 请求且不带任何条件请求字段。</p><h2 id="nginx-代码压缩" tabindex="-1">nginx 代码压缩 <a class="header-anchor" href="#nginx-代码压缩" aria-label="Permalink to &quot;nginx 代码压缩&quot;">​</a></h2><p><code>Nginx</code> 开启 <code>Gzip</code> 压缩功能， 可以使网站的 <code>css</code>、<code>js</code> 、<code>xml</code>、<code>html</code> 文件在传输时进行压缩，提高访问速度， 开启 <code>Gzip</code> 功能后，<code>Nginx</code> 服务器会根据配置的策略对发送的内容, 如 <code>css</code>、<code>js</code> 、<code>xml</code>、<code>html</code> 等静态资源进行压缩, 使得这些内容大小减少，在用户接收到返回内容之前对其进行处理，以压缩后的数据展现给客户。</p><p>这样不仅可以节约大量的出口带宽，提高传输效率，还能提升用户快的感知体验, 一举两得; 尽管会消耗一定的 cpu 资源，但是为了给用户更好的体验还是值得的</p><p>在 nginx 中配置文件 <code>http{}</code>中这样写</p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">http {</span></span>
<span class="line"><span style="color:#24292E;">.......</span></span>
<span class="line"><span style="color:#24292E;">gzip on;</span><span style="color:#6A737D;"> // 开启 gzip 压缩功能</span></span>
<span class="line"><span style="color:#24292E;">gzip_min_length </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">k</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // 设置允许压缩的页面最小字节数; 这里表示如果文件小于 10 个字节，就不用压缩，因为没有意义，本来就很小</span></span>
<span class="line"><span style="color:#24292E;">gzip_buffers </span><span style="color:#005CC5;">4</span><span style="color:#005CC5;"> 16</span><span style="color:#D73A49;">k</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // 设置压缩缓冲区大小，此处设置为 4 个 16K 内存作为压缩结果流缓存</span></span>
<span class="line"><span style="color:#24292E;">gzip_http_version </span><span style="color:#005CC5;">1.1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // 压缩版本</span></span>
<span class="line"><span style="color:#24292E;">gzip_comp_level </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> //设置压缩比率，最小为 1，处理速度快，传输速度慢；9 为最大压缩比，处理速度慢，传输速度快; 这里表示压缩级别，可以是 0 到 9 中的任一个，级别越高，压缩就越小，节省了带宽资源，但同时也消耗 CPU 资源，所以一般折中为 6</span></span>
<span class="line"><span style="color:#24292E;">gzip_types text</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">plain application</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">x</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">javascript text</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">css application</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">xml text</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">javascript application</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">x</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">httpd</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">php application</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">javascript application</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">json;</span><span style="color:#6A737D;"> // 制定压缩的类型,线上配置时尽可能配置多的压缩类型!</span></span>
<span class="line"><span style="color:#24292E;">gzip_disable </span><span style="color:#032F62;">&quot;MSIE [1-6]</span><span style="color:#B31D28;font-style:italic;">\\.</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // 配置禁用 gzip 条件，支持正则。此处表示 ie6 及以下不启用 gzip（因为 ie 低版本不支持）</span></span>
<span class="line"><span style="color:#24292E;">gzip_vary on;</span><span style="color:#6A737D;"> // 选择支持 vary header；改选项可以让前端的缓存服务器缓存经过 gzip 压缩的页面; 这个可以不写，表示在传送数据时，给客户端说明我使用了 gzip 压缩</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,66)]))}const u=n(e,[["render",o]]);export{b as __pageData,u as default};
