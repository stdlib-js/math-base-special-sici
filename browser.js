// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,e=r,u=t,o=function(n){return n===e||n===u},f=function(n){return n!=n},i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,a=c,y=function(n){return a.call(n)},l=Object.prototype.hasOwnProperty,p=function(n,r){return null!=n&&l.call(n,r)},s="function"==typeof Symbol?Symbol.toStringTag:"",v=p,A=s,w=c,b=y,N=function(n){var r,t,e;if(null==n)return w.call(n);t=n[A],r=v(n,A);try{n[A]=void 0}catch(r){return w.call(n)}return e=w.call(n),r?n[A]=t:delete n[A],e},d=i&&"symbol"==typeof Symbol.toStringTag?N:b,h=d,U="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,I=function(n){return U&&n instanceof Uint32Array||"[object Uint32Array]"===h(n)},g=m,F=function(){var n,r;if("function"!=typeof g)return!1;try{r=new g(r=[1,3.14,-3.14,4294967296,4294967297]),n=I(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},S="function"==typeof Uint32Array?Uint32Array:void 0,H=function(){throw new Error("not implemented")},O=F()?S:H,T=d,j="function"==typeof Float64Array,E="function"==typeof Float64Array?Float64Array:null,G=function(n){return j&&n instanceof Float64Array||"[object Float64Array]"===T(n)},L=E,W=function(){var n,r;if("function"!=typeof L)return!1;try{r=new L([1,3.14,-3.14,NaN]),n=G(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},x="function"==typeof Float64Array?Float64Array:void 0,M=function(){throw new Error("not implemented")},P=W()?x:M,V=d,Y="function"==typeof Uint8Array,_="function"==typeof Uint8Array?Uint8Array:null,k=function(n){return Y&&n instanceof Uint8Array||"[object Uint8Array]"===V(n)},q=_,z=function(){var n,r;if("function"!=typeof q)return!1;try{r=new q(r=[1,3.14,-3.14,256,257]),n=k(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},B="function"==typeof Uint8Array?Uint8Array:void 0,C=function(){throw new Error("not implemented")},D=z()?B:C,J=d,K="function"==typeof Uint16Array,Q="function"==typeof Uint16Array?Uint16Array:null,R=function(n){return K&&n instanceof Uint16Array||"[object Uint16Array]"===J(n)},X=Q,Z=function(){var n,r;if("function"!=typeof X)return!1;try{r=new X(r=[1,3.14,-3.14,65536,65537]),n=R(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},$="function"==typeof Uint16Array?Uint16Array:void 0,nn=function(){throw new Error("not implemented")},rn={uint16:Z()?$:nn,uint8:D};(n=new rn.uint16(1))[0]=4660;var tn,en,un=52===new rn.uint8(n.buffer)[0],on=O,fn=!0===un?1:0,cn=new P(1),an=new on(cn.buffer),yn=function(n){return cn[0]=n,an[fn]},ln=function(n){return 0===n?.0416666666666666:.0416666666666666+n*(2480158728947673e-20*n-.001388888888887411)},pn=function(n){return 0===n?-2.7557314351390663e-7:n*(2.087572321298175e-9+-11359647557788195e-27*n)-2.7557314351390663e-7},sn=function(n,r){var t,e,u,o;return u=(o=n*n)*o,e=o*ln(o),e+=u*u*pn(o),(u=1-(t=.5*o))+(1-u-t+(o*e-n*r))},vn=-.16666666666666632,An=function(n,r){var t,e,u;return t=.00833333333332249+(u=n*n)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*n,0===r?n+e*(vn+u*t):n-(u*(.5*r-e*t)-r-e*vn)},wn=O,bn=!0===un?0:1,Nn=new P(1),dn=new wn(Nn.buffer),hn=function(n){return Nn[0]=n,dn[bn]};!0===un?(tn=1,en=0):(tn=0,en=1);var Un,mn,In=O,gn={HIGH:tn,LOW:en},Fn=new P(1),Sn=new In(Fn.buffer),Hn=gn.HIGH,On=gn.LOW,Tn=function(n,r){return Sn[Hn]=n,Sn[On]=r,Fn[0]},jn=Tn,En=Math.floor;!0===un?(Un=1,mn=0):(Un=0,mn=1);var Gn=O,Ln={HIGH:Un,LOW:mn},Wn=new P(1),xn=new Gn(Wn.buffer),Mn=Ln.HIGH,Pn=Ln.LOW,Vn=function(n,r){return Wn[0]=r,n[0]=xn[Mn],n[1]=xn[Pn],n},Yn=function(n,r){return 1===arguments.length?Vn([0,0],n):Vn(n,r)},_n=Yn,kn=yn,qn=jn,zn=[0,0],Bn=o,Cn=f,Dn=function(n){return Math.abs(n)},Jn=function(n,r){return Cn(r)||Bn(r)?(n[0]=r,n[1]=0,n):0!==r&&Dn(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},Kn=function(n,r){return 1===arguments.length?Jn([0,0],n):Jn(n,r)},Qn=yn,Rn=function(n){var r=Qn(n);return(r=(2146435072&r)>>>20)-1023|0},Xn=r,Zn=t,$n=f,nr=o,rr=function(n,r){var t,e;return _n(zn,n),t=zn[0],t&=2147483647,e=kn(r),qn(t|=e&=2147483648,zn[1])},tr=Kn,er=Rn,ur=Yn,or=jn,fr=[0,0],ir=[0,0],cr=function(n,r){var t,e;return 0===r||0===n||$n(n)||nr(n)?n:(tr(fr,n),r+=fr[1],(r+=er(n=fr[0]))<-1074?rr(0,n):r>1023?n<0?Zn:Xn:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,ur(ir,n),t=ir[0],t&=2148532223,e*or(t|=r+1023<<20,ir[1])))},ar=function(n,r){var t,e;for(t=[],e=0;e<r;e++)t.push(n);return t},yr=En,lr=cr,pr=function(n){return ar(0,n)},sr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],vr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ar=16777216,wr=5.960464477539063e-8,br=pr(20),Nr=pr(20),dr=pr(20),hr=pr(20);function Ur(n,r,t,e,u,o,f,i,c){var a,y,l,p,s,v,A,w,b;for(p=o,b=e[t],w=t,s=0;w>0;s++)y=wr*b|0,hr[s]=b-Ar*y|0,b=e[w-1]+y,w-=1;if(b=lr(b,u),b-=8*yr(.125*b),b-=A=0|b,l=0,u>0?(A+=s=hr[t-1]>>24-u,hr[t-1]-=s<<24-u,l=hr[t-1]>>23-u):0===u?l=hr[t-1]>>23:b>=.5&&(l=2),l>0){for(A+=1,a=0,s=0;s<t;s++)w=hr[s],0===a?0!==w&&(a=1,hr[s]=16777216-w):hr[s]=16777215-w;if(u>0)switch(u){case 1:hr[t-1]&=8388607;break;case 2:hr[t-1]&=4194303}2===l&&(b=1-b,0!==a&&(b-=lr(1,u)))}if(0===b){for(w=0,s=t-1;s>=o;s--)w|=hr[s];if(0===w){for(v=1;0===hr[o-v];v++);for(s=t+1;s<=t+v;s++){for(c[i+s]=sr[f+s],y=0,w=0;w<=i;w++)y+=n[w]*c[i+(s-w)];e[s]=y}return Ur(n,r,t+=v,e,u,o,f,i,c)}}if(0===b)for(t-=1,u-=24;0===hr[t];)t-=1,u-=24;else(b=lr(b,-u))>=Ar?(y=wr*b|0,hr[t]=b-Ar*y|0,u+=24,hr[t+=1]=y):hr[t]=0|b;for(y=lr(1,u),s=t;s>=0;s--)e[s]=y*hr[s],y*=wr;for(s=t;s>=0;s--){for(y=0,v=0;v<=p&&v<=t-s;v++)y+=vr[v]*e[s+v];dr[t-s]=y}for(y=0,s=t;s>=0;s--)y+=dr[s];for(r[0]=0===l?y:-y,y=dr[0]-y,s=1;s<=t;s++)y+=dr[s];return r[1]=0===l?y:-y,7&A}var mr=function(n,r,t,e){var u,o,f,i,c,a,y;for((o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),a=o-(f=e-1),y=f+4,c=0;c<=y;c++)br[c]=a<0?0:sr[a],a+=1;for(c=0;c<=4;c++){for(u=0,a=0;a<=f;a++)u+=n[a]*br[f+(c-a)];Nr[c]=u}return Ur(n,r,4,Nr,i,4,o,f,br)},Ir=Math.round,gr=yn,Fr=yn,Sr=hn,Hr=jn,Or=mr,Tr=function(n,r,t){var e,u,o,f,i;return o=n-1.5707963267341256*(e=Ir(.6366197723675814*n)),f=6077100506506192e-26*e,i=r>>20|0,t[0]=o-f,i-(gr(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(gr(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e},jr=1.5707963267341256,Er=6077100506506192e-26,Gr=2*Er,Lr=3*Er,Wr=4*Er,xr=[0,0,0],Mr=[0,0],Pr=function(n,r){var t,e,u,o,f,i,c;if((u=2147483647&Fr(n)|0)<=1072243195)return r[0]=n,r[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Tr(n,u,r):u<=1073928572?n>0?(c=n-jr,r[0]=c-Er,r[1]=c-r[0]-Er,1):(c=n+jr,r[0]=c+Er,r[1]=c-r[0]+Er,-1):n>0?(c=n-2*jr,r[0]=c-Gr,r[1]=c-r[0]-Gr,2):(c=n+2*jr,r[0]=c+Gr,r[1]=c-r[0]+Gr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Tr(n,u,r):n>0?(c=n-3*jr,r[0]=c-Lr,r[1]=c-r[0]-Lr,3):(c=n+3*jr,r[0]=c+Lr,r[1]=c-r[0]+Lr,-3):1075388923===u?Tr(n,u,r):n>0?(c=n-4*jr,r[0]=c-Wr,r[1]=c-r[0]-Wr,4):(c=n+4*jr,r[0]=c+Wr,r[1]=c-r[0]+Wr,-4);if(u<1094263291)return Tr(n,u,r);if(u>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(t=Sr(n),c=Hr(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)xr[f]=0|c,c=16777216*(c-xr[f]);for(xr[2]=c,o=3;0===xr[o-1];)o-=1;return i=Or(xr,Mr,e,o),n<0?(r[0]=-Mr[0],r[1]=-Mr[1],-i):(r[0]=Mr[0],r[1]=Mr[1],i)},Vr=yn,Yr=sn,_r=An,kr=Pr,qr=[0,0],zr=function(n){var r;if(r=Vr(n),(r&=2147483647)<=1072243195)return r<1044381696?1:Yr(n,0);if(r>=2146435072)return NaN;switch(3&kr(n,qr)){case 0:return Yr(qr[0],qr[1]);case 1:return-_r(qr[0],qr[1]);case 2:return-Yr(qr[0],qr[1]);default:return _r(qr[0],qr[1])}},Br=yn,Cr=sn,Dr=An,Jr=Pr,Kr=[0,0],Qr=function(n){var r;if(r=Br(n),(r&=2147483647)<=1072243195)return r<1045430272?n:Dr(n,0);if(r>=2146435072)return NaN;switch(3&Jr(n,Kr)){case 0:return Dr(Kr[0],Kr[1]);case 1:return Cr(Kr[0],Kr[1]);case 2:return-Dr(Kr[0],Kr[1]);default:return-Cr(Kr[0],Kr[1])}},Rr=O,Xr=!0===un?1:0,Zr=new P(1),$r=new Rr(Zr.buffer),nt=function(n,r){return Zr[0]=n,$r[Xr]=r>>>0,Zr[0]},rt=yn,tt=nt,et=f,ut=t,ot=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},ft=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},it=.6931471803691238,ct=1.9082149292705877e-10,at=1048575,yt=function(n){var r,t,e,u,o,f,i,c,a,y,l;return 0===n?ut:et(n)||n<0?NaN:(u=0,(t=rt(n))<1048576&&(u-=54,t=rt(n*=0x40000000000000)),t>=2146435072?n+n:(u+=(t>>20)-1023|0,u+=(i=614244+(t&=at)&1048576|0)>>20|0,f=(n=tt(n,t|1072693248^i))-1,(at&2+t)<3?0===f?0===u?0:u*it+u*ct:(o=f*f*(.5-.3333333333333333*f),0===u?f-o:u*it-(o-u*ct-f)):(i=t-398458|0,c=440401-t|0,e=(y=(l=(a=f/(2+f))*a)*l)*ot(y),o=l*ft(y)+e,(i|=c)>0?(r=.5*f*f,0===u?f-(r-a*(r+o)):u*it-(r-(a*(r+o)+u*ct)-f)):0===u?f-a*(f-o):u*it-(a*(f-o)-u*ct-f))))},lt=1.5707963267948966;function pt(n,r){var e,u,i,c,a,y,l,p;if(f(r))return n[0]=NaN,n[1]=NaN,n;if(r<0?(e=-1,r=-r):e=0,0===r)return n[0]=0,n[1]=t,n;if(r>1e9){if(o(r))return-1===e?(u=-lt,i=NaN):(u=lt,i=0),n[0]=u,n[1]=i,n;u=lt-zr(r)/r,i=Qr(r)/r}return r>4?(l=Qr(r),c=zr(r),p=1/(r*r),r<8?(a=function(n){return 0===n?5.489002234213736e-7:5.489002234213736e-7+n*(.00010893658065032867+n*(.006810201324725182+n*(.16700661183132304+n*(1.6208328770153833+n*(5.4593771716181285+4.236128628922166*n)))))}(p)/(r*function(n){return 0===n?5.489002527562557e-7:5.489002527562557e-7+n*(.00011003435715391573+n*(.007017106683227897+n*(.1787920529631499+n*(1.867922579501842+n*(7.308288225055645+n*(8.16496634205391+1*n))))))}(p)),y=p*function(n){return 0===n?7.825790407440903e-9:7.825790407440903e-9+n*(19796387414096365e-22+n*(.00016199979459893403+n*(.005388686814621773+n*(.07485277376284691+n*(.3971802963923375+n*(.6113791099522193+.08710016989731142*n))))))}(p)/function(n){return 0===n?7.825792189335346e-9:7.825792189335346e-9+n*(20265918208634397e-22+n*(.0001732210814741771+n*(.006223963454417684+n*(.09887717612776888+n*(.666296701268988+n*(1.6440220241335535+1*n))))))}(p)):(a=function(n){return 0===n?970507110881952e-28:970507110881952e-28+n*(941779576128513e-25+n*(3.200927900910049e-8+n*(48621543082645475e-22+n*(.00034955644244785906+n*(.01160642294081244+n*(.16030015822231947+n*(.7137152741001467+.4558808734704653*n)))))))}(p)/(r*function(n){return 0===n?970507110881952e-28:970507110881952e-28+n*(9437205903502767e-26+n*(3.21956939101046e-8+n*(4924350643178815e-21+n*(.00035869648188185157+n*(.012225359477197129+n*(.17868554533207454+n*(.9174636118736841+1*n)))))))}(p)),y=p*function(n){return 0===n?31404009894636335e-31:31404009894636335e-31+n*(3859459254302766e-27+n*(1.7040445278204452e-9+n*(3.471311670841167e-7+n*(34894116550227946e-21+n*(.001717182390523479+n*(.03848787676499743+n*(.33041097930563207+.6973599534432762*n)))))))}(p)/function(n){return 0===n?31404009894636335e-31:31404009894636335e-31+n*(3878301660239547e-27+n*(1.7269374896631615e-9+n*(3.5704322344374083e-7+n*(3684755044425611e-20+n*(.0019028442667439953+n*(.04679131942596258+n*(.48785225869530496+n*(1.6854889881101165+1*n))))))))}(p)),u=lt-a*c-y*l,e&&(u=-u),i=a*l-y*c,n[0]=u,n[1]=i,n):(l=r*function(n){return 0===n?1:1+n*(n*(.0009769454381704354+n*(n*(4.625917144270128e-8+-8391678279103039e-26*n)-9757593038436328e-21))-.04134703162294066)}(p=r*r)/function(n){return 0===n?1:1+n*(.01420852393261499+n*(9964121220438756e-20+n*(4.418278428012189e-7+n*(1.279978911799433e-9+20326926619595193e-28*n))))}(p),c=p*function(n){return 0===n?-1:n*(.028915965260755523+n*(n*(3593250514199931e-21+n*(20252400238910228e-27*n-1.3524950491579076e-8))-.0004740072068734079))-1}(p)/function(n){return 0===n?4:4+n*(.051002805623644606+n*(.00031744202477503275+n*(12321035568588342e-22+n*(3.067809975818878e-9+4077460400618806e-27*n))))}(p),e&&(l=-l),u=l,i=.5772156649015329+yt(r)+c,n[0]=u,n[1]=i,n)}return function(n,r){return 1===arguments.length?pt([0,0],n):pt(n,r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).sici=r();
//# sourceMappingURL=browser.js.map
