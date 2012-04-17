
var Preference =
{
	ResPopupDelay: 500,
	PostScheme: "bbs2ch:post:",
	ReplyCheckMaxWidth: 10,	//����ȏ�̐��̃��X�Ɍ��y����ꍇ�͋t�Q�ƂƂ��Ȃ�(>>1-1000�Ƃ�)
	TemplateAnchor: ">>1-6",
};


/* ��prototype.js������������������������������������������������������������ */
Function.prototype.bind = function() {
  var __method = this, args = $A(arguments), object = args.shift();
  return function() {
    return __method.apply(object, args.concat($A(arguments)));
  }
}
var $A = Array.from = function(iterable) {
  if (!iterable) return [];
  if (iterable.toArray) {
    return iterable.toArray();
  } else {
    var results = [];
    for (var i = 0, length = iterable.length; i < length; i++)
      results.push(iterable[i]);
    return results;
  }
}
Array.prototype.include = function(val) {
	for(var i=0;i<this.length;i++){
		if (this[i]==val) return true;
	}
	return false;
}
var $=function(id){return document.getElementById(id);}


/* ���C�x���g�n���h�������������������������������������������������������������� */
var EventHandlers = {
	//�C���X�^���X������������̂ɂ��ẮA�����Ńn���h����o�^�B
	//�ЂƂ����Ȃ����̂́AHTML����node�ɒ��ړo�^���Ă��܂���OK�B
	init: function()
	{
		document.addEventListener("mouseover", this.mouseOver.bind(this), false);
		document.addEventListener("click",     this.mouseClick.bind(this), false);
		document.addEventListener("b2raboneadd", this.aboneImmidiate.bind(this), false);
	},
	mouseOver: function(aEvent)
	{
		var t = aEvent.target;
		if (Util.isDecendantOf(t, "resMenu"))
		{	//���X���j���[�Ƀ|�C���g �� �������Ȃ�
			//(resMenu��Article�̎q�v�f�ɂȂ�̂ŁA���ꂪ�Ȃ��Ɗ����Ă��܂�
			return;
		}
		var res = Util.getDecendantNode(t, "ARTICLE");
		if (res != null)
		{	//���X�̏�Ƀ|�C���g �� ���X���j���[�������Ă���
			MessageMenu.attach(res);
		}
		if (t.className=="resPointer")
		{
			new ResPopup(t);
		}		//���X�A���J�[�Ƀ|�C���g �� ���X�|�b�v�A�b�v
		//���\�[�X(�摜�Ƃ�����Ƃ�)�����N�Ƀ|�C���g �� ���\�[�X�|�b�v�A�b�v
		//�X��URL�Ƀ|�C���g �� �X���^�C�̃|�b�v�A�b�v
		//���̑�URL�Ƀ|�C���g �� simpleapi
		//���O������ �� �|�b�v�A�b�v
		//
	},
	mouseClick: function (aEvent)
	{
	},
	aboneImmidiate: function (aEvent)
	{
	},
};

