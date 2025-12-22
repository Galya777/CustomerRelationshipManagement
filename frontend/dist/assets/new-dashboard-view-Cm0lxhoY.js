var hr=Object.defineProperty;var X0=s=>{throw TypeError(s)};var lr=(s,i,t)=>i in s?hr(s,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[i]=t;var x=(s,i,t)=>lr(s,typeof i!="symbol"?i+"":i,t),gi=(s,i,t)=>i.has(s)||X0("Cannot "+t);var d=(s,i,t)=>(gi(s,i,"read from private field"),t?t.call(s):i.get(s)),g=(s,i,t)=>i.has(s)?X0("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(s):i.set(s,t),b=(s,i,t,e)=>(gi(s,i,"write to private field"),e?e.call(s,t):i.set(s,t),t),f=(s,i,t)=>(gi(s,i,"access private method"),t);import{i as u,a as dr,r as _,b as ti,c as k0,D as M,m as Y,d as ut,e as Wt,f as E,P as A,g as cr,h as fe,j as vr,t as j,k as pr,l as re,n as na,o as ei,p as m,F as oa,T as ha,s as la,q as ur,u as gr,v as I0,w as Xi,K as ii,S as da,x as fr,y as Te,E as de,z as $,C as qt,A as T,B as W,G as _r,H as ca,I as va,J as T0,L as mr,M as br,N as Mr,O as zr,Q as yr,R as si,U as ai,V as ri,W as w,X as Z,Y as S,Z as ni,_ as B,$ as Pe}from"./main-CgzL_46l.js";/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wr=u`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABHAAAsAAAAAI6AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuNY21hcAAAAYgAAAD+AAADymne8hxnbHlmAAACiAAAC+gAABioIzlOlWhlYWQAAA5wAAAAMAAAADZa/6SsaGhlYQAADqAAAAAdAAAAJAbpA4BobXR4AAAOwAAAABAAAAC0q+AAAGxvY2EAAA7QAAAAXAAAAFyF7o1GbWF4cAAADywAAAAfAAAAIAFMAXBuYW1lAAAPTAAAATEAAAIuUUJZCHBvc3QAABCAAAABPQAAAgfdkltveJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+xDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mEO+p/FEMUcxDANKMwIkgMABvgMMAB4nO3SV26EMABF0UsZpjG9d6Y3FpgF5StLYxMTP16WEUvHV1gGIQzQAJKgDFKIfojQ+A6rUb2e0KnXU77qPanWq/LzCXOkOVyn9RyHvWl4YkaTFu1wX5ecHn0GDBkxZsKUGXMWLFmxZsOWHXsOFBw5cebClRt3Hjx58dZ7RRn/I9cUF39Xpb691acRG2piOtUqNZ1P1TCdeJUZatNQW4baNtSO6U+ouoaam96u6hlq31AHhjo01JGhjg11YqhTQ50Z6txQF4a6NNSVoa4NdWOoW0PdGereUA+GWhjq0VBPhno21IuhXg31Zqh3Q30Y6tNQX4b6NtTSKH8BOIRpQQAAeJy1WH1sW9UVv+fG9vPz+7Bf/N6zHcd2/J04jbP6s0lap4kDpB9JWzUUCqxNgaHxpTI6hNhUNLVr17HSISb2D2iAJrWb6FTWahNQdQxRvmHamAR0qibE1E18CG3QaVNFvJ17n+3YIf1AiMQ679x77j3v3HPPPed3H7ER/OsYpw8TmQRIiuQJ8RZK+WjO1B3xaCzla21orY10a+OQ6aHTHtP0zB31mBs1GZ6RNU2uXc7oPL+xdRS9R9X1oK4fVfijdsBqvqF6vd1eLzPrYrYZ57WteF7bPDIc5+ZcJnta+S9i2Vfhs4MaMwZNQmO0Vv7gF/MZcNsCcJp4sJFSwYyAmRuFCmTBDRBUkwGqnlViyjmVBpLqaXhNpt0J5V1JOqMkuqn8WkMHvZX+iOlImiqkBiFVYDrCqINulmkwKb8ry2fkZBBn7FcTlk4ZdfpRZ9MOesLSAakKt0N3g4p2jAL8eIEOOqom/U0lgQRXUl8LtXM7HFkojUIpF0ErVBhcZC1vtyjtpsqr83a8RVcSH+ool8LgcIMjNohmVCACuDs506BdO6WIQeXjUsh1XKZGRNpp9piv3+Givoh00OU6KEV81HUHTLtN093Q+YGlE3wLHWRtMNy9XWqdLm2HKbaNsGzhu+41eswFOjE6WKSk2/1Wpt+qHeM6phbohmVmj3GvpdcVkiy9zbXfzHVqKuDB0IR2P6ZpF+D7dy6YC/9svGmBE5hKB9+X2+hh4iYRMkhGyTqyFc9APmeGQHf043tWQKHkizmwaY5AroTNVJzJDc2SFzUu92kOLsdmKu77vByb8/IjtxmhkMFISRBFISO4XMLJlj4XgGuRXtaHw2FLyHifdSOpisIhJjgkiPBAyJh7lfXTkhEadwk1mUngrOC6MazX7mASeEAPV1FyjEumBOaEDu4DP/ogRDKkiLEV1woVyMeLLKJCEM+FwdCwL4XLcRgdbfkhbzS8BNvXDKzNQiAWgOzagTXF1Eyq+Ci6/TPm/JrNY/59p1epKN4jQFGe0fx+LTMwNVCrAU2VSqnaKYzIiGmWe2Rvp9KDJhncrjLaFce8VCUbyQ1kB9lNfkJ+To6R58mfyd/Ip9ABXohDHqqwEW7A2Mij1ehntLu+h8xMtocjUJcYwoLdtYafv/1Vjy8vjLaLtBfOt3/B931Rexa24e5zstgnyqvZHs69zuhq3vFgRpQVJyN7FuE++RLSeW4xMi+t6Zeo5sIK6S5dlGVRD2hWnGoB3j7OV3lesvNLic8tOnLRSRfRdOna63VJp/1WbYs5dFZjy1AqpGICQEWKmNI+CZNoVTJ7pNop+IZkRrBHgnEmqr3TrEsfw1Gi8LqE+S1aV0SNNwXVVVvuUoU3ld6TLwmditIpvKTU50zSzWwO1h0rL8awnulwTXMYrGDT4aQ1fb4GPkyv5vMEh5Vec6yw0AMXnfcx1l/rfVZaKLDi0W4j/HfeyGZuHOf1IUGW1udizU2leXY0OmLpVDpVKJfKpZzPRKHgEBzpXAUKWYipoIeBdl3JfLZVBizEqWun1i4ZGFiyduq3DebayXsmJ+95gBG4+Urm1a2SdpKV57lP2wZyZqI+FAlfUtO+NCmgdWhMOS1gDY+jHWnBhwjBQLMEXxmLbx6t9JXTWDLtsSxgisfErqvQMbbBoywZmeyLeWe8OWNydFDxzMx4lMGRtX0xN3YFJkeW+O0bascGNwwObtjCCOzrzAVWjSwN2K9cpyn9o5cZOXMmkAuM85EbNHnJyHhfLLCnPhxJYw9eoIMkyC3l+4ZuY5ig7lW2oYUynDgg+Xrk+++Xe3zSgRYetnyuy+KbfjiB+GAAtZ8HHXmtijZfFFgrujhmOs2qkXvuSV6WqA1WLYqhPHOfsa26rklKFqbAGL2dOIlGurB6LWFVFd/KoBBaYTFYVBs93hZRFlrG5Ex4NVFIJguJVvqnBW2kNNvFGx90YUcSEvyZSMDeZjc0xYlEYy8+hHcWx9YrZOaPPyCGepP5Q34aXnGBr8d1QhSf4yjtiebZqNJfEYl4SY6dDRb8WSguLZW9ZQtBpoW4hX0QMyB2KmsYcOh8HMQxBn288oZ6BXV0GOq/ClKsC6T8g9X3OFKZNkJrYkOx2lEk+KNDy953+wGHXuGGzhGZ+uLK8FVrQkbtKBv+9EztU2sgTCNpvXMdJjqJ4tkdw+x00dPKkZ1QR254x7GQoFmvfakSnL3gCc5nREly2mN2pyTLMacMipNT7YInGU7JzlN2p9N+yinXTirOKEvPUafSWMNDmCf9pIQYaG19DSxKGqvAQ+xg60iabEm5MheUU2n+HxO4TDDbjnw6xxK8QzfhbHXq8pWVqanKysun9s6ztdt7sivGqruqYyuyPS6Hw9XehGt6q+l0dT0jvaFMZjiTuTHo7+vdtHJTb58/2ML+IxHt9/n9vv5owiWKrrbWD+sakKxhKoYzxF5f7y9INxki42QNuYrVFDPfvqxyY83xWNMV+ZxPSMWb62W+wPSCJwkDDl1WZOGW84nAEo4A7HjB/uWmOdayRFnKjazi668u/ajJlUd87aPk048Crlu4j1Oh9gxdL3Z1inNPIt2xvKNlsU4hn54Z5Y6YbTDu9hHOvkcFAb35fU6hNovKOrtQmcvbNV9/Ntfv5xf4atDWOOTX6CSHZ08xujhPs51+f9zvf1YLIGoPPKvxVh0TSLAXzzUBFiXs7GJVB7vH5/PAXznd4+vx4a95h3qI/oYIpIdMkA1kC7kVLS3GhWI5bwj1fIaVKG/Ei5gXWOjhtcJbzFthaMQrwIcIRj0ppvO6yV95icu9j/YPDNySWp7w+kOr95R1RfGpfVlDVhS/2geJ5Umv2mn0rkxBvzvgdisndJXaVF1X5z5jdHGe2n/QnYo8+b2uaMivhowgjYcLnVqnrEpQezsieyVZ6ooETbdJO6ip+cORLpes6BL82/qg8VHbo45B/vch/YQeJX28QvEANR3sQhxh+TcMCEd4l8BKF7uID7KM05tRYlIHHXY63YIi2fXQyj5XSBbcMeewKLpttkJ2Syz33YJfDdJdSYkqHbYb3VHRJgTV8c0TAy67YHeK7htwOKWax5co7Do8Pfh1tKdx1g5j9o6TZeQyMo27FuW3vbYsbY/Op3AG06DMKionRlpgHzCEeMmLU5opRrCyS670RzppZeW5p/iT3jL3lB4O63QS6dzzh8SAtOqwGJK3bv+lGJTWbr++471wsVKMRJCEK5H+cLg/Qp+IDsdqs7HhKD7hMXyyrD/Li8RjRqimHhI7HP2vSDZn9brplySb0L9dgpURSwmSiBFhilrwB8OA9gZ29NkRO/669parW9e7XZDxwvgRu+SE7zgl+xG5p/HtRqJ3cdwSZwsbwTA1WT3jEdyPN0sWxvDGy+xovIzHosnwc9LePf9tywun0fMkWaFYZbB4oovRq8VyKYUBkMVXqVhBHSylQ0wanvla3+rQ1XbR8ZzstYOo2Mf7vjk8ftcGDWxdSdXx0cAVveHg1TZFtEOn8ntBBFs11V++vuLUQ5qz+U6d/oUjpGIdNjOQhJXNqn5YCS1Yy5PofLGEs6Js2yOKe2yyOLxtaGjbt7cNIURCEDdWfaQ6lurtRYbePCuItv1iUNxvE4Vdw2zQ0LZhdv2fxjHp5uAmdlBpopHXoJGU8e6BRc0yi+PztkaHTRRrW1m2hcfFLlEUzzD+DGczjEVCg9jEQZhFcdAL2DjD+DPiSWQzjM2I89g5RXdxfECS+CIWy1hTGmFs6EIbkv/pbtkfU3aPrZ+4c2Lizn07qufym/L5TTdtyuU2/We3HPeDsjtb3bGPSSfW31aX3LQpX/d9sL7fWYpRJPBbCJavYjrFjj0rT2GWCZjf6Ytffr8beXl/HYeyGwJiIK8FLDHbfo65xGz7YCSRqCQSkbbHI5eUU5X4sjj+zrU9aHnRlEnrd7YGptd0x2Jf/RbH9PAiovadckSnEsJ661OgPFuH9B4O6e202vIN0h9xHXSJh1wRP5Vqv1uI6Wn9Gxmrwzqrii1gqhEscJanuAlGas+s2/uzvetgS72NpHZ6aHbZstmh/wPq1seEeJxjYGRgYADi31ySEvH8Nl8ZuJlfAEUYalQ3NCLo/6+ZpzLdAnI5GJhAogAiBgraeJxjYGRgYA76nwUkXzAAAfNUBkYGVKALAFb4A3EAAAB4nGNgYGBgfjG0MAAMzihlAAAAAABOAJoA6AEKASwBTgFwAZoBxAHuAhoCnALoBJoEvATWBPIFDgUqBXoF0AX+BkQGlga4BwgHagfiCGoIpAi8CVAJmAoQCiwKVgqQCtYLGAtOC4gL6AwuDFR4nGNgZGBg0GVMYRBlAAEmIOYCQgaG/2A+AwAYygG+AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjuduwzAMhH2NnTqOk+6993TfSZFY24giGZTVon36eiRFf5SAiO/A05HBWtBXEvxfGdYwQIgIQ6wjxggJxkgxwRQb2MQWtrGDXexhHwc4xBGOcYJTnOEcF7jEFa5xg1vc4R4PeMQTnvGCV2R4C1Khy9xkkkxNnPRC03s97pHLvKgTYXJNmbKfZom9o8POEffsq0Qw28+ltcPe2uHS2rGvRjPBmSwE1+GMtI6l0GSU4JEsSM4XgudpQx9sTRf3K9rAyUr0962UryKprZwPpM0jyda5uP2qrVBjxSLPCmGUplixrdpBSKqsI2oO4gF9Udq8TJVOzDSpcEHGR4vSeJdaVsSkMl26OqoKa6jttQ0rLb6a5l3YjO2QqV01YXLlNy2XDR0JlkXojbJTb/5GDX3V+kPviIPgB9AUks0AAAA=)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-drag-handle: '\\ea18';
    --lumo-icons-dropdown: '\\ea19';
    --lumo-icons-edit: '\\ea1a';
    --lumo-icons-error: '\\ea1b';
    --lumo-icons-eye: '\\ea1c';
    --lumo-icons-eye-disabled: '\\ea1d';
    --lumo-icons-menu: '\\ea1e';
    --lumo-icons-minus: '\\ea1f';
    --lumo-icons-ordered-list: '\\ea20';
    --lumo-icons-phone: '\\ea21';
    --lumo-icons-photo: '\\ea22';
    --lumo-icons-play: '\\ea23';
    --lumo-icons-plus: '\\ea24';
    --lumo-icons-redo: '\\ea25';
    --lumo-icons-reload: '\\ea26';
    --lumo-icons-resize-handle: '\\ea27';
    --lumo-icons-search: '\\ea28';
    --lumo-icons-undo: '\\ea29';
    --lumo-icons-unordered-list: '\\ea2a';
    --lumo-icons-upload: '\\ea2b';
    --lumo-icons-user: '\\ea2c';
  }
`;dr("font-icons",wr);_("vaadin-grid",u`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Empty state */
    [part~='empty-state'] {
      padding: var(--lumo-space-m);
      color: var(--lumo-secondary-text-color);
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    /* Hide header row top border if previous row is hidden */
    [part~='row'][hidden] + [part~='row'] [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      --_resize-handle-width: 3px;
      width: var(--_resize-handle-width);
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    [part='resize-handle']::before {
      transform: translateX(calc(-50% + var(--_resize-handle-width) / 2));
      width: var(--lumo-size-s);
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='empty-state'] {
      padding: var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function O0(s,i){return s.split(".").reduce((t,e)=>t?t[e]:void 0,i)}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function oi(s){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(s);return}s.querySelector("template")&&console.warn(`WARNING: <template> inside <${s.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function jt(s){return s.__cells||Array.from(s.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function k(s,i){[...s.children].forEach(i)}function ne(s,i){jt(s).forEach(i),s.__detailsCell&&i(s.__detailsCell)}function xr(s,i,t){let e=1;s.forEach(a=>{e%10===0&&(e+=1),a._order=t+e*i,e+=1})}function hi(s,i,t){switch(typeof t){case"boolean":s.toggleAttribute(i,t);break;case"string":s.setAttribute(i,t);break;default:s.removeAttribute(i);break}}function St(s,i,t){i||i===""?ti(s,"part",t):k0(s,"part",t)}function xt(s,i,t){s.forEach(e=>{St(e,t,i)})}function Gt(s,i){const t=jt(s);Object.entries(i).forEach(([e,a])=>{hi(s,e,a);const r=`${e}-row`;St(s,a,r),xt(t,`${r}-cell`,a)})}function Q0(s,i){const t=jt(s);Object.entries(i).forEach(([e,a])=>{const r=s.getAttribute(e);if(hi(s,e,a),r){const n=`${e}-${r}-row`;St(s,!1,n),xt(t,`${n}-cell`,!1)}if(a){const n=`${e}-${a}-row`;St(s,a,n),xt(t,`${n}-cell`,a)}})}function Ot(s,i,t,e,a){hi(s,i,t),a&&St(s,!1,a),St(s,t,e||`${i}-cell`)}function Cr(s){return jt(s).find(i=>i._content.querySelector("vaadin-grid-tree-toggle"))}class Yt{constructor(i,t){this.__host=i,this.__callback=t,this.__currentSlots=[],this.__onMutation=this.__onMutation.bind(this),this.__observer=new MutationObserver(this.__onMutation),this.__observer.observe(i,{childList:!0}),this.__initialCallDebouncer=M.debounce(this.__initialCallDebouncer,Y,()=>this.__onMutation())}disconnect(){this.__observer.disconnect(),this.__initialCallDebouncer.cancel(),this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(i){this.__currentSlots.forEach(t=>{i?t.addEventListener("slotchange",this.__onMutation):t.removeEventListener("slotchange",this.__onMutation)})}__onMutation(){const i=!this.__currentColumns;this.__currentColumns=this.__currentColumns||[];const t=Yt.getColumns(this.__host),e=t.filter(o=>!this.__currentColumns.includes(o)),a=this.__currentColumns.filter(o=>!t.includes(o)),r=this.__currentColumns.some((o,h)=>o!==t[h]);this.__currentColumns=t,this.__toggleSlotChangeListeners(!1),this.__currentSlots=[...this.__host.children].filter(o=>o instanceof HTMLSlotElement),this.__toggleSlotChangeListeners(!0),(i||e.length||a.length||r)&&this.__callback(e,a)}static __isColumnElement(i){return i.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(i.localName)}static getColumns(i){const t=[],e=i._isColumnElement||Yt.__isColumnElement;return[...i.children].forEach(a=>{e(a)?t.push(a):a instanceof HTMLSlotElement&&[...a.assignedElements({flatten:!0})].filter(r=>e(r)).forEach(r=>t.push(r))}),t}}/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sr=s=>class extends s{static get properties(){return{resizable:{type:Boolean,sync:!0,value(){if(this.localName==="vaadin-grid-column-group")return;const t=this.parentNode;return t&&t.localName==="vaadin-grid-column-group"&&t.resizable||!1}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:{type:Object,sync:!0},_footerCell:{type:Object,sync:!0},_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells)","_frozenChanged(frozen, _headerCell, _footerCell, _cells)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)","_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells)","_rowHeaderChanged(rowHeader, _cells)","__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(t=>t)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(t=>{t._content.parentNode||this._grid.appendChild(t._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)})}),this._gridValue=void 0}ready(){super.ready(),oi(this)}_findHostGrid(){let t=this;for(;t&&!/^vaadin.*grid(-pro)?$/u.test(t.localName);)t=t.assignedSlot?t.assignedSlot.parentNode:t.parentNode;return t||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(e=>{e.style.flexGrow=t})}_orderChanged(t){this._allCells.forEach(e=>{e.style.order=t})}_widthChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(e=>{e.style.width=t})}_frozenChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",t),this._allCells.forEach(e=>{Ot(e,"frozen",t)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",t),this._allCells.forEach(e=>{this._grid&&e.parentElement===this._grid.$.sizer||Ot(e,"frozen-to-end",t)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(t){this._allCells.forEach(e=>{Ot(e,"last-frozen",t)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=t)}_firstFrozenToEndChanged(t){this._allCells.forEach(e=>{this._grid&&e.parentElement===this._grid.$.sizer||Ot(e,"first-frozen-to-end",t)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=t)}_rowHeaderChanged(t,e){e&&e.forEach(a=>{a.setAttribute("role",t?"rowheader":"gridcell")})}_generateHeader(t){return t.substr(t.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,e=>e.toUpperCase())}_reorderStatusChanged(t){const e=this.__previousReorderStatus,a=e?`reorder-${e}-cell`:"",r=`reorder-${t}-cell`;this._allCells.forEach(n=>{Ot(n,"reorder-status",t,r,a)}),this.__previousReorderStatus=t}_resizableChanged(t,e){t===void 0||e===void 0||e&&[e].concat(this._emptyCells).forEach(a=>{if(a){const r=a.querySelector('[part~="resize-handle"]');if(r&&a.removeChild(r),t){const n=document.createElement("div");n.setAttribute("part","resize-handle"),a.appendChild(n)}}})}_textAlignChanged(t){if(t===void 0||this._grid===void 0)return;if(["start","end","center"].indexOf(t)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let e;getComputedStyle(this._grid).direction==="ltr"?t==="start"?e="left":t==="end"&&(e="right"):t==="start"?e="right":t==="end"&&(e="left"),this._allCells.forEach(a=>{a._content.style.textAlign=t,getComputedStyle(a._content).textAlign!==t&&(a._content.style.textAlign=e)})}_hiddenChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",t),!!t!=!!this._previousHidden&&this._grid&&(t===!0&&this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)}),this._grid._debouncerHiddenChanged=M.debounce(this._grid._debouncerHiddenChanged,ut,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=t}_runRenderer(t,e,a){const r=a&&a.item&&!e.parentElement.hidden;if(!(r||t===this._headerRenderer||t===this._footerRenderer))return;const o=[e._content,this];r&&o.push(a),t.apply(this,o)}__renderCellsContent(t,e){this.hidden||!this._grid||e.forEach(a=>{if(!a.parentElement)return;const r=this._grid.__getRowModel(a.parentElement);t&&(a._renderer!==t&&this._clearCellContent(a),a._renderer=t,this._runRenderer(t,a,r))})}_clearCellContent(t){t._content.innerHTML="",delete t._content._$litPart$}_renderHeaderCellContent(t,e){!e||!t||(this.__renderCellsContent(t,[e]),this._grid&&e.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(e.parentElement))}_onHeaderRendererOrBindingChanged(t,e,...a){this._renderHeaderCellContent(t,e)}__headerFooterPartNameChanged(t,e,a,r){[{cell:t,partName:a},{cell:e,partName:r}].forEach(({cell:n,partName:o})=>{if(n){const h=n.__customParts||[];n.part.remove(...h),n.__customParts=o?o.trim().split(" "):[],n.part.add(...n.__customParts)}})}_renderBodyCellsContent(t,e){!e||!t||this.__renderCellsContent(t,e)}_onRendererOrBindingChanged(t,e,...a){this._renderBodyCellsContent(t,e)}_renderFooterCellContent(t,e){!e||!t||(this.__renderCellsContent(t,[e]),this._grid&&e.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(e.parentElement))}_onFooterRendererOrBindingChanged(t,e){this._renderFooterCellContent(t,e)}__setTextContent(t,e){t.textContent!==e&&(t.textContent=e)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(t,e,{item:a}){this.path&&this.__setTextContent(t,O0(this.path,a))}_defaultFooterRenderer(){}_computeHeaderRenderer(t,e){return t||(e!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(t){return t||this._defaultRenderer}_computeFooterRenderer(t){return t||this._defaultFooterRenderer}},Ar=s=>class extends Sr(Wt(s)){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String,sync:!0},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Er extends Ar(A){static get is(){return"vaadin-grid-column"}}E(Er);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const li=s=>s.test(navigator.userAgent),Qi=s=>s.test(navigator.platform),kr=s=>s.test(navigator.vendor),J0=li(/Android/u),pa=li(/Chrome/u)&&kr(/Google Inc/u),Ir=li(/Firefox/u),Tr=Qi(/^iPad/u)||Qi(/^Mac/u)&&navigator.maxTouchPoints>1,Or=Qi(/^iPhone/u),Ji=Or||Tr,di=li(/^((?!chrome|android).)*safari/iu),ci=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})(),Lr=window.ShadowRoot&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const ts=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),Pr=ts&&ts[1]>=8,es=3,Rr={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const s=this._virtualCount;return Math.max(0,s-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(s){s=this._clamp(s,0,this._maxVirtualStart),this._virtualStartVal=s},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(s){s%=this._physicalCount,s<0&&(s=this._physicalCount+s),this._physicalStartVal=s},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(s){this._physicalCountVal=s},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let s=this._firstVisibleIndexVal;if(s==null){let i=this._physicalTop+this._scrollOffset;s=this._iterateItems((t,e)=>{if(i+=this._getPhysicalSizeIncrement(t),i>this._scrollPosition)return e})||0,this._firstVisibleIndexVal=s}return s},get lastVisibleIndex(){let s=this._lastVisibleIndexVal;if(s==null){let i=this._physicalTop+this._scrollOffset;this._iterateItems((t,e)=>{i<this._scrollBottom&&(s=e),i+=this._getPhysicalSizeIncrement(t)}),this._lastVisibleIndexVal=s}return s},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const s=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let i=s-this._scrollPosition;const t=i>=0;if(this._scrollPosition=s,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(i)>this._physicalSize&&this._physicalSize>0){i-=this._scrollOffset;const e=Math.round(i/this._physicalAverage);this._virtualStart+=e,this._physicalStart+=e,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const e=this._getReusables(t);t?(this._physicalTop=e.physicalTop,this._virtualStart+=e.indexes.length,this._physicalStart+=e.indexes.length):(this._virtualStart-=e.indexes.length,this._physicalStart-=e.indexes.length),this._update(e.indexes,t?null:e.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Y)}},_getReusables(s){let i,t,e;const a=[],r=this._hiddenContentSize*this._ratio,n=this._virtualStart,o=this._virtualEnd,h=this._physicalCount;let l=this._physicalTop+this._scrollOffset;const c=this._physicalBottom+this._scrollOffset,v=this._scrollPosition,p=this._scrollBottom;for(s?(i=this._physicalStart,t=v-l):(i=this._physicalEnd,t=c-p);e=this._getPhysicalSizeIncrement(i),t-=e,!(a.length>=h||t<=r);)if(s){if(o+a.length+1>=this._virtualCount||l+e>=v-this._scrollOffset)break;a.push(i),l+=e,i=(i+1)%h}else{if(n-a.length<=0||l+this._physicalSize-e<=p)break;a.push(i),l-=e,i=i===0?h-1:i-1}return{indexes:a,physicalTop:l-this._scrollOffset}},_update(s,i){if(!(s&&s.length===0||this._physicalCount===0)){if(this._assignModels(s),this._updateMetrics(s),i)for(;i.length;){const t=i.pop();this._physicalTop-=this._getPhysicalSizeIncrement(t)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(s){const t=this._clamp(this._physicalCount+s,es,this._virtualCount-this._virtualStart)-this._physicalCount;let e=Math.round(this._physicalCount*.5);if(!(t<0)){if(t>0){const a=window.performance.now();[].push.apply(this._physicalItems,this._createPool(t));for(let r=0;r<t;r++)this._physicalSizes.push(0);this._physicalCount+=t,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=t),this._update(),this._templateCost=(window.performance.now()-a)/t,e=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||e===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,e)),vr):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,e),Y))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const s=this._getReusables(!0);this._physicalTop=s.physicalTop,this._virtualStart+=s.indexes.length,this._physicalStart+=s.indexes.length,this._update(s.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(es))},_itemsChanged(s){s.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,ut))},_iterateItems(s,i){let t,e,a,r;if(arguments.length===2&&i){for(r=0;r<i.length;r++)if(t=i[r],e=this._computeVidx(t),(a=s.call(this,t,e))!=null)return a}else{for(t=this._physicalStart,e=this._virtualStart;t<this._physicalCount;t++,e++)if((a=s.call(this,t,e))!=null)return a;for(t=0;t<this._physicalStart;t++,e++)if((a=s.call(this,t,e))!=null)return a}},_computeVidx(s){return s>=this._physicalStart?this._virtualStart+(s-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+s},_positionItems(){this._adjustScrollPosition();let s=this._physicalTop;this._iterateItems(i=>{this.translate3d(0,`${s}px`,0,this._physicalItems[i]),s+=this._physicalSizes[i]})},_getPhysicalSizeIncrement(s){return this._physicalSizes[s]},_adjustScrollPosition(){const s=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(s!==0){this._physicalTop-=s;const i=this._scrollPosition;!Pr&&i>0&&this._resetScrollPosition(i-s)}},_resetScrollPosition(s){this.scrollTarget&&s>=0&&(this._scrollTop=s,this._scrollPosition=this._scrollTop)},_updateScrollerSize(s){const i=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=i,(s||this._scrollHeight===0||this._scrollPosition>=i-this._physicalSize||Math.abs(i-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${i}px`,this._scrollHeight=i)},scrollToIndex(s){if(typeof s!="number"||s<0||s>this.items.length-1||(fe(),this._physicalCount===0))return;s=this._clamp(s,0,this._virtualCount-1),(!this._isIndexRendered(s)||s>=this._maxVirtualStart)&&(this._virtualStart=s-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let i=this._physicalStart,t=this._virtualStart,e=0;const a=this._hiddenContentSize;for(;t<s&&e<=a;)e+=this._getPhysicalSizeIncrement(i),i=(i+1)%this._physicalCount,t+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+e),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},ut)},_isIndexRendered(s){return s>=this._virtualStart&&s<=this._virtualEnd},_getPhysicalIndex(s){return(this._physicalStart+(s-this._virtualStart))%this._physicalCount},_clamp(s,i,t){return Math.min(t,Math.max(i,s))},_debounce(s,i,t){this._debouncers||(this._debouncers={}),this._debouncers[s]=M.debounce(this._debouncers[s],t,i.bind(this)),cr(this._debouncers[s])}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $r=1e5,fi=1e3;class ua{constructor({createElements:i,updateElement:t,scrollTarget:e,scrollContainer:a,elementsContainer:r,reorderElements:n}){this.isAttached=!0,this._vidxOffset=0,this.createElements=i,this.updateElement=t,this.scrollTarget=e,this.scrollContainer=a,this.elementsContainer=r||a,this.reorderElements=n,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),new ResizeObserver(([{contentRect:h}])=>{const l=h.width===0&&h.height===0;!l&&this.__scrollTargetHidden&&this.scrollTarget.scrollTop!==this._scrollPosition&&(this.scrollTarget.scrollTop=this._scrollPosition),this.__scrollTargetHidden=l}).observe(this.scrollTarget),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",h=>this.__onWheel(h)),this.scrollTarget.addEventListener("virtualizer-element-focused",h=>this.__onElementFocused(h)),this.elementsContainer.addEventListener("focusin",()=>{this.scrollTarget.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:this.__getFocusedElement()}}))}),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}get _maxVirtualIndexOffset(){return this.size-this._virtualCount}__hasPlaceholders(){return this.__getVisibleElements().some(i=>i.__virtualizerPlaceholder)}scrollToIndex(i){if(typeof i!="number"||isNaN(i)||this.size===0||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),i=this._clamp(i,0,this.size-1);const t=this.__getVisibleElements().length;let e=Math.floor(i/this.size*this._virtualCount);this._virtualCount-e<t?(e=this._virtualCount-(this.size-i),this._vidxOffset=this._maxVirtualIndexOffset):e<t?i<fi?(e=i,this._vidxOffset=0):(e=fi,this._vidxOffset=i-e):this._vidxOffset=i-e,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(e),this.adjustedFirstVisibleIndex!==i&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(i)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=i)}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),fe(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}hostConnected(){this.scrollTarget.offsetParent&&this.scrollTarget.scrollTop!==this._scrollPosition&&(this.scrollTarget.scrollTop=this._scrollPosition)}update(i=0,t=this.size-1){const e=[];this.__getVisibleElements().forEach(a=>{a.__virtualIndex>=i&&a.__virtualIndex<=t&&(this.__updateElement(a,a.__virtualIndex,!0),e.push(a))}),this.__afterElementsUpdated(e)}_updateMetrics(i){fe();let t=0,e=0;const a=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems((n,o)=>{e+=this._physicalSizes[n];const h=this._physicalSizes[n];this._physicalSizes[n]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[n])),this._physicalSizes[n]!==h&&(this.__resizeObserver.unobserve(this._physicalItems[n]),this.__resizeObserver.observe(this._physicalItems[n])),t+=this._physicalSizes[n],this._physicalAverageCount+=this._physicalSizes[n]?1:0},i),this._physicalSize=this._physicalSize+t-e,this._physicalAverageCount!==a&&(this._physicalAverage=Math.round((r*a+t)/this._physicalAverageCount))}__getBorderBoxHeight(i){const t=getComputedStyle(i),e=parseFloat(t.height)||0;if(t.boxSizing==="border-box")return e;const a=parseFloat(t.paddingBottom)||0,r=parseFloat(t.paddingTop)||0,n=parseFloat(t.borderBottomWidth)||0,o=parseFloat(t.borderTopWidth)||0;return e+a+r+n+o}__updateElement(i,t,e){i.__virtualizerPlaceholder&&(i.style.paddingTop="",i.style.opacity="",i.__virtualizerPlaceholder=!1),!this.__preventElementUpdates&&(i.__lastUpdatedIndex!==t||e)&&(this.updateElement(i,t),i.__lastUpdatedIndex=t)}__afterElementsUpdated(i){i.forEach(t=>{const e=t.offsetHeight;if(e===0)t.style.paddingTop=`${this.__placeholderHeight}px`,t.style.opacity="0",t.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=M.debounce(this.__placeholderClearDebouncer,ut,()=>this._resizeHandler());else{this.__elementHeightQueue.push(e),this.__elementHeightQueue.shift();const a=this.__elementHeightQueue.filter(r=>r!==void 0);this.__placeholderHeight=Math.round(a.reduce((r,n)=>r+n,0)/a.length)}}),this.__pendingScrollToIndex!==void 0&&!this.__hasPlaceholders()&&this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(i){const t=this.__getVisibleElements().find(e=>e.__virtualIndex===i);return t?this.scrollTarget.getBoundingClientRect().top-t.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(i){if(i===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let t,e;if(i>0&&(t=this.adjustedFirstVisibleIndex,e=this.__getIndexScrollOffset(t)),this.__size=i,this._itemsChanged({path:"items"}),fe(),i>0){t=Math.min(t,i-1),this.scrollToIndex(t);const a=this.__getIndexScrollOffset(t);e!==void 0&&a!==void 0&&(this._scrollTop+=e-a)}this.__preventElementUpdates=!1,this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),fe(),this._debounce("_update",this._update,Y)}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(i){this.scrollTarget.scrollTop=i}get items(){return{length:Math.min(this.size,$r)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const i=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(i["padding-top"],10),this._isRTL=i.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(i){const t=this.createElements(i),e=document.createDocumentFragment();return t.forEach(a=>{a.style.position="absolute",e.appendChild(a),this.__resizeObserver.observe(a)}),this.elementsContainer.appendChild(e),t}_assignModels(i){const t=[];this._iterateItems((e,a)=>{const r=this._physicalItems[e];r.hidden=a>=this.size,r.hidden?delete r.__lastUpdatedIndex:(r.__virtualIndex=a+(this._vidxOffset||0),this.__updateElement(r,r.__virtualIndex),t.push(r))},i),this.__afterElementsUpdated(t)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(i,t,e,a){a.style.transform=`translateY(${t})`}toggleScrollListener(){}__getFocusedElement(i=this.__getVisibleElements()){return i.find(t=>t.contains(this.elementsContainer.getRootNode().activeElement)||t.contains(this.scrollTarget.getRootNode().activeElement))}__nextFocusableSiblingMissing(i,t){return t.indexOf(i)===t.length-1&&this.size>i.__virtualIndex+1}__previousFocusableSiblingMissing(i,t){return t.indexOf(i)===0&&i.__virtualIndex>0}__onElementFocused(i){if(!this.reorderElements)return;const t=i.detail.element;if(!t)return;const e=this.__getVisibleElements();(this.__previousFocusableSiblingMissing(t,e)||this.__nextFocusableSiblingMissing(t,e))&&this.flush();const a=this.__getVisibleElements();this.__nextFocusableSiblingMissing(t,a)?(this._scrollTop+=Math.ceil(t.getBoundingClientRect().bottom)-Math.floor(this.scrollTarget.getBoundingClientRect().bottom-1),this.flush()):this.__previousFocusableSiblingMissing(t,a)&&(this._scrollTop-=Math.ceil(this.scrollTarget.getBoundingClientRect().top+1)-Math.floor(t.getBoundingClientRect().top),this.flush())}_scrollHandler(){if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const i=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const t=i>=0,e=this._getReusables(!t);e.indexes.length&&(this._physicalTop=e.physicalTop,t?(this._virtualStart-=e.indexes.length,this._physicalStart-=e.indexes.length):(this._virtualStart+=e.indexes.length,this._physicalStart+=e.indexes.length),this._resizeHandler())}i&&(this.__fixInvalidItemPositioningDebouncer=M.debounce(this.__fixInvalidItemPositioningDebouncer,j.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=M.debounce(this.__scrollReorderDebouncer,j.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(i)>0&&this.scrollToIndex(0)}_resizeHandler(){super._resizeHandler();const i=this.adjustedLastVisibleIndex===this.size-1,t=this._physicalTop-this._scrollPosition;if(i&&t>0){const e=Math.ceil(t/this._physicalAverage);this._virtualStart=Math.max(0,this._virtualStart-e),this._physicalStart=Math.max(0,this._physicalStart-e),super.scrollToIndex(this._virtualCount-1),this.scrollTarget.scrollTop=this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight}}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const i=this._physicalTop>this._scrollTop,t=this._physicalBottom<this._scrollBottom,e=this.adjustedFirstVisibleIndex===0,a=this.adjustedLastVisibleIndex===this.size-1;if(i&&!e||t&&!a){const r=t,n=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(r?-1:1),this._scrollHandler(),this._ratio=n}}__onWheel(i){if(i.ctrlKey||this._hasScrolledAncestor(i.target,i.deltaX,i.deltaY))return;let t=i.deltaY;if(i.deltaMode===WheelEvent.DOM_DELTA_LINE?t*=this._scrollLineHeight:i.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame){this._deltaYAcc+=t,i.preventDefault();return}t+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=M.debounce(this.__debouncerWheelAnimationFrame,ut,()=>{this._wheelAnimationFrame=!1});const e=Math.abs(i.deltaX)+Math.abs(t);this._canScroll(this.scrollTarget,i.deltaX,t)?(i.preventDefault(),this.scrollTarget.scrollTop+=t,this.scrollTarget.scrollLeft+=i.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=M.debounce(this._debouncerIgnoreNewWheel,j.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&e<=this._previousMomentum||this._ignoreNewWheel?i.preventDefault():e>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=e}_hasScrolledAncestor(i,t,e){if(i===this.scrollTarget||i===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(i,t,e)&&["auto","scroll"].indexOf(getComputedStyle(i).overflow)!==-1)return!0;if(i!==this&&i.parentElement)return this._hasScrolledAncestor(i.parentElement,t,e)}_canScroll(i,t,e){return e>0&&i.scrollTop<i.scrollHeight-i.offsetHeight||e<0&&i.scrollTop>0||t>0&&i.scrollLeft<i.scrollWidth-i.offsetWidth||t<0&&i.scrollLeft>0}_increasePoolIfNeeded(i){if(this._physicalCount>2&&this._physicalAverage>0&&i>0){const e=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(i,Math.min(100,e)))}else super._increasePoolIfNeeded(i)}get _optPhysicalSize(){const i=super._optPhysicalSize;return i<=0||this.__hasPlaceholders()?i:i+this.__getItemHeightBuffer()}__getItemHeightBuffer(){if(this._physicalCount===0)return 0;const i=Math.ceil(this._viewportHeight*(this._maxPages-1)/2),t=Math.max(...this._physicalSizes);return t>Math.min(...this._physicalSizes)?Math.max(0,t-i):0}_getScrollLineHeight(){const i=document.createElement("div");i.style.fontSize="initial",i.style.display="none",document.body.appendChild(i);const t=window.getComputedStyle(i).fontSize;return document.body.removeChild(i),t?window.parseInt(t):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(i=>!i.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const i=this._virtualStart+(this._vidxOffset||0),t=this.__getVisibleElements(),e=this.__getFocusedElement(t)||t[0];if(!e)return;const a=e.__virtualIndex-i,r=t.indexOf(e)-a;if(r>0)for(let n=0;n<r;n++)this.elementsContainer.appendChild(t[n]);else if(r<0)for(let n=t.length+r;n<t.length;n++)this.elementsContainer.insertBefore(t[n],t[0]);if(di){const{transform:n}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=n})}}_adjustVirtualIndexOffset(i){const t=this._maxVirtualIndexOffset;if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(i)>1e4){const e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight);this._vidxOffset=Math.round(e*t)}else{const e=this._vidxOffset,a=fi,r=100;this._scrollTop===0?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<a&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset))),this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=t,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-a&&this._vidxOffset<t&&(this._vidxOffset+=Math.min(t-this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}}Object.setPrototypeOf(ua.prototype,Rr);class Dr{constructor(i){this.__adapter=new ua(i)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(i){this.__adapter.size=i}scrollToIndex(i){this.__adapter.scrollToIndex(i)}update(i=0,t=this.size-1){this.__adapter.update(i,t)}flush(){this.__adapter.flush()}hostConnected(){this.__adapter.hostConnected()}}/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nr=s=>class extends s{static get properties(){return{accessibleName:{type:String}}}static get observers(){return["_a11yUpdateGridSize(size, _columnTree, __emptyState)"]}_a11yGetHeaderRowCount(t){return t.filter(e=>e.some(a=>a.headerRenderer||a.path&&a.header!==null||a.header)).length}_a11yGetFooterRowCount(t){return t.filter(e=>e.some(a=>a.footerRenderer)).length}_a11yUpdateGridSize(t,e,a){if(t===void 0||e===void 0)return;const r=this._a11yGetHeaderRowCount(e),n=this._a11yGetFooterRowCount(e),h=(a?1:t)+r+n;this.$.table.setAttribute("aria-rowcount",h);const l=e[e.length-1],c=a?1:h&&l&&l.length||0;this.$.table.setAttribute("aria-colcount",c),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){k(this.$.header,(t,e)=>{t.setAttribute("aria-rowindex",e+1)})}_a11yUpdateFooterRows(){k(this.$.footer,(t,e)=>{t.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+e+1)})}_a11yUpdateRowRowindex(t,e){t.setAttribute("aria-rowindex",e+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(t,e){t.setAttribute("aria-selected",!!e),ne(t,a=>{a.setAttribute("aria-selected",!!e)})}_a11yUpdateRowExpanded(t){const e=Cr(t);this.__isRowExpandable(t)?(t.setAttribute("aria-expanded","false"),e&&e.setAttribute("aria-expanded","false")):this.__isRowCollapsible(t)?(t.setAttribute("aria-expanded","true"),e&&e.setAttribute("aria-expanded","true")):(t.removeAttribute("aria-expanded"),e&&e.removeAttribute("aria-expanded"))}_a11yUpdateRowLevel(t,e){e>0||this.__isRowCollapsible(t)||this.__isRowExpandable(t)?t.setAttribute("aria-level",e+1):t.removeAttribute("aria-level")}_a11ySetRowDetailsCell(t,e){ne(t,a=>{a!==e&&a.setAttribute("aria-controls",e.id)})}_a11yUpdateCellColspan(t,e){t.setAttribute("aria-colspan",Number(e))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(t=>{let e=t.parentNode;for(;e&&e.localName!=="vaadin-grid-cell-content";)e=e.parentNode;e&&e.assignedSlot&&e.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(t.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fr=s=>s.offsetParent&&!s.part.contains("body-cell")&&pr(s)&&getComputedStyle(s).visibility!=="hidden",Br=s=>class extends s{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(t){const e=t.detail.model,a=e?e.item:null;a&&(this.activeItem=this._itemsEqual(this.activeItem,a)?null:a)}_shouldPreventCellActivationOnClick(t){const{cell:e}=this._getGridEventLocation(t);return t.defaultPrevented||!e||e.getAttribute("part").includes("details-cell")||e===this.$.emptystatecell||e._content.contains(this.getRootNode().activeElement)||this._isFocusable(t.target)||t.target instanceof HTMLLabelElement}_onClick(t){if(this._shouldPreventCellActivationOnClick(t))return;const{cell:e}=this._getGridEventLocation(t);e&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(e.parentElement)}}))}_isFocusable(t){return Fr(t)}};function Kt(s,i){return s.split(".").reduce((t,e)=>t[e],i)}function is(s,i,t){if(t.length===0)return!1;let e=!0;return s.forEach(({path:a})=>{if(!a||a.indexOf(".")===-1)return;const r=a.replace(/\.[^.]*$/u,"");Kt(r,t[0])===void 0&&(console.warn(`Path "${a}" used for ${i} does not exist in all of the items, ${i} is disabled.`),e=!1)}),e}function Ye(s){return[void 0,null].indexOf(s)>=0?"":isNaN(s)?s.toString():s}function ss(s,i){return s=Ye(s),i=Ye(i),s<i?-1:s>i?1:0}function Vr(s,i){return s.sort((t,e)=>i.map(a=>a.direction==="asc"?ss(Kt(a.path,t),Kt(a.path,e)):a.direction==="desc"?ss(Kt(a.path,e),Kt(a.path,t)):0).reduce((a,r)=>a!==0?a:r,0))}function Hr(s,i){return s.filter(t=>i.every(e=>{const a=Ye(Kt(e.path,t)),r=Ye(e.value).toString().toLowerCase();return a.toString().toLowerCase().includes(r)}))}const jr=s=>(i,t)=>{let e=s?[...s]:[];i.filters&&is(i.filters,"filtering",e)&&(e=Hr(e,i.filters)),Array.isArray(i.sortOrders)&&i.sortOrders.length&&is(i.sortOrders,"sorting",e)&&(e=Vr(e,i.sortOrders));const a=Math.min(e.length,i.pageSize),r=i.page*a,n=r+a,o=e.slice(r,n);t(o,e.length)};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wr=s=>class extends s{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*)"]}__setArrayDataProvider(t){const e=jr(this.items);e.__items=t,this._arrayDataProvider=e,this.size=t.length,this.dataProvider=e}_onDataProviderPageReceived(){super._onDataProviderPageReceived(),this._arrayDataProvider&&(this.size=this._flatSize)}__dataProviderOrItemsChanged(t,e,a){a&&(this._arrayDataProvider?t!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):e?this._arrayDataProvider.__items===e?this.clearCache():this.__setArrayDataProvider(e):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):e&&this.__setArrayDataProvider(e))}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qr=s=>class extends s{static get properties(){return{__pendingRecalculateColumnWidths:{type:Boolean,value:!0}}}static get observers(){return["__dataProviderChangedAutoWidth(dataProvider)","__columnTreeChangedAutoWidth(_columnTree)","__flatSizeChangedAutoWidth(_flatSize)"]}constructor(){super(),this.addEventListener("animationend",this.__onAnimationEndAutoWidth)}__onAnimationEndAutoWidth(i){i.animationName.indexOf("vaadin-grid-appear")===0&&this.__tryToRecalculateColumnWidthsIfPending()}__dataProviderChangedAutoWidth(i){this.__hasHadRenderedRowsForColumnWidthCalculation||this.recalculateColumnWidths()}__columnTreeChangedAutoWidth(i){queueMicrotask(()=>this.recalculateColumnWidths())}__flatSizeChangedAutoWidth(i){requestAnimationFrame(()=>{i&&!this.__hasHadRenderedRowsForColumnWidthCalculation?this.recalculateColumnWidths():this.__tryToRecalculateColumnWidthsIfPending()})}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_updateFrozenColumn(){super._updateFrozenColumn(),this.__tryToRecalculateColumnWidthsIfPending()}__getIntrinsicWidth(i){return this.__intrinsicWidthCache.has(i)||this.__calculateAndCacheIntrinsicWidths([i]),this.__intrinsicWidthCache.get(i)}__getDistributedWidth(i,t){if(i==null||i===this)return 0;const e=Math.max(this.__getIntrinsicWidth(i),this.__getDistributedWidth(this.__getParentColumnGroup(i),i));if(!t)return e;const a=i,r=e,n=a._visibleChildColumns.map(c=>this.__getIntrinsicWidth(c)).reduce((c,v)=>c+v,0),o=Math.max(0,r-n),l=this.__getIntrinsicWidth(t)/n*o;return this.__getIntrinsicWidth(t)+l}_recalculateColumnWidths(){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(r=>{r.__debounceUpdateHeaderFooterRowVisibility&&r.__debounceUpdateHeaderFooterRowVisibility.flush()}),this.__hasHadRenderedRowsForColumnWidthCalculation=this.__hasHadRenderedRowsForColumnWidthCalculation||this._getRenderedRows().length>0,this.__intrinsicWidthCache=new Map;const i=this._firstVisibleIndex,t=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(r=>r.index>=i&&r.index<=t);const e=this.__getAutoWidthColumns(),a=new Set;for(const r of e){let n=this.__getParentColumnGroup(r);for(;n&&!a.has(n);)a.add(n),n=this.__getParentColumnGroup(n)}this.__calculateAndCacheIntrinsicWidths([...e,...a]),e.forEach(r=>{r.width=`${this.__getDistributedWidth(r)}px`}),this.__intrinsicWidthCache.clear()}__getParentColumnGroup(i){const t=(i.assignedSlot||i).parentElement;return t&&t!==this?t:null}__setVisibleCellContentAutoWidth(i,t){i._allCells.filter(e=>this.$.items.contains(e)?this.__viewportRowsCache.includes(e.parentElement):!0).forEach(e=>{e.__measuringAutoWidth=t,e.__measuringAutoWidth?(e.__originalWidth=e.style.width,e.style.width="auto",e.style.position="absolute"):(e.style.width=e.__originalWidth,delete e.__originalWidth,e.style.position="")}),t?this.$.scroller.setAttribute("measuring-auto-width",""):this.$.scroller.removeAttribute("measuring-auto-width")}__getAutoWidthCellsMaxWidth(i){return i._allCells.reduce((t,e)=>e.__measuringAutoWidth?Math.max(t,e.offsetWidth+1):t,0)}__calculateAndCacheIntrinsicWidths(i){i.forEach(t=>this.__setVisibleCellContentAutoWidth(t,!0)),i.forEach(t=>{const e=this.__getAutoWidthCellsMaxWidth(t);this.__intrinsicWidthCache.set(t,e)}),i.forEach(t=>this.__setVisibleCellContentAutoWidth(t,!1))}recalculateColumnWidths(){if(!this.__isReadyForColumnWidthCalculation()){this.__pendingRecalculateColumnWidths=!0;return}this._recalculateColumnWidths()}__tryToRecalculateColumnWidthsIfPending(){this.__pendingRecalculateColumnWidths&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}__getAutoWidthColumns(){return this._getColumns().filter(i=>!i.hidden&&i.autoWidth)}__isReadyForColumnWidthCalculation(){if(!this._columnTree)return!1;const i=this.__getAutoWidthColumns().filter(n=>!customElements.get(n.localName));if(i.length)return Promise.all(i.map(n=>customElements.whenDefined(n.localName))).then(()=>{this.__tryToRecalculateColumnWidthsIfPending()}),!1;const t=[...this.$.items.children].some(n=>n.index===void 0),e=this._debouncerHiddenChanged&&this._debouncerHiddenChanged.isActive(),a=this.__debounceUpdateFrozenColumn&&this.__debounceUpdateFrozenColumn.isActive(),r=this.clientHeight>0;return!this._dataProviderController.isLoading()&&!t&&!re(this)&&!e&&!a&&r}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ur=s=>class extends s{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),na(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(t){this.hasAttribute("reordering")&&(t.preventDefault(),ci||this._onTrackEnd())}_onTouchStart(t){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:t.touches[0].clientX,y:t.touches[0].clientY}})},100)}_onTouchMove(t){this._draggedColumn&&t.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(t){if(t.detail.state==="start"){const e=t.composedPath(),a=e[e.indexOf(this.$.header)-2];if(!a||!a._content||a._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(t)}else t.detail.state==="track"?this._onTrack(t):t.detail.state==="end"&&this._onTrackEnd(t)}_onTrackStart(t){if(!this.columnReorderingAllowed)return;const e=t.composedPath&&t.composedPath();if(e&&e.slice(0,Math.max(0,e.indexOf(this))).some(r=>r.draggable))return;const a=this._cellFromPoint(t.detail.x,t.detail.y);if(!(!a||!a.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=a._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(a),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(t.detail.x,this._touchDevice?t.detail.y-50:t.detail.y),this._autoScroller()}}_onTrack(t){if(!this._draggedColumn)return;const e=this._cellFromPoint(t.detail.x,t.detail.y);if(!e)return;const a=this._getTargetColumn(e,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,a)&&this._isSwappableByPosition(a,t.detail.x)){const r=this._columnTree.findIndex(c=>c.includes(a)),n=this._getColumnsInOrder(r),o=n.indexOf(this._draggedColumn),h=n.indexOf(a),l=o<h?1:-1;for(let c=o;c!==h;c+=l)this._swapColumnOrders(this._draggedColumn,n[c+l])}this._updateGhostPosition(t.detail.x,this._touchDevice?t.detail.y-50:t.detail.y),this._lastDragClientX=t.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(t=this._columnTree.length-1){return this._columnTree[t].filter(e=>!e.hidden).sort((e,a)=>e._order-a._order)}_cellFromPoint(t=0,e=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const a=this.shadowRoot.elementFromPoint(t,e);return this.$.scroller.toggleAttribute("no-content-pointer-events",!1),this._getCellFromElement(a)}_getCellFromElement(t){if(t){if(t._column)return t;const{parentElement:e}=t;if(e&&e._focusButton===t)return e}return null}_updateGhostPosition(t,e){const a=this._reorderGhost.getBoundingClientRect(),r=t-a.width/2,n=e-a.height/2,o=parseInt(this._reorderGhost._left||0),h=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=o-(a.left-r),this._reorderGhost._top=h-(a.top-n),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(t){const e=this._reorderGhost;e.textContent=t._content.innerText;const a=window.getComputedStyle(t);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(r=>{e.style[r]=a[r]}),e}_updateOrders(t){t!==void 0&&(t[0].forEach(e=>{e._order=0}),xr(t[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(t,e){k(t.parentNode,a=>{/column/u.test(a.localName)&&this._isSwapAllowed(a,t)&&(a._reorderStatus=e)})}_autoScroller(){if(this._lastDragClientX){const t=this._lastDragClientX-this.getBoundingClientRect().right+50,e=this.getBoundingClientRect().left-this._lastDragClientX+50;t>0?this.$.table.scrollLeft+=t/10:e>0&&(this.$.table.scrollLeft-=e/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(t,e){if(t&&e){const a=t!==e,r=t.parentElement===e.parentElement,n=t.frozen&&e.frozen||t.frozenToEnd&&e.frozenToEnd||!t.frozen&&!t.frozenToEnd&&!e.frozen&&!e.frozenToEnd;return a&&r&&n}}_isSwappableByPosition(t,e){const a=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(o=>t.contains(o._column)),r=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),n=a.getBoundingClientRect();return n.left>r.left?e>n.right-r.width:e<n.left+r.width}_swapColumnOrders(t,e){[t._order,e._order]=[e._order,t._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(t,e){if(t&&e){let a=t._column;for(;a.parentElement!==e.parentElement&&a!==this;)a=a.parentElement;return a.parentElement===e.parentElement?a:t._column}}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gr=s=>class extends s{ready(){super.ready();const t=this.$.scroller;na(t,"track",this._onHeaderTrack.bind(this)),t.addEventListener("touchmove",e=>t.hasAttribute("column-resizing")&&e.preventDefault()),t.addEventListener("contextmenu",e=>e.target.getAttribute("part")==="resize-handle"&&e.preventDefault()),t.addEventListener("mousedown",e=>e.target.getAttribute("part")==="resize-handle"&&e.preventDefault())}_onHeaderTrack(t){const e=t.target;if(e.getAttribute("part")==="resize-handle"){let r=e.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);r.localName==="vaadin-grid-column-group";)r=r._childColumns.slice(0).sort((v,p)=>v._order-p._order).filter(v=>!v.hidden).pop();const n=this.__isRTL,o=t.detail.x,h=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),l=h.find(v=>v._column===r);if(l.offsetWidth){const v=getComputedStyle(l._content),p=10+parseInt(v.paddingLeft)+parseInt(v.paddingRight)+parseInt(v.borderLeftWidth)+parseInt(v.borderRightWidth)+parseInt(v.marginLeft)+parseInt(v.marginRight);let z;const y=l.offsetWidth,I=l.getBoundingClientRect();l.hasAttribute("frozen-to-end")?z=y+(n?o-I.right:I.left-o):z=y+(n?I.left-o:o-I.right),r.width=`${Math.max(p,z)}px`,r.flexGrow=0}h.sort((v,p)=>v._column._order-p._column._order).forEach((v,p,z)=>{p<z.indexOf(l)&&(v._column.width=`${v.offsetWidth}px`,v._column.flexGrow=0)});const c=this._frozenToEndCells[0];if(c&&this.$.table.scrollWidth>this.$.table.offsetWidth){const v=c.getBoundingClientRect(),p=o-(n?v.right:v.left);(n&&p<=0||!n&&p>=0)&&(this.$.table.scrollLeft+=p)}t.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:r}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ze(s,i,t=0){let e=i;for(const a of s.subCaches){const r=a.parentCacheIndex;if(e<=r)break;if(e<=r+a.flatSize)return Ze(a,e-r-1,t+1);e-=a.flatSize}return{cache:s,item:s.items[e],index:e,page:Math.floor(e/s.pageSize),level:t}}function ga({getItemId:s},i,t,e=0,a=0){for(let r=0;r<i.items.length;r++){const n=i.items[r];if(n&&s(n)===s(t))return{cache:i,level:e,item:n,index:r,page:Math.floor(r/i.pageSize),subCache:i.getSubCache(r),flatIndex:a+i.getFlatIndex(r)}}for(const r of i.subCaches){const n=a+i.getFlatIndex(r.parentCacheIndex),o=ga({getItemId:s},r,t,e+1,n+1);if(o)return o}}function fa(s,[i,...t],e=0){i===1/0&&(i=s.size-1);const a=s.getFlatIndex(i),r=s.getSubCache(i);return r&&r.flatSize>0&&t.length?fa(r,t,e+a+1):e+a}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class L0{constructor(i,t,e,a,r){x(this,"context");x(this,"pageSize");x(this,"items",[]);x(this,"pendingRequests",{});x(this,"__subCacheByIndex",{});x(this,"__size",0);x(this,"__flatSize",0);this.context=i,this.pageSize=t,this.size=e,this.parentCache=a,this.parentCacheIndex=r,this.__flatSize=e||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return Object.keys(this.pendingRequests).length>0?!0:this.subCaches.some(i=>i.isLoading)}get flatSize(){return this.__flatSize}get effectiveSize(){return console.warn("<vaadin-grid> The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.flatSize}get size(){return this.__size}set size(i){var e;if(this.__size!==i){if(this.__size=i,this.context.placeholder!==void 0){this.items.length=i||0;for(let a=0;a<i;a++)(e=this.items)[a]||(e[a]=this.context.placeholder)}Object.keys(this.pendingRequests).forEach(a=>{parseInt(a)*this.pageSize>=this.size&&delete this.pendingRequests[a]})}}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((i,t)=>(t.recalculateFlatSize(),i+t.flatSize),0):0}setPage(i,t){const e=i*this.pageSize;t.forEach((a,r)=>{const n=e+r;(this.size===void 0||n<this.size)&&(this.items[n]=a)})}getSubCache(i){return this.__subCacheByIndex[i]}removeSubCache(i){delete this.__subCacheByIndex[i]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(i){const t=new L0(this.context,this.pageSize,0,this,i);return this.__subCacheByIndex[i]=t,t}getFlatIndex(i){const t=Math.max(0,Math.min(this.size-1,i));return this.subCaches.reduce((e,a)=>{const r=a.parentCacheIndex;return t>r?e+a.flatSize:e},t)}getItemForIndex(i){console.warn("<vaadin-grid> The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{item:t}=Ze(this,i);return t}getCacheAndIndex(i){console.warn("<vaadin-grid> The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{cache:t,index:e}=Ze(this,i);return{cache:t,scaledIndex:e}}updateSize(){console.warn("<vaadin-grid> The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25."),this.recalculateFlatSize()}ensureSubCacheForScaledIndex(i){if(console.warn("<vaadin-grid> The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25."),!this.getSubCache(i)){const t=this.createSubCache(i);this.context.__controller.__loadCachePage(t,0)}}get grid(){return console.warn("<vaadin-grid> The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.context.__controller.host}get itemCaches(){return console.warn("<vaadin-grid> The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.__subCacheByIndex}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Kr extends EventTarget{constructor(t,{size:e,pageSize:a,isExpanded:r,getItemId:n,isPlaceholder:o,placeholder:h,dataProvider:l,dataProviderParams:c}){super();x(this,"host");x(this,"dataProvider");x(this,"dataProviderParams");x(this,"pageSize");x(this,"isExpanded");x(this,"getItemId");x(this,"rootCache");x(this,"placeholder");x(this,"isPlaceholder");this.host=t,this.pageSize=a,this.getItemId=n,this.isExpanded=r,this.placeholder=h,this.isPlaceholder=o,this.dataProvider=l,this.dataProviderParams=c,this.rootCache=this.__createRootCache(e)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,placeholder:this.placeholder,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(t){this.pageSize=t,this.clearCache()}setDataProvider(t){this.dataProvider=t,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.__createRootCache(this.rootCache.size)}getFlatIndexContext(t){return Ze(this.rootCache,t)}getItemContext(t){return ga({getItemId:this.getItemId},this.rootCache,t)}getFlatIndexByPath(t){return fa(this.rootCache,t)}ensureFlatIndexLoaded(t){const{cache:e,page:a,item:r}=this.getFlatIndexContext(t);this.__isItemLoaded(r)||this.__loadCachePage(e,a)}ensureFlatIndexHierarchy(t){const{cache:e,item:a,index:r}=this.getFlatIndexContext(t);if(this.__isItemLoaded(a)&&this.isExpanded(a)&&!e.getSubCache(r)){const n=e.createSubCache(r);this.__loadCachePage(n,0)}}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(t){return new L0(this.__cacheContext,this.pageSize,t)}__loadCachePage(t,e){if(!this.dataProvider||t.pendingRequests[e])return;let a={page:e,pageSize:this.pageSize,parentItem:t.parentItem};this.dataProviderParams&&(a={...a,...this.dataProviderParams()});const r=(n,o)=>{t.pendingRequests[e]===r&&(o!==void 0?t.size=o:a.parentItem&&(t.size=n.length),t.setPage(e,n),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete t.pendingRequests[e],this.dispatchEvent(new CustomEvent("page-loaded")))};t.pendingRequests[e]=r,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(a,r)}__isItemLoaded(t){return this.isPlaceholder?!this.isPlaceholder(t):this.placeholder?t!==this.placeholder:!!t}}/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yr=s=>class extends s{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super(),this._dataProviderController=new Kr(this,{size:this.size||0,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})}),this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this)),this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this)),this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}get _cache(){return console.warn("<vaadin-grid> The `_cache` property is deprecated and will be removed in Vaadin 25."),this._dataProviderController.rootCache}get _effectiveSize(){return console.warn("<vaadin-grid> The `_effectiveSize` property is deprecated and will be removed in Vaadin 25."),this._flatSize}_sizeChanged(t){this._dataProviderController.rootCache.size=t,this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(t,e){!e&&t==="children"||this.requestContentUpdate()}_getItem(t,e){e.index=t;const{item:a}=this._dataProviderController.getFlatIndexContext(t);a?(this.__updateLoading(e,!1),this._updateItem(e,a),this._isExpanded(a)&&this._dataProviderController.ensureFlatIndexHierarchy(t)):(this.__updateLoading(e,!0),this._dataProviderController.ensureFlatIndexLoaded(t))}__updateLoading(t,e){const a=jt(t);hi(t,"loading",e),xt(a,"loading-row-cell",e),e&&(this._generateCellClassNames(t),this._generateCellPartNames(t))}getItemId(t){return this.itemIdPath?O0(this.itemIdPath,t):t}_isExpanded(t){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(t))}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize,this.__updateVisibleRows()}__computeExpandedKeys(t,e){const a=e||[],r=new Set;return a.forEach(n=>{r.add(this.getItemId(n))}),r}expandItem(t){this._isExpanded(t)||(this.expandedItems=[...this.expandedItems,t])}collapseItem(t){this._isExpanded(t)&&(this.expandedItems=this.expandedItems.filter(e=>!this._itemsEqual(e,t)))}_getIndexLevel(t=0){const{level:e}=this._dataProviderController.getFlatIndexContext(t);return e}_loadPage(t,e){console.warn("<vaadin-grid> The `_loadPage` method is deprecated and will be removed in Vaadin 25."),this._dataProviderController.__loadCachePage(e,t)}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize!==this._dataProviderController.flatSize&&(this._shouldUpdateAllRenderedRowsAfterPageLoad=!0,this._flatSize=this._dataProviderController.flatSize),this._getRenderedRows().forEach(t=>{this._dataProviderController.ensureFlatIndexHierarchy(t.index)}),this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=M.debounce(this._debouncerApplyCachedData,j.after(0),()=>{this._setLoading(!1);const t=this._shouldUpdateAllRenderedRowsAfterPageLoad;this._shouldUpdateAllRenderedRowsAfterPageLoad=!1,this._getRenderedRows().forEach(e=>{const{item:a}=this._dataProviderController.getFlatIndexContext(e.index);(a||t)&&this._getItem(e.index,e)}),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()}),this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=M.debounce(this.__clearCacheDebouncer,Y,()=>this.clearCache())}clearCache(){this._dataProviderController.clearCache(),this._dataProviderController.rootCache.size=this.size||0,this._dataProviderController.recalculateFlatSize(),this._hasData=!1,this.__updateVisibleRows(),(!this.__virtualizer||!this.__virtualizer.size)&&this._dataProviderController.loadFirstPage()}_pageSizeChanged(t,e){this._dataProviderController.setPageSize(t),e!==void 0&&t!==e&&this.clearCache()}_checkSize(){this.size===void 0&&this._flatSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(t,e){this._dataProviderController.setDataProvider(t?t.bind(this):null),e!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=M.debounce(this._debouncerCheckSize,j.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(t,e){return this.getItemId(t)===this.getItemId(e)}_getItemIndexInArray(t,e){let a=-1;return e.forEach((r,n)=>{this._itemsEqual(r,t)&&(a=n)}),a}scrollToIndex(...t){if(!this.__virtualizer||!this.clientHeight||!this._columnTree){this.__pendingScrollToIndexes=t;return}let e;for(;e!==(e=this._dataProviderController.getFlatIndexByPath(t));)this._scrollToFlatIndex(e);this._dataProviderController.isLoading()&&(this.__pendingScrollToIndexes=t)}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const t=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...t)}}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pe={BETWEEN:"between",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},gt={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},Zr=s=>class extends s{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50},__draggedItems:{value:()=>[]}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}constructor(){super(),this.__onDocumentDragStart=this.__onDocumentDragStart.bind(this)}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",t=>{this.dropMode&&(t.preventDefault(),t.stopPropagation())})}connectedCallback(){super.connectedCallback(),document.addEventListener("dragstart",this.__onDocumentDragStart,{capture:!0})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragstart",this.__onDocumentDragStart,{capture:!0})}_onDragStart(t){if(this.rowsDraggable){let e=t.target;if(e.localName==="vaadin-grid-cell-content"&&(e=e.assignedSlot.parentNode.parentNode),e.parentNode!==this.$.items)return;if(t.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const o=e.style.transform;e.style.top=/translateY\((.*)\)/u.exec(o)[1],e.style.transform="none",requestAnimationFrame(()=>{e.style.top="",e.style.transform=o})}const a=e.getBoundingClientRect();t.dataTransfer.setDragImage(e,t.clientX-a.left,t.clientY-a.top);let r=[e];this._isSelected(e._item)&&(r=this.__getViewportRows().filter(o=>this._isSelected(o._item)).filter(o=>!this.dragFilter||this.dragFilter(this.__getRowModel(o)))),this.__draggedItems=r.map(o=>o._item),t.dataTransfer.setData("text",this.__formatDefaultTransferData(r)),Gt(e,{dragstart:r.length>1?`${r.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${t.clientX-a.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${t.clientY-a.top+10}px`),requestAnimationFrame(()=>{Gt(e,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y",""),this.requestContentUpdate()});const n=new CustomEvent("grid-dragstart",{detail:{draggedItems:[...this.__draggedItems],setDragData:(o,h)=>t.dataTransfer.setData(o,h),setDraggedItemsCount:o=>e.setAttribute("dragstart",o)}});n.originalEvent=t,this.dispatchEvent(n)}}_onDragEnd(t){this.toggleAttribute("dragging-rows",!1),t.stopPropagation();const e=new CustomEvent("grid-dragend");e.originalEvent=t,this.dispatchEvent(e),this.__draggedItems=[],this.requestContentUpdate()}_onDragLeave(t){this.dropMode&&(t.stopPropagation(),this._clearDragStyles())}_onDragOver(t){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(t.clientY)){this._clearDragStyles();return}let e=t.composedPath().find(a=>a.localName==="tr");if(!this._flatSize||this.dropMode===pe.ON_GRID)this._dropLocation=gt.EMPTY;else if(!e||e.parentNode!==this.$.items){if(e)return;if(this.dropMode===pe.BETWEEN||this.dropMode===pe.ON_TOP_OR_BETWEEN)e=Array.from(this.$.items.children).filter(a=>!a.hidden).pop(),this._dropLocation=gt.BELOW;else return}else{const a=e.getBoundingClientRect();if(this._dropLocation=gt.ON_TOP,this.dropMode===pe.BETWEEN){const r=t.clientY-a.top<a.bottom-t.clientY;this._dropLocation=r?gt.ABOVE:gt.BELOW}else this.dropMode===pe.ON_TOP_OR_BETWEEN&&(t.clientY-a.top<a.height/3?this._dropLocation=gt.ABOVE:t.clientY-a.top>a.height/3*2&&(this._dropLocation=gt.BELOW))}if(e&&e.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}t.stopPropagation(),t.preventDefault(),this._dropLocation===gt.EMPTY?this.toggleAttribute("dragover",!0):e?(this._dragOverItem=e._item,e.getAttribute("dragover")!==this._dropLocation&&Q0(e,{dragover:this._dropLocation})):this._clearDragStyles()}}__onDocumentDragStart(t){if(t.target.contains(this)){const e=[t.target,this.$.items,this.$.scroller],a=e.map(r=>r.style.cssText);this.$.table.scrollHeight>2e4&&(this.$.scroller.style.display="none"),pa&&(t.target.style.willChange="transform"),di&&(this.$.items.style.flexShrink=1),requestAnimationFrame(()=>{e.forEach((r,n)=>{r.style.cssText=a[n]})})}}__dndAutoScroll(t){if(this.__dndAutoScrolling)return!0;const e=this.$.header.getBoundingClientRect().bottom,a=this.$.footer.getBoundingClientRect().top,r=e-t+this.__dndAutoScrollThreshold,n=t-a+this.__dndAutoScrollThreshold;let o=0;if(n>0?o=n*2:r>0&&(o=-r*2),o){const h=this.$.table.scrollTop;if(this.$.table.scrollTop+=o,h!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const t=this.$.header.getBoundingClientRect().bottom,e=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(a=>{const r=a.getBoundingClientRect();return r.bottom>t&&r.top<e})}_clearDragStyles(){this.removeAttribute("dragover"),k(this.$.items,t=>{Q0(t,{dragover:null})})}__updateDragSourceParts(t,e){Gt(t,{"drag-source":this.__draggedItems.includes(e.item)})}_onDrop(t){if(this.dropMode&&this._dropLocation){t.stopPropagation(),t.preventDefault();const e=t.dataTransfer.types&&Array.from(t.dataTransfer.types).map(r=>({type:r,data:t.dataTransfer.getData(r)}));this._clearDragStyles();const a=new CustomEvent("grid-drop",{bubbles:t.bubbles,cancelable:t.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:e}});a.originalEvent=t,this.dispatchEvent(a)}}__formatDefaultTransferData(t){return t.map(e=>Array.from(e.children).filter(a=>!a.hidden&&a.getAttribute("part").indexOf("details-cell")===-1).sort((a,r)=>a._column._order>r._column._order?1:-1).map(a=>a._content.textContent.trim()).filter(a=>a).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){k(this.$.items,t=>{t.hidden||this._filterDragAndDrop(t,this.__getRowModel(t))})}_filterDragAndDrop(t,e){const a=this.loading||t.hasAttribute("loading"),r=!this.rowsDraggable||a||this.dragFilter&&!this.dragFilter(e),n=!this.dropMode||a||this.dropFilter&&!this.dropFilter(e);ne(t,o=>{r?o._content.removeAttribute("draggable"):o._content.setAttribute("draggable",!0)}),Gt(t,{"drag-disabled":!!r,"drop-disabled":!!n})}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function _a(s,i){if(!s||!i||s.length!==i.length)return!1;for(let t=0,e=s.length;t<e;t++)if(s[t]instanceof Array&&i[t]instanceof Array){if(!_a(s[t],i[t]))return!1}else if(s[t]!==i[t])return!1;return!0}const Xr=s=>class extends s{static get properties(){return{_columnTree:{type:Object,sync:!0}}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(t){return t.some(e=>e.localName==="vaadin-grid-column-group")}_getChildColumns(t){return Yt.getColumns(t)}_flattenColumnGroups(t){return t.map(e=>e.localName==="vaadin-grid-column-group"?this._getChildColumns(e):[e]).reduce((e,a)=>e.concat(a),[])}_getColumnTree(){const t=Yt.getColumns(this),e=[t];let a=t;for(;this._hasColumnGroups(a);)a=this._flattenColumnGroups(a),e.push(a);return e}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=M.debounce(this.__updateColumnTreeDebouncer,Y,()=>this._updateColumnTree())}_updateColumnTree(){const t=this._getColumnTree();_a(t,this._columnTree)||(this._columnTree=t)}_addNodeObserver(){this._observer=new Yt(this,(t,e)=>{const a=e.flatMap(n=>n._allCells),r=n=>a.filter(o=>o&&o._content.contains(n)).length;this.__removeSorters(this._sorters.filter(r)),this.__removeFilters(this._filters.filter(r)),this._debounceUpdateColumnTree(),this._debouncerCheckImports=M.debounce(this._debouncerCheckImports,j.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(t=>{this.querySelector(t)&&!customElements.get(t)&&console.warn(`Make sure you have imported the required module for <${t}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(t=>this._updateFirstAndLastColumnForRow(t))}_updateFirstAndLastColumnForRow(t){Array.from(t.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((e,a)=>e._column._order-a._column._order).forEach((e,a,r)=>{Ot(e,"first-column",a===0),Ot(e,"last-column",a===r.length-1)})}_isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(t.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qr=s=>class extends s{getEventContext(t){const e={},{cell:a}=this._getGridEventLocation(t);return a&&(e.section=["body","header","footer","details"].find(r=>a.getAttribute("part").indexOf(r)>-1),a._column&&(e.column=a._column),(e.section==="body"||e.section==="details")&&Object.assign(e,this.__getRowModel(a.parentElement))),e}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jr=s=>class extends s{static get properties(){return{_filters:{type:Array,value:()=>[]}}}constructor(){super(),this._filterChanged=this._filterChanged.bind(this),this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(t){t.stopPropagation(),this.__addFilter(t.target),this.__applyFilters()}__removeFilters(t){t.length!==0&&(this._filters=this._filters.filter(e=>t.indexOf(e)<0),this.__applyFilters())}__addFilter(t){this._filters.indexOf(t)===-1&&this._filters.push(t)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(t=>({path:t.path,value:t.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Re(s){return s instanceof HTMLTableRowElement}function $e(s){return s instanceof HTMLTableCellElement}function Tt(s){return s.matches('[part~="details-cell"]')}const tn=s=>class extends s{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return[this._headerFocusable,this._itemsFocusable,this._footerFocusable].some(Re)}set __rowFocusMode(t){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(e=>{const a=this[e];if(t){const r=a&&a.parentElement;$e(a)?this[e]=r:$e(r)&&(this[e]=r.parentElement)}else if(!t&&Re(a)){const r=a.firstElementChild;this[e]=r._focusButton||r}})}get _visibleItemsCount(){return this._lastVisibleIndex-this._firstVisibleIndex-1}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(t,e){e&&e.setAttribute("tabindex","-1"),t&&this._updateGridSectionFocusTarget(t)}_focusedCellChanged(t,e){e&&k0(e,"part","focused-cell"),t&&ti(t,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const t=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach(e=>{if(e.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=e;else{let a=this._itemsFocusable.parentElement,r=this._itemsFocusable;if(a){$e(a)&&(r=a,a=a.parentElement);const n=[...a.children].indexOf(r);this._itemsFocusable=this.__getFocusable(e,e.children[n])}}}),t&&this._itemsFocusable.focus()}_onKeyDown(t){const e=t.key;let a;switch(e){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":a="Navigation";break;case"Enter":case"Escape":case"F2":a="Interaction";break;case"Tab":a="Tab";break;case" ":a="Space";break}this._detectInteracting(t),this.interacting&&a!=="Interaction"&&(a=void 0),a&&this[`_on${a}KeyDown`](t,e)}__ensureFlatIndexInViewport(t){const e=[...this.$.items.children].find(a=>a.index===t);e?this.__scrollIntoViewport(e):this._scrollToFlatIndex(t)}__isRowExpandable(t){if(this.itemHasChildrenPath){const e=t._item;return!!(e&&O0(this.itemHasChildrenPath,e)&&!this._isExpanded(e))}}__isRowCollapsible(t){return this._isExpanded(t._item)}_onNavigationKeyDown(t,e){t.preventDefault();const a=this.__isRTL,r=t.composedPath().find(Re),n=t.composedPath().find($e);let o=0,h=0;switch(e){case"ArrowRight":o=a?-1:1;break;case"ArrowLeft":o=a?1:-1;break;case"Home":this.__rowFocusMode||t.ctrlKey?h=-1/0:o=-1/0;break;case"End":this.__rowFocusMode||t.ctrlKey?h=1/0:o=1/0;break;case"ArrowDown":h=1;break;case"ArrowUp":h=-1;break;case"PageDown":if(this.$.items.contains(r)){const v=this.__getIndexInGroup(r,this._focusedItemIndex);this._scrollToFlatIndex(v)}h=this._visibleItemsCount;break;case"PageUp":h=-this._visibleItemsCount;break}if(this.__rowFocusMode&&!r||!this.__rowFocusMode&&!n)return;const l=a?"ArrowLeft":"ArrowRight",c=a?"ArrowRight":"ArrowLeft";if(e===l){if(this.__rowFocusMode){if(this.__isRowExpandable(r)){this.expandItem(r._item);return}this.__rowFocusMode=!1,this._onCellNavigation(r.firstElementChild,0,0);return}}else if(e===c)if(this.__rowFocusMode){if(this.__isRowCollapsible(r)){this.collapseItem(r._item);return}}else{const v=[...r.children].sort((p,z)=>p._order-z._order);if(n===v[0]||Tt(n)){this.__rowFocusMode=!0,this._onRowNavigation(r,0);return}}this.__rowFocusMode?this._onRowNavigation(r,h):this._onCellNavigation(n,o,h)}_onRowNavigation(t,e){const{dstRow:a}=this.__navigateRows(e,t);a&&a.focus()}__getIndexInGroup(t,e){const a=t.parentNode;return a===this.$.items?e!==void 0?e:t.index:[...a.children].indexOf(t)}__navigateRows(t,e,a){const r=this.__getIndexInGroup(e,this._focusedItemIndex),n=e.parentNode,o=(n===this.$.items?this._flatSize:n.children.length)-1;let h=Math.max(0,Math.min(r+t,o));if(n!==this.$.items){if(h>r)for(;h<o&&n.children[h].hidden;)h+=1;else if(h<r)for(;h>0&&n.children[h].hidden;)h-=1;return this.toggleAttribute("navigating",!0),{dstRow:n.children[h]}}let l=!1;if(a){const c=Tt(a);if(n===this.$.items){const v=e._item,{item:p}=this._dataProviderController.getFlatIndexContext(h);c?l=t===0:l=t===1&&this._isDetailsOpened(v)||t===-1&&h!==r&&this._isDetailsOpened(p),l!==c&&(t===1&&l||t===-1&&!l)&&(h=r)}}return this.__ensureFlatIndexInViewport(h),this._focusedItemIndex=h,this.toggleAttribute("navigating",!0),{dstRow:[...n.children].find(c=>!c.hidden&&c.index===h),dstIsRowDetails:l}}_onCellNavigation(t,e,a){const r=t.parentNode,{dstRow:n,dstIsRowDetails:o}=this.__navigateRows(a,r,t);if(!n)return;let h=[...r.children].indexOf(t);this.$.items.contains(t)&&(h=[...this.$.sizer.children].findIndex(p=>p._column===t._column));const l=Tt(t),c=r.parentNode,v=this.__getIndexInGroup(r,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(l?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(c,v).filter(p=>!p.hidden)[h]._order),o)[...n.children].find(Tt).focus();else{const p=this.__getIndexInGroup(n,this._focusedItemIndex),z=this._getColumns(c,p).filter(C=>!C.hidden),y=z.map(C=>C._order).sort((C,D)=>C-D),I=y.length-1,V=y.indexOf(y.slice(0).sort((C,D)=>Math.abs(C-this._focusedColumnOrder)-Math.abs(D-this._focusedColumnOrder))[0]),kt=a===0&&l?V:Math.max(0,Math.min(V+e,I));kt!==V&&(this._focusedColumnOrder=void 0);const ve=z.reduce((C,D,or)=>(C[D._order]=or,C),{})[y[kt]];let It;if(this.$.items.contains(t)){const C=this.$.sizer.children[ve];this._lazyColumns&&(this.__isColumnInViewport(C._column)||C.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),It=[...n.children].find(D=>D._column===C._column),this._scrollHorizontallyToCell(It)}else It=n.children[ve],this._scrollHorizontallyToCell(It);It.focus()}}_onInteractionKeyDown(t,e){const a=t.composedPath()[0],r=a.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(a.type);let n;switch(e){case"Enter":n=this.interacting?!r:!0;break;case"Escape":n=!1;break;case"F2":n=!this.interacting;break}const{cell:o}=this._getGridEventLocation(t);if(this.interacting!==n&&o!==null)if(n){const h=o._content.querySelector("[focus-target]")||[...o._content.querySelectorAll("*")].find(l=>this._isFocusable(l));h&&(t.preventDefault(),h.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else t.preventDefault(),this._focusedColumnOrder=void 0,o.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);e==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(t,e){const a=[this.$.table,this._headerFocusable,this.__emptyState?this.$.emptystatecell:this._itemsFocusable,this._footerFocusable,this.$.focusexit];let r=a.indexOf(t);for(r+=e;r>=0&&r<=a.length-1;){let o=a[r];if(o&&!this.__rowFocusMode&&(o=a[r].parentNode),!o||o.hidden)r+=e;else break}let n=a[r];if(n&&!this.__isHorizontallyInViewport(n)){const o=this._getColumnsInOrder().find(h=>this.__isColumnInViewport(h));if(o)if(n===this._headerFocusable)n=o._headerCell;else if(n===this._itemsFocusable){const h=n._column._cells.indexOf(n);n=o._cells[h]}else n===this._footerFocusable&&(n=o._footerCell)}return n}_onTabKeyDown(t){let e=this._predictFocusStepTarget(t.composedPath()[0],t.shiftKey?-1:1);e&&(t.stopPropagation(),e===this._itemsFocusable&&(this.__ensureFlatIndexInViewport(this._focusedItemIndex),this.__updateItemsFocusable(),e=this._itemsFocusable),e.focus(),e!==this.$.table&&e!==this.$.focusexit&&t.preventDefault(),this.toggleAttribute("navigating",!0))}_onSpaceKeyDown(t){t.preventDefault();const e=t.composedPath()[0],a=Re(e);(a||!e._content||!e._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(a?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(a?e:e.parentElement)}}))}_onKeyUp(t){if(!/^( |SpaceBar)$/u.test(t.key)||this.interacting)return;t.preventDefault();const e=t.composedPath()[0];if(e._content&&e._content.firstElementChild){const a=this.hasAttribute("navigating");e._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:t.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",a)}}_onFocusIn(t){this._isMousedown||this.toggleAttribute("navigating",!0);const e=t.composedPath()[0];e===this.$.table||e===this.$.focusexit?(this._isMousedown||this._predictFocusStepTarget(e,e===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(t)}_onFocusOut(t){this.toggleAttribute("navigating",!1),this._detectInteracting(t),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(t){const{section:e,cell:a,row:r}=this._getGridEventLocation(t);if(!(!a&&!this.__rowFocusMode)&&(this._detectInteracting(t),e&&(a||r)))if(this._activeRowGroup=e,e===this.$.header?this._headerFocusable=this.__getFocusable(r,a):e===this.$.items?(this._itemsFocusable=this.__getFocusable(r,a),this._focusedItemIndex=r.index):e===this.$.footer&&(this._footerFocusable=this.__getFocusable(r,a)),a){const n=this.getEventContext(t);this.__pendingBodyCellFocus=this.loading&&n.section==="body",!this.__pendingBodyCellFocus&&a!==this.$.emptystatecell&&a.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:n}})),this._focusedCell=a._focusButton||a,ei()&&t.target===a&&this._showTooltip(t)}else this._focusedCell=null}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(t,e){return this.__rowFocusMode?t:e._focusButton||e}_detectInteracting(t){const e=t.composedPath().some(a=>a.localName==="slot"&&this.shadowRoot.contains(a));this._setInteracting(e),this.__updateHorizontalScrollPosition()}_updateGridSectionFocusTarget(t){if(!t)return;const e=this._getGridSectionFromFocusTarget(t),a=this.interacting&&e===this._activeRowGroup;t.tabIndex=a?-1:0}_preventScrollerRotatingCellFocus(){this._activeRowGroup===this.$.items&&(this.__preventScrollerRotatingCellFocusDebouncer=M.debounce(this.__preventScrollerRotatingCellFocusDebouncer,ut,()=>{const t=this._activeRowGroup===this.$.items;this._getRenderedRows().some(a=>a.index===this._focusedItemIndex)?(this.__updateItemsFocusable(),t&&!this.__rowFocusMode&&(this._focusedCell=this._itemsFocusable),this._navigatingIsHidden&&(this.toggleAttribute("navigating",!0),this._navigatingIsHidden=!1)):t&&(this._focusedCell=null,this.hasAttribute("navigating")&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)))}))}_getColumns(t,e){let a=this._columnTree.length-1;return t===this.$.header?a=e:t===this.$.footer&&(a=this._columnTree.length-1-e),this._columnTree[a]}__isValidFocusable(t){return this.$.table.contains(t)&&t.offsetHeight}_resetKeyboardNavigation(){if(["header","footer"].forEach(t=>{if(!this.__isValidFocusable(this[`_${t}Focusable`])){const e=[...this.$[t].children].find(r=>r.offsetHeight),a=e?[...e.children].find(r=>!r.hidden):null;e&&a&&(this[`_${t}Focusable`]=this.__getFocusable(e,a))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const t=this.__getFirstVisibleItem(),e=t?[...t.children].find(a=>!a.hidden):null;e&&t&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(t,e))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(t){if(t.hasAttribute("frozen")||t.hasAttribute("frozen-to-end")||Tt(t))return;const e=t.getBoundingClientRect(),a=t.parentNode,r=Array.from(a.children).indexOf(t),n=this.$.table.getBoundingClientRect();let o=n.left,h=n.right;for(let l=r-1;l>=0;l--){const c=a.children[l];if(!(c.hasAttribute("hidden")||Tt(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){o=c.getBoundingClientRect().right;break}}for(let l=r+1;l<a.children.length;l++){const c=a.children[l];if(!(c.hasAttribute("hidden")||Tt(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){h=c.getBoundingClientRect().left;break}}e.left<o&&(this.$.table.scrollLeft+=Math.round(e.left-o)),e.right>h&&(this.$.table.scrollLeft+=Math.round(e.right-h))}_getGridEventLocation(t){const e=t.__composedPath||t.composedPath(),a=e.indexOf(this.$.table),r=a>=1?e[a-1]:null,n=a>=2?e[a-2]:null,o=a>=3?e[a-3]:null;return{section:r,row:n,cell:o}}_getGridSectionFromFocusTarget(t){return t===this._headerFocusable?this.$.header:t===this._itemsFocusable?this.$.items:t===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const en=s=>class extends s{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(t=>{t.forEach(({target:e})=>{this._updateDetailsCellHeight(e.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(t){t&&this._columnTree&&k(this.$.items,e=>{if(!e.querySelector("[part~=details-cell]")){this._updateRow(e,this._columnTree[this._columnTree.length-1]);const a=this._isDetailsOpened(e._item);this._toggleDetailsCell(e,a)}})}_detailsOpenedItemsChanged(t,e){k(this.$.items,a=>{if(a.hasAttribute("details-opened")){this._updateItem(a,a._item);return}e&&this._isDetailsOpened(a._item)&&this._updateItem(a,a._item)})}_configureDetailsCell(t){t.setAttribute("part","cell details-cell"),t.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(t)}_toggleDetailsCell(t,e){const a=t.querySelector('[part~="details-cell"]');a&&(a.hidden=!e,!a.hidden&&this.rowDetailsRenderer&&(a._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(t){const e=t.querySelector('[part~="details-cell"]');e&&(this.__updateDetailsRowPadding(t,e),requestAnimationFrame(()=>this.__updateDetailsRowPadding(t,e)))}__updateDetailsRowPadding(t,e){e.hidden?t.style.removeProperty("padding-bottom"):t.style.setProperty("padding-bottom",`${e.offsetHeight}px`)}_updateDetailsCellHeights(){k(this.$.items,t=>{this._updateDetailsCellHeight(t)})}_isDetailsOpened(t){return this.detailsOpenedItems&&this._getItemIndexInArray(t,this.detailsOpenedItems)!==-1}openItemDetails(t){this._isDetailsOpened(t)||(this.detailsOpenedItems=[...this.detailsOpenedItems,t])}closeItemDetails(t){this._isDetailsOpened(t)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(e=>!this._itemsEqual(e,t)))}};/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const N=document.createElement("div");N.style.position="fixed";N.style.clip="rect(0px, 0px, 0px, 0px)";N.setAttribute("aria-live","polite");document.body.appendChild(N);let De;function sn(s,i={}){const t=i.mode||"polite",e=i.timeout===void 0?150:i.timeout;t==="alert"?(N.removeAttribute("aria-live"),N.removeAttribute("role"),De=M.debounce(De,ut,()=>{N.setAttribute("role","alert")})):(De&&De.cancel(),N.removeAttribute("role"),N.setAttribute("aria-live",t)),N.textContent="",setTimeout(()=>{N.textContent=s},e)}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ma=m(s=>class extends oa(ha(s)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged",sync:!0},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus()})}focus(t){this.focusElement&&!this.disabled&&(this.focusElement.focus(),t&&t.focusVisible===!1||this.setAttribute("focus-ring",""))}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,e){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):e&&this._removeFocusListeners(e)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_shouldRemoveFocus(t){return t.target===this.focusElement}_disabledChanged(t,e){super._disabledChanged(t,e),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){t!==void 0&&this.focusElement&&(this.focusElement.tabIndex=t,t!==-1&&(this.tabindex=void 0)),this.disabled&&t&&(t!==-1&&(this._lastTabIndex=t),this.tabindex=void 0),t===void 0&&this.hasAttribute("tabindex")&&this.removeAttribute("tabindex")}});/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _i=new Map;function P0(s){return _i.has(s)||_i.set(s,new WeakMap),_i.get(s)}function ba(s,i){s&&s.removeAttribute(i)}function Ma(s,i){if(!s||!i)return;const t=P0(i);if(t.has(s))return;const e=ur(s.getAttribute(i));t.set(s,new Set(e))}function an(s,i){if(!s||!i)return;const t=P0(i),e=t.get(s);!e||e.size===0?s.removeAttribute(i):ti(s,i,la(e)),t.delete(s)}function We(s,i,t={newId:null,oldId:null,fromUser:!1}){if(!s||!i)return;const{newId:e,oldId:a,fromUser:r}=t,n=P0(i),o=n.get(s);if(!r&&o){a&&o.delete(a),e&&o.add(e);return}r&&(o?e||n.delete(s):Ma(s,i),ba(s,i)),k0(s,i,a);const h=e||la(o);h&&ti(s,i,h)}function rn(s,i){Ma(s,i),ba(s,i)}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let nn=class{constructor(i){this.host=i,this.__required=!1}setTarget(i){this.__target=i,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(i){this.__setAriaRequiredAttribute(i),this.__required=i}setAriaLabel(i){this.__setAriaLabelToAttribute(i),this.__label=i}setLabelId(i,t=!1){const e=t?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(i,e,t),t?this.__labelIdFromUser=i:this.__labelId=i}setErrorId(i){this.__setErrorIdToAriaAttribute(i,this.__errorId),this.__errorId=i}setHelperId(i){this.__setHelperIdToAriaAttribute(i,this.__helperId),this.__helperId=i}__setAriaLabelToAttribute(i){this.__target&&(i?(rn(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",i)):this.__label&&(an(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(i,t,e){We(this.__target,"aria-labelledby",{newId:i,oldId:t,fromUser:e})}__setErrorIdToAriaAttribute(i,t){We(this.__target,"aria-describedby",{newId:i,oldId:t,fromUser:!1})}__setHelperIdToAriaAttribute(i,t){We(this.__target,"aria-describedby",{newId:i,oldId:t,fromUser:!1})}__setAriaRequiredAttribute(i){this.__target&&(["input","textarea"].includes(this.__target.localName)||(i?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mi=[];class on{constructor(i){this.host=i,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return gr(this.__trapNode)}get __focusedElementIndex(){const i=this.__focusableElements;return i.indexOf(i.filter(I0).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(i){if(this.__trapNode=i,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");mi.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus({focusVisible:ei()})}releaseFocus(){this.__trapNode=null,mi.pop()}__onKeyDown(i){if(this.__trapNode&&this===Array.from(mi).pop()&&i.key==="Tab"){i.preventDefault();const t=i.shiftKey;this.__focusNextElement(t)}}__focusNextElement(i=!1){const t=this.__focusableElements,e=i?-1:1,a=this.__focusedElementIndex,r=(t.length+a+e)%t.length,n=t[r];n.focus({focusVisible:!0}),n.localName==="input"&&n.select()}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hn{saveFocus(i){this.focusNode=i||Xi()}restoreFocus(i){const t=this.focusNode;if(!t)return;const e={preventScroll:i?i.preventScroll:!1,focusVisible:i?i.focusVisible:!1};Xi()===document.body?setTimeout(()=>t.focus(e)):t.focus(e),this.focusNode=null}}/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ln=s=>class extends ii(s){get focused(){return(this._getItems()||[]).find(I0)}get _vertical(){return!0}get _tabNavigation(){return!1}focus(t){const e=this._getFocusableIndex();e>=0&&this._focus(e,t)}_getFocusableIndex(){const t=this._getItems();return Array.isArray(t)?this._getAvailableIndex(t,0,null,e=>!re(e)):-1}_getItems(){return Array.from(this.children)}_onKeyDown(t){if(super._onKeyDown(t),t.metaKey||t.ctrlKey)return;const{key:e,shiftKey:a}=t,r=this._getItems()||[],n=r.indexOf(this.focused);let o,h;const c=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKeyPressed(e,a)?(h=-c,o=n-c):this.__isNextKeyPressed(e,a)?(h=c,o=n+c):e==="Home"?(h=1,o=0):e==="End"&&(h=-1,o=r.length-1),o=this._getAvailableIndex(r,o,h,v=>!re(v)),!(this._tabNavigation&&e==="Tab"&&(o>n&&t.shiftKey||o<n&&!t.shiftKey||o===n))&&o>=0&&(t.preventDefault(),this._focus(o,{focusVisible:!0},!0))}__isPrevKeyPressed(t,e){return this._vertical?t==="ArrowUp":t==="ArrowLeft"||this._tabNavigation&&t==="Tab"&&e}__isNextKeyPressed(t,e){return this._vertical?t==="ArrowDown":t==="ArrowRight"||this._tabNavigation&&t==="Tab"&&!e}_focus(t,e,a=!1){const r=this._getItems();this._focusItem(r[t],e,a)}_focusItem(t,e){t&&t.focus(e)}_getAvailableIndex(t,e,a,r){const n=t.length;let o=e;for(let h=0;typeof o=="number"&&h<n;h+=1,o+=a||1){o<0?o=n-1:o>=n&&(o=0);const l=t[o];if(this._isItemFocusable(l)&&this.__isMatchingItem(l,r))return o}return-1}__isMatchingItem(t,e){return typeof e=="function"?e(t):!0}_isItemFocusable(t){return!t.hasAttribute("disabled")}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function t0(s,i){const{scrollLeft:t}=s;return i!=="rtl"?t:s.scrollWidth-s.clientWidth+t}function dn(s,i,t){i!=="rtl"?s.scrollLeft=t:s.scrollLeft=s.clientWidth-s.scrollWidth+t}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const za=s=>class extends ln(s){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0,sync:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return this.orientation!=="horizontal"}focus(t){this._observer&&this._observer.flush();const e=Array.isArray(this.items)?this.items:[],a=this._getAvailableIndex(e,0,null,r=>r.tabIndex===0&&!re(r));a>=0?this._focus(a,t):super.focus(t)}ready(){super.ready(),this.addEventListener("click",e=>this._onClick(e));const t=this.shadowRoot.querySelector("slot:not([name])");this._observer=new da(t,()=>{this._setItems(this._filterItems([...this.children]))})}_getItems(){return this.items}_enhanceItems(t,e,a,r){if(!r&&t){this.setAttribute("aria-orientation",e||"vertical"),t.forEach(o=>{e?o.setAttribute("orientation",e):o.removeAttribute("orientation")}),this._setFocusable(a<0||!a?0:a);const n=t[a];t.forEach(o=>{o.selected=o===n}),n&&!n.disabled&&this._scrollToItem(a)}}_filterItems(t){return t.filter(e=>e._hasVaadinItemMixin)}_onClick(t){if(t.metaKey||t.shiftKey||t.ctrlKey||t.defaultPrevented)return;const e=this._filterItems(t.composedPath())[0];let a;e&&!e.disabled&&(a=this.items.indexOf(e))>=0&&(this.selected=a)}_searchKey(t,e){this._searchReset=M.debounce(this._searchReset,j.after(500),()=>{this._searchBuf=""}),this._searchBuf+=e.toLowerCase(),this.items.some(r=>this.__isMatchingKey(r))||(this._searchBuf=e.toLowerCase());const a=this._searchBuf.length===1?t+1:t;return this._getAvailableIndex(this.items,a,1,r=>this.__isMatchingKey(r)&&getComputedStyle(r).display!=="none")}__isMatchingKey(t){return t.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(t){if(t.metaKey||t.ctrlKey)return;const e=t.key,a=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(e)&&e.length===1){const r=this._searchKey(a,e);r>=0&&this._focus(r);return}super._onKeyDown(t)}_setFocusable(t){t=this._getAvailableIndex(this.items,t,1);const e=this.items[t];this.items.forEach(a=>{a.tabIndex=a===e?0:-1})}_focus(t,e){this.items.forEach((a,r)=>{a.focused=r===t}),this._setFocusable(t),this._scrollToItem(t),super._focus(t,e)}_scrollToItem(t){const e=this.items[t];if(!e)return;const a=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],r=this._scrollerElement.getBoundingClientRect(),n=(this.items[t+1]||e).getBoundingClientRect(),o=(this.items[t-1]||e).getBoundingClientRect();let h=0;!this._isRTL&&n[a[1]]>=r[a[1]]||this._isRTL&&n[a[1]]<=r[a[1]]?h=n[a[1]]-r[a[1]]:(!this._isRTL&&o[a[0]]<=r[a[0]]||this._isRTL&&o[a[0]]>=r[a[0]])&&(h=o[a[0]]-r[a[0]]),this._scroll(h)}_scroll(t){if(this._vertical)this._scrollerElement.scrollTop+=t;else{const e=this.getAttribute("dir")||"ltr",a=t0(this._scrollerElement,e)+t;dn(this._scrollerElement,e,a)}}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ne=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(i=>{i.target.isConnected&&(i.target.resizables?i.target.resizables.forEach(t=>{t._onResize(i.contentRect)}):i.target._onResize(i.contentRect))})})}),ya=m(s=>class extends s{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),Ne.observe(this),this._observeParent){const t=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;t.resizables||(t.resizables=new Set,Ne.observe(t)),t.resizables.add(this),this.__parent=t}}disconnectedCallback(){super.disconnectedCallback(),Ne.unobserve(this);const t=this.__parent;if(this._observeParent&&t){const e=t.resizables;e&&(e.delete(this),e.size===0&&Ne.unobserve(t)),this.__parent=null}}_onResize(t){}});/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const as={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},cn=s=>class extends ya(s){static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]}}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(t){this.$.table.scrollTop=t}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",t=>{const e=t.composedPath(),a=e[e.indexOf(this.$.items)-1];if(a){if(!this._isMousedown){const r=this.$.table.clientHeight,n=this.$.header.clientHeight,o=this.$.footer.clientHeight,h=r-n-o,c=a.clientHeight>h?t.target:a;this.__scrollIntoViewport(c)}this.$.table.contains(t.relatedTarget)||this.$.table.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:a}}))}}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){const t=!re(this);t&&this.__previousVisible===!1&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=t}}_scrollToFlatIndex(t){t=Math.min(this._flatSize-1,Math.max(0,t)),this.__virtualizer.scrollToIndex(t);const e=[...this.$.items.children].find(a=>a.index===t);this.__scrollIntoViewport(e)}__scrollIntoViewport(t){if(!t)return;const e=t.getBoundingClientRect(),a=this.$.footer.getBoundingClientRect().top,r=this.$.header.getBoundingClientRect().bottom;e.bottom>a?this.$.table.scrollTop+=e.bottom-a:e.top<r&&(this.$.table.scrollTop-=r-e.top)}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=M.debounce(this._debounceScrolling,j.after(as.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=M.debounce(this._debounceColumnContentVisibility,j.after(as.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())}),this._firefox&&!re(this)&&this.__previousVisible!==!1&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(!this._columnTree||!this._areSizerCellsAssigned())return;const t=this._getColumnsInOrder();let e=!1;if(t.forEach(a=>{const r=this._lazyColumns&&!this.__isColumnInViewport(a);a._bodyContentHidden!==r&&(e=!0,a._cells.forEach(n=>{if(n!==a._sizerCell){if(r)n.remove();else if(n.__parentRow){const o=[...n.__parentRow.children].find(h=>t.indexOf(h._column)>t.indexOf(a));n.__parentRow.insertBefore(n,o)}}})),a._bodyContentHidden=r}),e&&this._frozenCellsChanged(),this._lazyColumns){const a=[...t].reverse().find(o=>o.frozen),r=this.__getColumnEnd(a),n=t.find(o=>!o.frozen&&!o._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(n)-r,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(t){return t?t._sizerCell.offsetLeft+(this.__isRTL?0:t._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(t){return t?t._sizerCell.offsetLeft+(this.__isRTL?t._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(t){return t.frozen||t.frozenToEnd?!0:this.__isHorizontallyInViewport(t._sizerCell)}__isHorizontallyInViewport(t){return t.offsetLeft+t.offsetWidth>=this._scrollLeft&&t.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(t,e){e==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",e),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=M.debounce(this._debounceOverflow,ut,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){let t="";const e=this.$.table;e.scrollTop<e.scrollHeight-e.clientHeight&&(t+=" bottom"),e.scrollTop>0&&(t+=" top");const a=t0(e,this.getAttribute("dir"));a>0&&(t+=" start"),a<e.scrollWidth-e.clientWidth&&(t+=" end"),this.__isRTL&&(t=t.replace(/start|end/giu,n=>n==="start"?"end":"start")),e.scrollLeft<e.scrollWidth-e.clientWidth&&(t+=" right"),e.scrollLeft>0&&(t+=" left");const r=t.trim();r.length>0&&this.getAttribute("overflow")!==r?this.setAttribute("overflow",r):r.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=M.debounce(this._debouncerCacheElements,Y,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(t=>{t.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=M.debounce(this.__debounceUpdateFrozenColumn,Y,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const t=this._columnTree[this._columnTree.length-1].slice(0);t.sort((r,n)=>r._order-n._order);let e,a;for(let r=0;r<t.length;r++){const n=t[r];n._lastFrozen=!1,n._firstFrozenToEnd=!1,a===void 0&&n.frozenToEnd&&!n.hidden&&(a=r),n.frozen&&!n.hidden&&(e=r)}e!==void 0&&(t[e]._lastFrozen=!0),a!==void 0&&(t[a]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const t=this.$.table.scrollWidth,e=this.$.table.clientWidth,a=Math.max(0,this.$.table.scrollLeft),r=t0(this.$.table,this.getAttribute("dir")),n=`translate(${-a}px, 0)`;this.$.header.style.transform=n,this.$.footer.style.transform=n,this.$.items.style.transform=n;const o=this.__isRTL?r+e-t:a,h=`translate(${o}px, 0)`;this._frozenCells.forEach(p=>{p.style.transform=h});const l=this.__isRTL?r:a+e-t,c=`translate(${l}px, 0)`;let v=c;if(this._lazyColumns&&this._areSizerCellsAssigned()){const p=this._getColumnsInOrder(),z=[...p].reverse().find(H=>!H.frozenToEnd&&!H._bodyContentHidden),y=this.__getColumnEnd(z),I=p.find(H=>H.frozenToEnd),V=this.__getColumnStart(I);v=`translate(${l+(V-y)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(p=>{this.$.items.contains(p)?p.style.transform=v:p.style.transform=c}),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-o}px`)}_areSizerCellsAssigned(){return this._getColumnsInOrder().every(t=>t._sizerCell)}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vn=s=>class extends s{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},isItemSelectable:{type:Function,notify:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems, isItemSelectable)"]}_isSelected(t){return this.__selectedKeys.has(this.getItemId(t))}__isItemSelectable(t){return!this.isItemSelectable||!t?!0:this.isItemSelectable(t)}selectItem(t){this._isSelected(t)||(this.selectedItems=[...this.selectedItems,t])}deselectItem(t){this._isSelected(t)&&(this.selectedItems=this.selectedItems.filter(e=>!this._itemsEqual(e,t)))}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(t,e){const a=e||[],r=new Set;return a.forEach(n=>{r.add(this.getItemId(n))}),r}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let rs="prepend";const pn=s=>class extends s{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>rs},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(t){rs=["append","prepend"].includes(t)?t:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(t){const e=t.target;t.stopPropagation(),e._grid=this,this.__updateSorter(e,t.detail.shiftClick,t.detail.fromSorterClick),this.__applySorters()}__removeSorters(t){t.length!==0&&(this._sorters=this._sorters.filter(e=>!t.includes(e)),this.__applySorters())}__updateSortOrders(){this._sorters.forEach(e=>{e._order=null});const t=this._getActiveSorters();t.length>1&&t.forEach((e,a)=>{e._order=a})}__updateSorter(t,e,a){if(!t.direction&&!this._sorters.includes(t))return;t._order=null;const r=this._sorters.filter(n=>n!==t);this.multiSort&&(!this.multiSortOnShiftClick||!a)||this.multiSortOnShiftClick&&e?this.multiSortPriority==="append"?this._sorters=[...r,t]:this._sorters=[t,...r]:(t.direction||this.multiSortOnShiftClick)&&(this._sorters=t.direction?[t]:[],r.forEach(n=>{n._order=null,n.direction=null}))}__applySorters(){this.__updateSortOrders(),this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_getActiveSorters(){return this._sorters.filter(t=>t.direction&&t.isConnected)}_mapSorters(){return this._getActiveSorters().map(t=>({path:t.path,direction:t.direction}))}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const un=s=>class extends s{static get properties(){return{cellClassNameGenerator:{type:Function,sync:!0},cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){k(this.$.items,t=>{t.hidden||this._generateCellClassNames(t,this.__getRowModel(t))})}generateCellPartNames(){k(this.$.items,t=>{t.hidden||this._generateCellPartNames(t,this.__getRowModel(t))})}_generateCellClassNames(t,e){ne(t,a=>{if(a.__generatedClasses&&a.__generatedClasses.forEach(r=>a.classList.remove(r)),this.cellClassNameGenerator&&!t.hasAttribute("loading")){const r=this.cellClassNameGenerator(a._column,e);a.__generatedClasses=r&&r.split(" ").filter(n=>n.length>0),a.__generatedClasses&&a.__generatedClasses.forEach(n=>a.classList.add(n))}})}_generateCellPartNames(t,e){ne(t,a=>{if(a.__generatedParts&&a.__generatedParts.forEach(r=>{St(a,null,r)}),this.cellPartNameGenerator&&!t.hasAttribute("loading")){const r=this.cellPartNameGenerator(a._column,e);a.__generatedParts=r&&r.split(" ").filter(n=>n.length>0),a.__generatedParts&&a.__generatedParts.forEach(n=>{St(a,!0,n)})}})}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gn=s=>class extends qr(Wr(Yr(Xr(Br(cn(vn(pn(en(tn(Nr(Jr(Ur(Gr(Qr(Zr(un(ha(s)))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:di},_ios:{type:Boolean,value:Ji},_firefox:{type:Boolean,value:Ir},_android:{type:Boolean,value:J0},_touchDevice:{type:Boolean,value:ci},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0},__hasEmptyStateContent:{type:Boolean,value:!1},__emptyState:{type:Boolean,computed:"__computeEmptyState(_flatSize, __hasEmptyStateContent)"}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const i=this.__getFirstVisibleItem();return i?i.index:void 0}get _lastVisibleIndex(){const i=this.__getLastVisibleItem();return i?i.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.__virtualizer.hostConnected()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(i=>this._isInViewport(i))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(i=>this._isInViewport(i))}_isInViewport(i){const t=this.$.table.getBoundingClientRect(),e=i.getBoundingClientRect(),a=this.$.header.getBoundingClientRect().height,r=this.$.footer.getBoundingClientRect().height;return e.bottom>t.top+a&&e.top<t.bottom-r}_getRenderedRows(){return Array.from(this.$.items.children).filter(i=>!i.hidden).sort((i,t)=>i.index-t.index)}_getRowContainingNode(i){const t=fr("vaadin-grid-cell-content",i);return t?t.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(i,t){const e=this.__getRowModel(t);return this.getItemId(i)===this.getItemId(e.item)}ready(){super.ready(),this.__virtualizer=new Dr({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>{setTimeout(()=>{this.__updateColumnsBodyContentHidden()}),this.__updateHorizontalScrollPosition()}).observe(this.$.table);const i=new ResizeObserver(()=>setTimeout(()=>{this.__updateMinHeight()}));i.observe(this.$.header),i.observe(this.$.items),i.observe(this.$.footer),oi(this),this._tooltipController=new Te(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0),this.__emptyStateContentObserver=new da(this.$.emptystateslot,({currentNodes:t})=>{this.$.emptystatecell._content=t[0],this.__hasEmptyStateContent=!!this.$.emptystatecell._content})}__getBodyCellCoordinates(i){if(this.$.items.contains(i)&&i.localName==="td")return{item:i.parentElement._item,column:i._column}}__focusBodyCell({item:i,column:t}){const e=this._getRenderedRows().find(r=>r._item===i),a=e&&[...e.children].find(r=>r._column===t);a&&a.focus()}_focusFirstVisibleRow(){const i=this.__getFirstVisibleItem();this.__rowFocusMode=!0,i.focus()}_flatSizeChanged(i,t,e,a){if(t&&e&&a){const r=this.shadowRoot.activeElement,n=this.__getBodyCellCoordinates(r),o=t.size||0;t.size=i,t.update(o-1,o-1),i<o&&t.update(i-1,i-1),n&&r.parentElement.hidden&&this.__focusBodyCell(n),this._resetKeyboardNavigation()}}_createScrollerRows(i){const t=[];for(let e=0;e<i;e++){const a=document.createElement("tr");a.setAttribute("part","row body-row"),a.setAttribute("role","row"),a.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(a,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(a)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(e=>{e.isConnected&&e._cells&&(e._cells=[...e._cells])}),this.__afterCreateScrollerRowsDebouncer=M.debounce(this.__afterCreateScrollerRowsDebouncer,ut,()=>{this._afterScroll()}),t}_createCell(i,t){const a=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,r=document.createElement("vaadin-grid-cell-content");r.setAttribute("slot",a);const n=document.createElement(i);n.id=a.replace("-content-","-"),n.setAttribute("role",i==="td"?"gridcell":"columnheader"),!J0&&!Ji&&(n.addEventListener("mouseenter",h=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(h)}),n.addEventListener("mouseleave",()=>{this._hideTooltip()}),n.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const o=document.createElement("slot");if(o.setAttribute("name",a),t&&t._focusButtonMode){const h=document.createElement("div");h.setAttribute("role","button"),h.setAttribute("tabindex","-1"),n.appendChild(h),n._focusButton=h,n.focus=function(l){n._focusButton.focus(l)},h.appendChild(o)}else n.setAttribute("tabindex","-1"),n.appendChild(o);return n._content=r,r.addEventListener("mousedown",()=>{if(pa){const h=l=>{const c=r.contains(this.getRootNode().activeElement),v=l.composedPath().includes(r);!c&&v&&n.focus({preventScroll:!0}),document.removeEventListener("mouseup",h,!0)};document.addEventListener("mouseup",h,!0)}else setTimeout(()=>{r.contains(this.getRootNode().activeElement)||n.focus({preventScroll:!0})})}),n}_updateRow(i,t,e="body",a=!1,r=!1){const n=document.createDocumentFragment();ne(i,o=>{o._vacant=!0}),i.innerHTML="",e==="body"&&(i.__cells=[],i.__detailsCell=null),t.filter(o=>!o.hidden).forEach((o,h,l)=>{let c;if(e==="body"){o._cells||(o._cells=[]),c=o._cells.find(p=>p._vacant),c||(c=this._createCell("td",o),o._onCellKeyDown&&c.addEventListener("keydown",o._onCellKeyDown.bind(o)),o._cells.push(c)),c.setAttribute("part","cell body-cell"),c.__parentRow=i,i.__cells.push(c);const v=i===this.$.sizer;if((!o._bodyContentHidden||v)&&i.appendChild(c),v&&(o._sizerCell=c),h===l.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const p=this._detailsCells.find(z=>z._vacant)||this._createCell("td");this._detailsCells.indexOf(p)===-1&&this._detailsCells.push(p),p._content.parentElement||n.appendChild(p._content),this._configureDetailsCell(p),i.appendChild(p),i.__detailsCell=p,this._a11ySetRowDetailsCell(i,p),p._vacant=!1}r||(o._cells=[...o._cells])}else{const v=e==="header"?"th":"td";a||o.localName==="vaadin-grid-column-group"?(c=o[`_${e}Cell`],c||(c=this._createCell(v),o._onCellKeyDown&&c.addEventListener("keydown",o._onCellKeyDown.bind(o))),c._column=o,i.appendChild(c),o[`_${e}Cell`]=c):(o._emptyCells||(o._emptyCells=[]),c=o._emptyCells.find(p=>p._vacant)||this._createCell(v),c._column=o,i.appendChild(c),o._emptyCells.indexOf(c)===-1&&o._emptyCells.push(c)),c.part.add("cell",`${e}-cell`)}c._content.parentElement||n.appendChild(c._content),c._vacant=!1,c._column=o}),e!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(i),this.appendChild(n),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(i)}__debounceUpdateHeaderFooterRowVisibility(i){i.__debounceUpdateHeaderFooterRowVisibility=M.debounce(i.__debounceUpdateHeaderFooterRowVisibility,Y,()=>this.__updateHeaderFooterRowVisibility(i))}__updateHeaderFooterRowVisibility(i){if(!i)return;const t=Array.from(i.children).filter(e=>{const a=e._column;if(a._emptyCells&&a._emptyCells.indexOf(e)>-1)return!1;if(i.parentElement===this.$.header){if(a.headerRenderer)return!0;if(a.header===null)return!1;if(a.path||a.header!==void 0)return!0}else if(a.footerRenderer)return!0;return!1});i.hidden!==!t.length&&(i.hidden=!t.length),this._resetKeyboardNavigation(),this._a11yUpdateGridSize(this.size,this._columnTree,this.__emptyState)}_updateScrollerItem(i,t){this._preventScrollerRotatingCellFocus(i,t),this._columnTree&&(this._updateRowOrderParts(i,t),this._a11yUpdateRowRowindex(i,t),this._getItem(t,i))}_columnTreeChanged(i){this._renderColumnTree(i),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(i,t=i.index){Gt(i,{first:t===0,last:t===this._flatSize-1,odd:t%2!==0,even:t%2===0})}_updateRowStateParts(i,{item:t,expanded:e,selected:a,detailsOpened:r}){Gt(i,{expanded:e,collapsed:this.__isRowExpandable(i),selected:a,nonselectable:this.__isItemSelectable(t)===!1,"details-opened":r})}__computeEmptyState(i,t){return i===0&&t}_renderColumnTree(i){for(k(this.$.items,t=>{this._updateRow(t,i[i.length-1],"body",!1,!0);const e=this.__getRowModel(t);this._updateRowOrderParts(t),this._updateRowStateParts(t,e),this._filterDragAndDrop(t,e)});this.$.header.children.length<i.length;){const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this.$.header.appendChild(t);const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.footer.appendChild(e)}for(;this.$.header.children.length>i.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);k(this.$.header,(t,e,a)=>{this._updateRow(t,i[e],"header",e===i.length-1);const r=jt(t);xt(r,"first-header-row-cell",e===0),xt(r,"last-header-row-cell",e===a.length-1)}),k(this.$.footer,(t,e,a)=>{this._updateRow(t,i[i.length-1-e],"footer",e===0);const r=jt(t);xt(r,"first-footer-row-cell",e===0),xt(r,"last-footer-row-cell",e===a.length-1)}),this._updateRow(this.$.sizer,i[i.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.generateCellClassNames(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}_updateItem(i,t){i._item=t;const e=this.__getRowModel(i);this._toggleDetailsCell(i,e.detailsOpened),this._a11yUpdateRowLevel(i,e.level),this._a11yUpdateRowSelected(i,e.selected),this._updateRowStateParts(i,e),this._generateCellClassNames(i,e),this._generateCellPartNames(i,e),this._filterDragAndDrop(i,e),this.__updateDragSourceParts(i,e),k(i,a=>{if(!(a._column&&!a._column.isConnected)&&a._renderer){const r=a._column||this;a._renderer.call(r,a._content,r,e)}}),this._updateDetailsCellHeight(i),this._a11yUpdateRowExpanded(i,e.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(i){i.animationName.indexOf("vaadin-grid-appear")===0&&(i.stopPropagation(),this._resetKeyboardNavigation(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(i){return{index:i.index,item:i._item,level:this._getIndexLevel(i.index),expanded:this._isExpanded(i._item),selected:this._isSelected(i._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(i._item)}}_showTooltip(i){const t=this._tooltipController.node;if(t&&t.isConnected){const e=i.target;if(!this.__isCellFullyVisible(e))return;this._tooltipController.setTarget(e),this._tooltipController.setContext(this.getEventContext(i)),t._stateController.open({focus:i.type==="focusin",hover:i.type==="mouseenter"})}}__isCellFullyVisible(i){if(i.hasAttribute("frozen")||i.hasAttribute("frozen-to-end"))return!0;let{left:t,right:e}=this.getBoundingClientRect();const a=[...i.parentNode.children].find(o=>o.hasAttribute("last-frozen"));if(a){const o=a.getBoundingClientRect();t=this.__isRTL?t:o.right,e=this.__isRTL?o.left:e}const r=[...i.parentNode.children].find(o=>o.hasAttribute("first-frozen-to-end"));if(r){const o=r.getBoundingClientRect();t=this.__isRTL?o.right:t,e=this.__isRTL?e:o.left}const n=i.getBoundingClientRect();return n.left>=t&&n.right<=e}_hideTooltip(i){const t=this._tooltipController&&this._tooltipController.node;t&&t._stateController.close(i)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach(i=>{i.forEach(t=>{t._renderHeaderAndFooter&&t._renderHeaderAndFooter()})})}__updateVisibleRows(i,t){this.__virtualizer&&this.__virtualizer.update(i,t)}__updateMinHeight(){const t=this.$.header.clientHeight,e=this.$.footer.clientHeight,a=this.$.table.offsetHeight-this.$.table.clientHeight,r=t+36+e+a;!this.__minHeightStyleSheet&&Lr&&(this.__minHeightStyleSheet=new CSSStyleSheet,this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.__minHeightStyleSheet]),this.__minHeightStyleSheet?this.__minHeightStyleSheet.replaceSync(`:host { --_grid-min-height: ${r}px; }`):this.style.setProperty("--_grid-min-height",`${r}px`)}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fn=u`
  @keyframes vaadin-grid-appear {
    to {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    animation: 1ms vaadin-grid-appear;
    height: 400px;
    min-height: var(--_grid-min-height, 0);
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  #scroller {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    transform: translateY(0);
    width: auto;
    height: auto;
    position: absolute;
    inset: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    min-height: auto;
    flex-grow: 0;
    width: 100%;
  }

  :host([all-rows-visible]) #scroller {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :host([all-rows-visible]) #items {
    min-height: 1px;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    outline: none;
    /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  #header,
  #footer {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    overflow: visible;
    width: 100%;
    z-index: 1;
  }

  #header {
    top: 0;
  }

  th {
    text-align: inherit;
  }

  /* Safari doesn't work with "inherit" */
  [safari] th {
    text-align: initial;
  }

  #footer {
    bottom: 0;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    overflow: visible;
  }

  [part~='row'] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items [part~='row'] {
    position: absolute;
  }

  #items [part~='row']:empty {
    height: 100%;
  }

  [part~='cell']:not([part~='details-cell']) {
    flex-shrink: 0;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }

  [part~='cell'] {
    outline: none;
  }

  [part~='cell'] > [tabindex] {
    display: flex;
    align-items: inherit;
    outline: none;
    position: absolute;
    inset: 0;
  }

  /* Switch the focusButtonMode wrapping element to "position: static" temporarily
     when measuring real width of the cells in the auto-width columns. */
  [measuring-auto-width] [part~='cell'] > [tabindex] {
    position: static;
  }

  [part~='details-cell'] {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [hidden] {
    display: none !important;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  [no-scrollbars][safari] #table,
  [no-scrollbars][firefox] #table {
    overflow: hidden;
  }

  /* Empty state */

  #scroller:not([empty-state]) #emptystatebody,
  #scroller[empty-state] #items {
    display: none;
  }

  #emptystatebody {
    display: flex;
    position: sticky;
    inset: 0;
    flex: 1;
    overflow: hidden;
  }

  #emptystaterow {
    display: flex;
    flex: 1;
  }

  #emptystatecell {
    display: block;
    flex: 1;
    overflow: auto;
  }

  /* Reordering styles */
  :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
  :host([reordering]) [part~='resize-handle'],
  #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  [part~='reorder-ghost'] {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    opacity: 0.5;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    left: 0;
  }

  :host([reordering]) {
    -webkit-user-select: none;
    user-select: none;
  }

  /* Resizing styles */
  [part~='resize-handle'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  [part~='resize-handle']::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 35px;
    transform: translateX(-50%);
  }

  [last-column] [part~='resize-handle']::before,
  [last-frozen] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
    right: 0;
  }

  [frozen-to-end] [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  [frozen-to-end] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  [first-frozen-to-end] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  /* Hide resize handle if scrolled to end */
  :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
    display: none;
  }

  #scroller[column-resizing],
  #scroller[range-selecting] {
    -webkit-user-select: none;
    user-select: none;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    position: absolute;
    visibility: hidden;
  }

  #sizer [part~='details-cell'] {
    display: none !important;
  }

  #sizer [part~='cell'][hidden] {
    display: none !important;
  }

  #sizer [part~='cell'] {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer [part~='cell']::before {
    content: '-';
  }

  #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  /* RTL specific styles */

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  :host([dir='rtl']) [part~='reorder-ghost'] {
    left: auto;
    right: 0;
  }

  :host([dir='rtl']) [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [part~='resize-handle']::before {
    transform: translateX(50%);
  }

  :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
  :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
    right: 0;
    left: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
    right: 0;
    left: auto;
  }

  @media (forced-colors: active) {
    [part~='selected-row'] [part~='first-column-cell']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border: 2px solid;
    }

    [part~='focused-cell']::before {
      outline: 2px solid !important;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-grid",fn,{moduleId:"vaadin-grid-styles"});class _n extends gn(de($(qt(A)))){static get template(){return T`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
        empty-state$="[[__emptyState]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0" aria-label$="[[accessibleName]]">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tbody id="emptystatebody">
            <tr id="emptystaterow">
              <td part="empty-state" id="emptystatecell" tabindex="0">
                <slot name="empty-state" id="emptystateslot"></slot>
              </td>
            </tr>
          </tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}}E(_n);_("vaadin-icon",u`
    :host {
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }
  `,{moduleId:"lumo-icon"});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mn={SVG:2},bn=(s,i)=>(s==null?void 0:s._$litType$)===i,Mn=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R0={CHILD:2,ELEMENT:6},wa=s=>(...i)=>({_$litDirective$:s,values:i});class xa{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,t,e){this._$Ct=i,this._$AM=t,this._$Ci=e}_$AS(i,t){return this.update(i,t)}update(i,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e0 extends xa{constructor(i){if(super(i),this.it=W,i.type!==R0.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===W||i==null)return this._t=void 0,this.it=i;if(i===_r)return i;if(typeof i!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.it)return this._t;this.it=i;const t=[i];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}e0.directiveName="unsafeHTML",e0.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class i0 extends e0{}i0.directiveName="unsafeSVG",i0.resultType=2;const Ca=wa(i0);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ns(s){let i=W;if(s){const t=s.cloneNode(!0);t.removeAttribute("id"),i=ca`${Ca(t.outerHTML)}`}return i}function zn(s){return bn(s,mn.SVG)||s===W}function Sa(s){let i=s==null||s===""?W:s;return zn(i)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),i=W),i}function yn(s,i){const t=Sa(s);va(t,i)}function wn(s){return ca`${Ca(s)}`}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ue={},os=new Set;function Aa(s,i){return(s||"").replace(`${i}:`,"")}function hs(s){return s?s.split(":")[0]||"vaadin":void 0}function ls(s,i){s._icons=[...s.querySelectorAll("[id]")].reduce((t,e)=>{const a=Aa(e.id,i);return t[a]=e,t},{})}const xn=s=>class extends s{static get observedAttributes(){return["name","size"]}static get attachedIcons(){return os}static getIconset(i){return ue[i]}static getIconSvg(i,t){const e=t||hs(i),a=this.getIconset(e);if(!i||!a)return{svg:ns(null)};const r=Aa(i,e),n=a._icons[r];return{preserveAspectRatio:n?n.getAttribute("preserveAspectRatio"):null,svg:ns(n),size:a.size,viewBox:n?n.getAttribute("viewBox"):null}}static register(i,t,e){if(!ue[i]){const a=document.createElement("vaadin-iconset");a.appendChild(e.content.cloneNode(!0)),ue[i]=a,ls(a,i),a.size=t,a.name=i}}get name(){return this.__name}set name(i){const t=this.__name;this.__name=i,this.__nameChanged(i,t)}get size(){return this.__size!==void 0?this.__size:24}set size(i){this.__size=i}connectedCallback(){["name","size"].forEach(i=>{if(this.hasOwnProperty(i)){const t=this[i];delete this[i],this[i]=t}}),this.style.display="none"}attributeChangedCallback(i,t,e){i==="name"?this.name=e:i==="size"&&(this.size=e==null?null:Number(e))}__updateIcons(i){os.forEach(t=>{i===hs(t.icon)&&t._applyIcon()})}__nameChanged(i,t){t&&delete ue[t],i&&(ue[i]=this,ls(this,i),this.__updateIcons(i))}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Ea=class extends xn(HTMLElement){static get is(){return"vaadin-iconset"}};E(Ea);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bi=new WeakMap;function Cn(s){return bi.has(s)||bi.set(s,new Set),bi.get(s)}function Sn(s,i){const t=document.createElement("style");t.textContent=s,i===document?document.head.appendChild(t):i.insertBefore(t,i.firstChild)}const ka=m(s=>class extends s{get slotStyles(){return[]}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),e=Cn(t);this.slotStyles.forEach(a=>{e.has(a)||(Sn(a,t),e.add(a))})}});/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function An(){const s=document.createElement("style");s.textContent=`
    .vaadin-icon-test-element {
      container-type: size;
      height: 2px;
      visibility: hidden;
      position: fixed;
    }

    .vaadin-icon-test-element::before {
      content: '';
      display: block;
      height: 100cqh;
    `;const i=document.createElement("div");i.classList.add("vaadin-icon-test-element");const t=document.createElement("div");t.attachShadow({mode:"open"}),t.shadowRoot.innerHTML="<slot></slot>",t.append(i.cloneNode()),document.body.append(s,i,t);const e=[...document.querySelectorAll(".vaadin-icon-test-element")].find(a=>getComputedStyle(a,"::before").height!=="2px");return s.remove(),i.remove(),t.remove(),!e}function En(){return CSS.supports("container-type: inline-size")?di?!An():!1:!0}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ia=En();Ia&&_("vaadin-icon",u`
      :host::after,
      :host::before {
        font-size: var(--_vaadin-font-icon-size);
      }
    `,"vaadin-icon-font-size-mixin-styles");const kn=s=>Ia?class extends ya(s){static get observers(){return["__iconFontSizeMixinfontChanged(iconClass, char, ligature)"]}ready(){super.ready(),this.__updateFontIconSize()}__iconFontSizeMixinfontChanged(i,t,e){this.__updateFontIconSize()}_onResize(){this.__updateFontIconSize()}__updateFontIconSize(){if(this.char||this.iconClass||this.ligature){const{paddingTop:i,paddingBottom:t,height:e}=getComputedStyle(this),a=parseFloat(e)-parseFloat(i)-parseFloat(t);this.style.setProperty("--_vaadin-font-icon-size",`${a}px`)}}}:s;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mi=new Map,zi=customElements.get("vaadin-iconset"),In=s=>class extends kn(ka(s)){static get properties(){return{icon:{type:String,reflectToAttribute:!0,observer:"__iconChanged",sync:!0},svg:{type:Object,sync:!0},src:{type:String,sync:!0},symbol:{type:String,sync:!0},iconClass:{type:String,reflectToAttribute:!0,sync:!0},char:{type:String,sync:!0},ligature:{type:String,sync:!0},fontFamily:{type:String,observer:"__fontFamilyChanged",sync:!0},size:{type:Number,value:24,sync:!0},__defaultPAR:{type:String,value:"xMidYMid meet"},__preserveAspectRatio:String,__useRef:Object,__svgElement:String,__viewBox:String,__fill:String,__stroke:String,__strokeWidth:String,__strokeLinecap:String,__strokeLinejoin:String}}static get observers(){return["__svgChanged(svg, __svgElement)","__fontChanged(iconClass, char, ligature)","__srcChanged(src, symbol)"]}static get observedAttributes(){return[...super.observedAttributes,"class"]}constructor(){super(),this.__fetch=fetch.bind(window)}get slotStyles(){return[`
        ${this.localName}[icon-class] {
          display: inline-flex;
          vertical-align: middle;
          font-size: inherit;
        }
      `]}get __iconClasses(){return this.iconClass?this.iconClass.split(" "):[]}ready(){super.ready(),this.__svgElement=this.shadowRoot.querySelector("#svg-group"),this._tooltipController=new Te(this),this.addController(this._tooltipController)}connectedCallback(){super.connectedCallback(),zi.attachedIcons.add(this)}disconnectedCallback(){super.disconnectedCallback(),zi.attachedIcons.delete(this)}_applyIcon(){const{preserveAspectRatio:i,svg:t,size:e,viewBox:a}=zi.getIconSvg(this.icon);a&&(this.__viewBox=a),i&&(this.__preserveAspectRatio=i),e&&e!==this.size&&(this.size=e),this.svg=t}__iconChanged(i){i?this._applyIcon():this.svg=Sa(null)}async __srcChanged(i,t){if(!i){this.svg=null;return}if(this.icon="",!i.startsWith("data:")&&(t||i.includes("#"))){const[e,a]=i.split("#");this.__useRef=`${e}#${t||a}`}else try{Mi.has(i)||Mi.set(i,this.__fetch(i,{mode:"cors"}).then(n=>{if(!n.ok)throw new Error("Error loading icon");return n.text()}));const e=await Mi.get(i);s.__domParser||(s.__domParser=new DOMParser);const r=s.__domParser.parseFromString(e,"text/html").querySelector("svg");if(!r)throw new Error(`SVG element not found on path: ${i}`);this.svg=wn(r.innerHTML),t&&(this.__useRef=`#${t}`),this.__viewBox=r.getAttribute("viewBox"),this.__fill=r.getAttribute("fill"),this.__stroke=r.getAttribute("stroke"),this.__strokeWidth=r.getAttribute("stroke-width"),this.__strokeLinecap=r.getAttribute("stroke-linecap"),this.__strokeLinejoin=r.getAttribute("stroke-linejoin")}catch(e){console.error(e),this.svg=null}}__svgChanged(i,t){t&&yn(i,t)}__computePAR(i,t){return t||i}__computeVisibility(i){return i?"visible":"hidden"}__computeViewBox(i,t){return t||`0 0 ${i} ${i}`}__fontChanged(i,t,e){this.classList.remove(...this.__addedIconClasses||[]),i&&(this.__addedIconClasses=[...this.__iconClasses],this.classList.add(...this.__addedIconClasses)),t?this.setAttribute("font-icon-content",t.length>1?String.fromCodePoint(parseInt(t,16)):t):e?this.setAttribute("font-icon-content",e):this.removeAttribute("font-icon-content"),(i||t||e)&&!this.icon&&(this.icon="")}attributeChangedCallback(i,t,e){super.attributeChangedCallback(i,t,e),i==="class"&&this.__iconClasses.some(a=>!this.classList.contains(a))&&this.classList.add(...this.__iconClasses)}__fontFamilyChanged(i){this.style.fontFamily=`'${i}'`}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tn=u`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    fill: currentColor;
    container-type: size;
  }

  :host::after,
  :host::before {
    line-height: 1;
    font-size: 100cqh;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([hidden]) {
    display: none !important;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
    /* prevent overflowing icon from clipping, see https://github.com/vaadin/flow-components/issues/5872 */
    overflow: visible;
  }

  :host(:is([icon-class], [font-icon-content])) svg {
    display: none;
  }

  :host([font-icon-content])::before {
    content: attr(font-icon-content);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-icon",Tn,{moduleId:"vaadin-icon-styles"});class On extends In(qt(de($(A)))){static get template(){return T`
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="[[__computeViewBox(size, __viewBox)]]"
        preserveAspectRatio="[[__computePAR(__defaultPAR, __preserveAspectRatio)]]"
        fill$="[[__fill]]"
        stroke$="[[__stroke]]"
        stroke-width$="[[__strokeWidth]]"
        stroke-linecap$="[[__strokeLinecap]]"
        stroke-linejoin$="[[__strokeLinejoin]]"
        aria-hidden="true"
      >
        <g id="svg-group"></g>
        <g id="use-group" visibility$="[[__computeVisibility(__useRef, svg)]]">
          <use href$="[[__useRef]]" />
        </g>
      </svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-icon"}}E(On);/**
 * @license
 * Copyright (c) 2015 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ta=document.createElement("template");Ta.innerHTML=`<svg><defs>
<g id="vaadin:abacus"><path d="M0 0v16h16v-16h-16zM14 2v3h-0.1c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-3h12zM13.9 10c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-4h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1l-0.1 4zM2 14v-3h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1v3h-12z"></path></g>
<g id="vaadin:absolute-position"><path d="M0 0v16h16v-16h-16zM15 15h-14v-6h3v1l3-2-3-2v1h-3v-6h6v3h-1l2 3 2-3h-1v-3h6v14z"></path></g>
<g id="vaadin:academy-cap"><path d="M15.090 12.79c0.235-0.185 0.385-0.469 0.385-0.789 0-0.358-0.188-0.672-0.471-0.849l-0.004-5.822-1 0.67v5.15c-0.283 0.18-0.468 0.492-0.468 0.847 0 0.316 0.147 0.598 0.376 0.782l-0.378 0.502c-0.323 0.41-0.521 0.931-0.53 1.498l-0 1.222h0.81c0.002 0 0.004 0 0.005 0 0.411 0 0.757-0.282 0.853-0.664l0.331-1.336v2h1v-1.21c-0.009-0.569-0.207-1.090-0.534-1.505z"></path><path d="M8 0l-8 4 8 5 8-5-8-4z"></path><path d="M8 10l-5-3.33v1.71c0 0.91 2.94 3.62 5 3.62s5-2.71 5-3.62v-1.71z"></path></g>
<g id="vaadin:accessibility"><path d="M10.4 10h-0.5c0.1 0.3 0.1 0.7 0.1 1 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.1 1.6-3.8 3.7-4l-0.2-1c-2.6 0.4-4.5 2.4-4.5 5 0 2.8 2.2 5 5 5 2.4 0 4.4-1.7 4.9-3.9l-0.5-2.1z"></path><path d="M13.1 13l-1.1-5h-4.1l-0.2-1h3.3v-1h-3.5l-0.6-2.5c0.9-0.1 1.6-0.8 1.6-1.7 0-1-0.8-1.8-1.8-1.8s-1.7 0.8-1.7 1.8c0 0.6 0.3 1.2 0.8 1.5l1.3 5.7h4.1l1.2 5h2.6v-1h-1.9z"></path></g>
<g id="vaadin:accordion-menu"><path d="M0 4v8h16v-8h-16zM15 11h-14v-4h14v4z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M0 13h16v3h-16v-3z"></path></g>
<g id="vaadin:add-dock"><path d="M0 11v5h16v-5h-16zM12 15h-3v-3h3v3z"></path><path d="M12 7v-2c0-5-8-5-8-5s5 0 5 5v2h-2l3.5 3 3.5-3h-2z"></path></g>
<g id="vaadin:adjust"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM2 8c0-3.3 2.7-6 6-6v12c-3.3 0-6-2.7-6-6z"></path></g>
<g id="vaadin:adobe-flash"><path d="M0 0v16h16v-16h-16zM13 4.4c-3 0-3.3 2.6-3.3 2.6h1.3v2h-2.4c-1.8 5.8-5.6 5-5.6 5v-2.5c0 0 2.5 0.6 3.9-4 1.8-6.1 6.1-5.5 6.1-5.5v2.4z"></path></g>
<g id="vaadin:airplane"><path d="M12.3 6.5c0.5-0.5 0.9-0.8 1.2-1.1 1.6-1.6 3.2-4.1 2.2-5.1s-3.4 0.6-5 2.2c-0.3 0.3-0.6 0.7-1.1 1.2l-7-3.2c-0.7-0.3-1.5-0.2-2 0.3l-0.6 0.5 6.6 5.7c-1.3 1.6-2.7 3.1-3.4 4l-1.1-0.6c-0.5-0.3-1.2-0.3-1.6 0.2l-0.3 0.3 2.8 2.1 2 2.8 0.3-0.3c0.4-0.4 0.5-1.1 0.2-1.6l-0.5-1.1c0.9-0.7 2.4-2.1 4-3.4l5.7 6.6 0.5-0.5c0.5-0.5 0.6-1.3 0.3-2l-3.2-7z"></path></g>
<g id="vaadin:alarm"><path d="M8 5h-1v5h4v-1l-2.93 0.070-0.070-4.070z"></path><path d="M5.46 0.87c-0.387-0.522-1-0.856-1.692-0.856-0.41 0-0.793 0.118-1.117 0.321l-0.991 0.765c-0.41 0.384-0.666 0.929-0.666 1.534 0 0.496 0.172 0.951 0.459 1.31z"></path><path d="M14.34 1.1l-1-0.77c-0.315-0.198-0.698-0.316-1.108-0.316-0.692 0-1.305 0.334-1.688 0.85l3.996 3.076c0.287-0.356 0.46-0.813 0.46-1.312 0-0.602-0.253-1.145-0.659-1.528z"></path><path d="M12.87 14c1.308-1.268 2.122-3.038 2.13-4.998-0.028-3.856-3.145-6.973-6.997-7.002-3.857 0.028-6.975 3.145-7.003 6.997 0.008 1.965 0.822 3.735 2.128 5.001l-0.938 0.942c-0.075 0.102-0.12 0.231-0.12 0.37 0 0.348 0.282 0.63 0.63 0.63 0.139 0 0.268-0.045 0.372-0.122l0.998-0.999c1.092 0.758 2.446 1.211 3.905 1.211s2.813-0.453 3.928-1.226l0.977 1.015c0.102 0.075 0.231 0.12 0.37 0.12 0.348 0 0.63-0.282 0.63-0.63 0-0.139-0.045-0.268-0.122-0.372zM2.87 9c0.028-2.822 2.308-5.102 5.127-5.13 2.825 0.028 5.105 2.308 5.133 5.127-0.028 2.825-2.308 5.105-5.127 5.133-2.825-0.028-5.105-2.308-5.133-5.127z"></path></g>
<g id="vaadin:align-center"><path d="M5 0h6v3h-6v-3z"></path><path d="M1 4h14v3h-14v-3z"></path><path d="M3 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-justify"><path d="M0 0h16v3h-16v-3z"></path><path d="M0 4h16v3h-16v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 8h16v3h-16v-3z"></path></g>
<g id="vaadin:align-left"><path d="M0 0h11v3h-11v-3z"></path><path d="M0 4h15v3h-15v-3z"></path><path d="M0 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-right"><path d="M5 0h11v3h-11v-3z"></path><path d="M1 4h15v3h-15v-3z"></path><path d="M3 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:alt-a"><path d="M14 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0 1 0.56 1.44 2 1.44v-1c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M9 3h1v9h-1v-9z"></path><path d="M3 12l0.57-2h2.82l0.61 2h1l-2.27-8h-1.46l-2.27 8h1zM5 5.1l1.11 3.9h-2.22z"></path></g>
<g id="vaadin:alt"><path d="M3.89 9h2.22l-1.11-3.9-1.11 3.9z"></path><path d="M0 0v16h16v-16h-16zM7 12l-0.61-2h-2.78l-0.61 2h-1l2.27-8h1.46l2.27 8h-1zM10 12h-1v-9h1v9zM14 7h-1v3.5s0 0.5 1 0.5v1c-1 0-2-0.44-2-1.44v-3.56h-0.5v-1h0.5v-1h1v1h1v1z"></path></g>
<g id="vaadin:ambulance"><path d="M6.18 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M14 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M5 6h-1v1h-1v1h1v1h1v-1h1v-1h-1v-1z"></path><path d="M15.76 8.64l-3-4.53c-0.455-0.673-1.215-1.11-2.078-1.11-0.008 0-0.015 0-0.023 0l-2.659-0v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h-4.5c-0.828 0-1.5 0.672-1.5 1.5v8.5h1.37c0.474-1.135 1.546-1.931 2.812-2 1.278 0.072 2.345 0.868 2.81 1.978l2.188 0.021c0.474-1.135 1.546-1.931 2.812-2 1.303 0.003 2.405 0.827 2.822 1.979l1.187 0.021v-3.57c-0.001-0.294-0.090-0.568-0.243-0.795zM6.92 8.12c-0.266 1.117-1.255 1.935-2.435 1.935-1.381 0-2.5-1.119-2.5-2.5 0-1.18 0.818-2.17 1.918-2.432 0.195-0.049 0.399-0.075 0.609-0.075 1.37 0 2.48 1.11 2.48 2.48 0 0.21-0.026 0.414-0.075 0.609zM10 8v-3h0.85c0.003-0 0.006-0 0.009-0 0.777 0 1.461 0.394 1.866 0.992l1.325 2.008z"></path></g>
<g id="vaadin:anchor"><path d="M13 9v2c0 0-0.8 1.7-4 1.9v-6.9h2.2c0.2 0.3 0.5 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.8 0.5h-2.2v-1.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v1.3h-2.2c-0.1-0.3-0.4-0.5-0.8-0.5-0.6 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5h2.2v7c-3.3-0.3-4-2-4-2v-2h-3c0 0 2.8 7 8 7 5 0 8-7 8-7h-3zM8 1c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1 0.4-1 1-1z"></path></g>
<g id="vaadin:angle-double-down"><path d="M3 2v2l5 5 5-5v-2l-5 5z"></path><path d="M3 7v2l5 5 5-5v-2l-5 5z"></path></g>
<g id="vaadin:angle-double-left"><path d="M14 3h-2l-5 5 5 5h2l-5-5z"></path><path d="M9 3h-2l-5 5 5 5h2l-5-5z"></path></g>
<g id="vaadin:angle-double-right"><path d="M2 13h2l5-5-5-5h-2l5 5z"></path><path d="M7 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-double-up"><path d="M13 14v-2l-5-5-5 5v2l5-5z"></path><path d="M13 9v-2l-5-5-5 5v2l5-5z"></path></g>
<g id="vaadin:angle-down"><path d="M13 4v2l-5 5-5-5v-2l5 5z"></path></g>
<g id="vaadin:angle-left"><path d="M12 13h-2l-5-5 5-5h2l-5 5z"></path></g>
<g id="vaadin:angle-right"><path d="M4 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-up"><path d="M3 12v-2l5-5 5 5v2l-5-5z"></path></g>
<g id="vaadin:archive"><path d="M0 1h16v3h-16v-3z"></path><path d="M1 5v11h14v-11h-14zM11 9h-6v-2h6v2z"></path></g>
<g id="vaadin:archives"><path d="M11 2h-6v4h6v-4zM9 4h-2v-1h2v1z"></path><path d="M3 0v16h2v-1h6v1h2v-16h-10zM12 14h-8v-6h8v6zM12 7h-8v-6h8v6z"></path><path d="M11 9h-6v4h6v-4zM9 11h-2v-1h2v1z"></path></g>
<g id="vaadin:area-select"><path d="M7.9 7.9l2.1 7.5 1.7-2.6 3.2 3.2 1.1-1.1-3.3-3.2 2.7-1.6z"></path><path d="M8 12h-7v-9h12v5.4l1 0.2v-6.6h-14v11h8.2z"></path></g>
<g id="vaadin:arrow-backward"><path d="M0 7.9l6-4.9v3c0 0 1.1 0 2 0 8 0 8 8 8 8s-1-4-7.8-4c-1.1 0-1.8 0-2.2 0v2.9l-6-5z"></path></g>
<g id="vaadin:arrow-circle-down-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-4.4 0-8 3.6-8 8zM9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-left-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-right-o"><path d="M8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zM8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8v0z"></path><path d="M9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-up-o"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4.4 3.6 8 8 8s8-3.6 8-8v0z"></path><path d="M7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-down"><path d="M12.5 8.6l-3.5 3.6v-12.2h-2v12.2l-3.5-3.6-1.4 1.5 5.9 5.9 5.9-5.9z"></path></g>
<g id="vaadin:arrow-forward"><path d="M16 7.9l-6-4.9v3c-0.5 0-1.1 0-2 0-8 0-8 8-8 8s1-4 7.8-4c1.1 0 1.8 0 2.2 0v2.9l6-5z"></path></g>
<g id="vaadin:arrow-left"><path d="M7.4 12.5l-3.6-3.5h12.2v-2h-12.2l3.6-3.5-1.5-1.4-5.9 5.9 5.9 5.9z"></path></g>
<g id="vaadin:arrow-long-down"><path d="M7 1h2v11h2l-3 3-3-3h2z"></path></g>
<g id="vaadin:arrow-long-left"><path d="M15 7v2h-11v2l-3-3 3-3v2z"></path></g>
<g id="vaadin:arrow-right"><path d="M8.6 3.5l3.5 3.5h-12.1v2h12.1l-3.5 3.5 1.4 1.4 6-5.9-6-5.9z"></path></g>
<g id="vaadin:arrow-up"><path d="M3.4 7.4l3.6-3.6v12.2h2v-12.2l3.5 3.6 1.4-1.5-5.9-5.9-6 5.9z"></path></g>
<g id="vaadin:arrows-cross"><path d="M15 5v-4h-4l1.3 1.3-4.3 4.3-4.3-4.3 1.3-1.3h-4v4l1.3-1.3 4.3 4.3-4.3 4.3-1.3-1.3v4h4l-1.3-1.3 4.3-4.3 4.3 4.3-1.3 1.3h4v-4l-1.3 1.3-4.3-4.3 4.3-4.3z"></path></g>
<g id="vaadin:arrows-long-h"><path d="M16 8l-3-3v2h-10v-2l-3 3 3 3v-2h10v2z"></path></g>
<g id="vaadin:arrows-long-right"><path d="M1 9v-2h11v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:arrows-long-up"><path d="M9 15h-2v-11h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:arrows-long-v"><path d="M9 3h2l-3-3-3 3h2v10h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:arrows"><path d="M16 8l-3-3v2h-4v-4h2l-3-3-3 3h2v4h-4v-2l-3 3 3 3v-2h4v4h-2l3 3 3-3h-2v-4h4v2z"></path></g>
<g id="vaadin:asterisk"><path d="M15.9 5.7l-2-3.4-3.9 2.2v-4.5h-4v4.5l-4-2.2-2 3.4 3.9 2.3-3.9 2.3 2 3.4 4-2.2v4.5h4v-4.5l3.9 2.2 2-3.4-4-2.3z"></path></g>
<g id="vaadin:at"><path d="M7.5 12.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2c0.1 2.3-1.9 4.2-4.2 4.2zM7.5 5.2c-1.5 0-2.7 1.3-2.7 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.4-2.8-2.9-2.8z"></path><path d="M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8c0 1.5-0.4 3-1.2 4.2-0.3 0.5-1.1 1.2-2.3 1.2-0.8 0-1.3-0.3-1.6-0.6-0.7-0.7-0.6-1.8-0.6-1.9v-6.9h1.5v7c0 0.2 0 0.6 0.2 0.8 0 0 0.2 0.2 0.5 0.2 0.7 0 1.1-0.5 1.1-0.5 0.6-1 1-2.2 1-3.4 0-3.6-2.9-6.5-6.5-6.5s-6.6 2.8-6.6 6.4 2.9 6.5 6.5 6.5c0.7 0 1.3-0.1 1.9-0.3l0.4 1.4c-0.7 0.3-1.5 0.4-2.3 0.4z"></path></g>
<g id="vaadin:automation"><path d="M14 12c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M11.7 16v0c-0.8 0-1.6-0.2-2.3-0.7l-6.2-3.3c-0.5-0.4-0.9-0.6-1.3-1-1.2-1.2-1.9-2.9-1.9-4.6s0.7-3.3 1.9-4.5c1.2-1.2 2.8-1.9 4.5-1.9s3.3 0.7 4.6 1.9c0.4 0.4 0.6 0.7 1 1.2l3.5 6.4c1 1.7 0.7 3.8-0.7 5.2-0.9 0.9-1.9 1.3-3.1 1.3zM6.4 1c-1.4 0-2.8 0.6-3.8 1.6s-1.6 2.4-1.6 3.8c0 1.5 0.6 2.8 1.6 3.8 0.3 0.3 0.6 0.5 1.1 0.8l6.3 3.4c0.6 0.4 1.2 0.5 1.8 0.5v0c0.9 0 1.7-0.3 2.3-1 1.1-1.1 1.3-2.7 0.5-4l-3.5-6.4c-0.3-0.4-0.5-0.7-0.8-1-1.1-0.9-2.4-1.5-3.9-1.5z"></path><path d="M11 7v-1l-1.4-0.5c-0.1-0.2-0.1-0.3-0.2-0.5l0.6-1.3-0.7-0.7-1.3 0.6c-0.2-0.1-0.3-0.1-0.5-0.2l-0.5-1.4h-1l-0.5 1.4c-0.2 0.1-0.3 0.1-0.5 0.2l-1.3-0.6-0.7 0.7 0.6 1.3c-0.1 0.2-0.1 0.3-0.2 0.5l-1.4 0.5v1l1.4 0.5c0.1 0.2 0.1 0.3 0.2 0.5l-0.6 1.3 0.7 0.7 1.3-0.6c0.2 0.1 0.3 0.2 0.5 0.2l0.5 1.4h1l0.5-1.4c0.2-0.1 0.3-0.1 0.5-0.2l1.3 0.6 0.7-0.7-0.6-1.3c0.1-0.2 0.2-0.3 0.2-0.5l1.4-0.5zM6.5 8c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:backspace-a"><path d="M5 12l-5-4 5-4v2h11v4h-11v2z"></path></g>
<g id="vaadin:backspace"><path d="M0 2v12h16v-12h-16zM13 9h-7v2l-3-3 3-3v2h7v2z"></path></g>
<g id="vaadin:backwards"><path d="M16 15v-14l-8 7z"></path><path d="M8 15v-14l-8 7z"></path></g>
<g id="vaadin:ban"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 2c1.3 0 2.5 0.4 3.5 1.1l-8.4 8.4c-0.7-1-1.1-2.2-1.1-3.5 0-3.3 2.7-6 6-6zM8 14c-1.3 0-2.5-0.4-3.5-1.1l8.4-8.4c0.7 1 1.1 2.2 1.1 3.5 0 3.3-2.7 6-6 6z"></path></g>
<g id="vaadin:bar-chart-h"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M2 8h4v6h-4v-6z"></path><path d="M7 2h4v12h-4v-12z"></path><path d="M12 6h4v8h-4v-8z"></path></g>
<g id="vaadin:bar-chart-v"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M8 0v4h-6v-4h6z"></path><path d="M14 5v4h-12v-4h12z"></path><path d="M10 10v4h-8v-4h8z"></path></g>
<g id="vaadin:bar-chart"><path d="M0 15h15v1h-15v-1z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M4 9h3v5h-3v-5z"></path><path d="M8 5h3v9h-3v-9z"></path><path d="M12 0h3v14h-3v-14z"></path></g>
<g id="vaadin:barcode"><path d="M0 3h1v10h-1v-10z"></path><path d="M8 3h2v10h-2v-10z"></path><path d="M11 3h1v10h-1v-10z"></path><path d="M13 3h1v10h-1v-10z"></path><path d="M15 3h1v10h-1v-10z"></path><path d="M2 3h3v10h-3v-10z"></path><path d="M6 3h1v10h-1v-10z"></path></g>
<g id="vaadin:bed"><path d="M4.28 7h2.72l-1.15-1.68c-0.542-0.725-1.36-1.216-2.295-1.319l-0.555-0.001v1.54c-0.011 0.063-0.018 0.136-0.018 0.211 0 0.69 0.56 1.25 1.25 1.25 0.017 0 0.034-0 0.050-0.001z"></path><path d="M13 7v-0.28c0-0.003 0-0.007 0-0.010 0-0.934-0.749-1.693-1.678-1.71l-4.692-0c0.5 0.62 1.37 2 1.37 2h5z"></path><path d="M15 5.1c-0.552 0-1 0.448-1 1v1.9h-12v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v9h2v-2h12v2h2v-6.9c0-0.552-0.448-1-1-1z"></path></g>
<g id="vaadin:bell-o"><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0 0-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v2h4c0 0-0.1 2 2 2s2-2 2-2h4v-2l-1.3-0.6zM13 13h-10v-0.4l0.7-0.4c0.8-0.3 1.3-1.1 1.3-2v-5.2c0-0.1 0-1.6 2.2-1.9l0.8-0.2 0.8 0.1c2 0.4 2.2 1.7 2.2 2v5.2c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.3z"></path></g>
<g id="vaadin:bell-slash-o"><path d="M15.2 0l-3.6 3.6c-0.4-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1.3l-2 2v0.7h0.7l15.3-15.4v-0.6h-0.8zM5 10.3c0-0.1 0-0.1 0 0v-5.3c0-0.1 0.1-1.6 2.2-1.9l0.8-0.2 0.8 0.1c1.2 0.2 1.8 0.8 2 1.3l-5.8 6z"></path><path d="M12 10.2v-4.6l-1 1v3.5c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.4h-8.3l-1 1h2.4c0 0-0.1 2 2 2s2-2 2-2h3.9v-2l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell-slash"><path d="M15.2 0l-3.6 3.6c-0.5-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h0.3l-2.3 2.3v0.7h0.7l15.3-15.4v-0.6h-0.8zM6 4.8v4.5l-1 1v-5.3c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path><path d="M8 16c2.1 0 2-2 2-2h-4c0 0-0.1 2 2 2z"></path><path d="M12 10.2v-4.6l-6 6-0.3 0.4-1 1h9.3v-1l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell"><path d="M6 14h4c0 0 0.1 2-2 2s-2-2-2-2z"></path><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0-0.2-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h12v-1l-1.3-0.6zM6 4.8v7.2h-2c0.8 0 1-1 1-1v-6c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path></g>
<g id="vaadin:boat"><path d="M1.5 9.6c1.1 0.7 2.5 1.9 2.5 3.3 0 0.4 0 0.7 0 1.1 0 0 0.1 0 0.1 0s0.9 0 2-1c1 1 2 1 2 1s1 0 2-1c1 1 1.9 1 1.9 1s0.1 0 0.1 0c0-0.3 0-0.7 0-1.1 0-1.4 1.4-2.6 2.5-3.3 0.6-0.4 0.5-1.2-0.2-1.4l-1.4-0.4v-3.8h-1v-1h-3v-2h-2v2h-3v1h-1v3.8l-1.3 0.4c-0.8 0.2-0.8 1-0.2 1.4zM4 5h1v-1h6v1h1v2.5l-3.3-1c-0.5-0.1-1-0.1-1.5 0l-3.2 1v-2.5z"></path><path d="M14 14c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1v1h16v-1c0 0-1 0-2-1z"></path></g>
<g id="vaadin:bold"><path d="M11 7.5c0 0 2-0.8 2-3.6 0-4.1-5.1-3.9-7-3.9h-4v16h4c3.7 0 8 0 8-4.4 0-3.8-3-4.1-3-4.1zM9 4.4c0 1.8-1.5 1.6-3 1.6v-3c1.8 0 3 0.1 3 1.4zM6 13v-4c1.8 0 4-0.3 4 2.2 0 1.9-2.5 1.8-4 1.8z"></path></g>
<g id="vaadin:bolt"><path d="M7.99 0l-7.010 9.38 6.020-0.42-4.96 7.040 12.96-10-7.010 0.47 7.010-6.47h-7.010z"></path></g>
<g id="vaadin:bomb"><path d="M12 1h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M14 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M14.6 2.1l0.7-0.7-0.7-0.7-1.4 1.4 0.7 0.7z"></path><path d="M13.9 4.2l-0.7 0.7 1.4 1.4 0.7-0.7-0.7-0.7z"></path><path d="M11.1 2.8l0.7-0.7-1.4-1.4-0.7 0.7 0.7 0.7z"></path><path d="M10.4 6.4l2-2-0.7-0.7-2 2-0.7-0.7-0.7 0.8c-0.8-0.5-1.8-0.8-2.8-0.8-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5c0-1-0.3-1.9-0.7-2.8l0.7-0.7-0.6-0.6zM6 7.2c-2 0-3.4 1.8-3.4 2.8h-1c0-2 2.4-3.8 4.4-3.8v1z"></path></g>
<g id="vaadin:book-dollar"><path d="M12.9 2.5c-1.6-1.2-1.4-2.5-1.4-2.5h-9.5v12.5c0 1.9 2.1 3.5 4 3.5h8v-13c0 0-0.8-0.2-1.1-0.5zM7 6.3c-0.9-0.3-2.3-0.8-2.3-1.9 0.1-0.8 1.3-1.4 1.3-1.6v-0.8h1v0.7c1 0.1 1.8 0.4 1.9 0.4l-0.3 0.9c0 0-0.7-0.3-1.5-0.3-0.7 0-1.1 0.3-1.2 0.8 0 0.3 0.5 0.6 1.3 0.9 1.5 0.5 1.9 1.1 1.9 1.9 0 0.7-0.1 1.6-2.1 1.8v0.9h-1v-0.8c0-0.1-1.4-0.5-1.5-0.5l0.5-0.9c0 0 1.1 0.5 2 0.4s1.3-0.6 1.3-1c0.1-0.3-0.4-0.6-1.3-0.9zM13 15h-7c-1 0-1.8-0.6-2-1.3-0.1-0.3 0-0.7 0.4-0.7h6.6v-10.3c1 0.6 2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:book-percent"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM5.5 3.2c0.8 0 1.5 0.7 1.5 1.6s-0.7 1.4-1.5 1.4-1.5-0.6-1.5-1.4 0.7-1.6 1.5-1.6zM9 3h1l-5 7h-1l5-7zM10 8.5c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5 0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0 0.6 1 1.1 2 1.3v11z"></path><path d="M9 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path><path d="M6 4.8c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:book"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM4 2h5v2h-5v-2zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0.4 0.6 1.2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:bookmark-o"><path d="M3 0v16l5-5 5 5v-16h-10zM12 13.7l-4-3.9-4 3.9v-10.7h8v10.7zM12 2h-8v-1h8v1z"></path></g>
<g id="vaadin:bookmark"><path d="M3 0v0 1h10l0.1-1z"></path><path d="M3 2h10v14l-5-5-5 5z"></path></g>
<g id="vaadin:briefcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM10 3h-4v-1h4v1z"></path></g>
<g id="vaadin:browser"><path d="M15 1v-1h-15v15h1v1h15v-15h-1zM3 1h9v1h-9v-1zM1 1h1v1h-1v-1zM1 3h13v11h-13v-11z"></path></g>
<g id="vaadin:bug-o"><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.681 1.007 1.714 1.731 2.92 1.994l0.031-0.994h2v1c1.237-0.269 2.271-0.993 2.939-1.983 0.013-0.017 0.016-0.017 0.019-0.017 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM6 13.5c-0.44-0.253-0.805-0.589-1.083-0.989l-0.247-0.411-0.15-0.39c-0.302-0.802-0.49-1.73-0.52-2.697l-0-0.013v-1.65c0.578 0.326 1.254 0.556 1.973 0.647l0.027 5.573zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1zM12 9c-0.030 0.98-0.218 1.908-0.54 2.77l-0.13 0.33-0.24 0.4c-0.285 0.411-0.65 0.747-1.074 0.992l-0.016-5.492c0.743-0.081 1.421-0.297 2.029-0.624l-0.029 1.624z"></path><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path></g>
<g id="vaadin:bug"><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.588 1.095 1.667 1.859 2.934 1.998l0.017-0.998h2v1c1.284-0.141 2.364-0.905 2.94-1.98 0.012-0.020 0.015-0.020 0.018-0.020 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1z"></path></g>
<g id="vaadin:building-o"><path d="M2 0v16h12v-16h-12zM13 15h-4v-3h-2v3h-4v-14h10v14z"></path><path d="M4 9h2v2h-2v-2z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M10 9h2v2h-2v-2z"></path><path d="M4 6h2v2h-2v-2z"></path><path d="M7 6h2v2h-2v-2z"></path><path d="M10 6h2v2h-2v-2z"></path><path d="M4 3h2v2h-2v-2z"></path><path d="M7 3h2v2h-2v-2z"></path><path d="M10 3h2v2h-2v-2z"></path></g>
<g id="vaadin:building"><path d="M3 0v16h4v-3h2v3h4v-16h-10zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM6 6h-2v-2h2v2zM6 3h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM9 6h-2v-2h2v2zM9 3h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM12 6h-2v-2h2v2zM12 3h-2v-2h2v2z"></path></g>
<g id="vaadin:bullets"><path d="M0 2.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 7.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 12.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:bullseye"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14.9c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z"></path><path d="M8 2.3c-3.2 0-5.7 2.5-5.7 5.7s2.6 5.7 5.7 5.7 5.7-2.6 5.7-5.7-2.5-5.7-5.7-5.7zM8 12.6c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6c0 2.5-2.1 4.6-4.6 4.6z"></path><path d="M8 4.6c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4z"></path></g>
<g id="vaadin:bus"><path d="M14.67 4h-0.67v-2c0-1.105-0.895-2-2-2h-8c-1.105 0-2 0.895-2 2v2h-0.68c-0 0-0 0-0 0-0.177 0-0.32 0.143-0.32 0.32 0 0.004 0 0.007 0 0.011l-0 2.339c-0 0.003-0 0.006-0 0.010 0 0.177 0.143 0.32 0.32 0.32 0 0 0 0 0 0h0.68v6c0 0.55 0 1 1 1v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5h4v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5c1 0 1-0.45 1-1v-6h0.67c0.182 0 0.33-0.148 0.33-0.33s-0.148-0.33-0.33-0.33c-0.182 0-0.33 0.148-0.33 0.33s0.148 0.33 0.33 0.33c0.182 0 0.33-0.148 0.33-0.33v-2.34c0-0.182-0.148-0.33-0.33-0.33 0 0 0 0 0 0zM6 1h4v1h-4v-1zM4 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM3 8v-5h10v5h-10zM12 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:button"><path d="M15.7 5.3l-1-1c-0.2-0.2-0.4-0.3-0.7-0.3h-13c-0.6 0-1 0.4-1 1v5c0 0.3 0.1 0.6 0.3 0.7l1 1c0.2 0.2 0.4 0.3 0.7 0.3h13c0.6 0 1-0.4 1-1v-5c0-0.3-0.1-0.5-0.3-0.7zM14 10h-13v-5h13v5z"></path></g>
<g id="vaadin:calc-book"><path d="M11.9 0c-1.3 0-2 0.4-2.4 0.8-0.4-0.4-1.1-0.8-2.5-0.8-3.4 0-4 2-4 2v0 0 4h-3v10h7v-4.6l1.5-0.2c0 0 0.2-0.3 0.3 0.7h1.3c0.1-1 0.4-0.7 0.4-0.7l5.5 0.7v-9.8c0 0-0.6-2.1-4.1-2.1zM1 7h5v2h-5v-2zM6 10v1h-1v-1h1zM4 10v1h-1v-1h1zM2 15h-1v-1h1v1zM2 13h-1v-1h1v1zM2 11h-1v-1h1v1zM4 15h-1v-1h1v1zM4 13h-1v-1h1v1zM6 15h-1v-1h1v1zM6 13h-1v-1h1v1zM9 9.5c-0.9-0.1-1.3-0.3-2-0.3v-3.2h-3v-3.9c0-0.4 0.8-1.5 3-1.5 1.8 0 1.9 0.8 1.9 1 0 0 0 0 0 0v7.9zM15 9.9c-1-0.4-1.1-0.7-2.5-0.7-0.1 0-0.2 0-0.2 0-1 0-1.3 0.2-2.3 0.4v-7.6c0 0 0-0.1 0-0.1s0-0.1 0-0.1c0-0.2 0.2-1.1 1.9-1.1 2.3 0 3.1 0.9 3.1 1.4v7.8z"></path></g>
<g id="vaadin:calc"><path d="M9 3h6v2h-6v-2z"></path><path d="M9 11h6v2h-6v-2z"></path><path d="M5 1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M7 10.4l-1.4-1.4-1.6 1.6-1.6-1.6-1.4 1.4 1.6 1.6-1.6 1.6 1.4 1.4 1.6-1.6 1.6 1.6 1.4-1.4-1.6-1.6z"></path><path d="M13 14.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M13 9.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:calendar-briefcase"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M13 1v3h-3v-3h-5v3h-3v-3h-2v14h5v-1h-4v-8h13v3h1v-8z"></path><path d="M13 10v-2h-4v2h-3v6h10v-6h-3zM10 9h2v1h-2v-1z"></path></g>
<g id="vaadin:calendar-clock"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M6.6 14h-5.6v-8h13v0.6c0.4 0.2 0.7 0.4 1 0.7v-6.3h-2v3h-3v-3h-5v3h-3v-3h-2v14h7.3c-0.3-0.3-0.5-0.6-0.7-1z"></path><path d="M14 12h-3v-3h1v2h2z"></path><path d="M11.5 8c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zM11.5 7c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5v0z"></path></g>
<g id="vaadin:calendar-envelope"><path d="M3 0h1v2h-1v-2z"></path><path d="M9 0h1v2h-1v-2z"></path><path d="M13 7v-6h-2v2h-3v-2h-3v2h-3v-2h-2v12h4v3h12v-9h-3zM4 12h-3v-7h11v2h-8v5zM5 10.2l2.6 1.5-2.6 2.6v-4.1zM5.7 15l2.8-2.8 1.5 0.9 1.5-0.8 2.8 2.8h-8.6zM15 14.3l-2.6-2.6 2.6-1.4v4zM15 9.2l-5 2.7-5-2.9v-1h10v1.2zM15.4 9.6v0 0 0z"></path></g>
<g id="vaadin:calendar-o"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:calendar-user"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M9 14.1c0-0.1 0-0.1 0 0l-8-0.1v-8h13v1.2c0.4 0.1 0.7 0.3 1 0.6v-6.8h-2v3h-3v-3h-5v3h-3v-3h-2v14h9v-0.9z"></path><path d="M15 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13.9 12h-1.8c-1.1 0-2.1 0.9-2.1 2.1v1.9h6v-1.9c0-1.2-0.9-2.1-2.1-2.1z"></path></g>
<g id="vaadin:calendar"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM3 15h-2v-2h2v2zM3 12h-2v-2h2v2zM3 9h-2v-2h2v2zM6 15h-2v-2h2v2zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM9 15h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM12 15h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM15 15h-2v-2h2v2zM15 12h-2v-2h2v2zM15 9h-2v-2h2v2z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:camera"><path d="M11 9c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path><path d="M11 4v-3h-6v3h-5v9h5c0.8 0.6 1.9 1 3 1s2.2-0.4 3-1h5v-9h-5zM6 2h4v2h-4v-2zM8 13c-2.2 0-4-1.8-4-4s1.8-4 4-4c2.2 0 4 1.8 4 4s-1.8 4-4 4zM15 6h-2v-1h2v1z"></path></g>
<g id="vaadin:car"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-1.9-1.2h-7.4c-0.8 0-1.5 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0.4 1.1 1 1.2v2c0 0.6 0.5 1.1 1.1 1.1h0.9c0.5 0 1-0.5 1-1.1v-1.9h8v1.9c0 0.6 0.5 1.1 1.1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c0.6-0.1 1-0.6 1-1.2v-3.5c-0.1-0.5-0.5-1-1.1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:caret-down"><path d="M3 4h10l-5 7z"></path></g>
<g id="vaadin:caret-left"><path d="M11 3v10l-7-5z"></path></g>
<g id="vaadin:caret-right"><path d="M5 13v-10l7 5z"></path></g>
<g id="vaadin:caret-square-down-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M4 6h8l-4 5z"></path></g>
<g id="vaadin:caret-square-left-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M10 4v8l-5-4z"></path></g>
<g id="vaadin:caret-square-right-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M5.9 12v-8l5 4z"></path></g>
<g id="vaadin:caret-square-up-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M12 10h-8l4-5z"></path></g>
<g id="vaadin:caret-up"><path d="M13 12h-10l5-7z"></path></g>
<g id="vaadin:cart-o"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"></path></g>
<g id="vaadin:cart"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4z"></path></g>
<g id="vaadin:cash"><path d="M16 14h-14v-1h13v-7h1v8z"></path><path d="M13 4v7h-12v-7h12zM14 3h-14v9h14v-9z"></path><path d="M3 6h-1v3h1v1h4c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5h-4v1z"></path><path d="M11 6v-1h-4c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5h4v-1h1v-3h-1z"></path></g>
<g id="vaadin:chart-3d"><path d="M12 4v-2l-4-2-4 2v1l-4 2v5l12 6 4-2v-8zM4 10.88l-3-1.5v-3.3l3 1.53v3.27zM4 6.49l-2.34-1.2 2.34-1.17v2.37zM8 12.88l-3-1.5v-8.31l3 1.54v8.27zM5.66 2.29l2.34-1.17 2.34 1.17-2.34 1.2zM12 14.88l-3-1.5v-6.31l3 1.54v6.27zM12 7.49l-2.34-1.2 2.34-1.17 2.34 1.17z"></path></g>
<g id="vaadin:chart-grid"><path d="M0 9v7h16v-7h-16zM5 15h-4v-1h4v1zM5 13h-4v-1h4v1zM5 11h-4v-1h4v1zM10 15h-4v-1h4v1zM10 13h-4v-1h4v1zM10 11h-4v-1h4v1zM15 15h-4v-1h4v1zM15 13h-4v-1h4v1zM15 11h-4v-1h4v1z"></path><path d="M16 8h-16v-8h1v7h15v1z"></path><path d="M15 1.57l-5.020 2.86-3.96-1.98-4.020 1.61v1.080l3.98-1.59 4.040 2.020 4.98-2.85v-1.15z"></path></g>
<g id="vaadin:chart-line"><path d="M0 16h16v-16h-1v2.6l-4 3.4v-6h-1v6.4l-4-0.9v-5.5h-1v5.7l-4 2.9v-8.6h-1zM5 14h-4v-1.7l4-2.9v4.6zM10 14h-4v-5.3l0.1-0.1 3.9 0.9v4.5zM15 14h-4v-4.3h0.1l3.9-3.2v7.5z"></path></g>
<g id="vaadin:chart-timeline"><path d="M16 13v-1h-15v-12h-1v13h5v2h-5v1h16v-1h-5v-2h5z"></path><path d="M9 7l-3-3-4 4v3h14v-11l-7 7z"></path></g>
<g id="vaadin:chart"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0h1v16h-1v-16z"></path><path d="M9 8l-2.9-3-4.1 4v5h14v-13.1z"></path></g>
<g id="vaadin:chat"><path d="M14 14.2c0 0 0 0 0 0 0-0.6 2-1.8 2-3.1 0-1.5-1.4-2.7-3.1-3.2 0.7-0.8 1.1-1.7 1.1-2.8 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.6 0 2.9-0.5 3.7-1.1 0 0.1 0 0.1 0 0.2 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0.1-0.1-0.7-0.5-0.7-1.9zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:check-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7.1 11.7l-4.2-4.1 1.4-1.4 2.8 2.7 4.9-4.9 1.4 1.4z"></path></g>
<g id="vaadin:check-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7.1 11.7l-4.2-4.1 1.4-1.4 2.7 2.7 5-4.9 1.4 1.4-6.3 6.3z"></path></g>
<g id="vaadin:check-square-o"><path d="M14 6.2v7.8h-12v-12h10.5l1-1h-12.5v14h14v-9.8z"></path><path d="M7.9 10.9l-4.2-4.2 1.5-1.4 2.7 2.8 6.7-6.7 1.4 1.4z"></path></g>
<g id="vaadin:check-square"><path d="M13 0.9l-1 1.1h-12v14h14v-10.5l1.7-2-2.7-2.6zM6.5 11.7l-4.2-4.2 1.4-1.4 2.7 2.7 6.6-6.6 1.4 1.4-7.9 8.1z"></path></g>
<g id="vaadin:check"><path d="M7.3 14.2l-7.1-5.2 1.7-2.4 4.8 3.5 6.6-8.5 2.3 1.8z"></path></g>
<g id="vaadin:chevron-circle-down-o"><path d="M13 6.6l-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path></g>
<g id="vaadin:chevron-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zM11.6 5.2l1.4 1.4-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-left-o"><path d="M9.4 13l-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM10.8 11.6l-1.4 1.4-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path></g>
<g id="vaadin:chevron-circle-right-o"><path d="M6.6 13l5-5-5-5-1.4 1.4 3.6 3.6-3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM5.2 4.4l1.4-1.4 5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-up-o"><path d="M3 9.4l5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8v0z"></path></g>
<g id="vaadin:chevron-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM4.4 10.8l-1.4-1.4 5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path></g>
<g id="vaadin:chevron-down-small"><path d="M8 12l-6.32-6.32 1.67-1.68 4.65 4.65 4.65-4.65 1.67 1.68-6.32 6.32z"></path></g>
<g id="vaadin:chevron-down"><path d="M8 13.1l-8-8 2.1-2.2 5.9 5.9 5.9-5.9 2.1 2.2z"></path></g>
<g id="vaadin:chevron-left-small"><path d="M4 8l6.32-6.32 1.68 1.67-4.65 4.65 4.65 4.65-1.68 1.67-6.32-6.32z"></path></g>
<g id="vaadin:chevron-left"><path d="M2.9 8l8-8 2.2 2.1-5.9 5.9 5.9 5.9-2.2 2.1z"></path></g>
<g id="vaadin:chevron-right-small"><path d="M12 8l-6.32-6.32-1.68 1.67 4.65 4.65-4.65 4.65 1.68 1.67 6.32-6.32z"></path></g>
<g id="vaadin:chevron-right"><path d="M13.1 8l-8 8-2.2-2.1 5.9-5.9-5.9-5.9 2.2-2.1z"></path></g>
<g id="vaadin:chevron-up-small"><path d="M8 4l-6.32 6.32 1.67 1.68 4.65-4.65 4.65 4.65 1.67-1.68-6.32-6.32z"></path></g>
<g id="vaadin:chevron-up"><path d="M8 2.9l8 8-2.1 2.2-5.9-5.9-5.9 5.9-2.1-2.2z"></path></g>
<g id="vaadin:child"><path d="M10 5c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 10.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v6.47h1.5v-4h1v4h1.5v-6.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:circle-thin"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"></path></g>
<g id="vaadin:clipboard-check"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M7.39 12.47l-3-2.73 1.35-1.48 1.58 1.44 2.87-2.9 1.42 1.4-4.22 4.27z"></path></g>
<g id="vaadin:clipboard-cross"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M11 8h-2v-2h-2v2h-2v2h2v2h2v-2h2z"></path></g>
<g id="vaadin:clipboard-heart"><path d="M9.5 7c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-pulse"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M9.3 13c0 0 0 0 0 0-0.2 0-0.3-0.1-0.4-0.3l-0.8-4.8-0.7 3.1c0 0.1-0.1 0.2-0.3 0.3-0.1 0-0.3 0-0.4-0.1l-1-1.3h-1.3c-0.2 0-0.4-0.2-0.4-0.4s0.2-0.4 0.4-0.4h1.6c0.1 0 0.2 0.1 0.3 0.1l0.6 0.8 0.9-4.3c0-0.2 0.2-0.3 0.4-0.3 0 0 0 0 0 0 0.2 0 0.3 0.2 0.3 0.4l0.9 5.3 0.6-1.7c0.1-0.1 0.2-0.2 0.3-0.2h1.3c0.2 0 0.4 0.2 0.4 0.4s-0.2 0.4-0.4 0.4h-1l-1 2.9c0 0-0.2 0.1-0.3 0.1z"></path></g>
<g id="vaadin:clipboard-text"><path d="M4 6h8v1h-8v-1z"></path><path d="M4 8h8v1h-8v-1z"></path><path d="M4 10h5v1h-5v-1z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-user"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M8 6c-2.5 0-1.3 3.2-1.3 3.2 0.3 0.4 0.7 0.4 0.7 0.6 0 0.3-0.3 0.3-0.6 0.4-0.5 0.1-0.9-0.1-1.4 0.8-0.3 0.4-0.4 2-0.4 2h6c0 0-0.1-1.6-0.4-2-0.4-0.8-0.9-0.7-1.4-0.8-0.3 0-0.6-0.1-0.6-0.4s0.3-0.2 0.6-0.6c0.1 0 1.3-3.2-1.2-3.2z"></path></g>
<g id="vaadin:clipboard"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clock"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M8 3h-1v6h5v-1h-4z"></path></g>
<g id="vaadin:close-big"><path d="M16 0l-1 0.010-7 6.99-7-6.99-1-0.010v1l7 7-7 7v1h1l7-7 7 7h1v-1l-7-7 7-7v-1z"></path></g>
<g id="vaadin:close-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M12.2 10.8l-2.8-2.8 2.8-2.8-1.4-1.4-2.8 2.8-2.8-2.8-1.4 1.4 2.8 2.8-2.8 2.8 1.4 1.4 2.8-2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM12.2 10.8l-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-small"><path d="M12.96 4.46l-1.42-1.42-3.54 3.55-3.54-3.55-1.42 1.42 3.55 3.54-3.55 3.54 1.42 1.42 3.54-3.55 3.54 3.55 1.42-1.42-3.55-3.54 3.55-3.54z"></path></g>
<g id="vaadin:close"><path d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"></path></g>
<g id="vaadin:cloud-download-o"><path d="M14.1 9.8c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0.1-0.6 0.1-0.9 0.1v-3h-2v2.4c-0.4-0.3-0.9-0.4-1.3-0.4-1.6 0-2.9 1.3-2.9 2.9 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.6 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.5 2.4-2.7s-0.8-2.3-1.9-2.5zM13.6 14h-10.3c-1.2 0-2.3-1.3-2.3-2.6s1.1-2.6 2.3-2.6c0.1 0 0.3 0 0.4 0l1.4 0.2-0.9-1c-0.2-0.3-0.4-0.7-0.4-1.2 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v2.4h-1.9l3 4 3-4h-2v-1.9c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6 0.8 0.1c0.7 0 1.4 0.7 1.4 1.5 0 0.7-0.6 1.6-1.4 1.6z"></path></g>
<g id="vaadin:cloud-download"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4v-4h-4v3.1c-0.2-0.1-0.3-0.1-0.5-0.1-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM8 11.4l-2.9-3.4h1.9v-6h2v6h1.9l-2.9 3.4z"></path></g>
<g id="vaadin:cloud-o"><path d="M14.1 8.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.6 0-1.2 0.1-1.8 0.4-0.5-0.7-1.5-1.2-2.4-1.2-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 13h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.8 0 1.5 0.5 1.7 1.2l0.3 0.6 0.5-0.3c0.5-0.3 1.1-0.5 1.8-0.5 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0 0.6-0.6 1.5-1.4 1.5z"></path></g>
<g id="vaadin:cloud-upload-o"><path d="M14.1 10.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0-0.6 0-0.9 0.1v-2.1h2l-3-4-3 4h2v1.5c-0.4-0.2-0.9-0.3-1.3-0.3-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 15h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v3.2h2v-2.8c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0.1 0.7-0.5 1.6-1.3 1.6z"></path></g>
<g id="vaadin:cloud-upload"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-1.6-1-3-2.4-3.6l-3.6-4.4-2.5 3c-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM9 6v6h-2v-6h-1.9l2.9-3.4 2.9 3.4h-1.9z"></path></g>
<g id="vaadin:cloud"><path d="M14 13c1.1 0 2-0.9 2-2s-0.9-2-2-2c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4-0.8 0-1.5 0.2-2.2 0.6-0.3-0.9-1.2-1.6-2.3-1.6-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11z"></path></g>
<g id="vaadin:cluster"><path d="M14 12c-0.372 0.011-0.716 0.121-1.008 0.305l-2.212-2.155c0.434-0.547 0.708-1.239 0.74-1.993l1.57-0.157c0.225 0.556 0.76 0.941 1.385 0.941 0.823 0 1.49-0.667 1.49-1.49s-0.667-1.49-1.49-1.49c-0.749 0-1.368 0.552-1.474 1.271l-1.591 0.128c-0.224-1.136-0.973-2.060-1.978-2.521l0.308-0.839h0.26c1.099-0.008 1.986-0.9 1.986-2 0-1.105-0.895-2-2-2s-2 0.895-2 2c0 0.742 0.404 1.39 1.004 1.735l-0.27 0.855c-0.227-0.054-0.487-0.084-0.754-0.084-0.83 0-1.59 0.296-2.181 0.789l-2.994-3.004c0.141-0.224 0.225-0.497 0.225-0.79 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 0.823 0.663 1.492 1.484 1.5 0.281-0.001 0.544-0.079 0.767-0.214l2.993 3.004c-0.474 0.588-0.76 1.344-0.76 2.168 0 0.015 0 0.030 0 0.045-0 0.058-0 0.108-0 0.158l-0.66 0.11c-0.313-0.72-1.019-1.214-1.839-1.214-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.020-0-0.039-0.001-0.059l0.63-0.097c0.242 0.843 0.768 1.538 1.466 1.992l-0.556 1.188c-0.161-0.049-0.347-0.078-0.539-0.080-0.006-0-0.012-0-0.017-0-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.64-0.301-1.211-0.769-1.577l0.566-1.153c0.364 0.146 0.787 0.231 1.229 0.231 0.847 0 1.621-0.311 2.216-0.824l2.176 2.124c-0.25 0.33-0.4 0.748-0.4 1.2 0 1.105 0.895 2 2 2s2-0.895 2-2c0-1.105-0.895-2-2-2 0 0 0 0 0 0zM5 15c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"></path></g>
<g id="vaadin:code"><path d="M5.2 14l4.5-12h1.1l-4.5 12z"></path><path d="M11.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path><path d="M4.9 13h-1.2l-3.7-5 3.7-5h1.3l-3.8 5z"></path></g>
<g id="vaadin:coffee"><path d="M14 13l-4 1h-6l-4-1v-1h14z"></path><path d="M14.7 3h-1.7v-1h-12v5c0 1.5 0.8 2.8 2 3.4v0.6h8v-0.6c0.9-0.5 1.6-1.4 1.9-2.4 0 0 0.1 0 0.1 0 2.3 0 2.9-2 3-3.5 0.1-0.8-0.5-1.5-1.3-1.5zM13 7v-3h1.7c0.1 0 0.2 0.1 0.2 0.1s0.1 0.1 0.1 0.3c-0.2 2.6-1.6 2.6-2 2.6z"></path></g>
<g id="vaadin:cog-o"><path d="M15.2 6l-1.1-0.2c-0.1-0.2-0.1-0.4-0.2-0.6l0.6-0.9 0.5-0.7-2.6-2.6-0.7 0.5-0.9 0.6c-0.2-0.1-0.4-0.1-0.6-0.2l-0.2-1.1-0.2-0.8h-3.6l-0.2 0.8-0.2 1.1c-0.2 0.1-0.4 0.1-0.6 0.2l-0.9-0.6-0.7-0.4-2.5 2.5 0.5 0.7 0.6 0.9c-0.2 0.2-0.2 0.4-0.3 0.6l-1.1 0.2-0.8 0.2v3.6l0.8 0.2 1.1 0.2c0.1 0.2 0.1 0.4 0.2 0.6l-0.6 0.9-0.5 0.7 2.6 2.6 0.7-0.5 0.9-0.6c0.2 0.1 0.4 0.1 0.6 0.2l0.2 1.1 0.2 0.8h3.6l0.2-0.8 0.2-1.1c0.2-0.1 0.4-0.1 0.6-0.2l0.9 0.6 0.7 0.5 2.6-2.6-0.5-0.7-0.6-0.9c0.1-0.2 0.2-0.4 0.2-0.6l1.1-0.2 0.8-0.2v-3.6l-0.8-0.2zM15 9l-1.7 0.3c-0.1 0.5-0.3 1-0.6 1.5l0.9 1.4-1.4 1.4-1.4-0.9c-0.5 0.3-1 0.5-1.5 0.6l-0.3 1.7h-2l-0.3-1.7c-0.5-0.1-1-0.3-1.5-0.6l-1.4 0.9-1.4-1.4 0.9-1.4c-0.3-0.5-0.5-1-0.6-1.5l-1.7-0.3v-2l1.7-0.3c0.1-0.5 0.3-1 0.6-1.5l-1-1.4 1.4-1.4 1.4 0.9c0.5-0.3 1-0.5 1.5-0.6l0.4-1.7h2l0.3 1.7c0.5 0.1 1 0.3 1.5 0.6l1.4-0.9 1.4 1.4-0.9 1.4c0.3 0.5 0.5 1 0.6 1.5l1.7 0.3v2z"></path><path d="M8 4.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM8 10.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:cog"><path d="M16 9v-2l-1.7-0.6c-0.2-0.6-0.4-1.2-0.7-1.8l0.8-1.6-1.4-1.4-1.6 0.8c-0.5-0.3-1.1-0.6-1.8-0.7l-0.6-1.7h-2l-0.6 1.7c-0.6 0.2-1.2 0.4-1.7 0.7l-1.6-0.8-1.5 1.5 0.8 1.6c-0.3 0.5-0.5 1.1-0.7 1.7l-1.7 0.6v2l1.7 0.6c0.2 0.6 0.4 1.2 0.7 1.8l-0.8 1.6 1.4 1.4 1.6-0.8c0.5 0.3 1.1 0.6 1.8 0.7l0.6 1.7h2l0.6-1.7c0.6-0.2 1.2-0.4 1.8-0.7l1.6 0.8 1.4-1.4-0.8-1.6c0.3-0.5 0.6-1.1 0.7-1.8l1.7-0.6zM8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path><path d="M10.6 7.9c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5z"></path></g>
<g id="vaadin:cogs"><path d="M12 7v-2l-1.2-0.4c-0.1-0.3-0.2-0.7-0.4-1l0.6-1.2-1.5-1.3-1.1 0.5c-0.3-0.2-0.6-0.3-1-0.4l-0.4-1.2h-2l-0.4 1.2c-0.3 0.1-0.7 0.2-1 0.4l-1.1-0.5-1.4 1.4 0.6 1.2c-0.2 0.3-0.3 0.6-0.4 1l-1.3 0.3v2l1.2 0.4c0.1 0.3 0.2 0.7 0.4 1l-0.5 1.1 1.4 1.4 1.2-0.6c0.3 0.2 0.6 0.3 1 0.4l0.3 1.3h2l0.4-1.2c0.3-0.1 0.7-0.2 1-0.4l1.2 0.6 1.4-1.4-0.6-1.2c0.2-0.3 0.3-0.6 0.4-1l1.2-0.4zM3 6c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.7-1.3 3-3 3s-3-1.3-3-3z"></path><path d="M7.5 6c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M16 3v-1h-0.6c0-0.2-0.1-0.4-0.2-0.5l0.4-0.4-0.7-0.7-0.4 0.4c-0.2-0.1-0.3-0.2-0.5-0.2v-0.6h-1v0.6c-0.2 0-0.4 0.1-0.5 0.2l-0.4-0.4-0.7 0.7 0.4 0.4c-0.1 0.2-0.2 0.3-0.2 0.5h-0.6v1h0.6c0 0.2 0.1 0.4 0.2 0.5l-0.4 0.4 0.7 0.7 0.4-0.4c0.2 0.1 0.3 0.2 0.5 0.2v0.6h1v-0.6c0.2 0 0.4-0.1 0.5-0.2l0.4 0.4 0.7-0.7-0.4-0.4c0.1-0.2 0.2-0.3 0.2-0.5h0.6zM13.5 3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path><path d="M15.4 11.8c-0.1-0.3-0.2-0.6-0.4-0.9l0.3-0.6-0.7-0.7-0.5 0.4c-0.3-0.2-0.6-0.3-0.9-0.4l-0.2-0.6h-1l-0.2 0.6c-0.3 0.1-0.6 0.2-0.9 0.4l-0.6-0.3-0.7 0.7 0.3 0.6c-0.2 0.3-0.3 0.6-0.4 0.9l-0.5 0.1v1l0.6 0.2c0.1 0.3 0.2 0.6 0.4 0.9l-0.3 0.6 0.7 0.7 0.6-0.3c0.3 0.2 0.6 0.3 0.9 0.4l0.1 0.5h1l0.2-0.6c0.3-0.1 0.6-0.2 0.9-0.4l0.6 0.3 0.7-0.7-0.4-0.5c0.2-0.3 0.3-0.6 0.4-0.9l0.6-0.2v-1l-0.6-0.2zM12.5 14c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:coin-piles"><path d="M10.5 0c-3.040 0-5.5 0.88-5.5 2 0 0 0 0 0 0v2c-3 0.1-5 0.94-5 2 0 0 0 0 0 0v2s0 0 0 0v2s0 0 0 0v2c0 1.090 2.46 2 5.5 2 0.020 0 0.043 0 0.067 0 0.732 0 1.45-0.055 2.153-0.16 0.698 1.305 2.094 2.158 3.69 2.158 2.017 0 3.715-1.363 4.224-3.217 0.209-0.199 0.344-0.442 0.367-0.717l0-2.064v-8c0-1.12-2.46-2-5.5-2zM5.5 5c2.5 0 4.5 0.45 4.5 1s-2 1-4.5 1-4.5-0.45-4.5-1 2-1 4.5-1zM5.5 13c-2.71 0-4.25-0.71-4.5-1v-0.8c1.199 0.512 2.595 0.809 4.060 0.809 0.155 0 0.309-0.003 0.462-0.010 0.508-0.001 1.030-0.030 1.544-0.085-0.043 0.371 0.022 0.712 0.123 1.037-0.452 0.021-0.967 0.051-1.488 0.051-0.070 0-0.141-0.001-0.211-0.002zM7.070 10.91c-0.467 0.057-1.008 0.090-1.556 0.090-0.005 0-0.010 0-0.014 0-2.709 0-4.249-0.71-4.499-1v-0.84c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.632-0.001 1.271-0.044 1.897-0.128-0.197 0.306-0.291 0.654-0.342 1.015zM5.5 9c-2.71 0-4.25-0.71-4.5-1v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.366c-0.777 0.265-1.432 0.717-1.935 1.304-0.752 0.165-1.611 0.256-2.491 0.256-0.026 0-0.052-0-0.077-0zM11.41 15c-1.883 0-3.41-1.527-3.41-3.41s1.527-3.41 3.41-3.41c1.883 0 3.41 1.527 3.41 3.41s-1.527 3.41-3.41 3.41zM15 8c-0.175 0.167-0.385 0.3-0.617 0.386-0.288-0.244-0.6-0.46-0.938-0.634 0.575-0.153 1.101-0.352 1.593-0.61l-0.038 0.858zM15 6c-0.24 0.31-1.61 0.94-4 1v-1c0.003 0 0.007 0 0.011 0 1.443 0 2.814-0.305 4.053-0.855l-0.064 0.855zM15 4c-0.25 0.33-1.79 1-4.5 1h-0.23c-1.213-0.63-2.648-1-4.169-1-0.014 0-0.029 0-0.043 0l-0.058-0v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.926zM10.5 3c-2.5 0-4.5-0.45-4.5-1s2-1 4.5-1 4.5 0.45 4.5 1-2 1-4.5 1z"></path><path d="M10.5 11h0.5v3h1v-5h-0.5l-1 2z"></path></g>
<g id="vaadin:coins"><path d="M11.5 0c-2.485 0-4.5 2.015-4.5 4.5 0.004 0.261 0.029 0.513 0.074 0.758-0.479-0.176-1.025-0.261-1.591-0.261-3.043 0-5.51 2.467-5.51 5.51s2.467 5.51 5.51 5.51c3.043 0 5.51-2.467 5.51-5.51 0-0.566-0.085-1.112-0.244-1.626 0.23 0.077 0.484 0.099 0.742 0.099 2.48 0 4.49-2.010 4.49-4.49 0-2.477-2.005-4.485-4.481-4.49zM10 10.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5c0-2.485 2.015-4.5 4.5-4.5 2.483 0.006 4.494 2.017 4.5 4.499zM12.5 7h-2v-0.5h0.5v-3h-0.5l1-1.5h0.5v4.5h0.5v0.5z"></path><path d="M5.63 8c0.033-0.003 0.072-0.005 0.111-0.005 0.696 0 1.26 0.564 1.26 1.26 0 0.016-0 0.031-0.001 0.047 0 1.698-1.86 2.698-1.86 2.698h1.37v-0.5h0.49v1.5h-3v-1s2-1.27 2-2.33c0-0.37 0-0.67-0.42-0.67-0.69 0-0.65 1-0.65 1h-0.93s-0.23-2 1.63-2z"></path></g>
<g id="vaadin:combobox"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM10 11h-9v-6h9v6zM13 8.4l-2-1.4h4l-2 1.4z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:comment-ellipsis-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.6 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.2l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.8-2.3-2.8-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path><path d="M6 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:comment-ellipsis"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5zM5 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM8 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM11 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:comment-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.5 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.3l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.7-2.3-2.7-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path></g>
<g id="vaadin:comment"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5z"></path></g>
<g id="vaadin:comments-o"><path d="M14.2 14c0.6-0.5 1.8-1.6 1.8-3.2 0-1.4-1.2-2.6-2.8-3.3 0.5-0.6 0.8-1.5 0.8-2.4 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.2 0 2.2-0.3 3-0.7 0.3 1.9 2.5 3.4 5.3 3.4 0.1 0 0.3 0 0.5 0 0.6 0.5 1.8 1.3 3.5 1.3h1.4l-1.1-0.9c0 0-0.3-0.3-0.4-1.1zM10.3 13.7c-2.3 0-4.3-1.3-4.3-2.8 0-0.1 0-0.1 0-0.2 0.2-0.2 0.4-0.3 0.5-0.5 0.2 0 0.5 0 0.7 0 2.1 0 4-0.7 5.2-1.9 1.5 0.5 2.6 1.5 2.6 2.5s-0.9 2-1.7 2.5l-0.3 0.2v0.3c0 0.5 0.2 0.8 0.3 1.1-1-0.2-1.7-0.7-1.9-1l-0.1-0.2h-0.2c-0.3 0-0.6 0-0.8 0zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:comments"><path d="M16 11.1c0-1.5-1.5-2.8-3.2-3.3-1.3 1.5-3.9 2.4-6.4 2.4-0.1 0-0.3 0-0.4 0 0 0 0 0-0.1 0-0.1 0.3-0.1 0.5-0.1 0.8 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0 0-0.8-0.4-0.8-1.8 0 0 0 0 0 0 0-0.6 2-1.8 2-3.1z"></path><path d="M13 4.6c0-2.5-2.8-4.6-6.4-4.6s-6.6 2.1-6.6 4.6c0 1.7 2 3.2 3 4 0 0 0 0 0 0 0 1.8-1.4 2.4-1.4 2.4 2.3 0 3.6-1.1 4.2-1.8 0.2 0 0.5 0 0.8 0 3.5 0.1 6.4-2 6.4-4.6z"></path></g>
<g id="vaadin:compile"><path d="M1 12h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M11 12h4v4h-4v-4z"></path><path d="M1 7h4v4h-4v-4z"></path><path d="M1 2h4v4h-4v-4z"></path><path d="M6 7h4v4h-4v-4z"></path><path d="M7 1h4v4h-4v-4z"></path><path d="M11 7h4v4h-4v-4z"></path><path d="M13 0h3v3h-3v-3z"></path></g>
<g id="vaadin:compress-square"><path d="M12 0h-12v12l1-1v-10h10z"></path><path d="M4 16h12v-12l-1 1v10h-10z"></path><path d="M7 9h-5l1.8 1.8-3.8 3.8 1.4 1.4 3.8-3.8 1.8 1.8z"></path><path d="M16 1.4l-1.4-1.4-3.8 3.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:compress"><path d="M5.3 9.3l-5 5 1.4 1.4 5-5 1.3 1.3v-4h-4z"></path><path d="M15.7 1.7l-1.4-1.4-4 4-1.3-1.3v4h4l-1.3-1.3z"></path></g>
<g id="vaadin:connect-o"><path d="M12.5 9c-1 0-1.8 0.4-2.4 1l-3.2-1.7c0.1-0.3 0.1-0.5 0.1-0.8 0-0.2 0-0.3 0-0.4l2.9-1.3c0.6 0.7 1.5 1.2 2.6 1.2 1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5c0 0.2 0 0.3 0 0.4l-2.9 1.3c-0.6-0.7-1.5-1.2-2.6-1.2-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c1 0 1.8-0.4 2.4-1l3.1 1.7c0 0.3 0 0.5 0 0.8 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM12.5 1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5zM3.5 10c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5zM12.5 15c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:connect"><path d="M12 10c-0.8 0-1.4 0.3-2 0.8l-3.2-1.8c0.1-0.3 0.2-0.7 0.2-1s-0.1-0.7-0.2-1l3.2-1.8c0.6 0.5 1.2 0.8 2 0.8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 0.2 0 0.3 0 0.5l-3.5 1.9c-0.4-0.2-0.9-0.4-1.5-0.4-1.6 0-3 1.3-3 3v0c0 1.6 1.4 3 3 3 0.6 0 1.1-0.2 1.5-0.4l3.5 1.9c0 0.2 0 0.3 0 0.5 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3z"></path></g>
<g id="vaadin:controller"><path d="M5.951 0.249l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M8.877 14.966l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M0.055 9.071l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M14.773 6.145l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M11.471 1.897l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M3.139 14.441l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M1.069 3.989l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M13.547 12.299l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M8.875 1.039l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M5.953 15.745l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M0.061 6.931l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M14.767 9.854l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M3.139 1.628l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M11.477 14.101l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M1.071 12.033l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M13.539 3.63l0.83-0.56 0.56 0.83-0.83 0.56-0.56-0.83z"></path><path d="M14 8c-0.003-1.895-0.884-3.583-2.258-4.681l-3.322 4.991-0.84-0.59 3.32-5c-0.836-0.47-1.836-0.747-2.9-0.747-3.314 0-6 2.686-6 6s2.686 6 6 6c3.304 0 5.984-2.671 6-5.971z"></path></g>
<g id="vaadin:copy-o"><path d="M13 3h-3l-3-3h-7v13h6v3h10v-10l-3-3zM7 1l2 2h-2v-2zM1 12v-11h5v3h3v8h-8zM15 15h-8v-2h3v-9h2v3h3v8zM13 6v-2l2 2h-2z"></path></g>
<g id="vaadin:copy"><path d="M6 0v3h3z"></path><path d="M9 4h-4v-4h-5v12h9z"></path><path d="M13 4v3h3z"></path><path d="M12 4h-2v9h-3v3h9v-8h-4z"></path></g>
<g id="vaadin:copyright"><path d="M8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M9.9 10.3c-0.5 0.4-1.2 0.7-1.9 0.7-1.7 0-3-1.3-3-3s1.3-3 3-3c0.8 0 1.6 0.3 2.1 0.9l1.1-1.1c-0.8-0.8-2-1.3-3.2-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.1 0 2-0.4 2.8-1l-0.9-1.2z"></path></g>
<g id="vaadin:corner-lower-left"><path d="M16 16l-16-16v16z"></path></g>
<g id="vaadin:corner-lower-right"><path d="M16 16h-16l16-16z"></path></g>
<g id="vaadin:corner-upper-left"><path d="M0 16l16-16h-16z"></path></g>
<g id="vaadin:corner-upper-right"><path d="M16 16l-16-16h16z"></path></g>
<g id="vaadin:credit-card"><path d="M0 2v12h16v-12h-16zM15 13h-14v-5h14v5zM15 5h-14v-2h14v2z"></path><path d="M10 11h3v1h-3v-1z"></path><path d="M2 11h6v1h-6v-1z"></path></g>
<g id="vaadin:crop"><path d="M16 0.7v-0.7h-0.7l-3 3h-7.3v-3h-2v3h-3v2h3v8h8v3h2v-3h3v-2h-3v-7.3l3-3zM5 5h5.3l-5.3 5.3v-5.3zM11 11h-5.3l5.3-5.3v5.3z"></path></g>
<g id="vaadin:cross-cutlery"><path d="M10.9 8.6c0 0 0 0 0 0 0.6-0.1 1.2-0.4 1.6-0.9l3.1-3.1c0.4-0.4 0.4-1 0-1.4l-0.1-0.2-3 3c-0.2 0.2-0.6 0.2-0.9 0s-0.2-0.6 0-0.9l2.6-2.6c0.2-0.2 0.2-0.6 0-0.9-0.2-0.2-0.6-0.2-0.9 0l-2.6 2.6c-0.2 0.2-0.6 0.2-0.9 0-0.2-0.2-0.2-0.6 0-0.9l3-3-0.1-0.1c-0.4-0.4-1-0.4-1.4 0l-3.1 3.3c-0.4 0.4-0.7 1-0.8 1.6l-4.9-4.8c-0.4-0.4-1-0.3-1.3 0l-0.2 0.2c-1.4 1.4-0.9 4.2 1.5 6.6l0.8 0.8c0.4 0.4 0.9 0.7 1.5 0.8-0.5 0.4-0.8 0.8-0.8 0.8l-3.4 3.4c-0.7 0.7-0.7 1.9 0 2.6s1.9 0.7 2.6 0l3.3-3.5c0.2-0.2 0.7-0.8 1.3-1.5 0.3 0.4 0.5 0.6 0.5 0.6l4.3 4.3c0.7 0.7 1.9 0.7 2.6 0s0.7-1.9 0-2.6l-4.3-4.2z"></path></g>
<g id="vaadin:crosshairs"><path d="M7.5 0h1v4l-0.5 2-0.5-2v-4z"></path><path d="M8.5 16h-1v-4l0.5-2 0.5 2v4z"></path><path d="M16 7.5v1h-4l-2-0.5 2-0.5h4z"></path><path d="M0 8.5v-1h4l2 0.5-2 0.5h-4z"></path><path d="M8 2.5c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5c-3.038 0-5.5-2.462-5.5-5.5 0.006-3.035 2.465-5.494 5.499-5.5zM8 1c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7v0z"></path></g>
<g id="vaadin:css"><path d="M4.1 11c1.4 0 1.9-1 1.9-1l-0.8-0.5c0 0-0.3 0.5-1 0.5s-1.2-0.9-1.2-2.2c0-1.2 0.6-1.8 1.2-1.8 0.5 0 0.9 0.4 0.9 0.4l0.8-0.6c0 0-0.7-0.8-1.7-0.8-1.1 0-2.2 0.9-2.2 2.8s0.9 3.2 2.1 3.2zM8.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM12.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM0 0v16h16v-16h-16zM15 15h-14v-14h14v14z"></path></g>
<g id="vaadin:ctrl-a"><path d="M9 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0.176 0.835 0.907 1.453 1.783 1.453 0.077 0 0.152-0.005 0.226-0.014l-0.009-0.999c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M14 3h1v9h-1v-9z"></path><path d="M13 6c-0.025-0.001-0.055-0.001-0.085-0.001-0.773 0-1.462 0.358-1.911 0.917l-0.004-0.915h-1v6h1v-3c-0.003-0.037-0.004-0.080-0.004-0.124 0-1.038 0.842-1.88 1.88-1.88 0.044 0 0.087 0.001 0.13 0.004l-0.006-1z"></path><path d="M4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47z"></path></g>
<g id="vaadin:ctrl"><path d="M0 0v16h16v-16h-16zM4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47zM9 7h-1v3.5c0.147 0.309 0.457 0.519 0.815 0.519 0.065 0 0.129-0.007 0.19-0.020l-0.006 1.001c-0.065 0.008-0.141 0.013-0.217 0.013-0.875 0-1.606-0.618-1.781-1.441l-0.002-3.572h-0.51v-1h0.51v-1h1v1h1v1zM11 9v3h-1v-6h1v0.92c0.453-0.564 1.142-0.921 1.915-0.921 0.030 0 0.060 0.001 0.090 0.002l-0.004 1c-0.037-0.003-0.080-0.004-0.124-0.004-1.038 0-1.88 0.842-1.88 1.88 0 0.044 0.001 0.087 0.004 0.13zM15 12h-1v-9h1v9z"></path></g>
<g id="vaadin:cube"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM14.4 2.6l-5.9 2.2-6.6-2.2 6.1-1.6 6.4 1.6zM1 11.4v-8.1l7 2.4v9.2l-7-3.5z"></path></g>
<g id="vaadin:cubes"><path d="M12 6v-4l-4-2-4 2v4l-4 2v5l4 2 4-2 4 2 4-2v-5zM8.090 1.12l2.91 1.44-2.6 1.3-2.91-1.44zM5 2.78l3 1.5v3.6l-3-1.5v-3.6zM4 13.88l-3-1.5v-3.6l3 1.5v3.6zM4.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44zM12 13.88l-3-1.5v-3.6l3 1.5v3.6zM12.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44z"></path></g>
<g id="vaadin:curly-brackets"><path d="M2.1 3.1c0.2 1.3 0.4 1.6 0.4 2.9 0 0.8-1.5 1.5-1.5 1.5v1c0 0 1.5 0.7 1.5 1.5 0 1.3-0.2 1.6-0.4 2.9-0.3 2.1 0.8 3.1 1.8 3.1s2.1 0 2.1 0v-2c0 0-1.8 0.2-1.8-1 0-0.9 0.2-0.9 0.4-2.9 0.1-0.9-0.5-1.6-1.1-2.1 0.6-0.5 1.2-1.1 1.1-2-0.3-2-0.4-2-0.4-2.9 0-1.2 1.8-1.1 1.8-1.1v-2c0 0-1 0-2.1 0s-2.1 1-1.8 3.1z"></path><path d="M13.9 3.1c-0.2 1.3-0.4 1.6-0.4 2.9 0 0.8 1.5 1.5 1.5 1.5v1c0 0-1.5 0.7-1.5 1.5 0 1.3 0.2 1.6 0.4 2.9 0.3 2.1-0.8 3.1-1.8 3.1s-2.1 0-2.1 0v-2c0 0 1.8 0.2 1.8-1 0-0.9-0.2-0.9-0.4-2.9-0.1-0.9 0.5-1.6 1.1-2.1-0.6-0.5-1.2-1.1-1.1-2 0.2-2 0.4-2 0.4-2.9 0-1.2-1.8-1.1-1.8-1.1v-2c0 0 1 0 2.1 0s2.1 1 1.8 3.1z"></path></g>
<g id="vaadin:cursor-o"><path d="M5 2.6l5.75 6.4h-2.46l0.63 1.41 1.8 4-0.91 0.34-1.88-4.3-0.5-1.11-1 0.71-1.43 1.020v-8.47zM4 0v13l3-2.14 2.26 5.14 2.8-1-2.23-5h3.17l-9-10z"></path></g>
<g id="vaadin:cursor"><path d="M4 0v13l3.31-3.47 2.69 6.47 1.37-0.63-2.72-6.37h4.35l-9-9z"></path></g>
<g id="vaadin:cutlery"><path d="M13 0.8c0-0.5-0.4-0.8-0.8-0.8h-0.2c-1.7 0-3 1.9-3 4.7v0.9c0 1 0.5 1.9 1.4 2.4-0.3 1.2-0.4 2.5-0.4 2.5v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.4-0.1-1.4-0.3-2.3 0.2-0.2 0.3-0.4 0.3-0.7v-6.7z"></path><path d="M7.2 0h-0.2v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3c0-0.3-0.2-0.5-0.5-0.5s-0.5 0.2-0.5 0.5v3c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-0.2c-0.4 0-0.8 0.4-0.8 0.8v3.7c0 1 0.6 1.9 1.5 2.3-0.4 1.6-0.5 3.7-0.5 3.7v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.5-0.1-2.3-0.4-3.7 0.8-0.4 1.4-1.3 1.4-2.3v-3.7c0-0.4-0.4-0.8-0.8-0.8z"></path></g>
<g id="vaadin:dashboard"><path d="M16 10.1c0-4.4-3.6-8.1-8-8.1s-8 3.7-8 8.1c0 1.4 0.3 2.9 0.9 3.9h4.9c0.5 0.6 1.3 1 2.2 1s1.7-0.4 2.2-1h4.9c0.6-1 0.9-2.5 0.9-3.9zM14 7v1l-4.1 3.5c0 0.1 0.1 0.3 0.1 0.5 0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2c0.3 0 0.6 0.1 0.8 0.2l4.2-3.2h1zM10 4h1v1h-1v-1zM5 4h1v1h-1v-1zM2 12h-1v-1h1v1zM3 8h-1v-1h1v1zM15 12h-1v-1h1v1z"></path><path d="M9 12c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:database"><path d="M14 2.5c0 0.828-2.686 1.5-6 1.5s-6-0.672-6-1.5c0-0.828 2.686-1.5 6-1.5s6 0.672 6 1.5z"></path><path d="M8 5c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 9c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 13c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path></g>
<g id="vaadin:date-input"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path><path d="M3 8h1v5h-1v-5z"></path></g>
<g id="vaadin:deindent"><path d="M4 10.5v-6l-4 3z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:del-a"><path d="M14 3h1v9h-1v-9z"></path><path d="M3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM2 11h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5h-1v7z"></path><path d="M13 9v-0.5c-0.017-0.77-0.31-1.468-0.783-2.003-0.419-0.412-0.999-0.668-1.638-0.668-0.031 0-0.063 0.001-0.094 0.002-0.013-0.001-0.034-0.001-0.054-0.001-0.594 0-1.132 0.241-1.521 0.631-0.566 0.685-0.91 1.572-0.91 2.54 0 0.003-0 0.006-0 0.009 0 0.881 0.322 1.686 0.854 2.306 0.43 0.429 1.030 0.697 1.692 0.697 0.030 0 0.059-0.001 0.089-0.002 0.861-0.026 1.642-0.372 2.228-0.922l-0.712-0.708c-0.401 0.368-0.931 0.603-1.515 0.63-0.026 0.001-0.051 0.002-0.076 0.002-0.385 0-0.734-0.153-0.99-0.402-0.355-0.435-0.57-0.997-0.57-1.61l4-0zM10.5 6.8c0.020-0.001 0.043-0.002 0.066-0.002 0.362 0 0.691 0.141 0.935 0.372 0.209 0.224 0.361 0.505 0.427 0.818l-2.778 0.011c0.11-0.661 0.661-1.165 1.337-1.2z"></path></g>
<g id="vaadin:del"><path d="M0 0v16h16v-16h-16zM3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM13 9h-4c-0 0.004-0 0.008-0 0.012 0 0.607 0.211 1.164 0.564 1.603 0.252 0.244 0.601 0.397 0.986 0.397 0.025 0 0.049-0.001 0.074-0.002 0.586-0.027 1.115-0.261 1.518-0.631l0.708 0.712c-0.584 0.548-1.364 0.893-2.225 0.92-0.030 0.001-0.060 0.002-0.090 0.002-0.662 0-1.261-0.268-1.696-0.702-0.522-0.613-0.84-1.414-0.84-2.289 0-0.007 0-0.014 0-0.022-0-0.005-0-0.012-0-0.019 0-0.968 0.344-1.855 0.915-2.547 0.384-0.383 0.922-0.624 1.516-0.624 0.021 0 0.041 0 0.062 0.001 0.024-0.001 0.055-0.002 0.086-0.002 0.639 0 1.219 0.256 1.641 0.672 0.47 0.532 0.762 1.23 0.78 1.996l0 0.524zM15 12h-1v-9h1v9z"></path><path d="M3 4h-1v7h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5z"></path><path d="M10.49 6.8c-0.679 0.035-1.23 0.539-1.339 1.192l2.779 0.008c-0.069-0.324-0.22-0.606-0.431-0.831-0.242-0.229-0.571-0.371-0.934-0.371-0.027 0-0.053 0.001-0.079 0.002z"></path></g>
<g id="vaadin:dental-chair"><path d="M11.5 8.2c-0.3-0.1-0.6-0.2-0.8-0.2h-2.7v-1h3c0-0.6-0.4-1-1-1h-4c0 0.6 0.4 1 1 1v1c-0.5 0-1-0.2-1.2-0.6l-1.1-1.8c-0.3-0.4-0.7-0.6-1.1-0.6h-0.6v-0.7c0-0.3-0.1-0.5-0.2-0.8l-0.3-0.7c-0.3-0.5-0.9-0.8-1.5-0.8h-1l5 7c0.4 0.6 1.1 1 1.8 1h1.2v1h-1v2h-0.6c-0.9 0-1.8 0.4-2.4 1v0h-1v1h11v-1h-1c-0.6-0.6-1.5-1-2.4-1h-0.6v-2h-1v-1h1.6c0.2 0 0.5 0.1 0.7 0.2l1.7 0.9c0.9 0.5 2 0.5 2.9 0h0.1l-4.5-2.9z"></path></g>
<g id="vaadin:desktop"><path d="M16 0h-16v13h6v2h-2v1h8v-1h-2v-2h6v-13zM9 12h-2v-1h2v1zM15 10h-14v-8.9c0-0.1 0-0.1 0-0.1h14c0 0 0 0 0 0.1v8.9z"></path></g>
<g id="vaadin:diamond-o"><path d="M13 2h-10l-3 3.5 8 9.5 8-9.5zM4.64 5h-2.89l1.52-1.78zM6.42 5l1.58-1.84 1.58 1.84h-3.16zM10 6l-2 6.68-2-6.68h4zM5.26 6l1.89 6.44-5.42-6.44h3.53zM10.75 6h3.53l-5.43 6.44zM11.37 5l1.37-1.78 1.51 1.78h-2.9zM12 3l-1.44 1.81-1.46-1.81h2.9zM5.43 4.83l-1.43-1.83h2.9z"></path></g>
<g id="vaadin:diamond"><path d="M0 6h4l3 8.6-7-8.6z"></path><path d="M16 6h-4l-3 8.6 7-8.6z"></path><path d="M8 15l-3-9h6l-3 9z"></path><path d="M4 5h-4l2-3 2 3z"></path><path d="M16 5h-4l2-3 2 3z"></path><path d="M10 5h-4l2-3 2 3z"></path><path d="M3.34 2h3.66l-2 3-1.66-3z"></path><path d="M9 2h4l-2 3-2-3z"></path></g>
<g id="vaadin:diploma-scroll"><path d="M12.61 8.41c-0.53-0.079-1.008-0.223-1.454-0.424 2.104-1.876 4.424-3.536 4.454-3.556l0.1-0.070 0.060-0.11c0.177-0.367 0.281-0.797 0.281-1.252 0-0.901-0.407-1.707-1.046-2.244-0.523-0.482-1.219-0.776-1.983-0.776-0.538 0-1.043 0.146-1.476 0.4l-0.126 0.133c-1.578 2.181-3.182 4.099-4.908 5.899-1.836 1.638-3.87 3.195-6.018 4.592l-0.394 0.248v0.23c-0.077 0.314-0.122 0.675-0.122 1.046 0 0.97 0.304 1.87 0.822 2.609 0.507 0.53 1.237 0.87 2.045 0.87 0.055 0 0.109-0.002 0.162-0.005 0.026 0.002 0.065 0.003 0.104 0.003 0.701 0 1.317-0.36 1.674-0.905 0.245-0.308 2.065-2.608 4.005-4.708 0.268 0.464 0.476 1.003 0.594 1.575 0.032 0.249 0.046 0.496 0.046 0.747 0 0.823-0.158 1.61-0.445 2.331l1.685-2.043 1.33 1c-0.041-1.174-0.243-2.286-0.584-3.336-0.227-0.416-0.542-0.845-0.915-1.214 0.406 0.346 0.871 0.643 1.372 0.874 0.94 0.338 1.989 0.572 3.076 0.672l-0.949-1.266 2-1.73c-0.83 0.273-1.785 0.431-2.777 0.431-0.216 0-0.43-0.007-0.642-0.022zM12.16 1.18c0.246-0.123 0.536-0.194 0.842-0.194 0.506 0 0.966 0.196 1.309 0.516 0.441 0.356 0.721 0.897 0.721 1.504 0 0.242-0.045 0.474-0.126 0.688-0.486 0.307-2.346 1.717-4.146 3.307-0.055-0.521-0.302-0.975-0.668-1.298-0.28-0.239-0.643-0.384-1.039-0.384-0.068 0-0.135 0.004-0.201 0.012 1.568-1.771 2.978-3.691 3.308-4.151zM2.7 11.81c0.073-0.051 0.164-0.082 0.262-0.082 0.014 0 0.027 0.001 0.040 0.002l0.068-0c0.179 0.052 0.334 0.142 0.461 0.261l-0.871 0.719c-0.081-0.165-0.128-0.358-0.128-0.563 0-0.052 0.003-0.103 0.009-0.153 0.027-0.077 0.084-0.144 0.158-0.183zM4 14.5c-0.175 0.306-0.499 0.508-0.871 0.508-0.046 0-0.090-0.003-0.134-0.009-0.046 0.006-0.106 0.008-0.167 0.008-0.515 0-0.981-0.209-1.318-0.548-0.365-0.54-0.583-1.206-0.583-1.922 0-0.251 0.027-0.495 0.077-0.73l0.706-0.457c-0.094 0.14-0.164 0.304-0.199 0.481-0.007 0.076-0.010 0.154-0.010 0.234 0 0.642 0.202 1.237 0.545 1.724l0.354 0.44 1.7-1.4c0.066 0.209 0.104 0.45 0.104 0.7 0 0.351-0.075 0.685-0.21 0.985zM4.86 12.050c-0.345-0.6-0.889-1.053-1.54-1.274-0.071-0.012-0.13-0.016-0.19-0.016s-0.119 0.004-0.177 0.010c-0.046-0.007-0.106-0.011-0.168-0.011s-0.122 0.004-0.182 0.011c1.489-1.018 2.766-2.003 3.988-3.052 0.398 0.071 0.812 0.25 1.131 0.533 0.297 0.313 0.48 0.739 0.48 1.209 0 0.032-0.001 0.063-0.002 0.094-1.14 1.226-2.25 2.536-3 3.506-0.054-0.379-0.177-0.719-0.357-1.023z"></path></g>
<g id="vaadin:diploma"><path d="M14 10.58c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167l-0.479-0.698c-0.009-0.013-0.014-0.028-0.014-0.045s0.005-0.032 0.014-0.045l0.48-0.7c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167c-0.040-0.11-0.127-0.196-0.236-0.237l-0.823-0.301c-0.031-0.011-0.054-0.037-0.060-0.069l-0-0.841c-0.007-0.125-0.072-0.233-0.169-0.299-0.066-0.045-0.145-0.071-0.231-0.071-0.004 0-0.007 0-0.011 0l-0.159-0-0.85 0.22c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l-0.549-0.65c-0.079-0.085-0.191-0.137-0.315-0.137s-0.236 0.053-0.315 0.137l-0.55 0.65c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l0.001 0-0.9-0.23h-0.1c-0.002-0-0.005-0-0.008-0-0.087 0-0.167 0.026-0.234 0.071-0.096 0.066-0.161 0.174-0.168 0.298l-0 0.841c-0.006 0.033-0.029 0.059-0.059 0.070l-0.821 0.3c-0.134 0.023-0.245 0.11-0.299 0.228-0.025 0.051-0.039 0.107-0.039 0.167s0.014 0.117 0.039 0.167l0.479 0.698c0.009 0.013 0.014 0.028 0.014 0.045s-0.005 0.032-0.014 0.045l-0.48 0.7c-0.024 0.048-0.038 0.105-0.038 0.165s0.014 0.117 0.039 0.167c0.040 0.11 0.127 0.196 0.236 0.237l0.823 0.301c0.031 0.011 0.054 0.037 0.060 0.069l0 0.841c0.007 0.125 0.072 0.233 0.169 0.299 0.067 0.045 0.147 0.071 0.234 0.071 0.003 0 0.005-0 0.008-0h0.16l0.31-0.070v3.69l1.53-2 1.47 2v-3.69l0.31 0.080h0.11c0.002 0 0.005 0 0.008 0 0.087 0 0.167-0.026 0.234-0.071 0.096-0.066 0.161-0.174 0.168-0.298l0-0.841c0.006-0.033 0.029-0.059 0.059-0.070l0.821-0.3c0.13-0.026 0.236-0.112 0.289-0.227z"></path><path d="M0 1v12h8l-0.11-0.050c-0.282-0.195-0.469-0.508-0.49-0.867l-0-0.083h-6.4v-10h14v10h-1.43v0.080c-0.021 0.361-0.208 0.675-0.486 0.868l-0.084 0.052h3v-12h-16z"></path><path d="M7.43 6.91c0.007-0.377 0.198-0.708 0.486-0.908 0.016-0.005 0.030-0.006 0.044-0.006s0.028 0.001 0.041 0.004l-5.001-0v1h4.43v-0.090z"></path><path d="M6.42 8h-3.42v1h3.36c-0.074-0.136-0.117-0.298-0.117-0.47 0-0.13 0.025-0.253 0.070-0.367 0.014-0.063 0.054-0.122 0.107-0.163z"></path><path d="M3 4h10v1h-10v-1z"></path></g>
<g id="vaadin:disc"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM15 8c0 1.1-0.2 2.1-0.7 3l-2.7-1.2c0.2-0.6 0.4-1.2 0.4-1.8 0-2.2-1.8-4-4-4-0.5 0-0.9 0.1-1.4 0.3l-1.2-2.8c0.6-0.2 1.2-0.4 1.8-0.5l0.3 3h0.5v-3c3.9 0 7 3.1 7 7zM8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM1 8c0-1.1 0.2-2.1 0.7-3l2.7 1.2c-0.2 0.6-0.4 1.2-0.4 1.8 0 2.2 1.8 4 4 4 0.5 0 0.9-0.1 1.4-0.3l1.2 2.8c-0.6 0.2-1.2 0.4-1.8 0.5l-0.3-3h-0.5v3c-3.9 0-7-3.1-7-7z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:doctor-briefcase"><path d="M16 12l-1.4-6.7c-0.2-0.7-0.9-1.3-1.7-1.3h-1.9v-1.2c0-1-0.8-1.8-1.8-1.8h-2.4c-1 0-1.8 0.8-1.8 1.8v1.2h-1.9c-0.8 0-1.5 0.6-1.7 1.3l-1.4 6.7c-0.2 1 0.6 2 1.7 2h12.5c1.2 0 2-1 1.8-2zM6 2.8c0-0.4 0.4-0.8 0.8-0.8h2.4c0.4 0 0.8 0.4 0.8 0.8v1.2h-4v-1.2zM11 10h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"></path></g>
<g id="vaadin:doctor"><path d="M14 11.3c-1-1.9-2-1.6-3.1-1.7 0.1 0.3 0.1 0.6 0.1 1 1.6 0.4 2 2.3 2 3.4v1h-2v-1h1c0 0 0-2.5-1.5-2.5s-1.5 2.4-1.5 2.5h1v1h-2v-1c0-1.1 0.4-3.1 2-3.4 0-0.6-0.1-1.1-0.2-1.3-0.2-0.1-0.4-0.3-0.4-0.6 0-0.6 0.8-0.4 1.4-1.5 0 0 0.9-2.3 0.6-4.3h-1c0-0.2 0.1-0.3 0.1-0.5s0-0.3-0.1-0.5h0.8c-0.3-1-1.3-1.9-3.2-1.9 0 0 0 0 0 0s0 0 0 0 0 0 0 0c-1.9 0-2.9 0.9-3.3 2h0.8c0 0.2-0.1 0.3-0.1 0.5s0 0.3 0.1 0.5h-1c-0.2 2 0.6 4.3 0.6 4.3 0.6 1 1.4 0.8 1.4 1.5 0 0.5-0.5 0.7-1.1 0.8-0.2 0.2-0.4 0.6-0.4 1.4 0 0.4 0 0.8 0 1.2 0.6 0.2 1 0.8 1 1.4 0 0.7-0.7 1.4-1.5 1.4s-1.5-0.7-1.5-1.5c0-0.7 0.4-1.2 1-1.4 0-0.3 0-0.7 0-1.2s0.1-0.9 0.2-1.3c-0.7 0.1-1.5 0.4-2.2 1.7-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0.1 0-0.2-3.6-0.8-4.7zM6.5 2.5c0-0.8 0.7-1.5 1.5-1.5s1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5-1.5-0.7-1.5-1.5z"></path><path d="M5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:dollar"><path d="M8.2 6.8c-0.1 0-0.1-0.1-0.2-0.1v-3.1c1.2 0.1 2.2 0.6 2.2 0.6l0.9-1.8c-0.1 0-1.5-0.8-3.1-0.8v-1.6h-1v1.6c-0.8 0.2-1.4 0.5-2 0.9-0.6 0.6-1 1.4-1 2.3 0 0.7 0.2 2.3 3 3.6v3.9c-0.9-0.2-2-0.7-2.4-0.9l-1 1.7c0.2 0.1 1.8 1 3.4 1.2v1.7h1v-1.7c0 0 0 0 0 0 2.3-0.3 3.6-2.1 3.6-3.8 0-1.5-1-2.7-3.4-3.7zM7 6.2c-0.8-0.5-1-1-1-1.3 0-0.4 0.1-0.7 0.4-0.9 0.2-0.1 0.4-0.2 0.6-0.3v2.5zM8 12.3v-3.4c1.1 0.5 1.6 1.1 1.6 1.6 0 0.6-0.3 1.6-1.6 1.8z"></path></g>
<g id="vaadin:dot-circle"><path d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:download-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 13l5-5h-3v-8h-4v8h-3z"></path></g>
<g id="vaadin:download"><path d="M16 10h-5.5l-2.5 2.5-2.5-2.5h-5.5v6h16v-6zM4 14h-2v-2h2v2z"></path><path d="M10 6v-6h-4v6h-3l5 5 5-5z"></path></g>
<g id="vaadin:drop"><path d="M8 0c0 0-5 8.2-5 11s2.2 5 5 5 5-2.2 5-5-5-11-5-11zM8.9 14.9l-0.2-1c1.4-0.3 2.4-1.7 2.4-3.2 0-0.3-0.1-1.1-0.8-2.6l0.9-0.4c0.6 1.4 0.8 2.4 0.8 3 0 2-1.3 3.8-3.1 4.2z"></path></g>
<g id="vaadin:edit"><path d="M16 4c0 0 0-1-1-2s-1.9-1-1.9-1l-1.1 1.1v-2.1h-12v16h12v-8l4-4zM6.3 11.4l-0.6-0.6 0.3-1.1 1.5 1.5-1.2 0.2zM7.2 9.5l-0.6-0.6 5.2-5.2c0.2 0.1 0.4 0.3 0.6 0.5zM14.1 2.5l-0.9 1c-0.2-0.2-0.4-0.3-0.6-0.5l0.9-0.9c0.1 0.1 0.3 0.2 0.6 0.4zM11 15h-10v-14h10v2.1l-5.9 5.9-1.1 4.1 4.1-1.1 2.9-3v6z"></path></g>
<g id="vaadin:eject"><path d="M1 11h14l-7-10z"></path><path d="M1 12h14v3h-14v-3z"></path></g>
<g id="vaadin:elastic"><path d="M4.7 16v0c-1.7 0-3.1-0.8-4-2.1-1.1-1.7-0.9-4 0.4-5.8 0.9-1.3 2.1-2.1 3.6-2.4 1.2-0.3 2.2-1.1 2.5-2.2 0.2-0.8 0.7-1.5 1.3-2 0.9-1 2.2-1.5 3.5-1.5 1.1 0 2.2 0.4 2.9 1.2 1.5 1.6 1.5 4.2-0.1 6-0.5 0.6-1.2 1.1-2 1.4-1.2 0.5-2.2 1.6-2.6 3-0.3 1-0.8 1.9-1.5 2.6-1.1 1.2-2.6 1.8-4 1.8zM12 1c-1 0-2 0.4-2.8 1.2-0.5 0.5-0.8 1-1 1.6-0.5 1.5-1.8 2.5-3.3 2.9-1.2 0.2-2.2 0.9-3 2-1.1 1.5-1.2 3.3-0.3 4.7 0.6 1 1.8 1.6 3.1 1.6v0c1.2 0 2.4-0.5 3.3-1.4 0.6-0.6 1.1-1.4 1.3-2.2 0.4-1.7 1.6-3 3.2-3.6 0.6-0.2 1.2-0.7 1.6-1.2 1.2-1.4 1.3-3.5 0.1-4.7-0.6-0.6-1.4-0.9-2.2-0.9z"></path></g>
<g id="vaadin:ellipsis-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M4 7h2v2h-2v-2z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 7h2v2h-2v-2z"></path></g>
<g id="vaadin:ellipsis-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 9h-2v-2h2v2zM9 9h-2v-2h2v2zM12 9h-2v-2h2v2z"></path></g>
<g id="vaadin:ellipsis-dots-h"><path d="M4 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M16 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-dots-v"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-h"><path d="M0 6h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path></g>
<g id="vaadin:ellipsis-v"><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path></g>
<g id="vaadin:enter-arrow"><path d="M0 9l7 4v-3h9v-7l-3 2v2h-6v-3l-7 5z"></path></g>
<g id="vaadin:enter"><path d="M4 0v6h-3v10h14v-16h-11zM12 11h-5v2l-3-2.5 3-2.5v2h4v-3h1v4z"></path></g>
<g id="vaadin:envelope-o"><path d="M0 3v11h16v-11h-16zM1 7.1l3.9 2-3.9 3.4v-5.4zM1.9 13l4-3.5 2.1 1.1 2.1-1.1 4 3.5h-12.2zM15 12.5l-3.9-3.5 3.9-2v5.5zM15 5.9l-7 3.5-7-3.5v-1.9h14v1.9z"></path></g>
<g id="vaadin:envelope-open-o"><path d="M14 3.7v-0.7h-1.5l-4.5-3-4.6 3h-1.4v0.7l-2 1.3v11h16v-10.9l-2-1.4zM8 1.2l2.7 1.8h-5.5l2.8-1.8zM3 4h10v3.7l-3.5 1.7-1.5-1.3-1.5 1.4-3.5-1.7v-3.8zM1 5.5l1-0.7v2.4l-1-0.4v-1.3zM1 7.9l4.6 2.3-4.6 4v-6.3zM1.9 15l6.1-5.3 6.1 5.3h-12.2zM15 14.2l-4.7-4.1 4.7-2.3v6.4zM15 6.7l-1 0.5v-2.3l1 0.7v1.1z"></path></g>
<g id="vaadin:envelope-open"><path d="M14 3.7v3.7l2-1v-1.4z"></path><path d="M2 3.8l-2 1.2v1.5l2 1z"></path><path d="M11.2 2l-3.2-2-3.2 2z"></path><path d="M13 3h-10v4.9l3.4 1.7 1.6-1.2 1.6 1.2 3.4-1.7z"></path><path d="M16 7.6l-5.5 2.7 5.5 4.4z"></path><path d="M8 9.6l-8 6.4h16z"></path><path d="M5.5 10.3l-5.5-2.7v7.1z"></path></g>
<g id="vaadin:envelope"><path d="M0 3h16v2.4l-8 4-8-4z"></path><path d="M0 14l5.5-4.8 2.5 1.4 2.5-1.4 5.5 4.8z"></path><path d="M4.6 8.8l-4.6-2.3v6.5z"></path><path d="M11.4 8.8l4.6-2.3v6.5z"></path></g>
<g id="vaadin:envelopes-o"><path d="M14 2h-14v10h14v-10zM5.71 8l1.29 0.55 1.29-0.55 4.71 3h-12zM1 9.83v-4l3.64 1.63zM9.36 7.46l3.64-1.68v4zM13 3v1.68l-6 2.77-6-2.77v-1.68h12z"></path><path d="M15 4v9h-13v1h14v-10h-1z"></path></g>
<g id="vaadin:envelopes"><path d="M16 14h-14v-1h13v-9h1v10z"></path><path d="M14 10.77v-5.48l-4.68 2.18 4.68 3.3z"></path><path d="M8.28 7.96l-1.28 0.59-1.28-0.59-5.72 4.030v0.010l14-0.010-5.72-4.030z"></path><path d="M7 7.45l7-3.27v-2.18h-14v2.18l7 3.27z"></path><path d="M4.68 7.47l-4.68-2.18v5.48l4.68-3.3z"></path></g>
<g id="vaadin:eraser"><path d="M8.1 14l6.4-7.2c0.6-0.7 0.6-1.8-0.1-2.5l-2.7-2.7c-0.3-0.4-0.8-0.6-1.3-0.6h-1.8c-0.5 0-1 0.2-1.4 0.6l-6.7 7.6c-0.6 0.7-0.6 1.9 0.1 2.5l2.7 2.7c0.3 0.4 0.8 0.6 1.3 0.6h11.4v-1h-7.9zM6.8 13.9c0 0 0-0.1 0 0l-2.7-2.7c-0.4-0.4-0.4-0.9 0-1.3l3.4-3.9h-1l-3 3.3c-0.6 0.7-0.6 1.7 0.1 2.4l2.3 2.3h-1.3c-0.2 0-0.4-0.1-0.6-0.2l-2.8-2.8c-0.3-0.3-0.3-0.8 0-1.1l3.5-3.9h1.8l3.5-4h1l-3.5 4 3.1 3.7-3.5 4c-0.1 0.1-0.2 0.1-0.3 0.2z"></path></g>
<g id="vaadin:esc-a"><path d="M8 12c-0.726-0.029-1.409-0.177-2.043-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.85 0.33 2 0.77 1.8 2.080-0.067 0.511-0.364 0.94-0.782 1.186-0.323 0.163-0.696 0.256-1.090 0.256-0.034 0-0.069-0.001-0.103-0.002z"></path><path d="M13.71 12c-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.646-0.548-1.059-1.37-1.059-2.289 0-0.079 0.003-0.157 0.009-0.235-0.011-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.010 0.063-0.016 0.148-0.016 0.234 0 0.599 0.255 1.138 0.663 1.514 0.346 0.177 0.754 0.28 1.185 0.28 0.292 0 0.573-0.047 0.835-0.134l0.331 0.905c-0.383 0.121-0.823 0.19-1.279 0.19-0.004 0-0.008 0-0.012-0z"></path><path d="M5 4v-1h-4v9h4v-1h-3v-3h3v-1h-3v-3h3z"></path></g>
<g id="vaadin:esc"><path d="M0 0v16h16v-16h-16zM5 4h-3v3h3v1h-3v3h3v1h-4v-9h4v1zM10 10.54c-0.067 0.511-0.364 0.94-0.782 1.186-0.333 0.175-0.719 0.276-1.129 0.276-0.031 0-0.062-0.001-0.093-0.002-0.722-0.029-1.405-0.177-2.038-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.83 0.3 2.020 0.75 1.83 2.060zM12.67 10.72c0.345 0.176 0.752 0.279 1.183 0.279 0.292 0 0.573-0.047 0.835-0.134l0.311 0.945c-0.383 0.121-0.823 0.19-1.279 0.19-0 0-0.001 0-0.001 0-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.651-0.548-1.069-1.374-1.069-2.297 0-0.076 0.003-0.152 0.008-0.227-0.010-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.008 0.055-0.013 0.13-0.013 0.206 0 0.592 0.25 1.126 0.65 1.502z"></path></g>
<g id="vaadin:euro"><path d="M10.89 3c1.166 0.009 2.244 0.383 3.127 1.011l-0.017-2.321c-0.918-0.433-1.994-0.686-3.129-0.686-3.606 0-6.616 2.551-7.323 5.947l-1.548 0.049v1h1.41c0 0.17 0 0.33 0 0.5-0.005 0.075-0.008 0.162-0.008 0.25s0.003 0.175 0.008 0.262l-1.411-0.012v1h1.54c0.882 3.353 3.805 5.818 7.331 5.999 1.149-0.002 2.218-0.256 3.175-0.708l-0.045-2.291c-0.866 0.617-1.944 0.991-3.108 1-2.461-0.128-4.512-1.744-5.28-3.959l6.388-0.041v-1h-6.59c-0.006-0.075-0.009-0.162-0.009-0.25s0.003-0.175 0.010-0.261c-0.001-0.159-0.001-0.319-0.001-0.489h6.59v-1h-6.4c0.678-2.325 2.788-3.996 5.29-4z"></path></g>
<g id="vaadin:exchange"><path d="M16 5v2h-13v2l-3-3 3-3v2z"></path><path d="M0 12v-2h13v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:exclamation-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 3h2v7h-2v-7z"></path><path d="M7 11h2v2h-2v-2z"></path></g>
<g id="vaadin:exclamation-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-2h2v2zM9 10h-2v-7h2v7z"></path></g>
<g id="vaadin:exclamation"><path d="M6 0h4v4l-1 7h-2l-1-7z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:exit-o"><path d="M10 0c1.1 0 2 0.9 2 2 0 0.9-0.6 1.7-1.5 1.9 0 0 0 0.1 0 0.1 0.4 0 0.7 0.2 1 0.5l1.3 1.3c0.1 0.1 0.3 0.2 0.5 0.2h1.7v-6h-5z"></path><path d="M11.8 14.5l-3.8-4.5v2.5c0 0.8-0.7 1.5-1.5 1.5h-3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1h2.5c0.3 0 0.5-0.2 0.5-0.5v-2c0-0.7 0.1-1.3 0.4-2l0.7-1.5h-0.8c-0.5 0-0.9 0.2-1.2 0.6l-0.5 0.7c-0.2 0.4-0.7 0.5-1.2 0.3-0.4-0.3-0.6-0.9-0.2-1.3l0.6-0.8c0.7-1 1.9-1.5 3.1-1.5h2l0.1-0.3c-0.6-0.3-1-1-1-1.7 0-1.1 0.9-2 2-2h-7v4.9l-0.6 0.8c-0.3 0.4-0.5 0.9-0.4 1.5 0.1 0.5 0.4 1 0.9 1.3 0 0 0 0 0 0v2.5c-1.1 0-2 0.9-2 2s0.9 2 2 2v1h11.6c-1.1 0-2.1-0.6-2.7-1.5z"></path><path d="M11.4 7.3l-0.7-0.8-0.6 1.5c-0.2 0.5-0.3 0.9 0 1.3l4.9 6.1v-7.4h-2.1c-0.6 0-1.1-0.2-1.5-0.7z"></path></g>
<g id="vaadin:exit"><path d="M14 6h-1.7c-0.2 0-0.4-0.1-0.6-0.2l-1.3-1.3c-0.2-0.3-0.6-0.5-1.1-0.5h-0.3c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7l-0.2 0.3h-2c-1.1 0-2.3 0.5-3 1.5l-0.6 0.8c-0.4 0.4-0.2 1 0.2 1.3 0.4 0.2 0.9 0.1 1.2-0.3l0.5-0.7c0.3-0.4 0.7-0.6 1.2-0.6h0.8l-0.7 1.6c-0.3 0.6-0.4 1.2-0.4 1.9v2c0 0.3-0.2 0.5-0.5 0.5h-2.5c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.5c0.8 0 1.5-0.7 1.5-1.5v-2.5l3.8 4.5c0.6 0.9 1.7 1.5 2.8 1.5h0.9l-5.4-6.7c-0.3-0.4-0.2-0.8 0-1.3l0.6-1.5 0.7 0.8c0.4 0.4 1 0.7 1.6 0.7h2c0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path></g>
<g id="vaadin:expand-full"><path d="M5.3 6.7l1.4-1.4-3-3 1.3-1.3h-4v4l1.3-1.3z"></path><path d="M6.7 10.7l-1.4-1.4-3 3-1.3-1.3v4h4l-1.3-1.3z"></path><path d="M10.7 9.3l-1.4 1.4 3 3-1.3 1.3h4v-4l-1.3 1.3z"></path><path d="M11 1l1.3 1.3-3 3 1.4 1.4 3-3 1.3 1.3v-4z"></path></g>
<g id="vaadin:expand-square"><path d="M11 2h-9v9l1-1v-7h7z"></path><path d="M5 14h9v-9l-1 1v7h-7z"></path><path d="M16 0h-5l1.8 1.8-4.5 4.5 1.4 1.4 4.5-4.5 1.8 1.8z"></path><path d="M7.7 9.7l-1.4-1.4-4.5 4.5-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:expand"><path d="M15 1h-4l1.3 1.3-4.5 4.5 1.4 1.4 4.5-4.5 1.3 1.3z"></path><path d="M6.8 7.8l-4.5 4.5-1.3-1.3v4h4l-1.3-1.3 4.5-4.5z"></path></g>
<g id="vaadin:external-browser"><path d="M11 10l-2.9-3.2-3.3 3.2h2.2v1.8c0 1.7-0.9 4.2-4 4.2 4.8 0 6-1.4 6-4.3v-1.7h2z"></path><path d="M0 0v13h6v-1h-5v-9h14v9h-5v1h6v-13h-16zM2 2h-1v-1h1v1zM13 2h-10v-1h10v1z"></path></g>
<g id="vaadin:external-link"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z"></path></g>
<g id="vaadin:eye-slash"><path d="M12.9 5.2l-0.8 0.8c1.7 0.9 2.5 2.3 2.8 3-0.7 0.9-2.8 3.1-7 3.1-0.7 0-1.2-0.1-1.8-0.2l-0.8 0.8c0.8 0.3 1.7 0.4 2.6 0.4 5.7 0 8.1-4 8.1-4s-0.6-2.4-3.1-3.9z"></path><path d="M12 7.1c0-0.3 0-0.6-0.1-0.8l-4.8 4.7c0.3 0 0.6 0.1 0.9 0.1 2.2 0 4-1.8 4-4z"></path><path d="M15.3 0l-4.4 4.4c-0.8-0.2-1.8-0.4-2.9-0.4-6.7 0-8 5.1-8 5.1s1 1.8 3.3 3l-3.3 3.2v0.7h0.7l15.3-15.3v-0.7h-0.7zM4 11.3c-1.6-0.7-2.5-1.8-2.9-2.3 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 1.1 0.5 2.2 1.3 2.9l-1.3 1.3zM6.2 7.9l-1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.5 0.4-1.5 0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.7c-0.1 0.7 0.1 1.1 0.1 1.1z"></path></g>
<g id="vaadin:eye"><path d="M8 3.9c-6.7 0-8 5.1-8 5.1s2.2 4.1 7.9 4.1 8.1-4 8.1-4-1.3-5.2-8-5.2zM5.3 5.4c0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.6c0 0.7 0.2 1.1 0.2 1.1l-1.1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.4 0.4-1.4zM7.9 12.1c-4.1 0-6.2-2.3-6.8-3.2 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 2.2 1.8 4 4 4s4-1.8 4-4c0-0.5-0.1-0.9-0.2-1.3 2 0.9 2.8 2.5 3.1 3.2-0.7 0.9-2.8 3.2-7 3.2z"></path></g>
<g id="vaadin:eyedropper"><path d="M15 1c-1.8-1.8-3.7-0.7-4.6 0.1-0.4 0.4-0.7 0.9-0.7 1.5v0c0 1.1-1.1 1.8-2.1 1.5l-0.1-0.1-0.7 0.8 0.7 0.7-6 6-0.8 2.3-0.7 0.7 1.5 1.5 0.8-0.8 2.3-0.8 6-6 0.7 0.7 0.7-0.6-0.1-0.2c-0.3-1 0.4-2.1 1.5-2.1v0c0.6 0 1.1-0.2 1.4-0.6 0.9-0.9 2-2.8 0.2-4.6zM3.9 13.6l-2 0.7-0.2 0.1 0.1-0.2 0.7-2 5.8-5.8 1.5 1.5-5.9 5.7z"></path></g>
<g id="vaadin:facebook-square"><path d="M0 0v16h16v-16h-16zM12.9 8.4h-2.1v5.6h-2.1v-5.6h-1.5v-2h1.5c0 0 0-0.8 0-1.7 0-1.5 0.9-2.7 2.9-2.7 0.8 0 1.4 0.1 1.4 0.1v1.9c0 0-0.6 0-1.3 0s-0.8 0.3-0.8 0.9c0 0.1 0 0.1 0 0.1 0 0.2 0 0.5 0 1.4h2.1l-0.1 2z"></path></g>
<g id="vaadin:facebook"><path d="M7.2 16v-7.5h-2v-2.7h2c0 0 0-1.1 0-2.3 0-1.8 1.2-3.5 3.9-3.5 1.1 0 1.9 0.1 1.9 0.1l-0.1 2.5c0 0-0.8 0-1.7 0-1 0-1.1 0.4-1.1 1.2 0 0.6 0-1.3 0 2h2.9l-0.1 2.7h-2.8v7.5h-2.9z"></path></g>
<g id="vaadin:factory"><path d="M4.4 1.3c-0.6 0.3-0.8 1.1-0.4 1.5 0.5-0.9 1.3-0.6 2.5 0.4 0.8 0.7 1.9 0.1 1.9 0.1s0.2 1.2 1.7 1.4c1.7 0.2 2.3-0.8 2.3-0.8s0.4 1 1.9 0.4c1.1-0.4 0.7-1.1 0.7-1.1s1 0 1-0.7c0-0.9-1.1-0.8-1.1-0.8s0.2-1-0.9-1.1c-1-0.1-1.3 0.5-1.3 0.5s-0.3-1.1-1.8-1.1c-1.4 0-1.9 1.3-1.9 1.3s-0.4-0.6-1.6-0.6c-0.9 0-1.3 0.7-1.3 0.7s-1.1-0.5-1.7-0.1z"></path><path d="M12 12.1v-2.1l-4 2.1v-2.1h-2.4l-0.6-7h-2l-0.6 7h-2.4v6h16v-6l-4 2.1zM6 14h-4v-2h4v2z"></path></g>
<g id="vaadin:family"><path d="M9.5 7.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M14.27 4h-2.54c0 0 0 0 0 0-0.955 0-1.73 0.775-1.73 1.73v3.27c0 0.552 0.448 1 1 1v6h4v-6c0.552 0 1-0.448 1-1v-3.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M15 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M4.27 5h-2.54c-0.955 0-1.73 0.775-1.73 1.73s0.775 1.73 1.73 1.73c0.955 0 1.73-0.775 1.73-1.73s-0.775-1.73-1.73-1.73c-0.955 0-1.73 0.775-1.73 1.73v2.27c0 0.552 0.448 1 1 1l-1 3h1v3h4v-3h1l-1-3c0.552 0 1-0.448 1-1v-2.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M5 3c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M7 13v3h2v-3c0.552 0 1-0.448 1-1v-1.54c0-0.806-0.654-1.46-1.46-1.46 0 0 0 0 0 0h-1.080c-0.806 0-1.46 0.654-1.46 1.46 0 0 0 0 0 0v1.54c0 0.552 0.448 1 1 1z"></path></g>
<g id="vaadin:fast-backward"><path d="M16 15v-14l-7 7z"></path><path d="M9 15v-14l-7 7z"></path><path d="M0 1h2v14h-2v-14z"></path></g>
<g id="vaadin:fast-forward"><path d="M0 1v14l7-7z"></path><path d="M7 1v14l7-7z"></path><path d="M14 1h2v14h-2v-14z"></path></g>
<g id="vaadin:female"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8v-1.5l1.8 1.8c0.3 0.3 0.7 0.3 1 0s0.3-0.8 0-1l-2.6-2.6c-0.4-0.5-1-0.7-1.7-0.7h-1c-0.7 0-1.3 0.2-1.7 0.7l-2.6 2.6c-0.3 0.3-0.3 0.8 0 1 0.3 0.3 0.7 0.3 1 0l1.8-1.8v1.5l-4 5h4v3h4v-3h4l-4-5z"></path></g>
<g id="vaadin:file-add"><path d="M12 15h-10v-14h6v4h4v1h1v-2l-4-4h-8v16h12v-2h-1v1zM9 1l3 3h-3v-3z"></path><path d="M13 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:file-code"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6.2 13h-0.7l-2-2.5 2-2.5h0.7l-2 2.5z"></path><path d="M9.8 13h0.7l2-2.5-2-2.5h-0.7l2 2.5z"></path><path d="M6.7 14h0.6l2.1-7h-0.8z"></path></g>
<g id="vaadin:file-font"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M5 7v2h2v5h2v-5h2v-2z"></path></g>
<g id="vaadin:file-movie"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M10 10v-2h-6v5h6v-2l2 2v-5z"></path></g>
<g id="vaadin:file-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path></g>
<g id="vaadin:file-picture"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 11.5v2.5h8v-1.7c0 0 0.1-1.3-1.3-1.5-1.3-0.2-1.5 0.4-2.5 0.5-0.8 0-0.6-1.3-2.2-1.3-1.2 0-2 1.5-2 1.5z"></path><path d="M12 8.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:file-presentation"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M9 6h-2v1h-3v6h2v1h1v-1h2v1h1v-1h2v-6h-3v-1zM11 8v4h-6v-4h6z"></path><path d="M7 9v2l2-1z"></path></g>
<g id="vaadin:file-process"><path d="M12 0h-7v6h0.7l0.2 0.7 0.1 0.1v-5.8h5v4h4v9h-6l0.3 0.5-0.5 0.5h7.2v-11l-4-4zM12 4v-3l3 3h-3z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:file-refresh"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M4.7 7.7l-0.7-0.7v3h3l-1.2-1.2c0.4-0.8 1.3-1.3 2.2-1.3 1.4 0 2.5 1.1 2.5 2.5h1.5c0-2.2-1.8-4-4-4-1.3 0-2.5 0.7-3.3 1.7z"></path><path d="M9.8 11.8c-0.5 0.5-1.1 0.8-1.8 0.7-1 0-1.9-0.6-2.3-1.5h-1.6c0.4 1.7 2 3 3.8 3 1.1 0 2.1-0.5 2.8-1.2l1.3 1.2v-3h-3l0.8 0.8z"></path></g>
<g id="vaadin:file-remove"><path d="M12 15h-10v-14h6v4h4v2.59l1-1v-2.59l-4-4h-8v16h12v-2.59l-1-1v2.59zM9 1l3 3h-3v-3z"></path><path d="M15 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:file-search"><path d="M12 13.47v1.53h-10v-14h6v4h4v0.56c0.386 0.229 0.716 0.504 0.996 0.825l0.004-2.385-4-4h-8v16h12v-1.53zM9 1l3 3h-3v-3z"></path><path d="M14.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM10 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:file-sound"><path d="M11.4 10.5c0 1.2-0.4 2.2-1 3l0.4 0.5c0.7-0.9 1.2-2.1 1.2-3.5s-0.5-2.6-1.2-3.5l-0.4 0.5c0.6 0.8 1 1.9 1 3z"></path><path d="M9.9 8l-0.4 0.5c0.4 0.5 0.7 1.2 0.7 2s-0.3 1.5-0.7 2l0.4 0.5c0.5-0.6 0.8-1.5 0.8-2.5s-0.3-1.8-0.8-2.5z"></path><path d="M9.1 9l-0.4 0.5c0.2 0.3 0.3 0.6 0.3 1s-0.1 0.7-0.3 1l0.4 0.5c0.3-0.4 0.5-0.9 0.5-1.5s-0.2-1.1-0.5-1.5z"></path><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6 9h-2v3h2l2 2v-7z"></path></g>
<g id="vaadin:file-start"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6v6l6-3z"></path></g>
<g id="vaadin:file-table"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7v6h8v-6h-8zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM9 12h-2v-1h2v1zM9 10h-2v-1h2v1zM11 12h-1v-1h1v1zM11 10h-1v-1h1v1z"></path></g>
<g id="vaadin:file-text-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7h8v1h-8v-1z"></path><path d="M4 9h8v1h-8v-1z"></path><path d="M4 11h8v1h-8v-1z"></path></g>
<g id="vaadin:file-text"><path d="M10 0v4h4z"></path><path d="M9 0h-7v16h12v-11h-5v-5zM12 12h-8v-1h8v1zM12 10h-8v-1h8v1zM12 7v1h-8v-1h8z"></path></g>
<g id="vaadin:file-tree-small"><path d="M5 12v2h11v-5h-11v2h-2v-4h9v-5h-12v5h2v5z"></path></g>
<g id="vaadin:file-tree-sub"><path d="M8 11v1h-1v-2h5v-4h-8v1h-1v-2h6v-4h-9v4h2v3h2v2h2v3h2v2h8v-4z"></path></g>
<g id="vaadin:file-tree"><path d="M16 10v-4h-11v1h-2v-3h9v-4h-12v4h2v10h3v2h11v-4h-11v1h-2v-5h2v2z"></path></g>
<g id="vaadin:file-zip"><path d="M10 0h-8v16h12v-12l-4-4zM9 15h-4v-2.8l0.7-2.2h2.4l0.9 2.2v2.8zM13 15h-3v-3l-1-3h-2v-1h-2v1l-1 3v3h-1v-14h4v1h2v1h-2v1h2v1h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6h2v1h-2v-1z"></path><path d="M5 2h2v1h-2v-1z"></path><path d="M5 4h2v1h-2v-1z"></path><path d="M7 5h2v1h-2v-1z"></path><path d="M7 7h2v1h-2v-1z"></path><path d="M6 12h2v2h-2v-2z"></path></g>
<g id="vaadin:file"><path d="M9 5h5v11h-12v-16h7v5zM10 4v-4l4 4h-4z"></path></g>
<g id="vaadin:fill"><path d="M13 14.5c0.468-2.207 0.985-4.050 1.604-5.846 0.411 1.796 0.928 3.638 1.337 5.521 0.059 1.153-0.612 1.825-1.441 1.825s-1.5-0.672-1.5-1.5z"></path><path d="M8 1l-1.44 1.44-2-2c-0.276-0.262-0.649-0.423-1.060-0.423s-0.784 0.161-1.061 0.423c-0.27 0.271-0.438 0.645-0.438 1.059s0.168 0.789 0.439 1.060l2 2-4.44 4.44 7 7 8-8zM8 2.41l5.59 5.59h-11.18l2.75-2.75c0.071 0.042 0.156 0.067 0.247 0.067 0.271 0 0.49-0.219 0.49-0.49 0-0.091-0.025-0.176-0.068-0.249l0.721-0.718 1.54 1.53c0.091 0.091 0.216 0.147 0.355 0.147 0.277 0 0.502-0.225 0.502-0.502 0-0.139-0.056-0.264-0.147-0.355l-1.53-1.53zM3.15 1.85c-0.091-0.091-0.148-0.216-0.148-0.355s0.057-0.264 0.148-0.355c0.092-0.089 0.217-0.144 0.355-0.144s0.263 0.055 0.355 0.144l2 2-0.71 0.71z"></path></g>
<g id="vaadin:film"><path d="M0 0v16h1v-1h1v1h12v-1h1v1h1v-16h-16zM2 14h-1v-1h1v1zM2 12h-1v-1h1v1zM2 10h-1v-1h1v1zM2 8h-1v-1h1v1zM2 6h-1v-1h1v1zM2 4h-1v-1h1v1zM2 2h-1v-1h1v1zM13 15h-10v-6h10v6zM13 7h-10v-6h10v6zM15 14h-1v-1h1v1zM15 12h-1v-1h1v1zM15 10h-1v-1h1v1zM15 8h-1v-1h1v1zM15 6h-1v-1h1v1zM15 4h-1v-1h1v1zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:filter"><path d="M1 2h14v2l-6 5v7l-2-2v-5l-6-5v-2z"></path><path d="M1 0h14v1h-14v-1z"></path></g>
<g id="vaadin:fire"><path d="M4.9 15.8c0 0-3.9-0.4-3.9-5.7 0-4.1 3.1-6.5 3.1-6.5s1.3 1.4 2.3 1.9c1 0.6 1.4-5.5 1.4-5.5s7.2 3.9 7.2 9.8c0 6.1-4 5.9-4 5.9s1.8-2.4 1.8-5.2c0-3-3.9-6.7-3.9-6.7s-0.5 4.4-2.1 5c-1.6-0.9-2.5-2.3-2.5-2.3s-3.7 5.8 0.6 9.3z"></path><path d="M8.2 16.1c-2-0.1-3.7-1.4-3.7-3.2s0.7-2.6 0.7-2.6 0.5 1 1.1 1.5 1.8 0.8 2.4 0.1c0.6-0.6 0.8-2.3 0.8-2.3s1.4 1.1 1.2 3c-0.1 2-0.9 3.5-2.5 3.5z"></path></g>
<g id="vaadin:flag-checkered"><path d="M2 0c-1.1 0-2 0.9-2 2 0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2z"></path><path d="M12 2c-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8c0 0-1.6 1-4 1zM15 4.5c-0.2 0.2-0.8 0.4-2 0.6v-2.2c0.8-0.1 1.5-0.2 2-0.4v2zM5 7.9v-2.6c0.4-0.6 1.1-1.1 2-1.1v-2.1c0.2-0.1 0.4-0.1 0.6-0.1 1.2 0 1.6 0.2 2.1 0.4 0.1 0.1 0.2 0.2 0.3 0.2v2.2c0.5 0.2 1.1 0.4 2 0.4 0.4 0 0.7 0 1-0.1v2.6c-0.3 0-0.6 0.1-1 0.1-1.1 0-1.5-0.2-2-0.5v2.3c-0.7-0.3-1.5-0.6-3-0.6v-2.2c-0.9 0.2-1.5 0.6-2 1.1zM13 9.9v-2.2c1.1-0.2 1.7-0.6 2-0.8v1.8c-0.2 0.3-0.7 1-2 1.2z"></path><path d="M10 7.2v-2.4c0 0-1.2-0.6-3-0.6v2.6c1.7-0.4 3 0.4 3 0.4z"></path></g>
<g id="vaadin:flag-o"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M7.6 2c1.2 0 1.6 0.2 2.1 0.4 0.5 0.3 1.1 0.6 2.3 0.6s2.2-0.2 3-0.5v6.3c-0.2 0.3-0.9 1.2-3 1.2-0.9 0-1.3-0.2-1.9-0.4-0.7-0.3-1.5-0.6-3.1-0.6-0.8 0-1.5 0.2-2 0.5v-5.3c0.2-0.5 1-2.2 2.6-2.2zM16 1c0 0-1.6 1-4 1-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8z"></path></g>
<g id="vaadin:flag"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M4 4c0 0 1-3 3.6-3 2.7 0 2.3 1 4.4 1 2.4 0 4-1 4-1v8c0 0-0.7 2-4 2-2.2 0-2.3-1-5-1-2.3 0-3 2-3 2v-8z"></path></g>
<g id="vaadin:flash"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6z"></path></g>
<g id="vaadin:flask"><path d="M2 16h12l-4-8v-7h1v-1h-6v1h1v7l-4 8zM9 1v7.2l1.9 3.8h-5.8l1.9-3.8v-7.2h2z"></path></g>
<g id="vaadin:flight-landing"><path d="M13.64 7c-0.71-0.2-1.89-0.43-3.23-0.67l-3.82-4.24c-0.209-0.23-0.462-0.416-0.746-0.544l-1.194-0.546c-0.090 0-0.15 0-0.1 0.11s1.45 2.89 2.29 4.59c-1.84-0.29-3.5-0.53-4.23-0.63-0.258-0.047-0.474-0.198-0.608-0.406l-0.722-1.074c-0.115-0.168-0.28-0.294-0.474-0.358l-0.806-0.232 0.61 3.26c0.067 0.34 0.318 0.609 0.644 0.699 1.326 0.381 4.816 1.341 7.526 1.921 6 1.28 6.8 1.28 7.12 0.91s-0.67-2.38-2.26-2.79z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flight-takeoff"><path d="M12.57 2.26c-0.65 0.29-1.66 0.85-2.8 1.5l-5.46-0.76c-0.093-0.014-0.2-0.022-0.309-0.022-0.211 0-0.414 0.030-0.607 0.086l-1.185 0.336c-0.1 0-0.1 0.1 0 0.14l4.56 2c-1.54 0.92-2.91 1.76-3.51 2.14-0.13 0.082-0.288 0.13-0.458 0.13-0.094 0-0.184-0.015-0.268-0.042l-1.194-0.378c-0.086-0.031-0.186-0.049-0.29-0.049s-0.204 0.018-0.296 0.051l-0.754 0.308 2.52 2.1c0.152 0.127 0.349 0.205 0.565 0.205 0.129 0 0.251-0.028 0.361-0.077 1.204-0.538 4.374-1.998 6.734-3.228 5.24-2.78 5.82-3.26 5.82-3.7 0-0.69-2-1.4-3.43-0.74z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flip-h"><path d="M0 15l6-5-6-4.9z"></path><path d="M9 10.1l6 4.9v-10l-6 5.1zM14 12.9l-3.4-2.8 3.4-3v5.8z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M7 7h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M7.5 1v0c1.3 0 2.6 0.7 3.6 1.9l-1.1 1.1h3v-3l-1.2 1.2c-1.2-1.4-2.7-2.2-4.3-2.2 0 0 0 0 0 0-1.9 0-3.6 1-4.9 2.9l0.8 0.6c1.1-1.6 2.5-2.5 4.1-2.5z"></path></g>
<g id="vaadin:flip-v"><path d="M1 1l5 6 4.94-6h-9.94z"></path><path d="M5.94 10l-4.94 6h10zM3.12 15l2.83-3.44 3 3.44h-5.83z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 8.47v0c-0.059 1.485-0.782 2.789-1.879 3.632l-1.121-1.102v3h3l-1.18-1.18c1.293-1.031 2.128-2.588 2.18-4.342l0-0.008c-0.092-2.083-1.223-3.883-2.884-4.905l-0.596 0.805c1.423 0.857 2.383 2.357 2.479 4.087z"></path></g>
<g id="vaadin:folder-add"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14v-1h-13v-9h0.62l1-2h2.57l1.19 2h6.62v1h1z"></path><path d="M14 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:folder-o"><path d="M7 4l-1-2h-4l-1 2h-1v11h16v-11h-9zM15 14h-14v-9h0.6l1-2h2.6l1.2 2h8.6v9z"></path></g>
<g id="vaadin:folder-open-o"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14l2-9h-2zM14.9 7l-1.6 7-11.9-0.1 2.3-6.9h11.2zM1 5h0.6l1-2h2.6l1.2 2h6.6v1h-10l-2 5.9v-6.9z"></path></g>
<g id="vaadin:folder-open"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v9.5l3-7.5z"></path><path d="M3.7 7l-3.2 8h12.8l2.5-8z"></path></g>
<g id="vaadin:folder-remove"><path d="M13 12.41v1.59h-12v-9h0.62l1-2h2.57l1.19 2h6.62v2.59l1-1v-2.59h-7l-1-2h-4l-1 2h-1v11h14v-1.59l-1-1z"></path><path d="M16 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:folder-search"><path d="M13 13.47v0.53h-12v-9h0.62l1-2h2.57l1.19 2h6.62v0.91c0.385 0.179 0.716 0.407 1.001 0.681l-0.001-2.591h-7l-1-2h-4l-1 2h-1v11h14v-0.53z"></path><path d="M15.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM11 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:folder"><path d="M16 15h-16v-11h1l1-2h4l1 2h9z"></path></g>
<g id="vaadin:font"><path d="M12 16h3l-6-16h-2l-6 16h3l1.9-5h4.2l1.9 5zM6.7 9l1.3-3.6 1.3 3.6h-2.6z"></path></g>
<g id="vaadin:form"><path d="M15 2v2h-9v-2h9zM16 1h-11v4h11v-4z"></path><path d="M0 1h4v4h-4v-4z"></path><path d="M15 7v2h-9v-2h9zM16 6h-11v4h11v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M15 12v2h-9v-2h9zM16 11h-11v4h11v-4z"></path><path d="M0 11h4v4h-4v-4z"></path></g>
<g id="vaadin:forward"><path d="M0 1v14l8-7z"></path><path d="M8 1v14l8-7z"></path></g>
<g id="vaadin:frown-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11.3 12.3c-0.7-1.1-2-1.8-3.3-1.8s-2.6 0.7-3.3 1.8l-0.8-0.6c0.9-1.4 2.4-2.2 4.1-2.2s3.2 0.8 4.1 2.2l-0.8 0.6z"></path></g>
<g id="vaadin:function"><path d="M10 0c0 0-2.1 0-2.7 3l-0.4 2h-1.9l-0.5 1h2.2l-1.4 7c-0.4 2-1.9 2-1.9 2h-1l-0.4 1h3c0 0 2.1 0 2.7-3l1.4-7h2.4l0.5-1h-2.7l0.4-2c0.4-2 1.8-2 1.8-2h1l0.5-1h-3z"></path></g>
<g id="vaadin:funnel"><path d="M6 11h4v4h-4v-4z"></path><path d="M13.6 5l2.4-4h-16l2.4 4h11.2z"></path><path d="M3 6l2.4 4h5.2l2.4-4h-10z"></path></g>
<g id="vaadin:gamepad"><path d="M12.16 2c-1.215 0.603-2.641 0.968-4.149 1-1.53-0.032-2.956-0.397-4.229-1.026-2.611 0.026-3.781 1.196-3.781 3.866v6c0.017 1.197 0.991 2.16 2.19 2.16 0 0 0 0 0 0h0.23c0 0 0.001 0 0.002 0 0.963 0 1.78-0.621 2.074-1.485 0.305-0.915 1.145-2.515 2.085-2.515h2.84c0.94 0 1.78 1.6 2.080 2.5 0.298 0.879 1.116 1.5 2.078 1.5 0.001 0 0.001 0 0.002 0h0.23c1.21 0 2.19-0.98 2.19-2.19v-6c0-2.64-1.17-3.81-3.84-3.81zM5 7h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zM10.060 8.11c-0.585 0-1.060-0.475-1.060-1.060s0.475-1.060 1.060-1.060c0.585 0 1.060 0.475 1.060 1.060s-0.475 1.060-1.060 1.060zM13 8c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:gavel"><path d="M6.4 4.1v0c-0.4-0.4-0.4-0.9-0.1-1.2l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.5c-0.3 0.3-0.9 0.3-1.2 0z"></path><path d="M12 9.7v0c-0.4-0.4-0.4-0.9-0.1-1.3l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.6c-0.4 0.3-0.9 0.3-1.2 0z"></path><path d="M10 7.7l-1.7-1.7c-0.4-0.4-0.4-1 0-1.4l2.3-2.3c0.4-0.4 1-0.4 1.4 0l1.7 1.7c0.4 0.4 0.4 1 0 1.4l-2.3 2.3c-0.4 0.4-1 0.4-1.4 0z"></path><path d="M4 14.2c0.6-0.6 4-5.6 4.5-5.3 0.4 0.2 1-0.5 1-0.5l-1.9-1.9c0 0-0.7 0.6-0.5 1 0.3 0.5-4.7 3.9-5.3 4.5 0 0-2.8 2.2-1.4 3.6s3.6-1.4 3.6-1.4z"></path></g>
<g id="vaadin:gift"><path d="M10.1 5c2-0.3 3.9-1.1 2.2-3.6-0.7-1-1.4-1.4-2-1.4-1 0-1.7 1.1-2.3 2.2-0.6-1.1-1.3-2.2-2.3-2.2-0.6 0-1.3 0.4-2 1.4-1.8 2.5 0.2 3.3 2.2 3.6h-5.9v3h16v-3h-5.9zM10.3 1c0.1 0 0.5 0.1 1.2 1 0.5 0.7 0.6 1.1 0.5 1.3-0.2 0.3-1.3 0.7-3.3 0.8 0-0.2-0.1-0.4-0.2-0.6 0.6-1.4 1.3-2.5 1.8-2.5zM4 3.3c-0.1-0.2 0-0.6 0.5-1.3 0.7-0.9 1.1-1 1.2-1 0.5 0 1.2 1.1 1.8 2.5-0.1 0.2-0.2 0.4-0.2 0.6-2-0.1-3.1-0.5-3.3-0.8zM7 7v-2h2v2h-2z"></path><path d="M9 15h-2v-6h-6v7h14v-7h-6z"></path></g>
<g id="vaadin:glass"><path d="M11 15h-2v-8l6-7h-15l6 7v8h-2c-2 0-2 1-2 1h11c0 0 0-1-2-1zM12.9 1l-1.8 2h-7.2l-1.7-2h10.7zM7 15v-8h1v8h-1z"></path></g>
<g id="vaadin:glasses"><path d="M15.5 7h-0.5c-0.1 0-0.1 0-0.2 0-0.4-1.2-1.5-2-2.8-2s-2.4 0.9-2.8 2.1c-0.3-0.4-0.7-0.6-1.2-0.6s-0.9 0.2-1.2 0.6c-0.4-1.2-1.5-2.1-2.8-2.1s-2.4 0.9-2.8 2c-0.1 0-0.1 0-0.2 0h-0.5c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5h0.5c0 1.7 1.3 3 3 3 1.5 0 2.7-1.1 3-2.5 0 0 0 0 0 0 0.3 0 0.5-0.2 0.5-0.5s0.2-0.5 0.5-0.5 0.5 0.2 0.5 0.5c0 0.3 0.2 0.5 0.5 0.5 0 0 0 0 0 0 0.2 1.4 1.5 2.5 3 2.5 1.7 0 3-1.3 3-3h0.5c0.3 0 0.5-0.2 0.5-0.5s-0.2-0.5-0.5-0.5zM4 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM12 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"></path></g>
<g id="vaadin:globe-wire"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM14.8 9.5c0 0.5-0.7 0.66-2 1 0.124-0.589 0.206-1.277 0.229-1.98l2.001-0.020c0 0.36-0.080 0.5-0.16 1v0zM1.2 9.5v0c-0.1-0.5-0.15-0.64-0.2-1h2c0.024 0.723 0.106 1.411 0.244 2.079-1.344-0.419-2.044-0.579-2.044-1.079zM1.2 6.5c0-0.5 0.7-0.66 2-1-0.115 0.594-0.187 1.284-0.2 1.989l-2 0.011c0-0.36 0.080-0.5 0.16-1v0zM8.5 5c1.13 0.013 2.226 0.107 3.298 0.277 0.047 0.643 0.165 1.41 0.201 2.199l-3.499 0.025v-2.5zM8.5 4v-2.94c1.17 0.27 2.2 1.47 2.84 3.15-0.836-0.116-1.819-0.192-2.817-0.21zM7.5 1.060v2.94c-1.017 0.015-2.001 0.087-2.968 0.214 0.768-1.684 1.798-2.884 2.968-3.154zM7.5 5v2.5h-3.5c0.031-0.806 0.142-1.571 0.326-2.307 0.932-0.080 2.035-0.177 3.158-0.193zM4 8.5h3.5v2.5c-1.13-0.013-2.226-0.107-3.298-0.277-0.047-0.643-0.165-1.41-0.201-2.199zM7.5 12v2.94c-1.17-0.27-2.2-1.47-2.84-3.15 0.836 0.116 1.819 0.192 2.817 0.21zM8.5 14.94v-2.94c1.017-0.015 2.001-0.087 2.968-0.214-0.768 1.684-1.798 2.884-2.968 3.154zM8.5 11v-2.5h3.5c-0.031 0.806-0.142 1.571-0.326 2.307-0.932 0.080-2.035 0.177-3.158 0.193zM15 7.5h-2c-0.024-0.723-0.106-1.411-0.244-2.079 1.354 0.399 2.014 0.559 2.014 1.079v0c0.13 0.5 0.18 0.64 0.23 1zM14.3 4.91c-0.506-0.204-1.106-0.38-1.726-0.5-0.361-1.019-0.809-1.898-1.389-2.672 1.355 0.726 2.413 1.811 3.067 3.131zM4.84 1.76c-0.568 0.752-1.019 1.631-1.305 2.581-0.699 0.189-1.299 0.365-1.874 0.593 0.751-1.39 1.823-2.475 3.139-3.156zM1.73 11.090c0.506 0.204 1.106 0.38 1.726 0.5 0.361 1.019 0.809 1.898 1.389 2.672-1.367-0.722-2.436-1.807-3.097-3.131zM11.17 14.24c0.564-0.753 1.012-1.631 1.295-2.581 0.699-0.189 1.299-0.365 1.874-0.593-0.751 1.39-1.823 2.475-3.139 3.156z"></path></g>
<g id="vaadin:globe"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13.2 5.3c0.4 0 0.7 0.3 1.1 0.3-0.3 0.4-1.6 0.4-2-0.1 0.3-0.1 0.5-0.2 0.9-0.2zM1 8c0-0.4 0-0.8 0.1-1.3 0.1 0 0.2 0.1 0.3 0.1 0 0 0.1 0.1 0.1 0.2 0 0.3 0.3 0.5 0.5 0.5 0.8 0.1 1.1 0.8 1.8 1 0.2 0.1 0.1 0.3 0 0.5-0.6 0.8-0.1 1.4 0.4 1.9 0.5 0.4 0.5 0.8 0.6 1.4 0 0.7 0.1 1.5 0.4 2.2-2.5-1.2-4.2-3.6-4.2-6.5zM8 15c-0.7 0-1.5-0.1-2.1-0.3-0.1-0.2-0.1-0.4 0-0.6 0.4-0.8 0.8-1.5 1.3-2.2 0.2-0.2 0.4-0.4 0.4-0.7 0-0.2 0.1-0.5 0.2-0.7 0.3-0.5 0.2-0.8-0.2-0.9-0.8-0.2-1.2-0.9-1.8-1.2s-1.2-0.5-1.7-0.2c-0.2 0.1-0.5 0.2-0.5-0.1 0-0.4-0.5-0.7-0.4-1.1-0.1 0-0.2 0-0.3 0.1s-0.2 0.2-0.4 0.1c-0.2-0.2-0.1-0.4-0.1-0.6 0.1-0.2 0.2-0.3 0.4-0.4 0.4-0.1 0.8-0.1 1 0.4 0.3-0.9 0.9-1.4 1.5-1.8 0 0 0.8-0.7 0.9-0.7s0.2 0.2 0.4 0.3c0.2 0 0.3 0 0.3-0.2 0.1-0.5-0.2-1.1-0.6-1.2 0-0.1 0.1-0.1 0.1-0.1 0.3-0.1 0.7-0.3 0.6-0.6 0-0.4-0.4-0.6-0.8-0.6-0.2 0-0.4 0-0.6 0.1-0.4 0.2-0.9 0.4-1.5 0.4 1.1-0.8 2.5-1.2 3.9-1.2 0.3 0 0.5 0 0.8 0-0.6 0.1-1.2 0.3-1.6 0.5 0.6 0.1 0.7 0.4 0.5 0.9-0.1 0.2 0 0.4 0.2 0.5s0.4 0.1 0.5-0.1c0.2-0.3 0.6-0.4 0.9-0.5 0.4-0.1 0.7-0.3 1-0.7 0-0.1 0.1-0.1 0.2-0.2 0.6 0.2 1.2 0.6 1.8 1-0.1 0-0.1 0.1-0.2 0.1-0.2 0.2-0.5 0.3-0.2 0.7 0.1 0.2 0 0.3-0.1 0.4-0.2 0.1-0.3 0-0.4-0.1s-0.1-0.3-0.4-0.3c-0.1 0.2-0.4 0.3-0.4 0.6 0.5 0 0.4 0.4 0.5 0.7-0.6 0.1-0.8 0.4-0.5 0.9 0.1 0.2-0.1 0.3-0.2 0.4-0.4 0.6-0.8 1-0.8 1.7s0.5 1.4 1.3 1.3c0.9-0.1 0.9-0.1 1.2 0.7 0 0.1 0.1 0.2 0.1 0.3 0.1 0.2 0.2 0.4 0.1 0.6-0.3 0.8 0.1 1.4 0.4 2 0.1 0.2 0.2 0.3 0.3 0.4-1.3 1.4-3 2.2-5 2.2z"></path></g>
<g id="vaadin:golf"><path d="M7 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M9.8 1.8c-0.2-0.5-1.7-0.1-2 0.5-0.2 0.3-0.2 1.2-1.2 1.9-0.8 0.5-1.6 0.5-1.6 0.5-0.3 0.6-0.1 1.1 0.2 1.6 0.5 0.9 0.6 1.8 0.7 2.8 0.1 1.3-0.5 2.4-2.3 3.2-0.8 0.3-1.3 0.9-1 1.9 0 0 2-0.3 3.1-1.2 1.5-1.2 1.8-2.3 1.8-2.3s0.1 0.7 0 1.9c-0.1 1-0.2 1.5-0.4 2.2s0.3 1.2 0.9 1.2 1-0.4 1-1l0.3-1.9c0.3-2.1 0-4.3-0.8-6.3 0-0.1-0.1-0.1-0.1-0.2-0.6-1.6 0.2-2.6 0.6-3 0.3-0.4 1.2-1.2 0.8-1.8z"></path><path d="M12 0v10h1v-6l3-2z"></path><path d="M16 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M1 8.4l3.7-3.7-0.7-0.3-3.8 3.6c0 0-0.4 0.7 0.1 1.7s1.6 0.3 1.6 0.3c0.4-0.2 0.2-0.4 0-0.6s-0.9-1-0.9-1z"></path></g>
<g id="vaadin:google-plus-square"><path d="M5 3.4c-0.8 0-1.3 0.8-1.2 1.8 0.1 1.1 0.9 1.9 1.7 2 0.8 0 1.3-0.8 1.2-1.9-0.1-1-0.9-1.9-1.7-1.9z"></path><path d="M5.4 9.3c-1.2 0-2.3 0.7-2.3 1.6s0.9 1.7 2.1 1.7c1.7 0 2.3-0.7 2.3-1.6 0-0.1 0-0.2 0-0.3-0.1-0.5-0.6-0.8-1.3-1.2-0.2-0.2-0.5-0.2-0.8-0.2z"></path><path d="M0 0v16h16v-16h-16zM7.9 5.3c0 0.7-0.4 1.2-0.9 1.6s-0.6 0.6-0.6 0.9c0 0.3 0.5 0.8 0.8 1 0.8 0.6 1.1 1.1 1.1 2 0 1.1-1.1 2.3-3.1 2.3-1.7 0-3.2-0.7-3.2-1.8 0-1.2 1.3-2.3 3.1-2.3 0.2 0 0.4 0 0.5 0-0.2-0.3-0.4-0.6-0.4-0.9 0-0.2 0.1-0.4 0.2-0.6-0.1 0-0.2 0-0.3 0-1.4 0-2.4-1-2.4-2.3 0-1.2 1.3-2.3 2.7-2.3 0.8 0 3.1 0 3.1 0l-0.7 0.6h-1c0.7 0.2 1.1 1 1.1 1.8zM14 5.5h-2.1v2h-0.5v-2h-2v-0.5h2v-2h0.5v2h2.1v0.5z"></path></g>
<g id="vaadin:google-plus"><path d="M16 3.9h-2.8v-2.6h-0.6v2.6h-2.7v0.8h2.7v2.6h0.6v-2.6h2.8z"></path><path d="M6.9 9c-0.4-0.2-1.1-0.9-1.1-1.3s0.1-0.7 0.8-1.2c0.7-0.5 1.2-1.2 1.2-2.1 0-1.1-0.5-2.1-1.3-2.4h1.3l0.9-0.7c0 0-3.1 0-4.2 0-1.9 0-3.6 1.4-3.6 3.1s1.3 3 3.2 3c0.1 0 0.3 0 0.4 0-0.2 0.2-0.2 0.4-0.2 0.7 0 0.5 0.3 0.8 0.6 1.2-0.2 0-0.5 0-0.7 0-2.3 0-4.1 1.5-4.1 3s2 2.5 4.3 2.5c2.6 0 4.1-1.5 4.1-3-0.1-1.3-0.5-2-1.6-2.8zM4.7 6.9c-1.1 0-2.1-1.2-2.3-2.6s0.5-2.5 1.6-2.5c1.1 0 2.1 1.2 2.3 2.6s-0.5 2.6-1.6 2.5zM4.3 14.1c-1.6 0-2.8-1-2.8-2.2s1.4-2.2 3-2.2c0.4 0 0.7 0.1 1 0.2 0.9 0.6 1.5 0.9 1.7 1.6 0 0.1 0.1 0.3 0.1 0.4 0 1.2-0.8 2.2-3 2.2z"></path></g>
<g id="vaadin:grab"><path d="M12.6 4c-0.2 0-0.4 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.5-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.8 0-1.2 0.5-1.4 1-0.1 0-0.3-0.1-0.5-0.1-0.5 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.5v0.4c-0.6 0-1.1 0.2-1.4 0.5-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.5 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM10.5 3.8c0.4 0 0.5 0.4 0.5 0.6v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0 0 0-0.4 0.4-0.3 0.6 0.2 0.7 1.1 0.7 1.3 0 0 0 0 0 0v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.7-1.1-1.1-1.1-2.1 0-0.2 0-0.3 0-0.6 0-1 0-1.8 0.3-2.1 0.1-0.2 0.4-0.3 0.7-0.3v0.8l-0.3 1.2c0 0.1 0 0.1 0.1 0.1 0.1 0.1 0.2 0 0.2 0l1-1.2c0 0 0-0.1 0-0.1v-2c0-0.1 0-0.6 0.2-0.8 0.1-0.1 0.2-0.2 0.4-0.2 0.3 0 0.4 0.2 0.4 0.4v0.4c0 0.2 0.2 0.5 0.5 0.5s0.5-0.3 0.5-0.5v-1.3c0-0.1 0-0.5 0.5-0.5 0.3 0 0.5 0.2 0.5 0.5v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.5c0-0.3 0.2-0.5 0.5-0.5z"></path></g>
<g id="vaadin:grid-bevel"><path d="M14 2v-1h-13v13h1v1h13v-13h-1zM5 13h-3v-3h3v3zM5 9h-3v-3h3v3zM5 5h-3v-3h3v3zM9 13h-3v-3h3v3zM9 9h-3v-3h3v3zM9 5h-3v-3h3v3zM13 13h-3v-3h3v3zM13 9h-3v-3h3v3zM13 5h-3v-3h3v3z"></path></g>
<g id="vaadin:grid-big-o"><path d="M0 7h7v-7h-7v7zM1 1h5v5h-5v-5z"></path><path d="M9 0v7h7v-7h-7zM15 6h-5v-5h5v5z"></path><path d="M0 16h7v-7h-7v7zM1 10h5v5h-5v-5z"></path><path d="M9 16h7v-7h-7v7zM10 10h5v5h-5v-5z"></path></g>
<g id="vaadin:grid-big"><path d="M0 0h7v7h-7v-7z"></path><path d="M9 0h7v7h-7v-7z"></path><path d="M0 9h7v7h-7v-7z"></path><path d="M9 9h7v7h-7v-7z"></path></g>
<g id="vaadin:grid-h"><path d="M0 0v16h16v-16h-16zM5 15h-4v-14h4v14zM10 15h-4v-14h4v14zM15 15h-4v-14h4v14z"></path></g>
<g id="vaadin:grid-small-o"><path d="M0 4h4v-4h-4v4zM1 1h2v2h-2v-2z"></path><path d="M0 10h4v-4h-4v4zM1 7h2v2h-2v-2z"></path><path d="M0 16h4v-4h-4v4zM1 13h2v2h-2v-2z"></path><path d="M6 4h4v-4h-4v4zM7 1h2v2h-2v-2z"></path><path d="M6 10h4v-4h-4v4zM7 7h2v2h-2v-2z"></path><path d="M6 16h4v-4h-4v4zM7 13h2v2h-2v-2z"></path><path d="M12 0v4h4v-4h-4zM15 3h-2v-2h2v2z"></path><path d="M12 10h4v-4h-4v4zM13 7h2v2h-2v-2z"></path><path d="M12 16h4v-4h-4v4zM13 13h2v2h-2v-2z"></path></g>
<g id="vaadin:grid-small"><path d="M0 0h4v4h-4v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M0 12h4v4h-4v-4z"></path><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M12 0h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path><path d="M12 12h4v4h-4v-4z"></path></g>
<g id="vaadin:grid-v"><path d="M16 0h-16v16h16v-16zM1 5v-4h14v4h-14zM1 10v-4h14v4h-14zM1 15v-4h14v4h-14z"></path></g>
<g id="vaadin:grid"><path d="M0 0v16h16v-16h-16zM5 15h-4v-4h4v4zM5 10h-4v-4h4v4zM5 5h-4v-4h4v4zM10 15h-4v-4h4v4zM10 10h-4v-4h4v4zM10 5h-4v-4h4v4zM15 15h-4v-4h4v4zM15 10h-4v-4h4v4zM15 5h-4v-4h4v4z"></path></g>
<g id="vaadin:group"><path d="M5 16v-5.3c-0.6-0.3-1-1-1-1.7v-4c0-0.7 0.4-1.3 1-1.7 0-0.1 0-0.2 0-0.3 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 1.1 0.9 2 2 2h-2c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v5h4z"></path><path d="M15 5h-2c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.1 0 0.2 0 0.3 0.6 0.4 1 1 1 1.7v4c0 0.7-0.4 1.4-1 1.7v5.3h4v-5c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 4h-4c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v6h4v-6c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path></g>
<g id="vaadin:hammer"><path d="M6 2l7 7 3-3-4.48-4.48s-2.97 1.030-4.52-0.52z"></path><path d="M8.8 5.79l-8.53 8.52c-0.165 0.178-0.267 0.417-0.267 0.68s0.101 0.502 0.267 0.681c0.181 0.183 0.433 0.297 0.711 0.297 0.253 0 0.484-0.094 0.66-0.248l8.569-8.519z"></path></g>
<g id="vaadin:hand"><path d="M13.5 2.4c-0.4-0.4-1-0.5-1.5-0.3 0-0.3-0.1-0.6-0.4-0.9-0.2-0.2-0.6-0.4-1.1-0.4-0.3 0-0.5 0.1-0.7 0.1 0-0.2-0.1-0.3-0.2-0.5-0.5-0.6-1.5-0.6-2 0-0.2 0.2-0.4 0.4-0.4 0.6-0.2 0-0.4-0.1-0.6-0.1-0.5 0-0.8 0.2-1.1 0.5-0.5 0.5-0.5 1.3-0.5 1.3v3.8c-0.3-0.3-0.8-0.8-1.5-0.8-0.2 0-0.5 0.1-0.7 0.2-0.4 0.2-0.6 0.5-0.7 0.9-0.3 1 0.6 2.4 0.6 2.5 0.1 0.1 1.2 2.7 2.2 3.8 1 1.2 2.1 1.9 4.9 1.9 2.9 0 4.2-1.6 4.2-5.1v-5.5c0-0.1 0.1-1.3-0.5-2zM8 2c0-0.3-0.1-1 0.5-1 0.5 0 0.5 0.5 0.5 1v4c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-3.8c0 0 0-0.4 0.5-0.4 0.6 0 0.5 0.9 0.5 0.9v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-2.4c0-0.1 0-0.6 0.5-0.6s0.5 1 0.5 1v5.9c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.5-4.1-1.6-0.9-1-2.1-3.6-2.1-3.7-0.3-0.3-0.7-1.2-0.6-1.6 0-0.1 0.1-0.2 0.2-0.3 0.1 0 0.2-0.1 0.2-0.1 0.4 0 0.8 0.5 0.9 0.7l0.6 0.9c0.1 0.2 0.4 0.3 0.6 0.2 0.4 0 0.5-0.2 0.5-0.4v-5.2c0-0.4 0-1 0.5-1 0.4 0 0.5 0.3 0.5 0.8v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5z"></path></g>
<g id="vaadin:handle-corner"><path d="M6.7 16l9.3-9.3v-1.4l-10.7 10.7z"></path><path d="M9.7 16l6.3-6.3v-1.4l-7.7 7.7z"></path><path d="M12.7 16l3.3-3.3v-1.4l-4.7 4.7z"></path><path d="M15.7 16l0.3-0.3v-1.4l-1.7 1.7z"></path></g>
<g id="vaadin:hands-up"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M6 16h1.5v-5h1v5h1.5v-9c-0-0.016-0.001-0.034-0.001-0.052 0-0.521 0.194-0.997 0.513-1.36l3.278-3.318c0.216-0.129 0.358-0.362 0.358-0.628 0-0.403-0.327-0.73-0.73-0.73-0.266 0-0.499 0.142-0.626 0.355l-2.362 2.383c-0.212 0.216-0.508 0.35-0.835 0.35-0.002 0-0.004 0-0.006-0h-3.18c-0.002 0-0.004 0-0.005 0-0.327 0-0.622-0.134-0.834-0.35l-2.32-2.39c-0.129-0.216-0.362-0.358-0.628-0.358-0.403 0-0.73 0.327-0.73 0.73 0 0.266 0.142 0.499 0.355 0.626l3.243 3.332c0.317 0.361 0.511 0.836 0.511 1.358 0 0.018-0 0.037-0.001 0.055l0 8.997z"></path></g>
<g id="vaadin:handshake"><path d="M13 3c-0.538 0.515-1.185 0.92-1.902 1.178-0.748 0.132-2.818-0.828-3.838 0.152-0.17 0.17-0.38 0.34-0.6 0.51-0.48-0.21-1.22-0.53-1.76-0.84s-1.9-1-1.9-1l-3 3.5s0.74 1 1.2 1.66c0.3 0.44 0.67 1.11 0.91 1.56l-0.34 0.4c-0.058 0.115-0.093 0.25-0.093 0.393 0 0.235 0.092 0.449 0.243 0.607 0.138 0.103 0.311 0.165 0.5 0.165s0.362-0.062 0.502-0.167c-0.094 0.109-0.149 0.249-0.149 0.402 0 0.193 0.088 0.365 0.226 0.479 0.144 0.085 0.317 0.135 0.501 0.135s0.357-0.050 0.505-0.137c-0.112 0.139-0.177 0.313-0.177 0.503s0.065 0.364 0.174 0.502c0.099 0.035 0.214 0.056 0.334 0.056 0.207 0 0.399-0.063 0.558-0.17-0.043 0.095-0.065 0.203-0.065 0.317 0 0.234 0.096 0.445 0.252 0.595 0.13 0.059 0.283 0.093 0.443 0.093 0.226 0 0.437-0.068 0.611-0.185l0.516-0.467c0.472 0.47 1.123 0.761 1.842 0.761 0.020 0 0.041-0 0.061-0.001 0.494-0.042 0.908-0.356 1.094-0.791 0.146 0.056 0.312 0.094 0.488 0.094 0.236 0 0.455-0.068 0.64-0.185 0.585-0.387 0.445-0.687 0.445-0.687 0.125 0.055 0.27 0.087 0.423 0.087 0.321 0 0.61-0.142 0.806-0.366 0.176-0.181 0.283-0.427 0.283-0.697 0-0.19-0.053-0.367-0.145-0.518 0.008 0.005 0.015 0.005 0.021 0.005 0.421 0 0.787-0.232 0.978-0.574 0.068-0.171 0.105-0.363 0.105-0.563 0-0.342-0.11-0.659-0.296-0.917l0.003 0.005c0.82-0.16 0.79-0.57 1.19-1.17 0.384-0.494 0.852-0.902 1.387-1.208zM12.95 10.060c-0.44 0.44-0.78 0.25-1.53-0.32s-2.24-1.64-2.24-1.64c0.061 0.305 0.202 0.57 0.401 0.781 0.319 0.359 1.269 1.179 1.719 1.599 0.28 0.26 1 0.78 0.58 1.18s-0.75 0-1.44-0.56-2.23-1.94-2.23-1.94c-0.001 0.018-0.002 0.038-0.002 0.059 0 0.258 0.104 0.491 0.272 0.661 0.17 0.2 1.12 1.12 1.52 1.54s0.75 0.67 0.41 1-1.030-0.19-1.41-0.58c-0.59-0.57-1.76-1.63-1.76-1.63-0.001 0.016-0.001 0.034-0.001 0.053 0 0.284 0.098 0.544 0.263 0.75 0.288 0.378 0.848 0.868 1.188 1.248s0.54 0.7 0 1-1.34-0.44-1.69-0.8c0-0.001 0-0.001 0-0.002 0-0.103-0.038-0.197-0.1-0.269-0.159-0.147-0.374-0.238-0.609-0.238-0.104 0-0.204 0.018-0.297 0.050 0.128-0.114 0.204-0.274 0.204-0.452s-0.076-0.338-0.198-0.45c-0.126-0.095-0.284-0.152-0.455-0.152s-0.33 0.057-0.457 0.153c0.117-0.113 0.189-0.268 0.189-0.441 0-0.213-0.109-0.4-0.274-0.509-0.153-0.097-0.336-0.153-0.532-0.153-0.244 0-0.468 0.088-0.642 0.233 0.095-0.114 0.151-0.26 0.151-0.42 0-0.195-0.085-0.37-0.219-0.491-0.178-0.165-0.417-0.266-0.679-0.266-0.185 0-0.358 0.050-0.507 0.138l-0.665-1.123c-0.46-0.73-1-1.49-1-1.49l2.28-2.77s0.81 0.5 1.48 0.88c0.33 0.19 0.9 0.44 1.33 0.64-0.68 0.51-1.25 1-1.080 1.34 0.297 0.214 0.668 0.343 1.069 0.343 0.376 0 0.726-0.113 1.018-0.307 0.373-0.251 0.84-0.403 1.343-0.403 0.347 0 0.677 0.072 0.976 0.203 0.554 0.374 1.574 1.294 2.504 1.874v0c1.17 0.85 1.4 1.4 1.12 1.68z"></path></g>
<g id="vaadin:harddrive-o"><path d="M2 12h1v1h-1v-1z"></path><path d="M4 12h3v1h-3v-1z"></path><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM3.7 2h8.6l2.7 8h-13.9l2.6-8zM1 14v-3h14v3h-14z"></path></g>
<g id="vaadin:harddrive"><path d="M13 1h-10l-2.7 8h15.4z"></path><path d="M0 10v5h16v-5h-16zM3 13h-1v-1h1v1zM7 13h-3v-1h3v1z"></path></g>
<g id="vaadin:hash"><path d="M15 6v-2h-2.6l0.6-2.8-2-0.4-0.7 3.2h-3l0.7-2.8-2-0.4-0.7 3.2h-3.3v2h2.9l-0.9 4h-3v2h2.6l-0.6 2.8 2 0.4 0.7-3.2h3l-0.7 2.8 2 0.4 0.7-3.2h3.3v-2h-2.9l0.9-4h3zM9 10h-3l1-4h3l-1 4z"></path></g>
<g id="vaadin:header"><path d="M11 0v7h-6v-7h-3v16h3v-7h6v7h3v-16z"></path></g>
<g id="vaadin:headphones"><path d="M14 8.3v-2.3c0-3.3-2.7-6-6-6s-6 2.7-6 6v2.3c-1.2 0.5-2 1.7-2 3.1v1.2c0 1.8 1.3 3.2 3 3.4h2v-8h-1v-2c0-2.2 1.8-4 4-4s4 1.8 4 4v2h-1v8h2c1.7-0.2 3-1.7 3-3.4v-1.2c0-1.4-0.8-2.6-2-3.1zM4 15h-1v-6h1v6zM13 15h-1v-6h1v6z"></path></g>
<g id="vaadin:headset"><path d="M14.82 8c-0.309-0.851-0.969-1.511-1.799-1.813l-0.021-1.687c0-2.5-2.47-4.5-5.5-4.5s-5.5 2-5.5 4.5v1.68c-1.173 0.423-1.996 1.525-2 2.82v1c0 1.657 1.343 3 3 3h1v-7h-1v-1.5c0-1.93 2-3.5 4.5-3.5s4.5 1.57 4.5 3.5v1.5h-1v7h1c1.657 0 3-1.343 3-3v1.73c0 1.806-1.464 3.27-3.27 3.27h-1.73c0-0.552-0.448-1-1-1h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.73c2.358 0 4.27-1.912 4.27-4.27v-3.73h-1.18z"></path></g>
<g id="vaadin:health-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M9 5h5v1h-5v-1z"></path><path d="M9 7h5v1h-5v-1z"></path><path d="M9 9h2v1h-2v-1z"></path><path d="M6.5 5c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path></g>
<g id="vaadin:heart-o"><path d="M11.7 2c-0.9 0-2.7 0.5-3.7 2.1-1-1.6-2.8-2.1-3.8-2.1-2.3 0-4.2 1.9-4.2 4.2 0 4 7.4 8.5 7.7 8.7l0.3 0.2 0.3-0.2c0.3-0.2 7.7-4.8 7.7-8.7 0-2.3-1.9-4.2-4.3-4.2zM8 13.9c-2.2-1.4-7-5-7-7.7 0-1.8 1.5-3.2 3.2-3.2 0.1 0 2.5 0.1 3.3 2.4l0.5 1.4 0.5-1.4c0.8-2.3 3.2-2.4 3.3-2.4 1.7 0 3.2 1.4 3.2 3.2 0 2.7-4.8 6.3-7 7.7z"></path></g>
<g id="vaadin:heart"><path d="M12 2c0 0-3 0-4 3-1-3-4-3-4-3-2.2 0-4 1.8-4 4 0 4.1 8 9 8 9s8-5 8-9c0-2.2-1.8-4-4-4z"></path></g>
<g id="vaadin:home-o"><path d="M16 6.6l-8-5.2-2 1.3v-1.7h-2v3l-4 2.6 1.9 2.7 0.1-0.1v5.8h5v-4h2v4h5v-5.8l0.1 0.1 1.9-2.7zM1.4 6.9l6.6-4.3 6.6 4.3-0.7 1-5.9-3.9-5.9 3.9-0.7-1zM13 14h-3v-4h-4v4h-3v-5.4l5-3.3 5 3.3v5.4z"></path></g>
<g id="vaadin:home"><path d="M8 1.4l-2 1.3v-1.7h-2v3l-4 2.6 0.6 0.8 7.4-4.8 7.4 4.8 0.6-0.8z"></path><path d="M8 4l-6 4v7h5v-3h2v3h5v-7z"></path></g>
<g id="vaadin:hospital"><path d="M15 4v-4h-7v4h-8v12h6v-3h4v3h6v-12h-1zM4 11h-2v-2h2v2zM4 8h-2v-2h2v2zM7 11h-2v-2h2v2zM7 8h-2v-2h2v2zM10 3v-1h1v-1h1v1h1v1h-1v1h-1v-1h-1zM11 11h-2v-2h2v2zM11 8h-2v-2h2v2zM14 11h-2v-2h2v2zM14 8h-2v-2h2v2z"></path></g>
<g id="vaadin:hourglass-empty"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-end"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1s-1.62-3.5-3-3.5-3 3.5-3 3.5h-1v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-start"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.573-0.385 0.984-0.939 1.17-1.589l-5.995-0.020c0.191 0.67 0.603 1.225 1.15 1.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.23-0.199 0.426-0.395 0.609-0.602l-4.874-0.007c0.19 0.214 0.386 0.41 0.593 0.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1.77c-0.7-0.87-1.71-2-2.23-2s-1.53 1.13-2.23 2h-1.77v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:inbox"><path d="M10 6v-6h-4v6h-2l4 5 4-5z"></path><path d="M13 1h-2v1h1.3l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h1.3v-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:indent"><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 4.5v6l4-3z"></path></g>
<g id="vaadin:info-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6h2v7h-2v-7z"></path><path d="M7 3h2v2h-2v-2z"></path></g>
<g id="vaadin:info-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-7h2v7zM9 5h-2v-2h2v2z"></path></g>
<g id="vaadin:info"><path d="M6 5h4v11h-4v-11z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:input"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:insert"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 1.4l-1.4-1.4-6.8 6.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:institution"><path d="M8 0l-8 3v2h16v-2z"></path><path d="M0 14h16v2h-16v-2z"></path><path d="M16 7v-1h-16v1h1v5h-1v1h16v-1h-1v-5h1zM4 12h-1v-5h1v5zM7 12h-1v-5h1v5zM10 12h-1v-5h1v5zM13 12h-1v-5h1v5z"></path></g>
<g id="vaadin:invoice"><path d="M4.4 10.2c-0.6 0.1-1.4-0.3-1.7-0.4l-0.5 0.9c0 0 0.9 0.4 1.7 0.5v0.8h1v-0.9c0.9-0.3 1.4-1.1 1.5-1.8 0-0.8-0.6-1.4-1.9-1.9-0.4-0.2-1.1-0.5-1.1-0.9 0-0.5 0.4-0.8 1-0.8 0.7 0 1.4 0.3 1.4 0.3l0.4-0.9c0 0-0.5-0.2-1.2-0.4v-0.7h-1v0.7c-0.9 0.2-1.5 0.8-1.6 1.7 0 1.2 1.3 1.7 1.8 1.9 0.6 0.2 1.3 0.6 1.3 0.9 0 0.4-0.4 0.9-1.1 1z"></path><path d="M0 2v12h16v-12h-16zM15 13h-14v-10h14v10z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path></g>
<g id="vaadin:italic"><path d="M8 0h3l-3 16h-3z"></path></g>
<g id="vaadin:key-o"><path d="M13 0l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.3 0-0.6-0.1-0.9l1.1-1.1v-2h2v-2h2l1-1v-4h-3zM12 6h-1.7l1.7-1.4v1.4zM15 3.6l-0.4 0.4h-1.9l2.3-2v1.6zM7.3 7.6l0.7 0.4 2-1.7v2.3l-0.8 0.8-0.3 0.4 0.1 0.5c0 0.2 0.1 0.5 0.1 0.7 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c0.3 0 0.5 0 0.8 0.1l0.5 0.1 0.4-0.3 6.6-5.9h1.6l-7.7 6.6z"></path><path d="M6 11.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:key"><path d="M8.1 7c-0.2-0.1-0.4-0.2-0.6-0.3l7.5-6.7h-2l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.6-0.1-1.2-0.3-1.7l1.3-1.3v-2h2v-2h2l1-1v-3l-7.9 7zM4 13.2c-0.7 0-1.2-0.6-1.2-1.2s0.6-1.2 1.2-1.2 1.2 0.6 1.2 1.2-0.5 1.2-1.2 1.2z"></path></g>
<g id="vaadin:keyboard-o"><path d="M15 5v7h-14v-7h14zM16 4h-16v9h16v-9z"></path><path d="M4 10h8v1h-8v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M11 8h1v1h-1v-1z"></path><path d="M9 8h1v1h-1v-1z"></path><path d="M7 8h1v1h-1v-1z"></path><path d="M5 8h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M12 6v1h1v2h1v-3z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path></g>
<g id="vaadin:keyboard"><path d="M0 4v9h16v-9h-16zM10 6h1v1h-1v-1zM8 6h1v1h-1v-1zM10 8v1h-1v-1h1zM6 6h1v1h-1v-1zM8 8v1h-1v-1h1zM4 6h1v1h-1v-1zM6 8v1h-1v-1h1zM2 6h1v1h-1v-1zM3 11h-1v-1h1v1zM3 8h1v1h-1v-1zM12 11h-8v-1h8v1zM12 9h-1v-1h1v1zM14 11h-1v-1h1v1zM14 9h-1v-2h-1v-1h2v3z"></path></g>
<g id="vaadin:laptop"><path d="M14 11v-9h-12v9h-2v2h16v-2h-2zM10 12h-4v-1h4v1zM13 10h-10v-7h10v7z"></path></g>
<g id="vaadin:layout"><path d="M0 0v16h16v-16h-16zM1 3h4v12h-4v-12zM15 15h-9v-12h9v12z"></path></g>
<g id="vaadin:level-down-bold"><path d="M9 16l4-7h-3v-9h-7l2 3h2v6h-3z"></path></g>
<g id="vaadin:level-down"><path d="M5 1h6v11h2l-3 3-3-3h2v-9h-6z"></path></g>
<g id="vaadin:level-left-bold"><path d="M0 7l7-4v3h9v7l-3-2v-2h-6v3z"></path></g>
<g id="vaadin:level-left"><path d="M15 12v-6h-11v-2l-3 3 3 3v-2h9v6z"></path></g>
<g id="vaadin:level-right-bold"><path d="M16 7l-7-4v3h-9v7l3-2v-2h6v3z"></path></g>
<g id="vaadin:level-right"><path d="M1 12v-6h11v-2l3 3-3 3v-2h-9v6z"></path></g>
<g id="vaadin:level-up-bold"><path d="M9 0l4 7h-3v9h-7l2-3h2v-6h-3z"></path></g>
<g id="vaadin:level-up"><path d="M11 15h-6v-11h-2l3-3 3 3h-2v9h6z"></path></g>
<g id="vaadin:lifebuoy"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM4 8c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-1.8 4-4 4s-4-1.8-4-4zM12.6 9.8c0.3-0.5 0.4-1.2 0.4-1.8s-0.1-1.3-0.4-1.8l1.5-1.5c0.6 1 0.9 2.1 0.9 3.3s-0.3 2.3-0.8 3.3l-1.6-1.5zM11.3 1.8l-1.5 1.6c-0.5-0.3-1.2-0.4-1.8-0.4s-1.3 0.1-1.8 0.4l-1.5-1.6c1-0.5 2.1-0.8 3.3-0.8s2.3 0.3 3.3 0.8zM1.8 4.7l1.5 1.5c-0.2 0.5-0.3 1.2-0.3 1.8s0.1 1.3 0.4 1.8l-1.5 1.5c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3 0.8-3.3zM4.7 14.2l1.5-1.5c0.5 0.2 1.2 0.3 1.8 0.3s1.3-0.1 1.8-0.4l1.5 1.5c-1 0.6-2.1 0.9-3.3 0.9s-2.3-0.3-3.3-0.8z"></path></g>
<g id="vaadin:lightbulb"><path d="M8 0c-2.761 0-5 2.239-5 5 0.013 1.672 0.878 3.138 2.182 3.989l0.818 2.011c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.41c0.342 0.55 0.915 0.929 1.581 0.999 0.684-0.071 1.258-0.449 1.594-0.99l0.415-0.009c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5l0.8-2c1.322-0.862 2.187-2.328 2.2-3.998 0-2.763-2.239-5.002-5-5.002zM10.25 8.21l-0.25 0.17-0.11 0.29-0.89 2.14c-0.042 0.111-0.147 0.189-0.27 0.19h-1.51c-0.103-0.020-0.186-0.093-0.219-0.188l-0.871-2.142-0.13-0.29-0.25-0.18c-1.045-0.7-1.729-1.868-1.75-3.197-0-2.212 1.791-4.003 4-4.003s4 1.791 4 4c-0.017 1.336-0.702 2.509-1.736 3.201z"></path><path d="M10.29 3c-0.574-0.612-1.387-0.995-2.289-1l-0.001 1c0.585 0.002 1.115 0.238 1.5 0.62 0.278 0.386 0.459 0.858 0.499 1.37l1.001 0.009c-0.045-0.756-0.305-1.443-0.718-2.011z"></path></g>
<g id="vaadin:line-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M16 0.070l-5.68 4.97-5.47-1.7-4.85 3.76v1.9l5.15-4 5.53 1.72 5.32-4.66v-1.99z"></path></g>
<g id="vaadin:line-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M9 8l-3-3-4 4v2l4-4 3 3 7-7v-2z"></path></g>
<g id="vaadin:line-h"><path d="M0 7h16v1h-16v-1z"></path></g>
<g id="vaadin:line-v"><path d="M8 0h1v16h-1v-16z"></path></g>
<g id="vaadin:lines-list"><path d="M0 1h3v2h-3v-2z"></path><path d="M0 5h3v2h-3v-2z"></path><path d="M0 9h3v2h-3v-2z"></path><path d="M0 13h3v2h-3v-2z"></path><path d="M4 1h12v2h-12v-2z"></path><path d="M4 5h12v2h-12v-2z"></path><path d="M4 9h12v2h-12v-2z"></path><path d="M4 13h12v2h-12v-2z"></path></g>
<g id="vaadin:lines"><path d="M0 1h16v2h-16v-2z"></path><path d="M0 5h16v2h-16v-2z"></path><path d="M0 9h16v2h-16v-2z"></path><path d="M0 13h16v2h-16v-2z"></path></g>
<g id="vaadin:link"><path d="M14.9 1.1c-1.4-1.4-3.7-1.4-5.1 0l-4.4 4.3c-1.4 1.5-1.4 3.7 0 5.2 0.1 0.1 0.3 0.2 0.4 0.3l1.5-1.5c-0.1-0.1-0.3-0.2-0.4-0.3-0.6-0.6-0.6-1.6 0-2.2l4.4-4.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-1.3 1.3c0.4 0.8 0.5 1.7 0.4 2.5l2.3-2.3c1.5-1.4 1.5-3.7 0-5.1z"></path><path d="M10.2 5.1l-1.5 1.5c0 0 0.3 0.2 0.4 0.3 0.6 0.6 0.6 1.6 0 2.2l-4.4 4.4c-0.6 0.6-1.6 0.6-2.2 0s-0.6-1.6 0-2.2l1.3-1.3c-0.4-0.8-0.1-1.3-0.4-2.5l-2.3 2.3c-1.4 1.4-1.4 3.7 0 5.1s3.7 1.4 5.1 0l4.4-4.4c1.4-1.4 1.4-3.7 0-5.1-0.2-0.1-0.4-0.3-0.4-0.3z"></path></g>
<g id="vaadin:list-ol"><path d="M4 0h12v4h-12v-4z"></path><path d="M4 6h12v4h-12v-4z"></path><path d="M4 12h12v4h-12v-4z"></path><path d="M1 0l-0.9 0.5 0.2 0.7 0.7-0.3v3.1h1v-4z"></path><path d="M2.2 13.9c0.3-0.2 0.5-0.5 0.5-0.8 0-0.5-0.4-1-1.3-1-0.5 0-1 0.1-1.2 0.3h-0.1l0.2 0.8 0.1-0.1c0.1-0.1 0.4-0.2 0.7-0.2s0.4 0.1 0.4 0.3c0 0.4-0.5 0.4-0.6 0.4h-0.4v0.7h0.4c0.3 0 0.6 0.1 0.6 0.4 0 0.2-0.2 0.4-0.6 0.4s-0.7-0.2-0.8-0.2l-0.1-0.1v0.9h0.1c0.2 0.2 0.6 0.3 1.1 0.3 1 0 1.6-0.5 1.6-1.2 0-0.4-0.2-0.8-0.6-0.9z"></path><path d="M0.1 6.4l0.3 1c0 0 0.7-0.6 1.2-0.3 1.1 0.8-1.6 2.4-1.6 2.4v0.5h3v-1h-1.2c0.6-0.5 1.2-1.2 1-1.9-0.5-1.9-2.7-0.7-2.7-0.7z"></path></g>
<g id="vaadin:list-select"><path d="M1 0h12v2h-12v-2z"></path><path d="M1 8h13v2h-13v-2z"></path><path d="M1 11h11v2h-11v-2z"></path><path d="M1 14h14v2h-14v-2z"></path><path d="M0 3v4h16v-4h-16zM11 6h-10v-2h10v2z"></path></g>
<g id="vaadin:list-ul"><path d="M0 1h3v3h-3v-3z"></path><path d="M0 6h3v3h-3v-3z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:list"><path d="M0 0h4v3h-4v-3z"></path><path d="M0 4h4v3h-4v-3z"></path><path d="M0 12h4v3h-4v-3z"></path><path d="M0 8h4v3h-4v-3z"></path><path d="M5 0h11v3h-11v-3z"></path><path d="M5 4h11v3h-11v-3z"></path><path d="M5 12h11v3h-11v-3z"></path><path d="M5 8h11v3h-11v-3z"></path></g>
<g id="vaadin:location-arrow-circle-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M2 9l10-5-5 10v-5z"></path></g>
<g id="vaadin:location-arrow-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 14v-5h-5l10-5-5 10z"></path></g>
<g id="vaadin:location-arrow"><path d="M0 9l16-9-9 16v-7z"></path></g>
<g id="vaadin:lock"><path d="M12 8v-3.1c0-2.2-1.6-3.9-3.8-3.9h-0.3c-2.1 0-3.9 1.7-3.9 3.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-1zM9 14h-1v-2c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1v3zM10 8h-4v-3.1c0-1.1 0.9-1.9 1.9-1.9h0.3c1 0 1.8 0.8 1.8 1.9v3.1z"></path></g>
<g id="vaadin:magic"><path d="M0 5h3v1h-3v-1z"></path><path d="M5 0h1v3h-1v-3z"></path><path d="M6 11h-1v-2.5l1 1z"></path><path d="M11 6h-1.5l-1-1h2.5z"></path><path d="M3.131 7.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M10.131 0.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M0.836 0.199l3.465 3.465-0.707 0.707-3.465-3.465 0.707-0.707z"></path><path d="M6.1 4.1l-2.1 2 9.8 9.9 2.2-2.1-9.9-9.8zM6.1 5.5l2.4 2.5-0.6 0.6-2.5-2.5 0.7-0.6z"></path></g>
<g id="vaadin:magnet"><path d="M11 0h5v4h-5v-4z"></path><path d="M11 5v3c0 1.6-1.4 3-3 3s-3-1.4-3-3v-3h-5v3c0 4.4 3.6 8 8 8s8-3.6 8-8v-3h-5z"></path><path d="M0 0h5v4h-5v-4z"></path></g>
<g id="vaadin:mailbox"><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM11 10v2h-6v-2h-3.9l2.7-8h8.6l2.7 8h-4.1z"></path></g>
<g id="vaadin:male"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 7.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v9.47h1.5v-5h1v5h1.5v-9.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:map-marker"><path d="M8 0c-2.8 0-5 2.2-5 5s4 11 5 11c1 0 5-8.2 5-11s-2.2-5-5-5zM8 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path></g>
<g id="vaadin:margin-bottom"><path d="M0 0v14h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-13h-16zM15 12h-14v-11h14v11z"></path><path d="M0 15h1v1h-1v-1z"></path><path d="M1 14h1v1h-1v-1z"></path><path d="M2 15h1v1h-1v-1z"></path><path d="M3 14h1v1h-1v-1z"></path><path d="M4 15h1v1h-1v-1z"></path><path d="M5 14h1v1h-1v-1z"></path><path d="M6 15h1v1h-1v-1z"></path><path d="M7 14h1v1h-1v-1z"></path><path d="M8 15h1v1h-1v-1z"></path><path d="M9 14h1v1h-1v-1z"></path><path d="M10 15h1v1h-1v-1z"></path><path d="M11 14h1v1h-1v-1z"></path><path d="M12 15h1v1h-1v-1z"></path><path d="M13 14h1v1h-1v-1z"></path><path d="M14 15h1v1h-1v-1z"></path><path d="M15 14h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-left"><path d="M2 0v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h13v-16h-14zM15 15h-11v-14h11v14z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-right"><path d="M14 2v-1h-1v-1h-13v16h14v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1zM12 15h-11v-14h11v14z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-top"><path d="M15 2v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v13h16v-14h-1zM15 15h-14v-11h14v11z"></path><path d="M15 0h1v1h-1v-1z"></path><path d="M14 1h1v1h-1v-1z"></path><path d="M13 0h1v1h-1v-1z"></path><path d="M12 1h1v1h-1v-1z"></path><path d="M11 0h1v1h-1v-1z"></path><path d="M10 1h1v1h-1v-1z"></path><path d="M9 0h1v1h-1v-1z"></path><path d="M8 1h1v1h-1v-1z"></path><path d="M7 0h1v1h-1v-1z"></path><path d="M6 1h1v1h-1v-1z"></path><path d="M5 0h1v1h-1v-1z"></path><path d="M4 1h1v1h-1v-1z"></path><path d="M3 0h1v1h-1v-1z"></path><path d="M2 1h1v1h-1v-1z"></path><path d="M1 0h1v1h-1v-1z"></path><path d="M0 1h1v1h-1v-1z"></path></g>
<g id="vaadin:margin"><path d="M0 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M13 2h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1zM12 12h-8v-8h8v8z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path></g>
<g id="vaadin:medal"><path d="M10 12.2c-0.3 0-0.5-0.1-0.8-0.2l-1.2-0.5-1.2 0.5c-0.2 0.1-0.5 0.2-0.8 0.2-0.2 0-0.3 0-0.5-0.1l-0.5 3.9 3-2 3 2-0.6-3.9c-0.1 0.1-0.3 0.1-0.4 0.1z"></path><path d="M12.9 5.9c-0.1-0.2-0.1-0.5 0-0.7l0.6-1.2c0.2-0.4 0-0.9-0.5-1.1l-1.3-0.5c-0.2-0.1-0.4-0.3-0.5-0.5l-0.5-1.3c-0.1-0.4-0.4-0.6-0.7-0.6-0.1 0-0.3 0-0.4 0.1l-1.3 0.6c-0.1 0-0.2 0-0.3 0s-0.2 0-0.3-0.1l-1.3-0.5c-0.1-0.1-0.3-0.1-0.4-0.1-0.3 0-0.6 0.2-0.8 0.5l-0.5 1.4c0 0.2-0.2 0.4-0.4 0.5l-1.4 0.5c-0.4 0.1-0.6 0.6-0.4 1.1l0.6 1.3c0.1 0.2 0.1 0.5 0 0.7l-0.6 1.2c-0.2 0.4 0 0.9 0.5 1.1l1.3 0.5c0.2 0.1 0.4 0.3 0.5 0.5l0.5 1.3c0.1 0.4 0.4 0.6 0.7 0.6 0.1 0 0.2 0 0.3-0.1l1.3-0.6c0.1 0 0.2-0.1 0.3-0.1s0.2 0 0.3 0.1l1.3 0.6c0.1 0.1 0.2 0.1 0.3 0.1 0.3 0 0.6-0.2 0.8-0.5l0.5-1.3c0.1-0.2 0.3-0.4 0.5-0.5l1.3-0.5c0.4-0.2 0.7-0.7 0.5-1.1l-0.5-1.4zM8 9.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4c0 2.2-1.8 4-4 4z"></path><path d="M11 5.6c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path></g>
<g id="vaadin:megaphone"><path d="M15.5 5.4l-0.5-0.4v-4c0-0.6-0.4-1-1-1s-1 0.4-1 1v0.5c-2 0.9-5 2.5-8 2.5h-2.5c-1.4 0-2.5 1.2-2.5 2.5 0 0.9 0.5 1.7 1.2 2.1l1.1 5.9c0 0.3 0.3 0.5 0.7 0.5 0.1 0 0.1 0 0.2 0l3.6-0.7c0.4-0.1 0.6-0.4 0.5-0.7-0.3-0.6-0.8-1.5-1.2-1.8-0.2-0.1-0.5-0.9-0.7-1.8h0.6v-0.9c2.7 0.3 6 1.6 7 2.4v0.5c0 0.6 0.4 1 1 1s1-0.4 1-1v-4l0.4-0.3c0.4-0.3 0.6-0.7 0.6-1.1v-0.2c0-0.4-0.2-0.7-0.5-1zM2 5h3v1h-3v-1zM5.6 12.6c0.1 0 0.3 0.3 0.5 0.7l-2.8 0.7-1-5h1.9c0.2 1.3 0.6 3.2 1.4 3.6zM13 10.3c-1.6-0.8-4.4-2-7-2.3v-3c2.6-0.3 5.4-1.4 7-2.3v7.6z"></path></g>
<g id="vaadin:meh-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M4 10h8v1h-8v-1z"></path></g>
<g id="vaadin:menu"><path d="M0 1h16v3h-16v-3z"></path><path d="M0 6h16v3h-16v-3z"></path><path d="M0 11h16v3h-16v-3z"></path></g>
<g id="vaadin:microphone"><path d="M8 10v0c-1.7 0-3-1.3-3-3v-4c0-1.6 1.3-3 3-3v0c1.6 0 3 1.3 3 3v4c0 1.6-1.4 3-3 3z"></path><path d="M12 5v2.5c0 1.9-1.8 3.5-3.8 3.5h-0.4c-2 0-3.8-1.6-3.8-3.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 2.2 1.8 4.1 4 4.4v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.6-0.4-1-1-1z"></path></g>
<g id="vaadin:minus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M3 7h10v2h-10v-2z"></path></g>
<g id="vaadin:minus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-10v-2h10v2z"></path></g>
<g id="vaadin:minus-square-o"><path d="M4 7h8v2h-8v-2z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:minus"><path d="M2 7h12v2h-12v-2z"></path></g>
<g id="vaadin:mobile-browser"><path d="M16 0h-13v5h-3v11h7v-3h9v-13zM6 1h9v1h-9v-1zM4 1h1v1h-1v-1zM4 15h-1v-1h1v1zM6 13h-5v-7h5v7zM15 12h-8v-7h-3v-2h11v9z"></path></g>
<g id="vaadin:mobile-retro"><path d="M11 0h-1v2h-6v14h7v-16zM6 14h-1v-1h1v1zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM8 14h-1v-1h1v1zM8 12h-1v-1h1v1zM8 10h-1v-1h1v1zM10 14h-1v-1h1v1zM10 12h-1v-1h1v1zM10 10h-1v-1h1v1zM10 8h-5v-4h5v4z"></path></g>
<g id="vaadin:mobile"><path d="M4 1v14h8v-14h-8zM9 14h-2v-1h2v1zM11 12h-6v-9h6v9z"></path></g>
<g id="vaadin:modal-list"><path d="M3 6h2v1h-2v-1z"></path><path d="M6 6h7v1h-7v-1z"></path><path d="M3 8h2v1h-2v-1z"></path><path d="M6 8h7v1h-7v-1z"></path><path d="M3 10h2v1h-2v-1z"></path><path d="M6 10h7v1h-7v-1z"></path><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:modal"><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:money-deposit"><path d="M8 16l-2-3h1v-2h2v2h1l-2 3z"></path><path d="M15 1v8h-14v-8h14zM16 0h-16v10h16v-10z"></path><path d="M8 2c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 5c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money-exchange"><path d="M16 14l-3 2v-1h-4.75l2-2h2.75v-1l3 2z"></path><path d="M0 2l3-2v1h4.75l-2 2h-2.75v1l-3-2z"></path><path d="M9.74 0l-9.74 9.74 6.26 6.26 9.74-9.74zM1.39 9.74l8.35-8.35 4.87 4.87-8.35 8.35z"></path><path d="M4.17 9.74l-0.7 0.7 2.090 2.090 0.7-0.7 0.74 0.69 2.74-2.78c-0.445 0.445-1.060 0.721-1.74 0.721-1.359 0-2.461-1.102-2.461-2.461 0-0.68 0.275-1.295 0.721-1.74l-2.78 2.74z"></path><path d="M12.52 5.57l-2.090-2.090-0.7 0.7-0.73-0.7-2.74 2.78c0.445-0.445 1.060-0.721 1.74-0.721 1.359 0 2.461 1.102 2.461 2.461 0 0.68-0.275 1.295-0.721 1.74l2.78-2.74-0.7-0.7z"></path></g>
<g id="vaadin:money-withdraw"><path d="M8 0l2 3h-1v2h-2v-2h-1l2-3z"></path><path d="M15 7v8h-14v-8h14zM16 6h-16v10h16v-10z"></path><path d="M8 8c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 11c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money"><path d="M15 4v8h-14v-8h14zM16 3h-16v10h16v-10z"></path><path d="M8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 8c0-1.7 1.3-3 3-3h-5v1h-1v4h1v1h5c-1.7 0-3-1.3-3-3z"></path></g>
<g id="vaadin:moon-o"><path d="M13.2 11.9c-4.5 0-8.1-3.6-8.1-8.1 0-1.4 0.3-2.7 0.9-3.8-3.4 0.9-6 4.1-6 7.9 0 4.5 3.6 8.1 8.1 8.1 3.1 0 5.8-1.8 7.2-4.4-0.6 0.2-1.3 0.3-2.1 0.3zM8.1 15c-3.9 0-7.1-3.2-7.1-7.1 0-2.5 1.3-4.7 3.3-6-0.2 0.6-0.2 1.2-0.2 1.9 0 5 4.1 9.1 9.1 9.2-1.4 1.2-3.2 2-5.1 2z"></path></g>
<g id="vaadin:moon"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 15c-3.9 0-7-3.1-7-7 0-2.4 1.2-4.6 3.2-5.9-0.1 0.6-0.2 1.3-0.2 1.9 0 4.9 4 8.9 8.9 9-1.3 1.3-3 2-4.9 2z"></path></g>
<g id="vaadin:morning"><path d="M14 10l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 10c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:movie"><path d="M12 7v-3h-12v9h12v-3l4 2v-7l-4 2zM9 11h-7v-5h7v5z"></path><path d="M5 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:music"><path d="M4 3v9.4c-0.4-0.2-0.9-0.4-1.5-0.4-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-7.3l7-2.3v5.1c-0.4-0.3-0.9-0.5-1.5-0.5-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-11l-9 3z"></path></g>
<g id="vaadin:mute"><path d="M15.2 0l-4.2 4.2v-1.2c0-1.7-1.3-3-3-3s-3 1.3-3 3v4c0 0.9 0.4 1.7 1 2.2l-0.8 0.8c-0.7-0.6-1.2-1.5-1.2-2.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 1.3 0.6 2.4 1.5 3.2l-4.5 4.6v0.7h0.7l15.3-15.4v-0.6h-0.8z"></path><path d="M12.5 5.1l-0.5 0.5v1.9c0 1.9-1.8 3.5-3.8 3.5h-0.4c-0.3 0-0.6-0.1-0.9-0.1l-0.9 0.7c0.3 0.1 0.6 0.2 1 0.3v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.4-0.2-0.7-0.5-0.9z"></path><path d="M11 7v-0.4l-3.3 3.4c0.1 0 0.2 0 0.3 0 1.7 0 3-1.4 3-3z"></path></g>
<g id="vaadin:native-button"><path d="M15 12h-14c-0.6 0-1-0.4-1-1v-6c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v6c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:newspaper"><path d="M2 4h11v4h-11v-4z"></path><path d="M2 2h11v1h-11v-1z"></path><path d="M8 13h3v1h-3v-1z"></path><path d="M8 11h5v1h-5v-1z"></path><path d="M8 9h5v1h-5v-1z"></path><path d="M2 13h5v1h-5v-1z"></path><path d="M2 11h5v1h-5v-1z"></path><path d="M2 9h5v1h-5v-1z"></path><path d="M15 2v-2h-15v14.5c0 0.828 0.672 1.5 1.5 1.5h13c0.828 0 1.5-0.672 1.5-1.5v-12.5h-1zM1.5 15c-0.276 0-0.5-0.224-0.5-0.5v-13.5h13v12.5c0 1.5 1 1.5 1 1.5h-13.5z"></path></g>
<g id="vaadin:notebook"><path d="M2 0v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v2h12v-15.88h-12zM3.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM12 6h-6v-3h6v3z"></path></g>
<g id="vaadin:nurse"><path d="M15.2 12c-0.658-1.414-2.067-2.376-3.701-2.376-0.077 0-0.154 0.002-0.23 0.006l-3.269 3.9-3.28-3.9c-0.049-0.002-0.106-0.003-0.163-0.003-1.648 0-3.072 0.958-3.746 2.348-0.422 0.9-0.707 1.917-0.808 2.988l1.997 0.037v1h12v-1h2c-0.104-1.107-0.388-2.124-0.824-3.057z"></path><path d="M6.57 8.73c-0.038 0.374-0.322 0.671-0.685 0.729l2.115 2.541 2.12-2.52c-0.368-0.059-0.652-0.356-0.69-0.727-0-0.613 0.8-0.413 1.43-1.453 0-0.030 2.88-7.3-2.86-7.3s-2.86 7.27-2.86 7.27c0.63 1.050 1.44 0.85 1.43 1.46z"></path></g>
<g id="vaadin:office"><path d="M14 15v-11h-3v-3h-9v14h-2v1h7v-3h2v3h7v-1h-2zM6 11h-2v-2h2v2zM6 8h-2v-2h2v2zM6 5h-2v-2h2v2zM9 11h-2v-2h2v2zM9 8h-2v-2h2v2zM9 5h-2v-2h2v2zM13 11h-2v-2h2v2zM13 8h-2v-2h2v2z"></path></g>
<g id="vaadin:open-book"><path d="M15 4.7v-0.7c-1.159-1.163-2.734-1.91-4.484-1.999-0.112-0.012-0.222-0.018-0.334-0.018-0.874 0-1.657 0.394-2.179 1.013-0.556-0.617-1.357-1.007-2.249-1.007-0.090 0-0.178 0.004-0.266 0.012-1.754 0.089-3.33 0.836-4.488 1.999l-0 0.7-1 0.3v10l6.7-1.4 0.3 0.4h2l0.3-0.4 6.7 1.4v-10zM5.48 11.31c-1.275 0.037-2.467 0.358-3.526 0.902l0.046-7.792c0.885-0.835 2.066-1.365 3.369-1.42 0.806 0.054 1.534 0.303 2.159 0.701l-0.019 7.869c-0.555-0.166-1.193-0.262-1.854-0.262-0.062 0-0.124 0.001-0.185 0.003zM14 12.19c-1.013-0.522-2.205-0.843-3.468-0.88-0.056-0.001-0.108-0.002-0.161-0.002-0.66 0-1.297 0.096-1.899 0.274l0.047-7.902c0.601-0.381 1.322-0.627 2.096-0.679 1.324 0.055 2.501 0.586 3.386 1.422l-0.003 7.768z"></path></g>
<g id="vaadin:option-a"><path d="M12.5 10h-1.5v-4h1.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5c-1.381 0-2.5 1.119-2.5 2.5v1.5h-4v-1.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 1.381 1.119 2.5 2.5 2.5h1.5v4h-1.5c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5v-1.5h4v1.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM11 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5h-1.5v-1.5zM5 12.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5h1.5v1.5zM5 5h-1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5v1.5zM10 10h-4v-4h4v4zM12.5 14c-0.828 0-1.5-0.672-1.5-1.5v-1.5h1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:option"><path d="M4 11c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h-1c-0.552 0-1 0.448-1 1z"></path><path d="M0 0v16h16v-16h-16zM11 9c1.105 0 2 0.895 2 2s-0.895 2-2 2c-1.105 0-2-0.895-2-2v-1h-2v1c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2h1v-2h-1c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2v1h2v-1c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2h-1v2h1z"></path><path d="M12 5c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h1c0.552 0 1-0.448 1-1z"></path><path d="M5 4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v-1c0-0.552-0.448-1-1-1z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 11c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.552-0.448-1-1-1h-1v1z"></path></g>
<g id="vaadin:options"><path d="M5 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M3.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM3.5 6c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M3.5 8c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM3.5 14c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M8 2h8v3h-8v-3z"></path><path d="M8 10h8v3h-8v-3z"></path></g>
<g id="vaadin:orientation"><path d="M11 2.1c2 0 3 1.3 3 2.9h-1l1.5 2 1.5-2h-1c0-2.2-2-3.9-4-3.9v-1.1l-2 1.5 2 1.5v-0.9z"></path><path d="M9 9h6v6h-7v-15h-8v16h16v-8h-7v1zM7 8h-1v1h1v6h-6v-14h6v7z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path></g>
<g id="vaadin:out"><path d="M3.5 8c0.3 0 0.5 0.2 0.5 0.5v2c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-2c0-0.3 0.2-0.5 0.5-0.5v0zM3.5 7v0c-0.8 0-1.5 0.7-1.5 1.5v2c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-2c0-0.8-0.7-1.5-1.5-1.5v0z"></path><path d="M8 7v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-1v3.5c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-3.5h-1z"></path><path d="M13 7h-3v1h1v4h1v-4h1z"></path><path d="M15 6v-1h-2.4l-3.7-3c0.1-0.2 0.1-0.3 0.1-0.5 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.2 0 0.3 0.1 0.5l-3.7 3h-2.4v9h1v1h15v-9h-1zM6.7 2.8c0.3 0.1 0.5 0.2 0.8 0.2s0.5-0.1 0.8-0.2l2.7 2.2h-7l2.7-2.2zM14 13h-13v-7h13v7z"></path></g>
<g id="vaadin:outbox"><path d="M6 5v6h4v-6h2l-4-5-4 5z"></path><path d="M13 2h-2l0.9 1h0.4l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h0.4l0.9-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:package"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM8 1l2.1 0.5-5.9 1.9-2.3-0.8 6.1-1.6zM8 14.9l-7-3.5v-8.1l3 1v3.4l1 0.3v-3.3l3 1v9.2zM8.5 4.8l-2.7-0.9 6.2-1.9 2.4 0.6-5.9 2.2z"></path></g>
<g id="vaadin:padding-bottom"><path d="M16 16v-16h-16v16h16zM1 13h1v-1h-1v-11h14v12h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-left"><path d="M0 16h16v-16h-16v16zM3 1v1h1v-1h11v14h-12v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-right"><path d="M16 0h-16v16h16v-16zM13 15v-1h-1v1h-11v-14h12v1h1v-1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-top"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v11h-14v-12h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M13 4h1v1h-1v-1z"></path><path d="M12 7h1v1h-1v-1z"></path><path d="M13 6h1v1h-1v-1z"></path><path d="M12 9h1v1h-1v-1z"></path><path d="M13 8h1v1h-1v-1z"></path><path d="M12 11h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M3 4h1v1h-1v-1z"></path><path d="M2 5h1v1h-1v-1z"></path><path d="M3 6h1v1h-1v-1z"></path><path d="M2 7h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M2 9h1v1h-1v-1z"></path><path d="M3 10h1v1h-1v-1z"></path><path d="M2 11h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 11h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path></g>
<g id="vaadin:paint-roll"><path d="M16 6.9v-4.9h-2v-2h-13v1h-1v3h1v1h13v-2h1v3.1l-8 1v1.9h-1v0.9c0 0 0.5 0 0.5 0.9s-0.5 0.6-0.5 1.5v2.8c0 0 0 0.9 1.5 0.9s1.5-0.9 1.5-0.9v-2.8c0-0.9-0.5-0.7-0.5-1.5s0.5-0.9 0.5-0.9v-0.9h-1v-1.1l8-1z"></path></g>
<g id="vaadin:paintbrush"><path d="M5.6 11.6l-1.2-1.2c-0.8-0.2-2-0.1-2.7 1-0.8 1.1-0.3 2.8-1.7 4.6 0 0 3.5 0 4.8-1.3 1.2-1.2 1.2-2.2 1-3l-0.2-0.1z"></path><path d="M5.8 8.1c-0.2 0.3-0.5 0.7-0.7 1 0 0.2-0.1 0.3-0.2 0.4l1.5 1.5c0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.7-0.4 1-0.7 0.4 0 0.6-0.2 0.8-0.4l-2.2-2.2c-0.2 0.2-0.4 0.4-0.6 0.7z"></path><path d="M15.8 0.2c-0.3-0.3-0.7-0.3-1-0.1 0 0-3 2.5-5.9 5.1-0.4 0.4-0.7 0.7-1.1 1-0.2 0.2-0.4 0.4-0.6 0.5l2.1 2.1c0.2-0.2 0.4-0.4 0.5-0.7 0.3-0.4 0.6-0.7 0.9-1.1 2.5-3 5.1-5.9 5.1-5.9 0.3-0.2 0.3-0.6 0-0.9z"></path></g>
<g id="vaadin:palette"><path d="M8.25 0c-6.38 0-9.11 7.38-8.010 9.92 0.82 1.89 2.62 0.080 3.34 1 1.88 2.46-2.11 3.81 0.090 4.68 2.59 1.060 12.33 0.4 12.33-8.53 0-2.69-1.34-7.070-7.75-7.070zM4.47 9c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM6 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5c-0.011 0-0.021-0-0.032-0-0.814-0.017-1.468-0.682-1.468-1.5 0-0 0-0 0-0zM8.47 14c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 11c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 6c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0z"></path></g>
<g id="vaadin:panel"><path d="M0 0v16h16v-16h-16zM13 15h-12v-12h12v12zM15 15h-1v-1h1v1zM15 13h-1v-8h1v8zM15 4h-1v-1h1v1z"></path></g>
<g id="vaadin:paperclip"><path d="M2.7 15.3c-0.7 0-1.4-0.3-1.9-0.8-0.9-0.9-1.2-2.5 0-3.7l8.9-8.9c1.4-1.4 3.8-1.4 5.2 0s1.4 3.8 0 5.2l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c1-1 1-2.7 0-3.7s-2.7-1-3.7 0l-8.9 8.9c-0.8 0.8-0.6 1.7 0 2.2 0.6 0.6 1.5 0.8 2.2 0l8.9-8.9c0.2-0.2 0.2-0.5 0-0.7s-0.5-0.2-0.7 0l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-8.9 8.9c-0.6 0.4-1.3 0.7-1.9 0.7z"></path></g>
<g id="vaadin:paperplane-o"><path d="M16 0l-16 8 4.7 1.6 0.3 5.4 2.5-2.8 2.5 3.8 6-16zM7.5 10.4l4.3-5.9-6.2 4.3-3-1 11.6-5.8-4.5 11.8-2.2-3.4z"></path></g>
<g id="vaadin:paperplane"><path d="M0 8l4.9 1.4h0.1v-0.1l7.1-5.3-1.1 1.2-6.2 6.6 0.2 3.2 2.9-3.2 2.1 4.2 6-16z"></path></g>
<g id="vaadin:paragraph"><path d="M5.5 0c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h2.5v7h2v-14h1v14h2v-14h2v-2h-9.5z"></path></g>
<g id="vaadin:password"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M6 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:paste"><path d="M13 4h-3v-4h-10v14h6v2h10v-9l-3-3zM3 1h4v1h-4v-1zM15 15h-8v-10h5v3h3v7zM13 7v-2l2 2h-2z"></path></g>
<g id="vaadin:pause"><path d="M0 1h7v14h-7v-14z"></path><path d="M9 1h7v14h-7v-14z"></path></g>
<g id="vaadin:pencil"><path d="M1 11.9l-1 4.1 4.1-1 9.2-9.2-3.1-3.1-9.2 9.2zM1.5 15l-0.4-0.5 0.4-2 2 2-2 0.5zM10.9 4.4l-8.1 8-0.6-0.6 8.1-8 0.6 0.6z"></path><path d="M15.3 0.7c-1.1-1.1-2.6-0.5-2.6-0.5l-1.5 1.5 3.1 3.1 1.5-1.5c0-0.1 0.6-1.5-0.5-2.6zM13.4 1.6l-0.5-0.5c0.6-0.6 1.1-0.1 1.1-0.1l-0.6 0.6z"></path></g>
<g id="vaadin:phone-landline"><path d="M15.88 3.86l-0.61-1.31c-0.155-0.326-0.443-0.568-0.792-0.658-1.938-0.528-4.161-0.851-6.453-0.891-2.342 0.041-4.565 0.363-6.687 0.934-0.165 0.048-0.453 0.29-0.605 0.609l-0.613 1.317c-0.075 0.152-0.119 0.331-0.12 0.52v0.87c-0.001 0.012-0.001 0.026-0.001 0.041 0 0.392 0.318 0.71 0.71 0.71 0.011 0 0.022-0 0.033-0.001l2.518 0c0.412-0.010 0.742-0.346 0.742-0.76 0-0.018-0.001-0.035-0.002-0.053l0-0.838c-0-0.004-0-0.008-0-0.012 0-0.229 0.119-0.43 0.298-0.546 0.947-0.508 2.069-0.806 3.26-0.806 0.156 0 0.31 0.005 0.464 0.015 0.122-0.011 0.288-0.017 0.456-0.017 1.178 0 2.287 0.291 3.261 0.805 0.143 0.099 0.262 0.3 0.262 0.529 0 0.004-0 0.009-0 0.013l0 0.859c-0.001 0.015-0.002 0.033-0.002 0.050 0 0.413 0.33 0.75 0.741 0.76l2.521 0c0.009 0 0.020 0.001 0.031 0.001 0.392 0 0.71-0.318 0.71-0.71 0-0.014-0-0.029-0.001-0.043l0-0.868c-0.001-0.189-0.045-0.368-0.123-0.527z"></path><path d="M12 8.3c-0.624-0.797-1.001-1.815-1.001-2.92 0-0.028 0-0.056 0.001-0.084l-0-0.296h-1v1h-4v-1h-1v0.33c0 0.024 0.001 0.052 0.001 0.080 0 1.105-0.377 2.122-1.009 2.93l-2.992 3.66v3h14v-3zM8 13c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.657 0 3 1.343 3 3s-1.343 3-3 3z"></path><path d="M10 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:phone"><path d="M12.2 10c-1.1-0.1-1.7 1.4-2.5 1.8-1.3 0.7-3.7-1.8-3.7-1.8s-2.5-2.4-1.9-3.7c0.5-0.8 2-1.4 1.9-2.5-0.1-1-2.3-4.6-3.4-3.6-2.4 2.2-2.6 3.1-2.6 4.9-0.1 3.1 3.9 7 3.9 7 0.4 0.4 3.9 4 7 3.9 1.8 0 2.7-0.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"></path></g>
<g id="vaadin:picture"><path d="M16 14h-16v-12h16v12zM1 13h14v-10h-14v10z"></path><path d="M2 10v2h12v-1c0 0 0.2-1.7-2-2-1.9-0.3-2.2 0.6-3.8 0.6-1.1 0-0.9-1.6-3.2-1.6-1.7 0-3 2-3 2z"></path><path d="M13 6c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:pie-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M5 0c-2.761 0-5 2.239-5 5s2.239 5 5 5c2.761 0 5-2.239 5-5s-2.239-5-5-5zM5 9c-2.209 0-4-1.791-4-4s1.791-4 4-4v4h4c0 2.209-1.791 4-4 4z"></path></g>
<g id="vaadin:pie-chart"><path d="M9 1c3.2 0.2 5.7 2.8 6 6h-6v-6zM8.5 0c-0.2 0-0.3 0-0.5 0v8h8c0-0.2 0-0.3 0-0.5 0-4.1-3.4-7.5-7.5-7.5v0z"></path><path d="M7 9v-8c-3.9 0.3-7 3.5-7 7.5 0 4.1 3.4 7.5 7.5 7.5 4 0 7.2-3.1 7.5-7h-8z"></path></g>
<g id="vaadin:piggy-bank-coin"><path d="M15.93 7.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.411h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 7.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 7c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 9.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.001s0-0.13 0-0.13 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 9.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path><path d="M8 3h-1v-0.17h0.25v-1.090h-0.25l0.55-0.55h0.2v1.64h0.25v0.17z"></path><path d="M7.5 0.75c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5zM7.5 0c-1.243 0-2.25 1.007-2.25 2.25s1.007 2.25 2.25 2.25c1.243 0 2.25-1.007 2.25-2.25s-1.007-2.25-2.25-2.25v0z"></path></g>
<g id="vaadin:piggy-bank"><path d="M15.93 5.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.41h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 5.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 5c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 7.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.011s0-0.14 0-0.14 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 7.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path></g>
<g id="vaadin:pill"><path d="M14.8 1.4l-0.2-0.2c-0.7-0.8-1.8-1.2-2.8-1.2s-2.1 0.4-2.9 1.2l-7.7 7.7c-1.6 1.6-1.6 4.1 0 5.7l0.2 0.2c0.7 0.8 1.8 1.2 2.8 1.2s2.1-0.4 2.9-1.2l7.8-7.8c1.5-1.5 1.5-4.1-0.1-5.6zM14.1 6.4l-3.9 3.9-3.5-3.6-3.8 3.8c-1.1 1.1-1.1 2.5-1 3.5v0c-1.2-1.2-1.2-3.1 0-4.3l7.8-7.8c0.5-0.6 1.3-0.9 2.1-0.9s1.6 0.3 2.2 0.9l0.2 0.2c0.5 0.5 0.8 1.3 0.8 2.1s-0.3 1.6-0.9 2.2z"></path></g>
<g id="vaadin:pills"><path d="M3.5 8l6.3-6.3c0.4-0.4 1-0.7 1.7-0.7s1.3 0.3 1.8 0.7c1 1 1 2.6 0 3.5l-2.8 2.8h1.4l2-2c1.4-1.4 1.4-3.6 0-4.9-0.7-0.7-1.6-1-2.5-1s-1.7 0.2-2.4 0.9l-6.3 6.4c-0.3 0.2-0.5 0.5-0.7 0.9 0.5-0.2 1-0.3 1.5-0.3z"></path><path d="M7.3 5.6l-2.4 2.4h4.7z"></path><path d="M12.5 9h-9c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5h9c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5zM12.5 15h-4.5v-4h-4.5c-1.1 0-2 0.6-2.5 1.2 0.2-1.2 1.2-2.2 2.5-2.2h9c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:pin-post"><path d="M15 4v-1h-6c0-1.69 1-2 1-2v-1h-5v1s1 0.31 1 2h-6v12h2v1h14v-12h-1zM14 14h-13v-10h4v1h2v2h1v-2h2v-1h4v10z"></path></g>
<g id="vaadin:pin"><path d="M11 6.5v-5.5h1v-1h-8v1h1v5.5c0 0-2 1.5-2 3.5 0 0.5 1.9 0.7 4 0.7v2.2c0 0.7 0.2 1.4 0.5 2.1l0.5 1 0.5-1c0.3-0.6 0.5-1.3 0.5-2.1v-2.2c2.1 0 4-0.3 4-0.7 0-2-2-3.5-2-3.5zM7 6.6c0 0-0.5 0.3-1.6 1.4-1 1-1.5 1.9-1.5 1.9s0.1-1 0.8-1.9c0.9-1.1 1.3-1.4 1.3-1.4v-5.6h1v5.6z"></path></g>
<g id="vaadin:play-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6 4v8l6-4z"></path></g>
<g id="vaadin:play-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 12v-8l6 4-6 4z"></path></g>
<g id="vaadin:play"><path d="M2 1v14l12-7z"></path></g>
<g id="vaadin:plug"><path d="M14.7 3.1c-0.4-0.4-1-0.4-1.4 0l-2.8 2.8-1.5-1.4 2.8-2.8c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-2.8 2.8-1.4-1.4-1.4 1.4 0.7 0.7-1.4 1.4c-1.4 1.4-1.5 3.5-0.5 5.1-1.7 1.5-2.6 3.8-2.6 5.7h2c0-1.3 0.4-3.2 2.1-4.4 1.5 0.8 3.4 0.5 4.6-0.7l1.4-1.4 0.7 0.7 1.4-1.4-1.4-1.4 2.8-2.8c0.5-0.5 0.5-1.1 0.1-1.5z"></path></g>
<g id="vaadin:plus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M13 7h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></path></g>
<g id="vaadin:plus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"></path></g>
<g id="vaadin:plus-minus"><path d="M10 7h6v2h-6v-2z"></path><path d="M4 5h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M6 2l3 12h1l-3-12z"></path></g>
<g id="vaadin:plus-square-o"><path d="M12 7h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:plus"><path d="M14 7h-5v-5h-2v5h-5v2h5v5h2v-5h5v-2z"></path></g>
<g id="vaadin:pointer"><path d="M12.6 5c-0.2 0-0.5 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.6-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.2 0-0.4 0-0.5 0.1v-1.7c0-0.6-0.4-1.4-1.4-1.4-0.4 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.4v4.3c-0.6 0.1-1.1 0.3-1.4 0.6-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.4 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM13 7.4v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.8-1.1-1.2-1.1-2.2 0-0.2 0-0.5 0-0.7 0-1 0-1.7 0.3-2.1 0.1-0.1 0.4-0.2 0.7-0.2v0.5l-0.3 1.5c0 0.1 0 0.1 0.1 0.2s0.2 0 0.2 0l1-1.2c0-0.1 0-0.2 0-0.2v-6.2c0-0.1 0-0.5 0.2-0.7 0.1 0 0.2-0.1 0.4-0.1 0.3 0 0.4 0.3 0.4 0.4v3.1c0 0 0 0 0 0v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-1.3c0 0 0 0 0 0 0-0.1 0.1-0.5 0.5-0.5 0.3 0 0.5 0.1 0.5 0.4v1.3c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.7c0-0.1 0.1-0.3 0.5-0.3 0.2 0 0.3 0.1 0.3 0.1 0.2 0.1 0.2 0.4 0.2 0.4v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0-0.1 0.1-0.2 0.2-0.3 0 0 0.1 0 0.2 0 0.6 0.2 0.7 1.2 0.7 1.5 0-0.1 0-0.1 0 0z"></path></g>
<g id="vaadin:power-off"><path d="M10 2.3v3.3c1.2 0.7 2 2 2 3.4 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.5 0.8-2.8 2-3.4v-3.3c-2.9 0.9-5 3.5-5 6.7 0 3.9 3.1 7 7 7s7-3.1 7-7c0-3.2-2.1-5.8-5-6.7z"></path><path d="M7 1h2v7h-2v-7z"></path></g>
<g id="vaadin:presentation"><path d="M16 1h-7v-1h-2v1h-7v11h5l-2 4h2.2l2-4h1.5l2 4h2.3l-2-4h5v-11zM15 11h-14v-9h14v9z"></path><path d="M6 4v5l4-2.5z"></path></g>
<g id="vaadin:print"><path d="M0 10v4h2v2h12v-2h2v-4h-16zM13 15h-10v-3h10v3z"></path><path d="M12 6v-4l-2.7-2h-5.3v6h-4v3h16v-3h-4zM9 1l1.3 1h-1.3v-1zM11 7h-6v-6h3v2h3v4zM15 8h-1v-1h1v1z"></path></g>
<g id="vaadin:progressbar"><path d="M0 5v6h16v-6h-16zM15 10h-14v-4h14v4z"></path><path d="M2 7h7v2h-7v-2z"></path></g>
<g id="vaadin:puzzle-piece"><path d="M14.9 0.9c-1.1-1-2.5-1.3-3.1-0.4-0.7 1.1 0.5 1.7-0.3 2.5-0.5 0.6-2-0.8-2-0.8l-0.8-0.8-1.4 1.4c-0.6 0.7-2.1 1.5-2.6 1.1-0.7-0.6 0.1-1.8-0.5-2.6-0.7-1-2.1-0.8-3 0.3-1 1.1-1.4 2.4-0.5 3 1.1 0.7 1.9-0.3 2.7 0.5 0.4 0.4-0.2 1.7-0.5 2.1l-2.3 2.3 6.5 6.5 1.7-1.7c0.7-0.7 1.5-2 1.1-2.4-0.6-0.7-1.7 0.1-2.5-0.4-1-0.7-0.8-2 0.3-3s2.5-1.3 3.1-0.4c0.7 1.1-0.4 1.8 0.4 2.6 0.4 0.4 1.6-0.2 2-0.6l2.1-2.1-1.1-1.1c-0.6-0.6-1.9-2-1.4-2.5 0.6-0.7 1.7 0.2 2.5-0.4 0.9-0.8 0.6-2.1-0.4-3.1z"></path></g>
<g id="vaadin:pyramid-chart"><path d="M10.29 5l-2.29-4-2.29 4h4.58z"></path><path d="M2.29 11l-2.29 4h16l-2.29-4h-11.42z"></path><path d="M13.14 10l-2.28-4h-5.72l-2.28 4h10.28z"></path></g>
<g id="vaadin:qrcode"><path d="M6 0h-6v6h6v-6zM5 5h-4v-4h4v4z"></path><path d="M2 2h2v2h-2v-2z"></path><path d="M0 16h6v-6h-6v6zM1 11h4v4h-4v-4z"></path><path d="M2 12h2v2h-2v-2z"></path><path d="M10 0v6h6v-6h-6zM15 5h-4v-4h4v4z"></path><path d="M12 2h2v2h-2v-2z"></path><path d="M2 7h-2v2h3v-1h-1z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M3 7h2v1h-2v-1z"></path><path d="M9 12h-2v1h1v1h1v-1z"></path><path d="M6 7v1h-1v1h2v-2z"></path><path d="M8 4h1v2h-1v-2z"></path><path d="M9 8v1h2v-2h-3v1z"></path><path d="M7 6h1v1h-1v-1z"></path><path d="M9 14h2v2h-2v-2z"></path><path d="M7 14h1v2h-1v-2z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M9 3v-2h-1v-1h-1v4h1v-1z"></path><path d="M12 14h1v2h-1v-2z"></path><path d="M12 12h2v1h-2v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M14 10v1h1v1h1v-2h-1z"></path><path d="M15 13h-1v3h2v-2h-1z"></path><path d="M10 10v1h3v-2h-2v1z"></path><path d="M12 7v1h2v1h2v-2h-2z"></path></g>
<g id="vaadin:question-circle-o"><path d="M9 10h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.9 11h2v2h-2v-2z"></path></g>
<g id="vaadin:question-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8.9 13h-2v-2h2v2zM11 8.1c-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3z"></path></g>
<g id="vaadin:question"><path d="M9 11h-3c0-3 1.6-4 2.7-4.6 0.4-0.2 0.7-0.4 0.9-0.6 0.5-0.5 0.3-1.2 0.2-1.4-0.3-0.7-1-1.4-2.3-1.4-2.1 0-2.5 1.9-2.5 2.3l-3-0.4c0.2-1.7 1.7-4.9 5.5-4.9 2.3 0 4.3 1.3 5.1 3.2 0.7 1.7 0.4 3.5-0.8 4.7-0.5 0.5-1.1 0.8-1.6 1.1-0.9 0.5-1.2 1-1.2 2z"></path><path d="M9.5 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:quote-left"><path d="M7 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path><path d="M16 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path></g>
<g id="vaadin:quote-right"><path d="M9 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path><path d="M0 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path></g>
<g id="vaadin:random"><path d="M13 12h-2c-1 0-1.7-1.2-2.4-2.7-0.3 0.7-0.6 1.5-1 2.3 0.8 1.4 1.8 2.4 3.4 2.4h2v2l3-3-3-3v2z"></path><path d="M5.4 6.6c0.3-0.7 0.6-1.5 1-2.2-0.8-1.4-1.9-2.4-3.4-2.4h-3v2h3c1 0 1.7 1.2 2.4 2.6z"></path><path d="M16 3l-3-3v2h-2c-2.7 0-3.9 3-5 5.7-0.8 2.1-1.7 4.3-3 4.3h-3v2h3c2.6 0 3.8-2.8 4.9-5.6 0.9-2.2 1.8-4.4 3.1-4.4h2v2l3-3z"></path></g>
<g id="vaadin:raster-lower-left"><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:raster"><path d="M7 7h1v1h-1v-1z"></path><path d="M5 7h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M5 5h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M6 4h1v1h-1v-1z"></path><path d="M4 4h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M5 3h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M6 2h1v1h-1v-1z"></path><path d="M4 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M9 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M10 4h1v1h-1v-1z"></path><path d="M8 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M11 3h1v1h-1v-1z"></path><path d="M9 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M10 2h1v1h-1v-1z"></path><path d="M8 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M4 10h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M5 9h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:records"><path d="M4 9h4v2h-4v-2z"></path><path d="M16 2h-1v-2h-10v2h-2v1.25l-0.6 0.75h-1.4v1.75l-1 1.25v9h12l4-5v-9zM2 5h8v2h-8v-2zM11 15h-10v-7h10v7zM12 7h-1v-3h-7v-1h8v4zM14 4.5l-1 1.25v-3.75h-7v-1h8v3.5z"></path></g>
<g id="vaadin:recycle"><path d="M8 3.1l1.4 2.2-1.6 1.1 1.3 0.3 2.8 0.6 0.6-2.7 0.4-1.4-1.8 1.1-2-3.3h-2.2l-2.6 4.3 1.7 1z"></path><path d="M16 12l-2.7-4.3-1.7 1 2 3.3h-2.6v-2l-3 3 3 3v-2h3.7z"></path><path d="M2.4 12v0l1.4-2.3 1.7 1.1-0.9-4.2-2.8 0.7-1.3 0.3 1.6 1-2.1 3.4 1.3 2h5.7v-2z"></path></g>
<g id="vaadin:refresh"><path d="M2.6 5.6c0.9-2.1 3-3.6 5.4-3.6 3 0 5.4 2.2 5.9 5h2c-0.5-3.9-3.8-7-7.9-7-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.4-1.4z"></path><path d="M16 9h-4.1l1.5 1.4c-0.9 2.1-3 3.6-5.5 3.6-2.9 0-5.4-2.2-5.9-5h-2c0.5 3.9 3.9 7 7.9 7 3 0 5.6-1.7 7-4.1l1.1 1.1v-4z"></path></g>
<g id="vaadin:reply-all"><path d="M16 8c0-5-4.9-5-4.9-5h-2.1v-3l-6 6 6 6v-3h2.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path><path d="M0 6l6 6v-1.5l-4.5-4.5 4.5-4.5v-1.5z"></path></g>
<g id="vaadin:reply"><path d="M16 8c0-5-4.9-5-4.9-5h-5.1v-3l-6 6 6 6v-3h5.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path></g>
<g id="vaadin:resize-h"><path d="M0 7h16v2h-16v-2z"></path><path d="M7 6h2v-3h2l-3-3-3 3h2z"></path><path d="M9 10h-2v3h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:resize-v"><path d="M7 0h2v16h-2v-16z"></path><path d="M3 5l-3 3 3 3v-2h3v-2h-3z"></path><path d="M16 8l-3-3v2h-3v2h3v2z"></path></g>
<g id="vaadin:retweet"><path d="M2 1h12v5h2l-3 3-3-3h2v-3h-8v2h-2z"></path><path d="M14 14h-12v-5h-2l3-3 3 3h-2v3h8v-2h2z"></path></g>
<g id="vaadin:rhombus"><path d="M8 0l-8 8 8 8 8-8-8-8zM2 8l6-6 6 6-6 6-6-6z"></path></g>
<g id="vaadin:road-branch"><path d="M16 4h-16v3h3.2l3.8 3.6c1.6 1.5 3.6 2.4 5.8 2.4h3.2v-3h-3.2c-1.4 0-2.7-0.5-3.7-1.5l-1.6-1.5h8.5v-3z"></path></g>
<g id="vaadin:road-branches"><path d="M16 4v-3h-16v3h1.7l7.7 9.5c1.3 1.6 3.1 2.5 5 2.5h1.6v-3h-1.5c-1 0-1.9-0.5-2.7-1.4l-1.3-1.6h5.5v-3h-8l-2.4-3h10.4z"></path></g>
<g id="vaadin:road-split"><path d="M14 13v-1c0-0.2 0-4.1-2.8-5.4-2.2-1-2.2-3.5-2.2-3.6v-3h-2v3c0 0.1 0 2.6-2.2 3.6-2.8 1.3-2.8 5.2-2.8 5.4v1h-2l3 3 3-3h-2v-1c0 0 0-2.8 1.7-3.6 1.1-0.5 1.8-1.3 2.3-2 0.5 0.8 1.2 1.5 2.3 2 1.7 0.8 1.7 3.6 1.7 3.6v1h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:road"><path d="M9 11v4h7l-4-14h-3v3h-2v-3h-3l-4 14h7v-4h2zM7 6h2v3h-2v-3z"></path></g>
<g id="vaadin:rocket"><path d="M16 0c0 0-3.5-0.4-6.7 2.8-1.6 1.5-2.9 3.5-3.9 5.3l-2.5-0.6-1.6 1.6 2.8 1.4c-0.3 0.6-0.4 1-0.4 1l0.8 0.8c0 0 0.4-0.2 1-0.4l1.4 2.8 1.6-1.6-0.5-2.5c1.7-1 3.8-2.3 5.3-3.8 3.1-3.2 2.7-6.8 2.7-6.8zM12.8 4.8c-0.4 0.4-1.1 0.4-1.6 0-0.4-0.4-0.4-1.1 0-1.6 0.4-0.4 1.1-0.4 1.6 0 0.4 0.4 0.4 1.1 0 1.6z"></path><path d="M4 14.2c-0.8 0.8-2.6 0.4-2.6 0.4s-0.4-1.8 0.4-2.6c0.8-0.8 1.5-0.9 1.5-0.9s-1.3-0.3-2.1 0.6c-1.6 1.6-1 4.2-1 4.2s2.6 0.6 4.2-1c0.9-0.9 0.6-2.2 0.6-2.2s-0.2 0.7-1 1.5z"></path></g>
<g id="vaadin:rotate-left"><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:rotate-right"><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:rss-square"><path d="M0 0v16h16v-16h-16zM3.6 14c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.6 1.6-1.6 1.6 0.7 1.6 1.6-0.6 1.6-1.6 1.6zM7.6 14c0-3.1-2.5-5.6-5.6-5.6v-2.4c4.4 0 8 3.6 8 8h-2.4zM11.6 14c0-5.3-4.3-9.6-9.6-9.6v-2.4c6.6 0 12 5.4 12 12h-2.4z"></path></g>
<g id="vaadin:rss"><path d="M4.4 13.8c0 1.215-0.985 2.2-2.2 2.2s-2.2-0.985-2.2-2.2c0-1.215 0.985-2.2 2.2-2.2s2.2 0.985 2.2 2.2z"></path><path d="M10.6 16h-3.1c0-4.1-3.4-7.5-7.5-7.5v0-3.1c5.9 0 10.6 4.7 10.6 10.6z"></path><path d="M12.8 16c0-7.1-5.7-12.8-12.8-12.8v-3.2c8.8 0 16 7.2 16 16h-3.2z"></path></g>
<g id="vaadin:safe-lock"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM11.13 14.25l-0.37-0.9-0.92 0.38 0.37 0.9c-0.659 0.23-1.419 0.363-2.21 0.363s-1.551-0.133-2.259-0.378l0.419-0.885-0.92-0.38-0.37 0.9c-1.355-0.69-2.43-1.765-3.102-3.080l0.882-0.41-0.38-0.93-0.9 0.37c-0.23-0.659-0.363-1.419-0.363-2.21s0.133-1.551 0.378-2.259l0.885 0.419 0.38-0.92-0.9-0.37c0.691-1.351 1.766-2.423 3.080-3.092l0.41 0.882 0.92-0.38-0.37-0.9c0.659-0.23 1.419-0.363 2.21-0.363s1.551 0.133 2.259 0.378l-0.419 0.885 0.92 0.38 0.37-0.9c1.355 0.69 2.43 1.765 3.102 3.080l-0.882 0.41 0.38 0.92 0.9-0.37c0.23 0.659 0.363 1.419 0.363 2.21s-0.133 1.551-0.378 2.259l-0.885-0.419-0.38 0.92 0.9 0.37c-0.69 1.355-1.765 2.43-3.080 3.102z"></path><path d="M10.36 3.62l-1.16 2.79c-0.329-0.253-0.746-0.407-1.199-0.41h0.279l1.15-2.77c-0.426-0.14-0.917-0.223-1.427-0.23-0.023-0-0.047-0-0.071-0-2.795 0-5.060 2.265-5.060 5.060s2.265 5.060 5.060 5.060c2.795 0 5.060-2.265 5.060-5.060 0-1.904-1.052-3.563-2.606-4.426z"></path></g>
<g id="vaadin:safe"><path d="M1 0v16h3v-1h8v1h3v-16h-14zM14 10h-1v-5h1v5zM14 3h-1v-1h-10v11h10v-1h1v2h-12v-13h12v2zM8.5 7.5c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2z"></path><path d="M7.5 7.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scale-unbalance"><path d="M15.81 9l-2.47-4.93 0.83-0.15c0.239-0.044 0.418-0.251 0.418-0.5 0-0.281-0.227-0.508-0.508-0.508-0.032 0-0.063 0.003-0.093 0.009l-0.777 0.14c-0.993-0.755-2.25-1.21-3.613-1.21-0.21 0-0.418 0.011-0.623 0.032-0.036-0.5-0.457-0.882-0.967-0.882-0.003 0-0.005 0-0.008 0-0.552 0-1 0.448-1 1v0.2c-1.714 0.336-3.151 1.327-4.066 2.697l-0.754 0.153c-0.257 0.024-0.457 0.239-0.457 0.5 0 0.277 0.225 0.502 0.502 0.502 0.016 0 0.032-0.001 0.047-0.002l0.088 0 0.35-0.050-2.52 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.56-5.12h0.1c0.172-0.031 0.311-0.144 0.379-0.297 0.021-0.093 0.701-1.583 3.271-2.363v10.78h-1v1h-2v1h8v-1h-2v-1h-1v-11.12c0.201-0.031 0.434-0.049 0.67-0.049 1.152 0 2.205 0.419 3.016 1.114l-0.006-0.005-2.49 5.060h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 11h-4l2-3.94zM11 9l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scale"><path d="M15.81 10l-2.5-5h0.69c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.79c-1.056-1.145-2.541-1.881-4.198-1.95l-0.012-0.050c0-0.552-0.448-1-1-1s-1 0.448-1 1v0.050c-1.681 0.073-3.178 0.807-4.247 1.947l-0.753 0.003c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.69l-2.5 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.55-5.090c0.064-0.039 0.118-0.089 0.159-0.148 0.873-1.019 2.148-1.669 3.575-1.702l0.006 10.94h-1v1h-2v1h8v-1h-2v-1h-1v-10.94c1.418 0.030 2.679 0.682 3.524 1.693 0.053 0.084 0.117 0.145 0.193 0.186l-2.527 5.061h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 10h-4l2-3.94zM11 10l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scatter-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M5 11c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M14 5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scissors"><path d="M16 3.1c0 0-2.1-1.1-3.5-1-0.3 0-0.5 0.1-0.7 0.2l-4.3 3.4-1.8-1.5c0.1-0.3 0.2-0.6 0.3-1 0.1-1.8-1.4-3.4-3.3-3.2-1.2 0.1-2.3 1-2.6 2.2-0.3 1.3 0.2 2.5 1.2 3.2l3.3 2.6-3.3 2.6c-1 0.7-1.5 1.9-1.2 3.2 0.3 1.2 1.4 2 2.6 2.2 1.9 0.2 3.4-1.4 3.2-3.2 0-0.3-0.1-0.7-0.3-1l1.8-1.5 4.3 3.4c0.2 0.1 0.4 0.2 0.7 0.2 1.4 0.1 3.5-1 3.5-1l-5.7-4.9 5.8-4.9zM2.8 4.6c-0.9-0.1-1.6-0.9-1.5-1.8s0.9-1.6 1.8-1.5c0.9 0.1 1.6 0.9 1.5 1.8 0 0.9-0.9 1.6-1.8 1.5zM3.1 14.7c-0.9 0.1-1.7-0.6-1.8-1.5s0.6-1.7 1.5-1.8c0.9-0.1 1.7 0.6 1.8 1.5s-0.6 1.7-1.5 1.8zM12.4 3.2c0 0 0.1 0 0.2 0 0.4 0 0.9 0.1 1.4 0.2l-6.8 5.7-0.9-1.1 6.1-4.8zM14 12.6c-0.5 0.2-1 0.3-1.4 0.2-0.1 0-0.2 0-0.2 0l-4-3.2 1-0.9 4.6 3.9z"></path></g>
<g id="vaadin:screwdriver"><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:search-minus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M3 5h6v2h-6v-2z"></path></g>
<g id="vaadin:search-plus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M7 3h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path></g>
<g id="vaadin:search"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path></g>
<g id="vaadin:select"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM12 9l-2-2h4l-2 2z"></path></g>
<g id="vaadin:server"><path d="M3 5v3h10v-3h-10zM7 7h-3v-1h3v1z"></path><path d="M3 4h10l-2-4h-6z"></path><path d="M3 12h10v-3h-10v3zM11 10h1v1h-1v-1zM9 10h1v1h-1v-1z"></path><path d="M3 16h10v-3h-10v3zM4 14h3v1h-3v-1z"></path></g>
<g id="vaadin:share-square"><path d="M11 3h-3.6c0 0-4.4-0.2-4.4 4.3 0 3.5 2 6.7 2 6.7s-0.4-7 2.3-7h3.7v3l5-5-5-5v3z"></path><path d="M14 9v6h-13v-13h9v-1h-10v15h15v-8z"></path></g>
<g id="vaadin:share"><path d="M10 3h-5.1c0 0-4.9 0-4.9 5 0 3.9 3 8 3 8s-1.7-7 1.8-7h5.2v3l6-6-6-6v3z"></path></g>
<g id="vaadin:shield"><path d="M1 0c0 0 0 3.2 0 7 0 5.6 7 9 7 9s7-3.4 7-9c0-3.8 0-7 0-7h-14zM14 7c0 4.2-4.6 7.1-6 7.9v-13.9h6v6z"></path></g>
<g id="vaadin:shift-arrow"><path d="M8 2l-7 7h4v5h6v-5h4zM10 8v5h-4v-5h-2.5l4.5-4.58 4.5 4.58h-2.5z"></path></g>
<g id="vaadin:shift"><path d="M0 2v12h16v-12h-16zM6 8v3h-2v-3h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:shop"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0v6c0.005 0.732 0.401 1.37 0.991 1.715l0.009 6.285h9v-5h3v5h2v-6.28c0.599-0.35 0.995-0.988 1-1.719v-6.001h-16zM4 2h2v4c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4zM2 7c-0.552 0-1-0.448-1-1v-4h2v4c0 0.552-0.448 1-1 1zM8 12h-5v-3h5v3zM9 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM12 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM15 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4z"></path></g>
<g id="vaadin:sign-in-alt"><path d="M0 0h2v16h-2v-16z"></path><path d="M3 10h8v3l5-5-5-5v3h-8z"></path></g>
<g id="vaadin:sign-in"><path d="M7 1v2l1 1v-2h7v12h-7v-2l-1 1v2h9v-14z"></path><path d="M10 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:sign-out-alt"><path d="M14 0h2v16h-2v-16z"></path><path d="M8 6h-8v4h8v3l5-5-5-5z"></path></g>
<g id="vaadin:sign-out"><path d="M9 4v-3h-9v14h9v-3h-1v2h-7v-12h7v2z"></path><path d="M16 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:signal"><path d="M6.9 13.2l1.1 1.1 1.1-1.1c-0.3-0.3-0.7-0.5-1.1-0.5s-0.9 0.2-1.1 0.5z"></path><path d="M8 4.6c2.7 0 5.1 1.1 6.9 2.8l1.1-1.1c-2-2-4.9-3.3-8-3.3s-6 1.3-8 3.3l1.1 1.1c1.8-1.7 4.2-2.8 6.9-2.8z"></path><path d="M2.3 8.6l1.1 1.1c1.2-1.1 2.8-1.8 4.6-1.8s3.4 0.7 4.6 1.9l1.1-1.1c-1.4-1.6-3.5-2.5-5.7-2.5s-4.3 0.9-5.7 2.4z"></path><path d="M4.6 10.9l1.1 1.1c0.6-0.6 1.4-0.9 2.3-0.9s1.7 0.4 2.3 0.9l1.1-1.1c-0.8-0.9-2.1-1.4-3.4-1.4s-2.6 0.5-3.4 1.4z"></path></g>
<g id="vaadin:sitemap"><path d="M14.5 12v-4.5h-6v-3.5h1.5v-4h-4v4h1.5v3.5h-6v4.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4z"></path></g>
<g id="vaadin:slider"><path d="M16 6h-3.6c-0.7-1.2-2-2-3.4-2s-2.8 0.8-3.4 2h-5.6v4h5.6c0.7 1.2 2 2 3.4 2s2.8-0.8 3.4-2h3.6v-4zM1 9v-2h4.1c0 0.3-0.1 0.7-0.1 1s0.1 0.7 0.1 1h-4.1zM9 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 1.7-1.3 3-3 3z"></path></g>
<g id="vaadin:sliders"><path d="M7 0h2v3h-2v-3z"></path><path d="M6 4v3h1v9h2v-9h1v-3z"></path><path d="M2 0h2v8h-2v-8z"></path><path d="M1 9v3h1v4h2v-4h1v-3z"></path><path d="M12 0h2v10h-2v-10z"></path><path d="M11 11v3h1v2h2v-2h1v-3z"></path></g>
<g id="vaadin:smiley-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M8 13.2c-2 0-3.8-1.2-4.6-3.1l0.9-0.4c0.6 1.5 2.1 2.4 3.7 2.4s3.1-1 3.7-2.4l0.9 0.4c-0.8 2-2.6 3.1-4.6 3.1z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:sort"><path d="M11 7h-6l3-4z"></path><path d="M5 9h6l-3 4z"></path></g>
<g id="vaadin:sound-disable"><path d="M4 5h-4v6h4l5 4v-14z"></path><path d="M15.9 5.6l-0.8-0.7-2.3 2.4-2.4-2.4-0.8 0.7 2.4 2.4-2.4 2.4 0.8 0.7 2.4-2.4 2.3 2.4 0.8-0.7-2.4-2.4z"></path></g>
<g id="vaadin:spark-line"><path d="M14 6c-1.105 0-2 0.895-2 2 0 0.060 0 0.11 0 0.16l-0.81 0.25-2.3-3.48-1.73 4.32-1.16-5.81-2.3 4.78-1.64-1.31-2.060 1.090v1.080l1.94-1 2.11 1.7 1.56-3.22 1.23 6.19 2.27-5.68 1.68 2.52 1.55-0.48c0.364 0.54 0.973 0.89 1.664 0.89 1.105 0 2-0.895 2-2s-0.895-2-2-2c-0.001 0-0.003 0-0.004 0zM14 9c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:specialist"><path d="M4.1 8c0.2 0.6 0.3 1.1 0.3 1.1 0.8 1.3 1.8 1.1 1.8 1.8 0 0.3-0.2 0.6-0.5 0.7l2.3 1.8 2.3-1.7c-0.3-0.2-0.5-0.4-0.5-0.7 0-0.8 1-0.5 1.8-1.8 0 0 0.2-0.4 0.3-1.1v0c0.3-1.1 0.6-3.1 0.5-4.1h-1.5c0-0.3 0.1-0.6 0.1-1h1.1c-0.3-1.4-1-2-2.2-2.3-0.5-0.4-1.2-0.7-1.9-0.7s-1.4 0.3-1.9 0.7c-1.2 0.3-1.8 0.9-2.2 2.3h1.1c0 0.4 0.1 0.7 0.2 1h-1.6c-0.1 1 0.2 3 0.5 4v0zM11.2 8.5c-0.1 0.1-0.2 0.2-0.3 0.3l-0.5 0.6c-0.4 0.5-0.8 0.8-1.4 0.9l-0.4 0.1c-0.4 0.1-0.9 0.1-1.4 0l-0.4-0.1c-0.6-0.2-1.1-0.5-1.5-1.1l-0.2-0.4c-0.1-0.1-0.2-0.2-0.3-0.3l-0.7-0.5 3.1-0.9c0.5-0.1 1-0.2 1.5 0l3.2 0.9-0.7 0.5zM6 3c0-1.1 0.9-2 2-2s2 0.9 2 2c0 1.1-0.9 2-2 2s-2-0.9-2-2z"></path><path d="M15.5 14.2c-1.3-2.4-2.6-2-3.9-2.2 0 0 0 0-0.1 0l-3.5 2.6-3.5-2.6c0 0 0 0-0.1 0-1.4 0.1-2.6-0.2-3.9 2.2-0.2 0.4-0.4 1.1-0.5 1.8h16c-0.1-0.7-0.3-1.4-0.5-1.8z"></path></g>
<g id="vaadin:spinner-arc"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3-7-7h-1c0 4 3.6 8 8 8s8-3.6 8-8h-1z"></path></g>
<g id="vaadin:spinner-third"><path d="M12.9 3.1c1.3 1.2 2.1 3 2.1 4.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.9 0.8-3.7 2.1-4.9l-0.8-0.8c-1.4 1.5-2.3 3.5-2.3 5.7 0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-0.9-4.2-2.3-5.7l-0.8 0.8z"></path></g>
<g id="vaadin:spinner"><path d="M9.9 0.2l-0.2 1c3 0.8 5.3 3.5 5.3 6.8 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-0.2-1c-3.5 0.9-6.1 4.1-6.1 7.8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8z"></path></g>
<g id="vaadin:spline-area-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M10 7c-2 0-2.080-1-4-1-2.34 0-4 3-4 3v5h14v-12c-2 0-3.86 5-6 5z"></path></g>
<g id="vaadin:spline-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M12 5c-0.69 1-1.41 2-2 2-0.026 0.001-0.056 0.001-0.087 0.001-0.601 0-1.164-0.16-1.65-0.44-0.623-0.35-1.387-0.562-2.2-0.562-0.022 0-0.045 0-0.067 0-1.6 0.116-3.009 0.864-3.991 1.993l-0.006 2.347c0.77-1.12 2.32-2.84 4-2.84 0.014-0 0.031-0 0.048-0 0.579 0 1.121 0.156 1.587 0.428 0.643 0.358 1.429 0.573 2.264 0.573 0.035 0 0.071-0 0.106-0.001 1.395 0 2.335-1.32 3.245-2.6s1.75-2.4 2.75-2.4v-1.5c-1.81 0-3 1.61-4 3z"></path></g>
<g id="vaadin:split-h"><path d="M0 1v14h16v-14h-16zM1 4h6.5v10h-6.5v-10zM15 14h-6.5v-10h6.5v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:split-v"><path d="M0 1v14h16v-14h-16zM14 2h1v1h-1v-1zM15 4v4.5h-14v-4.5h14zM1 14v-4.5h14v4.5h-14z"></path></g>
<g id="vaadin:split"><path d="M0 11h6v5h-6v-5z"></path><path d="M11 10v-2l-0.64 0.64c-0.851-0.81-1.38-1.952-1.38-3.217 0-0.149 0.007-0.296 0.022-0.441l1.999 0.018v-5h-6v5h2c0.013 0.127 0.020 0.274 0.020 0.423 0 1.265-0.529 2.407-1.378 3.216l-0.642-0.638v2h2l-0.65-0.65c1.028-0.991 1.667-2.38 1.667-3.919 0-0.152-0.006-0.302-0.018-0.45-0.010 0.149-0.016 0.299-0.016 0.45 0 1.539 0.639 2.928 1.665 3.917l-0.648 0.652h2z"></path><path d="M10 11h6v5h-6v-5z"></path></g>
<g id="vaadin:spoon"><path d="M10.5 4.8c0-1.8-0.9-4.8-3-4.8s-3 3-3 4.8c0 1.5 0.8 2.8 2.2 3.1-0.5 1.6-0.7 4.6-0.7 4.6v2c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-2c0-0.6-0.2-3.2-0.7-4.6 1.4-0.3 2.2-1.6 2.2-3.1z"></path></g>
<g id="vaadin:square-shadow"><path d="M14 2v-2h-14v14h2v2h14v-14h-2zM13 13h-12v-12h12v12z"></path></g>
<g id="vaadin:star-half-left-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8v-9.1l1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star-half-left"><path d="M5.6 5.4l-5.5 0.8 3.9 3.8-0.9 5.5 4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-half-right-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM4.4 13.7l0.7-4-2.9-2.8 4-0.6 1.8-3.6v9.1l-3.6 1.9z"></path></g>
<g id="vaadin:star-half-right"><path d="M10.5 5.4l5.5 0.8-4 3.8 0.9 5.5-4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8l-3.6 1.9 0.7-4-2.9-2.8 4-0.6 1.8-3.6 1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star"><path d="M12.9 15.4l-4.9-2.6-4.9 2.6 0.9-5.4-4-3.9 5.5-0.8 2.4-5 2.4 5 5.5 0.8-3.8 3.9 0.9 5.4z"></path></g>
<g id="vaadin:start-cog"><path d="M4 0v6h1.7l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v0.2l6.1-3.4-12-7z"></path><path d="M4.5 10.5c-0.2 0-0.4 0.1-0.5 0.2-0.3 0.2-0.5 0.5-0.5 0.8s0.2 0.7 0.5 0.8c0.1 0.1 0.3 0.2 0.5 0.2 0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path><path d="M9 12v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.3 0.3-0.6 0.4-0.9l1.1-0.3zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:step-backward"><path d="M14 15v-14l-10 7z"></path><path d="M2 1h2v14h-2v-14z"></path></g>
<g id="vaadin:step-forward"><path d="M2 1v14l10-7z"></path><path d="M12 1h2v14h-2v-14z"></path></g>
<g id="vaadin:stethoscope"><path d="M5.7 15.2c0.3 0.3 1 0.8 1.8 0.8 2.7 0 3.3-2 3.4-3.6 0.2-2.3 0.8-2.2 1.1-2.2 0.7 0 0.9 0.4 0.9 1.1-0.6 0.4-1 1-1 1.7 0 1.1 0.9 2 2 2s2-0.9 2-2-0.9-2-2-2c-0.1 0-0.1 0-0.2 0-0.2-0.9-0.7-1.8-1.8-1.8-1.6 0-2 1.4-2.1 2.9-0.1 2.1-0.8 2.9-2.3 2.9-0.4 0-0.8-0.2-1-0.4-0.6-0.5-0.5-2.3-0.5-2.3 2 0 4-1.8 4.7-4.8l-0.2-0.1c0.3-1.2 0.5-2.6 0.5-3.6 0-1.1-0.3-1.9-1-2.5s-1.5-0.8-2.1-0.8c-0.2-0.3-0.5-0.5-0.9-0.5-0.5 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5 0.5 0 1 0.2 1.5 0.6s0.7 0.9 0.7 1.7c0 0.9-0.2 2.2-0.5 3.5l-0.2-0.1c-0.3 1.1-1.3 3.6-3.3 3.6h-1c-2 0-3-2.5-3.3-3.6l-0.2 0.1c-0.3-1.3-0.5-2.6-0.5-3.5 0-0.8 0.2-1.3 0.7-1.7 0.4-0.4 1-0.5 1.5-0.6 0.1 0.3 0.4 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.9 0.5-0.6 0-1.4 0.2-2.1 0.8s-1 1.4-1 2.5c0 1 0.2 2.4 0.5 3.7l-0.2 0.1c0.7 2.9 2.7 4.7 4.7 4.7 0 0-0.1 2.2 0.7 2.9zM14 14c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1-0.5 1-1 1z"></path></g>
<g id="vaadin:stock"><path d="M12 6v-6h-8v6h-4v7h16v-7h-4zM7 12h-6v-5h2v1h2v-1h2v5zM5 6v-5h2v1h2v-1h2v5h-6zM15 12h-6v-5h2v1h2v-1h2v5z"></path><path d="M0 16h3v-1h10v1h3v-2h-16v2z"></path></g>
<g id="vaadin:stop-cog"><path d="M1 0v7.2l0.5-0.5 1.2 0.6c0 0 0.1 0 0.1 0l0.2-0.6 0.3-0.7h2.4l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v2.4l-0.7 0.2-0.6 0.2c0 0 0 0.1 0 0.1l0.6 1.2-0.4 0.7h7.2v-15h-15z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:stop"><path d="M1 1h14v14h-14v-14z"></path></g>
<g id="vaadin:stopwatch"><path d="M8.5 8.14v-3.64h-1v3.64c-0.301 0.176-0.5 0.498-0.5 0.866 0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.368-0.199-0.69-0.495-0.863z"></path><path d="M8 2c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7zM8 14.5c-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5c3.038 0 5.5 2.462 5.5 5.5-0.006 3.035-2.465 5.494-5.499 5.5z"></path><path d="M6 0h4v1.5h-4v-1.5z"></path><path d="M0.005 4.438l2.713-2.939 1.102 1.017-2.713 2.939-1.102-1.017z"></path><path d="M12.186 2.519l1.102-1.017 2.713 2.939-1.102 1.017-2.713-2.939z"></path></g>
<g id="vaadin:storage"><path d="M16 4l-8.060-4-7.94 4v1h1v11h2v-9h10v9h2v-11h1v-1zM4 6v-1h2v1h-2zM7 6v-1h2v1h-2zM10 6v-1h2v1h-2z"></path><path d="M6 9h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M6 13h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M10 13h-1v-1h-1v3h3v-3h-1v1z"></path></g>
<g id="vaadin:strikethrough"><path d="M10.5 7c-0.5-0.3-1-0.5-1.4-0.7-2-0.9-2.1-1.1-2-1.9s0.4-1 0.6-1.2c0.9-0.5 2.8-0.1 3.5 0.2l1.1-2.8c-0.4-0.2-3.7-1.4-6.1 0-0.8 0.5-1.9 1.5-2.1 3.4-0.2 1.3 0.1 2.3 0.7 3h-4.8v1h16v-1h-5.5z"></path><path d="M7.7 9c0 0 0.1 0 0.1 0.1 2 0.9 2.4 1.2 2.2 2.5-0.2 0.9-0.5 1.1-0.8 1.3-1.1 0.6-3.3 0-4.4-0.5l-1.2 2.6c0.3 0.1 2.3 1 4.5 1 0.9 0 1.8-0.2 2.6-0.6 0.9-0.5 2-1.4 2.4-3.4 0.2-1.3 0-2.3-0.4-3.1h-5z"></path></g>
<g id="vaadin:subscript"><path d="M16 15v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:suitcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM4 14h-1v-10h1v10zM10 3h-4v-1h4v1zM13 14h-1v-10h1v10z"></path></g>
<g id="vaadin:sun-down"><path d="M10 3h-1v-2h-2v2h-1l2 3 2-3z"></path><path d="M14 13l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:sun-o"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6zM8 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"></path></g>
<g id="vaadin:sun-rise"><path d="M6 4h1v2h2v-2h1l-2-3-2 3z"></path><path d="M12.42 11.82l0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:superscript"><path d="M16 5v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:sword"><path d="M15.8 0.5l-0.1-0.2-0.2-0.1c-0.1 0-2.5-0.8-4.2 0.9l-6.7 6.6c-0.9-0.6-1.7-1.2-1.8-1l-0.4 0.3c-0.2 0.2 0.9 1.7 1.8 2.7l-2.5 3.4c-0.3-0.3-0.8-0.3-1.1 0l-0.3 0.3c-0.3 0.3-0.3 0.8 0 1.1l1 1c0.3 0.3 0.8 0.3 1.1 0l0.3-0.3c0.3-0.3 0.3-0.8 0-1.1v0l3.5-2.5c1 0.9 2.5 2 2.7 1.8l0.4-0.4c0.1-0.1-0.4-1-1.1-1.8l6.7-6.7c1.7-1.5 0.9-3.9 0.9-4zM7.7 10.5l-0.8-0.8 6.2-6.9-6.9 6.2-0.7-0.7 6.5-6.5c1-1 2.3-0.8 2.9-0.7 0.1 0.6 0.3 1.9-0.7 2.8l-6.5 6.6z"></path></g>
<g id="vaadin:tab-a"><path d="M9 10h-9v-4h9v-2l5 4-5 4v-2z"></path><path d="M14 4h2v8h-2v-8z"></path></g>
<g id="vaadin:tab"><path d="M0 2v12h16v-12h-16zM13 11h-1v-3l-3 3v-2h-6v-2h6v-2l3 3v-3h1v6z"></path></g>
<g id="vaadin:table"><path d="M0 1v15h16v-15h-16zM5 15h-4v-2h4v2zM5 12h-4v-2h4v2zM5 9h-4v-2h4v2zM5 6h-4v-2h4v2zM10 15h-4v-2h4v2zM10 12h-4v-2h4v2zM10 9h-4v-2h4v2zM10 6h-4v-2h4v2zM15 15h-4v-2h4v2zM15 12h-4v-2h4v2zM15 9h-4v-2h4v2zM15 6h-4v-2h4v2z"></path></g>
<g id="vaadin:tablet"><path d="M0 2v12h16v-12h-16zM13 13h-11v-10h11v10zM15 9h-1v-2h1v2z"></path></g>
<g id="vaadin:tabs"><path d="M14 4v-2h-14v12h16v-10h-2zM10 3h3v1h-3v-1zM6 3h3v1h-3v-1zM15 13h-14v-10h4v2h10v8z"></path></g>
<g id="vaadin:tag"><path d="M8 1h-7v7l7 7 7-7zM3.75 5c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25c0.69 0 1.25 0.56 1.25 1.25s-0.56 1.25-1.25 1.25z"></path></g>
<g id="vaadin:tags"><path d="M9 2h-1.5l7 7-5.3 5.2 0.8 0.8 6-6z"></path><path d="M6 2h-6v6l7 7 6-6-7-7zM2.8 6c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.2 1.2-1.2 1.3 0.5 1.3 1.2-0.6 1.2-1.2 1.2z"></path></g>
<g id="vaadin:tasks"><path d="M6 0h10v4h-10v-4z"></path><path d="M6 6h10v4h-10v-4z"></path><path d="M6 12h10v4h-10v-4z"></path><path d="M3 1v2h-2v-2h2zM4 0h-4v4h4v-4z"></path><path d="M3 13v2h-2v-2h2zM4 12h-4v4h4v-4z"></path><path d="M5.3 5.9l-0.6-0.8-0.9 0.9h-3.8v4h4v-2.8l1.3-1.3zM2.7 7l-0.7 0.7-0.8-0.7h1.5zM1 8.2l0.9 0.8h-0.9v-0.8zM3 9h-0.9l0.9-0.9v0.9z"></path></g>
<g id="vaadin:taxi"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-2-1.2h-0.6v-1.3c0-0.4-0.3-0.7-0.7-0.7h-4.6c-0.4 0-0.7 0.3-0.7 0.7v1.3h-0.7c-0.8 0-1.6 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0 1.1 1 1.2v2c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-1.9h8v1.9c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c1-0.1 1-0.6 1-1.2v-3.5c0-0.5-0.4-1-1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:teeth"><path d="M4.6 7.6c-0.1 0.1-0.5 0.4-1.6 0.4 1.1 0 1.5 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.5-0.4-0.9 0-1.3-0.2-1.5-0.4z"></path><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c4.4 0 8-3.6 8-8s-3.6-8-8-8zM13.1 11.6c-1 0-1.4-0.8-1.6-1.6-0.2 0.9-0.6 2-1.8 2-1.1 0-1.5-1.1-1.7-2-0.2 1-0.6 2-1.7 2s-1.6-1.1-1.8-2c-0.2 0.8-0.6 1.6-1.6 1.6-2 0-1.9-3-1.9-3s0.2-0.6 1.7-0.6c-1.5 0-1.7-0.5-1.7-0.5s-0.1-3 1.9-3c1 0 1.4 0.8 1.6 1.6 0.2-0.9 0.6-2 1.8-2 1.1-0.1 1.5 1 1.7 1.9 0.2-1 0.6-2 1.7-2s1.6 1.1 1.8 2c0.2-0.8 0.6-1.6 1.6-1.6 2 0 1.9 3 1.9 3s-0.3 0.6-1.8 0.6c-1.2 0-1.6-0.3-1.8-0.4-0.2 0.2-0.7 0.4-1.6 0.4-1.2 0-1.6-0.2-1.8-0.4-0.1 0.1-0.6 0.4-1.6 0.4 1 0 1.4 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.8-0.4 1 0 1.4 0.2 1.7 0.4 0-0.1 0.5-0.4 1.7-0.4 1.5 0 1.8 0.6 1.8 0.6s0.1 3-1.9 3z"></path></g>
<g id="vaadin:terminal"><path d="M6 12h9v1h-9v-1z"></path><path d="M1.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path></g>
<g id="vaadin:text-height"><path d="M15 3h1l-1.5-3-1.5 3h1v10h-1l1.5 3 1.5-3h-1z"></path><path d="M1 0v3h4v13h3v-13h4v-3z"></path></g>
<g id="vaadin:text-input"><path d="M2 2h1v4h-1v-4z"></path><path d="M1 0c-0.6 0-1 0.4-1 1v14c0 0.6 0.4 1 1 1h15v-16h-15zM13 15h-12v-14h12v14zM15 15v0h-1v-1h1v1zM15 13h-1v-10h1v10zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:text-label"><path d="M12.5 4.9c-1.4 0-2.5 0.8-2.6 0.9l1.2 1.6c0 0 0.7-0.5 1.4-0.5 1.4 0 1.5 1.2 1.5 1.6-0.4-0.1-1.1-0.3-2-0.1-1.4 0.3-2.8 2-2.1 3.9 0.7 1.8 3.1 2.1 4.1 0.6v1h2v-5.3c0-2.7-1.9-3.7-3.5-3.7zM11.5 11.4c-0.1-1.9 1.5-1.9 2.5-1.8v1c0 1.2-2.3 2.3-2.5 0.8z"></path><path d="M6.9 14h2.1l-3.2-12h-2.7l-3.1 12h2.1l1-4h2.7l1.1 4zM3.6 8l0.8-3.2 0.9 3.2h-1.7z"></path></g>
<g id="vaadin:text-width"><path d="M15 14.5l-3-1.5v1h-9v-1l-3 1.5 3 1.5v-1h9v1z"></path><path d="M0 0v3h6v9h3v-9h6v-3z"></path></g>
<g id="vaadin:thin-square"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:thumbs-down-o"><path d="M15.6 7.3c0.1-0.3 0.3-0.7 0.2-1.2 0-0.6-0.3-1.1-0.5-1.3 0.1-0.3 0.1-0.6 0-1.1s-0.4-0.8-0.6-1c0.1-0.3 0.1-0.8-0.3-1.4-0.4-1-1.2-1.3-3.6-1.3-1.7 0-3.3 0.8-4.6 1.5-0.4 0.2-1 0.5-1.2 0.5v0h-5v9h5v-0.9l2.7 2.7 1 2.8c0.2 0.2 0.4 0.4 0.8 0.4h0.1c0 0 0 0 0 0 0.5 0 2-0.1 2.4-1.9 0.2-0.9-0.1-2.2-0.5-3.1h2.3c0.7-0.1 2.1-0.6 2.2-2.1 0-0.7-0.2-1.3-0.4-1.6zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1zM13.8 10h-2.5c-0.3 0-0.5 0.1-0.7 0.4-0.2 0.2-0.2 0.5-0.1 0.8 0.5 1.2 0.7 2.2 0.6 2.8-0.2 0.9-0.9 1.1-1.4 1.1l-1-2.7c0-0.1-0.1-0.2-0.2-0.3l-2.9-2.9c-0.1-0.1-0.3-0.2-0.5-0.2h-0.1v-6c0.4 0 0.8-0.2 1.7-0.6 1.1-0.6 2.7-1.4 4.1-1.4 2.5 0 2.7 0.4 2.9 0.7 0.3 0.5 0.1 0.9 0.1 0.9l-0.2 0.4 0.4 0.3c0 0 0.4 0.2 0.5 0.7 0.1 0.4 0 0.7 0 0.7l-0.3 0.3 0.3 0.3c0 0 0.4 0.3 0.4 0.9 0 0.5-0.2 0.7-0.2 0.7l-0.4 0.3 0.4 0.4c0 0 0.4 0.4 0.3 1.2 0 1.1-1.1 1.2-1.2 1.2z"></path></g>
<g id="vaadin:thumbs-down"><path d="M15.6 7.8c0 0 0.5 0.5 0.4 1.6 0 1.5-1.6 1.6-1.6 1.6h-2.4c-0.2 0-0.3 0.2-0.3 0.4 0.3 0.7 0.8 2.1 0.6 3.1-0.3 1.4-1.5 1.5-1.9 1.5-0.1 0-0.2-0.1-0.2-0.2l-1-2.8c0 0 0-0.1-0.1-0.1l-2.6-2.8c-0.1-0.1-0.2-0.1-0.3-0.1h-0.2v-7h0.2c0.7 0 3.2-2 5.4-2s2.7 0.3 3.1 1c0.4 0.7 0.1 1.3 0.1 1.3s0.5 0.3 0.6 1c0.1 0.7-0.1 1.1-0.1 1.1s0.5 0.4 0.5 1.2c0.1 0.9-0.2 1.2-0.2 1.2z"></path><path d="M0 11h5v-8h-5v8zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:thumbs-up-o"><path d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"></path></g>
<g id="vaadin:thumbs-up"><path d="M15.6 8.2c0 0 0.5-0.5 0.4-1.6 0-1.5-1.6-1.6-1.6-1.6h-2.4c-0.2 0-0.3-0.2-0.3-0.4 0.3-0.7 0.8-2.1 0.6-3.1-0.3-1.4-1.5-1.5-1.9-1.5-0.1 0-0.2 0.1-0.2 0.2l-1 2.8c0 0 0 0.1-0.1 0.1l-2.6 2.8c-0.1 0.1-0.2 0.1-0.3 0.1h-0.2v7h0.2c0.7 0 3.2 2 5.4 2s2.7-0.3 3.1-1c0.4-0.7 0.1-1.3 0.1-1.3s0.5-0.3 0.6-1c0.1-0.7-0.1-1.1-0.1-1.1s0.5-0.4 0.5-1.2c0.1-0.9-0.2-1.2-0.2-1.2z"></path><path d="M0 14h5v-8h-5v8zM2.5 10.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:ticket"><path d="M14 3h-12c0 1.1-0.9 2-2 2v6c1.1 0 2 0.9 2 2h12c0-1.1 0.9-2 2-2v0-6c-1.1 0-2-0.9-2-2zM13 12h-10v-8h10v8z"></path><path d="M4 5h8v6h-8v-6z"></path></g>
<g id="vaadin:time-backward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:time-forward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:timer"><path d="M9.060 9.060c0.271-0.271 0.439-0.646 0.439-1.060s-0.168-0.789-0.439-1.060c-0.59-0.59-6.72-4.6-6.72-4.6s4 6.13 4.59 6.72c0.272 0.274 0.649 0.444 1.065 0.444s0.793-0.17 1.065-0.444z"></path><path d="M8 0v3h1v-1.41c3.153 0.495 5.536 3.192 5.536 6.445 0 3.601-2.919 6.52-6.52 6.52s-6.52-2.919-6.52-6.52c0-1.256 0.355-2.428 0.97-3.423l-0.916-1.322c-0.958 1.303-1.533 2.939-1.533 4.71 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8-0.006 0-0.012 0-0.017 0z"></path></g>
<g id="vaadin:toolbox"><path d="M0 8h6v2h4v-2h6v6h-16z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M11 4v-2h-6v2h-5v3h6v-1h4v1h6v-3h-5zM6 4v-1h4v1h-4z"></path></g>
<g id="vaadin:tools"><path d="M10.3 8.2l-0.9 0.9 0.9 0.9-1.2 1.2 4.3 4.3c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1l-5.2-5.2zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path><path d="M3.6 8l0.9-0.6 1.5-1.7 0.9 0.9 0.9-0.9-0.1-0.1c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.1 1.6 3.7 3.6 4z"></path><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:tooth"><path d="M11.3 16c-1.2 0-1.7-3.9-1.7-4.1-0.1-1.3-1-2.1-1.6-2.2-0.6 0-1.4 0.9-1.6 2.2 0 0.2-0.5 4.1-1.7 4.1s-1.8-4.4-1.9-4.4c-0.2-1.4 0.1-3.4 0.2-4-0.4-1.2-1.8-5.6-0.5-7 0.5-0.4 1.1-0.6 1.9-0.6 0.6 0 1.3 0.1 2 0.3 0.6 0.1 1.1 0.2 1.6 0.2s1-0.1 1.6-0.2c0.7-0.2 1.4-0.3 2-0.3 0.8 0 1.4 0.2 1.8 0.7 1.3 1.4-0.1 5.8-0.5 7 0.1 0.5 0.4 2.5 0.2 3.9 0.1 0-0.5 4.4-1.8 4.4zM8 8.7c1.3 0.1 2.4 1.4 2.6 3.1 0.1 1.2 0.5 2.4 0.7 2.9 0.3-0.6 0.7-2.1 0.9-3.3 0.2-1.4-0.2-3.7-0.2-3.7v-0.2c0.7-2.1 1.4-5.3 0.8-6.1-0.3-0.3-0.7-0.4-1.2-0.4s-1.2 0.1-1.8 0.3c-0.6 0.1-1.2 0.2-1.8 0.2s-1.2-0.1-1.8-0.2c-0.6-0.2-1.3-0.3-1.8-0.3s-0.9 0.1-1.1 0.4c-0.7 0.7 0 4 0.8 6.1v0.2c0 0-0.4 2.3-0.2 3.7 0.2 1.2 0.6 2.7 0.9 3.3 0.2-0.6 0.6-1.7 0.7-2.9 0.1-1.6 1.2-3 2.5-3.1z"></path></g>
<g id="vaadin:touch"><path d="M12.62 6c-0.093-0.023-0.2-0.036-0.31-0.036s-0.217 0.013-0.319 0.038c-0.045-0.33-0.192-0.616-0.402-0.843-0.257-0.259-0.614-0.42-1.008-0.42-0.018 0-0.036 0-0.053 0.001-0-0-0.004-0-0.007-0-0.22 0-0.43 0.044-0.621 0.124-0.062-0.183-0.163-0.336-0.29-0.464-0.261-0.25-0.617-0.403-1.008-0.403-0.036 0-0.072 0.001-0.107 0.004l0.005-0c0.315-0.414 0.505-0.938 0.505-1.506 0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 0.813 0.388 1.535 0.989 1.992l0.006 2.664c-0.554 0.015-1.054 0.233-1.432 0.581-0.568 0.619-0.568 1.579-0.568 2.779 0 0.23 0 0.47 0 0.72 0.032 1.127 0.573 2.121 1.402 2.764l0.358 0.356c1.24 1.27 2.38 1.65 5.020 1.65 2.88 0 4.22-1.61 4.22-5.060v-2.51c0-0.77-0.22-2.12-1.38-2.43zM13 8.35v2.59c0 3.37-1.29 4.060-3.22 4.060-2.6 0-3.4-0.39-4.3-1.33l-0.36-0.37c-0.657-0.468-1.088-1.215-1.12-2.065-0-0.265-0-0.505-0-0.735-0.033-0.178-0.053-0.383-0.053-0.592 0-0.538 0.126-1.047 0.351-1.498 0.186-0.132 0.431-0.228 0.698-0.24l0.003 0.7v-0.22l-0.34 1.5c-0.010 0.022-0.016 0.048-0.016 0.075 0 0.103 0.083 0.186 0.186 0.186 0.075 0 0.14-0.045 0.17-0.11l1-1.211c0.003-0.014 0.005-0.029 0.005-0.045s-0.002-0.031-0.005-0.046l0-5.609c-0-0.012-0.001-0.026-0.001-0.039 0-0.256 0.083-0.492 0.223-0.684 0.091-0.096 0.223-0.158 0.369-0.158 0.010 0 0.020 0 0.030 0.001-0.001-0-0.001-0-0.001-0 0.21 0 0.38 0.17 0.38 0.38 0 0.004-0 0.007-0 0.011l0 3.869c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.32c0.010-0.251 0.217-0.451 0.47-0.451 0.011 0 0.021 0 0.032 0.001 0.023-0.005 0.051-0.008 0.079-0.008 0.232 0 0.42 0.188 0.42 0.42 0 0.010-0 0.020-0.001 0.029l0 1.329c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.64c0.034-0.218 0.22-0.383 0.445-0.383 0.019 0 0.038 0.001 0.057 0.004 0.013-0.002 0.030-0.003 0.047-0.003 0.112 0 0.214 0.043 0.291 0.113 0.1 0.129 0.16 0.294 0.16 0.473 0 0.006-0 0.012-0 0.017l0 0.819c0.003 0.252 0.193 0.459 0.438 0.49 0.021 0.003 0.043 0.004 0.066 0.004 0.241 0 0.442-0.166 0.496-0.39 0.026-0.112 0.082-0.204 0.16-0.273 0.033-0.015 0.071-0.024 0.111-0.024s0.078 0.009 0.112 0.024c0.38 0.249 0.628 0.674 0.628 1.157 0 0.057-0.003 0.113-0.010 0.169l0.001-0.007z"></path></g>
<g id="vaadin:train"><path d="M13 11.2v-7.4c0-1-0.8-1.8-1.8-1.8h-2.2v-1h2v-1h-6v1h2v1h-2.2c-1 0-1.8 0.8-1.8 1.8v7.4c0 1 0.8 1.8 1.8 1.8h0.2l-0.7 1h-1.3v1h0.7l-0.7 1h2l0.6-1h4.9l0.6 1h2l-0.7-1h0.6v-1h-1.3l-0.7-1h0.2c1 0 1.8-0.8 1.8-1.8zM4 3.9c0-0.5 0.4-0.9 0.9-0.9h6.1c0.6 0 1 0.4 1 0.9v2.1c0 0.6-0.4 1-0.9 1h-6.2c-0.5 0-0.9-0.4-0.9-0.9v-2.2zM4 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1zM9.9 14h-3.8l0.6-1h2.6l0.6 1zM10 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1z"></path></g>
<g id="vaadin:trash"><path d="M13 3s0-0.51-2-0.8v-0.7c-0.017-0.832-0.695-1.5-1.53-1.5-0 0-0 0-0 0h-3c-0.815 0.017-1.47 0.682-1.47 1.5 0 0 0 0 0 0v0.7c-0.765 0.068-1.452 0.359-2.007 0.806l-0.993-0.006v1h12v-1h-1zM6 1.5c0.005-0.274 0.226-0.495 0.499-0.5l3.001-0c0 0 0.001 0 0.001 0 0.282 0 0.513 0.22 0.529 0.499l0 0.561c-0.353-0.042-0.763-0.065-1.178-0.065-0.117 0-0.233 0.002-0.349 0.006-0.553-0-2.063-0-2.503 0.070v-0.57z"></path><path d="M2 5v1h1v9c1.234 0.631 2.692 1 4.236 1 0.002 0 0.003 0 0.005 0h1.52c0.001 0 0.003 0 0.004 0 1.544 0 3.002-0.369 4.289-1.025l-0.054-8.975h1v-1h-12zM6 13.92q-0.51-0.060-1-0.17v-6.75h1v6.92zM9 14h-2v-7h2v7zM11 13.72c-0.267 0.070-0.606 0.136-0.95 0.184l-0.050-6.904h1v6.72z"></path></g>
<g id="vaadin:tree-table"><path d="M6 10v-2h-2v-1h1v-2h-3v2h1v6h3v-2h-2v-1z"></path><path d="M0 0v16h16v-16h-16zM7 15h-6v-12h6v12zM11 15h-3v-12h3v12zM15 15h-3v-12h3v12z"></path></g>
<g id="vaadin:trending-down"><path d="M16 14h-4l1.29-1.29-4.29-4.3-3 3-6-6v-2.82l6 6 3-3 5.71 5.7 1.28-1.29 0.010 4z"></path></g>
<g id="vaadin:trending-up"><path d="M16 2h-4l1.29 1.29-4.29 4.3-3-3-6 6v2.82l6-6 3 3 5.71-5.7 1.28 1.29 0.010-4z"></path></g>
<g id="vaadin:trophy"><path d="M11.7 8c4.2-0.3 4.3-2.7 4.3-5h-3v-3h-10v3h-3c0 2.3 0.1 4.7 4.3 5 0.9 1.4 2.1 2 2.7 2v4c-3 0-3 2-3 2h8c0 0 0-2-3-2v-4c0.6 0 1.8-0.6 2.7-2zM13 4h2c-0.1 1.6-0.4 2.7-2.7 2.9 0.3-0.8 0.6-1.7 0.7-2.9zM1 4h2c0.1 1.2 0.4 2.1 0.7 2.9-2.2-0.2-2.6-1.3-2.7-2.9zM4.5 6.1c-0.5-1.7-0.5-3.1-0.5-3.1v-2h1v2c0 0 0 1.7 0.4 3.1 0.5 1.7 1.6 2.9 1.6 2.9s-1.8-0.2-2.5-2.9z"></path></g>
<g id="vaadin:truck"><path d="M6 3h10v7h-10v-7z"></path><path d="M15 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13 11c1.3 0 2.4 0.8 2.8 2h0.2v-2h-3z"></path><path d="M5 5h-4l-1 4v4h1.2c0.4-1.2 1.5-2 2.8-2s2.4 0.8 2.8 2h3.4c0.4-1.2 1.5-2 2.8-2h-8v-6zM4 9h-3l0.8-3h2.2v3z"></path><path d="M6 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:twin-col-select"><path d="M0 2v12h16v-12h-16zM7 13h-6v-10h6v10zM15 13h-6v-10h6v10z"></path><path d="M10 4h4v1h-4v-1z"></path><path d="M2 4h4v1h-4v-1z"></path><path d="M2 6h4v1h-4v-1z"></path><path d="M2 8h4v1h-4v-1z"></path></g>
<g id="vaadin:twitter-square"><path d="M0 0v16h16v-16h-16zM12.8 5.6c0 0.1 0 0.2 0 0.3 0 3.3-2.5 7-7 7-1.4 0-2.7-0.4-3.8-1.1 0.2 0 0.4 0 0.6 0 1.2 0 2.2-0.4 3.1-1.1-1.1 0-2-0.7-2.3-1.7 0.2 0 0.3 0 0.5 0s0.4 0 0.6-0.1c-1.1-0.2-2-1.2-2-2.4 0 0 0 0 0 0 0.3 0.2 0.7 0.3 1.1 0.3-0.7-0.4-1.1-1.2-1.1-2 0-0.5 0.1-0.9 0.3-1.2 1.2 1.5 3.1 2.4 5.1 2.5 0-0.2-0.1-0.4-0.1-0.6 0-1.4 1.1-2.5 2.5-2.5 0.7 0 1.3 0.3 1.8 0.8 0.6-0.1 1.1-0.3 1.6-0.6-0.2 0.6-0.6 1.1-1.1 1.4 0.5-0.1 1-0.2 1.4-0.4-0.3 0.6-0.7 1-1.2 1.4z"></path></g>
<g id="vaadin:twitter"><path d="M16 3c-0.6 0.3-1.2 0.4-1.9 0.5 0.7-0.4 1.2-1 1.4-1.8-0.6 0.4-1.3 0.6-2.1 0.8-0.6-0.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 0.3 0 0.5 0.1 0.7-2.7-0.1-5.2-1.4-6.8-3.4-0.3 0.5-0.4 1-0.4 1.7 0 1.1 0.6 2.1 1.5 2.7-0.5 0-1-0.2-1.5-0.4 0 0 0 0 0 0 0 1.6 1.1 2.9 2.6 3.2-0.3 0.1-0.6 0.1-0.9 0.1-0.2 0-0.4 0-0.6-0.1 0.4 1.3 1.6 2.3 3.1 2.3-1.1 0.9-2.5 1.4-4.1 1.4-0.3 0-0.5 0-0.8 0 1.5 0.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3 0-0.1 0-0.3 0-0.4 0.7-0.5 1.3-1.1 1.7-1.8z"></path></g>
<g id="vaadin:umbrella"><path d="M5.36 0.9l-0.27-0.57c-0.083-0.197-0.275-0.333-0.499-0.333-0.1 0-0.193 0.027-0.274 0.074-0.217 0.074-0.372 0.279-0.372 0.52 0 0.087 0.020 0.169 0.056 0.242l0.319 0.577c-6.2 3.49-3.9 10.59-3.9 10.59h0.060c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21l0.12-0.060c0.477-0.742 0.998-1.387 1.58-1.97l3.37 7.070c0.246 0.619 0.729 1.098 1.334 1.335 0.168 0.053 0.343 0.080 0.524 0.080 0.254 0 0.495-0.053 0.713-0.149l0.359-0.176c0.263-0.145 0.462-0.38 0.558-0.662 0.117-0.276 0.183-0.586 0.183-0.913 0-0.401-0.1-0.778-0.277-1.108-0.102-0.189-0.311-0.324-0.551-0.324-0.076 0-0.149 0.014-0.217 0.038-0.182 0.089-0.308 0.277-0.308 0.495 0 0.093 0.023 0.18 0.064 0.257s0.529 1.067-0.101 1.337-1.19-0.73-1.19-0.73l-3.42-7.060c0.372-0.043 0.803-0.067 1.24-0.067s0.868 0.024 1.292 0.072l0.068-0.065c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21h0.060s-3.98-6.41-10.62-3.58zM7.36 6.36c-1.034 0.399-1.834 1.209-2.211 2.224-0.55-1.082-0.909-2.375-1.007-3.74-0.142-2.244 0.608-2.924 0.608-2.924l0.77-0.32c1.084 0.101 2.052 0.534 2.816 1.195 0.976 0.895 1.747 2.009 2.233 3.265-0.339-0.021-0.752-0.067-1.175-0.067-0.724 0-1.417 0.134-2.054 0.379z"></path></g>
<g id="vaadin:underline"><path d="M2 15h12v1h-12v-1z"></path><path d="M11 0v8.4c0 1.5-1.1 2.6-2.6 2.6h-0.8c-1.5 0-2.6-1.1-2.6-2.6v-8.4h-3v8.4c0 3.1 2.5 5.6 5.6 5.6h0.9c3.1 0 5.6-2.5 5.6-5.6v-8.4h-3.1z"></path></g>
<g id="vaadin:unlink"><path d="M8 0h1v4h-1v-4z"></path><path d="M8 12h1v4h-1v-4z"></path><path d="M7 9h-4c-0.552 0-1-0.448-1-1s0.448-1 1-1h4v-2h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h4v-2z"></path><path d="M13 5h-4v2h4c0.552 0 1 0.448 1 1s-0.448 1-1 1h-4v2h4c1.657 0 3-1.343 3-3s-1.343-3-3-3z"></path><path d="M4.51 15.44l2.49-3.44h-1.23l-2.080 2.88 0.82 0.56z"></path><path d="M12.49 15.44l-2.49-3.44h1.23l2.080 2.88-0.82 0.56z"></path><path d="M12.49 0.99l-2.49 3.010h1.23l2.080-2.66-0.82-0.35z"></path><path d="M4.51 0.99l2.49 3.010h-1.23l-2.080-2.66 0.82-0.35z"></path></g>
<g id="vaadin:unlock"><path d="M8 8v-3.1c0-2.2-1.8-3.9-3.9-3.9h-0.3c-2.2 0-3.8 1.7-3.8 3.9v2.1h2v-2.1c0-1.1 0.7-1.9 1.8-1.9h0.3c1 0 1.9 0.8 1.9 1.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-7zM11 14h-1v-1.8c-0.6 0-1-0.6-1-1.1 0-0.6 0.4-1.1 1-1.1s1 0.4 1 0.9v3.1z"></path></g>
<g id="vaadin:upload-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 0l-5 5h3v8h4v-8h3z"></path></g>
<g id="vaadin:upload"><path d="M11 10v2h-6v-2h-5v6h16v-6h-5zM4 14h-2v-2h2v2z"></path><path d="M13 5l-5-5-5 5h3v6h4v-6z"></path></g>
<g id="vaadin:user-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path><path d="M5.4 7h-0.4v-0.1c0.6-0.2 1-0.8 1-1.4 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.7 0.4 1.2 1 1.4v0.1h-0.4c-0.9 0-1.6 0.7-1.6 1.6v2.4h5v-2.4c0-0.9-0.7-1.6-1.6-1.6z"></path></g>
<g id="vaadin:user-check"><path d="M7.5 14.4c-0.8-0.8-0.8-2 0-2.8s2-0.8 2.8 0l0.6 0.6 1.9-2.1c-0.7-0.4-1.3-0.4-2-0.4-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h8l-1.6-1.6z"></path><path d="M12.8 16h2.1c0 0-0.1-0.9-0.2-2l-1.9 2z"></path><path d="M11 16c-0.3 0-0.5-0.1-0.7-0.3l-2-2c-0.4-0.4-0.4-1 0-1.4s1-0.4 1.4 0l1.3 1.3 3.3-3.6c0.4-0.4 1-0.4 1.4-0.1 0.4 0.4 0.4 1 0.1 1.4l-4 4.3c-0.3 0.3-0.5 0.4-0.8 0.4 0 0 0 0 0 0z"></path></g>
<g id="vaadin:user-clock"><path d="M14 13h-3v-3h1v2h2z"></path><path d="M16 12.5c0-2.5-2-4.5-4.5-4.5-0.7 0-1.4 0.2-2 0.5 0.2-0.3 0.8-0.3 1.4-1.2 0 0 2.7-7.3-2.9-7.3s-2.9 7.3-2.9 7.3c0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h10.4c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5h3.4c0 0 0-0.2 0-0.5 0.6-0.8 1.1-1.8 1.1-3z"></path></g>
<g id="vaadin:user-heart"><path d="M14.2 16h0.6c0 0 0-0.2 0-0.6l-0.6 0.6z"></path><path d="M8.6 13.9c-0.7-0.7-1-1.8-0.8-2.8s0.8-1.8 1.7-2.1c0-0.1-0.1-0.2-0.1-0.2 0-0.6 0.8-0.4 1.4-1.5 0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h9.6l-2.1-2.1z"></path><path d="M14.9 10.1c-0.2-0.1-0.5-0.1-0.7-0.1-0.7 0-1.3 0.6-1.7 1.1-0.4-0.5-1-1.1-1.7-1.1-0.3 0-0.5 0-0.7 0.1-1.2 0.4-1.4 2-0.5 2.9l3 2.9 3-2.9c0.8-0.9 0.5-2.5-0.7-2.9z"></path></g>
<g id="vaadin:user-star"><path d="M8.92 13.67l-1.61-1.53-1.5-1.42 2-0.29 2.25-0.32 0.29-0.57c-0.006 0-0.013 0-0.020 0-0.482 0-0.884-0.34-0.979-0.794-0.001-0.617 0.799-0.417 1.429-1.457 0.080-0.020 2.82-7.29-2.78-7.29s-2.86 7.27-2.86 7.27c0.63 1 1.44 0.85 1.43 1.45s-0.74 0.8-1.43 0.87c-1.14 0.13-2.14-0.13-3.14 1.76-0.6 1.090-0.85 4.65-0.85 4.65h7.36v-0.17z"></path><path d="M11.72 16h0.56l-0.28-0.14-0.28 0.14z"></path><path d="M12 14.73l2.47 1.27-0.47-2.69 2-1.9-2.76-0.39-1.24-2.45-1.24 2.45-2.76 0.39 2 1.9-0.47 2.69 2.47-1.27z"></path></g>
<g id="vaadin:user"><path d="M8 0c-5.6 0-2.9 7.3-2.9 7.3 0.6 1 1.4 0.8 1.4 1.5 0 0.6-0.7 0.8-1.4 0.9-1.1 0-2.1-0.2-3.1 1.6-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0 0-0.3-3.6-0.8-4.7-1-1.9-2-1.6-3.1-1.7-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0.1 2.7-7.2-2.9-7.2z"></path></g>
<g id="vaadin:users"><path d="M5.3 9.7c-0.4 0-0.9-0.2-0.9-0.6s0.5-0.3 0.9-1c0 0 1.8-4.9-1.8-4.9s-1.8 4.9-1.8 4.9c0.4 0.7 0.9 0.6 0.9 1s-0.5 0.6-0.9 0.6c-0.6 0.1-1.1 0-1.7 0.6v5.7h5c0.2-1.7 0.7-5.2 1.1-6.1 0 0 0.1-0.1 0.1-0.1-0.2-0.1-0.5-0.1-0.9-0.1z"></path><path d="M16 9.5c-0.7-0.8-1.3-0.7-2-0.8-0.5-0.1-1.1-0.2-1.1-0.7s0.6-0.3 1.1-1.2c0 0 2.1-5.9-2.2-5.9-4.4 0.1-2.3 6-2.3 6 0.5 0.8 1.1 0.7 1.1 1.1 0 0.5-0.6 0.6-1.1 0.7-0.9 0.1-1.7 0-2.5 1.5-0.4 0.9-1 5.8-1 5.8h10v-6.5z"></path></g>
<g id="vaadin:vaadin-h"><path d="M15.21 0.35c-0.436 0-0.79 0.354-0.79 0.79v0 0.46c0 0.5-0.32 0.85-1.070 0.85h-3.55c-1.61 0-1.73 1.19-1.8 1.83v0c-0.060-0.64-0.18-1.83-1.79-1.83h-3.57c-0.75 0-1.090-0.37-1.090-0.86v-0.45c0-0.006 0-0.013 0-0.020 0-0.425-0.345-0.77-0.77-0.77-0 0-0 0-0 0h0c-0 0-0 0-0 0-0.431 0-0.78 0.349-0.78 0.78 0 0.004 0 0.007 0 0.011v-0.001 1.32c0 1.54 0.7 2.31 2.34 2.31h3.66c1.090 0 1.19 0.46 1.19 0.9 0 0 0 0.090 0 0.13 0.048 0.428 0.408 0.758 0.845 0.758s0.797-0.33 0.845-0.754l0-0.004s0-0.080 0-0.13c0-0.44 0.1-0.9 1.19-0.9h3.61c1.61 0 2.32-0.77 2.32-2.31v-1.32c0-0.436-0.354-0.79-0.79-0.79v0z"></path><path d="M11.21 7.38c-0.012-0-0.026-0.001-0.040-0.001-0.453 0-0.835 0.301-0.958 0.714l-0.002 0.007-2.21 4.21-2.3-4.2c-0.122-0.425-0.507-0.731-0.963-0.731-0.013 0-0.026 0-0.039 0.001l0.002-0c-0.012-0-0.025-0.001-0.039-0.001-0.58 0-1.050 0.47-1.050 1.050 0 0.212 0.063 0.41 0.171 0.575l-0.002-0.004 3.29 6.1c0.15 0.333 0.478 0.561 0.86 0.561s0.71-0.228 0.858-0.555l0.002-0.006 3.34-6.1c0.090-0.152 0.144-0.335 0.144-0.53 0-0.58-0.47-1.050-1.050-1.050-0.005 0-0.010 0-0.014 0h0.001z"></path></g>
<g id="vaadin:vaadin-v"><path d="M5.8 7.16h-0.13c-0.44 0-0.9-0.1-0.9-1.19v-3.62c0-1.64-0.77-2.35-2.31-2.35h-1.32c-0.436 0-0.79 0.354-0.79 0.79v0c0 0.436 0.354 0.79 0.79 0.79v0h0.46c0.5 0 0.85 0.32 0.85 1.070v3.55c0 1.61 1.19 1.73 1.83 1.8v0c-0.64 0.060-1.83 0.18-1.83 1.79v3.55c0 0.75-0.37 1.090-0.86 1.090h-0.45c-0.006-0-0.013-0-0.020-0-0.425 0-0.77 0.345-0.77 0.77 0 0 0 0 0 0v-0c0 0 0 0 0 0 0 0.431 0.349 0.78 0.78 0.78 0.004 0 0.007-0 0.011-0h1.319c1.54 0 2.31-0.7 2.31-2.34v-3.59c0-1.090 0.46-1.19 0.9-1.19h0.13c0.428-0.048 0.758-0.408 0.758-0.845s-0.33-0.797-0.754-0.845l-0.004-0z"></path><path d="M15.1 7.19v0l-6.1-3.32c-0.152-0.090-0.335-0.144-0.53-0.144-0.58 0-1.050 0.47-1.050 1.050 0 0.005 0 0.010 0 0.014v-0.001c-0 0.012-0.001 0.026-0.001 0.040 0 0.453 0.301 0.835 0.714 0.958l0.007 0.002 4.21 2.26-4.24 2.25c-0.425 0.122-0.731 0.507-0.731 0.963 0 0.013 0 0.026 0.001 0.039l-0-0.002c-0 0.012-0.001 0.025-0.001 0.039 0 0.58 0.47 1.050 1.050 1.050 0.212 0 0.41-0.063 0.575-0.171l-0.004 0.002 6.1-3.29c0.333-0.15 0.561-0.478 0.561-0.86s-0.228-0.71-0.555-0.858l-0.006-0.002z"></path></g>
<g id="vaadin:viewport"><path d="M1 4h-1v-4h4v1h-3z"></path><path d="M12 1v-1h4v4h-1v-3z"></path><path d="M15 12h1v4h-4v-1h3z"></path><path d="M4 15v1h-4v-4h1v3z"></path><path d="M13 3v10h-10v-10h10zM14 2h-12v12h12v-12z"></path></g>
<g id="vaadin:vimeo-square"><path d="M0 0v16h16v-16h-16zM13.9 5.3c-0.7 3.8-4.4 7-5.5 7.7s-2.2-0.3-2.5-1.1c-0.4-0.9-1.7-5.7-2-6.1-0.4-0.3-1.4 0.5-1.4 0.5l-0.5-0.7c0 0 2-2.4 3.6-2.7s1.6 2.5 2 4.1c0.4 1.5 0.6 2.4 1 2.4 0.3 0 1-0.9 1.7-2.2s0-2.5-1.4-1.6c0.5-3.3 5.7-4.1 5-0.3z"></path></g>
<g id="vaadin:vimeo"><path d="M15.9 4.4c-0.9 5-5.9 9.3-7.4 10.3s-2.9-0.4-3.4-1.4c-0.5-1.3-2.2-7.6-2.7-8.2-0.4-0.5-1.8 0.6-1.8 0.6l-0.6-0.9c0 0 2.7-3.3 4.8-3.7 2.2-0.4 2.2 3.4 2.7 5.5 0.5 2 0.9 3.2 1.3 3.2s1.3-1.1 2.2-2.9c0.9-1.7 0-3.3-1.9-2.2 0.8-4.3 7.7-5.4 6.8-0.3z"></path></g>
<g id="vaadin:volume-down"><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-off"><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-up"><path d="M15 8.5c0 2.3-0.8 4.5-2 6.2l0.7 0.8c1.5-1.9 2.4-4.4 2.4-7 0-3.1-1.2-5.9-3.2-8l-0.5 1c1.6 1.8 2.6 4.3 2.6 7z"></path><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume"><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:wallet"><path d="M14.5 4h-12.12c-0.057 0.012-0.123 0.018-0.19 0.018-0.552 0-1-0.448-1-1 0-0.006 0-0.013 0-0.019l12.81-0.499v-1.19c0.005-0.041 0.008-0.089 0.008-0.138 0-0.652-0.528-1.18-1.18-1.18-0.049 0-0.097 0.003-0.144 0.009l-11.374 1.849c-0.771 0.289-1.31 1.020-1.31 1.877 0 0.011 0 0.023 0 0.034l-0 10.728c-0 0.003-0 0.006-0 0.010 0 0.828 0.672 1.5 1.5 1.5 0 0 0 0 0 0h13c0 0 0 0 0 0 0.828 0 1.5-0.672 1.5-1.5 0-0.004-0-0.007-0-0.011v-8.999c0-0.012 0.001-0.027 0.001-0.041 0-0.801-0.649-1.45-1.45-1.45-0.018 0-0.036 0-0.053 0.001zM13 11c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:warning"><path d="M8 1l-8 14h16l-8-14zM8 13c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM7 10v-4h2v4h-2z"></path></g>
<g id="vaadin:workplace"><path d="M11,3 L11,0 L2,0 L2,14 L0,14 L0,15 L7,15 L7,10 L9,10 L9,8 L14,8 L14,3 L11,3 Z M6,10 L4,10 L4,8 L6,8 L6,10 Z M6,7 L4,7 L4,5 L6,5 L6,7 Z M6,4 L4,4 L4,2 L6,2 L6,4 Z M9,7 L7,7 L7,5 L9,5 L9,7 Z M9,4 L7,4 L7,2 L9,2 L9,4 Z M13,7 L11,7 L11,5 L13,5 L13,7 Z M14,11 L16,11 L16,16 L8,16 L8,11 L10,11 L10,9 L14,9 L14,11 Z" fill-rule="nonzero"></path></g>
<g id="vaadin:wrench"><path d="M15.5 13.4l-7.8-7.8c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.2 1.8 4 4 4 0.6 0 1.1-0.1 1.6-0.3l7.8 7.8c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1zM6.8 7.6l-1.4-1.4 0.9-0.9 1.4 1.4-0.9 0.9zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path></g>
<g id="vaadin:youtube-square"><path d="M7.9 6c0.2 0 0.3-0.2 0.3-0.5v-1.4c0-0.3-0.1-0.5-0.3-0.5s-0.3 0.2-0.3 0.5v1.4c0 0.3 0.1 0.5 0.3 0.5z"></path><path d="M7.1 11.9c-0.1 0.2-0.3 0.3-0.4 0.3s-0.1 0-0.1-0.1c0 0 0-0.1 0-0.2v-2.5h-0.6v2.6c0 0.2 0 0.4 0.1 0.5 0.1 0.2 0.2 0.2 0.4 0.2s0.4-0.1 0.7-0.4v0.4h0.6v-3.3h-0.7v2.5z"></path><path d="M3.8 8.9h0.7v3.8h0.7v-3.8h0.7v-0.7h-2.1z"></path><path d="M9.4 9.3c-0.2 0-0.4 0.2-0.6 0.4v-1.5h-0.6v4.4h0.6v-0.3c0.2 0.2 0.4 0.4 0.6 0.4s0.4-0.1 0.5-0.4c0-0.1 0.1-0.4 0.1-0.7v-1.3c0-0.3 0-0.5-0.1-0.7-0.1-0.1-0.2-0.3-0.5-0.3zM9.4 11.7c0 0.3-0.1 0.4-0.3 0.4-0.1 0-0.2 0-0.3-0.1v-2c0.1-0.1 0.2-0.1 0.3-0.1 0.2 0 0.3 0.2 0.3 0.5v1.3z"></path><path d="M11.3 9.3c-0.3 0-0.5 0.1-0.7 0.3-0.1 0.2-0.2 0.4-0.2 0.8v1.2c0 0.4 0.1 0.6 0.2 0.8 0.2 0.2 0.4 0.3 0.7 0.3s0.6-0.1 0.7-0.4c0.1-0.1 0.1-0.2 0.1-0.4 0-0.1 0-0.2 0-0.4v-0.1h-0.6c0 0.2 0 0.4 0 0.4 0 0.2-0.1 0.2-0.3 0.2s-0.3-0.2-0.3-0.5v-0.6h1.2v-0.7c0-0.4-0.1-0.6-0.2-0.8 0 0.1-0.3-0.1-0.6-0.1zM11.6 10.6h-0.6v-0.3c0-0.3 0.1-0.5 0.3-0.5s0.3 0.2 0.3 0.5v0.3z"></path><path d="M0 0v16h16v-16h-16zM9.3 3.1h0.6v2.5c0 0.1 0 0.2 0 0.2 0 0.1 0 0.2 0.1 0.2s0.2-0.1 0.4-0.3v-2.6h0.6v3.3h-0.6v-0.3c-0.2 0.3-0.5 0.4-0.7 0.4s-0.3-0.1-0.4-0.2c0-0.1-0.1-0.3-0.1-0.5v-2.7zM7 4.2c0-0.3 0-0.6 0.2-0.8s0.4-0.3 0.7-0.3c0.3 0 0.5 0.1 0.7 0.3 0.1 0.2 0.2 0.4 0.2 0.8v1.2c0 0.4-0.1 0.6-0.2 0.8-0.2 0.2-0.4 0.3-0.7 0.3s-0.5-0.1-0.7-0.3c-0.2-0.2-0.2-0.4-0.2-0.8v-1.2zM5.3 2l0.5 1.8 0.5-1.8h0.7l-0.8 2.7v1.8h-0.7v-1.8c-0.1-0.4-0.2-0.8-0.4-1.5-0.2-0.4-0.3-0.8-0.5-1.2h0.7zM12.8 12.9c-0.1 0.5-0.6 0.9-1.1 1-1.2 0.1-2.5 0.1-3.7 0.1s-2.5 0-3.7-0.1c-0.5-0.1-1-0.4-1.1-1-0.2-0.8-0.2-1.6-0.2-2.4 0-0.7 0-1.5 0.2-2.3 0.1-0.5 0.6-0.9 1.1-1 1.2-0.1 2.5-0.1 3.7-0.1s2.5 0 3.7 0.1c0.5 0.1 1 0.4 1.1 1 0.2 0.8 0.2 1.6 0.2 2.3 0 0.8 0 1.6-0.2 2.4z"></path></g>
<g id="vaadin:youtube"><path d="M6.6 0h-0.9l-0.6 2.3-0.6-2.3h-1c0.2 0.6 0.4 1.1 0.6 1.7 0.3 0.8 0.5 1.5 0.5 1.9v2.4h0.9v-2.4l1.1-3.6zM9 4.5v-1.5c0-0.5-0.1-0.8-0.3-1.1s-0.5-0.4-0.9-0.4c-0.4 0-0.7 0.2-0.9 0.5-0.2 0.2-0.3 0.5-0.3 1v1.6c0 0.5 0.1 0.8 0.3 1 0.2 0.3 0.5 0.4 0.9 0.4s0.7-0.2 0.9-0.5c0.2-0.1 0.3-0.5 0.3-1zM8.2 4.7c0 0.4-0.1 0.6-0.4 0.6s-0.4-0.2-0.4-0.6v-1.9c0-0.4 0.1-0.6 0.4-0.6s0.4 0.2 0.4 0.6v1.9zM12 6v-4.5h-0.8v3.4c-0.2 0.3-0.3 0.4-0.5 0.4-0.1 0-0.2-0.1-0.2-0.2 0 0 0-0.1 0-0.3v-3.3h-0.8v3.5c0 0.3 0 0.5 0.1 0.7 0 0.2 0.2 0.3 0.5 0.3s0.6-0.2 0.9-0.5v0.5h0.8z"></path><path d="M12.4 10.5c-0.3 0-0.4 0.2-0.4 0.6v0.4h0.8v-0.4c0-0.4-0.1-0.6-0.4-0.6z"></path><path d="M9.5 10.5c-0.1 0-0.3 0.1-0.4 0.2v2.7c0.1 0.1 0.3 0.2 0.4 0.2 0.2 0 0.3-0.2 0.3-0.6v-1.9c0-0.4-0.1-0.6-0.3-0.6z"></path><path d="M14.4 8.3c-0.2-0.7-0.8-1.3-1.4-1.3-1.6-0.2-3.3-0.2-5-0.2s-3.3 0-5 0.2c-0.6 0-1.2 0.6-1.4 1.3-0.2 1-0.2 2.1-0.2 3.1s0 2.1 0.2 3.1c0.2 0.7 0.7 1.2 1.4 1.3 1.7 0.2 3.3 0.2 5 0.2s3.3 0 5-0.2c0.7-0.1 1.3-0.6 1.4-1.3 0.2-1 0.2-2.1 0.2-3.1s0-2.1-0.2-3.1zM5.2 9.2h-1v5.1h-0.9v-5.1h-0.9v-0.9h2.8v0.9zM7.6 14.3h-0.8v-0.5c-0.3 0.4-0.6 0.5-0.9 0.5s-0.4-0.1-0.5-0.3c0-0.1-0.1-0.3-0.1-0.7v-3.5h0.8v3.2c0 0.2 0 0.3 0 0.3 0 0.1 0.1 0.2 0.2 0.2 0.2 0 0.3-0.1 0.5-0.4v-3.3h0.8v4.5zM10.6 12.9c0 0.4 0 0.7-0.1 0.9-0.1 0.3-0.3 0.5-0.6 0.5s-0.6-0.2-0.8-0.5v0.4h-0.8v-5.9h0.8v1.9c0.3-0.3 0.5-0.5 0.8-0.5s0.5 0.2 0.6 0.5c0.1 0.2 0.1 0.5 0.1 0.9v1.8zM13.6 12.2h-1.6v0.8c0 0.4 0.1 0.6 0.4 0.6 0.2 0 0.3-0.1 0.4-0.3 0 0 0-0.2 0-0.5h0.8v0.1c0 0.3 0 0.4 0 0.5 0 0.2-0.1 0.3-0.2 0.5-0.2 0.3-0.5 0.5-1 0.5-0.4 0-0.7-0.2-1-0.5-0.2-0.2-0.3-0.6-0.3-1v-1.5c0-0.5 0.1-0.8 0.2-1 0.2-0.3 0.5-0.5 1-0.5 0.4 0 0.7 0.2 0.9 0.5 0.2 0.2 0.2 0.6 0.2 1v0.8z"></path></g>
</defs></svg>`;Ea.register("vaadin",16,Ta);_("vaadin-input-container",u`
    :host {
      background: var(--_background);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: var(--vaadin-input-field-value-font-weight, 500);
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      --_input-height: var(--lumo-text-field-size, var(--lumo-size-m));
      /* Default values */
      --_background: var(--vaadin-input-field-background, var(--lumo-contrast-10pct));
      --_hover-highlight: var(--vaadin-input-field-hover-highlight, var(--lumo-contrast-50pct));
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
      --_icon-color: var(--vaadin-input-field-icon-color, var(--lumo-contrast-60pct));
      --_icon-size: var(--vaadin-input-field-icon-size, var(--lumo-icon-size-m));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_invalid-hover-highlight: var(--vaadin-input-field-invalid-hover-highlight, var(--lumo-error-color-50pct));
      --_disabled-background: var(--vaadin-input-field-disabled-background, var(--lumo-contrast-5pct));
      --_disabled-value-color: var(--vaadin-input-field-disabled-value-color, var(--lumo-disabled-text-color));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background: var(--_hover-highlight);
      opacity: 0;
      transition:
        transform 0.15s,
        opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--vaadin-input-field-height, var(--_input-height));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-30pct));
    }

    /* Disabled */
    :host([disabled]) {
      background: var(--_disabled-background);
    }

    :host([disabled]) ::slotted(:not([slot$='fix'])) {
      -webkit-text-fill-color: var(--_disabled-value-color);
      color: var(--_disabled-value-color);
    }

    /* Invalid */
    :host([invalid]) {
      background: var(--_invalid-background);
    }

    :host([invalid]:not([readonly]))::after {
      background: var(--_invalid-hover-highlight);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--_icon-color);
      width: var(--_icon-size);
      height: var(--_icon-size);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oa=u`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;_("",Oa,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ln=u`
  :host {
    --_helper-spacing: var(--vaadin-input-field-helper-spacing, 0.4em);
  }

  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  [part='helper-text'] {
    display: block;
    color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
    font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-helper-font-weight, 400);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const La=u`
  [part='label'] {
    align-self: flex-start;
    color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    font-weight: var(--vaadin-input-field-label-font-weight, 500);
    font-size: var(--vaadin-input-field-label-font-size, var(--lumo-font-size-s));
    transition: color 0.2s;
    line-height: 1;
    padding-inline-start: calc(var(--lumo-border-radius-m) / 4);
    padding-inline-end: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--vaadin-input-field-focused-label-color, var(--lumo-primary-text-color));
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--vaadin-input-field-hovered-label-color, var(--lumo-body-text-color));
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    }
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-error-font-weight, 400);
    color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;_("",La,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pn=u`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
    font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_input-height: var(--vaadin-input-field-height, var(--lumo-text-field-size));
    --_disabled-value-color: var(--vaadin-input-field-disabled-value-color, var(--lumo-disabled-text-color));
  }

  :host::before {
    height: var(--_input-height);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused]):not([disabled])) [part='input-field']::after {
    opacity: var(--vaadin-input-field-hover-highlight-opacity, 0.1);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([disabled])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused]):not([disabled])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Opt-in focus-ring when using pointer devices */
  /* This applies a focus-ring as box-shadow when the element is focused, but
     the ring is only visible / has a width when the respective CSS property is
     "enabled" using a value of 1 */
  :host([focused]) [part='input-field'] {
    /* Borders are implemented using box-shadows as well. To avoid overriding 
       the border on focus, even if the pointer focus-ring is disabled, we need to:
       - Duplicate the border box shadow for this rule
       - Remove the border (by using width of 0) when the focus-ring is visible,
         which is the same behavior as for the keyboard focus-ring below
       - Apply the border when the focus ring is not visible
    */
    --_pointer-focus-visible: clamp(0, var(--lumo-input-field-pointer-focus-visible, 0), 1);
    --_conditional-border-width: calc(calc(1 - var(--_pointer-focus-visible)) * var(--_input-border-width));
    --_conditional-focus-ring-width: calc(var(--_pointer-focus-visible) * var(--_focus-ring-width));
    box-shadow:
      inset 0 0 0 var(--_conditional-border-width) var(--_input-border-color),
      0 0 0 var(--_conditional-focus-ring-width) var(--_focus-ring-color);
  }

  /* Focus-ring when using keyboard navigation */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted([slot$='fix']) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([disabled]) [part='input-field'] ::slotted(:not([slot$='fix'])) {
    color: var(--_disabled-value-color);
    -webkit-text-fill-color: var(--_disabled-value-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
    --_focus-ring-color: var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,$0=[La,Oa,Ln,Pn];_("",$0,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-text-field",$0,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rn=u`
  :host {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
      var(--vaadin-input-field-top-start-radius, var(--__border-radius))
      var(--vaadin-input-field-top-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
    --_border-radius: var(--vaadin-input-field-border-radius, 0);
    --_input-border-width: var(--vaadin-input-field-border-width, 0px);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    /* stylelint-disable-next-line length-zero-no-unit */
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  :host([dir='rtl']) {
    border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
      var(--vaadin-input-field-top-end-radius, var(--_border-radius))
      var(--vaadin-input-field-top-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Reset the native input styles */
  ::slotted(input) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  ::slotted(*) {
    flex: none;
  }

  ::slotted(:is(input, textarea))::placeholder {
    /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
    /* because ::slotted(...)::placeholder does not work in Safari. */
    font: inherit;
    color: inherit;
    /* Override default opacity in Firefox */
    opacity: 1;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $n=s=>class extends s{static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",t=>{t.target===this&&t.preventDefault()}),this.addEventListener("click",t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(e=>e.focus&&e.focus())})}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-input-container",Rn,{moduleId:"vaadin-input-container-styles"});let Dn=class extends $n($(Wt(A))){static get is(){return"vaadin-input-container"}static get template(){return T`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}};E(Dn);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nn=u`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fn=u`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bn=u`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }

  @media (forced-colors: active) {
    :host(:not([readonly])) [part='input-field'] {
      outline: 1px solid;
      outline-offset: -1px;
    }
    :host([focused]) [part='input-field'] {
      outline-width: 2px;
    }
    :host([disabled]) [part='input-field'] {
      outline-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pa=[Bn,Fn,Nn];/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vn extends T0{constructor(i,t,e={}){const{uniqueIdPrefix:a}=e;super(i,"input","input",{initializer:(r,n)=>{n.value&&(r.value=n.value),n.type&&r.setAttribute("type",n.type),r.id=this.defaultId,typeof t=="function"&&t(r)},useUniqueId:!0,uniqueIdPrefix:a})}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ra=m(s=>class extends s{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged",sync:!0},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0}}}constructor(){super(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(t){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=t)}clear(){this.value="",this._inputElementValue=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){this.inputElement&&(this._inputElementValue=t??"")}_inputElementChanged(t,e){t?this._addInputListeners(t):e&&this._removeInputListeners(e)}_onInput(t){const e=t.composedPath()[0];this.__userInput=t.isTrusted,this.value=e.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,e){this._toggleHasValue(this._hasValue),!(t===""&&e===void 0)&&(this.__userInput||this._forwardInputValue(t))}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hn=s=>class extends Ra(ii(s)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",t=>this._onClearButtonMouseDown(t)),this.clearElement.addEventListener("click",t=>this._onClearButtonClick(t)))}_onClearButtonClick(t){t.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(t){this._shouldKeepFocusOnClearMousedown()&&t.preventDefault(),ci||this.inputElement.focus()}_onEscape(t){super._onEscape(t),this.clearButtonVisible&&this.value&&!this.readonly&&(t.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_shouldKeepFocusOnClearMousedown(){return I0(this.inputElement)}};/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let D0=class extends T0{constructor(i,t,e,a={}){super(i,t,e,{...a,useUniqueId:!0})}initCustomNode(i){this.__updateNodeId(i),this.__notifyChange(i)}teardownNode(i){const t=this.getSlotChild();t&&t!==this.defaultNode?this.__notifyChange(t):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const i=super.attachDefaultNode();return i&&this.__updateNodeId(i),i}restoreDefaultNode(){}updateDefaultNode(i){this.__notifyChange(i)}observeNode(i){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(t=>{t.forEach(e=>{const a=e.target,r=a===this.node;e.type==="attributes"?r&&this.__updateNodeId(a):(r||a.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(i,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(i){return i?i.nodeType===Node.ELEMENT_NODE&&(customElements.get(i.localName)||i.children.length>0)||i.textContent&&i.textContent.trim()!=="":!1}__notifyChange(i){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(i),node:i}}))}__updateNodeId(i){const t=!this.nodes||i===this.nodes[0];i.nodeType===Node.ELEMENT_NODE&&(!this.multiple||t)&&!i.id&&(i.id=this.defaultId)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let jn=class extends D0{constructor(i){super(i,"error-message","div")}setErrorMessage(i){this.errorMessage=i,this.updateDefaultNode(this.node)}setInvalid(i){this.invalid=i,this.updateDefaultNode(this.node)}initAddedNode(i){i!==this.defaultNode&&this.initCustomNode(i)}initNode(i){this.updateDefaultNode(i)}initCustomNode(i){i.textContent&&!this.errorMessage&&(this.errorMessage=i.textContent.trim()),super.initCustomNode(i)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(i){const{errorMessage:t,invalid:e}=this,a=!!(e&&t&&t.trim()!=="");i&&(i.textContent=a?t:"",i.hidden=!a,a&&sn(t,{mode:"assertive"})),super.updateDefaultNode(i)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Wn=class extends D0{constructor(i){super(i,"helper",null)}setHelperText(i){this.helperText=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:i}=this;if(i&&i.trim()!==""){this.tagName="div";const t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(i){i&&(i.textContent=this.helperText),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let $a=class extends D0{constructor(i){super(i,"label","label")}setLabel(i){this.label=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:i}=this;if(i&&i.trim()!==""){const t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(i){i&&(i.textContent=this.label),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qn=m(s=>class extends qt(s){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new $a(this),this._labelController.addEventListener("slot-content-changed",t=>{this.toggleAttribute("has-label",t.detail.hasContent)})}get _labelId(){const t=this._labelNode;return t&&t.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Da=m(s=>class extends s{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1,sync:!0},manualValidation:{type:Boolean,value:!1},required:{type:Boolean,reflectToAttribute:!0,sync:!0}}}validate(){const t=this.checkValidity();return this._setInvalid(!t),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:t}})),t}checkValidity(){return!this.required||!!this.value}_setInvalid(t){this._shouldSetInvalid(t)&&(this.invalid=t)}_shouldSetInvalid(t){return!0}_requestValidation(){this.manualValidation||this.validate()}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Na=s=>class extends Da(qn(qt(s))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new nn(this),this._helperController=new Wn(this),this._errorController=new jn(this),this._errorController.addEventListener("slot-content-changed",t=>{this.toggleAttribute("has-error-message",t.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",t=>{const{hasContent:e,node:a}=t.detail;this.__labelChanged(e,a)}),this._helperController.addEventListener("slot-content-changed",t=>{const{hasContent:e,node:a}=t.detail;this.toggleAttribute("has-helper",e),this.__helperChanged(e,a)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(t,e){t?this._fieldAriaController.setHelperId(e.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(t){this._fieldAriaController.setAriaLabel(t)}_accessibleNameRefChanged(t){this._fieldAriaController.setLabelId(t,!0)}__labelChanged(t,e){t?this._fieldAriaController.setLabelId(e.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout(()=>{if(t){const e=this._errorNode;this._fieldAriaController.setErrorId(e&&e.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fa=m(s=>class extends s{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(t=>{this._delegateAttribute(t,this[t])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(t=>{this._delegateProperty(t,this[t])})}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach((e,a)=>{this._delegateAttribute(e,t[a])})}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach((e,a)=>{this._delegateProperty(e,t[a])})}_delegateAttribute(t,e){this.stateTarget&&(t==="invalid"&&this._delegateAttribute("aria-invalid",e?"true":!1),typeof e=="boolean"?this.stateTarget.toggleAttribute(t,e):e?this.stateTarget.setAttribute(t,e):this.stateTarget.removeAttribute(t))}_delegateProperty(t,e){this.stateTarget&&(this.stateTarget[t]=e)}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Un=m(s=>class extends Fa(Da(Ra(s))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(t=>this[t]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some(e=>this.__isValidConstraint(e))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(t,...e){if(!t)return;const a=this._hasValidConstraints(e),r=this.__previousHasConstraints&&!a;(this._hasValue||this.invalid)&&a?this._requestValidation():r&&!this.manualValidation&&this._setInvalid(!1),this.__previousHasConstraints=a}_onChange(t){t.stopPropagation(),this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return!!t||t===0}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gn=s=>class extends ka(ma(Un(Na(Hn(ii(s)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){super._onKeyDown(t),this.allowedCharPattern&&!this.__shouldAcceptKey(t)&&t.target===this.inputElement&&(t.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=M.debounce(this._preventInputDebouncer,j.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||t.key.length!==1||this.__allowedCharRegExp.test(t.key)}_onPaste(t){if(this.allowedCharPattern){const e=t.clipboardData.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onDrop(t){if(this.allowedCharPattern){const e=t.dataTransfer.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onBeforeInput(t){this.allowedCharPattern&&t.data&&!this.__allowedTextRegExp.test(t.data)&&(t.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(t){if(t)try{this.__allowedCharRegExp=new RegExp(`^${t}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${t}*$`,"u")}catch(e){console.error(e)}}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kn=s=>class extends Gn(s){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String,reflectToAttribute:!0},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}_setFocused(t){super._setFocused(t),!t&&document.hasFocus()&&this._requestValidation()}_onInput(t){super._onInput(t),this.invalid&&this._requestValidation()}_valueChanged(t,e){super._valueChanged(t,e),e!==void 0&&this.invalid&&this._requestValidation()}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Yn=class{constructor(i,t){this.input=i,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),t.addEventListener("slot-content-changed",e=>{this.__initLabel(e.detail.node)}),this.__initLabel(t.node)}__initLabel(i){i&&(i.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&i.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const i=t=>{t.stopImmediatePropagation(),this.input.removeEventListener("click",i)};this.input.addEventListener("click",i)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zn=s=>class extends Kn(s){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Vn(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Yn(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-text-field",Pa,{moduleId:"vaadin-text-field-styles"});class Xn extends Zn($(de(A))){static get is(){return"vaadin-text-field"}static get template(){return T`
      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>

        <slot name="tooltip"></slot>
      </div>
    `}ready(){super.ready(),this._tooltipController=new Te(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}E(Xn);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const N0=u`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow:
      0 0 0 1px var(--lumo-shade-5pct),
      var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;_("",N0,{moduleId:"lumo-overlay"});const Qn=u`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow:
      0 0 0 1px var(--lumo-shade-5pct),
      var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  :host(:is([has-header], [has-title])) [part='header'] + [part='content'] {
    padding-top: 0;
  }

  [part='header'],
  [part='header-content'],
  [part='footer'] {
    gap: var(--lumo-space-xs) var(--lumo-space-s);
    line-height: var(--lumo-line-height-s);
  }

  [part='header'] {
    padding: var(--lumo-space-m);
    background-color: var(--lumo-base-color);
    border-radius: var(--lumo-border-radius-l) var(--lumo-border-radius-l) 0 0; /* Needed for Safari */
  }

  [part='footer'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    background-color: var(--lumo-contrast-5pct);
    border-radius: 0 0 var(--lumo-border-radius-l) var(--lumo-border-radius-l); /* Needed for Safari */
  }

  [part='title'] {
    font-size: var(--lumo-font-size-xl);
    font-weight: 600;
    color: var(--lumo-header-text-color);
    margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0 !important;
  }

  @media (min-height: 320px) {
    :host([overflow~='top']) [part='header'] {
      box-shadow: 0 1px 0 0 var(--lumo-contrast-10pct);
    }
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;_("vaadin-dialog-overlay",[N0,Qn],{moduleId:"lumo-dialog"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ba=u`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
    inset: 0;
    bottom: var(--vaadin-overlay-viewport-bottom);

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 0;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])),
  :host(:not([opened]):not([closing])) [part='overlay'] {
    display: none !important;
  }

  [part='overlay'] {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    pointer-events: auto;

    /* Prevent overflowing the host */
    max-width: 100%;
    box-sizing: border-box;

    -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
  }

  [part='backdrop'] {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    pointer-events: auto;
  }
`;/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let Ut=new WeakMap,Fe=new WeakMap,Be={},yi=0;const ds=s=>s&&s.nodeType===Node.ELEMENT_NODE,wi=(...s)=>{console.error(`Error: ${s.join(" ")}. Skip setting aria-hidden.`)},Jn=(s,i)=>ds(s)?i.map(t=>{if(!ds(t))return wi(t,"is not a valid element"),null;let e=t;for(;e&&e!==s;){if(s.contains(e))return t;e=e.getRootNode().host}return wi(t,"is not contained inside",s),null}).filter(t=>!!t):(wi(s,"is not a valid element"),[]),to=(s,i,t,e)=>{const a=Jn(i,Array.isArray(s)?s:[s]);Be[t]||(Be[t]=new WeakMap);const r=Be[t],n=[],o=new Set,h=new Set(a),l=v=>{if(!v||o.has(v))return;o.add(v);const p=v.assignedSlot;p&&l(p),l(v.parentNode||v.host)};a.forEach(l);const c=v=>{if(!v||h.has(v))return;const p=v.shadowRoot;(p?[...v.children,...p.children]:[...v.children]).forEach(y=>{if(!["template","script","style"].includes(y.localName))if(o.has(y))c(y);else{const I=y.getAttribute(e),V=I!==null&&I!=="false",kt=(Ut.get(y)||0)+1,H=(r.get(y)||0)+1;Ut.set(y,kt),r.set(y,H),n.push(y),kt===1&&V&&Fe.set(y,!0),H===1&&y.setAttribute(t,"true"),V||y.setAttribute(e,"true")}})};return c(i),o.clear(),yi+=1,()=>{n.forEach(v=>{const p=Ut.get(v)-1,z=r.get(v)-1;Ut.set(v,p),r.set(v,z),p||(Fe.has(v)?Fe.delete(v):v.removeAttribute(e)),z||v.removeAttribute(t)}),yi-=1,yi||(Ut=new WeakMap,Ut=new WeakMap,Fe=new WeakMap,Be={})}},eo=(s,i=document.body,t="data-aria-hidden")=>{const e=Array.from(Array.isArray(s)?s:[s]);return i&&e.push(...Array.from(i.querySelectorAll("[aria-live]"))),to(e,i,t,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class io{constructor(i,t){this.host=i,this.callback=typeof t=="function"?t:()=>i}showModal(){const i=this.callback();this.__showOthers=eo(i)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const so=s=>class extends qt(s){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new io(this),this.__focusTrapController=new on(this),this.__focusRestorationController=new hn}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){if(this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()){const t=ei(),e=!t;this.__focusRestorationController.restoreFocus({preventScroll:e,focusVisible:t})}}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const t=Xi();return t===document.body||this._deepContains(t)}_deepContains(t){if(this.contains(t))return!0;let e=t;const a=t.ownerDocument;for(;e&&e!==a&&e!==this;)e=e.parentNode||e.host;return e===this}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Va=()=>Array.from(document.body.children).filter(s=>s instanceof HTMLElement&&s._hasOverlayStackMixin&&!s.hasAttribute("closing")).sort((s,i)=>s.__zIndex-i.__zIndex||0),s0=()=>Va().filter(s=>s.$.overlay),ao=(s,i=t=>!0)=>{const t=s0().filter(i);return s===t.pop()},cs=new WeakMap,ro=s=>class extends s{constructor(){super(),this._hasOverlayStackMixin=!0}get _last(){return ao(this)}bringToFront(){let t="";const e=Va().filter(a=>a!==this).pop();e&&(t=e.__zIndex+1),this.style.zIndex=t,this.__zIndex=t||parseFloat(getComputedStyle(this).zIndex),cs.has(this)&&cs.get(this).bringToFront()}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),s0().forEach(t=>{t!==this&&(t.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const t=s0();let e;for(;(e=t.pop())&&!(e!==this&&(e.$.overlay.style.removeProperty("pointer-events"),!e.modeless)););}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ha=s=>class extends so(ro(s)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0,sync:!0},owner:{type:Object,sync:!0},model:{type:Object,sync:!0},renderer:{type:Object,sync:!0},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged",sync:!0},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged",sync:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0,sync:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),Ji&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}close(t){const e=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),e.defaultPrevented||(this.opened=!1)}_detectIosNavbar(){if(!this.opened)return;const t=window.innerHeight,a=window.innerWidth>t,r=document.documentElement.clientHeight;a&&r>t?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${r-t}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_shouldAddGlobalListeners(){return!this.modeless}_addGlobalListeners(){this.__hasGlobalListeners||(this.__hasGlobalListeners=!0,document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0))}_removeGlobalListeners(){this.__hasGlobalListeners&&(this.__hasGlobalListeners=!1,document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0))}_rendererOrDataChanged(t,e,a,r){const n=this._oldOwner!==e||this._oldModel!==a;this._oldModel=a,this._oldOwner=e;const o=this._oldRenderer!==t,h=this._oldRenderer!==void 0;this._oldRenderer=t;const l=this._oldOpened!==r;this._oldOpened=r,o&&h&&(this.innerHTML="",delete this._$litPart$),r&&t&&(o||l||n)&&this.requestContentUpdate()}_modelessChanged(t){this.opened&&(this._shouldAddGlobalListeners()?this._addGlobalListeners():this._removeGlobalListeners()),t?this._exitModalState():this.opened&&this._enterModalState()}_openedChanged(t,e){t?(this._saveFocus(),this._animatedOpening(),this.__scheduledOpen=requestAnimationFrame(()=>{setTimeout(()=>{this._trapFocus(),this.dispatchEvent(new CustomEvent("vaadin-overlay-open",{bubbles:!0}))})}),document.addEventListener("keydown",this._boundKeydownListener),this._shouldAddGlobalListeners()&&this._addGlobalListeners()):e&&(this.__scheduledOpen&&(cancelAnimationFrame(this.__scheduledOpen),this.__scheduledOpen=null),this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this._shouldAddGlobalListeners()&&this._removeGlobalListeners())}_hiddenChanged(t){t&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const t=getComputedStyle(this),e=t.getPropertyValue("animation-name");return!(t.getPropertyValue("display")==="none")&&e&&e!=="none"}_enqueueAnimation(t,e){const a=`__${t}Handler`,r=n=>{n&&n.target!==this||(e(),this.removeEventListener("animationend",r),delete this[a])};this[a]=r,this.addEventListener("animationend",r)}_flushAnimation(t){const e=`__${t}Handler`;typeof this[e]=="function"&&this[e]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_mouseDownListener(t){this._mouseDownInside=t.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(t){this._mouseUpInside=t.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(t){return this._last}_outsideClickListener(t){if(t.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(t))return;const e=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}_keydownListener(t){if(!(!this._last||t.defaultPrevented)&&!(!this._shouldAddGlobalListeners()&&!t.composedPath().includes(this.$.overlay))&&t.key==="Escape"){const e=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const no=s=>class extends Ha(s){static get properties(){return{headerTitle:{type:String},headerRenderer:{type:Object},footerRenderer:{type:Object}}}static get observers(){return["_headerFooterRendererChange(headerRenderer, footerRenderer, opened)","_headerTitleChanged(headerTitle, opened)"]}ready(){super.ready(),this.__resizeObserver=new ResizeObserver(()=>{this.__updateOverflow()}),this.__resizeObserver.observe(this.$.resizerContainer),this.$.content.addEventListener("scroll",()=>{this.__updateOverflow()})}__createContainer(t){const e=document.createElement("div");return e.setAttribute("slot",t),e}__clearContainer(t){t.innerHTML="",delete t._$litPart$}__initContainer(t,e){return t?this.__clearContainer(t):t=this.__createContainer(e),t}_headerFooterRendererChange(t,e,a){const r=this.__oldHeaderRenderer!==t;this.__oldHeaderRenderer=t;const n=this.__oldFooterRenderer!==e;this.__oldFooterRenderer=e;const o=this._oldOpenedFooterHeader!==a;this._oldOpenedFooterHeader=a,this.toggleAttribute("has-header",!!t),this.toggleAttribute("has-footer",!!e),r&&(t?this.headerContainer=this.__initContainer(this.headerContainer,"header-content"):this.headerContainer&&(this.headerContainer.remove(),this.headerContainer=null,this.__updateOverflow())),n&&(e?this.footerContainer=this.__initContainer(this.footerContainer,"footer"):this.footerContainer&&(this.footerContainer.remove(),this.footerContainer=null,this.__updateOverflow())),(t&&(r||o)||e&&(n||o))&&a&&this.requestContentUpdate()}_headerTitleChanged(t,e){this.toggleAttribute("has-title",!!t),e&&(t||this._oldHeaderTitle)&&this.requestContentUpdate(),this._oldHeaderTitle=t}_headerTitleRenderer(){this.headerTitle?(this.headerTitleElement||(this.headerTitleElement=document.createElement("h2"),this.headerTitleElement.setAttribute("slot","title"),this.headerTitleElement.classList.add("draggable")),this.appendChild(this.headerTitleElement),this.headerTitleElement.textContent=this.headerTitle):this.headerTitleElement&&(this.headerTitleElement.remove(),this.headerTitleElement=null)}requestContentUpdate(){super.requestContentUpdate(),this.headerContainer&&(this.headerContainer.parentElement||this.appendChild(this.headerContainer),this.headerRenderer&&this.headerRenderer.call(this.owner,this.headerContainer,this.owner)),this.footerContainer&&(this.footerContainer.parentElement||this.appendChild(this.footerContainer),this.footerRenderer&&this.footerRenderer.call(this.owner,this.footerContainer,this.owner)),this._headerTitleRenderer(),this.__updateOverflow()}setBounds(t,e=!0){const a=this.$.overlay,r={...t};e&&a.style.position!=="absolute"&&(a.style.position="absolute"),Object.keys(r).forEach(n=>{r[n]!==null&&!isNaN(r[n])&&(r[n]=`${r[n]}px`)}),Object.assign(a.style,r)}getBounds(){const t=this.$.overlay.getBoundingClientRect(),e=this.getBoundingClientRect(),a=t.top-e.top,r=t.left-e.left,n=t.width,o=t.height;return{top:a,left:r,width:n,height:o}}__updateOverflow(){let t="";if(this.hasAttribute("has-header")||this.hasAttribute("has-footer")||this.headerTitle){const a=this.$.content;a.scrollTop>0&&(t+=" top"),a.scrollTop<a.scrollHeight-a.clientHeight&&(t+=" bottom")}const e=t.trim();e.length>0&&this.getAttribute("overflow")!==e?this.setAttribute("overflow",e):e.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oo=u`
  [part='header'],
  [part='header-content'],
  [part='footer'] {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: none;
    pointer-events: none;
    z-index: 1;
  }

  [part='header'] {
    flex-wrap: nowrap;
  }

  ::slotted([slot='header-content']),
  ::slotted([slot='title']),
  ::slotted([slot='footer']) {
    display: contents;
    pointer-events: auto;
  }

  ::slotted([slot='title']) {
    font: inherit !important;
    overflow-wrap: anywhere;
  }

  [part='header-content'] {
    flex: 1;
  }

  :host([has-title]) [part='header-content'],
  [part='footer'] {
    justify-content: flex-end;
  }

  :host(:not([has-title]):not([has-header])) [part='header'],
  :host(:not([has-header])) [part='header-content'],
  :host(:not([has-title])) [part='title'],
  :host(:not([has-footer])) [part='footer'] {
    display: none !important;
  }

  :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
    height: auto;
  }

  @media (min-height: 320px) {
    :host(:is([has-title], [has-header], [has-footer])) .resizer-container {
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
      flex: 1;
      overflow: auto;
    }
  }

  /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
  [part='content'] {
    min-width: 12em; /* matches the default <vaadin-text-field> width */
  }

  :host([has-bounds-set]) [part='overlay'] {
    max-width: none;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid !important;
    }
  }
`,ho=u`
  [part='overlay'] {
    position: relative;
    overflow: visible;
    max-height: 100%;
    display: flex;
    width: max-content;
  }

  [part='content'] {
    box-sizing: border-box;
    height: 100%;
  }

  .resizer-container {
    overflow: auto;
    flex-grow: 1;
    border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
  }

  [part='overlay'][style] .resizer-container {
    min-height: 100%;
    width: 100%;
  }

  :host(:not([resizable])) .resizer {
    display: none;
  }

  :host([resizable]) [part='title'] {
    cursor: move;
    -webkit-user-select: none;
    user-select: none;
  }

  .resizer {
    position: absolute;
    height: 16px;
    width: 16px;
  }

  .resizer.edge {
    height: 8px;
    width: 8px;
    inset: -4px;
  }

  .resizer.edge.n {
    width: auto;
    bottom: auto;
    cursor: ns-resize;
  }

  .resizer.ne {
    top: -4px;
    right: -4px;
    cursor: nesw-resize;
  }

  .resizer.edge.e {
    height: auto;
    left: auto;
    cursor: ew-resize;
  }

  .resizer.se {
    bottom: -4px;
    right: -4px;
    cursor: nwse-resize;
  }

  .resizer.edge.s {
    width: auto;
    top: auto;
    cursor: ns-resize;
  }

  .resizer.sw {
    bottom: -4px;
    left: -4px;
    cursor: nesw-resize;
  }

  .resizer.edge.w {
    height: auto;
    right: auto;
    cursor: ew-resize;
  }

  .resizer.nw {
    top: -4px;
    left: -4px;
    cursor: nwse-resize;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-dialog-overlay",[Ba,oo,ho],{moduleId:"vaadin-dialog-overlay-styles"});class lo extends no(Wt($(A))){static get is(){return"vaadin-dialog-overlay"}static get template(){return T`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <section id="resizerContainer" class="resizer-container">
          <header part="header">
            <div part="title"><slot name="title"></slot></div>
            <div part="header-content"><slot name="header-content"></slot></div>
          </header>
          <div part="content" id="content"><slot></slot></div>
          <footer part="footer"><slot name="footer"></slot></footer>
        </section>
      </div>
    `}}E(lo);/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ja=s=>class extends s{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(t,e){if(!e||t===void 0)return;const{classList:a}=e;if(this.__initialClasses||(this.__initialClasses=new Set(a)),Array.isArray(this.__previousClasses)){const n=this.__previousClasses.filter(o=>!this.__initialClasses.has(o));n.length>0&&a.remove(...n)}const r=typeof t=="string"?t.split(" ").filter(Boolean):[];r.length>0&&a.add(...r),this.__previousClasses=r}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const co=s=>class extends s{static get properties(){return{opened:{type:Boolean,value:!1,notify:!0,sync:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},modeless:{type:Boolean,value:!1},top:{type:String},left:{type:String},width:{type:String},height:{type:String},overlayRole:{type:String,value:"dialog"}}}static get observers(){return["__positionChanged(top, left)","__sizeChanged(width, height)"]}ready(){super.ready();const t=this.$.overlay;t.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),t.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),t.addEventListener("vaadin-overlay-closed",this.__handleOverlayClosed.bind(this)),this._overlayElement=t}__handleOverlayClosed(){this.dispatchEvent(new CustomEvent("closed"))}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),setTimeout(()=>{this.isConnected||(this.__restoreOpened=this.opened,this.opened=!1)})}_onOverlayOpened(t){t.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(t){this.noCloseOnOutsideClick&&t.preventDefault()}_handleEscPress(t){this.noCloseOnEsc&&t.preventDefault()}_bringOverlayToFront(){this.modeless&&this._overlayElement.bringToFront()}__positionChanged(t,e){requestAnimationFrame(()=>this.$.overlay.setBounds({top:t,left:e}))}__sizeChanged(t,e){requestAnimationFrame(()=>this.$.overlay.setBounds({width:t,height:e},!1))}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Xe(s){return s.touches?s.touches[0]:s}function Wa(s){return s.clientX>=0&&s.clientX<=window.innerWidth&&s.clientY>=0&&s.clientY<=window.innerHeight}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vo=s=>class extends s{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:ci},__dragHandleClassName:{type:String}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(t){if(!(t.type==="touchstart"&&t.touches.length>1)&&this.draggable&&(t.button===0||t.touches)){const e=this.$.overlay.$.resizerContainer,a=t.target===e,r=t.offsetX>e.clientWidth||t.offsetY>e.clientHeight,n=t.target===this.$.overlay.$.content,o=t.composedPath().some((h,l)=>{if(!h.classList)return!1;const c=h.classList.contains(this.__dragHandleClassName||"draggable"),v=h.classList.contains("draggable-leaf-only"),p=l===0;return v&&p||c&&(!v||p)});if(a&&!r||n||o){o||t.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const h=Xe(t);if(this._originalMouseCoords={top:h.pageY,left:h.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),this.$.overlay.$.overlay.style.position!=="absolute"){const{top:l,left:c}=this._originalBounds;this.top=l,this.left=c}}}}_drag(t){const e=Xe(t);if(Wa(e)){const a=this._originalBounds.top+(e.pageY-this._originalMouseCoords.top),r=this._originalBounds.left+(e.pageX-this._originalMouseCoords.left);this.top=a,this.left=r}}_stopDrag(){this.dispatchEvent(new CustomEvent("dragged",{bubbles:!0,composed:!0,detail:{top:this.top,left:this.left}})),window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const po=s=>class extends s{static get properties(){return{renderer:{type:Object},headerTitle:String,headerRenderer:{type:Object},footerRenderer:{type:Object}}}requestContentUpdate(){this._overlayElement&&this._overlayElement.requestContentUpdate()}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const uo=s=>class extends s{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(t=>{const e=document.createElement("div");this._resizeListeners.start[t]=a=>this._startResize(a,t),this._resizeListeners.resize[t]=a=>this._resize(a,t),this._resizeListeners.stop[t]=()=>this._stopResize(t),t.length===1&&e.classList.add("edge"),e.classList.add("resizer"),e.classList.add(t),e.addEventListener("mousedown",this._resizeListeners.start[t]),e.addEventListener("touchstart",this._resizeListeners.start[t]),this.$.overlay.$.resizerContainer.appendChild(e)})}_startResize(t,e){if(!(t.type==="touchstart"&&t.touches.length>1)&&(t.button===0||t.touches)){t.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const a=Xe(t);this._originalMouseCoords={top:a.pageY,left:a.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[e]),window.addEventListener("touchmove",this._resizeListeners.resize[e]),window.addEventListener("mouseup",this._resizeListeners.stop[e]),window.addEventListener("touchend",this._resizeListeners.stop[e]),this.$.overlay.setBounds(this._originalBounds),this.$.overlay.setAttribute("has-bounds-set","")}}_resize(t,e){const a=Xe(t);Wa(a)&&e.split("").forEach(n=>{switch(n){case"n":{const o=this._originalBounds.height-(a.pageY-this._originalMouseCoords.top),h=this._originalBounds.top+(a.pageY-this._originalMouseCoords.top);o>40&&(this.top=h,this.height=o);break}case"e":{const o=this._originalBounds.width+(a.pageX-this._originalMouseCoords.left);o>40&&(this.width=o);break}case"s":{const o=this._originalBounds.height+(a.pageY-this._originalMouseCoords.top);o>40&&(this.height=o);break}case"w":{const o=this._originalBounds.width-(a.pageX-this._originalMouseCoords.left),h=this._originalBounds.left+(a.pageX-this._originalMouseCoords.left);o>40&&(this.left=h,this.width=o);break}}})}_stopResize(t){window.removeEventListener("mousemove",this._resizeListeners.resize[t]),window.removeEventListener("touchmove",this._resizeListeners.resize[t]),window.removeEventListener("mouseup",this._resizeListeners.stop[t]),window.removeEventListener("touchend",this._resizeListeners.stop[t]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const t=this.$.overlay.$.resizerContainer.scrollTop,{width:e,height:a,top:r,left:n}=getComputedStyle(this.$.overlay.$.overlay),o=this.$.overlay.$.content;o.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:h,height:l}=getComputedStyle(o);return o.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=t,{width:e,height:a,contentWidth:h,contentHeight:l,top:r,left:n}}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class go extends vo(uo(po(co(ja(mr(de(A))))))){static get template(){return T`
      <style>
        :host {
          display: none !important;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        role$="[[overlayRole]]"
        header-title="[[headerTitle]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        draggable$="[[draggable]]"
        restore-focus-on-close
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get properties(){return{ariaLabel:{type:String,value:""}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel, headerTitle)","_rendererChanged(renderer, headerRenderer, footerRenderer)"]}ready(){super.ready(),oi(this)}_rendererChanged(i,t,e){this.$.overlay.setProperties({owner:this,renderer:i,headerRenderer:t,footerRenderer:e})}_openedChanged(i){this.$.overlay.opened=i}_ariaLabelChanged(i,t){i||t?this.$.overlay.setAttribute("aria-label",i||t):this.$.overlay.removeAttribute("aria-label")}}E(go);const qa=u`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--_selection-color-text);
    flex: none;
    opacity: 0;
    transition:
      transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2),
      opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }
  }

  :host([focus-ring]:not([disabled])) {
    box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;_("vaadin-item",qa,{moduleId:"lumo-item"});const Ua=u`
  :host {
    -webkit-tap-highlight-color: transparent;
    --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
  }

  /* Dividers */
  [part='items'] ::slotted(hr) {
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) var(--lumo-border-radius-m);
    background-color: var(--lumo-contrast-10pct);
  }
`;_("vaadin-list-box",Ua,{moduleId:"lumo-list-box"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ga=u`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;_("",Ga,{moduleId:"lumo-menu-overlay-core"});const fo=u`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 450px), (max-height: 450px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,Ka=[N0,Ga,fo];_("",Ka,{moduleId:"lumo-menu-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-select-item",qa,{moduleId:"lumo-select-item"});_("vaadin-select-list-box",Ua,{moduleId:"lumo-select-list-box"});const _o=u`
  :host {
    /* Disable pointer focus-ring for select, not supported yet */
    --lumo-input-field-pointer-focus-visible: 0;
  }

  :host(:not([theme*='align'])) ::slotted([slot='value']) {
    text-align: start;
  }

  [part='input-field'] {
    cursor: var(--lumo-clickable-cursor);
  }

  [part='input-field'] ::slotted([slot='value']) {
    font-weight: var(--vaadin-input-field-value-font-weight, 500);
  }

  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
  }

  :host([readonly]) [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-secondary-text-color);
  }

  /* placeholder styles */
  [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  :host(:is([readonly], [disabled])) ::slotted([slot='value'][placeholder]) {
    opacity: 0;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  /* Highlight the toggle button when hovering over the entire component */
  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
    color: var(--lumo-contrast-80pct);
  }

  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {
    --_lumo-selected-item-height: var(--lumo-size-s);
    --_lumo-selected-item-padding: 0;
  }
`;_("vaadin-select",[$0,_o],{moduleId:"lumo-select"});_("vaadin-select-value-button",u`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
      padding: 0 0.25em;
      --_lumo-selected-item-height: var(--lumo-size-m);
      --_lumo-selected-item-padding: 0.5em;
    }

    ::slotted(*) {
      min-height: var(--_lumo-selected-item-height);
      padding-top: var(--_lumo-selected-item-padding);
      padding-bottom: var(--_lumo-selected-item-padding);
      font-size: inherit;
    }

    ::slotted(*:hover) {
      background-color: transparent;
    }
  `,{moduleId:"lumo-select-value-button"});const mo=u`
  :host {
    --_lumo-item-selected-icon-display: block;
  }

  /* Small viewport adjustment */
  :host([phone]) {
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
    left: 0 !important;
    /* stylelint-enable declaration-block-no-redundant-longhand-properties */
    align-items: stretch;
    justify-content: flex-end;
  }

  :host([no-vertical-overlap][top-aligned]) [part='overlay'] {
    margin-block-start: var(--lumo-space-xs);
  }

  :host([no-vertical-overlap][bottom-aligned]) [part='overlay'] {
    margin-block-end: var(--lumo-space-xs);
  }

  :host([theme~='align-left']) {
    text-align: left;
  }

  :host([theme~='align-right']) {
    text-align: right;
  }

  :host([theme~='align-center']) {
    text-align: center;
  }
`;_("vaadin-select-overlay",[Ka,mo],{moduleId:"lumo-select-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ya=u`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Za=s=>class extends br(oa(s)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged",sync:!0},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(t){this._value=t}ready(){super.ready();const t=this.getAttribute("value");t!==null&&(this.value=t)}focus(t){this.disabled||super.focus(t)}_shouldSetActive(t){return!this.disabled&&!(t.type==="keydown"&&t.defaultPrevented)}_selectedChanged(t){this.setAttribute("aria-selected",t)}_disabledChanged(t){super._disabledChanged(t),t&&(this.selected=!1,this.blur())}_onKeyDown(t){super._onKeyDown(t),this._activeKeys.includes(t.key)&&!t.defaultPrevented&&(t.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-select-item",Ya,{moduleId:"vaadin-select-item-styles"});class bo extends Za($(Wt(A))){static get is(){return"vaadin-select-item"}static get template(){return T`
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","option")}}E(bo);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xa=u`
  :host {
    display: flex;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='items'] {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-select-list-box",Xa,{moduleId:"vaadin-select-list-box-styles"});class Mo extends za($(Wt(qt(A)))){static get is(){return"vaadin-select-list-box"}static get template(){return T`
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","listbox")}}E(Mo);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zo=u`
  :host {
    align-items: flex-start;
    justify-content: flex-start;
  }

  :host(:not([phone])) [part='overlay'] {
    min-width: var(--vaadin-select-overlay-width, var(--vaadin-select-text-field-width));
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid;
    }
  }
`;/**
 * @license
 * Copyright (c) 2024 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function yo(s,i){let t=null,e;const a=document.documentElement;function r(){e&&clearTimeout(e),t&&t.disconnect(),t=null}function n(o=!1,h=1){r();const{left:l,top:c,width:v,height:p}=s.getBoundingClientRect();if(o||i(),!v||!p)return;const z=Math.floor(c),y=Math.floor(a.clientWidth-(l+v)),I=Math.floor(a.clientHeight-(c+p)),V=Math.floor(l),H={rootMargin:`${-z}px ${-y}px ${-I}px ${-V}px`,threshold:Math.max(0,Math.min(1,h))||1};let ve=!0;function It(C){const D=C[0].intersectionRatio;if(D!==h){if(!ve)return n();D?n(!1,D):e=setTimeout(()=>{n(!1,1e-7)},1e3)}ve=!1}t=new IntersectionObserver(It,H),t.observe(s)}return n(!0),r}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xi={start:"top",end:"bottom"},Ci={start:"left",end:"right"},vs=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(i=>{i.target.__overlay&&i.target.__overlay._updatePosition()})})}),wo=s=>class extends s{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.visualViewport.addEventListener("resize",this._updatePosition),window.visualViewport.addEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes=Mr(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(t=>{t.addEventListener("scroll",this.__onScroll,!0)}),this.positionTarget&&(this.__observePositionTargetMove=yo(this.positionTarget,()=>{this._updatePosition()}))}__removeUpdatePositionEventListeners(){window.visualViewport.removeEventListener("resize",this._updatePosition),window.visualViewport.removeEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(t=>{t.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null),this.__observePositionTargetMove&&(this.__observePositionTargetMove(),this.__observePositionTargetMove=null)}__overlayOpenedChanged(t,e){if(this.__removeUpdatePositionEventListeners(),e&&(e.__overlay=null,vs.unobserve(e),t&&(this.__addUpdatePositionEventListeners(),e.__overlay=this,vs.observe(e))),t){const a=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(r=>{this.__margins[r]=parseInt(a[r],10)})),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(t){t.target instanceof Node&&this.contains(t.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened||!this.__margins)return;const t=this.positionTarget.getBoundingClientRect();if(t.width===0&&t.height===0&&this.opened){this.opened=!1;return}const e=this.__shouldAlignStartVertically(t);this.style.justifyContent=e?"flex-start":"flex-end";const a=this.__isRTL,r=this.__shouldAlignStartHorizontally(t,a),n=!a&&r||a&&!r;this.style.alignItems=n?"flex-start":"flex-end";const o=this.getBoundingClientRect(),h=this.__calculatePositionInOneDimension(t,o,this.noVerticalOverlap,xi,this,e),l=this.__calculatePositionInOneDimension(t,o,this.noHorizontalOverlap,Ci,this,r);Object.assign(this.style,h,l),this.toggleAttribute("bottom-aligned",!e),this.toggleAttribute("top-aligned",e),this.toggleAttribute("end-aligned",!n),this.toggleAttribute("start-aligned",n)}__shouldAlignStartHorizontally(t,e){const a=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const r=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!e&&this.horizontalAlign==="start"||e&&this.horizontalAlign==="end";return this.__shouldAlignStart(t,a,r,this.__margins,n,this.noHorizontalOverlap,Ci)}__shouldAlignStartVertically(t){const e=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const a=Math.min(window.innerHeight,document.documentElement.clientHeight),r=this.verticalAlign==="top";return this.__shouldAlignStart(t,e,a,this.__margins,r,this.noVerticalOverlap,xi)}__shouldAlignStart(t,e,a,r,n,o,h){const l=a-t[o?h.end:h.start]-r[h.end],c=t[o?h.start:h.end]-r[h.start],v=n?l:c,z=v>(n?c:l)||v>e;return n===z}__adjustBottomProperty(t,e,a){let r;if(t===e.end){if(e.end===xi.end){const n=Math.min(window.innerHeight,document.documentElement.clientHeight);if(a>n&&this.__oldViewportHeight){const o=this.__oldViewportHeight-n;r=a-o}this.__oldViewportHeight=n}if(e.end===Ci.end){const n=Math.min(window.innerWidth,document.documentElement.clientWidth);if(a>n&&this.__oldViewportWidth){const o=this.__oldViewportWidth-n;r=a-o}this.__oldViewportWidth=n}}return r}__calculatePositionInOneDimension(t,e,a,r,n,o){const h=o?r.start:r.end,l=o?r.end:r.start,c=parseFloat(n.style[h]||getComputedStyle(n)[h]),v=this.__adjustBottomProperty(h,r,c),p=e[o?r.start:r.end]-t[a===o?r.end:r.start],z=v?`${v}px`:`${c+p*(o?-1:1)}px`;return{[h]:z,[l]:""}}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xo=s=>class extends wo(Ha(Wt(s))){static get observers(){return["_updateOverlayWidth(opened, owner)"]}ready(){super.ready(),this.restoreFocusOnClose=!0}_shouldCloseOnOutsideClick(t){return!0}_getMenuElement(){return Array.from(this.children).find(t=>t.localName!=="style")}_updateOverlayWidth(t,e){if(t&&e){const a="--vaadin-select-overlay-width",r=getComputedStyle(e).getPropertyValue(a);r===""?this.style.removeProperty(a):this.style.setProperty(a,r)}}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){const t=this._getMenuElement();this.owner._assignMenuElement(t)}}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-select-overlay",[Ba,zo],{moduleId:"vaadin-select-overlay-styles"});class Co extends xo($(A)){static get is(){return"vaadin-select-overlay"}static get template(){return T`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}E(Co);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const So=u`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    user-select: none;
    min-width: 0;
    width: 0;
  }

  ::slotted(*) {
    padding-left: 0;
    padding-right: 0;
    flex: auto;
  }

  /* placeholder styles */
  ::slotted(*:not([selected])) {
    line-height: 1;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: inherit;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    line-height: inherit;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-select-value-button",So,{moduleId:"vaadin-select-value-button-styles"});class Ao extends zr($(A)){static get is(){return"vaadin-select-value-button"}static get template(){return T`
      <div class="vaadin-button-container">
        <span part="label">
          <slot></slot>
        </span>
      </div>
    `}}E(Ao);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Eo=u`
  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ko{constructor(i,t){this.query=i,this.callback=t,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(i){typeof this.callback=="function"&&this.callback(i.matches)}}/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Io extends T0{constructor(i){super(i,"value","vaadin-select-value-button",{initializer:(t,e)=>{e._setFocusElement(t),e.ariaTarget=t,e.stateTarget=t,t.setAttribute("aria-haspopup","listbox")}})}}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const To=s=>class extends ja(ma(Fa(ii(Na(s))))){static get properties(){return{items:{type:Array,observer:"__itemsChanged"},opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,sync:!0},renderer:{type:Object},value:{type:String,value:"",notify:!0,observer:"_valueChanged",sync:!0},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},noVerticalOverlap:{type:Boolean,value:!1},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 450px), (max-height: 450px)"},_inputContainer:Object,_items:Object}}static get delegateAttrs(){return[...super.delegateAttrs,"invalid"]}static get observers(){return["_updateAriaExpanded(opened, focusElement)","_updateSelectedItem(value, _items, placeholder)","_openedChanged(opened, _overlayElement)"]}constructor(){super(),this._itemId=`value-${this.localName}-${yr()}`,this._srLabelController=new $a(this),this._srLabelController.slotName="sr-label"}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}ready(){super.ready(),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._overlayElement=this.$.overlay,this._valueButtonController=new Io(this),this.addController(this._valueButtonController),this.addController(this._srLabelController),this.addController(new ko(this._phoneMediaQuery,t=>{this._phone=t})),this._tooltipController=new Te(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.focusElement),this.addController(this._tooltipController)}requestContentUpdate(){this._overlayElement&&(this._overlayElement.requestContentUpdate(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items))}_requiredChanged(t){super._requiredChanged(t),t===!1&&this._requestValidation()}__itemsChanged(t,e){(t||e)&&this.requestContentUpdate()}_assignMenuElement(t){t&&t!==this.__lastMenuElement&&(this._menuElement=t,this.__initMenuItems(t),t.addEventListener("items-changed",()=>{this.__initMenuItems(t)}),t.addEventListener("selected-changed",()=>this.__updateValueButton()),t.addEventListener("keydown",e=>this._onKeyDownInside(e),!0),t.addEventListener("click",e=>{const a=e.composedPath().find(r=>r._hasVaadinItemMixin);this.__dispatchChangePending=!!(a&&a.value!==void 0&&a.value!==this.value),this.opened=!1},!0),this.__lastMenuElement=t)}__initMenuItems(t){t.items&&(this._items=t.items)}_valueChanged(t,e){this.toggleAttribute("has-value",!!t),e!==void 0&&!this.__dispatchChangePending&&this._requestValidation()}_onClick(t){this.disabled||(t.preventDefault(),this.opened=!this.readonly)}_onToggleMouseDown(t){t.preventDefault(),this.opened||this.focusElement.focus()}_onKeyDown(t){if(!(t.altKey||t.shiftKey||t.ctrlKey||t.metaKey)&&t.target===this.focusElement&&!this.readonly&&!this.disabled&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/u.test(t.key))t.preventDefault(),this.opened=!0;else if(/[\p{L}\p{Nd}]/u.test(t.key)&&t.key.length===1){const e=this._menuElement.selected,a=e!==void 0?e:-1,r=this._menuElement._searchKey(a,t.key);r>=0&&(this.__dispatchChangePending=!0,this._updateAriaLive(!0),this._menuElement.selected=r)}}}_onKeyDownInside(t){/^(Tab)$/u.test(t.key)&&(this.opened=!1)}_openedChanged(t,e){if(e){if(t){if(this.disabled||this.readonly){this.opened=!1;return}this._updateAriaLive(!1),e.style.setProperty("--vaadin-select-text-field-width",`${this._inputContainer.offsetWidth}px`);const a=this.hasAttribute("focus-ring");this._openedWithFocusRing=a,a&&this.removeAttribute("focus-ring")}else this.__oldOpened&&(this._openedWithFocusRing&&this.setAttribute("focus-ring",""),!this.__dispatchChangePending&&!this._keyboardActive&&this._requestValidation());this.__oldOpened=t}}_updateAriaExpanded(t,e){e&&e.setAttribute("aria-expanded",t?"true":"false")}_updateAriaLive(t){this.focusElement&&(t?this.focusElement.setAttribute("aria-live","polite"):this.focusElement.removeAttribute("aria-live"))}__attachSelectedItem(t){let e;const a=t.getAttribute("label");a?e=this.__createItemElement({label:a}):e=t.cloneNode(!0),e._sourceItem=t,this.__appendValueItemElement(e,this.focusElement),e.selected=!0}__createItemElement(t){const e=document.createElement(t.component||"vaadin-select-item");return t.label&&(e.textContent=t.label),t.value&&(e.value=t.value),t.disabled&&(e.disabled=t.disabled),t.className&&(e.className=t.className),e}__appendValueItemElement(t,e){e.appendChild(t),t.removeAttribute("tabindex"),t.removeAttribute("aria-selected"),t.removeAttribute("role"),t.removeAttribute("focused"),t.removeAttribute("focus-ring"),t.removeAttribute("active"),t.setAttribute("id",this._itemId)}_accessibleNameChanged(t){this._srLabelController.setLabel(t),this._setCustomAriaLabelledBy(t?this._srLabelController.defaultId:null)}_accessibleNameRefChanged(t){this._setCustomAriaLabelledBy(t)}_setCustomAriaLabelledBy(t){const e=this._getLabelIdWithItemId(t);this._fieldAriaController.setLabelId(e,!0)}_getLabelIdWithItemId(t){const a=(this._items?this._items[this._menuElement.selected]:!1)||this.placeholder?this._itemId:"";return t?`${t} ${a}`.trim():null}__updateValueButton(){const t=this.focusElement;if(!t)return;t.innerHTML="";const e=this._items[this._menuElement.selected];if(t.removeAttribute("placeholder"),this._hasContent(e))this.__attachSelectedItem(e);else if(this.placeholder){const r=this.__createItemElement({label:this.placeholder});this.__appendValueItemElement(r,t),t.setAttribute("placeholder","")}!this._valueChanging&&e&&(this._selectedChanging=!0,this.value=e.value||"",this.__dispatchChangePending&&this.__dispatchChange(),delete this._selectedChanging);const a=e||this.placeholder?{newId:this._itemId}:{oldId:this._itemId};We(t,"aria-labelledby",a),(this.accessibleName||this.accessibleNameRef)&&this._setCustomAriaLabelledBy(this.accessibleNameRef||this._srLabelController.defaultId)}_hasContent(t){if(!t)return!1;const e=!!(t.hasAttribute("label")?t.getAttribute("label"):t.textContent.trim()),a=t.childElementCount>0;return e||a}_updateSelectedItem(t,e){if(e){const a=t==null?t:t.toString();this._menuElement.selected=e.reduce((r,n,o)=>r===void 0&&n.value===a?o:r,void 0),this._selectedChanging||(this._valueChanging=!0,this.__updateValueButton(),delete this._valueChanging)}}_shouldRemoveFocus(){return!this.opened}_setFocused(t){super._setFocused(t),!t&&document.hasFocus()&&this._requestValidation()}checkValidity(){return!this.required||this.readonly||!!this.value}__defaultRenderer(t,e){if(!this.items||this.items.length===0){t.textContent="";return}let a=t.firstElementChild;a||(a=document.createElement("vaadin-select-list-box"),t.appendChild(a)),a.textContent="",this.items.forEach(r=>{a.appendChild(this.__createItemElement(r))})}async __dispatchChange(){this.updateComplete&&await this.updateComplete,this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChangePending=!1}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oo=u`
  :host {
    position: relative;
  }

  ::slotted([slot='value']) {
    flex-grow: 1;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-select",[Pa,Eo,Oo],{moduleId:"vaadin-select-styles"});class Lo extends To(de($(A))){static get is(){return"vaadin-select"}static get template(){return T`
      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-mousedown="_onToggleMouseDown"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        id="overlay"
        owner="[[__overlayOwner]]"
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[_theme]]"
        no-vertical-overlap$="[[noVerticalOverlap]]"
        on-vaadin-overlay-open="_onOverlayOpen"
      ></vaadin-select-overlay>

      <slot name="tooltip"></slot>
      <div class="sr-only">
        <slot name="sr-label"></slot>
      </div>
    `}static get properties(){return{__overlayOwner:{value(){return this}}}}static get observers(){return["_rendererChanged(renderer, _overlayElement)"]}ready(){super.ready(),oi(this)}_rendererChanged(i,t){t&&(t.renderer=i||this.__defaultRenderer,this.requestContentUpdate())}_onOverlayOpen(){this._menuElement&&this._menuElement.focus({focusVisible:ei()})}}E(Lo);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Po=s=>class extends za(s){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:()=>[]}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, disabled, selectedValues)"]}ready(){this.addEventListener("click",t=>this._onMultipleClick(t)),super.ready()}_enhanceMultipleItems(t,e,a,r,n){if(!(!t||!e)){if(n){const o=n.map(h=>t[h]);t.forEach(h=>{h.selected=o.includes(h)})}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){const t=this.selectedValues.slice(-1)[0];t&&!t.disabled&&this._scrollToItem(t)}_onMultipleClick(t){const e=this._filterItems(t.composedPath())[0],a=e&&!e.disabled?this.items.indexOf(e):-1;a<0||!this.multiple||(t.preventDefault(),this.selectedValues.includes(a)?this.selectedValues=this.selectedValues.filter(r=>r!==a):this.selectedValues=this.selectedValues.concat(a))}_multipleChanged(t,e){!t&&e&&(this.selectedValues=[],this.items.forEach(a=>{a.selected=!1}),this.removeAttribute("aria-multiselectable")),t&&!e&&(this.setAttribute("aria-multiselectable","true"),this.selected!==void 0&&(this.selectedValues=[...this.selectedValues,this.selected],this.selected=void 0))}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-list-box",Xa,{moduleId:"vaadin-list-box-styles"});class Ro extends de(Po($(qt(A)))){static get template(){return T`
      <div part="items">
        <slot></slot>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-list-box"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","listbox"),setTimeout(this._checkImport.bind(this),2e3),this._tooltipController=new Te(this),this.addController(this._tooltipController)}_checkImport(){const i=this.querySelector("vaadin-item");i&&!(i instanceof A)&&console.warn("Make sure you have imported the vaadin-item element.")}}E(Ro);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_("vaadin-item",Ya,{moduleId:"vaadin-item-styles"});class $o extends Za($(Wt(A))){static get template(){return T`
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}constructor(){super(),this.value,this.label}ready(){super.ready(),this.setAttribute("role","option")}}E($o);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});var Js;(Js=window.Vaadin).featureFlags||(Js.featureFlags={});function Do(s){return s.replace(/-[a-z]/gu,i=>i[1].toUpperCase())}const X={};function Qa(s,i="25.0.1"){if(Object.defineProperty(s,"version",{get(){return i}}),s.experimental){const e=typeof s.experimental=="string"?s.experimental:`${Do(s.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[e]&&!X[e]){X[e]=new Set,X[e].add(s),Object.defineProperty(window.Vaadin.featureFlags,e,{get(){return X[e].size===0},set(a){a&&X[e].size>0&&(X[e].forEach(r=>{customElements.define(r.is,r)}),X[e].clear())}});return}else if(X[e]){X[e].add(s);return}}const t=customElements.get(s.is);if(!t)customElements.define(s.is,s);else{const e=t.version;e&&s.version&&e===s.version?console.warn(`The component ${s.is} has been loaded twice`):console.error(`Tried to define ${s.is} version ${s.version} when version ${t.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let ps=0,Ja=0;const Zt=[];let a0=!1;function No(){a0=!1;const s=Zt.length;for(let i=0;i<s;i++){const t=Zt[i];if(t)try{t()}catch(e){setTimeout(()=>{throw e})}}Zt.splice(0,s),Ja+=s}const Fo={after(s){return{run(i){return window.setTimeout(i,s)},cancel(i){window.clearTimeout(i)}}},run(s,i){return window.setTimeout(s,i)},cancel(s){window.clearTimeout(s)}},Bo={run(s){return window.requestIdleCallback?window.requestIdleCallback(s):window.setTimeout(s,16)},cancel(s){window.cancelIdleCallback?window.cancelIdleCallback(s):window.clearTimeout(s)}},Vo={run(s){a0||(a0=!0,queueMicrotask(()=>No())),Zt.push(s);const i=ps;return ps+=1,i},cancel(s){const i=s-Ja;if(i>=0){if(!Zt[i])throw new Error(`invalid async handle: ${s}`);Zt[i]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const r0=new Set;let t1=class n0{static debounce(i,t,e){return i instanceof n0?i._cancelAsync():i=new n0,i.setConfig(t,e),i}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(i,t){this._asyncModule=i,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,r0.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),r0.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}};function Ho(s){r0.add(s)}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const et=[];function o0(s,i,t=s.getAttribute("dir")){i?s.setAttribute("dir",i):t!=null&&s.removeAttribute("dir")}function h0(){return document.documentElement.getAttribute("dir")}function jo(){const s=h0();et.forEach(i=>{o0(i,s)})}const Wo=new MutationObserver(jo);Wo.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const qo=s=>class extends s{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>t===""?null:t}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),o0(this,h0(),null))}attributeChangedCallback(t,e,a){if(super.attributeChangedCallback(t,e,a),t!=="dir")return;const r=h0(),n=a===r&&et.indexOf(this)===-1,o=!a&&e&&et.indexOf(this)===-1;n||o?(this.__subscribe(),o0(this,r,a)):a!==r&&e===r&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=et.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,e,a){a==="dir"&&e===""&&!t.hasAttribute("dir")||super._valueToNodeAttribute(t,e,a)}_attributeToProperty(t,e,a){t==="dir"&&!e?this.dir="":super._attributeToProperty(t,e,a)}__subscribe(){et.includes(this)||et.push(this)}__unsubscribe(){et.includes(this)&&et.splice(et.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){si()};let Si;const us=new Set,e1=s=>class extends qo(s){static finalize(){super.finalize();const{is:t}=this;if(t&&!us.has(t)){window.Vaadin.registrations.push(this),us.add(t);const e=window.Vaadin.developmentModeCallback;e&&(Si=t1.debounce(Si,Bo,()=>{e["vaadin-usage-statistics"]()}),Ho(Si))}}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Uo(s,i){return s.split(".").reduce((t,e)=>t?t[e]:void 0,i)}function Go(s,i,t){const e=s.split("."),a=e.pop(),r=e.reduce((n,o)=>n[o],t);r[a]=i}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ai={},Ko=/([A-Z])/gu;function gs(s){return Ai[s]||(Ai[s]=s.replace(Ko,"-$1").toLowerCase()),Ai[s]}function fs(s){return s[0].toUpperCase()+s.substring(1)}function Ei(s){const[i,t]=s.split("("),e=t.replace(")","").split(",").map(a=>a.trim());return{method:i,observerProps:e}}function ki(s,i){return Object.prototype.hasOwnProperty.call(s,i)||(s[i]=new Map(s[i])),s[i]}const Yo=s=>{class i extends s{static createProperty(e,a){[String,Boolean,Number,Array].includes(a)&&(a={type:a}),a&&a.reflectToAttribute&&(a.reflect=!0),super.createProperty(e,a)}static getOrCreateMap(e){return ki(this,e)}static finalize(){if(window.litIssuedWarnings&&(window.litIssuedWarnings.add("no-override-create-property"),window.litIssuedWarnings.add("no-override-get-property-descriptor")),super.finalize(),Array.isArray(this.observers)){const e=this.getOrCreateMap("__complexObservers");this.observers.forEach(a=>{const{method:r,observerProps:n}=Ei(a);e.set(r,n)})}}static addCheckedInitializer(e){super.addInitializer(a=>{a instanceof this&&e(a)})}static getPropertyDescriptor(e,a,r){const n=super.getPropertyDescriptor(e,a,r);let o=n;if(this.getOrCreateMap("__propKeys").set(e,a),r.sync&&(o={get:n.get,set(h){const l=this[e];ai(h,l)&&(this[a]=h,this.requestUpdate(e,l,r),this.hasUpdated&&this.performUpdate())},configurable:!0,enumerable:!0}),r.readOnly){const h=o.set;this.addCheckedInitializer(l=>{l[`_set${fs(e)}`]=function(c){h.call(l,c)}}),o={get:o.get,set(){},configurable:!0,enumerable:!0}}if("value"in r&&this.addCheckedInitializer(h=>{const l=typeof r.value=="function"?r.value.call(h):r.value;r.readOnly?h[`_set${fs(e)}`](l):h[e]=l}),r.observer){const h=r.observer;this.getOrCreateMap("__observers").set(e,h),this.addCheckedInitializer(l=>{l[h]||console.warn(`observer method ${h} not defined`)})}if(r.notify){if(!this.__notifyProps)this.__notifyProps=new Set;else if(!this.hasOwnProperty("__notifyProps")){const h=this.__notifyProps;this.__notifyProps=new Set(h)}this.__notifyProps.add(e)}if(r.computed){const h=`__assignComputed${e}`,l=Ei(r.computed);this.prototype[h]=function(...c){this[e]=this[l.method](...c)},this.getOrCreateMap("__computedObservers").set(h,l.observerProps)}return r.attribute||(r.attribute=gs(e)),o}static get polylitConfig(){return{asyncFirstRender:!1}}connectedCallback(){super.connectedCallback();const{polylitConfig:e}=this.constructor;!this.hasUpdated&&!e.asyncFirstRender&&this.performUpdate()}firstUpdated(){super.firstUpdated(),this.$||(this.$={}),this.renderRoot.querySelectorAll("[id]").forEach(e=>{this.$[e.id]=e})}ready(){}willUpdate(e){this.constructor.__computedObservers&&this.__runComplexObservers(e,this.constructor.__computedObservers)}updated(e){const a=this.__isReadyInvoked;this.__isReadyInvoked=!0,this.constructor.__observers&&this.__runObservers(e,this.constructor.__observers),this.constructor.__complexObservers&&this.__runComplexObservers(e,this.constructor.__complexObservers),this.__dynamicPropertyObservers&&this.__runDynamicObservers(e,this.__dynamicPropertyObservers),this.__dynamicMethodObservers&&this.__runComplexObservers(e,this.__dynamicMethodObservers),this.constructor.__notifyProps&&this.__runNotifyProps(e,this.constructor.__notifyProps),a||this.ready()}setProperties(e){Object.entries(e).forEach(([a,r])=>{const n=this.constructor.__propKeys.get(a),o=this[n];this[n]=r,this.requestUpdate(a,o)}),this.hasUpdated&&this.performUpdate()}_createMethodObserver(e){const a=ki(this,"__dynamicMethodObservers"),{method:r,observerProps:n}=Ei(e);a.set(r,n)}_createPropertyObserver(e,a){ki(this,"__dynamicPropertyObservers").set(a,e)}__runComplexObservers(e,a){a.forEach((r,n)=>{r.some(o=>e.has(o))&&(this[n]?this[n](...r.map(o=>this[o])):console.warn(`observer method ${n} not defined`))})}__runDynamicObservers(e,a){a.forEach((r,n)=>{e.has(r)&&this[n]&&this[n](this[r],e.get(r))})}__runObservers(e,a){e.forEach((r,n)=>{const o=a.get(n);o!==void 0&&this[o]&&this[o](this[n],r)})}__runNotifyProps(e,a){e.forEach((r,n)=>{a.has(n)&&this.dispatchEvent(new CustomEvent(`${gs(n)}-changed`,{detail:{value:this[n]}}))})}_get(e,a){return Uo(e,a)}_set(e,a,r){Go(e,a,r)}}return x(i,"enabledWarnings",[]),i},i1=m(Yo);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Zo(s){return s.nodeType===Node.TEXT_NODE&&s.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let s1=class{constructor(i,t){this.slot=i,this.callback=t,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const i=this.slot.assignedNodes({flatten:!0});let t=[];const e=[],a=[];i.length&&(t=i.filter(r=>!this._storedNodes.includes(r))),this._storedNodes.length&&this._storedNodes.forEach((r,n)=>{const o=i.indexOf(r);o===-1?e.push(r):o!==n&&a.push(r)}),(t.length||e.length||a.length)&&this.callback({addedNodes:t,currentNodes:i,movedNodes:a,removedNodes:e}),this._storedNodes=i}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Xo=0;function Qo(){return Xo++}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Jo=class extends EventTarget{static generateId(i,t="default"){return`${t}-${i.localName}-${Qo()}`}constructor(i,t,e,a={}){super();const{initializer:r,multiple:n,observe:o,useUniqueId:h,uniqueIdPrefix:l}=a;this.host=i,this.slotName=t,this.tagName=e,this.observe=typeof o=="boolean"?o:!0,this.multiple=typeof n=="boolean"?n:!1,this.slotInitializer=r,n&&(this.nodes=[]),h&&(this.defaultId=this.constructor.generateId(i,l||t))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let i=this.getSlotChild();i?(this.node=i,this.initAddedNode(i)):(i=this.attachDefaultNode(),this.initNode(i))}initMultiple(){const i=this.getSlotChildren();if(i.length===0){const t=this.attachDefaultNode();t&&(this.nodes=[t],this.initNode(t))}else this.nodes=i,i.forEach(t=>{this.initAddedNode(t)})}attachDefaultNode(){const{host:i,slotName:t,tagName:e}=this;let a=this.defaultNode;return!a&&e&&(a=document.createElement(e),a instanceof Element&&(t!==""&&a.setAttribute("slot",t),this.defaultNode=a)),a&&(this.node=a,i.appendChild(a)),a}getSlotChildren(){const{slotName:i}=this;return Array.from(this.host.childNodes).filter(t=>t.nodeType===Node.ELEMENT_NODE&&t.hasAttribute("data-slot-ignore")?!1:t.nodeType===Node.ELEMENT_NODE&&t.slot===i||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&i==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(i){const{slotInitializer:t}=this;t&&t(i,this.host)}initCustomNode(i){}teardownNode(i){}initAddedNode(i){i!==this.defaultNode&&(this.initCustomNode(i),this.initNode(i))}observeSlot(){const{slotName:i}=this,t=i===""?"slot:not([name])":`slot[name=${i}]`,e=this.host.shadowRoot.querySelector(t);this.__slotObserver=new s1(e,({addedNodes:a,removedNodes:r})=>{const n=this.multiple?this.nodes:[this.node],o=a.filter(h=>!Zo(h)&&!n.includes(h)&&!(h.nodeType===Node.ELEMENT_NODE&&h.hasAttribute("data-slot-ignore")));r.length&&(this.nodes=n.filter(h=>!r.includes(h)),r.forEach(h=>{this.teardownNode(h)})),o&&o.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...n,...o].filter(h=>h!==this.defaultNode),o.forEach(h=>{this.initAddedNode(h)})):(this.node&&this.node.remove(),this.node=o[0],this.initAddedNode(this.node)))})}};/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let th=class extends Jo{constructor(i){super(i,"tooltip"),this.setTarget(i),this.__onContentChange=this.__onContentChange.bind(this)}initCustomNode(i){i.target=this.target,this.ariaTarget!==void 0&&(i.ariaTarget=this.ariaTarget),this.context!==void 0&&(i.context=this.context),this.manual!==void 0&&(i.manual=this.manual),this.opened!==void 0&&(i.opened=this.opened),this.position!==void 0&&(i._position=this.position),this.shouldShow!==void 0&&(i.shouldShow=this.shouldShow),this.manual||this.host.setAttribute("has-tooltip",""),this.__notifyChange(i),i.addEventListener("content-changed",this.__onContentChange)}teardownNode(i){this.manual||this.host.removeAttribute("has-tooltip"),i.removeEventListener("content-changed",this.__onContentChange),this.__notifyChange(null)}setAriaTarget(i){this.ariaTarget=i;const t=this.node;t&&(t.ariaTarget=i)}setContext(i){this.context=i;const t=this.node;t&&(t.context=i)}setManual(i){this.manual=i;const t=this.node;t&&(t.manual=i)}setOpened(i){this.opened=i;const t=this.node;t&&(t.opened=i)}setPosition(i){this.position=i;const t=this.node;t&&(t._position=i)}setShouldShow(i){this.shouldShow=i;const t=this.node;t&&(t.shouldShow=i)}setTarget(i){this.target=i;const t=this.node;t&&(t.target=i)}__onContentChange(i){this.__notifyChange(i.target)}__notifyChange(i){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:i}}))}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const eh=s=>s,a1=typeof document.head.style.touchAction=="string",l0="__polymerGestures",Ii="__polymerGesturesHandled",d0="__polymerGesturesTouchAction",_s=25,ms=5,ih=2,sh=["mousedown","mousemove","mouseup","click"],ah=[0,1,4,2],rh=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function F0(s){return sh.indexOf(s)>-1}let nh=!1;(function(){try{const s=Object.defineProperty({},"passive",{get(){nh=!0}});window.addEventListener("test",null,s),window.removeEventListener("test",null,s)}catch{}})();function oh(s){F0(s)}const hh=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),lh={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Ht(s){const i=s.type;if(!F0(i))return!1;if(i==="mousemove"){let e=s.buttons===void 0?1:s.buttons;return s instanceof window.MouseEvent&&!rh&&(e=ah[s.which]||0),!!(e&1)}return(s.button===void 0?0:s.button)===0}function dh(s){if(s.type==="click"){if(s.detail===0)return!0;const i=Ct(s);if(!i.nodeType||i.nodeType!==Node.ELEMENT_NODE)return!0;const t=i.getBoundingClientRect(),e=s.pageX,a=s.pageY;return!(e>=t.left&&e<=t.right&&a>=t.top&&a<=t.bottom)}return!1}const rt={touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ch(s){let i="auto";const t=n1(s);for(let e=0,a;e<t.length;e++)if(a=t[e],a[d0]){i=a[d0];break}return i}function r1(s,i,t){s.movefn=i,s.upfn=t,document.addEventListener("mousemove",i),document.addEventListener("mouseup",t)}function Xt(s){document.removeEventListener("mousemove",s.movefn),document.removeEventListener("mouseup",s.upfn),s.movefn=null,s.upfn=null}const n1=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:s=>s.composedPath&&s.composedPath()||[],B0={},Lt=[];function vh(s,i){let t=document.elementFromPoint(s,i),e=t;for(;e&&e.shadowRoot&&!window.ShadyDOM;){const a=e;if(e=e.shadowRoot.elementFromPoint(s,i),a===e)break;e&&(t=e)}return t}function Ct(s){const i=n1(s);return i.length>0?i[0]:s.target}function ph(s){const i=s.type,e=s.currentTarget[l0];if(!e)return;const a=e[i];if(!a)return;if(!s[Ii]&&(s[Ii]={},i.startsWith("touch"))){const n=s.changedTouches[0];if(i==="touchstart"&&s.touches.length===1&&(rt.touch.id=n.identifier),rt.touch.id!==n.identifier)return;a1||(i==="touchstart"||i==="touchmove")&&uh(s)}const r=s[Ii];if(!r.skip){for(let n=0,o;n<Lt.length;n++)o=Lt[n],a[o.name]&&!r[o.name]&&o.flow&&o.flow.start.indexOf(s.type)>-1&&o.reset&&o.reset();for(let n=0,o;n<Lt.length;n++)o=Lt[n],a[o.name]&&!r[o.name]&&(r[o.name]=!0,o[i](s))}}function uh(s){const i=s.changedTouches[0],t=s.type;if(t==="touchstart")rt.touch.x=i.clientX,rt.touch.y=i.clientY,rt.touch.scrollDecided=!1;else if(t==="touchmove"){if(rt.touch.scrollDecided)return;rt.touch.scrollDecided=!0;const e=ch(s);let a=!1;const r=Math.abs(rt.touch.x-i.clientX),n=Math.abs(rt.touch.y-i.clientY);s.cancelable&&(e==="none"?a=!0:e==="pan-x"?a=n>r:e==="pan-y"&&(a=r>n)),a?s.preventDefault():Qe("track")}}function bs(s,i,t){return B0[i]?(gh(s,i,t),!0):!1}function gh(s,i,t){const e=B0[i],a=e.deps,r=e.name;let n=s[l0];n||(s[l0]=n={});for(let o=0,h,l;o<a.length;o++)h=a[o],!(hh&&F0(h)&&h!=="click")&&(l=n[h],l||(n[h]=l={_count:0}),l._count===0&&s.addEventListener(h,ph,oh(h)),l[r]=(l[r]||0)+1,l._count=(l._count||0)+1);s.addEventListener(i,t),e.touchAction&&_h(s,e.touchAction)}function V0(s){Lt.push(s),s.emits.forEach(i=>{B0[i]=s})}function fh(s){for(let i=0,t;i<Lt.length;i++){t=Lt[i];for(let e=0,a;e<t.emits.length;e++)if(a=t.emits[e],a===s)return t}return null}function _h(s,i){a1&&s instanceof HTMLElement&&Vo.run(()=>{s.style.touchAction=i}),s[d0]=i}function H0(s,i,t){const e=new Event(i,{bubbles:!0,cancelable:!0,composed:!0});if(e.detail=t,eh(s).dispatchEvent(e),e.defaultPrevented){const a=t.preventer||t.sourceEvent;a&&a.preventDefault&&a.preventDefault()}}function Qe(s){const i=fh(s);i.info&&(i.info.prevent=!0)}V0({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Xt(this.info)},mousedown(s){if(!Ht(s))return;const i=Ct(s),t=this,e=r=>{Ht(r)||(ge("up",i,r),Xt(t.info))},a=r=>{Ht(r)&&ge("up",i,r),Xt(t.info)};r1(this.info,e,a),ge("down",i,s)},touchstart(s){ge("down",Ct(s),s.changedTouches[0],s)},touchend(s){ge("up",Ct(s),s.changedTouches[0],s)}});function ge(s,i,t,e){i&&H0(i,s,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e,prevent(a){return Qe(a)}})}V0({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(s){this.moves.length>ih&&this.moves.shift(),this.moves.push(s)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Xt(this.info)},mousedown(s){if(!Ht(s))return;const i=Ct(s),t=this,e=r=>{const n=r.clientX,o=r.clientY;Ms(t.info,n,o)&&(t.info.state=t.info.started?r.type==="mouseup"?"end":"track":"start",t.info.state==="start"&&Qe("tap"),t.info.addMove({x:n,y:o}),Ht(r)||(t.info.state="end",Xt(t.info)),i&&Ti(t.info,i,r),t.info.started=!0)},a=r=>{t.info.started&&e(r),Xt(t.info)};r1(this.info,e,a),this.info.x=s.clientX,this.info.y=s.clientY},touchstart(s){const i=s.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchmove(s){const i=Ct(s),t=s.changedTouches[0],e=t.clientX,a=t.clientY;Ms(this.info,e,a)&&(this.info.state==="start"&&Qe("tap"),this.info.addMove({x:e,y:a}),Ti(this.info,i,t),this.info.state="track",this.info.started=!0)},touchend(s){const i=Ct(s),t=s.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),Ti(this.info,i,t))}});function Ms(s,i,t){if(s.prevent)return!1;if(s.started)return!0;const e=Math.abs(s.x-i),a=Math.abs(s.y-t);return e>=ms||a>=ms}function Ti(s,i,t){if(!i)return;const e=s.moves[s.moves.length-2],a=s.moves[s.moves.length-1],r=a.x-s.x,n=a.y-s.y;let o,h=0;e&&(o=a.x-e.x,h=a.y-e.y),H0(i,"track",{state:s.state,x:t.clientX,y:t.clientY,dx:r,dy:n,ddx:o,ddy:h,sourceEvent:t,hover(){return vh(t.clientX,t.clientY)}})}V0({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(s){Ht(s)&&(this.info.x=s.clientX,this.info.y=s.clientY)},click(s){Ht(s)&&zs(this.info,s)},touchstart(s){const i=s.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchend(s){zs(this.info,s.changedTouches[0],s)}});function zs(s,i,t){const e=Math.abs(i.clientX-s.x),a=Math.abs(i.clientY-s.y),r=Ct(t||i);!r||lh[r.localName]&&r.hasAttribute("disabled")||(isNaN(e)||isNaN(a)||e<=_s&&a<=_s||dh(i))&&(s.prevent||H0(r,"tap",{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:t}))}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mh=m(s=>class extends s{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o1=m(s=>class extends s{ready(){super.ready(),this.addEventListener("keydown",t=>{this._onKeyDown(t)}),this.addEventListener("keyup",t=>{this._onKeyUp(t)})}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t);break}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bh=s=>class extends mh(o1(s)){get _activeKeys(){return[" "]}ready(){super.ready(),bs(this,"down",t=>{this._shouldSetActive(t)&&this._setActive(!0)}),bs(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",e=>{this._activeKeys.includes(e.key)&&this._setActive(!1)},{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let j0=!1;window.addEventListener("keydown",()=>{j0=!0},{capture:!0});window.addEventListener("mousedown",()=>{j0=!1},{capture:!0});function Mh(){return j0}function zh(s){const i=s.style;if(i.visibility==="hidden"||i.display==="none")return!0;const t=window.getComputedStyle(s);return t.visibility==="hidden"||t.display==="none"}function c0(s){return s.checkVisibility?!s.checkVisibility({visibilityProperty:!0}):s.offsetParent===null&&s.clientWidth===0&&s.clientHeight===0?!0:zh(s)}function yh(s){return s.getRootNode().activeElement===s}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wh=m(s=>class extends s{get _keyboardActive(){return Mh()}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}focus(t){super.focus(t),t&&t.focusVisible===!1||this.setAttribute("focus-ring","")}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xh=s=>class extends bh(wh(s)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged",sync:!0},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(t){this._value=t}ready(){super.ready();const t=this.getAttribute("value");t!==null&&(this.value=t)}focus(t){this.disabled||super.focus(t)}_shouldSetActive(t){return!this.disabled&&!(t.type==="keydown"&&t.defaultPrevented)}_selectedChanged(t){this.setAttribute("aria-selected",t)}_disabledChanged(t){super._disabledChanged(t),t&&(this.selected=!1,this.blur())}_onKeyDown(t){super._onKeyDown(t),this._activeKeys.includes(t.key)&&!t.defaultPrevented&&(t.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */var nt,ft,Pt,Qt,O,_e,me,Jt;let Ch=(Jt=class extends EventTarget{constructor(t){super();g(this,O);g(this,nt);g(this,ft,new Set);g(this,Pt);g(this,Qt,!1);b(this,nt,t),b(this,Pt,new CSSStyleSheet)}observe(t){this.connect(),!d(this,ft).has(t)&&(d(this,ft).add(t),d(this,Pt).replaceSync(`
      :root::before, :host::before {
        content: '' !important;
        position: absolute !important;
        top: -9999px !important;
        left: -9999px !important;
        visibility: hidden !important;
        transition: 1ms allow-discrete step-end !important;
        transition-property: ${[...d(this,ft)].join(", ")} !important;
      }
    `))}connect(){d(this,Qt)||(d(this,nt).adoptedStyleSheets.unshift(d(this,Pt)),d(this,O,me).addEventListener("transitionstart",t=>f(this,O,_e).call(this,t)),d(this,O,me).addEventListener("transitionend",t=>f(this,O,_e).call(this,t)),b(this,Qt,!0))}disconnect(){d(this,ft).clear(),d(this,nt).adoptedStyleSheets=d(this,nt).adoptedStyleSheets.filter(t=>t!==d(this,Pt)),d(this,O,me).removeEventListener("transitionstart",f(this,O,_e)),d(this,O,me).removeEventListener("transitionend",f(this,O,_e)),b(this,Qt,!1)}static for(t){return t.__cssPropertyObserver||(t.__cssPropertyObserver=new Jt(t)),t.__cssPropertyObserver}},nt=new WeakMap,ft=new WeakMap,Pt=new WeakMap,Qt=new WeakMap,O=new WeakSet,_e=function(t){const{propertyName:e}=t;d(this,ft).has(e)&&this.dispatchEvent(new CustomEvent("property-changed",{detail:{propertyName:e}}))},me=function(){return d(this,nt).documentElement??d(this,nt).host},Jt);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Sh(s){const{baseStyles:i,themeStyles:t,elementStyles:e,lumoInjector:a}=s.constructor,r=s.__lumoStyleSheet;return r&&(i||t)?[...a.includeBaseStyles?i:[],r,...t]:[r,...e].filter(Boolean)}function h1(s){ri(s.shadowRoot,Sh(s))}function ys(s,i){s.__lumoStyleSheet=i,h1(s)}function Oi(s){s.__lumoStyleSheet=void 0,h1(s)}/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ws=new Set;function l1(s){ws.has(s)||(ws.add(s),console.warn(s))}/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xs=new WeakMap;function Cs(s){try{return s.media.mediaText}catch{return l1('[LumoInjector] Browser denied to access property "mediaText" for some CSS rules, so they were skipped.'),""}}function Ah(s){try{return s.cssRules}catch{return l1('[LumoInjector] Browser denied to access property "cssRules" for some CSS stylesheets, so they were skipped.'),[]}}function d1(s,i={tags:new Map,modules:new Map}){var t;for(const e of Ah(s)){if(e instanceof CSSImportRule){const a=Cs(e);a.startsWith("lumo_")?i.modules.set(a,[...e.styleSheet.cssRules]):d1(e.styleSheet,i);continue}if(e instanceof CSSMediaRule){const a=Cs(e);a.startsWith("lumo_")&&i.modules.set(a,[...e.cssRules]);continue}if(e instanceof CSSStyleRule&&e.cssText.includes("-inject")){for(const a of e.style){const r=(t=a.match(/^--_lumo-(.*)-inject-modules$/u))==null?void 0:t[1];if(!r)continue;const n=e.style.getPropertyValue(a);i.tags.set(r,n.split(",").map(o=>o.trim().replace(/'|"/gu,"")))}continue}}return i}function Eh(s){let i=new Map,t=new Map;for(const e of s){let a=xs.get(e);a||(a=d1(e),xs.set(e,a)),i=new Map([...i,...a.tags]),t=new Map([...t,...a.modules])}return{tags:i,modules:t}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function c1(s){return`--_lumo-${s.is}-inject`}var Ae,Rt,_t,ot,q,v1,qe,p1,ta;let kh=(ta=class{constructor(i=document){g(this,q);g(this,Ae);g(this,Rt);g(this,_t,new Map);g(this,ot,new Map);b(this,Ae,i),this.handlePropertyChange=this.handlePropertyChange.bind(this),b(this,Rt,Ch.for(i)),d(this,Rt).addEventListener("property-changed",this.handlePropertyChange)}disconnect(){d(this,Rt).removeEventListener("property-changed",this.handlePropertyChange),d(this,_t).clear(),d(this,ot).values().forEach(i=>i.forEach(Oi))}forceUpdate(){for(const i of d(this,_t).keys())f(this,q,qe).call(this,i)}componentConnected(i){const{lumoInjector:t}=i.constructor,{is:e}=t;d(this,ot).set(e,d(this,ot).get(e)??new Set),d(this,ot).get(e).add(i);const a=d(this,_t).get(e);if(a){a.cssRules.length>0&&ys(i,a);return}f(this,q,v1).call(this,e);const r=c1(t);d(this,Rt).observe(r)}componentDisconnected(i){var e;const{is:t}=i.constructor.lumoInjector;(e=d(this,ot).get(t))==null||e.delete(i),Oi(i)}handlePropertyChange(i){var a;const{propertyName:t}=i.detail,e=(a=t.match(/^--_lumo-(.*)-inject$/u))==null?void 0:a[1];e&&f(this,q,qe).call(this,e)}},Ae=new WeakMap,Rt=new WeakMap,_t=new WeakMap,ot=new WeakMap,q=new WeakSet,v1=function(i){d(this,_t).set(i,new CSSStyleSheet),f(this,q,qe).call(this,i)},qe=function(i){var n;const{tags:t,modules:e}=Eh(d(this,q,p1)),a=(t.get(i)??[]).flatMap(o=>e.get(o)??[]).map(o=>o.cssText).join(`
`),r=d(this,_t).get(i);r.replaceSync(a),(n=d(this,ot).get(i))==null||n.forEach(o=>{a?ys(o,r):Oi(o)})},p1=function(){let i=new Set;for(const t of[d(this,Ae),document])i=i.union(new Set(t.styleSheets)),i=i.union(new Set(t.adoptedStyleSheets));return[...i]},ta);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ss=new Set;function u1(s){const i=s.getRootNode();return i.host&&i.host.constructor.version?u1(i.host):i}const g1=s=>class extends s{static finalize(){super.finalize();const t=c1(this.lumoInjector);this.is&&!Ss.has(t)&&(Ss.add(t),CSS.registerProperty({name:t,syntax:"<number>",inherits:!0,initialValue:"0"}))}static get lumoInjector(){return{is:this.is,includeBaseStyles:!1}}connectedCallback(){super.connectedCallback();const t=u1(this);t.__lumoInjectorDisabled||this.isConnected&&(t.__lumoInjector||(t.__lumoInjector=new kh(t)),this.__lumoInjector=t.__lumoInjector,this.__lumoInjector.componentConnected(this))}disconnectedCallback(){super.disconnectedCallback(),this.__lumoInjector&&(this.__lumoInjector.componentDisconnected(this),this.__lumoInjector=void 0)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ih=s=>class extends s{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(t,e,a){super.attributeChangedCallback(t,e,a),t==="theme"&&this._set_theme(a)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const v0=[],Th=new Set,Oh=new Set;function Lh(s){return s&&Object.prototype.hasOwnProperty.call(s,"__themes")}function Ph(s,i){return(s||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`,"u").test(i))}function Rh(s){return s.map(i=>i.cssText).join(`
`)}const $h="vaadin-themable-mixin-style";function Dh(s,i){const t=document.createElement("style");t.id=$h,t.textContent=Rh(s),i.content.appendChild(t)}function Nh(s=""){let i=0;return s.startsWith("lumo-")||s.startsWith("material-")?i=1:s.startsWith("vaadin-")&&(i=2),i}function f1(s){const i=[];return s.include&&[].concat(s.include).forEach(t=>{const e=v0.find(a=>a.moduleId===t);e?i.push(...f1(e),...e.styles):console.warn(`Included moduleId ${t} not found in style registry`)},s.styles),i}function Fh(s){const i=`${s}-default-theme`,t=v0.filter(e=>e.moduleId!==i&&Ph(e.themeFor,s)).map(e=>({...e,styles:[...f1(e),...e.styles],includePriority:Nh(e.moduleId)})).sort((e,a)=>a.includePriority-e.includePriority);return t.length>0?t:v0.filter(e=>e.moduleId===i)}const _1=s=>class extends Ih(s){constructor(){super(),Th.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&Oh.add(this.is),this.elementStyles)return;const t=this.prototype._template;!t||Lh(this)||Dh(this.getStylesForThis(),t)}static finalizeStyles(t){return this.baseStyles=t?[t].flat(1/0):[],this.themeStyles=this.getStylesForThis(),[...this.baseStyles,...this.themeStyles]}static getStylesForThis(){const t=s.__themes||[],e=Object.getPrototypeOf(this.prototype),a=(e?e.constructor.__themes:[])||[];this.__themes=[...t,...a,...Fh(this.is)];const r=this.__themes.flatMap(n=>n.styles);return r.filter((n,o)=>o===r.lastIndexOf(n))}};/**
 * @license
 * Copyright (c) 2025 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bh=(s,...i)=>{const t=document.createElement("style");t.id=s,t.textContent=i.map(e=>e.toString()).join(`
`),document.head.insertAdjacentElement("afterbegin",t)};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */["--vaadin-text-color","--vaadin-text-color-disabled","--vaadin-text-color-secondary","--vaadin-border-color","--vaadin-border-color-secondary","--vaadin-background-color"].forEach(s=>{CSS.registerProperty({name:s,syntax:"<color>",inherits:!0,initialValue:"light-dark(black, white)"})});Bh("vaadin-base",u`
    @layer vaadin.base {
      html {
        /* Background color */
        --vaadin-background-color: light-dark(#fff, #222);

        /* Container colors */
        --vaadin-background-container: color-mix(in oklab, var(--vaadin-text-color) 5%, var(--vaadin-background-color));
        --vaadin-background-container-strong: color-mix(
          in oklab,
          var(--vaadin-text-color) 10%,
          var(--vaadin-background-color)
        );

        /* Border colors */
        --vaadin-border-color-secondary: color-mix(in oklab, var(--vaadin-text-color) 24%, transparent);
        --vaadin-border-color: color-mix(in oklab, var(--vaadin-text-color) 48%, transparent); /* Above 3:1 contrast */

        /* Text colors */
        /* Above 3:1 contrast */
        --vaadin-text-color-disabled: color-mix(in oklab, var(--vaadin-text-color) 48%, transparent);
        /* Above 4.5:1 contrast */
        --vaadin-text-color-secondary: color-mix(in oklab, var(--vaadin-text-color) 68%, transparent);
        /* Above 7:1 contrast */
        --vaadin-text-color: light-dark(#1f1f1f, white);

        /* Padding */
        --vaadin-padding-xs: 6px;
        --vaadin-padding-s: 8px;
        --vaadin-padding-m: 12px;
        --vaadin-padding-l: 16px;
        --vaadin-padding-xl: 24px;
        --vaadin-padding-block-container: var(--vaadin-padding-xs);
        --vaadin-padding-inline-container: var(--vaadin-padding-s);

        /* Gap/spacing */
        --vaadin-gap-xs: 6px;
        --vaadin-gap-s: 8px;
        --vaadin-gap-m: 12px;
        --vaadin-gap-l: 16px;
        --vaadin-gap-xl: 24px;

        /* Border radius */
        --vaadin-radius-s: 3px;
        --vaadin-radius-m: 6px;
        --vaadin-radius-l: 12px;

        /* Focus outline */
        --vaadin-focus-ring-width: 2px;
        --vaadin-focus-ring-color: var(--vaadin-text-color);

        /* Icons, used as mask-image */
        --_vaadin-icon-arrow-up: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>');
        --_vaadin-icon-calendar: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>');
        --_vaadin-icon-checkmark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>');
        --_vaadin-icon-chevron-down: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>');
        --_vaadin-icon-clock: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>');
        --_vaadin-icon-cross: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>');
        --_vaadin-icon-drag: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M11 7c0 .82843-.6716 1.5-1.5 1.5C8.67157 8.5 8 7.82843 8 7s.67157-1.5 1.5-1.5c.8284 0 1.5.67157 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5Zm5-10c0 .82843-.6716 1.5-1.5 1.5S13 7.82843 13 7s.6716-1.5 1.5-1.5S16 6.17157 16 7Zm0 5c0 .8284-.6716 1.5-1.5 1.5S13 12.8284 13 12s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5S13 17.8284 13 17s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Z" fill="currentColor"/></svg>');
        --_vaadin-icon-eye: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>');
        --_vaadin-icon-eye-slash: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>');
        --_vaadin-icon-fullscreen: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>');
        --_vaadin-icon-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>');
        --_vaadin-icon-link: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>');
        --_vaadin-icon-menu: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>');
        --_vaadin-icon-minus: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>');
        --_vaadin-icon-paper-airplane: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>');
        --_vaadin-icon-pen: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>');
        --_vaadin-icon-play: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>');
        --_vaadin-icon-plus: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>');
        --_vaadin-icon-redo: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>');
        --_vaadin-icon-refresh: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M22 10C22 10 19.995 7.26822 18.3662 5.63824C16.7373 4.00827 14.4864 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.1031 21 19.5649 18.2543 20.6482 14.5M22 10V4M22 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        --_vaadin-icon-resize: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 7.46967c.2929.29289.2929.76777 0 1.06066L8.53033 18.5304c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7678 0-1.0607L17.4697 7.46967c.2929-.29289.7677-.29289 1.0606 0Zm0 4.50003c.2929.2929.2929.7678 0 1.0607l-5.5 5.5c-.2929.2928-.7677.2928-1.0606 0-.2929-.2929-.2929-.7678 0-1.0607l5.4999-5.5c.2929-.2929.7678-.2929 1.0607 0Zm0 4.5c.2929.2928.2929.7677 0 1.0606l-1 1.0001c-.2929.2928-.7677.2929-1.0606 0-.2929-.2929-.2929-.7678 0-1.0607l1-1c.2929-.2929.7677-.2929 1.0606 0Z" fill="currentColor"/></svg>');
        --_vaadin-icon-sort: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M7.49854 6.99951C7.92795 6.99951 8.15791 7.50528 7.87549 7.82861L4.37646 11.8296C4.17728 12.0571 3.82272 12.0571 3.62354 11.8296L0.125488 7.82861C-0.157248 7.50531 0.0719873 6.99956 0.501465 6.99951H7.49854ZM3.62354 0.17041C3.82275 -0.0573875 4.17725 -0.0573848 4.37646 0.17041L7.87549 4.17041C8.15825 4.49373 7.92806 5.00049 7.49854 5.00049L0.501465 4.99951C0.0719873 4.99946 -0.157248 4.49371 0.125488 4.17041L3.62354 0.17041Z" fill="black"/></svg>');
        --_vaadin-icon-undo: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>');
        --_vaadin-icon-upload: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>');
        --_vaadin-icon-user: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>');
        --_vaadin-icon-warn: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>');

        /* Cursors for interactive elements */
        --vaadin-clickable-cursor: pointer;
        --vaadin-disabled-cursor: not-allowed;

        /* Use units so that the values can be used in calc() */
        --safe-area-inset-top: env(safe-area-inset-top, 0px);
        --safe-area-inset-right: env(safe-area-inset-right, 0px);
        --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
        --safe-area-inset-left: env(safe-area-inset-left, 0px);
      }

      @supports not (color: hsl(0 0 0)) {
        html {
          --_vaadin-safari-17-deg: 1deg;
        }
      }

      @media (forced-colors: active) {
        html {
          --vaadin-background-color: Canvas;
          --vaadin-border-color: CanvasText;
          --vaadin-border-color-secondary: CanvasText;
          --vaadin-text-color-disabled: CanvasText;
          --vaadin-text-color-secondary: CanvasText;
          --vaadin-text-color: CanvasText;
          --vaadin-icon-color: CanvasText;
          --vaadin-focus-ring-color: Highlight;
        }
      }
    }
  `);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vh=u`
  :host {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--vaadin-tab-gap, var(--vaadin-gap-s));
    padding: var(--vaadin-tab-padding, var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container));
    cursor: var(--vaadin-clickable-cursor);
    font-size: var(--vaadin-tab-font-size, 1em);
    font-weight: var(--vaadin-tab-font-weight, 500);
    line-height: var(--vaadin-tab-line-height, inherit);
    color: var(--vaadin-tab-text-color, var(--vaadin-text-color-secondary));
    background: var(--vaadin-tab-background, transparent);
    border-radius: var(--vaadin-tab-border-radius, var(--vaadin-radius-m));
    border: var(--vaadin-tab-border-width, 0) solid var(--vaadin-tab-border-color, var(--vaadin-border-color-secondary));
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;
    touch-action: manipulation;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([orientation='vertical']) {
    justify-content: start;
  }

  :host([selected]) {
    --vaadin-tab-background: var(--vaadin-background-container);
    --vaadin-tab-text-color: var(--vaadin-text-color);
  }

  :host([disabled]) {
    cursor: var(--vaadin-disabled-cursor);
    opacity: 0.5;
  }

  :host(:is([focus-ring], :focus-visible)) {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: calc(var(--vaadin-focus-ring-width) * -1);
  }

  slot {
    gap: inherit;
    align-items: inherit;
    justify-content: inherit;
  }

  ::slotted(a) {
    color: inherit !important;
    cursor: inherit !important;
    text-decoration: inherit !important;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
    gap: inherit;
  }

  ::slotted(a)::before {
    content: '';
    position: absolute;
    inset: 0;
  }

  @media (forced-colors: active) {
    :host {
      border: 1px solid Canvas;
    }

    :host([selected]) {
      color: Highlight;
      border-color: Highlight;
    }

    :host([disabled]) {
      color: GrayText;
      opacity: 1;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hh extends xh(_1(e1(i1(g1(Z))))){static get is(){return"vaadin-tab"}static get styles(){return Vh}render(){return w`
      <slot></slot>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this.setAttribute("role","tab"),this._tooltipController=new th(this),this.addController(this._tooltipController)}_onKeyUp(i){const t=this.hasAttribute("active");if(super._onKeyUp(i),t){const e=this.querySelector("a");e&&e.click()}}}Qa(Hh);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jh=u`
  :host {
    display: flex;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    box-sizing: border-box;
    padding: var(--vaadin-tabs-padding);
    background: var(--vaadin-tabs-background);
    border-radius: var(--vaadin-tabs-border-radius);
    border: var(--vaadin-tabs-border-width, 0) solid
      var(--vaadin-tabs-border-color, var(--vaadin-border-color-secondary));
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([orientation='vertical']) {
    flex-direction: column;
  }

  [part='tabs'] {
    flex: 1;
    overflow: auto;
    overscroll-behavior: contain;
    display: flex;
    flex-direction: column;
    gap: var(--vaadin-tabs-gap, var(--vaadin-gap-s));
  }

  :host([orientation='horizontal']) [part='tabs'] {
    flex-direction: row;
    scrollbar-width: none;
  }

  /* scrollbar-width is supported in Safari 18.2, use the following for earlier */
  :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
    display: none;
  }

  [part$='button'] {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    opacity: 0;
    cursor: var(--vaadin-clickable-cursor);
    box-sizing: border-box;
    height: 100%;
    padding: var(--vaadin-tab-padding, var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container));
    background: var(--vaadin-background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  [part='forward-button'] {
    inset-inline-end: 0;
  }

  :host([overflow~='start']) [part='back-button'],
  :host([overflow~='end']) [part='forward-button'] {
    pointer-events: auto;
    opacity: 1;
  }

  [part$='button']::before {
    content: '';
    display: block;
    width: var(--vaadin-icon-size, 1lh);
    height: var(--vaadin-icon-size, 1lh);
    background: currentColor;
    mask: var(--_vaadin-icon-chevron-down) 50% / var(--vaadin-icon-visual-size, 100%) no-repeat;
    rotate: 90deg;
  }

  [part='forward-button']::before {
    rotate: -90deg;
  }

  :host(:is([orientation='vertical'], [theme~='hide-scroll-buttons'])) [part$='button'] {
    display: none;
  }

  @media (pointer: coarse) {
    :host(:not([theme~='show-scroll-buttons'])) [part$='button'] {
      display: none;
    }
  }

  :host([dir='rtl']) [part$='button']::before {
    scale: 1 -1;
  }

  @media (forced-colors: active) {
    [part$='button']::before {
      background: CanvasText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function m1(s,i){const{scrollLeft:t}=s;return i!=="rtl"?t:s.scrollWidth-s.clientWidth+t}function Wh(s,i,t){i!=="rtl"?s.scrollLeft=t:s.scrollLeft=s.clientWidth-s.scrollWidth+t}/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qh=s=>class extends o1(s){get focused(){return(this._getItems()||[]).find(yh)}get _vertical(){return!0}get _tabNavigation(){return!1}focus(t){const e=this._getFocusableIndex();e>=0&&this._focus(e,t)}_getFocusableIndex(){const t=this._getItems();return Array.isArray(t)?this._getAvailableIndex(t,0,null,e=>!c0(e)):-1}_getItems(){return Array.from(this.children)}_onKeyDown(t){if(super._onKeyDown(t),t.metaKey||t.ctrlKey)return;const{key:e,shiftKey:a}=t,r=this._getItems()||[],n=r.indexOf(this.focused);let o,h;const c=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKeyPressed(e,a)?(h=-c,o=n-c):this.__isNextKeyPressed(e,a)?(h=c,o=n+c):e==="Home"?(h=1,o=0):e==="End"&&(h=-1,o=r.length-1),o=this._getAvailableIndex(r,o,h,v=>!c0(v)),!(this._tabNavigation&&e==="Tab"&&(o>n&&t.shiftKey||o<n&&!t.shiftKey||o===n))&&o>=0&&(t.preventDefault(),this._focus(o,{focusVisible:!0},!0))}__isPrevKeyPressed(t,e){return this._vertical?t==="ArrowUp":t==="ArrowLeft"||this._tabNavigation&&t==="Tab"&&e}__isNextKeyPressed(t,e){return this._vertical?t==="ArrowDown":t==="ArrowRight"||this._tabNavigation&&t==="Tab"&&!e}_focus(t,e,a=!1){const r=this._getItems();this._focusItem(r[t],e,a)}_focusItem(t,e){t&&t.focus(e)}_getAvailableIndex(t,e,a,r){const n=t.length;let o=e;for(let h=0;typeof o=="number"&&h<n;h+=1,o+=a||1){o<0?o=n-1:o>=n&&(o=0);const l=t[o];if(this._isItemFocusable(l)&&this.__isMatchingItem(l,r))return o}return-1}__isMatchingItem(t,e){return typeof e=="function"?e(t):!0}_isItemFocusable(t){return!t.hasAttribute("disabled")}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Uh=s=>class extends qh(s){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0,sync:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return this.orientation!=="horizontal"}focus(t){this._observer&&this._observer.flush();const e=Array.isArray(this.items)?this.items:[],a=this._getAvailableIndex(e,0,null,r=>r.tabIndex===0&&!c0(r));a>=0?this._focus(a,t):super.focus(t)}ready(){super.ready(),this.addEventListener("click",e=>this._onClick(e));const t=this.shadowRoot.querySelector("slot:not([name])");this._observer=new s1(t,()=>{this._setItems(this._filterItems([...this.children]))})}_getItems(){return this.items}_enhanceItems(t,e,a,r){if(!r&&t){this.setAttribute("aria-orientation",e||"vertical"),t.forEach(o=>{e?o.setAttribute("orientation",e):o.removeAttribute("orientation")}),this._setFocusable(a<0||!a?0:a);const n=t[a];t.forEach(o=>{o.selected=o===n}),n&&!n.disabled&&this._scrollToItem(a)}}_filterItems(t){return t.filter(e=>e._hasVaadinItemMixin)}_onClick(t){if(t.metaKey||t.shiftKey||t.ctrlKey||t.defaultPrevented)return;const e=this._filterItems(t.composedPath())[0];let a;e&&!e.disabled&&(a=this.items.indexOf(e))>=0&&(this.selected=a)}_searchKey(t,e){this._searchReset=t1.debounce(this._searchReset,Fo.after(500),()=>{this._searchBuf=""}),this._searchBuf+=e.toLowerCase(),this.items.some(r=>this.__isMatchingKey(r))||(this._searchBuf=e.toLowerCase());const a=this._searchBuf.length===1?t+1:t;return this._getAvailableIndex(this.items,a,1,r=>this.__isMatchingKey(r)&&getComputedStyle(r).display!=="none")}__isMatchingKey(t){return t.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(t){if(t.metaKey||t.ctrlKey)return;const e=t.key,a=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(e)&&e.length===1){const r=this._searchKey(a,e);r>=0&&this._focus(r);return}super._onKeyDown(t)}_setFocusable(t){t=this._getAvailableIndex(this.items,t,1);const e=this.items[t];this.items.forEach(a=>{a.tabIndex=a===e?0:-1})}_focus(t,e){this.items.forEach((a,r)=>{a.focused=r===t}),this._setFocusable(t),this._scrollToItem(t),super._focus(t,e)}_scrollToItem(t){const e=this.items[t];if(!e)return;const a=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],r=this._scrollerElement.getBoundingClientRect(),n=(this.items[t+1]||e).getBoundingClientRect(),o=(this.items[t-1]||e).getBoundingClientRect();let h=0;!this._isRTL&&n[a[1]]>=r[a[1]]||this._isRTL&&n[a[1]]<=r[a[1]]?h=n[a[1]]-r[a[1]]:(!this._isRTL&&o[a[0]]<=r[a[0]]||this._isRTL&&o[a[0]]>=r[a[0]])&&(h=o[a[0]]-r[a[0]]),this._scroll(h)}_scroll(t){if(this._vertical)this._scrollerElement.scrollTop+=t;else{const e=this.getAttribute("dir")||"ltr",a=m1(this._scrollerElement,e)+t;Wh(this._scrollerElement,e,a)}}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ve=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(i=>{i.target.isConnected&&(i.target.resizables?i.target.resizables.forEach(t=>{t._onResize(i.contentRect)}):i.target._onResize(i.contentRect))})})}),Gh=m(s=>class extends s{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),Ve.observe(this),this._observeParent){const t=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;t.resizables||(t.resizables=new Set,Ve.observe(t)),t.resizables.add(this),this.__parent=t}}disconnectedCallback(){super.disconnectedCallback(),Ve.unobserve(this);const t=this.__parent;if(this._observeParent&&t){const e=t.resizables;e&&(e.delete(this),e.size===0&&Ve.unobserve(t)),this.__parent=null}}_onResize(t){}});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kh=s=>class extends Gh(Uh(s)){static get properties(){return{orientation:{value:"horizontal",type:String,reflectToAttribute:!0,sync:!0},selected:{value:0,type:Number,reflectToAttribute:!0}}}static get observers(){return["__tabsItemsChanged(items)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.__isRTL?1:-1}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist")}_onResize(){this._updateOverflow()}__tabsItemsChanged(t){this.__itemsResizeObserver.disconnect(),(t||[]).forEach(e=>{this.__itemsResizeObserver.observe(e)}),this._updateOverflow()}_scrollForward(){const t=this._getNavigationButtonVisibleWidth("forward-button"),e=this._getNavigationButtonVisibleWidth("back-button"),a=this._scrollerElement.getBoundingClientRect(),n=[...this.items].reverse().find(c=>this._isItemVisible(c,t,e,a)).getBoundingClientRect(),h=20+this.shadowRoot.querySelector('[part="back-button"]').clientWidth;let l;if(this.__isRTL){const c=a.right-h;l=n.right-c}else{const c=a.left+h;l=n.left-c}-this.__direction*l<1&&(l=-this.__direction*(this._scrollOffset-h)),this._scroll(l)}_scrollBack(){const t=this._getNavigationButtonVisibleWidth("forward-button"),e=this._getNavigationButtonVisibleWidth("back-button"),a=this._scrollerElement.getBoundingClientRect(),n=this.items.find(c=>this._isItemVisible(c,t,e,a)).getBoundingClientRect(),h=20+this.shadowRoot.querySelector('[part="forward-button"]').clientWidth;let l;if(this.__isRTL){const c=a.left+h;l=n.left-c}else{const c=a.right-h;l=n.right-c}this.__direction*l<1&&(l=this.__direction*(this._scrollOffset-h)),this._scroll(l)}_isItemVisible(t,e,a,r){if(this._vertical)throw new Error("Visibility check is only supported for horizontal tabs.");const n=this.__isRTL?a:e,o=this.__isRTL?e:a,h=r.right-n,l=r.left+o,c=t.getBoundingClientRect();return h>Math.floor(c.left)&&l<Math.ceil(c.right)}_getNavigationButtonVisibleWidth(t){const e=this.shadowRoot.querySelector(`[part="${t}"]`);return window.getComputedStyle(e).opacity==="0"?0:e.clientWidth}_updateOverflow(){const t=this._vertical?this._scrollerElement.scrollTop:m1(this._scrollerElement,this.getAttribute("dir")),e=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let a=Math.floor(t)>1?"start":"";Math.ceil(t)<Math.ceil(e-this._scrollOffset)&&(a+=" end"),this.__direction===1&&(a=a.replace(/start|end/giu,r=>r==="start"?"end":"start")),a?this.setAttribute("overflow",a.trim()):this.removeAttribute("overflow")}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yh extends Kh(e1(_1(i1(g1(Z))))){static get is(){return"vaadin-tabs"}static get styles(){return jh}render(){return w`
      <div @click="${this._scrollBack}" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div @click="${this._scrollForward}" part="forward-button" aria-hidden="true"></div>
    `}}Qa(Yh);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});var ea;(ea=window.Vaadin).featureFlags||(ea.featureFlags={});function Zh(s){return s.replace(/-[a-z]/gu,i=>i[1].toUpperCase())}const Q={};function b1(s,i="25.0.1"){if(Object.defineProperty(s,"version",{get(){return i}}),s.experimental){const e=typeof s.experimental=="string"?s.experimental:`${Zh(s.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[e]&&!Q[e]){Q[e]=new Set,Q[e].add(s),Object.defineProperty(window.Vaadin.featureFlags,e,{get(){return Q[e].size===0},set(a){a&&Q[e].size>0&&(Q[e].forEach(r=>{customElements.define(r.is,r)}),Q[e].clear())}});return}else if(Q[e]){Q[e].add(s);return}}const t=customElements.get(s.is);if(!t)customElements.define(s.is,s);else{const e=t.version;e&&s.version&&e===s.version?console.warn(`The component ${s.is} has been loaded twice`):console.error(`Tried to define ${s.is} version ${s.version} when version ${t.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});var ia;(ia=window.Vaadin).featureFlags||(ia.featureFlags={});function Xh(s){return s.replace(/-[a-z]/gu,i=>i[1].toUpperCase())}const J={};function Qh(s,i="25.0.1"){if(Object.defineProperty(s,"version",{get(){return i}}),s.experimental){const e=typeof s.experimental=="string"?s.experimental:`${Xh(s.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[e]&&!J[e]){J[e]=new Set,J[e].add(s),Object.defineProperty(window.Vaadin.featureFlags,e,{get(){return J[e].size===0},set(a){a&&J[e].size>0&&(J[e].forEach(r=>{customElements.define(r.is,r)}),J[e].clear())}});return}else if(J[e]){J[e].add(s);return}}const t=customElements.get(s.is);if(!t)customElements.define(s.is,s);else{const e=t.version;e&&s.version&&e===s.version?console.warn(`The component ${s.is} has been loaded twice`):console.error(`Tried to define ${s.is} version ${s.version} when version ${t.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const Jh={run(s){return window.requestAnimationFrame(s)},cancel(s){window.cancelAnimationFrame(s)}},tl={run(s){return window.requestIdleCallback?window.requestIdleCallback(s):window.setTimeout(s,16)},cancel(s){window.cancelIdleCallback?window.cancelIdleCallback(s):window.clearTimeout(s)}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const p0=new Set;let M1=class u0{static debounce(i,t,e){return i instanceof u0?i._cancelAsync():i=new u0,i.setConfig(t,e),i}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(i,t){this._asyncModule=i,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,p0.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),p0.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}};function el(s){p0.add(s)}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const it=[];function g0(s,i,t=s.getAttribute("dir")){i?s.setAttribute("dir",i):t!=null&&s.removeAttribute("dir")}function f0(){return document.documentElement.getAttribute("dir")}function il(){const s=f0();it.forEach(i=>{g0(i,s)})}const sl=new MutationObserver(il);sl.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const al=s=>class extends s{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>t===""?null:t}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),g0(this,f0(),null))}attributeChangedCallback(t,e,a){if(super.attributeChangedCallback(t,e,a),t!=="dir")return;const r=f0(),n=a===r&&it.indexOf(this)===-1,o=!a&&e&&it.indexOf(this)===-1;n||o?(this.__subscribe(),g0(this,r,a)):a!==r&&e===r&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=it.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,e,a){a==="dir"&&e===""&&!t.hasAttribute("dir")||super._valueToNodeAttribute(t,e,a)}_attributeToProperty(t,e,a){t==="dir"&&!e?this.dir="":super._attributeToProperty(t,e,a)}__subscribe(){it.includes(this)||it.push(this)}__unsubscribe(){it.includes(this)&&it.splice(it.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){si()};let Li;const As=new Set,rl=s=>class extends al(s){static finalize(){super.finalize();const{is:t}=this;if(t&&!As.has(t)){window.Vaadin.registrations.push(this),As.add(t);const e=window.Vaadin.developmentModeCallback;e&&(Li=M1.debounce(Li,tl,()=>{e["vaadin-usage-statistics"]()}),el(Li))}}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let nl=class{constructor(i,t){this.host=i,this.scrollTarget=t||i,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){const{host:i}=this;this.__resizeObserver=new ResizeObserver(()=>{this.__debounceOverflow=M1.debounce(this.__debounceOverflow,Jh,()=>{this.__updateOverflow()})}),this.__resizeObserver.observe(i),[...i.children].forEach(t=>{this.__resizeObserver.observe(t)}),this.__childObserver=new MutationObserver(t=>{t.forEach(({addedNodes:e,removedNodes:a})=>{e.forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(r)}),a.forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(r)})}),this.__updateOverflow()}),this.__childObserver.observe(i,{childList:!0}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll),this.__updateOverflow()}__onScroll(){this.__updateOverflow()}__updateOverflow(){const i=this.scrollTarget;let t="";i.scrollTop>0&&(t+=" top"),Math.ceil(i.scrollTop)<Math.ceil(i.scrollHeight-i.clientHeight)&&(t+=" bottom");const e=Math.abs(i.scrollLeft);e>0&&(t+=" start"),Math.ceil(e)<Math.ceil(i.scrollWidth-i.clientWidth)&&(t+=" end"),t=t.trim(),t.length>0&&this.host.getAttribute("overflow")!==t?this.host.setAttribute("overflow",t):t.length===0&&this.host.hasAttribute("overflow")&&this.host.removeAttribute("overflow")}};/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ol(s,i){return s.split(".").reduce((t,e)=>t?t[e]:void 0,i)}function hl(s,i,t){const e=s.split("."),a=e.pop(),r=e.reduce((n,o)=>n[o],t);r[a]=i}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pi={},ll=/([A-Z])/gu;function Es(s){return Pi[s]||(Pi[s]=s.replace(ll,"-$1").toLowerCase()),Pi[s]}function ks(s){return s[0].toUpperCase()+s.substring(1)}function Ri(s){const[i,t]=s.split("("),e=t.replace(")","").split(",").map(a=>a.trim());return{method:i,observerProps:e}}function $i(s,i){return Object.prototype.hasOwnProperty.call(s,i)||(s[i]=new Map(s[i])),s[i]}const dl=s=>{class i extends s{static createProperty(e,a){[String,Boolean,Number,Array].includes(a)&&(a={type:a}),a&&a.reflectToAttribute&&(a.reflect=!0),super.createProperty(e,a)}static getOrCreateMap(e){return $i(this,e)}static finalize(){if(window.litIssuedWarnings&&(window.litIssuedWarnings.add("no-override-create-property"),window.litIssuedWarnings.add("no-override-get-property-descriptor")),super.finalize(),Array.isArray(this.observers)){const e=this.getOrCreateMap("__complexObservers");this.observers.forEach(a=>{const{method:r,observerProps:n}=Ri(a);e.set(r,n)})}}static addCheckedInitializer(e){super.addInitializer(a=>{a instanceof this&&e(a)})}static getPropertyDescriptor(e,a,r){const n=super.getPropertyDescriptor(e,a,r);let o=n;if(this.getOrCreateMap("__propKeys").set(e,a),r.sync&&(o={get:n.get,set(h){const l=this[e];ai(h,l)&&(this[a]=h,this.requestUpdate(e,l,r),this.hasUpdated&&this.performUpdate())},configurable:!0,enumerable:!0}),r.readOnly){const h=o.set;this.addCheckedInitializer(l=>{l[`_set${ks(e)}`]=function(c){h.call(l,c)}}),o={get:o.get,set(){},configurable:!0,enumerable:!0}}if("value"in r&&this.addCheckedInitializer(h=>{const l=typeof r.value=="function"?r.value.call(h):r.value;r.readOnly?h[`_set${ks(e)}`](l):h[e]=l}),r.observer){const h=r.observer;this.getOrCreateMap("__observers").set(e,h),this.addCheckedInitializer(l=>{l[h]||console.warn(`observer method ${h} not defined`)})}if(r.notify){if(!this.__notifyProps)this.__notifyProps=new Set;else if(!this.hasOwnProperty("__notifyProps")){const h=this.__notifyProps;this.__notifyProps=new Set(h)}this.__notifyProps.add(e)}if(r.computed){const h=`__assignComputed${e}`,l=Ri(r.computed);this.prototype[h]=function(...c){this[e]=this[l.method](...c)},this.getOrCreateMap("__computedObservers").set(h,l.observerProps)}return r.attribute||(r.attribute=Es(e)),o}static get polylitConfig(){return{asyncFirstRender:!1}}connectedCallback(){super.connectedCallback();const{polylitConfig:e}=this.constructor;!this.hasUpdated&&!e.asyncFirstRender&&this.performUpdate()}firstUpdated(){super.firstUpdated(),this.$||(this.$={}),this.renderRoot.querySelectorAll("[id]").forEach(e=>{this.$[e.id]=e})}ready(){}willUpdate(e){this.constructor.__computedObservers&&this.__runComplexObservers(e,this.constructor.__computedObservers)}updated(e){const a=this.__isReadyInvoked;this.__isReadyInvoked=!0,this.constructor.__observers&&this.__runObservers(e,this.constructor.__observers),this.constructor.__complexObservers&&this.__runComplexObservers(e,this.constructor.__complexObservers),this.__dynamicPropertyObservers&&this.__runDynamicObservers(e,this.__dynamicPropertyObservers),this.__dynamicMethodObservers&&this.__runComplexObservers(e,this.__dynamicMethodObservers),this.constructor.__notifyProps&&this.__runNotifyProps(e,this.constructor.__notifyProps),a||this.ready()}setProperties(e){Object.entries(e).forEach(([a,r])=>{const n=this.constructor.__propKeys.get(a),o=this[n];this[n]=r,this.requestUpdate(a,o)}),this.hasUpdated&&this.performUpdate()}_createMethodObserver(e){const a=$i(this,"__dynamicMethodObservers"),{method:r,observerProps:n}=Ri(e);a.set(r,n)}_createPropertyObserver(e,a){$i(this,"__dynamicPropertyObservers").set(a,e)}__runComplexObservers(e,a){a.forEach((r,n)=>{r.some(o=>e.has(o))&&(this[n]?this[n](...r.map(o=>this[o])):console.warn(`observer method ${n} not defined`))})}__runDynamicObservers(e,a){a.forEach((r,n)=>{e.has(r)&&this[n]&&this[n](this[r],e.get(r))})}__runObservers(e,a){e.forEach((r,n)=>{const o=a.get(n);o!==void 0&&this[o]&&this[o](this[n],r)})}__runNotifyProps(e,a){e.forEach((r,n)=>{a.has(n)&&this.dispatchEvent(new CustomEvent(`${Es(n)}-changed`,{detail:{value:this[n]}}))})}_get(e,a){return ol(e,a)}_set(e,a,r){hl(e,a,r)}}return x(i,"enabledWarnings",[]),i},cl=m(dl);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */var ht,mt,$t,te,L,be,Me,ee;let vl=(ee=class extends EventTarget{constructor(t){super();g(this,L);g(this,ht);g(this,mt,new Set);g(this,$t);g(this,te,!1);b(this,ht,t),b(this,$t,new CSSStyleSheet)}observe(t){this.connect(),!d(this,mt).has(t)&&(d(this,mt).add(t),d(this,$t).replaceSync(`
      :root::before, :host::before {
        content: '' !important;
        position: absolute !important;
        top: -9999px !important;
        left: -9999px !important;
        visibility: hidden !important;
        transition: 1ms allow-discrete step-end !important;
        transition-property: ${[...d(this,mt)].join(", ")} !important;
      }
    `))}connect(){d(this,te)||(d(this,ht).adoptedStyleSheets.unshift(d(this,$t)),d(this,L,Me).addEventListener("transitionstart",t=>f(this,L,be).call(this,t)),d(this,L,Me).addEventListener("transitionend",t=>f(this,L,be).call(this,t)),b(this,te,!0))}disconnect(){d(this,mt).clear(),d(this,ht).adoptedStyleSheets=d(this,ht).adoptedStyleSheets.filter(t=>t!==d(this,$t)),d(this,L,Me).removeEventListener("transitionstart",f(this,L,be)),d(this,L,Me).removeEventListener("transitionend",f(this,L,be)),b(this,te,!1)}static for(t){return t.__cssPropertyObserver||(t.__cssPropertyObserver=new ee(t)),t.__cssPropertyObserver}},ht=new WeakMap,mt=new WeakMap,$t=new WeakMap,te=new WeakMap,L=new WeakSet,be=function(t){const{propertyName:e}=t;d(this,mt).has(e)&&this.dispatchEvent(new CustomEvent("property-changed",{detail:{propertyName:e}}))},Me=function(){return d(this,ht).documentElement??d(this,ht).host},ee);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function pl(s){const{baseStyles:i,themeStyles:t,elementStyles:e,lumoInjector:a}=s.constructor,r=s.__lumoStyleSheet;return r&&(i||t)?[...a.includeBaseStyles?i:[],r,...t]:[r,...e].filter(Boolean)}function z1(s){ri(s.shadowRoot,pl(s))}function Is(s,i){s.__lumoStyleSheet=i,z1(s)}function Di(s){s.__lumoStyleSheet=void 0,z1(s)}/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ts=new Set;function y1(s){Ts.has(s)||(Ts.add(s),console.warn(s))}/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Os=new WeakMap;function Ls(s){try{return s.media.mediaText}catch{return y1('[LumoInjector] Browser denied to access property "mediaText" for some CSS rules, so they were skipped.'),""}}function ul(s){try{return s.cssRules}catch{return y1('[LumoInjector] Browser denied to access property "cssRules" for some CSS stylesheets, so they were skipped.'),[]}}function w1(s,i={tags:new Map,modules:new Map}){var t;for(const e of ul(s)){if(e instanceof CSSImportRule){const a=Ls(e);a.startsWith("lumo_")?i.modules.set(a,[...e.styleSheet.cssRules]):w1(e.styleSheet,i);continue}if(e instanceof CSSMediaRule){const a=Ls(e);a.startsWith("lumo_")&&i.modules.set(a,[...e.cssRules]);continue}if(e instanceof CSSStyleRule&&e.cssText.includes("-inject")){for(const a of e.style){const r=(t=a.match(/^--_lumo-(.*)-inject-modules$/u))==null?void 0:t[1];if(!r)continue;const n=e.style.getPropertyValue(a);i.tags.set(r,n.split(",").map(o=>o.trim().replace(/'|"/gu,"")))}continue}}return i}function gl(s){let i=new Map,t=new Map;for(const e of s){let a=Os.get(e);a||(a=w1(e),Os.set(e,a)),i=new Map([...i,...a.tags]),t=new Map([...t,...a.modules])}return{tags:i,modules:t}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function x1(s){return`--_lumo-${s.is}-inject`}var Ee,Dt,bt,lt,U,C1,Ue,S1,sa;let fl=(sa=class{constructor(i=document){g(this,U);g(this,Ee);g(this,Dt);g(this,bt,new Map);g(this,lt,new Map);b(this,Ee,i),this.handlePropertyChange=this.handlePropertyChange.bind(this),b(this,Dt,vl.for(i)),d(this,Dt).addEventListener("property-changed",this.handlePropertyChange)}disconnect(){d(this,Dt).removeEventListener("property-changed",this.handlePropertyChange),d(this,bt).clear(),d(this,lt).values().forEach(i=>i.forEach(Di))}forceUpdate(){for(const i of d(this,bt).keys())f(this,U,Ue).call(this,i)}componentConnected(i){const{lumoInjector:t}=i.constructor,{is:e}=t;d(this,lt).set(e,d(this,lt).get(e)??new Set),d(this,lt).get(e).add(i);const a=d(this,bt).get(e);if(a){a.cssRules.length>0&&Is(i,a);return}f(this,U,C1).call(this,e);const r=x1(t);d(this,Dt).observe(r)}componentDisconnected(i){var e;const{is:t}=i.constructor.lumoInjector;(e=d(this,lt).get(t))==null||e.delete(i),Di(i)}handlePropertyChange(i){var a;const{propertyName:t}=i.detail,e=(a=t.match(/^--_lumo-(.*)-inject$/u))==null?void 0:a[1];e&&f(this,U,Ue).call(this,e)}},Ee=new WeakMap,Dt=new WeakMap,bt=new WeakMap,lt=new WeakMap,U=new WeakSet,C1=function(i){d(this,bt).set(i,new CSSStyleSheet),f(this,U,Ue).call(this,i)},Ue=function(i){var n;const{tags:t,modules:e}=gl(d(this,U,S1)),a=(t.get(i)??[]).flatMap(o=>e.get(o)??[]).map(o=>o.cssText).join(`
`),r=d(this,bt).get(i);r.replaceSync(a),(n=d(this,lt).get(i))==null||n.forEach(o=>{a?Is(o,r):Di(o)})},S1=function(){let i=new Set;for(const t of[d(this,Ee),document])i=i.union(new Set(t.styleSheets)),i=i.union(new Set(t.adoptedStyleSheets));return[...i]},sa);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ps=new Set;function A1(s){const i=s.getRootNode();return i.host&&i.host.constructor.version?A1(i.host):i}const _l=s=>class extends s{static finalize(){super.finalize();const t=x1(this.lumoInjector);this.is&&!Ps.has(t)&&(Ps.add(t),CSS.registerProperty({name:t,syntax:"<number>",inherits:!0,initialValue:"0"}))}static get lumoInjector(){return{is:this.is,includeBaseStyles:!1}}connectedCallback(){super.connectedCallback();const t=A1(this);t.__lumoInjectorDisabled||this.isConnected&&(t.__lumoInjector||(t.__lumoInjector=new fl(t)),this.__lumoInjector=t.__lumoInjector,this.__lumoInjector.componentConnected(this))}disconnectedCallback(){super.disconnectedCallback(),this.__lumoInjector&&(this.__lumoInjector.componentDisconnected(this),this.__lumoInjector=void 0)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ml=s=>class extends s{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(t,e,a){super.attributeChangedCallback(t,e,a),t==="theme"&&this._set_theme(a)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _0=[],bl=new Set,Ml=new Set;function zl(s){return s&&Object.prototype.hasOwnProperty.call(s,"__themes")}function yl(s,i){return(s||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`,"u").test(i))}function wl(s){return s.map(i=>i.cssText).join(`
`)}const xl="vaadin-themable-mixin-style";function Cl(s,i){const t=document.createElement("style");t.id=xl,t.textContent=wl(s),i.content.appendChild(t)}function Sl(s=""){let i=0;return s.startsWith("lumo-")||s.startsWith("material-")?i=1:s.startsWith("vaadin-")&&(i=2),i}function E1(s){const i=[];return s.include&&[].concat(s.include).forEach(t=>{const e=_0.find(a=>a.moduleId===t);e?i.push(...E1(e),...e.styles):console.warn(`Included moduleId ${t} not found in style registry`)},s.styles),i}function Al(s){const i=`${s}-default-theme`,t=_0.filter(e=>e.moduleId!==i&&yl(e.themeFor,s)).map(e=>({...e,styles:[...E1(e),...e.styles],includePriority:Sl(e.moduleId)})).sort((e,a)=>a.includePriority-e.includePriority);return t.length>0?t:_0.filter(e=>e.moduleId===i)}const El=s=>class extends ml(s){constructor(){super(),bl.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&Ml.add(this.is),this.elementStyles)return;const t=this.prototype._template;!t||zl(this)||Cl(this.getStylesForThis(),t)}static finalizeStyles(t){return this.baseStyles=t?[t].flat(1/0):[],this.themeStyles=this.getStylesForThis(),[...this.baseStyles,...this.themeStyles]}static getStylesForThis(){const t=s.__themes||[],e=Object.getPrototypeOf(this.prototype),a=(e?e.constructor.__themes:[])||[];this.__themes=[...t,...a,...Al(this.is)];const r=this.__themes.flatMap(n=>n.styles);return r.filter((n,o)=>o===r.lastIndexOf(n))}};/**
 * @license
 * Copyright (c) 2025 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kl=(s,...i)=>{const t=document.createElement("style");t.id=s,t.textContent=i.map(e=>e.toString()).join(`
`),document.head.insertAdjacentElement("afterbegin",t)};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */["--vaadin-text-color","--vaadin-text-color-disabled","--vaadin-text-color-secondary","--vaadin-border-color","--vaadin-border-color-secondary","--vaadin-background-color"].forEach(s=>{CSS.registerProperty({name:s,syntax:"<color>",inherits:!0,initialValue:"light-dark(black, white)"})});kl("vaadin-base",u`
    @layer vaadin.base {
      html {
        /* Background color */
        --vaadin-background-color: light-dark(#fff, #222);

        /* Container colors */
        --vaadin-background-container: color-mix(in oklab, var(--vaadin-text-color) 5%, var(--vaadin-background-color));
        --vaadin-background-container-strong: color-mix(
          in oklab,
          var(--vaadin-text-color) 10%,
          var(--vaadin-background-color)
        );

        /* Border colors */
        --vaadin-border-color-secondary: color-mix(in oklab, var(--vaadin-text-color) 24%, transparent);
        --vaadin-border-color: color-mix(in oklab, var(--vaadin-text-color) 48%, transparent); /* Above 3:1 contrast */

        /* Text colors */
        /* Above 3:1 contrast */
        --vaadin-text-color-disabled: color-mix(in oklab, var(--vaadin-text-color) 48%, transparent);
        /* Above 4.5:1 contrast */
        --vaadin-text-color-secondary: color-mix(in oklab, var(--vaadin-text-color) 68%, transparent);
        /* Above 7:1 contrast */
        --vaadin-text-color: light-dark(#1f1f1f, white);

        /* Padding */
        --vaadin-padding-xs: 6px;
        --vaadin-padding-s: 8px;
        --vaadin-padding-m: 12px;
        --vaadin-padding-l: 16px;
        --vaadin-padding-xl: 24px;
        --vaadin-padding-block-container: var(--vaadin-padding-xs);
        --vaadin-padding-inline-container: var(--vaadin-padding-s);

        /* Gap/spacing */
        --vaadin-gap-xs: 6px;
        --vaadin-gap-s: 8px;
        --vaadin-gap-m: 12px;
        --vaadin-gap-l: 16px;
        --vaadin-gap-xl: 24px;

        /* Border radius */
        --vaadin-radius-s: 3px;
        --vaadin-radius-m: 6px;
        --vaadin-radius-l: 12px;

        /* Focus outline */
        --vaadin-focus-ring-width: 2px;
        --vaadin-focus-ring-color: var(--vaadin-text-color);

        /* Icons, used as mask-image */
        --_vaadin-icon-arrow-up: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>');
        --_vaadin-icon-calendar: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>');
        --_vaadin-icon-checkmark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>');
        --_vaadin-icon-chevron-down: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>');
        --_vaadin-icon-clock: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>');
        --_vaadin-icon-cross: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>');
        --_vaadin-icon-drag: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M11 7c0 .82843-.6716 1.5-1.5 1.5C8.67157 8.5 8 7.82843 8 7s.67157-1.5 1.5-1.5c.8284 0 1.5.67157 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5Zm5-10c0 .82843-.6716 1.5-1.5 1.5S13 7.82843 13 7s.6716-1.5 1.5-1.5S16 6.17157 16 7Zm0 5c0 .8284-.6716 1.5-1.5 1.5S13 12.8284 13 12s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5S13 17.8284 13 17s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Z" fill="currentColor"/></svg>');
        --_vaadin-icon-eye: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>');
        --_vaadin-icon-eye-slash: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>');
        --_vaadin-icon-fullscreen: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>');
        --_vaadin-icon-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>');
        --_vaadin-icon-link: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>');
        --_vaadin-icon-menu: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>');
        --_vaadin-icon-minus: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>');
        --_vaadin-icon-paper-airplane: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>');
        --_vaadin-icon-pen: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>');
        --_vaadin-icon-play: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>');
        --_vaadin-icon-plus: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>');
        --_vaadin-icon-redo: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>');
        --_vaadin-icon-refresh: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M22 10C22 10 19.995 7.26822 18.3662 5.63824C16.7373 4.00827 14.4864 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.1031 21 19.5649 18.2543 20.6482 14.5M22 10V4M22 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        --_vaadin-icon-resize: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 7.46967c.2929.29289.2929.76777 0 1.06066L8.53033 18.5304c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7678 0-1.0607L17.4697 7.46967c.2929-.29289.7677-.29289 1.0606 0Zm0 4.50003c.2929.2929.2929.7678 0 1.0607l-5.5 5.5c-.2929.2928-.7677.2928-1.0606 0-.2929-.2929-.2929-.7678 0-1.0607l5.4999-5.5c.2929-.2929.7678-.2929 1.0607 0Zm0 4.5c.2929.2928.2929.7677 0 1.0606l-1 1.0001c-.2929.2928-.7677.2929-1.0606 0-.2929-.2929-.2929-.7678 0-1.0607l1-1c.2929-.2929.7677-.2929 1.0606 0Z" fill="currentColor"/></svg>');
        --_vaadin-icon-sort: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M7.49854 6.99951C7.92795 6.99951 8.15791 7.50528 7.87549 7.82861L4.37646 11.8296C4.17728 12.0571 3.82272 12.0571 3.62354 11.8296L0.125488 7.82861C-0.157248 7.50531 0.0719873 6.99956 0.501465 6.99951H7.49854ZM3.62354 0.17041C3.82275 -0.0573875 4.17725 -0.0573848 4.37646 0.17041L7.87549 4.17041C8.15825 4.49373 7.92806 5.00049 7.49854 5.00049L0.501465 4.99951C0.0719873 4.99946 -0.157248 4.49371 0.125488 4.17041L3.62354 0.17041Z" fill="black"/></svg>');
        --_vaadin-icon-undo: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>');
        --_vaadin-icon-upload: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>');
        --_vaadin-icon-user: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>');
        --_vaadin-icon-warn: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>');

        /* Cursors for interactive elements */
        --vaadin-clickable-cursor: pointer;
        --vaadin-disabled-cursor: not-allowed;

        /* Use units so that the values can be used in calc() */
        --safe-area-inset-top: env(safe-area-inset-top, 0px);
        --safe-area-inset-right: env(safe-area-inset-right, 0px);
        --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
        --safe-area-inset-left: env(safe-area-inset-left, 0px);
      }

      @supports not (color: hsl(0 0 0)) {
        html {
          --_vaadin-safari-17-deg: 1deg;
        }
      }

      @media (forced-colors: active) {
        html {
          --vaadin-background-color: Canvas;
          --vaadin-border-color: CanvasText;
          --vaadin-border-color-secondary: CanvasText;
          --vaadin-text-color-disabled: CanvasText;
          --vaadin-text-color-secondary: CanvasText;
          --vaadin-text-color: CanvasText;
          --vaadin-icon-color: CanvasText;
          --vaadin-focus-ring-color: Highlight;
        }
      }
    }
  `);/**
 * @license
 * Copyright (c) 2020 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Il=u`
  :host {
    --_indicator-height: var(--vaadin-scroller-overflow-indicator-height, 1px);
    /* Don't let these properties inherit */
    --vaadin-scroller-padding-block: 0px;
    --vaadin-scroller-padding-inline: 0px;
    --vaadin-scroller-overflow-indicator-top-opacity: 0;
    --vaadin-scroller-overflow-indicator-bottom-opacity: 0;
    display: block;
    overflow: auto;
    outline: none;
    flex: 1;
    box-sizing: border-box;
    padding: var(--vaadin-scroller-padding-block) var(--vaadin-scroller-padding-inline);
  }

  :host([focus-ring]) {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([scroll-direction='vertical']) {
    overflow-x: hidden;
  }

  :host([scroll-direction='horizontal']) {
    overflow-y: hidden;
  }

  :host([scroll-direction='none']) {
    overflow: hidden;
  }

  :host::before,
  :host::after {
    content: '';
    display: block;
    opacity: 0;
    position: sticky;
    inset: 0 calc(var(--vaadin-scroller-padding-inline) * -1);
    z-index: 9999;
    pointer-events: none;
    box-sizing: border-box;
    height: var(--_indicator-height);
    margin-inline: calc(var(--vaadin-scroller-padding-inline) * -1);
    background: var(--vaadin-border-color-secondary);
  }

  :host::before {
    top: 0;
    margin-bottom: calc(var(--_indicator-height) * -1);
    translate: 0 calc(var(--vaadin-scroller-padding-block) * -1);
  }

  :host::after {
    bottom: 0;
    margin-top: calc(var(--_indicator-height) * -1);
    translate: 0 calc(var(--vaadin-scroller-padding-block) * 1);
  }

  :host([overflow~='top'])::before {
    opacity: var(--vaadin-scroller-overflow-indicator-top-opacity);
  }

  :host([overflow~='bottom'])::after {
    opacity: var(--vaadin-scroller-overflow-indicator-bottom-opacity);
  }

  :host([theme~='overflow-indicator-top'][overflow~='top']),
  :host([theme~='overflow-indicators'][overflow~='top']) {
    --vaadin-scroller-overflow-indicator-top-opacity: 1;
  }

  :host([theme~='overflow-indicators'][overflow~='bottom']),
  :host([theme~='overflow-indicator-bottom'][overflow~='bottom']) {
    --vaadin-scroller-overflow-indicator-bottom-opacity: 1;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let W0=!1;window.addEventListener("keydown",()=>{W0=!0},{capture:!0});window.addEventListener("mousedown",()=>{W0=!1},{capture:!0});function Tl(){return W0}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ol=m(s=>class extends s{get _keyboardActive(){return Tl()}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}focus(t){super.focus(t),t&&t.focusVisible===!1||this.setAttribute("focus-ring","")}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}});/**
 * @license
 * Copyright (c) 2020 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ll=s=>class extends Ol(s){static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}_shouldSetFocus(t){return t.target===this}};/**
 * @license
 * Copyright (c) 2020 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class k1 extends Ll(rl(El(cl(_l(Z))))){static get is(){return"vaadin-scroller"}static get styles(){return Il}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}render(){return w`<slot></slot>`}ready(){super.ready(),this.__overflowController=new nl(this),this.addController(this.__overflowController)}}Qh(k1);/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pl extends k1{static get is(){return"vaadin-tabsheet-scroller"}}b1(Pl);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const Rl={run(s){return window.requestAnimationFrame(s)},cancel(s){window.cancelAnimationFrame(s)}},$l={run(s){return window.requestIdleCallback?window.requestIdleCallback(s):window.setTimeout(s,16)},cancel(s){window.cancelIdleCallback?window.cancelIdleCallback(s):window.clearTimeout(s)}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const m0=new Set;let I1=class b0{static debounce(i,t,e){return i instanceof b0?i._cancelAsync():i=new b0,i.setConfig(t,e),i}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(i,t){this._asyncModule=i,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,m0.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),m0.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}};function Dl(s){m0.add(s)}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const st=[];function M0(s,i,t=s.getAttribute("dir")){i?s.setAttribute("dir",i):t!=null&&s.removeAttribute("dir")}function z0(){return document.documentElement.getAttribute("dir")}function Nl(){const s=z0();st.forEach(i=>{M0(i,s)})}const Fl=new MutationObserver(Nl);Fl.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Bl=s=>class extends s{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>t===""?null:t}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),M0(this,z0(),null))}attributeChangedCallback(t,e,a){if(super.attributeChangedCallback(t,e,a),t!=="dir")return;const r=z0(),n=a===r&&st.indexOf(this)===-1,o=!a&&e&&st.indexOf(this)===-1;n||o?(this.__subscribe(),M0(this,r,a)):a!==r&&e===r&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=st.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,e,a){a==="dir"&&e===""&&!t.hasAttribute("dir")||super._valueToNodeAttribute(t,e,a)}_attributeToProperty(t,e,a){t==="dir"&&!e?this.dir="":super._attributeToProperty(t,e,a)}__subscribe(){st.includes(this)||st.push(this)}__unsubscribe(){st.includes(this)&&st.splice(st.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){si()};let Ni;const Rs=new Set,Vl=s=>class extends Bl(s){static finalize(){super.finalize();const{is:t}=this;if(t&&!Rs.has(t)){window.Vaadin.registrations.push(this),Rs.add(t);const e=window.Vaadin.developmentModeCallback;e&&(Ni=I1.debounce(Ni,$l,()=>{e["vaadin-usage-statistics"]()}),Dl(Ni))}}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Hl(s,i){return s.split(".").reduce((t,e)=>t?t[e]:void 0,i)}function jl(s,i,t){const e=s.split("."),a=e.pop(),r=e.reduce((n,o)=>n[o],t);r[a]=i}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fi={},Wl=/([A-Z])/gu;function $s(s){return Fi[s]||(Fi[s]=s.replace(Wl,"-$1").toLowerCase()),Fi[s]}function Ds(s){return s[0].toUpperCase()+s.substring(1)}function Bi(s){const[i,t]=s.split("("),e=t.replace(")","").split(",").map(a=>a.trim());return{method:i,observerProps:e}}function Vi(s,i){return Object.prototype.hasOwnProperty.call(s,i)||(s[i]=new Map(s[i])),s[i]}const ql=s=>{class i extends s{static createProperty(e,a){[String,Boolean,Number,Array].includes(a)&&(a={type:a}),a&&a.reflectToAttribute&&(a.reflect=!0),super.createProperty(e,a)}static getOrCreateMap(e){return Vi(this,e)}static finalize(){if(window.litIssuedWarnings&&(window.litIssuedWarnings.add("no-override-create-property"),window.litIssuedWarnings.add("no-override-get-property-descriptor")),super.finalize(),Array.isArray(this.observers)){const e=this.getOrCreateMap("__complexObservers");this.observers.forEach(a=>{const{method:r,observerProps:n}=Bi(a);e.set(r,n)})}}static addCheckedInitializer(e){super.addInitializer(a=>{a instanceof this&&e(a)})}static getPropertyDescriptor(e,a,r){const n=super.getPropertyDescriptor(e,a,r);let o=n;if(this.getOrCreateMap("__propKeys").set(e,a),r.sync&&(o={get:n.get,set(h){const l=this[e];ai(h,l)&&(this[a]=h,this.requestUpdate(e,l,r),this.hasUpdated&&this.performUpdate())},configurable:!0,enumerable:!0}),r.readOnly){const h=o.set;this.addCheckedInitializer(l=>{l[`_set${Ds(e)}`]=function(c){h.call(l,c)}}),o={get:o.get,set(){},configurable:!0,enumerable:!0}}if("value"in r&&this.addCheckedInitializer(h=>{const l=typeof r.value=="function"?r.value.call(h):r.value;r.readOnly?h[`_set${Ds(e)}`](l):h[e]=l}),r.observer){const h=r.observer;this.getOrCreateMap("__observers").set(e,h),this.addCheckedInitializer(l=>{l[h]||console.warn(`observer method ${h} not defined`)})}if(r.notify){if(!this.__notifyProps)this.__notifyProps=new Set;else if(!this.hasOwnProperty("__notifyProps")){const h=this.__notifyProps;this.__notifyProps=new Set(h)}this.__notifyProps.add(e)}if(r.computed){const h=`__assignComputed${e}`,l=Bi(r.computed);this.prototype[h]=function(...c){this[e]=this[l.method](...c)},this.getOrCreateMap("__computedObservers").set(h,l.observerProps)}return r.attribute||(r.attribute=$s(e)),o}static get polylitConfig(){return{asyncFirstRender:!1}}connectedCallback(){super.connectedCallback();const{polylitConfig:e}=this.constructor;!this.hasUpdated&&!e.asyncFirstRender&&this.performUpdate()}firstUpdated(){super.firstUpdated(),this.$||(this.$={}),this.renderRoot.querySelectorAll("[id]").forEach(e=>{this.$[e.id]=e})}ready(){}willUpdate(e){this.constructor.__computedObservers&&this.__runComplexObservers(e,this.constructor.__computedObservers)}updated(e){const a=this.__isReadyInvoked;this.__isReadyInvoked=!0,this.constructor.__observers&&this.__runObservers(e,this.constructor.__observers),this.constructor.__complexObservers&&this.__runComplexObservers(e,this.constructor.__complexObservers),this.__dynamicPropertyObservers&&this.__runDynamicObservers(e,this.__dynamicPropertyObservers),this.__dynamicMethodObservers&&this.__runComplexObservers(e,this.__dynamicMethodObservers),this.constructor.__notifyProps&&this.__runNotifyProps(e,this.constructor.__notifyProps),a||this.ready()}setProperties(e){Object.entries(e).forEach(([a,r])=>{const n=this.constructor.__propKeys.get(a),o=this[n];this[n]=r,this.requestUpdate(a,o)}),this.hasUpdated&&this.performUpdate()}_createMethodObserver(e){const a=Vi(this,"__dynamicMethodObservers"),{method:r,observerProps:n}=Bi(e);a.set(r,n)}_createPropertyObserver(e,a){Vi(this,"__dynamicPropertyObservers").set(a,e)}__runComplexObservers(e,a){a.forEach((r,n)=>{r.some(o=>e.has(o))&&(this[n]?this[n](...r.map(o=>this[o])):console.warn(`observer method ${n} not defined`))})}__runDynamicObservers(e,a){a.forEach((r,n)=>{e.has(r)&&this[n]&&this[n](this[r],e.get(r))})}__runObservers(e,a){e.forEach((r,n)=>{const o=a.get(n);o!==void 0&&this[o]&&this[o](this[n],r)})}__runNotifyProps(e,a){e.forEach((r,n)=>{a.has(n)&&this.dispatchEvent(new CustomEvent(`${$s(n)}-changed`,{detail:{value:this[n]}}))})}_get(e,a){return Hl(e,a)}_set(e,a,r){jl(e,a,r)}}return x(i,"enabledWarnings",[]),i},Ul=m(ql);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */var dt,Mt,Nt,ie,P,ze,ye,se;let Gl=(se=class extends EventTarget{constructor(t){super();g(this,P);g(this,dt);g(this,Mt,new Set);g(this,Nt);g(this,ie,!1);b(this,dt,t),b(this,Nt,new CSSStyleSheet)}observe(t){this.connect(),!d(this,Mt).has(t)&&(d(this,Mt).add(t),d(this,Nt).replaceSync(`
      :root::before, :host::before {
        content: '' !important;
        position: absolute !important;
        top: -9999px !important;
        left: -9999px !important;
        visibility: hidden !important;
        transition: 1ms allow-discrete step-end !important;
        transition-property: ${[...d(this,Mt)].join(", ")} !important;
      }
    `))}connect(){d(this,ie)||(d(this,dt).adoptedStyleSheets.unshift(d(this,Nt)),d(this,P,ye).addEventListener("transitionstart",t=>f(this,P,ze).call(this,t)),d(this,P,ye).addEventListener("transitionend",t=>f(this,P,ze).call(this,t)),b(this,ie,!0))}disconnect(){d(this,Mt).clear(),d(this,dt).adoptedStyleSheets=d(this,dt).adoptedStyleSheets.filter(t=>t!==d(this,Nt)),d(this,P,ye).removeEventListener("transitionstart",f(this,P,ze)),d(this,P,ye).removeEventListener("transitionend",f(this,P,ze)),b(this,ie,!1)}static for(t){return t.__cssPropertyObserver||(t.__cssPropertyObserver=new se(t)),t.__cssPropertyObserver}},dt=new WeakMap,Mt=new WeakMap,Nt=new WeakMap,ie=new WeakMap,P=new WeakSet,ze=function(t){const{propertyName:e}=t;d(this,Mt).has(e)&&this.dispatchEvent(new CustomEvent("property-changed",{detail:{propertyName:e}}))},ye=function(){return d(this,dt).documentElement??d(this,dt).host},se);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Kl(s){const{baseStyles:i,themeStyles:t,elementStyles:e,lumoInjector:a}=s.constructor,r=s.__lumoStyleSheet;return r&&(i||t)?[...a.includeBaseStyles?i:[],r,...t]:[r,...e].filter(Boolean)}function T1(s){ri(s.shadowRoot,Kl(s))}function Ns(s,i){s.__lumoStyleSheet=i,T1(s)}function Hi(s){s.__lumoStyleSheet=void 0,T1(s)}/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fs=new Set;function O1(s){Fs.has(s)||(Fs.add(s),console.warn(s))}/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bs=new WeakMap;function Vs(s){try{return s.media.mediaText}catch{return O1('[LumoInjector] Browser denied to access property "mediaText" for some CSS rules, so they were skipped.'),""}}function Yl(s){try{return s.cssRules}catch{return O1('[LumoInjector] Browser denied to access property "cssRules" for some CSS stylesheets, so they were skipped.'),[]}}function L1(s,i={tags:new Map,modules:new Map}){var t;for(const e of Yl(s)){if(e instanceof CSSImportRule){const a=Vs(e);a.startsWith("lumo_")?i.modules.set(a,[...e.styleSheet.cssRules]):L1(e.styleSheet,i);continue}if(e instanceof CSSMediaRule){const a=Vs(e);a.startsWith("lumo_")&&i.modules.set(a,[...e.cssRules]);continue}if(e instanceof CSSStyleRule&&e.cssText.includes("-inject")){for(const a of e.style){const r=(t=a.match(/^--_lumo-(.*)-inject-modules$/u))==null?void 0:t[1];if(!r)continue;const n=e.style.getPropertyValue(a);i.tags.set(r,n.split(",").map(o=>o.trim().replace(/'|"/gu,"")))}continue}}return i}function Zl(s){let i=new Map,t=new Map;for(const e of s){let a=Bs.get(e);a||(a=L1(e),Bs.set(e,a)),i=new Map([...i,...a.tags]),t=new Map([...t,...a.modules])}return{tags:i,modules:t}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function P1(s){return`--_lumo-${s.is}-inject`}var ke,Ft,zt,ct,G,R1,Ge,$1,aa;let Xl=(aa=class{constructor(i=document){g(this,G);g(this,ke);g(this,Ft);g(this,zt,new Map);g(this,ct,new Map);b(this,ke,i),this.handlePropertyChange=this.handlePropertyChange.bind(this),b(this,Ft,Gl.for(i)),d(this,Ft).addEventListener("property-changed",this.handlePropertyChange)}disconnect(){d(this,Ft).removeEventListener("property-changed",this.handlePropertyChange),d(this,zt).clear(),d(this,ct).values().forEach(i=>i.forEach(Hi))}forceUpdate(){for(const i of d(this,zt).keys())f(this,G,Ge).call(this,i)}componentConnected(i){const{lumoInjector:t}=i.constructor,{is:e}=t;d(this,ct).set(e,d(this,ct).get(e)??new Set),d(this,ct).get(e).add(i);const a=d(this,zt).get(e);if(a){a.cssRules.length>0&&Ns(i,a);return}f(this,G,R1).call(this,e);const r=P1(t);d(this,Ft).observe(r)}componentDisconnected(i){var e;const{is:t}=i.constructor.lumoInjector;(e=d(this,ct).get(t))==null||e.delete(i),Hi(i)}handlePropertyChange(i){var a;const{propertyName:t}=i.detail,e=(a=t.match(/^--_lumo-(.*)-inject$/u))==null?void 0:a[1];e&&f(this,G,Ge).call(this,e)}},ke=new WeakMap,Ft=new WeakMap,zt=new WeakMap,ct=new WeakMap,G=new WeakSet,R1=function(i){d(this,zt).set(i,new CSSStyleSheet),f(this,G,Ge).call(this,i)},Ge=function(i){var n;const{tags:t,modules:e}=Zl(d(this,G,$1)),a=(t.get(i)??[]).flatMap(o=>e.get(o)??[]).map(o=>o.cssText).join(`
`),r=d(this,zt).get(i);r.replaceSync(a),(n=d(this,ct).get(i))==null||n.forEach(o=>{a?Ns(o,r):Hi(o)})},$1=function(){let i=new Set;for(const t of[d(this,ke),document])i=i.union(new Set(t.styleSheets)),i=i.union(new Set(t.adoptedStyleSheets));return[...i]},aa);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hs=new Set;function D1(s){const i=s.getRootNode();return i.host&&i.host.constructor.version?D1(i.host):i}const Ql=s=>class extends s{static finalize(){super.finalize();const t=P1(this.lumoInjector);this.is&&!Hs.has(t)&&(Hs.add(t),CSS.registerProperty({name:t,syntax:"<number>",inherits:!0,initialValue:"0"}))}static get lumoInjector(){return{is:this.is,includeBaseStyles:!1}}connectedCallback(){super.connectedCallback();const t=D1(this);t.__lumoInjectorDisabled||this.isConnected&&(t.__lumoInjector||(t.__lumoInjector=new Xl(t)),this.__lumoInjector=t.__lumoInjector,this.__lumoInjector.componentConnected(this))}disconnectedCallback(){super.disconnectedCallback(),this.__lumoInjector&&(this.__lumoInjector.componentDisconnected(this),this.__lumoInjector=void 0)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jl=s=>class extends s{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(t,e,a){super.attributeChangedCallback(t,e,a),t==="theme"&&this._set_theme(a)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const y0=[],td=new Set,ed=new Set;function id(s){return s&&Object.prototype.hasOwnProperty.call(s,"__themes")}function sd(s,i){return(s||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`,"u").test(i))}function ad(s){return s.map(i=>i.cssText).join(`
`)}const rd="vaadin-themable-mixin-style";function nd(s,i){const t=document.createElement("style");t.id=rd,t.textContent=ad(s),i.content.appendChild(t)}function od(s=""){let i=0;return s.startsWith("lumo-")||s.startsWith("material-")?i=1:s.startsWith("vaadin-")&&(i=2),i}function N1(s){const i=[];return s.include&&[].concat(s.include).forEach(t=>{const e=y0.find(a=>a.moduleId===t);e?i.push(...N1(e),...e.styles):console.warn(`Included moduleId ${t} not found in style registry`)},s.styles),i}function hd(s){const i=`${s}-default-theme`,t=y0.filter(e=>e.moduleId!==i&&sd(e.themeFor,s)).map(e=>({...e,styles:[...N1(e),...e.styles],includePriority:od(e.moduleId)})).sort((e,a)=>a.includePriority-e.includePriority);return t.length>0?t:y0.filter(e=>e.moduleId===i)}const ld=s=>class extends Jl(s){constructor(){super(),td.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&ed.add(this.is),this.elementStyles)return;const t=this.prototype._template;!t||id(this)||nd(this.getStylesForThis(),t)}static finalizeStyles(t){return this.baseStyles=t?[t].flat(1/0):[],this.themeStyles=this.getStylesForThis(),[...this.baseStyles,...this.themeStyles]}static getStylesForThis(){const t=s.__themes||[],e=Object.getPrototypeOf(this.prototype),a=(e?e.constructor.__themes:[])||[];this.__themes=[...t,...a,...hd(this.is)];const r=this.__themes.flatMap(n=>n.styles);return r.filter((n,o)=>o===r.lastIndexOf(n))}};/**
 * @license
 * Copyright (c) 2025 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dd=(s,...i)=>{const t=document.createElement("style");t.id=s,t.textContent=i.map(e=>e.toString()).join(`
`),document.head.insertAdjacentElement("afterbegin",t)};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */["--vaadin-text-color","--vaadin-text-color-disabled","--vaadin-text-color-secondary","--vaadin-border-color","--vaadin-border-color-secondary","--vaadin-background-color"].forEach(s=>{CSS.registerProperty({name:s,syntax:"<color>",inherits:!0,initialValue:"light-dark(black, white)"})});dd("vaadin-base",u`
    @layer vaadin.base {
      html {
        /* Background color */
        --vaadin-background-color: light-dark(#fff, #222);

        /* Container colors */
        --vaadin-background-container: color-mix(in oklab, var(--vaadin-text-color) 5%, var(--vaadin-background-color));
        --vaadin-background-container-strong: color-mix(
          in oklab,
          var(--vaadin-text-color) 10%,
          var(--vaadin-background-color)
        );

        /* Border colors */
        --vaadin-border-color-secondary: color-mix(in oklab, var(--vaadin-text-color) 24%, transparent);
        --vaadin-border-color: color-mix(in oklab, var(--vaadin-text-color) 48%, transparent); /* Above 3:1 contrast */

        /* Text colors */
        /* Above 3:1 contrast */
        --vaadin-text-color-disabled: color-mix(in oklab, var(--vaadin-text-color) 48%, transparent);
        /* Above 4.5:1 contrast */
        --vaadin-text-color-secondary: color-mix(in oklab, var(--vaadin-text-color) 68%, transparent);
        /* Above 7:1 contrast */
        --vaadin-text-color: light-dark(#1f1f1f, white);

        /* Padding */
        --vaadin-padding-xs: 6px;
        --vaadin-padding-s: 8px;
        --vaadin-padding-m: 12px;
        --vaadin-padding-l: 16px;
        --vaadin-padding-xl: 24px;
        --vaadin-padding-block-container: var(--vaadin-padding-xs);
        --vaadin-padding-inline-container: var(--vaadin-padding-s);

        /* Gap/spacing */
        --vaadin-gap-xs: 6px;
        --vaadin-gap-s: 8px;
        --vaadin-gap-m: 12px;
        --vaadin-gap-l: 16px;
        --vaadin-gap-xl: 24px;

        /* Border radius */
        --vaadin-radius-s: 3px;
        --vaadin-radius-m: 6px;
        --vaadin-radius-l: 12px;

        /* Focus outline */
        --vaadin-focus-ring-width: 2px;
        --vaadin-focus-ring-color: var(--vaadin-text-color);

        /* Icons, used as mask-image */
        --_vaadin-icon-arrow-up: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>');
        --_vaadin-icon-calendar: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>');
        --_vaadin-icon-checkmark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>');
        --_vaadin-icon-chevron-down: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>');
        --_vaadin-icon-clock: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>');
        --_vaadin-icon-cross: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>');
        --_vaadin-icon-drag: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M11 7c0 .82843-.6716 1.5-1.5 1.5C8.67157 8.5 8 7.82843 8 7s.67157-1.5 1.5-1.5c.8284 0 1.5.67157 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5Zm5-10c0 .82843-.6716 1.5-1.5 1.5S13 7.82843 13 7s.6716-1.5 1.5-1.5S16 6.17157 16 7Zm0 5c0 .8284-.6716 1.5-1.5 1.5S13 12.8284 13 12s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5S13 17.8284 13 17s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Z" fill="currentColor"/></svg>');
        --_vaadin-icon-eye: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>');
        --_vaadin-icon-eye-slash: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>');
        --_vaadin-icon-fullscreen: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>');
        --_vaadin-icon-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>');
        --_vaadin-icon-link: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>');
        --_vaadin-icon-menu: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>');
        --_vaadin-icon-minus: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>');
        --_vaadin-icon-paper-airplane: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>');
        --_vaadin-icon-pen: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>');
        --_vaadin-icon-play: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>');
        --_vaadin-icon-plus: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>');
        --_vaadin-icon-redo: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>');
        --_vaadin-icon-refresh: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M22 10C22 10 19.995 7.26822 18.3662 5.63824C16.7373 4.00827 14.4864 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.1031 21 19.5649 18.2543 20.6482 14.5M22 10V4M22 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        --_vaadin-icon-resize: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 7.46967c.2929.29289.2929.76777 0 1.06066L8.53033 18.5304c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7678 0-1.0607L17.4697 7.46967c.2929-.29289.7677-.29289 1.0606 0Zm0 4.50003c.2929.2929.2929.7678 0 1.0607l-5.5 5.5c-.2929.2928-.7677.2928-1.0606 0-.2929-.2929-.2929-.7678 0-1.0607l5.4999-5.5c.2929-.2929.7678-.2929 1.0607 0Zm0 4.5c.2929.2928.2929.7677 0 1.0606l-1 1.0001c-.2929.2928-.7677.2929-1.0606 0-.2929-.2929-.2929-.7678 0-1.0607l1-1c.2929-.2929.7677-.2929 1.0606 0Z" fill="currentColor"/></svg>');
        --_vaadin-icon-sort: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M7.49854 6.99951C7.92795 6.99951 8.15791 7.50528 7.87549 7.82861L4.37646 11.8296C4.17728 12.0571 3.82272 12.0571 3.62354 11.8296L0.125488 7.82861C-0.157248 7.50531 0.0719873 6.99956 0.501465 6.99951H7.49854ZM3.62354 0.17041C3.82275 -0.0573875 4.17725 -0.0573848 4.37646 0.17041L7.87549 4.17041C8.15825 4.49373 7.92806 5.00049 7.49854 5.00049L0.501465 4.99951C0.0719873 4.99946 -0.157248 4.49371 0.125488 4.17041L3.62354 0.17041Z" fill="black"/></svg>');
        --_vaadin-icon-undo: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>');
        --_vaadin-icon-upload: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>');
        --_vaadin-icon-user: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>');
        --_vaadin-icon-warn: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>');

        /* Cursors for interactive elements */
        --vaadin-clickable-cursor: pointer;
        --vaadin-disabled-cursor: not-allowed;

        /* Use units so that the values can be used in calc() */
        --safe-area-inset-top: env(safe-area-inset-top, 0px);
        --safe-area-inset-right: env(safe-area-inset-right, 0px);
        --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
        --safe-area-inset-left: env(safe-area-inset-left, 0px);
      }

      @supports not (color: hsl(0 0 0)) {
        html {
          --_vaadin-safari-17-deg: 1deg;
        }
      }

      @media (forced-colors: active) {
        html {
          --vaadin-background-color: Canvas;
          --vaadin-border-color: CanvasText;
          --vaadin-border-color-secondary: CanvasText;
          --vaadin-text-color-disabled: CanvasText;
          --vaadin-text-color-secondary: CanvasText;
          --vaadin-text-color: CanvasText;
          --vaadin-icon-color: CanvasText;
          --vaadin-focus-ring-color: Highlight;
        }
      }
    }
  `);/**
 * @license
 * Copyright (c) 2025 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cd=u`
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
  }

  @keyframes spin {
    to {
      rotate: 1turn;
    }
  }

  [part='loader'] {
    animation:
      spin var(--vaadin-spinner-animation-duration, 1s) linear infinite,
      fade-in 0.3s 0.3s both;
    border: var(--vaadin-spinner-width, 2px) solid;
    --_spinner-color: var(--vaadin-spinner-color, var(--vaadin-text-color));
    --_spinner-color2: color-mix(in srgb, var(--_spinner-color) 20%, transparent);
    border-color: var(--_spinner-color) var(--_spinner-color) var(--_spinner-color2) var(--_spinner-color2);
    border-radius: 50%;
    box-sizing: border-box;
    height: var(--vaadin-spinner-size, 1lh);
    pointer-events: none;
    width: var(--vaadin-spinner-size, 1lh);
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  @media (forced-colors: active) {
    [part='loader'] {
      forced-color-adjust: none;
      --vaadin-spinner-color: CanvasText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vd=[cd,u`
    :host {
      display: flex;
      flex-direction: column;
      border: var(--vaadin-tabsheet-border-width, 1px) solid
        var(--vaadin-tabsheet-border-color, var(--vaadin-border-color-secondary));
      border-radius: var(--vaadin-tabsheet-border-radius, var(--vaadin-radius-l));
      overflow: hidden;
    }

    :host([hidden]) {
      display: none !important;
    }

    [part='tabs-container'] {
      position: relative;
      display: flex;
      align-items: center;
      gap: var(--vaadin-tabsheet-gap, var(--vaadin-gap-s));
      padding: var(--vaadin-tabsheet-padding, var(--vaadin-padding-m));
      box-sizing: border-box;
    }

    ::slotted([slot='tabs']) {
      flex: 1;
      align-self: stretch;
      min-width: 128px;
    }

    ::slotted([hidden]) {
      display: none !important;
    }

    [part='content'] {
      position: relative;
      flex: 1;
      box-sizing: border-box;
      --vaadin-scroller-padding-block: var(--vaadin-tabsheet-padding, var(--vaadin-padding-m));
      --vaadin-scroller-padding-inline: var(--vaadin-tabsheet-padding, var(--vaadin-padding-m));
      --vaadin-scroller-overflow-indicator-top-opacity: 1;
    }

    [part='content'][focus-ring] {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
      outline-offset: calc(var(--vaadin-focus-ring-width) * -1);
    }

    :host([loading]) [part='content'] {
      align-content: center;
    }

    [part='loader'] {
      margin: auto;
    }

    :host([theme~='no-border']) {
      border: 0;
      border-radius: 0;
    }

    :host([theme~='no-padding']) [part='content'] {
      padding: 0 !important;
      --vaadin-scroller-padding-block: 0px !important;
      --vaadin-scroller-padding-inline: 0px !important;
    }
  `];/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pd=m(s=>class extends s{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(t=>{this._delegateAttribute(t,this[t])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(t=>{this._delegateProperty(t,this[t])})}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach((e,a)=>{this._delegateAttribute(e,t[a])})}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach((e,a)=>{this._delegateProperty(e,t[a])})}_delegateAttribute(t,e){this.stateTarget&&(t==="invalid"&&this._delegateAttribute("aria-invalid",e?"true":!1),typeof e=="boolean"?this.stateTarget.toggleAttribute(t,e):e?this.stateTarget.setAttribute(t,e):this.stateTarget.removeAttribute(t))}_delegateProperty(t,e){this.stateTarget&&(this.stateTarget[t]=e)}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ud{constructor(i,t){this.host=i,this.scrollTarget=t||i,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){const{host:i}=this;this.__resizeObserver=new ResizeObserver(()=>{this.__debounceOverflow=I1.debounce(this.__debounceOverflow,Rl,()=>{this.__updateOverflow()})}),this.__resizeObserver.observe(i),[...i.children].forEach(t=>{this.__resizeObserver.observe(t)}),this.__childObserver=new MutationObserver(t=>{t.forEach(({addedNodes:e,removedNodes:a})=>{e.forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(r)}),a.forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(r)})}),this.__updateOverflow()}),this.__childObserver.observe(i,{childList:!0}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll),this.__updateOverflow()}__onScroll(){this.__updateOverflow()}__updateOverflow(){const i=this.scrollTarget;let t="";i.scrollTop>0&&(t+=" top"),Math.ceil(i.scrollTop)<Math.ceil(i.scrollHeight-i.clientHeight)&&(t+=" bottom");const e=Math.abs(i.scrollLeft);e>0&&(t+=" start"),Math.ceil(e)<Math.ceil(i.scrollWidth-i.clientWidth)&&(t+=" end"),t=t.trim(),t.length>0&&this.host.getAttribute("overflow")!==t?this.host.setAttribute("overflow",t):t.length===0&&this.host.hasAttribute("overflow")&&this.host.removeAttribute("overflow")}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function gd(s){return s.nodeType===Node.TEXT_NODE&&s.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let F1=class{constructor(i,t){this.slot=i,this.callback=t,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const i=this.slot.assignedNodes({flatten:!0});let t=[];const e=[],a=[];i.length&&(t=i.filter(r=>!this._storedNodes.includes(r))),this._storedNodes.length&&this._storedNodes.forEach((r,n)=>{const o=i.indexOf(r);o===-1?e.push(r):o!==n&&a.push(r)}),(t.length||e.length||a.length)&&this.callback({addedNodes:t,currentNodes:i,movedNodes:a,removedNodes:e}),this._storedNodes=i}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let fd=0;function B1(){return fd++}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let _d=class extends EventTarget{static generateId(i,t="default"){return`${t}-${i.localName}-${B1()}`}constructor(i,t,e,a={}){super();const{initializer:r,multiple:n,observe:o,useUniqueId:h,uniqueIdPrefix:l}=a;this.host=i,this.slotName=t,this.tagName=e,this.observe=typeof o=="boolean"?o:!0,this.multiple=typeof n=="boolean"?n:!1,this.slotInitializer=r,n&&(this.nodes=[]),h&&(this.defaultId=this.constructor.generateId(i,l||t))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let i=this.getSlotChild();i?(this.node=i,this.initAddedNode(i)):(i=this.attachDefaultNode(),this.initNode(i))}initMultiple(){const i=this.getSlotChildren();if(i.length===0){const t=this.attachDefaultNode();t&&(this.nodes=[t],this.initNode(t))}else this.nodes=i,i.forEach(t=>{this.initAddedNode(t)})}attachDefaultNode(){const{host:i,slotName:t,tagName:e}=this;let a=this.defaultNode;return!a&&e&&(a=document.createElement(e),a instanceof Element&&(t!==""&&a.setAttribute("slot",t),this.defaultNode=a)),a&&(this.node=a,i.appendChild(a)),a}getSlotChildren(){const{slotName:i}=this;return Array.from(this.host.childNodes).filter(t=>t.nodeType===Node.ELEMENT_NODE&&t.hasAttribute("data-slot-ignore")?!1:t.nodeType===Node.ELEMENT_NODE&&t.slot===i||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&i==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(i){const{slotInitializer:t}=this;t&&t(i,this.host)}initCustomNode(i){}teardownNode(i){}initAddedNode(i){i!==this.defaultNode&&(this.initCustomNode(i),this.initNode(i))}observeSlot(){const{slotName:i}=this,t=i===""?"slot:not([name])":`slot[name=${i}]`,e=this.host.shadowRoot.querySelector(t);this.__slotObserver=new F1(e,({addedNodes:a,removedNodes:r})=>{const n=this.multiple?this.nodes:[this.node],o=a.filter(h=>!gd(h)&&!n.includes(h)&&!(h.nodeType===Node.ELEMENT_NODE&&h.hasAttribute("data-slot-ignore")));r.length&&(this.nodes=n.filter(h=>!r.includes(h)),r.forEach(h=>{this.teardownNode(h)})),o&&o.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...n,...o].filter(h=>h!==this.defaultNode),o.forEach(h=>{this.initAddedNode(h)})):(this.node&&this.node.remove(),this.node=o[0],this.initAddedNode(this.node)))})}};/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class md extends _d{constructor(i){super(i,"tabs"),this.__tabsItemsChangedListener=this.__tabsItemsChangedListener.bind(this),this.__tabsSelectedChangedListener=this.__tabsSelectedChangedListener.bind(this),this.__tabIdObserver=new MutationObserver(t=>{t.forEach(e=>{const a=e.target;i.__linkTabAndPanel(a),a.selected&&i.__togglePanels(a)})})}__tabsItemsChangedListener(){this.__tabIdObserver.disconnect();const i=this.tabs.items||[];i.forEach(t=>{this.__tabIdObserver.observe(t,{attributeFilter:["id"]})}),this.host._setItems(i)}__tabsSelectedChangedListener(){this.host.selected=this.tabs.selected}initCustomNode(i){if(!(i instanceof customElements.get("vaadin-tabs")))throw Error('The "tabs" slot of a <vaadin-tabsheet> must only contain a <vaadin-tabs> element!');this.tabs=i,i.addEventListener("items-changed",this.__tabsItemsChangedListener),i.addEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=i,this.host.stateTarget=i,this.__tabsItemsChangedListener()}teardownNode(i){this.tabs=null,i.removeEventListener("items-changed",this.__tabsItemsChangedListener),i.removeEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=null,this.host._setItems([]),this.host.stateTarget=void 0}}const bd=s=>class extends pd(s){static get properties(){return{items:{type:Array,readOnly:!0,notify:!0},selected:{value:0,type:Number,notify:!0},__tabs:{type:Object},__panels:{type:Array}}}static get observers(){return["__itemsOrPanelsChanged(items, __panels)","__selectedTabItemChanged(selected, items, __panels)"]}static get delegateProps(){return["selected","_theme"]}ready(){super.ready(),this.__overflowController=new ud(this,this.shadowRoot.querySelector('[part="content"]')),this.addController(this.__overflowController),this._tabsSlotController=new md(this),this.addController(this._tabsSlotController);const i=this.shadowRoot.querySelector("#panel-slot");this.__panelsObserver=new F1(i,({addedNodes:t,removedNodes:e})=>{t.length&&t.forEach(a=>{a.nodeType===Node.ELEMENT_NODE&&a.hidden&&(a.__customHidden=!0)}),e.length&&e.forEach(a=>{a.nodeType===Node.ELEMENT_NODE&&a.hidden&&(a.__customHidden?delete a.__customHidden:a.hidden=!1)}),this.__panels=Array.from(i.assignedNodes({flatten:!0})).filter(a=>a.nodeType===Node.ELEMENT_NODE)})}_delegateProperty(i,t){if(this.stateTarget){if(i==="_theme"){this._delegateAttribute("theme",t);return}super._delegateProperty(i,t)}}__itemsOrPanelsChanged(i,t){!i||!t||i.forEach(e=>{this.__linkTabAndPanel(e,t)})}__selectedTabItemChanged(i,t,e){!t||!e||i===void 0||this.__togglePanels(t[i],e)}__togglePanels(i,t=this.__panels){const e=i?i.id:"",a=t.find(o=>o.getAttribute("tab")===e),r=this.shadowRoot.querySelector('[part="content"]');this.toggleAttribute("loading",!a);const n=t.filter(o=>!o.hidden).length===1;a?r.style.minHeight="":n&&(r.style.minHeight=`${r.offsetHeight}px`),t.forEach(o=>{o.hidden=o!==a})}__linkTabAndPanel(i,t=this.__panels){const e=t.find(a=>a.getAttribute("tab")===i.id);e&&(e.role="tabpanel",e.id||(e.id=`tabsheet-panel-${B1()}`),e.setAttribute("aria-labelledby",i.id),i.setAttribute("aria-controls",e.id))}};/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Md extends bd(ld(Vl(Ul(Ql(Z))))){static get is(){return"vaadin-tabsheet"}static get styles(){return vd}render(){return w`
      <div part="tabs-container">
        <slot name="prefix"></slot>
        <slot name="tabs"></slot>
        <slot name="suffix"></slot>
      </div>

      <vaadin-tabsheet-scroller part="content">
        <div part="loader"></div>
        <slot id="panel-slot"></slot>
      </vaadin-tabsheet-scroller>
    `}}b1(Md);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=(s,i)=>{var e;const t=s._$AN;if(t===void 0)return!1;for(const a of t)(e=a._$AO)==null||e.call(a,i,!1),Ce(a,i);return!0},Je=s=>{let i,t;do{if((i=s._$AM)===void 0)break;t=i._$AN,t.delete(s),s=i}while((t==null?void 0:t.size)===0)},V1=s=>{for(let i;i=s._$AM;s=i){let t=i._$AN;if(t===void 0)i._$AN=t=new Set;else if(t.has(s))break;t.add(s),wd(i)}};function zd(s){this._$AN!==void 0?(Je(this),this._$AM=s,V1(this)):this._$AM=s}function yd(s,i=!1,t=0){const e=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(i)if(Array.isArray(e))for(let r=t;r<e.length;r++)Ce(e[r],!1),Je(e[r]);else e!=null&&(Ce(e,!1),Je(e));else Ce(this,s)}const wd=s=>{s.type==R0.CHILD&&(s._$AP??(s._$AP=yd),s._$AQ??(s._$AQ=zd))};class xd extends xa{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),V1(this),this.isConnected=i._$AU}_$AO(i,t=!0){var e,a;i!==this.isConnected&&(this.isConnected=i,i?(e=this.reconnected)==null||e.call(this):(a=this.disconnected)==null||a.call(this)),t&&(Ce(this,i),Je(this))}setValue(i){if(Mn(this._$Ct))this._$Ct._$AI(i,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=i,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const js=Symbol("valueNotInitialized");class Cd extends xd{constructor(i){if(super(i),i.type!==R0.ELEMENT)throw new Error(`\`${this.constructor.name}\` must be bound to an element.`);this.previousValue=js}render(i,t){return W}update(i,[t,e]){return this.hasChanged(e)?(this.host=i.options&&i.options.host,this.element=i.element,this.renderer=t,this.previousValue===js?this.addRenderer():this.runRenderer(),this.previousValue=Array.isArray(e)?[...e]:e,W):W}reconnected(){this.addRenderer()}disconnected(){this.removeRenderer()}addRenderer(){throw new Error("The `addRenderer` method must be implemented.")}runRenderer(){throw new Error("The `runRenderer` method must be implemented.")}removeRenderer(){throw new Error("The `removeRenderer` method must be implemented.")}renderRenderer(i,...t){const e=this.renderer.call(this.host,...t);va(e,i,{host:this.host})}hasChanged(i){return Array.isArray(i)?!Array.isArray(this.previousValue)||this.previousValue.length!==i.length?!0:i.some((t,e)=>t!==this.previousValue[e]):this.previousValue!==i}}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ws=Symbol("contentUpdateDebouncer");/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Sd extends Cd{get rendererProperty(){throw new Error("The `rendererProperty` getter must be implemented.")}addRenderer(){this.element[this.rendererProperty]=(i,t)=>{this.renderRenderer(i,t)}}runRenderer(){const i=this.element._grid;i[Ws]=M.debounce(i[Ws],Y,()=>{i.requestContentUpdate()})}removeRenderer(){this.element[this.rendererProperty]=null}}class Ad extends Sd{get rendererProperty(){return"renderer"}addRenderer(){this.element[this.rendererProperty]=(i,t,e)=>{this.renderRenderer(i,e.item,e,t)}}}const At=wa(Ad);var Ed=Object.defineProperty,kd=Object.getOwnPropertyDescriptor,Oe=(s,i,t,e)=>{for(var a=e>1?void 0:e?kd(i,t):i,r=s.length-1,n;r>=0;r--)(n=s[r])&&(a=(e?n(i,t,a):n(a))||a);return e&&a&&Ed(i,t,a),a};let oe=class extends Z{constructor(){super(...arguments),this.groups=[],this.searchQuery="",this.dialogOpened=!1,this.editingGroup=null}filteredGroups(){if(!this.searchQuery)return this.groups;const s=this.searchQuery.toLowerCase();return this.groups.filter(i=>i.name.toLowerCase().includes(s))}async firstUpdated(){await this.loadGroups()}async loadGroups(){try{this.groups=await B.getAllGroups()}catch(s){console.error("Failed to load groups:",s)}}openCreateDialog(){this.editingGroup={name:"",tokenKey:"",memberIds:[]},this.dialogOpened=!0}openEditDialog(s){this.editingGroup={...s},this.dialogOpened=!0}closeDialog(){this.dialogOpened=!1,this.editingGroup=null}async saveGroup(){if(this.editingGroup)try{this.editingGroup.id?await B.updateGroup(this.editingGroup.id,this.editingGroup):await B.createGroup(this.editingGroup),await this.loadGroups(),this.closeDialog()}catch(s){console.error("Failed to save group:",s)}}async deleteGroup(s){if(s.id&&confirm("Are you sure you want to delete this group?"))try{await B.deleteGroup(s.id),await this.loadGroups()}catch(i){console.error("Failed to delete group:",i)}}render(){var i,t,e;const s=this.filteredGroups();return w`
            <div class="group-management">
                <div class="header">
                    <h2>Group Management</h2>
                    <vaadin-button theme="primary" @click=${this.openCreateDialog}>
                        Create Group
                    </vaadin-button>
                </div>

                <div class="search-bar">
                    <vaadin-text-field
                        placeholder="Search groups..."
                        clear-button-visible
                        .value=${this.searchQuery}
                        @value-changed=${a=>this.searchQuery=a.detail.value}
                    ></vaadin-text-field>
                </div>

                <vaadin-grid .items="${s}" class="group-grid">
                    <vaadin-grid-column header="Name" path="name"></vaadin-grid-column>
                    <vaadin-grid-column header="Token Key" path="tokenKey"></vaadin-grid-column>
                    <vaadin-grid-column header="Creation Date" path="creationDate"></vaadin-grid-column>
                    <vaadin-grid-column
                        header="Members"
                        ${At(a=>{var r;return w`${((r=a.memberIds)==null?void 0:r.length)||0} members`},[])}
                    ></vaadin-grid-column>
                    <vaadin-grid-column
                        header="Actions"
                        ${At(a=>w`
                                <vaadin-button theme="tertiary" @click=${()=>this.openEditDialog(a)}>
                                    Edit
                                </vaadin-button>
                                <vaadin-button theme="tertiary error" @click=${()=>this.deleteGroup(a)}>
                                    Delete
                                </vaadin-button>
                            `,[])}
                    ></vaadin-grid-column>
                </vaadin-grid>

                <vaadin-dialog
                    .opened=${this.dialogOpened}
                    @opened-changed=${a=>{a.detail.value||this.closeDialog()}}
                    header-title=${(i=this.editingGroup)!=null&&i.id?"Edit Group":"Create Group"}
                >
                    <vaadin-text-field
                        label="Name"
                        .value=${((t=this.editingGroup)==null?void 0:t.name)||""}
                        @value-changed=${a=>{this.editingGroup&&(this.editingGroup.name=a.detail.value)}}
                    ></vaadin-text-field>

                    <vaadin-text-field
                        label="Token Key"
                        .value=${((e=this.editingGroup)==null?void 0:e.tokenKey)||""}
                        @value-changed=${a=>{this.editingGroup&&(this.editingGroup.tokenKey=a.detail.value)}}
                    ></vaadin-text-field>

                    <vaadin-button slot="footer" theme="primary" @click=${this.saveGroup}>
                        Save
                    </vaadin-button>
                    <vaadin-button slot="footer" theme="tertiary" @click=${this.closeDialog}>
                        Cancel
                    </vaadin-button>
                </vaadin-dialog>
            </div>
        `}};Oe([S()],oe.prototype,"groups",2);Oe([S()],oe.prototype,"searchQuery",2);Oe([S()],oe.prototype,"dialogOpened",2);Oe([S()],oe.prototype,"editingGroup",2);oe=Oe([ni("group-management")],oe);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});var ra;(ra=window.Vaadin).featureFlags||(ra.featureFlags={});function Id(s){return s.replace(/-[a-z]/gu,i=>i[1].toUpperCase())}const tt={};function H1(s,i="25.0.1"){if(Object.defineProperty(s,"version",{get(){return i}}),s.experimental){const e=typeof s.experimental=="string"?s.experimental:`${Id(s.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[e]&&!tt[e]){tt[e]=new Set,tt[e].add(s),Object.defineProperty(window.Vaadin.featureFlags,e,{get(){return tt[e].size===0},set(a){a&&tt[e].size>0&&(tt[e].forEach(r=>{customElements.define(r.is,r)}),tt[e].clear())}});return}else if(tt[e]){tt[e].add(s);return}}const t=customElements.get(s.is);if(!t)customElements.define(s.is,s);else{const e=t.version;e&&s.version&&e===s.version?console.warn(`The component ${s.is} has been loaded twice`):console.error(`Tried to define ${s.is} version ${s.version} when version ${t.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const at=[];function w0(s,i,t=s.getAttribute("dir")){i?s.setAttribute("dir",i):t!=null&&s.removeAttribute("dir")}function x0(){return document.documentElement.getAttribute("dir")}function Td(){const s=x0();at.forEach(i=>{w0(i,s)})}const Od=new MutationObserver(Td);Od.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const j1=s=>class extends s{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>t===""?null:t}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),w0(this,x0(),null))}attributeChangedCallback(t,e,a){if(super.attributeChangedCallback(t,e,a),t!=="dir")return;const r=x0(),n=a===r&&at.indexOf(this)===-1,o=!a&&e&&at.indexOf(this)===-1;n||o?(this.__subscribe(),w0(this,r,a)):a!==r&&e===r&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=at.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,e,a){a==="dir"&&e===""&&!t.hasAttribute("dir")||super._valueToNodeAttribute(t,e,a)}_attributeToProperty(t,e,a){t==="dir"&&!e?this.dir="":super._attributeToProperty(t,e,a)}__subscribe(){at.includes(this)||at.push(this)}__unsubscribe(){at.includes(this)&&at.splice(at.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ld(s,i){return s.split(".").reduce((t,e)=>t?t[e]:void 0,i)}function Pd(s,i,t){const e=s.split("."),a=e.pop(),r=e.reduce((n,o)=>n[o],t);r[a]=i}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ji={},Rd=/([A-Z])/gu;function qs(s){return ji[s]||(ji[s]=s.replace(Rd,"-$1").toLowerCase()),ji[s]}function Us(s){return s[0].toUpperCase()+s.substring(1)}function Wi(s){const[i,t]=s.split("("),e=t.replace(")","").split(",").map(a=>a.trim());return{method:i,observerProps:e}}function qi(s,i){return Object.prototype.hasOwnProperty.call(s,i)||(s[i]=new Map(s[i])),s[i]}const $d=s=>{class i extends s{static createProperty(e,a){[String,Boolean,Number,Array].includes(a)&&(a={type:a}),a&&a.reflectToAttribute&&(a.reflect=!0),super.createProperty(e,a)}static getOrCreateMap(e){return qi(this,e)}static finalize(){if(window.litIssuedWarnings&&(window.litIssuedWarnings.add("no-override-create-property"),window.litIssuedWarnings.add("no-override-get-property-descriptor")),super.finalize(),Array.isArray(this.observers)){const e=this.getOrCreateMap("__complexObservers");this.observers.forEach(a=>{const{method:r,observerProps:n}=Wi(a);e.set(r,n)})}}static addCheckedInitializer(e){super.addInitializer(a=>{a instanceof this&&e(a)})}static getPropertyDescriptor(e,a,r){const n=super.getPropertyDescriptor(e,a,r);let o=n;if(this.getOrCreateMap("__propKeys").set(e,a),r.sync&&(o={get:n.get,set(h){const l=this[e];ai(h,l)&&(this[a]=h,this.requestUpdate(e,l,r),this.hasUpdated&&this.performUpdate())},configurable:!0,enumerable:!0}),r.readOnly){const h=o.set;this.addCheckedInitializer(l=>{l[`_set${Us(e)}`]=function(c){h.call(l,c)}}),o={get:o.get,set(){},configurable:!0,enumerable:!0}}if("value"in r&&this.addCheckedInitializer(h=>{const l=typeof r.value=="function"?r.value.call(h):r.value;r.readOnly?h[`_set${Us(e)}`](l):h[e]=l}),r.observer){const h=r.observer;this.getOrCreateMap("__observers").set(e,h),this.addCheckedInitializer(l=>{l[h]||console.warn(`observer method ${h} not defined`)})}if(r.notify){if(!this.__notifyProps)this.__notifyProps=new Set;else if(!this.hasOwnProperty("__notifyProps")){const h=this.__notifyProps;this.__notifyProps=new Set(h)}this.__notifyProps.add(e)}if(r.computed){const h=`__assignComputed${e}`,l=Wi(r.computed);this.prototype[h]=function(...c){this[e]=this[l.method](...c)},this.getOrCreateMap("__computedObservers").set(h,l.observerProps)}return r.attribute||(r.attribute=qs(e)),o}static get polylitConfig(){return{asyncFirstRender:!1}}connectedCallback(){super.connectedCallback();const{polylitConfig:e}=this.constructor;!this.hasUpdated&&!e.asyncFirstRender&&this.performUpdate()}firstUpdated(){super.firstUpdated(),this.$||(this.$={}),this.renderRoot.querySelectorAll("[id]").forEach(e=>{this.$[e.id]=e})}ready(){}willUpdate(e){this.constructor.__computedObservers&&this.__runComplexObservers(e,this.constructor.__computedObservers)}updated(e){const a=this.__isReadyInvoked;this.__isReadyInvoked=!0,this.constructor.__observers&&this.__runObservers(e,this.constructor.__observers),this.constructor.__complexObservers&&this.__runComplexObservers(e,this.constructor.__complexObservers),this.__dynamicPropertyObservers&&this.__runDynamicObservers(e,this.__dynamicPropertyObservers),this.__dynamicMethodObservers&&this.__runComplexObservers(e,this.__dynamicMethodObservers),this.constructor.__notifyProps&&this.__runNotifyProps(e,this.constructor.__notifyProps),a||this.ready()}setProperties(e){Object.entries(e).forEach(([a,r])=>{const n=this.constructor.__propKeys.get(a),o=this[n];this[n]=r,this.requestUpdate(a,o)}),this.hasUpdated&&this.performUpdate()}_createMethodObserver(e){const a=qi(this,"__dynamicMethodObservers"),{method:r,observerProps:n}=Wi(e);a.set(r,n)}_createPropertyObserver(e,a){qi(this,"__dynamicPropertyObservers").set(a,e)}__runComplexObservers(e,a){a.forEach((r,n)=>{r.some(o=>e.has(o))&&(this[n]?this[n](...r.map(o=>this[o])):console.warn(`observer method ${n} not defined`))})}__runDynamicObservers(e,a){a.forEach((r,n)=>{e.has(r)&&this[n]&&this[n](this[r],e.get(r))})}__runObservers(e,a){e.forEach((r,n)=>{const o=a.get(n);o!==void 0&&this[o]&&this[o](this[n],r)})}__runNotifyProps(e,a){e.forEach((r,n)=>{a.has(n)&&this.dispatchEvent(new CustomEvent(`${qs(n)}-changed`,{detail:{value:this[n]}}))})}_get(e,a){return Ld(e,a)}_set(e,a,r){Pd(e,a,r)}}return x(i,"enabledWarnings",[]),i},W1=m($d);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */var vt,yt,Bt,ae,R,we,xe;const Z0=class Z0 extends EventTarget{constructor(t){super();g(this,R);g(this,vt);g(this,yt,new Set);g(this,Bt);g(this,ae,!1);b(this,vt,t),b(this,Bt,new CSSStyleSheet)}observe(t){this.connect(),!d(this,yt).has(t)&&(d(this,yt).add(t),d(this,Bt).replaceSync(`
      :root::before, :host::before {
        content: '' !important;
        position: absolute !important;
        top: -9999px !important;
        left: -9999px !important;
        visibility: hidden !important;
        transition: 1ms allow-discrete step-end !important;
        transition-property: ${[...d(this,yt)].join(", ")} !important;
      }
    `))}connect(){d(this,ae)||(d(this,vt).adoptedStyleSheets.unshift(d(this,Bt)),d(this,R,xe).addEventListener("transitionstart",t=>f(this,R,we).call(this,t)),d(this,R,xe).addEventListener("transitionend",t=>f(this,R,we).call(this,t)),b(this,ae,!0))}disconnect(){d(this,yt).clear(),d(this,vt).adoptedStyleSheets=d(this,vt).adoptedStyleSheets.filter(t=>t!==d(this,Bt)),d(this,R,xe).removeEventListener("transitionstart",f(this,R,we)),d(this,R,xe).removeEventListener("transitionend",f(this,R,we)),b(this,ae,!1)}static for(t){return t.__cssPropertyObserver||(t.__cssPropertyObserver=new Z0(t)),t.__cssPropertyObserver}};vt=new WeakMap,yt=new WeakMap,Bt=new WeakMap,ae=new WeakMap,R=new WeakSet,we=function(t){const{propertyName:e}=t;d(this,yt).has(e)&&this.dispatchEvent(new CustomEvent("property-changed",{detail:{propertyName:e}}))},xe=function(){return d(this,vt).documentElement??d(this,vt).host};let C0=Z0;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Dd(s){const{baseStyles:i,themeStyles:t,elementStyles:e,lumoInjector:a}=s.constructor,r=s.__lumoStyleSheet;return r&&(i||t)?[...a.includeBaseStyles?i:[],r,...t]:[r,...e].filter(Boolean)}function q1(s){ri(s.shadowRoot,Dd(s))}function Gs(s,i){s.__lumoStyleSheet=i,q1(s)}function Ui(s){s.__lumoStyleSheet=void 0,q1(s)}/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ks=new Set;function U1(s){Ks.has(s)||(Ks.add(s),console.warn(s))}/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ys=new WeakMap;function Zs(s){try{return s.media.mediaText}catch{return U1('[LumoInjector] Browser denied to access property "mediaText" for some CSS rules, so they were skipped.'),""}}function Nd(s){try{return s.cssRules}catch{return U1('[LumoInjector] Browser denied to access property "cssRules" for some CSS stylesheets, so they were skipped.'),[]}}function G1(s,i={tags:new Map,modules:new Map}){var t;for(const e of Nd(s)){if(e instanceof CSSImportRule){const a=Zs(e);a.startsWith("lumo_")?i.modules.set(a,[...e.styleSheet.cssRules]):G1(e.styleSheet,i);continue}if(e instanceof CSSMediaRule){const a=Zs(e);a.startsWith("lumo_")&&i.modules.set(a,[...e.cssRules]);continue}if(e instanceof CSSStyleRule&&e.cssText.includes("-inject")){for(const a of e.style){const r=(t=a.match(/^--_lumo-(.*)-inject-modules$/u))==null?void 0:t[1];if(!r)continue;const n=e.style.getPropertyValue(a);i.tags.set(r,n.split(",").map(o=>o.trim().replace(/'|"/gu,"")))}continue}}return i}function Fd(s){let i=new Map,t=new Map;for(const e of s){let a=Ys.get(e);a||(a=G1(e),Ys.set(e,a)),i=new Map([...i,...a.tags]),t=new Map([...t,...a.modules])}return{tags:i,modules:t}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function K1(s){return`--_lumo-${s.is}-inject`}var Ie,Vt,wt,pt,K,Y1,Ke,Z1;class Bd{constructor(i=document){g(this,K);g(this,Ie);g(this,Vt);g(this,wt,new Map);g(this,pt,new Map);b(this,Ie,i),this.handlePropertyChange=this.handlePropertyChange.bind(this),b(this,Vt,C0.for(i)),d(this,Vt).addEventListener("property-changed",this.handlePropertyChange)}disconnect(){d(this,Vt).removeEventListener("property-changed",this.handlePropertyChange),d(this,wt).clear(),d(this,pt).values().forEach(i=>i.forEach(Ui))}forceUpdate(){for(const i of d(this,wt).keys())f(this,K,Ke).call(this,i)}componentConnected(i){const{lumoInjector:t}=i.constructor,{is:e}=t;d(this,pt).set(e,d(this,pt).get(e)??new Set),d(this,pt).get(e).add(i);const a=d(this,wt).get(e);if(a){a.cssRules.length>0&&Gs(i,a);return}f(this,K,Y1).call(this,e);const r=K1(t);d(this,Vt).observe(r)}componentDisconnected(i){var e;const{is:t}=i.constructor.lumoInjector;(e=d(this,pt).get(t))==null||e.delete(i),Ui(i)}handlePropertyChange(i){var a;const{propertyName:t}=i.detail,e=(a=t.match(/^--_lumo-(.*)-inject$/u))==null?void 0:a[1];e&&f(this,K,Ke).call(this,e)}}Ie=new WeakMap,Vt=new WeakMap,wt=new WeakMap,pt=new WeakMap,K=new WeakSet,Y1=function(i){d(this,wt).set(i,new CSSStyleSheet),f(this,K,Ke).call(this,i)},Ke=function(i){var n;const{tags:t,modules:e}=Fd(d(this,K,Z1)),a=(t.get(i)??[]).flatMap(o=>e.get(o)??[]).map(o=>o.cssText).join(`
`),r=d(this,wt).get(i);r.replaceSync(a),(n=d(this,pt).get(i))==null||n.forEach(o=>{a?Gs(o,r):Ui(o)})},Z1=function(){let i=new Set;for(const t of[d(this,Ie),document])i=i.union(new Set(t.styleSheets)),i=i.union(new Set(t.adoptedStyleSheets));return[...i]};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xs=new Set;function X1(s){const i=s.getRootNode();return i.host&&i.host.constructor.version?X1(i.host):i}const Q1=s=>class extends s{static finalize(){super.finalize();const t=K1(this.lumoInjector);this.is&&!Xs.has(t)&&(Xs.add(t),CSS.registerProperty({name:t,syntax:"<number>",inherits:!0,initialValue:"0"}))}static get lumoInjector(){return{is:this.is,includeBaseStyles:!1}}connectedCallback(){super.connectedCallback();const t=X1(this);t.__lumoInjectorDisabled||this.isConnected&&(t.__lumoInjector||(t.__lumoInjector=new Bd(t)),this.__lumoInjector=t.__lumoInjector,this.__lumoInjector.componentConnected(this))}disconnectedCallback(){super.disconnectedCallback(),this.__lumoInjector&&(this.__lumoInjector.componentDisconnected(this),this.__lumoInjector=void 0)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vd=s=>class extends s{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(t,e,a){super.attributeChangedCallback(t,e,a),t==="theme"&&this._set_theme(a)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const S0=[],Hd=new Set,jd=new Set;function Wd(s){return s&&Object.prototype.hasOwnProperty.call(s,"__themes")}function qd(s,i){return(s||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`,"u").test(i))}function Ud(s){return s.map(i=>i.cssText).join(`
`)}const Gd="vaadin-themable-mixin-style";function Kd(s,i){const t=document.createElement("style");t.id=Gd,t.textContent=Ud(s),i.content.appendChild(t)}function Yd(s=""){let i=0;return s.startsWith("lumo-")||s.startsWith("material-")?i=1:s.startsWith("vaadin-")&&(i=2),i}function J1(s){const i=[];return s.include&&[].concat(s.include).forEach(t=>{const e=S0.find(a=>a.moduleId===t);e?i.push(...J1(e),...e.styles):console.warn(`Included moduleId ${t} not found in style registry`)},s.styles),i}function Zd(s){const i=`${s}-default-theme`,t=S0.filter(e=>e.moduleId!==i&&qd(e.themeFor,s)).map(e=>({...e,styles:[...J1(e),...e.styles],includePriority:Yd(e.moduleId)})).sort((e,a)=>a.includePriority-e.includePriority);return t.length>0?t:S0.filter(e=>e.moduleId===i)}const tr=s=>class extends Vd(s){constructor(){super(),Hd.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&jd.add(this.is),this.elementStyles)return;const t=this.prototype._template;!t||Wd(this)||Kd(this.getStylesForThis(),t)}static finalizeStyles(t){return this.baseStyles=t?[t].flat(1/0):[],this.themeStyles=this.getStylesForThis(),[...this.baseStyles,...this.themeStyles]}static getStylesForThis(){const t=s.__themes||[],e=Object.getPrototypeOf(this.prototype),a=(e?e.constructor.__themes:[])||[];this.__themes=[...t,...a,...Zd(this.is)];const r=this.__themes.flatMap(n=>n.styles);return r.filter((n,o)=>o===r.lastIndexOf(n))}};/**
 * @license
 * Copyright (c) 2025 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xd=(s,...i)=>{const t=document.createElement("style");t.id=s,t.textContent=i.map(e=>e.toString()).join(`
`),document.head.insertAdjacentElement("afterbegin",t)};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */["--vaadin-text-color","--vaadin-text-color-disabled","--vaadin-text-color-secondary","--vaadin-border-color","--vaadin-border-color-secondary","--vaadin-background-color"].forEach(s=>{CSS.registerProperty({name:s,syntax:"<color>",inherits:!0,initialValue:"light-dark(black, white)"})});Xd("vaadin-base",u`
    @layer vaadin.base {
      html {
        /* Background color */
        --vaadin-background-color: light-dark(#fff, #222);

        /* Container colors */
        --vaadin-background-container: color-mix(in oklab, var(--vaadin-text-color) 5%, var(--vaadin-background-color));
        --vaadin-background-container-strong: color-mix(
          in oklab,
          var(--vaadin-text-color) 10%,
          var(--vaadin-background-color)
        );

        /* Border colors */
        --vaadin-border-color-secondary: color-mix(in oklab, var(--vaadin-text-color) 24%, transparent);
        --vaadin-border-color: color-mix(in oklab, var(--vaadin-text-color) 48%, transparent); /* Above 3:1 contrast */

        /* Text colors */
        /* Above 3:1 contrast */
        --vaadin-text-color-disabled: color-mix(in oklab, var(--vaadin-text-color) 48%, transparent);
        /* Above 4.5:1 contrast */
        --vaadin-text-color-secondary: color-mix(in oklab, var(--vaadin-text-color) 68%, transparent);
        /* Above 7:1 contrast */
        --vaadin-text-color: light-dark(#1f1f1f, white);

        /* Padding */
        --vaadin-padding-xs: 6px;
        --vaadin-padding-s: 8px;
        --vaadin-padding-m: 12px;
        --vaadin-padding-l: 16px;
        --vaadin-padding-xl: 24px;
        --vaadin-padding-block-container: var(--vaadin-padding-xs);
        --vaadin-padding-inline-container: var(--vaadin-padding-s);

        /* Gap/spacing */
        --vaadin-gap-xs: 6px;
        --vaadin-gap-s: 8px;
        --vaadin-gap-m: 12px;
        --vaadin-gap-l: 16px;
        --vaadin-gap-xl: 24px;

        /* Border radius */
        --vaadin-radius-s: 3px;
        --vaadin-radius-m: 6px;
        --vaadin-radius-l: 12px;

        /* Focus outline */
        --vaadin-focus-ring-width: 2px;
        --vaadin-focus-ring-color: var(--vaadin-text-color);

        /* Icons, used as mask-image */
        --_vaadin-icon-arrow-up: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>');
        --_vaadin-icon-calendar: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>');
        --_vaadin-icon-checkmark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>');
        --_vaadin-icon-chevron-down: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>');
        --_vaadin-icon-clock: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>');
        --_vaadin-icon-cross: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>');
        --_vaadin-icon-drag: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M11 7c0 .82843-.6716 1.5-1.5 1.5C8.67157 8.5 8 7.82843 8 7s.67157-1.5 1.5-1.5c.8284 0 1.5.67157 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5Zm5-10c0 .82843-.6716 1.5-1.5 1.5S13 7.82843 13 7s.6716-1.5 1.5-1.5S16 6.17157 16 7Zm0 5c0 .8284-.6716 1.5-1.5 1.5S13 12.8284 13 12s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5S13 17.8284 13 17s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Z" fill="currentColor"/></svg>');
        --_vaadin-icon-eye: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>');
        --_vaadin-icon-eye-slash: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>');
        --_vaadin-icon-fullscreen: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>');
        --_vaadin-icon-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>');
        --_vaadin-icon-link: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>');
        --_vaadin-icon-menu: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>');
        --_vaadin-icon-minus: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>');
        --_vaadin-icon-paper-airplane: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>');
        --_vaadin-icon-pen: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>');
        --_vaadin-icon-play: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>');
        --_vaadin-icon-plus: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>');
        --_vaadin-icon-redo: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>');
        --_vaadin-icon-refresh: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M22 10C22 10 19.995 7.26822 18.3662 5.63824C16.7373 4.00827 14.4864 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.1031 21 19.5649 18.2543 20.6482 14.5M22 10V4M22 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        --_vaadin-icon-resize: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 7.46967c.2929.29289.2929.76777 0 1.06066L8.53033 18.5304c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7678 0-1.0607L17.4697 7.46967c.2929-.29289.7677-.29289 1.0606 0Zm0 4.50003c.2929.2929.2929.7678 0 1.0607l-5.5 5.5c-.2929.2928-.7677.2928-1.0606 0-.2929-.2929-.2929-.7678 0-1.0607l5.4999-5.5c.2929-.2929.7678-.2929 1.0607 0Zm0 4.5c.2929.2928.2929.7677 0 1.0606l-1 1.0001c-.2929.2928-.7677.2929-1.0606 0-.2929-.2929-.2929-.7678 0-1.0607l1-1c.2929-.2929.7677-.2929 1.0606 0Z" fill="currentColor"/></svg>');
        --_vaadin-icon-sort: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M7.49854 6.99951C7.92795 6.99951 8.15791 7.50528 7.87549 7.82861L4.37646 11.8296C4.17728 12.0571 3.82272 12.0571 3.62354 11.8296L0.125488 7.82861C-0.157248 7.50531 0.0719873 6.99956 0.501465 6.99951H7.49854ZM3.62354 0.17041C3.82275 -0.0573875 4.17725 -0.0573848 4.37646 0.17041L7.87549 4.17041C8.15825 4.49373 7.92806 5.00049 7.49854 5.00049L0.501465 4.99951C0.0719873 4.99946 -0.157248 4.49371 0.125488 4.17041L3.62354 0.17041Z" fill="black"/></svg>');
        --_vaadin-icon-undo: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>');
        --_vaadin-icon-upload: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>');
        --_vaadin-icon-user: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>');
        --_vaadin-icon-warn: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>');

        /* Cursors for interactive elements */
        --vaadin-clickable-cursor: pointer;
        --vaadin-disabled-cursor: not-allowed;

        /* Use units so that the values can be used in calc() */
        --safe-area-inset-top: env(safe-area-inset-top, 0px);
        --safe-area-inset-right: env(safe-area-inset-right, 0px);
        --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
        --safe-area-inset-left: env(safe-area-inset-left, 0px);
      }

      @supports not (color: hsl(0 0 0)) {
        html {
          --_vaadin-safari-17-deg: 1deg;
        }
      }

      @media (forced-colors: active) {
        html {
          --vaadin-background-color: Canvas;
          --vaadin-border-color: CanvasText;
          --vaadin-border-color-secondary: CanvasText;
          --vaadin-text-color-disabled: CanvasText;
          --vaadin-text-color-secondary: CanvasText;
          --vaadin-text-color: CanvasText;
          --vaadin-icon-color: CanvasText;
          --vaadin-focus-ring-color: Highlight;
        }
      }
    }
  `);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qd=u`
  :host {
    display: flex;
    align-items: center;
    --_radius: var(--vaadin-input-field-border-radius, var(--vaadin-radius-m));
    border-radius:
      /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
      var(--vaadin-input-field-top-start-radius, var(--_radius))
      var(--vaadin-input-field-top-end-radius, var(--_radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_radius));
    border: var(--vaadin-input-field-border-width, 1px) solid
      var(--vaadin-input-field-border-color, var(--vaadin-border-color));
    box-sizing: border-box;
    cursor: text;
    padding: var(
      --vaadin-input-field-padding,
      var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container)
    );
    gap: var(--vaadin-input-field-gap, var(--vaadin-gap-s));
    background: var(--vaadin-input-field-background, var(--vaadin-background-color));
    color: var(--vaadin-input-field-value-color, var(--vaadin-text-color));
    font-size: var(--vaadin-input-field-value-font-size, inherit);
    line-height: var(--vaadin-input-field-value-line-height, inherit);
    font-weight: var(--vaadin-input-field-value-font-weight, 400);
  }

  :host([dir='rtl']) {
    --_radius: var(--vaadin-input-field-border-radius, var(--vaadin-radius-m));
    border-radius:
      /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
      var(--vaadin-input-field-top-end-radius, var(--_radius))
      var(--vaadin-input-field-top-start-radius, var(--_radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_radius));
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Reset the native input styles */
  ::slotted(:is(input, textarea)) {
    appearance: none;
    align-self: stretch;
    box-sizing: border-box;
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: auto;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    font-size: 1em;
    color: inherit;
    background: transparent;
    cursor: inherit;
    text-align: inherit;
    caret-color: var(--vaadin-input-field-value-color);
  }

  ::slotted(*) {
    flex: none;
  }

  slot[name$='fix'] {
    cursor: auto;
  }

  ::slotted(:is(input, textarea))::placeholder {
    /* Use ::slotted(:is(input, textarea):placeholder-shown) to style the placeholder */
    /* because ::slotted(...)::placeholder does not work in Safari. */
    font: inherit;
    color: inherit;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--vaadin-input-field-placeholder-color, var(--vaadin-text-color-secondary));
  }

  :host(:focus-within) {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: calc(var(--vaadin-input-field-border-width, 1px) * -1);
  }

  :host([invalid]) {
    --vaadin-input-field-border-color: var(--vaadin-input-field-error-color, var(--vaadin-text-color));
  }

  :host([readonly]) {
    border-style: dashed;
  }

  :host([readonly]:focus-within) {
    outline-style: dashed;
    --vaadin-input-field-border-color: transparent;
  }

  :host([disabled]) {
    --vaadin-input-field-value-color: var(--vaadin-input-field-disabled-text-color, var(--vaadin-text-color-disabled));
    --vaadin-input-field-background: var(
      --vaadin-input-field-disabled-background,
      var(--vaadin-background-container-strong)
    );
    --vaadin-input-field-border-color: transparent;
  }

  :host([theme~='align-start']) slot:not([name])::slotted(*) {
    text-align: start;
  }

  :host([theme~='align-center']) slot:not([name])::slotted(*) {
    text-align: center;
  }

  :host([theme~='align-end']) slot:not([name])::slotted(*) {
    text-align: end;
  }

  :host([theme~='align-left']) slot:not([name])::slotted(*) {
    text-align: left;
  }

  :host([theme~='align-right']) slot:not([name])::slotted(*) {
    text-align: right;
  }

  @media (forced-colors: active) {
    :host {
      --vaadin-input-field-background: Field;
      --vaadin-input-field-value-color: FieldText;
      --vaadin-input-field-placeholder-color: GrayText;
    }

    :host([disabled]) {
      --vaadin-input-field-value-color: GrayText;
      --vaadin-icon-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Jd extends tr(j1(W1(Q1(Z)))){static get is(){return"vaadin-input-container"}static get styles(){return Qd}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}render(){return w`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}ready(){super.ready(),this.addEventListener("pointerdown",i=>{i.target===this&&i.preventDefault()}),this.addEventListener("click",i=>{i.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(t=>t.focus&&t.focus())})}}H1(Jd);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tc=s=>s??W;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const ec={after(s){return{run(i){return window.setTimeout(i,s)},cancel(i){window.clearTimeout(i)}}},run(s,i){return window.setTimeout(s,i)},cancel(s){window.clearTimeout(s)}},ic={run(s){return window.requestAnimationFrame(s)},cancel(s){window.cancelAnimationFrame(s)}},sc={run(s){return window.requestIdleCallback?window.requestIdleCallback(s):window.setTimeout(s,16)},cancel(s){window.cancelIdleCallback?window.cancelIdleCallback(s):window.clearTimeout(s)}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const A0=new Set;class he{static debounce(i,t,e){return i instanceof he?i._cancelAsync():i=new he,i.setConfig(t,e),i}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(i,t){this._asyncModule=i,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,A0.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),A0.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function ac(s){A0.add(s)}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){si()};let Gi;const Qs=new Set,rc=s=>class extends j1(s){static finalize(){super.finalize();const{is:t}=this;if(t&&!Qs.has(t)){window.Vaadin.registrations.push(this),Qs.add(t);const e=window.Vaadin.developmentModeCallback;e&&(Gi=he.debounce(Gi,sc,()=>{e["vaadin-usage-statistics"]()}),ac(Gi))}}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function q0(s){return s?new Set(s.split(" ")):new Set}function vi(s){return s?[...s].join(" "):""}function er(s,i,t){const e=q0(s.getAttribute(i));e.add(t),s.setAttribute(i,vi(e))}function nc(s,i,t){const e=q0(s.getAttribute(i));if(e.delete(t),e.size===0){s.removeAttribute(i);return}s.setAttribute(i,vi(e))}function oc(s){return s.nodeType===Node.TEXT_NODE&&s.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hc{constructor(i,t){this.slot=i,this.callback=t,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const i=this.slot.assignedNodes({flatten:!0});let t=[];const e=[],a=[];i.length&&(t=i.filter(r=>!this._storedNodes.includes(r))),this._storedNodes.length&&this._storedNodes.forEach((r,n)=>{const o=i.indexOf(r);o===-1?e.push(r):o!==n&&a.push(r)}),(t.length||e.length||a.length)&&this.callback({addedNodes:t,currentNodes:i,movedNodes:a,removedNodes:e}),this._storedNodes=i}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let lc=0;function dc(){return lc++}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class U0 extends EventTarget{static generateId(i,t="default"){return`${t}-${i.localName}-${dc()}`}constructor(i,t,e,a={}){super();const{initializer:r,multiple:n,observe:o,useUniqueId:h,uniqueIdPrefix:l}=a;this.host=i,this.slotName=t,this.tagName=e,this.observe=typeof o=="boolean"?o:!0,this.multiple=typeof n=="boolean"?n:!1,this.slotInitializer=r,n&&(this.nodes=[]),h&&(this.defaultId=this.constructor.generateId(i,l||t))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let i=this.getSlotChild();i?(this.node=i,this.initAddedNode(i)):(i=this.attachDefaultNode(),this.initNode(i))}initMultiple(){const i=this.getSlotChildren();if(i.length===0){const t=this.attachDefaultNode();t&&(this.nodes=[t],this.initNode(t))}else this.nodes=i,i.forEach(t=>{this.initAddedNode(t)})}attachDefaultNode(){const{host:i,slotName:t,tagName:e}=this;let a=this.defaultNode;return!a&&e&&(a=document.createElement(e),a instanceof Element&&(t!==""&&a.setAttribute("slot",t),this.defaultNode=a)),a&&(this.node=a,i.appendChild(a)),a}getSlotChildren(){const{slotName:i}=this;return Array.from(this.host.childNodes).filter(t=>t.nodeType===Node.ELEMENT_NODE&&t.hasAttribute("data-slot-ignore")?!1:t.nodeType===Node.ELEMENT_NODE&&t.slot===i||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&i==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(i){const{slotInitializer:t}=this;t&&t(i,this.host)}initCustomNode(i){}teardownNode(i){}initAddedNode(i){i!==this.defaultNode&&(this.initCustomNode(i),this.initNode(i))}observeSlot(){const{slotName:i}=this,t=i===""?"slot:not([name])":`slot[name=${i}]`,e=this.host.shadowRoot.querySelector(t);this.__slotObserver=new hc(e,({addedNodes:a,removedNodes:r})=>{const n=this.multiple?this.nodes:[this.node],o=a.filter(h=>!oc(h)&&!n.includes(h)&&!(h.nodeType===Node.ELEMENT_NODE&&h.hasAttribute("data-slot-ignore")));r.length&&(this.nodes=n.filter(h=>!r.includes(h)),r.forEach(h=>{this.teardownNode(h)})),o&&o.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...n,...o].filter(h=>h!==this.defaultNode),o.forEach(h=>{this.initAddedNode(h)})):(this.node&&this.node.remove(),this.node=o[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cc extends U0{constructor(i){super(i,"tooltip"),this.setTarget(i),this.__onContentChange=this.__onContentChange.bind(this)}initCustomNode(i){i.target=this.target,this.ariaTarget!==void 0&&(i.ariaTarget=this.ariaTarget),this.context!==void 0&&(i.context=this.context),this.manual!==void 0&&(i.manual=this.manual),this.opened!==void 0&&(i.opened=this.opened),this.position!==void 0&&(i._position=this.position),this.shouldShow!==void 0&&(i.shouldShow=this.shouldShow),this.manual||this.host.setAttribute("has-tooltip",""),this.__notifyChange(i),i.addEventListener("content-changed",this.__onContentChange)}teardownNode(i){this.manual||this.host.removeAttribute("has-tooltip"),i.removeEventListener("content-changed",this.__onContentChange),this.__notifyChange(null)}setAriaTarget(i){this.ariaTarget=i;const t=this.node;t&&(t.ariaTarget=i)}setContext(i){this.context=i;const t=this.node;t&&(t.context=i)}setManual(i){this.manual=i;const t=this.node;t&&(t.manual=i)}setOpened(i){this.opened=i;const t=this.node;t&&(t.opened=i)}setPosition(i){this.position=i;const t=this.node;t&&(t._position=i)}setShouldShow(i){this.shouldShow=i;const t=this.node;t&&(t.shouldShow=i)}setTarget(i){this.target=i;const t=this.node;t&&(t.target=i)}__onContentChange(i){this.__notifyChange(i.target)}__notifyChange(i){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:i}}))}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vc=u`
  [part$='button'] {
    color: var(--vaadin-input-field-button-text-color, var(--vaadin-text-color-secondary));
    cursor: var(--vaadin-clickable-cursor);
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;
    /* Ensure minimum click target (WCAG) */
    padding: max(0px, (24px - 1lh) / 2);
    margin: min(0px, (24px - 1lh) / -2);
  }

  /* Icon */
  [part$='button']::before {
    background: currentColor;
    content: '';
    display: block;
    height: var(--vaadin-icon-size, 1lh);
    width: var(--vaadin-icon-size, 1lh);
    mask-size: var(--vaadin-icon-visual-size, 100%);
    mask-position: 50%;
    mask-repeat: no-repeat;
  }

  :host(:is(:not([clear-button-visible][has-value]), [disabled], [readonly])) [part~='clear-button'] {
    display: none;
  }

  [part~='clear-button']::before {
    mask-image: var(--_vaadin-icon-cross);
  }

  :host(:is([readonly], [disabled])) [part$='button'] {
    color: var(--vaadin-text-color-disabled);
    cursor: var(--vaadin-disabled-cursor);
  }

  @media (forced-colors: active) {
    [part$='button']::before {
      background: CanvasText;
    }

    :host([disabled]) [part$='button'] {
      color: GrayText;
    }

    :host([disabled]) [part$='button']::before {
      background: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pc=u`
  :host {
    --_helper-below-field: initial;
    --_helper-above-field: ;
    --_no-label: initial;
    --_has-label: ;
    --_no-helper: initial;
    --_has-helper: ;
    --_no-error: initial;
    --_has-error: ;
    --_gap: var(--vaadin-input-field-container-gap, var(--vaadin-gap-xs));
    --_gap-s: round(var(--_gap) / 3, 2px);
    display: inline-grid;
    grid-template:
      'label' auto var(--_helper-above-field, 'helper' auto) 'baseline' 0 'input' 1fr var(
        --_helper-below-field,
        'helper' auto
      )
      'error' auto / 100%;
    outline: none;
    cursor: default;
    -webkit-tap-highlight-color: transparent;
  }

  :host([has-label]) {
    --_has-label: initial;
    --_no-label: ;
  }

  :host([has-helper]) {
    --_has-helper: initial;
    --_no-helper: ;
  }

  :host([has-error-message]) {
    --_has-error: initial;
    --_no-error: ;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-helper])) [part='helper-text'],
  :host(:not([has-error-message])) [part='error-message'] {
    display: none;
  }

  /* Baseline alignment guide */
  :host::before {
    content: '\\2003' / '';
    grid-column: 1;
    grid-row: var(--_has-label, label / baseline) var(--_no-label, label / input);
    align-self: var(--_has-label, end) var(--_no-label, start);
    font-size: var(--vaadin-input-field-value-font-size, inherit);
    line-height: var(--vaadin-input-field-value-line-height, inherit);
    padding: var(
      --vaadin-input-field-padding,
      var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container)
    );
    border: var(--vaadin-input-field-border-width, 1px) solid transparent;
    pointer-events: none;
    margin-bottom: var(--_no-label, 0)
      var(
        --_has-label,
        calc(
          var(
              --vaadin-field-baseline-input-height,
              (1lh + var(--vaadin-padding-block-container) * 2 + var(--vaadin-input-field-border-width, 1px) * 2)
            ) *
            -1
        )
      );
  }

  [class$='container'] {
    display: contents;
  }

  [part] {
    grid-column: 1;
  }

  [part='label'] {
    font-size: var(--vaadin-input-field-label-font-size, inherit);
    line-height: var(--vaadin-input-field-label-line-height, inherit);
    font-weight: var(--vaadin-input-field-label-font-weight, 500);
    color: var(--vaadin-input-field-label-color, var(--vaadin-text-color));
    word-break: break-word;
    position: relative;
    grid-area: label;
    margin-bottom: var(--_helper-below-field, var(--_gap)) var(--_helper-above-field, var(--_no-helper, var(--_gap)));
  }

  ::slotted(label) {
    cursor: inherit;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) ::slotted(label) {
    opacity: 0.5;
  }

  :host([disabled]) [part='label'] ::slotted(label) {
    opacity: 1;
  }

  :host([required]) [part='label'] {
    padding-inline-end: 1em;
  }

  [part='required-indicator'] {
    display: inline-block;
    position: absolute;
    width: 1em;
    text-align: center;
    color: var(--vaadin-input-field-required-indicator-color, var(--vaadin-text-color-secondary));
  }

  [part='required-indicator']::after {
    content: var(--vaadin-input-field-required-indicator, '*');
  }

  :host(:not([required])) [part='required-indicator'] {
    display: none;
  }

  [part='label'],
  [part='helper-text'],
  [part='error-message'] {
    width: min-content;
    min-width: 100%;
    box-sizing: border-box;
  }

  [part='input-field'],
  [part='group-field'],
  [part='input-fields'] {
    grid-area: input;
  }

  [part='input-field'] {
    width: var(--vaadin-field-default-width, 12em);
    max-width: 100%;
    min-width: 100%;
  }

  :host([readonly]) [part='input-field'] {
    cursor: default;
  }

  :host([disabled]) [part='input-field'] {
    cursor: var(--vaadin-disabled-cursor);
  }

  [part='helper-text'] {
    font-size: var(--vaadin-input-field-helper-font-size, inherit);
    line-height: var(--vaadin-input-field-helper-line-height, inherit);
    font-weight: var(--vaadin-input-field-helper-font-weight, 400);
    color: var(--vaadin-input-field-helper-color, var(--vaadin-text-color-secondary));
    grid-area: helper;
    margin-top: var(--_helper-above-field, var(--_gap-s)) var(--_helper-below-field, var(--_gap));
    margin-bottom: var(--_helper-above-field, var(--_gap));
  }

  [part='error-message'] {
    font-size: var(--vaadin-input-field-error-font-size, inherit);
    line-height: var(--vaadin-input-field-error-line-height, inherit);
    font-weight: var(--vaadin-input-field-error-font-weight, 400);
    color: var(--vaadin-input-field-error-color, var(--vaadin-text-color));
    display: flex;
    gap: var(--vaadin-gap-xs);
    grid-area: error;
    margin-top: var(--_has-helper, var(--_helper-below-field, var(--_gap-s)) var(--_helper-above-field, var(--_gap)))
      var(--_no-helper, var(--_gap));
  }

  [part='error-message']::before {
    content: '';
    display: inline-block;
    flex: none;
    width: var(--vaadin-icon-size, 1lh);
    height: var(--vaadin-icon-size, 1lh);
    mask: var(--_vaadin-icon-warn) 50% / var(--vaadin-icon-visual-size, 100%) no-repeat;
    background: currentColor;
  }

  :host([theme~='helper-above-field']) {
    --_helper-above-field: initial;
    --_helper-below-field: ;
  }

  @media (forced-colors: active) {
    [part='error-message']::before {
      background: CanvasText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const uc=[pc,vc];/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gc=u`
  [part='input-field'] {
    overflow: auto;
    scroll-padding: var(
      --vaadin-input-field-padding,
      var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container)
    );
  }

  ::slotted(textarea) {
    resize: none;
    white-space: pre-wrap;
  }

  [part='input-field'] ::slotted(:not(textarea)),
  [part~='clear-button'] {
    align-self: flex-start;
    position: sticky;
    top: 0;
  }

  [part~='clear-button'] {
    top: min(0px, (24px - 1lh) / -2);
  }

  /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
  :host([disabled]) ::slotted(textarea) {
    user-select: none;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const He=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(i=>{i.target.isConnected&&(i.target.resizables?i.target.resizables.forEach(t=>{t._onResize(i.contentRect)}):i.target._onResize(i.contentRect))})})}),fc=m(s=>class extends s{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),He.observe(this),this._observeParent){const t=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;t.resizables||(t.resizables=new Set,He.observe(t)),t.resizables.add(this),this.__parent=t}}disconnectedCallback(){super.disconnectedCallback(),He.unobserve(this);const t=this.__parent;if(this._observeParent&&t){const e=t.resizables;e&&(e.delete(this),e.size===0&&He.unobserve(t)),this.__parent=null}}_onResize(t){}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let G0=!1;window.addEventListener("keydown",()=>{G0=!0},{capture:!0});window.addEventListener("mousedown",()=>{G0=!1},{capture:!0});function _c(){return G0}function mc(s){return s.getRootNode().activeElement===s}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bc=m(s=>class extends s{get _keyboardActive(){return _c()}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}focus(t){super.focus(t),t&&t.focusVisible===!1||this.setAttribute("focus-ring","")}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mc=m(s=>class extends s{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zc=s=>class extends Mc(s){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged",sync:!0},_lastTabIndex:{type:Number}}}_disabledChanged(t,e){super._disabledChanged(t,e),!this.__shouldAllowFocusWhenDisabled()&&(t?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.setAttribute("tabindex","-1")):e&&(this._lastTabIndex!==void 0?this.setAttribute("tabindex",this._lastTabIndex):this.tabindex=void 0))}_tabindexChanged(t){this.__shouldAllowFocusWhenDisabled()||this.disabled&&t!==-1&&(this._lastTabIndex=t,this.setAttribute("tabindex","-1"))}focus(t){(!this.disabled||this.__shouldAllowFocusWhenDisabled())&&super.focus(t)}__shouldAllowFocusWhenDisabled(){return!1}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yc=m(s=>class extends bc(zc(s)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged",sync:!0},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus()})}focus(t){this.focusElement&&!this.disabled&&(this.focusElement.focus(),t&&t.focusVisible===!1||this.setAttribute("focus-ring",""))}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,e){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):e&&this._removeFocusListeners(e)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_shouldRemoveFocus(t){return t.target===this.focusElement}_disabledChanged(t,e){super._disabledChanged(t,e),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){t!==void 0&&this.focusElement&&(this.focusElement.tabIndex=t,t!==-1&&(this.tabindex=void 0)),this.disabled&&t&&(t!==-1&&(this._lastTabIndex=t),this.tabindex=void 0),t===void 0&&this.hasAttribute("tabindex")&&this.removeAttribute("tabindex")}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ir=m(s=>class extends s{ready(){super.ready(),this.addEventListener("keydown",t=>{this._onKeyDown(t)}),this.addEventListener("keyup",t=>{this._onKeyUp(t)})}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t);break}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ki=new WeakMap;function wc(s){return Ki.has(s)||Ki.set(s,new Set),Ki.get(s)}function xc(s,i){const t=document.createElement("style");t.textContent=s,i===document?document.head.appendChild(t):i.insertBefore(t,i.firstChild)}const Cc=m(s=>class extends s{get slotStyles(){return[]}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),e=wc(t);this.slotStyles.forEach(a=>{e.has(a)||(xc(a,t),e.add(a))})}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pi=s=>s.test(navigator.userAgent),E0=s=>s.test(navigator.platform),Sc=s=>s.test(navigator.vendor);pi(/Android/u);pi(/Chrome/u)&&Sc(/Google Inc/u);pi(/Firefox/u);E0(/^iPad/u)||E0(/^Mac/u)&&navigator.maxTouchPoints>1;E0(/^iPhone/u);pi(/^((?!chrome|android).)*safari/iu);const Ac=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sr=m(s=>class extends s{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged",sync:!0},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0}}}constructor(){super(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(t){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=t)}clear(){this.value="",this._inputElementValue=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){this.inputElement&&(this._inputElementValue=t??"")}_inputElementChanged(t,e){t?this._addInputListeners(t):e&&this._removeInputListeners(e)}_onInput(t){const e=t.composedPath()[0];this.__userInput=t.isTrusted,this.value=e.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,e){this._toggleHasValue(this._hasValue),!(t===""&&e===void 0)&&(this.__userInput||this._forwardInputValue(t))}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ec=s=>class extends sr(ir(s)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",t=>this._onClearButtonMouseDown(t)),this.clearElement.addEventListener("click",t=>this._onClearButtonClick(t)))}_onClearButtonClick(t){t.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(t){this._shouldKeepFocusOnClearMousedown()&&t.preventDefault(),Ac||this.inputElement.focus()}_onEscape(t){super._onEscape(t),this.clearButtonVisible&&this.value&&!this.readonly&&(t.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_shouldKeepFocusOnClearMousedown(){return mc(this.inputElement)}};/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yi=new Map;function K0(s){return Yi.has(s)||Yi.set(s,new WeakMap),Yi.get(s)}function ar(s,i){s&&s.removeAttribute(i)}function rr(s,i){if(!s||!i)return;const t=K0(i);if(t.has(s))return;const e=q0(s.getAttribute(i));t.set(s,new Set(e))}function kc(s,i){if(!s||!i)return;const t=K0(i),e=t.get(s);!e||e.size===0?s.removeAttribute(i):er(s,i,vi(e)),t.delete(s)}function Zi(s,i,t={newId:null,oldId:null,fromUser:!1}){if(!s||!i)return;const{newId:e,oldId:a,fromUser:r}=t,n=K0(i),o=n.get(s);if(!r&&o){a&&o.delete(a),e&&o.add(e);return}r&&(o?e||n.delete(s):rr(s,i),ar(s,i)),nc(s,i,a);const h=e||vi(o);h&&er(s,i,h)}function Ic(s,i){rr(s,i),ar(s,i)}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Tc{constructor(i){this.host=i,this.__required=!1}setTarget(i){this.__target=i,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(i){this.__setAriaRequiredAttribute(i),this.__required=i}setAriaLabel(i){this.__setAriaLabelToAttribute(i),this.__label=i}setLabelId(i,t=!1){const e=t?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(i,e,t),t?this.__labelIdFromUser=i:this.__labelId=i}setErrorId(i){this.__setErrorIdToAriaAttribute(i,this.__errorId),this.__errorId=i}setHelperId(i){this.__setHelperIdToAriaAttribute(i,this.__helperId),this.__helperId=i}__setAriaLabelToAttribute(i){this.__target&&(i?(Ic(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",i)):this.__label&&(kc(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(i,t,e){Zi(this.__target,"aria-labelledby",{newId:i,oldId:t,fromUser:e})}__setErrorIdToAriaAttribute(i,t){Zi(this.__target,"aria-describedby",{newId:i,oldId:t,fromUser:!1})}__setHelperIdToAriaAttribute(i,t){Zi(this.__target,"aria-describedby",{newId:i,oldId:t,fromUser:!1})}__setAriaRequiredAttribute(i){this.__target&&(["input","textarea"].includes(this.__target.localName)||(i?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const F=document.createElement("div");F.style.position="fixed";F.style.clip="rect(0px, 0px, 0px, 0px)";F.setAttribute("aria-live","polite");document.body.appendChild(F);let je;function Oc(s,i={}){const t=i.mode||"polite",e=i.timeout===void 0?150:i.timeout;t==="alert"?(F.removeAttribute("aria-live"),F.removeAttribute("role"),je=he.debounce(je,ic,()=>{F.setAttribute("role","alert")})):(je&&je.cancel(),F.removeAttribute("role"),F.setAttribute("aria-live",t)),F.textContent="",setTimeout(()=>{F.textContent=s},e)}/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Y0 extends U0{constructor(i,t,e,a={}){super(i,t,e,{...a,useUniqueId:!0})}initCustomNode(i){this.__updateNodeId(i),this.__notifyChange(i)}teardownNode(i){const t=this.getSlotChild();t&&t!==this.defaultNode?this.__notifyChange(t):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const i=super.attachDefaultNode();return i&&this.__updateNodeId(i),i}restoreDefaultNode(){}updateDefaultNode(i){this.__notifyChange(i)}observeNode(i){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(t=>{t.forEach(e=>{const a=e.target,r=a===this.node;e.type==="attributes"?r&&this.__updateNodeId(a):(r||a.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(i,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(i){return i?i.nodeType===Node.ELEMENT_NODE&&(customElements.get(i.localName)||i.children.length>0)||i.textContent&&i.textContent.trim()!=="":!1}__notifyChange(i){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(i),node:i}}))}__updateNodeId(i){const t=!this.nodes||i===this.nodes[0];i.nodeType===Node.ELEMENT_NODE&&(!this.multiple||t)&&!i.id&&(i.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Lc extends Y0{constructor(i){super(i,"error-message","div")}setErrorMessage(i){this.errorMessage=i,this.updateDefaultNode(this.node)}setInvalid(i){this.invalid=i,this.updateDefaultNode(this.node)}initAddedNode(i){i!==this.defaultNode&&this.initCustomNode(i)}initNode(i){this.updateDefaultNode(i)}initCustomNode(i){i.textContent&&!this.errorMessage&&(this.errorMessage=i.textContent.trim()),super.initCustomNode(i)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(i){const{errorMessage:t,invalid:e}=this,a=!!(e&&t&&t.trim()!=="");i&&(i.textContent=a?t:"",i.hidden=!a,a&&Oc(t,{mode:"assertive"})),super.updateDefaultNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pc extends Y0{constructor(i){super(i,"helper",null)}setHelperText(i){this.helperText=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:i}=this;if(i&&i.trim()!==""){this.tagName="div";const t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(i){i&&(i.textContent=this.helperText),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Rc extends Y0{constructor(i){super(i,"label","label")}setLabel(i){this.label=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:i}=this;if(i&&i.trim()!==""){const t=this.attachDefaultNode();this.observeNode(t)}}updateDefaultNode(i){i&&(i.textContent=this.label),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $c=m(s=>class extends s{static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new Rc(this),this._labelController.addEventListener("slot-content-changed",t=>{this.toggleAttribute("has-label",t.detail.hasContent)})}get _labelId(){const t=this._labelNode;return t&&t.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nr=m(s=>class extends s{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1,sync:!0},manualValidation:{type:Boolean,value:!1},required:{type:Boolean,reflectToAttribute:!0,sync:!0}}}validate(){const t=this.checkValidity();return this._setInvalid(!t),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:t}})),t}checkValidity(){return!this.required||!!this.value}_setInvalid(t){this._shouldSetInvalid(t)&&(this.invalid=t)}_shouldSetInvalid(t){return!0}_requestValidation(){this.manualValidation||this.validate()}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dc=s=>class extends nr($c(s)){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new Tc(this),this._helperController=new Pc(this),this._errorController=new Lc(this),this._errorController.addEventListener("slot-content-changed",t=>{this.toggleAttribute("has-error-message",t.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",t=>{const{hasContent:e,node:a}=t.detail;this.__labelChanged(e,a)}),this._helperController.addEventListener("slot-content-changed",t=>{const{hasContent:e,node:a}=t.detail;this.toggleAttribute("has-helper",e),this.__helperChanged(e,a)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(t,e){t?this._fieldAriaController.setHelperId(e.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(t){this._fieldAriaController.setAriaLabel(t)}_accessibleNameRefChanged(t){this._fieldAriaController.setLabelId(t,!0)}__labelChanged(t,e){t?this._fieldAriaController.setLabelId(e.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout(()=>{if(t){const e=this._errorNode;this._fieldAriaController.setErrorId(e&&e.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nc=m(s=>class extends s{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(t=>{this._delegateAttribute(t,this[t])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(t=>{this._delegateProperty(t,this[t])})}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach((e,a)=>{this._delegateAttribute(e,t[a])})}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach((e,a)=>{this._delegateProperty(e,t[a])})}_delegateAttribute(t,e){this.stateTarget&&(t==="invalid"&&this._delegateAttribute("aria-invalid",e?"true":!1),typeof e=="boolean"?this.stateTarget.toggleAttribute(t,e):e?this.stateTarget.setAttribute(t,e):this.stateTarget.removeAttribute(t))}_delegateProperty(t,e){this.stateTarget&&(this.stateTarget[t]=e)}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fc=m(s=>class extends Nc(nr(sr(s))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(t=>this[t]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some(e=>this.__isValidConstraint(e))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(t,...e){if(!t)return;const a=this._hasValidConstraints(e),r=this.__previousHasConstraints&&!a;(this._hasValue||this.invalid)&&a?this._requestValidation():r&&!this.manualValidation&&this._setInvalid(!1),this.__previousHasConstraints=a}_onChange(t){t.stopPropagation(),this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return!!t||t===0}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bc=s=>class extends Cc(yc(Fc(Dc(Ec(ir(s)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){const t=this.localName;return[`
          /* Needed for Safari, where ::slotted(...)::placeholder does not work */
          ${t} > :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }

          /* Override built-in autofill styles */
          ${t} > input[slot='input']:autofill {
            -webkit-text-fill-color: var(--vaadin-input-field-autofill-color, black) !important;
            background-clip: text !important;
          }

          ${t}:has(> input[slot='input']:autofill)::part(input-field) {
            --vaadin-input-field-background: var(--vaadin-input-field-autofill-background, lightyellow) !important;
            --vaadin-input-field-value-color: var(--vaadin-input-field-autofill-color, black) !important;
            --vaadin-input-field-button-text-color: var(--vaadin-input-field-autofill-color, black) !important;
          }
        `]}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){super._onKeyDown(t),this.allowedCharPattern&&!this.__shouldAcceptKey(t)&&t.target===this.inputElement&&(t.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=he.debounce(this._preventInputDebouncer,ec.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||t.key.length!==1||this.__allowedCharRegExp.test(t.key)}_onPaste(t){if(this.allowedCharPattern){const e=t.clipboardData.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onDrop(t){if(this.allowedCharPattern){const e=t.dataTransfer.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onBeforeInput(t){this.allowedCharPattern&&t.data&&!this.__allowedTextRegExp.test(t.data)&&(t.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(t){if(t)try{this.__allowedCharRegExp=new RegExp(`^${t}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${t}*$`,"u")}catch(e){console.error(e)}}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vc=s=>class extends Bc(s){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String,reflectToAttribute:!0},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}_setFocused(t){super._setFocused(t),!t&&document.hasFocus()&&this._requestValidation()}_onInput(t){super._onInput(t),this.invalid&&this._requestValidation()}_valueChanged(t,e){super._valueChanged(t,e),e!==void 0&&this.invalid&&this._requestValidation()}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hc{constructor(i,t){this.input=i,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),t.addEventListener("slot-content-changed",e=>{this.__initLabel(e.detail.node)}),this.__initLabel(t.node)}__initLabel(i){i&&(i.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&i.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const i=t=>{t.stopImmediatePropagation(),this.input.removeEventListener("click",i)};this.input.addEventListener("click",i)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class jc extends U0{constructor(i,t){super(i,"textarea","textarea",{initializer:(e,a)=>{const r=a.getAttribute("value");r&&(e.value=r);const n=a.getAttribute("name");n&&e.setAttribute("name",n),e.id=this.defaultId,typeof t=="function"&&t(e)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wc=s=>class extends fc(Vc(s)){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String},minRows:{type:Number,value:2,observer:"__minRowsChanged"},maxRows:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}static get observers(){return["__updateMinHeight(minRows, inputElement)","__updateMaxHeight(maxRows, inputElement, _inputField)"]}get clearElement(){return this.$.clearButton}_onResize(){this._updateHeight(),this.__scrollPositionUpdated()}_onScroll(){this.__scrollPositionUpdated()}ready(){super.ready(),this.__textAreaController=new jc(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}),this.addController(this.__textAreaController),this.addController(new Hc(this.inputElement,this._labelController)),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",t=>{const e=this._inputField.scrollTop;this._inputField.scrollTop+=t.deltaY,e!==this._inputField.scrollTop&&(t.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",`${this._inputField.scrollTop}px`)}_valueChanged(t,e){super._valueChanged(t,e),this._updateHeight()}_updateHeight(){const t=this.inputElement,e=this._inputField;if(!t||!e)return;const a=e.scrollTop,r=this.value?this.value.length:0;if(this._oldValueLength>=r){const o=getComputedStyle(e).height,h=getComputedStyle(t).width;e.style.height=o,t.style.maxWidth=h,t.style.alignSelf="flex-start",t.style.height="auto"}this._oldValueLength=r;const n=t.scrollHeight;n>t.clientHeight&&(t.style.height=`${n}px`),t.style.removeProperty("max-width"),t.style.removeProperty("align-self"),e.style.removeProperty("height"),e.scrollTop=a,this.__updateMaxHeight(this.maxRows)}__updateMinHeight(t){this.inputElement&&this.inputElement===this.__textAreaController.defaultNode&&(this.inputElement.rows=Math.max(t,1))}__updateMaxHeight(t){if(!(!this._inputField||!this.inputElement))if(t){const e=getComputedStyle(this.inputElement),a=getComputedStyle(this._inputField),n=parseFloat(e.lineHeight)*t,o=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.marginTop)+parseFloat(e.marginBottom)+parseFloat(a.borderTopWidth)+parseFloat(a.borderBottomWidth)+parseFloat(a.paddingTop)+parseFloat(a.paddingBottom),h=Math.ceil(n+o);this._inputField.style.setProperty("max-height",`${h}px`)}else this._inputField.style.removeProperty("max-height")}__minRowsChanged(t){t<1&&console.warn("<vaadin-text-area> minRows must be at least 1.")}scrollToStart(){this._inputField.scrollTop=0}scrollToEnd(){this._inputField.scrollTop=this._inputField.scrollHeight}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const t=this.inputElement.value.match(this.pattern);return t?t[0]===t.input:!1}catch{return!0}}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qc extends Wc(tr(rc(W1(Q1(Z))))){static get is(){return"vaadin-text-area"}static get styles(){return[uc,gc]}render(){return w`
      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" @click="${this.focus}"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          .readonly="${this.readonly}"
          .disabled="${this.disabled}"
          .invalid="${this.invalid}"
          theme="${tc(this._theme)}"
          @scroll="${this._onScroll}"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="field-button clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>

        <slot name="tooltip"></slot>
      </div>
    `}ready(){super.ready(),this._tooltipController=new cc(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}H1(qc);var Uc=Object.defineProperty,Gc=Object.getOwnPropertyDescriptor,Le=(s,i,t,e)=>{for(var a=e>1?void 0:e?Gc(i,t):i,r=s.length-1,n;r>=0;r--)(n=s[r])&&(a=(e?n(i,t,a):n(a))||a);return e&&a&&Uc(i,t,a),a};let le=class extends Z{constructor(){super(...arguments),this.researches=[],this.searchQuery="",this.dialogOpened=!1,this.editingResearch=null}filteredResearches(){if(!this.searchQuery)return this.researches;const s=this.searchQuery.toLowerCase();return this.researches.filter(i=>i.name.toLowerCase().includes(s)||i.subject.toLowerCase().includes(s)||i.description.toLowerCase().includes(s))}async firstUpdated(){await this.loadResearches()}async loadResearches(){try{this.researches=await B.getAllResearches()}catch(s){console.error("Failed to load researches:",s)}}openCreateDialog(){this.editingResearch={name:"",subject:"",description:"",tags:[]},this.dialogOpened=!0}openEditDialog(s){this.editingResearch={...s},this.dialogOpened=!0}closeDialog(){this.dialogOpened=!1,this.editingResearch=null}async saveResearch(){if(this.editingResearch)try{this.editingResearch.id?await B.updateResearch(this.editingResearch.id,this.editingResearch):await B.createResearch(this.editingResearch),await this.loadResearches(),this.closeDialog()}catch(s){console.error("Failed to save research:",s)}}async deleteResearch(s){if(s.id&&confirm("Are you sure you want to delete this research?"))try{await B.deleteResearch(s.id),await this.loadResearches()}catch(i){console.error("Failed to delete research:",i)}}render(){var i,t,e,a,r,n;const s=this.filteredResearches();return w`
            <div class="research-management">
                <div class="header">
                    <h2>Research Management</h2>
                    <vaadin-button theme="primary" @click=${this.openCreateDialog}>
                        Create Research
                    </vaadin-button>
                </div>

                <div class="search-bar">
                    <vaadin-text-field
                        placeholder="Search researches..."
                        clear-button-visible
                        .value=${this.searchQuery}
                        @value-changed=${o=>this.searchQuery=o.detail.value}
                    ></vaadin-text-field>
                </div>

                <vaadin-grid .items="${s}" class="research-grid">
                    <vaadin-grid-column header="Name" path="name"></vaadin-grid-column>
                    <vaadin-grid-column header="Subject" path="subject"></vaadin-grid-column>
                    <vaadin-grid-column header="Description" path="description"></vaadin-grid-column>
                    <vaadin-grid-column
                        header="Tags"
                        ${At(o=>{var h;return w`${((h=o.tags)==null?void 0:h.join(", "))||""}`},[])}
                    ></vaadin-grid-column>
                    <vaadin-grid-column
                        header="Actions"
                        ${At(o=>w`
                                <vaadin-button theme="tertiary" @click=${()=>this.openEditDialog(o)}>
                                    Edit
                                </vaadin-button>
                                <vaadin-button theme="tertiary error" @click=${()=>this.deleteResearch(o)}>
                                    Delete
                                </vaadin-button>
                            `,[])}
                    ></vaadin-grid-column>
                </vaadin-grid>

                <vaadin-dialog
                    .opened=${this.dialogOpened}
                    @opened-changed=${o=>{o.detail.value||this.closeDialog()}}
                    header-title=${(i=this.editingResearch)!=null&&i.id?"Edit Research":"Create Research"}
                >
                    <vaadin-text-field
                        label="Name"
                        .value=${((t=this.editingResearch)==null?void 0:t.name)||""}
                        @value-changed=${o=>{this.editingResearch&&(this.editingResearch.name=o.detail.value)}}
                    ></vaadin-text-field>

                    <vaadin-text-field
                        label="Subject"
                        .value=${((e=this.editingResearch)==null?void 0:e.subject)||""}
                        @value-changed=${o=>{this.editingResearch&&(this.editingResearch.subject=o.detail.value)}}
                    ></vaadin-text-field>

                    <vaadin-text-area
                        label="Description"
                        .value=${((a=this.editingResearch)==null?void 0:a.description)||""}
                        @value-changed=${o=>{this.editingResearch&&(this.editingResearch.description=o.detail.value)}}
                    ></vaadin-text-area>

                    <vaadin-text-field
                        label="Tags (comma separated)"
                        .value=${((n=(r=this.editingResearch)==null?void 0:r.tags)==null?void 0:n.join(", "))||""}
                        @value-changed=${o=>{this.editingResearch&&(this.editingResearch.tags=o.detail.value.split(",").map(h=>h.trim()))}}
                    ></vaadin-text-field>

                    <vaadin-button slot="footer" theme="primary" @click=${this.saveResearch}>
                        Save
                    </vaadin-button>
                    <vaadin-button slot="footer" theme="tertiary" @click=${this.closeDialog}>
                        Cancel
                    </vaadin-button>
                </vaadin-dialog>
            </div>
        `}};Le([S()],le.prototype,"researches",2);Le([S()],le.prototype,"searchQuery",2);Le([S()],le.prototype,"dialogOpened",2);Le([S()],le.prototype,"editingResearch",2);le=Le([ni("research-management")],le);var Kc=Object.defineProperty,Yc=Object.getOwnPropertyDescriptor,ui=(s,i,t,e)=>{for(var a=e>1?void 0:e?Yc(i,t):i,r=s.length-1,n;r>=0;r--)(n=s[r])&&(a=(e?n(i,t,a):n(a))||a);return e&&a&&Kc(i,t,a),a};let Se=class extends Z{constructor(){super(...arguments),this.products=[],this.searchQuery="",this.totalIncome=0}filteredProducts(){if(!this.searchQuery)return this.products;const s=this.searchQuery.toLowerCase();return this.products.filter(i=>i.name.toLowerCase().includes(s)||i.description.toLowerCase().includes(s))}async firstUpdated(){await this.loadProducts(),await this.loadTotalIncome()}async loadProducts(){try{this.products=await B.getAllProducts()}catch(s){console.error("Failed to load products:",s)}}async loadTotalIncome(){try{this.totalIncome=0}catch(s){console.error("Failed to load total income:",s)}}render(){const s=this.filteredProducts();return w`
            <div class="product-monitoring">
                <div class="header">
                    <h2>Product Monitoring</h2>
                    <div class="stats">
                        <div class="stat">Total Income: $${this.totalIncome}</div>
                    </div>
                </div>

                <div class="search-bar">
                    <vaadin-text-field
                        placeholder="Search products..."
                        clear-button-visible
                        .value=${this.searchQuery}
                        @value-changed=${i=>this.searchQuery=i.detail.value}
                    ></vaadin-text-field>
                </div>

                <vaadin-grid .items="${s}" class="product-grid">
                    <vaadin-grid-column header="Name" path="name"></vaadin-grid-column>
                    <vaadin-grid-column header="Description" path="description"></vaadin-grid-column>
                    <vaadin-grid-column header="Income" path="income"></vaadin-grid-column>
                    <vaadin-grid-column
                        header="Tags"
                        ${At(i=>{var t;return w`${((t=i.tags)==null?void 0:t.join(", "))||""}`},[])}
                    ></vaadin-grid-column>
                    <vaadin-grid-column
                        header="Buyers"
                        ${At(i=>{var t;return w`${((t=i.buyerIds)==null?void 0:t.length)||0} buyers`},[])}
                    ></vaadin-grid-column>
                </vaadin-grid>
            </div>
        `}};ui([S()],Se.prototype,"products",2);ui([S()],Se.prototype,"searchQuery",2);ui([S()],Se.prototype,"totalIncome",2);Se=ui([ni("product-monitoring")],Se);var Zc=Object.defineProperty,Xc=Object.getOwnPropertyDescriptor,ce=(s,i,t,e)=>{for(var a=e>1?void 0:e?Xc(i,t):i,r=s.length-1,n;r>=0;r--)(n=s[r])&&(a=(e?n(i,t,a):n(a))||a);return e&&a&&Zc(i,t,a),a};let Et=class extends Z{constructor(){super(),this.user=null,this.activeTab="customers",this.user=null,this.customers=[],this.searchQuery="",this.isLoading=!0}connectedCallback(){super.connectedCallback(),this._initializeDashboard()}async _initializeDashboard(){console.log("[Dashboard] Initializing dashboard..."),await this._checkAuth(),console.log("[Dashboard] Auth check complete, user:",this.user),this.requestUpdate(),this.user&&await this._loadCustomers()}async firstUpdated(){console.log("[Dashboard] firstUpdated called")}get filteredCustomers(){if(!this.searchQuery)return this.customers;const s=this.searchQuery.toLowerCase();return this.customers.filter(i=>{var t,e,a,r;return((t=i.firstName)==null?void 0:t.toLowerCase().includes(s))||((e=i.lastName)==null?void 0:e.toLowerCase().includes(s))||((a=i.email)==null?void 0:a.toLowerCase().includes(s))||((r=i.phone)==null?void 0:r.includes(s))})}async _checkAuth(){try{const s=localStorage.getItem("isAuthenticated"),i=localStorage.getItem("username"),t=localStorage.getItem("user");if(console.log("[Dashboard] Checking auth state:",{isAuthenticated:s,username:i}),s!=="true"||!i){console.log("[Dashboard] Not authenticated or missing username, redirecting to login"),Pe.go("/login");return}try{console.log("[Dashboard] Fetching user from API..."),this.user=await B.getCurrentUser(),console.log("[Dashboard] Got user from API:",this.user)}catch(e){console.warn("[Dashboard] Failed to fetch fresh user data, using fallback",e),t?(this.user=JSON.parse(t),console.log("[Dashboard] Using stored user data:",this.user)):(this.user={id:0,email:i,firstName:i.split("@")[0],role:localStorage.getItem("role")||"CLIENT",isLeader:!1},console.log("[Dashboard] Created minimal user object:",this.user))}}catch(s){console.error("[Dashboard] Authentication error:",s),Pe.go("/login")}}async _loadCustomers(){if(!this.user){console.log("[Dashboard] User not authenticated, skipping customer load");return}this.isLoading=!0,console.log("[Dashboard] Loading customers, isLoading set to true"),this.requestUpdate();try{console.log("[Dashboard] Calling getAllUsers...");const s=await B.getAllUsers();console.log("[Dashboard] getAllUsers returned:",s),this.customers=Array.isArray(s)?s:[],console.log(`[Dashboard] Loaded ${this.customers.length} customers`)}catch(s){console.error("[Dashboard] Failed to load users:",s),this.customers=[],console.log("[Dashboard] Using empty customers array")}finally{this.isLoading=!1,console.log("[Dashboard] Loading complete, isLoading set to false"),this.requestUpdate()}}render(){if(console.log("[Dashboard] render() called, isLoading:",this.isLoading,"user:",this.user),!this.user)return w`
        <div style="padding: 2rem; text-align: center;">
          <p>Please log in to view the dashboard</p>
          <vaadin-button theme="primary" @click="${()=>Pe.go("/login")}">Go to Login</vaadin-button>
        </div>
      `;const s=this.filteredCustomers;return console.log("[Dashboard] Rendering with",s.length,"customers"),w`
      <div class="dashboard-container">
        <!-- Sidebar -->
        <div class="sidebar">
          <div class="logo">
            <h1>CRM</h1>
          </div>
          <nav class="nav-menu">
            <a href="javascript:void(0)" class="nav-item active">
              <vaadin-icon icon="vaadin:dashboard"></vaadin-icon>
              <span>Dashboard</span>
            </a>
            <a href="javascript:void(0)" class="nav-item" @click="${()=>this.activeTab="customers"}">
              <vaadin-icon icon="vaadin:users"></vaadin-icon>
              <span>Customers</span>
            </a>
            <a href="javascript:void(0)" class="nav-item" @click="${()=>this.activeTab="research"}">
              <vaadin-icon icon="vaadin:clipboard-check"></vaadin-icon>
              <span>Research</span>
            </a>
            <a href="javascript:void(0)" class="nav-item" @click="${()=>this.activeTab="groups"}">
              <vaadin-icon icon="vaadin:chart"></vaadin-icon>
              <span>Groups</span>
            </a>
          </nav>
          <div class="user-section">
            <div class="user-avatar">
              ${this.getUserInitials()}
            </div>
            <div class="user-info">
              <div class="user-name">${this.getCurrentUser()}</div>
              <a href="javascript:void(0)" @click="${i=>{i.preventDefault(),this._onLogout()}}" class="logout-link">Sign out</a>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <header class="top-bar">
            <h1>Customer Dashboard</h1>
            <div class="search-bar">
              <vaadin-text-field
                placeholder="Search customers..."
                clear-button-visible
                .value=${this.searchQuery}
                @value-changed=${i=>this.searchQuery=i.detail.value}
              >
                <vaadin-icon icon="vaadin:search" slot="prefix"></vaadin-icon>
              </vaadin-text-field>
            </div>
          </header>

          <!-- Stats Cards -->
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-value">${this.customers.length}</div>
              <div class="stat-label">Total Users</div>
              <vaadin-icon icon="vaadin:users" class="stat-icon"></vaadin-icon>
            </div>
            <div class="stat-card">
              <div class="stat-value">${this.getClientsCount()}</div>
              <div class="stat-label">Clients</div>
              <vaadin-icon icon="vaadin:check" class="stat-icon"></vaadin-icon>
            </div>
            <div class="stat-card">
              <div class="stat-value">${this.getLeadersCount()}</div>
              <div class="stat-label">Leaders</div>
              <vaadin-icon icon="vaadin:lightbulb" class="stat-icon"></vaadin-icon>
            </div>
          </div>
          
          ${this.isLoading?w`<div style="padding: 1rem; text-align: center; color: #666;">Loading data...</div>`:""}

          <!-- Tabs -->
          <vaadin-tabs .selected=${["customers","research","groups","products"].indexOf(this.activeTab)} @selected-changed=${i=>this.activeTab=["customers","research","groups","products"][i.detail.value]}>
            <vaadin-tab>Customers</vaadin-tab>
            <vaadin-tab>Research</vaadin-tab>
            <vaadin-tab>Groups</vaadin-tab>
            <vaadin-tab>Products</vaadin-tab>
          </vaadin-tabs>

          <!-- Tab Content -->
          ${this.activeTab==="customers"?w`
            <!-- Customers Table -->
            <div class="card">
              <div class="card-header">
                <h2>Recent Customers</h2>
                <vaadin-button theme="tertiary">
                  View All
                  <vaadin-icon icon="vaadin:angle-right" slot="suffix"></vaadin-icon>
                </vaadin-button>
              </div>
              <vaadin-grid .items="${s}" class="customer-grid">
                 <vaadin-grid-column
                   header="Name"
                   ${At(i=>w`${`${i.firstName||""} ${i.lastName||""}`.trim()}`,[])}
                 ></vaadin-grid-column>
                 <vaadin-grid-column path="email" header="Email" auto-width></vaadin-grid-column>
                 <vaadin-grid-column path="phone" header="Phone" auto-width></vaadin-grid-column>
                 <vaadin-grid-column
                   header="Role"
                   ${At(i=>w`
                       <span class="status-badge status-${this.getRoleClass(i.role)}">
                         ${i.role}
                       </span>
                     `,[])}
                 ></vaadin-grid-column>
                 <vaadin-grid-column path="birthDate" header="Birth Date" auto-width></vaadin-grid-column>
               </vaadin-grid>
            </div>
          `:this.activeTab==="research"?w`
            <!-- Research Management -->
            <research-management></research-management>
          `:this.activeTab==="groups"?w`
            <!-- Group Management -->
            <group-management></group-management>
          `:w`
            <!-- Product Monitoring -->
            <product-monitoring></product-monitoring>
          `}
        </div>
      </div>


    `}getRoleClass(s){return(s==null?void 0:s.toLowerCase())||"client"}getClientsCount(){return this.customers.filter(s=>s.role==="CLIENT").length}getLeadersCount(){return this.customers.filter(s=>s.role==="LEADER").length}getCurrentUser(){var s;return((s=this.user)==null?void 0:s.firstName)||localStorage.getItem("username")||"User"}getUserInitials(){return this.getCurrentUser().split(" ").map(i=>i[0]).join("").toUpperCase()}_onLogout(){localStorage.removeItem("isAuthenticated"),localStorage.removeItem("authHeader"),localStorage.removeItem("username"),localStorage.removeItem("user"),Pe.go("/login")}};Et.styles=u`
    :host {
      display: block;
      height: 100%;
      width: 100%;
    }
    
    .dashboard-container {
      height: 100%;
      display: flex;
      flex-direction: row;
      gap: 0;
    }

    .sidebar {
      width: 250px;
      background: #2c3e50;
      color: white;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      box-shadow: 2px 0 4px rgba(0,0,0,0.1);
    }

    .logo h1 {
      margin: 0 0 2rem 0;
      font-size: 1.8rem;
    }

    .nav-menu {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 1rem;
      color: rgba(255,255,255,0.8);
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.2s;
    }

    .nav-item:hover,
    .nav-item.active {
      background: rgba(255,255,255,0.1);
      color: white;
    }

    .nav-item vaadin-icon {
      width: 20px;
      height: 20px;
    }

    .user-section {
      display: flex;
      gap: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .user-avatar {
      width: 48px;
      height: 48px;
      background: #3498db;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1rem;
    }

    .user-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .user-name {
      font-weight: 500;
      font-size: 0.9rem;
    }

    .logout-link {
      color: #3498db;
      text-decoration: none;
      font-size: 0.85rem;
      margin-top: 0.25rem;
    }

    .logout-link:hover {
      text-decoration: underline;
    }

    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .top-bar {
      background: white;
      padding: 1.5rem;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }

    .top-bar h1 {
      margin: 0;
      font-size: 1.5rem;
    }

    .search-bar {
      min-width: 250px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      padding: 1.5rem;
    }

    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: relative;
      overflow: hidden;
    }

    .stat-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #3498db, #2ecc71);
    }

    .stat-icon {
      position: absolute;
      right: 1rem;
      top: 1rem;
      font-size: 2rem;
      opacity: 0.1;
    }

    .stat-value {
      font-size: 2rem;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: #7f8c8d;
      font-size: 0.9rem;
    }

    vaadin-tabs {
      background: white;
      border-bottom: 1px solid #e0e0e0;
    }

    .card {
      background: white;
      margin: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
    }

    .card-header {
      padding: 1.5rem;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-header h2 {
      margin: 0;
      font-size: 1.2rem;
    }

    .customer-grid {
      flex: 1;
      min-height: 300px;
    }

    .status-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .status-client {
      background: #ecf0f1;
      color: #2c3e50;
    }

    .status-leader {
      background: #d5f4e6;
      color: #27ae60;
    }

    .status-admin {
      background: #fadbd8;
      color: #c0392b;
    }

    vaadin-text-field {
      width: 100%;
    }
  `;ce([S()],Et.prototype,"user",2);ce([S()],Et.prototype,"customers",2);ce([S()],Et.prototype,"searchQuery",2);ce([S()],Et.prototype,"isLoading",2);ce([S()],Et.prototype,"activeTab",2);Et=ce([ni("new-dashboard-view")],Et);export{Et as NewDashboardView};
//# sourceMappingURL=new-dashboard-view-Cm0lxhoY.js.map
