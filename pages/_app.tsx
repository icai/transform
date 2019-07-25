import React, { useEffect, Fragment } from "react";
import { Container } from "next/app";
import Head from "next/head";
import { Button, Text, Pane, Popover, Link, Heading } from "evergreen-ui";
import Navigator from "@components/Navigator";
import "@styles/main.css";

import NextLink from "next/link";

import NProgress from "nprogress";
import { useRouter } from "next/router";
import {
  activeRouteData,
  categorizedRoutes,
  Route,
  routes
} from "@utils/routes";
import Scripts from "@components/Scripts";
import Links from "@components/Links";

let reactGa;
if (IN_BROWSER && !IS_DEV) {
  reactGa = require("react-ga");
  reactGa.initialize("UA-71174418-1", {
    debug: IS_DEV
  });
}

const logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="90px"
    height="19px"
    viewBox="0 0 306 62"
    style={{
      marginTop: -4
    }}
  >
    <path
      fill="#fff"
      fillRule="nonzero"
      stroke="none"
      strokeWidth={1}
      d="M172.339 71.14V98h-7.91V71.14h-3.376v-7.382h3.375V51.207h7.91v12.55h6.153v7.384h-6.152zm11.989-7.382h7.91v3.058c1.453-1.523 2.742-2.566 3.867-3.129 1.149-.585 2.508-.878 4.078-.878 2.086 0 4.266.68 6.54 2.039L203.1 72.09c-1.5-1.078-2.964-1.617-4.394-1.617-4.313 0-6.469 3.257-6.469 9.773V98h-7.91V63.758zm52.138 0h7.945V98h-7.945v-3.586c-3.258 3.047-6.762 4.57-10.512 4.57-4.734 0-8.648-1.71-11.742-5.132-3.07-3.493-4.606-7.852-4.606-13.079 0-5.132 1.536-9.41 4.606-12.832 3.07-3.421 6.914-5.132 11.531-5.132 3.985 0 7.559 1.64 10.723 4.921v-3.972zm-18.774 17.015c0 3.282.88 5.954 2.637 8.016 1.805 2.086 4.078 3.129 6.82 3.129 2.93 0 5.297-1.008 7.102-3.023 1.805-2.086 2.707-4.735 2.707-7.946 0-3.21-.902-5.86-2.707-7.945-1.805-2.04-4.148-3.059-7.031-3.059-2.719 0-4.992 1.032-6.82 3.094-1.805 2.086-2.708 4.664-2.708 7.734zm37.162-17.015h7.945v3.164c2.766-2.742 5.883-4.113 9.352-4.113 3.984 0 7.09 1.253 9.316 3.761 1.922 2.133 2.883 5.614 2.883 10.442V98h-7.945V78.875c0-3.375-.47-5.707-1.407-6.996-.914-1.313-2.578-1.969-4.992-1.969-2.625 0-4.488.867-5.59 2.602-1.078 1.71-1.617 4.699-1.617 8.965V98h-7.945V63.758zm59.837 5.836l-6.54 3.48c-1.03-2.11-2.308-3.164-3.831-3.164-.727 0-1.348.24-1.864.72-.515.481-.773 1.097-.773 1.847 0 1.312 1.523 2.613 4.57 3.902 4.196 1.805 7.02 3.469 8.473 4.992 1.453 1.524 2.18 3.574 2.18 6.152 0 3.305-1.22 6.07-3.657 8.297-2.367 2.11-5.226 3.164-8.578 3.164-5.742 0-9.808-2.8-12.199-8.402l6.75-3.129c.938 1.64 1.652 2.684 2.145 3.129.96.89 2.109 1.336 3.445 1.336 2.672 0 4.008-1.219 4.008-3.656 0-1.407-1.032-2.719-3.094-3.938-.797-.398-1.594-.785-2.39-1.16-.798-.375-1.606-.762-2.426-1.16-2.297-1.125-3.914-2.25-4.852-3.375-1.195-1.43-1.793-3.27-1.793-5.52 0-2.976 1.02-5.437 3.059-7.382 2.086-1.946 4.617-2.918 7.593-2.918 4.383 0 7.641 2.261 9.774 6.785zm17.966 1.547V98h-7.945V71.14h-2.813v-7.382h2.813V50.539c0-4.312.75-7.36 2.25-9.14 2.062-2.485 5.062-3.727 9-3.727 1.406 0 3.175.41 5.308 1.23v8.086l-.808-.422c-1.711-.867-3.118-1.3-4.22-1.3-1.405 0-2.355.504-2.847 1.511-.492.985-.738 2.883-.738 5.696v11.285h8.613v7.383h-8.613zm12.903 9.492c0-4.946 1.77-9.153 5.309-12.621 3.539-3.469 7.851-5.203 12.937-5.203 5.11 0 9.446 1.746 13.008 5.238 3.516 3.492 5.274 7.781 5.274 12.867 0 5.133-1.77 9.434-5.309 12.902-3.562 3.446-7.933 5.168-13.113 5.168-5.133 0-9.434-1.757-12.903-5.273-3.468-3.469-5.203-7.828-5.203-13.078zm8.086.14c0 3.422.914 6.13 2.742 8.122 1.875 2.015 4.348 3.023 7.418 3.023 3.094 0 5.567-.996 7.418-2.988 1.852-1.993 2.778-4.653 2.778-7.98 0-3.329-.926-5.99-2.778-7.981-1.875-2.016-4.347-3.024-7.418-3.024-3.023 0-5.472 1.008-7.347 3.024-1.875 2.015-2.813 4.617-2.813 7.804zm37.267-17.015h7.91v3.058c1.453-1.523 2.742-2.566 3.867-3.129 1.149-.585 2.508-.878 4.079-.878 2.085 0 4.265.68 6.539 2.039l-3.622 7.242c-1.5-1.078-2.964-1.617-4.394-1.617-4.313 0-6.469 3.257-6.469 9.773V98h-7.91V63.758zm28.478 0h7.91v3.164c1.523-1.594 2.824-2.672 3.902-3.234 1.149-.586 2.59-.88 4.324-.88 3.868 0 6.926 1.688 9.176 5.063 2.485-3.375 5.848-5.062 10.09-5.062 7.711 0 11.566 4.675 11.566 14.027V98h-7.945V78.98c0-3.28-.398-5.601-1.195-6.96-.82-1.383-2.168-2.075-4.043-2.075-2.18 0-3.768.82-4.764 2.461-.996 1.64-1.494 4.278-1.494 7.91V98h-7.945V79.086c0-6.094-1.758-9.14-5.274-9.14-2.226 0-3.85.831-4.869 2.495-1.02 1.664-1.53 4.29-1.53 7.875V98h-7.91V63.758z"
      transform="translate(-161 -37)"
    />
  </svg>
);