/* �����X���j���[�̏������������������������������������������������������� */
var MessageMenu = {
	init: function()
	{
		this._menu = $("resMenu");
		this._menu.parentNode.removeChild(this._menu);	//���ꂠ�����ق������S��������
	},

	attach: function(node)
	{	//node��ARTICLE�łȂ���΂Ȃ�Ȃ��BARTICLE�ȊO(null���܂�)���w�肷��ƁA���j���[�͂ǂ��ɂ��\������Ȃ��Ȃ�B
		var m = this._menu;		//�Q�ƃR�s�`
		if (m == null) return;	//���X���j���[�Ȃ�
		if (m.parentNode != null) m.parentNode.removeChild(m);	//�f�^�b�`
		if ((node != null) && (node.tagName == "ARTICLE"))
		{
			m.dataset.binding = node.dataset.no;
			//node.childNodes[0].appendChild(m);
			node.insertBefore(m, node.childNodes[1]);
			//node.appendChild(m);
			//TODO: pickup, bookmark, hiding��Ԃ̔��f
		}
		else
		{
			m.dataset.binding = 0;
		}
	},
	ResTo: function(event)
	{	//����Ƀ��X
		var resTo = this._menu.dataset.binding;
		var url = Preference.PostScheme + ThreadInfo.Url;
		if(resTo) url += resTo;
		window.location.href = url;
	},
	PopupRef: function(event)
	{
	},
	ExtractRef: function(event)
	{
	},
	CreateRefTreeHear: function(event)
	{	//�Q�ƃc���[���\�z����
		var current = this._menu.dataset.binding;
		if (current == 0) return;
		var node = this._menu.parentNode;
		if (node == null) return;
		this._deleteExistTree(node);
		this._createNodeTree(current, node);
	},
	_deleteExistTree: function(node)
	{	//�����̃c���[���폜
		while(node.childNodes.length > 3)
		{
			node.removeChild(node.childNodes[3]);
		}
	},
	_createNodeTree: function(from, c)
	{	//�g�����m�[�h���폜���邩�ǂ����́A�c�_���������Ƃ���B�Ƃ肠�����c���Ă����B
		if (MessageStructure.nodesReplyFrom[from])
		{	//from�Ƀ��X���Ă���R�����g������E�E�E
			var rf = MessageStructure.nodesReplyFrom[from];
			for(var i=0, j = rf.length; i < j; i++)
			{
				var node = ThreadMessages.domobj[rf[i]].cloneNode(true);	//ARTICLE
				if (rf[i] > from)
				{	//��_���O�̃��X�͍ċA�I�ɊJ���Ȃ��i�������[�v�΍�j
					this._createNodeTree(rf[i], node);
				}
				this._deleteExistTree(node);
				c.appendChild(node);
			}
		}
	},
	
	SetBookmark: function(event)
	{
	},
	ResetBookmark: function(event)
	{
	},
	SetPickup: function(event)
	{
	},
	ResetPickup: function(event)
	{
	},
	ToggleHiding: function(event)
	{
	},
	ExtractImages: function(event)
	{
	},
};

var Menu = {

	PopupTemplate: function()
	{
		var pp = new ResPopup(null);
		pp.popup(Preference.TemplateAnchor, Util.getElementPagePos($("Menu.Template")), true);
	},
};

