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
    width="149"
    height="19"
    viewBox="0 0 149 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#000"
      d="M14.624 15.68L11.731 4.95l-2.93 10.73c-.228.814-.409 1.398-.543 1.752a2.322 2.322 0 0 1-.702.952c-.334.28-.777.421-1.33.421-.448 0-.816-.083-1.105-.25a1.921 1.921 0 0 1-.702-.708 4.449 4.449 0 0 1-.44-1.087c-.113-.419-.215-.807-.305-1.165L.696 3.546c-.18-.7-.269-1.233-.269-1.599 0-.464.163-.854.489-1.172C1.24.458 1.644.3 2.124.3c.66 0 1.103.212 1.33.635.228.423.428 1.038.599 1.843l2.343 10.45 2.625-9.778c.195-.749.37-1.319.525-1.71.155-.39.407-.728.757-1.012.35-.285.826-.428 1.428-.428.61 0 1.084.149 1.422.446.338.297.572.62.702.97s.305.928.525 1.734l2.649 9.778 2.344-10.45c.113-.545.221-.972.323-1.281.102-.31.277-.586.525-.83.248-.245.608-.367 1.08-.367.472 0 .873.157 1.203.47.33.314.494.706.494 1.178 0 .334-.09.867-.269 1.6l-2.978 12.048c-.203.814-.372 1.41-.507 1.788-.134.378-.362.71-.683.995-.322.285-.775.427-1.361.427-.554 0-.997-.138-1.33-.415-.335-.277-.566-.588-.697-.934-.13-.346-.313-.938-.549-1.776zm15.674-7.983c.749 0 1.393-.22 1.935-.66.54-.439.811-1.07.811-1.891a2.26 2.26 0 0 0-.647-1.618c-.43-.452-1.013-.677-1.745-.677-.497 0-.905.069-1.227.207a1.974 1.974 0 0 0-.763.55c-.187.227-.364.52-.53.878-.168.358-.32.696-.459 1.014-.081.17-.228.305-.44.402a1.73 1.73 0 0 1-.732.147c-.325 0-.624-.132-.897-.397-.272-.264-.409-.616-.409-1.056 0-.423.128-.869.385-1.336.256-.468.63-.914 1.123-1.337.492-.423 1.105-.763 1.837-1.02.732-.256 1.55-.384 2.454-.384.789 0 1.51.108 2.16.324a5.047 5.047 0 0 1 1.697.933c.48.407.842.88 1.087 1.416a4.14 4.14 0 0 1 .366 1.734c0 .814-.177 1.511-.531 2.093-.354.582-.86 1.15-1.52 1.703a6.73 6.73 0 0 1 1.605 1.172c.436.44.763.926.983 1.459.22.533.33 1.109.33 1.727 0 .74-.15 1.457-.446 2.149a5.48 5.48 0 0 1-1.312 1.849 6.257 6.257 0 0 1-2.057 1.27c-.794.305-1.67.457-2.63.457-.977 0-1.852-.175-2.625-.525-.774-.35-1.41-.787-1.91-1.312-.501-.525-.88-1.068-1.136-1.63-.256-.561-.385-1.025-.385-1.391 0-.472.153-.853.458-1.142.305-.288.686-.433 1.142-.433.227 0 .447.067.659.201.211.135.35.295.415.483.423 1.13.877 1.971 1.36 2.52.485.55 1.167.824 2.046.824a3.074 3.074 0 0 0 2.618-1.477c.305-.488.458-1.054.458-1.696 0-.953-.26-1.7-.782-2.24-.52-.542-1.245-.812-2.172-.812a8.86 8.86 0 0 0-.757.049 9.311 9.311 0 0 1-.66.048c-.447 0-.793-.111-1.037-.335-.244-.224-.366-.535-.366-.934 0-.39.146-.706.44-.946.292-.24.728-.36 1.305-.36h.5zm21.68 6.982c0 .415-.125.859-.373 1.33-.248.473-.626.922-1.135 1.35-.509.427-1.15.77-1.923 1.031-.773.26-1.644.39-2.612.39-2.059 0-3.666-.6-4.822-1.8-1.155-1.2-1.733-2.81-1.733-4.828 0-1.367.264-2.575.793-3.625a5.696 5.696 0 0 1 2.295-2.435c1.001-.574 2.198-.861 3.59-.861.862 0 1.653.126 2.373.378.72.253 1.331.578 1.831.977s.883.824 1.148 1.276c.264.451.397.872.397 1.263 0 .399-.149.736-.446 1.013a1.528 1.528 0 0 1-1.08.415c-.277 0-.507-.071-.69-.213-.183-.143-.389-.373-.616-.69-.407-.619-.833-1.082-1.276-1.392-.444-.309-1.007-.464-1.69-.464-.985 0-1.779.385-2.381 1.154-.602.769-.903 1.82-.903 3.156 0 .626.077 1.202.232 1.727.154.525.378.972.67 1.343.294.37.648.65 1.063.842.415.191.87.287 1.367.287.667 0 1.24-.155 1.715-.464.476-.31.897-.781 1.264-1.416.203-.374.423-.667.659-.88.236-.21.525-.316.867-.316.406 0 .744.154 1.013.463.268.31.403.64.403.99zm11.56 2.246v-.427a7.436 7.436 0 0 1-1.258 1.27c-.44.341-.92.596-1.44.763-.521.166-1.115.25-1.782.25-.806 0-1.528-.167-2.167-.5a3.655 3.655 0 0 1-1.483-1.38c-.415-.708-.623-1.725-.623-3.052V7.245c0-.667.15-1.166.452-1.495.3-.33.7-.495 1.196-.495.505 0 .912.167 1.22.5.31.335.465.83.465 1.49v5.335c0 .773.065 1.422.195 1.947.13.525.364.935.702 1.233.338.297.795.445 1.373.445.562 0 1.09-.167 1.587-.5a2.922 2.922 0 0 0 1.087-1.307c.187-.472.28-1.505.28-3.1V7.245c0-.66.155-1.155.464-1.49.31-.333.712-.5 1.209-.5.496 0 .895.165 1.196.495.301.33.452.828.452 1.495v9.656c0 .635-.145 1.11-.434 1.428-.289.317-.661.476-1.117.476-.455 0-.832-.165-1.129-.494-.297-.33-.445-.792-.445-1.386zm9.521-14.721v5.09c.627-.651 1.266-1.15 1.917-1.495.65-.346 1.456-.52 2.417-.52 1.106 0 2.077.263 2.911.788.834.525 1.481 1.286 1.94 2.283.46.997.69 2.179.69 3.546 0 1.01-.128 1.935-.384 2.777-.256.842-.629 1.573-1.117 2.191a5.046 5.046 0 0 1-1.776 1.435 5.199 5.199 0 0 1-2.301.506c-.513 0-.995-.06-1.447-.183a4.242 4.242 0 0 1-1.153-.482 5.222 5.222 0 0 1-.812-.617 13.883 13.883 0 0 1-.885-.952v.33c0 .627-.15 1.1-.452 1.422-.3.321-.683.482-1.147.482-.472 0-.848-.16-1.13-.482-.28-.321-.42-.795-.42-1.422V2.35c0-.676.136-1.187.409-1.533C70.59.472 70.972.3 71.46.3c.513 0 .907.165 1.184.495.277.33.415.8.415 1.41zm.159 9.9c0 1.326.303 2.345.91 3.057.605.712 1.401 1.068 2.386 1.068.838 0 1.56-.364 2.166-1.092.607-.728.91-1.772.91-3.131 0-.88-.126-1.636-.379-2.27-.252-.635-.61-1.126-1.074-1.472-.464-.345-1.005-.518-1.623-.518-.635 0-1.2.173-1.697.518-.497.346-.887.847-1.172 1.502-.285.655-.427 1.434-.427 2.338zM97.46 3.595h-3.955v13c0 .75-.167 1.305-.5 1.667-.334.362-.766.543-1.295.543-.537 0-.974-.183-1.312-.55-.338-.365-.506-.919-.506-1.66v-13h-3.956c-.618 0-1.078-.136-1.379-.409-.301-.272-.452-.632-.452-1.08 0-.464.157-.83.47-1.099.314-.268.767-.403 1.362-.403H97.46c.627 0 1.092.139 1.398.416.305.276.457.638.457 1.086 0 .448-.154.808-.463 1.08-.31.273-.774.41-1.392.41zm16.247 8.435c0 .993-.154 1.909-.463 2.747a6.065 6.065 0 0 1-1.343 2.16 5.929 5.929 0 0 1-2.1 1.386c-.814.321-1.73.482-2.746.482-1.01 0-1.917-.163-2.723-.488a6.045 6.045 0 0 1-2.093-1.398 6.043 6.043 0 0 1-1.343-2.148c-.305-.826-.458-1.74-.458-2.74 0-1.01.155-1.934.464-2.772a6.03 6.03 0 0 1 1.33-2.148 5.865 5.865 0 0 1 2.1-1.373c.822-.322 1.73-.483 2.723-.483 1.009 0 1.924.163 2.746.489.822.325 1.526.789 2.112 1.391a6.015 6.015 0 0 1 1.337 2.149c.305.83.457 1.745.457 2.746zm-3.344 0c0-1.359-.3-2.417-.897-3.174-.599-.756-1.402-1.135-2.411-1.135-.651 0-1.225.17-1.722.507-.496.338-.878.836-1.147 1.495-.269.66-.403 1.428-.403 2.307 0 .871.132 1.632.397 2.283.264.651.643 1.15 1.135 1.495.493.346 1.072.52 1.74.52 1.009 0 1.812-.381 2.41-1.142.599-.761.898-1.813.898-3.156zm18.445 0c0 .993-.155 1.909-.464 2.747a6.065 6.065 0 0 1-1.343 2.16 5.929 5.929 0 0 1-2.1 1.386c-.813.321-1.729.482-2.746.482-1.01 0-1.917-.163-2.722-.488a6.045 6.045 0 0 1-2.094-1.398 6.043 6.043 0 0 1-1.343-2.148c-.305-.826-.457-1.74-.457-2.74 0-1.01.154-1.934.463-2.772a6.03 6.03 0 0 1 1.331-2.148 5.865 5.865 0 0 1 2.1-1.373c.822-.322 1.729-.483 2.722-.483 1.009 0 1.924.163 2.746.489.822.325 1.526.789 2.112 1.391a6.015 6.015 0 0 1 1.337 2.149c.305.83.458 1.745.458 2.746zm-3.345 0c0-1.359-.3-2.417-.897-3.174-.598-.756-1.402-1.135-2.411-1.135-.651 0-1.225.17-1.721.507-.497.338-.88.836-1.148 1.495-.268.66-.403 1.428-.403 2.307 0 .871.133 1.632.397 2.283s.643 1.15 1.135 1.495c.493.346 1.072.52 1.74.52 1.009 0 1.813-.381 2.41-1.142.599-.761.898-1.813.898-3.156zm5.97 4.749V2.326c0-.668.148-1.172.445-1.514.297-.342.697-.513 1.202-.513s.912.17 1.22.507c.31.338.465.844.465 1.52v14.453c0 .675-.157 1.182-.47 1.52-.314.337-.719.506-1.215.506-.488 0-.885-.175-1.19-.525-.305-.35-.458-.85-.458-1.501zm17.504-2.332c0 .92-.224 1.707-.671 2.362-.448.655-1.11 1.152-1.984 1.49-.875.337-1.939.506-3.192.506-1.196 0-2.222-.183-3.076-.55-.855-.365-1.486-.823-1.892-1.372-.407-.55-.61-1.101-.61-1.654 0-.367.13-.68.39-.94.26-.26.59-.391.989-.391.35 0 .618.085.805.256.187.171.366.411.537.72.342.595.751 1.038 1.227 1.331.476.293 1.125.44 1.947.44.668 0 1.215-.149 1.642-.446.427-.297.64-.637.64-1.02 0-.585-.22-1.012-.664-1.281-.444-.269-1.174-.525-2.192-.77-1.147-.284-2.08-.583-2.801-.896-.72-.314-1.296-.727-1.727-1.24-.432-.512-.647-1.143-.647-1.891 0-.668.2-1.298.598-1.893.399-.594.987-1.068 1.764-1.422.777-.354 1.715-.53 2.813-.53.863 0 1.638.089 2.326.268.688.179 1.261.419 1.721.72.46.301.81.635 1.05 1.001.24.366.36.724.36 1.074 0 .383-.128.696-.385.94-.256.244-.62.366-1.092.366-.342 0-.633-.097-.873-.292-.24-.196-.515-.489-.824-.88a3.012 3.012 0 0 0-.89-.78c-.343-.196-.807-.294-1.393-.294-.602 0-1.102.129-1.501.385-.399.256-.598.576-.598.958 0 .35.146.637.44.86.292.225.687.41 1.183.556.497.147 1.18.326 2.051.537 1.034.253 1.878.554 2.533.904s1.152.763 1.49 1.239c.337.476.506 1.019.506 1.63z"
      id="a"
    />
  </svg>
  // <svg
  //   version="1.1"
  //   viewBox="0 0 512 512"
  //   fill="#000"
  //   width="40px"
  //   height="40px"
  // >
  //   <path d="M506.192 69.175a8.467 8.467 0 0 0-2.484-5.754l-6.336-6.336-.033-.034a8.476 8.476 0 0 0-5.765-2.487c-18.12-9.377-41.377-7.396-57.28 6.389l-16.881 14.634a8.513 8.513 0 0 0-1.721 2.047l-27.584 45.944-16.833 5.611a8.503 8.503 0 0 0-3.323 14.076l7.401 7.401-82.355 82.355c-.208.208-.364.446-.547.669h-79.93v-59.505h34.003a8.501 8.501 0 0 0 8.501-8.501v-8.501h17.002v8.501a8.501 8.501 0 0 0 8.501 8.501h42.504a8.501 8.501 0 0 0 8.501-8.501V89.178a8.501 8.501 0 0 0-8.501-8.501h-42.504a8.501 8.501 0 0 0-8.501 8.501v8.501h-17.002v-8.501a8.501 8.501 0 0 0-8.501-8.501h-110.51c-2.486 0-61.191.102-87.695 8.937-27.19 9.063-45.206 27.676-45.96 28.465a8.503 8.503 0 0 0-1.675 9.216 8.503 8.503 0 0 0 7.818 5.16c.498 0 50.023.084 74.041 7.362 23.049 6.985 47.134 31.545 47.37 31.789a8.498 8.498 0 0 0 6.1 2.58h8.501v59.505H51.005a8.501 8.501 0 0 0-8.501 8.501V395.23c0 37.485 30.485 67.981 67.958 67.981h297.62c37.473 0 67.96-30.497 67.96-67.981V242.191a8.501 8.501 0 0 0-8.501-8.501h-105.74l48.287-48.288 7.404 7.404a8.496 8.496 0 0 0 7.963 2.262 8.502 8.502 0 0 0 6.112-5.586l5.614-16.845 46.642-28.167a8.485 8.485 0 0 0 2.042-1.724l14.05-16.279c13.732-15.911 15.671-39.174 6.277-57.292zm-366.695 88.009c-7.424-7.122-29.362-26.771-52.024-33.638-15.102-4.576-38.065-6.566-55.355-7.429 5.994-3.792 13.303-7.618 21.574-10.374 23.896-7.965 81.739-8.065 82.32-8.065h102.009v8.501a8.501 8.501 0 0 0 8.501 8.501h34.003a8.501 8.501 0 0 0 8.501-8.501v-8.501h25.502v59.505h-25.502v-8.501a8.501 8.501 0 0 0-8.501-8.501h-34.003a8.501 8.501 0 0 0-8.501 8.501v8.501H139.497zm56.021 17.001v59.505h-34.003v-59.505h34.003zm263.524 76.507V395.23c0 28.11-22.86 50.98-50.959 50.98h-297.62c-28.099 0-50.957-22.87-50.957-50.98V250.692h399.536zM338.41 233.039c-.202.203-.354.434-.532.652h-21.507l71.004-71.002 10.692 10.693-59.657 59.657zm148.635-117.678l-13.166 15.255-48.166 29.087a8.498 8.498 0 0 0-3.671 4.59l-2.254 6.766-18.83-18.83-7.571-7.572-.006-.005-3.682-3.682 6.766-2.255a8.502 8.502 0 0 0 4.601-3.689l28.505-47.478 15.858-13.747c12.033-10.427 30.369-10.719 42.85-1.315 9.415 12.489 9.153 30.837-1.234 42.875z" />
  //   <polygon
  //     points="94.734,312.951 94.734,324.224 117.022,324.224 117.022,386.704 130.742,386.704 130.742,324.224
  //       152.929,324.224 152.929,312.951 		"
  //   />
  //   <path d="M307.269 334.807c-1.803-4.607-4.335-8.586-7.6-11.935-3.263-3.35-7.191-5.976-11.782-7.88-4.59-1.904-9.673-2.856-15.25-2.856s-10.668.943-15.276 2.83c-4.607 1.888-8.552 4.514-11.833 7.88-3.282 3.366-5.823 7.354-7.626 11.961-1.802 4.607-2.703 9.614-2.703 15.021s.902 10.414 2.703 15.021c1.803 4.607 4.344 8.594 7.626 11.96 3.281 3.366 7.225 5.993 11.833 7.88 4.607 1.887 9.699 2.831 15.276 2.831s10.66-.944 15.25-2.831c4.591-1.887 8.518-4.514 11.782-7.88 3.265-3.366 5.797-7.353 7.6-11.96s2.703-9.615 2.703-15.021c0-5.406-.9-10.413-2.703-15.021zm-12.98 25.91c-1.071 3.213-2.61 5.934-4.616 8.161-2.007 2.227-4.447 3.936-7.32 5.126-2.873 1.19-6.112 1.785-9.716 1.785-3.605 0-6.852-.595-9.742-1.785-2.89-1.19-5.347-2.899-7.371-5.126-2.023-2.227-3.579-4.948-4.666-8.161-1.089-3.213-1.632-6.843-1.632-10.889s.544-7.676 1.632-10.889c1.087-3.213 2.644-5.942 4.667-8.186 2.023-2.245 4.481-3.961 7.371-5.152 2.89-1.19 6.137-1.785 9.742-1.785 3.604 0 6.842.595 9.716 1.785 2.873 1.19 5.313 2.907 7.32 5.152 2.006 2.244 3.545 4.972 4.616 8.186 1.071 3.213 1.606 6.843 1.606 10.889s-.536 7.676-1.607 10.889zm-68.576-25.91c-1.803-4.607-4.335-8.586-7.6-11.935-3.263-3.35-7.191-5.976-11.782-7.88-4.59-1.904-9.673-2.856-15.25-2.856s-10.668.943-15.276 2.83c-4.607 1.888-8.552 4.514-11.834 7.88-3.281 3.366-5.822 7.354-7.625 11.961-1.802 4.607-2.703 9.614-2.703 15.021s.902 10.414 2.703 15.021c1.802 4.607 4.344 8.594 7.625 11.96 3.282 3.366 7.227 5.993 11.834 7.88 4.607 1.887 9.699 2.831 15.276 2.831s10.66-.944 15.25-2.831c4.591-1.887 8.518-4.514 11.782-7.88 3.265-3.366 5.797-7.353 7.6-11.96s2.703-9.615 2.703-15.021c0-5.406-.9-10.413-2.703-15.021zm-12.981 25.91c-1.071 3.213-2.61 5.934-4.616 8.161-2.007 2.227-4.447 3.936-7.32 5.126-2.873 1.19-6.112 1.785-9.716 1.785-3.605 0-6.852-.595-9.742-1.785-2.891-1.19-5.347-2.899-7.371-5.126-2.023-2.227-3.579-4.948-4.667-8.161-1.089-3.213-1.632-6.843-1.632-10.889s.544-7.676 1.632-10.889c1.087-3.213 2.644-5.942 4.667-8.186 2.023-2.245 4.48-3.961 7.371-5.152 2.89-1.19 6.137-1.785 9.742-1.785 3.604 0 6.842.595 9.716 1.785 2.873 1.19 5.313 2.907 7.32 5.152 2.006 2.244 3.545 4.973 4.616 8.186s1.606 6.843 1.606 10.889-.535 7.676-1.606 10.889zm203.56-4.921c-.968-2.142-2.252-3.953-3.851-5.432a21.651 21.651 0 0 0-5.457-3.672 60.18 60.18 0 0 0-6.248-2.551 262.492 262.492 0 0 0-6.248-2.065c-2.04-.646-3.859-1.377-5.457-2.193s-2.882-1.802-3.851-2.958c-.969-1.156-1.454-2.601-1.454-4.335 0-1.36.238-2.609.714-3.749a7.645 7.645 0 0 1 2.168-2.933c.969-.816 2.159-1.454 3.571-1.913 1.41-.459 3.068-.689 4.973-.689 2.109 0 3.936.263 5.483.791s2.898 1.113 4.054 1.759a77.86 77.86 0 0 1 3.009 1.76c.851.527 1.616.791 2.295.791.681 0 1.267-.153 1.76-.459s.927-.833 1.3-1.581l3.366-6.477c-2.584-2.448-5.713-4.353-9.385-5.713-3.672-1.36-7.684-2.04-12.037-2.04-3.841 0-7.259.595-10.251 1.785-2.993 1.19-5.517 2.771-7.574 4.743-2.058 1.973-3.622 4.234-4.692 6.784s-1.606 5.168-1.606 7.855c0 3.366.485 6.197 1.453 8.492.969 2.295 2.253 4.208 3.851 5.738a20.162 20.162 0 0 0 5.458 3.723 53.654 53.654 0 0 0 6.222 2.448 183.98 183.98 0 0 0 6.223 1.888c2.04.578 3.859 1.284 5.457 2.116 1.598.833 2.882 1.862 3.851 3.086.969 1.224 1.454 2.805 1.454 4.743 0 3.469-1.071 6.129-3.214 7.982-2.142 1.854-5.169 2.78-9.079 2.78-2.55 0-4.735-.349-6.554-1.045-1.819-.697-3.401-1.471-4.743-2.321s-2.508-1.623-3.494-2.321c-.986-.697-1.904-1.045-2.754-1.045-.646 0-1.233.161-1.76.485a5.043 5.043 0 0 0-1.351 1.199l-3.979 6.579c1.428 1.462 3.052 2.788 4.871 3.979s3.774 2.21 5.865 3.06a36.517 36.517 0 0 0 6.554 1.964c2.279.459 4.591.689 6.937.689 4.08 0 7.702-.621 10.864-1.862 3.163-1.241 5.84-2.941 8.034-5.101a21.607 21.607 0 0 0 4.999-7.599c1.138-2.907 1.708-6.027 1.708-9.36-.002-3.062-.486-5.663-1.455-7.805z" />
  //   <polygon points="334.505,375.382 334.505,312.951 320.785,312.951 320.785,386.704 364.037,386.704 364.037,375.382 		" />
  // </svg>
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

