
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2283, hash: '46894c6ef6f1001b1400eb9e42a66381fa04d5822f07a8f4e7f8d8894ddfcbff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 992, hash: 'a8aae6456ac92bc3dfe8600a2b7434851c1d6b103b199352b656c8b794530c8f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 45385, hash: '16e8cf133d4f4f63e3c75e8bb63d8870ec812e8706e68f40ad814a87fe00611a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles.css': {size: 29796, hash: 'ZMqcPZBVvio', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