/* �����X�̏��������������������������������������������������������������� */
var ThreadMessages = {
	domobj: new Array(),	//DOM�I�u�W�F�N�g�Bindex�̓��X�ԍ�
	jsobj: new Array(),		//DOM�I�u�W�F�N�g���璊�o�����R���e���c�Bindex�̓��X�ԍ�

	contains: function(no)
	{
		return (this.jsobj[no] != null)
	},

	processMessages: function (e)
	{	//e: article�̃R���e�i
		for(var i=0; i<e.childNodes.length; i++)
		{	//����A�L���[�ɓo�^���Ĕ񓯊��Ƃ��ɂ����ق��������̂����B
			this.processMessage(e.childNodes[i]);
		}
	},
	processMessage: function (node)
	{
		if (node.tagName == "ARTICLE")
		{
				var no = new Number(node.dataset.no) + 0;
				var msgNode = node.childNodes[1];
				this.extendAnchor(msgNode);
				this.replaceStr(msgNode);
				this.domobj[no] = node;
				
				//�A�m�e�[�V�����쐬
				var obj = new messageAnnotation();
				obj.no = no;
				obj.aid = node.dataset.aid;
				obj.idcolor = node.dataset.idcolor;
				obj.idbackcolor = node.dataset.idbackcolor;
				obj.author = node.childNodes[0].childNodes[3].textContent;	//author���g���b�v�ɑ΂���a���t�^�����悤�Ȃ̂ŁA������ŁB
				obj.date = node.dataset.date;
				obj.message = msgNode.textContent;
				//mail, beid�͗v���̂���Ȃ����ȁH
				this.jsobj[no] = obj;
				
				//���b�Z�[�W�\�����
				MessageStructure.push(node, obj);
		}
	},
	extendAnchor: function(e)
	{	//�S�p�A���J�[���g��
		var as=e.getElementsByTagName("A");
		//var ml=Profiles.maxLinkContent.value;
		for(var i=0;i<as.length;i++){
			var a=as[i];
			//�R���}���g��
			if(a.className=="resPointer"){
				var bro=a.nextSibling;
				var n=bro.textContent;
				if((n)&&(n.match(/^([0-9,\-]+)/))){
					var c=RegExp.$1;
					a.appendChild(document.createTextNode(c));
					bro.data=n.substr(c.length);
				}
			}
			//��������outLink��K���Ɋ��荞��
			//else if(a.textContent.length>ml){
			//	var t=a.textContent;
			//	if(t.match(/(h?[ft]?tp:\/\/[^\/]+\/)/)){
			//		a.textContent=RegExp.$1+Message.longUrl;
			//		a.title=t;
			//		classTokenPlus(a,"trimedURL")
			//	}
			//}
		}
		//�S�p�A���J�[���E��("�O-�X"��Fx3����\d�����ŏE���Ȃ���������ǉ�)
		var res=e.innerHTML;
		if(this._dblSizeAnchorRegExp.test(res)){
			res=res.replace(this._dblSizeAnchorRegExp,function (a,b,c){
				c=Util.toNarrowString(c);
				return "<a href='#"+c+"' class='resPointer'>&gt;&gt;"+c+"</a>";});
			e.innerHTML=res;
		}
	},
	replaceStr: function(e)
	{	//replaceStr.txt�ɂ��u��
	},
	_dblSizeAnchorRegExp: new RegExp("(����|��|&gt;&gt;|&gt;)([0-9�O-�X,\-]+)","g"),
	
};

//�X���b�h�\��
var MessageStructure = {
	nodesById: new Array(),		//������ID
	nodesReplyFrom: new Array(),	//������t�Q�Ə��
	//�m�[�h���\���ɒǉ��B
	push: function(node, obj)
	{
		//ID�ɂ��\��
		if (obj.aid.length > 5)		//"????"���
		{
			if (!this.nodesById[obj.aid]) this.nodesById[obj.aid] = new Array();
			this.nodesById[obj.aid].push(obj.no);
			if (this.nodesById[obj.aid].length == 2)
			{	//ID�̋����\���B����������̂���IDCOLOR��IDBACKGROUNDCOLOR���L���B�����đ����B
				var s = $("scriptedStyle");
				s.innerHTML += "article[data-aid=\"{0}\"] .id { color: {1}; background-color: {2}; font-weight: bold; }".format(obj.aid, obj.idcolor, obj.idbackcolor);
			}
		}
		
		//Reply�ɂ��\��
		var replyTo = this.getReplyTo(node);
		for(var i=0, j=replyTo.length; i < j; i++)
		{
			var t = replyTo[i];
			if(!this.nodesReplyFrom[t])
			{
				this.nodesReplyFrom[t] = new Array();
				//�t�Q�Ƃ���̋����\���B�Ƃ肠�����t�Q�Ƃ��Ȃ��Ƃ��̓��j���[���\������Ȃ��i�킩��ɂ����̂ŋ����͕K�v�j
				var s = $("scriptedStyle");
				s.innerHTML += "article[data-no=\"{0}\"] .menu .resto { display:table-cell; }\n".format(t);
			}
			this.nodesReplyFrom[t].push(obj.no);
		}
	},
	getReplyTo: function(node)
	{	//����m�[�h�����X���Ă���ԍ��̔z����擾����
		var anchors = node.getElementsByClassName("resPointer");
		var replyTo = new Array();
		for (var i=0, j=anchors.length; i<j; i++)
		{
			var target = anchors[i].textContent;
			var ids = MessageUtil.splitResNumbers(target);
			if (ids.length < Preference.ReplyCheckMaxWidth)
			{
				for (var ii=0, jj = ids.length; ii < jj; ii++)
				{
					replyTo[ids[ii]] = 1;
				}
			}
		}
		var ret = new Array();
		for(var i=0, j=replyTo.length; i<j; i++)
		{
			if (replyTo[i]) ret.push(i);
		}
		return ret;
	},
};

