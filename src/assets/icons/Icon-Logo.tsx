import React from "react";
import { SvgXml } from "react-native-svg";

interface PropsLogo {
  width?: number;
  height?: number;
  color1?: string;
  color2?: string;
}

export function IconLogo({
  width = 41,
  height = 49,
  color1 = "#000000",
  color2 = "#40C9A8",
}: PropsLogo) {
  const logo = `<svg width=${width} height=${height} viewBox="0 0 523 538" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M131.723 2.11215C115.716 7.22544 101.821 18.4525 94.7068 32.0138C86.9257 46.909 87.2592 42.2404 87.2592 137.725V223.984L83.4798 226.43C81.3678 227.764 78.4777 230.543 76.9215 232.544C74.2537 236.212 33.2362 324.36 29.9015 333.587C25.1217 347.259 25.0105 349.371 25.0105 443.633V533.56H33.792H42.6847L43.0182 444.411C43.4628 358.375 43.574 354.818 45.7971 347.259C47.0199 342.924 56.6906 320.359 67.3619 297.238L86.7034 255.22L87.2592 326.25C87.7038 376.271 88.1485 398.17 89.0377 400.17C90.1493 402.616 89.8159 403.95 85.9253 411.064C83.4798 415.51 81.7013 419.401 81.8124 419.512C84.9249 422.069 97.7081 427.96 98.3751 427.293C98.9308 426.737 111.158 405.728 125.609 380.718C140.059 355.596 153.287 333.809 154.844 332.03C163.514 322.804 179.41 327.362 182.855 340.034C183.745 343.368 183.745 345.703 182.967 348.259C182.3 350.26 172.518 367.823 161.18 387.387C145.284 414.843 140.615 423.847 140.615 426.848C140.615 429.739 143.283 435.185 151.62 449.08C157.622 459.196 163.514 469.867 164.514 472.979C166.182 477.537 166.626 483.428 167.071 505.993L167.516 533.56H176.297H185.079V504.882C185.079 471.868 184.523 468.199 176.631 453.86L171.74 444.634H198.084H224.54L224.206 452.081C223.984 456.194 224.318 461.53 225.096 464.086C226.652 469.422 266.113 538.007 267.558 538.007C269.448 538.007 282.898 530.115 282.898 529.003C282.898 528.447 273.894 512.329 262.89 493.321C241.325 455.861 240.769 454.416 244.66 446.19C249.551 435.963 264.557 433.74 272.005 441.966C273.005 443.189 278.118 451.526 283.454 460.752C288.678 469.867 293.903 478.092 294.792 478.871C297.237 480.649 304.24 480.538 306.908 478.648C308.909 477.092 309.02 474.535 309.576 387.721C310.132 300.239 310.132 298.349 312.466 294.57C319.469 282.676 335.254 282.676 342.257 294.57C344.48 298.349 344.591 300.35 345.147 374.382C345.703 447.969 345.814 450.414 347.815 451.97C350.593 453.971 357.485 453.971 360.264 451.97C362.154 450.525 362.376 448.524 362.932 427.738C363.377 407.618 363.71 404.728 365.822 401.282C372.825 389.388 388.61 389.388 395.613 401.282C397.725 404.728 398.058 407.618 398.503 427.738C399.17 453.082 399.281 453.526 407.395 453.526C415.288 453.526 415.621 452.637 416.288 432.184C416.844 416.622 417.177 413.509 419.178 410.175C426.07 398.281 442.077 398.281 448.969 410.175C450.97 413.509 451.303 416.622 451.859 432.184C452.526 452.637 452.859 453.526 460.752 453.526C468.199 453.526 468.977 452.081 469.755 436.519C470.311 425.626 470.867 421.846 472.534 418.956C479.426 407.173 495.433 407.173 502.325 419.067C504.548 422.847 504.659 424.736 504.993 478.204L505.326 533.56H514.108H523V476.314C523 421.068 522.889 418.956 520.666 412.954C517.553 404.617 509.661 396.724 501.102 393.501C491.876 390.055 477.981 390.611 470.311 394.946L464.975 397.947L460.085 393.056C452.081 385.053 446.634 382.941 433.518 382.941C423.513 382.941 421.846 383.274 417.066 385.942L411.619 388.943L406.173 383.497C402.727 380.051 398.725 377.272 395.168 376.049L389.61 374.048V212.757C389.61 34.0146 390.166 47.2425 382.274 32.1249C375.16 18.5636 362.376 8.00356 347.036 2.77912L338.588 0.000131236L238.212 0.111293C145.395 0.111293 137.392 0.222456 131.723 2.11215ZM332.364 18.8971C353.039 21.8984 367.712 36.6824 370.713 57.2467C371.38 62.0265 371.825 123.608 371.825 219.649V374.382L369.157 375.049C367.712 375.382 365.711 376.049 364.711 376.383C363.154 377.049 362.932 373.048 362.932 335.81C362.932 296.793 362.821 294.348 360.598 288.456C349.815 259.555 304.907 259.555 294.125 288.456C291.902 294.459 291.791 296.46 291.791 360.709V426.848H287.456C285.01 426.848 282.676 426.293 282.342 425.737C280.786 423.18 269.892 418.734 263.89 418.289C254.553 417.4 248.328 418.734 241.214 423.069L234.766 426.848L197.862 426.626L160.957 426.293L180.743 391.945C195.639 366.267 200.863 356.152 201.864 351.483C205.087 335.587 196.75 318.802 181.966 311.577C176.631 309.021 174.185 308.465 166.737 308.465C158.845 308.465 156.956 308.909 150.397 312.133C146.284 314.134 141.505 317.58 139.726 319.692C137.947 321.804 129.611 335.587 121.051 350.26L105.6 377.049L105.267 222.095C105.045 120.051 105.378 64.2497 106.156 58.4695C106.712 53.5785 108.49 47.0201 109.936 43.7965C115.827 31.0133 129.277 21.1203 143.394 19.0082C152.954 17.6743 322.804 17.5632 332.364 18.8971Z" fill=${color1}/><path d="M167.293 44.4634V53.3561H176.186H185.079V44.4634V35.5707H176.186H167.293V44.4634Z" fill=${color1}/><path d="M202.864 44.4634V53.3561H238.435H274.005V44.4634V35.5707H238.435H202.864V44.4634Z" fill=${color1}/><path d="M208.978 357.819C199.307 362.265 193.971 371.158 193.971 382.607C194.083 393.945 199.974 403.283 209.756 407.284C215.758 409.841 261.111 409.841 267.114 407.284C276.896 403.283 282.787 393.945 282.898 382.607C282.898 374.493 280.786 368.823 275.895 363.599C268.892 356.263 266.336 355.707 238.435 355.707C216.425 355.707 212.868 356.04 208.978 357.819ZM258.999 375.048C263.112 376.827 264.779 380.384 263.557 385.275C262.334 390.055 257.332 391.277 238.435 391.277C219.538 391.277 214.536 390.055 213.313 385.275C212.201 380.495 213.758 376.827 217.648 375.16C222.761 372.936 253.664 372.936 258.999 375.048Z" fill=${color1}/><path d="M53.2449 216.759L67.8066 202.308L60.9148 195.417L53.9118 188.414L48.3539 193.971L42.796 199.418L42.796 148.619L42.796 97.8195H33.9033H25.0107L25.0107 148.619L25.0107 199.418L19.4527 193.971L13.8948 188.414L6.89183 195.417L7.06315e-06 202.308L14.5618 216.759C28.6789 230.876 29.2347 231.21 33.9033 231.21C38.572 231.21 39.1278 230.876 53.2449 216.759Z" fill=${color2}/><path d="M423.625 112.27L409.063 126.721L415.955 133.613L422.958 140.616L428.516 135.058L434.074 129.611V180.41V231.21H442.966H451.859V180.41V129.611L457.417 135.058L462.975 140.616L469.978 133.613L476.87 126.721L462.308 112.27C448.191 98.1531 447.635 97.8196 442.966 97.8196C438.298 97.8196 437.742 98.1531 423.625 112.27Z" fill=${color2}/><path d="M25.0105 71.1414V80.0341H33.9032H42.7958V71.1414V62.2487H33.9032H25.0105V71.1414Z" fill=${color2}/><path d="M434.073 257.888V266.781H442.966H451.859V257.888V248.995H442.966H434.073V257.888Z" fill=${color2}/><path d="M434.073 293.458V302.351H442.966H451.859V293.458V284.565H442.966H434.073V293.458Z" fill=${color2}/><path d="M160.624 119.125V135.984H163.218H165.812V121.719V107.453H180.077H194.342V104.86V102.266H177.483H160.624V119.125Z" fill=${color2}/><path d="M282.852 104.86V107.453H296.955H311.058V121.719V135.984H313.652H316.246V119.125V102.266H299.549H282.852V104.86Z" fill=${color2}/><path d="M170.999 130.796V148.952H189.155H207.311V130.796V112.641H189.155H170.999V130.796ZM202.123 130.796V143.765H189.155H176.186V130.796V117.828H189.155H202.123V130.796Z" fill=${color2}/><path d="M183.643 130.796V135.984H188.993H194.342V130.796V125.609H188.993H183.643V130.796Z" fill=${color2}/><path d="M269.559 130.796V148.952H287.715H305.871V130.796V112.641H287.715H269.559V130.796ZM300.684 130.796V143.765H287.715H274.747V130.796V117.828H287.715H300.684V130.796Z" fill=${color2}/><path d="M282.204 130.796V135.984H287.553H292.903V130.796V125.609H287.553H282.204V130.796Z" fill=${color2}/><path d="M215.091 119.125V123.015H216.388H217.685V129.5V135.984H224.169H230.653V132.093V128.203H246.216H261.778V121.719V115.234H248.809H235.841V116.531V117.828H231.95H228.06V116.531V115.234H221.576H215.091V119.125Z" fill=${color2}/><path d="M230.978 144.413C225.985 145.483 222.289 147.007 218.204 149.73C214.054 152.486 214.086 152.357 216.388 154.626L218.301 156.506L220.765 154.821C224.818 152 229.713 150.055 234.317 149.406L235.841 149.212V146.488V143.765L234.804 143.797C234.22 143.797 232.502 144.089 230.978 144.413Z" fill=${color2}/><path d="M241.029 146.423V149.212L242.585 149.406C247.156 150.055 252.052 152 256.105 154.821L258.569 156.506L260.482 154.626C262.783 152.357 262.816 152.486 258.601 149.666C254.095 146.683 248.129 144.478 242.909 143.895L241.029 143.668V146.423Z" fill=${color2}/><path d="M231.95 154.788C224.753 156.668 218.495 161.694 215.253 168.243C213.211 172.328 212.498 175.408 212.498 180.077C212.498 184.81 213.211 187.858 215.318 192.072C216.615 194.699 217.328 195.606 220.117 198.395C222.905 201.183 223.813 201.896 226.439 203.193C230.653 205.3 233.701 206.014 238.435 206.014C243.168 206.014 246.216 205.3 250.43 203.193C253.056 201.896 253.964 201.183 256.752 198.395C259.541 195.606 260.254 194.699 261.551 192.072C263.658 187.858 264.371 184.81 264.371 180.077C264.371 175.408 263.658 172.328 261.648 168.243C258.374 161.661 252.051 156.604 244.789 154.788C241.32 153.913 235.387 153.913 231.95 154.788ZM239.731 162.569C240.445 162.958 241.028 164.514 241.028 166.006V167.108H243.46C247.448 167.108 248.939 168.146 248.355 170.545C247.966 172.004 246.572 172.296 240.218 172.296C234.965 172.296 234.479 172.36 233.896 172.944C233.053 173.787 233.02 175.959 233.863 176.802C234.349 177.288 235.128 177.418 238.467 177.548C242.941 177.742 244.4 178.164 246.183 179.85C247.707 181.276 248.485 183.124 248.485 185.264C248.485 187.404 247.707 189.252 246.183 190.678C244.951 191.845 243.071 192.721 241.839 192.721C241.093 192.721 241.028 192.851 241.028 194.018C241.028 196.871 239.699 198.297 237.592 197.779C236.619 197.519 235.841 195.931 235.841 194.18V193.045H233.409C229.421 193.045 227.93 192.008 228.514 189.608C228.903 188.149 230.297 187.858 236.651 187.858C241.904 187.858 242.39 187.793 242.973 187.209C243.816 186.366 243.849 184.194 243.006 183.351C242.52 182.865 241.741 182.735 238.402 182.605C233.928 182.411 232.469 181.989 230.686 180.304C227.703 177.483 227.573 172.717 230.426 169.767C231.723 168.405 233.571 167.432 234.868 167.432C235.776 167.432 235.841 167.367 235.841 166.168C235.841 163.055 237.592 161.434 239.731 162.569Z" fill=${color2}/><path d="M209.613 157.706C205.755 162.602 202.966 169.378 202.253 175.603L202.026 177.483H204.782H207.57L207.765 175.927C208.413 171.323 210.358 166.46 213.179 162.407L214.865 159.943L212.92 157.966L210.942 156.02L209.613 157.706Z" fill=${color2}/><path d="M263.918 157.998L262.005 159.943L263.691 162.407C266.512 166.46 268.457 171.356 269.105 175.927L269.3 177.483H272.023H274.747V176.575C274.747 174.889 273.515 169.832 272.412 166.881C271.18 163.607 268.846 159.522 266.998 157.382L265.831 156.053L263.918 157.998Z" fill=${color2}/><path d="M173.592 165.811V174.889H182.67H191.748V165.811V156.733H182.67H173.592V165.811Z" fill=${color2}/><path d="M274.746 161.921V167.108H283.824H292.902V173.592V180.077H298.09H303.277V168.405V156.733H289.012H274.746V161.921Z" fill=${color2}/><path d="M202.253 184.518C202.837 189.771 205.041 195.736 208.024 200.243C210.845 204.457 210.715 204.425 212.984 202.123L214.865 200.21L213.179 197.746C210.358 193.694 208.413 188.798 207.765 184.194L207.57 182.67H204.782H202.026L202.253 184.518Z" fill=${color2}/><path d="M269.105 184.194C268.457 188.83 266.512 193.693 263.691 197.746L262.005 200.21L263.95 202.188L265.896 204.133L267.095 202.674C269.041 200.307 271.375 196.157 272.477 193.11C273.547 190.224 274.747 185.167 274.747 183.546V182.67H272.023H269.3L269.105 184.194Z" fill=${color2}/><path d="M173.592 194.342V203.42H188.96H204.327L202.868 200.988C202.09 199.659 200.923 197.357 200.34 195.898L199.237 193.207L194.18 193.11L189.154 193.013V189.155V185.264H181.373H173.592V194.342Z" fill=${color2}/><path d="M292.902 195.639V200.826H298.09H303.277V195.639V190.452H298.09H292.902V195.639Z" fill=${color2}/><path d="M275.59 197.973C273.709 201.896 271.213 205.333 267.711 208.964L264.372 212.4V215.675V218.982H269.559H274.747V220.279V221.576H289.012H303.277V216.388V211.201H291.606H279.934V203.42V195.639H278.345H276.724L275.59 197.973Z" fill=${color2}/><path d="M216.259 205.657L214.378 207.538L215.837 208.737C218.204 210.683 222.354 213.017 225.401 214.119C228.287 215.189 233.345 216.389 234.966 216.389H235.841V213.665V210.942L234.317 210.747C229.713 210.099 224.818 208.154 220.83 205.398C219.533 204.49 218.398 203.744 218.301 203.744C218.204 203.744 217.296 204.587 216.259 205.657Z" fill=${color2}/><path d="M256.267 205.236C252.441 207.959 247.124 210.099 242.585 210.747L241.029 210.942V213.665V216.389H241.937C243.525 216.389 248.583 215.189 251.468 214.119C254.516 213.017 258.666 210.683 261.033 208.737L262.492 207.538L260.611 205.657C259.574 204.587 258.634 203.744 258.536 203.744C258.439 203.744 257.434 204.425 256.267 205.236Z" fill=${color2}/><path d="M170.999 229.357V247.513H189.155H207.311V229.357V211.201H189.155H170.999V229.357ZM202.123 229.357V242.326H189.155H176.186V229.357V216.389H189.155H202.123V229.357Z" fill=${color2}/><path d="M183.643 229.357V234.544H188.993H194.342V229.357V224.17H188.993H183.643V229.357Z" fill=${color2}/><path d="M215.091 228.06V237.138H222.872H230.653V241.028V244.919H235.841H241.028V242.325V239.732H246.216H251.403V241.028V242.325H256.59H261.778V235.841V229.357H253.997H246.216V228.06V226.763H237.138H228.06V223.424V220.084L226.341 219.533C225.045 219.112 223.391 218.982 219.857 218.982H215.091V228.06Z" fill=${color2}/><path d="M160.624 241.191V257.887H177.483H194.342V255.294V252.7H180.077H165.812V238.597V224.494H163.218H160.624V241.191Z" fill=${color2}/><path d="M311.058 238.597V252.7H296.955H282.852V255.294V257.887H299.549H316.246V241.191V224.494H313.652H311.058V238.597Z" fill=${color2}/><path d="M285.121 234.545V237.138H278.637H272.153V242.326V247.513H289.012H305.871V239.732V231.951H295.496H285.121V234.545Z" fill=${color2}/></svg>`;
  return <SvgXml xml={logo} />;
}
