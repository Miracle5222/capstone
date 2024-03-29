import { View, Text } from "react-native";
import React from "react";
import Svg, { Path, Pattern, Use, Image, Defs } from "react-native-svg";
import { useSelector } from "react-redux";

export const Play = (props) => (
  <Svg width={21} height={21} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M20.122 9.069 2.262.147A1.594 1.594 0 0 0 0 1.57v17.835a1.582 1.582 0 0 0 1.522 1.595c.273.01.543-.05.786-.173l17.814-8.922a1.592 1.592 0 0 0 .64-2.257 1.592 1.592 0 0 0-.64-.586v.008Z"
      fill={props.bg}
    />
  </Svg>
);

export const Celeb = (props) => (
  <Svg width={73} height={69} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="m0 69 47.447-16.797L16.945 21.97 0 69Zm42.465-31.813L61.409 18.41a4.269 4.269 0 0 1 5.999 0l2 1.982L73 16.83l-2-1.983a9.39 9.39 0 0 0-6.591-2.696c-2.47 0-4.84.97-6.592 2.696L38.872 33.627l3.593 3.56Zm-15.15-18.98-1.999 1.982 3.593 3.561 2-1.982a9.224 9.224 0 0 0 2.72-6.534 9.224 9.224 0 0 0-2.72-6.533l-2-1.982-3.593 3.594 2 1.982c1.626 1.613 1.626 4.3 0 5.912ZM51.04 35.004l-5.389 5.341 3.593 3.561 5.388-5.341a4.27 4.27 0 0 1 5.999 0l5.456 5.408 3.593-3.56-5.457-5.41a9.39 9.39 0 0 0-6.591-2.695c-2.47 0-4.84.969-6.592 2.696Zm-6.778-20.156-12.167 12.06 3.593 3.56L47.853 18.41a9.224 9.224 0 0 0 2.72-6.534 9.224 9.224 0 0 0-2.72-6.534L42.465 0l-3.593 3.56 5.389 5.342c1.627 1.646 1.627 4.334 0 5.946Z"
      fill={props.bg}
    />
  </Svg>
);

export const Sun = (props) => (
  <Svg width={31} height={31} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M16 8.917a7.083 7.083 0 1 0 0 14.166 7.083 7.083 0 0 0 0-14.166Z"
      fill={props.bg}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 .417a1.417 1.417 0 0 1 1.417 1.416V3.25a1.417 1.417 0 1 1-2.834 0V1.833A1.417 1.417 0 0 1 16 .417ZM3.665 3.665a1.417 1.417 0 0 1 2.003 0L7.793 5.79A1.417 1.417 0 0 1 5.79 7.793L3.665 5.668a1.417 1.417 0 0 1 0-2.003Zm24.67 0a1.417 1.417 0 0 1 0 2.003L26.21 7.793a1.416 1.416 0 1 1-2.003-2.003l2.125-2.125a1.417 1.417 0 0 1 2.003 0ZM.417 16a1.416 1.416 0 0 1 1.416-1.417H3.25a1.417 1.417 0 0 1 0 2.834H1.833A1.417 1.417 0 0 1 .417 16Zm26.916 0a1.416 1.416 0 0 1 1.417-1.417h1.417a1.417 1.417 0 0 1 0 2.834H28.75A1.417 1.417 0 0 1 27.333 16Zm-19.54 8.207a1.417 1.417 0 0 1 0 2.003l-2.125 2.125a1.416 1.416 0 0 1-2.003-2.003l2.125-2.125a1.417 1.417 0 0 1 2.003 0Zm16.414 0a1.417 1.417 0 0 1 2.003 0l2.125 2.125a1.417 1.417 0 0 1-2.003 2.003l-2.125-2.125a1.416 1.416 0 0 1 0-2.003ZM16 27.333a1.417 1.417 0 0 1 1.417 1.417v1.417a1.417 1.417 0 1 1-2.834 0V28.75A1.416 1.416 0 0 1 16 27.333Z"
      fill={props.bg}
    />
  </Svg>
);

