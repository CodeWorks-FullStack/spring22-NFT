import{_ as d,A as s}from"./index.82ede532.js";import{c as r,a as l,o as t,b as a,d as e,t as c,F as _,q as p,e as m,w as u}from"./vendor.429513e6.js";const f={name:"Account",setup(){return{account:r(()=>s.account),myDonations:r(()=>s.myDonations)}}},g={class:"container-fluid"},v={class:"row"},h={class:"col"},k={class:"row"};function x(y,w,A,n,D,b){const i=l("router-link");return t(),a("div",g,[e("div",v,[e("div",h,[e("h1",null,"Greetings "+c(n.account.name),1)])]),e("div",k,[(t(!0),a(_,null,p(n.myDonations,o=>(t(),a("div",{class:"col-5 border border-dark p-3 m-1",key:o.id},[m(i,{to:{name:"CampaignPage",params:{id:o.campaignId}}},{default:u(()=>[e("p",null,c(o.campaign.title),1)]),_:2},1032,["to"])]))),128))])])}var j=d(f,[["render",x]]);export{j as default};
