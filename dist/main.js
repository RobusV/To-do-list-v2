(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function n(n){e(1,arguments);var o=Object.prototype.toString.call(n);return n instanceof Date||"object"===t(n)&&"[object Date]"===o?new Date(n.getTime()):"number"==typeof n||"[object Number]"===o?new Date(n):("string"!=typeof n&&"[object String]"!==o||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(t){e(1,arguments);var o=n(t);return o.setHours(0,0,0,0),o}function i(t){return e(1,arguments),function(t,n){e(2,arguments);var i=o(t),r=o(n);return i.getTime()===r.getTime()}(t,Date.now())}Math.pow(10,8);var r=6e4,a=36e5;function c(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function u(t,n){var o;e(1,arguments);var i=c(null!==(o=null==n?void 0:n.additionalDigits)&&void 0!==o?o:2);if(2!==i&&1!==i&&0!==i)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var u,k=function(t){var e,n={},o=t.split(s.dateTimeDelimiter);if(o.length>2)return n;if(/:/.test(o[0])?e=o[0]:(n.date=o[0],e=o[1],s.timeZoneDelimiter.test(n.date)&&(n.date=t.split(s.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var i=s.timezone.exec(e);i?(n.time=e.replace(i[1],""),n.timezone=i[1]):n.time=e}return n}(t);if(k.date){var y=function(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),o=t.match(n);if(!o)return{year:NaN,restDateString:""};var i=o[1]?parseInt(o[1]):null,r=o[2]?parseInt(o[2]):null;return{year:null===r?i:100*r,restDateString:t.slice((o[1]||o[2]).length)}}(k.date,i);u=function(t,e){if(null===e)return new Date(NaN);var n=t.match(l);if(!n)return new Date(NaN);var o=!!n[4],i=m(n[1]),r=m(n[2])-1,a=m(n[3]),c=m(n[4]),u=m(n[5])-1;if(o)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,c,u)?function(t,e,n){var o=new Date(0);o.setUTCFullYear(t,0,4);var i=7*(e-1)+n+1-(o.getUTCDay()||7);return o.setUTCDate(o.getUTCDate()+i),o}(e,c,u):new Date(NaN);var s=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(v[e]||(h(t)?29:28))}(e,r,a)&&function(t,e){return e>=1&&e<=(h(t)?366:365)}(e,i)?(s.setUTCFullYear(e,r,Math.max(i,a)),s):new Date(NaN)}(y.restDateString,y.year)}if(!u||isNaN(u.getTime()))return new Date(NaN);var S,b=u.getTime(),g=0;if(k.time&&(g=function(t){var e=t.match(d);if(!e)return NaN;var n=f(e[1]),o=f(e[2]),i=f(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,o,i)?n*a+o*r+1e3*i:NaN}(k.time),isNaN(g)))return new Date(NaN);if(!k.timezone){var w=new Date(b+g),D=new Date(0);return D.setFullYear(w.getUTCFullYear(),w.getUTCMonth(),w.getUTCDate()),D.setHours(w.getUTCHours(),w.getUTCMinutes(),w.getUTCSeconds(),w.getUTCMilliseconds()),D}return S=function(t){if("Z"===t)return 0;var e=t.match(p);if(!e)return 0;var n="+"===e[1]?-1:1,o=parseInt(e[2]),i=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,i)?n*(o*a+i*r):NaN}(k.timezone),isNaN(S)?new Date(NaN):new Date(b+g+S)}var s={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},l=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,d=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,p=/^([+-])(\d{2})(?::?(\d{2}))?$/;function m(t){return t?parseInt(t):1}function f(t){return t&&parseFloat(t.replace(",","."))||0}var v=[31,null,31,30,31,30,31,31,30,31,30,31];function h(t){return t%400==0||t%4==0&&t%100!=0}var k={};function y(){return k}function S(t,o){var i,r,a,u,s,l,d,p;e(1,arguments);var m=y(),f=c(null!==(i=null!==(r=null!==(a=null!==(u=null==o?void 0:o.weekStartsOn)&&void 0!==u?u:null==o||null===(s=o.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==a?a:m.weekStartsOn)&&void 0!==r?r:null===(d=m.locale)||void 0===d||null===(p=d.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==i?i:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=n(t),h=v.getDay(),k=(h<f?7:0)+h-f;return v.setDate(v.getDate()-k),v.setHours(0,0,0,0),v}function b(t,n){return e(1,arguments),function(t,n,o){e(2,arguments);var i=S(t,o),r=S(n,o);return i.getTime()===r.getTime()}(t,Date.now(),n)}const g=[["Household","Oud papier weg gooien","Naar recycling container brengen","Vergeet niet het oud papier uit de rommelkamer mee te nemen","low","2023-06-14",!0],["Hobbies","Gitaar spelen","Leer de mineur toonladder","over de hele nek van de gitaar","normal","2023-10-01",!0],["Projects","Javascript leren","Leer Javascript, CSS, programmeren in modules","En nieuwe technieken","high","2024-01-01",!1],["Sports","Hardlopen","Ren 5 kilometer","","normal","2023-06-06",!1],["Household","Boodschappen doen","Koop melk, brood en eieren","","high","2023-06-08",!1],["Hobbies","Schilderen","Maak een landschapsschilderij","Met olieverf","low","2023-09-20",!0],["Projects","Website ontwerpen","Ontwerp de lay-out voor een nieuwe website","Maak het responsief","normal","2023-12-05",!1],["Sports","Yoga","Doe een 30-minuten durende yogasessie","","normal","2023-06-09",!0],["Household","Schoonmaken","Maak de badkamer en keuken schoon","","low","2023-06-08",!1],["Hobbies","Koken","Probeer een nieuw recept uit","Mexicaanse tacos","high","2023-09-10",!1]];function w(){return g}function D(t,e){const n=document.querySelector("#form-container");n.classList.remove(t),n.classList.add(e)}function C(){const{contentCat:t,contentTitle:e,contentDescription:n,contentNote:o,contentPrioStatus:i,contentDate:r,contentCompleted:a}=z();t.innerHTML="",e.innerHTML="",n.innerHTML="",o.innerHTML="",i.innerHTML="",r.innerHTML="",a.innerHTML=""}function T(){D("form-container-disabled","form-container-enabled"),C(),document.querySelector("#cancel-button").addEventListener("click",L)}function L(){D("form-container-enabled","form-container-disabled"),C()}function N(){document.querySelector("#label-task-completed").innerHTML="Completed"}function H(){document.querySelector("#form-bottom").innerHTML='<button id ="submit-form-button">Submit</button>'}function q(){document.querySelector("#edit-button").innerHTML=""}function E(t){T(),N(),H(),q();const{contentCat:e,contentTitle:n,contentDescription:o,contentNote:i,contentPrioStatus:r,contentDate:a,contentCompleted:c}=z(),{inputCat:u,inputTitle:s,inputDescription:l,inputNote:d,inputPrioStatus:p,inputDate:m,inputCompleted:f}=F();f.type="checkbox",u.value=t.category,s.value=t.title,l.value=t.description,d.value=t.note,p.value=t.prioStatus,m.value=t.date,f.checked=t.completed,e.appendChild(u),n.appendChild(s),o.appendChild(l),i.appendChild(d),r.appendChild(p),a.appendChild(m),c.appendChild(f)}function M(){T(),H(),q();const{contentCat:t,contentTitle:e,contentDescription:n,contentNote:o,contentPrioStatus:i,contentDate:r}=z(),{inputCat:a,inputTitle:c,inputDescription:u,inputNote:s,inputPrioStatus:l,inputDate:d}=F();t.appendChild(a),e.appendChild(c),n.appendChild(u),o.appendChild(s),i.appendChild(l),r.appendChild(d),document.querySelector("#label-task-completed").innerHTML=""}function x(t,e){const n=document.createElement(t);return n.classList.add(e),n}function P(t,e){const n=document.createElement(t);return n.classList.add(e),n}function j(t,e,n){const o=document.createElement(t);return o.classList.add(e),o.type=n,o}function U(t,e){document.querySelector(e).innerHTML=t}function O(){document.querySelector("#main-content").innerHTML=""}function I(t){document.querySelector("#main-title").innerHTML=t}function Z(t){const e=t,n=document.querySelector("#main-content");e.forEach((t=>{const e=x("ul","task"),o=x("li","task-checkbox"),i=x("input","task-select"),r=x("li","task-text"),a=x("div","task-title"),c=x("div","task-description"),u=x("li","task-edit"),s=x("li","task-delete");i.type="checkbox",i.checked=t.completed,a.innerHTML=t.title,c.innerHTML=t.description,u.innerHTML='<span class="material-symbols-outlined" title="Edit task">edit_note</span>',s.innerHTML='<span class="material-symbols-outlined" title="Delete task">delete</span>',a.addEventListener("click",(()=>function(t){T(),N(),function(t){const e=document.querySelector("#edit-button");e.addEventListener("click",(()=>{C(),E(t)})),""===e.innerHTML&&(e.innerHTML="edit_note")}(t),document.querySelector("#form-bottom").innerHTML="";const{contentCat:e,contentTitle:n,contentDescription:o,contentNote:i,contentPrioStatus:r,contentDate:a,contentCompleted:c}=z(),{viewCat:u,viewTitle:s,viewDescription:l,viewNote:d,viewPrioStatus:p,viewDate:m,viewCompleted:f}=function(){const t=P("p","#view-task-cat"),e=P("p","#view-task-title"),n=P("p","#view-task-desc"),o=P("p","#view-task-note"),i=P("p","#view-task-prio"),r=P("p","#view-task-date"),a=P("input","#view-task-completed");return a.type="checkbox",a.disabled=!0,{viewCat:t,viewTitle:e,viewDescription:n,viewNote:o,viewPrioStatus:i,viewDate:r,viewCompleted:a}}();u.textContent=t.category,s.textContent=t.title,l.textContent=t.description,d.textContent=t.note,p.textContent=t.prioStatus,m.textContent=t.date,f.checked=t.completed,e.appendChild(u),n.appendChild(s),o.appendChild(l),i.appendChild(d),r.appendChild(p),a.appendChild(m),c.appendChild(f)}(t))),u.addEventListener("click",(()=>E(t))),o.append(i),r.append(a,c),e.append(o,r,u,s);const l=document.createElement("hr");n.append(e,l)}))}function z(){return{contentCat:document.querySelector("#content-task-cat"),contentTitle:document.querySelector("#content-task-title"),contentDescription:document.querySelector("#content-task-desc"),contentNote:document.querySelector("#content-task-note"),contentPrioStatus:document.querySelector("#content-task-prio"),contentDate:document.querySelector("#content-task-date"),contentCompleted:document.querySelector("#content-task-completed")}}function F(){return{inputCat:j("input","#input-task-cat","text"),inputTitle:j("input","#input-task-title","text"),inputDescription:j("input","#input-task-desc","text"),inputNote:j("input","#input-task-note","text"),inputPrioStatus:j("input","#input-task-prio","text"),inputDate:j("input","#input-task-date","text"),inputCompleted:P("input","#view-task-completed")}}class Y{constructor(t,e,n,o,i,r,a){this.category=t,this.title=e,this.description=n,this.note=o,this.prioStatus=i,this.date=r,this.completed=a}}function $(){const t=w(),e=[];return t.forEach((t=>{const n=new Y(...t);e.push(n)})),e}function R(t){return new Date,$().filter(t)}function W(){O(),I("All tasks"),Z($())}function A(){O(),I("Todays tasks"),Z(R((t=>i(u(t.date)))))}function B(){O(),I("This weeks tasks"),Z(R((t=>b(u(t.date)))))}function G(){O(),I("Important tasks"),Z(R((t=>!0===t.prioStatus)))}function J(){O(),I("Projects"),Z(R((t=>"Projects"===t.category)))}function K(){O(),I("Household"),Z(R((t=>"Household"===t.category)))}function _(){O(),I("Sports"),Z(R((t=>"Sports"===t.category)))}function V(){O(),I("Hobbies"),Z(R((t=>"Hobbies"===t.category)))}J(),function(){const{optionAll:t,optionToday:e,optionWeek:n,optionPrio:o,catProjects:i,catHousehold:r,catSports:a,catHobbies:c,addButton:u}={optionAll:document.querySelector("#options-all"),optionToday:document.querySelector("#options-today"),optionWeek:document.querySelector("#options-week"),optionPrio:document.querySelector("#options-prio"),catProjects:document.querySelector("#cat-projects"),catHousehold:document.querySelector("#cat-household"),catSports:document.querySelector("#cat-sports"),catHobbies:document.querySelector("#cat-hobbies"),addButton:document.querySelector("#nav-add-button")};t.addEventListener("click",W),e.addEventListener("click",A),n.addEventListener("click",B),o.addEventListener("click",G),i.addEventListener("click",J),r.addEventListener("click",K),a.addEventListener("click",_),c.addEventListener("click",V),u.addEventListener("click",M)}(),function(){const t=document.querySelector("#task-count-all"),e=document.querySelector("#task-count-today"),n=document.querySelector("#task-count-week"),o=document.querySelector("#task-count-prio"),r=document.querySelector("#task-count-projects"),a=document.querySelector("#task-count-household"),c=document.querySelector("#task-count-sports"),s=document.querySelector("#task-count-hobbies");t.addEventListener("load",U(w().length,"#task-count-all")),e.addEventListener("load",U($().filter((t=>i(u(t.date)))).length,"#task-count-today")),n.addEventListener("load",U($().filter((t=>b(u(t.date)))).length,"#task-count-week")),o.addEventListener("load",U($().filter((t=>!0===t.prioStatus)).length,"#task-count-prio")),r.addEventListener("load",U($().filter((t=>"Projects"===t.category)).length,"#task-count-projects")),a.addEventListener("load",U($().filter((t=>"Household"===t.category)).length,"#task-count-household")),c.addEventListener("load",U($().filter((t=>"Sports"===t.category)).length,"#task-count-sports")),s.addEventListener("load",U($().filter((t=>"Hobbies"===t.category)).length,"#task-count-hobbies"))}()})();