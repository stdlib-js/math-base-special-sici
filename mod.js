var r=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,t=r,e=n;var u=function(r){return r===t||r===e};var o=function(r){return r!=r};var f=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var i=function(){return f&&"symbol"==typeof Symbol.toStringTag},a=Object.prototype.toString,c=a;var v=function(r){return c.call(r)},y=Object.prototype.hasOwnProperty;var l=function(r,n){return null!=r&&y.call(r,n)},p="function"==typeof Symbol?Symbol.toStringTag:"",A=l,w=p,N=a;var b=v,s=function(r){var n,t,e;if(null==r)return N.call(r);t=r[w],n=A(r,w);try{r[w]=void 0}catch(n){return N.call(r)}return e=N.call(r),n?r[w]=t:delete r[w],e},U=i()?s:b,h=U,m="function"==typeof Uint32Array;var d="function"==typeof Uint32Array?Uint32Array:null,I=function(r){return m&&r instanceof Uint32Array||"[object Uint32Array]"===h(r)},F=d;var S=function(){var r,n;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,4294967296,4294967297]),r=I(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var g="function"==typeof Uint32Array?Uint32Array:void 0,H=function(){throw new Error("not implemented")},O=S()?g:H,E=U,j="function"==typeof Float64Array;var T="function"==typeof Float64Array?Float64Array:null,G=function(r){return j&&r instanceof Float64Array||"[object Float64Array]"===E(r)},L=T;var W=function(){var r,n;if("function"!=typeof L)return!1;try{n=new L([1,3.14,-3.14,NaN]),r=G(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var M="function"==typeof Float64Array?Float64Array:void 0,x=function(){throw new Error("not implemented")},P=W()?M:x,V=U,Y="function"==typeof Uint8Array;var _="function"==typeof Uint8Array?Uint8Array:null,k=function(r){return Y&&r instanceof Uint8Array||"[object Uint8Array]"===V(r)},q=_;var z=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,256,257]),r=k(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var B="function"==typeof Uint8Array?Uint8Array:void 0,C=function(){throw new Error("not implemented")},D=z()?B:C,J=U,K="function"==typeof Uint16Array;var Q="function"==typeof Uint16Array?Uint16Array:null,R=function(r){return K&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)},X=Q;var Z=function(){var r,n;if("function"!=typeof X)return!1;try{n=new X(n=[1,3.14,-3.14,65536,65537]),r=R(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var $,rr="function"==typeof Uint16Array?Uint16Array:void 0,nr=function(){throw new Error("not implemented")},tr={uint16:Z()?rr:nr,uint8:D};($=new tr.uint16(1))[0]=4660;var er=52===new tr.uint8($.buffer)[0],ur=O,or=!0===er?1:0,fr=new P(1),ir=new ur(fr.buffer);var ar=function(r){return fr[0]=r,ir[or]};var cr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},vr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var yr=function(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*cr(o),e+=u*u*vr(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))},lr=-.16666666666666632;var pr=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(lr+u*t):r-(u*(.5*n-e*t)-n-e*lr)},Ar=O,wr=!0===er?0:1,Nr=new P(1),br=new Ar(Nr.buffer);var sr,Ur,hr=function(r){return Nr[0]=r,br[wr]};!0===er?(sr=1,Ur=0):(sr=0,Ur=1);var mr=O,dr={HIGH:sr,LOW:Ur},Ir=new P(1),Fr=new mr(Ir.buffer),Sr=dr.HIGH,gr=dr.LOW;var Hr,Or,Er=function(r,n){return Fr[Sr]=r,Fr[gr]=n,Ir[0]},jr=Er,Tr=Math.floor;!0===er?(Hr=1,Or=0):(Hr=0,Or=1);var Gr=O,Lr={HIGH:Hr,LOW:Or},Wr=new P(1),Mr=new Gr(Wr.buffer),xr=Lr.HIGH,Pr=Lr.LOW;var Vr=function(r,n){return Wr[0]=n,r[0]=Mr[xr],r[1]=Mr[Pr],r};var Yr=function(r,n){return 1===arguments.length?Vr([0,0],r):Vr(r,n)},_r=Yr,kr=ar,qr=jr,zr=[0,0];var Br=u,Cr=o,Dr=function(r){return Math.abs(r)};var Jr=function(r,n){return Cr(n)||Br(n)?(r[0]=n,r[1]=0,r):0!==n&&Dr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Kr=ar;var Qr=function(r){var n=Kr(r);return(n=(2146435072&n)>>>20)-1023|0},Rr=r,Xr=n,Zr=o,$r=u,rn=function(r,n){var t,e;return _r(zr,r),t=zr[0],t&=2147483647,e=kr(n),qr(t|=e&=2147483648,zr[1])},nn=function(r,n){return 1===arguments.length?Jr([0,0],r):Jr(r,n)},tn=Qr,en=Yr,un=jr,on=[0,0],fn=[0,0];var an=function(r,n){var t,e;return 0===r||Zr(r)||$r(r)?r:(nn(on,r),n+=on[1],(n+=tn(r=on[0]))<-1074?rn(0,r):n>1023?r<0?Xr:Rr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,en(fn,r),t=fn[0],t&=2148532223,e*un(t|=n+1023<<20,fn[1])))},cn=Tr,vn=an,yn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ln=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pn=5.960464477539063e-8,An=sn(20),wn=sn(20),Nn=sn(20),bn=sn(20);function sn(r){var n,t;for(n=[],t=0;t<r;t++)n.push(0);return n}function Un(r,n,t,e,u,o,f,i,a){var c,v,y,l,p,A,w,N,b;for(l=o,b=e[t],N=t,p=0;N>0;p++)v=pn*b|0,bn[p]=b-16777216*v|0,b=e[N-1]+v,N-=1;if(b=vn(b,u),b-=8*cn(.125*b),b-=w=0|b,y=0,u>0?(w+=p=bn[t-1]>>24-u,bn[t-1]-=p<<24-u,y=bn[t-1]>>23-u):0===u?y=bn[t-1]>>23:b>=.5&&(y=2),y>0){for(w+=1,c=0,p=0;p<t;p++)N=bn[p],0===c?0!==N&&(c=1,bn[p]=16777216-N):bn[p]=16777215-N;if(u>0)switch(u){case 1:bn[t-1]&=8388607;break;case 2:bn[t-1]&=4194303}2===y&&(b=1-b,0!==c&&(b-=vn(1,u)))}if(0===b){for(N=0,p=t-1;p>=o;p--)N|=bn[p];if(0===N){for(A=1;0===bn[o-A];A++);for(p=t+1;p<=t+A;p++){for(a[i+p]=yn[f+p],v=0,N=0;N<=i;N++)v+=r[N]*a[i+(p-N)];e[p]=v}return Un(r,n,t+=A,e,u,o,f,i,a)}}if(0===b)for(t-=1,u-=24;0===bn[t];)t-=1,u-=24;else(b=vn(b,-u))>=16777216?(v=pn*b|0,bn[t]=b-16777216*v|0,u+=24,bn[t+=1]=v):bn[t]=0|b;for(v=vn(1,u),p=t;p>=0;p--)e[p]=v*bn[p],v*=pn;for(p=t;p>=0;p--){for(v=0,A=0;A<=l&&A<=t-p;A++)v+=ln[A]*e[p+A];Nn[t-p]=v}for(v=0,p=t;p>=0;p--)v+=Nn[p];for(n[0]=0===y?v:-v,v=Nn[0]-v,p=1;p<=t;p++)v+=Nn[p];return n[1]=0===y?v:-v,7&w}var hn=function(r,n,t,e){var u,o,f,i,a,c,v;for(4,(o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(f=e-1),v=f+4,a=0;a<=v;a++)An[a]=c<0?0:yn[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*An[f+(a-c)];wn[a]=u}return 4,Un(r,n,4,wn,i,4,o,f,An)},mn=Math.round,dn=ar;var In=ar,Fn=hr,Sn=jr,gn=hn,Hn=function(r,n,t){var e,u,o,f,i;return o=r-1.5707963267341256*(e=mn(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=o-f,i-(dn(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(dn(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e},On=1.5707963267341256,En=6077100506506192e-26,jn=2*En,Tn=4*En,Gn=[0,0,0],Ln=[0,0];var Wn=function(r,n){var t,e,u,o,f,i,a;if((u=2147483647&In(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Hn(r,u,n):u<=1073928572?r>0?(a=r-On,n[0]=a-En,n[1]=a-n[0]-En,1):(a=r+On,n[0]=a+En,n[1]=a-n[0]+En,-1):r>0?(a=r-2*On,n[0]=a-jn,n[1]=a-n[0]-jn,2):(a=r+2*On,n[0]=a+jn,n[1]=a-n[0]+jn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Hn(r,u,n):r>0?(a=r-3*On,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*On,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?Hn(r,u,n):r>0?(a=r-4*On,n[0]=a-Tn,n[1]=a-n[0]-Tn,4):(a=r+4*On,n[0]=a+Tn,n[1]=a-n[0]+Tn,-4);if(u<1094263291)return Hn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Fn(r),a=Sn(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)Gn[f]=0|a,a=16777216*(a-Gn[f]);for(Gn[2]=a,o=3;0===Gn[o-1];)o-=1;return i=gn(Gn,Ln,e,o),r<0?(n[0]=-Ln[0],n[1]=-Ln[1],-i):(n[0]=Ln[0],n[1]=Ln[1],i)},Mn=ar,xn=yr,Pn=pr,Vn=Wn,Yn=[0,0];var _n=function(r){var n;if(n=Mn(r),(n&=2147483647)<=1072243195)return n<1044381696?1:xn(r,0);if(n>=2146435072)return NaN;switch(3&Vn(r,Yn)){case 0:return xn(Yn[0],Yn[1]);case 1:return-Pn(Yn[0],Yn[1]);case 2:return-xn(Yn[0],Yn[1]);default:return Pn(Yn[0],Yn[1])}},kn=ar,qn=yr,zn=pr,Bn=Wn,Cn=[0,0];var Dn=function(r){var n;if(n=kn(r),(n&=2147483647)<=1072243195)return n<1045430272?r:zn(r,0);if(n>=2146435072)return NaN;switch(3&Bn(r,Cn)){case 0:return zn(Cn[0],Cn[1]);case 1:return qn(Cn[0],Cn[1]);case 2:return-zn(Cn[0],Cn[1]);default:return-qn(Cn[0],Cn[1])}},Jn=O,Kn=!0===er?1:0,Qn=new P(1),Rn=new Jn(Qn.buffer);var Xn=function(r,n){return Qn[0]=r,Rn[Kn]=n>>>0,Qn[0]};var Zn=ar,$n=Xn,rt=o,nt=n,tt=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},et=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},ut=.6931471803691238,ot=1.9082149292705877e-10;var ft=u,it=o,at=_n,ct=Dn,vt=function(r){var n,t,e,u,o,f,i,a,c,v,y;return 0===r?nt:rt(r)||r<0?NaN:(u=0,(t=Zn(r))<1048576&&(u-=54,t=Zn(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(i=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=$n(r,t|1072693248^i))-1,(1048575&2+t)<3?0===f?0===u?0:u*ut+u*ot:(o=f*f*(.5-.3333333333333333*f),0===u?f-o:u*ut-(o-u*ot-f)):(i=t-398458|0,a=440401-t|0,e=(v=(y=(c=f/(2+f))*c)*y)*tt(v),o=y*et(v)+e,(i|=a)>0?(n=.5*f*f,0===u?f-(n-c*(n+o)):u*ut-(n-(c*(n+o)+u*ot)-f)):0===u?f-c*(f-o):u*ut-(c*(f-o)-u*ot-f))))},yt=1.5707963267948966,lt=n,pt=function(r){return 0===r?5.489002234213736e-7:5.489002234213736e-7+r*(.00010893658065032867+r*(.006810201324725182+r*(.16700661183132304+r*(1.6208328770153833+r*(5.4593771716181285+4.236128628922166*r)))))},At=function(r){return 0===r?5.489002527562557e-7:5.489002527562557e-7+r*(.00011003435715391573+r*(.007017106683227897+r*(.1787920529631499+r*(1.867922579501842+r*(7.308288225055645+r*(8.16496634205391+1*r))))))},wt=function(r){return 0===r?970507110881952e-28:970507110881952e-28+r*(941779576128513e-25+r*(3.200927900910049e-8+r*(48621543082645475e-22+r*(.00034955644244785906+r*(.01160642294081244+r*(.16030015822231947+r*(.7137152741001467+.4558808734704653*r)))))))},Nt=function(r){return 0===r?970507110881952e-28:970507110881952e-28+r*(9437205903502767e-26+r*(3.21956939101046e-8+r*(4924350643178815e-21+r*(.00035869648188185157+r*(.012225359477197129+r*(.17868554533207454+r*(.9174636118736841+1*r)))))))},bt=function(r){return 0===r?7.825790407440903e-9:7.825790407440903e-9+r*(19796387414096365e-22+r*(.00016199979459893403+r*(.005388686814621773+r*(.07485277376284691+r*(.3971802963923375+r*(.6113791099522193+.08710016989731142*r))))))},st=function(r){return 0===r?7.825792189335346e-9:7.825792189335346e-9+r*(20265918208634397e-22+r*(.0001732210814741771+r*(.006223963454417684+r*(.09887717612776888+r*(.666296701268988+r*(1.6440220241335535+1*r))))))},Ut=function(r){return 0===r?31404009894636335e-31:31404009894636335e-31+r*(3859459254302766e-27+r*(1.7040445278204452e-9+r*(3.471311670841167e-7+r*(34894116550227946e-21+r*(.001717182390523479+r*(.03848787676499743+r*(.33041097930563207+.6973599534432762*r)))))))},ht=function(r){return 0===r?31404009894636335e-31:31404009894636335e-31+r*(3878301660239547e-27+r*(1.7269374896631615e-9+r*(3.5704322344374083e-7+r*(3684755044425611e-20+r*(.0019028442667439953+r*(.04679131942596258+r*(.48785225869530496+r*(1.6854889881101165+1*r))))))))},mt=function(r){return 0===r?1:1+r*(r*(.0009769454381704354+r*(r*(4.625917144270128e-8+-8391678279103039e-26*r)-9757593038436328e-21))-.04134703162294066)},dt=function(r){return 0===r?1:1+r*(.01420852393261499+r*(9964121220438756e-20+r*(4.418278428012189e-7+r*(1.279978911799433e-9+20326926619595193e-28*r))))},It=function(r){return 0===r?-1:r*(.028915965260755523+r*(r*(3593250514199931e-21+r*(20252400238910228e-27*r-1.3524950491579076e-8))-.0004740072068734079))-1},Ft=function(r){return 0===r?4:4+r*(.051002805623644606+r*(.00031744202477503275+r*(12321035568588342e-22+r*(3.067809975818878e-9+4077460400618806e-27*r))))};var St=function(r,n){var t,e,u,o,f,i,a,c;if(it(n))return r[0]=NaN,r[1]=NaN,r;if(n<0?(t=-1,n=-n):t=0,0===n)return r[0]=0,r[1]=lt,r;if(n>1e9){if(ft(n))return-1===t?(e=-yt,u=NaN):(e=yt,u=0),r[0]=e,r[1]=u,r;e=yt-at(n)/n,u=ct(n)/n}return n>4?(a=ct(n),o=at(n),c=1/(n*n),n<8?(f=pt(c)/(n*At(c)),i=c*bt(c)/st(c)):(f=wt(c)/(n*Nt(c)),i=c*Ut(c)/ht(c)),e=yt-f*o-i*a,t&&(e=-e),u=f*a-i*o,r[0]=e,r[1]=u,r):(a=n*mt(c=n*n)/dt(c),o=c*It(c)/Ft(c),t&&(a=-a),e=a,u=.5772156649015329+vt(n)+o,r[0]=e,r[1]=u,r)};var gt=function(r,n){return 1===arguments.length?St([0,0],r):St(r,n)};export{gt as default};
