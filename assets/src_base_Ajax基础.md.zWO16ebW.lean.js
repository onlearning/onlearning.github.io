import{_ as a,c as n,a2 as p,o as l}from"./chunks/framework.DPuwY6B9.js";const u=JSON.parse('{"title":"Ajax","description":"","frontmatter":{},"headers":[],"relativePath":"src/base/Ajax基础.md","filePath":"src/base/Ajax基础.md","lastUpdated":1713863841000}'),e={name:"src/base/Ajax基础.md"};function o(r,s,c,t,i,y){return l(),n("div",null,s[0]||(s[0]=[p(`<h1 id="ajax" tabindex="-1">Ajax <a class="header-anchor" href="#ajax" aria-label="Permalink to &quot;Ajax&quot;">​</a></h1><p>Ajax 是浏览器提供的方法，可以实现页面无刷新更新数据，即局部更新数据，提高用户体验，ajax 与服务器交互，必须在网络环境中才能运行</p><p>Axios 是对原生的 Ajax 进行封装,简化书写</p><h2 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> xhr </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> XMLHttpRequest</span><span style="color:#24292E;">()；  </span><span style="color:#6A737D;">// 创建 ajax 对象</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;get&#39;</span><span style="color:#24292E;">，</span><span style="color:#032F62;">&#39;url&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 告诉 Ajax 请求地址和请求方式</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">()</span><span style="color:#6A737D;">// 发送请求</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">onload</span><span style="color:#D73A49;">=function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(xhr.responseText)  </span><span style="color:#6A737D;">// 获取服务器端响应到客户端的数据</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在真实的项目中大多数数据会以 JSON 对象返回，需要对返回的数据进行 html 拼接</p><p>将服务器端的字符串转换为 JSON 对象 JSON.parse()</p><h2 id="参数传递" tabindex="-1">参数传递 <a class="header-anchor" href="#参数传递" aria-label="Permalink to &quot;参数传递&quot;">​</a></h2><p>get 方法的参数需要自己去拼接字符串</p><p>post 方法需要设置请求报文的报文信息</p><p>将参数放在 send 方法内</p><p>请求参数的格式</p><p>json 数据格式需要通过 post 方式提交，不能通过 get 提交</p><h2 id="ajax-状态码" tabindex="-1">Ajax 状态码 <a class="header-anchor" href="#ajax-状态码" aria-label="Permalink to &quot;Ajax 状态码&quot;">​</a></h2><p>0：请求未初始化（未调用 open）</p><p>1：请求建立但为发送（未调用 send）</p><p>2：请求已经发送</p><p>3：请求正在处理，可用部分数据</p><p>4：响应完成</p><p>调用 <code>xhr.onreadyState()</code>可以获取状态码</p><p><code>onreadystatechange() </code>当 send 调用后 ajax 的状态码会不断变化，可用此方法监听</p><p><code>onload()</code>和<code>onreadychange()</code>事件都可以获取服务器响应</p><h2 id="ajax-错误处理" tabindex="-1">Ajax 错误处理 <a class="header-anchor" href="#ajax-错误处理" aria-label="Permalink to &quot;Ajax 错误处理&quot;">​</a></h2><p>通过 xhr.status 获取 http 状态码，针对不同的状态码进行处理</p><p>检查请求地址是否错误</p><p>请求返回 500 状态码，代表服务器错误</p><p>网络中断不会调用 onload 事件，会自动触发 onerror 事件</p><p>IE 浏览器会存在缓存问题</p><p>如果客户端请求的服务器地址没有变化，只有第一次会进行请求，之后再次请求会使用缓存中的数据</p><p>解决方法：在请求地址后加上参数，保证每一次请求的参数不同</p><h2 id="ajax-异步" tabindex="-1">Ajax 异步 <a class="header-anchor" href="#ajax-异步" aria-label="Permalink to &quot;Ajax 异步&quot;">​</a></h2><p>ajax 是异步程序，在同步执行完才会执行</p><p>Ajax 封装，将请求封装，在需要时调用</p><p>async. 默认是 true，即为异步方式，执行后，会继续执行后面的脚本，直到服务器端返回数据后，触发 ​.ajax 里的 success 方法，这时候执行的是两个线程。</p><p>async 设置为 false，则所有的请求均为同步请求，在没有返回值之前，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。</p><p>如果需要传递请求参数，需要判断请求方式是 post 还是 get，如果为 post，将参数传递给 send 方法时要添加请求参数的类型</p><p>ajax 封装时可声明默认值，在传递函数后对默认值进行覆盖，使用<code> object.assign(默认函数, 传递函数)</code></p><h2 id="ajax-请求" tabindex="-1">Ajax 请求 <a class="header-anchor" href="#ajax-请求" aria-label="Permalink to &quot;Ajax 请求&quot;">​</a></h2><p>ajax 只能支持同源请求，即自己只能访问自己电脑的服务器</p><p>同源是为了保证用户信息安全，比如 a 网站的 cookie，b 网站是不能访问的</p><p>1.使用 JSONP 可以进行跨域</p><p>它不属于 ajax 请求但可以模拟 ajax 请求</p><p>JSONP 优化 1.动态创建标签，在需要使用时使用 creatElement 创建 script 标签，设置 src 属性，并通过 <code>docuement.body.appendChild</code> 添加到 body 中，在加载完毕时即调用 onload 事件删除 script 标签</p><p>2.动态传递函数名称</p><p>在 url 中通过<code>?callback=函数名</code>，并在服务器中通过 url 获取 <code>req.query.callback</code></p><p>3.封装 jsonp 函数</p><h2 id="cookie-处理" tabindex="-1">COOKIE 处理 <a class="header-anchor" href="#cookie-处理" aria-label="Permalink to &quot;COOKIE 处理&quot;">​</a></h2><p>在使用 ajax 发送跨域请求时，默认不会发送 cookie,使用 ajax 的 withCredentials 属性设置为 true，并允许发送请求携带 cookie，<code>Access-Control-Allow-Credentials：true</code></p><p>JQuery 发送 Ajax</p><p>使用<code>$.ajax(){}</code>可以发送 ajax 请求</p><p><code>beforesend</code>方法可以在请求发送前进行判断，执行完<code>beforesend</code>方法之后才会向下执行</p><p><code>$.ajax</code> 方法发送 jsonp 请求</p><p>指定 <code>dataType:&#39;jsonp&#39;</code></p><p>修改 callback 名称 <code>sonp:&#39;cb&#39;</code></p><p>指定函数名<code> jsoncallback:&#39;fnname&#39;</code></p><p><code>$.get()</code> 函数和 <code>post（）</code>函数可以发送 get 和 post 请求</p><h2 id="ajax-全局事件" tabindex="-1">Ajax 全局事件 <a class="header-anchor" href="#ajax-全局事件" aria-label="Permalink to &quot;Ajax 全局事件&quot;">​</a></h2><p>ajax 全局事件要绑定在 document 上</p><p><code>.ajaxStart()</code> 请求开始时触发</p><p><code>.ajaxComplete()</code>请求完成时触发</p><p><code>nprogress</code> 进度条插件，配合全局插件使用</p><h2 id="ajax-封装" tabindex="-1">Ajax 封装 <a class="header-anchor" href="#ajax-封装" aria-label="Permalink to &quot;Ajax 封装&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> ajax</span><span style="color:#24292E;">(</span><span style="color:#E36209;">options</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 默认值</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> defaults </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;get&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    url: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    async: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    data: {},</span></span>
<span class="line"><span style="color:#24292E;">    header: {</span></span>
<span class="line"><span style="color:#032F62;">      &#39;Content-Type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#6F42C1;">    success</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {},</span></span>
<span class="line"><span style="color:#6F42C1;">    error</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 使用用户传递的参数替换默认值参数</span></span>
<span class="line"><span style="color:#24292E;">  Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">(defaults, options)</span></span>
<span class="line"><span style="color:#6A737D;">  // 创建 ajax 对象</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> xhr </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> XMLHttpRequest</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">  // 参数拼接变量</span></span>
<span class="line"><span style="color:#D73A49;">  var</span><span style="color:#24292E;"> params </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">  // 循环参数</span></span>
<span class="line"><span style="color:#D73A49;">  for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> attr </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> defaults.data) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 参数拼接</span></span>
<span class="line"><span style="color:#24292E;">    params </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> attr </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &#39;=&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> defaults.data[attr] </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &#39;&amp;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">    // 去掉参数中最后一个&amp;</span></span>
<span class="line"><span style="color:#24292E;">    params </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> params.</span><span style="color:#6F42C1;">substr</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, params.</span><span style="color:#005CC5;">length</span><span style="color:#D73A49;"> -</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果请求方式为 get</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (defaults.type </span><span style="color:#D73A49;">==</span><span style="color:#032F62;"> &#39;get&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 将参数拼接在 url 地址的后面</span></span>
<span class="line"><span style="color:#24292E;">    defaults.url </span><span style="color:#D73A49;">+=</span><span style="color:#032F62;"> &#39;?&#39;</span><span style="color:#D73A49;"> +</span><span style="color:#24292E;"> params</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 配置 ajax 请求</span></span>
<span class="line"><span style="color:#24292E;">  xhr.</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">(defaults.type, defaults.url, defaults.async)</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果请求方式为 post</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (defaults.type </span><span style="color:#D73A49;">==</span><span style="color:#032F62;"> &#39;post&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 设置请求头</span></span>
<span class="line"><span style="color:#24292E;">    xhr.</span><span style="color:#6F42C1;">setRequestHeader</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">, defaults.header[</span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果想服务器端传递的参数类型为 json</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (defaults.header[</span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">==</span><span style="color:#032F62;"> &#39;application/json&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 将 json 对象转换为 json 字符串</span></span>
<span class="line"><span style="color:#24292E;">      xhr.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(defaults.data))</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 发送请求</span></span>
<span class="line"><span style="color:#24292E;">      xhr.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(params)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    xhr.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 请求加载完成</span></span>
<span class="line"><span style="color:#24292E;">  xhr.</span><span style="color:#6F42C1;">onload</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取服务器端返回数据的类型</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> contentType </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> xhr.</span><span style="color:#6F42C1;">getResponseHeader</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;content-type&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">    // 获取服务器端返回的响应数据</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#24292E;"> responseText </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> xhr.responseText</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果服务器端返回的数据是 json 数据类型</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (contentType.</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;application/json&#39;</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 将 json 字符串转换为 json 对象</span></span>
<span class="line"><span style="color:#24292E;">      responseText </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(responseText)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#6A737D;">    // 如果请求成功</span></span>
<span class="line"><span style="color:#D73A49;">    if</span><span style="color:#24292E;"> (xhr.status </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> 200</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 调用成功回调函数, 并且将服务器端返回的结果传递给成功回调函数</span></span>
<span class="line"><span style="color:#24292E;">      defaults.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(responseText, xhr)</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">      // 调用失败回调函数并且将 xhr 对象传递给回调函数</span></span>
<span class="line"><span style="color:#24292E;">      defaults.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(responseText, xhr)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // 当网络中断时</span></span>
<span class="line"><span style="color:#24292E;">  xhr.</span><span style="color:#6F42C1;">onerror</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#6A737D;">    // 调用失败回调函数并且将 xhr 对象传递给回调函数</span></span>
<span class="line"><span style="color:#24292E;">    defaults.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(xhr)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div>`,63)]))}const d=a(e,[["render",o]]);export{u as __pageData,d as default};
