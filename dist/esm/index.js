import{gql as r,useQuery as t}from"@apollo/client";import n from"crypto";import e,{useState as o,useEffect as i}from"react";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function a(r,t,n,e){return new(n||(n=Promise))((function(o,i){function a(r){try{s(e.next(r))}catch(r){i(r)}}function h(r){try{s(e.throw(r))}catch(r){i(r)}}function s(r){var t;r.done?o(r.value):(t=r.value,t instanceof n?t:new n((function(r){r(t)}))).then(a,h)}s((e=e.apply(r,t||[])).next())}))}function h(r,t){var n,e,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:h(0),throw:h(1),return:h(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function h(i){return function(h){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,e&&(o=2&i[0]?e.return:i[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,i[1])).done)return o;switch(e=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,e=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(r,a)}catch(r){i=[6,r],e=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,h])}}}function s(r,t){return Object.defineProperty?Object.defineProperty(r,"raw",{value:t}):r.raw=t,r}var f,u={exports:{}};(function(r){var t=function(r){var t,n=new Float64Array(16);if(r)for(t=0;t<r.length;t++)n[t]=r[t];return n},e=function(){throw new Error("no PRNG")},o=new Uint8Array(16),i=new Uint8Array(32);i[0]=9;var a=t(),h=t([1]),s=t([56129,1]),f=t([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),u=t([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),c=t([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),l=t([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),d=t([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function y(r,t,n,e){r[t]=n>>24&255,r[t+1]=n>>16&255,r[t+2]=n>>8&255,r[t+3]=255&n,r[t+4]=e>>24&255,r[t+5]=e>>16&255,r[t+6]=e>>8&255,r[t+7]=255&e}function p(r,t,n,e,o){var i,a=0;for(i=0;i<o;i++)a|=r[t+i]^n[e+i];return(1&a-1>>>8)-1}function g(r,t,n,e){return p(r,t,n,e,16)}function b(r,t,n,e){return p(r,t,n,e,32)}function v(r,t,n,e){!function(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,a=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,h=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,s=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,f=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,l=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,d=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,y=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,p=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,g=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,b=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,v=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,w=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,I=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,A=i,m=a,_=h,U=s,E=f,x=u,S=c,M=l,B=d,L=y,K=p,k=g,z=b,$=v,R=w,T=I,Y=0;Y<20;Y+=2)A^=(o=(z^=(o=(B^=(o=(E^=(o=A+z|0)<<7|o>>>25)+A|0)<<9|o>>>23)+E|0)<<13|o>>>19)+B|0)<<18|o>>>14,x^=(o=(m^=(o=($^=(o=(L^=(o=x+m|0)<<7|o>>>25)+x|0)<<9|o>>>23)+L|0)<<13|o>>>19)+$|0)<<18|o>>>14,K^=(o=(S^=(o=(_^=(o=(R^=(o=K+S|0)<<7|o>>>25)+K|0)<<9|o>>>23)+R|0)<<13|o>>>19)+_|0)<<18|o>>>14,T^=(o=(k^=(o=(M^=(o=(U^=(o=T+k|0)<<7|o>>>25)+T|0)<<9|o>>>23)+U|0)<<13|o>>>19)+M|0)<<18|o>>>14,A^=(o=(U^=(o=(_^=(o=(m^=(o=A+U|0)<<7|o>>>25)+A|0)<<9|o>>>23)+m|0)<<13|o>>>19)+_|0)<<18|o>>>14,x^=(o=(E^=(o=(M^=(o=(S^=(o=x+E|0)<<7|o>>>25)+x|0)<<9|o>>>23)+S|0)<<13|o>>>19)+M|0)<<18|o>>>14,K^=(o=(L^=(o=(B^=(o=(k^=(o=K+L|0)<<7|o>>>25)+K|0)<<9|o>>>23)+k|0)<<13|o>>>19)+B|0)<<18|o>>>14,T^=(o=(R^=(o=($^=(o=(z^=(o=T+R|0)<<7|o>>>25)+T|0)<<9|o>>>23)+z|0)<<13|o>>>19)+$|0)<<18|o>>>14;A=A+i|0,m=m+a|0,_=_+h|0,U=U+s|0,E=E+f|0,x=x+u|0,S=S+c|0,M=M+l|0,B=B+d|0,L=L+y|0,K=K+p|0,k=k+g|0,z=z+b|0,$=$+v|0,R=R+w|0,T=T+I|0,r[0]=A>>>0&255,r[1]=A>>>8&255,r[2]=A>>>16&255,r[3]=A>>>24&255,r[4]=m>>>0&255,r[5]=m>>>8&255,r[6]=m>>>16&255,r[7]=m>>>24&255,r[8]=_>>>0&255,r[9]=_>>>8&255,r[10]=_>>>16&255,r[11]=_>>>24&255,r[12]=U>>>0&255,r[13]=U>>>8&255,r[14]=U>>>16&255,r[15]=U>>>24&255,r[16]=E>>>0&255,r[17]=E>>>8&255,r[18]=E>>>16&255,r[19]=E>>>24&255,r[20]=x>>>0&255,r[21]=x>>>8&255,r[22]=x>>>16&255,r[23]=x>>>24&255,r[24]=S>>>0&255,r[25]=S>>>8&255,r[26]=S>>>16&255,r[27]=S>>>24&255,r[28]=M>>>0&255,r[29]=M>>>8&255,r[30]=M>>>16&255,r[31]=M>>>24&255,r[32]=B>>>0&255,r[33]=B>>>8&255,r[34]=B>>>16&255,r[35]=B>>>24&255,r[36]=L>>>0&255,r[37]=L>>>8&255,r[38]=L>>>16&255,r[39]=L>>>24&255,r[40]=K>>>0&255,r[41]=K>>>8&255,r[42]=K>>>16&255,r[43]=K>>>24&255,r[44]=k>>>0&255,r[45]=k>>>8&255,r[46]=k>>>16&255,r[47]=k>>>24&255,r[48]=z>>>0&255,r[49]=z>>>8&255,r[50]=z>>>16&255,r[51]=z>>>24&255,r[52]=$>>>0&255,r[53]=$>>>8&255,r[54]=$>>>16&255,r[55]=$>>>24&255,r[56]=R>>>0&255,r[57]=R>>>8&255,r[58]=R>>>16&255,r[59]=R>>>24&255,r[60]=T>>>0&255,r[61]=T>>>8&255,r[62]=T>>>16&255,r[63]=T>>>24&255}(r,t,n,e)}function w(r,t,n,e){!function(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,a=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,h=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,s=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,f=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,l=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,d=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,y=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,p=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,g=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,b=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,v=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,w=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,I=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,A=0;A<20;A+=2)i^=(o=(b^=(o=(d^=(o=(f^=(o=i+b|0)<<7|o>>>25)+i|0)<<9|o>>>23)+f|0)<<13|o>>>19)+d|0)<<18|o>>>14,u^=(o=(a^=(o=(v^=(o=(y^=(o=u+a|0)<<7|o>>>25)+u|0)<<9|o>>>23)+y|0)<<13|o>>>19)+v|0)<<18|o>>>14,p^=(o=(c^=(o=(h^=(o=(w^=(o=p+c|0)<<7|o>>>25)+p|0)<<9|o>>>23)+w|0)<<13|o>>>19)+h|0)<<18|o>>>14,I^=(o=(g^=(o=(l^=(o=(s^=(o=I+g|0)<<7|o>>>25)+I|0)<<9|o>>>23)+s|0)<<13|o>>>19)+l|0)<<18|o>>>14,i^=(o=(s^=(o=(h^=(o=(a^=(o=i+s|0)<<7|o>>>25)+i|0)<<9|o>>>23)+a|0)<<13|o>>>19)+h|0)<<18|o>>>14,u^=(o=(f^=(o=(l^=(o=(c^=(o=u+f|0)<<7|o>>>25)+u|0)<<9|o>>>23)+c|0)<<13|o>>>19)+l|0)<<18|o>>>14,p^=(o=(y^=(o=(d^=(o=(g^=(o=p+y|0)<<7|o>>>25)+p|0)<<9|o>>>23)+g|0)<<13|o>>>19)+d|0)<<18|o>>>14,I^=(o=(w^=(o=(v^=(o=(b^=(o=I+w|0)<<7|o>>>25)+I|0)<<9|o>>>23)+b|0)<<13|o>>>19)+v|0)<<18|o>>>14;r[0]=i>>>0&255,r[1]=i>>>8&255,r[2]=i>>>16&255,r[3]=i>>>24&255,r[4]=u>>>0&255,r[5]=u>>>8&255,r[6]=u>>>16&255,r[7]=u>>>24&255,r[8]=p>>>0&255,r[9]=p>>>8&255,r[10]=p>>>16&255,r[11]=p>>>24&255,r[12]=I>>>0&255,r[13]=I>>>8&255,r[14]=I>>>16&255,r[15]=I>>>24&255,r[16]=c>>>0&255,r[17]=c>>>8&255,r[18]=c>>>16&255,r[19]=c>>>24&255,r[20]=l>>>0&255,r[21]=l>>>8&255,r[22]=l>>>16&255,r[23]=l>>>24&255,r[24]=d>>>0&255,r[25]=d>>>8&255,r[26]=d>>>16&255,r[27]=d>>>24&255,r[28]=y>>>0&255,r[29]=y>>>8&255,r[30]=y>>>16&255,r[31]=y>>>24&255}(r,t,n,e)}var I=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function A(r,t,n,e,o,i,a){var h,s,f=new Uint8Array(16),u=new Uint8Array(64);for(s=0;s<16;s++)f[s]=0;for(s=0;s<8;s++)f[s]=i[s];for(;o>=64;){for(v(u,f,a,I),s=0;s<64;s++)r[t+s]=n[e+s]^u[s];for(h=1,s=8;s<16;s++)h=h+(255&f[s])|0,f[s]=255&h,h>>>=8;o-=64,t+=64,e+=64}if(o>0)for(v(u,f,a,I),s=0;s<o;s++)r[t+s]=n[e+s]^u[s];return 0}function m(r,t,n,e,o){var i,a,h=new Uint8Array(16),s=new Uint8Array(64);for(a=0;a<16;a++)h[a]=0;for(a=0;a<8;a++)h[a]=e[a];for(;n>=64;){for(v(s,h,o,I),a=0;a<64;a++)r[t+a]=s[a];for(i=1,a=8;a<16;a++)i=i+(255&h[a])|0,h[a]=255&i,i>>>=8;n-=64,t+=64}if(n>0)for(v(s,h,o,I),a=0;a<n;a++)r[t+a]=s[a];return 0}function _(r,t,n,e,o){var i=new Uint8Array(32);w(i,e,o,I);for(var a=new Uint8Array(8),h=0;h<8;h++)a[h]=e[h+16];return m(r,t,n,a,i)}function U(r,t,n,e,o,i,a){var h=new Uint8Array(32);w(h,i,a,I);for(var s=new Uint8Array(8),f=0;f<8;f++)s[f]=i[f+16];return A(r,t,n,e,o,s,h)}var E=function(r){var t,n,e,o,i,a,h,s;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,t=255&r[0]|(255&r[1])<<8,this.r[0]=8191&t,n=255&r[2]|(255&r[3])<<8,this.r[1]=8191&(t>>>13|n<<3),e=255&r[4]|(255&r[5])<<8,this.r[2]=7939&(n>>>10|e<<6),o=255&r[6]|(255&r[7])<<8,this.r[3]=8191&(e>>>7|o<<9),i=255&r[8]|(255&r[9])<<8,this.r[4]=255&(o>>>4|i<<12),this.r[5]=i>>>1&8190,a=255&r[10]|(255&r[11])<<8,this.r[6]=8191&(i>>>14|a<<2),h=255&r[12]|(255&r[13])<<8,this.r[7]=8065&(a>>>11|h<<5),s=255&r[14]|(255&r[15])<<8,this.r[8]=8191&(h>>>8|s<<8),this.r[9]=s>>>5&127,this.pad[0]=255&r[16]|(255&r[17])<<8,this.pad[1]=255&r[18]|(255&r[19])<<8,this.pad[2]=255&r[20]|(255&r[21])<<8,this.pad[3]=255&r[22]|(255&r[23])<<8,this.pad[4]=255&r[24]|(255&r[25])<<8,this.pad[5]=255&r[26]|(255&r[27])<<8,this.pad[6]=255&r[28]|(255&r[29])<<8,this.pad[7]=255&r[30]|(255&r[31])<<8};function x(r,t,n,e,o,i){var a=new E(i);return a.update(n,e,o),a.finish(r,t),0}function S(r,t,n,e,o,i){var a=new Uint8Array(16);return x(a,0,n,e,o,i),g(r,t,a,0)}function M(r,t,n,e,o){var i;if(n<32)return-1;for(U(r,0,t,0,n,e,o),x(r,16,r,32,n-32,r),i=0;i<16;i++)r[i]=0;return 0}function B(r,t,n,e,o){var i,a=new Uint8Array(32);if(n<32)return-1;if(_(a,0,32,e,o),0!==S(t,16,t,32,n-32,a))return-1;for(U(r,0,t,0,n,e,o),i=0;i<32;i++)r[i]=0;return 0}function L(r,t){var n;for(n=0;n<16;n++)r[n]=0|t[n]}function K(r){var t,n,e=1;for(t=0;t<16;t++)n=r[t]+e+65535,e=Math.floor(n/65536),r[t]=n-65536*e;r[0]+=e-1+37*(e-1)}function k(r,t,n){for(var e,o=~(n-1),i=0;i<16;i++)e=o&(r[i]^t[i]),r[i]^=e,t[i]^=e}function z(r,n){var e,o,i,a=t(),h=t();for(e=0;e<16;e++)h[e]=n[e];for(K(h),K(h),K(h),o=0;o<2;o++){for(a[0]=h[0]-65517,e=1;e<15;e++)a[e]=h[e]-65535-(a[e-1]>>16&1),a[e-1]&=65535;a[15]=h[15]-32767-(a[14]>>16&1),i=a[15]>>16&1,a[14]&=65535,k(h,a,1-i)}for(e=0;e<16;e++)r[2*e]=255&h[e],r[2*e+1]=h[e]>>8}function $(r,t){var n=new Uint8Array(32),e=new Uint8Array(32);return z(n,r),z(e,t),b(n,0,e,0)}function R(r){var t=new Uint8Array(32);return z(t,r),1&t[0]}function T(r,t){var n;for(n=0;n<16;n++)r[n]=t[2*n]+(t[2*n+1]<<8);r[15]&=32767}function Y(r,t,n){for(var e=0;e<16;e++)r[e]=t[e]+n[e]}function O(r,t,n){for(var e=0;e<16;e++)r[e]=t[e]-n[e]}function P(r,t,n){var e,o,i=0,a=0,h=0,s=0,f=0,u=0,c=0,l=0,d=0,y=0,p=0,g=0,b=0,v=0,w=0,I=0,A=0,m=0,_=0,U=0,E=0,x=0,S=0,M=0,B=0,L=0,K=0,k=0,z=0,$=0,R=0,T=n[0],Y=n[1],O=n[2],P=n[3],D=n[4],q=n[5],N=n[6],C=n[7],G=n[8],F=n[9],Z=n[10],j=n[11],J=n[12],V=n[13],X=n[14],H=n[15];i+=(e=t[0])*T,a+=e*Y,h+=e*O,s+=e*P,f+=e*D,u+=e*q,c+=e*N,l+=e*C,d+=e*G,y+=e*F,p+=e*Z,g+=e*j,b+=e*J,v+=e*V,w+=e*X,I+=e*H,a+=(e=t[1])*T,h+=e*Y,s+=e*O,f+=e*P,u+=e*D,c+=e*q,l+=e*N,d+=e*C,y+=e*G,p+=e*F,g+=e*Z,b+=e*j,v+=e*J,w+=e*V,I+=e*X,A+=e*H,h+=(e=t[2])*T,s+=e*Y,f+=e*O,u+=e*P,c+=e*D,l+=e*q,d+=e*N,y+=e*C,p+=e*G,g+=e*F,b+=e*Z,v+=e*j,w+=e*J,I+=e*V,A+=e*X,m+=e*H,s+=(e=t[3])*T,f+=e*Y,u+=e*O,c+=e*P,l+=e*D,d+=e*q,y+=e*N,p+=e*C,g+=e*G,b+=e*F,v+=e*Z,w+=e*j,I+=e*J,A+=e*V,m+=e*X,_+=e*H,f+=(e=t[4])*T,u+=e*Y,c+=e*O,l+=e*P,d+=e*D,y+=e*q,p+=e*N,g+=e*C,b+=e*G,v+=e*F,w+=e*Z,I+=e*j,A+=e*J,m+=e*V,_+=e*X,U+=e*H,u+=(e=t[5])*T,c+=e*Y,l+=e*O,d+=e*P,y+=e*D,p+=e*q,g+=e*N,b+=e*C,v+=e*G,w+=e*F,I+=e*Z,A+=e*j,m+=e*J,_+=e*V,U+=e*X,E+=e*H,c+=(e=t[6])*T,l+=e*Y,d+=e*O,y+=e*P,p+=e*D,g+=e*q,b+=e*N,v+=e*C,w+=e*G,I+=e*F,A+=e*Z,m+=e*j,_+=e*J,U+=e*V,E+=e*X,x+=e*H,l+=(e=t[7])*T,d+=e*Y,y+=e*O,p+=e*P,g+=e*D,b+=e*q,v+=e*N,w+=e*C,I+=e*G,A+=e*F,m+=e*Z,_+=e*j,U+=e*J,E+=e*V,x+=e*X,S+=e*H,d+=(e=t[8])*T,y+=e*Y,p+=e*O,g+=e*P,b+=e*D,v+=e*q,w+=e*N,I+=e*C,A+=e*G,m+=e*F,_+=e*Z,U+=e*j,E+=e*J,x+=e*V,S+=e*X,M+=e*H,y+=(e=t[9])*T,p+=e*Y,g+=e*O,b+=e*P,v+=e*D,w+=e*q,I+=e*N,A+=e*C,m+=e*G,_+=e*F,U+=e*Z,E+=e*j,x+=e*J,S+=e*V,M+=e*X,B+=e*H,p+=(e=t[10])*T,g+=e*Y,b+=e*O,v+=e*P,w+=e*D,I+=e*q,A+=e*N,m+=e*C,_+=e*G,U+=e*F,E+=e*Z,x+=e*j,S+=e*J,M+=e*V,B+=e*X,L+=e*H,g+=(e=t[11])*T,b+=e*Y,v+=e*O,w+=e*P,I+=e*D,A+=e*q,m+=e*N,_+=e*C,U+=e*G,E+=e*F,x+=e*Z,S+=e*j,M+=e*J,B+=e*V,L+=e*X,K+=e*H,b+=(e=t[12])*T,v+=e*Y,w+=e*O,I+=e*P,A+=e*D,m+=e*q,_+=e*N,U+=e*C,E+=e*G,x+=e*F,S+=e*Z,M+=e*j,B+=e*J,L+=e*V,K+=e*X,k+=e*H,v+=(e=t[13])*T,w+=e*Y,I+=e*O,A+=e*P,m+=e*D,_+=e*q,U+=e*N,E+=e*C,x+=e*G,S+=e*F,M+=e*Z,B+=e*j,L+=e*J,K+=e*V,k+=e*X,z+=e*H,w+=(e=t[14])*T,I+=e*Y,A+=e*O,m+=e*P,_+=e*D,U+=e*q,E+=e*N,x+=e*C,S+=e*G,M+=e*F,B+=e*Z,L+=e*j,K+=e*J,k+=e*V,z+=e*X,$+=e*H,I+=(e=t[15])*T,a+=38*(m+=e*O),h+=38*(_+=e*P),s+=38*(U+=e*D),f+=38*(E+=e*q),u+=38*(x+=e*N),c+=38*(S+=e*C),l+=38*(M+=e*G),d+=38*(B+=e*F),y+=38*(L+=e*Z),p+=38*(K+=e*j),g+=38*(k+=e*J),b+=38*(z+=e*V),v+=38*($+=e*X),w+=38*(R+=e*H),i=(e=(i+=38*(A+=e*Y))+(o=1)+65535)-65536*(o=Math.floor(e/65536)),a=(e=a+o+65535)-65536*(o=Math.floor(e/65536)),h=(e=h+o+65535)-65536*(o=Math.floor(e/65536)),s=(e=s+o+65535)-65536*(o=Math.floor(e/65536)),f=(e=f+o+65535)-65536*(o=Math.floor(e/65536)),u=(e=u+o+65535)-65536*(o=Math.floor(e/65536)),c=(e=c+o+65535)-65536*(o=Math.floor(e/65536)),l=(e=l+o+65535)-65536*(o=Math.floor(e/65536)),d=(e=d+o+65535)-65536*(o=Math.floor(e/65536)),y=(e=y+o+65535)-65536*(o=Math.floor(e/65536)),p=(e=p+o+65535)-65536*(o=Math.floor(e/65536)),g=(e=g+o+65535)-65536*(o=Math.floor(e/65536)),b=(e=b+o+65535)-65536*(o=Math.floor(e/65536)),v=(e=v+o+65535)-65536*(o=Math.floor(e/65536)),w=(e=w+o+65535)-65536*(o=Math.floor(e/65536)),I=(e=I+o+65535)-65536*(o=Math.floor(e/65536)),i=(e=(i+=o-1+37*(o-1))+(o=1)+65535)-65536*(o=Math.floor(e/65536)),a=(e=a+o+65535)-65536*(o=Math.floor(e/65536)),h=(e=h+o+65535)-65536*(o=Math.floor(e/65536)),s=(e=s+o+65535)-65536*(o=Math.floor(e/65536)),f=(e=f+o+65535)-65536*(o=Math.floor(e/65536)),u=(e=u+o+65535)-65536*(o=Math.floor(e/65536)),c=(e=c+o+65535)-65536*(o=Math.floor(e/65536)),l=(e=l+o+65535)-65536*(o=Math.floor(e/65536)),d=(e=d+o+65535)-65536*(o=Math.floor(e/65536)),y=(e=y+o+65535)-65536*(o=Math.floor(e/65536)),p=(e=p+o+65535)-65536*(o=Math.floor(e/65536)),g=(e=g+o+65535)-65536*(o=Math.floor(e/65536)),b=(e=b+o+65535)-65536*(o=Math.floor(e/65536)),v=(e=v+o+65535)-65536*(o=Math.floor(e/65536)),w=(e=w+o+65535)-65536*(o=Math.floor(e/65536)),I=(e=I+o+65535)-65536*(o=Math.floor(e/65536)),i+=o-1+37*(o-1),r[0]=i,r[1]=a,r[2]=h,r[3]=s,r[4]=f,r[5]=u,r[6]=c,r[7]=l,r[8]=d,r[9]=y,r[10]=p,r[11]=g,r[12]=b,r[13]=v,r[14]=w,r[15]=I}function D(r,t){P(r,t,t)}function q(r,n){var e,o=t();for(e=0;e<16;e++)o[e]=n[e];for(e=253;e>=0;e--)D(o,o),2!==e&&4!==e&&P(o,o,n);for(e=0;e<16;e++)r[e]=o[e]}function N(r,n){var e,o=t();for(e=0;e<16;e++)o[e]=n[e];for(e=250;e>=0;e--)D(o,o),1!==e&&P(o,o,n);for(e=0;e<16;e++)r[e]=o[e]}function C(r,n,e){var o,i,a=new Uint8Array(32),h=new Float64Array(80),f=t(),u=t(),c=t(),l=t(),d=t(),y=t();for(i=0;i<31;i++)a[i]=n[i];for(a[31]=127&n[31]|64,a[0]&=248,T(h,e),i=0;i<16;i++)u[i]=h[i],l[i]=f[i]=c[i]=0;for(f[0]=l[0]=1,i=254;i>=0;--i)k(f,u,o=a[i>>>3]>>>(7&i)&1),k(c,l,o),Y(d,f,c),O(f,f,c),Y(c,u,l),O(u,u,l),D(l,d),D(y,f),P(f,c,f),P(c,u,d),Y(d,f,c),O(f,f,c),D(u,f),O(c,l,y),P(f,c,s),Y(f,f,l),P(c,c,f),P(f,l,y),P(l,u,h),D(u,d),k(f,u,o),k(c,l,o);for(i=0;i<16;i++)h[i+16]=f[i],h[i+32]=c[i],h[i+48]=u[i],h[i+64]=l[i];var p=h.subarray(32),g=h.subarray(16);return q(p,p),P(g,g,p),z(r,g),0}function G(r,t){return C(r,t,i)}function F(r,t){return e(t,32),G(r,t)}function Z(r,t,n){var e=new Uint8Array(32);return C(e,n,t),w(r,o,e,I)}E.prototype.blocks=function(r,t,n){for(var e,o,i,a,h,s,f,u,c,l,d,y,p,g,b,v,w,I,A,m=this.fin?0:2048,_=this.h[0],U=this.h[1],E=this.h[2],x=this.h[3],S=this.h[4],M=this.h[5],B=this.h[6],L=this.h[7],K=this.h[8],k=this.h[9],z=this.r[0],$=this.r[1],R=this.r[2],T=this.r[3],Y=this.r[4],O=this.r[5],P=this.r[6],D=this.r[7],q=this.r[8],N=this.r[9];n>=16;)l=c=0,l+=(_+=8191&(e=255&r[t+0]|(255&r[t+1])<<8))*z,l+=(U+=8191&(e>>>13|(o=255&r[t+2]|(255&r[t+3])<<8)<<3))*(5*N),l+=(E+=8191&(o>>>10|(i=255&r[t+4]|(255&r[t+5])<<8)<<6))*(5*q),l+=(x+=8191&(i>>>7|(a=255&r[t+6]|(255&r[t+7])<<8)<<9))*(5*D),c=(l+=(S+=8191&(a>>>4|(h=255&r[t+8]|(255&r[t+9])<<8)<<12))*(5*P))>>>13,l&=8191,l+=(M+=h>>>1&8191)*(5*O),l+=(B+=8191&(h>>>14|(s=255&r[t+10]|(255&r[t+11])<<8)<<2))*(5*Y),l+=(L+=8191&(s>>>11|(f=255&r[t+12]|(255&r[t+13])<<8)<<5))*(5*T),l+=(K+=8191&(f>>>8|(u=255&r[t+14]|(255&r[t+15])<<8)<<8))*(5*R),d=c+=(l+=(k+=u>>>5|m)*(5*$))>>>13,d+=_*$,d+=U*z,d+=E*(5*N),d+=x*(5*q),c=(d+=S*(5*D))>>>13,d&=8191,d+=M*(5*P),d+=B*(5*O),d+=L*(5*Y),d+=K*(5*T),c+=(d+=k*(5*R))>>>13,d&=8191,y=c,y+=_*R,y+=U*$,y+=E*z,y+=x*(5*N),c=(y+=S*(5*q))>>>13,y&=8191,y+=M*(5*D),y+=B*(5*P),y+=L*(5*O),y+=K*(5*Y),p=c+=(y+=k*(5*T))>>>13,p+=_*T,p+=U*R,p+=E*$,p+=x*z,c=(p+=S*(5*N))>>>13,p&=8191,p+=M*(5*q),p+=B*(5*D),p+=L*(5*P),p+=K*(5*O),g=c+=(p+=k*(5*Y))>>>13,g+=_*Y,g+=U*T,g+=E*R,g+=x*$,c=(g+=S*z)>>>13,g&=8191,g+=M*(5*N),g+=B*(5*q),g+=L*(5*D),g+=K*(5*P),b=c+=(g+=k*(5*O))>>>13,b+=_*O,b+=U*Y,b+=E*T,b+=x*R,c=(b+=S*$)>>>13,b&=8191,b+=M*z,b+=B*(5*N),b+=L*(5*q),b+=K*(5*D),v=c+=(b+=k*(5*P))>>>13,v+=_*P,v+=U*O,v+=E*Y,v+=x*T,c=(v+=S*R)>>>13,v&=8191,v+=M*$,v+=B*z,v+=L*(5*N),v+=K*(5*q),w=c+=(v+=k*(5*D))>>>13,w+=_*D,w+=U*P,w+=E*O,w+=x*Y,c=(w+=S*T)>>>13,w&=8191,w+=M*R,w+=B*$,w+=L*z,w+=K*(5*N),I=c+=(w+=k*(5*q))>>>13,I+=_*q,I+=U*D,I+=E*P,I+=x*O,c=(I+=S*Y)>>>13,I&=8191,I+=M*T,I+=B*R,I+=L*$,I+=K*z,A=c+=(I+=k*(5*N))>>>13,A+=_*N,A+=U*q,A+=E*D,A+=x*P,c=(A+=S*O)>>>13,A&=8191,A+=M*Y,A+=B*T,A+=L*R,A+=K*$,_=l=8191&(c=(c=((c+=(A+=k*z)>>>13)<<2)+c|0)+(l&=8191)|0),U=d+=c>>>=13,E=y&=8191,x=p&=8191,S=g&=8191,M=b&=8191,B=v&=8191,L=w&=8191,K=I&=8191,k=A&=8191,t+=16,n-=16;this.h[0]=_,this.h[1]=U,this.h[2]=E,this.h[3]=x,this.h[4]=S,this.h[5]=M,this.h[6]=B,this.h[7]=L,this.h[8]=K,this.h[9]=k},E.prototype.finish=function(r,t){var n,e,o,i,a=new Uint16Array(10);if(this.leftover){for(i=this.leftover,this.buffer[i++]=1;i<16;i++)this.buffer[i]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,i=2;i<10;i++)this.h[i]+=n,n=this.h[i]>>>13,this.h[i]&=8191;for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,a[0]=this.h[0]+5,n=a[0]>>>13,a[0]&=8191,i=1;i<10;i++)a[i]=this.h[i]+n,n=a[i]>>>13,a[i]&=8191;for(a[9]-=8192,e=(1^n)-1,i=0;i<10;i++)a[i]&=e;for(e=~e,i=0;i<10;i++)this.h[i]=this.h[i]&e|a[i];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),o=this.h[0]+this.pad[0],this.h[0]=65535&o,i=1;i<8;i++)o=(this.h[i]+this.pad[i]|0)+(o>>>16)|0,this.h[i]=65535&o;r[t+0]=this.h[0]>>>0&255,r[t+1]=this.h[0]>>>8&255,r[t+2]=this.h[1]>>>0&255,r[t+3]=this.h[1]>>>8&255,r[t+4]=this.h[2]>>>0&255,r[t+5]=this.h[2]>>>8&255,r[t+6]=this.h[3]>>>0&255,r[t+7]=this.h[3]>>>8&255,r[t+8]=this.h[4]>>>0&255,r[t+9]=this.h[4]>>>8&255,r[t+10]=this.h[5]>>>0&255,r[t+11]=this.h[5]>>>8&255,r[t+12]=this.h[6]>>>0&255,r[t+13]=this.h[6]>>>8&255,r[t+14]=this.h[7]>>>0&255,r[t+15]=this.h[7]>>>8&255},E.prototype.update=function(r,t,n){var e,o;if(this.leftover){for((o=16-this.leftover)>n&&(o=n),e=0;e<o;e++)this.buffer[this.leftover+e]=r[t+e];if(n-=o,t+=o,this.leftover+=o,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(n>=16&&(o=n-n%16,this.blocks(r,t,o),t+=o,n-=o),n){for(e=0;e<n;e++)this.buffer[this.leftover+e]=r[t+e];this.leftover+=n}};var j=M,J=B,V=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function X(r,t,n,e){for(var o,i,a,h,s,f,u,c,l,d,y,p,g,b,v,w,I,A,m,_,U,E,x,S,M,B,L=new Int32Array(16),K=new Int32Array(16),k=r[0],z=r[1],$=r[2],R=r[3],T=r[4],Y=r[5],O=r[6],P=r[7],D=t[0],q=t[1],N=t[2],C=t[3],G=t[4],F=t[5],Z=t[6],j=t[7],J=0;e>=128;){for(m=0;m<16;m++)_=8*m+J,L[m]=n[_+0]<<24|n[_+1]<<16|n[_+2]<<8|n[_+3],K[m]=n[_+4]<<24|n[_+5]<<16|n[_+6]<<8|n[_+7];for(m=0;m<80;m++)if(o=k,i=z,a=$,h=R,s=T,f=Y,u=O,l=D,d=q,y=N,p=C,g=G,b=F,v=Z,x=65535&(E=j),S=E>>>16,M=65535&(U=P),B=U>>>16,x+=65535&(E=(G>>>14|T<<18)^(G>>>18|T<<14)^(T>>>9|G<<23)),S+=E>>>16,M+=65535&(U=(T>>>14|G<<18)^(T>>>18|G<<14)^(G>>>9|T<<23)),B+=U>>>16,x+=65535&(E=G&F^~G&Z),S+=E>>>16,M+=65535&(U=T&Y^~T&O),B+=U>>>16,x+=65535&(E=V[2*m+1]),S+=E>>>16,M+=65535&(U=V[2*m]),B+=U>>>16,U=L[m%16],S+=(E=K[m%16])>>>16,M+=65535&U,B+=U>>>16,M+=(S+=(x+=65535&E)>>>16)>>>16,x=65535&(E=A=65535&x|S<<16),S=E>>>16,M=65535&(U=I=65535&M|(B+=M>>>16)<<16),B=U>>>16,x+=65535&(E=(D>>>28|k<<4)^(k>>>2|D<<30)^(k>>>7|D<<25)),S+=E>>>16,M+=65535&(U=(k>>>28|D<<4)^(D>>>2|k<<30)^(D>>>7|k<<25)),B+=U>>>16,S+=(E=D&q^D&N^q&N)>>>16,M+=65535&(U=k&z^k&$^z&$),B+=U>>>16,c=65535&(M+=(S+=(x+=65535&E)>>>16)>>>16)|(B+=M>>>16)<<16,w=65535&x|S<<16,x=65535&(E=p),S=E>>>16,M=65535&(U=h),B=U>>>16,S+=(E=A)>>>16,M+=65535&(U=I),B+=U>>>16,z=o,$=i,R=a,T=h=65535&(M+=(S+=(x+=65535&E)>>>16)>>>16)|(B+=M>>>16)<<16,Y=s,O=f,P=u,k=c,q=l,N=d,C=y,G=p=65535&x|S<<16,F=g,Z=b,j=v,D=w,m%16==15)for(_=0;_<16;_++)U=L[_],x=65535&(E=K[_]),S=E>>>16,M=65535&U,B=U>>>16,U=L[(_+9)%16],x+=65535&(E=K[(_+9)%16]),S+=E>>>16,M+=65535&U,B+=U>>>16,I=L[(_+1)%16],x+=65535&(E=((A=K[(_+1)%16])>>>1|I<<31)^(A>>>8|I<<24)^(A>>>7|I<<25)),S+=E>>>16,M+=65535&(U=(I>>>1|A<<31)^(I>>>8|A<<24)^I>>>7),B+=U>>>16,I=L[(_+14)%16],S+=(E=((A=K[(_+14)%16])>>>19|I<<13)^(I>>>29|A<<3)^(A>>>6|I<<26))>>>16,M+=65535&(U=(I>>>19|A<<13)^(A>>>29|I<<3)^I>>>6),B+=U>>>16,B+=(M+=(S+=(x+=65535&E)>>>16)>>>16)>>>16,L[_]=65535&M|B<<16,K[_]=65535&x|S<<16;x=65535&(E=D),S=E>>>16,M=65535&(U=k),B=U>>>16,U=r[0],S+=(E=t[0])>>>16,M+=65535&U,B+=U>>>16,B+=(M+=(S+=(x+=65535&E)>>>16)>>>16)>>>16,r[0]=k=65535&M|B<<16,t[0]=D=65535&x|S<<16,x=65535&(E=q),S=E>>>16,M=65535&(U=z),B=U>>>16,U=r[1],S+=(E=t[1])>>>16,M+=65535&U,B+=U>>>16,B+=(M+=(S+=(x+=65535&E)>>>16)>>>16)>>>16,r[1]=z=65535&M|B<<16,t[1]=q=65535&x|S<<16,x=65535&(E=N),S=E>>>16,M=65535&(U=$),B=U>>>16,U=r[2],S+=(E=t[2])>>>16,M+=65535&U,B+=U>>>16,B+=(M+=(S+=(x+=65535&E)>>>16)>>>16)>>>16,r[2]=$=65535&M|B<<16,t[2]=N=65535&x|S<<16,x=65535&(E=C),S=E>>>16,M=65535&(U=R),B=U>>>16,U=r[3],S+=(E=t[3])>>>16,M+=65535&U,B+=U>>>16,B+=(M+=(S+=(x+=65535&E)>>>16)>>>16)>>>16,r[3]=R=65535&M|B<<16,t[3]=C=65535&x|S<<16,x=65535&(E=G),S=E>>>16,M=65535&(U=T),B=U>>>16,U=r[4],S+=(E=t[4])>>>16,M+=65535&U,B+=U>>>16,B+=(M+=(S+=(x+=65535&E)>>>16)>>>16)>>>16,r[4]=T=65535&M|B<<16,t[4]=G=65535&x|S<<16,x=65535&(E=F),S=E>>>16,M=65535&(U=Y),B=U>>>16,U=r[5],S+=(E=t[5])>>>16,M+=65535&U,B+=U>>>16,B+=(M+=(S+=(x+=65535&E)>>>16)>>>16)>>>16,r[5]=Y=65535&M|B<<16,t[5]=F=65535&x|S<<16,x=65535&(E=Z),S=E>>>16,M=65535&(U=O),B=U>>>16,U=r[6],S+=(E=t[6])>>>16,M+=65535&U,B+=U>>>16,B+=(M+=(S+=(x+=65535&E)>>>16)>>>16)>>>16,r[6]=O=65535&M|B<<16,t[6]=Z=65535&x|S<<16,x=65535&(E=j),S=E>>>16,M=65535&(U=P),B=U>>>16,U=r[7],S+=(E=t[7])>>>16,M+=65535&U,B+=U>>>16,B+=(M+=(S+=(x+=65535&E)>>>16)>>>16)>>>16,r[7]=P=65535&M|B<<16,t[7]=j=65535&x|S<<16,J+=128,e-=128}return e}function H(r,t,n){var e,o=new Int32Array(8),i=new Int32Array(8),a=new Uint8Array(256),h=n;for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,i[0]=4089235720,i[1]=2227873595,i[2]=4271175723,i[3]=1595750129,i[4]=2917565137,i[5]=725511199,i[6]=4215389547,i[7]=327033209,X(o,i,t,n),n%=128,e=0;e<n;e++)a[e]=t[h-n+e];for(a[n]=128,a[(n=256-128*(n<112?1:0))-9]=0,y(a,n-8,h/536870912|0,h<<3),X(o,i,a,n),e=0;e<8;e++)y(r,8*e,o[e],i[e]);return 0}function Q(r,n){var e=t(),o=t(),i=t(),a=t(),h=t(),s=t(),f=t(),c=t(),l=t();O(e,r[1],r[0]),O(l,n[1],n[0]),P(e,e,l),Y(o,r[0],r[1]),Y(l,n[0],n[1]),P(o,o,l),P(i,r[3],n[3]),P(i,i,u),P(a,r[2],n[2]),Y(a,a,a),O(h,o,e),O(s,a,i),Y(f,a,i),Y(c,o,e),P(r[0],h,s),P(r[1],c,f),P(r[2],f,s),P(r[3],h,c)}function W(r,t,n){var e;for(e=0;e<4;e++)k(r[e],t[e],n)}function rr(r,n){var e=t(),o=t(),i=t();q(i,n[2]),P(e,n[0],i),P(o,n[1],i),z(r,o),r[31]^=R(e)<<7}function tr(r,t,n){var e,o;for(L(r[0],a),L(r[1],h),L(r[2],h),L(r[3],a),o=255;o>=0;--o)W(r,t,e=n[o/8|0]>>(7&o)&1),Q(t,r),Q(r,r),W(r,t,e)}function nr(r,n){var e=[t(),t(),t(),t()];L(e[0],c),L(e[1],l),L(e[2],h),P(e[3],c,l),tr(r,e,n)}function er(r,n,o){var i,a=new Uint8Array(64),h=[t(),t(),t(),t()];for(o||e(n,32),H(a,n,32),a[0]&=248,a[31]&=127,a[31]|=64,nr(h,a),rr(r,h),i=0;i<32;i++)n[i+32]=r[i];return 0}var or=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function ir(r,t){var n,e,o,i;for(e=63;e>=32;--e){for(n=0,o=e-32,i=e-12;o<i;++o)t[o]+=n-16*t[e]*or[o-(e-32)],n=Math.floor((t[o]+128)/256),t[o]-=256*n;t[o]+=n,t[e]=0}for(n=0,o=0;o<32;o++)t[o]+=n-(t[31]>>4)*or[o],n=t[o]>>8,t[o]&=255;for(o=0;o<32;o++)t[o]-=n*or[o];for(e=0;e<32;e++)t[e+1]+=t[e]>>8,r[e]=255&t[e]}function ar(r){var t,n=new Float64Array(64);for(t=0;t<64;t++)n[t]=r[t];for(t=0;t<64;t++)r[t]=0;ir(r,n)}function hr(r,n,e,o){var i,a,h=new Uint8Array(64),s=new Uint8Array(64),f=new Uint8Array(64),u=new Float64Array(64),c=[t(),t(),t(),t()];H(h,o,32),h[0]&=248,h[31]&=127,h[31]|=64;var l=e+64;for(i=0;i<e;i++)r[64+i]=n[i];for(i=0;i<32;i++)r[32+i]=h[32+i];for(H(f,r.subarray(32),e+32),ar(f),nr(c,f),rr(r,c),i=32;i<64;i++)r[i]=o[i];for(H(s,r,e+64),ar(s),i=0;i<64;i++)u[i]=0;for(i=0;i<32;i++)u[i]=f[i];for(i=0;i<32;i++)for(a=0;a<32;a++)u[i+a]+=s[i]*h[a];return ir(r.subarray(32),u),l}function sr(r,n,e,o){var i,s=new Uint8Array(32),u=new Uint8Array(64),c=[t(),t(),t(),t()],l=[t(),t(),t(),t()];if(e<64)return-1;if(function(r,n){var e=t(),o=t(),i=t(),s=t(),u=t(),c=t(),l=t();return L(r[2],h),T(r[1],n),D(i,r[1]),P(s,i,f),O(i,i,r[2]),Y(s,r[2],s),D(u,s),D(c,u),P(l,c,u),P(e,l,i),P(e,e,s),N(e,e),P(e,e,i),P(e,e,s),P(e,e,s),P(r[0],e,s),D(o,r[0]),P(o,o,s),$(o,i)&&P(r[0],r[0],d),D(o,r[0]),P(o,o,s),$(o,i)?-1:(R(r[0])===n[31]>>7&&O(r[0],a,r[0]),P(r[3],r[0],r[1]),0)}(l,o))return-1;for(i=0;i<e;i++)r[i]=n[i];for(i=0;i<32;i++)r[i+32]=o[i];if(H(u,r,e),ar(u),tr(c,l,u),nr(l,n.subarray(32)),Q(c,l),rr(s,c),e-=64,b(n,0,s,0)){for(i=0;i<e;i++)r[i]=0;return-1}for(i=0;i<e;i++)r[i]=n[i+64];return e}var fr,ur=16,cr=64,lr=32,dr=64;function yr(r,t){if(32!==r.length)throw new Error("bad key size");if(24!==t.length)throw new Error("bad nonce size")}function pr(){for(var r=0;r<arguments.length;r++)if(!(arguments[r]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function gr(r){for(var t=0;t<r.length;t++)r[t]=0}r.lowlevel={crypto_core_hsalsa20:w,crypto_stream_xor:U,crypto_stream:_,crypto_stream_salsa20_xor:A,crypto_stream_salsa20:m,crypto_onetimeauth:x,crypto_onetimeauth_verify:S,crypto_verify_16:g,crypto_verify_32:b,crypto_secretbox:M,crypto_secretbox_open:B,crypto_scalarmult:C,crypto_scalarmult_base:G,crypto_box_beforenm:Z,crypto_box_afternm:j,crypto_box:function(r,t,n,e,o,i){var a=new Uint8Array(32);return Z(a,o,i),j(r,t,n,e,a)},crypto_box_open:function(r,t,n,e,o,i){var a=new Uint8Array(32);return Z(a,o,i),J(r,t,n,e,a)},crypto_box_keypair:F,crypto_hash:H,crypto_sign:hr,crypto_sign_keypair:er,crypto_sign_open:sr,crypto_secretbox_KEYBYTES:32,crypto_secretbox_NONCEBYTES:24,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:ur,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:32,crypto_box_SECRETKEYBYTES:32,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:24,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:cr,crypto_sign_PUBLICKEYBYTES:lr,crypto_sign_SECRETKEYBYTES:dr,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64,gf:t,D:f,L:or,pack25519:z,unpack25519:T,M:P,A:Y,S:D,Z:O,pow2523:N,add:Q,set25519:L,modL:ir,scalarmult:tr,scalarbase:nr},r.randomBytes=function(r){var t=new Uint8Array(r);return e(t,r),t},r.secretbox=function(r,t,n){pr(r,t,n),yr(n,t);for(var e=new Uint8Array(32+r.length),o=new Uint8Array(e.length),i=0;i<r.length;i++)e[i+32]=r[i];return M(o,e,e.length,t,n),o.subarray(ur)},r.secretbox.open=function(r,t,n){pr(r,t,n),yr(n,t);for(var e=new Uint8Array(ur+r.length),o=new Uint8Array(e.length),i=0;i<r.length;i++)e[i+ur]=r[i];return e.length<32||0!==B(o,e,e.length,t,n)?null:o.subarray(32)},r.secretbox.keyLength=32,r.secretbox.nonceLength=24,r.secretbox.overheadLength=ur,r.scalarMult=function(r,t){if(pr(r,t),32!==r.length)throw new Error("bad n size");if(32!==t.length)throw new Error("bad p size");var n=new Uint8Array(32);return C(n,r,t),n},r.scalarMult.base=function(r){if(pr(r),32!==r.length)throw new Error("bad n size");var t=new Uint8Array(32);return G(t,r),t},r.scalarMult.scalarLength=32,r.scalarMult.groupElementLength=32,r.box=function(t,n,e,o){var i=r.box.before(e,o);return r.secretbox(t,n,i)},r.box.before=function(r,t){pr(r,t),function(r,t){if(32!==r.length)throw new Error("bad public key size");if(32!==t.length)throw new Error("bad secret key size")}(r,t);var n=new Uint8Array(32);return Z(n,r,t),n},r.box.after=r.secretbox,r.box.open=function(t,n,e,o){var i=r.box.before(e,o);return r.secretbox.open(t,n,i)},r.box.open.after=r.secretbox.open,r.box.keyPair=function(){var r=new Uint8Array(32),t=new Uint8Array(32);return F(r,t),{publicKey:r,secretKey:t}},r.box.keyPair.fromSecretKey=function(r){if(pr(r),32!==r.length)throw new Error("bad secret key size");var t=new Uint8Array(32);return G(t,r),{publicKey:t,secretKey:new Uint8Array(r)}},r.box.publicKeyLength=32,r.box.secretKeyLength=32,r.box.sharedKeyLength=32,r.box.nonceLength=24,r.box.overheadLength=r.secretbox.overheadLength,r.sign=function(r,t){if(pr(r,t),t.length!==dr)throw new Error("bad secret key size");var n=new Uint8Array(cr+r.length);return hr(n,r,r.length,t),n},r.sign.open=function(r,t){if(pr(r,t),t.length!==lr)throw new Error("bad public key size");var n=new Uint8Array(r.length),e=sr(n,r,r.length,t);if(e<0)return null;for(var o=new Uint8Array(e),i=0;i<o.length;i++)o[i]=n[i];return o},r.sign.detached=function(t,n){for(var e=r.sign(t,n),o=new Uint8Array(cr),i=0;i<o.length;i++)o[i]=e[i];return o},r.sign.detached.verify=function(r,t,n){if(pr(r,t,n),t.length!==cr)throw new Error("bad signature size");if(n.length!==lr)throw new Error("bad public key size");var e,o=new Uint8Array(cr+r.length),i=new Uint8Array(cr+r.length);for(e=0;e<cr;e++)o[e]=t[e];for(e=0;e<r.length;e++)o[e+cr]=r[e];return sr(i,o,o.length,n)>=0},r.sign.keyPair=function(){var r=new Uint8Array(lr),t=new Uint8Array(dr);return er(r,t),{publicKey:r,secretKey:t}},r.sign.keyPair.fromSecretKey=function(r){if(pr(r),r.length!==dr)throw new Error("bad secret key size");for(var t=new Uint8Array(lr),n=0;n<t.length;n++)t[n]=r[32+n];return{publicKey:t,secretKey:new Uint8Array(r)}},r.sign.keyPair.fromSeed=function(r){if(pr(r),32!==r.length)throw new Error("bad seed size");for(var t=new Uint8Array(lr),n=new Uint8Array(dr),e=0;e<32;e++)n[e]=r[e];return er(t,n,!0),{publicKey:t,secretKey:n}},r.sign.publicKeyLength=lr,r.sign.secretKeyLength=dr,r.sign.seedLength=32,r.sign.signatureLength=cr,r.hash=function(r){pr(r);var t=new Uint8Array(64);return H(t,r,r.length),t},r.hash.hashLength=64,r.verify=function(r,t){return pr(r,t),0!==r.length&&0!==t.length&&r.length===t.length&&0===p(r,0,t,0,r.length)},r.setPRNG=function(r){e=r},(fr="undefined"!=typeof self?self.crypto||self.msCrypto:null)&&fr.getRandomValues?r.setPRNG((function(r,t){var n,e=new Uint8Array(t);for(n=0;n<t;n+=65536)fr.getRandomValues(e.subarray(n,n+Math.min(t-n,65536)));for(n=0;n<t;n++)r[n]=e[n];gr(e)})):(fr=n)&&fr.randomBytes&&r.setPRNG((function(r,t){var n,e=fr.randomBytes(t);for(n=0;n<t;n++)r[n]=e[n];gr(e)}))})((f=u).exports?f.exports:self.nacl=self.nacl||{});var c,l,d=r(c||(c=s(["\n  query getRequiredDownloadInfo($audioId: String!, $organizationId: String!) {\n    getRequiredDownloadInfo(\n      audioId: $audioId\n      organizationId: $organizationId\n    ) {\n      base64SymmetricKey\n      presignedUrl\n    }\n  }\n"],["\n  query getRequiredDownloadInfo($audioId: String!, $organizationId: String!) {\n    getRequiredDownloadInfo(\n      audioId: $audioId\n      organizationId: $organizationId\n    ) {\n      base64SymmetricKey\n      presignedUrl\n    }\n  }\n"]))),y=function(r){var n=r.audioId;r.roomId;var e=r.organizationId,s=o({loading:!0}),f=s[0],c=s[1],l=t(d,{variables:{audioId:n,organizationId:e}}),y=l.loading,p=l.error,g=l.data;return i((function(){var r,t;!1===y&&void 0===p&&void 0!==(null===(r=null==g?void 0:g.getRequiredDownloadInfo)||void 0===r?void 0:r.presignedUrl)&&(t=g.getRequiredDownloadInfo.presignedUrl,a(void 0,void 0,void 0,(function(){var r,n,e,o,i,a,s,f;return h(this,(function(h){switch(h.label){case 0:return h.trys.push([0,3,,4]),[4,fetch(t,{method:"GET",credentials:"include"})];case 1:return r=h.sent(),console.log("response",r.status),n=g.getRequiredDownloadInfo.base64SymmetricKey,console.log("base64SymmetricKey",n),e=Buffer.from(n,"base64"),console.log("symmetricKey"),[4,r.text()];case 2:return o=h.sent(),console.log("base64EncryptedAudio"),i=function(r,t){var n=Buffer.from(t,"base64"),e=n.slice(0,u.exports.box.nonceLength),o=n.slice(u.exports.box.nonceLength,t.length),i=u.exports.box.open.after(o,e,r);if(!i)throw new Error("Could not decrypt message");return i}(e,o),console.log("decryptedAudio"),a=new Blob([i],{type:"audio/webm"}),s=URL.createObjectURL(a),console.log("audioUrl",s),c({loading:!1,audioSrc:s}),[3,4];case 3:return f=h.sent(),console.error(f),c({loading:!1,error:f}),[3,4];case 4:return[2]}}))})))}),[g,y,p]),y?{loading:!0}:p?{loading:!1,error:p.message}:f},p=function(r){var n=r.userId,e=r.roomId,o=r.h5pId,i=r.h5pSubId,a=t(g,{variables:{userId:n,roomId:e,h5pId:o,h5pSubId:i}});return{loading:a.loading,error:a.error,audioMetadata:a.data.audioMetadata||[]}},g=r(l||(l=s(["\n  query audioMetadata(\n    $userId: String!\n    $roomId: String!\n    $h5pId: String!\n    $h5pSubId: String\n  ) {\n    audioMetadata(\n      userId: $userId\n      roomId: $roomId\n      h5pId: $h5pId\n      h5pSubId: $h5pSubId\n    ) {\n      id\n      userId\n      roomId\n      h5pId\n      h5pSubId\n      creationDate\n    }\n  }\n"],["\n  query audioMetadata(\n    $userId: String!\n    $roomId: String!\n    $h5pId: String!\n    $h5pSubId: String\n  ) {\n    audioMetadata(\n      userId: $userId\n      roomId: $roomId\n      h5pId: $h5pId\n      h5pSubId: $h5pSubId\n    ) {\n      id\n      userId\n      roomId\n      h5pId\n      h5pSubId\n      creationDate\n    }\n  }\n"]))),b=function(r){var t=r.audioId,n=r.roomId,o=r.organizationId,i=y({audioId:t,roomId:n,organizationId:o}),a=i.loading,h=i.error,s=i.audioSrc;return a?e.createElement("p",null,"Loading ..."):h?e.createElement("p",null,"error: ",JSON.stringify(h,null,2)):e.createElement("div",null,e.createElement("audio",{src:s,controls:!0,controlsList:"nodownload"}))},v=function(r){var t,n,o=r.userId,i=r.roomId,a=r.h5pId,h=r.h5pSubId,s=p({userId:o,roomId:i,h5pId:a,h5pSubId:h}),f=s.loading,u=s.error,c=s.audioMetadata;return u?e.createElement("p",null,"error: ",JSON.stringify(u,null,2)):f?e.createElement("p",null,"Loading ..."):e.createElement("h1",null,"Audio ID: ",null!==(n=null===(t=null==c?void 0:c[0])||void 0===t?void 0:t.id)&&void 0!==n?n:"none","!")};export{b as DownloadAudio,v as GetAudioMetadata,p as useAudioMetadata,y as useDownloadAudio};
//# sourceMappingURL=index.js.map