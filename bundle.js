!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).sici=n()}(this,(function(){"use strict";var r=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,t=r,e=n;var u=function(r){return r===t||r===e};var o=function(r){return r!=r};var f=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var i=function(){return f&&"symbol"==typeof Symbol.toStringTag},a=Object.prototype.toString,c=a;var v=function(r){return c.call(r)},y=Object.prototype.hasOwnProperty;var l=function(r,n){return null!=r&&y.call(r,n)},p="function"==typeof Symbol?Symbol.toStringTag:"",s=l,A=p,w=a;var b=v,N=function(r){var n,t,e;if(null==r)return w.call(r);t=r[A],n=s(r,A);try{r[A]=void 0}catch(n){return w.call(r)}return e=w.call(r),n?r[A]=t:delete r[A],e},d=i()?N:b,h=d,U="function"==typeof Uint32Array;var m="function"==typeof Uint32Array?Uint32Array:null,I=function(r){return U&&r instanceof Uint32Array||"[object Uint32Array]"===h(r)},g=m;var F=function(){var r,n;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,4294967296,4294967297]),r=I(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var S="function"==typeof Uint32Array?Uint32Array:void 0,H=function(){throw new Error("not implemented")},O=F()?S:H,T=d,j="function"==typeof Float64Array;var E="function"==typeof Float64Array?Float64Array:null,G=function(r){return j&&r instanceof Float64Array||"[object Float64Array]"===T(r)},L=E;var W=function(){var r,n;if("function"!=typeof L)return!1;try{n=new L([1,3.14,-3.14,NaN]),r=G(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var x="function"==typeof Float64Array?Float64Array:void 0,M=function(){throw new Error("not implemented")},P=W()?x:M,V=d,Y="function"==typeof Uint8Array;var _="function"==typeof Uint8Array?Uint8Array:null,k=function(r){return Y&&r instanceof Uint8Array||"[object Uint8Array]"===V(r)},q=_;var z=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,256,257]),r=k(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var B="function"==typeof Uint8Array?Uint8Array:void 0,C=function(){throw new Error("not implemented")},D=z()?B:C,J=d,K="function"==typeof Uint16Array;var Q="function"==typeof Uint16Array?Uint16Array:null,R=function(r){return K&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)},X=Q;var Z=function(){var r,n;if("function"!=typeof X)return!1;try{n=new X(n=[1,3.14,-3.14,65536,65537]),r=R(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var $,rr="function"==typeof Uint16Array?Uint16Array:void 0,nr=function(){throw new Error("not implemented")},tr={uint16:Z()?rr:nr,uint8:D};($=new tr.uint16(1))[0]=4660;var er=52===new tr.uint8($.buffer)[0],ur=O,or=!0===er?1:0,fr=new P(1),ir=new ur(fr.buffer);var ar=function(r){return fr[0]=r,ir[or]};var cr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},vr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var yr=function(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*cr(o),e+=u*u*vr(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))},lr=-.16666666666666632;var pr=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(lr+u*t):r-(u*(.5*n-e*t)-n-e*lr)},sr=O,Ar=!0===er?0:1,wr=new P(1),br=new sr(wr.buffer);var Nr,dr,hr=function(r){return wr[0]=r,br[Ar]};!0===er?(Nr=1,dr=0):(Nr=0,dr=1);var Ur=O,mr={HIGH:Nr,LOW:dr},Ir=new P(1),gr=new Ur(Ir.buffer),Fr=mr.HIGH,Sr=mr.LOW;var Hr,Or,Tr=function(r,n){return gr[Fr]=r,gr[Sr]=n,Ir[0]},jr=Tr,Er=Math.floor;!0===er?(Hr=1,Or=0):(Hr=0,Or=1);var Gr=O,Lr={HIGH:Hr,LOW:Or},Wr=new P(1),xr=new Gr(Wr.buffer),Mr=Lr.HIGH,Pr=Lr.LOW;var Vr=function(r,n){return Wr[0]=n,r[0]=xr[Mr],r[1]=xr[Pr],r};var Yr=function(r,n){return 1===arguments.length?Vr([0,0],r):Vr(r,n)},_r=Yr,kr=ar,qr=jr,zr=[0,0];var Br=u,Cr=o,Dr=function(r){return Math.abs(r)};var Jr=function(r,n){return Cr(n)||Br(n)?(r[0]=n,r[1]=0,r):0!==n&&Dr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Kr=function(r,n){return 1===arguments.length?Jr([0,0],r):Jr(r,n)},Qr=ar;var Rr=function(r){var n=Qr(r);return(n=(2146435072&n)>>>20)-1023|0},Xr=r,Zr=n,$r=o,rn=u,nn=function(r,n){var t,e;return _r(zr,r),t=zr[0],t&=2147483647,e=kr(n),qr(t|=e&=2147483648,zr[1])},tn=Kr,en=Rr,un=Yr,on=jr,fn=[0,0],an=[0,0];var cn=function(r,n){var t,e;return 0===r||$r(r)||rn(r)?r:(tn(fn,r),n+=fn[1],(n+=en(r=fn[0]))<-1074?nn(0,r):n>1023?r<0?Zr:Xr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,un(an,r),t=an[0],t&=2148532223,e*on(t|=n+1023<<20,an[1])))},vn=Er,yn=cn,ln=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],pn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],sn=16777216,An=5.960464477539063e-8,wn=hn(20),bn=hn(20),Nn=hn(20),dn=hn(20);function hn(r){var n,t;for(n=[],t=0;t<r;t++)n.push(0);return n}function Un(r,n,t,e,u,o,f,i,a){var c,v,y,l,p,s,A,w,b;for(l=o,b=e[t],w=t,p=0;w>0;p++)v=An*b|0,dn[p]=b-sn*v|0,b=e[w-1]+v,w-=1;if(b=yn(b,u),b-=8*vn(.125*b),b-=A=0|b,y=0,u>0?(A+=p=dn[t-1]>>24-u,dn[t-1]-=p<<24-u,y=dn[t-1]>>23-u):0===u?y=dn[t-1]>>23:b>=.5&&(y=2),y>0){for(A+=1,c=0,p=0;p<t;p++)w=dn[p],0===c?0!==w&&(c=1,dn[p]=16777216-w):dn[p]=16777215-w;if(u>0)switch(u){case 1:dn[t-1]&=8388607;break;case 2:dn[t-1]&=4194303}2===y&&(b=1-b,0!==c&&(b-=yn(1,u)))}if(0===b){for(w=0,p=t-1;p>=o;p--)w|=dn[p];if(0===w){for(s=1;0===dn[o-s];s++);for(p=t+1;p<=t+s;p++){for(a[i+p]=ln[f+p],v=0,w=0;w<=i;w++)v+=r[w]*a[i+(p-w)];e[p]=v}return Un(r,n,t+=s,e,u,o,f,i,a)}}if(0===b)for(t-=1,u-=24;0===dn[t];)t-=1,u-=24;else(b=yn(b,-u))>=sn?(v=An*b|0,dn[t]=b-sn*v|0,u+=24,dn[t+=1]=v):dn[t]=0|b;for(v=yn(1,u),p=t;p>=0;p--)e[p]=v*dn[p],v*=An;for(p=t;p>=0;p--){for(v=0,s=0;s<=l&&s<=t-p;s++)v+=pn[s]*e[p+s];Nn[t-p]=v}for(v=0,p=t;p>=0;p--)v+=Nn[p];for(n[0]=0===y?v:-v,v=Nn[0]-v,p=1;p<=t;p++)v+=Nn[p];return n[1]=0===y?v:-v,7&A}var mn=function(r,n,t,e){var u,o,f,i,a,c,v;for(4,(o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(f=e-1),v=f+4,a=0;a<=v;a++)wn[a]=c<0?0:ln[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*wn[f+(a-c)];bn[a]=u}return 4,Un(r,n,4,bn,i,4,o,f,wn)},In=Math.round,gn=ar;var Fn=ar,Sn=hr,Hn=jr,On=mn,Tn=function(r,n,t){var e,u,o,f,i;return o=r-1.5707963267341256*(e=In(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=o-f,i-(gn(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(gn(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e},jn=1.5707963267341256,En=6077100506506192e-26,Gn=2*En,Ln=3*En,Wn=4*En,xn=[0,0,0],Mn=[0,0];var Pn=function(r,n){var t,e,u,o,f,i,a;if((u=2147483647&Fn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Tn(r,u,n):u<=1073928572?r>0?(a=r-jn,n[0]=a-En,n[1]=a-n[0]-En,1):(a=r+jn,n[0]=a+En,n[1]=a-n[0]+En,-1):r>0?(a=r-2*jn,n[0]=a-Gn,n[1]=a-n[0]-Gn,2):(a=r+2*jn,n[0]=a+Gn,n[1]=a-n[0]+Gn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Tn(r,u,n):r>0?(a=r-3*jn,n[0]=a-Ln,n[1]=a-n[0]-Ln,3):(a=r+3*jn,n[0]=a+Ln,n[1]=a-n[0]+Ln,-3):1075388923===u?Tn(r,u,n):r>0?(a=r-4*jn,n[0]=a-Wn,n[1]=a-n[0]-Wn,4):(a=r+4*jn,n[0]=a+Wn,n[1]=a-n[0]+Wn,-4);if(u<1094263291)return Tn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Sn(r),a=Hn(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)xn[f]=0|a,a=16777216*(a-xn[f]);for(xn[2]=a,o=3;0===xn[o-1];)o-=1;return i=On(xn,Mn,e,o),r<0?(n[0]=-Mn[0],n[1]=-Mn[1],-i):(n[0]=Mn[0],n[1]=Mn[1],i)},Vn=ar,Yn=yr,_n=pr,kn=Pn,qn=[0,0];var zn=function(r){var n;if(n=Vn(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Yn(r,0);if(n>=2146435072)return NaN;switch(3&kn(r,qn)){case 0:return Yn(qn[0],qn[1]);case 1:return-_n(qn[0],qn[1]);case 2:return-Yn(qn[0],qn[1]);default:return _n(qn[0],qn[1])}},Bn=ar,Cn=yr,Dn=pr,Jn=Pn,Kn=[0,0];var Qn=function(r){var n;if(n=Bn(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Dn(r,0);if(n>=2146435072)return NaN;switch(3&Jn(r,Kn)){case 0:return Dn(Kn[0],Kn[1]);case 1:return Cn(Kn[0],Kn[1]);case 2:return-Dn(Kn[0],Kn[1]);default:return-Cn(Kn[0],Kn[1])}},Rn=O,Xn=!0===er?1:0,Zn=new P(1),$n=new Rn(Zn.buffer);var rt=function(r,n){return Zn[0]=r,$n[Xn]=n>>>0,Zn[0]};var nt=ar,tt=rt,et=o,ut=n,ot=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},ft=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},it=.6931471803691238,at=1.9082149292705877e-10,ct=1048575;var vt=u,yt=o,lt=zn,pt=Qn,st=function(r){var n,t,e,u,o,f,i,a,c,v,y;return 0===r?ut:et(r)||r<0?NaN:(u=0,(t=nt(r))<1048576&&(u-=54,t=nt(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(i=(t&=ct)+614244&1048576|0)>>20|0,f=(r=tt(r,t|1072693248^i))-1,(ct&2+t)<3?0===f?0===u?0:u*it+u*at:(o=f*f*(.5-.3333333333333333*f),0===u?f-o:u*it-(o-u*at-f)):(i=t-398458|0,a=440401-t|0,e=(v=(y=(c=f/(2+f))*c)*y)*ot(v),o=y*ft(v)+e,(i|=a)>0?(n=.5*f*f,0===u?f-(n-c*(n+o)):u*it-(n-(c*(n+o)+u*at)-f)):0===u?f-c*(f-o):u*it-(c*(f-o)-u*at-f))))},At=1.5707963267948966,wt=n,bt=function(r){return 0===r?5.489002234213736e-7:5.489002234213736e-7+r*(.00010893658065032867+r*(.006810201324725182+r*(.16700661183132304+r*(1.6208328770153833+r*(5.4593771716181285+4.236128628922166*r)))))},Nt=function(r){return 0===r?5.489002527562557e-7:5.489002527562557e-7+r*(.00011003435715391573+r*(.007017106683227897+r*(.1787920529631499+r*(1.867922579501842+r*(7.308288225055645+r*(8.16496634205391+1*r))))))},dt=function(r){return 0===r?970507110881952e-28:970507110881952e-28+r*(941779576128513e-25+r*(3.200927900910049e-8+r*(48621543082645475e-22+r*(.00034955644244785906+r*(.01160642294081244+r*(.16030015822231947+r*(.7137152741001467+.4558808734704653*r)))))))},ht=function(r){return 0===r?970507110881952e-28:970507110881952e-28+r*(9437205903502767e-26+r*(3.21956939101046e-8+r*(4924350643178815e-21+r*(.00035869648188185157+r*(.012225359477197129+r*(.17868554533207454+r*(.9174636118736841+1*r)))))))},Ut=function(r){return 0===r?7.825790407440903e-9:7.825790407440903e-9+r*(19796387414096365e-22+r*(.00016199979459893403+r*(.005388686814621773+r*(.07485277376284691+r*(.3971802963923375+r*(.6113791099522193+.08710016989731142*r))))))},mt=function(r){return 0===r?7.825792189335346e-9:7.825792189335346e-9+r*(20265918208634397e-22+r*(.0001732210814741771+r*(.006223963454417684+r*(.09887717612776888+r*(.666296701268988+r*(1.6440220241335535+1*r))))))},It=function(r){return 0===r?31404009894636335e-31:31404009894636335e-31+r*(3859459254302766e-27+r*(1.7040445278204452e-9+r*(3.471311670841167e-7+r*(34894116550227946e-21+r*(.001717182390523479+r*(.03848787676499743+r*(.33041097930563207+.6973599534432762*r)))))))},gt=function(r){return 0===r?31404009894636335e-31:31404009894636335e-31+r*(3878301660239547e-27+r*(1.7269374896631615e-9+r*(3.5704322344374083e-7+r*(3684755044425611e-20+r*(.0019028442667439953+r*(.04679131942596258+r*(.48785225869530496+r*(1.6854889881101165+1*r))))))))},Ft=function(r){return 0===r?1:1+r*(r*(.0009769454381704354+r*(r*(4.625917144270128e-8+-8391678279103039e-26*r)-9757593038436328e-21))-.04134703162294066)},St=function(r){return 0===r?1:1+r*(.01420852393261499+r*(9964121220438756e-20+r*(4.418278428012189e-7+r*(1.279978911799433e-9+20326926619595193e-28*r))))},Ht=function(r){return 0===r?-1:r*(.028915965260755523+r*(r*(3593250514199931e-21+r*(20252400238910228e-27*r-1.3524950491579076e-8))-.0004740072068734079))-1},Ot=function(r){return 0===r?4:4+r*(.051002805623644606+r*(.00031744202477503275+r*(12321035568588342e-22+r*(3.067809975818878e-9+4077460400618806e-27*r))))};var Tt=function(r,n){var t,e,u,o,f,i,a,c;if(yt(n))return r[0]=NaN,r[1]=NaN,r;if(n<0?(t=-1,n=-n):t=0,0===n)return r[0]=0,r[1]=wt,r;if(n>1e9){if(vt(n))return-1===t?(e=-At,u=NaN):(e=At,u=0),r[0]=e,r[1]=u,r;e=At-lt(n)/n,u=pt(n)/n}return n>4?(a=pt(n),o=lt(n),c=1/(n*n),n<8?(f=bt(c)/(n*Nt(c)),i=c*Ut(c)/mt(c)):(f=dt(c)/(n*ht(c)),i=c*It(c)/gt(c)),e=At-f*o-i*a,t&&(e=-e),u=f*a-i*o,r[0]=e,r[1]=u,r):(a=n*Ft(c=n*n)/St(c),o=c*Ht(c)/Ot(c),t&&(a=-a),e=a,u=.5772156649015329+st(n)+o,r[0]=e,r[1]=u,r)};var jt=function(r,n){return 1===arguments.length?Tt([0,0],r):Tt(r,n)};return jt}));
//# sourceMappingURL=bundle.js.map
