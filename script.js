var skinName = "PhantomPain3";
var skinVer  = "ver. \"closed alpha\"";
var ownerApp;

var Preference =
{
	ResMenuAttachDelay: 250,	//���X���j���[���A�^�b�`�����܂ł̃f�B���C(ms)
	ResPopupDelay: 250,			//�|�b�v�A�b�v�\���f�B���C(ms)
	PostScheme: "bbs2ch:post:",	//���e�����N�̃X�L�[�}
	ReplyCheckMaxWidth: 10,		//����ȏ�̐��̃��X�Ɍ��y����ꍇ�͋t�Q�ƂƂ��Ȃ�(>>1-1000�Ƃ�)
	TemplateLength: 6,			//�e���v���|�b�v�A�b�v�ŕ\�����郌�X�̐�
	PopupOffsetX: 16,			//�|�b�v�A�b�v�̃I�t�Z�b�g(��v�f�E�ォ��̃I�t�Z�b�g�ŁA�q�Q���w���ʒu�j
	PopupOffsetY: 16,			//�|�b�v�A�b�v�̃I�t�Z�b�g
	PopupMargin: 0,				//��ʊO�ɂ͂ݏo���|�b�v�A�b�v�������߂���
	MoreWidth: 100,				//more�œǂݍ��ޕ��B0�Ȃ�S���B
	ImagePopupSize: 200,		//�摜�|�b�v�A�b�v�̃T�C�Y
	FocusNewResAfterLoad: true,	//���[�h���A�V�����X�ɃW�����v
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

var $qA = function(iterable)
{	//$A�Ȃ񂾂��ǃN�I�[�g�ň͂ށB�N�I�[�g�������Ă���΃G�X�P�[�v�B
	if (!iterable) return [];
	var results = [];
	for (var i=0, j=iterable.length; i<j; i++)
	{
		var str = iterable[i];
		str=str.replace(/\"/g, '\\"');
		results.push('"' + str + '"');
	}
	 return results;
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
		{	//���X�̏�Ƀ|�C���g �� ���X���j���[��(���ԍ���)�����Ă���
			var tid = setTimeout(MessageMenu.attach.bind(MessageMenu, res), Preference.ResMenuAttachDelay);
			res.addEventListener("mouseout",
				function(){
					clearTimeout(tid);
					res.removeEventListener("mouseout", arguments.callee, false);
			}, false);
		}
		if (t.className=="resPointer")
		{	//���X�A���J�[�Ƀ|�C���g �� ���X�|�b�v�A�b�v
			new ResPopup(t);
		}
		else if (t.className == "outLink")
		{	//���\�[�X(�摜�Ƃ�����Ƃ�)�����N�Ƀ|�C���g �� ���\�[�X�|�b�v�A�b�v
			var p = OutlinkPlugins.getOutlinkPlugin(t);
			if (p) OutlinkPlugins.popupPreview(p, t, aEvent);
		}
		//�X��URL�Ƀ|�C���g �� �X���^�C�̃|�b�v�A�b�v
		//���O������ �� �|�b�v�A�b�v
	},
	mouseClick: function (aEvent)
	{
		var t = aEvent.target;
		var cancel = false;
		if (t.className == "resPointer")
		{
			//jumpTo
			if(t.textContent.match(/(\d+)/))
			{
				var id = parseInt(RegExp.$1);
				MessageUtil.focus(id);
			}
			cancel = true;
		}
		else if(t.className == "id")
		{	//ID�|�b�v�A�b�v
			if (t.__idpopup)
			{
				t.__idpopup.close();
			}
			else
			{
				var ids = MessageStructure.nodesById[t.textContent];
				if (ids)
				{
					ids = ids.sort(function(a,b){return a-b;});
					var pp = new ResPopup(null);
					pp.offsetX = 32; pp.offsetY = 16;
					pp.popupNumbers(ids, Util.getElementPagePos(t) , false);
					t.__idpopup = pp;
					pp.onClose = function(){ t.__idpopup = null; } ;
				}
			}
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
			node.insertBefore(m, node.childNodes[1]);
			//pickup, bookmark, hiding��Ԃ̔��f �� Bookmark, Pickup, Hiding,Track��dataset�ɐݒ�ACSS�Ŕ��f
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
		
		var nodes = $A(node.childNodes).filter(function(x){ return x.tagName == "ARTICLE"; });
		for(var i=0,j=nodes.length; i<j; i++)
		{
			node.removeChild(nodes[i]);
		}
	},
	_createNodeTree: function(from, c)
	{	//�g�����m�[�h���폜���邩�ǂ����́A�c�_���������Ƃ���B�Ƃ肠�����c���Ă����B
		if (MessageStructure.nodesReplyFrom[from])
		{	//from�Ƀ��X���Ă���R�����g������E�E�E
			var rf = MessageStructure.nodesReplyFrom[from];
			for(var i=0, j = rf.length; i < j; i++)
			{
				var node = ThreadMessages.getNode(rf[i], true);	//ARTICLE
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
		if (this._menu.dataset.binding != 0)
		{
			Pickup.pickup(this._menu.dataset.binding);
		}
	},
	ResetPickup: function(event)
	{
		if (this._menu.dataset.binding != 0)
		{
			Pickup.release(this._menu.dataset.binding);
		}
	},
	ToggleHiding: function(event)
	{
	},
	ExtractImages: function(event)
	{
		OutlinkPlugins.preview(this._menu.parentNode);
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
		pp.onClose = (function(p){this.gearNode = null;}).bind(this);
		var c = pp.container;
		c.dataset.gearmode = "y";
		this.gearNode = c.childNodes[0];
		this.gearPopup = pp;
	},
	_csGearWheel: false,
	GearWheel: function(event)
	{
		if (this._csGearWheel) return;
		this._csGearWheel = true;	//���ȈՃN���e�B�J���Z�N�V�����Bjavascript�̓V���O���X���b�h�Ȃ̂ł����OK�B���̃I�u�W�F�N�g��worker�ɓ˂����߂Ȃ����ˁI
		{
			if (this.gearNode == null)
			{	//TODO::���������ĕK�����������J�n�������Ȃ������H
				this.BeginGear(event);
			}
			var id = parseInt(this.gearNode.firstChild.dataset.no);
			id += (event.detail < 0 ) ? -1 : +1;
			MessageLoader.load(id,id);	//��[��
			var n = ThreadMessages.getNode(id, true);
			if (n != null)
			{
				this.gearNode.innerHTML = "";
				this.gearNode.appendChild(n);
				this.gearPopup.adjust(Util.getElementPagePos($("RMenu.Gear")));
			}
		}
		this._csGearWheel = false;
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
		MessageLoader.load(1, Preference.TemplateLength);
		var tids = [];
		for(var i=1; i<=Preference.TemplateLength; i++) tids.push(i);
		pp.popupNumbers(tids, Util.getElementPagePos($("Menu.Template")), true);
	},
	
	JumpToNewMark: function()
	{
		var nn = ThreadInfo.Fetched + 1;
		MessageUtil.focus(nn);
	},
	
	JumpToBookmark: function(autoDeploy)
	{
		MessageUtil.focus(Bookmark.no);
	},
	
	ResetBookmark: function()
	{
		Bookmark.reset();
	},
	PopupPickups: function()
	{
		var pp = new ResPopup(null);
		pp.offsetX = 8; pp.offsetY = 16;
		pp.popupNumbers(Pickup.pickups, Util.getElementPagePos($("Menu.Pickup")), true);
	},
	More: function()
	{
		//TODO:deployedMax��ThreadInfo.Total�̂Ƃ��A�V�K�Ƀ��[�h(l1n)
		var min = ThreadMessages.deployedMax+1;
		var max = ThreadMessages.deployedMax+10;
		MessageLoader.load(min, max);
		ThreadMessages.deploy(min, max);
		MessageUtil.focus(min);
	},
	MoreBack: function()
	{
	},
	BeginAutoMore: function()
	{
	},
	EndAutoMore: function()
	{
	},
	PreviewOutlinks: function()
	{
		for(var i=1; i< ThreadInfo.Total; i++)
		{
			if (ThreadMessages.isDeployed(i))
			{
				OutlinkPlugins.preview(ThreadMessages.domobj[i]);
			}
		}
	},
	ToggleFinder: function()
	{
		if (Finder.showing())
		{
			Finder.closeFinderPopup();
		}
		else
		{
			Finder.popupFinderForm(Util.getElementPagePos($("Menu.Finder")), true);
		}
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
		//����Tracker.init�̒��Ŏ��{�����̂ŁA���Ȃ�
		//Tracker.notifyNewMessage($A(e.childElementNodes), obj);
	},
	
	contains: function(no)
	{
		return (this.jsobj[no] != null)
	},
	
	deploy: function(min, max)
	{	//min����max�܂ł�deployNode����B
		//���[�h����Ă��Ȃ����̂̓��[�h���Ȃ��̂ł��炩����load(min, max���Ă����悤��!�j
		for(var i=min; i<=max; i++)
		{
			this.deployNode(this.domobj[i]);
		}
	},
	
	push: function(nodes)
	{
		for (var i=0, j=nodes.length; i<j; i++)
		{
			var node = nodes[i];
			var no = parseInt(node.dataset.no);
			if (!this.isReady(no))
			{
				this.processMessage(node);
			}
		}
		Tracker.notifyNewMessage(nodes);
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
			//�V������
			if(node.childNodes[0].className=="new")
			{
				document.body.dataset.hasNew = "y";
			}
			
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
		if(!node)return;	//�ق���I
		if(node.tagName != "ARTICLE") return;	//�ق���I
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
			else if (a.className=="outLink")
			{	//���܂��낵���Ȃ����ǂ�������Ԍ����I����
				if (OutlinkPluginForImage.posivility(a.href))
				{
					e.parentNode.dataset.hasImage = "y";
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
	getNode: function(id, clone)
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
				//outlink��previewShowing�����ׂ�n�ɂ���
				var outlinks = obj.getElementsByClassName("outLink");
				for(var i=0, j=outlinks.length; i<j; i++)
				{
					outlinks[i].dataset.previewShowing = "n";
				}
			}
			return obj;
		}
		return null;
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
var MessageLoader = {
	loadPrev: function()
	{
		var w = Preference.MoreWidth;
	},
	loadNext: function()
	{
		var w = Preference.MoreWidth;
	},
	beginAutoLoad: function()
	{
	},
	endAutoLoad: function()
	{
	},
	
	load: function(min, max)
	{	//min����max�܂ł����O�s�b�N�A�b�v���[�h�œǂݏo����Ready�ɂ���B
		//alert([min, max]);
		var tmin = min;
		var tmax = max;
		if (tmax > ThreadInfo.Total) tmax = ThreadInfo.Total;	//��Ύ��Ȃ��Ƃ���͂Ƃ�ɍs���Ȃ��B
		for(; tmin <= tmax; tmin++)
		{	//tmin�ʒu���ǂݍ��ݍς݂Ȃ�tmin��+1
			if (!ThreadMessages.isReady(tmin))	break;
		}
		for(; tmax >= tmin; tmax--)
		{	//tmax�ʒu���ǂݍ��ݍς݂Ȃ�tmax��-1
			if (!ThreadMessages.isReady(tmax))	break;	
		}
		if (tmin <= tmax)
		{	//min-max�͈̔͂ɏ��Ȃ��Ƃ��P�͎擾���ׂ����X����
			var loardUrlStr = ThreadInfo.Server + ThreadInfo.Url + tmin + "-" + tmax;
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
					ThreadMessages.push($A(nc.getElementsByTagName("ARTICLE")));
					return true;
				}
				return false;
			}
		}
	},
	
	loadByAnchorStr: function(str)
	{
		str=str.replace(/>/g,"");
		var e=str.split(",");
		var r=new Array();
		for(var i=0;i<e.length;i++)
		{
			if(e[i].match(/(\d+)(-(\d+))?/))
			{
				var min = parseInt(RegExp.$1);
				var max = parseInt(RegExp.$3);
				if (!max) max = min;
				this.load(min, max);
			}
		}
	},
	
	_checkingNewMessage: false,
	_checkNewMessageCallback: new Array(),
	_checkNewMessageRequest: null,
	checkNewMessage: function(callback)
	{
		this._checkNewMessageCallback.push(callback);
		if(!this._checkingNewMessage)
		{
			this._checkingNewMessage = true;
			var req = new XMLHttpRequest();
			req.onreadystatechange = this._loadCheck.bind(this);
			req.open('GET', ThreadInfo.Server + ThreadInfo.Url + "l1n");
			req.setRequestHeader("If-Modified-Since", "Wed, 15 Nov 1995 00:00:00 GMT");
			req.send(null);
			this._checkNewMessageRequest=req;
		}
	},
	
	_loadCheck: function()
	{	//checkNewMessage�ɂ��AXMLHTTPRequest�̏�ԕω��C�x���g����
		var req = this._checkNewMessageRequest;
		if (!req) return;
		if (req.readyState==4)	//end
		{
			if ((req.status>=200)&&(req.status<300))
			{	//OK�`
				var html = req.responseText;
				if (html.match(/<!--BODY.START-->([\s\S]+)<!--BODY.END-->/))
				{	//�ǉ��Ń��[�h��������push(deploy�͂��܂���)
					var nc = document.createElement("DIV");
					nc.innerHTML = RegExp.$1;
					ThreadMessages.push($A(nc.getElementsByTagName("ARTICLE")));
				}
				if (html.match(/<\!\-\- INFO(\{.+?\})\-\->/))
				{
					var obj;
					eval("obj = "+ RegExp.$1);
					for (var i=0, j=this._checkNewMessageCallback.length; i<j; i++)
					{
						var c = this._checkNewMessageCallback[i];
						if (c) c(obj);
					}
				}
			}
			this._checkNewMessageCallback = new Array();
			this._checkingNewMessage = false;
			this._checkNewMessageRequest = null;
		}
	},

};

/* ���u�b�N�}�[�N���������������������������������������������������������� */
var Bookmark = {
	init: function()
	{
		var no = CommonPref.readThreadObject("bm");
		if (!no)
		{
			no = 0;
		}
		else
		{
			this.set(no);
		}
	},
	
	save: function()
	{
		CommonPref.writeThreadObject("bm", this.no);
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
		}
		//���j���[�o�[
		if (no < ThreadMessages.deployedMin)
		{
			$("Menu.Bookmark").dataset.bm = "b";
		}
		else if (no > ThreadMessages.deployedMax)
		{
			$("Menu.Bookmark").dataset.bm = "a";
		}
		else
		{
			$("Menu.Bookmark").dataset.bm = "y";
		}
		$("Menu.Bookmark").dataset.bmn= no;
		this.no = no;
		this.save();
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
		this.save();
	},

};

/* ���s�b�N�A�b�v���������������������������������������������������������� */
var Pickup = {
	//TODO:���r�ǉ��i�Ή�
	init: function()
	{
		//PP2�Ƃ̃f�[�^�̌݊������m�ۂ��邽�߂ɁA�߂肪�z��łȂ���Δz��Ƃ��čĕ]������
		this.pickups = CommonPref.readThreadObject("pk");
		if (!(this.pickups instanceof Array))
		{
			this.pickups = eval("[" + this.pickups + "]");
		}
		this.setMark(this.pickups);
		this.adjustMenuStyle();
	},
	save: function()
	{
		var idss = this.pickups + "";
		CommonPref.writeThreadObject("pk", idss);
	},
	setMark: function(ids)
	{
		for(var i=0, j=ids.length; i<j; i++)
		{
			var id = ids[i];
			var rs = document.body.getElementsByTagName("ARTICLE");
			for (var k=0, km=rs.length; k<km; k++)
			{
				if (rs[k].dataset.no == id)
					rs[k].dataset.pickuped = "on";
			}
		}
	},
	resetMark: function(ids)
	{
		for(var i=0, j=ids.length; i<j; i++)
		{
			var id = ids[i];
			var rs = document.body.getElementsByTagName("ARTICLE");
			for (var k=0, km=rs.length; k<km; k++)
			{
				if (rs[k].dataset.no == id)
					rs[k].dataset.pickuped = "";
			}
		}
	},
	pickup: function(id)
	{
		if (!this.pickups.include(id))
		{
			this.pickups.push(id);
			this.setMark([id]);
			this.save();
		}
		this.adjustMenuStyle();
	},
	release: function(id)
	{
		if (this.pickups.include(id))
		{
			this.pickups = this.pickups.filter(function(item, index, array){ return item != id });
			this.resetMark([id]);
			this.save();
		}
		this.adjustMenuStyle();
	},
	adjustMenuStyle: function()
	{
		if (this.pickups.length)
		{
			$("Menu.Pickup").dataset.pk = "y";
		}
		else
		{
			$("Menu.Pickup").dataset.pk = "n";
		}
		$("Menu.Pickup").dataset.pkc= this.pickups.length;
	},
};

/* ���g���b�J�[������������������������������������������������������������ */
var Tracker= {
	_trackers: [],
	
	init: function()
	{	//�ۑ�����Ă���g���b�N�������Ƀg���b�L���O���J�n
		var obj = CommonPref.readGlobalObject("tracker");
		if (!obj)return;
		for (var i=0, j=obj.length; i<j; i++)
		{
			var tr = new TrackerEntry();
			tr.index = obj[i].index;
			tr.trip = obj[i].trip;
			tr.aid = obj[i].aid;
			this._trackers.push(tr);
			tr.setMark();
		}
		this.save();
	},
	save: function()
	{
		var tss = [];
		for(var i=0,j=this._trackers.length; i<j; i++)
		{
			if(this._trackers[i])
			{
				tss.push(this._trackers[i].toString());
			}
		}
		var json =  "[{0}]".format(tss);
		CommonPref.writeGlobalObject("tracker", json);
	},
	
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
		this.save();
	},
	EndTracking: function(jsobj)
	{
		var nt = new Array();
		for(var i=0, j=this._trackers.length; i<j; i++)
		{
			if (this._trackers[i].check(jsobj))
			{
				this._trackers[i].resetMark();
			}
			else
			{
				nt.push(this._trackers[i]);
			}
		}
		this._trackers = nt;
		this.save();
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
	notifyNewMessage: function(nodes)
	{	//�V�������X�������B��]�̃��X���B
	},
};

function TrackerEntry(jsobj){ this.init(jsobj); };
TrackerEntry.prototype = {
	aid: null,
	trip: null,
	index: 0,
	
	init: function(jsobj)
	{
		if (jsobj)
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
		}
	},
	
	toString: function()
	{
		var str = "{index: {0}, aid: [{1}], trip: [{2}]}".format(this.index, $qA(this.aid), $qA(this.trip));
		return str;
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
		if (anchor != null)
		{
			var tid = setTimeout(this.popup.bind(this, plugin, anchor, false), Preference.ResPopupDelay);
			anchor.addEventListener("mouseout", 
				function(){
					clearTimeout(tid);
					anchor.removeEventListener("mouseout", arguments.callee, false);
				},false);
		}
	},
	popup: function(plugin, anchor, fixed)
	{
		if (anchor.dataset.previewShowing!="y")
		{
			var p = new Popup();
			pos = Util.getElementPagePos(anchor);
			pos.pageX += anchor.offsetWidth;
			var c = plugin.getPreview(anchor.href, p.adjust.bind(p, pos));
			if (c)
			{
				anchor.dataset.previewShowing = "y";
				var innerCont = document.createElement("DIV");
				innerCont.appendChild(c);
				p.offsetX = 0;
				p.show(innerCont, pos, fixed);
				p.onClose = function(){ anchor.dataset.previewShowing = "n" };
			}
		}
	},
	preview: function(resNode)
	{
		var outlinks = resNode.getElementsByClassName("outLink");
		var container = resNode.getElementsByClassName("outLinkPreview");
		if ((outlinks.length > 0) && (container.length == 0))
		{
			container = document.createElement("DIV");
			container.className = "outLinkPreview";
			resNode.appendChild(container);
			for(var i=0,j=outlinks.length; i<j; i++)
			{
				var plugin = this.getOutlinkPlugin(outlinks[i]);
				var c = plugin.getPreview(outlinks[i].href);
				if (c) container.appendChild(c);
			}
		}
		else
		{	//�W�J�ς� or Outlink�Ȃ�
			return;
		}
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
	getPreview: function(href, onload)
	{
		var p = (new ImageThumbnailOnClickOverlay(href,Preference.ImagePopupSize,false));
		p.onload = onload;
		return p.container;
	},
};

//����URL�p
var OutlinkPluginForMovie = {
	type: OUTLINK_MOVIE,
	posivility: function(href)
	{
		return 0;
	},
	getPreview: function(href, onload)
	{
		return null;
	},
};

var OutlinkPluginForNicoNico = {
	type: OUTLINK_MOVIE,
	posivility: function(href)
	{	
		if(href.match(/http:\/\/www.nicovideo.jp\/watch\/sm\d+/i))
		{
			return 1;
		}
		return 0;
	},
	getPreview: function(href, onload)
	{
		if(href.match(/http:\/\/www.nicovideo.jp\/watch\/(sm\d+)/i))
		{
			var c = document.createElement("DIV");
			var thurl = "http://ext.nicovideo.jp/thumb/" + RegExp.$1
			c.innerHTML = '<iframe width="312" height="176" src="{0}" scrolling="no" style="border:solid 1px #CCC;margin-top:12px;" frameborder="0"></iframe>'.format(thurl);
			return c;
		}
		return null;
	},
};

var OutlinkPluginFor2ch = {
	type: OUTLINK_2CH,
	posivility: function(href)
	{
		return (this.is2ch(href)) ? 1 : 0;
	},
	getPreview: function(href, onload)
	{
		return null;
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
	getPreview: function(href, onload)
	{
		var p = new ImageThumbnailOnClickOverlayFrame("http://img.simpleapi.net/small/" + href,Preference.ImagePopupSize,false);
		p.rel = href;
		return p.container;
	},
};

OutlinkPlugins.plugins = [OutlinkPluginForImage, OutlinkPluginForMovie, OutlinkPluginForNicoNico, OutlinkPluginFor2ch, OutlinkPluginForDefault];


/* ���摜�T���l�C���������������������������������������������������������������� */
function ImageThumbnail(url, sz, canvas){this.thumbSize = sz; this.useCanvas = canvas; this.init(url);}
ImageThumbnail.prototype = {
	//thumbSize�𒴂��Ȃ��͈͂̑傫�������ADIV.ithumbcontainer>CANVAS�Ƃ����`�̗v�f�����B
	//canvas���ł���͉̂摜���[�h������̂݁B�G���[���͂ł��Ȃ��B
	thumbSize: 200,
	container: null,	//node�̎q�B
	loading: true,
	useCanvas: false,
	init: function(href)
	{
		this.container = document.createElement("DIV");
		this.container.className = "ithumbcontainer";
		this.container.dataset.state="loading";	//�摜��\��������������URL�������ɓ��ꂽ���Ȃ��̂ł���Ŋ撣���Đݒ�
		//this.container.style.width = this.container.style.height = this.thumbSize + "px";

		var img = new Image();
		img.addEventListener("load", this.loaded.bind(this), false);
		img.addEventListener("error", this.error.bind(this), false);
		this.src = img.src = href;
		this.img = img;
	},
	
	loaded: function(e)
	{
		this.loading = false;
		//TODO::����canvas���N���b�N������(�|�b�v�A�b�v�����)�I�[�o�[���C�\��
		//����A����URL�@�����ق����}�V�����H
		var i = this.img;
		var ds = this.ds(i.naturalWidth,i.naturalHeight);
		var c;
		if (this.useCanvas)
		{	//canvas�ɒu������ƌy���E�E�E���H
			c = document.createElement("CANVAS");
			c.width = ds.width;
			c.height= ds.height;
			context=c.getContext("2d");
			context.fillStyle="rgba(0,0,0,1)";
			context.fillRect(0,0,c.width,c.height);
			context.drawImage(i,0,0,i.naturalWidth,i.naturalHeight,0,0 ,ds.width,ds.height);
		}
		else
		{
			c = document.createElement("IMG");
			c.width = ds.width;
			c.height= ds.height;
			c.src=this.img.src;
		}
		this.container.innerHTML = "";
		this.container.appendChild(c);
		this.container.dataset.state="ok";
		if (this.onload) this.onload();
	},
	error: function(e)
	{
		this.loading = false;
		this.container.dataset.state="error";
		if (this.onload) this.onload();
	},
	ds: function(w, h)
	{	//w, h��thmbSize�̋�`�ɉ������񂾂Ƃ��̏c���̃T�C�Y�����߂�B�߂�l��{width:?, height:? }
		var r = 1;
		var ms = this.thumbSize;
		if((ms>w)&&(ms>h)){
			r =  1;
		}else{
			r = (w>h)?(ms/w):(ms/h);
		}
		w = Math.floor(w*r);
		h = Math.floor(h*r);
		return {width: w, height: h, offsetX: Math.floor(ms-w)/2, offsetY: Math.floor(ms-h)/2 };
	},
};
/* ���́A�N���b�N�����src�̓��e���I�[�o�[���C�ŕ\������T���l�C�� */
function ImageThumbnailOnClickOverlay(url, sz, canvas){this.thumbSize = sz; this.useCanvas = canvas; this.init(url);}
ImageThumbnailOnClickOverlay.prototype = new ImageThumbnail();
ImageThumbnailOnClickOverlay.prototype.loaded = function(e)
{
	ImageThumbnail.prototype.loaded.call(this, e);
	this.container.addEventListener("click", this.showOverlay.bind(this), false);
}
ImageThumbnailOnClickOverlay.prototype.showOverlay = function()
{
	var ov = document.createElement("DIV");
	ov.className="overlay";
	ov.innerHTML = '<div><img src="{0}" class="ovlImg" style="max-height:{1}px; max-width:{2}px;margin:{3}px"></div>'.format(this.src, window.innerHeight-4, window.innerWidth-2,2);
	ov.addEventListener("click", function(){ ov.parentNode.removeChild(ov); }, false);
	ov.addEventListener("DOMMouseScroll", function(e){ e.preventDefault(); } , false);
	document.body.appendChild(ov);
}

/* ���́A�N���b�N�����src�̓��e���I�[�o�[���C�ŕ\������T���l�C�� */
function ImageThumbnailOnClickOverlayFrame(url, sz, canvas){this.thumbSize = sz; this.useCanvas = canvas; this.init(url);}
ImageThumbnailOnClickOverlayFrame.prototype = new ImageThumbnail();
ImageThumbnailOnClickOverlayFrame.prototype.loaded = function(e)
{
	ImageThumbnail.prototype.loaded.call(this, e);
	this.container.addEventListener("click", this.showOverlay.bind(this), false);
}
ImageThumbnailOnClickOverlayFrame.prototype.showOverlay = function()
{
	var ov = document.createElement("DIV");
	ov.className="overlay";
	ov.innerHTML = '<div><iframe src="{0}"></div>'.format(this.rel);
	ov.addEventListener("click", function(){ ov.parentNode.removeChild(ov); }, false);
	document.body.appendChild(ov);
}

/* ���|�b�v�A�b�v�������������������������������������������������������������� */
function Popup() { }
Popup.prototype = {
	offsetX: Preference.PopupOffsetX,
	offsetY: Preference.PopupOffsetY,
	offsetXe: 0,
	closeOnMouseLeave: true,
	show: function(content, pos, fixed)
	{
		var container = document.createElement("DIV");
		container.appendChild(content);
		container.className = "popup";
		if (fixed) container.style.position = "fixed";
		this.fixed = fixed;
		if (this.closeOnMouseLeave) container.addEventListener("mouseleave", this.close.bind(this), false);
		$("popupContainer").appendChild(container);
		this.container = container;
		this.limitSize(pos);
		this.adjust(pos);
	},
	
	close: function()
	{
		this.container.parentNode.removeChild(this.container);
		if (this.onClose) this.onClose(this);
	},
	//�T�C�Y����
	limitSize: function(pos)
	{
		var e = this.container.firstChild;
		//���E�E�E��ʕ���80%
		//�����E�E�E�A���J�[�ʒu�̉����ŉ�ʉ��[�܂�(40�͐����o���̃q�Q�̕��Ǝ኱�̗]�T�j�F�Œ�ۏ�R��
		var maxWidth = window.innerWidth *0.8;
		var poy = (this.fixed) ? 0 : window.pageYOffset;	//�Œ�̎��̓X�N���[���ʒu���C�ɂ��Ȃ�
		var maxHeight = window.innerHeight - (pos.pageY + Preference.PopupOffsetY - poy) - 40;
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
	adjust: function(pos)
	{
		var e = this.container.firstChild;
		var px = pos.pageX;
		var py = pos.pageY;
		//�w��A���J�[�ʒu����̃I�t�Z�b�g
		px+= this.offsetX;
		py += this.offsetY;
		
		//�����ɒu�����Ƃ��A�������ɂ͂ݏo����
		// x = (�ʒuX + �� + �}�[�W��) - (�`��̈敝 - �X�N���[���o�[�� + �ǉ��I�t�Z�b�g)
		var x = (px + e.clientWidth +  Preference.PopupMargin) - (window.innerWidth - ScrollBar.size + this.offsetXe) ; 
		if (x < 0) x = 0;	//�������K�v���Ȃ��Ƃ��͓������Ȃ�
		
		//�|�C���^�i�Ђ��̐�j�������Ă���
		e.parentNode.style.left = px + "px";
		e.parentNode.style.top  = py + "px";
		
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
		MessageLoader.loadByAnchorStr(target);
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
			var node = ThreadMessages.getNode(ids[i], true);
			if (node != null)
			{
				innerContainer.appendChild(node);
			}
		}
		this.show(innerContainer, pos, fixed);
	};

/* �������E���o �������������������������������������������������������������� */
var Finder = {
	
	init: function()
	{
		this.form = document.createElement("DIV");
		this.form.id = "finder";
		this.form.innerHTML =
			'<form id="fform">' +
			'<input type="text" width="20" name="q">' +
			'<input type="button" onclick="Finder.express();" value="���o">' +
			'</form>' ;
	},
	
	popupFinderForm: function(pos, fixed)
	{
		var content = this.form;
		var p = new Popup();
		p.offsetX = 8; p.offsetY = 16;
		p.closeOnMouseLeave = false;
		p.show(this.form, pos, fixed);
		p.container.dataset.finder = "y";
		this.popup = p;
		this.enterExpressMode();
	},
	closeFinderPopup: function()
	{
		if (this.popup)
		{
			this.popup.close();
			this.popup = null;
			this.leaveExpressMode();
		}
	},
	showing: function()
	{
		return (this.popup != null);
	},
	enterExpressMode: function()
	{
		document.body.dataset.expressMode="y";
	},
	leaveExpressMode: function()
	{
		document.body.dataset.expressMode="n";
	},
	express: function()
	{	//�����Z�b�g���Ă���R�����ĂԂƁA�����ɍ��v������̂Ƃ��Ȃ����̂�article�Ɉ������
		this.cond = $("fform").q.value;
		console.log(this.cond);
		for(var i=1; i< ThreadInfo.Total; i++)
		{
			if (ThreadMessages.isDeployed(i))
			{
				ThreadMessages.domobj[i].dataset.express = this.check(ThreadMessages.domobj[i]);
			}
		}
	},
	check: function(node)
	{
		var h = node.innerHTML;
		var reg = new RegExp(this.cond);
		if (reg.test(h))
		{
			return "y";
		}
		else
		{
			return "n";
		}
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
	Pickup.init();
	Tracker.init();
	EventHandlers.init();
	Finder.init();
	ownerApp = $("wa").href.substr(0,6) == "chaika" ? "chaika" : "bbs2chReader";				//�A�v������
	$("footer").innerHTML = "powerd by {0} with {1} {2}".format(ownerApp, skinName, skinVer);	//�t�b�^�\�z
	document.title = ThreadInfo.Title + " - {0}({1})".format(ownerApp, skinName);				//�^�C�g���C��
	if (Preference.FocusNewResAfterLoad) Menu.JumpToNewMark();			//�V������΃W�����v
	//TODO::�Ȃ���΃u�b�N�}�[�N�փW�����v�Ƃ����邩��
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

