import React from "react";
import flatten from "lodash/flatten";
import find from "lodash/find";

export const categorizedRoutes = [
  {
    category: "Hash",
    content: [
      {
        label: "Base64 code",
        path: "/base64",
        title: "Base64 code"
      },
      {
        label: "MD5 encode",
        path: "/md5-encode",
        title: "MD5 encode",
        desc: "MD5 encode"
      },
      {
        label: "SHA encode",
        path: "/sha-encode",
        title: "SHA encode",
        desc: "SHA encode",
        scripts: [
          "/static/crypto/sha1.js",
          "/static/crypto/sha256.js",
          "/static/crypto/sha512.js"
        ]
      }
    ]
  },

  {
    category: "Encoding",
    content: [
      {
        label: "Deobfuscate",
        path: "/js-deobfuscate",
        title: "Deobfuscate Code"
        // packageName: "babel-plugin-deobfuscate",
        // packageUrl: "https://www.npmjs.com/package/babel-plugin-deobfuscate"
      },
      {
        label: "Url Encode",
        path: "/urlencode",
        title: "Url encode",
        desc: "Url Escape, Unescape, encodeURI, decodeURI ..."
      },
      {
        label: "Unicode to Chinese Ascii",
        path: "/unicode-to-ascii",
        title: "Unicode to Chinese Ascii",
        desc: "Unicode to Chinese Ascii"
      }
    ]
  },
  {
    category: "Tools",
    content: [
      {
        label: "Curl builder",
        path: "/curl-builder",
        title: "Online curl command line builder",
        desc: "Online curl command line builder",
        links: [
          "//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        ]
      },
      {
        label: "Web Colors",
        path: "/web-color",
        title: "Web Colors",
        desc: "Web Colors"
      },
      {
        label: "Image Base64",
        path: "/image-base64",
        title: "Image convert to base64 html tag,css code online",
        desc: "Image convert to base64 html tag,css code onlines"
      },
      {
        label: "程序员老黄历",
        path: "/huangli",
        title: "程序员老黄历",
        desc: "程序员老黄历",
        links: ["/static/css/huangli.css"]
      },
      {
        label: "程序员求签",
        path: "/qiuqian",
        title: "程序员求签",
        desc: "程序员求签",
        links: ["/static/css/qiuqian.css"],
        scripts: ["//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"]
      }
    ]
  },
  {
    category: "Game",
    content: [
      {
        label: "Game 2048",
        path: "/g2048",
        title: "Game 2048",
        desc: "Game 2048"
      }
    ]
  },
  {
    category: "SVG",
    content: [
      {
        label: "to JSX",
        path: "/svg-to-jsx",
        packageName: "@svgr/core",
        packageUrl: "https://github.com/smooth-code/svgr",
        title: "Transform | A polyglot web converter."
      },
      {
        label: "to React Native",
        path: "/svg-to-react-native",
        packageName: "@svgr/core",
        packageUrl: "https://github.com/smooth-code/svgr"
      }
    ]
  },
  {
    category: "HTML",
    content: [
      {
        label: "to JSX",
        path: "/html-to-jsx"
      }
    ]
  },
  {
    category: "JSON",
    content: [
      {
        label: "to React PropTypes",
        path: "/json-to-proptypes",
        title: "Transform | All important transforms at one place."
      },
      {
        label: "to Flow",
        path: "/json-to-flow"
      },
      {
        label: "to TypeScript",
        path: "/json-to-typescript"
      },
      {
        label: "to MobX-State-Tree Model",
        path: "/json-to-mobx-state-tree"
      },
      {
        label: "to Sarcastic",
        path: "/json-to-sarcastic",
        packageName: "transform-json-types",
        packageUrl: "https://github.com/transform-it/transform-json-types"
      },
      {
        label: "to io-ts",
        path: "/json-to-io-ts",
        packageName: "transform-json-types",
        packageUrl: "https://github.com/transform-it/transform-json-types"
      },
      {
        label: "to Rust Serde",
        path: "/json-to-rust-serde",
        desc: "An online REPL for converting JSON to Rust Serde Structs."
      },
      {
        label: "to Mongoose Schema",
        path: "/json-to-mongoose",
        packageName: "generate-schema",
        packageUrl: "https://github.com/nijikokun/generate-schema"
      },
      {
        label: "to Big Query Schema",
        path: "/json-to-big-query",
        packageName: "generate-schema",
        packageUrl: "https://github.com/nijikokun/generate-schema"
      },
      {
        label: "to MySQL",
        path: "/json-to-mysql",
        packageName: "generate-schema",
        packageUrl: "https://github.com/nijikokun/generate-schema"
      },
      {
        label: "to Scala Case Class",
        path: "/json-to-scala-case-class"
      },
      {
        label: "to Go Struct",
        path: "/json-to-go",
        packageName: "json-to-go",
        packageUrl: "https://github.com/mholt/json-to-go"
      },
      {
        label: "to YAML",
        path: "/json-to-yaml",
        packageName: "json2yaml",
        packageUrl: "https://github.com/jeffsu/json2yaml"
      }
    ]
  },
  {
    category: "JSON Schema",
    content: [
      {
        label: "to TypeScript",
        path: "/json-schema-to-typescript",
        packageName: "json-schema-to-typescript",
        packageUrl: "https://github.com/bcherny/json-schema-to-typescript"
      },
      {
        label: "to OpenAPI Schema",
        path: "json-schema-to-openapi-schema",
        packageName: "json-schema-to-openapi-schema",
        packageUrl: "https://github.com/wework/json-schema-to-openapi-schema"
      }
    ]
  },
  {
    category: "CSS",
    content: [
      {
        label: "to JS Objects",
        path: "/css-to-js",
        packageName: "transform-css-to-js",
        packageUrl: "https://github.com/transform-it/transform-css-to-js"
      },
      {
        label: "to template literal",
        path: "/object-styles-to-template-literal",
        packageUrl:
          "https://github.com/satya164/babel-plugin-object-styles-to-template",
        packageName: "babel-plugin-object-styles-to-template"
      }
    ]
  },
  {
    category: "JavaScript",
    content: [
      {
        label: "to JSON",
        path: "/js-object-to-json",
        desc: "An online REPL for converting JS Object to JSON."
      }
    ]
  },
  {
    category: "GraphQL",
    content: [
      {
        label: "to TypeScript",
        path: "/graphql-to-typescript",
        packageUrl: "https://github.com/dotansimha/graphql-code-generator",
        packageName: "graphql-code-generator"
      },
      {
        label: "to Flow",
        path: "/graphql-to-flow",
        packageUrl: "https://github.com/dotansimha/graphql-code-generator",
        packageName: "graphql-code-generator"
      },
      {
        label: "to JAVA",
        path: "/graphql-to-java",
        packageUrl: "https://github.com/dotansimha/graphql-code-generator",
        packageName: "graphql-code-generator"
      },
      {
        label: "to Resolvers Signature",
        path: "/graphql-to-resolvers-signature",
        packageUrl: "https://github.com/dotansimha/graphql-code-generator",
        packageName: "graphql-code-generator"
      },

      {
        label: "to Introspection JSON",
        path: "/graphql-to-introspection-json",
        packageUrl: "https://github.com/dotansimha/graphql-code-generator",
        packageName: "graphql-code-generator"
      },

      {
        label: "to Schema AST",
        path: "/graphql-to-schema-ast",
        packageUrl: "https://github.com/dotansimha/graphql-code-generator",
        packageName: "graphql-code-generator"
      },
      {
        label: "to Fragment Matcher",
        path: "/graphql-to-fragment-matcher",
        packageUrl: "https://github.com/dotansimha/graphql-code-generator",
        packageName: "graphql-code-generator"
      },
      {
        label: "to Components",
        path: "/graphql-to-components",
        packageUrl: "https://github.com/dotansimha/graphql-code-generator",
        packageName: "graphql-code-generator"
      },
      {
        label: "to TypeScript MongoDB",
        path: "/graphql-to-typescript-mongodb",
        packageUrl: "https://github.com/dotansimha/graphql-code-generator",
        packageName: "graphql-code-generator"
      }
    ]
  },
  {
    category: "Others",
    iconName: "",
    content: [
      {
        label: "Flow to Typescript",
        path: "/flow-to-typescript"
      },
      {
        label: "XML to JSON",
        path: "/xml-to-json",
        packageName: "xml-js",
        packageUrl: "https://github.com/nashwaan/xml-js"
      },

      {
        label: "YAML to JSON",
        path: "/yaml-to-json",
        packageName: "yaml",
        packageUrl: "https://github.com/tj/js-yaml"
      },
      {
        label: "Markdown to HTML",
        path: "/markdown-to-html",
        packageName: "markdown",
        packageUrl: "https://github.com/evilstreak/markdown-js"
      }
    ]
  }
];

export interface Route {
  path: string;
  label: string;
  desc: string;
  beta?: boolean;
}

export const routes = flatten(
  categorizedRoutes.map(a =>
    // @ts-ignore
    a.content.map(x => {
      const _label =
        a.category.toLowerCase() !== "others"
          ? `${a.category} ${x.label}`
          : x.label;
      return {
        ...x,
        category: a.category,
        searchTerm: _label,
        desc: x.desc || `An online Repl to convert ${_label}`
      };
    })
  )
);

export function activeRouteData(pathname) {
  return find(routes, o => o.path === pathname);
}
