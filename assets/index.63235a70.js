import{d as l,j as i,k as r,o as d,e as u,w as c,v as p,f as e,l as m}from"./vendor.5707a39e.js";const _=e("div",{"i-carbon-campsite":"","text-4xl":"","inline-block":""},null,-1),h=e("p",null,[e("a",{rel:"noreferrer",href:"https://github.com/antfu/vitesse-lite",target:"_blank"}," Vitesse Lite ")],-1),v=e("p",null,[e("em",{"text-sm":"",op75:""},"Opinionated Vite Starter Template")],-1),f=e("div",{"py-4":""},null,-1),x=["onKeydown"],b=["disabled"],w=l({setup(y){const t=i(""),s=r(),n=()=>{t.value&&s.push(`/hi/${encodeURIComponent(t.value)}`)};return(k,o)=>(d(),u("div",null,[_,h,v,f,c(e("input",{id:"input","onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),placeholder:"What's your name?",type:"text",autocomplete:"false",p:"x-4 y-2",w:"250px",text:"center",bg:"transparent",border:"~ rounded gray-200 dark:gray-700",outline:"none active:none",onKeydown:m(n,["enter"])},null,40,x),[[p,t.value]]),e("div",null,[e("button",{class:"m-3 text-sm btn",disabled:!t.value,onClick:n}," Go ",8,b)])]))}});export{w as default};