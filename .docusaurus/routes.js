
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','977'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','3a1'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','277'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','771'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','4c1'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','cd5'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','bc3'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','f74'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','0af'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','998'),
  
  routes: [
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
{
  path: '/docs/youtube/了凡四训',
  component: ComponentCreator('/docs/youtube/了凡四训','a51'),
  exact: true,
},
{
  path: '/docs/youtube/佛说十善业道经',
  component: ComponentCreator('/docs/youtube/佛说十善业道经','7fe'),
  exact: true,
},
{
  path: '/docs/youtube/地藏菩薩本願經',
  component: ComponentCreator('/docs/youtube/地藏菩薩本願經','62a'),
  exact: true,
},
{
  path: '/docs/youtube/太上感应篇',
  component: ComponentCreator('/docs/youtube/太上感应篇','f77'),
  exact: true,
},
{
  path: '/docs/youtube/妙法蓮華經',
  component: ComponentCreator('/docs/youtube/妙法蓮華經','c30'),
  exact: true,
},
{
  path: '/docs/youtube/心經',
  component: ComponentCreator('/docs/youtube/心經','622'),
  exact: true,
},
{
  path: '/docs/youtube/淨土大經科註',
  component: ComponentCreator('/docs/youtube/淨土大經科註','f19'),
  exact: true,
},
{
  path: '/docs/youtube/無量壽經',
  component: ComponentCreator('/docs/youtube/無量壽經','b9f'),
  exact: true,
},
{
  path: '/docs/youtube/金刚经',
  component: ComponentCreator('/docs/youtube/金刚经','05a'),
  exact: true,
},
{
  path: '/docs/youtube/阿彌陀經要解',
  component: ComponentCreator('/docs/youtube/阿彌陀經要解','34f'),
  exact: true,
},
{
  path: '/docs/谷歌教室',
  component: ComponentCreator('/docs/谷歌教室','7aa'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