//���X�̂��̃e�[�V�������B���������Ȃǂɂ͂�����g���B
function messageAnnotation(){ };
messageAnnotation.prototype = {
	no: 0,
	aid: "",
	author: "",
	date: "",
	message: "",
};

/* ���|�b�v�A�b�v�������������������������������������������������������������� */
function ResPopup(anchor){ this.init(anchor); }
ResPopup.prototype = 
{
	init: function(anchor)
	{
		//Delay���d�|����
		if (anchor != null)
		{
			var tid = setTimeout(this.popup.bind(this, anchor.textContent, Util.getElementPagePos(anchor), false), Preference.ResPopupDelay);
			anchor.addEventListener("mouseout", 
				function(){
					clearTimeout(tid);
					anchor.removeEventListener("mouseout", arguments.callee, false);
				},false);
		}
	},
	popup: function(target, pos, fixed)
	{	//�|�b�v�A�b�v��\��, target�̓��X�A���J�[�̕�����Bpos�͂ǂ̗v�f����|�b�v�A�b�v���邩
		this.used = true;
		var ids = MessageUtil.splitResNumbers(target);
		this.showPopup(ids, pos, fixed);
	},
	showPopup: function(ids, pos, fixed)
	{
		var container = document.createElement("DIV");
		var innerContainer = document.createElement("DIV");
		container.appendChild(innerContainer);
		for(var i=0, len=ids.length; i < len ; i++)
		{
			var c = ThreadMessages.domobj[ids[i]];
			if (c != null)
			{
				var node = c.cloneNode(true);
				innerContainer.appendChild(node);
			}
		}
		container.className = "popup";
		container.style.left = (pos.pageX + 16) + "px";
		container.style.top = (pos.pageY + 16) + "px";
		if (fixed) container.style.position = "fixed";
		container.addEventListener("mouseout", this.onMouseOut.bind(this), false);
		$("popupContainer").appendChild(container);
		this.limitSize(innerContainer);
		this.container = container;
	},
	onMouseOut: function(aEvent)
	{
		var e = this.container;
		if(aEvent.pageX<=e.offsetLeft||
		   aEvent.pageY<=e.offsetTop||
		   aEvent.pageX>=e.offsetLeft+e.offsetWidth||
		   aEvent.pageY>=e.offsetTop+e.offsetHeight)this.close();
	},
	close: function()
	{
		this.container.parentNode.removeChild(this.container);
	},
	//�T�C�Y����
	limitSize: function(e)
	{
		//���E�E�E��ʕ���80%
		//�����E�E�E�A���J�[�ʒu�̉����ŉ�ʉ��[�܂�(40�͐����o���̃q�Q�̕��Ǝ኱�̗]�T�j�F�Œ�ۏ�R��
		var maxWidth = window.innerWidth *0.8;
		var maxHeight = window.innerHeight - (Util.getElementPagePos(e).pageY - window.pageYOffset) - 40;
		if (maxHeight < window.innerHeight*0.3) maxHeight = window.innerHeight*0.3;
		
		if(e.clientWidth > maxWidth)
		{
			e.style.width = maxWidth + "px";
		}
		if(e.clientHeight > maxHeight)
		{
			e.style.height = maxHeight + "px";
		}
	},
	//��ʓ��ɉ�������(�T�C�Y��������Ă���̂ŕK������͂�)
	adjust: function(){
		var e=this.element;
		var pad=10;//�����ǂ���
		//scrollX��0�Ɖ��肵�Ă������񂶂�˂���ŧ
		var x=window.innerWidth-e.clientWidth-e.x-ScrollBar.size;
		if(x>0){
			if(e.x<0)e.x=pad;
			e.style.left=e.x+"px";
		}else{
			e.style.left="auto";
			e.style.right=pad+"px";
		}
		e.x=e.offsetLeft;
		
		var clientBottom=window.innerHeight+window.scrollY;
		var popupBottom=e.y+e.clientHeight;
		if(clientBottom<popupBottom){//under
			e.y=clientBottom-e.clientHeight-pad;
		}
		if(window.scrollY>e.y){//over
			e.y=window.scrollY+pad;
		}
		e.style.top=e.y+"px";
	},
};


