!function(){"use strict";var e=document.querySelector("form"),o=document.querySelector('[name="delay"]'),n=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]');document.querySelector('[type="submit"]');e.style.display="flex";var c=0;function u(e,o){var t=Math.random()>.3;1===e?c=o:c+=Number(n.value),o=c,console.log(c),console.log(e);var u=new Promise((function(e,o){setTimeout((function(){t?e():o()}),c)})).then((function(){console.log("✅ Fulfilled promise ".concat(e," in ").concat(o,"ms"))})).catch((function(){console.log("❌ Rejected promise ".concat(e," in ").concat(o,"ms"))}));console.log(u)}e.addEventListener("submit",(function(){for(var e=1;e<=Number(t.value);e+=1)u(e,Number(o.value))})),e.addEventListener("submit",(function(e){e.preventDefault()}))}();
//# sourceMappingURL=03-promises.8b420b1c.js.map
