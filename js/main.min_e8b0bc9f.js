var __reflect=this&&this.__reflect||function(e,t,i){e.__class__=t,i?i.push(t):i=[t],e.__types__=e.__types__?i.concat(e.__types__):i},__extends=this&&this.__extends||function(e,t){function i(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);i.prototype=t.prototype,e.prototype=new i},Main=function(e){function t(){var t=e.call(this)||this;return t.once(egret.Event.ADDED_TO_STAGE,t.onAddToStage,t),t}return __extends(t,e),t.prototype.onAddToStage=function(e){var t=new egret.TextField;t.type=egret.TextFieldType.INPUT,t.inputType=egret.TextFieldInputType.TEXT,t.text="Input text:",t.width=300,this.addChild(t);var i=new egret.TextField;i.type=egret.TextFieldType.INPUT,i.inputType=egret.TextFieldInputType.PASSWORD,i.displayAsPassword=!0,i.text="Password",i.y=100,i.width=300,this.addChild(i);var n=new egret.TextField;n.type=egret.TextFieldType.INPUT,n.inputType=egret.TextFieldInputType.TEL,n.text="Telephone number:",n.y=200,n.width=300,this.addChild(n);var p=new egret.TextField;p.type=egret.TextFieldType.INPUT,p.inputType=egret.TextFieldInputType.TEXT,p.text="Telephone number:",p.y=300,p.width=200,this.addChild(p)},t}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");