(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jo="134",ic=0,ba=1,sc=2,Jo=1,rc=2,Ti=3,Ui=0,Je=1,ei=2,$o=1,tn=0,Li=1,wa=2,Sa=3,Ea=4,ac=5,Xn=100,oc=101,lc=102,Ta=103,Aa=104,cc=200,hc=201,uc=202,dc=203,Qo=204,Ko=205,pc=206,fc=207,mc=208,gc=209,yc=210,xc=0,vc=1,_c=2,Nr=3,Mc=4,bc=5,wc=6,Sc=7,zs=0,Ec=1,Tc=2,wn=0,Ac=1,Cc=2,Lc=3,Rc=4,Pc=5,el=300,Gi=301,Hi=302,zr=303,Br=304,Bs=306,jr=307,kr=1e3,vt=1001,Or=1002,et=1003,Ca=1004,La=1005,Mt=1006,Dc=1007,ks=1008,an=1009,Ic=1010,Uc=1011,Ls=1012,Fc=1013,Cs=1014,en=1015,Jn=1016,Nc=1017,zc=1018,Bc=1019,Ri=1020,kc=1021,$n=1022,ut=1023,Oc=1024,Gc=1025,Hc=ut,Qn=1026,Fi=1027,Vc=1028,Wc=1029,qc=1030,Xc=1031,Yc=1032,Zc=1033,Ra=33776,Pa=33777,Da=33778,Ia=33779,Ua=35840,Fa=35841,Na=35842,za=35843,jc=36196,Ba=37492,ka=37496,Jc=37808,$c=37809,Qc=37810,Kc=37811,eh=37812,th=37813,nh=37814,ih=37815,sh=37816,rh=37817,ah=37818,oh=37819,lh=37820,ch=37821,hh=36492,uh=37840,dh=37841,ph=37842,fh=37843,mh=37844,gh=37845,yh=37846,xh=37847,vh=37848,_h=37849,Mh=37850,bh=37851,wh=37852,Sh=37853,Eh=2200,Th=2201,Ah=2202,Rs=2300,Ps=2301,Qs=2302,Yn=2400,Zn=2401,Ds=2402,Jr=2500,tl=2501,Ch=0,lt=3e3,En=3001,$r=3007,Qr=3002,Lh=3003,nl=3004,il=3005,sl=3006,Rh=3200,Ph=3201,ii=0,Dh=1,Ks=7680,Ih=519,Ni=35044,Is=35048,Oa="300 es";class Tn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const er=Math.PI/180,Gr=180/Math.PI,tt=[];for(let r=0;r<256;r++)tt[r]=(r<16?"0":"")+r.toString(16);const Uh=typeof crypto<"u"&&"randomUUID"in crypto;function Dt(){if(Uh)return crypto.randomUUID().toUpperCase();const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tt[r&255]+tt[r>>8&255]+tt[r>>16&255]+tt[r>>24&255]+"-"+tt[e&255]+tt[e>>8&255]+"-"+tt[e>>16&15|64]+tt[e>>24&255]+"-"+tt[t&63|128]+tt[t>>8&255]+"-"+tt[t>>16&255]+tt[t>>24&255]+tt[n&255]+tt[n>>8&255]+tt[n>>16&255]+tt[n>>24&255]).toUpperCase()}function xt(r,e,t){return Math.max(e,Math.min(t,r))}function Fh(r,e){return(r%e+e)%e}function tr(r,e,t){return(1-t)*r+t*e}function Ga(r){return(r&r-1)===0&&r!==0}function Nh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class Y{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Y.prototype.isVector2=!0;class nt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],y=i[0],x=i[3],f=i[6],m=i[1],E=i[4],_=i[7],T=i[2],A=i[5],v=i[8];return s[0]=a*y+o*m+l*T,s[3]=a*x+o*E+l*A,s[6]=a*f+o*_+l*v,s[1]=c*y+h*m+u*T,s[4]=c*x+h*E+u*A,s[7]=c*f+h*_+u*v,s[2]=d*y+p*m+g*T,s[5]=d*x+p*E+g*A,s[8]=d*f+p*_+g*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=u*y,e[1]=(i*c-h*n)*y,e[2]=(o*n-i*a)*y,e[3]=d*y,e[4]=(h*t-i*l)*y,e[5]=(i*s-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*h,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}nt.prototype.isMatrix3=!0;function rl(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}function Os(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ha(r,e=0){let t=3735928559^e,n=1103547991^e;for(let i=0,s;i<r.length;i++)s=r.charCodeAt(i),t=Math.imul(t^s,2654435761),n=Math.imul(n^s,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&n)+(t>>>0)}let An;class si{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{An===void 0&&(An=Os("canvas")),An.width=e.width,An.height=e.height;const n=An.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=An}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let zh=0;class st extends Tn{constructor(e=st.DEFAULT_IMAGE,t=st.DEFAULT_MAPPING,n=vt,i=vt,s=Mt,a=ks,o=ut,l=an,c=1,h=lt){super(),Object.defineProperty(this,"id",{value:zh++}),this.uuid=Dt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Dt()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(nr(i[a].image)):s.push(nr(i[a]))}else s=nr(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==el)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case vt:e.x=e.x<0?0:1;break;case Or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case vt:e.y=e.y<0?0:1;break;case Or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}st.DEFAULT_IMAGE=void 0;st.DEFAULT_MAPPING=el;st.prototype.isTexture=!0;function nr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?si.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class ke{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],x=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,_=(p+1)/2,T=(f+1)/2,A=(h+d)/4,v=(u+y)/4,R=(g+x)/4;return E>_&&E>T?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=A/n,s=v/n):_>T?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=A/i,s=R/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=v/s,i=R/s),this.set(n,i,s,t),this}let m=Math.sqrt((x-g)*(x-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(m)<.001&&(m=1),this.x=(x-g)/m,this.y=(u-y)/m,this.z=(d-h)/m,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}ke.prototype.isVector4=!0;class It extends Tn{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new ke(0,0,e,t),this.scissorTest=!1,this.viewport=new ke(0,0,e,t),this.texture=new st(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}It.prototype.isWebGLRenderTarget=!0;class Bh extends It{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}Bh.prototype.isWebGLMultipleRenderTargets=!0;class al extends It{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}al.prototype.isWebGLMultisampleRenderTarget=!0;class dt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let x=1-o;const f=l*d+c*p+h*g+u*y,m=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const T=Math.sqrt(E),A=Math.atan2(T,f*m);x=Math.sin(x*A)/T,o=Math.sin(o*A)/T}const _=o*m;if(l=l*x+d*_,c=c*x+p*_,h=h*x+g*_,u=u*x+y*_,x===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}dt.prototype.isQuaternion=!0;class w{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Va.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Va.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,h=l*n+o*t-s*i,u=l*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ir.copy(this).projectOnVector(e),this.sub(ir)}reflect(e){return this.sub(ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}w.prototype.isVector3=!0;const ir=new w,Va=new dt;class Lt{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox),sr.applyMatrix4(e.matrixWorld),this.union(sr));const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mi),Ji.subVectors(this.max,mi),Cn.subVectors(e.a,mi),Ln.subVectors(e.b,mi),Rn.subVectors(e.c,mi),Xt.subVectors(Ln,Cn),Yt.subVectors(Rn,Ln),yn.subVectors(Cn,Rn);let t=[0,-Xt.z,Xt.y,0,-Yt.z,Yt.y,0,-yn.z,yn.y,Xt.z,0,-Xt.x,Yt.z,0,-Yt.x,yn.z,0,-yn.x,-Xt.y,Xt.x,0,-Yt.y,Yt.x,0,-yn.y,yn.x,0];return!rr(t,Cn,Ln,Rn,Ji)||(t=[1,0,0,0,1,0,0,0,1],!rr(t,Cn,Ln,Rn,Ji))?!1:($i.crossVectors(Xt,Yt),t=[$i.x,$i.y,$i.z],rr(t,Cn,Ln,Rn,Ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return fi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Lt.prototype.isBox3=!0;const zt=[new w,new w,new w,new w,new w,new w,new w,new w],fi=new w,sr=new Lt,Cn=new w,Ln=new w,Rn=new w,Xt=new w,Yt=new w,yn=new w,mi=new w,Ji=new w,$i=new w,xn=new w;function rr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){xn.fromArray(r,s);const o=i.x*Math.abs(xn.x)+i.y*Math.abs(xn.y)+i.z*Math.abs(xn.z),l=e.dot(xn),c=t.dot(xn),h=n.dot(xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const kh=new Lt,Wa=new w,ar=new w,or=new w;class ri{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(or.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return ar.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Wa.copy(e.center).add(ar)),this.expandByPoint(Wa.copy(e.center).sub(ar)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bt=new w,lr=new w,Qi=new w,Zt=new w,cr=new w,Ki=new w,hr=new w;class ai{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bt.copy(this.direction).multiplyScalar(t).add(this.origin),Bt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){lr.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),Zt.copy(this.origin).sub(lr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qi),o=Zt.dot(this.direction),l=-Zt.dot(Qi),c=Zt.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Qi).multiplyScalar(d).add(lr),p}intersectSphere(e,t){Bt.subVectors(e.center,this.origin);const n=Bt.dot(this.direction),i=Bt.dot(Bt)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bt)!==null}intersectTriangle(e,t,n,i,s){cr.subVectors(t,e),Ki.subVectors(n,e),hr.crossVectors(cr,Ki);let a=this.direction.dot(hr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zt.subVectors(this.origin,e);const l=o*this.direction.dot(Ki.crossVectors(Zt,Ki));if(l<0)return null;const c=o*this.direction.dot(cr.cross(Zt));if(c<0||l+c>a)return null;const h=-o*Zt.dot(hr);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c,h,u,d,p,g,y,x){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pn.setFromMatrixColumn(e,0).length(),s=1/Pn.setFromMatrixColumn(e,1).length(),a=1/Pn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-y*u}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Oh,e,Gh)}lookAt(e,t,n){const i=this.elements;return gt.subVectors(e,t),gt.lengthSq()===0&&(gt.z=1),gt.normalize(),jt.crossVectors(n,gt),jt.lengthSq()===0&&(Math.abs(n.z)===1?gt.x+=1e-4:gt.z+=1e-4,gt.normalize(),jt.crossVectors(n,gt)),jt.normalize(),es.crossVectors(gt,jt),i[0]=jt.x,i[4]=es.x,i[8]=gt.x,i[1]=jt.y,i[5]=es.y,i[9]=gt.y,i[2]=jt.z,i[6]=es.z,i[10]=gt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],y=n[6],x=n[10],f=n[14],m=n[3],E=n[7],_=n[11],T=n[15],A=i[0],v=i[4],R=i[8],W=i[12],F=i[1],C=i[5],j=i[9],I=i[13],D=i[2],z=i[6],U=i[10],B=i[14],K=i[3],le=i[7],ye=i[11],se=i[15];return s[0]=a*A+o*F+l*D+c*K,s[4]=a*v+o*C+l*z+c*le,s[8]=a*R+o*j+l*U+c*ye,s[12]=a*W+o*I+l*B+c*se,s[1]=h*A+u*F+d*D+p*K,s[5]=h*v+u*C+d*z+p*le,s[9]=h*R+u*j+d*U+p*ye,s[13]=h*W+u*I+d*B+p*se,s[2]=g*A+y*F+x*D+f*K,s[6]=g*v+y*C+x*z+f*le,s[10]=g*R+y*j+x*U+f*ye,s[14]=g*W+y*I+x*B+f*se,s[3]=m*A+E*F+_*D+T*K,s[7]=m*v+E*C+_*z+T*le,s[11]=m*R+E*j+_*U+T*ye,s[15]=m*W+E*I+_*B+T*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],y=e[7],x=e[11],f=e[15];return g*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+y*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+x*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+f*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],y=e[13],x=e[14],f=e[15],m=u*x*c-y*d*c+y*l*p-o*x*p-u*l*f+o*d*f,E=g*d*c-h*x*c-g*l*p+a*x*p+h*l*f-a*d*f,_=h*y*c-g*u*c+g*o*p-a*y*p-h*o*f+a*u*f,T=g*u*l-h*y*l-g*o*d+a*y*d+h*o*x-a*u*x,A=t*m+n*E+i*_+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/A;return e[0]=m*v,e[1]=(y*d*s-u*x*s-y*i*p+n*x*p+u*i*f-n*d*f)*v,e[2]=(o*x*s-y*l*s+y*i*c-n*x*c-o*i*f+n*l*f)*v,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*v,e[4]=E*v,e[5]=(h*x*s-g*d*s+g*i*p-t*x*p-h*i*f+t*d*f)*v,e[6]=(g*l*s-a*x*s-g*i*c+t*x*c+a*i*f-t*l*f)*v,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*v,e[8]=_*v,e[9]=(g*u*s-h*y*s-g*n*p+t*y*p+h*n*f-t*u*f)*v,e[10]=(a*y*s-g*o*s+g*n*c-t*y*c-a*n*f+t*o*f)*v,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*v,e[12]=T*v,e[13]=(h*y*i-g*u*i+g*n*d-t*y*d-h*n*x+t*u*x)*v,e[14]=(g*o*i-a*y*i-g*n*l+t*y*l+a*n*x-t*o*x)*v,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*v,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,g=s*u,y=a*h,x=a*u,f=o*u,m=l*c,E=l*h,_=l*u,T=n.x,A=n.y,v=n.z;return i[0]=(1-(y+f))*T,i[1]=(p+_)*T,i[2]=(g-E)*T,i[3]=0,i[4]=(p-_)*A,i[5]=(1-(d+f))*A,i[6]=(x+m)*A,i[7]=0,i[8]=(g+E)*v,i[9]=(x-m)*v,i[10]=(1-(d+y))*v,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Pn.set(i[0],i[1],i[2]).length();const a=Pn.set(i[4],i[5],i[6]).length(),o=Pn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Tt.copy(this);const c=1/s,h=1/a,u=1/o;return Tt.elements[0]*=c,Tt.elements[1]*=c,Tt.elements[2]*=c,Tt.elements[4]*=h,Tt.elements[5]*=h,Tt.elements[6]*=h,Tt.elements[8]*=u,Tt.elements[9]*=u,Tt.elements[10]*=u,t.setFromRotationMatrix(Tt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(a-s),u=(t+e)*l,d=(n+i)*c,p=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}ve.prototype.isMatrix4=!0;const Pn=new w,Tt=new ve,Oh=new w(0,0,0),Gh=new w(1,1,1),jt=new w,es=new w,gt=new w,qa=new ve,Xa=new dt;class oi{constructor(e=0,t=0,n=0,i=oi.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xa.setFromEuler(this),this.setFromQuaternion(Xa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}oi.prototype.isEuler=!0;oi.DefaultOrder="XYZ";oi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Hh{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let Vh=0;const Ya=new w,Dn=new dt,kt=new ve,ts=new w,gi=new w,Wh=new w,qh=new dt,Za=new w(1,0,0),ja=new w(0,1,0),Ja=new w(0,0,1),Xh={type:"added"},$a={type:"removed"};class Fe extends Tn{constructor(){super(),Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Dt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DefaultUp.clone();const e=new w,t=new oi,n=new dt,i=new w(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new nt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Fe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.premultiply(Dn),this}rotateX(e){return this.rotateOnAxis(Za,e)}rotateY(e){return this.rotateOnAxis(ja,e)}rotateZ(e){return this.rotateOnAxis(Ja,e)}translateOnAxis(e,t){return Ya.copy(e).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Za,e)}translateY(e){return this.translateOnAxis(ja,e)}translateZ(e){return this.translateOnAxis(Ja,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ts.copy(e):ts.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kt.lookAt(gi,ts,this.up):kt.lookAt(ts,gi,this.up),this.quaternion.setFromRotationMatrix(kt),i&&(kt.extractRotation(i.matrixWorld),Dn.setFromRotationMatrix(kt),this.quaternion.premultiply(Dn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($a)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent($a)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,e,Wh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Fe.DefaultUp=new w(0,1,0);Fe.DefaultMatrixAutoUpdate=!0;Fe.prototype.isObject3D=!0;const At=new w,Ot=new w,ur=new w,Gt=new w,In=new w,Un=new w,Qa=new w,dr=new w,pr=new w,fr=new w;class $e{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),At.subVectors(e,t),i.cross(At);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){At.subVectors(i,t),Ot.subVectors(n,t),ur.subVectors(e,t);const a=At.dot(At),o=At.dot(Ot),l=At.dot(ur),c=Ot.dot(Ot),h=Ot.dot(ur),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gt),Gt.x>=0&&Gt.y>=0&&Gt.x+Gt.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Gt),l.set(0,0),l.addScaledVector(s,Gt.x),l.addScaledVector(a,Gt.y),l.addScaledVector(o,Gt.z),l}static isFrontFacing(e,t,n,i){return At.subVectors(n,t),Ot.subVectors(e,t),At.cross(Ot).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return At.subVectors(this.c,this.b),Ot.subVectors(this.a,this.b),At.cross(Ot).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $e.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $e.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return $e.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return $e.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $e.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;In.subVectors(i,n),Un.subVectors(s,n),dr.subVectors(e,n);const l=In.dot(dr),c=Un.dot(dr);if(l<=0&&c<=0)return t.copy(n);pr.subVectors(e,i);const h=In.dot(pr),u=Un.dot(pr);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(In,a);fr.subVectors(e,s);const p=In.dot(fr),g=Un.dot(fr);if(g>=0&&p<=g)return t.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Un,o);const x=h*g-p*u;if(x<=0&&u-h>=0&&p-g>=0)return Qa.subVectors(s,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(Qa,o);const f=1/(x+y+d);return a=y*f,o=d*f,t.copy(n).addScaledVector(In,a).addScaledVector(Un,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Yh=0;class ht extends Tn{constructor(){super(),Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Dt(),this.name="",this.type="Material",this.fog=!0,this.blending=Li,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.format=ut,this.transparent=!1,this.blendSrc=Qo,this.blendDst=Ko,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===$o;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==ut&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}ht.prototype.isMaterial=!0;const ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ct={h:0,s:0,l:0},ns={h:0,s:0,l:0};function mr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function gr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class de{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Fh(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=mr(s,i,e+1/3),this.g=mr(s,i,e),this.b=mr(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=ol[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),a=Math.min(t,n,i);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const h=s-a;switch(l=c<=.5?h/(s+a):h/(2-s-a),s){case t:o=(n-i)/h+(n<i?6:0);break;case n:o=(i-t)/h+2;break;case i:o=(t-n)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Ct),Ct.h+=e,Ct.s+=t,Ct.l+=n,this.setHSL(Ct.h,Ct.s,Ct.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ct),e.getHSL(ns);const n=tr(Ct.h,ns.h,t),i=tr(Ct.s,ns.s,t),s=tr(Ct.l,ns.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}de.NAMES=ol;de.prototype.isColor=!0;de.prototype.r=1;de.prototype.g=1;de.prototype.b=1;class Ce extends ht{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Ce.prototype.isMeshBasicMaterial=!0;const He=new w,is=new Y;class Qe{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ni,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new de),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new Y),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new w),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new ke),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)He.fromBufferAttribute(this,t),He.applyMatrix3(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.applyMatrix4(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.applyNormalMatrix(e),this.setXYZ(t,He.x,He.y,He.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.transformDirection(e),this.setXYZ(t,He.x,He.y,He.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ni&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Qe.prototype.isBufferAttribute=!0;class ll extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cl extends Qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zh extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Zh.prototype.isFloat16BufferAttribute=!0;class Oe extends Qe{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jh=0;const _t=new ve,xr=new Fe,Fn=new w,yt=new Lt,yi=new Lt,Ke=new w;class Ge extends Tn{constructor(){super(),Object.defineProperty(this,"id",{value:jh++}),this.uuid=Dt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rl(e)>65535?cl:ll)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _t.makeRotationFromQuaternion(e),this.applyMatrix4(_t),this}rotateX(e){return _t.makeRotationX(e),this.applyMatrix4(_t),this}rotateY(e){return _t.makeRotationY(e),this.applyMatrix4(_t),this}rotateZ(e){return _t.makeRotationZ(e),this.applyMatrix4(_t),this}translate(e,t,n){return _t.makeTranslation(e,t,n),this.applyMatrix4(_t),this}scale(e,t,n){return _t.makeScale(e,t,n),this.applyMatrix4(_t),this}lookAt(e){return xr.lookAt(e),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fn).negate(),this.translate(Fn.x,Fn.y,Fn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Oe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];yt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,yt.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,yt.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(yt.min),this.boundingBox.expandByPoint(yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(yt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];yi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(yt.min,yi.min),yt.expandByPoint(Ke),Ke.addVectors(yt.max,yi.max),yt.expandByPoint(Ke)):(yt.expandByPoint(yi.min),yt.expandByPoint(yi.max))}yt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ke.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ke));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ke.fromBufferAttribute(o,c),l&&(Fn.fromBufferAttribute(e,c),Ke.add(Fn)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Qe(new Float32Array(4*o),4));const l=t.tangent.array,c=[],h=[];for(let F=0;F<o;F++)c[F]=new w,h[F]=new w;const u=new w,d=new w,p=new w,g=new Y,y=new Y,x=new Y,f=new w,m=new w;function E(F,C,j){u.fromArray(i,F*3),d.fromArray(i,C*3),p.fromArray(i,j*3),g.fromArray(a,F*2),y.fromArray(a,C*2),x.fromArray(a,j*2),d.sub(u),p.sub(u),y.sub(g),x.sub(g);const I=1/(y.x*x.y-x.x*y.y);isFinite(I)&&(f.copy(d).multiplyScalar(x.y).addScaledVector(p,-y.y).multiplyScalar(I),m.copy(p).multiplyScalar(y.x).addScaledVector(d,-x.x).multiplyScalar(I),c[F].add(f),c[C].add(f),c[j].add(f),h[F].add(m),h[C].add(m),h[j].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let F=0,C=_.length;F<C;++F){const j=_[F],I=j.start,D=j.count;for(let z=I,U=I+D;z<U;z+=3)E(n[z+0],n[z+1],n[z+2])}const T=new w,A=new w,v=new w,R=new w;function W(F){v.fromArray(s,F*3),R.copy(v);const C=c[F];T.copy(C),T.sub(v.multiplyScalar(v.dot(C))).normalize(),A.crossVectors(R,C);const I=A.dot(h[F])<0?-1:1;l[F*4]=T.x,l[F*4+1]=T.y,l[F*4+2]=T.z,l[F*4+3]=I}for(let F=0,C=_.length;F<C;++F){const j=_[F],I=j.start,D=j.count;for(let z=I,U=I+D;z<U;z+=3)W(n[z+0]),W(n[z+1]),W(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new w,s=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,h=Math.min(l.length,a.length-c);for(let u=0,d=c;u<h;u++,d++)a[d]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ke.fromBufferAttribute(e,t),Ke.normalize(),e.setXYZ(t,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let y=0,x=l.length;y<x;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ge,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ge.prototype.isBufferGeometry=!0;const Ka=new ve,Nn=new ai,vr=new ri,Jt=new w,$t=new w,Qt=new w,_r=new w,Mr=new w,br=new w,ss=new w,rs=new w,as=new w,os=new Y,ls=new Y,cs=new Y,wr=new w,hs=new w;class oe extends Fe{constructor(e=new Ge,t=new Ce){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),e.ray.intersectsSphere(vr)===!1)||(Ka.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(Ka),n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let y=0,x=p.length;y<x;y++){const f=p[y],m=i[f.materialIndex],E=Math.max(f.start,g.start),_=Math.min(o.count,Math.min(f.start+f.count,g.start+g.count));for(let T=E,A=_;T<A;T+=3){const v=o.getX(T),R=o.getX(T+1),W=o.getX(T+2);a=us(this,m,e,Nn,l,c,h,u,d,v,R,W),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const y=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let f=y,m=x;f<m;f+=3){const E=o.getX(f),_=o.getX(f+1),T=o.getX(f+2);a=us(this,i,e,Nn,l,c,h,u,d,E,_,T),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let y=0,x=p.length;y<x;y++){const f=p[y],m=i[f.materialIndex],E=Math.max(f.start,g.start),_=Math.min(l.count,Math.min(f.start+f.count,g.start+g.count));for(let T=E,A=_;T<A;T+=3){const v=T,R=T+1,W=T+2;a=us(this,m,e,Nn,l,c,h,u,d,v,R,W),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const y=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let f=y,m=x;f<m;f+=3){const E=f,_=f+1,T=f+2;a=us(this,i,e,Nn,l,c,h,u,d,E,_,T),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}oe.prototype.isMesh=!0;function Jh(r,e,t,n,i,s,a,o){let l;if(e.side===Je?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==ei,o),l===null)return null;hs.copy(o),hs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(hs);return c<t.near||c>t.far?null:{distance:c,point:hs.clone(),object:r}}function us(r,e,t,n,i,s,a,o,l,c,h,u){Jt.fromBufferAttribute(i,c),$t.fromBufferAttribute(i,h),Qt.fromBufferAttribute(i,u);const d=r.morphTargetInfluences;if(s&&d){ss.set(0,0,0),rs.set(0,0,0),as.set(0,0,0);for(let g=0,y=s.length;g<y;g++){const x=d[g],f=s[g];x!==0&&(_r.fromBufferAttribute(f,c),Mr.fromBufferAttribute(f,h),br.fromBufferAttribute(f,u),a?(ss.addScaledVector(_r,x),rs.addScaledVector(Mr,x),as.addScaledVector(br,x)):(ss.addScaledVector(_r.sub(Jt),x),rs.addScaledVector(Mr.sub($t),x),as.addScaledVector(br.sub(Qt),x)))}Jt.add(ss),$t.add(rs),Qt.add(as)}r.isSkinnedMesh&&(r.boneTransform(c,Jt),r.boneTransform(h,$t),r.boneTransform(u,Qt));const p=Jh(r,e,t,n,Jt,$t,Qt,wr);if(p){o&&(os.fromBufferAttribute(o,c),ls.fromBufferAttribute(o,h),cs.fromBufferAttribute(o,u),p.uv=$e.getUV(wr,Jt,$t,Qt,os,ls,cs,new Y)),l&&(os.fromBufferAttribute(l,c),ls.fromBufferAttribute(l,h),cs.fromBufferAttribute(l,u),p.uv2=$e.getUV(wr,Jt,$t,Qt,os,ls,cs,new Y));const g={a:c,b:h,c:u,normal:new w,materialIndex:0};$e.getNormal(Jt,$t,Qt,g.normal),p.face=g}return p}class Vi extends Ge{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2));function g(y,x,f,m,E,_,T,A,v,R,W){const F=_/v,C=T/R,j=_/2,I=T/2,D=A/2,z=v+1,U=R+1;let B=0,K=0;const le=new w;for(let ye=0;ye<U;ye++){const se=ye*C-I;for(let Ee=0;Ee<z;Ee++){const X=Ee*F-j;le[y]=X*m,le[x]=se*E,le[f]=D,c.push(le.x,le.y,le.z),le[y]=0,le[x]=0,le[f]=A>0?1:-1,h.push(le.x,le.y,le.z),u.push(Ee/v),u.push(1-ye/R),B+=1}}for(let ye=0;ye<R;ye++)for(let se=0;se<v;se++){const Ee=d+se+z*ye,X=d+se+z*(ye+1),Q=d+(se+1)+z*(ye+1),he=d+(se+1)+z*ye;l.push(Ee,X,he),l.push(X,Q,he),K+=6}o.addGroup(p,K,W),p+=K,d+=B}}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ti(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ot(r){const e={};for(let t=0;t<r.length;t++){const n=ti(r[t]);for(const i in n)e[i]=n[i]}return e}const $h={clone:ti,merge:ot};var Qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends ht{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Qh,this.fragmentShader=Kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ti(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Sn.prototype.isShaderMaterial=!0;class Kr extends Fe{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Kr.prototype.isCamera=!0;class mt extends Kr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}mt.prototype.isPerspectiveCamera=!0;const zn=90,Bn=1;class ea extends Fe{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new mt(zn,Bn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new w(1,0,0)),this.add(i);const s=new mt(zn,Bn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new w(-1,0,0)),this.add(s);const a=new mt(zn,Bn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new w(0,1,0)),this.add(a);const o=new mt(zn,Bn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new w(0,-1,0)),this.add(o);const l=new mt(zn,Bn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new w(0,0,1)),this.add(l);const c=new mt(zn,Bn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h}}class Gs extends st{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Gi,super(e,t,n,i,s,a,o,l,c,h),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Gs.prototype.isCubeTexture=!0;class hl extends It{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Gs(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=ut,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Vi(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:tn});s.uniforms.tEquirect.value=t;const a=new oe(i,s),o=t.minFilter;return t.minFilter===ks&&(t.minFilter=Mt),new ea(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}hl.prototype.isWebGLCubeRenderTarget=!0;const Sr=new w,eu=new w,tu=new nt;class Vt{constructor(e=new w(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sr.subVectors(n,t).cross(eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Sr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tu.getNormalMatrix(e),i=this.coplanarPoint(Sr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Vt.prototype.isPlane=!0;const kn=new ri,ds=new w;class Hs{constructor(e=new Vt,t=new Vt,n=new Vt,i=new Vt,s=new Vt,a=new Vt){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],p=n[9],g=n[10],y=n[11],x=n[12],f=n[13],m=n[14],E=n[15];return t[0].setComponents(o-i,u-l,y-d,E-x).normalize(),t[1].setComponents(o+i,u+l,y+d,E+x).normalize(),t[2].setComponents(o+s,u+c,y+p,E+f).normalize(),t[3].setComponents(o-s,u-c,y-p,E-f).normalize(),t[4].setComponents(o-a,u-h,y-g,E-m).normalize(),t[5].setComponents(o+a,u+h,y+g,E+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ds.x=i.normal.x>0?e.max.x:e.min.x,ds.y=i.normal.y>0?e.max.y:e.min.y,ds.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ul(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function nu(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,u,d),c.onUploadCallback();let g=5126;return u instanceof Float32Array?g=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:u instanceof Int16Array?g=5122:u instanceof Uint32Array?g=5125:u instanceof Int32Array?g=5124:u instanceof Int8Array?g=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(g=5121),{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,p=h.updateRange;r.bindBuffer(u,c),p.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class ft extends Ge{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],y=[],x=[];for(let f=0;f<h;f++){const m=f*d-a;for(let E=0;E<c;E++){const _=E*u-s;g.push(_,-m,0),y.push(0,0,1),x.push(E/o),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const E=m+c*f,_=m+c*(f+1),T=m+1+c*(f+1),A=m+1+c*f;p.push(E,_,A),p.push(_,T,A)}this.setIndex(p),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(y,3)),this.setAttribute("uv",new Oe(x,2))}static fromJSON(e){return new ft(e.width,e.height,e.widthSegments,e.heightSegments)}}var iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ru=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cu="vec3 transformed = vec3( position );",hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,du=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,bu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lu=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ku=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Ou=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hu=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Vu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wu=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,qu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,ju=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ju=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$u=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ku=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sd=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ud=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,fd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,_d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Pd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Id=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Od=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hd=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Vd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Wd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,qd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Xd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Yd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,jd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,np=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ip=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,op=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,yp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_p=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ep=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ap=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:iu,alphamap_pars_fragment:su,alphatest_fragment:ru,alphatest_pars_fragment:au,aomap_fragment:ou,aomap_pars_fragment:lu,begin_vertex:cu,beginnormal_vertex:hu,bsdfs:uu,bumpmap_pars_fragment:du,clipping_planes_fragment:pu,clipping_planes_pars_fragment:fu,clipping_planes_pars_vertex:mu,clipping_planes_vertex:gu,color_fragment:yu,color_pars_fragment:xu,color_pars_vertex:vu,color_vertex:_u,common:Mu,cube_uv_reflection_fragment:bu,defaultnormal_vertex:wu,displacementmap_pars_vertex:Su,displacementmap_vertex:Eu,emissivemap_fragment:Tu,emissivemap_pars_fragment:Au,encodings_fragment:Cu,encodings_pars_fragment:Lu,envmap_fragment:Ru,envmap_common_pars_fragment:Pu,envmap_pars_fragment:Du,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:Wu,envmap_vertex:Uu,fog_vertex:Fu,fog_pars_vertex:Nu,fog_fragment:zu,fog_pars_fragment:Bu,gradientmap_pars_fragment:ku,lightmap_fragment:Ou,lightmap_pars_fragment:Gu,lights_lambert_vertex:Hu,lights_pars_begin:Vu,lights_toon_fragment:qu,lights_toon_pars_fragment:Xu,lights_phong_fragment:Yu,lights_phong_pars_fragment:Zu,lights_physical_fragment:ju,lights_physical_pars_fragment:Ju,lights_fragment_begin:$u,lights_fragment_maps:Qu,lights_fragment_end:Ku,logdepthbuf_fragment:ed,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:sd,map_pars_fragment:rd,map_particle_fragment:ad,map_particle_pars_fragment:od,metalnessmap_fragment:ld,metalnessmap_pars_fragment:cd,morphnormal_vertex:hd,morphtarget_pars_vertex:ud,morphtarget_vertex:dd,normal_fragment_begin:pd,normal_fragment_maps:fd,normal_pars_fragment:md,normal_pars_vertex:gd,normal_vertex:yd,normalmap_pars_fragment:xd,clearcoat_normal_fragment_begin:vd,clearcoat_normal_fragment_maps:_d,clearcoat_pars_fragment:Md,output_fragment:bd,packing:wd,premultiplied_alpha_fragment:Sd,project_vertex:Ed,dithering_fragment:Td,dithering_pars_fragment:Ad,roughnessmap_fragment:Cd,roughnessmap_pars_fragment:Ld,shadowmap_pars_fragment:Rd,shadowmap_pars_vertex:Pd,shadowmap_vertex:Dd,shadowmask_pars_fragment:Id,skinbase_vertex:Ud,skinning_pars_vertex:Fd,skinning_vertex:Nd,skinnormal_vertex:zd,specularmap_fragment:Bd,specularmap_pars_fragment:kd,tonemapping_fragment:Od,tonemapping_pars_fragment:Gd,transmission_fragment:Hd,transmission_pars_fragment:Vd,uv_pars_fragment:Wd,uv_pars_vertex:qd,uv_vertex:Xd,uv2_pars_fragment:Yd,uv2_pars_vertex:Zd,uv2_vertex:jd,worldpos_vertex:Jd,background_vert:$d,background_frag:Qd,cube_vert:Kd,cube_frag:ep,depth_vert:tp,depth_frag:np,distanceRGBA_vert:ip,distanceRGBA_frag:sp,equirect_vert:rp,equirect_frag:ap,linedashed_vert:op,linedashed_frag:lp,meshbasic_vert:cp,meshbasic_frag:hp,meshlambert_vert:up,meshlambert_frag:dp,meshmatcap_vert:pp,meshmatcap_frag:fp,meshnormal_vert:mp,meshnormal_frag:gp,meshphong_vert:yp,meshphong_frag:xp,meshphysical_vert:vp,meshphysical_frag:_p,meshtoon_vert:Mp,meshtoon_frag:bp,points_vert:wp,points_frag:Sp,shadow_vert:Ep,shadow_frag:Tp,sprite_vert:Ap,sprite_frag:Cp},te={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new nt},uv2Transform:{value:new nt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nt}}},Pt={basic:{uniforms:ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.fog,te.lights,{emissive:{value:new de(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:ot([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:ot([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new de(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:ot([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:ot([te.points,te.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:ot([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:ot([te.common,te.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:ot([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:ot([te.sprite,te.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:ot([te.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:ot([te.common,te.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:ot([te.lights,te.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Pt.physical={uniforms:ot([Pt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Y(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function Lp(r,e,t,n,i){const s=new de(0);let a=0,o,l,c=null,h=0,u=null;function d(g,y){let x=!1,f=y.isScene===!0?y.background:null;f&&f.isTexture&&(f=e.get(f));const m=r.xr,E=m.getSession&&m.getSession();E&&E.environmentBlendMode==="additive"&&(f=null),f===null?p(s,a):f&&f.isColor&&(p(f,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),f&&(f.isCubeTexture||f.mapping===Bs)?(l===void 0&&(l=new oe(new Vi(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:ti(Pt.cube.uniforms),vertexShader:Pt.cube.vertexShader,fragmentShader:Pt.cube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=f,l.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,(c!==f||h!==f.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,c=f,h=f.version,u=r.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new oe(new ft(2,2),new Sn({name:"BackgroundMaterial",uniforms:ti(Pt.background.uniforms),vertexShader:Pt.background.vertexShader,fragmentShader:Pt.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=f,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),(c!==f||h!==f.version||u!==r.toneMapping)&&(o.material.needsUpdate=!0,c=f,h=f.version,u=r.toneMapping),g.unshift(o,o.geometry,o.material,0,0,null))}function p(g,y){t.buffers.color.setClear(g.r,g.g,g.b,y,i)}return{getClearColor:function(){return s},setClearColor:function(g,y=1){s.set(g),a=y,p(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,p(s,a)},render:d}}function Rp(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=y(null);let c=l;function h(I,D,z,U,B){let K=!1;if(a){const le=g(U,z,D);c!==le&&(c=le,d(c.object)),K=x(U,B),K&&f(U,B)}else{const le=D.wireframe===!0;(c.geometry!==U.id||c.program!==z.id||c.wireframe!==le)&&(c.geometry=U.id,c.program=z.id,c.wireframe=le,K=!0)}I.isInstancedMesh===!0&&(K=!0),B!==null&&t.update(B,34963),K&&(v(I,D,z,U),B!==null&&r.bindBuffer(34963,t.get(B).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function p(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function g(I,D,z){const U=z.wireframe===!0;let B=o[I.id];B===void 0&&(B={},o[I.id]=B);let K=B[D.id];K===void 0&&(K={},B[D.id]=K);let le=K[U];return le===void 0&&(le=y(u()),K[U]=le),le}function y(I){const D=[],z=[],U=[];for(let B=0;B<i;B++)D[B]=0,z[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:U,object:I,attributes:{},index:null}}function x(I,D){const z=c.attributes,U=I.attributes;let B=0;for(const K in U){const le=z[K],ye=U[K];if(le===void 0||le.attribute!==ye||le.data!==ye.data)return!0;B++}return c.attributesNum!==B||c.index!==D}function f(I,D){const z={},U=I.attributes;let B=0;for(const K in U){const le=U[K],ye={};ye.attribute=le,le.data&&(ye.data=le.data),z[K]=ye,B++}c.attributes=z,c.attributesNum=B,c.index=D}function m(){const I=c.newAttributes;for(let D=0,z=I.length;D<z;D++)I[D]=0}function E(I){_(I,0)}function _(I,D){const z=c.newAttributes,U=c.enabledAttributes,B=c.attributeDivisors;z[I]=1,U[I]===0&&(r.enableVertexAttribArray(I),U[I]=1),B[I]!==D&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,D),B[I]=D)}function T(){const I=c.newAttributes,D=c.enabledAttributes;for(let z=0,U=D.length;z<U;z++)D[z]!==I[z]&&(r.disableVertexAttribArray(z),D[z]=0)}function A(I,D,z,U,B,K){n.isWebGL2===!0&&(z===5124||z===5125)?r.vertexAttribIPointer(I,D,z,B,K):r.vertexAttribPointer(I,D,z,U,B,K)}function v(I,D,z,U){if(n.isWebGL2===!1&&(I.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const B=U.attributes,K=z.getAttributes(),le=D.defaultAttributeValues;for(const ye in K){const se=K[ye];if(se.location>=0){let Ee=B[ye];if(Ee===void 0&&(ye==="instanceMatrix"&&I.instanceMatrix&&(Ee=I.instanceMatrix),ye==="instanceColor"&&I.instanceColor&&(Ee=I.instanceColor)),Ee!==void 0){const X=Ee.normalized,Q=Ee.itemSize,he=t.get(Ee);if(he===void 0)continue;const H=he.buffer,xe=he.type,we=he.bytesPerElement;if(Ee.isInterleavedBufferAttribute){const re=Ee.data,ue=re.stride,Ae=Ee.offset;if(re&&re.isInstancedInterleavedBuffer){for(let G=0;G<se.locationSize;G++)_(se.location+G,re.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let G=0;G<se.locationSize;G++)E(se.location+G);r.bindBuffer(34962,H);for(let G=0;G<se.locationSize;G++)A(se.location+G,Q/se.locationSize,xe,X,ue*we,(Ae+Q/se.locationSize*G)*we)}else{if(Ee.isInstancedBufferAttribute){for(let re=0;re<se.locationSize;re++)_(se.location+re,Ee.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let re=0;re<se.locationSize;re++)E(se.location+re);r.bindBuffer(34962,H);for(let re=0;re<se.locationSize;re++)A(se.location+re,Q/se.locationSize,xe,X,Q*we,Q/se.locationSize*re*we)}}else if(le!==void 0){const X=le[ye];if(X!==void 0)switch(X.length){case 2:r.vertexAttrib2fv(se.location,X);break;case 3:r.vertexAttrib3fv(se.location,X);break;case 4:r.vertexAttrib4fv(se.location,X);break;default:r.vertexAttrib1fv(se.location,X)}}}}T()}function R(){C();for(const I in o){const D=o[I];for(const z in D){const U=D[z];for(const B in U)p(U[B].object),delete U[B];delete D[z]}delete o[I]}}function W(I){if(o[I.id]===void 0)return;const D=o[I.id];for(const z in D){const U=D[z];for(const B in U)p(U[B].object),delete U[B];delete D[z]}delete o[I.id]}function F(I){for(const D in o){const z=o[D];if(z[I.id]===void 0)continue;const U=z[I.id];for(const B in U)p(U[B].object),delete U[B];delete z[I.id]}}function C(){j(),c!==l&&(c=l,d(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:C,resetDefaultState:j,dispose:R,releaseStatesOfGeometry:W,releaseStatesOfProgram:F,initAttributes:m,enableAttribute:E,disableUnusedAttributes:T}}function Pp(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,h,u),t.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=l}function Dp(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(v){if(v==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),y=r.getParameter(34921),x=r.getParameter(36347),f=r.getParameter(36348),m=r.getParameter(36349),E=d>0,_=a||e.has("OES_texture_float"),T=E&&_,A=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:x,maxVaryings:f,maxFragmentUniforms:m,vertexTextures:E,floatFragmentTextures:_,floatVertexTextures:T,maxSamples:A}}function Ip(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Vt,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const g=u.length!==0||d||n!==0||i;return i=d,t=h(u,p,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,p){const g=u.clippingPlanes,y=u.clipIntersection,x=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!x)s?h(null):c();else{const m=s?0:n,E=m*4;let _=f.clippingState||null;l.value=_,_=h(g,d,E,p);for(let T=0;T!==E;++T)_[T]=t[T];f.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const y=u!==null?u.length:0;let x=null;if(y!==0){if(x=l.value,g!==!0||x===null){const f=p+y*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<f)&&(x=new Float32Array(f));for(let E=0,_=p;E!==y;++E,_+=4)a.copy(u[E]).applyMatrix4(m,o),a.normal.toArray(x,_),x[_+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function Up(r){let e=new WeakMap;function t(a,o){return o===zr?a.mapping=Gi:o===Br&&(a.mapping=Hi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===zr||o===Br)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=r.getRenderTarget(),h=new hl(l.height/2);return h.fromEquirectangularTexture(r,a),e.set(a,h),r.setRenderTarget(c),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Wi extends Kr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Wi.prototype.isOrthographicCamera=!0;class Vs extends Sn{constructor(e){super(e),this.type="RawShaderMaterial"}}Vs.prototype.isRawShaderMaterial=!0;const Kn=4,nn=8,Rt=Math.pow(2,nn),dl=[.125,.215,.35,.446,.526,.582],pl=nn-Kn+1+dl.length,On=20,on={[lt]:0,[En]:1,[Qr]:2,[nl]:3,[il]:4,[sl]:5,[$r]:6},Er=new Wi,{_lodPlanes:xi,_sizeLods:eo,_sigmas:ps}=zp(),to=new de;let Tr=null;const bn=(1+Math.sqrt(5))/2,Gn=1/bn,no=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,bn,Gn),new w(0,bn,-Gn),new w(Gn,0,bn),new w(-Gn,0,bn),new w(bn,Gn,0),new w(-bn,Gn,0)];class Fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Bp(On),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Tr=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=ro(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=so(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<xi.length;e++)xi[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Tr),e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e){Tr=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:et,minFilter:et,generateMipmaps:!1,type:an,format:Hc,encoding:Np(e)?e.encoding:Qr,depthBuffer:!1},n=io(t);return n.depthBuffer=!e,this._pingPongRenderTarget=io(t),n}_compileMaterial(e){const t=new oe(xi[0],e);this._renderer.compile(t,Er)}_sceneToCubeUV(e,t,n,i){const o=new mt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.outputEncoding,p=h.toneMapping;h.getClearColor(to),h.toneMapping=wn,h.outputEncoding=lt,h.autoClear=!1;const g=new Ce({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),y=new oe(new Vi,g);let x=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,x=!0):(g.color.copy(to),x=!0);for(let m=0;m<6;m++){const E=m%3;E==0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):E==1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m])),fs(i,E*Rt,m>2?Rt:0,Rt,Rt),h.setRenderTarget(i),x&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=p,h.outputEncoding=d,h.autoClear=u,e.background=f}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===ut&&t.type===an&&t.encoding===En?e.value=on[lt]:e.value=on[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Gi||e.mapping===Hi;i?this._cubemapShader==null&&(this._cubemapShader=ro()):this._equirectShader==null&&(this._equirectShader=so());const s=i?this._cubemapShader:this._equirectShader,a=new oe(xi[0],s),o=s.uniforms;o.envMap.value=e,i||o.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(o.inputEncoding,e),this._setEncoding(o.outputEncoding,t.texture),fs(t,0,0,3*Rt,2*Rt),n.setRenderTarget(t),n.render(a,Er)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<pl;i++){const s=Math.sqrt(ps[i]*ps[i]-ps[i-1]*ps[i-1]),a=no[(i-1)%no.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new oe(xi[i],c),d=c.uniforms,p=eo[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*On-1),y=s/g,x=isFinite(s)?1+Math.floor(h*y):On;x>On&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${On}`);const f=[];let m=0;for(let A=0;A<On;++A){const v=A/y,R=Math.exp(-v*v/2);f.push(R),A==0?m+=R:A<x&&(m+=2*R)}for(let A=0;A<f.length;A++)f[A]=f[A]/m;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o),d.dTheta.value=g,d.mipInt.value=nn-n,this._setEncoding(d.inputEncoding,e.texture),this._setEncoding(d.outputEncoding,e.texture);const E=eo[i],_=3*Math.max(0,Rt-2*E),T=(i===0?0:2*Rt)+2*E*(i>nn-Kn?i-nn+Kn:0);fs(t,_,T,3*E,2*E),l.setRenderTarget(t),l.render(u,Er)}}function Np(r){return r===void 0||r.type!==an?!1:r.encoding===lt||r.encoding===En||r.encoding===$r}function zp(){const r=[],e=[],t=[];let n=nn;for(let i=0;i<pl;i++){const s=Math.pow(2,n);e.push(s);let a=1/s;i>nn-Kn?a=dl[i-nn+Kn-1]:i==0&&(a=0),t.push(a);const o=1/(s-1),l=-o/2,c=1+o/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,p=3,g=2,y=1,x=new Float32Array(p*d*u),f=new Float32Array(g*d*u),m=new Float32Array(y*d*u);for(let _=0;_<u;_++){const T=_%3*2/3-1,A=_>2?0:-1,v=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];x.set(v,p*d*_),f.set(h,g*d*_);const R=[_,_,_,_,_,_];m.set(R,y*d*_)}const E=new Ge;E.setAttribute("position",new Qe(x,p)),E.setAttribute("uv",new Qe(f,g)),E.setAttribute("faceIndex",new Qe(m,y)),r.push(E),n>Kn&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function io(r){const e=new It(3*Rt,3*Rt,r);return e.texture.mapping=Bs,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function fs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Bp(r){const e=new Float32Array(r),t=new w(0,1,0);return new Vs({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:on[lt]},outputEncoding:{value:on[lt]}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${na()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function so(){const r=new Y(1,1);return new Vs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:on[lt]},outputEncoding:{value:on[lt]}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${na()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function ro(){return new Vs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:on[lt]},outputEncoding:{value:on[lt]}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${na()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function ta(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function na(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function kp(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping,c=l===zr||l===Br,h=l===Gi||l===Hi;if(c||h){if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){const d=r.getRenderTarget();t===null&&(t=new Fp(r));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),r.setRenderTarget(d),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Op(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gp(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const p=u.morphAttributes;for(const g in p){const y=p[g];for(let x=0,f=y.length;x<f;x++)e.update(y[x],34962)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let y=0;if(p!==null){const m=p.array;y=p.version;for(let E=0,_=m.length;E<_;E+=3){const T=m[E+0],A=m[E+1],v=m[E+2];d.push(T,A,A,v,v,T)}}else{const m=g.array;y=g.version;for(let E=0,_=m.length/3-1;E<_;E+=3){const T=E+0,A=E+1,v=E+2;d.push(T,A,A,v,v,T)}}const x=new(rl(d)>65535?cl:ll)(d,1);x.version=y;const f=s.get(u);f&&e.remove(f),s.set(u,x)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Hp(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,p){r.drawElements(s,p,o,d*l),t.update(p,s,1)}function u(d,p,g){if(g===0)return;let y,x;if(i)y=r,x="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[x](s,p,o,d*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function Vp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}class ia extends st{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=et,this.minFilter=et,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}ia.prototype.isDataTexture2DArray=!0;function Wp(r,e){return r[0]-e[0]}function qp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function ao(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function Xp(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new w,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position.length;let y=s.get(h);if(y===void 0||y.count!==g){y!==void 0&&y.texture.dispose();const m=h.morphAttributes.normal!==void 0,E=h.morphAttributes.position,_=h.morphAttributes.normal||[],T=h.attributes.position.count,A=m===!0?2:1;let v=T*A,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const W=new Float32Array(v*R*4*g),F=new ia(W,v,R,g);F.format=ut,F.type=en;const C=A*4;for(let j=0;j<g;j++){const I=E[j],D=_[j],z=v*R*4*j;for(let U=0;U<I.count;U++){a.fromBufferAttribute(I,U),I.normalized===!0&&ao(a,I);const B=U*C;W[z+B+0]=a.x,W[z+B+1]=a.y,W[z+B+2]=a.z,W[z+B+3]=0,m===!0&&(a.fromBufferAttribute(D,U),D.normalized===!0&&ao(a,D),W[z+B+4]=a.x,W[z+B+5]=a.y,W[z+B+6]=a.z,W[z+B+7]=0)}}y={count:g,texture:F,size:new Y(v,R)},s.set(h,y)}let x=0;for(let m=0;m<p.length;m++)x+=p[m];const f=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",f),d.getUniforms().setValue(r,"morphTargetInfluences",p),d.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}else{const g=p===void 0?0:p.length;let y=n[h.id];if(y===void 0||y.length!==g){y=[];for(let _=0;_<g;_++)y[_]=[_,0];n[h.id]=y}for(let _=0;_<g;_++){const T=y[_];T[0]=_,T[1]=p[_]}y.sort(qp);for(let _=0;_<8;_++)_<g&&y[_][1]?(o[_][0]=y[_][0],o[_][1]=y[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Wp);const x=h.morphAttributes.position,f=h.morphAttributes.normal;let m=0;for(let _=0;_<8;_++){const T=o[_],A=T[0],v=T[1];A!==Number.MAX_SAFE_INTEGER&&v?(x&&h.getAttribute("morphTarget"+_)!==x[A]&&h.setAttribute("morphTarget"+_,x[A]),f&&h.getAttribute("morphNormal"+_)!==f[A]&&h.setAttribute("morphNormal"+_,f[A]),i[_]=v,m+=v):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),f&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const E=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Yp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class fl extends st{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=et,this.minFilter=et,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}fl.prototype.isDataTexture3D=!0;const ml=new st,Zp=new ia,jp=new fl,gl=new Gs,oo=[],lo=[],co=new Float32Array(16),ho=new Float32Array(9),uo=new Float32Array(4);function li(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=oo[i];if(s===void 0&&(s=new Float32Array(i),oo[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ct(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function yl(r,e){let t=lo[e];t===void 0&&(t=new Int32Array(e),lo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Jp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $p(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2fv(this.addr,e),ct(t,e)}}function Qp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;r.uniform3fv(this.addr,e),ct(t,e)}}function Kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4fv(this.addr,e),ct(t,e)}}function ef(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(pt(t,n))return;uo.set(n),r.uniformMatrix2fv(this.addr,!1,uo),ct(t,n)}}function tf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(pt(t,n))return;ho.set(n),r.uniformMatrix3fv(this.addr,!1,ho),ct(t,n)}}function nf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(pt(t,n))return;co.set(n),r.uniformMatrix4fv(this.addr,!1,co),ct(t,n)}}function sf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function rf(r,e){const t=this.cache;pt(t,e)||(r.uniform2iv(this.addr,e),ct(t,e))}function af(r,e){const t=this.cache;pt(t,e)||(r.uniform3iv(this.addr,e),ct(t,e))}function of(r,e){const t=this.cache;pt(t,e)||(r.uniform4iv(this.addr,e),ct(t,e))}function lf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function cf(r,e){const t=this.cache;pt(t,e)||(r.uniform2uiv(this.addr,e),ct(t,e))}function hf(r,e){const t=this.cache;pt(t,e)||(r.uniform3uiv(this.addr,e),ct(t,e))}function uf(r,e){const t=this.cache;pt(t,e)||(r.uniform4uiv(this.addr,e),ct(t,e))}function df(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||ml,i)}function pf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jp,i)}function ff(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||gl,i)}function mf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zp,i)}function gf(r){switch(r){case 5126:return Jp;case 35664:return $p;case 35665:return Qp;case 35666:return Kp;case 35674:return ef;case 35675:return tf;case 35676:return nf;case 5124:case 35670:return sf;case 35667:case 35671:return rf;case 35668:case 35672:return af;case 35669:case 35673:return of;case 5125:return lf;case 36294:return cf;case 36295:return hf;case 36296:return uf;case 35678:case 36198:case 36298:case 36306:case 35682:return df;case 35679:case 36299:case 36307:return pf;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return mf}}function yf(r,e){r.uniform1fv(this.addr,e)}function xf(r,e){const t=li(e,this.size,2);r.uniform2fv(this.addr,t)}function vf(r,e){const t=li(e,this.size,3);r.uniform3fv(this.addr,t)}function _f(r,e){const t=li(e,this.size,4);r.uniform4fv(this.addr,t)}function Mf(r,e){const t=li(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function bf(r,e){const t=li(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function wf(r,e){const t=li(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Sf(r,e){r.uniform1iv(this.addr,e)}function Ef(r,e){r.uniform2iv(this.addr,e)}function Tf(r,e){r.uniform3iv(this.addr,e)}function Af(r,e){r.uniform4iv(this.addr,e)}function Cf(r,e){r.uniform1uiv(this.addr,e)}function Lf(r,e){r.uniform2uiv(this.addr,e)}function Rf(r,e){r.uniform3uiv(this.addr,e)}function Pf(r,e){r.uniform4uiv(this.addr,e)}function Df(r,e,t){const n=e.length,i=yl(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||ml,i[s])}function If(r,e,t){const n=e.length,i=yl(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||gl,i[s])}function Uf(r){switch(r){case 5126:return yf;case 35664:return xf;case 35665:return vf;case 35666:return _f;case 35674:return Mf;case 35675:return bf;case 35676:return wf;case 5124:case 35670:return Sf;case 35667:case 35671:return Ef;case 35668:case 35672:return Tf;case 35669:case 35673:return Af;case 5125:return Cf;case 36294:return Lf;case 36295:return Rf;case 36296:return Pf;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35680:case 36300:case 36308:case 36293:return If}}function Ff(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=gf(e.type)}function xl(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Uf(e.type)}xl.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),ct(e,r)};function vl(r){this.id=r,this.seq=[],this.map={}}vl.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.setValue(r,e[a.id],t)}};const Ar=/(\w+)(\])?(\[|\.)?/g;function po(r,e){r.seq.push(e),r.map[e.id]=e}function Nf(r,e,t){const n=r.name,i=n.length;for(Ar.lastIndex=0;;){const s=Ar.exec(n),a=Ar.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){po(t,c===void 0?new Ff(o,r,e):new xl(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new vl(o),po(t,u)),t=u}}}function sn(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);Nf(i,s,this)}}sn.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)};sn.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)};sn.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,n)}};sn.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function fo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let zf=0;function Bf(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function _l(r){switch(r){case lt:return["Linear","( value )"];case En:return["sRGB","( value )"];case Qr:return["RGBE","( value )"];case nl:return["RGBM","( value, 7.0 )"];case il:return["RGBM","( value, 16.0 )"];case sl:return["RGBD","( value, 256.0 )"];case $r:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Lh:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function mo(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+Bf(r.getShaderSource(e))}function vn(r,e){const t=_l(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function kf(r,e){const t=_l(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Of(r,e){let t;switch(e){case Ac:t="Linear";break;case Cc:t="Reinhard";break;case Lc:t="OptimizedCineon";break;case Rc:t="ACESFilmic";break;case Pc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gf(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function Hf(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vf(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ai(r){return r!==""}function go(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hr(r){return r.replace(Wf,qf)}function qf(r,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Hr(t)}const Xf=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Yf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xo(r){return r.replace(Yf,Ml).replace(Xf,Zf)}function Zf(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ml(r,e,t,n)}function Ml(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function vo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Jo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Jf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gi:case Hi:e="ENVMAP_TYPE_CUBE";break;case Bs:case jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $f(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hi:case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function Qf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zs:e="ENVMAP_BLENDING_MULTIPLY";break;case Ec:e="ENVMAP_BLENDING_MIX";break;case Tc:e="ENVMAP_BLENDING_ADD";break}return e}function Kf(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=jf(t),c=Jf(t),h=$f(t),u=Qf(t),d=r.gammaFactor>0?r.gammaFactor:1,p=t.isWebGL2?"":Gf(t),g=Hf(s),y=i.createProgram();let x,f,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[g].filter(Ai).join(`
`),x.length>0&&(x+=`
`),f=[p,g].filter(Ai).join(`
`),f.length>0&&(f+=`
`)):(x=[vo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),f=[p,vo(t),"#define SHADER_NAME "+t.shaderName,g,"#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Re.tonemapping_pars_fragment:"",t.toneMapping!==wn?Of("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===$n?"#define OPAQUE":"",Re.encodings_pars_fragment,t.map?vn("mapTexelToLinear",t.mapEncoding):"",t.matcap?vn("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?vn("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?vn("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?vn("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?vn("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?vn("lightMapTexelToLinear",t.lightMapEncoding):"",kf("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ai).join(`
`)),a=Hr(a),a=go(a,t),a=yo(a,t),o=Hr(o),o=go(o,t),o=yo(o,t),a=xo(a),o=xo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",t.glslVersion===Oa?"":"out highp vec4 pc_fragColor;",t.glslVersion===Oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=m+x+a,_=m+f+o,T=fo(i,35633,E),A=fo(i,35632,_);if(i.attachShader(y,T),i.attachShader(y,A),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y),r.debug.checkShaderErrors){const W=i.getProgramInfoLog(y).trim(),F=i.getShaderInfoLog(T).trim(),C=i.getShaderInfoLog(A).trim();let j=!0,I=!0;if(i.getProgramParameter(y,35714)===!1){j=!1;const D=mo(i,T,"vertex"),z=mo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,35715)+`

Program Info Log: `+W+`
`+D+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(F===""||C==="")&&(I=!1);I&&(this.diagnostics={runnable:j,programLog:W,vertexShader:{log:F,prefix:x},fragmentShader:{log:C,prefix:f}})}i.deleteShader(T),i.deleteShader(A);let v;this.getUniforms=function(){return v===void 0&&(v=new sn(i,y)),v};let R;return this.getAttributes=function(){return R===void 0&&(R=Vf(i,y)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.name=t.shaderName,this.id=zf++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=A,this}function em(r,e,t,n,i,s,a){const o=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,h=i.floatVertexTextures,u=i.maxVertexUniforms,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},y=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function x(v){const W=v.skeleton.bones;if(h)return 1024;{const C=Math.floor((u-20)/4),j=Math.min(C,W.length);return j<W.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+W.length+" bones. This GPU supports "+j+"."),0):j}}function f(v){let R;return v&&v.isTexture?R=v.encoding:v&&v.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),R=v.texture.encoding):R=lt,l&&v&&v.isTexture&&v.format===ut&&v.type===an&&v.encoding===En&&(R=lt),R}function m(v,R,W,F,C){const j=F.fog,I=v.isMeshStandardMaterial?F.environment:null,D=(v.isMeshStandardMaterial?t:e).get(v.envMap||I),z=g[v.type],U=C.isSkinnedMesh?x(C):0;v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let B,K;if(z){const X=Pt[z];B=X.vertexShader,K=X.fragmentShader}else B=v.vertexShader,K=v.fragmentShader;const le=r.getRenderTarget(),ye=v.alphaTest>0,se=v.clearcoat>0;return{isWebGL2:l,shaderID:z,shaderName:v.type,vertexShader:B,fragmentShader:K,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:C.isInstancedMesh===!0,instancingColor:C.isInstancedMesh===!0&&C.instanceColor!==null,supportsVertexTextures:d,outputEncoding:le!==null?f(le.texture):r.outputEncoding,map:!!v.map,mapEncoding:f(v.map),matcap:!!v.matcap,matcapEncoding:f(v.matcap),envMap:!!D,envMapMode:D&&D.mapping,envMapEncoding:f(D),envMapCubeUV:!!D&&(D.mapping===Bs||D.mapping===jr),lightMap:!!v.lightMap,lightMapEncoding:f(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:f(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Dh,tangentSpaceNormalMap:v.normalMapType===ii,clearcoat:se,clearcoatMap:se&&!!v.clearcoatMap,clearcoatRoughnessMap:se&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:se&&!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,specularColorMapEncoding:f(v.specularColorMap),alphaMap:!!v.alphaMap,alphaTest:ye,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenColorMapEncoding:f(v.sheenColorMap),sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!C.geometry&&!!C.geometry.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!C.geometry&&!!C.geometry.attributes.color&&C.geometry.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||!!v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!j,useFog:v.fog,fogExp2:j&&j.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:c,skinning:C.isSkinnedMesh===!0&&U>0,maxBones:U,useVertexTexture:h,morphTargets:!!C.geometry&&!!C.geometry.morphAttributes.position,morphNormals:!!C.geometry&&!!C.geometry.morphAttributes.normal,morphTargetsCount:C.geometry&&C.geometry.morphAttributes.position?C.geometry.morphAttributes.position.length:0,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:v.format,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:wn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ei,flipSided:v.side===Je,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function E(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(Ha(v.fragmentShader)),R.push(Ha(v.vertexShader))),v.defines!==void 0)for(const W in v.defines)R.push(W),R.push(v.defines[W]);if(v.isRawShaderMaterial===!1){for(let W=0;W<y.length;W++)R.push(v[y[W]]);R.push(r.outputEncoding),R.push(r.gammaFactor)}return R.push(v.customProgramCacheKey),R.join()}function _(v){const R=g[v.type];let W;if(R){const F=Pt[R];W=$h.clone(F.uniforms)}else W=v.uniforms;return W}function T(v,R){let W;for(let F=0,C=o.length;F<C;F++){const j=o[F];if(j.cacheKey===R){W=j,++W.usedTimes;break}}return W===void 0&&(W=new Kf(r,R,v,s),o.push(W)),W}function A(v){if(--v.usedTimes===0){const R=o.indexOf(v);o[R]=o[o.length-1],o.pop(),v.destroy()}}return{getParameters:m,getProgramCacheKey:E,getUniforms:_,acquireProgram:T,releaseProgram:A,programs:o}}function tm(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function nm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function _o(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Mo(r){const e=[];let t=0;const n=[],i=[],s=[],a={id:-1};function o(){t=0,n.length=0,i.length=0,s.length=0}function l(p,g,y,x,f,m){let E=e[t];const _=r.get(y);return E===void 0?(E={id:p.id,object:p,geometry:g,material:y,program:_.program||a,groupOrder:x,renderOrder:p.renderOrder,z:f,group:m},e[t]=E):(E.id=p.id,E.object=p,E.geometry=g,E.material=y,E.program=_.program||a,E.groupOrder=x,E.renderOrder=p.renderOrder,E.z=f,E.group=m),t++,E}function c(p,g,y,x,f,m){const E=l(p,g,y,x,f,m);y.transmission>0?i.push(E):y.transparent===!0?s.push(E):n.push(E)}function h(p,g,y,x,f,m){const E=l(p,g,y,x,f,m);y.transmission>0?i.unshift(E):y.transparent===!0?s.unshift(E):n.unshift(E)}function u(p,g){n.length>1&&n.sort(p||nm),i.length>1&&i.sort(g||_o),s.length>1&&s.sort(g||_o)}function d(){for(let p=t,g=e.length;p<g;p++){const y=e[p];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.program=null,y.group=null}}return{opaque:n,transmissive:i,transparent:s,init:o,push:c,unshift:h,finish:d,sort:u}}function im(r){let e=new WeakMap;function t(i,s){let a;return e.has(i)===!1?(a=new Mo(r),e.set(i,[a])):s>=e.get(i).length?(a=new Mo(r),e.get(i).push(a)):a=e.get(i)[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function sm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new de};break;case"SpotLight":t={position:new w,direction:new w,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new w,halfWidth:new w,halfHeight:new w};break}return r[e.id]=t,t}}}function rm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let am=0;function om(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function lm(r,e){const t=new sm,n=rm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new w);const s=new w,a=new ve,o=new ve;function l(h,u){let d=0,p=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let y=0,x=0,f=0,m=0,E=0,_=0,T=0,A=0;h.sort(om);const v=u!==!0?Math.PI:1;for(let W=0,F=h.length;W<F;W++){const C=h[W],j=C.color,I=C.intensity,D=C.distance,z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=j.r*I*v,p+=j.g*I*v,g+=j.b*I*v;else if(C.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(C.sh.coefficients[U],I);else if(C.isDirectionalLight){const U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity*v),C.castShadow){const B=C.shadow,K=n.get(C);K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,i.directionalShadow[y]=K,i.directionalShadowMap[y]=z,i.directionalShadowMatrix[y]=C.shadow.matrix,_++}i.directional[y]=U,y++}else if(C.isSpotLight){const U=t.get(C);if(U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(j).multiplyScalar(I*v),U.distance=D,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,C.castShadow){const B=C.shadow,K=n.get(C);K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,i.spotShadow[f]=K,i.spotShadowMap[f]=z,i.spotShadowMatrix[f]=C.shadow.matrix,A++}i.spot[f]=U,f++}else if(C.isRectAreaLight){const U=t.get(C);U.color.copy(j).multiplyScalar(I),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=U,m++}else if(C.isPointLight){const U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity*v),U.distance=C.distance,U.decay=C.decay,C.castShadow){const B=C.shadow,K=n.get(C);K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,K.shadowCameraNear=B.camera.near,K.shadowCameraFar=B.camera.far,i.pointShadow[x]=K,i.pointShadowMap[x]=z,i.pointShadowMatrix[x]=C.shadow.matrix,T++}i.point[x]=U,x++}else if(C.isHemisphereLight){const U=t.get(C);U.skyColor.copy(C.color).multiplyScalar(I*v),U.groundColor.copy(C.groundColor).multiplyScalar(I*v),i.hemi[E]=U,E++}}m>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==y||R.pointLength!==x||R.spotLength!==f||R.rectAreaLength!==m||R.hemiLength!==E||R.numDirectionalShadows!==_||R.numPointShadows!==T||R.numSpotShadows!==A)&&(i.directional.length=y,i.spot.length=f,i.rectArea.length=m,i.point.length=x,i.hemi.length=E,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=T,i.spotShadowMatrix.length=A,R.directionalLength=y,R.pointLength=x,R.spotLength=f,R.rectAreaLength=m,R.hemiLength=E,R.numDirectionalShadows=_,R.numPointShadows=T,R.numSpotShadows=A,i.version=am++)}function c(h,u){let d=0,p=0,g=0,y=0,x=0;const f=u.matrixWorldInverse;for(let m=0,E=h.length;m<E;m++){const _=h[m];if(_.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),d++}else if(_.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),g++}else if(_.isRectAreaLight){const T=i.rectArea[y];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),o.identity(),a.copy(_.matrixWorld),a.premultiply(f),o.extractRotation(a),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),y++}else if(_.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){const T=i.hemi[x];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(f),T.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function bo(r,e){const t=new lm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function cm(r,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new bo(r,e),t.set(s,[o])):a>=t.get(s).length?(o=new bo(r,e),t.get(s).push(o)):o=t.get(s)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class bl extends ht{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}bl.prototype.isMeshDepthMaterial=!0;class wl extends ht{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}wl.prototype.isMeshDistanceMaterial=!0;const hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,um=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sl(r,e,t){let n=new Hs;const i=new Y,s=new Y,a=new ke,o=new bl({depthPacking:Ph}),l=new wl,c={},h=t.maxTextureSize,u={0:Je,1:Ui,2:ei},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:hm,fragmentShader:um}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new oe(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo,this.render=function(_,T,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||_.length===0)return;const v=r.getRenderTarget(),R=r.getActiveCubeFace(),W=r.getActiveMipmapLevel(),F=r.state;F.setBlending(tn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let C=0,j=_.length;C<j;C++){const I=_[C],D=I.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const z=D.getFrameExtents();if(i.multiply(z),s.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/z.x),i.x=s.x*z.x,D.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/z.y),i.y=s.y*z.y,D.mapSize.y=s.y)),D.map===null&&!D.isPointLightShadow&&this.type===Ti){const B={minFilter:Mt,magFilter:Mt,format:ut};D.map=new It(i.x,i.y,B),D.map.texture.name=I.name+".shadowMap",D.mapPass=new It(i.x,i.y,B),D.camera.updateProjectionMatrix()}if(D.map===null){const B={minFilter:et,magFilter:et,format:ut};D.map=new It(i.x,i.y,B),D.map.texture.name=I.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();const U=D.getViewportCount();for(let B=0;B<U;B++){const K=D.getViewport(B);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),F.viewport(a),D.updateMatrices(I,B),n=D.getFrustum(),E(T,A,D.camera,I,this.type)}!D.isPointLightShadow&&this.type===Ti&&f(D,A),D.needsUpdate=!1}x.needsUpdate=!1,r.setRenderTarget(v,R,W)};function f(_,T){const A=e.update(y);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,p.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(T,null,A,d,y,null),p.uniforms.shadow_pass.value=_.mapPass.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(T,null,A,p,y,null)}function m(_,T,A,v,R,W,F){let C=null;const j=v.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(j!==void 0?C=j:C=v.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0){const I=C.uuid,D=A.uuid;let z=c[I];z===void 0&&(z={},c[I]=z);let U=z[D];U===void 0&&(U=C.clone(),z[D]=U),C=U}return C.visible=A.visible,C.wireframe=A.wireframe,F===Ti?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:u[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaTest,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(v.matrixWorld),C.nearDistance=R,C.farDistance=W),C}function E(_,T,A,v,R){if(_.visible===!1)return;if(_.layers.test(T.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&R===Ti)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,_.matrixWorld);const C=e.update(_),j=_.material;if(Array.isArray(j)){const I=C.groups;for(let D=0,z=I.length;D<z;D++){const U=I[D],B=j[U.materialIndex];if(B&&B.visible){const K=m(_,C,B,v,A.near,A.far,R);r.renderBufferDirect(A,null,C,K,_,U)}}}else if(j.visible){const I=m(_,C,j,v,A.near,A.far,R);r.renderBufferDirect(A,null,C,I,_,null)}}const F=_.children;for(let C=0,j=F.length;C<j;C++)E(F[C],T,A,v,R)}}function dm(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const ie=new ke;let q=null;const me=new ke(0,0,0,0);return{setMask:function(ce){q!==ce&&!L&&(r.colorMask(ce,ce,ce,ce),q=ce)},setLocked:function(ce){L=ce},setClear:function(ce,Pe,rt,at,Wt){Wt===!0&&(ce*=at,Pe*=at,rt*=at),ie.set(ce,Pe,rt,at),me.equals(ie)===!1&&(r.clearColor(ce,Pe,rt,at),me.copy(ie))},reset:function(){L=!1,q=null,me.set(-1,0,0,0)}}}function s(){let L=!1,ie=null,q=null,me=null;return{setTest:function(ce){ce?Q(2929):he(2929)},setMask:function(ce){ie!==ce&&!L&&(r.depthMask(ce),ie=ce)},setFunc:function(ce){if(q!==ce){if(ce)switch(ce){case xc:r.depthFunc(512);break;case vc:r.depthFunc(519);break;case _c:r.depthFunc(513);break;case Nr:r.depthFunc(515);break;case Mc:r.depthFunc(514);break;case bc:r.depthFunc(518);break;case wc:r.depthFunc(516);break;case Sc:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);q=ce}},setLocked:function(ce){L=ce},setClear:function(ce){me!==ce&&(r.clearDepth(ce),me=ce)},reset:function(){L=!1,ie=null,q=null,me=null}}}function a(){let L=!1,ie=null,q=null,me=null,ce=null,Pe=null,rt=null,at=null,Wt=null;return{setTest:function(Ze){L||(Ze?Q(2960):he(2960))},setMask:function(Ze){ie!==Ze&&!L&&(r.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,Nt,St){(q!==Ze||me!==Nt||ce!==St)&&(r.stencilFunc(Ze,Nt,St),q=Ze,me=Nt,ce=St)},setOp:function(Ze,Nt,St){(Pe!==Ze||rt!==Nt||at!==St)&&(r.stencilOp(Ze,Nt,St),Pe=Ze,rt=Nt,at=St)},setLocked:function(Ze){L=Ze},setClear:function(Ze){Wt!==Ze&&(r.clearStencil(Ze),Wt=Ze)},reset:function(){L=!1,ie=null,q=null,me=null,ce=null,Pe=null,rt=null,at=null,Wt=null}}}const o=new i,l=new s,c=new a;let h={},u=null,d={},p=null,g=!1,y=null,x=null,f=null,m=null,E=null,_=null,T=null,A=!1,v=null,R=null,W=null,F=null,C=null;const j=r.getParameter(35661);let I=!1,D=0;const z=r.getParameter(7938);z.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(z)[1]),I=D>=1):z.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),I=D>=2);let U=null,B={};const K=r.getParameter(3088),le=r.getParameter(2978),ye=new ke().fromArray(K),se=new ke().fromArray(le);function Ee(L,ie,q){const me=new Uint8Array(4),ce=r.createTexture();r.bindTexture(L,ce),r.texParameteri(L,10241,9728),r.texParameteri(L,10240,9728);for(let Pe=0;Pe<q;Pe++)r.texImage2D(ie+Pe,0,6408,1,1,0,6408,5121,me);return ce}const X={};X[3553]=Ee(3553,3553,1),X[34067]=Ee(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Q(2929),l.setFunc(Nr),Z(!1),ee(ba),Q(2884),Ae(tn);function Q(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function he(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function H(L){L!==u&&(r.bindFramebuffer(36160,L),u=L)}function xe(L,ie){return ie===null&&u!==null&&(ie=u),d[L]!==ie?(r.bindFramebuffer(L,ie),d[L]=ie,n&&(L===36009&&(d[36160]=ie),L===36160&&(d[36009]=ie)),!0):!1}function we(L){return p!==L?(r.useProgram(L),p=L,!0):!1}const re={[Xn]:32774,[oc]:32778,[lc]:32779};if(n)re[Ta]=32775,re[Aa]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(re[Ta]=L.MIN_EXT,re[Aa]=L.MAX_EXT)}const ue={[cc]:0,[hc]:1,[uc]:768,[Qo]:770,[yc]:776,[mc]:774,[pc]:772,[dc]:769,[Ko]:771,[gc]:775,[fc]:773};function Ae(L,ie,q,me,ce,Pe,rt,at){if(L===tn){g===!0&&(he(3042),g=!1);return}if(g===!1&&(Q(3042),g=!0),L!==ac){if(L!==y||at!==A){if((x!==Xn||E!==Xn)&&(r.blendEquation(32774),x=Xn,E=Xn),at)switch(L){case Li:r.blendFuncSeparate(1,771,1,771);break;case wa:r.blendFunc(1,1);break;case Sa:r.blendFuncSeparate(0,0,769,771);break;case Ea:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Li:r.blendFuncSeparate(770,771,1,771);break;case wa:r.blendFunc(770,1);break;case Sa:r.blendFunc(0,769);break;case Ea:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,m=null,_=null,T=null,y=L,A=at}return}ce=ce||ie,Pe=Pe||q,rt=rt||me,(ie!==x||ce!==E)&&(r.blendEquationSeparate(re[ie],re[ce]),x=ie,E=ce),(q!==f||me!==m||Pe!==_||rt!==T)&&(r.blendFuncSeparate(ue[q],ue[me],ue[Pe],ue[rt]),f=q,m=me,_=Pe,T=rt),y=L,A=null}function G(L,ie){L.side===ei?he(2884):Q(2884);let q=L.side===Je;ie&&(q=!q),Z(q),L.blending===Li&&L.transparent===!1?Ae(tn):Ae(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const me=L.stencilWrite;c.setTest(me),me&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(32926):he(32926)}function Z(L){v!==L&&(L?r.frontFace(2304):r.frontFace(2305),v=L)}function ee(L){L!==ic?(Q(2884),L!==R&&(L===ba?r.cullFace(1029):L===sc?r.cullFace(1028):r.cullFace(1032))):he(2884),R=L}function pe(L){L!==W&&(I&&r.lineWidth(L),W=L)}function ne(L,ie,q){L?(Q(32823),(F!==ie||C!==q)&&(r.polygonOffset(ie,q),F=ie,C=q)):he(32823)}function S(L){L?Q(3089):he(3089)}function M(L){L===void 0&&(L=33984+j-1),U!==L&&(r.activeTexture(L),U=L)}function O(L,ie){U===null&&M();let q=B[U];q===void 0&&(q={type:void 0,texture:void 0},B[U]=q),(q.type!==L||q.texture!==ie)&&(r.bindTexture(L,ie||X[L]),q.type=L,q.texture=ie)}function J(){const L=B[U];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(L){ye.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ye.copy(L))}function Se(L){se.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),se.copy(L))}function fe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},U=null,B={},u=null,d={},p=null,g=!1,y=null,x=null,f=null,m=null,E=null,_=null,T=null,A=!1,v=null,R=null,W=null,F=null,C=null,ye.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Q,disable:he,bindFramebuffer:xe,bindXRFramebuffer:H,useProgram:we,setBlending:Ae,setMaterial:G,setFlipSided:Z,setCullFace:ee,setLineWidth:pe,setPolygonOffset:ne,setScissorTest:S,activeTexture:M,bindTexture:O,unbindTexture:J,compressedTexImage2D:$,texImage2D:ae,texImage3D:Me,scissor:ge,viewport:Se,reset:fe}}function pm(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=new WeakMap;let p,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(S,M){return g?new OffscreenCanvas(S,M):Os("canvas")}function x(S,M,O,J){let $=1;if((S.width>J||S.height>J)&&($=J/Math.max(S.width,S.height)),$<1||M===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ae=M?Nh:Math.floor,Me=ae($*S.width),ge=ae($*S.height);p===void 0&&(p=y(Me,ge));const Se=O?y(Me,ge):p;return Se.width=Me,Se.height=ge,Se.getContext("2d").drawImage(S,0,0,Me,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Me+"x"+ge+")."),Se}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function f(S){return Ga(S.width)&&Ga(S.height)}function m(S){return o?!1:S.wrapS!==vt||S.wrapT!==vt||S.minFilter!==et&&S.minFilter!==Mt}function E(S,M){return S.generateMipmaps&&M&&S.minFilter!==et&&S.minFilter!==Mt}function _(S,M,O,J,$=1){r.generateMipmap(S);const ae=n.get(M);ae.__maxMipLevel=Math.log2(Math.max(O,J,$))}function T(S,M,O,J){if(o===!1)return M;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let $=M;return M===6403&&(O===5126&&($=33326),O===5131&&($=33325),O===5121&&($=33321)),M===6407&&(O===5126&&($=34837),O===5131&&($=34843),O===5121&&($=32849)),M===6408&&(O===5126&&($=34836),O===5131&&($=34842),O===5121&&($=J===En?35907:32856)),($===33325||$===33326||$===34842||$===34836)&&e.get("EXT_color_buffer_float"),$}function A(S){return S===et||S===Ca||S===La?9728:9729}function v(S){const M=S.target;M.removeEventListener("dispose",v),W(M),M.isVideoTexture&&d.delete(M),a.memory.textures--}function R(S){const M=S.target;M.removeEventListener("dispose",R),F(M)}function W(S){const M=n.get(S);M.__webglInit!==void 0&&(r.deleteTexture(M.__webglTexture),n.remove(S))}function F(S){const M=S.texture,O=n.get(S),J=n.get(M);if(S){if(J.__webglTexture!==void 0&&(r.deleteTexture(J.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++)r.deleteFramebuffer(O.__webglFramebuffer[$]),O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[$]);else r.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer&&r.deleteRenderbuffer(O.__webglColorRenderbuffer),O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer);if(S.isWebGLMultipleRenderTargets)for(let $=0,ae=M.length;$<ae;$++){const Me=n.get(M[$]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(M[$])}n.remove(M),n.remove(S)}}let C=0;function j(){C=0}function I(){const S=C;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),C+=1,S}function D(S,M){const O=n.get(S);if(S.isVideoTexture&&G(S),S.version>0&&O.__version!==S.version){const J=S.image;if(J===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(O,S,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,O.__webglTexture)}function z(S,M){const O=n.get(S);if(S.version>0&&O.__version!==S.version){Ee(O,S,M);return}t.activeTexture(33984+M),t.bindTexture(35866,O.__webglTexture)}function U(S,M){const O=n.get(S);if(S.version>0&&O.__version!==S.version){Ee(O,S,M);return}t.activeTexture(33984+M),t.bindTexture(32879,O.__webglTexture)}function B(S,M){const O=n.get(S);if(S.version>0&&O.__version!==S.version){X(O,S,M);return}t.activeTexture(33984+M),t.bindTexture(34067,O.__webglTexture)}const K={[kr]:10497,[vt]:33071,[Or]:33648},le={[et]:9728,[Ca]:9984,[La]:9986,[Mt]:9729,[Dc]:9985,[ks]:9987};function ye(S,M,O){if(O?(r.texParameteri(S,10242,K[M.wrapS]),r.texParameteri(S,10243,K[M.wrapT]),(S===32879||S===35866)&&r.texParameteri(S,32882,K[M.wrapR]),r.texParameteri(S,10240,le[M.magFilter]),r.texParameteri(S,10241,le[M.minFilter])):(r.texParameteri(S,10242,33071),r.texParameteri(S,10243,33071),(S===32879||S===35866)&&r.texParameteri(S,32882,33071),(M.wrapS!==vt||M.wrapT!==vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,10240,A(M.magFilter)),r.texParameteri(S,10241,A(M.minFilter)),M.minFilter!==et&&M.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(M.type===en&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Jn&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(S,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function se(S,M){S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",v),S.__webglTexture=r.createTexture(),a.memory.textures++)}function Ee(S,M,O){let J=3553;M.isDataTexture2DArray&&(J=35866),M.isDataTexture3D&&(J=32879),se(S,M),t.activeTexture(33984+O),t.bindTexture(J,S.__webglTexture),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const $=m(M)&&f(M.image)===!1,ae=x(M.image,$,!1,h),Me=f(ae)||o,ge=s.convert(M.format);let Se=s.convert(M.type),fe=T(M.internalFormat,ge,Se,M.encoding);ye(J,M,Me);let L;const ie=M.mipmaps;if(M.isDepthTexture)fe=6402,o?M.type===en?fe=36012:M.type===Cs?fe=33190:M.type===Ri?fe=35056:fe=33189:M.type===en&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Qn&&fe===6402&&M.type!==Ls&&M.type!==Cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ls,Se=s.convert(M.type)),M.format===Fi&&fe===6402&&(fe=34041,M.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ri,Se=s.convert(M.type))),t.texImage2D(3553,0,fe,ae.width,ae.height,0,ge,Se,null);else if(M.isDataTexture)if(ie.length>0&&Me){for(let q=0,me=ie.length;q<me;q++)L=ie[q],t.texImage2D(3553,q,fe,L.width,L.height,0,ge,Se,L.data);M.generateMipmaps=!1,S.__maxMipLevel=ie.length-1}else t.texImage2D(3553,0,fe,ae.width,ae.height,0,ge,Se,ae.data),S.__maxMipLevel=0;else if(M.isCompressedTexture){for(let q=0,me=ie.length;q<me;q++)L=ie[q],M.format!==ut&&M.format!==$n?ge!==null?t.compressedTexImage2D(3553,q,fe,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,q,fe,L.width,L.height,0,ge,Se,L.data);S.__maxMipLevel=ie.length-1}else if(M.isDataTexture2DArray)t.texImage3D(35866,0,fe,ae.width,ae.height,ae.depth,0,ge,Se,ae.data),S.__maxMipLevel=0;else if(M.isDataTexture3D)t.texImage3D(32879,0,fe,ae.width,ae.height,ae.depth,0,ge,Se,ae.data),S.__maxMipLevel=0;else if(ie.length>0&&Me){for(let q=0,me=ie.length;q<me;q++)L=ie[q],t.texImage2D(3553,q,fe,ge,Se,L);M.generateMipmaps=!1,S.__maxMipLevel=ie.length-1}else t.texImage2D(3553,0,fe,ge,Se,ae),S.__maxMipLevel=0;E(M,Me)&&_(J,M,ae.width,ae.height),S.__version=M.version,M.onUpdate&&M.onUpdate(M)}function X(S,M,O){if(M.image.length!==6)return;se(S,M),t.activeTexture(33984+O),t.bindTexture(34067,S.__webglTexture),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const J=M&&(M.isCompressedTexture||M.image[0].isCompressedTexture),$=M.image[0]&&M.image[0].isDataTexture,ae=[];for(let q=0;q<6;q++)!J&&!$?ae[q]=x(M.image[q],!1,!0,c):ae[q]=$?M.image[q].image:M.image[q];const Me=ae[0],ge=f(Me)||o,Se=s.convert(M.format),fe=s.convert(M.type),L=T(M.internalFormat,Se,fe,M.encoding);ye(34067,M,ge);let ie;if(J){for(let q=0;q<6;q++){ie=ae[q].mipmaps;for(let me=0;me<ie.length;me++){const ce=ie[me];M.format!==ut&&M.format!==$n?Se!==null?t.compressedTexImage2D(34069+q,me,L,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+q,me,L,ce.width,ce.height,0,Se,fe,ce.data)}}S.__maxMipLevel=ie.length-1}else{ie=M.mipmaps;for(let q=0;q<6;q++)if($){t.texImage2D(34069+q,0,L,ae[q].width,ae[q].height,0,Se,fe,ae[q].data);for(let me=0;me<ie.length;me++){const Pe=ie[me].image[q].image;t.texImage2D(34069+q,me+1,L,Pe.width,Pe.height,0,Se,fe,Pe.data)}}else{t.texImage2D(34069+q,0,L,Se,fe,ae[q]);for(let me=0;me<ie.length;me++){const ce=ie[me];t.texImage2D(34069+q,me+1,L,Se,fe,ce.image[q])}}S.__maxMipLevel=ie.length}E(M,ge)&&_(34067,M,Me.width,Me.height),S.__version=M.version,M.onUpdate&&M.onUpdate(M)}function Q(S,M,O,J,$){const ae=s.convert(O.format),Me=s.convert(O.type),ge=T(O.internalFormat,ae,Me,O.encoding);$===32879||$===35866?t.texImage3D($,0,ge,M.width,M.height,M.depth,0,ae,Me,null):t.texImage2D($,0,ge,M.width,M.height,0,ae,Me,null),t.bindFramebuffer(36160,S),r.framebufferTexture2D(36160,J,$,n.get(O).__webglTexture,0),t.bindFramebuffer(36160,null)}function he(S,M,O){if(r.bindRenderbuffer(36161,S),M.depthBuffer&&!M.stencilBuffer){let J=33189;if(O){const $=M.depthTexture;$&&$.isDepthTexture&&($.type===en?J=36012:$.type===Cs&&(J=33190));const ae=Ae(M);r.renderbufferStorageMultisample(36161,ae,J,M.width,M.height)}else r.renderbufferStorage(36161,J,M.width,M.height);r.framebufferRenderbuffer(36160,36096,36161,S)}else if(M.depthBuffer&&M.stencilBuffer){if(O){const J=Ae(M);r.renderbufferStorageMultisample(36161,J,35056,M.width,M.height)}else r.renderbufferStorage(36161,34041,M.width,M.height);r.framebufferRenderbuffer(36160,33306,36161,S)}else{const J=M.isWebGLMultipleRenderTargets===!0?M.texture[0]:M.texture,$=s.convert(J.format),ae=s.convert(J.type),Me=T(J.internalFormat,$,ae,J.encoding);if(O){const ge=Ae(M);r.renderbufferStorageMultisample(36161,ge,Me,M.width,M.height)}else r.renderbufferStorage(36161,Me,M.width,M.height)}r.bindRenderbuffer(36161,null)}function H(S,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture;if(M.depthTexture.format===Qn)r.framebufferTexture2D(36160,36096,3553,J,0);else if(M.depthTexture.format===Fi)r.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function xe(S){const M=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture){if(O)throw new Error("target.depthTexture not supported in Cube render targets");H(M.__webglFramebuffer,S)}else if(O){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=r.createRenderbuffer(),he(M.__webglDepthbuffer[J],S,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),he(M.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function we(S){const M=S.texture,O=n.get(S),J=n.get(M);S.addEventListener("dispose",R),S.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture=r.createTexture(),J.__version=M.version,a.memory.textures++);const $=S.isWebGLCubeRenderTarget===!0,ae=S.isWebGLMultipleRenderTargets===!0,Me=S.isWebGLMultisampleRenderTarget===!0,ge=M.isDataTexture3D||M.isDataTexture2DArray,Se=f(S)||o;if(o&&M.format===$n&&(M.type===en||M.type===Jn)&&(M.format=ut,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),$){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)O.__webglFramebuffer[fe]=r.createFramebuffer()}else if(O.__webglFramebuffer=r.createFramebuffer(),ae)if(i.drawBuffers){const fe=S.texture;for(let L=0,ie=fe.length;L<ie;L++){const q=n.get(fe[L]);q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(Me)if(o){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,O.__webglColorRenderbuffer);const fe=s.convert(M.format),L=s.convert(M.type),ie=T(M.internalFormat,fe,L,M.encoding),q=Ae(S);r.renderbufferStorageMultisample(36161,q,ie,S.width,S.height),t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,O.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),he(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if($){t.bindTexture(34067,J.__webglTexture),ye(34067,M,Se);for(let fe=0;fe<6;fe++)Q(O.__webglFramebuffer[fe],S,M,36064,34069+fe);E(M,Se)&&_(34067,M,S.width,S.height),t.unbindTexture()}else if(ae){const fe=S.texture;for(let L=0,ie=fe.length;L<ie;L++){const q=fe[L],me=n.get(q);t.bindTexture(3553,me.__webglTexture),ye(3553,q,Se),Q(O.__webglFramebuffer,S,q,36064+L,3553),E(q,Se)&&_(3553,q,S.width,S.height)}t.unbindTexture()}else{let fe=3553;ge&&(o?fe=M.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(fe,J.__webglTexture),ye(fe,M,Se),Q(O.__webglFramebuffer,S,M,36064,fe),E(M,Se)&&_(fe,M,S.width,S.height,S.depth),t.unbindTexture()}S.depthBuffer&&xe(S)}function re(S){const M=f(S)||o,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0,$=O.length;J<$;J++){const ae=O[J];if(E(ae,M)){const Me=S.isWebGLCubeRenderTarget?34067:3553,ge=n.get(ae).__webglTexture;t.bindTexture(Me,ge),_(Me,ae,S.width,S.height),t.unbindTexture()}}}function ue(S){if(S.isWebGLMultisampleRenderTarget)if(o){const M=S.width,O=S.height;let J=16384;S.depthBuffer&&(J|=256),S.stencilBuffer&&(J|=1024);const $=n.get(S);t.bindFramebuffer(36008,$.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,$.__webglFramebuffer),r.blitFramebuffer(0,0,M,O,0,0,M,O,J,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,$.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Ae(S){return o&&S.isWebGLMultisampleRenderTarget?Math.min(u,S.samples):0}function G(S){const M=a.render.frame;d.get(S)!==M&&(d.set(S,M),S.update())}let Z=!1,ee=!1;function pe(S,M){S&&S.isWebGLRenderTarget&&(Z===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Z=!0),S=S.texture),D(S,M)}function ne(S,M){S&&S.isWebGLCubeRenderTarget&&(ee===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ee=!0),S=S.texture),B(S,M)}this.allocateTextureUnit=I,this.resetTextureUnits=j,this.setTexture2D=D,this.setTexture2DArray=z,this.setTexture3D=U,this.setTextureCube=B,this.setupRenderTarget=we,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=ue,this.safeSetTexture2D=pe,this.safeSetTextureCube=ne}function fm(r,e,t){const n=t.isWebGL2;function i(s){let a;if(s===an)return 5121;if(s===Nc)return 32819;if(s===zc)return 32820;if(s===Bc)return 33635;if(s===Ic)return 5120;if(s===Uc)return 5122;if(s===Ls)return 5123;if(s===Fc)return 5124;if(s===Cs)return 5125;if(s===en)return 5126;if(s===Jn)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===kc)return 6406;if(s===$n)return 6407;if(s===ut)return 6408;if(s===Oc)return 6409;if(s===Gc)return 6410;if(s===Qn)return 6402;if(s===Fi)return 34041;if(s===Vc)return 6403;if(s===Wc)return 36244;if(s===qc)return 33319;if(s===Xc)return 33320;if(s===Yc)return 36248;if(s===Zc)return 36249;if(s===Ra||s===Pa||s===Da||s===Ia)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ra)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ia)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ua||s===Fa||s===Na||s===za)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ua)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Na)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===za)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Ba||s===ka)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(s===Ba)return a.COMPRESSED_RGB8_ETC2;if(s===ka)return a.COMPRESSED_RGBA8_ETC2_EAC}if(s===Jc||s===$c||s===Qc||s===Kc||s===eh||s===th||s===nh||s===ih||s===sh||s===rh||s===ah||s===oh||s===lh||s===ch||s===uh||s===dh||s===ph||s===fh||s===mh||s===gh||s===yh||s===xh||s===vh||s===_h||s===Mh||s===bh||s===wh||s===Sh)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?s:null;if(s===hh)return a=e.get("EXT_texture_compression_bptc"),a!==null?s:null;if(s===Ri)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class El extends mt{constructor(e=[]){super(),this.cameras=e}}El.prototype.isArrayCamera=!0;class bt extends Fe{constructor(){super(),this.type="Group"}}bt.prototype.isGroup=!0;const mm={type:"move"};class Cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mm))),c&&e.hand){a=!0;for(const y of e.hand.values()){const x=t.getJointPose(y,n);if(c.joints[y.jointName]===void 0){const m=new bt;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[y.jointName]=m,c.add(m)}const f=c.joints[y.jointName];x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=x.radius),f.visible=x!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class gm extends Tn{constructor(e,t){super();const n=this,i=e.state;let s=null,a=1,o=null,l="local-floor",c=null,h=null,u=null,d=null,p=null,g=!1,y=null,x=null,f=null,m=null,E=null,_=null;const T=[],A=new Map,v=new mt;v.layers.enable(1),v.viewport=new ke;const R=new mt;R.layers.enable(2),R.viewport=new ke;const W=[v,R],F=new El;F.layers.enable(1),F.layers.enable(2);let C=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=T[X];return Q===void 0&&(Q=new Cr,T[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=T[X];return Q===void 0&&(Q=new Cr,T[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=T[X];return Q===void 0&&(Q=new Cr,T[X]=Q),Q.getHandSpace()};function I(X){const Q=A.get(X.inputSource);Q&&Q.dispatchEvent({type:X.type,data:X.inputSource})}function D(){A.forEach(function(X,Q){X.disconnect(Q)}),A.clear(),C=null,j=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),u&&t.deleteFramebuffer(u),y&&t.deleteFramebuffer(y),x&&t.deleteRenderbuffer(x),f&&t.deleteRenderbuffer(f),u=null,y=null,x=null,f=null,p=null,d=null,h=null,s=null,Ee.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",D),s.addEventListener("inputsourceschange",z);const Q=t.getContextAttributes();if(Q.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0){const he={antialias:Q.antialias,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:p})}else if(t instanceof WebGLRenderingContext){const he={antialias:!0,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,he),s.updateRenderState({layers:[p]})}else{g=Q.antialias;let he=null;Q.depth&&(_=256,Q.stencil&&(_|=1024),E=Q.stencil?33306:36096,he=Q.stencil?35056:33190);const H={colorFormat:Q.alpha?32856:32849,depthFormat:he,scaleFactor:a};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(H),u=t.createFramebuffer(),s.updateRenderState({layers:[d]}),g&&(y=t.createFramebuffer(),x=t.createRenderbuffer(),t.bindRenderbuffer(36161,x),t.renderbufferStorageMultisample(36161,4,32856,d.textureWidth,d.textureHeight),i.bindFramebuffer(36160,y),t.framebufferRenderbuffer(36160,36064,36161,x),t.bindRenderbuffer(36161,null),he!==null&&(f=t.createRenderbuffer(),t.bindRenderbuffer(36161,f),t.renderbufferStorageMultisample(36161,4,he,d.textureWidth,d.textureHeight),t.framebufferRenderbuffer(36160,E,36161,f),t.bindRenderbuffer(36161,null)),i.bindFramebuffer(36160,null))}o=await s.requestReferenceSpace(l),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(X){const Q=s.inputSources;for(let he=0;he<T.length;he++)A.set(Q[he],T[he]);for(let he=0;he<X.removed.length;he++){const H=X.removed[he],xe=A.get(H);xe&&(xe.dispatchEvent({type:"disconnected",data:H}),A.delete(H))}for(let he=0;he<X.added.length;he++){const H=X.added[he],xe=A.get(H);xe&&xe.dispatchEvent({type:"connected",data:H})}}const U=new w,B=new w;function K(X,Q,he){U.setFromMatrixPosition(Q.matrixWorld),B.setFromMatrixPosition(he.matrixWorld);const H=U.distanceTo(B),xe=Q.projectionMatrix.elements,we=he.projectionMatrix.elements,re=xe[14]/(xe[10]-1),ue=xe[14]/(xe[10]+1),Ae=(xe[9]+1)/xe[5],G=(xe[9]-1)/xe[5],Z=(xe[8]-1)/xe[0],ee=(we[8]+1)/we[0],pe=re*Z,ne=re*ee,S=H/(-Z+ee),M=S*-Z;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(M),X.translateZ(S),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const O=re+S,J=ue+S,$=pe-M,ae=ne+(H-M),Me=Ae*ue/J*O,ge=G*ue/J*O;X.projectionMatrix.makePerspective($,ae,Me,ge,O,J)}function le(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;F.near=R.near=v.near=X.near,F.far=R.far=v.far=X.far,(C!==F.near||j!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),C=F.near,j=F.far);const Q=X.parent,he=F.cameras;le(F,Q);for(let xe=0;xe<he.length;xe++)le(he[xe],Q);F.matrixWorld.decompose(F.position,F.quaternion,F.scale),X.position.copy(F.position),X.quaternion.copy(F.quaternion),X.scale.copy(F.scale),X.matrix.copy(F.matrix),X.matrixWorld.copy(F.matrixWorld);const H=X.children;for(let xe=0,we=H.length;xe<we;xe++)H[xe].updateMatrixWorld(!0);he.length===2?K(F,v,R):F.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return F},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(p!==null)return p.fixedFoveation},this.setFoveation=function(X){d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let ye=null;function se(X,Q){if(c=Q.getViewerPose(o),m=Q,c!==null){const H=c.views;p!==null&&i.bindXRFramebuffer(p.framebuffer);let xe=!1;H.length!==F.cameras.length&&(F.cameras.length=0,xe=!0);for(let we=0;we<H.length;we++){const re=H[we];let ue=null;if(p!==null)ue=p.getViewport(re);else{const G=h.getViewSubImage(d,re);i.bindXRFramebuffer(u),G.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,E,3553,G.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,G.colorTexture,0),ue=G.viewport}const Ae=W[we];Ae.matrix.fromArray(re.transform.matrix),Ae.projectionMatrix.fromArray(re.projectionMatrix),Ae.viewport.set(ue.x,ue.y,ue.width,ue.height),we===0&&F.matrix.copy(Ae.matrix),xe===!0&&F.cameras.push(Ae)}g&&(i.bindXRFramebuffer(y),_!==null&&t.clear(_))}const he=s.inputSources;for(let H=0;H<T.length;H++){const xe=T[H],we=he[H];xe.update(we,Q,o)}if(ye&&ye(X,Q),g){const H=d.textureWidth,xe=d.textureHeight;i.bindFramebuffer(36008,y),i.bindFramebuffer(36009,u),t.invalidateFramebuffer(36008,[E]),t.invalidateFramebuffer(36009,[E]),t.blitFramebuffer(0,0,H,xe,0,0,H,xe,16384,9728),t.invalidateFramebuffer(36008,[36064]),i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),i.bindFramebuffer(36160,y)}m=null}const Ee=new ul;Ee.setAnimationLoop(se),this.setAnimationLoop=function(X){ye=X},this.dispose=function(){}}}function ym(r){function e(f,m){f.fogColor.value.copy(m.color),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function t(f,m,E,_,T){m.isMeshBasicMaterial?n(f,m):m.isMeshLambertMaterial?(n(f,m),l(f,m)):m.isMeshToonMaterial?(n(f,m),h(f,m)):m.isMeshPhongMaterial?(n(f,m),c(f,m)):m.isMeshStandardMaterial?(n(f,m),m.isMeshPhysicalMaterial?d(f,m,T):u(f,m)):m.isMeshMatcapMaterial?(n(f,m),p(f,m)):m.isMeshDepthMaterial?(n(f,m),g(f,m)):m.isMeshDistanceMaterial?(n(f,m),y(f,m)):m.isMeshNormalMaterial?(n(f,m),x(f,m)):m.isLineBasicMaterial?(i(f,m),m.isLineDashedMaterial&&s(f,m)):m.isPointsMaterial?a(f,m,E,_):m.isSpriteMaterial?o(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.specularMap&&(f.specularMap.value=m.specularMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const E=r.get(m).envMap;if(E){f.envMap.value=E,f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio;const A=r.get(E).__maxMipLevel;A!==void 0&&(f.maxMipLevel.value=A)}m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity);let _;m.map?_=m.map:m.specularMap?_=m.specularMap:m.displacementMap?_=m.displacementMap:m.normalMap?_=m.normalMap:m.bumpMap?_=m.bumpMap:m.roughnessMap?_=m.roughnessMap:m.metalnessMap?_=m.metalnessMap:m.alphaMap?_=m.alphaMap:m.emissiveMap?_=m.emissiveMap:m.clearcoatMap?_=m.clearcoatMap:m.clearcoatNormalMap?_=m.clearcoatNormalMap:m.clearcoatRoughnessMap?_=m.clearcoatRoughnessMap:m.specularIntensityMap?_=m.specularIntensityMap:m.specularColorMap?_=m.specularColorMap:m.transmissionMap?_=m.transmissionMap:m.thicknessMap?_=m.thicknessMap:m.sheenColorMap?_=m.sheenColorMap:m.sheenRoughnessMap&&(_=m.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix));let T;m.aoMap?T=m.aoMap:m.lightMap&&(T=m.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),f.uv2Transform.value.copy(T.matrix))}function i(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity}function s(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function a(f,m,E,_){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*E,f.scale.value=_*.5,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let T;m.map?T=m.map:m.alphaMap&&(T=m.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),f.uvTransform.value.copy(T.matrix))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let E;m.map?E=m.map:m.alphaMap&&(E=m.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),f.uvTransform.value.copy(E.matrix))}function l(f,m){m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap)}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Je&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Je&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Je&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Je&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function u(f,m){f.roughness.value=m.roughness,f.metalness.value=m.metalness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Je&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Je&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),r.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function d(f,m,E){u(f,m),f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),f.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Je&&f.clearcoatNormalScale.value.negate())),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap)}function p(f,m){m.matcap&&(f.matcap.value=m.matcap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Je&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Je&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function g(f,m){m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function y(f,m){m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),f.referencePosition.value.copy(m.referencePosition),f.nearDistance.value=m.nearDistance,f.farDistance.value=m.farDistance}function x(f,m){m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Je&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Je&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function xm(){const r=Os("canvas");return r.style.display="block",r}function Ne(r={}){const e=r.canvas!==void 0?r.canvas:xm(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,a=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",h=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=lt,this.physicallyCorrectLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const y=this;let x=!1,f=0,m=0,E=null,_=-1,T=null;const A=new ke,v=new ke;let R=null,W=e.width,F=e.height,C=1,j=null,I=null;const D=new ke(0,0,W,F),z=new ke(0,0,W,F);let U=!1;const B=[],K=new Hs;let le=!1,ye=!1,se=null;const Ee=new ve,X=new w,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return E===null?C:1}let H=t;function xe(b,P){for(let k=0;k<b.length;k++){const N=b[k],V=e.getContext(N,P);if(V!==null)return V}return null}try{const b={alpha:n,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",at,!1),H===null){const P=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&P.shift(),H=xe(P,b),H===null)throw xe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let we,re,ue,Ae,G,Z,ee,pe,ne,S,M,O,J,$,ae,Me,ge,Se,fe,L,ie,q,me;function ce(){we=new Op(H),re=new Dp(H,we,r),we.init(re),q=new fm(H,we,re),ue=new dm(H,we,re),B[0]=1029,Ae=new Vp,G=new tm,Z=new pm(H,we,ue,G,re,q,Ae),ee=new Up(y),pe=new kp(y),ne=new nu(H,re),me=new Rp(H,we,ne,re),S=new Gp(H,ne,Ae,me),M=new Yp(H,S,ne,Ae),fe=new Xp(H,re,Z),Me=new Ip(G),O=new em(y,ee,pe,we,re,me,Me),J=new ym(G),$=new im(G),ae=new cm(we,re),Se=new Lp(y,ee,ue,M,o),ge=new Sl(y,M,re),L=new Pp(H,we,Ae,re),ie=new Hp(H,we,Ae,re),Ae.programs=O.programs,y.capabilities=re,y.extensions=we,y.properties=G,y.renderLists=$,y.shadowMap=ge,y.state=ue,y.info=Ae}ce();const Pe=new gm(y,H);this.xr=Pe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=we.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=we.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(b){b!==void 0&&(C=b,this.setSize(W,F,!1))},this.getSize=function(b){return b.set(W,F)},this.setSize=function(b,P,k){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,F=P,e.width=Math.floor(b*C),e.height=Math.floor(P*C),k!==!1&&(e.style.width=b+"px",e.style.height=P+"px"),this.setViewport(0,0,b,P)},this.getDrawingBufferSize=function(b){return b.set(W*C,F*C).floor()},this.setDrawingBufferSize=function(b,P,k){W=b,F=P,C=k,e.width=Math.floor(b*k),e.height=Math.floor(P*k),this.setViewport(0,0,b,P)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,P,k,N){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,P,k,N),ue.viewport(A.copy(D).multiplyScalar(C).floor())},this.getScissor=function(b){return b.copy(z)},this.setScissor=function(b,P,k,N){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,P,k,N),ue.scissor(v.copy(z).multiplyScalar(C).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(b){ue.setScissorTest(U=b)},this.setOpaqueSort=function(b){j=b},this.setTransparentSort=function(b){I=b},this.getClearColor=function(b){return b.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(b,P,k){let N=0;(b===void 0||b)&&(N|=16384),(P===void 0||P)&&(N|=256),(k===void 0||k)&&(N|=1024),H.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",at,!1),$.dispose(),ae.dispose(),G.dispose(),ee.dispose(),pe.dispose(),M.dispose(),me.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",ya),Pe.removeEventListener("sessionend",xa),se&&(se.dispose(),se=null),dn.stop()};function rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const b=Ae.autoReset,P=ge.enabled,k=ge.autoUpdate,N=ge.needsUpdate,V=ge.type;ce(),Ae.autoReset=b,ge.enabled=P,ge.autoUpdate=k,ge.needsUpdate=N,ge.type=V}function Wt(b){const P=b.target;P.removeEventListener("dispose",Wt),Ze(P)}function Ze(b){Nt(b),G.remove(b)}function Nt(b){const P=G.get(b).programs;P!==void 0&&P.forEach(function(k){O.releaseProgram(k)})}this.renderBufferDirect=function(b,P,k,N,V,Te){P===null&&(P=Q);const be=V.isMesh&&V.matrixWorld.determinant()<0,_e=ec(b,P,k,N,V);ue.setMaterial(N,be);let Le=k.index;const ze=k.attributes.position;if(Le===null){if(ze===void 0||ze.count===0)return}else if(Le.count===0)return;let De=1;N.wireframe===!0&&(Le=S.getWireframeAttribute(k),De=2),me.setup(V,N,_e,k,Le);let Ie,Xe=L;Le!==null&&(Ie=ne.get(Le),Xe=ie,Xe.setIndex(Ie));const pn=Le!==null?Le.count:ze.count,Ue=k.drawRange.start*De,di=k.drawRange.count*De,Ve=Te!==null?Te.start*De:0,fn=Te!==null?Te.count*De:1/0,mn=Math.max(Ue,Ve),gn=Math.min(pn,Ue+di,Ve+fn)-1,qt=Math.max(0,gn-mn+1);if(qt!==0){if(V.isMesh)N.wireframe===!0?(ue.setLineWidth(N.wireframeLinewidth*he()),Xe.setMode(1)):Xe.setMode(4);else if(V.isLine){let Ye=N.linewidth;Ye===void 0&&(Ye=1),ue.setLineWidth(Ye*he()),V.isLineSegments?Xe.setMode(1):V.isLineLoop?Xe.setMode(2):Xe.setMode(3)}else V.isPoints?Xe.setMode(0):V.isSprite&&Xe.setMode(4);if(V.isInstancedMesh)Xe.renderInstances(mn,qt,V.count);else if(k.isInstancedBufferGeometry){const Ye=Math.min(k.instanceCount,k._maxInstanceCount);Xe.renderInstances(mn,qt,Ye)}else Xe.render(mn,qt)}},this.compile=function(b,P){d=ae.get(b),d.init(),g.push(d),b.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(y.physicallyCorrectLights),b.traverse(function(k){const N=k.material;if(N)if(Array.isArray(N))for(let V=0;V<N.length;V++){const Te=N[V];$s(Te,b,k)}else $s(N,b,k)}),g.pop(),d=null};let St=null;function $l(b){St&&St(b)}function ya(){dn.stop()}function xa(){dn.start()}const dn=new ul;dn.setAnimationLoop($l),typeof window<"u"&&dn.setContext(window),this.setAnimationLoop=function(b){St=b,Pe.setAnimationLoop(b),b===null?dn.stop():dn.start()},Pe.addEventListener("sessionstart",ya),Pe.addEventListener("sessionend",xa),this.render=function(b,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),P.parent===null&&P.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(P),P=Pe.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,P,E),d=ae.get(b,g.length),d.init(),g.push(d),Ee.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),K.setFromProjectionMatrix(Ee),ye=this.localClippingEnabled,le=Me.init(this.clippingPlanes,ye,P),u=$.get(b,p.length),u.init(),p.push(u),va(b,P,0,y.sortObjects),u.finish(),y.sortObjects===!0&&u.sort(j,I),le===!0&&Me.beginShadows();const k=d.state.shadowsArray;if(ge.render(k,b,P),le===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(u,b),d.setupLights(y.physicallyCorrectLights),P.isArrayCamera){const N=P.cameras;for(let V=0,Te=N.length;V<Te;V++){const be=N[V];_a(u,b,be,be.viewport)}}else _a(u,b,P);E!==null&&(Z.updateMultisampleRenderTarget(E),Z.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(y,b,P),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1),me.resetDefaultState(),_=-1,T=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function va(b,P,k,N){if(b.visible===!1)return;if(b.layers.test(P.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(P);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){N&&X.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ee);const be=M.update(b),_e=b.material;_e.visible&&u.push(b,be,_e,k,X.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Ae.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ae.render.frame),!b.frustumCulled||K.intersectsObject(b))){N&&X.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ee);const be=M.update(b),_e=b.material;if(Array.isArray(_e)){const Le=be.groups;for(let ze=0,De=Le.length;ze<De;ze++){const Ie=Le[ze],Xe=_e[Ie.materialIndex];Xe&&Xe.visible&&u.push(b,be,Xe,k,X.z,Ie)}}else _e.visible&&u.push(b,be,_e,k,X.z,null)}}const Te=b.children;for(let be=0,_e=Te.length;be<_e;be++)va(Te[be],P,k,N)}function _a(b,P,k,N){const V=b.opaque,Te=b.transmissive,be=b.transparent;d.setupLightsView(k),Te.length>0&&Ql(V,P,k),N&&ue.viewport(A.copy(N)),V.length>0&&ji(V,P,k),Te.length>0&&ji(Te,P,k),be.length>0&&ji(be,P,k)}function Ql(b,P,k){if(se===null){const be=a===!0&&re.isWebGL2===!0?al:It;se=new be(1024,1024,{generateMipmaps:!0,type:q.convert(Jn)!==null?Jn:an,minFilter:ks,magFilter:et,wrapS:vt,wrapT:vt})}const N=y.getRenderTarget();y.setRenderTarget(se),y.clear();const V=y.toneMapping;y.toneMapping=wn,ji(b,P,k),y.toneMapping=V,Z.updateMultisampleRenderTarget(se),Z.updateRenderTargetMipmap(se),y.setRenderTarget(N)}function ji(b,P,k){const N=P.isScene===!0?P.overrideMaterial:null;for(let V=0,Te=b.length;V<Te;V++){const be=b[V],_e=be.object,Le=be.geometry,ze=N===null?be.material:N,De=be.group;_e.layers.test(k.layers)&&Kl(_e,P,k,Le,ze,De)}}function Kl(b,P,k,N,V,Te){b.onBeforeRender(y,P,k,N,V,Te),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(y,P,k,N,b,Te),V.transparent===!0&&V.side===ei?(V.side=Je,V.needsUpdate=!0,y.renderBufferDirect(k,P,N,V,b,Te),V.side=Ui,V.needsUpdate=!0,y.renderBufferDirect(k,P,N,V,b,Te),V.side=ei):y.renderBufferDirect(k,P,N,V,b,Te),b.onAfterRender(y,P,k,N,V,Te)}function $s(b,P,k){P.isScene!==!0&&(P=Q);const N=G.get(b),V=d.state.lights,Te=d.state.shadowsArray,be=V.state.version,_e=O.getParameters(b,V.state,Te,P,k),Le=O.getProgramCacheKey(_e);let ze=N.programs;N.environment=b.isMeshStandardMaterial?P.environment:null,N.fog=P.fog,N.envMap=(b.isMeshStandardMaterial?pe:ee).get(b.envMap||N.environment),ze===void 0&&(b.addEventListener("dispose",Wt),ze=new Map,N.programs=ze);let De=ze.get(Le);if(De!==void 0){if(N.currentProgram===De&&N.lightsStateVersion===be)return Ma(b,_e),De}else _e.uniforms=O.getUniforms(b),b.onBuild(k,_e,y),b.onBeforeCompile(_e,y),De=O.acquireProgram(_e,Le),ze.set(Le,De),N.uniforms=_e.uniforms;const Ie=N.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=Me.uniform),Ma(b,_e),N.needsLights=nc(b),N.lightsStateVersion=be,N.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.directionalShadowMap.value=V.state.directionalShadowMap,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotShadowMap.value=V.state.spotShadowMap,Ie.spotShadowMatrix.value=V.state.spotShadowMatrix,Ie.pointShadowMap.value=V.state.pointShadowMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix);const Xe=De.getUniforms(),pn=sn.seqWithValue(Xe.seq,Ie);return N.currentProgram=De,N.uniformsList=pn,De}function Ma(b,P){const k=G.get(b);k.outputEncoding=P.outputEncoding,k.instancing=P.instancing,k.skinning=P.skinning,k.morphTargets=P.morphTargets,k.morphNormals=P.morphNormals,k.morphTargetsCount=P.morphTargetsCount,k.numClippingPlanes=P.numClippingPlanes,k.numIntersection=P.numClipIntersection,k.vertexAlphas=P.vertexAlphas,k.vertexTangents=P.vertexTangents}function ec(b,P,k,N,V){P.isScene!==!0&&(P=Q),Z.resetTextureUnits();const Te=P.fog,be=N.isMeshStandardMaterial?P.environment:null,_e=E===null?y.outputEncoding:E.texture.encoding,Le=(N.isMeshStandardMaterial?pe:ee).get(N.envMap||be),ze=N.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,De=!!N.normalMap&&!!k.attributes.tangent,Ie=!!k.morphAttributes.position,Xe=!!k.morphAttributes.normal,pn=k.morphAttributes.position?k.morphAttributes.position.length:0,Ue=G.get(N),di=d.state.lights;if(le===!0&&(ye===!0||b!==T)){const Et=b===T&&N.id===_;Me.setState(N,b,Et)}let Ve=!1;N.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==di.state.version||Ue.outputEncoding!==_e||V.isInstancedMesh&&Ue.instancing===!1||!V.isInstancedMesh&&Ue.instancing===!0||V.isSkinnedMesh&&Ue.skinning===!1||!V.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==Le||N.fog&&Ue.fog!==Te||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Me.numPlanes||Ue.numIntersection!==Me.numIntersection)||Ue.vertexAlphas!==ze||Ue.vertexTangents!==De||Ue.morphTargets!==Ie||Ue.morphNormals!==Xe||re.isWebGL2===!0&&Ue.morphTargetsCount!==pn)&&(Ve=!0):(Ve=!0,Ue.__version=N.version);let fn=Ue.currentProgram;Ve===!0&&(fn=$s(N,P,V));let mn=!1,gn=!1,qt=!1;const Ye=fn.getUniforms(),pi=Ue.uniforms;if(ue.useProgram(fn.program)&&(mn=!0,gn=!0,qt=!0),N.id!==_&&(_=N.id,gn=!0),mn||T!==b){if(Ye.setValue(H,"projectionMatrix",b.projectionMatrix),re.logarithmicDepthBuffer&&Ye.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),T!==b&&(T=b,gn=!0,qt=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Et=Ye.map.cameraPosition;Et!==void 0&&Et.setValue(H,X.setFromMatrixPosition(b.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Ye.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||V.isSkinnedMesh)&&Ye.setValue(H,"viewMatrix",b.matrixWorldInverse)}if(V.isSkinnedMesh){Ye.setOptional(H,V,"bindMatrix"),Ye.setOptional(H,V,"bindMatrixInverse");const Et=V.skeleton;Et&&(re.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),Ye.setValue(H,"boneTexture",Et.boneTexture,Z),Ye.setValue(H,"boneTextureSize",Et.boneTextureSize)):Ye.setOptional(H,Et,"boneMatrices"))}return k&&(k.morphAttributes.position!==void 0||k.morphAttributes.normal!==void 0)&&fe.update(V,k,N,fn),(gn||Ue.receiveShadow!==V.receiveShadow)&&(Ue.receiveShadow=V.receiveShadow,Ye.setValue(H,"receiveShadow",V.receiveShadow)),gn&&(Ye.setValue(H,"toneMappingExposure",y.toneMappingExposure),Ue.needsLights&&tc(pi,qt),Te&&N.fog&&J.refreshFogUniforms(pi,Te),J.refreshMaterialUniforms(pi,N,C,F,se),sn.upload(H,Ue.uniformsList,pi,Z)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(sn.upload(H,Ue.uniformsList,pi,Z),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Ye.setValue(H,"center",V.center),Ye.setValue(H,"modelViewMatrix",V.modelViewMatrix),Ye.setValue(H,"normalMatrix",V.normalMatrix),Ye.setValue(H,"modelMatrix",V.matrixWorld),fn}function tc(b,P){b.ambientLightColor.needsUpdate=P,b.lightProbe.needsUpdate=P,b.directionalLights.needsUpdate=P,b.directionalLightShadows.needsUpdate=P,b.pointLights.needsUpdate=P,b.pointLightShadows.needsUpdate=P,b.spotLights.needsUpdate=P,b.spotLightShadows.needsUpdate=P,b.rectAreaLights.needsUpdate=P,b.hemisphereLights.needsUpdate=P}function nc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return f},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return E},this.setRenderTarget=function(b,P=0,k=0){E=b,f=P,m=k,b&&G.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b);let N=null,V=!1,Te=!1;if(b){const _e=b.texture;(_e.isDataTexture3D||_e.isDataTexture2DArray)&&(Te=!0);const Le=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(N=Le[P],V=!0):b.isWebGLMultisampleRenderTarget?N=G.get(b).__webglMultisampledFramebuffer:N=Le,A.copy(b.viewport),v.copy(b.scissor),R=b.scissorTest}else A.copy(D).multiplyScalar(C).floor(),v.copy(z).multiplyScalar(C).floor(),R=U;if(ue.bindFramebuffer(36160,N)&&re.drawBuffers){let _e=!1;if(b)if(b.isWebGLMultipleRenderTargets){const Le=b.texture;if(B.length!==Le.length||B[0]!==36064){for(let ze=0,De=Le.length;ze<De;ze++)B[ze]=36064+ze;B.length=Le.length,_e=!0}}else(B.length!==1||B[0]!==36064)&&(B[0]=36064,B.length=1,_e=!0);else(B.length!==1||B[0]!==1029)&&(B[0]=1029,B.length=1,_e=!0);_e&&(re.isWebGL2?H.drawBuffers(B):we.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}if(ue.viewport(A),ue.scissor(v),ue.setScissorTest(R),V){const _e=G.get(b.texture);H.framebufferTexture2D(36160,36064,34069+P,_e.__webglTexture,k)}else if(Te){const _e=G.get(b.texture),Le=P||0;H.framebufferTextureLayer(36160,36064,_e.__webglTexture,k||0,Le)}_=-1},this.readRenderTargetPixels=function(b,P,k,N,V,Te,be){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(_e=_e[be]),_e){ue.bindFramebuffer(36160,_e);try{const Le=b.texture,ze=Le.format,De=Le.type;if(ze!==ut&&q.convert(ze)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===Jn&&(we.has("EXT_color_buffer_half_float")||re.isWebGL2&&we.has("EXT_color_buffer_float"));if(De!==an&&q.convert(De)!==H.getParameter(35738)&&!(De===en&&(re.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H.checkFramebufferStatus(36160)===36053?P>=0&&P<=b.width-N&&k>=0&&k<=b.height-V&&H.readPixels(P,k,N,V,q.convert(ze),q.convert(De),Te):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Le=E!==null?G.get(E).__webglFramebuffer:null;ue.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(b,P,k=0){const N=Math.pow(2,-k),V=Math.floor(P.image.width*N),Te=Math.floor(P.image.height*N);let be=q.convert(P.format);re.isWebGL2&&(be===6407&&(be=32849),be===6408&&(be=32856)),Z.setTexture2D(P,0),H.copyTexImage2D(3553,k,be,b.x,b.y,V,Te,0),ue.unbindTexture()},this.copyTextureToTexture=function(b,P,k,N=0){const V=P.image.width,Te=P.image.height,be=q.convert(k.format),_e=q.convert(k.type);Z.setTexture2D(k,0),H.pixelStorei(37440,k.flipY),H.pixelStorei(37441,k.premultiplyAlpha),H.pixelStorei(3317,k.unpackAlignment),P.isDataTexture?H.texSubImage2D(3553,N,b.x,b.y,V,Te,be,_e,P.image.data):P.isCompressedTexture?H.compressedTexSubImage2D(3553,N,b.x,b.y,P.mipmaps[0].width,P.mipmaps[0].height,be,P.mipmaps[0].data):H.texSubImage2D(3553,N,b.x,b.y,be,_e,P.image),N===0&&k.generateMipmaps&&H.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(b,P,k,N,V=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=b.max.x-b.min.x+1,be=b.max.y-b.min.y+1,_e=b.max.z-b.min.z+1,Le=q.convert(N.format),ze=q.convert(N.type);let De;if(N.isDataTexture3D)Z.setTexture3D(N,0),De=32879;else if(N.isDataTexture2DArray)Z.setTexture2DArray(N,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,N.flipY),H.pixelStorei(37441,N.premultiplyAlpha),H.pixelStorei(3317,N.unpackAlignment);const Ie=H.getParameter(3314),Xe=H.getParameter(32878),pn=H.getParameter(3316),Ue=H.getParameter(3315),di=H.getParameter(32877),Ve=k.isCompressedTexture?k.mipmaps[0]:k.image;H.pixelStorei(3314,Ve.width),H.pixelStorei(32878,Ve.height),H.pixelStorei(3316,b.min.x),H.pixelStorei(3315,b.min.y),H.pixelStorei(32877,b.min.z),k.isDataTexture||k.isDataTexture3D?H.texSubImage3D(De,V,P.x,P.y,P.z,Te,be,_e,Le,ze,Ve.data):k.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(De,V,P.x,P.y,P.z,Te,be,_e,Le,Ve.data)):H.texSubImage3D(De,V,P.x,P.y,P.z,Te,be,_e,Le,ze,Ve),H.pixelStorei(3314,Ie),H.pixelStorei(32878,Xe),H.pixelStorei(3316,pn),H.pixelStorei(3315,Ue),H.pixelStorei(32877,di),V===0&&N.generateMipmaps&&H.generateMipmap(De),ue.unbindTexture()},this.initTexture=function(b){Z.setTexture2D(b,0),ue.unbindTexture()},this.resetState=function(){f=0,m=0,E=null,ue.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ne.prototype.isWebGLRenderer=!0;class vm extends Ne{}vm.prototype.isWebGL1Renderer=!0;class Ws extends Fe{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Ws.prototype.isScene=!0;class qi{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ni,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Dt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}qi.prototype.isInterleavedBuffer=!0;const je=new w;class zi{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.applyMatrix4(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.applyNormalMatrix(e),this.setXYZ(t,je.x,je.y,je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.transformDirection(e),this.setXYZ(t,je.x,je.y,je.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}zi.prototype.isInterleavedBufferAttribute=!0;class qs extends ht{constructor(e){super(),this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}qs.prototype.isSpriteMaterial=!0;let Hn;const vi=new w,Vn=new w,Wn=new w,qn=new Y,_i=new Y,Tl=new ve,ms=new w,Mi=new w,gs=new w,wo=new Y,Lr=new Y,So=new Y;class sa extends Fe{constructor(e){if(super(),this.type="Sprite",Hn===void 0){Hn=new Ge;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qi(t,5);Hn.setIndex([0,1,2,0,2,3]),Hn.setAttribute("position",new zi(n,3,0,!1)),Hn.setAttribute("uv",new zi(n,2,3,!1))}this.geometry=Hn,this.material=e!==void 0?e:new qs,this.center=new Y(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vn.setFromMatrixScale(this.matrixWorld),Tl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vn.multiplyScalar(-Wn.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;ys(ms.set(-.5,-.5,0),Wn,a,Vn,i,s),ys(Mi.set(.5,-.5,0),Wn,a,Vn,i,s),ys(gs.set(.5,.5,0),Wn,a,Vn,i,s),wo.set(0,0),Lr.set(1,0),So.set(1,1);let o=e.ray.intersectTriangle(ms,Mi,gs,!1,vi);if(o===null&&(ys(Mi.set(-.5,.5,0),Wn,a,Vn,i,s),Lr.set(0,1),o=e.ray.intersectTriangle(ms,gs,Mi,!1,vi),o===null))return;const l=e.ray.origin.distanceTo(vi);l<e.near||l>e.far||t.push({distance:l,point:vi.clone(),uv:$e.getUV(vi,ms,Mi,gs,wo,Lr,So,new Y),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}sa.prototype.isSprite=!0;function ys(r,e,t,n,i,s){qn.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(_i.x=s*qn.x-i*qn.y,_i.y=i*qn.x+s*qn.y):_i.copy(qn),r.copy(e),r.x+=_i.x,r.y+=_i.y,r.applyMatrix4(Tl)}const Eo=new w,To=new ke,Ao=new ke,_m=new w,Co=new ve;class Al extends oe{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ve,this.bindMatrixInverse=new ve}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;To.fromBufferAttribute(i.attributes.skinIndex,e),Ao.fromBufferAttribute(i.attributes.skinWeight,e),Eo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Ao.getComponent(s);if(a!==0){const o=To.getComponent(s);Co.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(_m.copy(Eo).applyMatrix4(Co),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}Al.prototype.isSkinnedMesh=!0;class Mm extends Fe{constructor(){super(),this.type="Bone"}}Mm.prototype.isBone=!0;class bm extends st{constructor(e=null,t=1,n=1,i,s,a,o,l,c=et,h=et,u,d){super(null,a,o,l,c,h,i,s,u,d),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}bm.prototype.isDataTexture=!0;class Vr extends Qe{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Vr.prototype.isInstancedBufferAttribute=!0;const Lo=new ve,Ro=new ve,xs=[],bi=new oe;class wm extends oe{constructor(e,t,n){super(e,t),this.instanceMatrix=new Vr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(bi.geometry=this.geometry,bi.material=this.material,bi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Lo),Ro.multiplyMatrices(n,Lo),bi.matrixWorld=Ro,bi.raycast(e,xs);for(let a=0,o=xs.length;a<o;a++){const l=xs[a];l.instanceId=s,l.object=this,t.push(l)}xs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}wm.prototype.isInstancedMesh=!0;class Xi extends ht{constructor(e){super(),this.type="LineBasicMaterial",this.color=new de(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Xi.prototype.isLineBasicMaterial=!0;const Po=new w,Do=new w,Io=new ve,Rr=new ai,vs=new ri;class ra extends Fe{constructor(e=new Ge,t=new Xi){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Po.fromBufferAttribute(t,i-1),Do.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Po.distanceTo(Do);e.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(i),vs.radius+=s,e.ray.intersectsSphere(vs)===!1)return;Io.copy(i).invert(),Rr.copy(e.ray).applyMatrix4(Io);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new w,h=new w,u=new w,d=new w,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,x=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let E=f,_=m-1;E<_;E+=p){const T=g.getX(E),A=g.getX(E+1);if(c.fromBufferAttribute(x,T),h.fromBufferAttribute(x,A),Rr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),m=Math.min(x.count,a.start+a.count);for(let E=f,_=m-1;E<_;E+=p){if(c.fromBufferAttribute(x,E),h.fromBufferAttribute(x,E+1),Rr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ra.prototype.isLine=!0;const Uo=new w,Fo=new w;class aa extends ra{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Uo.fromBufferAttribute(t,i),Fo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uo.distanceTo(Fo);e.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}aa.prototype.isLineSegments=!0;class Sm extends ra{constructor(e,t){super(e,t),this.type="LineLoop"}}Sm.prototype.isLineLoop=!0;class Cl extends ht{constructor(e){super(),this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Cl.prototype.isPointsMaterial=!0;const No=new ve,Wr=new ai,_s=new ri,Ms=new w;class Em extends Fe{constructor(e=new Ge,t=new Cl){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(i),_s.radius+=s,e.ray.intersectsSphere(_s)===!1)return;No.copy(i).invert(),Wr.copy(e.ray).applyMatrix4(No);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,y=p;g<y;g++){const x=c.getX(g);Ms.fromBufferAttribute(u,x),zo(Ms,x,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,y=p;g<y;g++)Ms.fromBufferAttribute(u,g),zo(Ms,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Em.prototype.isPoints=!0;function zo(r,e,t,n,i,s,a){const o=Wr.distanceSqToPoint(r);if(o<t){const l=new w;Wr.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Tm extends st{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.format=o!==void 0?o:$n,this.minFilter=a!==void 0?a:Mt,this.magFilter=s!==void 0?s:Mt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Tm.prototype.isVideoTexture=!0;class Am extends st{constructor(e,t,n,i,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,s,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Am.prototype.isCompressedTexture=!0;class Us extends st{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.needsUpdate=!0}}Us.prototype.isCanvasTexture=!0;class Cm extends st{constructor(e,t,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:Qn,h!==Qn&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qn&&(n=Ls),n===void 0&&h===Fi&&(n=Ri),super(null,i,s,a,o,l,h,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:et,this.minFilter=l!==void 0?l:et,this.flipY=!1,this.generateMipmaps=!1}}Cm.prototype.isDepthTexture=!0;class oa extends Ge{constructor(e=1,t=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new w,h=new Y;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(o,3)),this.setAttribute("uv",new Oe(l,2))}static fromJSON(e){return new oa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ln extends Ge{constructor(e=1,t=1,n=1,i=8,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const y=[],x=n/2;let f=0;m(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(p,2));function m(){const _=new w,T=new w;let A=0;const v=(t-e)/n;for(let R=0;R<=s;R++){const W=[],F=R/s,C=F*(t-e)+e;for(let j=0;j<=i;j++){const I=j/i,D=I*l+o,z=Math.sin(D),U=Math.cos(D);T.x=C*z,T.y=-F*n+x,T.z=C*U,u.push(T.x,T.y,T.z),_.set(z,v,U).normalize(),d.push(_.x,_.y,_.z),p.push(I,1-F),W.push(g++)}y.push(W)}for(let R=0;R<i;R++)for(let W=0;W<s;W++){const F=y[W][R],C=y[W+1][R],j=y[W+1][R+1],I=y[W][R+1];h.push(F,C,I),h.push(C,j,I),A+=6}c.addGroup(f,A,0),f+=A}function E(_){const T=g,A=new Y,v=new w;let R=0;const W=_===!0?e:t,F=_===!0?1:-1;for(let j=1;j<=i;j++)u.push(0,x*F,0),d.push(0,F,0),p.push(.5,.5),g++;const C=g;for(let j=0;j<=i;j++){const D=j/i*l+o,z=Math.cos(D),U=Math.sin(D);v.x=W*U,v.y=x*F,v.z=W*z,u.push(v.x,v.y,v.z),d.push(0,F,0),A.x=z*.5+.5,A.y=U*.5*F+.5,p.push(A.x,A.y),g++}for(let j=0;j<i;j++){const I=T+j,D=C+j;_===!0?h.push(D,D+1,I):h.push(D+1,D,I),R+=3}c.addGroup(f,R,_===!0?1:2),f+=R}}static fromJSON(e){return new ln(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xs extends ln{constructor(e=1,t=1,n=8,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Xs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Y:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],s=[],a=[],o=new w,l=new ve;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new w)}s[0]=new w,a[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(xt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ys extends wt{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new Y,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Ys.prototype.isEllipseCurve=!0;class Ll extends Ys{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.type="ArcCurve"}}Ll.prototype.isArcCurve=!0;function la(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const bs=new w,Pr=new la,Dr=new la,Ir=new la;class Rl extends wt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(bs.subVectors(i[0],i[1]).add(i[0]),c=bs);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(bs.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=bs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),x<1e-4&&(x=y),Pr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,x),Dr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,x),Ir.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,x)}else this.curveType==="catmullrom"&&(Pr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Dr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ir.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Pr.calc(l),Dr.calc(l),Ir.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Rl.prototype.isCatmullRomCurve3=!0;function Bo(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function Lm(r,e){const t=1-r;return t*t*e}function Rm(r,e){return 2*(1-r)*r*e}function Pm(r,e){return r*r*e}function Pi(r,e,t,n){return Lm(r,e)+Rm(r,t)+Pm(r,n)}function Dm(r,e){const t=1-r;return t*t*t*e}function Im(r,e){const t=1-r;return 3*t*t*r*e}function Um(r,e){return 3*(1-r)*r*r*e}function Fm(r,e){return r*r*r*e}function Di(r,e,t,n,i){return Dm(r,e)+Im(r,t)+Um(r,n)+Fm(r,i)}class ca extends wt{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Di(e,i.x,s.x,a.x,o.x),Di(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}ca.prototype.isCubicBezierCurve=!0;class Pl extends wt{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Di(e,i.x,s.x,a.x,o.x),Di(e,i.y,s.y,a.y,o.y),Di(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Pl.prototype.isCubicBezierCurve3=!0;class Zs extends wt{constructor(e=new Y,t=new Y){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new Y;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Zs.prototype.isLineCurve=!0;class Nm extends wt{constructor(e=new w,t=new w){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ha extends wt{constructor(e=new Y,t=new Y,n=new Y){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Pi(e,i.x,s.x,a.x),Pi(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ha.prototype.isQuadraticBezierCurve=!0;class Dl extends wt{constructor(e=new w,t=new w,n=new w){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Pi(e,i.x,s.x,a.x),Pi(e,i.y,s.y,a.y),Pi(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Dl.prototype.isQuadraticBezierCurve3=!0;class ua extends wt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new Y){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Bo(o,l.x,c.x,h.x,u.x),Bo(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Y().fromArray(i))}return this}}ua.prototype.isSplineCurve=!0;var Il=Object.freeze({__proto__:null,ArcCurve:Ll,CatmullRomCurve3:Rl,CubicBezierCurve:ca,CubicBezierCurve3:Pl,EllipseCurve:Ys,LineCurve:Zs,LineCurve3:Nm,QuadraticBezierCurve:ha,QuadraticBezierCurve3:Dl,SplineCurve:ua});class zm extends wt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Zs(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Il[i.type]().fromJSON(i))}return this}}class qr extends zm{constructor(e){super(),this.type="Path",this.currentPoint=new Y,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Zs(this.currentPoint.clone(),new Y(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new ha(this.currentPoint.clone(),new Y(e,t),new Y(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new ca(this.currentPoint.clone(),new Y(e,t),new Y(n,i),new Y(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ua(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new Ys(e,t,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Yi extends qr{constructor(e){super(e),this.uuid=Dt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new qr().fromJSON(i))}return this}}const Bm={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Ul(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=Vm(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let g=t;g<i;g+=t)u=r[g],d=r[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?1/p:0}return Bi(s,a,t,o,l,p),a}};function Ul(r,e,t,n,i){let s,a;if(i===eg(r,e,t,n)>0)for(s=e;s<t;s+=n)a=ko(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=ko(s,r[s],r[s+1],a);return a&&js(a,a.next)&&(Oi(a),a=a.next),a}function cn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(js(t,t.next)||qe(t.prev,t,t.next)===0)){if(Oi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Bi(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Zm(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Om(r,n,i,s):km(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),Oi(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Gm(cn(r),e,t),Bi(r,e,t,n,i,s,2)):a===2&&Hm(r,e,t,n,i,s):Bi(cn(r),e,t,n,i,s,1);break}}}function km(r){const e=r.prev,t=r,n=r.next;if(qe(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(jn(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&qe(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Om(r,e,t,n){const i=r.prev,s=r,a=r.next;if(qe(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,c=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,h=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,u=Xr(o,l,e,t,n),d=Xr(c,h,e,t,n);let p=r.prevZ,g=r.nextZ;for(;p&&p.z>=u&&g&&g.z<=d;){if(p!==r.prev&&p!==r.next&&jn(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&qe(p.prev,p,p.next)>=0||(p=p.prevZ,g!==r.prev&&g!==r.next&&jn(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&qe(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=u;){if(p!==r.prev&&p!==r.next&&jn(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&qe(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=d;){if(g!==r.prev&&g!==r.next&&jn(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&qe(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Gm(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!js(i,s)&&Fl(i,n,n.next,s)&&ki(i,s)&&ki(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Oi(n),Oi(n.next),n=r=s),n=n.next}while(n!==r);return cn(n)}function Hm(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$m(a,o)){let l=Nl(a,o);a=cn(a,a.next),l=cn(l,l.next),Bi(a,e,t,n,i,s),Bi(l,e,t,n,i,s);return}o=o.next}a=a.next}while(a!==r)}function Vm(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=Ul(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Jm(c));for(i.sort(Wm),s=0;s<i.length;s++)qm(i[s],t),t=cn(t,t.next);return t}function Wm(r,e){return r.x-e.x}function qm(r,e){if(e=Xm(r,e),e){const t=Nl(e,r);cn(e,e.next),cn(t,t.next)}}function Xm(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===s)return a;const o=a,l=a.x,c=a.y;let h=1/0,u;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&jn(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),ki(t,r)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Ym(a,t)))&&(a=t,h=u)),t=t.next;while(t!==o);return a}function Ym(r,e){return qe(r.prev,r,e.prev)<0&&qe(e.next,r,r.next)<0}function Zm(r,e,t,n){let i=r;do i.z===null&&(i.z=Xr(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,jm(i)}function jm(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function Xr(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Jm(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function jn(r,e,t,n,i,s,a,o){return(i-a)*(e-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(i-a)*(n-o)>=0}function $m(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Qm(r,e)&&(ki(r,e)&&ki(e,r)&&Km(r,e)&&(qe(r.prev,r,e.prev)||qe(r,e.prev,e))||js(r,e)&&qe(r.prev,r,r.next)>0&&qe(e.prev,e,e.next)>0)}function qe(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function js(r,e){return r.x===e.x&&r.y===e.y}function Fl(r,e,t,n){const i=Ss(qe(r,e,t)),s=Ss(qe(r,e,n)),a=Ss(qe(t,n,r)),o=Ss(qe(t,n,e));return!!(i!==s&&a!==o||i===0&&ws(r,t,e)||s===0&&ws(r,n,e)||a===0&&ws(t,r,n)||o===0&&ws(t,e,n))}function ws(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ss(r){return r>0?1:r<0?-1:0}function Qm(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Fl(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ki(r,e){return qe(r.prev,r,r.next)<0?qe(r,e,r.next)>=0&&qe(r,r.prev,e)>=0:qe(r,e,r.prev)<0||qe(r,r.next,e)<0}function Km(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Nl(r,e){const t=new Yr(r.i,r.x,r.y),n=new Yr(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ko(r,e,t,n){const i=new Yr(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Oi(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Yr(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eg(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class rn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return rn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Oo(e),Go(n,e);let a=e.length;t.forEach(Oo);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Go(n,t[l]);const o=Bm.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Oo(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Go(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class ci extends Ge{constructor(e=new Yi([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Oe(i,3)),this.setAttribute("uv",new Oe(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:tg;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let E,_=!1,T,A,v,R;f&&(E=f.getSpacedPoints(h),_=!0,d=!1,T=f.computeFrenetFrames(h,!1),A=new w,v=new w,R=new w),d||(x=0,p=0,g=0,y=0);const W=o.extractPoints(c);let F=W.shape;const C=W.holes;if(!rn.isClockWise(F)){F=F.reverse();for(let G=0,Z=C.length;G<Z;G++){const ee=C[G];rn.isClockWise(ee)&&(C[G]=ee.reverse())}}const I=rn.triangulateShape(F,C),D=F;for(let G=0,Z=C.length;G<Z;G++){const ee=C[G];F=F.concat(ee)}function z(G,Z,ee){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(ee).add(G)}const U=F.length,B=I.length;function K(G,Z,ee){let pe,ne,S;const M=G.x-Z.x,O=G.y-Z.y,J=ee.x-G.x,$=ee.y-G.y,ae=M*M+O*O,Me=M*$-O*J;if(Math.abs(Me)>Number.EPSILON){const ge=Math.sqrt(ae),Se=Math.sqrt(J*J+$*$),fe=Z.x-O/ge,L=Z.y+M/ge,ie=ee.x-$/Se,q=ee.y+J/Se,me=((ie-fe)*$-(q-L)*J)/(M*$-O*J);pe=fe+M*me-G.x,ne=L+O*me-G.y;const ce=pe*pe+ne*ne;if(ce<=2)return new Y(pe,ne);S=Math.sqrt(ce/2)}else{let ge=!1;M>Number.EPSILON?J>Number.EPSILON&&(ge=!0):M<-Number.EPSILON?J<-Number.EPSILON&&(ge=!0):Math.sign(O)===Math.sign($)&&(ge=!0),ge?(pe=-O,ne=M,S=Math.sqrt(ae)):(pe=M,ne=O,S=Math.sqrt(ae/2))}return new Y(pe/S,ne/S)}const le=[];for(let G=0,Z=D.length,ee=Z-1,pe=G+1;G<Z;G++,ee++,pe++)ee===Z&&(ee=0),pe===Z&&(pe=0),le[G]=K(D[G],D[ee],D[pe]);const ye=[];let se,Ee=le.concat();for(let G=0,Z=C.length;G<Z;G++){const ee=C[G];se=[];for(let pe=0,ne=ee.length,S=ne-1,M=pe+1;pe<ne;pe++,S++,M++)S===ne&&(S=0),M===ne&&(M=0),se[pe]=K(ee[pe],ee[S],ee[M]);ye.push(se),Ee=Ee.concat(se)}for(let G=0;G<x;G++){const Z=G/x,ee=p*Math.cos(Z*Math.PI/2),pe=g*Math.sin(Z*Math.PI/2)+y;for(let ne=0,S=D.length;ne<S;ne++){const M=z(D[ne],le[ne],pe);xe(M.x,M.y,-ee)}for(let ne=0,S=C.length;ne<S;ne++){const M=C[ne];se=ye[ne];for(let O=0,J=M.length;O<J;O++){const $=z(M[O],se[O],pe);xe($.x,$.y,-ee)}}}const X=g+y;for(let G=0;G<U;G++){const Z=d?z(F[G],Ee[G],X):F[G];_?(v.copy(T.normals[0]).multiplyScalar(Z.x),A.copy(T.binormals[0]).multiplyScalar(Z.y),R.copy(E[0]).add(v).add(A),xe(R.x,R.y,R.z)):xe(Z.x,Z.y,0)}for(let G=1;G<=h;G++)for(let Z=0;Z<U;Z++){const ee=d?z(F[Z],Ee[Z],X):F[Z];_?(v.copy(T.normals[G]).multiplyScalar(ee.x),A.copy(T.binormals[G]).multiplyScalar(ee.y),R.copy(E[G]).add(v).add(A),xe(R.x,R.y,R.z)):xe(ee.x,ee.y,u/h*G)}for(let G=x-1;G>=0;G--){const Z=G/x,ee=p*Math.cos(Z*Math.PI/2),pe=g*Math.sin(Z*Math.PI/2)+y;for(let ne=0,S=D.length;ne<S;ne++){const M=z(D[ne],le[ne],pe);xe(M.x,M.y,u+ee)}for(let ne=0,S=C.length;ne<S;ne++){const M=C[ne];se=ye[ne];for(let O=0,J=M.length;O<J;O++){const $=z(M[O],se[O],pe);_?xe($.x,$.y+E[h-1].y,E[h-1].x+ee):xe($.x,$.y,u+ee)}}}Q(),he();function Q(){const G=i.length/3;if(d){let Z=0,ee=U*Z;for(let pe=0;pe<B;pe++){const ne=I[pe];we(ne[2]+ee,ne[1]+ee,ne[0]+ee)}Z=h+x*2,ee=U*Z;for(let pe=0;pe<B;pe++){const ne=I[pe];we(ne[0]+ee,ne[1]+ee,ne[2]+ee)}}else{for(let Z=0;Z<B;Z++){const ee=I[Z];we(ee[2],ee[1],ee[0])}for(let Z=0;Z<B;Z++){const ee=I[Z];we(ee[0]+U*h,ee[1]+U*h,ee[2]+U*h)}}n.addGroup(G,i.length/3-G,0)}function he(){const G=i.length/3;let Z=0;H(D,Z),Z+=D.length;for(let ee=0,pe=C.length;ee<pe;ee++){const ne=C[ee];H(ne,Z),Z+=ne.length}n.addGroup(G,i.length/3-G,1)}function H(G,Z){let ee=G.length;for(;--ee>=0;){const pe=ee;let ne=ee-1;ne<0&&(ne=G.length-1);for(let S=0,M=h+x*2;S<M;S++){const O=U*S,J=U*(S+1),$=Z+pe+O,ae=Z+ne+O,Me=Z+ne+J,ge=Z+pe+J;re($,ae,Me,ge)}}}function xe(G,Z,ee){l.push(G),l.push(Z),l.push(ee)}function we(G,Z,ee){ue(G),ue(Z),ue(ee);const pe=i.length/3,ne=m.generateTopUV(n,i,pe-3,pe-2,pe-1);Ae(ne[0]),Ae(ne[1]),Ae(ne[2])}function re(G,Z,ee,pe){ue(G),ue(Z),ue(pe),ue(Z),ue(ee),ue(pe);const ne=i.length/3,S=m.generateSideWallUV(n,i,ne-6,ne-3,ne-2,ne-1);Ae(S[0]),Ae(S[1]),Ae(S[3]),Ae(S[1]),Ae(S[2]),Ae(S[3])}function ue(G){i.push(l[G*3+0]),i.push(l[G*3+1]),i.push(l[G*3+2])}function Ae(G){s.push(G.x),s.push(G.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ng(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Il[i.type]().fromJSON(i)),new ci(n,e.options)}}const tg={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Y(s,a),new Y(o,l),new Y(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],p=e[i*3+1],g=e[i*3+2],y=e[s*3],x=e[s*3+1],f=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Y(a,1-l),new Y(c,1-u),new Y(d,1-g),new Y(y,1-f)]:[new Y(o,1-l),new Y(h,1-u),new Y(p,1-g),new Y(x,1-f)]}};function ng(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class da extends Ge{constructor(e=new Yi([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Oe(i,3)),this.setAttribute("normal",new Oe(s,3)),this.setAttribute("uv",new Oe(a,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let p=d.shape;const g=d.holes;rn.isClockWise(p)===!1&&(p=p.reverse());for(let x=0,f=g.length;x<f;x++){const m=g[x];rn.isClockWise(m)===!0&&(g[x]=m.reverse())}const y=rn.triangulateShape(p,g);for(let x=0,f=g.length;x<f;x++){const m=g[x];p=p.concat(m)}for(let x=0,f=p.length;x<f;x++){const m=p[x];i.push(m.x,m.y,0),s.push(0,0,1),a.push(m.x,m.y)}for(let x=0,f=y.length;x<f;x++){const m=y[x],E=m[0]+u,_=m[1]+u,T=m[2]+u;n.push(E,_,T),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ig(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new da(n,e.curveSegments)}}function ig(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class it extends Ge{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new w,d=new w,p=[],g=[],y=[],x=[];for(let f=0;f<=n;f++){const m=[],E=f/n;let _=0;f==0&&a==0?_=.5/t:f==n&&l==Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){const A=T/t;u.x=-e*Math.cos(i+A*s)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(i+A*s)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),x.push(A+_,1-E),m.push(c++)}h.push(m)}for(let f=0;f<n;f++)for(let m=0;m<t;m++){const E=h[f][m+1],_=h[f][m],T=h[f+1][m],A=h[f+1][m+1];(f!==0||a>0)&&p.push(E,_,A),(f!==n-1||l<Math.PI)&&p.push(_,T,A)}this.setIndex(p),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(y,3)),this.setAttribute("uv",new Oe(x,2))}static fromJSON(e){return new it(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sg extends ht{constructor(e){super(),this.type="ShadowMaterial",this.color=new de(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}sg.prototype.isShadowMaterial=!0;class zl extends ht{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ii,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}zl.prototype.isMeshStandardMaterial=!0;class rg extends zl{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}rg.prototype.isMeshPhysicalMaterial=!0;class ag extends ht{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new de(16777215),this.specular=new de(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ii,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}ag.prototype.isMeshPhongMaterial=!0;class og extends ht{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ii,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}og.prototype.isMeshToonMaterial=!0;class lg extends ht{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ii,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}lg.prototype.isMeshNormalMaterial=!0;class cg extends ht{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}cg.prototype.isMeshLambertMaterial=!0;class hg extends ht{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new de(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ii,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}hg.prototype.isMeshMatcapMaterial=!0;class ug extends Xi{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}ug.prototype.isLineDashedMaterial=!0;const We={arraySlice:function(r,e,t){return We.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let p=0;p<c.times.length;++p){const g=c.times[p]*i;if(!(g<t||g>=n)){u.push(c.times[p]);for(let y=0;y<h;++y)d.push(c.values[p*h+y])}}u.length!==0&&(c.times=We.convertArray(u,c.times.constructor),c.values=We.convertArray(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(f){return f.name===o.name&&f.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const g=o.times.length-1;let y;if(s<=o.times[0]){const f=h,m=u-h;y=We.arraySlice(o.values,f,m)}else if(s>=o.times[g]){const f=g*u+h,m=f+u-h;y=We.arraySlice(o.values,f,m)}else{const f=o.createInterpolant(),m=h,E=u-h;f.evaluate(s),y=We.arraySlice(f.resultBuffer,m,E)}l==="quaternion"&&new dt().fromArray(y).normalize().conjugate().toArray(y);const x=c.times.length;for(let f=0;f<x;++f){const m=f*p+d;if(l==="quaternion")dt.multiplyQuaternionsFlat(c.values,m,y,0,c.values,m);else{const E=p-d*2;for(let _=0;_<E;++_)c.values[m+_]-=y[_]}}}return r.blendMode=tl,r}};class hn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}hn.prototype.beforeStart_=hn.prototype.copySampleValue_;hn.prototype.afterEnd_=hn.prototype.copySampleValue_;class dg extends hn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yn,endingEnd:Yn}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zn:s=e,o=2*t-n;break;case Ds:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zn:a=e,l=2*n-t;break;case Ds:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),y=g*g,x=y*g,f=-d*x+2*d*y-d*g,m=(1+d)*x+(-1.5-2*d)*y+(-.5+d)*g+1,E=(-1-p)*x+(1.5+p)*y+.5*g,_=p*x-p*y;for(let T=0;T!==o;++T)s[T]=f*a[h+T]+m*a[c+T]+E*a[l+T]+_*a[u+T];return s}}class Bl extends hn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class pg extends hn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ft{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=We.convertArray(t,this.TimeBufferType),this.values=We.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:We.convertArray(e.times,Array),values:We.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rs:t=this.InterpolantFactoryMethodDiscrete;break;case Ps:t=this.InterpolantFactoryMethodLinear;break;case Qs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return Qs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=We.arraySlice(n,s,a),this.values=We.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&We.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=We.arraySlice(this.times),t=We.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Qs,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const y=t[u+g];if(y!==t[d+g]||y!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=We.arraySlice(e,0,a),this.values=We.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=We.arraySlice(this.times,0),t=We.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ft.prototype.TimeBufferType=Float32Array;Ft.prototype.ValueBufferType=Float32Array;Ft.prototype.DefaultInterpolation=Ps;class hi extends Ft{}hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Rs;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;class kl extends Ft{}kl.prototype.ValueTypeName="color";class Fs extends Ft{}Fs.prototype.ValueTypeName="number";class fg extends hn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)dt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Zi extends Ft{InterpolantFactoryMethodLinear(e){return new fg(this.times,this.values,this.getValueSize(),e)}}Zi.prototype.ValueTypeName="quaternion";Zi.prototype.DefaultInterpolation=Ps;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class ui extends Ft{}ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Rs;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends Ft{}Ns.prototype.ValueTypeName="vector";class Ho{constructor(e,t=-1,n,i=Jr){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Dt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(gg(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Ft.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=We.getKeyframeOrder(l);l=We.sortedArray(l,1,h),c=We.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Fs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,y){if(p.length!==0){const x=[],f=[];We.flattenJSON(p,x,f,g),x.length!==0&&y.push(new u(d,x,f))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let y=0;y<d[g].morphTargets.length;y++)p[d[g].morphTargets[y]]=-1;for(const y in p){const x=[],f=[];for(let m=0;m!==d[g].morphTargets.length;++m){const E=d[g];x.push(E.time),f.push(E.morphTarget===y?1:0)}i.push(new Fs(".morphTargetInfluence["+y+"]",x,f))}l=p.length*a}else{const p=".bones["+t[u].name+"]";n(Ns,p+".position",d,"pos",i),n(Zi,p+".quaternion",d,"rot",i),n(Ns,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fs;case"vector":case"vector2":case"vector3":case"vector4":return Ns;case"color":return kl;case"quaternion":return Zi;case"bool":case"boolean":return hi;case"string":return ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function gg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mg(r.type);if(r.times===void 0){const t=[],n=[];We.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ni={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class yg{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const xg=new yg;class un{constructor(e){this.manager=e!==void 0?e:xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Ht={};class vg extends un{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ni.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ht[e]!==void 0){Ht[e].push({onLoad:t,onProgress:n,onError:i});return}Ht[e]=[],Ht[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(a).then(o=>{if(o.status===200||o.status===0){o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");const l=Ht[e],c=o.body.getReader(),h=o.headers.get("Content-Length"),u=h?parseInt(h):0,d=u!==0;let p=0;return new ReadableStream({start(g){y();function y(){c.read().then(({done:x,value:f})=>{if(x)g.close();else{p+=f.byteLength;const m=new ProgressEvent("progress",{lengthComputable:d,loaded:p,total:u});for(let E=0,_=l.length;E<_;E++){const T=l[E];T.onProgress&&T.onProgress(m)}g.enqueue(f),y()}})}}})}else throw Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>{const l=new Response(o);switch(this.responseType){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,this.mimeType));case"json":return l.json();default:return l.text()}}).then(o=>{ni.add(e,o);const l=Ht[e];delete Ht[e];for(let c=0,h=l.length;c<h;c++){const u=l[c];u.onLoad&&u.onLoad(o)}this.manager.itemEnd(e)}).catch(o=>{const l=Ht[e];delete Ht[e];for(let c=0,h=l.length;c<h;c++){const u=l[c];u.onError&&u.onError(o)}this.manager.itemError(e),this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ol extends un{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ni.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Os("img");function l(){h(),ni.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class _g extends un{constructor(e){super(e)}load(e,t,n,i){const s=new Gs,a=new Ol(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Mg extends un{constructor(e){super(e)}load(e,t,n,i){const s=new st,a=new Ol(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ut extends Fe{constructor(e,t=1){super(),this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Ut.prototype.isLight=!0;class bg extends Ut{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.groundColor=new de(t)}copy(e){return Ut.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}bg.prototype.isHemisphereLight=!0;const Vo=new ve,Wo=new w,qo=new w;class pa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wo),qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qo),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gl extends pa{constructor(){super(new mt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=Gr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Gl.prototype.isSpotLightShadow=!0;class wg extends Ut{constructor(e,t,n=0,i=Math.PI/3,s=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.target=new Fe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.shadow=new Gl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}wg.prototype.isSpotLight=!0;const Xo=new ve,wi=new w,Ur=new w;class Hl extends pa{constructor(){super(new mt(90,1,.5,500)),this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),wi.setFromMatrixPosition(e.matrixWorld),n.position.copy(wi),Ur.copy(n.position),Ur.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ur),n.updateMatrixWorld(),i.makeTranslation(-wi.x,-wi.y,-wi.z),Xo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo)}}Hl.prototype.isPointLightShadow=!0;class Sg extends Ut{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Sg.prototype.isPointLight=!0;class Vl extends pa{constructor(){super(new Wi(-5,5,5,-5,.5,500))}}Vl.prototype.isDirectionalLightShadow=!0;class Eg extends Ut{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.target=new Fe,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Eg.prototype.isDirectionalLight=!0;class Wl extends Ut{constructor(e,t){super(e,t),this.type="AmbientLight"}}Wl.prototype.isAmbientLight=!0;class Tg extends Ut{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Tg.prototype.isRectAreaLight=!0;class ql{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}ql.prototype.isSphericalHarmonics3=!0;class fa extends Ut{constructor(e=new ql,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}fa.prototype.isLightProbe=!0;class Ag{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Cg extends Ge{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Cg.prototype.isInstancedBufferGeometry=!0;class Lg extends un{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ni.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ni.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}Lg.prototype.isImageBitmapLoader=!0;let Es;const Xl={getContext:function(){return Es===void 0&&(Es=new(window.AudioContext||window.webkitAudioContext)),Es},setContext:function(r){Es=r}};class Yl extends un{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new vg(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);Xl.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class Rg extends fa{constructor(e,t,n=1){super(void 0,n);const i=new de().set(e),s=new de().set(t),a=new w(i.r,i.g,i.b),o=new w(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}Rg.prototype.isHemisphereLightProbe=!0;class Pg extends fa{constructor(e,t=1){super(void 0,t);const n=new de().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Pg.prototype.isAmbientLightProbe=!0;class Zl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yo(){return(typeof performance>"u"?Date:performance).now()}const _n=new w,Zo=new dt,Dg=new w,Mn=new w;class Ig extends Fe{constructor(){super(),this.type="AudioListener",this.context=Xl.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Zl}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_n,Zo,Dg),Mn.set(0,0,-1).applyQuaternion(Zo),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(_n.x,i),t.positionY.linearRampToValueAtTime(_n.y,i),t.positionZ.linearRampToValueAtTime(_n.z,i),t.forwardX.linearRampToValueAtTime(Mn.x,i),t.forwardY.linearRampToValueAtTime(Mn.y,i),t.forwardZ.linearRampToValueAtTime(Mn.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(_n.x,_n.y,_n.z),t.setOrientation(Mn.x,Mn.y,Mn.z,n.x,n.y,n.z)}}class Ci extends Fe{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class Ug{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){dt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;dt.multiplyQuaternionsFlat(e,a,e,t,e,n),dt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const ma="\\[\\]\\.:\\/",Fg=new RegExp("["+ma+"]","g"),ga="[^"+ma+"]",Ng="[^"+ma.replace("\\.","")+"]",zg=/((?:WC+[\/:])*)/.source.replace("WC",ga),Bg=/(WCOD+)?/.source.replace("WCOD",Ng),kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ga),Og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ga),Gg=new RegExp("^"+zg+Bg+kg+Og+"$"),Hg=["material","materials","bones"];class Vg{constructor(e,t,n){const i=n||Be.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Be{constructor(e,t,n){this.path=t,this.parsedPath=n||Be.parseTrackName(t),this.node=Be.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Be.Composite(e,t,n):new Be(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fg,"")}static parseTrackName(e){const t=Gg.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Hg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Be.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Be.Composite=Vg;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Wg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Yn,endingEnd:Yn};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Th,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case tl:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Jr:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===Ah;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Eh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Zn,i.endingEnd=Zn):(e?i.endingStart=this.zeroSlopeAtStart?Zn:Yn:i.endingStart=Ds,t?i.endingEnd=this.zeroSlopeAtEnd?Zn:Yn:i.endingEnd=Ds)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}class qg extends Tn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],p=d.name;let g=h[p];if(g!==void 0)a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const y=t&&t._propertyBindings[u].binding.parsedPath;g=new Ug(Be.create(n,p,y),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Bl(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Ho.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Jr),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Wg(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Ho.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}qg.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Xg extends qi{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}Xg.prototype.isInstancedInterleavedBuffer=!0;const Kt=new w,Ts=new ve,Fr=new ve;class Yg extends aa{constructor(e){const t=jl(e),n=new Ge,i=[],s=[],a=new de(0,0,1),o=new de(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Oe(i,3)),n.setAttribute("color",new Oe(s,3));const l=new Xi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Fr.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Ts.multiplyMatrices(Fr,o.matrixWorld),Kt.setFromMatrixPosition(Ts),i.setXYZ(a,Kt.x,Kt.y,Kt.z),Ts.multiplyMatrices(Fr,o.parent.matrixWorld),Kt.setFromMatrixPosition(Ts),i.setXYZ(a+1,Kt.x,Kt.y,Kt.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function jl(r){const e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,jl(r.children[t]));return e}class Zg extends aa{constructor(e=10,t=10,n=4473924,i=8947848){n=new de(n),i=new de(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,p=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const y=d===s?n:i;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const h=new Ge;h.setAttribute("position",new Oe(l,3)),h.setAttribute("color",new Oe(c,3));const u=new Xi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}const jg=new Float32Array(1);new Int32Array(jg.buffer);wt.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(wt.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};qr.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};Zg.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Yg.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};un.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Ag.extractUrlBase(r)};un.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Lt.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};Lt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Lt.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Lt.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Lt.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};ri.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Hs.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};nt.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};nt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};nt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};nt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};nt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};nt.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};ve.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};ve.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};ve.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new w().setFromMatrixColumn(this,3)};ve.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};ve.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};ve.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ve.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ve.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};ve.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};ve.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ve.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};ve.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};ve.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};ve.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};ve.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};ve.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ve.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};ve.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};ve.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Vt.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};dt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};dt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};ai.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};ai.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};ai.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};$e.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};$e.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};$e.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};$e.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};$e.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};$e.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),$e.getBarycoord(r,e,t,n,i)};$e.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),$e.getNormal(r,e,t,n)};Yi.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};Yi.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ci(this,r)};Yi.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new da(this,r)};Y.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};Y.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};Y.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};w.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};w.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};w.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};w.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};w.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};w.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};w.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};w.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};w.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ke.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};ke.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Fe.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Fe.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Fe.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};Fe.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Fe.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Fe.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});oe.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(oe.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Ch},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Al.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};mt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(Ut.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(Qe.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Is},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Is)}}});Qe.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Is:Ni),this};Qe.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Qe.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ge.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};Ge.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new Qe(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};Ge.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};Ge.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ge.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ge.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};Ge.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Ge.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});qi.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Is:Ni),this};qi.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ci.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};ci.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};ci.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Ws.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(ht.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new de}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===$o}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Sn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});Ne.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};Ne.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};Ne.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ne.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ne.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ne.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ne.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ne.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ne.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ne.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ne.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ne.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ne.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ne.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ne.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};Ne.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ne.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ne.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ne.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ne.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ne.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ne.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ne.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ne.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ne.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ne.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?En:lt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Sl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(It.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});Ci.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Yl().load(r,function(n){e.setBuffer(n)}),this};ea.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};ea.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};si.crossOrigin=void 0;si.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Mg;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};si.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new _g;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};si.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};si.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);var Ii=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),n(++r%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function n(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";r=h}var i=(performance||Date).now(),s=i,a=0,o=t(new Ii.Panel("FPS","#0ff","#002")),l=t(new Ii.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Ii.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){a++;var h=(performance||Date).now();if(l.update(h-i,200),h>=s+1e3&&(o.update(a*1e3/(h-s),100),s=h,a=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){i=this.end()},domElement:e,setMode:n}};Ii.Panel=function(r,e,t){var n=1/0,i=0,s=Math.round,a=s(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,h=2*a,u=3*a,d=15*a,p=74*a,g=30*a,y=document.createElement("canvas");y.width=o,y.height=l,y.style.cssText="width:80px;height:48px";var x=y.getContext("2d");return x.font="bold "+9*a+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=t,x.fillRect(0,0,o,l),x.fillStyle=e,x.fillText(r,c,h),x.fillRect(u,d,p,g),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(u,d,p,g),{dom:y,update:function(f,m){n=Math.min(n,f),i=Math.max(i,f),x.fillStyle=t,x.globalAlpha=1,x.fillRect(0,0,o,d),x.fillStyle=e,x.fillText(s(f)+" "+r+" ("+s(n)+"-"+s(i)+")",c,h),x.drawImage(y,u+a,d,p-a,g,u,d,p-a,g),x.fillRect(u+p-a,d,a,g),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(u+p-a,d,a,s((1-f/m)*g))}}};class Jg{minimapRenderer;minimapCamera;minimapScene;playerUnit;playerUnitDot;enemyDots=[];minimapContainer;MINIMAP_SIZE=150;MAP_SIZE=1e3;constructor(e,t){this.playerUnit=t,this.initMinimap(),this.createMinimapScene(e),this.createPlayerUnitDot(),this.setupMinimapContainer()}initMinimap(){this.minimapRenderer=new Ne({alpha:!0}),this.minimapRenderer.setSize(this.MINIMAP_SIZE,this.MINIMAP_SIZE),this.minimapRenderer.setClearColor(0,.3),this.minimapCamera=new Wi(-this.MAP_SIZE/2,this.MAP_SIZE/2,this.MAP_SIZE/2,-this.MAP_SIZE/2,1,1e3),this.minimapCamera.position.z=500,this.minimapCamera.lookAt(0,0,0),this.minimapScene=new Ws}createMinimapScene(e){const t=new ft(this.MAP_SIZE,this.MAP_SIZE),n=new Ce({color:2263842}),i=new oe(t,n);i.position.z=-1,this.minimapScene.add(i),e.traverse(s=>{if(s.userData.isTree||s.userData.isBush){const a=new ft(8,8);let o;s.userData.isTree?o=new Ce({color:9127187}):o=new Ce({color:10044586});const l=new oe(a,o);l.position.copy(s.position),l.position.z=0,this.minimapScene.add(l)}})}createPlayerUnitDot(){const e=this.getPlayerDotSize(),t=new ft(e,e),n=new Ce({color:0});this.playerUnitDot=new oe(t,n),this.playerUnitDot.position.z=1,this.minimapScene.add(this.playerUnitDot)}getPlayerDotSize(){return this.playerUnit.getRadius()*10*1.5}updatePlayerUnitDotSize(){const e=this.getPlayerDotSize(),n=this.playerUnitDot.geometry.parameters?.width||10,i=n*this.playerUnitDot.scale.x;Math.abs(i-e)>.1&&this.playerUnitDot.scale.set(e/n,e/n,1)}setupMinimapContainer(){this.minimapContainer=document.createElement("div"),this.minimapContainer.style.position="fixed",this.minimapContainer.style.bottom="20px",this.minimapContainer.style.left="20px",this.minimapContainer.style.width=`${this.MINIMAP_SIZE}px`,this.minimapContainer.style.height=`${this.MINIMAP_SIZE}px`,this.minimapContainer.style.border="2px solid #fff",this.minimapContainer.style.borderRadius="8px",this.minimapContainer.style.overflow="hidden",this.minimapContainer.style.zIndex="1000",this.minimapContainer.appendChild(this.minimapRenderer.domElement),document.body.appendChild(this.minimapContainer)}updatePlayerUnitPosition(){if(this.playerUnit&&this.playerUnitDot){const e=this.playerUnit.getModel();this.playerUnitDot.position.x=e.position.x,this.playerUnitDot.position.y=e.position.y,this.updatePlayerUnitDotSize()}}updatePlayerUnitRef(e){this.playerUnit=e,this.updatePlayerUnitDotSize()}render(){this.minimapRenderer.render(this.minimapScene,this.minimapCamera)}updateObjects(e,t,n){this.minimapScene.children=this.minimapScene.children.filter(i=>!i.userData.isMinimapDot),e.forEach(i=>{const s=new ft(8,8),a=new Ce({color:9127187}),o=new oe(s,a);o.position.copy(i.position),o.position.z=0,o.userData.isMinimapDot=!0,this.minimapScene.add(o)}),t.forEach(i=>{const s=new ft(6,6),a=new Ce({color:10044586}),o=new oe(s,a);o.position.copy(i.position),o.position.z=0,o.userData.isMinimapDot=!0,this.minimapScene.add(o)}),n&&n.forEach(i=>{const s=new ft(7,7),a=new Ce({color:65450}),o=new oe(s,a);o.position.copy(i.getPosition()),o.position.z=0,o.userData.isMinimapDot=!0,this.minimapScene.add(o)})}updateEnemyPositions(e){const t=e.length,n=this.enemyDots.length;for(;this.enemyDots.length>t;){const i=this.enemyDots.pop();this.minimapScene.remove(i),i.geometry.dispose(),i.material.dispose()}for(let i=0;i<t;i++){const s=e[i],a=s.getPosition(),l=(s.getRadius?s.getRadius():3)*10,h=s.getSizeMultiplier()>1?16766720:9109504;if(i<n){const u=this.enemyDots[i];u.position.copy(a),u.position.z=.5;const d=u.material;d.color.getHex()!==h&&d.color.setHex(h);const g=u.geometry.parameters?.width||10;Math.abs(g-l)>.1&&u.scale.set(l/g,l/g,1)}else{const u=new ft(l,l),d=new Ce({color:h}),p=new oe(u,d);p.position.copy(a),p.position.z=.5,this.enemyDots.push(p),this.minimapScene.add(p)}}}dispose(){for(const e of this.enemyDots)this.minimapScene.remove(e),e.geometry.dispose(),e.material.dispose();this.enemyDots=[],this.minimapScene.traverse(e=>{e instanceof oe&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()))}),this.minimapRenderer.dispose(),this.minimapContainer&&this.minimapContainer.parentNode&&this.minimapContainer.parentNode.removeChild(this.minimapContainer)}}class $g{controlContainer;callbacks;mineralsDisplay;gasDisplay;essenceDisplay;morphSelect;SPEED_OPTIONS={Slow:30,Normal:50,Fast:90,Lightning:180};UNIT_MORPH_OPTIONS=[{name:"Larvae",mineralCost:0,gasCost:0},{name:"Drone",mineralCost:50,gasCost:0},{name:"Zergling",mineralCost:25,gasCost:0},{name:"Baneling",mineralCost:25,gasCost:25},{name:"Overlord",mineralCost:100,gasCost:0},{name:"Roach",mineralCost:75,gasCost:25},{name:"Hydralisk",mineralCost:100,gasCost:50},{name:"Mutalisk",mineralCost:100,gasCost:100},{name:"Queen",mineralCost:150,gasCost:0},{name:"Ultralisk",mineralCost:275,gasCost:200}];constructor(e){this.callbacks=e,this.setupControlPanel()}setupControlPanel(){this.controlContainer=document.createElement("div"),this.controlContainer.className="control-panel";const e=this.createResourceSection(),t=this.createMorphSection(),n=this.createZoomSection(),i=this.createSpeedSection();this.controlContainer.appendChild(e),this.controlContainer.appendChild(t),this.controlContainer.appendChild(n),this.controlContainer.appendChild(i),document.body.appendChild(this.controlContainer)}createResourceSection(){const e=document.createElement("div");e.className="control-section resource-section";const t=document.createElement("div");t.className="control-label resource-label",t.textContent="Resources";const n=document.createElement("div");n.className="resource-display";const i=document.createElement("div");i.className="resource-item minerals";const s=document.createElement("span");s.className="resource-icon minerals-icon",s.textContent="♦♦",this.mineralsDisplay=document.createElement("span"),this.mineralsDisplay.className="resource-value",this.mineralsDisplay.textContent="0",i.appendChild(s),i.appendChild(this.mineralsDisplay);const a=document.createElement("div");a.className="resource-item gas";const o=document.createElement("span");o.className="resource-icon gas-icon",o.textContent="●○",this.gasDisplay=document.createElement("span"),this.gasDisplay.className="resource-value",this.gasDisplay.textContent="0",a.appendChild(o),a.appendChild(this.gasDisplay);const l=document.createElement("div");l.className="resource-item essence";const c=document.createElement("span");return c.className="resource-icon essence-icon",c.textContent="🐚",this.essenceDisplay=document.createElement("span"),this.essenceDisplay.className="resource-value",this.essenceDisplay.textContent="0",l.appendChild(c),l.appendChild(this.essenceDisplay),n.appendChild(i),n.appendChild(a),n.appendChild(l),e.appendChild(t),e.appendChild(n),e}createMorphSection(){const e=document.createElement("div");e.className="control-section";const t=document.createElement("div");t.className="control-label",t.textContent="Morph Into",this.morphSelect=document.createElement("select"),this.morphSelect.className="morph-select";const n=document.createElement("option");return n.value="",n.textContent="-- Select Unit --",n.disabled=!0,n.selected=!0,this.morphSelect.appendChild(n),this.UNIT_MORPH_OPTIONS.forEach(i=>{const s=document.createElement("option");s.value=i.name;let a="";(i.mineralCost>0||i.gasCost>0)&&(a=" (",i.mineralCost>0&&(a+=`${i.mineralCost}M`),i.gasCost>0&&(a+=i.mineralCost>0?`/${i.gasCost}G`:`${i.gasCost}G`),a+=")"),s.textContent=`${i.name}${a}`,s.dataset.minerals=i.mineralCost.toString(),s.dataset.gas=i.gasCost.toString(),this.morphSelect.appendChild(s)}),this.morphSelect.addEventListener("change",i=>{const s=i.target,a=s.value;a&&(this.callbacks.onMorphUnit(a),s.value=""),s.blur()}),this.morphSelect.addEventListener("keydown",i=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.key)&&(i.preventDefault(),i.stopPropagation(),this.morphSelect.blur())}),e.appendChild(t),e.appendChild(this.morphSelect),e}createZoomSection(){const e=document.createElement("div");e.className="control-section";const t=document.createElement("div");t.className="control-label",t.textContent="Zoom";const n=document.createElement("div");n.className="zoom-controls";const i=document.createElement("button");i.className="zoom-btn",i.textContent="-",i.addEventListener("click",()=>{this.callbacks.onZoomChange(-.1)});const s=document.createElement("button");return s.className="zoom-btn",s.textContent="+",s.addEventListener("click",()=>{this.callbacks.onZoomChange(.1)}),n.appendChild(i),n.appendChild(s),e.appendChild(t),e.appendChild(n),e}createSpeedSection(){const e=document.createElement("div");e.className="control-section";const t=document.createElement("div");t.className="control-label",t.textContent="Speed";const n=document.createElement("select");return n.className="speed-select",Object.entries(this.SPEED_OPTIONS).forEach(([i,s])=>{const a=document.createElement("option");a.value=s.toString(),a.textContent=i,s===50&&(a.selected=!0),n.appendChild(a)}),n.addEventListener("change",i=>{const s=i.target,a=parseInt(s.value);this.callbacks.onSpeedChange(a),s.blur()}),n.addEventListener("keydown",i=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.key)&&(i.preventDefault(),i.stopPropagation(),n.blur())}),e.appendChild(t),e.appendChild(n),e}updateResources(e,t,n){this.mineralsDisplay.textContent=e.toString(),this.gasDisplay.textContent=t.toString(),this.essenceDisplay.textContent=n.toString(),this.morphSelect.querySelectorAll("option").forEach(s=>{if(s.value==="")return;const a=parseInt(s.dataset.minerals||"0"),o=parseInt(s.dataset.gas||"0"),l=e>=a&&t>=o;s.disabled=!l})}dispose(){this.controlContainer&&this.controlContainer.parentElement&&document.body.removeChild(this.controlContainer)}}class Qg{titleContainer;README_URL="https://github.com/bresleveloper/ZerusCarnage_01/blob/main/README.md";constructor(){this.setupGameTitle()}setupGameTitle(){this.titleContainer=document.createElement("div"),this.titleContainer.className="game-title";const e=document.createElement("span");e.className="game-title-text",e.textContent="ZerusCarnage";const t=document.createElement("a");t.className="info-icon",t.href=this.README_URL,t.target="_blank",t.rel="noopener noreferrer",t.textContent="ⓘ",t.title="View README",this.titleContainer.appendChild(e),this.titleContainer.appendChild(t),document.body.appendChild(this.titleContainer)}dispose(){this.titleContainer&&this.titleContainer.parentElement&&document.body.removeChild(this.titleContainer)}}class Js{supply;costMinerals;costVespene;hitPoints;armor;damage;attackCooldown;attributes;unitTypeName;currentHP;attackTimer;isInCombat;damageAbsorb=0;attackUpgrade=0;armorUpgrade=0;sizeMultiplier=1;model;position;constructor(e,t,n,i=1){this.supply=e.supply,this.costMinerals=e.costMinerals,this.costVespene=e.costVespene,this.hitPoints=e.hitPoints,this.armor=e.armor,this.damage=e.damage,this.attackCooldown=e.attackCooldown,this.attributes=[...e.attributes],this.unitTypeName=n,this.sizeMultiplier=i,this.currentHP=this.hitPoints,this.attackTimer=0,this.isInCombat=!1,this.position=t.clone(),this.model=this.createModel(),this.model.position.copy(this.position)}getSupply(){return this.supply}getCostMinerals(){return this.costMinerals}getCostVespene(){return this.costVespene}getHitPoints(){return this.hitPoints}getArmor(){return this.armor}getDamage(){return this.damage}getAttackCooldown(){return this.attackCooldown}getAttributes(){return[...this.attributes]}getUnitTypeName(){return this.unitTypeName}getCurrentHP(){return this.currentHP}getAttackTimer(){return this.attackTimer}getIsInCombat(){return this.isInCombat}setIsInCombat(e){this.isInCombat=e}getAttackUpgrade(){return this.attackUpgrade}getArmorUpgrade(){return this.armorUpgrade}setAttackUpgrade(e){this.attackUpgrade=e}setArmorUpgrade(e){this.armorUpgrade=e}getSizeMultiplier(){return this.sizeMultiplier}getDamageAbsorb(){return this.damageAbsorb}setDamageAbsorb(e){this.damageAbsorb=Math.max(0,e)}getModel(){return this.model}getPosition(){return this.position.clone()}setPosition(e){this.position.copy(e),this.model.position.copy(this.position)}takeDamage(e,t=this.armor){if(e<0){const i=Math.abs(e);this.currentHP=Math.min(this.hitPoints,this.currentHP+i);return}let n=e;if(this.damageAbsorb>0){const i=Math.min(this.damageAbsorb,e);this.damageAbsorb-=i,n=e-i}if(n>0){const i=Math.max(1,n-t);this.currentHP=Math.max(0,this.currentHP-i)}}canAttack(){return this.attackTimer<=0}resetAttackTimer(){this.attackTimer=this.attackCooldown}updateAttackTimer(e){this.attackTimer>0&&(this.attackTimer=Math.max(0,this.attackTimer-e))}isAlive(){return this.currentHP>0}getUnitInfo(){return`${this.constructor.name} - ${this.costMinerals}M/${this.costVespene}G - HP:${this.hitPoints} Armor:${this.armor} Damage:${this.damage}`}dispose(){this.model.traverse(e=>{e instanceof oe&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()))})}}class Si extends Js{direction;speed=20;directionChangeTimer=0;directionChangeInterval=3+Math.random()*2;isPlayerUnit=!1;customBodyColor;constructor(e,t=!1,n,i,s=1){const a={supply:1,costMinerals:50,costVespene:0,hitPoints:40,armor:0,damage:5,attackCooldown:1,attributes:["Biological"],...n};super(a,e,"Drone",s),this.isPlayerUnit=t,this.customBodyColor=i,this.model=this.createDroneModel(),this.model.position.copy(this.position),this.direction=this.getRandomDirection(),this.updateRotation()}createModel(){return this.createDroneModel()}createDroneModel(){const e=new bt,t=3*this.sizeMultiplier,n=this.customBodyColor??(this.isPlayerUnit?16716947:16738740),i=new it(1.2*t,12,8);this.sizeMultiplier>1?i.scale(1.5,1,.3):i.scale(1.5,1,1);const s=new Ce({color:n}),a=new oe(i,s);a.position.set(0,.6*t,0);const o=new it(.12*t,6,4);o.scale(.6,1.2,1);const l=new Ce({color:0}),c=new oe(o,l);c.position.set(-.4*t,.8*t,1.6*t);const h=new oe(o,l);h.position.set(.4*t,.8*t,1.6*t);const u=new it(.6*t,8,6);u.scale(.8,.6,1.2);const d=new Ce({color:16758465}),p=new oe(u,d);p.position.set(-1.8*t,.4*t,0);const g=new it(.6*t,8,6);g.scale(.8,.6,1.2);const y=new oe(g,d);return y.position.set(1.8*t,.4*t,0),e.add(a),e.add(c),e.add(h),e.add(p),e.add(y),e.position.y=.3*t,e}getRandomDirection(){const e=Math.random()*Math.PI*2;return new Y(Math.cos(e),Math.sin(e))}updateRotation(){if(this.direction.length()>0){const e=Math.atan2(this.direction.y,this.direction.x);this.model.rotation.z=e}}static getRandomEdgePosition(){const t=Math.floor(Math.random()*4);let n,i;switch(t){case 0:n=(Math.random()-.5)*(500*2),i=500;break;case 1:n=(Math.random()-.5)*(500*2),i=-500;break;case 2:n=-500,i=(Math.random()-.5)*(500*2);break;case 3:n=500,i=(Math.random()-.5)*(500*2);break;default:n=0,i=500}return new w(n,i,0)}update(e,t,n,i,s){if(s)if(Math.sqrt(Math.pow(this.position.x-s.x,2)+Math.pow(this.position.y-s.y,2))<=100){const g=s.x-this.position.x,y=s.y-this.position.y,x=Math.sqrt(g*g+y*y);x>0&&(this.direction.set(g/x,y/x),this.updateRotation())}else this.directionChangeTimer+=e,this.directionChangeTimer>=this.directionChangeInterval&&(this.direction=this.getRandomDirection(),this.directionChangeTimer=0,this.directionChangeInterval=3+Math.random()*2,this.updateRotation());else this.directionChangeTimer+=e,this.directionChangeTimer>=this.directionChangeInterval&&(this.direction=this.getRandomDirection(),this.directionChangeTimer=0,this.directionChangeInterval=3+Math.random()*2,this.updateRotation());const a=this.speed*e;let o=this.position.x+this.direction.x*a,l=this.position.y+this.direction.y*a;const c=new w(o,l,0),h=this.getRadius();let u=!1;for(const p of n){const g=new w(p.position.x,p.position.y+2,p.position.z);if(Math.sqrt(Math.pow(c.x-g.x,2)+Math.pow(c.y-g.y,2))<h+.8){u=!0;break}}if(!u){for(const p of i)if(Math.sqrt(Math.pow(c.x-p.position.x,2)+Math.pow(c.y-p.position.y,2))<h+1.5){u=!0;break}}if(u){this.direction.x*=-1,this.direction.y*=-1,this.direction.x+=(Math.random()-.5)*.5,this.direction.y+=(Math.random()-.5)*.5;const p=Math.sqrt(this.direction.x*this.direction.x+this.direction.y*this.direction.y);this.direction.x/=p,this.direction.y/=p,this.updateRotation();return}const d=10;(o<=t.minX+d||o>=t.maxX-d)&&(this.direction.x*=-1,o=Math.max(t.minX+d,Math.min(t.maxX-d,o))),(l<=t.minY+d||l>=t.maxY-d)&&(this.direction.y*=-1,l=Math.max(t.minY+d,Math.min(t.maxY-d,l))),this.position.set(o,l,0),this.model.position.copy(this.position),this.updateRotation()}getRadius(){return 5*this.sizeMultiplier}}class Ei extends Js{direction;speed=22;directionChangeTimer=0;directionChangeInterval=2+Math.random()*2;isPlayerUnit=!1;customBodyColor;constructor(e,t=!1,n,i,s=1){const a={supply:.5,costMinerals:25,costVespene:0,hitPoints:35,armor:0,damage:5,attackCooldown:.61,attributes:["Light","Biological"],...n};super(a,e,"Zergling",s),this.isPlayerUnit=t,this.customBodyColor=i,this.model=this.createZerglingModel(),this.model.position.copy(this.position),this.direction=this.getRandomDirection(),this.updateRotation()}createModel(){return this.createZerglingModel()}createZerglingModel(){const e=new bt,t=2.5*this.sizeMultiplier,n=this.customBodyColor??(this.isPlayerUnit?11032063:14194431),i=new it(1.2*t,12,8);i.scale(1.3,1,1.1);const s=new Ce({color:n}),a=new oe(i,s);a.position.set(0,1.2*t,0);const o=new it(1*t,12,8,0,Math.PI*2,0,Math.PI/1.8),l=new Ce({color:4856394}),c=new oe(o,l);c.position.set(.3*t,.8*t,0),c.rotation.z=Math.PI/6;const h=new Ce({color:4856394});for(let W=0;W<5;W++){const F=new Xs(.15*t,.3*t,4),C=new oe(F,h);C.position.set((W-2)*.35*t,1*t,.8*t),C.rotation.x=Math.PI,e.add(C)}const u=new it(.35*t,8,6),d=new Ce({color:0}),p=new oe(u,d);p.position.set(-.4*t,1.6*t,1*t);const g=new oe(u,d);g.position.set(.4*t,1.6*t,1*t);const y=new ln(.15*t,.2*t,.5*t,6),x=new Ce({color:13073919}),f=new oe(y,x);f.position.set(-.5*t,.25*t,.7*t);const m=new oe(y,x);m.position.set(.5*t,.25*t,.7*t);const E=new oe(y,x);E.position.set(-.6*t,.25*t,-.5*t);const _=new oe(y,x);_.position.set(.6*t,.25*t,-.5*t);const T=new ln(.2*t,.35*t,1.5*t,8),A=new Ce({color:11888088}),v=new oe(T,A);v.position.set(-.3*t,1.3*t,-1.3*t),v.rotation.x=Math.PI/3,v.rotation.z=-Math.PI/8;const R=new oe(T,A);return R.position.set(.3*t,1.3*t,-1.3*t),R.rotation.x=Math.PI/3,R.rotation.z=Math.PI/8,e.add(a),e.add(c),e.add(p),e.add(g),e.add(f),e.add(m),e.add(E),e.add(_),e.add(v),e.add(R),e.position.y=0,e}getRandomDirection(){const e=Math.random()*Math.PI*2;return new Y(Math.cos(e),Math.sin(e))}updateRotation(){if(this.direction.length()>0){const e=Math.atan2(this.direction.y,this.direction.x);this.model.rotation.z=e}}static getRandomEdgePosition(e){let n=Math.floor(Math.random()*4);if(e!==void 0){const a=[0,1,2,3].filter(o=>o!==e);n=a[Math.floor(Math.random()*a.length)]}let i,s;switch(n){case 0:i=(Math.random()-.5)*(500*2),s=500;break;case 1:i=(Math.random()-.5)*(500*2),s=-500;break;case 2:i=-500,s=(Math.random()-.5)*(500*2);break;case 3:i=500,s=(Math.random()-.5)*(500*2);break;default:i=0,s=500}return new w(i,s,0)}update(e,t,n,i,s){if(s)if(Math.sqrt(Math.pow(this.position.x-s.x,2)+Math.pow(this.position.y-s.y,2))<=100){const g=s.x-this.position.x,y=s.y-this.position.y,x=Math.sqrt(g*g+y*y);x>0&&(this.direction.set(g/x,y/x),this.updateRotation())}else this.directionChangeTimer+=e,this.directionChangeTimer>=this.directionChangeInterval&&(this.direction=this.getRandomDirection(),this.directionChangeTimer=0,this.directionChangeInterval=2+Math.random()*2,this.updateRotation());else this.directionChangeTimer+=e,this.directionChangeTimer>=this.directionChangeInterval&&(this.direction=this.getRandomDirection(),this.directionChangeTimer=0,this.directionChangeInterval=2+Math.random()*2,this.updateRotation());const a=this.speed*e;let o=this.position.x+this.direction.x*a,l=this.position.y+this.direction.y*a;const c=new w(o,l,0),h=this.getRadius();let u=!1;for(const p of n){const g=new w(p.position.x,p.position.y+2,p.position.z);if(Math.sqrt(Math.pow(c.x-g.x,2)+Math.pow(c.y-g.y,2))<h+.8){u=!0;break}}if(!u){for(const p of i)if(Math.sqrt(Math.pow(c.x-p.position.x,2)+Math.pow(c.y-p.position.y,2))<h+1.5){u=!0;break}}if(u){this.direction.x*=-1,this.direction.y*=-1,this.direction.x+=(Math.random()-.5)*.5,this.direction.y+=(Math.random()-.5)*.5;const p=Math.sqrt(this.direction.x*this.direction.x+this.direction.y*this.direction.y);this.direction.x/=p,this.direction.y/=p,this.updateRotation();return}const d=10;(o<=t.minX+d||o>=t.maxX-d)&&(this.direction.x*=-1,o=Math.max(t.minX+d,Math.min(t.maxX-d,o))),(l<=t.minY+d||l>=t.maxY-d)&&(this.direction.y*=-1,l=Math.max(t.minY+d,Math.min(t.maxY-d,l))),this.position.set(o,l,0),this.model.position.copy(this.position),this.updateRotation()}getRadius(){return 4*this.sizeMultiplier}}class Jl{rules=[];constructor(){this.initializeRules()}initializeRules(){this.addRule("Drone","Larvae",!0,!1,0),this.addRule("Larvae","Bush",!1,!0,0),this.addRule("Drone","Drone",!1,!1,0),this.addRule("Larvae","Drone",!1,!1,0),this.addRule("Drone","Bush",!1,!0,0),this.addRule("Drone","Tree",!1,!0,20),this.addRule("Drone","Zergling",!1,!1,0),this.addRule("Zergling","Zergling",!1,!1,0),this.addRule("Zergling","Larvae",!0,!0,25),this.addRule("Zergling","Drone",!0,!0,50)}addRule(e,t,n,i,s){this.rules.push({attacker:e,target:t,canKill:n,canEat:i,reward:s})}canKill(e,t){const n=this.rules.find(i=>i.attacker===e&&i.target===t);return n?n.canKill:!1}canEat(e,t){const n=this.rules.find(i=>i.attacker===e&&i.target===t);return n?n.canEat:!1}getReward(e,t){const n=this.rules.find(i=>i.attacker===e&&i.target===t);return n?n.reward:0}isImmuneTo(e,t){return!this.canKill(t,e)}shouldFight(e,t){return!(e==="Larvae"||t==="Larvae")}}class Kg{gameOver=!1;callbacks;combatRules;constructor(e){this.callbacks=e,this.combatRules=new Jl}checkCollisions(e,t,n,i){if(!this.gameOver)for(const s of i){const a=s.getPosition(),o=s.getRadius?s.getRadius():3;if(Math.sqrt(Math.pow(e.x-a.x,2)+Math.pow(e.y-a.y,2))<t+o){const c=s.getUnitTypeName();if(this.combatRules.canKill(c,n)){this.triggerGameOver();break}}}}checkEatingEnemies(e,t,n,i,s){for(const a of i){const o=a.getPosition(),l=a.getRadius?a.getRadius():3;if(Math.sqrt(Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2))<t+l){const h=a.getUnitTypeName();if(this.combatRules.canEat(n,h)){const u=this.combatRules.getReward(n,h);return s(a,u),a}}}return null}triggerGameOver(){this.gameOver||(this.gameOver=!0,this.callbacks.onGameOver())}isGameOver(){return this.gameOver}resetGameState(){this.gameOver=!1}takeDamage(e){}addEffect(e,t){}collectPowerUp(e){}}class ey{attackLevel=0;armorLevel=0;getAttackLevel(){return this.attackLevel}getArmorLevel(){return this.armorLevel}getAttackBonus(){return this.attackLevel}getArmorBonus(){return this.armorLevel}upgradeAttack(){this.attackLevel++}upgradeArmor(){this.armorLevel++}getAttackUpgradeCost(){this.attackLevel+1;const e=100+this.attackLevel*50;return{minerals:e,gas:e}}getArmorUpgradeCost(){this.armorLevel+1;const e=150+this.armorLevel*50;return{minerals:e,gas:e}}getInfo(){return`Attack: +${this.attackLevel} | Armor: +${this.armorLevel}`}}class ty{currentUnit;unitType;speed=50;rotationZ=0;minerals=11500;gas=11500;essence=0;upgrades;isMorphing=!1;constructor(e,t){this.currentUnit=e,this.unitType=t,this.upgrades=new ey}getModel(){return this.currentUnit.getModel()}getPosition(){return this.currentUnit.getPosition()}setPosition(e){this.currentUnit.setPosition(e)}getSpeed(){return this.speed}setSpeed(e){this.speed=e}getRotation(){return this.rotationZ}setRotation(e){this.rotationZ=e,this.currentUnit.getModel().rotation.z=e}getRadius(){return this.currentUnit.getRadius()}getMinerals(){return this.minerals}setMinerals(e){this.minerals=Math.max(0,e)}getGas(){return this.gas}setGas(e){this.gas=Math.max(0,e)}getEssence(){return this.essence}setEssence(e){this.essence=Math.max(0,e)}addEssence(e){this.essence+=e,this.essence=Math.max(0,this.essence)}getResources(){return{minerals:this.minerals,gas:this.gas,essence:this.essence}}getUnitType(){return this.unitType}getCurrentUnit(){return this.currentUnit}morphInto(e,t){const n=this.getPosition(),i=this.minerals,s=this.gas,a=this.essence;this.currentUnit.dispose(),this.currentUnit=e,this.unitType=t,this.setPosition(n),this.minerals=i,this.gas=s,this.essence=a,this.isMorphing=!1}setMorphing(e){this.isMorphing=e}getIsMorphing(){return this.isMorphing}getUpgrades(){return this.upgrades}getEffectiveDamage(){return this.currentUnit.getDamage()+this.upgrades.getAttackBonus()}getEffectiveArmor(){return this.currentUnit.getArmor()+this.upgrades.getArmorBonus()}getCurrentHP(){return this.currentUnit.getCurrentHP()}getMaxHP(){return this.currentUnit.getHitPoints()}getDamageAbsorb(){return this.currentUnit.getDamageAbsorb()}purchaseDamageAbsorb(e,t){if(this.essence>=e){this.essence-=e;const n=this.currentUnit.getDamageAbsorb();return this.currentUnit.setDamageAbsorb(n+t),!0}return!1}}class As extends Js{direction;speed=8;directionChangeTimer=0;directionChangeInterval=4+Math.random()*3;isPlayerUnit=!1;constructor(e,t=!1){const n={supply:0,costMinerals:0,costVespene:0,hitPoints:25,armor:10,damage:0,attackCooldown:999,attributes:["Light","Biological"]};super(n,e,"Larvae"),this.isPlayerUnit=t,this.model=this.createModelWithColor(t),this.model.position.copy(this.position),this.direction=this.getRandomDirection(),this.updateRotation()}createModel(){return this.createModelWithColor(this.isPlayerUnit)}createModelWithColor(e=!1){const t=new bt,n=1,i=e?10048989:11163050,s=14514141,a=10044586,o=7812010,l=new it(1.2*n,8,6);l.scale(1.5,.8,1);const c=new Ce({color:i}),h=new oe(l,c);h.position.y=.6*n;const u=new it(.6*n,6,4),d=new Ce({color:s}),p=new oe(u,d);p.position.set(1.2*n,.8*n,0);const g=new it(.15*n,4,3),y=new Ce({color:0}),x=new oe(g,y);x.position.set(1.6*n,.9*n,.3*n);const f=new oe(g,y);f.position.set(1.6*n,.9*n,-.3*n);const m=new it(.4*n,6,4),E=new Ce({color:a});for(let A=0;A<3;A++){const v=new oe(m,E);v.position.set(-.8*n-A*.6*n,.4*n,0),v.scale.set(.8-A*.1,.6,.8-A*.1),t.add(v)}const _=new ln(.05*n,.1*n,.8*n,4),T=new Ce({color:o});for(let A=0;A<4;A++){const v=new oe(_,T),R=A/4*Math.PI*2;v.position.set(Math.cos(R)*.6*n,.2*n,Math.sin(R)*.6*n),v.rotation.z=Math.cos(R)*.3,v.rotation.x=Math.sin(R)*.3,t.add(v)}return t.add(h),t.add(p),t.add(x),t.add(f),t}getRandomDirection(){const e=Math.random()*Math.PI*2;return new Y(Math.cos(e),Math.sin(e))}updateRotation(){if(this.direction.length()>0){const e=Math.atan2(this.direction.y,this.direction.x);this.model.rotation.z=e}}static getRandomEdgePosition(e){let n=Math.floor(Math.random()*4);if(e!==void 0){const a=[0,1,2,3].filter(o=>o!==e);n=a[Math.floor(Math.random()*a.length)]}let i,s;switch(n){case 0:i=(Math.random()-.5)*(500*2),s=500;break;case 1:i=(Math.random()-.5)*(500*2),s=-500;break;case 2:i=-500,s=(Math.random()-.5)*(500*2);break;case 3:i=500,s=(Math.random()-.5)*(500*2);break;default:i=0,s=500}return new w(i,s,0)}update(e,t,n,i){this.directionChangeTimer+=e,this.directionChangeTimer>=this.directionChangeInterval&&(this.direction=this.getRandomDirection(),this.directionChangeTimer=0,this.directionChangeInterval=4+Math.random()*3,this.updateRotation());const s=this.speed*e;let a=this.position.x+this.direction.x*s,o=this.position.y+this.direction.y*s;const l=new w(a,o,0),c=this.getRadius();let h=!1;for(const d of n){const p=new w(d.position.x,d.position.y+2,d.position.z);if(Math.sqrt(Math.pow(l.x-p.x,2)+Math.pow(l.y-p.y,2))<c+.8){h=!0;break}}if(!h){for(const d of i)if(Math.sqrt(Math.pow(l.x-d.position.x,2)+Math.pow(l.y-d.position.y,2))<c+1.5){h=!0;break}}if(h){this.direction.x*=-1,this.direction.y*=-1,this.direction.x+=(Math.random()-.5)*.5,this.direction.y+=(Math.random()-.5)*.5;const d=Math.sqrt(this.direction.x*this.direction.x+this.direction.y*this.direction.y);this.direction.x/=d,this.direction.y/=d,this.updateRotation();return}const u=10;(a<=t.minX+u||a>=t.maxX-u)&&(this.direction.x*=-1,a=Math.max(t.minX+u,Math.min(t.maxX-u,a))),(o<=t.minY+u||o>=t.maxY-u)&&(this.direction.y*=-1,o=Math.max(t.minY+u,Math.min(t.maxY-u,o))),this.position.set(a,o,0),this.model.position.copy(this.position),this.updateRotation()}getRadius(){return 2}}class ny extends Js{targetUnitType;morphTimer;morphDuration;isComplete=!1;constructor(e,t,n=3){const i={supply:0,costMinerals:0,costVespene:0,hitPoints:100,armor:0,damage:0,attackCooldown:0,attributes:["Biological"]};super(i,e,"Egg"),this.targetUnitType=t,this.morphDuration=n,this.morphTimer=0}createModel(){const e=new bt,t=2,n=new ln(2*t,2.2*t,.5*t,16),i=new Ce({color:4881466}),s=new oe(n,i);s.position.y=.25*t,s.rotation.x=Math.PI/2;const a=new it(1.5*t,16,12);a.scale(1,1.3,1);const o=new Ce({color:10048989}),l=new oe(a,o);l.position.y=2*t;for(let c=0;c<5;c++){const h=new it(.3*t,8,6),u=new Ce({color:7812010}),d=new oe(h,u),p=c/5*Math.PI*2,g=1.2*t;d.position.set(Math.cos(p)*g,1.5*t+Math.random()*t,Math.sin(p)*g),e.add(d)}return e.add(s),e.add(l),e}update(e){this.morphTimer+=e;const i=1+Math.sin(this.morphTimer*3)*.1;this.model.scale.set(i,i,i),this.morphTimer>=this.morphDuration&&(this.isComplete=!0)}isMorphComplete(){return this.isComplete}getTargetUnitType(){return this.targetUnitType}getMorphProgress(){return Math.min(this.morphTimer/this.morphDuration,1)}getRadius(){return 4}dispose(){super.dispose()}}class iy{callbacks;winCondition;constructor(e,t){e!==null&&t!==null?this.winCondition={type:e,target:t,current:0}:this.winCondition=null}setCallbacks(e){this.callbacks=e}getWinCondition(){return this.winCondition===null?{type:"none",target:0,current:0}:this.winCondition}isWinConditionMet(){return this.winCondition===null?!1:this.winCondition.current>=this.winCondition.target}updateWinProgress(e){this.winCondition!==null&&(this.winCondition.current=e,this.isWinConditionMet()&&this.callbacks?.onWin&&this.callbacks.onWin())}}class sy{listener;backgroundMusic=null;eatSound=null;boneCrackSound=null;eggCrackSound=null;audioLoader;constructor(e){this.listener=new Ig,e.add(this.listener),this.audioLoader=new Yl}loadBackgroundMusic(e,t=.15,n=!0){this.backgroundMusic=new Ci(this.listener),this.audioLoader.load(e,i=>{this.backgroundMusic&&(this.backgroundMusic.setBuffer(i),this.backgroundMusic.setLoop(n),this.backgroundMusic.setVolume(t),this.listener.context.state==="suspended"?(console.warn("AudioContext is suspended. Audio will start on user interaction."),this.resumeAudioContextOnInteraction()):(this.backgroundMusic.play(),console.log(`Background music loaded and playing: ${e} at ${t*100}% volume`)))},i=>{const s=i.loaded/i.total*100;console.log(`Loading audio: ${s.toFixed(0)}%`)},i=>{console.error("Error loading background music:",i)})}loadEatSound(e,t=.5){this.eatSound=new Ci(this.listener),this.audioLoader.load(e,n=>{this.eatSound&&(this.eatSound.setBuffer(n),this.eatSound.setLoop(!1),this.eatSound.setVolume(t),console.log(`Eat sound effect loaded at ${t*100}% volume`))},void 0,n=>{console.error("Error loading eat sound effect:",n)})}playEatSound(){this.eatSound&&this.eatSound.buffer&&(this.listener.context.state==="suspended"?this.listener.context.resume().then(()=>{this.eatSound&&!this.eatSound.isPlaying&&this.eatSound.play()}):(this.eatSound.isPlaying&&this.eatSound.stop(),this.eatSound.play()))}loadBoneCrackSound(e,t=.5){this.boneCrackSound=new Ci(this.listener),this.audioLoader.load(e,n=>{this.boneCrackSound&&(this.boneCrackSound.setBuffer(n),this.boneCrackSound.setLoop(!1),this.boneCrackSound.setVolume(t),console.log(`Bone crack sound effect loaded at ${t*100}% volume`))},void 0,n=>{console.error("Error loading bone crack sound effect:",n)})}playBoneCrackSound(){this.boneCrackSound&&this.boneCrackSound.buffer&&(this.listener.context.state==="suspended"?this.listener.context.resume().then(()=>{this.boneCrackSound&&!this.boneCrackSound.isPlaying&&this.boneCrackSound.play()}):(this.boneCrackSound.isPlaying&&this.boneCrackSound.stop(),this.boneCrackSound.play()))}loadEggCrackSound(e,t=.5){this.eggCrackSound=new Ci(this.listener),this.audioLoader.load(e,n=>{this.eggCrackSound&&(this.eggCrackSound.setBuffer(n),this.eggCrackSound.setLoop(!1),this.eggCrackSound.setVolume(t),console.log(`Egg crack sound effect loaded at ${t*100}% volume`))},void 0,n=>{console.error("Error loading egg crack sound effect:",n)})}playEggCrackSound(){this.eggCrackSound&&this.eggCrackSound.buffer&&(this.listener.context.state==="suspended"?this.listener.context.resume().then(()=>{this.eggCrackSound&&!this.eggCrackSound.isPlaying&&this.eggCrackSound.play()}):(this.eggCrackSound.isPlaying&&this.eggCrackSound.stop(),this.eggCrackSound.play()))}stopBackgroundMusic(){this.backgroundMusic&&this.backgroundMusic.isPlaying&&this.backgroundMusic.stop()}pauseBackgroundMusic(){this.backgroundMusic&&this.backgroundMusic.isPlaying&&this.backgroundMusic.pause()}resumeBackgroundMusic(){this.backgroundMusic&&!this.backgroundMusic.isPlaying&&this.backgroundMusic.play()}setVolume(e){this.backgroundMusic&&this.backgroundMusic.setVolume(Math.max(0,Math.min(1,e)))}resumeAudioContextOnInteraction(){const e=()=>{this.listener.context.state==="suspended"&&this.listener.context.resume().then(()=>{console.log("AudioContext resumed. Starting background music."),this.backgroundMusic&&!this.backgroundMusic.isPlaying&&this.backgroundMusic.play()})};document.addEventListener("click",e,{once:!0}),document.addEventListener("keydown",e,{once:!0})}dispose(){this.backgroundMusic&&(this.backgroundMusic.isPlaying&&this.backgroundMusic.stop(),this.backgroundMusic.disconnect(),this.backgroundMusic=null),this.eatSound&&(this.eatSound.isPlaying&&this.eatSound.stop(),this.eatSound.disconnect(),this.eatSound=null),this.boneCrackSound&&(this.boneCrackSound.isPlaying&&this.boneCrackSound.stop(),this.boneCrackSound.disconnect(),this.boneCrackSound=null),this.eggCrackSound&&(this.eggCrackSound.isPlaying&&this.eggCrackSound.stop(),this.eggCrackSound.disconnect(),this.eggCrackSound=null),this.listener.parent&&this.listener.parent.remove(this.listener),console.log("AudioManager disposed")}}class ry{activeFights=[];callbacks;playerUpgrades=null;constructor(e){this.callbacks=e}setPlayerUpgrades(e){this.playerUpgrades=e}checkCombatInitiation(e,t,n){if(e.getIsInCombat())return!1;const i=e.getPosition(),s=e.getRadius(),a=e.getUnitTypeName();for(const o of t){if(o.getIsInCombat()||!o.isAlive())continue;const l=o.getPosition(),c=o.getRadius(),h=o.getUnitTypeName(),u=Math.sqrt(Math.pow(i.x-l.x,2)+Math.pow(i.y-l.y,2)),d=s+c;if(u<d&&n(a,h))return this.startCombat(e,o),!0}return!1}startCombat(e,t){e.setIsInCombat(!0),t.setIsInCombat(!0),this.activeFights.push({player:e,enemy:t,isActive:!0}),console.log(`Combat started: ${e.getUnitTypeName()} vs ${t.getUnitTypeName()}`)}update(e){for(let t=this.activeFights.length-1;t>=0;t--){const n=this.activeFights[t];if(!n.isActive)continue;n.player.updateAttackTimer(e),n.enemy.updateAttackTimer(e);const i=n.player.getPosition(),s=n.enemy.getPosition(),a=Math.sqrt(Math.pow(i.x-s.x,2)+Math.pow(i.y-s.y,2)),o=n.player.getRadius()+n.enemy.getRadius()+2;if(a>o){this.endCombat(n),this.activeFights.splice(t,1);continue}if(n.player.canAttack()){const l=this.calculateRawDamage(n.player,!0),c=this.calculateTotalArmor(n.enemy,!1);if(n.enemy.takeDamage(l,c),n.player.resetAttackTimer(),this.callbacks.onDamageDealt(n.player,n.enemy,l),!n.enemy.isAlive()){const h={minerals:n.enemy.getCostMinerals(),gas:n.enemy.getCostVespene(),essence:n.enemy.getUnitTypeName()==="Larvae"?0:1};this.callbacks.onEnemyDeath(n.enemy,h),this.endCombat(n),this.activeFights.splice(t,1);continue}}if(n.enemy.canAttack()){const l=this.calculateRawDamage(n.enemy,!1),c=this.calculateTotalArmor(n.player,!0);if(n.player.takeDamage(l,c),n.enemy.resetAttackTimer(),this.callbacks.onDamageDealt(n.enemy,n.player,l),!n.player.isAlive()){this.callbacks.onPlayerDeath(),this.endCombat(n),this.activeFights.splice(t,1);continue}}}}calculateRawDamage(e,t){const n=e.getDamage(),i=t?this.playerUpgrades?.getAttackBonus()??0:e.getAttackUpgrade();return n+i}calculateTotalArmor(e,t){const n=e.getArmor(),i=t?this.playerUpgrades?.getArmorBonus()??0:e.getArmorUpgrade();return n+i}endCombat(e){e.player.setIsInCombat(!1),e.enemy.setIsInCombat(!1),e.isActive=!1,console.log(`Combat ended: ${e.player.getUnitTypeName()} vs ${e.enemy.getUnitTypeName()}`)}getActiveFights(){return this.activeFights.filter(e=>e.isActive)}clearAll(){for(const e of this.activeFights)this.endCombat(e);this.activeFights=[]}}class ay{scene;camera;damageNumbers;constructor(e,t){this.scene=e,this.camera=t,this.damageNumbers=[]}createDamageNumber(e,t){const n=document.createElement("canvas"),i=n.getContext("2d");if(!i)return;n.width=128,n.height=64,i.fillStyle="#FF0000",i.font="Bold 48px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(`-${t}`,64,32);const s=new Us(n),a=new qs({map:s}),o=new sa(a);o.position.copy(e),o.position.y+=2,o.scale.set(4,2,1),this.scene.add(o),this.damageNumbers.push({sprite:o,lifetime:1,velocity:new w(0,10,0)})}update(e){for(let t=this.damageNumbers.length-1;t>=0;t--){const n=this.damageNumbers[t];n.sprite.position.add(n.velocity.clone().multiplyScalar(e)),n.lifetime-=e;const i=n.sprite.material;i.opacity=Math.max(0,n.lifetime),n.lifetime<=0&&(this.scene.remove(n.sprite),i.map?.dispose(),i.dispose(),this.damageNumbers.splice(t,1))}}createHitFlash(e){const t=e.getModel(),n=new Map;t.traverse(i=>{i instanceof oe&&i.material instanceof Ce&&(n.set(i,i.material.color.getHex()),i.material.color.setHex(16777215))}),setTimeout(()=>{n.forEach((i,s)=>{s.material instanceof Ce&&s.material.color.setHex(i)})},100)}dispose(){this.damageNumbers.forEach(e=>{this.scene.remove(e.sprite);const t=e.sprite.material;t.map?.dispose(),t.dispose()}),this.damageNumbers=[]}}class oy{scene;camera;hpBars;playerUnit=null;constructor(e,t,n){this.scene=e,this.camera=t,this.hpBars=new Map,this.playerUnit=n||null}setPlayerUnit(e){this.playerUnit=e}trackUnit(e){e.getUnitTypeName()!=="Larvae"&&this.createHPBar(e)}untrackUnit(e){this.removeHPBar(e)}getUpgradeColor(e){switch(e){case 0:return"#CCCCCC";case 1:return"#00BFFF";case 2:return"#DA70D6";case 3:return"#FF0000";default:return"#FFD700"}}createUpgradeIndicator(e){let t,n;this.playerUnit&&e===this.playerUnit.getCurrentUnit()?(t=this.playerUnit.getUpgrades().getAttackBonus(),n=this.playerUnit.getUpgrades().getArmorBonus()):(t=e.getAttackUpgrade(),n=e.getArmorUpgrade());const i=e.getSizeMultiplier()>1,s=document.createElement("canvas");s.width=i?512:384,s.height=192;const a=s.getContext("2d");a.clearRect(0,0,s.width,s.height),a.font="bold 96px Arial",a.fillStyle=this.getUpgradeColor(t),a.fillText(t.toString(),60,120),a.fillStyle="#FFFFFF",a.fillText("/",156,120),a.fillStyle=this.getUpgradeColor(n),a.fillText(n.toString(),225,120),i&&(a.fillStyle="#FFFFFF",a.fillText("/",294,120),a.fillStyle="#FFFFFF",a.fillText(e.getHitPoints().toString(),363,120));const o=new Us(s),l=new qs({map:o}),c=new sa(l),h=e.getSizeMultiplier()>1?1:.5;return c.scale.set((i?56:42)*h,21*h,1),c}updateUpgradeIndicator(e){const t=this.hpBars.get(e);if(!t||!t.upgradeText)return;let n,i;this.playerUnit&&e===this.playerUnit.getCurrentUnit()?(n=this.playerUnit.getUpgrades().getAttackBonus(),i=this.playerUnit.getUpgrades().getArmorBonus()):(n=e.getAttackUpgrade(),i=e.getArmorUpgrade());const s=e.getSizeMultiplier()>1,a=document.createElement("canvas");a.width=s?512:384,a.height=192;const o=a.getContext("2d");o.clearRect(0,0,a.width,a.height),o.font="bold 96px Arial",o.fillStyle=this.getUpgradeColor(n),o.fillText(n.toString(),60,120),o.fillStyle="#FFFFFF",o.fillText("/",156,120),o.fillStyle=this.getUpgradeColor(i),o.fillText(i.toString(),225,120),s&&(o.fillStyle="#FFFFFF",o.fillText("/",294,120),o.fillStyle="#FFFFFF",o.fillText(e.getHitPoints().toString(),363,120));const l=new Us(a),c=t.upgradeText.material;c.map&&c.map.dispose(),c.map=l,c.needsUpdate=!0;const h=e.getSizeMultiplier()>1?1:.5;t.upgradeText.scale.set((s?56:42)*h,21*h,1)}createHPBar(e){if(this.hpBars.has(e))return;const t=8,n=.8,i=e.getRadius()+2+(e.getSizeMultiplier()>1?15:0),s=new ft(t,n),a=new Ce({color:9109504}),o=new oe(s,a);o.position.set(0,i,1);const l=new ft(t,n),c=new Ce({color:65280}),h=new oe(l,c);h.position.set(0,i,1.1);const u=this.createUpgradeIndicator(e);u.position.set(0,i+2,1.2);const d=e.getModel();d.add(o),d.add(h),d.add(u),this.hpBars.set(e,{unit:e,background:o,foreground:h,upgradeText:u})}removeHPBar(e){const t=this.hpBars.get(e);if(!t)return;const n=e.getModel();n.remove(t.background),n.remove(t.foreground),t.background.geometry.dispose(),t.background.material.dispose(),t.foreground.geometry.dispose(),t.foreground.material.dispose(),t.upgradeText&&(n.remove(t.upgradeText),t.upgradeText.material.map?.dispose(),t.upgradeText.material.dispose()),this.hpBars.delete(e)}updateHPBars(){this.hpBars.forEach(e=>{const t=e.unit.getCurrentHP(),n=e.unit.getHitPoints(),i=t/n,s=8;e.foreground.scale.x=i;const a=s*(1-i)/2;e.foreground.position.x=-a;const o=e.foreground.material;i>.6?o.color.setHex(65280):i>.3?o.color.setHex(16776960):o.color.setHex(16711680)})}update(e){this.updateHPBars()}getTrackedUnitCount(){return this.hpBars.size}isTracking(e){return this.hpBars.has(e)}dispose(){this.hpBars.forEach(e=>{this.removeHPBar(e.unit)}),this.hpBars.clear()}}class ly{model;position;smokeParticles=[];particleUpdateTime=0;constructor(e){this.position=e.clone(),this.model=this.createModel(),this.model.position.copy(this.position)}createModel(){const e=new bt,t=new Xs(2,3,8),n=new Ce({color:4868682}),i=new oe(t,n);i.position.y=1.5,i.rotation.x=Math.PI/2;const s=new oa(1.2,8),a=new Ce({color:65416,transparent:!0,opacity:.6}),o=new oe(s,a);o.position.y=1.5,o.position.z=1.6;for(let l=0;l<3;l++){const c=this.createSmokeParticle(l);this.smokeParticles.push(c),e.add(c)}return e.add(i),e.add(o),e.userData.isVespeneGeyser=!0,e}createSmokeParticle(e){const t=.8+Math.random()*.4,n=new ft(t,t),i=new Ce({color:11184810,transparent:!0,opacity:.3+Math.random()*.2}),s=new oe(n,i);return s.position.y=2+e*1.5,s.position.x=(Math.random()-.5)*.5,s.position.z=3+e*.5,s.userData.offsetY=e*1.5,s.userData.offsetX=(Math.random()-.5)*.5,s.userData.phase=Math.random()*Math.PI*2,s}update(e){this.particleUpdateTime+=e;for(const t of this.smokeParticles){t.userData.phase+=e*2;const n=2+t.userData.offsetY+this.particleUpdateTime*2;t.position.y=n%6+2,t.position.x=t.userData.offsetX+Math.sin(t.userData.phase)*.3;const i=t.material,s=(t.position.y-2)/6;i.opacity=.5*(1-s)}}getModel(){return this.model}getPosition(){return this.position.clone()}getRadius(){return 2}dispose(){for(const e of this.smokeParticles)e.geometry.dispose(),e.material.dispose();this.smokeParticles=[],this.model.traverse(e=>{e instanceof oe&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()))})}}class cy{callbacks;extractionStates=new Map;EXTRACTION_INTERVAL=1;DAMAGE_PER_SECOND=5;GAS_PER_SECOND=10;EXTRACTION_RADIUS=2.5;constructor(e){this.callbacks=e}update(e,t,n){const i=t.getPosition();let s=!1,a=-1;for(let o=0;o<n.length;o++){const c=n[o].getPosition();if(Math.sqrt(Math.pow(i.x-c.x,2)+Math.pow(i.y-c.y,2))<this.EXTRACTION_RADIUS){s=!0,a=o;break}}if(s){let o=this.extractionStates.get(t);if(o||(o={geyserIndex:a,timer:0},this.extractionStates.set(t,o)),o.timer+=e,o.timer>=this.EXTRACTION_INTERVAL){if(o.timer-=this.EXTRACTION_INTERVAL,this.callbacks.onDamage(t,this.DAMAGE_PER_SECOND),!t.isAlive()){this.callbacks.onUnitDeath(t),this.extractionStates.delete(t);return}this.callbacks.onGasGained(t,this.GAS_PER_SECOND)}}else this.extractionStates.delete(t)}clearUnit(e){this.extractionStates.delete(e)}clearAll(){this.extractionStates.clear()}}class hy{container;callbacks;attackButton;armorButton;healButton;absorbButton;constructor(e){this.callbacks=e,this.container=this.createPanel()}createPanel(){const e=document.createElement("div");e.className="spending-section";const t=document.createElement("div");return t.className="control-label",t.textContent="Spending",e.appendChild(t),this.attackButton=this.createButton("⚔️","ATK",()=>this.callbacks.onUpgradeAttack()),e.appendChild(this.attackButton),this.armorButton=this.createButton("🛡️","ARM",()=>this.callbacks.onUpgradeArmor()),e.appendChild(this.armorButton),this.healButton=this.createButton("❤️","HEAL",()=>this.callbacks.onSpendHealth()),e.appendChild(this.healButton),this.absorbButton=this.createButton("⚡","ABSORB",()=>this.callbacks.onPurchaseAbsorb()),e.appendChild(this.absorbButton),e}createButton(e,t,n){const i=document.createElement("button");i.className="upgrade-button";const s=document.createElement("span");s.className="upgrade-icon",s.textContent=e;const a=document.createElement("span");a.className="upgrade-label",a.textContent=t;const o=document.createElement("span");return o.className="upgrade-cost",o.textContent="0M / 0G",i.appendChild(s),i.appendChild(a),i.appendChild(o),i.addEventListener("click",n),i}updateButtons(e,t,n,i,s,a,o){const l=i.getAttackUpgradeCost(),c=i.getAttackLevel();this.updateButton(this.attackButton,`+${c+1} ATK`,l.minerals,l.gas,e>=l.minerals&&t>=l.gas);const h=i.getArmorUpgradeCost(),u=i.getArmorLevel();this.updateButton(this.armorButton,`+${u+1} ARM`,h.minerals,h.gas,e>=h.minerals&&t>=h.gas);const d=a-s,p=d>0&&e>=1;this.updateButton(this.healButton,d>0?"HEAL":"FULL HP",1,0,p,`${s}/${a} HP`);const g=1,y=10,x=n>=g;this.updateButton(this.absorbButton,`+${y} ABSORB`,0,0,x,`${o} shield | ${g}🐚`)}updateButton(e,t,n,i,s,a){const o=e.querySelector(".upgrade-label"),l=e.querySelector(".upgrade-cost");o.textContent=t,a?l.textContent=a:l.textContent=`${n}M / ${i}G`,e.disabled=!s}getContainer(){return this.container}dispose(){this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}const uy="assets/Jungle-CtmEGoGc.mp3",dy="assets/eat%20fruit-Dq7ErjQY.mp3",py="assets/Bone%20crack-AdBuIRKS.mp3",fy="assets/Egg%20cracking-Cyf3AwDi.mp3";class my extends iy{renderer;scene;camera;clock;stats;ground;trees=[];bushes=[];vespeneGeysers=[];playerUnit;minimap;controlPanel;gameTitle;enemies=[];enemyInteraction;gameOverUI;victoryUI;morphingEgg=null;combatRules;combatManager;combatVisuals;unitVisuals;vespeneExtraction;spendingPanel;hasWon=!1;oldUnitRadius=0;audioManager;minibossKills=0;movement={left:!1,right:!1,up:!1,down:!1,speed:50};cameraBounds={minX:-480,maxX:480,minY:-480,maxY:480};animationFrameId=null;keydownHandler;keyupHandler;resizeHandler;constructor(e){super("miniboss_kills",1),this.combatRules=new Jl,this.setCallbacks(e),this.init()}initCombatSystem(){const e={onEnemyDeath:(t,n)=>{console.log(`Enemy ${t.getUnitTypeName()} defeated! Reward: ${n.minerals}M ${n.gas}G ${n.essence}E`);const i=this.playerUnit.getMinerals(),s=this.playerUnit.getGas(),a=this.playerUnit.getEssence();this.playerUnit.setMinerals(i+n.minerals),this.playerUnit.setGas(s+n.gas),this.playerUnit.setEssence(a+n.essence),n.essence>0&&console.log(`Gained ${n.essence} essence from consuming ${t.getUnitTypeName()}!`),this.unitVisuals.untrackUnit(t),this.scene.remove(t.getModel()),t.dispose();const o=this.enemies.indexOf(t);o>-1&&this.enemies.splice(o,1),t.getSizeMultiplier()>1&&(this.minibossKills++,console.log(`Miniboss defeated! Total: ${this.minibossKills}`),this.updateWinProgress(this.minibossKills)),this.audioManager.playBoneCrackSound()},onPlayerDeath:()=>{console.log("Player died in combat!"),this.handleGameOver()},onDamageDealt:(t,n,i)=>{this.combatVisuals.createDamageNumber(n.getPosition(),i),this.combatVisuals.createHitFlash(n)}};this.combatManager=new ry(e),this.combatVisuals=new ay(this.scene,this.camera),this.combatManager.setPlayerUpgrades(this.playerUnit.getUpgrades())}initVespeneExtractionSystem(){const e={onDamage:(t,n)=>{t.takeDamage(n),this.combatVisuals.createDamageNumber(t.getPosition(),n)},onGasGained:(t,n)=>{if(t===this.playerUnit.getCurrentUnit()){const i=this.playerUnit.getGas();this.playerUnit.setGas(i+n)}},onUnitDeath:t=>{t===this.playerUnit.getCurrentUnit()&&(console.log("Player died from vespene geyser damage!"),this.handleGameOver())}};this.vespeneExtraction=new cy(e)}init(){this.initScene(),this.initStats(),this.initListeners(),this.setupGameTitle(),this.setupControlPanel(),this.setupSpendingPanel(),this.setupEnemySystem(),this.initCombatSystem(),this.initVespeneExtractionSystem(),this.animate(),this.initAudio()}initStats(){this.stats=new Ii,this.stats.dom.style.position="fixed",this.stats.dom.style.bottom="0px",this.stats.dom.style.right="0px",this.stats.dom.style.top="auto",this.stats.dom.style.left="auto",document.body.appendChild(this.stats.dom)}initAudio(){this.audioManager=new sy(this.camera),this.audioManager.loadBackgroundMusic(uy,.15,!0),this.audioManager.loadEatSound(dy,.3),this.audioManager.loadBoneCrackSound(py,.25),this.audioManager.loadEggCrackSound(fy,.5)}initScene(){this.scene=new Ws,this.scene.background=new de(8900331),this.clock=new Zl,this.camera=new Wi(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,1,1e3),this.camera.position.z=10,this.camera.zoom=8,this.camera.updateProjectionMatrix(),this.renderer=new Ne,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement);const e=new Wl(16777215,.8);this.scene.add(e),this.unitVisuals=new oy(this.scene,this.camera),this.createJungleEnvironment(),this.createPlayerUnit(),this.unitVisuals.setPlayerUnit(this.playerUnit),this.minimap=new Jg(this.scene,this.playerUnit),this.minimap.updateObjects(this.trees,this.bushes,this.vespeneGeysers)}createJungleEnvironment(){const e=new ft(1e3,1e3),t=new Ce({color:2263842});this.ground=new oe(e,t),this.ground.position.z=-1,this.scene.add(this.ground);for(let n=0;n<200;n++){let i,s;do i=(Math.random()-.5)*940,s=(Math.random()-.5)*940;while(Math.sqrt(i*i+s*s)<10);this.createTree(i,s)}for(let n=0;n<520;n++){let i,s;do i=(Math.random()-.5)*940,s=(Math.random()-.5)*940;while(Math.sqrt(i*i+s*s)<10);this.createBush(i,s)}for(let n=0;n<50;n++){let i,s;do i=(Math.random()-.5)*940,s=(Math.random()-.5)*940;while(Math.sqrt(i*i+s*s)<10);this.createVespeneGeyser(i,s)}}createTree(e,t){const n=new bt,i=new ln(.5,.8,4,8),s=new Ce({color:9127187}),a=new oe(i,s);a.position.y=2,a.rotation.x=Math.PI/2;const o=new it(3,8,6),l=new Ce({color:25600}),c=new oe(o,l);c.position.y=4.5,n.add(a),n.add(c),n.position.x=e,n.position.y=t,this.trees.push(n),this.scene.add(n)}createBush(e,t){const n=new bt,i=new it(1+Math.random()*.5,6,4),s=Math.random();let a,o;s<.33?(a=.55+Math.random()*.1,o=1):s<.66?(a=.7+Math.random()*.15,o=2):(a=.85+Math.random()*.15,o=5);const l=new Ce({color:new de().setHSL(a,.7,.4+Math.random()*.3)}),c=new oe(i,l);c.position.y=.5,n.add(c),n.position.x=e,n.position.y=t,n.userData={minerals:o},this.bushes.push(n),this.scene.add(n)}createVespeneGeyser(e,t){const n=new ly(new w(e,t,0));this.vespeneGeysers.push(n),this.scene.add(n.getModel())}createPlayerUnit(){const e=new As(new w(0,0,0),!0);this.playerUnit=new ty(e,"Larvae"),this.scene.add(this.playerUnit.getModel()),this.unitVisuals.trackUnit(e)}initListeners(){this.resizeHandler=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeHandler,!1),this.keydownHandler=e=>{const{key:t}=e;switch(t.toLowerCase()){case"w":case"arrowup":this.movement.up=!0;break;case"s":case"arrowdown":this.movement.down=!0;break;case"a":case"arrowleft":this.movement.left=!0;break;case"d":case"arrowright":this.movement.right=!0;break;case"e":const n=window.open("","Canvas Image"),{domElement:i}=this.renderer;this.renderer.render(this.scene,this.camera);const s=i.toDataURL();if(!n)return;n.document.write(`<img src='${s}' width='${i.width}' height='${i.height}'>`);break}},window.addEventListener("keydown",this.keydownHandler),this.keyupHandler=e=>{const{key:t}=e;switch(t.toLowerCase()){case"w":case"arrowup":this.movement.up=!1;break;case"s":case"arrowdown":this.movement.down=!1;break;case"a":case"arrowleft":this.movement.left=!1;break;case"d":case"arrowright":this.movement.right=!1;break}},window.addEventListener("keyup",this.keyupHandler)}onWindowResize(){this.camera.left=window.innerWidth/-2,this.camera.right=window.innerWidth/2,this.camera.top=window.innerHeight/2,this.camera.bottom=window.innerHeight/-2,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}checkCollision(e){for(const n of this.trees){const i=new w(n.position.x,n.position.y+2,n.position.z);if(Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))<2+.8)return!0}for(const n of this.bushes)if(Math.sqrt(Math.pow(e.x-n.position.x,2)+Math.pow(e.y-n.position.y,2))<2+.5)return!0;return!1}checkResourceHarvesting(){const e=this.playerUnit.getPosition(),t=2,n=this.playerUnit.getUnitType();if(this.combatRules.canEat(n,"Bush")){const i=n==="Larvae"?t+2.15:t+1.5;for(const s of this.bushes){if(s.userData.minerals<=0)continue;if(Math.sqrt(Math.pow(e.x-s.position.x,2)+Math.pow(e.y-s.position.y,2))<i){const o=s.userData.minerals,l=this.playerUnit.getMinerals();this.playerUnit.setMinerals(l+o),this.audioManager.playEatSound(),s.userData.minerals=0;const c=s.children[0];c.material instanceof Ce&&c.material.color.setHex(8421504)}}}if(this.combatRules.canEat(n,"Tree"))for(const i of this.trees){if(i.userData.harvested)continue;if(Math.sqrt(Math.pow(e.x-i.position.x,2)+Math.pow(e.y-(i.position.y+2),2))<t+2.5){const a=this.combatRules.getReward(n,"Tree"),o=this.playerUnit.getMinerals();this.playerUnit.setMinerals(o+a),this.audioManager.playEatSound(),i.userData.harvested=!0,i.children.forEach(l=>{l instanceof oe&&l.material instanceof Ce&&l.material.color.setHex(8421504)})}}}updateCameraFollow(){const e=this.playerUnit.getPosition();this.camera.position.x=e.x,this.camera.position.y=e.y}updateMovement(e){const t=this.movement.speed*e,n=this.playerUnit.getPosition();let i=n.x,s=n.y,a=new Y(0,0);this.movement.up&&(s=Math.min(n.y+t,this.cameraBounds.maxY),a.y+=1),this.movement.down&&(s=Math.max(n.y-t,this.cameraBounds.minY),a.y-=1),this.movement.left&&(i=Math.max(n.x-t,this.cameraBounds.minX),a.x-=1),this.movement.right&&(i=Math.min(n.x+t,this.cameraBounds.maxX),a.x+=1);const o=new w(i,s,n.z);if(!this.checkCollision(o)&&(this.playerUnit.setPosition(o),this.updateCameraFollow(),a.length()>0)){const l=Math.atan2(a.y,a.x);this.playerUnit.setRotation(l)}}animate(){this.animationFrameId=requestAnimationFrame(()=>{this.animate()});const e=this.clock.getDelta();if(!this.enemyInteraction?.isGameOver()&&!this.hasWon){this.playerUnit.getIsMorphing()||(this.updateMovement(e),this.checkEnemyCollisions(),this.checkResourceHarvesting()),this.updateEnemies(e),this.combatManager.update(e),this.combatVisuals.update(e),this.unitVisuals.update(e),this.vespeneExtraction.update(e,this.playerUnit.getCurrentUnit(),this.vespeneGeysers);for(const o of this.vespeneGeysers)o.update(e);this.morphingEgg&&(this.morphingEgg.update(e),this.morphingEgg.isMorphComplete()&&this.completeMorphing(this.morphingEgg.getTargetUnitType())),this.minimap.updatePlayerUnitPosition(),this.minimap.updateEnemyPositions(this.enemies);const t=this.playerUnit.getResources();this.controlPanel.updateResources(t.minerals,t.gas,t.essence);const n=this.playerUnit.getUpgrades(),i=this.playerUnit.getCurrentHP(),s=this.playerUnit.getMaxHP(),a=this.playerUnit.getDamageAbsorb();this.spendingPanel.updateButtons(t.minerals,t.gas,t.essence,n,i,s,a)}this.minimap.render(),this.stats&&this.stats.update(),this.renderer.render(this.scene,this.camera)}setupGameTitle(){this.gameTitle=new Qg}setupControlPanel(){const e={onZoomChange:t=>this.handleZoomChange(t),onSpeedChange:t=>this.handleSpeedChange(t),onMorphUnit:t=>this.handleMorph(t)};this.controlPanel=new $g(e)}handleZoomChange(e){const t=this.camera.zoom,n=e>0?t*1.1:t/1.1;this.camera.zoom=Math.max(2,Math.min(20,n)),this.camera.updateProjectionMatrix()}handleSpeedChange(e){this.movement.speed=e}setupSpendingPanel(){const e={onUpgradeAttack:()=>this.handleUpgradeAttack(),onUpgradeArmor:()=>this.handleUpgradeArmor(),onSpendHealth:()=>this.handleHealthSpending(),onPurchaseAbsorb:()=>this.handlePurchaseAbsorb()};this.spendingPanel=new hy(e);const t=document.querySelector(".control-panel");t&&t.appendChild(this.spendingPanel.getContainer())}handleUpgradeAttack(){const e=this.playerUnit.getUpgrades(),t=e.getAttackUpgradeCost();this.playerUnit.getMinerals()>=t.minerals&&this.playerUnit.getGas()>=t.gas&&(this.playerUnit.setMinerals(this.playerUnit.getMinerals()-t.minerals),this.playerUnit.setGas(this.playerUnit.getGas()-t.gas),e.upgradeAttack(),this.unitVisuals.updateUpgradeIndicator(this.playerUnit.getCurrentUnit()),console.log(`Attack upgraded to level ${e.getAttackLevel()}`))}handleUpgradeArmor(){const e=this.playerUnit.getUpgrades(),t=e.getArmorUpgradeCost();this.playerUnit.getMinerals()>=t.minerals&&this.playerUnit.getGas()>=t.gas&&(this.playerUnit.setMinerals(this.playerUnit.getMinerals()-t.minerals),this.playerUnit.setGas(this.playerUnit.getGas()-t.gas),e.upgradeArmor(),this.unitVisuals.updateUpgradeIndicator(this.playerUnit.getCurrentUnit()),console.log(`Armor upgraded to level ${e.getArmorLevel()}`))}handleHealthSpending(){const e=this.playerUnit.getCurrentUnit(),t=e.getCurrentHP(),i=e.getHitPoints()-t;if(i<=0)return;const s=this.playerUnit.getMinerals();if(s>=1){const a=Math.min(i,s);this.playerUnit.setMinerals(s-a),e.takeDamage(-a),console.log(`Healed ${a} HP`)}}handlePurchaseAbsorb(){this.playerUnit.getEssence()>=1&&this.playerUnit.purchaseDamageAbsorb(1,10)&&console.log(`Purchased 10 damage absorb for 1 essence. Current absorb: ${this.playerUnit.getDamageAbsorb()}`)}setupEnemySystem(){const e={onGameOver:()=>this.handleGameOver()};this.enemyInteraction=new Kg(e),this.spawnEnemies(),this.createGameOverUI(),this.winCondition!==null&&this.createVictoryUI()}isTooCloseToOtherEnemies(e,t){for(const n of this.enemies){const i=n.getPosition();if(Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))<t)return!0}return!1}spawnEnemies(){for(let a=0;a<4;a++){let o;do o=Si.getRandomEdgePosition();while(this.isTooCloseToOtherEnemies(o,20));const l=new Si(o,!1);l.setAttackUpgrade(Math.floor(Math.random()*4)),l.setArmorUpgrade(Math.floor(Math.random()*4)),this.enemies.push(l),this.scene.add(l.getModel()),this.unitVisuals.trackUnit(l)}for(let a=0;a<3;a++){let o;do o=Ei.getRandomEdgePosition();while(this.isTooCloseToOtherEnemies(o,20));const l=new Ei(o,!1);l.setAttackUpgrade(Math.floor(Math.random()*4)),l.setArmorUpgrade(Math.floor(Math.random()*4)),this.enemies.push(l),this.scene.add(l.getModel()),this.unitVisuals.trackUnit(l)}for(let a=0;a<18;a++){let o,l,c;do o=(Math.random()-.5)*900,l=(Math.random()-.5)*900,c=new w(o,l,0);while(Math.sqrt(o*o+l*l)<30||this.isTooCloseToOtherEnemies(c,20));const h=new As(c,!1);this.enemies.push(h),this.scene.add(h.getModel()),this.unitVisuals.trackUnit(h)}let t;do t=Si.getRandomEdgePosition();while(this.isTooCloseToOtherEnemies(t,40));const n=new Si(t,!1,{hitPoints:600,damage:26,armor:24},16766720,3);n.setAttackUpgrade(21),n.setArmorUpgrade(24),this.enemies.push(n),this.scene.add(n.getModel()),this.unitVisuals.trackUnit(n);let i;do i=Ei.getRandomEdgePosition();while(this.isTooCloseToOtherEnemies(i,40));const s=new Ei(i,!1,{hitPoints:150,damage:10,armor:6},14329120,2.5);s.setAttackUpgrade(5),s.setArmorUpgrade(6),this.enemies.push(s),this.scene.add(s.getModel()),this.unitVisuals.trackUnit(s)}updateEnemies(e){const t={minX:-500,maxX:500,minY:-500,maxY:500},n=this.playerUnit.getPosition();for(const i of this.enemies)"update"in i&&typeof i.update=="function"&&i.update(e,t,this.trees,this.bushes,n)}checkEnemyCollisions(){const e=this.playerUnit.getRadius(),t=this.playerUnit.getUnitType(),n=this.playerUnit.getCurrentUnit();if(this.combatManager.checkCombatInitiation(n,this.enemies,(s,a)=>this.combatRules.shouldFight(s,a)),n.getIsInCombat())return;const i=this.enemyInteraction.checkEatingEnemies(this.playerUnit.getPosition(),e,t,this.enemies,(s,a)=>{const o=this.playerUnit.getMinerals();this.playerUnit.setMinerals(o+a),this.audioManager.playBoneCrackSound()});if(i){this.unitVisuals.untrackUnit(i),this.scene.remove(i.getModel()),i.dispose();const s=this.enemies.indexOf(i);s>-1&&this.enemies.splice(s,1);return}this.enemyInteraction.checkCollisions(this.playerUnit.getPosition(),e,t,this.enemies)}createGameOverUI(){this.gameOverUI=document.createElement("div"),this.gameOverUI.className="game-over-overlay",this.gameOverUI.style.display="none";const e=document.createElement("div");e.className="game-over-content";const t=document.createElement("h1");t.textContent="GAME OVER",t.className="game-over-title";const n=document.createElement("p");n.textContent="You have been EATEN!",n.className="game-over-message";const i=document.createElement("button");i.textContent="Restart Game",i.className="restart-button",i.addEventListener("click",()=>{window.location.reload()}),e.appendChild(t),e.appendChild(n),e.appendChild(i),this.gameOverUI.appendChild(e),document.body.appendChild(this.gameOverUI)}createVictoryUI(){this.victoryUI=document.createElement("div"),this.victoryUI.className="game-over-overlay",this.victoryUI.style.display="none";const e=document.createElement("div");e.className="game-over-content";const t=document.createElement("h1");t.textContent="VICTORY!",t.className="game-over-title",t.style.color="#00ff00";const n=document.createElement("p");n.textContent="Level 01 Complete! You defeated a miniboss!",n.className="game-over-message";const i=document.createElement("button");i.textContent="Continue to Next Level",i.className="restart-button",i.addEventListener("click",()=>{this.callbacks?.onWin&&this.callbacks.onWin()}),e.appendChild(t),e.appendChild(n),e.appendChild(i),this.victoryUI.appendChild(e),document.body.appendChild(this.victoryUI)}handleGameOver(){console.log("Game Over!"),this.gameOverUI.style.display="flex",document.body.style.backgroundColor="rgba(255, 0, 0, 0.3)",setTimeout(()=>{document.body.style.backgroundColor=""},200)}restartGame(){yy()}getUnitCost(e){return{Larvae:{minerals:0,gas:0},Drone:{minerals:50,gas:0},Zergling:{minerals:25,gas:0}}[e]||{minerals:0,gas:0}}handleMorph(e){if(this.enemyInteraction.isGameOver()||this.playerUnit.getIsMorphing())return;const t=this.getUnitCost(e),n=this.playerUnit.getMinerals(),i=this.playerUnit.getGas();if(n<t.minerals||i<t.gas){console.log("Not enough resources to morph");return}this.playerUnit.setMinerals(n-t.minerals),this.playerUnit.setGas(i-t.gas),this.startMorphing(e)}startMorphing(e){this.playerUnit.setMorphing(!0),this.oldUnitRadius=this.playerUnit.getRadius();const t=this.playerUnit.getPosition();this.unitVisuals.untrackUnit(this.playerUnit.getCurrentUnit()),this.scene.remove(this.playerUnit.getModel()),this.morphingEgg=new ny(t,e,3),this.scene.add(this.morphingEgg.getModel()),this.audioManager.playEggCrackSound()}completeMorphing(e){if(!this.morphingEgg)return;const t=this.morphingEgg.getPosition();this.scene.remove(this.morphingEgg.getModel()),this.morphingEgg.dispose();let n;switch(e){case"Larvae":n=new As(t,!0);break;case"Drone":n=new Si(t,!0);break;case"Zergling":n=new Ei(t,!0);break;default:console.warn(`Unit type ${e} not yet implemented, defaulting to Larvae`),n=new As(t,!0)}this.playerUnit.morphInto(n,e),this.scene.add(this.playerUnit.getModel()),this.unitVisuals.trackUnit(n),this.minimap.updatePlayerUnitRef(this.playerUnit);const s=this.playerUnit.getRadius()-this.oldUnitRadius;if(s>0){const a=Math.ceil(s*3);for(let o=0;o<a;o++)this.handleZoomChange(-.1)}this.morphingEgg=null}updateWinProgress(e){if(this.winCondition===null)return;const t=!this.isWinConditionMet();super.updateWinProgress(e),t&&this.isWinConditionMet()&&!this.hasWon&&(this.hasWon=!0,this.handleVictory())}handleVictory(){console.log("Victory! Level 01 Complete!"),this.victoryUI.style.display="flex",document.body.style.backgroundColor="rgba(0, 255, 0, 0.3)",setTimeout(()=>{document.body.style.backgroundColor=""},200)}cleanup(){console.log("Cleaning up Level 01..."),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeHandler&&window.removeEventListener("resize",this.resizeHandler),this.keydownHandler&&window.removeEventListener("keydown",this.keydownHandler),this.keyupHandler&&window.removeEventListener("keyup",this.keyupHandler),this.playerUnit&&this.playerUnit.getCurrentUnit().dispose(),this.morphingEgg&&this.morphingEgg.dispose();for(const e of this.enemies)this.unitVisuals.untrackUnit(e),this.scene.remove(e.getModel()),e.dispose();this.enemies=[];for(const e of this.trees)e.children.forEach(t=>{t instanceof oe&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())}),this.scene.remove(e);this.trees=[];for(const e of this.bushes)e.children.forEach(t=>{t instanceof oe&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())}),this.scene.remove(e);this.bushes=[];for(const e of this.vespeneGeysers)this.scene.remove(e.getModel()),e.dispose();this.vespeneGeysers=[],this.ground&&(this.ground.geometry.dispose(),Array.isArray(this.ground.material)?this.ground.material.forEach(e=>e.dispose()):this.ground.material.dispose(),this.scene.remove(this.ground)),this.minimap&&this.minimap.dispose(),this.gameTitle&&this.gameTitle.dispose(),this.controlPanel&&this.controlPanel.dispose(),this.spendingPanel&&this.spendingPanel.dispose(),this.stats&&this.stats.dom&&document.body.removeChild(this.stats.dom),this.audioManager&&this.audioManager.dispose(),this.combatManager&&this.combatManager.clearAll(),this.combatVisuals&&this.combatVisuals.dispose(),this.unitVisuals&&this.unitVisuals.dispose(),this.vespeneExtraction&&this.vespeneExtraction.clearAll(),this.gameOverUI&&this.gameOverUI.parentElement&&document.body.removeChild(this.gameOverUI),this.victoryUI&&this.victoryUI.parentElement&&document.body.removeChild(this.victoryUI),this.renderer&&this.renderer.domElement&&this.renderer.domElement.parentElement&&(document.body.removeChild(this.renderer.domElement),this.renderer.dispose()),this.scene&&this.scene.clear(),console.log("Level 01 cleanup complete")}}class gy{currentLevel=null;currentLevelNumber=1;constructor(){this.loadLevel(this.currentLevelNumber)}restartLevel(){console.log(`Restarting Level ${this.currentLevelNumber}...`),this.currentLevel&&(this.currentLevel.cleanup(),this.currentLevel=null),this.loadLevel(this.currentLevelNumber)}loadLevel(e){console.log(`Loading Level ${e}...`);const t={onWin:()=>this.handleLevelWin(),onLose:()=>this.handleLevelLose()};switch(e){case 1:this.currentLevel=new my(t);break;default:console.error(`Level ${e} not implemented yet!`),this.showLevelNotImplemented(e);return}this.currentLevelNumber=e,console.log(`Level ${e} loaded successfully`)}handleLevelWin(){console.log(`Level ${this.currentLevelNumber} completed!`);const e=this.currentLevelNumber+1;setTimeout(()=>{this.currentLevel&&(this.currentLevel.cleanup(),this.currentLevel=null),this.loadLevel(e)},2e3)}handleLevelLose(){console.log(`Level ${this.currentLevelNumber} failed!`)}showLevelNotImplemented(e){const t=document.createElement("div");t.className="game-over-overlay",t.style.display="flex";const n=document.createElement("div");n.className="game-over-content";const i=document.createElement("h1");i.textContent="CONGRATULATIONS!",i.className="game-over-title",i.style.color="#00ff00";const s=document.createElement("p");s.textContent=`You've completed all available levels!
Level ${e} is coming soon...`,s.className="game-over-message",s.style.whiteSpace="pre-line";const a=document.createElement("button");a.textContent="Play Again from Level 1",a.className="restart-button",a.addEventListener("click",()=>{document.body.removeChild(t),this.loadLevel(1)}),n.appendChild(i),n.appendChild(s),n.appendChild(a),t.appendChild(n),document.body.appendChild(t)}}let Zr=null;window.addEventListener("DOMContentLoaded",()=>{Zr=new gy});function yy(){Zr?Zr.restartLevel():console.error("GameManager not initialized yet!")}
