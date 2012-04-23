var skinName = "PhantomPain3";
var skinVer  = "ver. \"closed alpha\"";
var ownerApp;

var Preference =
{
	ResPopupDelay: 250,			//�|�b�v�A�b�v�\���f�B���C(ms)
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
		{	//���X�A���J�[�Ƀ|�C���g �� ���X�|�b�v�A�b�v
			new ResPopup(t);
		}
		else if (t.className == "outLink")
		{
			var p = OutlinkPlugins.getOutlinkPlugin(t);
			if (p) OutlinkPlugins.popupPreview(p, t, aEvent);
		}
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
				MessageUtil.focus(id);
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
		this.popTrack = null;
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
		Bookmark.set(this._menu.dataset.binding);
	},
	ResetBookmark: function(event)
	{
		if (Bookmark.no == this._menu.dataset.binding)
		{
			Bookmark.reset();
		}
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
		c.dataset.gearmode = "y";
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
	},
	BeginTracking: function(event)
	{	//�g���b�L���O�̊J�n�B�w�背�X��ID�Ɠ������X��S�������\������B
		//ID��trip�Ōl���肵�A�A���I�ɋ����\���B
		Tracker.BeginTracking(ThreadMessages.jsobj[this._menu.dataset.binding]);
	},
	EndTracking: function(event)
	{	//�g���b�L���O�̏I��
		Tracker.EndTracking(ThreadMessages.jsobj[this._menu.dataset.binding]);
	},
	PopupTracked: function(event)
	{
		if (this.popTrack)return;	//���łɕ\������Ă���
		var obj =ThreadMessages.jsobj[this._menu.dataset.binding];
		if (obj && obj.tracking)
		{
			var ids = obj.tracking.getTrackingNumbers();
			var pp = new ResPopup(null);
			pp.offsetX = 8; pp.offsetY = 16;
			pp.popupNumbers(ids, Util.getElementPagePos($("RMenu.TrPop")) , false);
			this.popTrack = pp;
		}
	}
};

var Menu = {

	PopupTemplate: function()
	{
		var pp = new ResPopup(null);
		pp.offsetX = 8; pp.offsetY = 16;
		pp.popup(Preference.TemplateAnchor, Util.getElementPagePos($("Menu.Template")), true);
	},
	
	JumpToNewMark: function()
	{
	},
	
	JumpToBookmark: function()
	{
		MessageUtil.focus(Bookmark.no);
	},
	
	ResetBookmark: function()
	{
		Bookmark.reset();
	},
};

/* �����X�̏��������������������������������������������������������������� */
var ThreadMessages = {
	domobj: new Array(),	//DOM�I�u�W�F�N�g�Bindex�̓��X�ԍ�
	jsobj: new Array(),		//DOM�I�u�W�F�N�g���璊�o�����R���e���c�Bindex�̓��X�ԍ�

	deployedMin: 0,
	deployedMax: 0,
	
	init: function()
	{
		var e = $("resContainer");
		for(var i=0; i<e.childNodes.length; i++)
		{	//����A�L���[�ɓo�^���Ĕ񓯊��Ƃ��ɂ����ق��������̂����B
			this.processMessage(e.childNodes[i]);
		}
		this.deployedMin = parseInt(e.firstElementChild.dataset.no);
		this.deployedMax = parseInt(e.lastElementChild.dataset.no);
	},
	
	contains: function(no)
	{
		return (this.jsobj[no] != null)
	},

	load: function(min, max, deploy)
	{	//�w��͈͂̃��X(f-t)��ǂݍ��݁Bchaika�����擾�̃��X�̓A�N�Z�X���Ȃ��B
		//deploy=true�̂Ƃ��A��ʂɂ��\������B
		var r=(min==max)? min+"n" : min+"-"+max+"n";
		var loardUrlStr = ThreadInfo.Server + ThreadInfo.Url + r;
		var req = new XMLHttpRequest();
		req.open('GET', loardUrlStr, false);	//sync
		req.setRequestHeader("If-Modified-Since", "Wed, 15 Nov 1995 00:00:00 GMT");	//�L���b�V������ǂ܂Ȃ�
		req.send(null);	
		if ((req.readyState==4)&&(req.status==200)){
			var html = req.responseText;
			if (html.match(/<!--BODY.START-->([\s\S]+)<!--BODY.END-->/))
			{
				var nc = document.createElement("DIV");
				nc.innerHTML = RegExp.$1;
				this.push($A(nc.getElementsByTagName("ARTICLE")), deploy);
			}
		}
		else
		{
			return false;
		}
	},
	
	push: function(nodes, deploy)
	{
		for (var i=0, j=nodes.length; i<j; i++)
		{
			var node = nodes[i];
			var no = parseInt(node.dataset.no);
			if (!this.isReady(no))
			{
				this.processMessage(node);
			}
			if (deploy && !this.isDeployed(no))
			{
				this.deployNode(node)
			}
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
			
			//���O�ƃg���b�v�̒��o
			var name = node.childNodes[0].childNodes[3].textContent;
			node.dataset.author = obj.author = name;
			if (name.match(/��([^\s]+)/))
			{
				node.dataset.trip = obj.trip = RegExp.$1;
			}
			if (name.match(/^(\d+)(��.+)?/))
			{
				node.dataset.numberdName = "y";
				obj.numberdName = true;
			}
			//���b�Z�[�W�\�����
			MessageStructure.push(node, obj);
		}
	},
	
	deployNode: function(node)
	{
		if (node.parentNode)
		{	//�����̐e�����O�Bload���痈������div���Ǝv����B
			node.parentNode.removeChild(node);
		}
		var rc = $("resContainer");
		var nn =  parseInt(node.dataset.no);
		var nextSibling = this.findDeployedNextSibling(nn);
		if (nextSibling)
		{
			rc.insertBefore(node, nextSibling);
		}
		else
		{
			rc.appendChild(node);
		}
		if (nn < this.deployedMin) this.deployedMin = nn;
		if (nn > this.deployedMax) this.deployedMax = nn;
	},
	
	findDeployedNextSibling: function(no)
	{	//insertBefore�̑�Q�����Ɏg�����߂ɁAno�𒴂���no������deployed�A�C�e���̂����A�ł�no�̏��������̂�Ԃ��B
		for(var i=no; i<99999; i++)
		{
			if(this.isDeployed(i))
			{
				return this.domobj[i];
			}
		}
		return null;
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
			return obj;
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
				if (this.domobj[id].parentNode.id == "resContainer")
					return true;
		return false;
	},
	_dblSizeAnchorRegExp: new RegExp("(����|��|&gt;&gt;|&gt;)([0-9�O-�X,\-]+)","g"),
	
};