export const Moon = (props) => (
  <Svg width={20} height={21} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M8 .364a1 1 0 0 1 .107 1.126 9.344 9.344 0 0 0-1.17 4.542c0 5.277 4.37 9.551 9.757 9.551.702 0 1.386-.072 2.044-.21a1.064 1.064 0 0 1 1.08.415.952.952 0 0 1-.042 1.172 11.106 11.106 0 0 1-3.861 2.982A11.28 11.28 0 0 1 11.125 21C4.98 21 0 16.125 0 10.119 0 5.599 2.819 1.72 6.832.078A1.017 1.017 0 0 1 8 .364Z"
      fill={props.bg}
    />
  </Svg>
);
export const Home = (props) => (
  <Svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M24.198 12.555 13.97 1.73l-.685-.726a.81.81 0 0 0-.588-.256.81.81 0 0 0-.588.256L1.194 12.554c-.16.17-.287.37-.372.592a1.884 1.884 0 0 0-.126.698c.01.987.786 1.774 1.718 1.774h1.125v9.13h18.314v-9.13h1.149a1.64 1.64 0 0 0 1.199-.527c.157-.166.282-.364.367-.582.085-.218.129-.451.128-.687 0-.477-.178-.928-.498-1.267ZM14.178 22.73h-2.965v-5.718h2.965v5.718Zm5.769-9.13v9.13h-4.074v-6.391c0-.62-.474-1.121-1.06-1.121h-4.235c-.585 0-1.059.501-1.059 1.12v6.392H5.445V13.6H2.904l9.794-10.362.612.647 9.18 9.715h-2.543Z"
      fill={props.bg}
    />
  </Svg>
);
export const Exit = (props) => (
  <Svg width={46} height={46} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M13.294 19.294a1 1 0 0 1 1.415 0L20 24.587l5.291-5.293a1.002 1.002 0 0 1 1.416 1.415L21.414 26l5.293 5.291a1 1 0 1 1-1.416 1.416l-5.29-5.293-5.292 5.293a1 1 0 1 1-1.415-1.416l5.293-5.29-5.293-5.292a1 1 0 0 1 0-1.415Z"
      fill="#FF7700"
    />
  </Svg>
);
export const Check = (props) => (
  <Svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M9 20a9.01 9.01 0 0 1-9-9v-.18a9.002 9.002 0 0 1 18 .239A9 9 0 0 1 9 20Zm-4.13-9.369-1.27 1.27 3.6 3.6 7.201-7.2-1.269-1.278-5.931 5.93-2.332-2.322Z"
      fill="#00CDBD"
    />
  </Svg>
);

export const LockDark = (props) => (
  <Svg width={18} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M14.625 8.8V5.5C14.625 2.467 12.102 0 9 0S3.375 2.467 3.375 5.5v3.3H2.25C1.01 8.8 0 9.787 0 11v8.8C0 21.013 1.01 22 2.25 22h13.5c1.24 0 2.25-.987 2.25-2.2V11c0-1.213-1.01-2.2-2.25-2.2H5.625V5.5c0-1.82 1.514-3.3 3.375-3.3 1.86 0 3.375 1.48 3.375 3.3v3.3h2.25Z"
      fill={props.bg}
    />
  </Svg>
);

export const LockLight = (props) => (
  <Svg width={18} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M15.75 8.8H5.625V5.5c0-1.82 1.514-3.3 3.375-3.3 1.86 0 3.375 1.48 3.375 3.3h2.25C14.625 2.467 12.102 0 9 0S3.375 2.467 3.375 5.5v3.3H2.25c-.597 0-1.169.232-1.591.644A2.175 2.175 0 0 0 0 11v8.8c0 .584.237 1.143.659 1.556.422.412.994.644 1.591.644h13.5c.597 0 1.169-.232 1.591-.644.422-.413.659-.973.659-1.556V11c0-.584-.237-1.143-.659-1.556A2.276 2.276 0 0 0 15.75 8.8Zm-8.931 6.049c.138-.518.464-.968.917-1.268a2.292 2.292 0 0 1 2.95.367c.362.4.563.917.564 1.452 0 .385-.105.763-.303 1.095a2.215 2.215 0 0 1-.822.8V19.8h-2.25v-2.505a2.208 2.208 0 0 1-.95-1.049 2.146 2.146 0 0 1-.106-1.397Z"
      fill={props.bg}
    />
  </Svg>
);

