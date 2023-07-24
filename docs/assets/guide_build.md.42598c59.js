import{_ as s,o as a,c as n,U as l}from"./chunks/framework.76b79cb5.js";const F=JSON.parse('{"title":"构建、部署","description":"","frontmatter":{},"headers":[],"relativePath":"guide/build.md","filePath":"guide/build.md","lastUpdated":1689383707000}'),p={name:"guide/build.md"},o=l(`<h1 id="构建、部署" tabindex="-1">构建、部署 <a class="header-anchor" href="#构建、部署" aria-label="Permalink to &quot;构建、部署&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>由于是展示项目，所以打包后可能较大，如果项目中没有用到的插件，可以删除对应的文件或者路由，不引用即可，没有引用就不会打包。</p></div><h2 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to &quot;构建&quot;">​</a></h2><p>项目开发完成后，执行以下命令进行构建</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span></code></pre></div><h2 id="预览" tabindex="-1">预览 <a class="header-anchor" href="#预览" aria-label="Permalink to &quot;预览&quot;">​</a></h2><p>发布之前可以在本地进行预览 (不能直接打开构建后的 html 文件)</p><p>使用项目自定的命令进行预览</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 先打包在进行预览</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preview</span></span></code></pre></div><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h2><p>例如上传到 nginx 此目录 <code>/srv/www/project/index.html</code></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># nginx 配置</span></span>
<span class="line"><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;"># 不缓存 html，防止程序更新后缓存继续生效</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$request_filename </span><span style="color:#89DDFF;">~*</span><span style="color:#A6ACCD;"> .</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">(?</span><span style="color:#A6ACCD;">:htm</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">html</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Cache-Control</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">private, no-store, no-cache, must-revalidate, proxy-revalidate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">access_log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;"># 这里是 vue 打包文件 dist 内的文件的存放路径</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/srv/www/project/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">index</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>部署时可能会发现资源路径不对，只需要修改<code>.env.production</code> 文件即可。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 根据自己路径来配置更改</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 注意需要以 / 开头和结尾</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_PUBLIC_PATH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_PUBLIC_PATH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/xxx/</span></span></code></pre></div><h3 id="前端路由与服务端的结合" tabindex="-1">前端路由与服务端的结合 <a class="header-anchor" href="#前端路由与服务端的结合" aria-label="Permalink to &quot;前端路由与服务端的结合&quot;">​</a></h3><p>项目前端路由使用的是 vue-router，所以你可以选择两种方式：<code>history</code> 和 <code>hash</code>。</p><ul><li>hash 默认会在 url 后面拼接<code>#</code></li><li>history 则不会，不过 history 需要服务器配合</li></ul><p>路由模式可在 src/routers/index.ts 内进行 mode 修改</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createRouter</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createWebHashHistory</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createWebHistory</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">history</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createWebHashHistory</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// or</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">history</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createWebHistory</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="history-路由模式下服务端配置" tabindex="-1">history 路由模式下服务端配置 <a class="header-anchor" href="#history-路由模式下服务端配置" aria-label="Permalink to &quot;history 路由模式下服务端配置&quot;">​</a></h3><p>开启 history 模式</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createRouter</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createWebHistory</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">history</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createWebHistory</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">routes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#A6ACCD;">	]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>nginx 配置</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 用于配合 History 使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">try_files</span><span style="color:#A6ACCD;"> $uri $uri</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="部署到非根目录" tabindex="-1">部署到非根目录 <a class="header-anchor" href="#部署到非根目录" aria-label="Permalink to &quot;部署到非根目录&quot;">​</a></h3><p>首先需要在打包的时候更改配置</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 在.env.production内，配置子目录路径</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_PUBLIC_PATH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/sub/</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/sub/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;"># 这里是vue打包文件dist内的文件的存放路径</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">/srv/www/project/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">index</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">try_files</span><span style="color:#A6ACCD;"> $uri $uri</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/sub/index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="使用-nginx-处理跨域" tabindex="-1">使用 nginx 处理跨域 <a class="header-anchor" href="#使用-nginx-处理跨域" aria-label="Permalink to &quot;使用 nginx 处理跨域&quot;">​</a></h3><p>使用 nginx 处理项目部署后的跨域问题</p><p>配置前端项目接口地址</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 在.env.production内，配置接口地址</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_GLOB_API_URL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/api</span></span></code></pre></div><p>在 nginx 配置请求转发到后台</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">8080</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 接口代理，用于解决跨域问题</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/api</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Host</span><span style="color:#A6ACCD;"> $host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">X-Real-IP</span><span style="color:#A6ACCD;"> $remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">X-Forwarded-For</span><span style="color:#A6ACCD;"> $proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 后台接口地址</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy_pass</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://110.110.1.1:8080/api</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy_redirect</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Access-Control-Allow-Origin</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Access-Control-Allow-Headers</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">X-Requested-With</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Access-Control-Allow-Methods</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GET,POST,OPTIONS</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,34),e=[o];function t(c,r,y,C,i,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
