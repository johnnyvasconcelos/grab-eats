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
    "/painel-admin": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/painel-admin.js"
    ],
    "/painel-admin/configuracoes-gerais": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/painel-admin/configuracoes-gerais.js"
    ],
    "/painel-admin/pratos": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/painel-admin/pratos.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];