/* ���u�b�N�}�[�N���������������������������������������������������������� */
var Bookmark = {

	init: function()
	{
		var no = 0;
		try{
			no = parseInt(CommonPref.getBookmark());
		} finally {}
		if(!no)
		{
			no=0;
		}
		else
		{
			this.set(no);
		}
	},
	
	set: function(no)
	{
		if (this.no) this.reset();
		if (ThreadMessages.jsobj[no])
		{
			ThreadMessages.jsobj[no].marked = true;
			var domobj = document.body.getElementsByTagName("ARTICLE");
			for (var i=0, j=domobj.length; i<j; i++)
			{
				if (domobj[i].dataset.no == no)
				{
					domobj[i].dataset.bm = "y";
				}
			}
			$("Menu.Bookmark").dataset.bm = "y";
			$("Menu.Bookmark").dataset.bmn= no;
			this.no = no;
			CommonPref.setBookmark(no);
		}
	},
	reset: function()
	{
		if (this.no)
		{
			var domobj = document.body.getElementsByTagName("ARTICLE");
			for (var i=0, j=domobj.length; i<j; i++)
			{
				if (domobj[i].dataset.no == this.no)
				{
					domobj[i].dataset.bm = "";
				}
			}
			ThreadMessages.jsobj[this.no].marked = false;
		}
		this.no = 0;
		$("Menu.Bookmark").dataset.bm = "n";
		CommonPref.setBookmark(0);
	},

};


/* ���g���b�J�[������������������������������������������������������������ */
var Tracker= {
	_trackers: [],
	
	BeginTracking: function(jsobj)
	{
		for(var i=0, j=this._trackers.length; i<j; i++)
		{
			if (this._trackers[i].check(jsobj)) 
			{
				return; //already tracking
			}
		}
		var tr = new TrackerEntry(jsobj);
		tr.index = this.findBrankIndex();
		this._trackers.push(tr);
		tr.setMark();
	},
	EndTracking: function(jsobj)
	{
		var nt = new Array();
		var tr = null;
		for(var i=0, j=this._trackers.length; i<j; i++)
		{
			if (this._trackers[i].check(jsobj))
			{
				tr = this._trackers[i];
			}
			else
			{
				nt.push(this._trackers[i]);
			}
		}
		this._trackers = nt;
		if (tr) tr.resetMark();
	},
	findBrankIndex: function()
	{
		//�󂢂Ă�ԍ���T��
		for(var ni=0; ni<1001; ni++)
		{
			var used = false;
			for(var i=0,j=this._trackers.length; i<j; i++)
			{
				if (this._trackers[i].index == ni)
				{
					used = true;
					break;
				}
			}
			if (!used) return ni;
		}
		return 0;
	},
};

