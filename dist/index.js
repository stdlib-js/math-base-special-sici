"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var N=n(function(m0,f){
function U(r){return r===0?5489002234213736e-22:5489002234213736e-22+r*(.00010893658065032867+r*(.006810201324725182+r*(.16700661183132304+r*(1.6208328770153833+r*(5.4593771716181285+r*4.236128628922166)))))}f.exports=U
});var F=n(function(z0,D){
function V(r){return r===0?5489002527562557e-22:5489002527562557e-22+r*(.00011003435715391573+r*(.007017106683227897+r*(.1787920529631499+r*(1.867922579501842+r*(7.308288225055645+r*(8.16496634205391+r*1))))))}D.exports=V
});var g=n(function(H0,G){
function W(r){return r===0?970507110881952e-28:970507110881952e-28+r*(941779576128513e-25+r*(3200927900910049e-23+r*(48621543082645475e-22+r*(.00034955644244785906+r*(.01160642294081244+r*(.16030015822231947+r*(.7137152741001467+r*.4558808734704653)))))))}G.exports=W
});var I=n(function(L0,A){
function X(r){return r===0?970507110881952e-28:970507110881952e-28+r*(9437205903502767e-26+r*(321956939101046e-22+r*(4924350643178815e-21+r*(.00035869648188185157+r*(.012225359477197129+r*(.17868554533207454+r*(.9174636118736841+r*1)))))))}A.exports=X
});var M=n(function(O0,C){
function Y(r){return r===0?7825790407440903e-24:7825790407440903e-24+r*(19796387414096365e-22+r*(.00016199979459893403+r*(.005388686814621773+r*(.07485277376284691+r*(.3971802963923375+r*(.6113791099522193+r*.08710016989731142))))))}C.exports=Y
});var m=n(function(P0,S){
function Z(r){return r===0?7825792189335346e-24:7825792189335346e-24+r*(20265918208634397e-22+r*(.0001732210814741771+r*(.006223963454417684+r*(.09887717612776888+r*(.666296701268988+r*(1.6440220241335535+r*1))))))}S.exports=Z
});var H=n(function(R0,z){
function $(r){return r===0?31404009894636335e-31:31404009894636335e-31+r*(3859459254302766e-27+r*(17040445278204452e-25+r*(3471311670841167e-22+r*(34894116550227946e-21+r*(.001717182390523479+r*(.03848787676499743+r*(.33041097930563207+r*.6973599534432762)))))))}z.exports=$
});var O=n(function(_0,L){
function d(r){return r===0?31404009894636335e-31:31404009894636335e-31+r*(3878301660239547e-27+r*(17269374896631615e-25+r*(35704322344374083e-23+r*(3684755044425611e-20+r*(.0019028442667439953+r*(.04679131942596258+r*(.48785225869530496+r*(1.6854889881101165+r*1))))))))}L.exports=d
});var R=n(function(b0,P){
function x(r){return r===0?1:1+r*(-.04134703162294066+r*(.0009769454381704354+r*(-9757593038436328e-21+r*(4625917144270128e-23+r*-8391678279103039e-26))))}P.exports=x
});var b=n(function(h0,_){
function r0(r){return r===0?1:1+r*(.01420852393261499+r*(9964121220438756e-20+r*(4418278428012189e-22+r*(1279978911799433e-24+r*20326926619595193e-28))))}_.exports=r0
});var j=n(function(j0,h){
function e0(r){return r===0?-1:-1+r*(.028915965260755523+r*(-.0004740072068734079+r*(3593250514199931e-21+r*(-13524950491579076e-24+r*20252400238910228e-27))))}h.exports=e0
});var w=n(function(k0,k){
function i0(r){return r===0?4:4+r*(.051002805623644606+r*(.00031744202477503275+r*(12321035568588342e-22+r*(3067809975818878e-24+r*4077460400618806e-27))))}k.exports=i0
});var q=n(function(w0,J){
var n0=require('@stdlib/math-base-assert-is-infinite/dist'),u0=require('@stdlib/math-base-assert-is-nan/dist'),B=require('@stdlib/math-base-special-cos/dist'),E=require('@stdlib/math-base-special-sin/dist'),a0=require('@stdlib/math-base-special-ln/dist'),y=require('@stdlib/constants-float64-half-pi/dist'),t0=require('@stdlib/constants-float64-eulergamma/dist'),v0=require('@stdlib/constants-float64-ninf/dist'),l0=N(),s0=F(),p0=g(),c0=I(),o0=M(),y0=m(),q0=H(),f0=O(),N0=R(),D0=b(),F0=j(),G0=w();function g0(r,e,l,u){var s,a,t,p,c,o,v,i;if(u0(r))return e[u]=NaN,e[u+l]=NaN,e;if(r<0?(s=-1,r=-r):s=0,r===0)return e[u]=0,e[u+l]=v0,e;if(r>1e9){if(n0(r))return s===-1?(a=-y,t=NaN):(a=y,t=0),e[u]=a,e[u+l]=t,e;a=y-B(r)/r,t=E(r)/r}return r>4?(v=E(r),p=B(r),i=1/(r*r),r<8?(c=l0(i)/(r*s0(i)),o=i*o0(i)/y0(i)):(c=p0(i)/(r*c0(i)),o=i*q0(i)/f0(i)),a=y-c*p-o*v,s&&(a=-a),t=c*v-o*p,e[u]=a,e[u+l]=t,e):(i=r*r,v=r*N0(i)/D0(i),p=i*F0(i)/G0(i),s&&(v=-v),a=v,t=t0+a0(r)+p,e[u]=a,e[u+l]=t,e)}J.exports=g0
});var Q=n(function(B0,K){
var A0=q();function I0(r){return A0(r,[0,0],1,0)}K.exports=I0
});var C0=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=Q(),M0=q();C0(T,"assign",M0);module.exports=T;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
