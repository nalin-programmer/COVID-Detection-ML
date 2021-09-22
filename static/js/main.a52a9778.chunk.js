(this.webpackJsonpmlproject=this.webpackJsonpmlproject||[]).push([[0],{12:function(e,t,i){},13:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i.n(n),s=i(3),c=i.n(s),a=(i(12),i(13),i(1));function l(){return Object(a.jsxs)("div",{style:{width:"100%"},children:[Object(a.jsx)("div",{style:{width:"100%",textAlign:"center"},children:"All rights reserverd\xae\ufe0f"}),Object(a.jsxs)("div",{style:{width:"100%",display:"flex"},children:[Object(a.jsx)("div",{style:{width:"50%",textAlign:"center"},children:Object(a.jsx)("div",{style:{textAlign:"left",marginLeft:"10px"},children:Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Group Members:"}),Object(a.jsx)("br",{}),"Nalin Agrawal (111915077)",Object(a.jsx)("br",{}),"Prerit Kumar Jha (111915095)",Object(a.jsx)("br",{}),"Vijay Joshi (111915137)",Object(a.jsx)("br",{}),"Swarnim Pratap Singh (111915131)"]})})}),Object(a.jsx)("div",{style:{width:"50%",float:"right"},children:Object(a.jsxs)("p",{children:[Object(a.jsx)("i",{children:"Mechine Learning Project:"}),Object(a.jsx)("center",{children:Object(a.jsx)("b",{children:"Detecting COVID-19 From Chest X-Ray Images using CNN"})})]})})]})]})}function d(){return Object(a.jsxs)("div",{style:{height:"100%",width:"100%"},children:[Object(a.jsx)("center",{children:Object(a.jsx)("h1",{style:{color:"#072a40"},children:"Covid 19 Prediction"})}),Object(a.jsx)("div",{style:{width:"100%",textAlign:"center"},children:Object(a.jsxs)("div",{style:{width:"90%",margin:"20px",padding:"10px",textAlign:"left",border:"1px solid #888888",boxShadow:"5px 2px 10px #888888"},children:[Object(a.jsx)("h2",{children:"What is Covid-19?"}),Object(a.jsx)("p",{children:"COVID-19 is a new strain of coronavirus that has not been previously identified in humans. The COVID-19 is the cause of an outbreak of respiratory illness first detected in Wuhan, Hubei province, China. Since December 2019, cases have been identified in a growing number of countries. The District\u2019s surveillance data can be found here. Coronaviruses are a large family of viruses that are known to cause illness ranging from the common cold to more severe diseases such as Severe Acute Respiratory syndrome (SARS) and Middle East Respiratory Syndrome (MERS)."})]})})]})}var o=i(5),j=i.n(o),h=i(7),b=i(6),p=(i(16),i(2));i(17);p.a.configure();var u=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),i=t[0],r=t[1],s=Object(n.useState)(""),c=Object(b.a)(s,2),l=c[0],d=c[1],o="";return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Upload Image Here"}),Object(a.jsx)("p",{class:"lead"}),Object(a.jsxs)("form",{id:"file-upload-form",class:"uploader",children:[Object(a.jsx)("input",{id:"file-upload",type:"file",name:"fileUpload",onChange:function(e){r(e.target.files[0]),d(URL.createObjectURL(e.target.files[0]))}}),Object(a.jsxs)("label",{for:"file-upload",id:"file-drag",children:[l&&Object(a.jsx)("div",{style:{textAlign:"center",margin:"auto",width:"220px",minHeight:"120px",maxHeight:"auto"},children:Object(a.jsx)("img",{id:"file-image",src:l,alt:"Preview",style:{width:"inherit"}})}),Object(a.jsxs)("div",{id:"start",children:[Object(a.jsx)("i",{class:"fa fa-download","aria-hidden":"true"}),Object(a.jsx)("div",{children:"Select a file or drag here"}),Object(a.jsx)("div",{id:"notimage",class:"hidden",children:"Please select an image"}),Object(a.jsx)("span",{id:"file-upload-btn",class:"btn btn-primary",children:"Select a file"})]})]}),Object(a.jsx)("span",{id:"file-upload-btn",class:"btn btn-primary",onClick:function(e){e.preventDefault(),console.log("POSTING DATA...");var t=i.type;if(["image/jpg","image/jpeg","image/png"].includes(t))if(i.size>1e6)p.a.error("Photo Size Exceeds , Size must be less than 1MB",{position:p.a.POSITION.TOP_CENTER});else{p.a.info("Image Uploading ! Plese Wait !",{position:p.a.POSITION.TOP_CENTER});var n=new FormData;n.append("file",i),n.append("upload_preset","gifter"),n.append("cloud_name","prerit-cloud"),function(){r.apply(this,arguments)}()}else p.a.error("Invalid Image Type, Retry ?",{position:p.a.POSITION.TOP_CENTER});function r(){return(r=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.cloudinary.com/v1_1/prerit-cloud/image/upload",{method:"post",body:n}).then((function(e){return e.json()})).then((function(e){p.a.success("Image Upload Sucessful ! Wait a Moment !",{position:p.a.POSITION.TOP_CENTER}),o=e.url,console.log(o)})).catch((function(e){p.a.error("Image Upload Failed , Retry? ",{position:p.a.POSITION.TOP_CENTER})}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},children:"Submit"})]}),Object(a.jsx)("br",{})]})};var O=function(){return Object(a.jsxs)("div",{style:{width:"100%",height:"100vh"},children:[Object(a.jsx)("div",{style:{width:"100%",height:"74%"},children:Object(a.jsx)(d,{})}),Object(a.jsx)(u,{}),Object(a.jsx)("div",{style:{width:"100%",z:"10",position:"fixed"},className:"footer",children:Object(a.jsx)(l,{})})]})},x=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.a52a9778.chunk.js.map