const logo2 = (
  <svg
    version="1.1"
    viewBox="0 0 512 512"
    fill="#000"
    width="40px"
    height="40px"
  >
    <path d="M506.192 69.175a8.467 8.467 0 0 0-2.484-5.754l-6.336-6.336-.033-.034a8.476 8.476 0 0 0-5.765-2.487c-18.12-9.377-41.377-7.396-57.28 6.389l-16.881 14.634a8.513 8.513 0 0 0-1.721 2.047l-27.584 45.944-16.833 5.611a8.503 8.503 0 0 0-3.323 14.076l7.401 7.401-82.355 82.355c-.208.208-.364.446-.547.669h-79.93v-59.505h34.003a8.501 8.501 0 0 0 8.501-8.501v-8.501h17.002v8.501a8.501 8.501 0 0 0 8.501 8.501h42.504a8.501 8.501 0 0 0 8.501-8.501V89.178a8.501 8.501 0 0 0-8.501-8.501h-42.504a8.501 8.501 0 0 0-8.501 8.501v8.501h-17.002v-8.501a8.501 8.501 0 0 0-8.501-8.501h-110.51c-2.486 0-61.191.102-87.695 8.937-27.19 9.063-45.206 27.676-45.96 28.465a8.503 8.503 0 0 0-1.675 9.216 8.503 8.503 0 0 0 7.818 5.16c.498 0 50.023.084 74.041 7.362 23.049 6.985 47.134 31.545 47.37 31.789a8.498 8.498 0 0 0 6.1 2.58h8.501v59.505H51.005a8.501 8.501 0 0 0-8.501 8.501V395.23c0 37.485 30.485 67.981 67.958 67.981h297.62c37.473 0 67.96-30.497 67.96-67.981V242.191a8.501 8.501 0 0 0-8.501-8.501h-105.74l48.287-48.288 7.404 7.404a8.496 8.496 0 0 0 7.963 2.262 8.502 8.502 0 0 0 6.112-5.586l5.614-16.845 46.642-28.167a8.485 8.485 0 0 0 2.042-1.724l14.05-16.279c13.732-15.911 15.671-39.174 6.277-57.292zm-366.695 88.009c-7.424-7.122-29.362-26.771-52.024-33.638-15.102-4.576-38.065-6.566-55.355-7.429 5.994-3.792 13.303-7.618 21.574-10.374 23.896-7.965 81.739-8.065 82.32-8.065h102.009v8.501a8.501 8.501 0 0 0 8.501 8.501h34.003a8.501 8.501 0 0 0 8.501-8.501v-8.501h25.502v59.505h-25.502v-8.501a8.501 8.501 0 0 0-8.501-8.501h-34.003a8.501 8.501 0 0 0-8.501 8.501v8.501H139.497zm56.021 17.001v59.505h-34.003v-59.505h34.003zm263.524 76.507V395.23c0 28.11-22.86 50.98-50.959 50.98h-297.62c-28.099 0-50.957-22.87-50.957-50.98V250.692h399.536zM338.41 233.039c-.202.203-.354.434-.532.652h-21.507l71.004-71.002 10.692 10.693-59.657 59.657zm148.635-117.678l-13.166 15.255-48.166 29.087a8.498 8.498 0 0 0-3.671 4.59l-2.254 6.766-18.83-18.83-7.571-7.572-.006-.005-3.682-3.682 6.766-2.255a8.502 8.502 0 0 0 4.601-3.689l28.505-47.478 15.858-13.747c12.033-10.427 30.369-10.719 42.85-1.315 9.415 12.489 9.153 30.837-1.234 42.875z" />
    <polygon
      points="94.734,312.951 94.734,324.224 117.022,324.224 117.022,386.704 130.742,386.704 130.742,324.224 
        152.929,324.224 152.929,312.951 		"
    />
    <path d="M307.269 334.807c-1.803-4.607-4.335-8.586-7.6-11.935-3.263-3.35-7.191-5.976-11.782-7.88-4.59-1.904-9.673-2.856-15.25-2.856s-10.668.943-15.276 2.83c-4.607 1.888-8.552 4.514-11.833 7.88-3.282 3.366-5.823 7.354-7.626 11.961-1.802 4.607-2.703 9.614-2.703 15.021s.902 10.414 2.703 15.021c1.803 4.607 4.344 8.594 7.626 11.96 3.281 3.366 7.225 5.993 11.833 7.88 4.607 1.887 9.699 2.831 15.276 2.831s10.66-.944 15.25-2.831c4.591-1.887 8.518-4.514 11.782-7.88 3.265-3.366 5.797-7.353 7.6-11.96s2.703-9.615 2.703-15.021c0-5.406-.9-10.413-2.703-15.021zm-12.98 25.91c-1.071 3.213-2.61 5.934-4.616 8.161-2.007 2.227-4.447 3.936-7.32 5.126-2.873 1.19-6.112 1.785-9.716 1.785-3.605 0-6.852-.595-9.742-1.785-2.89-1.19-5.347-2.899-7.371-5.126-2.023-2.227-3.579-4.948-4.666-8.161-1.089-3.213-1.632-6.843-1.632-10.889s.544-7.676 1.632-10.889c1.087-3.213 2.644-5.942 4.667-8.186 2.023-2.245 4.481-3.961 7.371-5.152 2.89-1.19 6.137-1.785 9.742-1.785 3.604 0 6.842.595 9.716 1.785 2.873 1.19 5.313 2.907 7.32 5.152 2.006 2.244 3.545 4.972 4.616 8.186 1.071 3.213 1.606 6.843 1.606 10.889s-.536 7.676-1.607 10.889zm-68.576-25.91c-1.803-4.607-4.335-8.586-7.6-11.935-3.263-3.35-7.191-5.976-11.782-7.88-4.59-1.904-9.673-2.856-15.25-2.856s-10.668.943-15.276 2.83c-4.607 1.888-8.552 4.514-11.834 7.88-3.281 3.366-5.822 7.354-7.625 11.961-1.802 4.607-2.703 9.614-2.703 15.021s.902 10.414 2.703 15.021c1.802 4.607 4.344 8.594 7.625 11.96 3.282 3.366 7.227 5.993 11.834 7.88 4.607 1.887 9.699 2.831 15.276 2.831s10.66-.944 15.25-2.831c4.591-1.887 8.518-4.514 11.782-7.88 3.265-3.366 5.797-7.353 7.6-11.96s2.703-9.615 2.703-15.021c0-5.406-.9-10.413-2.703-15.021zm-12.981 25.91c-1.071 3.213-2.61 5.934-4.616 8.161-2.007 2.227-4.447 3.936-7.32 5.126-2.873 1.19-6.112 1.785-9.716 1.785-3.605 0-6.852-.595-9.742-1.785-2.891-1.19-5.347-2.899-7.371-5.126-2.023-2.227-3.579-4.948-4.667-8.161-1.089-3.213-1.632-6.843-1.632-10.889s.544-7.676 1.632-10.889c1.087-3.213 2.644-5.942 4.667-8.186 2.023-2.245 4.48-3.961 7.371-5.152 2.89-1.19 6.137-1.785 9.742-1.785 3.604 0 6.842.595 9.716 1.785 2.873 1.19 5.313 2.907 7.32 5.152 2.006 2.244 3.545 4.973 4.616 8.186s1.606 6.843 1.606 10.889-.535 7.676-1.606 10.889zm203.56-4.921c-.968-2.142-2.252-3.953-3.851-5.432a21.651 21.651 0 0 0-5.457-3.672 60.18 60.18 0 0 0-6.248-2.551 262.492 262.492 0 0 0-6.248-2.065c-2.04-.646-3.859-1.377-5.457-2.193s-2.882-1.802-3.851-2.958c-.969-1.156-1.454-2.601-1.454-4.335 0-1.36.238-2.609.714-3.749a7.645 7.645 0 0 1 2.168-2.933c.969-.816 2.159-1.454 3.571-1.913 1.41-.459 3.068-.689 4.973-.689 2.109 0 3.936.263 5.483.791s2.898 1.113 4.054 1.759a77.86 77.86 0 0 1 3.009 1.76c.851.527 1.616.791 2.295.791.681 0 1.267-.153 1.76-.459s.927-.833 1.3-1.581l3.366-6.477c-2.584-2.448-5.713-4.353-9.385-5.713-3.672-1.36-7.684-2.04-12.037-2.04-3.841 0-7.259.595-10.251 1.785-2.993 1.19-5.517 2.771-7.574 4.743-2.058 1.973-3.622 4.234-4.692 6.784s-1.606 5.168-1.606 7.855c0 3.366.485 6.197 1.453 8.492.969 2.295 2.253 4.208 3.851 5.738a20.162 20.162 0 0 0 5.458 3.723 53.654 53.654 0 0 0 6.222 2.448 183.98 183.98 0 0 0 6.223 1.888c2.04.578 3.859 1.284 5.457 2.116 1.598.833 2.882 1.862 3.851 3.086.969 1.224 1.454 2.805 1.454 4.743 0 3.469-1.071 6.129-3.214 7.982-2.142 1.854-5.169 2.78-9.079 2.78-2.55 0-4.735-.349-6.554-1.045-1.819-.697-3.401-1.471-4.743-2.321s-2.508-1.623-3.494-2.321c-.986-.697-1.904-1.045-2.754-1.045-.646 0-1.233.161-1.76.485a5.043 5.043 0 0 0-1.351 1.199l-3.979 6.579c1.428 1.462 3.052 2.788 4.871 3.979s3.774 2.21 5.865 3.06a36.517 36.517 0 0 0 6.554 1.964c2.279.459 4.591.689 6.937.689 4.08 0 7.702-.621 10.864-1.862 3.163-1.241 5.84-2.941 8.034-5.101a21.607 21.607 0 0 0 4.999-7.599c1.138-2.907 1.708-6.027 1.708-9.36-.002-3.062-.486-5.663-1.455-7.805z" />
    <polygon points="334.505,375.382 334.505,312.951 320.785,312.951 320.785,386.704 364.037,386.704 364.037,375.382 		" />
  </svg>
);

