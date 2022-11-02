// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cos@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sin@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eulergamma@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";function a(e,a,f,u){var l,c,j,p,h,b,g,v;if(n(e))return a[u]=NaN,a[u+f]=NaN,a;if(e<0?(l=-1,e=-e):l=0,0===e)return a[u]=0,a[u+f]=d,a;if(e>1e9){if(t(e))return-1===l?(c=-m,j=NaN):(c=m,j=0),a[u]=c,a[u+f]=j,a;c=m-s(e)/e,j=r(e)/e}return e>4?(g=r(e),p=s(e),v=1/(e*e),e<8?(h=function(e){return 0===e?5.489002234213736e-7:5.489002234213736e-7+e*(.00010893658065032867+e*(.006810201324725182+e*(.16700661183132304+e*(1.6208328770153833+e*(5.4593771716181285+4.236128628922166*e)))))}(v)/(e*function(e){return 0===e?5.489002527562557e-7:5.489002527562557e-7+e*(.00011003435715391573+e*(.007017106683227897+e*(.1787920529631499+e*(1.867922579501842+e*(7.308288225055645+e*(8.16496634205391+1*e))))))}(v)),b=v*function(e){return 0===e?7.825790407440903e-9:7.825790407440903e-9+e*(19796387414096365e-22+e*(.00016199979459893403+e*(.005388686814621773+e*(.07485277376284691+e*(.3971802963923375+e*(.6113791099522193+.08710016989731142*e))))))}(v)/function(e){return 0===e?7.825792189335346e-9:7.825792189335346e-9+e*(20265918208634397e-22+e*(.0001732210814741771+e*(.006223963454417684+e*(.09887717612776888+e*(.666296701268988+e*(1.6440220241335535+1*e))))))}(v)):(h=function(e){return 0===e?970507110881952e-28:970507110881952e-28+e*(941779576128513e-25+e*(3.200927900910049e-8+e*(48621543082645475e-22+e*(.00034955644244785906+e*(.01160642294081244+e*(.16030015822231947+e*(.7137152741001467+.4558808734704653*e)))))))}(v)/(e*function(e){return 0===e?970507110881952e-28:970507110881952e-28+e*(9437205903502767e-26+e*(3.21956939101046e-8+e*(4924350643178815e-21+e*(.00035869648188185157+e*(.012225359477197129+e*(.17868554533207454+e*(.9174636118736841+1*e)))))))}(v)),b=v*function(e){return 0===e?31404009894636335e-31:31404009894636335e-31+e*(3859459254302766e-27+e*(1.7040445278204452e-9+e*(3.471311670841167e-7+e*(34894116550227946e-21+e*(.001717182390523479+e*(.03848787676499743+e*(.33041097930563207+.6973599534432762*e)))))))}(v)/function(e){return 0===e?31404009894636335e-31:31404009894636335e-31+e*(3878301660239547e-27+e*(1.7269374896631615e-9+e*(3.5704322344374083e-7+e*(3684755044425611e-20+e*(.0019028442667439953+e*(.04679131942596258+e*(.48785225869530496+e*(1.6854889881101165+1*e))))))))}(v)),c=m-h*p-b*g,l&&(c=-c),j=h*g-b*p,a[u]=c,a[u+f]=j,a):(g=e*function(e){return 0===e?1:1+e*(e*(.0009769454381704354+e*(e*(4.625917144270128e-8+-8391678279103039e-26*e)-9757593038436328e-21))-.04134703162294066)}(v=e*e)/function(e){return 0===e?1:1+e*(.01420852393261499+e*(9964121220438756e-20+e*(4.418278428012189e-7+e*(1.279978911799433e-9+20326926619595193e-28*e))))}(v),p=v*function(e){return 0===e?-1:e*(.028915965260755523+e*(e*(3593250514199931e-21+e*(20252400238910228e-27*e-1.3524950491579076e-8))-.0004740072068734079))-1}(v)/function(e){return 0===e?4:4+e*(.051002805623644606+e*(.00031744202477503275+e*(12321035568588342e-22+e*(3.067809975818878e-9+4077460400618806e-27*e))))}(v),l&&(g=-g),c=g,j=o+i(e)+p,a[u]=c,a[u+f]=j,a)}function f(e){return a(e,[0,0],1,0)}e(f,"assign",a);export{a as assign,f as default};
//# sourceMappingURL=index.mjs.map
