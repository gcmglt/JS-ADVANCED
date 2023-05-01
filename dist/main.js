(()=>{const e=document.querySelector(".btn"),t=document.querySelector(".city-input__name"),r=document.querySelector(".city-input__description"),n=document.querySelector(".search-wrapper__title"),a=document.querySelector(".result-container__guideline"),o=document.querySelector(".result-container__error"),s=document.querySelector(".score-container__overall"),i=document.querySelector(".score-container__categories "),c=document.querySelector("#card-score__overall"),l=document.querySelector("#card-score__categories");let u;const d=async()=>{const e=await fetch(`https://api.teleport.org/api/urban_areas/slug:${u}/scores/`),o=await e.json(),d=await fetch(`https://api.teleport.org/api/urban_areas/slug:${u}/images/`),p=await d.json();if(404!=e.status){c.classList.remove("card-transparent"),c.classList.add("card-visible"),l.classList.remove("card-transparent"),l.classList.add("card-visible");const e=u.toUpperCase().replaceAll("-"," ");t.value="",n.value="",a.innerHTML="",n.innerHTML=`What is life like in ${e}`,s.innerHTML=`<h1><strong>Overall score:</strong><br> ${o.teleport_city_score.toFixed()} / 100</h1>`,r.innerHTML="",r.innerHTML=`<h3><strong>Quality of life in ${e}</strong>: </h3><p>${o.summary}</p>`,i.innerHTML="",o.categories.forEach((e=>{i.insertAdjacentHTML("afterbegin",`<h3><strong>${e.name}</strong>:<br> ${e.score_out_of_10.toFixed(1)} / 10</h3><br>`)})),document.querySelector("header").style.backgroundImage=`url(${p.photos[0].image.web})`}else m("<br>City not found. Check if there's a typo. <br> Remember that you have to use cities names in english. <br> If none of these problems are yours, maybe that city is not in our database.")},p=e=>(e=(e=e.toLowerCase()).trim()).replaceAll(" ","-"),m=e=>(o.innerHTML=`<p>${e}</p>`,e);t.addEventListener("keydown",(()=>{o.innerHTML=""})),t.addEventListener("focus",(()=>{o.innerHTML=""})),e.addEventListener("click",(e=>{e.preventDefault(),""==t.value?m("You must input a city name!"):(u=p(t.value),d())})),t.addEventListener("keydown",(function(e){"Enter"===e.key&&(e.preventDefault(),u=p(t.value),d())}))})();