function renderHeadWay() {
  if (!IN_BROWSER) return;

  const HW_config = {
    selector: ".transform-changelog", // CSS selector where to inject the badge
    account: "J0B24x",
    trigger: ".transform-changelog"
  };

  (function(src) {
    const tag = document.createElement("script");
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName("body")[0].appendChild(tag);

    tag.onload = () => {
      // @ts-ignore
      window.Headway.init(HW_config);
    };
  })("https://cdn.headwayapp.co/widget.js");
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    reactGa && reactGa.pageview(router.pathname);

    const startProgress = () => NProgress.start();

    let timer;
    const stopProgress = pathname => {
      reactGa && reactGa.pageview(pathname);
      clearTimeout(timer);
      NProgress.done();
    };

    const showProgressBar = () => {
      timer = setTimeout(startProgress, 300);
      router.events.on("routeChangeComplete", stopProgress);
      router.events.on("routeChangeError", stopProgress);
    };

    router.events.on("routeChangeStart", showProgressBar);

    return () => {
      router.events.off("routeChangeComplete", stopProgress);
      router.events.off("routeChangeError", stopProgress);
      router.events.off("routeChangeStart", showProgressBar);
      timer && clearTimeout(timer);
    };
  }, []);

  // renderHeadWay();

  const activeRoute = activeRouteData(router.pathname);

  return (
    <Container>
      <Head>
        <title>
          {activeRoute && (activeRoute.title || activeRoute.searchTerm)} -
          W3cubTools
        </title>
        <meta name="description" content={activeRoute && activeRoute.desc} />

        {activeRoute && activeRoute.links && (
          <Links links={activeRoute.links} />
        )}

        {activeRoute && activeRoute.scripts && (
          <Scripts scripts={activeRoute.scripts} />
        )}
        <meta name="viewport" content="width=1024" />
      </Head>

      <Pane
        display="flex"
        alignItems="center"
        flexDirection="row"
        is="header"
        height={48}
        backgroundColor="#fff"
        paddingRight={"3%"}
        paddingLeft={"4%"}
        className="hidden-print"
        css={{
          boxShadow: "0 2px 2px 0 rgba(0,0,0,.1), 0 1px 0 0 rgba(0,0,0,.1)"
        }}
      >
        <Pane
          flex={1}
          display="flex"
          paddingRight={"3%"}
          className="logo-transform"
        >
          <NextLink href="/">{logo2}</NextLink>
        </Pane>
        <Pane>
          <a href="https://docs.w3cub.com/" target="_blank">
            <Button appearance="minimal" height={40}>
              W3cubDocs
            </Button>
          </a>
        </Pane>
      </Pane>
      <Pane display="flex" flexDirection="row" className="mainlayout">
        {/* { router.pathname != '/' && <Navigator />} */}
        <Component {...pageProps} />
      </Pane>
      {router.pathname != "/" && (
        <div className="sitemap hidden-print">
          {categorizedRoutes.map((route, i) => {
            return (
              <Fragment key={i + 1}>
                <ul className="clearfix ">
                  <li>
                    <span>{route.category}:</span>
                  </li>
                  {(route.content as Route[]).map((a: Route) => {
                    return (
                      <li key={a.path}>
                        <NextLink href={a.path} key={route.category + a.label}>
                          <a className="item">
                            {a.label}{" "}
                            {a.beta && <span className="beta">Beta</span>}
                          </a>
                        </NextLink>
                      </li>
                    );
                  })}
                </ul>
              </Fragment>
            );
          })}
        </div>
      )}
      <style jsx>{`
        .sitemap {
          margin-top: 30px;
          background: #f2f2f2;
          padding: 30px 15px;
          font-size: 15px;
          font-family: "Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial,
            sans-serif;
        }

        .sitemap ul > li {
          list-style: none;
          float: left;
          margin-left: 10px;
        }

        .sitemap ul > li > span {
          color: rgb(35, 67, 97);
        }
        .sitemap .item {
          color: rgb(66, 90, 112);
          color: #666;
          text-decoration: none;
        }
      `}</style>
    </Container>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};