function TrackerEntry(jsobj){ this.init(jsobj); };
TrackerEntry.prototype = {
	aid: null,
	trip: null,
	index: 0,
	
	init: function(jsobj)
	{
		this.trip = [];
		this.aid = [];
		if (jsobj.trip)
		{
			this.trip.push(jsobj.trip);
		}
		if (jsobj.aid.length > 5)
		{
			this.aid.push(jsobj.aid);
		}
	},
	check: function(obj)
	{	//Trip�����Ђ�����������1, ID�����Ђ�����������2, ������������������3
		var m = 0;
		if (!obj) return 0;
		if (obj.trip)
		{
			if (this.containsTrip(obj.trip)) m += 1;
		}
		if (!m && (obj.aid.length > 5))
		{
			if (this.containsId(obj.aid)) m += 2;
		}
		return m;
	},
	containsId: function(id)
	{
		return this.aid.include(id);
	},
	containsTrip: function(trip)
	{
		return this.trip.include(trip);
	},

	setMark: function()
	{
		//alert("setMark {0} {1}".format(entry.aid, entry.trip));
		for (var i=0, j=ThreadMessages.jsobj.length; i<j;i++)
		{
			var obj = ThreadMessages.jsobj[i];
			var m = this.check(obj);	//0:Tracking�ΏۊO, 1:Trip�ɂ��ǐ�, 2: Id�ɂ��ǐ�
			if (m > 0)
			{
				obj.tracking = this;
				ThreadMessages.domobj[obj.no].dataset.track = "m" + this.index;
				if ((m == 1) && (obj.aid.length > 5) && (!this.containsId(obj.aid)))
				{	//�g���b�v�ň�����������ID�����邯��ID���o�^��ID�o�^
					this.aid.push(obj.aid);
					this.setMark();
				}
				else if ((m==2) && (obj.trip) && (!this.containsTrip(obj.trip)))
				{	//ID�ň����������āA�g���b�v���Ă邯�ǂ��ꂪ�o�^����Ă��Ȃ����o�^
					this.trip.push(obj.trip);
					this.setMark();
				}
				var ps = $("popupContainer").getElementsByTagName("ARTICLE");
				for(var l=0, ll=ps.length; l<ll; l++)
				{
					if (ps[l].dataset.no == obj.no) ps[l].dataset.track = "m" + this.index;
				}
			}
		}
	},
	resetMark: function()
	{
		for (var i=0, j=ThreadMessages.jsobj.length; i<j;i++)
		{
			var obj = ThreadMessages.jsobj[i];
			var m = this.check(obj);	//0:Tracking�ΏۊO, 1:Trip�ɂ��ǐ�, 2: Id�ɂ��ǐ�
			if (m > 0)
			{
				obj.tracking = null;
				ThreadMessages.domobj[obj.no].dataset.track = "";
				var ps = $("popupContainer").getElementsByTagName("ARTICLE");
				for(var l=0, ll=ps.length; l<ll; l++)
				{
					if (ps[l].dataset.no == obj.no) ps[l].dataset.track = "";
				}
			}
		}
	},
	getTrackingNumbers: function()
	{
		var res = new Array();
		for (var i=0, j=ThreadMessages.jsobj.length; i<j;i++)
		{
			var obj = ThreadMessages.jsobj[i];
			var m = this.check(obj);	//0:Tracking�ΏۊO, 1:Trip�ɂ��ǐ�, 2: Id�ɂ��ǐ�
			if (m > 0)
			{
				res.push(obj.no);
			}
		}
		return res;
	},

};

/* ���X���b�h�\�������������������������������������������������������������� */
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

//���X�̃A�m�e�[�V�������B���������Ȃǂɂ͂�����g���B
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

/* ���O�������N���������������������������������������������������������������� */
const OUTLINK_NON   = 0;	//outlink����Ȃ�
const OUTLINK_IMAGE = 1;	//�摜
const OUTLINK_MOVIE = 2;	//����
const OUTLINK_2CH   = 3;	//2ch
const OUTLINK_ETC   = 4;	//���̑�

