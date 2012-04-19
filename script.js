var skinName = "PhantomPain3";
var skinVer  = "ver. \"closed alpha\"";
var ownerApp;

var Preference =
{
	ResPopupDelay: 500,			//�|�b�v�A�b�v�\���f�B���C
	PostScheme: "bbs2ch:post:",	//���e�����N�̃X�L�[�}
	ReplyCheckMaxWidth: 10,		//����ȏ�̐��̃��X�Ɍ��y����ꍇ�͋t�Q�ƂƂ��Ȃ�(>>1-1000�Ƃ�)
	TemplateAnchor: ">>1-6",	//�e���v���|�b�v�A�b�v�ŕ\������A���J�[
	PopupOffsetX: 16,			//�|�b�v�A�b�v�̃I�t�Z�b�g(��v�f�E�ォ��̃I�t�Z�b�g�ŁA�q�Q���w���ʒu�j
	PopupOffsetY: 16,			//�|�b�v�A�b�v�̃I�t�Z�b�g
	PopupMargin: 0,				//��ʊO�ɂ͂ݏo���|�b�v�A�b�v�������߂���
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
		var t = aEvent.target;
		var cancel = false;
		if (t.className == "resPointer")
		{
			//TODO: jumpTo
			if(t.textContent.match(/(\d+)/))
			{
				var id = parseInt(RegExp.$1);
				if (ThreadMessages.isDeployed(id))
				{
					var node = ThreadMessages.domobj[id];
					//���
					window.scrollTo(0, Util.getElementPagePos(node).pageY - (window.innerHeight * 0.3));
					//�ڗ�������
					node.dataset.focus = "on";
					setTimeout(function(){ node.dataset.focus = "no"; }, 1000)
				}
			}
			cancel = true;
		}
		if(cancel){
			aEvent.preventDefault();
			aEvent.stopPropagation();
		}
	},
	aboneImmidiate: function (aEvent)
	{
	},
};


/* ���ꗗ�y�C������������������������������������������������������ */
var BoardPane = {
	init: function()
	{
		this.container = $("boardPane");
		this.container.innerHTML = "";	//�S�q���E��

		this.boardList = document.createElement("IFRAME");
		this.boardList.id = "boardList";

		this.container.appendChild(this.boardList);
		
		$("bpHandle").addEventListener("dblclick", this.toggle.bind(this), false);
	},
	toggle: function()
	{
		this._size = this._size ? 0 : window.innerHeight /2;
		this.update();
	},
	update: function()
	{
		this.container.style.height = this._size + "px";
		if (this._size)
		{
			var url = "bbs2ch:board:" + ThreadInfo.Board;
			if (!this.boardList.src) this.boardList.src = url;
		}
	},
};