export const LearnIcons = (props) => {
  return (
    <Svg width={27} height={24}>
      <Path
        d="M13.5 10.5 3.429 6.589 4.05 21h-2.7l.648-14.976L0 5.25 13.5 0 27 5.25 13.5 10.5Zm0-6.563c-.742 0-1.35.29-1.35.657 0 .367.607.656 1.35.656.742 0 1.35-.289 1.35-.656 0-.368-.607-.657-1.35-.657Zm0 7.876 7.52-2.927a9.02 9.02 0 0 1 1.835 4.33 9.731 9.731 0 0 0-1.255-.091c-3.443 0-6.453 1.798-8.1 4.476a9.312 9.312 0 0 0-3.442-3.278A9.64 9.64 0 0 0 5.4 13.124c-.432 0-.85.04-1.256.092a9.02 9.02 0 0 1 1.837-4.331l7.519 2.927Z"
        fill={props.bg}
      />
    </Svg>
  );
};
export const SettingsIcons = (props) => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M14.251 24H9.75c-.282 0-.555-.093-.775-.265a1.196 1.196 0 0 1-.433-.678l-.503-2.261a9.979 9.979 0 0 1-1.899-1.064l-2.272.702c-.269.083-.56.074-.822-.025a1.227 1.227 0 0 1-.625-.519L.164 16.109a1.177 1.177 0 0 1 .239-1.487l1.762-1.56a9.432 9.432 0 0 1 0-2.126L.403 9.379a1.177 1.177 0 0 1-.239-1.488l2.25-3.783c.142-.238.362-.42.626-.52.263-.099.553-.107.822-.024l2.272.702c.302-.216.616-.418.94-.6.313-.17.635-.325.964-.463L8.542.944c.06-.267.213-.506.432-.678A1.26 1.26 0 0 1 9.75 0h4.502c.283 0 .556.094.776.266.219.172.372.411.432.678l.51 2.26c.67.287 1.306.644 1.898 1.064l2.273-.702c.269-.083.559-.074.822.025.263.099.483.282.624.519l2.25 3.784a1.183 1.183 0 0 1-.238 1.486l-1.762 1.56c.08.707.08 1.42 0 2.127l1.762 1.56c.427.381.526.998.239 1.487l-2.251 3.783c-.141.237-.362.42-.625.52a1.273 1.273 0 0 1-.822.024l-2.272-.702a9.952 9.952 0 0 1-1.898 1.063l-.51 2.255c-.06.267-.213.506-.433.678a1.26 1.26 0 0 1-.775.265ZM11.995 7.2c-1.312 0-2.57.506-3.498 1.406A4.729 4.729 0 0 0 7.048 12c0 1.273.521 2.494 1.45 3.394a5.025 5.025 0 0 0 3.497 1.406c1.313 0 2.57-.506 3.499-1.406A4.729 4.729 0 0 0 16.943 12a4.729 4.729 0 0 0-1.45-3.394A5.025 5.025 0 0 0 11.996 7.2Z"
        fill={props.bg}
      />
    </Svg>
  );
};

export const ProfileIcons = (props) => {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22.8c5.965 0 10.8-4.835 10.8-10.8 0-5.965-4.835-10.8-10.8-10.8C6.035 1.2 1.2 6.035 1.2 12c0 5.965 4.835 10.8 10.8 10.8Zm0 1.2c6.628 0 12-5.372 12-12S18.628 0 12 0 0 5.372 0 12s5.372 12 12 12Z"
        fill={props.bg}
      />
      <Path
        d="M4.8 18.978c0-.62.463-1.144 1.08-1.212 4.629-.512 7.632-.466 12.25.011a1.194 1.194 0 0 1 .666 2.084c-5.451 4.751-8.567 4.686-13.612.004a1.211 1.211 0 0 1-.384-.886v-.001Z"
        fill={props.bg}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.069 18.374c-4.582-.474-7.542-.519-12.124-.012a.616.616 0 0 0-.545.617c0 .171.071.334.192.447 2.5 2.32 4.396 3.367 6.248 3.374 1.859.007 3.855-1.033 6.561-3.391a.595.595 0 0 0-.332-1.035ZM5.814 17.17c4.678-.518 7.724-.471 12.38.01a1.795 1.795 0 0 1 .996 3.133c-2.745 2.393-5.03 3.696-7.354 3.687-2.33-.008-4.515-1.334-7.06-3.695a1.812 1.812 0 0 1-.576-1.327 1.817 1.817 0 0 1 1.614-1.809Z"
        fill={props.bg}
      />
      <Path
        d="M16.8 9.6a4.8 4.8 0 1 1-9.6 0 4.8 4.8 0 0 1 9.6 0Z"
        fill={props.bg}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 13.2A3.6 3.6 0 1 0 12 6a3.6 3.6 0 0 0 0 7.2Zm0 1.2a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Z"
        fill={props.bg}
      />
    </Svg>
  );
};

export const CodeIcons = (props) => {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.405 24h1.198v-2.4H8.418c-.369-.007-3.608-.208-3.608-4.8 0-2.392-.797-3.895-1.8-4.8 1.003-.905 1.8-2.408 1.8-4.8 0-4.592 3.24-4.793 3.595-4.8h1.198V0h-1.2c-2.072.005-5.99 1.517-5.99 7.2 0 3.36-2.01 3.588-2.413 3.6l.017 2.4c.098 0 2.396.04 2.396 3.6 0 5.683 3.918 7.195 5.992 7.2Zm15.578-13.2c-.098 0-2.396-.04-2.396-3.6 0-5.683-3.918-7.195-5.992-7.2h-1.198v2.4h1.185c.369.007 3.608.208 3.608 4.8 0 2.392.797 3.895 1.8 4.8-1.003.905-1.8 2.408-1.8 4.8 0 4.592-3.24 4.793-3.595 4.8h-1.198V24h1.2c2.072-.005 5.99-1.517 5.99-7.2 0-3.36 2.01-3.588 2.413-3.6l-.017-2.4Z"
        fill={props.bg}
      />
    </Svg>
  );
};
export const Java = (props) => (
  <Svg
    width={61}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <Path fill="url(#a)" d="M.148 0h60.193v60H.148z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.00195 0 0 .00196 0 -.002)" />
      </Pattern>
      <Image
        id="b"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
