/*! OpenZine viewer. Page-turn renderer, paper shader and grain texture extracted from Paper's https://paper.design/mono page; copyright Paper, all rights reserved by their owner. Three.js r162, Copyright © 2010-2024 three.js authors, MIT License. Paper Mono typeface, Copyright 2025 The Paper-Mono.Git Project Authors, SIL Open Font License 1.1. Viewer shell: MIT. */
(()=>{var Yn,Xe={},jt="srgb",wn="srgb-linear",ms="display-p3",Xr="display-p3-linear",Pr="linear",rt="srgb",Cr="rec709",Is="300 es",Tn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Os=1234567,Ui=Math.PI/180,Oi=180/Math.PI;function fi(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Mt[255&n]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[255&e]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[63&t|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[255&i]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function Wa(n,e){return(n%e+e)%e}function Di(n,e,t){return(1-t)*n+t*e}function Xa(n){return(n&n-1)==0&&n!==0}function Lr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw Error("Invalid component type.")}}var qe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());return t===0?Math.PI/2:Math.acos(At(this.dot(e)/t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Oe=class n{constructor(e,t,i,r,a,s,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],v=i[8],m=r[0],g=r[3],f=r[6],x=r[1],b=r[4],A=r[7],y=r[2],C=r[5],U=r[8];return a[0]=s*m+o*x+l*y,a[3]=s*g+o*b+l*C,a[6]=s*f+o*A+l*U,a[1]=c*m+h*x+d*y,a[4]=c*g+h*b+d*C,a[7]=c*f+h*A+d*U,a[2]=u*m+p*x+v*y,a[5]=u*g+p*b+v*C,a[8]=u*f+p*A+v*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+r*a*c-r*s*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*s-o*c,u=o*l-h*a,p=c*a-s*l,v=t*d+i*u+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/v;return e[0]=d*m,e[1]=(r*c-h*i)*m,e[2]=(o*i-r*s)*m,e[3]=u*m,e[4]=(h*t-r*l)*m,e[5]=(r*a-o*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(s*t-i*a)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(va.makeScale(e,t)),this}rotate(e){return this.premultiply(va.makeRotation(-e)),this}translate(e,t){return this.premultiply(va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},va=new Oe;function Co(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}var Fs={},Bs=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zs=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ar={[wn]:{transfer:Pr,primaries:Cr,toReference:n=>n,fromReference:n=>n},[jt]:{transfer:rt,primaries:Cr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Xr]:{transfer:Pr,primaries:"p3",toReference:n=>n.applyMatrix3(zs),fromReference:n=>n.applyMatrix3(Bs)},[ms]:{transfer:rt,primaries:"p3",toReference:n=>n.convertSRGBToLinear().applyMatrix3(zs),fromReference:n=>n.applyMatrix3(Bs).convertLinearToSRGB()}},_l=new Set([wn,Xr]),tt={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!_l.has(n))throw Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ar[e].toReference;return(0,ar[t].fromReference)(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ar[n].primaries},getTransfer:function(n){return n===""?Pr:ar[n].transfer}};function ci(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function xa(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var Ur=class{static getDataURL(e){let t;if(/^data:/i.test(e.src)||"u"<typeof HTMLCanvasElement)return e.src;if(e instanceof HTMLCanvasElement)t=e;else{Yn===void 0&&(Yn=Fi("canvas")),Yn.width=e.width,Yn.height=e.height;let i=Yn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if("u">typeof HTMLImageElement&&e instanceof HTMLImageElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof ImageBitmap&&e instanceof ImageBitmap){let t=Fi("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=255*ci(a[s]/255);return i.putImageData(r,0,0),t}if(!e.data)return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e;{let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*ci(t[i]/255)):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}}},vl=0,Dr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vl++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Ma(r[s].image)):a.push(Ma(r[s]))}else a=Ma(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Ma(n){return"u">typeof HTMLImageElement&&n instanceof HTMLImageElement||"u">typeof HTMLCanvasElement&&n instanceof HTMLCanvasElement||"u">typeof ImageBitmap&&n instanceof ImageBitmap?Ur.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xl=0,Rt=class n extends Tn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,a=1006,s=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=fi(),this.name="",this.source=new Dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};Rt.DEFAULT_IMAGE=null,Rt.DEFAULT_MAPPING=300,Rt.DEFAULT_ANISOTROPY=1;var dt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a,s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],d=s[5],u=s[9],p=s[2],v=s[6],m=s[10];if(.01>Math.abs(l-h)&&.01>Math.abs(c-p)&&.01>Math.abs(u-v)){if(.1>Math.abs(l+h)&&.1>Math.abs(c+p)&&.1>Math.abs(u+v)&&.1>Math.abs(o+d+m-3))return this.set(1,0,0,0),this;t=Math.PI;let f=(o+1)/2,x=(d+1)/2,b=(m+1)/2,A=(l+h)/4,y=(c+p)/4,C=(u+v)/4;return f>x&&f>b?f<.01?(i=0,r=.707106781,a=.707106781):(r=A/(i=Math.sqrt(f)),a=y/i):x>b?x<.01?(i=.707106781,r=0,a=.707106781):(i=A/(r=Math.sqrt(x)),a=C/r):b<.01?(i=.707106781,r=.707106781,a=0):(i=y/(a=Math.sqrt(b)),r=C/a),this.set(i,r,a,t),this}let g=Math.sqrt((v-u)*(v-u)+(c-p)*(c-p)+(h-l)*(h-l));return .001>Math.abs(g)&&(g=1),this.x=(v-u)/g,this.y=(c-p)/g,this.z=(h-l)/g,this.w=Math.acos((o+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ja=class extends Tn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let r=new Rt({width:e,height:t,depth:1},(i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i)).mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let s=0;s<a;s++)this.textures[s]=r.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Dr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends ja{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Nr=class extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3],u=a[s+0],p=a[s+1],v=a[s+2],m=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=v,e[t+3]=m;return}if(d!==m||l!==u||c!==p||h!==v){let g=1-o,f=l*u+c*p+h*v+d*m,x=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let y=Math.sqrt(b),C=Math.atan2(y,f*x);g=Math.sin(g*C)/y,o=Math.sin(o*C)/y}let A=o*x;if(l=l*g+u*A,c=c*g+p*A,h=h*g+v*A,d=d*g+m*A,g===1-o){let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,s){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=a[s],u=a[s+1],p=a[s+2],v=a[s+3];return e[t]=o*v+h*d+l*p-c*u,e[t+1]=l*v+h*u+c*d-o*p,e[t+2]=c*v+h*p+o*u-l*d,e[t+3]=h*v-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(a/2),u=l(i/2),p=l(r/2),v=l(a/2);switch(s){case"XYZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"YXZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"ZXY":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"ZYX":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"YZX":this._x=u*h*d+c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d-u*p*v;break;case"XZY":this._x=u*h*d-c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d+u*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(s-r)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(s-r)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0):(this._x=0,this._y=-e.z,this._z=e.y)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x),this._w=i,this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+r*c-a*l,this._y=r*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-r*o,this._w=s*h-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,s=this._w,o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=s*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gs.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),h=2*(o*t-a*r),d=2*(a*i-s*t);return this.x=t+l*c+s*d-o*h,this.y=i+l*h+o*c-a*d,this.z=r+l*d+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sa.copy(this).projectOnVector(e),this.sub(Sa)}reflect(e){return this.sub(Sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());return t===0?Math.PI/2:Math.acos(At(this.dot(e)/t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sa=new H,Gs=new bn,Hn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Vt):Vt.fromBufferAttribute(a,s),Vt.applyMatrix4(e.matrixWorld),this.expandByPoint(Vt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sr.copy(i.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}let r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x)&&!(e.x>this.max.x)&&!(e.y<this.min.y)&&!(e.y>this.max.y)&&!(e.z<this.min.z)&&!(e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x)&&!(e.min.x>this.max.x)&&!(e.max.y<this.min.y)&&!(e.min.y>this.max.y)&&!(e.max.z<this.min.z)&&!(e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),or.subVectors(this.max,Ri),qn.subVectors(e.a,Ri),Kn.subVectors(e.b,Ri),Jn.subVectors(e.c,Ri),vn.subVectors(Kn,qn),xn.subVectors(Jn,Kn),Ln.subVectors(qn,Jn);let t=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-Ln.z,Ln.y,vn.z,0,-vn.x,xn.z,0,-xn.x,Ln.z,0,-Ln.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-Ln.y,Ln.x,0];return!!ya(t,qn,Kn,Jn,or)&&!!ya(t=[1,0,0,0,1,0,0,0,1],qn,Kn,Jn,or)&&(lr.crossVectors(vn,xn),ya(t=[lr.x,lr.y,lr.z],qn,Kn,Jn,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Vt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},on=[new H,new H,new H,new H,new H,new H,new H,new H],Vt=new H,sr=new Hn,qn=new H,Kn=new H,Jn=new H,vn=new H,xn=new H,Ln=new H,Ri=new H,or=new H,lr=new H,Un=new H;function ya(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){Un.fromArray(n,a);let o=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),l=e.dot(Un),c=t.dot(Un),h=i.dot(Un);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ml=new Hn,Pi=new H,Ea=new H,ui=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ml.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?e.makeEmpty():(e.set(this.center,this.center),e.expandByScalar(this.radius)),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);let t=Pi.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Pi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()||(this.isEmpty()?this.copy(e):this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(Ea)),this.expandByPoint(Pi.copy(e.center).sub(Ea)))),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ln=new H,Ta=new H,cr=new H,Mn=new H,ba=new H,hr=new H,wa=new H,Bi=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){let a,s,o,l;Ta.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(Ta);let c=.5*e.distanceTo(t),h=-this.direction.dot(cr),d=Mn.dot(this.direction),u=-Mn.dot(cr),p=Mn.lengthSq(),v=Math.abs(1-h*h);if(v>0)if(a=h*u-d,s=h*d-u,l=c*v,a>=0)if(s>=-l)if(s<=l){let m=1/v;a*=m,s*=m,o=a*(a+h*s+2*d)+s*(h*a+s+2*u)+p}else o=-(a=Math.max(0,-(h*(s=c)+d)))*a+s*(s+2*u)+p;else o=-(a=Math.max(0,-(h*(s=-c)+d)))*a+s*(s+2*u)+p;else s<=-l?(s=(a=Math.max(0,-(-h*c+d)))>0?-c:Math.min(Math.max(-c,-u),c),o=-a*a+s*(s+2*u)+p):s<=l?(a=0,o=(s=Math.min(Math.max(-c,-u),c))*(s+2*u)+p):(s=(a=Math.max(0,-(h*c+d)))>0?c:Math.min(Math.max(-c,-u),c),o=-a*a+s*(s+2*u)+p);else s=h>0?-c:c,o=-(a=Math.max(0,-(h*s+d)))*a+s*(s+2*u)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,a),r&&r.copy(Ta).addScaledVector(cr,s),o}intersectSphere(e,t){ln.subVectors(e.center,this.origin);let i=ln.dot(this.direction),r=ln.dot(ln)-i*i,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>r||((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0))?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,i,r,a){let s;ba.subVectors(t,e),hr.subVectors(i,e),wa.crossVectors(ba,hr);let o=this.direction.dot(wa);if(o>0){if(r)return null;s=1}else{if(!(o<0))return null;s=-1,o=-o}Mn.subVectors(this.origin,e);let l=s*this.direction.dot(hr.crossVectors(Mn,hr));if(l<0)return null;let c=s*this.direction.dot(ba.cross(Mn));if(c<0||l+c>o)return null;let h=-s*Mn.dot(wa);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class n{constructor(e,t,i,r,a,s,o,l,c,h,d,u,p,v,m,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,h,d,u,p,v,m,g)}set(e,t,i,r,a,s,o,l,c,h,d,u,p,v,m,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=v,f[11]=m,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Zn.setFromMatrixColumn(e,0).length(),a=1/Zn.setFromMatrixColumn(e,1).length(),s=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){let u=s*h,p=s*d,v=o*h,m=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=u-m*c,t[9]=-o*l,t[2]=m-u*c,t[6]=v+p*c,t[10]=s*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,v=c*h,m=c*d;t[0]=u+m*o,t[4]=v*o-p,t[8]=s*c,t[1]=s*d,t[5]=s*h,t[9]=-o,t[2]=p*o-v,t[6]=m+u*o,t[10]=s*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,v=c*h,m=c*d;t[0]=u-m*o,t[4]=-s*d,t[8]=v+p*o,t[1]=p+v*o,t[5]=s*h,t[9]=m-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){let u=s*h,p=s*d,v=o*h,m=o*d;t[0]=l*h,t[4]=v*c-p,t[8]=u*c+m,t[1]=l*d,t[5]=m*c+u,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){let u=s*l,p=s*c,v=o*l,m=o*c;t[0]=l*h,t[4]=m-u*d,t[8]=v*d+p,t[1]=d,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+v,t[10]=u-m*d}else if(e.order==="XZY"){let u=s*l,p=s*c,v=o*l,m=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+m,t[5]=s*h,t[9]=p*d-v,t[2]=v*d-p,t[6]=o*h,t[10]=m*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sl,e,yl)}lookAt(e,t,i){let r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Sn.crossVectors(i,Nt),Sn.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Sn.crossVectors(i,Nt)),Sn.normalize(),ur.crossVectors(Nt,Sn),r[0]=Sn.x,r[4]=ur.x,r[8]=Nt.x,r[1]=Sn.y,r[5]=ur.y,r[9]=Nt.y,r[2]=Sn.z,r[6]=ur.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],v=i[2],m=i[6],g=i[10],f=i[14],x=i[3],b=i[7],A=i[11],y=i[15],C=r[0],U=r[4],L=r[8],J=r[12],G=r[1],q=r[5],ae=r[9],D=r[13],Q=r[2],B=r[6],$=r[10],Y=r[14],K=r[3],ne=r[7],he=r[11],j=r[15];return a[0]=s*C+o*G+l*Q+c*K,a[4]=s*U+o*q+l*B+c*ne,a[8]=s*L+o*ae+l*$+c*he,a[12]=s*J+o*D+l*Y+c*j,a[1]=h*C+d*G+u*Q+p*K,a[5]=h*U+d*q+u*B+p*ne,a[9]=h*L+d*ae+u*$+p*he,a[13]=h*J+d*D+u*Y+p*j,a[2]=v*C+m*G+g*Q+f*K,a[6]=v*U+m*q+g*B+f*ne,a[10]=v*L+m*ae+g*$+f*he,a[14]=v*J+m*D+g*Y+f*j,a[3]=x*C+b*G+A*Q+y*K,a[7]=x*U+b*q+A*B+y*ne,a[11]=x*L+b*ae+A*$+y*he,a[15]=x*J+b*D+A*Y+y*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(a*l*d-r*c*d-a*o*u+i*c*u+r*o*p-i*l*p)+e[7]*(t*l*p-t*c*u+a*s*u-r*s*p+r*c*h-a*l*h)+e[11]*(t*c*d-t*o*p-a*s*d+i*s*p+a*o*h-i*c*h)+e[15]*(-r*o*h-t*l*d+t*o*u+r*s*d-i*s*u+i*l*h)}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],v=e[12],m=e[13],g=e[14],f=e[15],x=d*g*c-m*u*c+m*l*p-o*g*p-d*l*f+o*u*f,b=v*u*c-h*g*c-v*l*p+s*g*p+h*l*f-s*u*f,A=h*m*c-v*d*c+v*o*p-s*m*p-h*o*f+s*d*f,y=v*d*l-h*m*l-v*o*u+s*m*u+h*o*g-s*d*g,C=t*x+i*b+r*A+a*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return e[0]=x*U,e[1]=(m*u*a-d*g*a-m*r*p+i*g*p+d*r*f-i*u*f)*U,e[2]=(o*g*a-m*l*a+m*r*c-i*g*c-o*r*f+i*l*f)*U,e[3]=(d*l*a-o*u*a-d*r*c+i*u*c+o*r*p-i*l*p)*U,e[4]=b*U,e[5]=(h*g*a-v*u*a+v*r*p-t*g*p-h*r*f+t*u*f)*U,e[6]=(v*l*a-s*g*a-v*r*c+t*g*c+s*r*f-t*l*f)*U,e[7]=(s*u*a-h*l*a+h*r*c-t*u*c-s*r*p+t*l*p)*U,e[8]=A*U,e[9]=(v*d*a-h*m*a-v*i*p+t*m*p+h*i*f-t*d*f)*U,e[10]=(s*m*a-v*o*a+v*i*c-t*m*c-s*i*f+t*o*f)*U,e[11]=(h*o*a-s*d*a-h*i*c+t*d*c+s*i*p-t*o*p)*U,e[12]=y*U,e[13]=(h*m*r-v*d*r+v*i*u-t*m*u-h*i*g+t*d*g)*U,e[14]=(v*o*r-s*m*r-v*i*l+t*m*l+s*i*g-t*o*g)*U,e[15]=(s*d*r-h*o*r+h*i*l-t*d*l-s*i*u+t*o*u)*U,this}scale(e){let t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements;return Math.sqrt(Math.max(e[0]*e[0]+e[1]*e[1]+e[2]*e[2],e[4]*e[4]+e[5]*e[5]+e[6]*e[6],e[8]*e[8]+e[9]*e[9]+e[10]*e[10]))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,d=o+o,u=a*c,p=a*h,v=a*d,m=s*h,g=s*d,f=o*d,x=l*c,b=l*h,A=l*d,y=i.x,C=i.y,U=i.z;return r[0]=(1-(m+f))*y,r[1]=(p+A)*y,r[2]=(v-b)*y,r[3]=0,r[4]=(p-A)*C,r[5]=(1-(u+f))*C,r[6]=(g+x)*C,r[7]=0,r[8]=(v+b)*U,r[9]=(g-x)*U,r[10]=(1-(u+m))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,a=Zn.set(r[0],r[1],r[2]).length(),s=Zn.set(r[4],r[5],r[6]).length(),o=Zn.set(r[8],r[9],r[10]).length();0>this.determinant()&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Wt.copy(this);let l=1/a,c=1/s,h=1/o;return Wt.elements[0]*=l,Wt.elements[1]*=l,Wt.elements[2]*=l,Wt.elements[4]*=c,Wt.elements[5]*=c,Wt.elements[6]*=c,Wt.elements[8]*=h,Wt.elements[9]*=h,Wt.elements[10]*=h,t.setFromRotationMatrix(Wt),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=2e3){let l,c,h=this.elements;if(o===2e3)l=-(s+a)/(s-a),c=-2*s*a/(s-a);else if(o===2001)l=-s/(s-a),c=-s*a/(s-a);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=2*a/(t-e),h[4]=0,h[8]=(t+e)/(t-e),h[12]=0,h[1]=0,h[5]=2*a/(i-r),h[9]=(i+r)/(i-r),h[13]=0,h[2]=0,h[6]=0,h[10]=l,h[14]=c,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=2e3){let l,c,h=this.elements,d=1/(t-e),u=1/(i-r),p=1/(s-a);if(o===2e3)l=(s+a)*p,c=-2*p;else if(o===2001)l=a*p,c=-1*p;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-((t+e)*d),h[1]=0,h[5]=2*u,h[9]=0,h[13]=-((i+r)*u),h[2]=0,h[6]=0,h[10]=c,h[14]=-l,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Zn=new H,Wt=new ct,Sl=new H(0,0,0),yl=new H(1,1,1),Sn=new H,ur=new H,Nt=new H,Hs=new ct,ks=new bn,en=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),.9999999>Math.abs(o)?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),.9999999>Math.abs(h)?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),.9999999>Math.abs(u)?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-At(d,-1,1)),.9999999>Math.abs(d)?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),.9999999>Math.abs(l)?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-At(s,-1,1)),.9999999>Math.abs(s)?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hs,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ks.setFromEuler(this),this.setFromQuaternion(ks,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var zi=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&1<<e)!=0}},El=0,Vs=new H,$n=new bn,cn=new ct,dr=new H,Ci=new H,Tl=new H,bl=new bn,Ws=new H(1,0,0),Xs=new H(0,1,0),js=new H(0,0,1),wl={type:"added"},Al={type:"removed"},Aa={type:"childadded",child:null},Ra={type:"childremoved",child:null},yt=class n extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:El++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new H,t=new en,i=new bn,r=new H(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Oe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.multiply($n),this}rotateOnWorldAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.premultiply($n),this}rotateX(e){return this.rotateOnAxis(Ws,e)}rotateY(e){return this.rotateOnAxis(Xs,e)}rotateZ(e){return this.rotateOnAxis(js,e)}translateOnAxis(e,t){return Vs.copy(e).applyQuaternion(this.quaternion),this.position.add(Vs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ws,e)}translateY(e){return this.translateOnAxis(Xs,e)}translateZ(e){return this.translateOnAxis(js,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dr.copy(e):dr.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Ci,dr,this.up):cn.lookAt(dr,Ci,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),$n.setFromRotationMatrix(cn),this.quaternion.premultiply($n.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?console.error("THREE.Object3D.add: object can't be added as a child of itself.",e):e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wl),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Al),Ra.child=e,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,e,Tl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,bl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let a=0,s=r.length;a<s;a++){let o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){let o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),d=s(e.shapes),u=s(e.skeletons),p=s(e.animations),v=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};yt.DEFAULT_UP=new H(0,1,0),yt.DEFAULT_MATRIX_AUTO_UPDATE=!0,yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xt=new H,hn=new H,Pa=new H,un=new H,Qn=new H,ei=new H,Ys=new H,Ca=new H,La=new H,Ua=new H,li=class n{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xt.subVectors(e,t),r.cross(Xt);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Xt.subVectors(r,t),hn.subVectors(i,t),Pa.subVectors(e,t);let s=Xt.dot(Xt),o=Xt.dot(hn),l=Xt.dot(Pa),c=hn.dot(hn),h=hn.dot(Pa),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,v=(s*h-o*l)*u;return a.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,un)!==null&&un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,un.x),l.addScaledVector(s,un.y),l.addScaledVector(o,un.z),l)}static isFrontFacing(e,t,i,r){return Xt.subVectors(i,t),hn.subVectors(e,t),0>Xt.cross(hn).dot(r)}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),.5*Xt.cross(hn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i,r,a=this.a,s=this.b,o=this.c;Qn.subVectors(s,a),ei.subVectors(o,a),Ca.subVectors(e,a);let l=Qn.dot(Ca),c=ei.dot(Ca);if(l<=0&&c<=0)return t.copy(a);La.subVectors(e,s);let h=Qn.dot(La),d=ei.dot(La);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return i=l/(l-h),t.copy(a).addScaledVector(Qn,i);Ua.subVectors(e,o);let p=Qn.dot(Ua),v=ei.dot(Ua);if(v>=0&&p<=v)return t.copy(o);let m=p*c-l*v;if(m<=0&&c>=0&&v<=0)return r=c/(c-v),t.copy(a).addScaledVector(ei,r);let g=h*v-p*d;if(g<=0&&d-h>=0&&p-v>=0)return Ys.subVectors(o,s),r=(d-h)/(d-h+(p-v)),t.copy(s).addScaledVector(Ys,r);let f=1/(g+m+u);return i=m*f,r=u*f,t.copy(a).addScaledVector(Qn,i).addScaledVector(ei,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Lo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Da(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<.5?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){return t===void 0&&i===void 0?e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e):this.setRGB(e,t,i),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=Wa(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Da(s,a,e+1/3),this.g=Da(s,a,e),this.b=Da(s,a,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=jt){let i;function r(a){a!==void 0&&1>parseFloat(a)&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=i[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let i=Lo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return tt.fromWorkingColorSpace(St.copy(this),e),65536*Math.round(At(255*St.r,0,255))+256*Math.round(At(255*St.g,0,255))+Math.round(At(255*St.b,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){let i,r;tt.fromWorkingColorSpace(St.copy(this),t);let a=St.r,s=St.g,o=St.b,l=Math.max(a,s,o),c=Math.min(a,s,o),h=(c+l)/2;if(c===l)i=0,r=0;else{let d=l-c;switch(r=h<=.5?d/(l+c):d/(2-l-c),l){case a:i=(s-o)/d+6*(s<o);break;case s:i=(o-a)/d+2;break;case o:i=(a-s)/d+4}i/=6}return e.h=i,e.s=r,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=jt){tt.fromWorkingColorSpace(St.copy(this),e);let t=St.r,i=St.g,r=St.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(pr);let i=Di(yn.h,pr.h,t),r=Di(yn.s,pr.s,t),a=Di(yn.l,pr.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},St=new ke;ke.NAMES=Lo;var Rl=0,pn=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rl++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(a){let s=[];for(let o in a){let l=a[o];delete l.metadata,s.push(l)}return s}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ir=class extends pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ut=new H,fr=new qe,Ot=class{constructor(e,t,i=!1){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){var e;return(e="THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.")in Fs||(Fs[e]=!0,console.warn(e)),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),a=wt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Or=class extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Fr=class extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}},dn=class extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}},Pl=0,Gt=new ct,Na=new yt,ti=new H,It=new Hn,Li=new Hn,_t=new H,fn=class n extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Co(e)?Fr:Or)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Oe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let a=t[i];It.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){let o=t[a];Li.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(It.min,Li.min),It.expandByPoint(_t),_t.addVectors(It.max,Li.max),It.expandByPoint(_t)):(It.expandByPoint(Li.min),It.expandByPoint(Li.max))}It.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)_t.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let a=0,s=t.length;a<s;a++){let o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_t.fromBufferAttribute(o,c),l&&(ti.fromBufferAttribute(e,c),_t.add(ti)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new H,l[U]=new H;let c=new H,h=new H,d=new H,u=new qe,p=new qe,v=new qe,m=new H,g=new H,f=this.groups;f.length===0&&(f=[{start:0,count:e.count}]);for(let U=0,L=f.length;U<L;++U){let J=f[U],G=J.start,q=J.count;for(let ae=G,D=G+q;ae<D;ae+=3)(function(Q,B,$){c.fromBufferAttribute(i,Q),h.fromBufferAttribute(i,B),d.fromBufferAttribute(i,$),u.fromBufferAttribute(a,Q),p.fromBufferAttribute(a,B),v.fromBufferAttribute(a,$),h.sub(c),d.sub(c),p.sub(u),v.sub(u);let Y=1/(p.x*v.y-v.x*p.y);isFinite(Y)&&(m.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(Y),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(Y),o[Q].add(m),o[B].add(m),o[$].add(m),l[Q].add(g),l[B].add(g),l[$].add(g))})(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}let x=new H,b=new H,A=new H,y=new H;function C(U){A.fromBufferAttribute(r,U),y.copy(A);let L=o[U];x.copy(L),x.sub(A.multiplyScalar(A.dot(L))).normalize(),b.crossVectors(y,L);let J=b.dot(l[U]);s.setXYZW(U,x.x,x.y,x.z,J<0?-1:1)}for(let U=0,L=f.length;U<L;++U){let J=f[U],G=J.start,q=J.count;for(let ae=G,D=G+q;ae<D;ae+=3)C(e.getX(ae+0)),C(e.getX(ae+1)),C(e.getX(ae+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let r=new H,a=new H,s=new H,o=new H,l=new H,c=new H,h=new H,d=new H;if(e)for(let u=0,p=e.count;u<p;u+=3){let v=e.getX(u+0),m=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),h.subVectors(s,a),d.subVectors(r,a),h.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),h.subVectors(s,a),d.subVectors(r,a),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,v=0;for(let m=0,g=l.length;m<g;m++){p=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*h;for(let f=0;f<h;f++)u[v++]=c[p++]}return new Ot(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){let u=e(c[h],i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let a=e.morphAttributes;for(let c in a){let h=[],d=a[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,h=s.length;c<h;c++){let d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qs=new ct,Dn=new Bi,mr=new ui,Ks=new H,ni=new H,ii=new H,ri=new H,Ia=new H,gr=new H,_r=new qe,vr=new qe,xr=new qe,Js=new H,Zs=new H,$s=new H,Mr=new H,Sr=new H,Ht=class extends yt{constructor(e=new fn,t=new Ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(a&&o){gr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],d=a[l];h!==0&&(Ia.fromBufferAttribute(d,e),s?gr.addScaledVector(Ia,h):gr.addScaledVector(Ia.sub(t),h))}t.add(gr)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(a),Dn.copy(e.ray).recast(e.near),mr.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(mr,Ks)===null||Dn.origin.distanceToSquared(Ks)>(e.far-e.near)**2)||(qs.copy(a).invert(),Dn.copy(e.ray).applyMatrix4(qs),(i.boundingBox===null||Dn.intersectsBox(i.boundingBox)!==!1)&&this._computeIntersections(e,t,Dn)))}_computeIntersections(e,t,i){let r,a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,m=u.length;v<m;v++){let g=u[v],f=s[g.materialIndex],x=Math.max(g.start,p.start),b=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let A=x;A<b;A+=3)(r=yr(this,f,e,i,c,h,d,o.getX(A),o.getX(A+1),o.getX(A+2)))&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,t.push(r))}else{let v=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let g=v;g<m;g+=3)(r=yr(this,s,e,i,c,h,d,o.getX(g),o.getX(g+1),o.getX(g+2)))&&(r.faceIndex=Math.floor(g/3),t.push(r))}else if(l!==void 0)if(Array.isArray(s))for(let v=0,m=u.length;v<m;v++){let g=u[v],f=s[g.materialIndex],x=Math.max(g.start,p.start),b=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let A=x;A<b;A+=3)(r=yr(this,f,e,i,c,h,d,A,A+1,A+2))&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,t.push(r))}else{let v=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let g=v;g<m;g+=3)(r=yr(this,s,e,i,c,h,d,g,g+1,g+2))&&(r.faceIndex=Math.floor(g/3),t.push(r))}}};function yr(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,ni),n.getVertexPosition(l,ii),n.getVertexPosition(c,ri);let h=(function(d,u,p,v,m,g,f,x){if((u.side===1?v.intersectTriangle(f,g,m,!0,x):v.intersectTriangle(m,g,f,u.side===0,x))===null)return null;Sr.copy(x),Sr.applyMatrix4(d.matrixWorld);let b=p.ray.origin.distanceTo(Sr);return b<p.near||b>p.far?null:{distance:b,point:Sr.clone(),object:d}})(n,e,t,i,ni,ii,ri,Mr);if(h){r&&(_r.fromBufferAttribute(r,o),vr.fromBufferAttribute(r,l),xr.fromBufferAttribute(r,c),h.uv=li.getInterpolation(Mr,ni,ii,ri,_r,vr,xr,new qe)),a&&(_r.fromBufferAttribute(a,o),vr.fromBufferAttribute(a,l),xr.fromBufferAttribute(a,c),h.uv1=li.getInterpolation(Mr,ni,ii,ri,_r,vr,xr,new qe)),s&&(Js.fromBufferAttribute(s,o),Zs.fromBufferAttribute(s,l),$s.fromBufferAttribute(s,c),h.normal=li.getInterpolation(Mr,ni,ii,ri,Js,Zs,$s,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new H,materialIndex:0};li.getNormal(ni,ii,ri,d.normal),h.face=d}return h}var Gi=class n extends fn{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};let o=this;r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;function v(m,g,f,x,b,A,y,C,U,L,J){let G=A/U,q=y/L,ae=A/2,D=y/2,Q=C/2,B=U+1,$=L+1,Y=0,K=0,ne=new H;for(let he=0;he<$;he++){let j=he*q-D;for(let F=0;F<B;F++){let oe=F*G-ae;ne[m]=oe*x,ne[g]=j*b,ne[f]=Q,c.push(ne.x,ne.y,ne.z),ne[m]=0,ne[g]=0,ne[f]=C>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(F/U),d.push(1-he/L),Y+=1}}for(let he=0;he<L;he++)for(let j=0;j<U;j++){let F=u+j+B*he,oe=u+j+B*(he+1),ie=u+(j+1)+B*(he+1),S=u+(j+1)+B*he;l.push(F,oe,S),l.push(oe,ie,S),K+=6}o.addGroup(p,K,J),p+=K,u+=Y}v("z","y","x",-1,-1,i,t,e,s=Math.floor(s),a,0),v("z","y","x",1,-1,i,t,-e,s,a,1),v("x","z","y",1,1,e,i,t,r,s,2),v("x","z","y",1,-1,e,i,-t,r,s,3),v("x","y","z",1,-1,e,t,i,r,a,4),v("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function di(n){let e={};for(let t in n)for(let i in e[t]={},n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}return e}function Ut(n){let e={};for(let t=0;t<n.length;t++){let i=di(n[t]);for(let r in i)e[r]=i[r]}return e}function Uo(n){return n.getRenderTarget()===null?n.outputColorSpace:tt.workingColorSpace}var qt=class extends pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);for(let r in t.glslVersion=this.glslVersion,t.uniforms={},this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Hi=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=2e3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},En=new H,Qs=new qe,eo=new qe,Dt=class extends Hi{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Oi*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ui*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Oi*Math.atan(Math.tan(.5*Ui*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,Qs,eo),t.subVectors(eo,Qs)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ui*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ya=class extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Dt(-90,1,e,t);r.layers=this.layers,this.add(r);let a=new Dt(-90,1,e,t);a.layers=this.layers,this.add(a);let s=new Dt(-90,1,e,t);s.layers=this.layers,this.add(s);let o=new Dt(-90,1,e,t);o.layers=this.layers,this.add(o);let l=new Dt(-90,1,e,t);l.layers=this.layers,this.add(l);let c=new Dt(-90,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(let c of t)this.remove(c);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Br=class extends Rt{constructor(e,t,i,r,a,s,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:301,i,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qa=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1};this.texture=new Br([i,i,i,i,i,i],t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gi(5,5,5),a=new qt({name:"CubemapFromEquirect",uniforms:di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let s=new Ht(r,a),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Ya(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}},Oa=new H,Cl=new H,Ll=new Oe,$t=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Oa.subVectors(i,t).cross(Cl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Oa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ll.getNormalMatrix(e),r=this.coplanarPoint(Oa).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Nn=new ui,Er=new H,ki=class{constructor(e=new $t,t=new $t,i=new $t,r=new $t,a=new $t,s=new $t){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],p=r[8],v=r[9],m=r[10],g=r[11],f=r[12],x=r[13],b=r[14],A=r[15];if(i[0].setComponents(l-a,u-c,g-p,A-f).normalize(),i[1].setComponents(l+a,u+c,g+p,A+f).normalize(),i[2].setComponents(l+s,u+h,g+v,A+x).normalize(),i[3].setComponents(l-s,u-h,g-v,A-x).normalize(),i[4].setComponents(l-o,u-d,g-m,A-b).normalize(),t===2e3)i[5].setComponents(l+o,u+d,g+m,A+b).normalize();else if(t===2001)i[5].setComponents(o,d,m,b).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Er.x=r.normal.x>0?e.max.x:e.min.x,Er.y=r.normal.y>0?e.max.y:e.min.y,Er.z=r.normal.z>0?e.max.z:e.min.z,0>r.distanceToPoint(Er))return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(0>t[i].distanceToPoint(e))return!1;return!0}clone(){return new this.constructor().copy(this)}};function Do(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e===!0||t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Ul(n,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(r){return r.isInterleavedBufferAttribute&&(r=r.data),i.get(r)},remove:function(r){r.isInterleavedBufferAttribute&&(r=r.data);let a=i.get(r);a&&(n.deleteBuffer(a.buffer),i.delete(r))},update:function(r,a){if(r.isGLBufferAttribute){let o=i.get(r);(!o||o.version<r.version)&&i.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}r.isInterleavedBufferAttribute&&(r=r.data);let s=i.get(r);if(s===void 0)i.set(r,(function(o,l){let c,h=o.array,d=o.usage,u=h.byteLength,p=n.createBuffer();if(n.bindBuffer(l,p),n.bufferData(l,h,d),o.onUploadCallback(),h instanceof Float32Array)c=n.FLOAT;else if(h instanceof Uint16Array)if(o.isFloat16BufferAttribute)if(t)c=n.HALF_FLOAT;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else c=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)c=n.SHORT;else if(h instanceof Uint32Array)c=n.UNSIGNED_INT;else if(h instanceof Int32Array)c=n.INT;else if(h instanceof Int8Array)c=n.BYTE;else if(h instanceof Uint8Array)c=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)c=n.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:c,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}})(r,a));else if(s.version<r.version){if(s.size!==r.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,d=l._updateRange,u=l.updateRanges;if(n.bindBuffer(c,o),d.count===-1&&u.length===0&&n.bufferSubData(c,0,h),u.length!==0){for(let p=0,v=u.length;p<v;p++){let m=u[p];t?n.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):n.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}l.clearUpdateRanges()}d.count!==-1&&(t?n.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),l.onUploadCallback()})(s.buffer,r,a),s.version=r.version}}}}var Vi=class n extends fn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,p=[],v=[],m=[],g=[];for(let f=0;f<h;f++){let x=f*u-s;for(let b=0;b<c;b++){let A=b*d-a;v.push(A,-x,0),m.push(0,0,1),g.push(b/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){let b=x+c*f,A=x+c*(f+1),y=x+1+c*(f+1),C=x+1+c*f;p.push(b,A,C),p.push(A,y,C)}this.setIndex(p),this.setAttribute("position",new dn(v,3)),this.setAttribute("normal",new dn(m,3)),this.setAttribute("uv",new dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ne={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
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
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
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
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
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
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},pe={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Qt={basic:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Ut([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Ut([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Ut([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Ut([pe.points,pe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Ut([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Ut([pe.common,pe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Ut([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Ut([pe.sprite,pe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Ut([pe.common,pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Ut([pe.lights,pe.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Qt.physical={uniforms:Ut([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var Tr={r:0,b:0,g:0},In=new en,Dl=new ct;function Nl(n,e,t,i,r,a,s){let o,l,c=new ke(0),h=+(a!==!0),d=null,u=0,p=null;function v(m,g){m.getRGB(Tr,Uo(n)),i.buffers.color.setClear(Tr.r,Tr.g,Tr.b,g,s)}return{getClearColor:function(){return c},setClearColor:function(m,g=1){c.set(m),v(c,h=g)},getClearAlpha:function(){return h},setClearAlpha:function(m){v(c,h=m)},render:function(m,g){let f=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?t:e).get(x)),x===null?v(c,h):x&&x.isColor&&(v(x,1),f=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||f)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===306)?(l===void 0&&((l=new Ht(new Gi(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:di(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),In.copy(g.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Dl.makeRotationFromEuler(In)),l.material.toneMapped=tt.getTransfer(x.colorSpace)!==rt,(d!==x||u!==x.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(o===void 0&&((o=new Ht(new Vi(2,2),new qt({name:"BackgroundMaterial",uniforms:di(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(o)),o.material.uniforms.t2D.value=x,o.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,o.material.toneMapped=tt.getTransfer(x.colorSpace)!==rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),o.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||p!==n.toneMapping)&&(o.material.needsUpdate=!0,d=x,u=x.version,p=n.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))}}}function Il(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=p(null),c=l,h=!1;function d(y){return i.isWebGL2?n.bindVertexArray(y):a.bindVertexArrayOES(y)}function u(y){return i.isWebGL2?n.deleteVertexArray(y):a.deleteVertexArrayOES(y)}function p(y){let C=[],U=[],L=[];for(let J=0;J<r;J++)C[J]=0,U[J]=0,L[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:L,object:y,attributes:{},index:null}}function v(){let y=c.newAttributes;for(let C=0,U=y.length;C<U;C++)y[C]=0}function m(y){g(y,0)}function g(y,C){let U=c.newAttributes,L=c.enabledAttributes,J=c.attributeDivisors;U[y]=1,L[y]===0&&(n.enableVertexAttribArray(y),L[y]=1),J[y]!==C&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](y,C),J[y]=C)}function f(){let y=c.newAttributes,C=c.enabledAttributes;for(let U=0,L=C.length;U<L;U++)C[U]!==y[U]&&(n.disableVertexAttribArray(U),C[U]=0)}function x(y,C,U,L,J,G,q){q===!0?n.vertexAttribIPointer(y,C,U,J,G):n.vertexAttribPointer(y,C,U,L,J,G)}function b(){A(),h=!0,c!==l&&d((c=l).object)}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(y,C,U,L,J){let G=!1;if(s){var q,ae;let D,Q,B,$,Y=(q=L,ae=U,D=C.wireframe===!0,(Q=o[q.id])===void 0&&(Q={},o[q.id]=Q),(B=Q[ae.id])===void 0&&(B={},Q[ae.id]=B),($=B[D])===void 0&&($=p(i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()),B[D]=$),$);c!==Y&&d((c=Y).object),(G=(function(K,ne,he,j){let F=c.attributes,oe=ne.attributes,ie=0,S=he.getAttributes();for(let _ in S)if(S[_].location>=0){let R=F[_],z=oe[_];if(z===void 0&&(_==="instanceMatrix"&&K.instanceMatrix&&(z=K.instanceMatrix),_==="instanceColor"&&K.instanceColor&&(z=K.instanceColor)),R===void 0||R.attribute!==z||z&&R.data!==z.data)return!0;ie++}return c.attributesNum!==ie||c.index!==j})(y,L,U,J))&&(function(K,ne,he,j){let F={},oe=ne.attributes,ie=0,S=he.getAttributes();for(let _ in S)if(S[_].location>=0){let R=oe[_];R===void 0&&(_==="instanceMatrix"&&K.instanceMatrix&&(R=K.instanceMatrix),_==="instanceColor"&&K.instanceColor&&(R=K.instanceColor));let z={};z.attribute=R,R&&R.data&&(z.data=R.data),F[_]=z,ie++}c.attributes=F,c.attributesNum=ie,c.index=j})(y,L,U,J)}else{let D=C.wireframe===!0;(c.geometry!==L.id||c.program!==U.id||c.wireframe!==D)&&(c.geometry=L.id,c.program=U.id,c.wireframe=D,G=!0)}J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,(function(D,Q,B,$){if(i.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let Y=$.attributes,K=B.getAttributes(),ne=Q.defaultAttributeValues;for(let he in K){let j=K[he];if(j.location>=0){let F=Y[he];if(F===void 0&&(he==="instanceMatrix"&&D.instanceMatrix&&(F=D.instanceMatrix),he==="instanceColor"&&D.instanceColor&&(F=D.instanceColor)),F!==void 0){let oe=F.normalized,ie=F.itemSize,S=t.get(F);if(S===void 0)continue;let _=S.buffer,R=S.type,z=S.bytesPerElement,O=i.isWebGL2===!0&&(R===n.INT||R===n.UNSIGNED_INT||F.gpuType===1013);if(F.isInterleavedBufferAttribute){let I=F.data,ue=I.stride,te=F.offset;if(I.isInstancedInterleavedBuffer){for(let E=0;E<j.locationSize;E++)g(j.location+E,I.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let E=0;E<j.locationSize;E++)m(j.location+E);n.bindBuffer(n.ARRAY_BUFFER,_);for(let E=0;E<j.locationSize;E++)x(j.location+E,ie/j.locationSize,R,oe,ue*z,(te+ie/j.locationSize*E)*z,O)}else{if(F.isInstancedBufferAttribute){for(let I=0;I<j.locationSize;I++)g(j.location+I,F.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let I=0;I<j.locationSize;I++)m(j.location+I);n.bindBuffer(n.ARRAY_BUFFER,_);for(let I=0;I<j.locationSize;I++)x(j.location+I,ie/j.locationSize,R,oe,ie*z,ie/j.locationSize*I*z,O)}}else if(ne!==void 0){let oe=ne[he];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(j.location,oe);break;case 3:n.vertexAttrib3fv(j.location,oe);break;case 4:n.vertexAttrib4fv(j.location,oe);break;default:n.vertexAttrib1fv(j.location,oe)}}}}f()})(y,C,U,L),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))},reset:b,resetDefaultState:A,dispose:function(){for(let y in b(),o){let C=o[y];for(let U in C){let L=C[U];for(let J in L)u(L[J].object),delete L[J];delete C[U]}delete o[y]}},releaseStatesOfGeometry:function(y){if(o[y.id]===void 0)return;let C=o[y.id];for(let U in C){let L=C[U];for(let J in L)u(L[J].object),delete L[J];delete C[U]}delete o[y.id]},releaseStatesOfProgram:function(y){for(let C in o){let U=o[C];if(U[y.id]===void 0)continue;let L=U[y.id];for(let J in L)u(L[J].object),delete L[J];delete U[y.id]}},initAttributes:v,enableAttribute:m,disableUnusedAttributes:f}}function Ol(n,e,t,i){let r,a=i.isWebGL2;this.setMode=function(s){r=s},this.render=function(s,o){n.drawArrays(r,s,o),t.update(o,r,1)},this.renderInstances=function(s,o,l){let c,h;if(l!==0){if(a)c=n,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](r,s,o,l),t.update(o,r,l)}},this.renderMultiDraw=function(s,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(s[h],o[h]);else{c.multiDrawArraysWEBGL(r,s,0,o,0,l);let h=0;for(let d=0;d<l;d++)h+=o[d];t.update(h,r,1)}}}function Fl(n,e,t){let i;function r(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a="u">typeof WebGL2RenderingContext&&n.constructor.name==="WebGL2RenderingContext",s=t.precision!==void 0?t.precision:"highp",o=r(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);let l=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),f=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,b=a||e.has("OES_texture_float"),A=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:r,precision:s,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:p,maxAttributes:v,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:f,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:x&&b,maxSamples:A}}function Bl(n){let e=this,t=null,i=0,r=!1,a=!1,s=new $t,o=new Oe,l={value:null,needsUpdate:!1};function c(h,d,u,p){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=u+4*v,f=d.matrixWorldInverse;o.getNormalMatrix(f),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,b=u;x!==v;++x,b+=4)s.copy(h[x]).applyMatrix4(f,o),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||i!==0||r;return r=d,i=h.length,u},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(r&&p!==null&&p.length!==0&&(!a||m)){let f=a?0:i,x=4*f,b=g.clippingState||null;l.value=b,b=c(p,d,x,u);for(let A=0;A!==x;++A)b[A]=t[A];g.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=f}else a?c(null):(l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0)}}function zl(n){let e=new WeakMap;function t(r,a){return a===303?r.mapping=301:a===304&&(r.mapping=302),r}function i(r){let a=r.target;a.removeEventListener("dispose",i);let s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(e.has(r))return t(e.get(r).texture,r.mapping);{let s=r.image;if(!s||!(s.height>0))return null;{let o=new qa(s.height);return o.fromEquirectangularTexture(n,r),e.set(r,o),r.addEventListener("dispose",i),t(o.texture,r.mapping)}}}}return r},dispose:function(){e=new WeakMap}}}var zr=class extends Hi{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},to=[.125,.215,.35,.446,.526,.582],Fa=new zr,no=new ke,Ba=null,za=0,Ga=0,Fn=(1+Math.sqrt(5))/2,ai=1/Fn,io=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Fn,ai),new H(0,Fn,-ai),new H(ai,0,Fn),new H(-ai,0,Fn),new H(Fn,ai,0),new H(-Fn,ai,0)],Gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=so(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,za,Ga),e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:wn,depthBuffer:!1},r=ro(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){var a;this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ro(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(o){let l=[],c=[],h=[],d=o,u=o-4+1+to.length;for(let p=0;p<u;p++){let v=Math.pow(2,d);c.push(v);let m=1/v;p>o-4?m=to[p-o+4-1]:p===0&&(m=0),h.push(m);let g=1/(v-2),f=-g,x=1+g,b=[f,f,x,f,x,x,f,f,x,x,f,x],A=new Float32Array(108),y=new Float32Array(72),C=new Float32Array(36);for(let L=0;L<6;L++){let J=L%3*2/3-1,G=L>2?0:-1,q=[J,G,0,J+2/3,G,0,J+2/3,G+1,0,J,G,0,J+2/3,G+1,0,J,G+1,0];A.set(q,18*L),y.set(b,12*L);let ae=[L,L,L,L,L,L];C.set(ae,6*L)}let U=new fn;U.setAttribute("position",new Ot(A,3)),U.setAttribute("uv",new Ot(y,2)),U.setAttribute("faceIndex",new Ot(C,1)),l.push(U),d>4&&d--}return{lodPlanes:l,sizeLods:c,sigmas:h}})(s)),this._blurMaterial=(a=s,new qt({name:"SphericalGaussianBlur",defines:{n:20,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:new Float32Array(20)},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:new H(0,1,0)}},vertexShader:gs(),fragmentShader:`

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

			}
		`,blending:0,depthTest:!1,depthWrite:!1}))}return r}_compileMaterial(e){let t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,i,r){let a=new Dt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(no),l.toneMapping=0,l.autoClear=!1;let d=new Ir({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new Ht(new Gi,d),p=!1,v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,p=!0):(d.color.copy(no),p=!0);for(let m=0;m<6;m++){let g=m%3;g===0?(a.up.set(0,s[m],0),a.lookAt(o[m],0,0)):g===1?(a.up.set(0,0,s[m]),a.lookAt(0,o[m],0)):(a.up.set(0,s[m],0),a.lookAt(0,0,o[m]));let f=this._cubeSize;br(r,g*f,m>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(u,a),l.render(e,a)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=so()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ao());let a=r?this._cubemapMaterial:this._equirectMaterial,s=new Ht(this._lodPlanes[0],a);a.uniforms.envMap.value=e;let o=this._cubeSize;br(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,Fa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=io[(r-1)%io.length];this._blur(e,r-1,r,a,s)}t.autoClear=i}_blur(e,t,i,r,a){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){let l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Ht(this._lodPlanes[r],c),d=c.uniforms,u=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*u):2*Math.PI/39,v=a/p,m=isFinite(a)?1+Math.floor(3*v):20;m>20&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let g=[],f=0;for(let y=0;y<20;++y){let C=y/v,U=Math.exp(-C*C/2);g.push(U),y===0?f+=U:y<m&&(f+=2*U)}for(let y=0;y<g.length;y++)g[y]=g[y]/f;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-i;let b=this._sizeLods[r],A=4*(this._cubeSize-b);br(t,3*b*(r>x-4?r-x+4:0),A,3*b,2*b),l.setRenderTarget(t),l.render(h,Fa)}};function ro(n,e,t){let i=new tn(n,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function br(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ao(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function so(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function gs(){return`

		precision mediump float;
		precision mediump int;

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
	`}function Gl(n){let e=new WeakMap,t=null;function i(r){let a=r.target;a.removeEventListener("dispose",i);let s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(r){if(r&&r.isTexture){let a=r.mapping,s=a===303||a===304,o=a===301||a===302;if(s||o)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let l=e.get(r);return t===null&&(t=new Gr(n)),l=s?t.fromEquirectangular(r,l):t.fromCubemap(r,l),e.set(r,l),l.texture}else{if(e.has(r))return e.get(r).texture;let l=r.image;if(!(s&&l&&l.height>0||o&&l&&(function(c){let h=0;for(let d=0;d<6;d++)c[d]!==void 0&&h++;return h===6})(l)))return null;{t===null&&(t=new Gr(n));let c=s?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,c),r.addEventListener("dispose",i),c.texture}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Hl(n){let e={};function t(i){let r;if(e[i]!==void 0)return e[i];switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kl(n,e,t,i){let r={},a=new WeakMap;function s(l){let c=l.target;for(let d in c.index!==null&&e.remove(c.index),c.attributes)e.remove(c.attributes[d]);for(let d in c.morphAttributes){let u=c.morphAttributes[d];for(let p=0,v=u.length;p<v;p++)e.remove(u[p])}c.removeEventListener("dispose",s),delete r[c.id];let h=a.get(c);h&&(e.remove(h),a.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,d=l.attributes.position,u=0;if(h!==null){let m=h.array;u=h.version;for(let g=0,f=m.length;g<f;g+=3){let x=m[g+0],b=m[g+1],A=m[g+2];c.push(x,b,b,A,A,x)}}else{if(d===void 0)return;let m=d.array;u=d.version;for(let g=0,f=m.length/3-1;g<f;g+=3){let x=g+0,b=g+1,A=g+2;c.push(x,b,b,A,A,x)}}let p=new(Co(c)?Fr:Or)(c,1);p.version=u;let v=a.get(l);v&&e.remove(v),a.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",s),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let d in c)e.update(c[d],n.ARRAY_BUFFER);let h=l.morphAttributes;for(let d in h){let u=h[d];for(let p=0,v=u.length;p<v;p++)e.update(u[p],n.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=a.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return a.get(l)}}}function Vl(n,e,t,i){let r,a,s,o=i.isWebGL2;this.setMode=function(l){r=l},this.setIndex=function(l){a=l.type,s=l.bytesPerElement},this.render=function(l,c){n.drawElements(r,c,a,l*s),t.update(c,r,1)},this.renderInstances=function(l,c,h){let d,u;if(h!==0){if(o)d=n,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](r,c,a,l*s,h),t.update(c,r,h)}},this.renderMultiDraw=function(l,c,h){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<h;u++)this.render(l[u]/s,c[u]);else{d.multiDrawElementsWEBGL(r,c,0,a,l,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,r,1)}}}function Wl(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=t/3*r;break;case n.LINES:e.lines+=t/2*r;break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Xl(n,e){return n[0]-e[0]}function jl(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Yl(n,e,t){let i={},r=new Float32Array(8),a=new WeakMap,s=new dt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=u!==void 0?u.length:0,v=a.get(c);if(v===void 0||v.count!==p){v!==void 0&&v.texture.dispose();let m=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,f=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],A=c.morphAttributes.color||[],y=0;m===!0&&(y=1),g===!0&&(y=2),f===!0&&(y=3);let C=c.attributes.position.count*y,U=1;C>e.maxTextureSize&&(U=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let L=new Float32Array(C*U*4*p),J=new Nr(L,C,U,p);J.type=1015,J.needsUpdate=!0;let G=4*y;for(let q=0;q<p;q++){let ae=x[q],D=b[q],Q=A[q],B=C*U*4*q;for(let $=0;$<ae.count;$++){let Y=$*G;m===!0&&(s.fromBufferAttribute(ae,$),L[B+Y+0]=s.x,L[B+Y+1]=s.y,L[B+Y+2]=s.z,L[B+Y+3]=0),g===!0&&(s.fromBufferAttribute(D,$),L[B+Y+4]=s.x,L[B+Y+5]=s.y,L[B+Y+6]=s.z,L[B+Y+7]=0),f===!0&&(s.fromBufferAttribute(Q,$),L[B+Y+8]=s.x,L[B+Y+9]=s.y,L[B+Y+10]=s.z,L[B+Y+11]=Q.itemSize===4?s.w:1)}}v={count:p,texture:J,size:new qe(C,U)},a.set(c,v),c.addEventListener("dispose",function q(){J.dispose(),a.delete(c),c.removeEventListener("dispose",q)})}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",l.morphTexture,t);else{let m=0;for(let f=0;f<d.length;f++)m+=d[f];let g=c.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",g),h.getUniforms().setValue(n,"morphTargetInfluences",d)}h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let u=d===void 0?0:d.length,p=i[c.id];if(p===void 0||p.length!==u){p=[];for(let x=0;x<u;x++)p[x]=[x,0];i[c.id]=p}for(let x=0;x<u;x++){let b=p[x];b[0]=x,b[1]=d[x]}p.sort(jl);for(let x=0;x<8;x++)x<u&&p[x][1]?(o[x][0]=p[x][0],o[x][1]=p[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Xl);let v=c.morphAttributes.position,m=c.morphAttributes.normal,g=0;for(let x=0;x<8;x++){let b=o[x],A=b[0],y=b[1];A!==Number.MAX_SAFE_INTEGER&&y?(v&&c.getAttribute("morphTarget"+x)!==v[A]&&c.setAttribute("morphTarget"+x,v[A]),m&&c.getAttribute("morphNormal"+x)!==m[A]&&c.setAttribute("morphNormal"+x,m[A]),r[x]=y,g+=y):(v&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),m&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}let f=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",f),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}}}function ql(n,e,t,i){let r=new WeakMap;function a(s){let o=s.target;o.removeEventListener("dispose",a),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(s){let o=i.render.frame,l=s.geometry,c=e.get(s,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),s.isInstancedMesh&&(s.hasEventListener("dispose",a)===!1&&s.addEventListener("dispose",a),r.get(s)!==o&&(t.update(s.instanceMatrix,n.ARRAY_BUFFER),s.instanceColor!==null&&t.update(s.instanceColor,n.ARRAY_BUFFER),r.set(s,o))),s.isSkinnedMesh){let h=s.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var Hr=class extends Rt{constructor(e,t,i,r,a,s,o,l,c,h){if((h=h!==void 0?h:1026)!==1026&&h!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===1026&&(i=1014),i===void 0&&h===1027&&(i=1020),super(null,r,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},No=new Rt,Io=new Hr(1,1);Io.compareFunction=515;var Oo=new Nr,Fo=new class extends Rt{constructor(n=null,e=1,t=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:e,height:t,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bo=new Br,oo=[],lo=[],co=new Float32Array(16),ho=new Float32Array(9),uo=new Float32Array(4);function mi(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,a=oo[r];if(a===void 0&&(a=new Float32Array(r),oo[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function jr(n,e){let t=lo[e];t===void 0&&(t=new Int32Array(e),lo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kl(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Jl(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function Zl(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function $l(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function Ql(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(pt(t,i))return;uo.set(i),n.uniformMatrix2fv(this.addr,!1,uo),ft(t,i)}}function ec(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(pt(t,i))return;ho.set(i),n.uniformMatrix3fv(this.addr,!1,ho),ft(t,i)}}function tc(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(pt(t,i))return;co.set(i),n.uniformMatrix4fv(this.addr,!1,co),ft(t,i)}}function nc(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ic(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function rc(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function ac(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function sc(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oc(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function lc(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function cc(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function hc(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a=this.type===n.SAMPLER_2D_SHADOW?Io:No;t.setTexture2D(e||a,r)}function uc(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Fo,r)}function dc(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Bo,r)}function pc(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Oo,r)}function fc(n,e){n.uniform1fv(this.addr,e)}function mc(n,e){let t=mi(e,this.size,2);n.uniform2fv(this.addr,t)}function gc(n,e){let t=mi(e,this.size,3);n.uniform3fv(this.addr,t)}function _c(n,e){let t=mi(e,this.size,4);n.uniform4fv(this.addr,t)}function vc(n,e){let t=mi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xc(n,e){let t=mi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Mc(n,e){let t=mi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sc(n,e){n.uniform1iv(this.addr,e)}function yc(n,e){n.uniform2iv(this.addr,e)}function Ec(n,e){n.uniform3iv(this.addr,e)}function Tc(n,e){n.uniform4iv(this.addr,e)}function bc(n,e){n.uniform1uiv(this.addr,e)}function wc(n,e){n.uniform2uiv(this.addr,e)}function Ac(n,e){n.uniform3uiv(this.addr,e)}function Rc(n,e){n.uniform4uiv(this.addr,e)}function Pc(n,e,t){let i=this.cache,r=e.length,a=jr(t,r);pt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||No,a[s])}function Cc(n,e,t){let i=this.cache,r=e.length,a=jr(t,r);pt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Fo,a[s])}function Lc(n,e,t){let i=this.cache,r=e.length,a=jr(t,r);pt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Bo,a[s])}function Uc(n,e,t){let i=this.cache,r=e.length,a=jr(t,r);pt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Oo,a[s])}var Ka=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Kl;case 35664:return Jl;case 35665:return Zl;case 35666:return $l;case 35674:return Ql;case 35675:return ec;case 35676:return tc;case 5124:case 35670:return nc;case 35667:case 35671:return ic;case 35668:case 35672:return rc;case 35669:case 35673:return ac;case 5125:return sc;case 36294:return oc;case 36295:return lc;case 36296:return cc;case 35678:case 36198:case 36298:case 36306:case 35682:return hc;case 35679:case 36299:case 36307:return uc;case 35680:case 36300:case 36308:case 36293:return dc;case 36289:case 36303:case 36311:case 36292:return pc}})(t.type)}},Ja=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return fc;case 35664:return mc;case 35665:return gc;case 35666:return _c;case 35674:return vc;case 35675:return xc;case 35676:return Mc;case 5124:case 35670:return Sc;case 35667:case 35671:return yc;case 35668:case 35672:return Ec;case 35669:case 35673:return Tc;case 5125:return bc;case 36294:return wc;case 36295:return Ac;case 36296:return Rc;case 35678:case 36198:case 36298:case 36306:case 35682:return Pc;case 35679:case 36299:case 36307:return Cc;case 35680:case 36300:case 36308:case 36293:return Lc;case 36289:case 36303:case 36311:case 36292:return Uc}})(t.type)}},Za=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let o=r[a];o.setValue(e,t[o.id],i)}}},Ha=/(\w+)(\])?(\[|\.)?/g;function po(n,e){n.seq.push(e),n.map[e.id]=e}var hi=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);(function(o,l,c){let h=o.name,d=h.length;for(Ha.lastIndex=0;;){let u=Ha.exec(h),p=Ha.lastIndex,v=u[1],m=u[2]==="]",g=u[3];if(m&&(v|=0),g===void 0||g==="["&&p+2===d){po(c,g===void 0?new Ka(v,o,l):new Ja(v,o,l));break}{let f=c.map[v];f===void 0&&po(c,f=new Za(v)),c=f}}})(a,s,this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){let o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function fo(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Dc=0;function mo(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(!a)return r;{let s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],d=Math.max(l-6,0),u=Math.min(l+6,c.length);for(let p=d;p<u;p++){let v=p+1;h.push(`${v===l?">":" "} ${v}: ${c[p]}`)}return h.join(`
`)})(n.getShaderSource(e),s)}}function si(n){return n!==""}function go(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _o(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Nc=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(n){return n.replace(Nc,Oc)}var Ic=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Oc(n,e){let t=Ne[e];if(t===void 0){let i=Ic.get(e);if(i!==void 0)t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("Can not resolve #include <"+e+">")}return $a(t)}var Fc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vo(n){return n.replace(Fc,Bc)}function Bc(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function xo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zc(n,e,t,i){let r,a,s,o,l,c,h=n.getContext(),d=t.defines,u=t.vertexShader,p=t.fragmentShader,v=(l="SHADOWMAP_TYPE_BASIC",t.shadowMapType===1?l="SHADOWMAP_TYPE_PCF":t.shadowMapType===2?l="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===3&&(l="SHADOWMAP_TYPE_VSM"),l),m=(function(Q){let B="ENVMAP_TYPE_CUBE";if(Q.envMap)switch(Q.envMapMode){case 301:case 302:B="ENVMAP_TYPE_CUBE";break;case 306:B="ENVMAP_TYPE_CUBE_UV"}return B})(t),g=(c="ENVMAP_MODE_REFLECTION",t.envMap&&t.envMapMode===302&&(c="ENVMAP_MODE_REFRACTION"),c),f=(function(Q){let B="ENVMAP_BLENDING_NONE";if(Q.envMap)switch(Q.combine){case 0:B="ENVMAP_BLENDING_MULTIPLY";break;case 1:B="ENVMAP_BLENDING_MIX";break;case 2:B="ENVMAP_BLENDING_ADD"}return B})(t),x=(function(Q){let B=Q.envMapCubeUVHeight;if(B===null)return null;let $=Math.log2(B)-2;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:1/B,maxMip:$}})(t),b=t.isWebGL2?"":[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(si).join(`
`),A=[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(si).join(`
`),y=(function(Q){let B=[];for(let $ in Q){let Y=Q[$];Y!==!1&&B.push("#define "+$+" "+Y)}return B.join(`
`)})(d),C=h.createProgram(),U=t.glslVersion?"#version "+t.glslVersion+`
`:"";if(t.isRawShaderMaterial)(r=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(si).join(`
`)).length>0&&(r+=`
`),(a=[b,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(si).join(`
`)).length>0&&(a+=`
`);else{let Q;r=[xo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+v:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),a=[b,xo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+f:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+v:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ne.tonemapping_pars_fragment:"",t.toneMapping!==0?(function(B,$){let Y;switch($){case 1:Y="Linear";break;case 2:Y="Reinhard";break;case 3:Y="OptimizedCineon";break;case 4:Y="ACESFilmic";break;case 6:Y="AgX";break;case 7:Y="Neutral";break;case 5:Y="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",$),Y="Linear"}return"vec3 "+B+"( vec3 color ) { return "+Y+"ToneMapping( color ); }"})("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,(Q=(function(B){let $,Y=tt.getPrimaries(tt.workingColorSpace),K=tt.getPrimaries(B);switch(Y===K?$="":Y==="p3"&&K===Cr?$="LinearDisplayP3ToLinearSRGB":Y===Cr&&K==="p3"&&($="LinearSRGBToLinearDisplayP3"),B){case wn:case Xr:return[$,"LinearTransferOETF"];case jt:case ms:return[$,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",B),[$,"LinearTransferOETF"]}})(t.outputColorSpace),`vec4 linearToOutputTexel( vec4 value ) { return ${Q[0]}( ${Q[1]}( value ) ); }`),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(si).join(`
`)}u=_o(u=go(u=$a(u),t),t),p=_o(p=go(p=$a(p),t),t),u=vo(u),p=vo(p),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,r=[A,`precision mediump sampler2DArray;
#define attribute in
#define varying out
#define texture2D texture`].join(`
`)+`
`+r,a=[`precision mediump sampler2DArray;
#define varying in`,t.glslVersion===Is?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Is?"":"#define gl_FragColor pc_fragColor",`#define gl_FragDepthEXT gl_FragDepth
#define texture2D texture
#define textureCube texture
#define texture2DProj textureProj
#define texture2DLodEXT textureLod
#define texture2DProjLodEXT textureProjLod
#define textureCubeLodEXT textureLod
#define texture2DGradEXT textureGrad
#define texture2DProjGradEXT textureProjGrad
#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+a);let L=U+r+u,J=U+a+p,G=fo(h,h.VERTEX_SHADER,L),q=fo(h,h.FRAGMENT_SHADER,J);function ae(Q){if(n.debug.checkShaderErrors){let B=h.getProgramInfoLog(C).trim(),$=h.getShaderInfoLog(G).trim(),Y=h.getShaderInfoLog(q).trim(),K=!0,ne=!0;if(h.getProgramParameter(C,h.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(h,C,G,q);else{let he=mo(h,G,"vertex"),j=mo(h,q,"fragment");console.error("THREE.WebGLProgram: Shader Error "+h.getError()+" - VALIDATE_STATUS "+h.getProgramParameter(C,h.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+B+`
`+he+`
`+j)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):($===""||Y==="")&&(ne=!1);ne&&(Q.diagnostics={runnable:K,programLog:B,vertexShader:{log:$,prefix:r},fragmentShader:{log:Y,prefix:a}})}h.deleteShader(G),h.deleteShader(q),s=new hi(h,C),o=(function(B,$){let Y={},K=B.getProgramParameter($,B.ACTIVE_ATTRIBUTES);for(let ne=0;ne<K;ne++){let he=B.getActiveAttrib($,ne),j=he.name,F=1;he.type===B.FLOAT_MAT2&&(F=2),he.type===B.FLOAT_MAT3&&(F=3),he.type===B.FLOAT_MAT4&&(F=4),Y[j]={type:he.type,location:B.getAttribLocation($,j),locationSize:F}}return Y})(h,C)}h.attachShader(C,G),h.attachShader(C,q),t.index0AttributeName!==void 0?h.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&h.bindAttribLocation(C,0,"position"),h.linkProgram(C),this.getUniforms=function(){return s===void 0&&ae(this),s},this.getAttributes=function(){return o===void 0&&ae(this),o};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=h.getProgramParameter(C,37297)),D},this.destroy=function(){i.releaseStatesOfProgram(this),h.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dc++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=q,this}var Gc=0,Qa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){for(let t of this.materialCache.get(e))t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new es(e),t.set(e,i)),i}},es=class{constructor(e){this.id=Gc++,this.code=e,this.usedTimes=0}};function Hc(n,e,t,i,r,a,s){let o=new zi,l=new Qa,c=new Set,h=[],d=r.isWebGL2,u=r.logarithmicDepthBuffer,p=r.vertexTextures,v=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(f){return c.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,x,b,A,y){let C,U,L,J,G=A.fog,q=y.geometry,ae=f.isMeshStandardMaterial?A.environment:null,D=(f.isMeshStandardMaterial?t:e).get(f.envMap||ae),Q=D&&D.mapping===306?D.image.height:null,B=m[f.type];f.precision!==null&&(v=r.getMaxPrecision(f.precision))!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",v,"instead.");let $=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Y=$!==void 0?$.length:0,K=0;if(q.morphAttributes.position!==void 0&&(K=1),q.morphAttributes.normal!==void 0&&(K=2),q.morphAttributes.color!==void 0&&(K=3),B){let zt=Qt[B];C=zt.vertexShader,U=zt.fragmentShader}else C=f.vertexShader,U=f.fragmentShader,l.update(f),L=l.getVertexShaderID(f),J=l.getFragmentShaderID(f);let ne=n.getRenderTarget(),he=y.isInstancedMesh===!0,j=y.isBatchedMesh===!0,F=!!f.map,oe=!!f.matcap,ie=!!D,S=!!f.aoMap,_=!!f.lightMap,R=!!f.bumpMap,z=!!f.normalMap,O=!!f.displacementMap,I=!!f.emissiveMap,ue=!!f.metalnessMap,te=!!f.roughnessMap,E=f.anisotropy>0,k=f.clearcoat>0,re=f.iridescence>0,ye=f.sheen>0,Z=f.transmission>0,Re=E&&!!f.anisotropyMap,ge=k&&!!f.clearcoatMap,me=k&&!!f.clearcoatNormalMap,Me=k&&!!f.clearcoatRoughnessMap,be=re&&!!f.iridescenceMap,we=re&&!!f.iridescenceThicknessMap,ve=ye&&!!f.sheenColorMap,Ye=ye&&!!f.sheenRoughnessMap,Be=!!f.specularMap,xe=!!f.specularColorMap,Fe=!!f.specularIntensityMap,lt=Z&&!!f.transmissionMap,Te=Z&&!!f.thicknessMap,Ve=!!f.gradientMap,Ge=!!f.alphaMap,xt=f.alphaTest>0,Bt=!!f.alphaHash,Et=!!f.extensions,V=0;f.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(V=n.toneMapping);let Pt={isWebGL2:d,shaderID:B,shaderType:f.type,shaderName:f.name,vertexShader:C,fragmentShader:U,defines:f.defines,customVertexShaderID:L,customFragmentShaderID:J,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:v,batching:j,instancing:he,instancingColor:he&&y.instanceColor!==null,instancingMorph:he&&y.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:wn,alphaToCoverage:!!f.alphaToCoverage,map:F,matcap:oe,envMap:ie,envMapMode:ie&&D.mapping,envMapCubeUVHeight:Q,aoMap:S,lightMap:_,bumpMap:R,normalMap:z,displacementMap:p&&O,emissiveMap:I,normalMapObjectSpace:z&&f.normalMapType===1,normalMapTangentSpace:z&&f.normalMapType===0,metalnessMap:ue,roughnessMap:te,anisotropy:E,anisotropyMap:Re,clearcoat:k,clearcoatMap:ge,clearcoatNormalMap:me,clearcoatRoughnessMap:Me,iridescence:re,iridescenceMap:be,iridescenceThicknessMap:we,sheen:ye,sheenColorMap:ve,sheenRoughnessMap:Ye,specularMap:Be,specularColorMap:xe,specularIntensityMap:Fe,transmission:Z,transmissionMap:lt,thicknessMap:Te,gradientMap:Ve,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:Ge,alphaTest:xt,alphaHash:Bt,combine:f.combine,mapUv:F&&g(f.map.channel),aoMapUv:S&&g(f.aoMap.channel),lightMapUv:_&&g(f.lightMap.channel),bumpMapUv:R&&g(f.bumpMap.channel),normalMapUv:z&&g(f.normalMap.channel),displacementMapUv:O&&g(f.displacementMap.channel),emissiveMapUv:I&&g(f.emissiveMap.channel),metalnessMapUv:ue&&g(f.metalnessMap.channel),roughnessMapUv:te&&g(f.roughnessMap.channel),anisotropyMapUv:Re&&g(f.anisotropyMap.channel),clearcoatMapUv:ge&&g(f.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&g(f.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(f.iridescenceMap.channel),iridescenceThicknessMapUv:we&&g(f.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(f.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&g(f.sheenRoughnessMap.channel),specularMapUv:Be&&g(f.specularMap.channel),specularColorMapUv:xe&&g(f.specularColorMap.channel),specularIntensityMapUv:Fe&&g(f.specularIntensityMap.channel),transmissionMapUv:lt&&g(f.transmissionMap.channel),thicknessMapUv:Te&&g(f.thicknessMap.channel),alphaMapUv:Ge&&g(f.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(z||E),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!q.attributes.uv&&(F||Ge),fog:!!G,useFog:f.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:y.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:K,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:f.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:V,useLegacyLights:n._useLegacyLights,decodeVideoTexture:F&&f.map.isVideoTexture===!0&&tt.getTransfer(f.map.colorSpace)===rt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===1,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:Et&&f.extensions.derivatives===!0,extensionFragDepth:Et&&f.extensions.fragDepth===!0,extensionDrawBuffers:Et&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:Et&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Et&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Et&&f.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt},getProgramCacheKey:function(f){var x,b,A,y;let C=[];if(f.shaderID?C.push(f.shaderID):(C.push(f.customVertexShaderID),C.push(f.customFragmentShaderID)),f.defines!==void 0)for(let U in f.defines)C.push(U),C.push(f.defines[U]);return f.isRawShaderMaterial===!1&&(x=C,b=f,x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking),A=C,y=f,o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.instancingMorph&&o.enable(4),y.matcap&&o.enable(5),y.envMap&&o.enable(6),y.normalMapObjectSpace&&o.enable(7),y.normalMapTangentSpace&&o.enable(8),y.clearcoat&&o.enable(9),y.iridescence&&o.enable(10),y.alphaTest&&o.enable(11),y.vertexColors&&o.enable(12),y.vertexAlphas&&o.enable(13),y.vertexUv1s&&o.enable(14),y.vertexUv2s&&o.enable(15),y.vertexUv3s&&o.enable(16),y.vertexTangents&&o.enable(17),y.anisotropy&&o.enable(18),y.alphaHash&&o.enable(19),y.batching&&o.enable(20),A.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),A.push(o.mask),C.push(n.outputColorSpace)),C.push(f.customProgramCacheKey),C.join()},getUniforms:function(f){let x,b=m[f.type];return x=b?di(Qt[b].uniforms):f.uniforms},acquireProgram:function(f,x){let b;for(let A=0,y=h.length;A<y;A++){let C=h[A];if(C.cacheKey===x){b=C,++b.usedTimes;break}}return b===void 0&&(b=new zc(n,x,f,a),h.push(b)),b},releaseProgram:function(f){if(--f.usedTimes==0){let x=h.indexOf(f);h[x]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function kc(){let n=new WeakMap;return{get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function Vc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Mo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function So(){let n=[],e=0,t=[],i=[],r=[];function a(s,o,l,c,h,d){let u=n[e];return u===void 0?(u={id:s.id,object:s,geometry:o,material:l,groupOrder:c,renderOrder:s.renderOrder,z:h,group:d},n[e]=u):(u.id=s.id,u.object=s,u.geometry=o,u.material=l,u.groupOrder=c,u.renderOrder=s.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(s,o,l,c,h,d){let u=a(s,o,l,c,h,d);l.transmission>0?i.push(u):l.transparent===!0?r.push(u):t.push(u)},unshift:function(s,o,l,c,h,d){let u=a(s,o,l,c,h,d);l.transmission>0?i.unshift(u):l.transparent===!0?r.unshift(u):t.unshift(u)},finish:function(){for(let s=e,o=n.length;s<o;s++){let l=n[s];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(s,o){t.length>1&&t.sort(s||Vc),i.length>1&&i.sort(o||Mo),r.length>1&&r.sort(o||Mo)}}}function Wc(){let n=new WeakMap;return{get:function(e,t){let i,r=n.get(e);return r===void 0?(i=new So,n.set(e,[i])):t>=r.length?(i=new So,r.push(i)):i=r[t],i},dispose:function(){n=new WeakMap}}}function Xc(){let n={};return{get:function(e){let t;if(n[e.id]!==void 0)return n[e.id];switch(e.type){case"DirectionalLight":t={direction:new H,color:new ke};break;case"SpotLight":t={position:new H,direction:new H,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new H,halfWidth:new H,halfHeight:new H}}return n[e.id]=t,t}}}var jc=0;function Yc(n,e){return 2*!!e.castShadow-2*!!n.castShadow+ +!!e.map-!!n.map}function qc(n,e){let t,i=new Xc,r=(t={},{get:function(c){let h;if(t[c.id]!==void 0)return t[c.id];switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3}}return t[c.id]=h,h}}),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)a.probe.push(new H);let s=new H,o=new ct,l=new ct;return{setup:function(c,h){let d=0,u=0,p=0;for(let q=0;q<9;q++)a.probe[q].set(0,0,0);let v=0,m=0,g=0,f=0,x=0,b=0,A=0,y=0,C=0,U=0,L=0;c.sort(Yc);let J=h===!0?Math.PI:1;for(let q=0,ae=c.length;q<ae;q++){let D=c[q],Q=D.color,B=D.intensity,$=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=Q.r*B*J,u+=Q.g*B*J,p+=Q.b*B*J;else if(D.isLightProbe){for(let K=0;K<9;K++)a.probe[K].addScaledVector(D.sh.coefficients[K],B);L++}else if(D.isDirectionalLight){let K=i.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*J),D.castShadow){let ne=D.shadow,he=r.get(D);he.shadowBias=ne.bias,he.shadowNormalBias=ne.normalBias,he.shadowRadius=ne.radius,he.shadowMapSize=ne.mapSize,a.directionalShadow[v]=he,a.directionalShadowMap[v]=Y,a.directionalShadowMatrix[v]=D.shadow.matrix,b++}a.directional[v]=K,v++}else if(D.isSpotLight){let K=i.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(Q).multiplyScalar(B*J),K.distance=$,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,a.spot[g]=K;let ne=D.shadow;if(D.map&&(a.spotLightMap[C]=D.map,C++,ne.updateMatrices(D),D.castShadow&&U++),a.spotLightMatrix[g]=ne.matrix,D.castShadow){let he=r.get(D);he.shadowBias=ne.bias,he.shadowNormalBias=ne.normalBias,he.shadowRadius=ne.radius,he.shadowMapSize=ne.mapSize,a.spotShadow[g]=he,a.spotShadowMap[g]=Y,y++}g++}else if(D.isRectAreaLight){let K=i.get(D);K.color.copy(Q).multiplyScalar(B),K.halfWidth.set(.5*D.width,0,0),K.halfHeight.set(0,.5*D.height,0),a.rectArea[f]=K,f++}else if(D.isPointLight){let K=i.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*J),K.distance=D.distance,K.decay=D.decay,D.castShadow){let ne=D.shadow,he=r.get(D);he.shadowBias=ne.bias,he.shadowNormalBias=ne.normalBias,he.shadowRadius=ne.radius,he.shadowMapSize=ne.mapSize,he.shadowCameraNear=ne.camera.near,he.shadowCameraFar=ne.camera.far,a.pointShadow[m]=he,a.pointShadowMap[m]=Y,a.pointShadowMatrix[m]=D.shadow.matrix,A++}a.point[m]=K,m++}else if(D.isHemisphereLight){let K=i.get(D);K.skyColor.copy(D.color).multiplyScalar(B*J),K.groundColor.copy(D.groundColor).multiplyScalar(B*J),a.hemi[x]=K,x++}}f>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=pe.LTC_FLOAT_1,a.rectAreaLTC2=pe.LTC_FLOAT_2):(a.rectAreaLTC1=pe.LTC_HALF_1,a.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=pe.LTC_FLOAT_1,a.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=pe.LTC_HALF_1,a.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=d,a.ambient[1]=u,a.ambient[2]=p;let G=a.hash;(G.directionalLength!==v||G.pointLength!==m||G.spotLength!==g||G.rectAreaLength!==f||G.hemiLength!==x||G.numDirectionalShadows!==b||G.numPointShadows!==A||G.numSpotShadows!==y||G.numSpotMaps!==C||G.numLightProbes!==L)&&(a.directional.length=v,a.spot.length=g,a.rectArea.length=f,a.point.length=m,a.hemi.length=x,a.directionalShadow.length=b,a.directionalShadowMap.length=b,a.pointShadow.length=A,a.pointShadowMap.length=A,a.spotShadow.length=y,a.spotShadowMap.length=y,a.directionalShadowMatrix.length=b,a.pointShadowMatrix.length=A,a.spotLightMatrix.length=y+C-U,a.spotLightMap.length=C,a.numSpotLightShadowsWithMaps=U,a.numLightProbes=L,G.directionalLength=v,G.pointLength=m,G.spotLength=g,G.rectAreaLength=f,G.hemiLength=x,G.numDirectionalShadows=b,G.numPointShadows=A,G.numSpotShadows=y,G.numSpotMaps=C,G.numLightProbes=L,a.version=jc++)},setupView:function(c,h){let d=0,u=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){let b=c[f];if(b.isDirectionalLight){let A=a.directional[d];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),d++}else if(b.isSpotLight){let A=a.spot[p];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let A=a.rectArea[v];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(g),l.identity(),o.copy(b.matrixWorld),o.premultiply(g),l.extractRotation(o),A.halfWidth.set(.5*b.width,0,0),A.halfHeight.set(0,.5*b.height,0),A.halfWidth.applyMatrix4(l),A.halfHeight.applyMatrix4(l),v++}else if(b.isPointLight){let A=a.point[u];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(g),u++}else if(b.isHemisphereLight){let A=a.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(g),m++}}},state:a}}function yo(n,e){let t=new qc(n,e),i=[],r=[];return{init:function(){i.length=0,r.length=0},state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:function(a){t.setup(i,a)},setupLightsView:function(a){t.setupView(i,a)},pushLight:function(a){i.push(a)},pushShadow:function(a){r.push(a)}}}function Kc(n,e){let t=new WeakMap;return{get:function(i,r=0){let a,s=t.get(i);return s===void 0?(a=new yo(n,e),t.set(i,[a])):r>=s.length?(a=new yo(n,e),s.push(a)):a=s[r],a},dispose:function(){t=new WeakMap}}}var kr=class extends pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ts=class extends pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Jc(n,e,t){let i=new ki,r=new qe,a=new qe,s=new dt,o=new kr({depthPacking:3201}),l=new ts,c={},h=t.maxTextureSize,d={0:1,1:0,2:2},u=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let v=new fn;v.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Ht(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;function x(A,y,C,U){let L=null,J=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(J!==void 0)L=J;else if(L=C.isPointLight===!0?l:o,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){let G=L.uuid,q=y.uuid,ae=c[G];ae===void 0&&(ae={},c[G]=ae);let D=ae[q];D===void 0&&(D=L.clone(),ae[q]=D,y.addEventListener("dispose",b)),L=D}return L.visible=y.visible,L.wireframe=y.wireframe,U===3?L.side=y.shadowSide!==null?y.shadowSide:y.side:L.side=y.shadowSide!==null?y.shadowSide:d[y.side],L.alphaMap=y.alphaMap,L.alphaTest=y.alphaTest,L.map=y.map,L.clipShadows=y.clipShadows,L.clippingPlanes=y.clippingPlanes,L.clipIntersection=y.clipIntersection,L.displacementMap=y.displacementMap,L.displacementScale=y.displacementScale,L.displacementBias=y.displacementBias,L.wireframeLinewidth=y.wireframeLinewidth,L.linewidth=y.linewidth,C.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(n.properties.get(L).light=C),L}function b(A){for(let y in A.target.removeEventListener("dispose",b),c){let C=c[y],U=A.target.uuid;U in C&&(C[U].dispose(),delete C[U])}}this.render=function(A,y,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let U=n.getRenderTarget(),L=n.getActiveCubeFace(),J=n.getActiveMipmapLevel(),G=n.state;G.setBlending(0),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let q=f!==3&&this.type===3,ae=f===3&&this.type!==3;for(let D=0,Q=A.length;D<Q;D++){let B=A[D],$=B.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);let Y=$.getFrameExtents();if(r.multiply(Y),a.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/Y.x),r.x=a.x*Y.x,$.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/Y.y),r.y=a.y*Y.y,$.mapSize.y=a.y)),$.map===null||q===!0||ae===!0){let ne=this.type!==3?{minFilter:1003,magFilter:1003}:{};$.map!==null&&$.map.dispose(),$.map=new tn(r.x,r.y,ne),$.map.texture.name=B.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let K=$.getViewportCount();for(let ne=0;ne<K;ne++){let he=$.getViewport(ne);s.set(a.x*he.x,a.y*he.y,a.x*he.z,a.y*he.w),G.viewport(s),$.updateMatrices(B,ne),i=$.getFrustum(),(function j(F,oe,ie,S,_){if(F.visible===!1)return;if(F.layers.test(oe.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&_===3)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,F.matrixWorld);let z=e.update(F),O=F.material;if(Array.isArray(O)){let I=z.groups;for(let ue=0,te=I.length;ue<te;ue++){let E=I[ue],k=O[E.materialIndex];if(k&&k.visible){let re=x(F,k,S,_);F.onBeforeShadow(n,F,oe,ie,z,re,E),n.renderBufferDirect(ie,null,z,re,F,E),F.onAfterShadow(n,F,oe,ie,z,re,E)}}}else if(O.visible){let I=x(F,O,S,_);F.onBeforeShadow(n,F,oe,ie,z,I,null),n.renderBufferDirect(ie,null,z,I,F,null),F.onAfterShadow(n,F,oe,ie,z,I,null)}}let R=F.children;for(let z=0,O=R.length;z<O;z++)j(R[z],oe,ie,S,_)})(y,C,$.camera,B,this.type)}$.isPointLightShadow!==!0&&this.type===3&&(function(ne,he){let j=e.update(m);u.defines.VSM_SAMPLES!==ne.blurSamples&&(u.defines.VSM_SAMPLES=ne.blurSamples,p.defines.VSM_SAMPLES=ne.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),ne.mapPass===null&&(ne.mapPass=new tn(r.x,r.y)),u.uniforms.shadow_pass.value=ne.map.texture,u.uniforms.resolution.value=ne.mapSize,u.uniforms.radius.value=ne.radius,n.setRenderTarget(ne.mapPass),n.clear(),n.renderBufferDirect(he,null,j,u,m,null),p.uniforms.shadow_pass.value=ne.mapPass.texture,p.uniforms.resolution.value=ne.mapSize,p.uniforms.radius.value=ne.radius,n.setRenderTarget(ne.map),n.clear(),n.renderBufferDirect(he,null,j,p,m,null)})($,C),$.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(U,L,J)}}function Zc(n,e,t){let i=t.isWebGL2,r=new function(){let E=!1,k=new dt,re=null,ye=new dt(0,0,0,0);return{setMask:function(Z){re===Z||E||(n.colorMask(Z,Z,Z,Z),re=Z)},setLocked:function(Z){E=Z},setClear:function(Z,Re,ge,me,Me){Me===!0&&(Z*=me,Re*=me,ge*=me),k.set(Z,Re,ge,me),ye.equals(k)===!1&&(n.clearColor(Z,Re,ge,me),ye.copy(k))},reset:function(){E=!1,re=null,ye.set(-1,0,0,0)}}},a=new function(){let E=!1,k=null,re=null,ye=null;return{setTest:function(Z){Z?S(n.DEPTH_TEST):_(n.DEPTH_TEST)},setMask:function(Z){k===Z||E||(n.depthMask(Z),k=Z)},setFunc:function(Z){if(re!==Z){switch(Z){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:default:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL)}re=Z}},setLocked:function(Z){E=Z},setClear:function(Z){ye!==Z&&(n.clearDepth(Z),ye=Z)},reset:function(){E=!1,k=null,re=null,ye=null}}},s=new function(){let E=!1,k=null,re=null,ye=null,Z=null,Re=null,ge=null,me=null,Me=null;return{setTest:function(be){E||(be?S(n.STENCIL_TEST):_(n.STENCIL_TEST))},setMask:function(be){k===be||E||(n.stencilMask(be),k=be)},setFunc:function(be,we,ve){(re!==be||ye!==we||Z!==ve)&&(n.stencilFunc(be,we,ve),re=be,ye=we,Z=ve)},setOp:function(be,we,ve){(Re!==be||ge!==we||me!==ve)&&(n.stencilOp(be,we,ve),Re=be,ge=we,me=ve)},setLocked:function(be){E=be},setClear:function(be){Me!==be&&(n.clearStencil(be),Me=be)},reset:function(){E=!1,k=null,re=null,ye=null,Z=null,Re=null,ge=null,me=null,Me=null}}},o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],p=null,v=!1,m=null,g=null,f=null,x=null,b=null,A=null,y=null,C=new ke(0,0,0),U=0,L=!1,J=null,G=null,q=null,ae=null,D=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?B=parseFloat(/^WebGL (\d)/.exec($)[1])>=1:$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1])>=2);let Y=null,K={},ne=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),j=new dt().fromArray(ne),F=new dt().fromArray(he);function oe(E,k,re,ye){let Z=new Uint8Array(4),Re=n.createTexture();n.bindTexture(E,Re),n.texParameteri(E,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(E,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<re;ge++)i&&(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)?n.texImage3D(k,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,Z):n.texImage2D(k+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Z);return Re}let ie={};function S(E){c[E]!==!0&&(n.enable(E),c[E]=!0)}function _(E){c[E]!==!1&&(n.disable(E),c[E]=!1)}ie[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ie[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),S(n.DEPTH_TEST),a.setFunc(3),I(!1),ue(1),S(n.CULL_FACE),O(0);let R={100:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};if(i)R[103]=n.MIN,R[104]=n.MAX;else{let E=e.get("EXT_blend_minmax");E!==null&&(R[103]=E.MIN_EXT,R[104]=E.MAX_EXT)}let z={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,204:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,205:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function O(E,k,re,ye,Z,Re,ge,me,Me,be){if(E===0){v===!0&&(_(n.BLEND),v=!1);return}if(v===!1&&(S(n.BLEND),v=!0),E!==5){if(E!==m||be!==L){if((g!==100||b!==100)&&(n.blendEquation(n.FUNC_ADD),g=100,b=100),be)switch(E){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E)}else switch(E){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E)}f=null,x=null,A=null,y=null,C.set(0,0,0),U=0,m=E,L=be}return}Z=Z||k,Re=Re||re,ge=ge||ye,(k!==g||Z!==b)&&(n.blendEquationSeparate(R[k],R[Z]),g=k,b=Z),(re!==f||ye!==x||Re!==A||ge!==y)&&(n.blendFuncSeparate(z[re],z[ye],z[Re],z[ge]),f=re,x=ye,A=Re,y=ge),(me.equals(C)===!1||Me!==U)&&(n.blendColor(me.r,me.g,me.b,Me),C.copy(me),U=Me),m=E,L=!1}function I(E){J!==E&&(E?n.frontFace(n.CW):n.frontFace(n.CCW),J=E)}function ue(E){E!==0?(S(n.CULL_FACE),E!==G&&(E===1?n.cullFace(n.BACK):E===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_(n.CULL_FACE),G=E}function te(E,k,re){E?(S(n.POLYGON_OFFSET_FILL),(ae!==k||D!==re)&&(n.polygonOffset(k,re),ae=k,D=re)):_(n.POLYGON_OFFSET_FILL)}return{buffers:{color:r,depth:a,stencil:s},enable:S,disable:_,bindFramebuffer:function(E,k){return h[E]!==k&&(n.bindFramebuffer(E,k),h[E]=k,i&&(E===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=k),E===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=k)),!0)},drawBuffers:function(E,k){let re=u,ye=!1;if(E){(re=d.get(k))===void 0&&(re=[],d.set(k,re));let Z=E.textures;if(re.length!==Z.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,ge=Z.length;Re<ge;Re++)re[Re]=n.COLOR_ATTACHMENT0+Re;re.length=Z.length,ye=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,ye=!0);if(ye)if(t.isWebGL2)n.drawBuffers(re);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re);else throw Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")},useProgram:function(E){return p!==E&&(n.useProgram(E),p=E,!0)},setBlending:O,setMaterial:function(E,k){E.side===2?_(n.CULL_FACE):S(n.CULL_FACE);let re=E.side===1;k&&(re=!re),I(re),E.blending===1&&E.transparent===!1?O(0):O(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),a.setFunc(E.depthFunc),a.setTest(E.depthTest),a.setMask(E.depthWrite),r.setMask(E.colorWrite);let ye=E.stencilWrite;s.setTest(ye),ye&&(s.setMask(E.stencilWriteMask),s.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),s.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),te(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?S(n.SAMPLE_ALPHA_TO_COVERAGE):_(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:I,setCullFace:ue,setLineWidth:function(E){E!==q&&(B&&n.lineWidth(E),q=E)},setPolygonOffset:te,setScissorTest:function(E){E?S(n.SCISSOR_TEST):_(n.SCISSOR_TEST)},activeTexture:function(E){E===void 0&&(E=n.TEXTURE0+Q-1),Y!==E&&(n.activeTexture(E),Y=E)},bindTexture:function(E,k,re){re===void 0&&(re=Y===null?n.TEXTURE0+Q-1:Y);let ye=K[re];ye===void 0&&(ye={type:void 0,texture:void 0},K[re]=ye),(ye.type!==E||ye.texture!==k)&&(Y!==re&&(n.activeTexture(re),Y=re),n.bindTexture(E,k||ie[E]),ye.type=E,ye.texture=k)},unbindTexture:function(){let E=K[Y];E!==void 0&&E.type!==void 0&&(n.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexImage3D:function(){try{n.compressedTexImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texImage2D:function(){try{n.texImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texImage3D:function(){try{n.texImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},updateUBOMapping:function(E,k){let re=l.get(k);re===void 0&&(re=new WeakMap,l.set(k,re));let ye=re.get(E);ye===void 0&&(ye=n.getUniformBlockIndex(k,E.name),re.set(E,ye))},uniformBlockBinding:function(E,k){let re=l.get(k).get(E);o.get(k)!==re&&(n.uniformBlockBinding(k,re,E.__bindingPointIndex),o.set(k,re))},texStorage2D:function(){try{n.texStorage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texStorage3D:function(){try{n.texStorage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texSubImage2D:function(){try{n.texSubImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texSubImage3D:function(){try{n.texSubImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},scissor:function(E){j.equals(E)===!1&&(n.scissor(E.x,E.y,E.z,E.w),j.copy(E))},viewport:function(E){F.equals(E)===!1&&(n.viewport(E.x,E.y,E.z,E.w),F.copy(E))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},Y=null,K={},h={},d=new WeakMap,u=[],p=null,v=!1,m=null,g=null,f=null,x=null,b=null,A=null,y=null,C=new ke(0,0,0),U=0,L=!1,J=null,G=null,q=null,ae=null,D=null,j.set(0,0,n.canvas.width,n.canvas.height),F.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),s.reset()}}}function $c(n,e,t,i,r,a,s){let o,l=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h="u">typeof navigator&&/OculusBrowser/g.test(navigator.userAgent),d=new qe,u=new WeakMap,p=new WeakMap,v=!1;try{v="u">typeof OffscreenCanvas&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,_){return v?new OffscreenCanvas(S,_):Fi("canvas")}function g(S,_,R,z){let O=1,I=ie(S);if((I.width>z||I.height>z)&&(O=z/Math.max(I.width,I.height)),O<1||_===!0)if("u">typeof HTMLImageElement&&S instanceof HTMLImageElement||"u">typeof HTMLCanvasElement&&S instanceof HTMLCanvasElement||"u">typeof ImageBitmap&&S instanceof ImageBitmap||"u">typeof VideoFrame&&S instanceof VideoFrame){let ue=_?Lr:Math.floor,te=ue(O*I.width),E=ue(O*I.height);o===void 0&&(o=m(te,E));let k=R?m(te,E):o;return k.width=te,k.height=E,k.getContext("2d").drawImage(S,0,0,te,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+te+"x"+E+")."),k}else"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+").");return S}function f(S){let _=ie(S);return Xa(_.width)&&Xa(_.height)}function x(S,_){return S.generateMipmaps&&_&&S.minFilter!==1003&&S.minFilter!==1006}function b(S){n.generateMipmap(S)}function A(S,_,R,z,O=!1){if(l===!1)return _;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let I=_;if(_===n.RED&&(R===n.FLOAT&&(I=n.R32F),R===n.HALF_FLOAT&&(I=n.R16F),R===n.UNSIGNED_BYTE&&(I=n.R8)),_===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(I=n.R8UI),R===n.UNSIGNED_SHORT&&(I=n.R16UI),R===n.UNSIGNED_INT&&(I=n.R32UI),R===n.BYTE&&(I=n.R8I),R===n.SHORT&&(I=n.R16I),R===n.INT&&(I=n.R32I)),_===n.RG&&(R===n.FLOAT&&(I=n.RG32F),R===n.HALF_FLOAT&&(I=n.RG16F),R===n.UNSIGNED_BYTE&&(I=n.RG8)),_===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(I=n.RG8UI),R===n.UNSIGNED_SHORT&&(I=n.RG16UI),R===n.UNSIGNED_INT&&(I=n.RG32UI),R===n.BYTE&&(I=n.RG8I),R===n.SHORT&&(I=n.RG16I),R===n.INT&&(I=n.RG32I)),_===n.RGBA){let ue=O?Pr:tt.getTransfer(z);R===n.FLOAT&&(I=n.RGBA32F),R===n.HALF_FLOAT&&(I=n.RGBA16F),R===n.UNSIGNED_BYTE&&(I=ue===rt?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(I=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(I=n.RGB5_A1)}return(I===n.R16F||I===n.R32F||I===n.RG16F||I===n.RG32F||I===n.RGBA16F||I===n.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function y(S,_,R){return x(S,R)===!0||S.isFramebufferTexture&&S.minFilter!==1003&&S.minFilter!==1006?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function C(S){return S===1003||S===1004||S===1005?n.NEAREST:n.LINEAR}function U(S){let _=S.target;_.removeEventListener("dispose",U),(function(R){let z=i.get(R);if(z.__webglInit===void 0)return;let O=R.source,I=p.get(O);if(I){let ue=I[z.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&J(R),Object.keys(I).length===0&&p.delete(O)}i.remove(R)})(_),_.isVideoTexture&&u.delete(_)}function L(S){let _=S.target;_.removeEventListener("dispose",L),(function(R){let z=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(z.__webglFramebuffer[I]))for(let ue=0;ue<z.__webglFramebuffer[I].length;ue++)n.deleteFramebuffer(z.__webglFramebuffer[I][ue]);else n.deleteFramebuffer(z.__webglFramebuffer[I]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[I])}else{if(Array.isArray(z.__webglFramebuffer))for(let I=0;I<z.__webglFramebuffer.length;I++)n.deleteFramebuffer(z.__webglFramebuffer[I]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let I=0;I<z.__webglColorRenderbuffer.length;I++)z.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[I]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}let O=R.textures;for(let I=0,ue=O.length;I<ue;I++){let te=i.get(O[I]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),s.memory.textures--),i.remove(O[I])}i.remove(R)})(_)}function J(S){let _=i.get(S);n.deleteTexture(_.__webglTexture);let R=S.source,z=p.get(R);delete z[_.__cacheKey],s.memory.textures--}let G=0;function q(S,_){var R;let z,O=i.get(S);if(S.isVideoTexture&&(R=S,z=s.render.frame,u.get(R)!==z&&(u.set(R,z),R.update())),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let I=S.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(I.complete!==!1)return void Y(O,S,_);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}let ae={1e3:n.REPEAT,1001:n.CLAMP_TO_EDGE,1002:n.MIRRORED_REPEAT},D={1003:n.NEAREST,1004:n.NEAREST_MIPMAP_NEAREST,1005:n.NEAREST_MIPMAP_LINEAR,1006:n.LINEAR,1007:n.LINEAR_MIPMAP_NEAREST,1008:n.LINEAR_MIPMAP_LINEAR},Q={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function B(S,_,R){if(_.type===1015&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===1006||_.magFilter===1007||_.magFilter===1005||_.magFilter===1008||_.minFilter===1006||_.minFilter===1007||_.minFilter===1005||_.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),R?(n.texParameteri(S,n.TEXTURE_WRAP_S,ae[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ae[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ae[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,D[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,D[_.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==1001||_.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,C(_.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,C(_.minFilter)),_.minFilter!==1003&&_.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Q[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0&&_.magFilter!==1003&&(_.minFilter===1005||_.minFilter===1008)&&(_.type!==1015||e.has("OES_texture_float_linear")!==!1)&&(l!==!1||_.type!==1016||e.has("OES_texture_half_float_linear")!==!1)&&(_.anisotropy>1||i.get(_).__currentAnisotropy)){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}function $(S,_){let R,z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",U));let O=_.source,I=p.get(O);I===void 0&&(I={},p.set(O,I));let ue=((R=[]).push(_.wrapS),R.push(_.wrapT),R.push(_.wrapR||0),R.push(_.magFilter),R.push(_.minFilter),R.push(_.anisotropy),R.push(_.internalFormat),R.push(_.format),R.push(_.type),R.push(_.generateMipmaps),R.push(_.premultiplyAlpha),R.push(_.flipY),R.push(_.unpackAlignment),R.push(_.colorSpace),R.join());if(ue!==S.__cacheKey){I[ue]===void 0&&(I[ue]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,z=!0),I[ue].usedTimes++;let te=I[S.__cacheKey];te!==void 0&&(I[S.__cacheKey].usedTimes--,te.usedTimes===0&&J(_)),S.__cacheKey=ue,S.__webglTexture=I[ue].texture}return z}function Y(S,_,R){let z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=n.TEXTURE_3D);let O=$(S,_),I=_.source;t.bindTexture(z,S.__webglTexture,n.TEXTURE0+R);let ue=i.get(I);if(I.version!==ue.__version||O===!0){let te;t.activeTexture(n.TEXTURE0+R);let E=tt.getPrimaries(tt.workingColorSpace),k=_.colorSpace===""?null:tt.getPrimaries(_.colorSpace),re=_.colorSpace===""||E===k?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ye=!l&&(_.wrapS!==1001||_.wrapT!==1001||_.minFilter!==1003&&_.minFilter!==1006)&&f(_.image)===!1,Z=g(_.image,ye,!1,r.maxTextureSize),Re=f(Z=oe(_,Z))||l,ge=a.convert(_.format,_.colorSpace),me=a.convert(_.type),Me=A(_.internalFormat,ge,me,_.colorSpace,_.isVideoTexture);B(z,_,Re);let be=_.mipmaps,we=l&&_.isVideoTexture!==!0&&Me!==36196,ve=ue.__version===void 0||O===!0,Ye=I.dataReady,Be=y(_,Z,Re);if(_.isDepthTexture)Me=n.DEPTH_COMPONENT,l?Me=_.type===1015?n.DEPTH_COMPONENT32F:_.type===1014?n.DEPTH_COMPONENT24:_.type===1020?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT16:_.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===1026&&Me===n.DEPTH_COMPONENT&&_.type!==1012&&_.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=1014,me=a.convert(_.type)),_.format===1027&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,_.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=1020,me=a.convert(_.type))),ve&&(we?t.texStorage2D(n.TEXTURE_2D,1,Me,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Me,Z.width,Z.height,0,ge,me,null));else if(_.isDataTexture)if(be.length>0&&Re){we&&ve&&t.texStorage2D(n.TEXTURE_2D,Be,Me,be[0].width,be[0].height);for(let xe=0,Fe=be.length;xe<Fe;xe++)te=be[xe],we?Ye&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,te.width,te.height,ge,me,te.data):t.texImage2D(n.TEXTURE_2D,xe,Me,te.width,te.height,0,ge,me,te.data);_.generateMipmaps=!1}else we?(ve&&t.texStorage2D(n.TEXTURE_2D,Be,Me,Z.width,Z.height),Ye&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,ge,me,Z.data)):t.texImage2D(n.TEXTURE_2D,0,Me,Z.width,Z.height,0,ge,me,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){we&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,Me,be[0].width,be[0].height,Z.depth);for(let xe=0,Fe=be.length;xe<Fe;xe++)te=be[xe],_.format!==1023?ge!==null?we?Ye&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,te.width,te.height,Z.depth,ge,te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Me,te.width,te.height,Z.depth,0,te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Ye&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,te.width,te.height,Z.depth,ge,me,te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Me,te.width,te.height,Z.depth,0,ge,me,te.data)}else{we&&ve&&t.texStorage2D(n.TEXTURE_2D,Be,Me,be[0].width,be[0].height);for(let xe=0,Fe=be.length;xe<Fe;xe++)te=be[xe],_.format!==1023?ge!==null?we?Ye&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,te.width,te.height,ge,te.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Me,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Ye&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,te.width,te.height,ge,me,te.data):t.texImage2D(n.TEXTURE_2D,xe,Me,te.width,te.height,0,ge,me,te.data)}else if(_.isDataArrayTexture)we?(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,Me,Z.width,Z.height,Z.depth),Ye&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ge,me,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,Z.width,Z.height,Z.depth,0,ge,me,Z.data);else if(_.isData3DTexture)we?(ve&&t.texStorage3D(n.TEXTURE_3D,Be,Me,Z.width,Z.height,Z.depth),Ye&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ge,me,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Me,Z.width,Z.height,Z.depth,0,ge,me,Z.data);else if(_.isFramebufferTexture){if(ve)if(we)t.texStorage2D(n.TEXTURE_2D,Be,Me,Z.width,Z.height);else{let xe=Z.width,Fe=Z.height;for(let lt=0;lt<Be;lt++)t.texImage2D(n.TEXTURE_2D,lt,Me,xe,Fe,0,ge,me,null),xe>>=1,Fe>>=1}}else if(be.length>0&&Re){if(we&&ve){let xe=ie(be[0]);t.texStorage2D(n.TEXTURE_2D,Be,Me,xe.width,xe.height)}for(let xe=0,Fe=be.length;xe<Fe;xe++)te=be[xe],we?Ye&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,ge,me,te):t.texImage2D(n.TEXTURE_2D,xe,Me,ge,me,te);_.generateMipmaps=!1}else if(we){if(ve){let xe=ie(Z);t.texStorage2D(n.TEXTURE_2D,Be,Me,xe.width,xe.height)}Ye&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,me,Z)}else t.texImage2D(n.TEXTURE_2D,0,Me,ge,me,Z);x(_,Re)&&b(z),ue.__version=I.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function K(S,_,R,z,O,I){let ue=a.convert(R.format,R.colorSpace),te=a.convert(R.type),E=A(R.internalFormat,ue,te,R.colorSpace);if(!i.get(_).__hasExternalTextures){let k=Math.max(1,_.width>>I),re=Math.max(1,_.height>>I);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,I,E,k,re,_.depth,0,ue,te,null):t.texImage2D(O,I,E,k,re,0,ue,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),F(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,O,i.get(R).__webglTexture,0,j(_)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,O,i.get(R).__webglTexture,I),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(S,_,R){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let z=l===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(R||F(_)){let O=_.depthTexture;O&&O.isDepthTexture&&(O.type===1015?z=n.DEPTH_COMPONENT32F:O.type===1014&&(z=n.DEPTH_COMPONENT24));let I=j(_);F(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I,z,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,I,z,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,z,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){let z=j(_);R&&F(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,_.width,_.height):F(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let z=_.textures;for(let O=0;O<z.length;O++){let I=z[O],ue=a.convert(I.format,I.colorSpace),te=a.convert(I.type),E=A(I.internalFormat,ue,te,I.colorSpace),k=j(_);R&&F(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,k,E,_.width,_.height):F(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k,E,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,E,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(S){let _=i.get(S),R=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(R)throw Error("target.depthTexture not supported in Cube render targets");var z=_.__webglFramebuffer;if(S&&S.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,z),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(S.depthTexture).__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);let O=i.get(S.depthTexture).__webglTexture,I=j(S);if(S.depthTexture.format===1026)F(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(S.depthTexture.format===1027)F(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw Error("Unknown depthTexture format")}else if(R){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]=n.createRenderbuffer(),ne(_.__webglDepthbuffer[O],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),ne(_.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(S){return Math.min(r.maxSamples,S.samples)}function F(S){let _=i.get(S);return l&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function oe(S,_){let R=S.colorSpace,z=S.format,O=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===1035||R!==wn&&R!==""&&(tt.getTransfer(R)===rt?l===!1?e.has("EXT_sRGB")===!0&&z===1023?(S.format=1035,S.minFilter=1006,S.generateMipmaps=!1):_=Ur.sRGBToLinear(_):(z!==1023||O!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),_}function ie(S){return"u">typeof HTMLImageElement&&S instanceof HTMLImageElement?(d.width=S.naturalWidth||S.width,d.height=S.naturalHeight||S.height):"u">typeof VideoFrame&&S instanceof VideoFrame?(d.width=S.displayWidth,d.height=S.displayHeight):(d.width=S.width,d.height=S.height),d}this.allocateTextureUnit=function(){let S=G;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),G+=1,S},this.resetTextureUnits=function(){G=0},this.setTexture2D=q,this.setTexture2DArray=function(S,_){let R=i.get(S);S.version>0&&R.__version!==S.version?Y(R,S,_):t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+_)},this.setTexture3D=function(S,_){let R=i.get(S);S.version>0&&R.__version!==S.version?Y(R,S,_):t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+_)},this.setTextureCube=function(S,_){let R=i.get(S);S.version>0&&R.__version!==S.version?(function(z,O,I){if(O.image.length!==6)return;let ue=$(z,O),te=O.source;t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+I);let E=i.get(te);if(te.version!==E.__version||ue===!0){let k;t.activeTexture(n.TEXTURE0+I);let re=tt.getPrimaries(tt.workingColorSpace),ye=O.colorSpace===""?null:tt.getPrimaries(O.colorSpace),Z=O.colorSpace===""||re===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,O.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,O.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let Re=O.isCompressedTexture||O.image[0].isCompressedTexture,ge=O.image[0]&&O.image[0].isDataTexture,me=[];for(let Te=0;Te<6;Te++)Re||ge?me[Te]=ge?O.image[Te].image:O.image[Te]:me[Te]=g(O.image[Te],!1,!0,r.maxCubemapSize),me[Te]=oe(O,me[Te]);let Me=me[0],be=f(Me)||l,we=a.convert(O.format,O.colorSpace),ve=a.convert(O.type),Ye=A(O.internalFormat,we,ve,O.colorSpace),Be=l&&O.isVideoTexture!==!0,xe=E.__version===void 0||ue===!0,Fe=te.dataReady,lt=y(O,Me,be);if(B(n.TEXTURE_CUBE_MAP,O,be),Re){Be&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Ye,Me.width,Me.height);for(let Te=0;Te<6;Te++){k=me[Te].mipmaps;for(let Ve=0;Ve<k.length;Ve++){let Ge=k[Ve];O.format!==1023?we!==null?Be?Fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ve,0,0,Ge.width,Ge.height,we,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ve,Ye,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ve,0,0,Ge.width,Ge.height,we,ve,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ve,Ye,Ge.width,Ge.height,0,we,ve,Ge.data)}}}else{if(k=O.mipmaps,Be&&xe){k.length>0&&lt++;let Te=ie(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Ye,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(ge){Be?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,me[Te].width,me[Te].height,we,ve,me[Te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ye,me[Te].width,me[Te].height,0,we,ve,me[Te].data);for(let Ve=0;Ve<k.length;Ve++){let Ge=k[Ve].image[Te].image;Be?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ve+1,0,0,Ge.width,Ge.height,we,ve,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ve+1,Ye,Ge.width,Ge.height,0,we,ve,Ge.data)}}else{Be?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,we,ve,me[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ye,we,ve,me[Te]);for(let Ve=0;Ve<k.length;Ve++){let Ge=k[Ve];Be?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ve+1,0,0,we,ve,Ge.image[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ve+1,Ye,we,ve,Ge.image[Te])}}}x(O,be)&&b(n.TEXTURE_CUBE_MAP),E.__version=te.version,O.onUpdate&&O.onUpdate(O)}z.__version=O.version})(R,S,_):t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+_)},this.rebindTextures=function(S,_,R){let z=i.get(S);_!==void 0&&K(z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&he(S)},this.setupRenderTarget=function(S){let _=S.texture,R=i.get(S),z=i.get(_);S.addEventListener("dispose",L);let O=S.textures,I=S.isWebGLCubeRenderTarget===!0,ue=O.length>1,te=f(S)||l;if(!ue&&(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=_.version,s.memory.textures++),I){R.__webglFramebuffer=[];for(let E=0;E<6;E++)if(l&&_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer[E]=[];for(let k=0;k<_.mipmaps.length;k++)R.__webglFramebuffer[E][k]=n.createFramebuffer()}else R.__webglFramebuffer[E]=n.createFramebuffer()}else{if(l&&_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer=[];for(let E=0;E<_.mipmaps.length;E++)R.__webglFramebuffer[E]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(ue)if(r.drawBuffers)for(let E=0,k=O.length;E<k;E++){let re=i.get(O[E]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),s.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&S.samples>0&&F(S)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let E=0;E<O.length;E++){let k=O[E];R.__webglColorRenderbuffer[E]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[E]);let re=a.convert(k.format,k.colorSpace),ye=a.convert(k.type),Z=A(k.internalFormat,re,ye,k.colorSpace,S.isXRRenderTarget===!0),Re=j(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Z,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+E,n.RENDERBUFFER,R.__webglColorRenderbuffer[E])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(R.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(I){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),B(n.TEXTURE_CUBE_MAP,_,te);for(let E=0;E<6;E++)if(l&&_.mipmaps&&_.mipmaps.length>0)for(let k=0;k<_.mipmaps.length;k++)K(R.__webglFramebuffer[E][k],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+E,k);else K(R.__webglFramebuffer[E],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0);x(_,te)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let E=0,k=O.length;E<k;E++){let re=O[E],ye=i.get(re);t.bindTexture(n.TEXTURE_2D,ye.__webglTexture),B(n.TEXTURE_2D,re,te),K(R.__webglFramebuffer,S,re,n.COLOR_ATTACHMENT0+E,n.TEXTURE_2D,0),x(re,te)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let E=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(l?E=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(E,z.__webglTexture),B(E,_,te),l&&_.mipmaps&&_.mipmaps.length>0)for(let k=0;k<_.mipmaps.length;k++)K(R.__webglFramebuffer[k],S,_,n.COLOR_ATTACHMENT0,E,k);else K(R.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,E,0);x(_,te)&&b(E),t.unbindTexture()}S.depthBuffer&&he(S)},this.updateRenderTargetMipmap=function(S){let _=f(S)||l,R=S.textures;for(let z=0,O=R.length;z<O;z++){let I=R[z];if(x(I,_)){let ue=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,te=i.get(I).__webglTexture;t.bindTexture(ue,te),b(ue),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(S){if(l&&S.samples>0&&F(S)===!1){let _=S.textures,R=S.width,z=S.height,O=n.COLOR_BUFFER_BIT,I=[],ue=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=i.get(S),E=_.length>1;if(E)for(let k=0;k<_.length;k++)t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let k=0;k<_.length;k++){I.push(n.COLOR_ATTACHMENT0+k),S.depthBuffer&&I.push(ue);let re=te.__ignoreDepthValues!==void 0&&te.__ignoreDepthValues;if(re===!1&&(S.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),E&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,te.__webglColorRenderbuffer[k]),re===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ue]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ue])),E){let ye=i.get(_[k]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,R,z,0,0,R,z,O,n.NEAREST),h&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),E)for(let k=0;k<_.length;k++){t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.RENDERBUFFER,te.__webglColorRenderbuffer[k]);let re=i.get(_[k]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=K,this.useMultisampledRTT=F}function Qc(n,e,t){let i=t.isWebGL2;return{convert:function(r,a=""){let s,o=tt.getTransfer(a);if(r===1009)return n.UNSIGNED_BYTE;if(r===1017)return n.UNSIGNED_SHORT_4_4_4_4;if(r===1018)return n.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return n.BYTE;if(r===1011)return n.SHORT;if(r===1012)return n.UNSIGNED_SHORT;if(r===1013)return n.INT;if(r===1014)return n.UNSIGNED_INT;if(r===1015)return n.FLOAT;if(r===1016)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"))!==null?s.HALF_FLOAT_OES:null;if(r===1021)return n.ALPHA;if(r===1023)return n.RGBA;if(r===1024)return n.LUMINANCE;if(r===1025)return n.LUMINANCE_ALPHA;if(r===1026)return n.DEPTH_COMPONENT;if(r===1027)return n.DEPTH_STENCIL;if(r===1035)return(s=e.get("EXT_sRGB"))!==null?s.SRGB_ALPHA_EXT:null;if(r===1028)return n.RED;if(r===1029)return n.RED_INTEGER;if(r===1030)return n.RG;if(r===1031)return n.RG_INTEGER;if(r===1033)return n.RGBA_INTEGER;if(r===33776||r===33777||r===33778||r===33779)if(o===rt){if((s=e.get("WEBGL_compressed_texture_s3tc_srgb"))===null)return null;if(r===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if((s=e.get("WEBGL_compressed_texture_s3tc"))===null)return null;if(r===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(r===35840||r===35841||r===35842||r===35843){if((s=e.get("WEBGL_compressed_texture_pvrtc"))===null)return null;if(r===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(r===36196)return(s=e.get("WEBGL_compressed_texture_etc1"))!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===37492||r===37496){if((s=e.get("WEBGL_compressed_texture_etc"))===null)return null;if(r===37492)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===37496)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821){if((s=e.get("WEBGL_compressed_texture_astc"))===null)return null;if(r===37808)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(r===36492||r===36494||r===36495){if((s=e.get("EXT_texture_compression_bptc"))===null)return null;if(r===36492)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(r===36283||r===36284||r===36285||r===36286){if((s=e.get("EXT_texture_compression_rgtc"))===null)return null;if(r===36492)return s.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return r===1020?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"))!==null?s.UNSIGNED_INT_24_8_WEBGL:null:n[r]!==void 0?n[r]:null}}}var ns=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Gn=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},eh={type:"move"},Ni=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){for(let p of(s=!0,e.hand.values())){let v=t.getJointPose(p,i),m=this._getHandJoint(c,p);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position);c.inputState.pinching&&u>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i))!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1);o!==null&&((r=t.getPose(e.targetRaySpace,i))===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},th=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nh=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,is=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Rt;e.properties.get(r).__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){let i=t.cameras[0].viewport,r=new qt({extensions:{fragDepth:!0},vertexShader:th,fragmentShader:nh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ht(new Vi(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},rs=class extends Tn{constructor(e,t){super();let i=this,r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,v=null,m=new is,g=t.getContextAttributes(),f=null,x=null,b=[],A=[],y=new qe,C=null,U=new Dt;U.layers.enable(1),U.viewport=new dt;let L=new Dt;L.layers.enable(2),L.viewport=new dt;let J=[U,L],G=new ns;G.layers.enable(1),G.layers.enable(2);let q=null,ae=null;function D(j){let F=A.indexOf(j.inputSource);if(F===-1)return;let oe=b[F];oe!==void 0&&(oe.update(j.inputSource,j.frame,c||s),oe.dispatchEvent({type:j.type,data:j.inputSource}))}function Q(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",B);for(let j=0;j<b.length;j++){let F=A[j];F!==null&&(A[j]=null,b[j].disconnect(F))}q=null,ae=null,m.reset(),e.setRenderTarget(f),p=null,u=null,d=null,r=null,x=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}function B(j){for(let F=0;F<j.removed.length;F++){let oe=j.removed[F],ie=A.indexOf(oe);ie>=0&&(A[ie]=null,b[ie].disconnect(oe))}for(let F=0;F<j.added.length;F++){let oe=j.added[F],ie=A.indexOf(oe);if(ie===-1){for(let _=0;_<b.length;_++)if(_>=A.length){A.push(oe),ie=_;break}else if(A[_]===null){A[_]=oe,ie=_;break}if(ie===-1)break}let S=b[ie];S&&S.connect(oe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let F=b[j];return F===void 0&&(F=new Ni,b[j]=F),F.getTargetRaySpace()},this.getControllerGrip=function(j){let F=b[j];return F===void 0&&(F=new Ni,b[j]=F),F.getGripSpace()},this.getHand=function(j){let F=b[j];return F===void 0&&(F=new Ni,b[j]=F),F.getHandSpace()},this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if((r=j)!==null){if(f=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let F={antialias:r.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,F),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new tn(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let F=null,oe=null,ie=null;g.depth&&(ie=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=g.stencil?1027:1026,oe=g.stencil?1020:1014);let S={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:a};u=(d=new XRWebGLBinding(r,t)).createProjectionLayer(S),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new tn(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new Hr(u.textureWidth,u.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:4*!!g.antialias}),e.properties.get(x).__ignoreDepthValues=u.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};let $=new H,Y=new H;function K(j,F){F===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(F.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){var F,oe,ie;if(r===null)return;m.texture!==null&&(j.near=m.depthNear,j.far=m.depthFar),G.near=L.near=U.near=j.near,G.far=L.far=U.far=j.far,(q!==G.near||ae!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),q=G.near,ae=G.far,U.near=q,U.far=ae,L.near=q,L.far=ae,U.updateProjectionMatrix(),L.updateProjectionMatrix(),j.updateProjectionMatrix());let S=j.parent,_=G.cameras;K(G,S);for(let R=0;R<_.length;R++)K(_[R],S);if(_.length===2){let R,z,O,I,ue,te,E,k,re,ye,Z,Re,ge;$.setFromMatrixPosition(U.matrixWorld),Y.setFromMatrixPosition(L.matrixWorld),R=$.distanceTo(Y),z=U.projectionMatrix.elements,O=L.projectionMatrix.elements,I=z[14]/(z[10]-1),ue=z[14]/(z[10]+1),te=(z[9]+1)/z[5],E=(z[9]-1)/z[5],k=(z[8]-1)/z[0],Z=-((ye=R/(-k+(re=(O[8]+1)/O[0])))*k),U.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Z),G.translateZ(ye),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Re=I+ye,ge=ue+ye,G.projectionMatrix.makePerspective(I*k-Z,I*re+(R-Z),te*ue/ge*Re,E*ue/ge*Re,Re,ge),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}else G.projectionMatrix.copy(U.projectionMatrix);F=j,oe=G,(ie=S)===null?F.matrix.copy(oe.matrixWorld):(F.matrix.copy(ie.matrixWorld),F.matrix.invert(),F.matrix.multiply(oe.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(oe.projectionMatrix),F.projectionMatrixInverse.copy(oe.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=2*Oi*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)},this.getCamera=function(){return G},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null};let ne=null,he=new Do;he.setAnimationLoop(function(j,F){if(h=F.getViewerPose(c||s),v=F,h!==null){let oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ie=!1;oe.length!==G.cameras.length&&(G.cameras.length=0,ie=!0);for(let _=0;_<oe.length;_++){let R=oe[_],z=null;if(p!==null)z=p.getViewport(R);else{let I=d.getViewSubImage(u,R);z=I.viewport,_===0&&(e.setRenderTargetTextures(x,I.colorTexture,u.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(x))}let O=J[_];O===void 0&&((O=new Dt).layers.enable(_),O.viewport=new dt,J[_]=O),O.matrix.fromArray(R.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(R.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(z.x,z.y,z.width,z.height),_===0&&(G.matrix.copy(O.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ie===!0&&G.cameras.push(O)}let S=r.enabledFeatures;if(S&&S.includes("depth-sensing")){let _=d.getDepthInformation(oe[0]);_&&_.isValid&&_.texture&&m.init(e,_,r.renderState)}}for(let oe=0;oe<b.length;oe++){let ie=A[oe],S=b[oe];ie!==null&&S!==void 0&&S.update(ie,F,c||s)}m.render(e,G),ne&&ne(j,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),v=null}),this.setAnimationLoop=function(j){ne=j},this.dispose=function(){}}},On=new en,ih=new ct;function rh(n,e){function t(r,a){r.matrixAutoUpdate===!0&&r.updateMatrix(),a.value.copy(r.matrix)}function i(r,a){r.opacity.value=a.opacity,a.color&&r.diffuse.value.copy(a.color),a.emissive&&r.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(r.map.value=a.map,t(a.map,r.mapTransform)),a.alphaMap&&(r.alphaMap.value=a.alphaMap,t(a.alphaMap,r.alphaMapTransform)),a.bumpMap&&(r.bumpMap.value=a.bumpMap,t(a.bumpMap,r.bumpMapTransform),r.bumpScale.value=a.bumpScale,a.side===1&&(r.bumpScale.value*=-1)),a.normalMap&&(r.normalMap.value=a.normalMap,t(a.normalMap,r.normalMapTransform),r.normalScale.value.copy(a.normalScale),a.side===1&&r.normalScale.value.negate()),a.displacementMap&&(r.displacementMap.value=a.displacementMap,t(a.displacementMap,r.displacementMapTransform),r.displacementScale.value=a.displacementScale,r.displacementBias.value=a.displacementBias),a.emissiveMap&&(r.emissiveMap.value=a.emissiveMap,t(a.emissiveMap,r.emissiveMapTransform)),a.specularMap&&(r.specularMap.value=a.specularMap,t(a.specularMap,r.specularMapTransform)),a.alphaTest>0&&(r.alphaTest.value=a.alphaTest);let s=e.get(a),o=s.envMap,l=s.envMapRotation;if(o&&(r.envMap.value=o,On.copy(l),On.x*=-1,On.y*=-1,On.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),r.envMapRotation.value.setFromMatrix4(ih.makeRotationFromEuler(On)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=a.reflectivity,r.ior.value=a.ior,r.refractionRatio.value=a.refractionRatio),a.lightMap){r.lightMap.value=a.lightMap;let c=n._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=a.lightMapIntensity*c,t(a.lightMap,r.lightMapTransform)}a.aoMap&&(r.aoMap.value=a.aoMap,r.aoMapIntensity.value=a.aoMapIntensity,t(a.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,a){a.color.getRGB(r.fogColor.value,Uo(n)),a.isFog?(r.fogNear.value=a.near,r.fogFar.value=a.far):a.isFogExp2&&(r.fogDensity.value=a.density)},refreshMaterialUniforms:function(r,a,s,o,l){var c,h,d,u,p,v,m,g,f,x,b,A,y,C,U,L,J,G,q,ae,D,Q,B;let $;a.isMeshBasicMaterial||a.isMeshLambertMaterial?i(r,a):a.isMeshToonMaterial?(i(r,a),c=r,(h=a).gradientMap&&(c.gradientMap.value=h.gradientMap)):a.isMeshPhongMaterial?(i(r,a),d=r,u=a,d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)):a.isMeshStandardMaterial?(i(r,a),p=r,v=a,p.metalness.value=v.metalness,v.metalnessMap&&(p.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,p.metalnessMapTransform)),p.roughness.value=v.roughness,v.roughnessMap&&(p.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,p.roughnessMapTransform)),e.get(v).envMap&&(p.envMapIntensity.value=v.envMapIntensity),a.isMeshPhysicalMaterial&&(m=r,g=a,f=l,m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===1&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=f.texture,m.transmissionSamplerSize.value.set(f.width,f.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform)))):a.isMeshMatcapMaterial?(i(r,a),x=r,(b=a).matcap&&(x.matcap.value=b.matcap)):a.isMeshDepthMaterial?i(r,a):a.isMeshDistanceMaterial?(i(r,a),A=r,y=a,$=e.get(y).light,A.referencePosition.value.setFromMatrixPosition($.matrixWorld),A.nearDistance.value=$.shadow.camera.near,A.farDistance.value=$.shadow.camera.far):a.isMeshNormalMaterial?i(r,a):a.isLineBasicMaterial?(C=r,U=a,C.diffuse.value.copy(U.color),C.opacity.value=U.opacity,U.map&&(C.map.value=U.map,t(U.map,C.mapTransform)),a.isLineDashedMaterial&&(L=r,J=a,L.dashSize.value=J.dashSize,L.totalSize.value=J.dashSize+J.gapSize,L.scale.value=J.scale)):a.isPointsMaterial?(G=r,q=a,ae=s,D=o,G.diffuse.value.copy(q.color),G.opacity.value=q.opacity,G.size.value=q.size*ae,G.scale.value=.5*D,q.map&&(G.map.value=q.map,t(q.map,G.uvTransform)),q.alphaMap&&(G.alphaMap.value=q.alphaMap,t(q.alphaMap,G.alphaMapTransform)),q.alphaTest>0&&(G.alphaTest.value=q.alphaTest)):a.isSpriteMaterial?(Q=r,B=a,Q.diffuse.value.copy(B.color),Q.opacity.value=B.opacity,Q.rotation.value=B.rotation,B.map&&(Q.map.value=B.map,t(B.map,Q.mapTransform)),B.alphaMap&&(Q.alphaMap.value=B.alphaMap,t(B.alphaMap,Q.alphaMapTransform)),B.alphaTest>0&&(Q.alphaTest.value=B.alphaTest)):a.isShadowMaterial?(r.color.value.copy(a.color),r.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}}}function ah(n,e,t,i){let r={},a={},s=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(h){let d={boundary:0,storage:0};return typeof h=="number"||typeof h=="boolean"?(d.boundary=4,d.storage=4):h.isVector2?(d.boundary=8,d.storage=8):h.isVector3||h.isColor?(d.boundary=16,d.storage=12):h.isVector4?(d.boundary=16,d.storage=16):h.isMatrix3?(d.boundary=48,d.storage=48):h.isMatrix4?(d.boundary=64,d.storage=64):h.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",h),d}function c(h){let d=h.target;d.removeEventListener("dispose",c);let u=s.indexOf(d.__bindingPointIndex);s.splice(u,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete a[d.id]}return{bind:function(h,d){let u=d.program;i.uniformBlockBinding(h,u)},update:function(h,d){var u;let p,v,m,g,f=r[h.id];f===void 0&&((function(A){let y=A.uniforms,C=0;for(let L=0,J=y.length;L<J;L++){let G=Array.isArray(y[L])?y[L]:[y[L]];for(let q=0,ae=G.length;q<ae;q++){let D=G[q],Q=Array.isArray(D.value)?D.value:[D.value];for(let B=0,$=Q.length;B<$;B++){let Y=l(Q[B]),K=C%16;K!==0&&16-K<Y.boundary&&(C+=16-K),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=C,C+=Y.storage}}}let U=C%16;U>0&&(C+=16-U),A.__size=C,A.__cache={}})(h),(u=h).__bindingPointIndex=p=(function(){for(let A=0;A<o;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})(),v=n.createBuffer(),m=u.__size,g=u.usage,n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,m,g),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,p,v),f=v,r[h.id]=f,h.addEventListener("dispose",c));let x=d.program;i.updateUBOMapping(h,x);let b=e.render.frame;a[h.id]!==b&&((function(A){let y=r[A.id],C=A.uniforms,U=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let L=0,J=C.length;L<J;L++){let G=Array.isArray(C[L])?C[L]:[C[L]];for(let q=0,ae=G.length;q<ae;q++){let D=G[q];if((function(Q,B,$,Y){let K=Q.value,ne=B+"_"+$;if(Y[ne]===void 0)return typeof K=="number"||typeof K=="boolean"?Y[ne]=K:Y[ne]=K.clone(),!0;{let he=Y[ne];if(typeof K=="number"||typeof K=="boolean"){if(he!==K)return Y[ne]=K,!0}else if(he.equals(K)===!1)return he.copy(K),!0}return!1})(D,L,q,U)===!0){let Q=D.__offset,B=Array.isArray(D.value)?D.value:[D.value],$=0;for(let Y=0;Y<B.length;Y++){let K=B[Y],ne=l(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,Q+$,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,$),$+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)})(h),a[h.id]=b)},dispose:function(){for(let h in r)n.deleteBuffer(r[h]);s=[],r={},a={}}}}var Vr=class{constructor(e={}){let t,i,r,a,s,o,l,c,h,d,u,p,v,m,g,f,x,b,A,y,C,U,L,J,G,{canvas:q=(function(){let T=Fi("canvas");return T.style.display="block",T})(),context:ae=null,depth:D=!0,stencil:Q=!0,alpha:B=!1,antialias:$=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:K=!1,powerPreference:ne="default",failIfMajorPerformanceCaveat:he=!1}=e;this.isWebGLRenderer=!0,t=ae!==null?ae.getContextAttributes().alpha:B;let j=new Uint32Array(4),F=new Int32Array(4),oe=null,ie=null,S=[],_=[];this.domElement=q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let R=this,z=!1,O=0,I=0,ue=null,te=-1,E=null,k=new dt,re=new dt,ye=null,Z=new ke(0),Re=0,ge=q.width,me=q.height,Me=1,be=null,we=null,ve=new dt(0,0,ge,me),Ye=new dt(0,0,ge,me),Be=!1,xe=new ki,Fe=!1,lt=!1,Te=null,Ve=new ct,Ge=new qe,xt=new H,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Et(){return ue===null?Me:1}let V=ae;function Pt(T,N){for(let M=0;M<T.length;M++){let w=T[M],P=q.getContext(w,N);if(P!==null)return P}return null}try{if("setAttribute"in q&&q.setAttribute("data-engine","three.js r162"),q.addEventListener("webglcontextlost",et,!1),q.addEventListener("webglcontextrestored",an,!1),q.addEventListener("webglcontextcreationerror",at,!1),V===null){let T=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&T.shift(),V=Pt(T,{alpha:!0,depth:D,stencil:Q,antialias:$,premultipliedAlpha:Y,preserveDrawingBuffer:K,powerPreference:ne,failIfMajorPerformanceCaveat:he}),V===null)throw Pt(T)?Error("Error creating WebGL context with your selected attributes."):Error("Error creating WebGL context.")}"u">typeof WebGLRenderingContext&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}function zt(){i=new Hl(V),r=new Fl(V,i,e),i.init(r),L=new Qc(V,i,r),a=new Zc(V,i,r),s=new Wl(V),o=new kc,l=new $c(V,i,a,o,r,L,s),c=new zl(R),h=new Gl(R),d=new Ul(V,r),J=new Il(V,i,d,r),u=new kl(V,d,s,J),p=new ql(V,u,d,s),y=new Yl(V,r,l),x=new Bl(o),v=new Hc(R,c,h,i,r,J,x),m=new rh(R,o),g=new Wc,f=new Kc(i,r),A=new Nl(R,c,h,a,p,t,Y),b=new Jc(R,p,r),G=new ah(V,s,r,a),C=new Ol(V,i,s,r),U=new Vl(V,i,s,r),s.programs=v.programs,R.capabilities=r,R.extensions=i,R.properties=o,R.renderLists=g,R.shadowMap=b,R.state=a,R.info=s}zt();let Ze=new rs(R,V);function et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function an(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;let T=s.autoReset,N=b.enabled,M=b.autoUpdate,w=b.needsUpdate,P=b.type;zt(),s.autoReset=T,b.enabled=N,b.autoUpdate=M,b.needsUpdate=w,b.type=P}function at(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ct(T){var N,M;let w,P=T.target;P.removeEventListener("dispose",Ct),M=N=P,(w=o.get(M).programs)!==void 0&&(w.forEach(function(X){v.releaseProgram(X)}),M.isShaderMaterial&&v.releaseShaderCache(M)),o.remove(N)}function W(T,N,M){T.transparent===!0&&T.side===2&&T.forceSinglePass===!1?(T.side=1,T.needsUpdate=!0,nt(T,N,M),T.side=0,T.needsUpdate=!0,nt(T,N,M),T.side=2):nt(T,N,M)}this.xr=Ze,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let T=i.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=i.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(T){T!==void 0&&(Me=T,this.setSize(ge,me,!1))},this.getSize=function(T){return T.set(ge,me)},this.setSize=function(T,N,M=!0){Ze.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ge=T,me=N,q.width=Math.floor(T*Me),q.height=Math.floor(N*Me),M===!0&&(q.style.width=T+"px",q.style.height=N+"px"),this.setViewport(0,0,T,N))},this.getDrawingBufferSize=function(T){return T.set(ge*Me,me*Me).floor()},this.setDrawingBufferSize=function(T,N,M){ge=T,me=N,Me=M,q.width=Math.floor(T*M),q.height=Math.floor(N*M),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(ve)},this.setViewport=function(T,N,M,w){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,N,M,w),a.viewport(k.copy(ve).multiplyScalar(Me).round())},this.getScissor=function(T){return T.copy(Ye)},this.setScissor=function(T,N,M,w){T.isVector4?Ye.set(T.x,T.y,T.z,T.w):Ye.set(T,N,M,w),a.scissor(re.copy(Ye).multiplyScalar(Me).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(T){a.setScissorTest(Be=T)},this.setOpaqueSort=function(T){be=T},this.setTransparentSort=function(T){we=T},this.getClearColor=function(T){return T.copy(A.getClearColor())},this.setClearColor=function(){A.setClearColor.apply(A,arguments)},this.getClearAlpha=function(){return A.getClearAlpha()},this.setClearAlpha=function(){A.setClearAlpha.apply(A,arguments)},this.clear=function(T=!0,N=!0,M=!0){let w=0;if(T){let P=!1;if(ue!==null){let X=ue.texture.format;P=X===1033||X===1031||X===1029}if(P){let X=ue.texture.type,ce=X===1009||X===1014||X===1012||X===1020||X===1017||X===1018,de=A.getClearColor(),Ee=A.getClearAlpha(),fe=de.r,le=de.g,se=de.b;ce?(j[0]=fe,j[1]=le,j[2]=se,j[3]=Ee,V.clearBufferuiv(V.COLOR,0,j)):(F[0]=fe,F[1]=le,F[2]=se,F[3]=Ee,V.clearBufferiv(V.COLOR,0,F))}else w|=V.COLOR_BUFFER_BIT}N&&(w|=V.DEPTH_BUFFER_BIT),M&&(w|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(w)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){q.removeEventListener("webglcontextlost",et,!1),q.removeEventListener("webglcontextrestored",an,!1),q.removeEventListener("webglcontextcreationerror",at,!1),g.dispose(),f.dispose(),o.dispose(),c.dispose(),h.dispose(),p.dispose(),J.dispose(),G.dispose(),v.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",_e),Ze.removeEventListener("sessionend",Ue),Te&&(Te.dispose(),Te=null),Le.stop()},this.renderBufferDirect=function(T,N,M,w,P,X){let ce;N===null&&(N=Bt);let de=P.isMesh&&0>P.matrixWorld.determinant(),Ee=(function(We,mt,ht,Pe,Ie){var vt,Tt;mt.isScene!==!0&&(mt=Bt),l.resetTextureUnits();let Rn=mt.fog,Jt=Pe.isMeshStandardMaterial?mt.environment:null,Ei=ue===null?R.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:wn,gn=(Pe.isMeshStandardMaterial?h:c).get(Pe.envMap||Jt),ua=Pe.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,kn=!!ht.attributes.tangent&&(!!Pe.normalMap||Pe.anisotropy>0),da=!!ht.morphAttributes.position,Qi=!!ht.morphAttributes.normal,pa=!!ht.morphAttributes.color,Pn=0;Pe.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Pn=R.toneMapping);let er=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,fa=er!==void 0?er.length:0,He=o.get(Pe),ma=ie.state.lights;if(Fe===!0&&(lt===!0||We!==E)){let bt=We===E&&Pe.id===te;x.setState(Pe,We,bt)}let Lt=!1;Pe.version===He.__version?He.needsLights&&He.lightsStateVersion!==ma.state.version||He.outputColorSpace!==Ei||Ie.isBatchedMesh&&He.batching===!1?Lt=!0:Ie.isBatchedMesh||He.batching!==!0?Ie.isInstancedMesh&&He.instancing===!1?Lt=!0:Ie.isInstancedMesh||He.instancing!==!0?Ie.isSkinnedMesh&&He.skinning===!1?Lt=!0:Ie.isSkinnedMesh||He.skinning!==!0?(Ie.isInstancedMesh&&He.instancingColor===!0&&Ie.instanceColor===null||Ie.isInstancedMesh&&He.instancingColor===!1&&Ie.instanceColor!==null||Ie.isInstancedMesh&&He.instancingMorph===!0&&Ie.morphTexture===null||Ie.isInstancedMesh&&He.instancingMorph===!1&&Ie.morphTexture!==null||He.envMap!==gn||Pe.fog===!0&&He.fog!==Rn||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==x.numPlanes||He.numIntersection!==x.numIntersection)||He.vertexAlphas!==ua||He.vertexTangents!==kn||He.morphTargets!==da||He.morphNormals!==Qi||He.morphColors!==pa||He.toneMapping!==Pn||r.isWebGL2===!0&&He.morphTargetsCount!==fa)&&(Lt=!0):Lt=!0:Lt=!0:Lt=!0:(Lt=!0,He.__version=Pe.version);let Zt=He.currentProgram;Lt===!0&&(Zt=nt(Pe,mt,Ie));let Ti=!1,Cn=!1,bi=!1,gt=Zt.getUniforms(),sn=He.uniforms;if(a.useProgram(Zt.program)&&(Ti=!0,Cn=!0,bi=!0),Pe.id!==te&&(te=Pe.id,Cn=!0),Ti||E!==We){gt.setValue(V,"projectionMatrix",We.projectionMatrix),gt.setValue(V,"viewMatrix",We.matrixWorldInverse);let bt=gt.map.cameraPosition;bt!==void 0&&bt.setValue(V,xt.setFromMatrixPosition(We.matrixWorld)),r.logarithmicDepthBuffer&&gt.setValue(V,"logDepthBufFC",2/(Math.log(We.far+1)/Math.LN2)),(Pe.isMeshPhongMaterial||Pe.isMeshToonMaterial||Pe.isMeshLambertMaterial||Pe.isMeshBasicMaterial||Pe.isMeshStandardMaterial||Pe.isShaderMaterial)&&gt.setValue(V,"isOrthographic",We.isOrthographicCamera===!0),E!==We&&(E=We,Cn=!0,bi=!0)}if(Ie.isSkinnedMesh){gt.setOptional(V,Ie,"bindMatrix"),gt.setOptional(V,Ie,"bindMatrixInverse");let bt=Ie.skeleton;bt&&(r.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),gt.setValue(V,"boneTexture",bt.boneTexture,l)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Ie.isBatchedMesh&&(gt.setOptional(V,Ie,"batchingTexture"),gt.setValue(V,"batchingTexture",Ie._matricesTexture,l));let Vn=ht.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0&&r.isWebGL2===!0)&&y.update(Ie,ht,Zt),(Cn||He.receiveShadow!==Ie.receiveShadow)&&(He.receiveShadow=Ie.receiveShadow,gt.setValue(V,"receiveShadow",Ie.receiveShadow)),Pe.isMeshGouraudMaterial&&Pe.envMap!==null&&(sn.envMap.value=gn,sn.flipEnvMap.value=gn.isCubeTexture&&gn.isRenderTargetTexture===!1?-1:1),Cn&&(gt.setValue(V,"toneMappingExposure",R.toneMappingExposure),He.needsLights&&(vt=sn,Tt=bi,vt.ambientLightColor.needsUpdate=Tt,vt.lightProbe.needsUpdate=Tt,vt.directionalLights.needsUpdate=Tt,vt.directionalLightShadows.needsUpdate=Tt,vt.pointLights.needsUpdate=Tt,vt.pointLightShadows.needsUpdate=Tt,vt.spotLights.needsUpdate=Tt,vt.spotLightShadows.needsUpdate=Tt,vt.rectAreaLights.needsUpdate=Tt,vt.hemisphereLights.needsUpdate=Tt),Rn&&Pe.fog===!0&&m.refreshFogUniforms(sn,Rn),m.refreshMaterialUniforms(sn,Pe,Me,me,Te),hi.upload(V,Je(He),sn,l)),Pe.isShaderMaterial&&Pe.uniformsNeedUpdate===!0&&(hi.upload(V,Je(He),sn,l),Pe.uniformsNeedUpdate=!1),Pe.isSpriteMaterial&&gt.setValue(V,"center",Ie.center),gt.setValue(V,"modelViewMatrix",Ie.modelViewMatrix),gt.setValue(V,"normalMatrix",Ie.normalMatrix),gt.setValue(V,"modelMatrix",Ie.matrixWorld),Pe.isShaderMaterial||Pe.isRawShaderMaterial){let bt=Pe.uniformsGroups;for(let _n=0,Wn=bt.length;_n<Wn;_n++)if(r.isWebGL2){let Xn=bt[_n];G.update(Xn,Zt),G.bind(Xn,Zt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zt})(T,N,M,w,P);a.setMaterial(w,de);let fe=M.index,le=1;if(w.wireframe===!0){if((fe=u.getWireframeAttribute(M))===void 0)return;le=2}let se=M.drawRange,Se=M.attributes.position,Ce=se.start*le,Ae=(se.start+se.count)*le;X!==null&&(Ce=Math.max(Ce,X.start*le),Ae=Math.min(Ae,(X.start+X.count)*le)),fe!==null?(Ce=Math.max(Ce,0),Ae=Math.min(Ae,fe.count)):Se!=null&&(Ce=Math.max(Ce,0),Ae=Math.min(Ae,Se.count));let it=Ae-Ce;if(it<0||it===1/0)return;J.setup(P,w,Ee,M,fe);let Qe=C;if(fe!==null&&(ce=d.get(fe),(Qe=U).setIndex(ce)),P.isMesh)w.wireframe===!0?(a.setLineWidth(w.wireframeLinewidth*Et()),Qe.setMode(V.LINES)):Qe.setMode(V.TRIANGLES);else if(P.isLine){let We=w.linewidth;We===void 0&&(We=1),a.setLineWidth(We*Et()),P.isLineSegments?Qe.setMode(V.LINES):P.isLineLoop?Qe.setMode(V.LINE_LOOP):Qe.setMode(V.LINE_STRIP)}else P.isPoints?Qe.setMode(V.POINTS):P.isSprite&&Qe.setMode(V.TRIANGLES);if(P.isBatchedMesh)Qe.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else if(P.isInstancedMesh)Qe.renderInstances(Ce,it,P.count);else if(M.isInstancedBufferGeometry){let We=M._maxInstanceCount!==void 0?M._maxInstanceCount:1/0,mt=Math.min(M.instanceCount,We);Qe.renderInstances(Ce,it,mt)}else Qe.render(Ce,it)},this.compile=function(T,N,M=null){M===null&&(M=T),(ie=f.get(M)).init(),_.push(ie),M.traverseVisible(function(P){P.isLight&&P.layers.test(N.layers)&&(ie.pushLight(P),P.castShadow&&ie.pushShadow(P))}),T!==M&&T.traverseVisible(function(P){P.isLight&&P.layers.test(N.layers)&&(ie.pushLight(P),P.castShadow&&ie.pushShadow(P))}),ie.setupLights(R._useLegacyLights);let w=new Set;return T.traverse(function(P){let X=P.material;if(X)if(Array.isArray(X))for(let ce=0;ce<X.length;ce++){let de=X[ce];W(de,M,P),w.add(de)}else W(X,M,P),w.add(X)}),_.pop(),ie=null,w},this.compileAsync=function(T,N,M=null){let w=this.compile(T,N,M);return new Promise(P=>{function X(){w.forEach(function(ce){o.get(ce).currentProgram.isReady()&&w.delete(ce)}),w.size===0?P(T):setTimeout(X,10)}i.get("KHR_parallel_shader_compile")!==null?X():setTimeout(X,10)})};let ee=null;function _e(){Le.stop()}function Ue(){Le.start()}let Le=new Do;function ze(T,N,M,w){let P=T.opaque,X=T.transmissive,ce=T.transparent;ie.setupLightsView(M),Fe===!0&&x.setGlobalState(R.clippingPlanes,M),X.length>0&&(function(de,Ee,fe,le){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;let se=r.isWebGL2;Te===null&&(Te=new tn(1,1,{generateMipmaps:!0,type:i.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:4*!!se})),R.getDrawingBufferSize(Ge),se?Te.setSize(Ge.x,Ge.y):Te.setSize(Lr(Ge.x),Lr(Ge.y));let Se=R.getRenderTarget();R.setRenderTarget(Te),R.getClearColor(Z),(Re=R.getClearAlpha())<1&&R.setClearColor(16777215,.5),R.clear();let Ce=R.toneMapping;R.toneMapping=0,De(de,fe,le),l.updateMultisampleRenderTarget(Te),l.updateRenderTargetMipmap(Te);let Ae=!1;for(let it=0,Qe=Ee.length;it<Qe;it++){let We=Ee[it],mt=We.object,ht=We.geometry,Pe=We.material,Ie=We.group;if(Pe.side===2&&mt.layers.test(le.layers)){let vt=Pe.side;Pe.side=1,Pe.needsUpdate=!0,Ke(mt,fe,le,ht,Pe,Ie),Pe.side=vt,Pe.needsUpdate=!0,Ae=!0}}Ae===!0&&(l.updateMultisampleRenderTarget(Te),l.updateRenderTargetMipmap(Te)),R.setRenderTarget(Se),R.setClearColor(Z,Re),R.toneMapping=Ce})(P,X,N,M),w&&a.viewport(k.copy(w)),P.length>0&&De(P,N,M),X.length>0&&De(X,N,M),ce.length>0&&De(ce,N,M),a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),a.setPolygonOffset(!1)}function De(T,N,M){let w=N.isScene===!0?N.overrideMaterial:null;for(let P=0,X=T.length;P<X;P++){let ce=T[P],de=ce.object,Ee=ce.geometry,fe=w===null?ce.material:w,le=ce.group;de.layers.test(M.layers)&&Ke(de,N,M,Ee,fe,le)}}function Ke(T,N,M,w,P,X){T.onBeforeRender(R,N,M,w,P,X),T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),P.onBeforeRender(R,N,M,w,T,X),P.transparent===!0&&P.side===2&&P.forceSinglePass===!1?(P.side=1,P.needsUpdate=!0,R.renderBufferDirect(M,N,w,P,T,X),P.side=0,P.needsUpdate=!0,R.renderBufferDirect(M,N,w,P,T,X),P.side=2):R.renderBufferDirect(M,N,w,P,T,X),T.onAfterRender(R,N,M,w,P,X)}function nt(T,N,M){var w;N.isScene!==!0&&(N=Bt);let P=o.get(T),X=ie.state.lights,ce=ie.state.shadowsArray,de=X.state.version,Ee=v.getParameters(T,X.state,ce,N,M),fe=v.getProgramCacheKey(Ee),le=P.programs;P.environment=T.isMeshStandardMaterial?N.environment:null,P.fog=N.fog,P.envMap=(T.isMeshStandardMaterial?h:c).get(T.envMap||P.environment),P.envMapRotation=P.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,le===void 0&&(T.addEventListener("dispose",Ct),P.programs=le=new Map);let se=le.get(fe);if(se!==void 0){if(P.currentProgram===se&&P.lightsStateVersion===de)return $e(T,Ee),se}else Ee.uniforms=v.getUniforms(T),T.onBuild(M,Ee,R),T.onBeforeCompile(Ee,R),se=v.acquireProgram(Ee,fe),le.set(fe,se),P.uniforms=Ee.uniforms;let Se=P.uniforms;return(T.isShaderMaterial||T.isRawShaderMaterial)&&T.clipping!==!0||(Se.clippingPlanes=x.uniform),$e(T,Ee),P.needsLights=(w=T).isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0,P.lightsStateVersion=de,P.needsLights&&(Se.ambientLightColor.value=X.state.ambient,Se.lightProbe.value=X.state.probe,Se.directionalLights.value=X.state.directional,Se.directionalLightShadows.value=X.state.directionalShadow,Se.spotLights.value=X.state.spot,Se.spotLightShadows.value=X.state.spotShadow,Se.rectAreaLights.value=X.state.rectArea,Se.ltc_1.value=X.state.rectAreaLTC1,Se.ltc_2.value=X.state.rectAreaLTC2,Se.pointLights.value=X.state.point,Se.pointLightShadows.value=X.state.pointShadow,Se.hemisphereLights.value=X.state.hemi,Se.directionalShadowMap.value=X.state.directionalShadowMap,Se.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Se.spotShadowMap.value=X.state.spotShadowMap,Se.spotLightMatrix.value=X.state.spotLightMatrix,Se.spotLightMap.value=X.state.spotLightMap,Se.pointShadowMap.value=X.state.pointShadowMap,Se.pointShadowMatrix.value=X.state.pointShadowMatrix),P.currentProgram=se,P.uniformsList=null,se}function Je(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=hi.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function $e(T,N){let M=o.get(T);M.outputColorSpace=N.outputColorSpace,M.batching=N.batching,M.instancing=N.instancing,M.instancingColor=N.instancingColor,M.instancingMorph=N.instancingMorph,M.skinning=N.skinning,M.morphTargets=N.morphTargets,M.morphNormals=N.morphNormals,M.morphColors=N.morphColors,M.morphTargetsCount=N.morphTargetsCount,M.numClippingPlanes=N.numClippingPlanes,M.numIntersection=N.numClipIntersection,M.vertexAlphas=N.vertexAlphas,M.vertexTangents=N.vertexTangents,M.toneMapping=N.toneMapping}Le.setAnimationLoop(function(T){ee&&ee(T)}),"u">typeof self&&Le.setContext(self),this.setAnimationLoop=function(T){ee=T,Ze.setAnimationLoop(T),T===null?Le.stop():Le.start()},Ze.addEventListener("sessionstart",_e),Ze.addEventListener("sessionend",Ue),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(z===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(N),N=Ze.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,N,ue),(ie=f.get(T,_.length)).init(),_.push(ie),Ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),xe.setFromProjectionMatrix(Ve),lt=this.localClippingEnabled,Fe=x.init(this.clippingPlanes,lt),(oe=g.get(T,S.length)).init(),S.push(oe),(function w(P,X,ce,de){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)ce=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)ie.pushLight(P),P.castShadow&&ie.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||xe.intersectsSprite(P)){de&&xt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ve);let fe=p.update(P),le=P.material;le.visible&&oe.push(P,fe,le,ce,xt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||xe.intersectsObject(P))){let fe=p.update(P),le=P.material;if(de&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),xt.copy(P.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),xt.copy(fe.boundingSphere.center)),xt.applyMatrix4(P.matrixWorld).applyMatrix4(Ve)),Array.isArray(le)){let se=fe.groups;for(let Se=0,Ce=se.length;Se<Ce;Se++){let Ae=se[Se],it=le[Ae.materialIndex];it&&it.visible&&oe.push(P,fe,it,ce,xt.z,Ae)}}else le.visible&&oe.push(P,fe,le,ce,xt.z,null)}}let Ee=P.children;for(let fe=0,le=Ee.length;fe<le;fe++)w(Ee[fe],X,ce,de)})(T,N,0,R.sortObjects),oe.finish(),R.sortObjects===!0&&oe.sort(be,we),this.info.render.frame++,Fe===!0&&x.beginShadows();let M=ie.state.shadowsArray;if(b.render(M,T,N),Fe===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1)&&A.render(oe,T),ie.setupLights(R._useLegacyLights),N.isArrayCamera){let w=N.cameras;for(let P=0,X=w.length;P<X;P++){let ce=w[P];ze(oe,T,ce,ce.viewport)}}else ze(oe,T,N);ue!==null&&(l.updateMultisampleRenderTarget(ue),l.updateRenderTargetMipmap(ue)),T.isScene===!0&&T.onAfterRender(R,T,N),J.resetDefaultState(),te=-1,E=null,_.pop(),ie=_.length>0?_[_.length-1]:null,S.pop(),oe=S.length>0?S[S.length-1]:null},this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(T,N,M){o.get(T.texture).__webglTexture=N,o.get(T.depthTexture).__webglTexture=M;let w=o.get(T);w.__hasExternalTextures=!0,w.__autoAllocateDepthBuffer=M===void 0,w.__autoAllocateDepthBuffer||i.has("WEBGL_multisampled_render_to_texture")!==!0||(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),w.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){let M=o.get(T);M.__webglFramebuffer=N,M.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,M=0){ue=T,O=N,I=M;let w=!0,P=null,X=!1,ce=!1;if(T){let de=o.get(T);de.__useDefaultFramebuffer!==void 0?(a.bindFramebuffer(V.FRAMEBUFFER,null),w=!1):de.__webglFramebuffer===void 0?l.setupRenderTarget(T):de.__hasExternalTextures&&l.rebindTextures(T,o.get(T.texture).__webglTexture,o.get(T.depthTexture).__webglTexture);let Ee=T.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ce=!0);let fe=o.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(P=Array.isArray(fe[N])?fe[N][M]:fe[N],X=!0):P=r.isWebGL2&&T.samples>0&&l.useMultisampledRTT(T)===!1?o.get(T).__webglMultisampledFramebuffer:Array.isArray(fe)?fe[M]:fe,k.copy(T.viewport),re.copy(T.scissor),ye=T.scissorTest}else k.copy(ve).multiplyScalar(Me).floor(),re.copy(Ye).multiplyScalar(Me).floor(),ye=Be;if(a.bindFramebuffer(V.FRAMEBUFFER,P)&&r.drawBuffers&&w&&a.drawBuffers(T,P),a.viewport(k),a.scissor(re),a.setScissorTest(ye),X){let de=o.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,M)}else if(ce){let de=o.get(T.texture);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,de.__webglTexture,M||0,N||0)}te=-1},this.readRenderTargetPixels=function(T,N,M,w,P,X,ce){if(!(T&&T.isWebGLRenderTarget))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=o.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de){a.bindFramebuffer(V.FRAMEBUFFER,de);try{let Ee=T.texture,fe=Ee.format,le=Ee.type;if(fe!==1023&&L.convert(fe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let se=le===1016&&(i.has("EXT_color_buffer_half_float")||r.isWebGL2&&i.has("EXT_color_buffer_float"));if(le!==1009&&L.convert(le)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(le===1015&&(r.isWebGL2||i.has("OES_texture_float")||i.has("WEBGL_color_buffer_float")))&&!se)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");N>=0&&N<=T.width-w&&M>=0&&M<=T.height-P&&V.readPixels(N,M,w,P,L.convert(fe),L.convert(le),X)}finally{let Ee=ue!==null?o.get(ue).__webglFramebuffer:null;a.bindFramebuffer(V.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(T,N,M=0){let w=Math.pow(2,-M),P=Math.floor(N.image.width*w),X=Math.floor(N.image.height*w);l.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,M,0,0,T.x,T.y,P,X),a.unbindTexture()},this.copyTextureToTexture=function(T,N,M,w=0){let P=N.image.width,X=N.image.height,ce=L.convert(M.format),de=L.convert(M.type);l.setTexture2D(M,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,M.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,M.unpackAlignment),N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,w,T.x,T.y,P,X,ce,de,N.image.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,w,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,ce,N.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,w,T.x,T.y,ce,de,N.image),w===0&&M.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),a.unbindTexture()},this.copyTextureToTexture3D=function(T,N,M,w,P=0){let X;if(R.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let ce=Math.round(T.max.x-T.min.x),de=Math.round(T.max.y-T.min.y),Ee=T.max.z-T.min.z+1,fe=L.convert(w.format),le=L.convert(w.type);if(w.isData3DTexture)l.setTexture3D(w,0),X=V.TEXTURE_3D;else{if(!w.isDataArrayTexture&&!w.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");l.setTexture2DArray(w,0),X=V.TEXTURE_2D_ARRAY}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,w.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,w.unpackAlignment);let se=V.getParameter(V.UNPACK_ROW_LENGTH),Se=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ce=V.getParameter(V.UNPACK_SKIP_PIXELS),Ae=V.getParameter(V.UNPACK_SKIP_ROWS),it=V.getParameter(V.UNPACK_SKIP_IMAGES),Qe=M.isCompressedTexture?M.mipmaps[P]:M.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Qe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Qe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,T.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,T.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,T.min.z),M.isDataTexture||M.isData3DTexture?V.texSubImage3D(X,P,N.x,N.y,N.z,ce,de,Ee,fe,le,Qe.data):w.isCompressedArrayTexture?V.compressedTexSubImage3D(X,P,N.x,N.y,N.z,ce,de,Ee,fe,Qe.data):V.texSubImage3D(X,P,N.x,N.y,N.z,ce,de,Ee,fe,le,Qe),V.pixelStorei(V.UNPACK_ROW_LENGTH,se),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Se),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ce),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ae),V.pixelStorei(V.UNPACK_SKIP_IMAGES,it),P===0&&w.generateMipmaps&&V.generateMipmap(X),a.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?l.setTextureCube(T,0):T.isData3DTexture?l.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?l.setTexture2DArray(T,0):l.setTexture2D(T,0),a.unbindTexture()},this.resetState=function(){O=0,I=0,ue=null,a.reset(),J.reset()},"u">typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ms?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Xr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}};(class extends Vr{}).prototype.isWebGL1Renderer=!0;var as=class extends pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Eo=new ct,ss=new Bi,wr=new ui,Ar=new H;function To(n,e,t,i,r,a,s){let o=ss.distanceSqToPoint(n);if(o<t){let l=new H;ss.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}function _s(){let n=0,e=0,t=0,i=0;function r(a,s,o,l){n=a,e=o,t=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){r(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,h,d){let u=(s-a)/c-(o-a)/(c+h)+(o-s)/h,p=(o-s)/h-(l-s)/(h+d)+(l-o)/d;r(s,o,u*=h,p*=h)},calc:function(a){let s=a*a;return n+e*a+t*s+s*a*i}}}var Sh=new H,yh=new _s,Eh=new _s,Th=new _s;function Rr(n,e,t){return n&&(t||n.constructor!==e)?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}var pi=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];n:{e:{let s;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=r,e<(r=t[++i]))break e}s=t.length;break t}if(!(e>=a)){let o=t[1];e<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=a,e>=(a=t[--i-1]))break e}s=i,i=0;break t}break n}for(;i<s;){let o=i+s>>>1;e<t[o]?s=o:i=o+1}if(r=t[i],(a=t[i-1])===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=i[a+s];return t}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}},os=class extends pi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,s=e+1,o=r[a],l=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:a=e,o=2*t-i;break;case 2402:a=r.length-2,o=t+r[a]-r[a+1];break;default:a=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:s=e,l=2*i-t;break;case 2402:s=1,l=i+r[1]-r[0];break;default:s=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,v=(i-t)/(r-t),m=v*v,g=m*v,f=-u*g+2*u*m-u*v,x=(1+u)*g+(-1.5-2*u)*m+(-.5+u)*v+1,b=(-1-p)*g+(1.5+p)*m+.5*v,A=p*g-p*m;for(let y=0;y!==o;++y)a[y]=f*s[h+y]+x*s[c+y]+b*s[l+y]+A*s[d+y];return a}},ls=class extends pi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),d=1-h;for(let u=0;u!==o;++u)a[u]=s[c+u]*d+s[l+u]*h;return a}},cs=class extends pi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Yt=class{constructor(e,t,i,r){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rr(t,this.TimeBufferType),this.values=Rr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t,i=e.constructor;if(i.toJSON!==this.toJSON)t=i.toJSON(e);else{t={name:e.name,times:Rr(e.times,Array),values:Rr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(t.interpolation=r)}return t.type=e.ValueTypeName,t}InterpolantFactoryMethodDiscrete(e){return new cs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ls(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new os(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(a=(s=Math.max(s,1))-1);let o=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){var e;let t=!0,i=this.getValueSize();i-Math.floor(i)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let r=this.times,a=this.values,s=r.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let l=0;l!==s;l++){let c=r[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,o),t=!1;break}o=c}if(a!==void 0&&ArrayBuffer.isView(e=a)&&!(e instanceof DataView))for(let l=0,c=a.length;l!==c;++l){let h=a[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===2302,a=e.length-1,s=1;for(let o=1;o<a;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let v=t[h+p];if(v!==t[d+p]||v!==t[u+p]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];let h=o*i,d=s*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++s}}if(a>0){e[s]=e[a];for(let o=a*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Yt.prototype.TimeBufferType=Float32Array,Yt.prototype.ValueBufferType=Float32Array,Yt.prototype.DefaultInterpolation=2301;var Bn=class extends Yt{};Bn.prototype.ValueTypeName="bool",Bn.prototype.ValueBufferType=Array,Bn.prototype.DefaultInterpolation=2300,Bn.prototype.InterpolantFactoryMethodLinear=void 0,Bn.prototype.InterpolantFactoryMethodSmooth=void 0,class extends Yt{}.prototype.ValueTypeName="color",class extends Yt{}.prototype.ValueTypeName="number";var hs=class extends pi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)bn.slerpFlat(a,0,s,c-o,s,c,l);return a}},Ii=class extends Yt{InterpolantFactoryMethodLinear(e){return new hs(this.times,this.values,this.getValueSize(),e)}};Ii.prototype.ValueTypeName="quaternion",Ii.prototype.DefaultInterpolation=2301,Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var zn=class extends Yt{};zn.prototype.ValueTypeName="string",zn.prototype.ValueBufferType=Array,zn.prototype.DefaultInterpolation=2300,zn.prototype.InterpolantFactoryMethodLinear=void 0,zn.prototype.InterpolantFactoryMethodSmooth=void 0,class extends Yt{}.prototype.ValueTypeName="vector";var bo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},sh=new class{constructor(n,e,t){let i,r=this,a=!1,s=0,o=0,l=[];this.onStart=void 0,this.onLoad=n,this.onProgress=e,this.onError=t,this.itemStart=function(c){o++,a===!1&&r.onStart!==void 0&&r.onStart(c,s,o),a=!0},this.itemEnd=function(c){s++,r.onProgress!==void 0&&r.onProgress(c,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return i?i(c):c},this.setURLModifier=function(c){return i=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],p=l[h+1];if(u.global&&(u.lastIndex=0),u.test(c))return p}return null}}},Wi=class{constructor(e){this.manager=e!==void 0?e:sh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Wi.DEFAULT_MATERIAL_NAME="__DEFAULT";var us=class extends Wi{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=bo.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;let o=Fi("img");function l(){h(),bo.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(d){h(),r&&r(d),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}},Wr=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ka=new ct,wo=new H,Ao=new H,ds=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ki,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;wo.setFromMatrixPosition(e.matrixWorld),t.position.copy(wo),Ao.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ao),t.updateMatrixWorld(),ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ps=class extends ds{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vs="\\[\\]\\.:\\/",oh=RegExp("["+vs+"]","g"),Va="[^"+vs+"]",lh="[^"+vs.replace("\\.","")+"]",ch=RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Va)+/(WCOD+)?/.source.replace("WCOD",lh)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Va)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Va)+"$"),hh=["material","materials","bones","map"],st=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oh,"")}static parseTrackName(e){let t=ch.exec(e);if(t===null)throw Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=i.nodeName.substring(r+1);hh.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,a=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let s=e[r];if(s===void 0)return void console.error("THREE.PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=class{constructor(n,e,t){let i=t||st.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray],st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],new Float32Array(1);var Ro=new ct;function Po(n,e){return n.distance-e.distance}function fs(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let r=n.children;for(let a=0,s=r.length;a<s;a++)fs(r[a],e,t,!0)}}"u">typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"162"}})),"u">typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="162"),Object.assign(Xe,{BufferAttribute:Ot,BufferGeometry:fn,Camera:Hi,DataTexture:class extends Rt{constructor(n=null,e=1,t=1,i,r,a,s,o,l=1003,c=1003,h,d){super(null,a,s,o,l,c,i,r,h,d),this.isDataTexture=!0,this.image={data:n,width:e,height:t},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},DirectionalLight:class extends Wr{constructor(n,e){super(n,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new ps}dispose(){this.shadow.dispose()}copy(n){return super.copy(n),this.target=n.target.clone(),this.shadow=n.shadow.clone(),this}},DoubleSide:2,FloatType:1015,Group:Gn,HemisphereLight:class extends Wr{constructor(n,e,t){super(n,t),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(e)}copy(n,e){return super.copy(n,e),this.groundColor.copy(n.groundColor),this}},MathUtils:{DEG2RAD:Ui,RAD2DEG:Oi,generateUUID:fi,clamp:At,euclideanModulo:Wa,mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:Di,damp:function(n,e,t,i){return Di(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(Wa(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(Os=n);let e=Os+=1831565813;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*Ui},radToDeg:function(n){return n*Oi},isPowerOfTwo:Xa,ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:Lr,setQuaternionFromProperEuler:function(n,e,t,i,r){let a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),h=s((e+i)/2),d=a((e-i)/2),u=s((e-i)/2),p=a((i-e)/2),v=s((i-e)/2);switch(r){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*v,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*v,o*c);break;case"ZYZ":n.set(l*v,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:wt,denormalize:oi},Mesh:Ht,MeshDepthMaterial:kr,MeshStandardMaterial:class extends pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},NearestFilter:1003,PCFShadowMap:1,PerspectiveCamera:Dt,Plane:$t,PlaneGeometry:Vi,Points:class extends yt{constructor(n=new fn,e=new as){super(),this.isPoints=!0,this.type="Points",this.geometry=n,this.material=e,this.updateMorphTargets()}copy(n,e){return super.copy(n,e),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}raycast(n,e){let t=this.geometry,i=this.matrixWorld,r=n.params.Points.threshold,a=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere),wr.applyMatrix4(i),wr.radius+=r,n.ray.intersectsSphere(wr)===!1)return;Eo.copy(i).invert(),ss.copy(n.ray).applyMatrix4(Eo);let s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=t.index,c=t.attributes.position;if(l!==null){let h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let u=h;u<d;u++){let p=l.getX(u);Ar.fromBufferAttribute(c,p),To(Ar,p,o,i,n,e,this)}}else{let h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let u=h;u<d;u++)Ar.fromBufferAttribute(c,u),To(Ar,u,o,i,n,e,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,e=Object.keys(n);if(e.length>0){let t=n[e[0]];if(t!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++){let a=t[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}},RGBADepthPacking:3201,Raycaster:class{constructor(n,e,t=0,i=1/0){this.ray=new Bi(n,e),this.near=t,this.far=i,this.camera=null,this.layers=new zi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(n,e){this.ray.set(n,e)}setFromCamera(n,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(n.x,n.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(n.x,n.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(n){return Ro.identity().extractRotation(n.matrixWorld),this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ro),this}intersectObject(n,e=!0,t=[]){return fs(n,this,t,e),t.sort(Po),t}intersectObjects(n,e=!0,t=[]){for(let i=0,r=n.length;i<r;i++)fs(n[i],this,t,e);return t.sort(Po),t}},RepeatWrapping:1e3,SRGBColorSpace:jt,Scene:class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentRotation=new en,this.overrideMaterial=null,"u">typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,e){return super.copy(n,e),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){let e=super.toJSON(n);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ShaderChunk:Ne,ShaderMaterial:qt,ShadowMaterial:class extends pn{constructor(n){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.fog=n.fog,this}},Texture:Rt,TextureLoader:class extends Wi{constructor(n){super(n)}load(n,e,t,i){let r=new Rt,a=new us(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(n,function(s){r.image=s,r.needsUpdate=!0,e!==void 0&&e(r)},t,i),r}},Vector2:qe,Vector3:H,Vector4:dt,WebGLRenderTarget:tn,WebGLRenderer:Vr});var Xi=Xe.BufferAttribute,zo=Xe.BufferGeometry,Go=Xe.Camera,gi=Xe.DataTexture,Yr=Xe.DirectionalLight,_i=Xe.DoubleSide,Ho=Xe.FloatType,ji=Xe.Group,qr=Xe.HemisphereLight,nn=Xe.MathUtils,Yi=Xe.Mesh,Kr=Xe.MeshDepthMaterial,Jr=Xe.MeshStandardMaterial,xs=Xe.NearestFilter,Zr=Xe.PCFShadowMap,$r=Xe.PerspectiveCamera,Qr=Xe.Plane,qi=Xe.PlaneGeometry,ko=Xe.Points,ea=Xe.RGBADepthPacking,ta=Xe.Raycaster,na=Xe.RepeatWrapping,vi=Xe.SRGBColorSpace,Ki=Xe.Scene,Ms=Xe.ShaderChunk,Vo=Xe.ShaderMaterial,Wo=Xe.ShadowMaterial,ia=Xe.Texture,ra=Xe.TextureLoader,rn=Xe.Vector2,mn=Xe.Vector3,Xo=Xe.Vector4,jo=Xe.WebGLRenderTarget,aa=Xe.WebGLRenderer;var xi=(n,e,t)=>Array.from({length:Math.max(0,e-n)},(i,r)=>n+r).filter(i=>i>=0&&i<t),uh=()=>new Promise(n=>setTimeout(n,0)),sa=function(n){let e,t=new Set,i=new Set,r=n.count,a=n.window,s=!1,o=!1,l=n.window.visible,c=[],h=new Set,d=new Promise(f=>{e=f}),u=n.yieldTask??uh;function p(){for(let f of h)f.sides.some(x=>i.has(x))?(h.delete(f),f.reject(Error("Magazine page failed to load"))):f.sides.every(x=>t.has(x))&&(h.delete(f),f.resolve());n.onProgress?.({visible:a.visible.every(f=>t.has(f)),nextTurn:a.nextTurn.every(f=>t.has(f)),all:t.size===n.count,settled:r===0,loaded:t.size,failed:i.size})}let v=f=>a.visible.includes(f)?"high":a.priority.includes(f)?"auto":"low";async function m(){if(!o){o=!0;try{for(;c.length;){try{await u()}catch(b){for(let A of c.splice(0))n.release?.(A.image),A.reject(b);break}if(!c.length)break;let f=l.map(b=>c.findIndex(A=>A.index===b)).find(b=>b>=0)??0,x=c.splice(f,1)[0];try{n.onEvent?.("upload-start",x.index),n.attach(x.index,x.image),t.add(x.index),n.onEvent?.("upload-end",x.index),x.resolve()}catch(b){n.release?.(x.image),x.reject(b)}}}finally{o=!1}}}async function g(f){try{let x;n.onEvent?.("load-start",f);try{x=await n.load(f,v(f))}catch{if(s||(await u(),s))return;x=await n.load(f,v(f))}if(s)return void n.release?.(x);n.onEvent?.("decode-end",f),await new Promise((b,A)=>{c.push({index:f,image:x,resolve:b,reject:A}),m()})}catch(x){s||(i.add(f),n.onError?.(f,x))}finally{r--,!s&&(p(),r||e())}}return queueMicrotask(()=>{if(!s){p();let f={high:0,auto:1,low:2},x=Array.from({length:n.count},(b,A)=>A);for(let b of(x.sort((A,y)=>f[v(A)]-f[v(y)]),x))g(b);r||e()}}),{done:d,prioritize(f){return l=[...f],this.ensure(f)},isReady:f=>f.every(x=>t.has(x)),ensure:f=>s?Promise.reject(new DOMException("Magazine disposed","AbortError")):f.some(x=>x<0||x>=n.count)?Promise.reject(Error("Invalid magazine page index")):new Promise((x,b)=>{h.add({sides:f,resolve:x,reject:b}),p()}),setWindow(f){a=f,s||p()},dispose(){for(let f of(s=!0,c.splice(0)))n.release?.(f.image),f.resolve();for(let f of h)f.reject(new DOMException("Magazine disposed","AbortError"));h.clear(),e()}}},Ss=function(n,e){return{visible:xi(2*n-1,2*n+1,e),nextTurn:xi(2*n-3,2*n+3,e),priority:xi(2*n-3,2*n+5,e)}},oa=function(n,e,t,i){return new Promise((r,a)=>{let s=new Image;s.decoding="async",s.fetchPriority=e;let o=()=>{clearTimeout(c),s.onload=s.onerror=null,i.removeEventListener("abort",l)},l=()=>{o(),s.removeAttribute("src"),a(new DOMException("Magazine disposed","AbortError"))},c=setTimeout(()=>{o(),s.removeAttribute("src"),a(Error(`Image timed out: ${n}`))},35e3);s.onload=async()=>{t();try{await s.decode(),o(),r(s)}catch(h){o(),a(h)}},s.onerror=()=>{o(),a(Error(`Image failed: ${n}`))},i.addEventListener("abort",l,{once:!0}),i.aborted?l():s.src=n})},qo=function(n,e,t=3){return{visible:xi(n,n+t+1,e),nextTurn:xi(n-1,n+t+2,e),priority:xi(n-1,n+t+3,e)}},la=function(n,e,t,i=!1){return(i?t?[1,0,-1]:[0,-1,1]:t?[2,1,0,3,-1,-2]:[-1,0,1,-2,2,3]).map(r=>n+r).filter(r=>r>=0&&r<e)};var dh=0,ca=function(n,e){let t=`mono-magazine:${e}:${++dh}`,i=new Set;n.dataset.magazinePerformance=t;let r=(a,s)=>{let o=s===void 0?a:`page-${s+1}:${a}`;!i.has(o)&&(i.add(o),performance.mark(`${t}:${o}`),s!==void 0&&a==="decode-end"&&(performance.measure(`${t}:page-${s+1}:load-and-decode`,`${t}:page-${s+1}:load-start`,`${t}:${o}`),i.has(`page-${s+1}:image-loaded`)&&performance.measure(`${t}:page-${s+1}:decode`,`${t}:page-${s+1}:image-loaded`,`${t}:${o}`)),s!==void 0&&a==="image-loaded"&&performance.measure(`${t}:page-${s+1}:download`,`${t}:page-${s+1}:load-start`,`${t}:${o}`),s!==void 0&&a==="upload-end"&&performance.measure(`${t}:page-${s+1}:upload-submission`,`${t}:page-${s+1}:upload-start`,`${t}:${o}`),["scene-initialized","visible-ready","next-turn-ready","all-pages-ready","first-useful-frame"].includes(a)&&performance.measure(`${t}:${a}:elapsed`,`${t}:start`,`${t}:${o}`))};return r("start"),{mark:r,window(a){n.dataset.magazineVisiblePages=a.visible.map(s=>s+1).join(","),n.dataset.magazinePriorityPages=a.priority.map(s=>s+1).join(",")},progress(a){n.dataset.magazineVisibleReady=String(a.visible),n.dataset.magazineNextTurnReady=String(a.nextTurn),n.dataset.magazineAllPagesReady=String(a.all),n.dataset.magazineSettled=String(a.settled),n.dataset.magazineLoadedPages=String(a.loaded),n.dataset.magazineFailedPages=String(a.failed),a.visible&&r("visible-ready"),a.nextTurn&&r("next-turn-ready"),a.all&&r("all-pages-ready")}}};function Zo(n,e,t={}){let i=ca(n,"desktop"),r=new AbortController,a=null,s=!1,o=!1,l=!1,c=!1,h=!1,d=()=>{},u=null,p=null,v=Math.ceil(e.length/2),m={angleMaxDeg:45,curlArc:.88,curlArcJitter:.2,curlAngleJitter:.3,curlTiltJitterDeg:6,cornerRollMax:2.3,directionSmoothTime:.4,settleEpsilon:1e-4,curveSmoothTime:.5},g={progress:.03,smoothTime:2,gapToSheetAbove:.1},f={startTime:.22,firstFlipTime:1.2,fastestFlipTime:.5,speedUpSheets:20,firstGapShare:.15,fastestGapShare:.05,moveSlopPx:40},x={turnFraction:.8,progressSmoothTime:.9,fallTime:1,fallTimeExponent:.5,landingSpeed:.5,commitProgress:.2,clickSlopPx:5},b={flipTime:.85,followArcGainMin:1,followArcGainMax:1.08},A=[],y=[],C=Math.min(Math.max(0,t.initialSpread??7),v),U=[],L=!0,J=0,G=new Ki,q=new $r(40,1.44753,1.5,4.5);q.position.set(0,0,2.99),q.lookAt(0,0,0);let ae=new aa({antialias:!0,alpha:!0});ae.shadowMap.enabled=!0,ae.shadowMap.type=Zr,ae.shadowMap.autoUpdate=!1,ae.shadowMap.needsUpdate=!0;let D=ae.domElement;D.dataset.magazineLayer="",n.dataset.magazineOpeningReady="false",n.appendChild(D);let Q=document.createElement("div");Q.dataset.magazineHitArea="",Q.style.cssText="position:absolute;inset:0 0 0 50%;pointer-events:auto;touch-action:pan-y pinch-zoom",n.appendChild(Q),n.style.setProperty("-webkit-touch-callout","none"),n.style.setProperty("-webkit-user-select","none"),n.style.setProperty("user-select","none");let B=new ji;G.add(B);let $=new qr("#ffffff","#a1aeaf",1.5);B.add($);let Y=new Yr("#ffffff",2);Y.position.set(-3.5,1.3,4.1),Y.castShadow=!0,Y.shadow.mapSize.set(2048,2048),Y.shadow.camera.left=-.8,Y.shadow.camera.right=1,Y.shadow.camera.top=.85,Y.shadow.camera.bottom=-1.05,Y.shadow.camera.near=1.5,Y.shadow.camera.far=6.6,Y.shadow.bias=-.001,B.add(Y),B.add(Y.target);let K=new qi(6.25,6.25),ne=new Wo({opacity:.15}),he=new Yi(K,ne);he.position.z=-1e-5,he.receiveShadow=!0,G.add(he);let j=ae.capabilities.getMaxAnisotropy(),F=new gi(new Uint8Array([0,0,0,255]),1,1);F.needsUpdate=!0;let oe=new gi(new Uint8Array([252,252,249,255]),1,1);oe.colorSpace=vi,oe.needsUpdate=!0;let ie=`

    const float SHEET_ASPECT         = 1.377;
    const float NORMAL_EPSILON     = 0.03;

    const float LIFT_MAX_X         = 0.14;
    const float LIFT_MAX_Z         = 0.04;
    const float LIFT_DIP_X         = 0.58;
    const float LIFT_DIP_Z         = 0.035;
    const float LIFT_MID_X         = 0.72;
    const float LIFT_MID_Z         = 0.04;
    const float LIFT_EDGE_Z        = 0.03;

    const float DEFORM             = 0.13;
    const float DEFORM_SCALE       = 1.2;
    const float DEFORM_SEED        = 46.0;

    const float PATTERN_SIZE       = 1.46;
    const float TEXTURE_COLOR      = 0.17;
    const float PATTERN_ROUGHNESS  = 0.33;
    const float PAPER_TRANSPARENCY = 0.04;
    const float INK_GLOSS          = 0.33;
    const float SHADOW_OFFSET_X    = 0.004;
`,S=`
    float _hash(vec2 point) { return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453); }
    float _valueNoise(vec2 point) {
        vec2 cell = floor(point), fr = fract(point), blend = smoothstep(0.0, 1.0, fr);
        return mix(mix(_hash(cell), _hash(cell + vec2(1,0)), blend.x),
                   mix(_hash(cell + vec2(0,1)), _hash(cell + vec2(1,1)), blend.x), blend.y);
    }
    float _fbmNoise(vec2 point) {
        float value = 0.0, amplitude = 0.5;
        for (int octave = 0; octave < 3; octave++) { value += amplitude * _valueNoise(point); amplitude *= 0.5; point *= 2.0; }
        return value;
    }
    float _rawNoise(vec2 uv) {
        float flatSheetX = uv.x;
        float flatSheetY = (uv.y - 0.5) * SHEET_ASPECT;
        vec2 seedOffset = vec2(DEFORM_SEED * 13.37, DEFORM_SEED * 7.77);
        return _fbmNoise(vec2(flatSheetX, flatSheetY) / DEFORM_SCALE + seedOffset);
    }
`;function _(W,ee,_e){let Ue=W.getAttribute("aNoise"),Le=Ue?Ue.array:new Float32Array(3*ee);for(let ze=0;ze<ee;ze++)_e(ze,Le);return Ue?Ue.needsUpdate=!0:W.setAttribute("aNoise",new Xi(Le,3)),W}function R(W,ee){return _(W,ee,(_e,Ue)=>{Ue[3*_e]=Ue[3*_e+1]=Ue[3*_e+2]=.5})}let z=(function(W){let ee=W.attributes.uv.count,_e=Math.ceil(ee/512);if(!ae.getContext().getExtension("EXT_color_buffer_float"))return R(W,ee);let Ue=new Float32Array(ee);for(let N=0;N<ee;N++)Ue[N]=N;let Le=new zo;Le.setAttribute("position",new Xi(W.attributes.position.array,3)),Le.setAttribute("uv",new Xi(W.attributes.uv.array,2)),Le.setAttribute("aIndex",new Xi(Ue,1));let ze=new Vo({uniforms:{uTargetSize:{value:new rn(512,_e)}},vertexShader:`
            attribute float aIndex;
            uniform vec2 uTargetSize;
            varying vec2 vBakeUv;
            void main() {
                float px = mod(aIndex, uTargetSize.x);
                float py = floor(aIndex / uTargetSize.x);
                gl_Position = vec4((vec2(px, py) + 0.5) / uTargetSize * 2.0 - 1.0, 0.0, 1.0);
                gl_PointSize = 1.0;
                vBakeUv = uv;
            }
        `,fragmentShader:`
            precision highp float;
            varying vec2 vBakeUv;
            ${ie}
            ${S}
            void main() {
                vec2 du = vec2(NORMAL_EPSILON, NORMAL_EPSILON / SHEET_ASPECT);
                gl_FragColor = vec4(
                    _rawNoise(vBakeUv),
                    _rawNoise(vBakeUv + vec2(du.x, 0.0)),
                    _rawNoise(vBakeUv + vec2(0.0, du.y)),
                    1.0);
            }
        `}),De=new ko(Le,ze);De.frustumCulled=!1;let Ke=new Ki().add(De),nt=new jo(512,_e,{type:Ho,minFilter:xs,magFilter:xs,depthBuffer:!1,stencilBuffer:!1}),Je=ae.getRenderTarget();ae.setRenderTarget(nt),ae.render(Ke,new Go);let $e=new Float32Array(512*_e*4);ae.readRenderTargetPixels(nt,0,0,512,_e,$e),ae.setRenderTarget(Je),nt.dispose(),ze.dispose(),Le.dispose();let T=!0;for(let N=0;N<4*Math.min(ee,64)&&T;N++)$e[N]!==0&&(T=!1);return T?(console.warn("[magazine] float readback came back empty \u2014 rendering sheets unwrinkled"),R(W,ee)):_(W,ee,(N,M)=>{M[3*N]=$e[4*N],M[3*N+1]=$e[4*N+1],M[3*N+2]=$e[4*N+2]})})(new qi(1,1.377,64,88.128));function O(W,ee){return .31+.69*(v>1?(W+(v-1-2*W)*(1-ee))/(v-1):1)}function I(W){for(let ee=0;ee<y.length;ee++)if(y[ee].sheetIndex===W)return!0;return!1}z.deleteAttribute("normal");let ue=new ta,te=new rn,E=new Qr(new mn(0,0,1),0),k=new mn;function re(W){let ee=Math.abs(W)*Math.PI/180,_e=1-.6885*Math.sin(ee),Ue=Math.cos(ee)/_e;return m.cornerRollMax/(Math.PI*Ue)}let ye=-1;function Z(W,ee,_e){let Ue,Le=A[_e].wobble,ze=(Ue=D.getBoundingClientRect(),te.set((W-Ue.left)/Ue.width*2-1,-(2*((ee-Ue.top)/Ue.height))+1),ue.setFromCamera(te,q),ue.ray.intersectPlane(E,k)?{angle:Math.atan2(k.y,k.x),distanceFromSpine:Math.hypot(k.x,k.y)}:null),De=(function($e){let T=A[ye];if(T&&ye!==$e&&I(ye))return(T.direction>0?T.flipProgress>.5:T.flipProgress<.5)?void 0:T.curveTarget})(_e),Ke=0;if(ze){let $e=180*ze.angle/Math.PI;$e>90&&($e=180-$e),$e<-90&&($e=-180-$e);let T=1-Le.angle*m.curlAngleJitter;Ke=nn.clamp(-($e/90)*m.angleMaxDeg*ze.distanceFromSpine*T+Le.tilt*m.curlTiltJitterDeg,-m.angleMaxDeg,m.angleMaxDeg)}let nt=re(Ke);if(!De){let $e=1-Le.arc*m.curlArcJitter;return{curlArc:Math.min(m.curlArc*$e,nt),curlAngleDeg:Ke}}Ke=nn.clamp(Ke,Math.min(0,De.curlAngleDeg),Math.max(0,De.curlAngleDeg));let Je=nn.lerp(b.followArcGainMin,b.followArcGainMax,Le.arc);return{curlArc:nn.clamp(De.curlArc*Je,De.curlArc,re(Ke)),curlAngleDeg:Ke}}function Re(W){let ee=D.getBoundingClientRect(),_e=W-ee.left>=ee.width/2;return(_e?C>=v:C<=0)?null:{sheetIndex:_e?C:C-1,forward:_e}}let ge=0,me=0,Me=!1,be=-1,we=null,ve=null,Ye="";function Be(W,ee=x.clickSlopPx){return we&&(W.clientX-we.x)**2+(W.clientY-we.y)**2>ee*ee}let xe=null;function Fe(){xe&&(clearTimeout(xe.timer),xe=null)}function lt(W,ee,_e){return W+(ee-W)*Math.min(_e/f.speedUpSheets,1)}function Te(){if(!xe)return;xe.fired||(xe.fired=!0,ve=null);let W=lt(f.firstFlipTime,f.fastestFlipTime,xe.count)*lt(f.firstGapShare,f.fastestGapShare,xe.count);(function(){let ee=xe.forward;if(ee?C>=v:C<=0)return Fe(),!1;let _e=ee?C:C-1,Ue=A[_e];Ze(_e,ee);let Le=xe.count===0?Ue.curveTarget:Z(xe.x,xe.y,_e);return Ve(Ue,Le,!0),Ue.direction=ee?1:-1,Bt(_e,ee,+!!ee,lt(f.firstFlipTime,f.fastestFlipTime,xe.count)),!0})()&&(xe.count++,xe.timer=setTimeout(Te,1e3*W))}function Ve(W,ee,_e){W.curveTarget.curlArc=ee.curlArc,W.curveTarget.curlAngleDeg=ee.curlAngleDeg,_e&&(W.curve.curlArc=ee.curlArc,W.curve.curlAngleDeg=ee.curlAngleDeg)}let Ge=["curlArc","curlAngleDeg"];function xt(W,ee){ye=W,A[W].wobble={arc:Math.random(),angle:Math.random(),tilt:2*Math.random()-1},C=ee===1?W+1:W,an(),L=!0}function Bt(W,ee,_e,Ue=b.flipTime){let Le,ze,De;xt(W,_e),ze=1e3*Ue*Math.max(.2,Math.abs(_e-(Le=A[W].flipProgress))),(De=y.findIndex(Ke=>Ke.sheetIndex===W))!==-1&&y.splice(De,1),y.push({sheetIndex:W,fromProgress:Le,toProgress:_e,direction:ee?1:-1,startTime:performance.now()+0,duration:ze})}function Et(W){var ee,_e,Ue;let Le,ze,De,Ke,nt;if(Fe(),!ve){we=null;return}let Je=ve,$e=Be(W);ve=null,we=null;try{Q.releasePointerCapture(W.pointerId)}catch{}if(!$e)return void Bt(Je.sheetIndex,Je.forward,+!!Je.forward);let T=(Le=(Je.forward?Je.progress-Je.base:Je.base-Je.progress)>=x.commitProgress,+(Je.forward===Le));xt(Je.sheetIndex,T),ee=Je.sheetIndex,_e=Je.forward?1:-1,Ue=T===1?Je.speed:-Je.speed,De=Math.max(Math.abs(T-(ze=A[ee].flipProgress)),.001),Ke=x.fallTime*Math.pow(De,x.fallTimeExponent),(nt=y.findIndex(N=>N.sheetIndex===ee))!==-1&&y.splice(nt,1),y.push({sheetIndex:ee,fromProgress:ze,toProgress:T,direction:_e,startTime:performance.now(),duration:1e3*Ke,launch:nn.clamp(Ue*Ke/De,0,2)})}function V(W){let ee,_e,Ue,Le,ze=performance.now();for(let M=y.length-1;M>=0;M--){let w=y[M],P=A[w.sheetIndex];P.flipProgress=(function(X,ce){var de,Ee;let fe,le,se=Math.min(Math.max((ce-X.startTime)/X.duration,0),1),Se=X.launch===void 0?.5*(1-Math.cos(se*Math.PI)):(de=X.launch,Ee=x.landingSpeed,((le=(fe=se*se)*se)-2*fe+se)*de+(3*fe-2*le)+(le-fe)*Ee);return X.fromProgress+(X.toProgress-X.fromProgress)*Se})(w,ze),P.direction=w.direction,ze>=w.startTime+w.duration&&(y.splice(M,1),L=!0)}let De=J?Math.min((W-J)/1e3,.1):1/60;J=W;let Ke=1-Math.pow(.001,De/m.directionSmoothTime);(function(M){if(!ve)return;let w=A[ve.sheetIndex],P=1-Math.pow(.01,M/x.progressSmoothTime),X=(ve.progress-w.flipProgress)*P;w.flipProgress+=X,ve.speed=M>0?X/M:0,Ve(w,ve.targetCurve,!1)})(De);let nt=y.length>0||ve!==null,Je=1-Math.pow(.001,De/g.smoothTime),$e=1-Math.pow(.001,De/m.curveSmoothTime),T=!Me||ve||xe?null:Re(ge),N=be;(be=T&&c&&!I(T.sheetIndex)?T.sheetIndex:-1)!==-1&&Ve(A[be],Z(ge,me,be),be!==N);for(let M=0;M<A.length;M++){let w=A[M];if(!I(M)&&!(ve&&ve.sheetIndex===M)){let ce=M===be,de=M>=C?0:1,Ee=ce?de===0?g.progress:1-g.progress:de,fe=Ee-w.flipProgress;Math.abs(fe)<m.settleEpsilon?w.flipProgress!==Ee&&(w.flipProgress=Ee,L=!0):(w.flipProgress+=fe*Je,nt=!0);let le=A[de===0?M-1:M+1];if(le){let se=de===0?Math.min(w.flipProgress,Math.max(0,le.flipProgress-g.gapToSheetAbove)):Math.max(w.flipProgress,Math.min(1,le.flipProgress+g.gapToSheetAbove));se!==w.flipProgress&&(w.flipProgress=se,nt=!0)}w.direction=de===1&&w.flipProgress!==de?-1:1,w.directionSmooth=w.direction}let P=w.stackLiftBase+w.stackLiftSpan*w.flipProgress,X=w.direction-w.directionSmooth;Math.abs(X)<m.settleEpsilon?w.directionSmooth!==w.direction&&(w.directionSmooth=w.direction,L=!0):(w.directionSmooth+=X*Ke,nt=!0),(function(ce,de){let Ee=m.settleEpsilon,fe=!1;for(let le of Ge){let se=ce.curveTarget[le]-ce.curve[le];Math.abs(se)<Ee?ce.curve[le]=ce.curveTarget[le]:(ce.curve[le]+=se*de,fe=!0)}return fe})(w,$e)&&(nt=!0),(function(ce,de){let Ee=ce.sheetUniforms,fe=ce.curve,le=ce.directionSmooth,se=ce.flipProgress*Math.PI,Se=Math.sin(ce.flipProgress*Math.PI)*Math.PI*fe.curlArc,Ce=fe.curlAngleDeg*Math.PI/180,Ae=Math.cos(Ce),it=Math.sin(Ce),Qe=1-.6885*Math.sin(Math.abs(Ce)),We=1-Qe,mt=.6885*Math.sign(it),ht=Math.max(0,Ae+it*mt-We),Pe=ht/Qe*Se,Ie=se+.5*le*(ht*(1e-4>Math.abs(Pe)?0:(1-Math.cos(Pe))/Pe));Ee.uFlipProgress.value=ce.flipProgress,Ee.uWrinkleSide.value=-Math.cos(se),Ee.uDirection.value=le,Ee.uStackLift.value=de,Ee.uBendAngle.value=Se,Ee.uFold.value.set(Ae,it),Ee.uCurl.value.set(We,Qe),Ee.uFlipRotation.value.set(Math.cos(Ie),Math.sin(Ie))})(w,P)}if(ee=y.length>0||ve!==null||xe!==null,_e=C===0&&!ee,Ue=C===v&&!ee,(Le=_e?"0 0 0 50%":Ue?"0 50% 0 0":"0")!==Ye&&(Ye=Le,Q.style.inset=Le),nt||L){for(let M=0;M<A.length;M++){let w=A[M].mesh,P=M>=C?M-C:C-1-M,X=P<3||I(M)||ve!==null&&ve.sheetIndex===M;w.castShadow!==X&&(w.castShadow=X),w.renderOrder=P}ae.shadowMap.needsUpdate=!0,t.onBeforeRender?.(),ae.render(G,q),s&&o&&(i.mark("first-useful-frame"),t.onRender?.(D)),L=!1}}function Pt(){let W=D.clientWidth,ee=D.clientHeight;if(!W||!ee)return;q.aspect=W/ee,q.updateProjectionMatrix();let _e=Math.sqrt(15e6/(W*ee));ae.setPixelRatio(Math.min(devicePixelRatio*(t.canvasResolutionScale??1),4,_e)),ae.setSize(W,ee,!1),t.onResolution?.({width:D.width,height:D.height,pixelRatio:ae.getPixelRatio()}),L=!0}Q.addEventListener("pointermove",W=>{if(xe&&Be(W,xe.fired?f.moveSlopPx:void 0)&&Fe(),ve){let ee=W.clientX-we.x;ve.progress=nn.clamp(ve.base-ee/ve.rectWidth/x.turnFraction,0,1),ve.targetCurve=Z(W.clientX,W.clientY,ve.sheetIndex),L=!0;return}ge=W.clientX,me=W.clientY,Me=!0,L=!0},{signal:r.signal}),Q.addEventListener("pointerleave",()=>{Me=!1,L=!0},{signal:r.signal}),Q.addEventListener("pointerdown",W=>{var ee,_e,Ue,Le;let ze;if(W.button!==0)return;let De=Re(W.clientX);if(!De||!c||n.dataset.magazineState!=="ready")return;Ze(De.sheetIndex,De.forward);let Ke=A[De.sheetIndex];I(De.sheetIndex)||Ve(Ke,Z(W.clientX,W.clientY,De.sheetIndex),!0),ee=De.sheetIndex,(ze=y.findIndex(nt=>nt.sheetIndex===ee))!==-1&&y.splice(ze,1),we={x:W.clientX,y:W.clientY},ve={sheetIndex:De.sheetIndex,forward:De.forward,base:Ke.flipProgress,progress:Ke.flipProgress,rectWidth:D.getBoundingClientRect().width,targetCurve:{...Ke.curveTarget},speed:0},Ke.direction=De.forward?1:-1,_e=W.clientX,Ue=W.clientY,Le=De.forward,Fe(),xe={forward:Le,x:_e,y:Ue,count:0,fired:!1,timer:setTimeout(Te,1e3*f.startTime)},Q.setPointerCapture(W.pointerId),L=!0},{signal:r.signal}),Q.addEventListener("pointerup",Et,{signal:r.signal}),Q.addEventListener("pointercancel",Et,{signal:r.signal}),Pt();let zt=new ResizeObserver(Pt);function Ze(W,ee){let _e=la(2*W,e.length,ee,!1);a.prioritize(_e).catch(()=>{})}function et(){!c||l||ae.getContext().isContextLost()||(L=!0,V(performance.now()),n.dataset.magazineState="ready",n.dataset.magazineOpeningReady="true",t.onOpeningReady?.(D),d())}zt.observe(D),D.addEventListener("webglcontextlost",W=>{W.preventDefault(),n.dataset.magazineState="recovering",Fe(),ve=null,we=null,ae.setAnimationLoop(null)},{signal:r.signal}),D.addEventListener("webglcontextrestored",et,{signal:r.signal});for(let W=0;W<v;W++){let ee=(function(_e,Ue,Le){let ze={uDirection:{value:1},uStackLift:{value:1},uFlipProgress:{value:0},uWrinkleSide:{value:-1},uBendAngle:{value:0},uFold:{value:new rn(1,0)},uCurl:{value:new rn(0,1)},uFlipRotation:{value:new rn(1,0)},uPatternTex:{value:F},uBackMap:{value:Ue}},De=`
        ${ie}

        uniform float uFlipProgress;
        uniform float uWrinkleSide;
        uniform float uBendAngle;
        uniform vec2 uFold;
        uniform vec2 uCurl;
        uniform vec2 uFlipRotation;
        uniform float uDirection;
        uniform float uStackLift;
        uniform sampler2D uBackMap;
        varying vec2 vGrainUv;

        attribute vec3 aNoise;

        const float PI      = 3.14159265;
        const float HALF_PI = 1.57079633;

        vec3 _computeSheetPosition(vec2 uv, float rawNoise) {
            float flatSheetX = uv.x;
            float flatSheetY = (uv.y - 0.5) * SHEET_ASPECT;

            float wrinkle = mix(rawNoise, 1.0 - rawNoise, uFlipProgress) - .5;
            wrinkle *= smoothstep(0.0, 0.35, uv.x);
            wrinkle *= DEFORM;
            wrinkle *= uStackLift;

            float restingLift;
            if (uv.x <= LIFT_MAX_X) {
                restingLift = LIFT_MAX_Z * sin(uv.x / LIFT_MAX_X * HALF_PI);
            } else if (uv.x <= LIFT_DIP_X) {
                restingLift = mix(LIFT_MAX_Z, LIFT_DIP_Z, smoothstep(LIFT_MAX_X, LIFT_DIP_X, uv.x));
            } else if (uv.x <= LIFT_MID_X) {
                restingLift = mix(LIFT_DIP_Z, LIFT_MID_Z, smoothstep(LIFT_DIP_X, LIFT_MID_X, uv.x));
            } else {
                float t = (uv.x - LIFT_MID_X) / (1.0 - LIFT_MID_X);
                float edgeLift = LIFT_EDGE_Z;
                restingLift = mix(LIFT_MID_Z, edgeLift, 1.0 - cos(t * HALF_PI));
            }
            restingLift *= uStackLift;

            float cosFold = uFold.x;
            float sinFold = uFold.y;
            float localU =  flatSheetX * cosFold + flatSheetY * sinFold;
            float localV = -flatSheetX * sinFold + flatSheetY * cosFold;

            float curlStart  = uCurl.x;
            float curlLength = uCurl.y;

            float beyondCurl = max(0.0, localU - curlStart);
            float curlNorm   = beyondCurl / curlLength;

            float cylinderAngle  = curlNorm * uBendAngle;
            float sinc    = abs(cylinderAngle) < 1e-4 ? 1.0 : sin(cylinderAngle) / cylinderAngle;
            float versine = abs(cylinderAngle) < 1e-4 ? 0.0 : (1.0 - cos(cylinderAngle)) / cylinderAngle;
            float curvedLocal    = beyondCurl * sinc;
            float curvedZ        = -uDirection * beyondCurl * versine;
            float curledU        = localU - beyondCurl + curvedLocal;

            float px = curledU * cosFold - localV * sinFold;
            float py = curledU * sinFold + localV * cosFold;
            float pz = curvedZ;

            float cosRot = uFlipRotation.x;
            float sinRot = uFlipRotation.y;

            float x = px * cosRot - pz * sinRot;
            float y = py;
            float z = px * sinRot + pz * cosRot;

            z += restingLift;
            vec3 p = vec3(x, y, z);

            p.z += uWrinkleSide * wrinkle;

            return p;
        }

        vec3 _transformedSheetPosition;
    `,Ke=`
        float epsilon = NORMAL_EPSILON;
        vec2 du = vec2(epsilon, epsilon / SHEET_ASPECT);

        vec3 sheetP  = _computeSheetPosition(uv,                       aNoise.x);
        vec3 sheetPx = _computeSheetPosition(uv + vec2(du.x, 0.0),      aNoise.y);
        vec3 sheetPy = _computeSheetPosition(uv + vec2(0.0, du.y),      aNoise.z);

        vec3 surfaceNormal = normalize(cross(sheetPx - sheetP, sheetPy - sheetP));

        _transformedSheetPosition = sheetP;
    `,nt=`
        _transformedSheetPosition = _computeSheetPosition(uv, aNoise.x);
    `,Je=new Jr({map:_e,side:_i,metalness:.17,roughness:.5});Je.onBeforeCompile=N=>{Object.assign(N.uniforms,ze),N.vertexShader=De+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <beginnormal_vertex>",`
            #include <beginnormal_vertex>
            {
                ${Ke}
                objectNormal = surfaceNormal;
            }
            `),N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`vec3 transformed = _transformedSheetPosition;
            vGrainUv = uv;`),N.fragmentShader=N.fragmentShader.replace("#include <normal_fragment_begin>",`
            vec3 normal = normalize(vNormal);
            float faceDirection = normal.z >= 0.0 ? 1.0 : -1.0;
            normal *= faceDirection;
            vec3 nonPerturbedNormal = normal;
            `),N.fragmentShader=ie+`uniform sampler2D uBackMap;
uniform sampler2D uPatternTex;
varying vec2 vGrainUv;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <map_fragment>",`
            float inkAmount = 0.0;
            #ifdef USE_MAP
                vec2 flippedUv = vec2(1.0 - vMapUv.x, vMapUv.y);
                vec4 frontColor = texture2D(map, vMapUv);
                vec4 backColor  = texture2D(uBackMap, flippedUv);
                vec4 faceColor  = gl_FrontFacing ? frontColor : backColor;
                vec4 otherColor = gl_FrontFacing ? backColor  : frontColor;
                vec4 sheetColor = faceColor;
                sheetColor.rgb *= mix(vec3(1.0), otherColor.rgb, PAPER_TRANSPARENCY);
                diffuseColor *= sheetColor;
                inkAmount = 1.0 - dot(faceColor.rgb, vec3(0.299, 0.587, 0.114));
            #endif
            `),N.fragmentShader=N.fragmentShader.replace("#include <roughnessmap_fragment>",`
            #include <roughnessmap_fragment>
            roughnessFactor *= mix(1., 0., inkAmount * INK_GLOSS);
            float pattern = texture2D(uPatternTex, vGrainUv * PATTERN_SIZE * vec2(1.0, SHEET_ASPECT)).r;
            pattern = 2. * pow(pattern, 7.);
            roughnessFactor = clamp(mix(roughnessFactor, 1.0, clamp(pattern * PATTERN_ROUGHNESS, 0.0, 1.0)), 0.0, 1.0);
            `),N.fragmentShader=N.fragmentShader.replace("#include <opaque_fragment>",`
            #include <opaque_fragment>
            gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.), pattern * TEXTURE_COLOR);
            `)},t.onSheetMaterial?.(Je,Le,ae.capabilities.isWebGL2);let $e=new Kr({depthPacking:ea,side:_i});$e.onBeforeCompile=N=>{Object.assign(N.uniforms,ze),N.vertexShader=De+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`
            ${nt}
            vec3 transformed = _transformedSheetPosition - vec3(SHADOW_OFFSET_X, 0., 0.);
            `)};let T=new Yi(z,Je);return T.customDepthMaterial=$e,T.castShadow=!0,T.receiveShadow=!0,{mesh:T,sheetUniforms:ze,frontTex:_e,flipProgress:+(Le<C),direction:1,directionSmooth:1,curve:{curlArc:0,curlAngleDeg:0},curveTarget:{curlArc:0,curlAngleDeg:0},wobble:{arc:.5,angle:.5,tilt:0},stackLiftBase:O(Le,0),stackLiftSpan:O(Le,1)-O(Le,0)}})(oe,oe,W);A.push(ee),G.add(ee.mesh)}function an(){let W=Ss(C,e.length);return i.window(W),a?.setWindow(W),t.onChange?.({spread:C,totalSpreads:v,pageCount:e.length,visiblePages:W.visible.map(ee=>ee+1)}),W}d=()=>{h&&c&&!document.hidden&&!ae.getContext().isContextLost()?(J=0,L=!0,ae.setAnimationLoop(V)):ae.setAnimationLoop(null)},document.addEventListener("visibilitychange",d,{signal:r.signal}),(p=new IntersectionObserver(W=>{h=W[W.length-1].isIntersecting,d()},{rootMargin:"50% 0px"})).observe(n),n.dataset.magazineState="preparing",i.mark("scene-initialized");let at=an();a=sa({count:e.length,window:at,load:(W,ee)=>oa(e[W],ee,()=>i.mark("image-loaded",W),r.signal),attach:function(W,ee){if(l)return;let _e=new ia(ee);_e.colorSpace=vi,_e.anisotropy=j,t.onPageTexture?.(_e,W),_e.needsUpdate=!0;try{ae.initTexture(_e)}catch(Le){throw _e.dispose(),Le}U[W]?.dispose(),U[W]=_e;let Ue=A[W>>1];W%2==0?(Ue.mesh.material.map=_e,Ue.mesh.material.needsUpdate=!0):Ue.sheetUniforms.uBackMap.value=_e,L=!0},onEvent:i.mark,onProgress:W=>{s=W.visible,i.progress(W),L=!0},onError:(W,ee)=>{t.onPageError?.(`Page ${W+1}: ${String(ee)}`),console.warn(`sheet side ${W+1} failed to load`,ee)}});let Ct=new Promise(W=>{if(l)return W();new ra().load(t.grainUrl,ee=>{if(l)return ee.dispose(),W();for(let _e of(u=ee,ee.wrapS=ee.wrapT=na,ee.anisotropy=j,A))_e.sheetUniforms.uPatternTex.value=ee;ae.initTexture(ee),L=!0,W()},void 0,ee=>{console.warn("magazine pattern failed to load",ee),W()})}).then(()=>{o=!0,i.mark("grain-settled"),L=!0});return Promise.all([Ct,a.ensure(at.visible)]).then(()=>{l||(c=!0,et())}).catch(W=>{l||(n.dataset.magazineState="error",t.onLoadError?.(W))}),Promise.all([Ct,a.done]).then(()=>{l||t.onReady?.(()=>{l||(L=!0,V(performance.now()))})}),{destroy:()=>{for(let W of(l=!0,a.dispose(),Fe(),r.abort(),zt.disconnect(),p?.disconnect(),ae.setAnimationLoop(null),A))W.mesh.geometry.dispose(),W.mesh.material.dispose(),W.mesh.customDepthMaterial.dispose();for(let W of U)W?.dispose();u?.dispose(),F.dispose(),oe.dispose(),K.dispose(),ne.dispose(),ae.dispose(),Q.remove(),D.remove()},getState:()=>({spread:C,totalSpreads:v,pageCount:e.length,ready:c,animating:y.length>0||ve!==null,visiblePages:Ss(C,e.length).visible.map(W=>W+1)}),turn(W=!0){if(l||!c||ve||y.length||(W?C>=v:C<=0))return!1;Fe();let ee=W?C:C-1,_e=D.getBoundingClientRect();return Ze(ee,W),Ve(A[ee],Z(_e.left+_e.width*(W?.8:.2),_e.top+_e.height*.65,ee),!0),A[ee].direction=W?1:-1,Bt(ee,W,Number(W)),!0},goToSpread(W){if(l||!c||!Number.isInteger(W)||W<0||W>v)return!1;Fe(),ve=null,we=null,Me=!1,y.length=0,C=W;for(let ee=0;ee<A.length;ee++)A[ee].flipProgress=+(ee<C),A[ee].curve={curlArc:0,curlAngleDeg:0},A[ee].curveTarget={curlArc:0,curlAngleDeg:0};return an(),L=!0,!0}}}var Mi={MONO_MAGAZINE_FRAME:{left:-.34,right:1.22,bottom:-1.2,top:1.2}};function $o(n,e,t=0,i={}){let r=ca(n,"mobile"),a=new AbortController,s=null,o=!1,l=!1,c=!1,h=!1,d=!1,u=()=>{},p=null,v=null,m=e.length,g={startTime:.22,firstFlipTime:1.4,fastestFlipTime:1,speedUpSheets:7,firstGapShare:.16,fastestGapShare:.1,moveSlopPx:40},f={turnFraction:1.2,progressSmoothTime:.9,commitProgress:.1,clickSlopPx:5,claimSteepness:1.6,claimAfterPx:4,fallTime:1.3,fallTimeExponent:.5},x=1.2,b=.8,A=35,y=.05,C={tiltDeg:8,flipTimeMin:.95,flipTimeMax:1.08},U={spineOpenStartDeg:100,spineOpenEndDeg:190,spineOpenPower:4,coneEvenPower:6,coverTopRadius:.04,backTopRadius:.18,coverBottomRadius:.01,backBottomRadius:.05,radiusSpacingClump:7.5,radiusSpacingSeed:41.5,fallDelayPages:15,fallDurationPages:3},L={midLeadPower:2,midBow:2,midBowFlatFrom:.3,midBowFlatTo:.8,midRollScale:2.5},J={liftHeight:.08,liftPeakX:.4,liftEdgeDrop:.5,liftShutShare:.67,liftDepthFalloff:.5,coneTaper:-.6,renderDepth:3},G=.05,q=.02,ae={clump:1.6,seed:41},D=[],Q=[],B=Math.min(Math.max(Math.trunc(t),0),Math.max(m-1,0)),$=[],Y=!0,K=0,ne=new Ki,he=Mi.MONO_MAGAZINE_FRAME.top-Mi.MONO_MAGAZINE_FRAME.bottom,j=(Mi.MONO_MAGAZINE_FRAME.left+Mi.MONO_MAGAZINE_FRAME.right)/2,F=(Mi.MONO_MAGAZINE_FRAME.bottom+Mi.MONO_MAGAZINE_FRAME.top)/2,oe=new $r(40,2,1.5,4.5);oe.position.set(j,F,3.1),oe.lookAt(j,F,0);let ie=new aa({antialias:!0,alpha:!0});ie.shadowMap.enabled=!0,ie.shadowMap.type=Zr,ie.shadowMap.autoUpdate=!1,ie.shadowMap.needsUpdate=!0;let S=ie.domElement;S.dataset.magazineLayer="",n.dataset.magazineOpeningReady="false",n.appendChild(S),S.style.setProperty("-webkit-touch-callout","none"),S.style.setProperty("-webkit-user-select","none"),S.style.setProperty("user-select","none");let _=new ji;ne.add(_);let R=new ji;ne.add(R);let z=new qr("#ffffff","#a1aeaf",1.7);R.add(z);let O=new Yr("#ffffff",2);O.position.set(.689,-1.15,2.15),O.castShadow=!0,O.shadow.mapSize.set(2048,2048),O.shadow.camera.left=-1.1,O.shadow.camera.right=1.1,O.shadow.camera.top=.8,O.shadow.camera.bottom=-.8,O.shadow.camera.near=1,O.shadow.camera.far=10,O.shadow.bias=-.001,R.add(O),R.add(O.target);let I=ie.capabilities.getMaxAnisotropy(),ue=new gi(new Uint8Array([0,0,0,255]),1,1);ue.needsUpdate=!0;let te=new gi(new Uint8Array([252,252,249,255]),1,1);te.colorSpace=vi,te.needsUpdate=!0;let E=`

    const float SHEET_ASPECT         = 1.377;
    const float NORMAL_EPSILON     = 0.02;

    const float PATTERN_SIZE       = 1.46;
    const float TEXTURE_COLOR      = 0.17;
    const float PATTERN_ROUGHNESS  = 0.33;
    const float PAPER_TRANSPARENCY = 0.3;
    const float INK_GLOSS          = 0.33;
    const float SHADOW_OFFSET_X    = -0.004;
    const float SHADOW_OPACITY     = 0.400;
`,k="getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] )",re=Ms.lights_fragment_begin.replace(k,`mix( 1.0, ${k}, SHADOW_OPACITY )`);re===Ms.lights_fragment_begin&&console.warn("magazine shadowOpacity: three's lights chunk changed, shadows stay full");let ye=new qi(1,1.377,64,88.128);function Z(M,w){let P=43758.5453*Math.sin(12.9898*M+78.233*w);return P-Math.floor(P)}ye.deleteAttribute("normal");let Re=[];(function(){let M=[];for(let ce=0;ce<m-1;ce++)M.push(Math.pow(Z(ce+1,U.radiusSpacingSeed),U.radiusSpacingClump));let w=M.reduce((ce,de)=>ce+de,0),P=1/M.length;Re=[0];let X=0;for(let ce of M){let de=w>0?ce/w:P;X+=.1*P+.9*de,Re.push(X)}})();let ge=[];function me(M){let w=Math.min(Math.floor(M),m);if(w>=m)return m;let P=ge[w];return P+(ge[w+1]-P)*(M-w)}let Me=[];for(let M=0;M<m;M++)Me.push(Math.pow(Z(M+1,ae.seed+.5),ae.clump));let be=Me.reduce((M,w)=>M+w,0);ge=[0];let we=0;for(let M of Me)we+=be>0?M/be*m:1,ge.push(we);function ve(M){return Math.min(Math.max(M-(m-1),0),1)}function Ye(M){return Be((ve(M)-.6)/.4)}function Be(M){let w=Math.min(Math.max(M,0),1);return w*w*(3-2*w)}function xe(M){if(M<=1e-6)return 1;let w=X=>{let ce=1-Math.min(X/J.liftPeakX,1);return M*Math.sqrt(1-ce*ce)*(1-J.liftEdgeDrop*Be((X-J.liftPeakX)/(1-J.liftPeakX)))},P=0;for(let X=0;X<6;X++){let ce=Math.pow(X/6,2),de=Math.pow((X+1)/6,2);P+=Math.hypot(de-ce,w(de)-w(ce))}return Math.max(2-P,.5)}function Fe(M){let w=1/(1+M*J.liftDepthFalloff);return J.liftHeight*w*(1-.002*M)}function lt(){let M=(w,P)=>w+(P-w)*Math.random();return{tiltDeg:M(-C.tiltDeg,C.tiltDeg),flipTime:M(C.flipTimeMin,C.flipTimeMax)}}function Te(M){for(let w=0;w<Q.length;w++)if(Q[w].sheet===M)return!0;return!1}function Ve(M){return Te(M)||et!==null&&et.sheet===M}let Ge=new mn,xt=new ta,Bt=new rn,Et=new Qr(new mn(0,0,1),0),V=new mn;function Pt(M,w){let P=S.getBoundingClientRect();return Bt.set((M-P.left)/P.width*2-1,-(2*((w-P.top)/P.height))+1),xt.setFromCamera(Bt,oe),Et.constant=-_.position.z,xt.ray.intersectPlane(Et,V)?{x:V.x-_.position.x,y:V.y-_.position.y}:null}function zt(M,w,P){!w||(M.grabXTarget=Math.min(Math.abs(w.x),1),M.grabYTarget=Math.max(-1,Math.min(1,w.y/.6885)),P&&(M.grabX=M.grabXTarget,M.grabY=M.grabYTarget))}let Ze=null,et=null;function an(M,w=f.clickSlopPx){if(!Ze)return!1;let P=M.clientX-Ze.x,X=M.clientY-Ze.y;return P*P+X*X>w*w}let at=null;function Ct(){at&&(clearTimeout(at.timer),at=null)}function W(M,w,P){return M+(w-M)*Math.min(P/g.speedUpSheets,1)}function ee(){let M,w;if(!at||(at.fired||(at.fired=!0,et=null),!((w=D[(M=at.forward)?B:B-1])?(Je(w,M),Te(w)||(w.wobble=lt()),zt(w,Pt(at.x,at.y),!0),_e(w,M,+!!M,W(g.firstFlipTime,g.fastestFlipTime,at.count)),!0):Ct())||!at))return;let P=W(g.firstFlipTime,g.fastestFlipTime,at.count)*W(g.firstGapShare,g.fastestGapShare,at.count);at.count++,at.timer=setTimeout(ee,1e3*P)}function _e(M,w,P,X=x){var ce;let de,Ee,fe;Ue(w,P),ce=X*M.wobble.flipTime,Ee=1e3*ce*Math.max(.2,Math.abs(P-(de=M.flipProgress))),(fe=Q.findIndex(le=>le.sheet===M))!==-1&&Q.splice(fe,1),Q.push({sheet:M,fromProgress:de,toProgress:P,startTime:performance.now(),duration:Ee})}function Ue(M,w){let P=0;M&&w===1?P=1:M||w!==0||(P=-1),B+=P,T(),Y=!0}function Le(M){var w,P;let X,ce,de,Ee,fe,le;if(Ct(),!et){Ze=null;return}let se=et,Se=an(M);et=null,Ze=null;try{S.releasePointerCapture(M.pointerId)}catch{}if(!Se&&M.type!=="pointercancel")return void _e(se.sheet,se.forward,+!!se.forward);let Ce=M.type==="pointercancel"?+!se.forward:(X=(se.forward?se.progress-se.base:se.base-se.progress)>=f.commitProgress,+(se.forward===X));Ue(se.forward,Ce),w=se.sheet,P=Ce===1?se.speed:-se.speed,de=Math.max(Math.abs(Ce-(ce=w.flipProgress)),.001),Ee=f.fallTime*w.wobble.flipTime*Math.pow(de,f.fallTimeExponent),fe=nn.clamp(P*Ee/de,0,2),(le=Q.findIndex(Ae=>Ae.sheet===w))!==-1&&Q.splice(le,1),Q.push({sheet:w,fromProgress:ce,toProgress:Ce,startTime:performance.now(),duration:1e3*Ee,launch:fe})}S.addEventListener("pointermove",M=>{if(at&&an(M,at.fired?g.moveSlopPx:void 0)&&Ct(),et){let w=M.clientX-Ze.x;et.progress=nn.clamp(et.base-w/et.rectWidth/f.turnFraction,0,1),zt(et.sheet,Pt(M.clientX,M.clientY),!1),Y=!0}},{signal:a.signal}),S.addEventListener("pointerdown",M=>{var w,P,X,ce;let de,Ee,fe,le;if(M.button!==0)return;let se=(fe=D[(Ee=M.clientX>=(w=S.getBoundingClientRect(),de=Ge.copy(_.position).project(oe).x,w.left+(.5*de+.5)*w.width))?B:B-1])?{sheet:fe,forward:Ee}:null;if(!se||!h||n.dataset.magazineState!=="ready")return;Je(se.sheet,se.forward);let Se=se.sheet;Te(Se)||(Se.wobble=lt()),zt(Se,Pt(M.clientX,M.clientY),!0),(le=Q.findIndex(Ce=>Ce.sheet===Se))!==-1&&Q.splice(le,1),Ze={x:M.clientX,y:M.clientY},et={sheet:Se,forward:se.forward,base:Se.flipProgress,progress:Se.flipProgress,rectWidth:S.getBoundingClientRect().width,speed:0},P=M.clientX,X=M.clientY,ce=se.forward,Ct(),at={forward:ce,x:P,y:X,count:0,fired:!1,timer:setTimeout(ee,1e3*g.startTime)},S.setPointerCapture(M.pointerId),Y=!0},{signal:a.signal}),S.addEventListener("pointerup",Le,{signal:a.signal}),S.addEventListener("pointercancel",Le,{signal:a.signal});let ze=null;function De(M){let w=performance.now();for(let le=Q.length-1;le>=0;le--){let se=Q[le];se.sheet.flipProgress=(function(Se,Ce){var Ae;let it,Qe,We=Math.min(Math.max((Ce-Se.startTime)/Se.duration,0),1),mt=Se.launch===void 0?.5*(1-Math.cos((1-Math.pow(1-We,b))*Math.PI)):(Ae=Se.launch,((Qe=(it=We*We)*We)-2*it+We)*Ae+(3*it-2*Qe));return Se.fromProgress+(Se.toProgress-Se.fromProgress)*mt})(se,w),w>=se.startTime+se.duration&&(Q.splice(le,1),Y=!0)}if(m&&!(B<m)&&!Q.length&&!et){for(let le of(B=0,T(),D))le.flipProgress=0;Y=!0}let P=K?Math.min((M-K)/1e3,.1):1/60;K=M,(function(le){if(!et)return;let se=et.sheet,Se=1-Math.pow(.01,le/f.progressSmoothTime),Ce=(et.progress-se.flipProgress)*Se;se.flipProgress+=Ce,et.speed=le>0?Ce/le:0})(P);let X=Q.length>0||et!==null,ce=1-Math.pow(.001,P/y);for(let le=0;le<D.length;le++){let se=D[le];for(let Ce of["grabX","grabY"]){let Ae=se[Ce+"Target"]-se[Ce];1e-4>Math.abs(Ae)?se[Ce]=se[Ce+"Target"]:(se[Ce]+=Ae*ce,X=!0)}let Se=se.index<B;if(!Ve(se)){let Ce=+!!Se;se.flipProgress!==Ce&&(se.flipProgress=Ce,Y=!0)}}if(!X&&!Y)return;let de=0;for(let le of D)de+=le.flipProgress;for(let le of D)(function(se,Se){var Ce,Ae,it;let Qe,We,mt,ht,Pe,Ie,vt,Tt,Rn,Jt=se.sheetUniforms,Ei=se.flipProgress,gn=me(Se),ua=(Qe=Math.min(me(Se)/Math.max(1,m-1),1),(U.spineOpenStartDeg+(U.spineOpenEndDeg-U.spineOpenStartDeg)*Math.pow(Qe,U.spineOpenPower))*Math.PI/180),kn=Ye(Se),da=+(ve(Se)>=1),Qi=Math.max((Ce=se.index,(We=Math.min(Math.max((gn-(Ce+1)-U.fallDelayPages)/Math.max(U.fallDurationPages,.001),0),1))*We*(3-2*We)),kn),pa=(Ae=se.index,mt=Re[Ae],ht=1-Qi,Pe=U.coverTopRadius+(U.backTopRadius-U.coverTopRadius)*mt,Ie=U.coverBottomRadius+(U.backBottomRadius-U.coverBottomRadius)*mt,vt=Math.pow(m?Math.min(gn/m,1):0,U.coneEvenPower),Tt=(Pe+Ie)/2,{top:(Pe+(Tt-Pe)*vt)*ht,bottom:(Ie+(Tt-Ie)*vt)*ht}),Pn=Qi>=1,er=m?me(Se)/m:0,fa=Math.max(0,m-Se),He=Pn?fa+se.index:Math.max(0,se.index-Se),ma=Pn?Math.max((it=se.index,(Rn=Math.min(Math.max(gn-(it+1)-U.fallDelayPages-U.fallDurationPages,0),1))*Rn*(3-2*Rn)),da):(1-Ei)*(1-kn),Lt=J.liftShutShare+(1-J.liftShutShare)*er,Zt=Fe(He)*(Pn?J.liftShutShare:Lt),Ti=(Zt+(Fe(se.index)*J.liftShutShare-Zt)*kn)*ma;Jt.uPileLift.value.set(J.liftPeakX,Ti,J.liftEdgeDrop);let Cn=Lt+(J.liftShutShare-Lt)*kn,bi=Fe(0)*Math.max(Cn,.001);Jt.uConeTaper.value=J.coneTaper*Ti/bi;let gt=1-.5*Math.max(se.grabY,0)*se.grabX,sn=se.grabY*(.5+.5*se.grabX)*A+se.wobble.tiltDeg;if(Pn){Jt.uCone.value.set(0,1,0),Jt.uTailBend.value=0;let _n=2*Ei*Math.PI;Jt.uFlipRotation.value.set(Math.cos(_n),Math.sin(_n))}else(function(_n,Wn,Xn,Rs,Ps){let jn=_n.sheetUniforms,wi=2*Math.PI*(1-Math.pow(1-Wn,L.midLeadPower)),ul=2*Math.PI*Wn,ga=Math.min(wi,Xn),tr=wi-ga,dl=tr/Math.max(2*Math.PI-Xn,.001),Cs=1+(L.midRollScale-1)*(1-Be(dl)),_a=Math.max(Rs.top*Cs,1e-4),Ai=Math.max(-.999,Math.min(.999,(Rs.bottom*Cs-_a)/1.377)),nr=ml=>{let Ns=Math.max(1e-5,_a+(.6885-ml)*Ai),gl=Math.max(-1.5,Math.min(1.5,Ai*tr));return 1e-4>Math.abs(Ai)?Ns*tr:Ns*Math.tan(gl)/Ai},Ls=Ps+(Math.atan2(nr(-.6885)-nr(.6885),1.377)-Ps)*Be(Wn),ir=Math.cos(Ls),rr=Math.sin(Ls),Us=Math.max(nr(.6885)*ir+.6885*rr,nr(-.6885)*ir-.6885*rr),pl=ir+.6885*Math.abs(rr)-Us,Ds=1-Be(wi/Xn);jn.uPileLift.value.y*=Ds,jn.uConeTaper.value*=Ds,jn.uCone.value.set(Ai,_a,tr),jn.uTailCurl.value.set(ir,rr,Us,Math.max(pl,.001));let fl=1-Be((Wn-L.midBowFlatFrom)/(L.midBowFlatTo-L.midBowFlatFrom));jn.uTailBend.value=Math.max(L.midBow*fl*Math.min(ul-wi,0),-wi),jn.uFlipRotation.value.set(Math.cos(ga),Math.sin(ga))})(se,Ei,ua,pa,sn*gt*Math.PI/180);let Vn=Jt.uPileLift.value.y,bt=Jt.uConeTaper.value;Jt.uPileReach.value.set(xe(Vn*(1-.5*bt)),xe(Vn*(1+.5*bt)))})(le,de);let Ee=ve(de)>0;for(let le of D)le.mesh.visible=Ee||le.index<=B+J.renderDepth||Ve(le),le.mesh.renderOrder=le.index<B?B-1-le.index:le.index-B;let fe=Be(m>1?me(de)/(m-1):0)*(1-Ye(de));_.position.x=q*fe,_.position.z=-G*fe,ie.shadowMap.needsUpdate=!0,ie.render(ne,oe),o&&l&&r.mark("first-useful-frame"),Y=!1}function Ke(){let M=S.clientWidth,w=S.clientHeight;if(!M||!w)return;oe.fov=2*Math.atan(he/2/3.1)*180/Math.PI,oe.aspect=M/w,oe.updateProjectionMatrix();let P=Math.sqrt(15e6/(M*w));ie.setPixelRatio(Math.min(1.2*devicePixelRatio*(i.canvasResolutionScale??1),4,P)),ie.setSize(M,w,!1),Y=!0}S.addEventListener("touchstart",M=>{let w=M.touches[0];ze=M.touches.length===1?{x:w.clientX,y:w.clientY,claimed:!1}:null},{passive:!0,signal:a.signal}),S.addEventListener("touchmove",M=>{if(!ze||M.touches.length!==1)return;if(ze.claimed){M.cancelable&&M.preventDefault();return}if(!M.cancelable){ze=null;return}let w=M.touches[0],P=Math.abs(w.clientX-ze.x),X=Math.abs(w.clientY-ze.y);!(P<f.claimAfterPx)&&X<P*f.claimSteepness&&(ze.claimed=!0,M.preventDefault())},{passive:!1,signal:a.signal}),Ke();let nt=new ResizeObserver(Ke);function Je(M,w){let P=la(M.index,e.length,w,!0);s.prioritize(P).catch(()=>{})}function $e(){!h||c||ie.getContext().isContextLost()||(Y=!0,De(performance.now()),n.dataset.magazineState="ready",n.dataset.magazineOpeningReady="true",i.onOpeningReady?.(S),u())}nt.observe(S),S.addEventListener("webglcontextlost",M=>{M.preventDefault(),n.dataset.magazineState="recovering",Ct(),et=null,Ze=null,ie.setAnimationLoop(null)},{signal:a.signal}),S.addEventListener("webglcontextrestored",$e,{signal:a.signal});for(let M=0;M<m;M++){let w=(function(P,X,ce){let de={uPileLift:{value:new mn(1,0,0)},uPileReach:{value:new rn(1,1)},uConeTaper:{value:0},uTailCurl:{value:new Xo(1,0,1,1)},uTailBend:{value:0},uCone:{value:new mn(0,1,0)},uFlipRotation:{value:new rn(1,0)},uPatternTex:{value:ue},uBackMap:{value:X}},Ee=`
        ${E}

        uniform vec3 uPileLift;
        uniform float uConeTaper;
        uniform vec2 uPileReach;
        uniform vec4 uTailCurl;
        uniform float uTailBend;
        uniform vec3 uCone;
        uniform vec2 uFlipRotation;
        uniform sampler2D uBackMap;
        varying vec2 vGrainUv;

        float _restLift(float x) {
            float liftT = 1.0 - min(x / uPileLift.x, 1.0);
            float fall = uPileLift.z * smoothstep(uPileLift.x, 1.0, x);
            return uPileLift.y * sqrt(1.0 - liftT * liftT) * (1.0 - fall);
        }

        vec3 _coneWrap(
            float flatSheetX,
            float flatSheetY,
            float spread,
            float topR,
            float maxWrap
        ) {
            float apexY   = SHEET_ASPECT * 0.5;
            float rowR    = max(1e-5, topR + (apexY - flatSheetY) * spread);
            float cosCone = sqrt(max(0.0, 1.0 - spread * spread));

            float slant = flatSheetX * spread / rowR;
            float lean  = abs(slant) < 1e-3 ? 1.0 - slant * slant / 3.0
                                            : atan(slant) / slant;
            float wrap  = (flatSheetX / rowR) * lean;

            vec3 rolledAt;
            if (wrap <= maxWrap) {
                float reachR = length(vec2(rowR, flatSheetX * spread));
                rolledAt = vec3(
                    reachR * sin(wrap),
                    flatSheetY + spread * (reachR * (1.0 - cos(wrap))
                        - flatSheetX * flatSheetX / (rowR + reachR)),
                    reachR * cosCone * (1.0 - cos(wrap))
                );
            } else {
                float capFan = spread * maxWrap;
                float capSin = abs(capFan) < 1e-3 ? 1.0 - capFan * capFan / 6.0
                                                  : sin(capFan) / capFan;
                float capVers = abs(capFan) < 1e-3
                    ? capFan * (0.5 - capFan * capFan / 24.0)
                    : (1.0 - cos(capFan)) / capFan;

                float along = flatSheetX * spread * sin(capFan) + rowR * cos(capFan);
                float past  = flatSheetX * cos(capFan) - rowR * maxWrap * capSin;
                float lift  = along * (1.0 - cos(maxWrap)) + past * sin(maxWrap);

                rolledAt = vec3(
                    along * sin(maxWrap) + past * cos(maxWrap),
                    flatSheetY + rowR * maxWrap * capVers
                        - flatSheetX * sin(capFan) + spread * lift,
                    cosCone * lift
                );
            }

            return rolledAt;
        }

        vec3 _sheetShape(float flatSheetX, float flatSheetY) {
            return _coneWrap(flatSheetX, flatSheetY, uCone.x, uCone.y, uCone.z);
        }

        vec3 _pileShape(float u, float t) {
            float row = t / SHEET_ASPECT;
            float taper = 1.0 + uConeTaper * row;
            float x = u * mix(uPileReach.x, uPileReach.y, row + 0.5);
            return vec3(x, t, _restLift(x) * taper);
        }

        vec3 _tailCurl(vec2 p) {
            float cosTilt = uTailCurl.x;
            float sinTilt = uTailCurl.y;
            float along = p.x * cosTilt + p.y * sinTilt;
            float across = -p.x * sinTilt + p.y * cosTilt;
            float beyond = max(0.0, along - uTailCurl.z);
            float angle = beyond / uTailCurl.w * uTailBend;
            float sinc = abs(angle) < 1e-4 ? 1.0 : sin(angle) / angle;
            float versine = abs(angle) < 1e-4 ? 0.0 : (1.0 - cos(angle)) / angle;
            float curledAlong = along - beyond + beyond * sinc;
            return vec3(
                curledAlong * cosTilt - across * sinTilt,
                curledAlong * sinTilt + across * cosTilt,
                beyond * versine
            );
        }

        vec3 _spunAboutSpine(vec3 shape, float pileLift) {
            float px = shape.x;
            float py = shape.y;
            float pz = shape.z + pileLift;

            float cosRot = uFlipRotation.x;
            float sinRot = uFlipRotation.y;

            float x = px * cosRot - pz * sinRot;
            float y = py;
            float z = px * sinRot + pz * cosRot;

            return vec3(x, y, z);
        }

        vec3 _computeSheetPosition(vec2 uv) {
            vec3 pile = _pileShape(uv.x, (uv.y - 0.5) * SHEET_ASPECT);
            // laid on the roll, the free part bowed back past it
            vec3 curled = _tailCurl(pile.xy);
            vec3 shape = _sheetShape(curled.x, curled.y);
            if (curled.z != 0.0) {
                vec3 alongX = _sheetShape(curled.x + 1e-3, curled.y) - shape;
                vec3 alongY = _sheetShape(curled.x, curled.y + 1e-3) - shape;
                shape += normalize(cross(alongX, alongY)) * curled.z;
            }
            return _spunAboutSpine(shape, pile.z);
        }

        vec3 _transformedSheetPosition;
    `,fe=`
        float epsilon = NORMAL_EPSILON;
        vec2 du = vec2(epsilon, epsilon / SHEET_ASPECT);

        vec3 sheetP  = _computeSheetPosition(uv);
        vec3 sheetPx = _computeSheetPosition(uv + vec2(du.x, 0.0));
        vec3 sheetPy = _computeSheetPosition(uv + vec2(0.0, du.y));

        vec3 surfaceNormal = normalize(cross(sheetPx - sheetP, sheetPy - sheetP));

        _transformedSheetPosition = sheetP;
    `,le=`
        _transformedSheetPosition = _computeSheetPosition(uv);
    `,se=new Jr({map:P,side:_i,metalness:.17,roughness:.5});se.onBeforeCompile=Ae=>{Object.assign(Ae.uniforms,de),Ae.vertexShader=Ee+Ae.vertexShader,Ae.vertexShader=Ae.vertexShader.replace("#include <beginnormal_vertex>",`
            #include <beginnormal_vertex>
            {
                ${fe}
                objectNormal = surfaceNormal;
            }
            `),Ae.vertexShader=Ae.vertexShader.replace("#include <begin_vertex>",`vec3 transformed = _transformedSheetPosition;
            vGrainUv = uv;`),Ae.fragmentShader=Ae.fragmentShader.replace("#include <lights_fragment_begin>",re),Ae.fragmentShader=Ae.fragmentShader.replace("#include <normal_fragment_begin>",`
            vec3 normal = normalize(vNormal);
            float faceDirection = normal.z >= 0.0 ? 1.0 : -1.0;
            normal *= faceDirection;
            vec3 nonPerturbedNormal = normal;
            `),Ae.fragmentShader=E+`uniform sampler2D uBackMap;
uniform sampler2D uPatternTex;
varying vec2 vGrainUv;
`+Ae.fragmentShader,Ae.fragmentShader=Ae.fragmentShader.replace("#include <map_fragment>",`
            float inkAmount = 0.0;
            #ifdef USE_MAP
                vec2 flippedUv = vec2(1.0 - vMapUv.x, vMapUv.y);
                vec4 frontColor = texture2D(map, vMapUv);
                vec4 backColor  = texture2D(uBackMap, flippedUv);
                vec4 faceColor  = gl_FrontFacing ? frontColor : backColor;
                vec4 otherColor = gl_FrontFacing ? backColor  : frontColor;
                vec4 sheetColor = faceColor;
                sheetColor.rgb *= mix(vec3(1.0), otherColor.rgb, PAPER_TRANSPARENCY);
                diffuseColor *= sheetColor;
                inkAmount = 1.0 - dot(faceColor.rgb, vec3(0.299, 0.587, 0.114));
            #endif
            `),Ae.fragmentShader=Ae.fragmentShader.replace("#include <roughnessmap_fragment>",`
            #include <roughnessmap_fragment>
            roughnessFactor *= mix(1., 0., inkAmount * INK_GLOSS);
            float pattern = texture2D(uPatternTex, vGrainUv * PATTERN_SIZE * vec2(1.0, SHEET_ASPECT)).r;
            pattern = 2. * pow(pattern, 7.);
            roughnessFactor = clamp(mix(roughnessFactor, 1.0, clamp(pattern * PATTERN_ROUGHNESS, 0.0, 1.0)), 0.0, 1.0);
            `),Ae.fragmentShader=Ae.fragmentShader.replace("#include <opaque_fragment>",`
            #include <opaque_fragment>
            gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.), pattern * TEXTURE_COLOR);
            `)};let Se=new Kr({depthPacking:ea,side:_i});Se.onBeforeCompile=Ae=>{Object.assign(Ae.uniforms,de),Ae.vertexShader=Ee+Ae.vertexShader,Ae.vertexShader=Ae.vertexShader.replace("#include <begin_vertex>",`
            ${le}
            vec3 transformed = _transformedSheetPosition - vec3(SHADOW_OFFSET_X, 0., 0.);
            `)};let Ce=new Yi(ye,se);return Ce.customDepthMaterial=Se,Ce.castShadow=!0,Ce.receiveShadow=!0,{mesh:Ce,sheetUniforms:de,flipProgress:+(ce<B),index:ce,grabX:1,grabXTarget:1,grabY:0,grabYTarget:0,wobble:{tiltDeg:0,flipTime:1}}})(te,te,M);D.push(w),_.add(w.mesh)}function T(){let M=qo(B,m,J.renderDepth);return r.window(M),s?.setWindow(M),i.onChange?.({pageIndex:B,pageCount:m,ready:h,animating:Q.length>0||et!==null}),M}u=()=>{d&&h&&!document.hidden&&!ie.getContext().isContextLost()?(K=0,Y=!0,ie.setAnimationLoop(De)):ie.setAnimationLoop(null)},document.addEventListener("visibilitychange",u,{signal:a.signal}),(v=new IntersectionObserver(M=>{d=M[M.length-1].isIntersecting,u()},{rootMargin:"50% 0px"})).observe(n),n.dataset.magazineState="preparing",r.mark("scene-initialized");let N=T();return s=sa({count:m,window:N,load:(M,w)=>oa(e[M],w,()=>r.mark("image-loaded",M),a.signal),attach:function(M,w){if(c)return;let P=new ia(w);P.colorSpace=vi,P.anisotropy=I,P.needsUpdate=!0;try{ie.initTexture(P)}catch(ce){throw P.dispose(),ce}$[M]?.dispose(),$[M]=P;let X=D[M];X&&(X.mesh.material.map=P,X.mesh.material.needsUpdate=!0),Y=!0},onEvent:r.mark,onProgress:M=>{o=M.visible,r.progress(M),Y=!0},onError:(M,w)=>{i.onPageError?.(`Page ${M+1}: ${String(w)}`),console.warn(`sheet side ${M+1} failed to load`,w)}}),Promise.all([new Promise(M=>{if(c)return M();new ra().load(i.grainUrl,w=>{if(c)return w.dispose(),M();for(let P of(p=w,w.wrapS=w.wrapT=na,w.anisotropy=I,D))P.sheetUniforms.uPatternTex.value=w;ie.initTexture(w),Y=!0,M()},void 0,w=>{console.warn("magazine pattern failed to load",w),M()})}).then(()=>{l=!0,r.mark("grain-settled"),Y=!0}),s.ensure(N.visible)]).then(()=>{c||(h=!0,$e())}).catch(M=>{c||(n.dataset.magazineState="error",i.onLoadError?.(M))}),{destroy:()=>{for(let M of(c=!0,s.dispose(),Ct(),a.abort(),nt.disconnect(),v?.disconnect(),ie.setAnimationLoop(null),D))M.mesh.geometry.dispose(),M.mesh.material.dispose(),M.mesh.customDepthMaterial.dispose();for(let M of $)M?.dispose();p?.dispose(),ue.dispose(),te.dispose(),ie.dispose(),S.remove()},getState:()=>({pageIndex:B,pageCount:m,ready:h,animating:Q.length>0||et!==null}),turn(M){if(!h||c||Q.length||et)return!1;let w=D[M?B:B-1];return w?(Ct(),Je(w,M),w.wobble=lt(),_e(w,M,+!!M),!0):!1},goToPage(M){if(c||!h||!Number.isFinite(M))return!1;Ct(),et=null,Ze=null,Q.length=0,B=Math.max(0,Math.min(m-1,Math.trunc(M)));for(let w of D)w.flipProgress=+(w.index<B);return Y=!0,T(),!0}}}var Qo="data:font/woff2;base64,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";var ys=1.377,fh=.01,mh="#fcfcf9",el={en:{loading:"Preparing pages",failed:"The pages did not load.",retry:"Reload",back:"Back cover",prev:"Previous page",next:"Next page",controls:"Page controls",hint:"Drag or click a page \xB7 \u2190 \u2192 keys",hintTouch:"Drag or tap a page",credit:"Page-turn renderer: Paper Mono \u2197",layout:"Page layout",single:"Single",spread:"Spread"},zh:{loading:"\u6B63\u5728\u51C6\u5907\u4E66\u9875",failed:"\u4E66\u9875\u6CA1\u6709\u52A0\u8F7D\u6210\u529F\u3002",retry:"\u91CD\u65B0\u52A0\u8F7D",back:"\u5C01\u5E95",prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875",controls:"\u7FFB\u9875\u63A7\u5236",hint:"\u62D6\u52A8\u6216\u70B9\u51FB\u4E66\u9875 \xB7 \u952E\u76D8 \u2190 \u2192",hintTouch:"\u62D6\u52A8\u6216\u8F7B\u70B9\u4E66\u9875",credit:"\u7FFB\u9875\u6548\u679C\u6765\u6E90\uFF1APaper Mono \u2197",layout:"\u7248\u5F0F",single:"\u5355\u9875",spread:"\u53CC\u9875"}},gh=`
@font-face{font-family:"Paper Mono";src:url(${Qo}) format("woff2");font-weight:100 800;font-display:swap}
:root{--paper:#f6f6f3;--ink:#222;--muted:#747473;--grid:#cfdff5;--metric:#8baddc;--focus:#4c94fc;--hover:#efefeb;--gutter:24px}
*{box-sizing:border-box}html,body{margin:0;height:100%;background:var(--paper);color:var(--ink)}
body{height:100svh;overflow:hidden;display:grid;grid-template-rows:48px minmax(0,1fr) 48px;grid-template-areas:"head" "stage" "bar";font:400 14px/24px "Paper Mono","PingFang SC","Hiragino Sans GB",system-ui,sans-serif;font-feature-settings:"ss02","zero";-webkit-font-smoothing:antialiased}
button{font:inherit;color:inherit;cursor:pointer;border:0;background:transparent;border-radius:5px;transition:background-color .15s cubic-bezier(0,0,.2,1)}button:focus-visible,a:focus-visible{outline:2px solid var(--focus);outline-offset:-4px}
header{grid-area:head;display:flex;align-items:center;min-width:0;padding:0 var(--gutter)}h1{margin:0;font-size:14px;line-height:24px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.stage{grid-area:stage;position:relative;overflow:hidden;container-type:size;display:grid;place-items:center}.stage::before{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(to right,var(--grid) 1px,transparent 1px),linear-gradient(to bottom,var(--grid) 1px,transparent 1px);background-size:12px 24px;background-position:calc(50% + 6px) 0;-webkit-mask-image:radial-gradient(ellipse 70% 75% at 50% 50%,#000 55%,transparent);mask-image:radial-gradient(ellipse 70% 75% at 50% 50%,#000 55%,transparent)}
.frame{width:min(100cqw - 2 * var(--gutter),(100cqh - 48px) * 1.44753,1200px);aspect-ratio:1.44753;position:relative}.book{position:absolute;inset:0;touch-action:pan-y pinch-zoom}.book>[data-magazine-layer]{position:absolute;top:-27.975%;left:-27.975%;width:155.95%;height:155.95%;display:block;pointer-events:none}.book>canvas{opacity:0}.book[data-magazine-state=ready]>canvas{opacity:1}.book>[data-magazine-hit-area]{cursor:grab}.book.leaving,.book.leaving *{pointer-events:none!important}.book>[data-magazine-hit-area]:active{cursor:grabbing}
.loading{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;pointer-events:none;font-size:12px;color:var(--muted)}.progress{color:var(--ink);letter-spacing:.1em;white-space:pre}.loading.failed #loading-text{font-size:14px;color:var(--ink)}.loading button{pointer-events:auto;margin-top:12px;height:24px;padding:0 10px;background:#f9f9f9;box-shadow:inset 0 1px 0 #ffffffbd,0 0 0 1px #0000001f,0 1px 3px -1px #00000026;font-size:12px;line-height:16px;font-weight:500;color:#000c}.loading button:hover{background:#fff}[hidden]{display:none!important}
.bar{grid-area:bar;display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);align-items:center;gap:24px;padding:0 var(--gutter);font-size:12px;color:var(--muted)}.hint,.credit{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hint{margin:0;justify-self:start;max-width:100%;transition:opacity .6s ease}.hint.done{opacity:0}.credit{justify-self:end;max-width:100%;color:inherit;text-decoration:none}.credit:hover{color:var(--ink)}
.controls{display:flex;align-items:center}.controls button{width:48px;height:48px;padding:0;font-size:16px;line-height:24px}.controls button:disabled{opacity:.25;cursor:default}.counter{width:120px;text-align:center;font-size:14px;color:var(--ink);white-space:nowrap}.now{transition:color 1.4s cubic-bezier(.4,0,.2,1)}.now.flash{color:var(--metric);transition:none}
.layout{display:none;gap:2px;padding:1px;border-radius:6px;background:#0000000d}.layout button{min-width:38px;padding:3px 8px;font-size:12px;line-height:16px;color:#00000080}.layout button[aria-pressed=true]{background:#f9f9f9;font-weight:500;color:#000c;box-shadow:inset 0 1px 0 #ffffffbd,inset 0 0 1px 1px #ffffffbd,0 0 1px #00000030,0 1px 3px -1px #00000020;cursor:default}
@media(max-width:600px){:root{--gutter:16px}}
@media(max-width:600px),(orientation:portrait){body{grid-template-rows:48px minmax(0,1fr) auto 48px 24px minmax(0,1fr) 48px;grid-template-areas:"head" "." "stage" "controls" "hint" "." "credit"}html{overflow-x:hidden}.stage{height:calc((100vw - 2 * var(--gutter)) / 1.44753 + 48px);overflow:visible;overflow-x:clip}.bar{display:contents}.controls{grid-area:controls;justify-self:center}.hint{grid-area:hint;justify-self:center;padding:0 var(--gutter)}.credit{grid-area:credit;align-self:center;padding:0 var(--gutter)}}
/* Portrait screens get a Single / Spread switch under the page numbers. Single
   uses Paper's mobile renderer: a 0.65 frame, canvas at 100% scaled 1.3 (Paper's
   own layout constants), and the stage takes all the height left. */
@media(orientation:portrait){body{grid-template-rows:48px minmax(0,1fr) auto 48px 24px 24px minmax(0,1fr) 48px;grid-template-areas:"head" "." "stage" "controls" "layout" "hint" "." "credit"}.layout{display:flex;grid-area:layout;justify-self:center}
body[data-mode=single]{grid-template-rows:48px minmax(0,1fr) 48px 24px 24px 48px;grid-template-areas:"head" "stage" "controls" "layout" "hint" "credit"}body[data-mode=single] .stage{height:auto;overflow:hidden}body[data-mode=single] .frame{width:min(100cqw - 2 * var(--gutter),(100cqh - 48px) * .65);aspect-ratio:.65;margin-bottom:-3%}.book[data-mode=single]>[data-magazine-layer]{inset:0;width:100%;height:100%;transform:scale(1.3);pointer-events:auto;touch-action:pan-y pinch-zoom;cursor:grab}}
@media(hover:hover){.controls button:hover:not(:disabled){background:var(--hover)}.layout button[aria-pressed=false]:hover{color:#000c}}
@media(prefers-reduced-motion:reduce){*{transition:none!important}}
`,Kt=window.OPENZINE||{pages:[]},kt=el[Kt.lang]||el.en,sl=Kt.title||"OpenZine",_h=matchMedia("(hover: none) and (pointer: coarse)").matches,vh=matchMedia("(prefers-reduced-motion: reduce)"),ws=matchMedia("(orientation: portrait)");document.documentElement.lang=Kt.lang==="zh"?"zh-CN":"en";document.title=sl;var ol=document.createElement("style");ol.textContent=gh;document.head.append(ol);document.body.innerHTML=`
<header><h1 id="title"></h1></header>
<main class="stage"><div class="frame"><div class="book" id="book"></div><div class="loading" id="loading"><span id="loading-text"></span><span class="progress" id="progress"></span><button id="retry" hidden></button></div></div></main>
<footer class="bar">
  <p class="hint" id="hint"></p>
  <div class="controls" id="controls" role="group"><button id="prev">\u2190</button><span class="counter" id="counter" aria-live="polite">\u2014</span><button id="next">\u2192</button></div>
  <div class="layout" id="layout" role="group"><button data-mode="single"></button><button data-mode="spread"></button></div>
  <a class="credit" href="https://paper.design/mono" target="_blank" rel="noopener noreferrer" id="credit"></a>
</footer>`;var je=n=>document.getElementById(n);je("title").textContent=sl;je("retry").textContent=kt.retry;je("prev").setAttribute("aria-label",kt.prev);je("next").setAttribute("aria-label",kt.next);je("controls").setAttribute("aria-label",kt.controls);je("layout").setAttribute("aria-label",kt.layout);for(let n of je("layout").children)n.textContent=kt[n.dataset.mode];je("hint").textContent=_h?kt.hintTouch:kt.hint;je("credit").textContent=kt.credit;var ot=null,Ji=null,Si=0,ll=Kt.portrait==="spread"?"spread":"single",Ft=null,As=()=>ws.matches?ll:"spread",An=0,cl=n=>Math.ceil(n/2);async function xh(n){let e=new Image;e.src=n,await e.decode();let t=e.naturalHeight/e.naturalWidth;if(Math.abs(t-ys)/ys<=fh)return n;let i=document.createElement("canvas");i.width=1440,i.height=Math.round(1440*ys);let r=i.getContext("2d");r.fillStyle=mh,r.fillRect(0,0,i.width,i.height);let a=Math.min(i.width/e.naturalWidth,i.height/e.naturalHeight),s=e.naturalWidth*a,o=e.naturalHeight*a;return r.drawImage(e,(i.width-s)/2,(i.height-o)/2,s,o),i.toDataURL("image/jpeg",.92)}var ha=(n,e)=>String(n).padStart(Math.max(2,String(e).length),"0");function tl(n,e){let t=Math.min(e,24),i=Math.round(n/e*t);je("progress").textContent="\u2588".repeat(i)+"\u2591".repeat(t-i)+`  ${ha(n,e)} / ${ha(e,e)}`}function Ts(n){if(Ft==="single")return{mode:Ft,position:n.pageIndex,pageCount:n.pageCount,visiblePages:[n.pageIndex+1],canPrevious:n.pageIndex>0,canNext:!0};let e=(Kt.pageCount??n.pageCount)-1,t=n.visiblePages.includes(An+1);return{mode:Ft,position:t?An:n.visiblePages.length?Math.min(e,Math.max(0,n.spread*2-1)):e,pageCount:n.pageCount,visiblePages:n.visiblePages,spread:n.spread,totalSpreads:n.totalSpreads,canPrevious:n.spread>0,canNext:n.spread<n.totalSpreads}}var Es=null,nl=null,il=0;function rl(n){An=n.position;let e=n.visiblePages.length?n.visiblePages.map(t=>ha(t,n.pageCount)).join("\u2013"):kt.back;if(e!==Es){let t=je("counter");t.replaceChildren();let i=document.createElement("span");i.className="now",i.textContent=e,t.append(i,n.visiblePages.length?` / ${ha(n.pageCount,n.pageCount)}`:""),Es!==null&&!vh.matches&&(i.classList.add("flash"),clearTimeout(il),il=setTimeout(()=>i.classList.remove("flash"),400)),Es=e}nl??=n.position,n.position!==nl&&je("hint").classList.add("done"),je("prev").disabled=!n.canPrevious,je("next").disabled=!n.canNext}function al(n){je("loading").hidden=!1,je("loading").classList.add("failed"),je("loading-text").textContent=kt.failed,je("progress").hidden=!0,je("retry").hidden=!1,console.error(n)}var Zi=null;function yi(){Zi?.book.destroy(),Zi?.el.remove(),Zi=null}async function $i(n=An,{keepOld:e=!1}={}){let t=++Si,i=je("book"),r=ot&&i.dataset.magazineOpeningReady==="true",a=i.getBoundingClientRect();Ft=As(),document.body.dataset.mode=Ft;for(let l of je("layout").children)l.setAttribute("aria-pressed",String(l.dataset.mode===Ft));let s=i.parentElement;if(e&&r){yi(),Zi={book:ot,el:i},i.removeAttribute("id"),i.classList.add("leaving");let l=s.getBoundingClientRect();Object.assign(i.style,{inset:"auto",left:`${a.left-l.left}px`,top:`${a.top-l.top}px`,width:`${a.width}px`,height:`${a.height}px`})}else e||yi(),ot?.destroy(),i.remove();ot=null;let o=document.createElement("div");o.className="book",o.id="book",o.dataset.mode=Ft,s.prepend(o),je("loading").hidden=!!Zi,je("loading").classList.remove("failed"),je("loading-text").textContent=kt.loading,je("progress").hidden=!1,je("retry").hidden=!0,je("prev").disabled=je("next").disabled=!0;try{if(!Kt.pages?.length)throw Error("No pages in this book");let l=Kt.pages.length,c=0;if(tl(Ji?l:0,l),Ji??=await Promise.all(Kt.pages.map(u=>xh(u).then(p=>(tl(++c,l),p)))),t!==Si)return;let h=!1,d={grainUrl:Kt.grain,onChange:u=>h&&t===Si&&rl(Ts(u)),onOpeningReady(){t===Si&&(h=!0,yi(),je("loading").hidden=!0,ot&&rl(Ts(ot.getState())))},onLoadError:u=>t===Si&&(yi(),al(u))};if(Ft==="single"){let u=Ji.slice(0,Kt.pageCount??Ji.length);ot=$o(je("book"),u,Math.min(n,u.length-1),d)}else ot=Zo(je("book"),Ji,{...d,initialSpread:cl(n)})}catch(l){t===Si&&(yi(),al(l))}}function bs(n){return ot?Ft==="single"?ot.goToPage(n):ot.goToSpread(cl(n)):!1}function Mh(){if(!ot)return!1;let n=ot.getState();return Ft==="single"?ot.goToPage(n.pageCount-1):ot.goToSpread(n.totalSpreads)}function hl(n){return!["single","spread"].includes(n)||!ws.matches?!1:(ll=n,As()!==Ft&&$i(An,{keepOld:!0}),!0)}je("prev").onclick=()=>ot?.turn(!1);je("next").onclick=()=>ot?.turn(!0);je("retry").onclick=()=>$i(An);je("layout").onclick=n=>{let e=n.target.closest("button");e&&hl(e.dataset.mode)};ws.addEventListener("change",()=>{As()!==Ft&&$i(An)});document.addEventListener("keydown",n=>{n.target.matches?.("input,textarea,select,[contenteditable]")||(n.key==="ArrowRight"||n.key==="ArrowLeft"?(n.preventDefault(),ot?.turn(n.key==="ArrowRight")):n.key==="Home"?(n.preventDefault(),bs(0)):n.key==="End"&&(n.preventDefault(),Mh()))});window.addEventListener("pagehide",()=>(yi(),ot?.destroy()));window.addEventListener("pageshow",n=>{n.persisted&&$i(An)});window.flipBook={getState:()=>ot&&Ts(ot.getState()),next:()=>ot?.turn(!0),previous:()=>ot?.turn(!1),goToPage:bs,goToSpread:n=>bs(Math.max(0,n*2-1)),getMode:()=>Ft,setMode:hl};$i(Math.max(0,(Kt.initialSpread??0)*2-1));})();
/*! Three.js r162 runtime extracted unchanged from Paper Mono browser bundle. MIT; see THREE-LICENSE.txt. */