/* �����X���j���[�̏������������������������������������������������������� */
var MessageMenu = {
	init: function()
	{
		this._menu = $("resMenu");
		$("RMenu.Gear").addEventListener("DOMMouseScroll",this.GearWheel.bind(this),false);
		
		this._menu.parentNode.removeChild(this._menu);	//���ꂠ�����ق������S��������
	},

	attach: function(node)
	{	//node��ARTICLE�łȂ���΂Ȃ�Ȃ��BARTICLE�ȊO(null���܂�)���w�肷��ƁA���j���[�͂ǂ��ɂ��\������Ȃ��Ȃ�B
		var m = this._menu;		//�Q�ƃR�s�`
		if (m == null) return;	//���X���j���[�Ȃ�
		if (node == m.parentNode) return;	//�����Ƃ��Ɋ��蓖�ā�����
		if (m.parentNode != null) m.parentNode.removeChild(m);	//�f�^�b�`
		this.gearNode = null;
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
		var pp = new ResPopup(null);
		pp.offsetX = 8; pp.offsetY = 16;
		pp.popupNumbers(MessageStructure.nodesReplyFrom[this._menu.dataset.binding], Util.getElementPagePos($("RMenu.Ref")) , false);
	},
	ExtractRef: function(event)
	{
	},
	CreateRefTree: function(event)
	{	//�Q�ƃc���[���\�z����
		this.DeleteRefTree(event);	//���폜
		
		var current = this._menu.dataset.binding;
		if (current == 0) return;
		var node = this._menu.parentNode;
		if (node == null) return;
		node.dataset.treed = "y";
		this._createNodeTree(current, node);
	},
	
	DeleteRefTree: function(event)
	{	//�����̃c���[���폜
		var node = this._menu.parentNode;
		if (node == null) return;
		node.dataset.treed = "n";
		
		while(node.childNodes.length > 3)
		{	//3�Ȃ̂̓��X���j���[������Ƃ������B���Ȃ��Ƃ���2�ł����A�K������̂�3�ɂ���B
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
				var node = ThreadMessages.getNode(rf[i], true, false, function(){});	//ARTICLE
				if (rf[i] > from)
				{	//��_���O�̃��X�͍ċA�I�ɊJ���Ȃ��i�������[�v�΍�j
					this._createNodeTree(rf[i], node);
				}
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
	BeginGear: function(event)
	{
		if (this.gearNode)
		{	//���̂Ƃ���\���ɖ߂��H
			return;
		}
		var pp = new ResPopup(null);
		pp.offsetX = 8; pp.offsetY = 16; pp.offsetXe = 20;
		pp.popupNumbers([this._menu.dataset.binding], Util.getElementPagePos($("RMenu.Gear")) , false);
		pp.onClose = (function(p){this.gearNode = NULL;}).bind(this);
		var c = pp.container;
		c.style.border = "none";
		this.gearNode = c.childNodes[0];
		this.gearPopup = pp;
	},
	GearWheel: function(event)
	{
		if (this.gearNode == null)
		{	//TODO::���������ĕK�����������J�n�������Ȃ������H
			this.BeginGear(event);
		}
		var id = parseInt(this.gearNode.firstChild.dataset.no);
		id += (event.detail < 0 ) ? -1 : +1;
		if (ThreadMessages.isReady(id))
		{	//TODO::�ǂݍ���ł���̂��A���̂͂�
			var n = ThreadMessages.getNode(id, true, false, function(){});
			if (n != null)
			{
				this.gearNode.removeChild(this.gearNode.firstChild);
				this.gearNode.appendChild(n);
				this.gearPopup.adjust(this.gearNode, Util.getElementPagePos($("RMenu.Gear")));
			}
		}
		
		event.preventDefault();
	}
};

var Menu = {

	PopupTemplate: function()
	{
		var pp = new ResPopup(null);
		pp.offsetX = 8; pp.offsetY = 16;
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
	getNode: function(id, clone, load, loaded)
	{
		if (this.domobj[id] != null)
		{
			var obj = this.domobj[id];
			if (clone)
			{
				obj = obj.cloneNode(true);
				//obj����A�{��������Ă��Ȃ�����(=���X���j���[�ƓW�J�ς݃c���[�A�W�J�ς݉摜�j���폜����B
				//article> { H , (div) , p , �I�}�P���� } �̏��ɕ���ł���̂ŁAdiv�ƃI�}�P���폜����B
				if (obj.childNodes[1].tagName == "DIV")
				{
					obj.removeChild(obj.childNodes[1]);
				}
				while(obj.childNodes.length > 2)
				{
					obj.removeChild(obj.childNodes[2]);
				}
			}
			return obj
		}
		else
		{	
			if (load)
			{	//TODO: XmlHttpRequest
				//�񓯊��œǂݏo�������āA���ʂ̓R�[���o�b�N�֐�(loaded)�ŕԂ��B
			}
			//������null��Ԃ��̂͌Œ�B
			return null;
		}
	},
	isReady: function(id)
	{	//�ǂݍ��ݍς݂��H
		return (this.domobj[id]);
	},
	isDeployed: function(id)
	{	//���ʂɕ\������Ă��邩�H
		if ( this.domobj[id])
			if (this.domobj[id].parentNode)
					return true;
		return false;
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
		if (this._scriptedStyle == null)
		{
			this._scriptedStyle = $("scriptedStyle");
		}
		//ID�ɂ��\��
		if (obj.aid.length > 5)		//"????"���
		{
			if (!this.nodesById[obj.aid]) this.nodesById[obj.aid] = new Array();
			this.nodesById[obj.aid].push(obj.no);
			if (this.nodesById[obj.aid].length == 2)
			{	//ID�̋����\���B����������̂���IDCOLOR��IDBACKGROUNDCOLOR���L���B�����đ����B
				this._scriptedStyle.innerHTML 
					+= "article[data-aid=\"{0}\"] > h2 > .id { color: {1}; background-color: {2}; font-weight: bold; }"
						.format(obj.aid, obj.idcolor, obj.idbackcolor);
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
				this._scriptedStyle.innerHTML += 
					("article[data-no=\"{0}\"] > .menu > ul > .resto { display:table-cell; }\n"
					+ "article[data-no=\"{0}\"] > h2 > .no { font-weight: bold; }\n")
						.format(t);
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
	idcolor: "black",
	idbackcolor: "transparent",
	author: "",
	date: "",
	message: "",
};

/* ���|�b�v�A�b�v�������������������������������������������������������������� */
function ResPopup(anchor){ this.init(anchor); }
ResPopup.prototype = 
{
	offsetX: Preference.PopupOffsetX,
	offsetY: Preference.PopupOffsetY,
	offsetXe: 0,
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
	popupNumbers: function(ids, pos, fixed)
	{	//�|�b�v�A�b�v��\��, ids�̓��X�ԍ��̔z��B
		this.used = true;
		this.showPopup(ids, pos, fixed);
	},
	showPopup: function(ids, pos, fixed)
	{
		var container = document.createElement("DIV");
		var innerContainer = document.createElement("DIV");
		for(var i=0, len=ids.length; i < len ; i++)
		{
			var node = ThreadMessages.getNode(ids[i], true, false, function(){});
			if (node != null)
			{
				innerContainer.appendChild(node);
			}
		}
		container.appendChild(innerContainer);
		container.className = "popup";
		if (fixed) container.style.position = "fixed";
		this.fixed = fixed;
		container.addEventListener("mouseleave", this.close.bind(this), false);
		$("popupContainer").appendChild(container);
		this.limitSize(innerContainer, pos);
		this.adjust(innerContainer, pos);
		this.container = container;
	},
	close: function()
	{
		this.container.parentNode.removeChild(this.container);
		if (this.onClose) this.onClose(this);
	},
	//�T�C�Y����
	limitSize: function(e, pos)
	{
		//���E�E�E��ʕ���80%
		//�����E�E�E�A���J�[�ʒu�̉����ŉ�ʉ��[�܂�(40�͐����o���̃q�Q�̕��Ǝ኱�̗]�T�j�F�Œ�ۏ�R��
		var maxWidth = window.innerWidth *0.8;
		var maxHeight = window.innerHeight - (pos.pageY + Preference.PopupOffsetY - window.pageYOffset) - 40;
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
	//��ʓ��ɉ�������(�T�C�Y��������Ă���̂ŕK������͂�)�B���ɂ����o�Ȃ����A�c�ɂ̓X�N���[���ł���̂ŉ������������ށB
	adjust: function(e , pos)
	{
		//�w��A���J�[�ʒu����̃I�t�Z�b�g
		pos.pageX += this.offsetX;
		pos.pageY += this.offsetY;
		
		//�����ɒu�����Ƃ��A�������ɂ͂ݏo����
		// x = (�ʒuX + �� + �}�[�W��) - (�`��̈敝 - �X�N���[���o�[�� + �ǉ��I�t�Z�b�g)
		var x = (pos.pageX + e.clientWidth +  Preference.PopupMargin) - (window.innerWidth - ScrollBar.size + this.offsetXe) ; 
		if (x < 0) x = 0;	//�������K�v���Ȃ��Ƃ��͓������Ȃ�
		
		//�|�C���^�i�Ђ��̐�j�������Ă���
		e.parentNode.style.left = pos.pageX + "px";
		e.parentNode.style.top  = pos.pageY + "px";
		
		//���������Ă���
		e.style.marginLeft = -(x + 20) + "px";
	},
};

/* ���X�N���[���o�[���[�e�B���e�B������������������������������������������������������������ */
var ScrollBar=
{
	size: 26,	//�c��n
	VScroll: function(){
		if(window.innerWidth!=document.body.clientWidth){
			this.size=window.innerWidth-document.body.clientWidth;
			return true;
		}else{
			return false;
		}
	},
	HScroll: function(){
		if(window.innerHeight!=document.body.clientHeight){
			this.size=window.innerWidth-document.body.clientHeight;
			return true;
		}else{
			return false;
		}
	}
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











function init()
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
	ScrollBar.VScroll();	//�c�̃X�N���[���o�[����ɃT�C�Y�����߂�B
	MessageMenu.init();
	BoardPane.init();
	EventHandlers.init();
	ownerApp = $("wa").href.substr(0,6) == "chaika" ? "chaika" : "bbs2chReader";				//�A�v������
	$("footer").innerHTML = "powerd by {0} with {1} {2}".format(ownerApp, skinName, skinVer);	//�t�b�^�\�z
	document.title = ThreadInfo.Title + " - {0}({1})".format(ownerApp, skinName);				//�^�C�g���C��
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