/* �����[�e�B���e�B������������������������������������������������������������ */
var Util = {
	//�������ݶ��ɂ���
	toNarrowString: function(src)
	{
		var str=new String;
		var len=src.length;
		for(var i=0;i<len;i++){
			var c=src.charCodeAt(i);
			if(c>=65281&&c<=65374&&c!=65340){
				str+=String.fromCharCode(c-65248);
			}else{
				str+=src.charAt(i);
			} 
		}
		return str;
	},
	
	isDecendantOf: function(e, id)
	{
		if (e.id == id) return e;
		if (e.parentNode  == null) return null;
		return this.isDecendantOf(e.parentNode, id);
	},
	getDecendantNode: function(e, tagName)
	{
		if (e.tagName == tagName) return e;
		if (e.parentNode  == null) return null;
		return this.getDecendantNode(e.parentNode, tagName);
	},
	getElementPagePos: function(e)
	{	//�v�f�̐�΍��W�����߂�
		var pos = {pageX: 0, pageY: 0};
		while(e != null)
		{
			pos.pageX += e.offsetLeft;
			pos.pageY += e.offsetTop;
			e = e.offsetParent;
		}
		return pos;
	},
};

var MessageUtil = {
	splitResNumbers: function (str)
	{	//���X�ԍ��̐؂蕪���i10-11�Ƃ���10,11,12,13,14...�ɕ�����j�B�߂�l�͐����̔z��B
		str=str.replace(/>/g,"");
		var e=str.split(",");
		var r=new Array();
		for(var i=0;i<e.length;i++){
			if(e[i].match(/(\d+)-(\d+)/)){
				for(var j=parseInt(RegExp.$1);j <= parseInt(RegExp.$2);j++){
					r.push(j);
				}
			}else if(!isNaN(parseInt(e[i])))r.push(parseInt(e[i]));
		}
		return r;
	},
}











function test()
{
/*  //�}���`�X���b�h�����F�ʏ�̏����B���΂炭�ł܂��āA��C�ɂQ�O�O�܂ŕ\������
	for(var i=0; i< 200 ;i++)
	{
            document.body.innerHTML += i++ + "<br>";
	}
	alert("FINISH");
//*/
/*	//�}���`�X���b�h�����FWorker��p���������B���post����ƁA��������Ԃɏ�������悤�ŃK�X 
	var worker = new Worker("http://127.0.0.1:8823/skin/th.js");
	var container = document.createElement("DIV");
	var dd = {cont: container};
	worker.onmessage = function(event)
	{
		var d = event.data;
		if (d.code == -1)
		{
			alert("FINISH" + d.begins);
			//document.body.appendChild(container);
		}
		else
		{
			//container.appendChild(d.node);
		}
	};
	worker.postMessage({begins: 0});
//*/
	ThreadMessages.processMessages($("resContainer"));
	MessageMenu.init();
	EventHandlers.init();
};

//�ȈՔ�string.format�B�u�������ł��Ȃ��B
// http://www.geekdaily.net/2007/06/21/cs-stringformat-for-javascript/
String.format = function(p_txt){
	if ( arguments.length <= 1 ) {
		return p_txt;
	}
	for( var v_idx = 1, v_num = arguments.length; v_idx < v_num; v_idx++ )
	{
		p_txt = p_txt.replace(new RegExp("\\{" + (v_idx - 1) + "\\}", "gi"), arguments[v_idx]);
	}
	return p_txt;
};

String.prototype.format = function(){
Array.prototype.unshift.apply(arguments, [this]);
return String.format.apply(String, arguments);
};

