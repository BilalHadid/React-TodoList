(this["webpackJsonptodo-create-app"]=this["webpackJsonptodo-create-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),i=n(5),c=n(3),l=n(4),s=n(0),o=n.n(s),u=n(8);s.Component,n(9),n(15);var m=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Navi_Head"},o.a.createElement("h1",null,"It's My First Todo App"))}}]),t}(s.Component),d=n(6),p=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).createTasks=n.createTasks.bind(Object(d.a)(n)),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"createTasks",value:function(e){var t=this;return o.a.createElement("li",{onClick:function(){return t.delete(e.key)},key:e.key},e.text,"          ",o.a.createElement("span",null,"X"))}},{key:"delete",value:function(e){console.log(e),this.props.delete(e)}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return o.a.createElement("ul",{className:"theList"},e)}}]),t}(s.Component),h=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={item:[]},n.addItem=n.addItem.bind(Object(d.a)(n)),n.deleteItem=n.deleteItem.bind(Object(d.a)(n)),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"addItem",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,key:Date.now()};this.setState((function(e){return{item:e.item.concat(t)}}))}else alert("Please Enter Something");this._inputElement.value="",console.log(this.state.item),e.preventDefault()}},{key:"deleteItem",value:function(e){console.log("key is add"+e),console.log("item"+this.state.item);var t=this.state.item.filter((function(t){return t.key!==e}));this.setState({item:t})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todolistMain"},o.a.createElement("div",{className:"header"},o.a.createElement("form",{onSubmit:this.addItem},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Something",ref:function(t){return e._inputElement=t}}),o.a.createElement("button",{className:"btn btn-danger",type:"Submit"},"Submit"))),o.a.createElement(p,{entries:this.state.item,delete:this.deleteItem}))}}]),t}(s.Component),b=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement("div",null,o.a.createElement(h,null)),o.a.createElement("div",null))}}]),t}(s.Component);Object(u.render)(o.a.createElement(b,null),document.getElementById("root"));t.default=b},9:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.227623a0.chunk.js.map