var OutlinkPlugins = {

	getOutlinkPlugin: function(node)
	{	//�K������A�E�g�����N�v���O�C�������߂�B
		//�K����1�Ȃ炻��Ɍ���B
		//�����łȂ���΁A���K�����̍������Ȃ��̂��o��܂ŌJ��Ԃ��B
		if (node.className != "outLink") return null;
		var mp = 0;
		var mpt = null;
		for(var i=0, j=this.plugins.length; i < j ; i++)
		{
			var p = this.plugins[i].posivility(node.href);
			if (p >= 1)
			{
				return this.plugins[i];
			}
			else
			{
				if (mp < p)
				{
					mp = p;
					mpt = this.plugins[i];
				}
			}
		}
		return mpt;
	},
	popupPreview: function(plugin, anchor, ev)
	{	//Outlink�̃v���r���[���|�b�v�A�b�v����
	},
};

//�摜URL�p
var OutlinkPluginForImage = {
	type: OUTLINK_IMAGE,
	posivility: function(href)
	{
		if (href.match(/\.jpg$|jpeg$|bmp$|png$|gif$/i))
		{
			return 1;
		}
		return 0;
	},
	getPopupContent: function()
	{
	},
};

//����URL�p
var OutlinkPluginForMovie = {
	type: OUTLINK_MOVIE,
	posivility: function(href)
	{
		return 0;
	},
	getPopupContent: function()
	{
	},
};

var OutlinkPluginFor2ch = {
	type: OUTLINK_2CH,
	posivility: function(href)
	{
		return (this.is2ch(href)) ? 1 : 0;
	},
	getPopupContent: function()
	{
	},
	//b2r�œǂ߂����ȃA�h���X����true��Ԃ�
	is2ch: function(url)
	{
		return (url.match(/\/test\/read.cgi\//));
	},
	//2ch.net, bbspink�Ȃ�true
	isPure2ch: function(url)
	{
		return (url.match(/(2ch.net|bbspink.com|machi.to)\//));
	},
	
	//b2r�ŕ\�����H
	isb2r: function(url)
	{
		return (url.match(/\/\/127.0.0.1:\d+\/thread\//));
	},
};

var OutlinkPluginForDefault = {
	type: OUTLINK_ETC,
	posivility: function(href)
	{
		return 1;
	},
	getPopupContent: function()
	{
	},
};

OutlinkPlugins.plugins = [OutlinkPluginForImage, OutlinkPluginForMovie, OutlinkPluginFor2ch, OutlinkPluginForDefault];


/* ���|�b�v�A�b�v�������������������������������������������������������������� */
function Popup() { }
Popup.prototype = {
	offsetX: Preference.PopupOffsetX,
	offsetY: Preference.PopupOffsetY,
	offsetXe: 0,
	show: function(content, pos, fixed)
	{
		var container = document.createElement("DIV");
		container.appendChild(content);
		container.className = "popup";
		if (fixed) container.style.position = "fixed";
		this.fixed = fixed;
		container.addEventListener("mouseleave", this.close.bind(this), false);
		$("popupContainer").appendChild(container);
		this.limitSize(content, pos);
		this.adjust(content, pos);
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

function ResPopup(anchor){ this.init(anchor); }
ResPopup.prototype = new Popup();

	ResPopup.prototype.init = function(anchor)
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
	};
	ResPopup.prototype.popup =  function(target, pos, fixed)
	{	//�|�b�v�A�b�v��\��, target�̓��X�A���J�[�̕�����Bpos�͂ǂ̗v�f����|�b�v�A�b�v���邩
		this.used = true;
		var ids = MessageUtil.splitResNumbers(target);
		this.showPopup(ids, pos, fixed);
	};
	ResPopup.prototype.popupNumbers =  function(ids, pos, fixed)
	{	//�|�b�v�A�b�v��\��, ids�̓��X�ԍ��̔z��B
		this.used = true;
		this.showPopup(ids, pos, fixed);
	};
	ResPopup.prototype.showPopup =  function(ids, pos, fixed)
	{
		var innerContainer = document.createElement("DIV");
		for(var i=0, len=ids.length; i < len ; i++)
		{
			var node = ThreadMessages.getNode(ids[i], true, false, function(){});
			if (node != null)
			{
				innerContainer.appendChild(node);
			}
		}
		this.show(innerContainer, pos, fixed);
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
	
	focus: function(no)
	{
		if (ThreadMessages.isDeployed(no))
		{
			var node = ThreadMessages.domobj[no];
			//���
			window.scrollTo(0, Util.getElementPagePos(node).pageY - (window.innerHeight * 0.3));
			//�ڗ�������
			node.dataset.focus = "on";
			setTimeout(function(){ node.dataset.focus = "no"; }, 1000)
		}
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
	ThreadMessages.init();
	ScrollBar.VScroll();	//�c�̃X�N���[���o�[����ɃT�C�Y�����߂�B
	MessageMenu.init();
	BoardPane.init();
	Bookmark.init();
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