export default function App(props) {
  const { Component, pageProps } = props;
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
          {(activeRoute && (activeRoute.title || activeRoute.searchTerm)) ||
            props.title}{" "}
          - W3cubTools
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
          <a href="/">{logo2}</a>
        </Pane>
        <Pane>
          <a href="https://docs.w3cub.com/" target="_blank">
            <Button appearance="minimal" height={40}>
              W3cubDocs
            </Button>
          </a>
        </Pane>
      </Pane>
      <Pane className="mainlayout">
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
                        <a
                          href={a.path}
                          className="item"
                          key={route.category + a.label}
                        >
                          {a.label}{" "}
                          {a.beta && <span className="beta">Beta</span>}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Fragment>
            );
          })}
        </div>
      )}
      <footer className="footer ">
        <div className="footer-logo">{logo2}</div>
        <div className="wrap">
          <div className="nav">
            <a href="/privacy-policy">Privacy Policy</a>
            <a
              href="https://github.com/w3cub/w3cubtools-md/issues"
              target="_blank"
              className="mr-5"
            >
              Issues
            </a>
            <a
              href="https://github.com/w3cub/w3cubtools-md"
              className=""
              target="_blank"
            >
              Improve descriptions
            </a>
            <a href="/about#donate" className="">
              Donate
            </a>
            <a href="/about" className="">
              About
            </a>
          </div>
        </div>
        <div className="copy">
          Copyright © {new Date().getFullYear()} W3cub All Rights Reserved.
        </div>
      </footer>
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
        .footer {
          background-color: #f4f4f4;
          padding: 20px 4% 50px;
          line-height: 30px;
          text-align: center;
          box-shadow: 0px -1px 1px #dcdada;
          .wrap {
            width: 1024px;
            margin: auto;
          }
          .nav {
            padding-bottom: 20px;
          }
          .nav a {
            padding-right: 8px;
            margin-right: 8px;
            color: #000;
            text-decoration: none;
          }
          .copy {
            border-top: 1px solid #d3d3d3;
            padding: 20px;
          }
          .footer-logo {
            position: absolute;
          }
        }
      `}</style>
    </Container>
  );
}

// App.getInitialProps = async ({ Component, ctx }) => {
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   let exts = {} as any;
//   if (Component.title) {
//     exts.title = Component.title;
//   }
//   if (Component.description) {
//     exts.description = Component.description;
//   }

//   return { pageProps, ...exts };
// };
