(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zQpX:function(t,o,b){"use strict";b.r(o),b.d(o,"AuthorsModule",(function(){return O}));var e=b("SVse"),c=b("iInd"),a=b("hnLn"),r=b("1a3L"),i=b("8Y7J"),s=b("4H9A"),n=b("CZaM");function u(t,o){1&t&&(i.Hb(0,"td",7),i.cc(1,"-no books-"),i.Gb())}function h(t,o){if(1&t&&(i.Hb(0,"span"),i.cc(1),i.Gb()),2&t){const t=i.Pb(2).$implicit;i.ub(1),i.ec(" and ",t.relationships.books.data.length," more... ")}}const l=function(t){return["/books",t]};function d(t,o){if(1&t&&(i.Hb(0,"td"),i.Hb(1,"a",3),i.cc(2),i.Gb(),i.bc(3,h,2,1,"span",6),i.Gb()),2&t){const t=i.Pb().$implicit;i.ub(1),i.Tb("routerLink",i.Xb(3,l,t.relationships.books.data[0].id)),i.ub(1),i.dc(t.relationships.books.data[0].attributes.title),i.ub(1),i.Tb("ngIf",t.relationships.books.data.length>1)}}const p=function(t){return["/authors",t]};function f(t,o){if(1&t&&(i.Hb(0,"tr"),i.Hb(1,"td"),i.cc(2),i.Gb(),i.Hb(3,"td"),i.Hb(4,"a",3),i.cc(5),i.Gb(),i.Hb(6,"code",4),i.Hb(7,"small"),i.cc(8),i.Qb(9,"date"),i.Gb(),i.Gb(),i.Hb(10,"code"),i.Hb(11,"small"),i.cc(12),i.Gb(),i.Gb(),i.Gb(),i.Hb(13,"td"),i.cc(14),i.Qb(15,"date"),i.Gb(),i.Hb(16,"td"),i.cc(17),i.Qb(18,"date"),i.Gb(),i.bc(19,u,2,0,"td",5),i.bc(20,d,4,5,"td",6),i.Hb(21,"td"),i.cc(22),i.Gb(),i.Gb()),2&t){const t=o.$implicit;i.ub(2),i.dc(t.id),i.ub(2),i.Tb("routerLink",i.Xb(17,p,t.id)),i.ub(1),i.dc(t.attributes.name),i.ub(3),i.dc(i.Sb(9,10,t.cache_last_update,"H:MM:SS")),i.ub(4),i.dc(t.source),i.ub(2),i.dc(i.Rb(15,13,t.attributes.date_of_birth)),i.ub(3),i.dc(i.Rb(18,15,t.attributes.date_of_death)),i.ub(2),i.Tb("ngIf",t.relationships.books.data.length<1),i.ub(1),i.Tb("ngIf",t.relationships.books.data.length>0),i.ub(2),i.ec(" ",t.relationships.photos.data.length," ")}}let H=(()=>{class t{constructor(t,o,b){this.route=t,this.authorsService=o,t.queryParams.subscribe(({page:t})=>{o.all({include:["books"],sort:["name"],page:{number:t||1},ttl:3600}).subscribe(t=>{this.authors=t},t=>console.error("Could not load authors :(",t))})}}return t.\u0275fac=function(o){return new(o||t)(i.Eb(c.a),i.Eb(r.a),i.Eb(a.a))},t.\u0275cmp=i.yb({type:t,selectors:[["demo-authors"]],decls:20,vars:4,consts:[[3,"collection"],[1,"table","table-striped"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"routerLink"],["title","Cache last update"],["class","text-muted",4,"ngIf"],[4,"ngIf"],[1,"text-muted"]],template:function(t,o){1&t&&(i.Hb(0,"h3"),i.cc(1,"Authors"),i.Gb(),i.Fb(2,"demo-collection-info",0),i.Hb(3,"table",1),i.Hb(4,"thead"),i.Hb(5,"tr"),i.Hb(6,"th"),i.cc(7,"ID"),i.Gb(),i.Hb(8,"th"),i.cc(9,"Name"),i.Gb(),i.Hb(10,"th"),i.cc(11,"Date of birth"),i.Gb(),i.Hb(12,"th"),i.cc(13,"Date of dead"),i.Gb(),i.Hb(14,"th"),i.cc(15,"Books"),i.Gb(),i.Hb(16,"th"),i.cc(17,"Photos"),i.Gb(),i.Gb(),i.Gb(),i.bc(18,f,23,19,"tr",2),i.Gb(),i.Fb(19,"demo-collection-paginator",0)),2&t&&(i.ub(2),i.Tb("collection",o.authors),i.ub(16),i.Tb("ngForOf",o.authors.data)("ngForTrackBy",o.authors.trackBy),i.ub(1),i.Tb("collection",o.authors))},directives:[s.a,e.i,n.a,c.b,e.j],pipes:[e.d],encapsulation:2}),t})();var G=b("zNQn"),m=b("dC/6");function g(t,o){1&t&&(i.Hb(0,"span"),i.cc(1," This author don't have any photo :(\n"),i.Gb())}function k(t,o){if(1&t&&i.Fb(0,"img",7),2&t){const t=o.$implicit;i.Vb("title","Book id #",t.id,""),i.Tb("src",t.attributes.uri,i.Zb)}}function v(t,o){if(1&t&&(i.Hb(0,"span"),i.bc(1,k,1,2,"img",6),i.Gb()),2&t){const t=i.Pb();i.ub(1),i.Tb("ngForOf",t.author.relationships.photos.data)}}const T=function(t){return["/books",t]};function w(t,o){if(1&t&&(i.Hb(0,"tr"),i.Hb(1,"td"),i.cc(2),i.Gb(),i.Hb(3,"td"),i.Hb(4,"a",10),i.cc(5),i.Gb(),i.Gb(),i.Hb(6,"td"),i.cc(7),i.Qb(8,"date"),i.Gb(),i.Gb()),2&t){const t=o.$implicit;i.ub(2),i.dc(t.id),i.ub(2),i.Tb("routerLink",i.Xb(6,T,t.id)),i.ub(1),i.dc(t.attributes.title),i.ub(2),i.dc(i.Rb(8,4,t.attributes.date_published))}}function F(t,o){if(1&t&&(i.Hb(0,"table",8),i.Hb(1,"thead"),i.Hb(2,"tr"),i.Hb(3,"th"),i.cc(4,"ID"),i.Gb(),i.Hb(5,"th"),i.cc(6,"Title"),i.Gb(),i.Hb(7,"th"),i.cc(8,"Date Published"),i.Gb(),i.Gb(),i.Gb(),i.bc(9,w,9,8,"tr",9),i.Gb()),2&t){const t=i.Pb();i.ub(9),i.Tb("ngForOf",t.author.relationships.books.data)}}const y=[{path:"",component:H},{path:":id",component:(()=>{class t{constructor(t,o,b,e){this.authorsService=t,this.photosService=o,this.route=e,e.params.subscribe(({id:o})=>{t.get(o,{include:["books","photos"],ttl:100}).subscribe(t=>{this.author=t},t=>console.error("Could not load author.",t))})}newAuthor(){let t=this.authorsService.new();t.attributes.name=prompt("New author name:","John Doe"),t.attributes.name&&(t.attributes.date_of_birth="2030-12-10",console.log("author data for save",t.toObject()),t.save().subscribe(o=>{console.log("author saved",t.toObject())}))}updateAuthor(){this.author.attributes.name=prompt("Author name:",this.author.attributes.name),console.log("author data for save with book include",this.author.toObject({include:["books"]})),console.log("author data for save without any include",this.author.toObject()),this.author.save().subscribe(t=>{console.log("author saved",this.author.toObject())})}removeRelationship(){this.author.removeRelationship("photos","1"),this.author.save(),console.log("removeRelationship save with photos include",this.author.toObject())}}return t.\u0275fac=function(o){return new(o||t)(i.Eb(r.a),i.Eb(G.a),i.Eb(a.a),i.Eb(c.a))},t.\u0275cmp=i.yb({type:t,selectors:[["demo-author"]],decls:37,vars:14,consts:[[3,"resource"],[3,"click"],[3,"collection"],[4,"ngIf"],["class","table table-striped",4,"ngIf"],["routerLink","/authors"],["height","150","style","padding-right: 1em",3,"src","title",4,"ngFor","ngForOf"],["height","150",2,"padding-right","1em",3,"src","title"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,o){1&t&&(i.Hb(0,"h3"),i.cc(1),i.Gb(),i.Fb(2,"demo-resource-info",0),i.Hb(3,"ul"),i.Hb(4,"li"),i.cc(5,"Name: "),i.Hb(6,"strong"),i.cc(7),i.Gb(),i.Gb(),i.Hb(8,"li"),i.cc(9,"Date of birth: "),i.Hb(10,"strong"),i.cc(11),i.Qb(12,"date"),i.Gb(),i.Gb(),i.Hb(13,"li"),i.cc(14,"Date of dead: "),i.Hb(15,"strong"),i.cc(16),i.Qb(17,"date"),i.Gb(),i.Gb(),i.Gb(),i.Hb(18,"p"),i.Hb(19,"button",1),i.Nb("click",(function(){return o.newAuthor()})),i.cc(20,"New author"),i.Gb(),i.Hb(21,"button",1),i.Nb("click",(function(){return o.updateAuthor()})),i.cc(22,"Update author"),i.Gb(),i.Hb(23,"button",1),i.Nb("click",(function(){return o.removeRelationship()})),i.cc(24,"Remove relationship"),i.Gb(),i.Gb(),i.Hb(25,"h4"),i.cc(26,"Photos"),i.Gb(),i.Fb(27,"demo-collection-info",2),i.bc(28,g,2,0,"span",3),i.bc(29,v,2,1,"span",3),i.Hb(30,"h4"),i.cc(31,"Books"),i.Gb(),i.Fb(32,"demo-collection-info",2),i.bc(33,F,10,1,"table",4),i.Hb(34,"p"),i.Hb(35,"a",5),i.cc(36,"Volver"),i.Gb(),i.Gb()),2&t&&(i.ub(1),i.ec("Author #",o.author.id,", with books and photos"),i.ub(1),i.Tb("resource",o.author),i.ub(5),i.dc(o.author.attributes.name),i.ub(4),i.dc(i.Rb(12,10,o.author.attributes.date_of_birth)),i.ub(5),i.dc(i.Rb(17,12,o.author.attributes.date_of_death)),i.ub(11),i.Tb("collection",o.author.relationships.photos),i.ub(1),i.Tb("ngIf",0===o.author.relationships.photos.data.length),i.ub(1),i.Tb("ngIf",o.author.relationships.photos.builded),i.ub(3),i.Tb("collection",o.author.relationships.books),i.ub(1),i.Tb("ngIf",o.author.relationships.books.builded))},directives:[m.a,s.a,e.j,c.b,e.i],pipes:[e.d],encapsulation:2}),t})()}];let I=(()=>{class t{}return t.\u0275mod=i.Cb({type:t}),t.\u0275inj=i.Bb({factory:function(o){return new(o||t)},imports:[[c.c.forChild(y)],c.c]}),t})();var _=b("SuZp");let O=(()=>{class t{}return t.\u0275mod=i.Cb({type:t}),t.\u0275inj=i.Bb({factory:function(o){return new(o||t)},imports:[[e.b,_.a,I]]}),t})()}}]);