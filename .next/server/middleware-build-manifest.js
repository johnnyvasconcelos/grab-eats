self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "rootMainFilesTree": {},
  "pages": {
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/cardapio": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/cardapio.js"
    ],
    "/painel-admin": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/painel-admin.js"
    ],
    "/pedidos": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/pedidos.js"
    ],
    "/produto/[id]": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/produto/[id].js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];