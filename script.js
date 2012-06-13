var skinName = "PhantomPain3";
var skinVer  = "ver. \"closed alpha\"";
var ownerApp;

var _Preference =
{	//�ݒ菉���l
	ResMenuAttachDelay: 250,	//���X���j���[���A�^�b�`�����܂ł̃f�B���C(ms)
	ResPopupDelay: 250,			//�|�b�v�A�b�v�\���f�B���C(ms)
	PostScheme: "bbs2ch:post:",	//���e�����N�̃X�L�[�}
	ReplyCheckMaxWidth: 10,		//����ȏ�̐��̃��X�Ɍ��y����ꍇ�͋t�Q�ƂƂ��Ȃ�(>>1-1000�Ƃ�)
	TemplateLength: 0,			//�e���v���|�b�v�A�b�v�ŕ\�����郌�X�̐�
	PopupLeft: 24,				//�|�b�v�A�b�v�R���e���c���[�`�����o���E�[�܂ł̍ŒZ����
	PopupRightMargin: 16,		//�|�b�v�A�b�v�R���e���c�E�[�`��ʒ[�܂ł̋���
	PopupDestructChain: true,	//�|�b�v�A�b�v��A���I�ɔj�󂷂邩�H
	MoreWidth: 100,				//more�œǂݍ��ޕ��B0�Ȃ�S���B
	AutoReloadInterval: 300,	//�I�[�g���[�h�Ԋu(�b)
	ImagePopupSize: 200,		//�摜�|�b�v�A�b�v�̃T�C�Y
	FocusNewResAfterLoad: true,	//���[�h���A�V�����X�ɃW�����v
	ViewerPreloadWidth: -1,		//�r���[�A�[�̐�ǂݕ��B-1�̓��[�h���ɑS�āB0�͐�ǂ݂Ȃ��B1�`�͌����i�������������j
	ViewerCursorHideAt: 5,		//���f�B�A�r���[�A�ŃJ�[�\����������܂ł̎��ԁi�b�j
	SlideshowInterval: 5,		//�X���C�h�V���[�̊Ԋu(�b)
	LoadBackwardOnTopWheel: true,	//��ԏ�ŏ�ɃX�N���[�����悤�Ƃ���ƃ��[�h���|����
	LoadForwardOnBottomWheel: true,	//��ԉ��ŉ��ɃX�N���[�����悤�Ƃ���ƃ��[�h���|����
	LoadOnWheelWidth: 30,		//LoadOnWheel�œǂݏo�����X�̐�
	LoadOnWheelCheckNew: false,	//LoadOnWheel�ŐV���`�F�b�N���邩�H
	LoadOnWheelDelta: 10,		//LoadBackwardOnTopWheel,LoadForwardOnBottomWheel�̂������]��
	AutoPreviewOutlinks: false,	//Outlink�������W�J
	ChapterWidth: 100,			//Navi�̃`���v�^�[��
	EnableNextThreadSearch: true,	//���X�������L���H
	NextThreadSearchBeginsAt: 900,	//���X�������J�n���X�ԍ�
	NoticeLength: 10,			//�\�����邨�m�点�̐�
	//���X���_�u���N���b�N������ǂ��Ȃ�H
	//              0=�f        1=shift,      2=ctr  3=shift+ctrl,4=alt ,5=shift+alt, 6=ctrl+alt,7=ctrl+alt+shift
	OnResDblClick: ["pickup", "closepopup", "bookmark", "track", "resto", "preview", "preview", "tree"],
	//���g�� none(���ꂪ�f�t�H���g), bookmark, res, resto, pickup, tree, track, preview, closepopup, setbookmark
 
};

var Preference = clone(_Preference);

/* ��prototype.js������������������������������������������������������������ */
Function.prototype.bind = function prototype_bind() {
	var __method = this, args = $A(arguments), object = args.shift();
	return function() {
		return __method.apply(object, args.concat($A(arguments)));
	}
}
var $A = Array.from = function prototype_arrayFrom(iterable) {
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

var $qA = function prototype_quoteArrayFrom(iterable)
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

Array.prototype.include = function prototype_include(val) {
	for(var i=0;i<this.length;i++){
		if (this[i]==val) return true;
	}
	return false;
}

Array.prototype.clone = function() {
	return Array.apply(null, this);
}

function clone(obj) {
	var f = function(){};
	f.prototype = obj;
	return new f;
}

var $=function prototype_getElementById(id){return document.getElementById(id);}

/* ���X�L���̐ݒ聡���������������������������������������������������������� */
var SkinPref = {

	_skinName: "PhantomPain",
	_storage: localStorage,
	
	_resolvePrefName: function(aPrefName){
		return this._skinName + "_" + aPrefName;
	},
	
	getStr: function(aPrefName, aDefaultValue){
		var item = this._storage.getItem(this._resolvePrefName(aPrefName));
		if(item == null) return aDefaultValue || "";
		return item;
	},
	setStr: function(aPrefName, aValue){
		var value = String(aValue);
		this._storage.setItem(this._resolvePrefName(aPrefName), value);
		return value;
	},

	getInt: function(aPrefName, aDefaultValue){
		var item = this._storage.getItem(this._resolvePrefName(aPrefName));
		if(item == null) return aDefaultValue || 0;
		return parseInt(item);
	},
	setInt: function(aPrefName, aValue){
		var value = parseInt(aValue);
		this._storage.setItem(this._resolvePrefName(aPrefName), value);
		return value;
	},
		
	getBool: function(aPrefName, aDefaultValue){
		var item = this._storage.getItem(this._resolvePrefName(aPrefName));
		if(item == null) return aDefaultValue || false;
		return (item == "true");
	},
	setBool: function(aPrefName, aValue){
		var value = (aValue) ? "true" : "false";
		this._storage.setItem(this._resolvePrefName(aPrefName), value);
		return value;
	}

};

function PP3ResetPreference()
{	//�u�b�N�}�[�N���b�g�Ƃ��� javascript:PP3ResetPreference(); ��o�^���Ă����ƁA���Z�b�g���邱�Ƃ��ł��܂��B
	console.log("�ݒ���N���A���܂���");
}

/* �����ʂ̐ݒ聡���������������������������������������������������������� */
var CommonPref = {

	_identifier: new String("UNKNOWN"),
	
	_storage: localStorage,
	
	_resolvePrefName: function CommonPref__resolvePrefName(aPrefName){
		return "bbs2chSkin.common." + aPrefName + this._identifier;
	},
	
	setIdentifier: function CommonPref_setIdentifier(aThreadURL) {
		if (aThreadURL.match(/machi\.to/)) {
			//�܂�BBS
			var _bbskey ="";
			var _thread = "";
			if (document.location.href.match(/BBS=([^&]+)/i)) {
				_bbskey = RegExp.$1;
			}
			if (document.location.href.match(/KEY=([0-9]+)/i)) {
				_thread = RegExp.$1;
			}
			this._identifier = "machi." + _bbskey + "." + _thread;
		} else {
			//2ch
			if (aThreadURL.match(/([^\/]+)\/([^\/]+)\/$/)) {
				this._identifier = RegExp.$1 + "." + RegExp.$2;
			}
		}
	},
	
	getThreadObjectKey: function(objName)
	{
		return "bbs2chSkin.common." + objName + "." + this._identifier;
	},
	getGlobalObjectKey: function(objName)
	{
		return "bbs2chSkin.common." + objName;
	},
	
	//objName = �u�b�N�}�[�N�Fbm, �s�b�N�A�b�v�Fpk, Ignores: ig
	writeThreadObject: function CommonPref_wroteThreadObject(objName, str)
	{
		var pn = "bbs2chSkin.common." + objName + "." + this._identifier;
		this._storage.setItem(pn, str);
	},
	readThreadObject: function CommonPref_readThreadObject(objName)
	{
		var pn = "bbs2chSkin.common." + objName + "." + this._identifier;
		return this._storage.getItem(pn);
	},
	writeGlobalObject: function CommonPref_writeGlobalObject(objName, str)
	{
		var pn = "bbs2chSkin.common." + objName;
		this._storage.setItem(pn, str);
	},
	readGlobalObject: function CommonPref_readGlobalObject(objName)
	{
		var pn = "bbs2chSkin.common." + objName;
		return this._storage.getItem(pn);
	},
	foreach: function CommonPref_foreach(objName, proc)
	{
		var ex = new RegExp("^bbs2chSkin\.common\." + objName + "\.");
		for(var key in this._storage)
		{
			if (ex.test(key))
			{
				proc(key, this._storage.getItem(key));
			}
		}
	},
};

/* ���R���t�B�M�����[�^�i�ݒ�t�H�[���j������������������������������ */
var Configulator = {
	toggle: function Configulator_toggle(t)
	{
		if (!t) return;
		if (!t.tagName) t = $(t);
		if (!t) return;
		if (!this.level1)
		{	//������
			var cont = document.createElement("DIV");
			cont.id = "prefMenu";
			var html = "";	//TODO::�O���t�@�C������ǂݍ���
			cont.innerHTML = html;
			this.level1 = cont;
		}
		if (t.__popup)
		{
			t.__popup.close();
		}
		else
		{
			var p = new Popup();
			p.closeOnMouseLeave = false;
			p._init(t);
			p.show(this.level1.cloneNode(true));
			p.onClose = function(){ t.__popup = null; }
			t.__popup = p;
		}
	}
};

/* ���ꗗ�y�C������������������������������������������������������ */
var BoardPane = {
	init: function BoardPane_init()
	{
		this.container = $("boardPane");
		this.container.innerHTML = "";	//�S�q���E��

		this.boardList = document.createElement("IFRAME");
		this.boardList.id = "boardList";

		this.container.appendChild(this.boardList);
		
		$("bpHandle").addEventListener("dblclick", this.toggle.bind(this), false);
	},
	toggle: function BoardPane_toggle()
	{
		this._size = this._size ? 0 : window.innerHeight /2;
		this.update();
	},
	update: function BoardPane_update()
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
	init: function MessageMenu_init()
	{
		this._menu = $("resMenu");
		this._menu.parentNode.removeChild(this._menu);	//���ꂠ�����ق������S��������
	},

	attach: function MessageMenu_attach(node)
	{	//node��ARTICLE�łȂ���΂Ȃ�Ȃ��BARTICLE�ȊO(null���܂�)���w�肷��ƁA���j���[�͂ǂ��ɂ��\������Ȃ��Ȃ�B
		var m = this._menu;		//�Q�ƃR�s�`
		if (m == null) return;	//���X���j���[�Ȃ�
		if (node == m.parentNode) return;	//�����Ƃ��Ɋ��蓖�ā�����
		if (m.parentNode != null) m.parentNode.removeChild(m);	//�f�^�b�`
		this.popTrack = null;
		if ((node != null) && (node.tagName == "ARTICLE"))
		{
			m.dataset.binding = node.dataset.no;
			node.insertBefore(m, node.childNodes[1]);
		}
		else
		{
			m.dataset.binding = 0;
		}
	},
	ResTo: function MessageMenu_ResTo(event)
	{	//����Ƀ��X
		NodeUtil.resTo(this._menu.dataset.binding);
	},
	PopupRef: function MessageMenu_PopupRef(event)
	{
		var node = this._menu.parentNode;
		if (node.dataset.popupRefShowing != "y")
		{
			node.dataset.popupRefShowing = "y";
			var pp = new ResPopup(null);
			pp.onClose = function(){ node.dataset.popupRefShowing = ""; node.refPopup = null; }
			pp.popup(MessageStructure.nodesReplyFrom[this._menu.dataset.binding], "RMenu.Ref");
			node.refPopup = pp;	//��₱�����Ȃ邩��dom��obj�������������Ȃ����ǂȂ��E�E�E
		}
		else
		{
			if (node.refPopup) node.refPopup.close();
		}
	},
	ExtractRef: function MessageMenu_ExtractRef(event)
	{
		NodeUtil.expressReffer(this._menu.dataset.binding);
	},
	CreateRefTree: function MessageMenu_CreateRefTree(event)
	{	//�Q�ƃc���[���\�z����
		NodeUtil.openRefTree(this._menu.parentNode);
	},
	
	DeleteRefTree: function MessageMenu_DeleteRefTree(event)
	{	//�����̃c���[���폜
		NodeUtil.closeRefTree(this._menu.parentNode);
	},
	
	SetBookmark: function MessageMenu_SetBookmark(event)
	{
		NodeUtil.setBookmark(this._menu.dataset.binding);
	},
	ResetBookmark: function MessageMenu_ResetBookmark(event)
	{
		NodeUtil.resetBookmark(this._menu.dataset.binding);
	},
	SetPickup: function MessageMenu_SetPickup(event)
	{
		NodeUtil.setPickup(this._menu.dataset.binding);
	},
	ResetPickup: function MessageMenu_ResetPickup(event)
	{
		NodeUtil.resetPickup(this._menu.dataset.binding);
	},
	ToggleHiding: function MessageMenu_ToggleHiding(event)
	{
	},
	ExtractImages: function MessageMenu_ExtractImages(event)
	{
		NodeUtil.previewLinks(this._menu.parentNode);
	},
	BeginGear: function MessageMenu_BeginGear(event)
	{
		var e = $("RMenu_Gear");
		if (e.enchantedGear)
		{
			e.enchantedGear.close();
		}
		else
		{
			var pp = new GearPopup(e);
			pp.showPopup(parseInt(this._menu.dataset.binding), Util.getElementPagePos(e), false);
		}
	},
	BeginTracking: function MessageMenu_BeginTracking(event)
	{	//�g���b�L���O�̊J�n�B�w�背�X��ID�Ɠ������X��S�������\������B
		//ID��trip�Ōl���肵�A�A���I�ɋ����\���B
		NodeUtil.beginTracking(this._menu.dataset.binding);
	},
	EndTracking: function MessageMenu_EndTracking(event)
	{	//�g���b�L���O�̏I��
		NodeUtil.endTracking(this._menu.dataset.binding);
	},
	PopupTracked: function MessageMenu_PopupTracked(event)
	{
		if (this.popTrack)return;	//���łɕ\������Ă���
		var tracking = Tracker.getTracker(this._menu.dataset.binding);
		if (tracking)
		{
			var ids = tracking.getTrackingNumbers();
			var pp = new ResPopup(null);
			pp.popup(ids, "RMenu.TrPop");
			this.popTrack = pp;
		}
	}
};

var Menu = {

	PopupTemplate: function Menu_PopupTemplate(e)
	{
		if (!e) e = $("Menu.Template");
		if (Preference.TemplateLength)
		{
			var pp = new ResPopup(null);
			MessageLoader.load(1, Preference.TemplateLength);
			var tids = [];
			for(var i=1; i<=Preference.TemplateLength; i++) tids.push(i);
			pp.popup(tids, e);
		}
		else 
		{	//TemplateLength = 0�ݒ莞�̓M�A�Ƃ��ďo��
			if (e.enchantedGear)
			{
				e.enchantedGear.close();
			}
			else
			{
				var pp = new GearPopup(e);
				pp.showPopup(1, Util.getElementPagePos(e), true);
			}
		}
	},
	
	JumpToNewMark: function Menu_JumpToNewMark()
	{
		var nn = ThreadInfo.Fetched + 1;
		NodeUtil.focus(nn);
	},
	
	JumpToBookmark: function Menu_JumpToBookmark()
	{
		Bookmark.focus();
	},
	
	ResetBookmark: function Menu_ResetBookmark()
	{
		Bookmark.add(0);
	},
	PopupPickups: function Menu_PopupPickups()
	{
		var e = $("Menu.Pickup");
		if (e.__popup)
		{
			e.__popup.close();
		}
		else
		{
			var p = new ResPopup(null);
			p.closeOnMouseLeave = false;
			MessageLoader.load(Pickup.pickups);
			p.popup(Pickup.pickups, "Menu.Pickup");
			p.onClose = function(){ e.__popup = null; }
			e.__popup = p;
		}
	},
	ExpressPickups: function Menu_ExpressPickups()
	{
		Finder.enterExpressMode();
		$("fform").q.value = "";
		$("fform").p.checked = true;
		Finder.express();
	},
	More: function Menu_More()
	{
		if (ThreadMessages.deployedMax == ThreadInfo.Total)
		{
			Thread.check();
		}
		else
		{
			var focusTo = ThreadMessages.deployedMax+1;
			Thread.deploy(Preference.MoreWidth);
			NodeUtil.focus(focusTo);
		}
	},
	MoreBack: function Menu_MoreBack()
	{
		var focusTo = ThreadMessages.deployedMin-1;
		Thread.deploy(-Preference.MoreWidth);
		NodeUtil.focus(focusTo);
	},
	ToggleAutoMore: function Menu_ToggleAutoMore()
	{
		Thread.toggleAutoCheck();
	},
	PreviewOutlinks: function Menu_PreviewOutlinks()
	{
		for(var i=1; i< ThreadInfo.Total; i++)
		{
			if (ThreadMessages.isDeployed(i))
			{
				OutlinkPlugins.preview(ThreadMessages.domobj[i]);
			}
		}
	},
	ToggleFinder: function Menu_ToggleFinder()
	{
		if (Finder.showing())
		{
			Finder.leaveExpressMode();
		}
		else
		{
			Finder.enterExpressMode();
		}
	},
	ShowViewer: function Menu_ShowViewer()
	{
		Viewer.show();
	},
	ToggleNavigationPopup: function Menu_ToggleNavigationPopup()
	{
		var e = $("Menu_Navi");
		if (e.__popup)
		{
			e.__popup.close();
		}
		else
		{
			var p = new Popup();
			p.closeOnMouseLeave = false;
			p._init(e);
			p.show(Thread.getNavigation());
			p.onClose = function(){ e.__popup = null; }
			e.__popup = p;
		}
	},
};

var Thread = {
	init: function Thread_init()
	{
		//identifier�ݒ�
		var url = new URL(ThreadInfo.Url);
		this.boardId  = url.boardId;
		this.threadId = url.threadId;

		//�X���^�C�\������deta-board�ɓo�^�i�Ȃ��X���^�C���Ƃ�����Ό����ڂɊւ��邱�ƂȂ̂ŁA�ݒ�ŕς�����ق������������j
		var e = $("threadName");
		if (e) e.dataset.board = this.boardId;
		
		//���X��/�O�X�����
		this.nextThread = this.loadNextThreadInfo();
		this.prevThread = this.searchPrevThread();
	},
	openWriteDialog: function Thread_openWriteDialog(to)
	{
		if (!to) to = "";
		var url = Preference.PostScheme + ThreadInfo.Url + to
		window.location.href = url;
	},
	check: function Thread_check()
	{	//�V�����X�̊m�F���J�n
		this.autoTickCount = 0;	//���ǂݍ��񂾂炻�̂Ƃ��Ɏ������[�h�J�E���^���Z�b�g
		if (ThreadMessages.deployedMax != ThreadInfo.Total)
		{	//�Ō�܂ŕ\������Ă��Ȃ��Ƃ��͑S���\�����Ă���B
			Thread.deployTo(ThreadInfo.Total);
		}
		if (!this.checking)
		{
			this.checking = true;
			document.body.dataset.loading = "y";
			var req = new XMLHttpRequest();
			req.onreadystatechange = this._loadCheck.bind(this, req);
			req.open('GET', ThreadInfo.Server + ThreadInfo.Url + "l1n", true);
			req.setRequestHeader("If-Modified-Since", "Wed, 15 Nov 1995 00:00:00 GMT");
			req.send(null);
		}
	},
	_loadCheck: function Thread__loadCheck(req, e)
	{
		if (req.readyState==4)
		{	//XmlHttpRequest������
			if (!this._update(req.status, req.responseText))
			{	//�Ȃ񂩃G���[
				Notice.add("���[�h�G���[");
			}
			document.body.dataset.loading = "";
			this.checking = false;
		}
	},
	_update: function Thread__update(status, html)
	{
		if ((status >= 200) && (status<300))
		{
			if (html.match(/<\!\-\- INFO(\{.+?\})\-\->/))
			{
				var obj;
				eval("obj = "+ RegExp.$1);	//{ status, total, new }
				if (obj.new)
				{	//�V��������Ƃ��`
					if (html.match(/<!--BODY.START-->([\s\S]+)<!--BODY.END-->/))
					{
						var nc = document.createElement("DIV");
						nc.innerHTML = RegExp.$1;
						ThreadMessages.push($A(nc.getElementsByTagName("ARTICLE")));
					}
					//TODO::�����̐V���}�[�N����
					ThreadInfo.Total = obj.total;
					ThreadInfo.New = obj.new;
					ThreadInfo.Fetched = obj.total - obj.new;
					ThreadInfo.Status = obj.status;
					this.deployTo(ThreadInfo.Total);
					NodeUtil.focus(obj.Total - obj.new + 1)
				}
				Notice.add("{1} �V��{0}".format(obj.new ? obj.new + "��" : "�Ȃ�", Util.timestamp()));
				return true;
			}
		}
		return false;
	},
	beginAutoCheck: function Thread_beginAutoCheck()
	{
		if(this.auto)return;
		this.auto = true
		document.body.dataset.autoload = "y";
		this.autoTickCount = 0;
		this.autoTimer = setInterval(this.autocheckTick.bind(this), 1000);
	},
	endAutoCheck: function Thread_endAutoCheck()
	{
		if (!this.auto)return;
		this.auto = false;
		document.body.dataset.autoload = "";
		clearInterval(this.autoTimer);
		this.autoTimer = 0;
	},
	toggleAutoCheck: function Thread_toggleAutoCheck()
	{
		if (this.auto)
		{
			this.endAutoCheck();
		}
		else
		{
			this.beginAutoCheck();
		}
	},
	autocheckTick: function Thread_autocheckTick()
	{
		if (++this.autoTickCount >= Preference.AutoReloadInterval)
		{
			this.check();
		}
	},
	deploy: function Thread_deploy(width)
	{	//width�����̂Ƃ��͑O����deploy, ���̂Ƃ��͌����deploy
		if (!width)
		{
			this.deployAll();
		}
		else
		{
			this.deployTo(width < 0 ? ThreadMessages.deployedMin + width : ThreadMessages.deployedMax + width);
		}
	},
	deployAll: function Thread_deployAll()
	{	//�����Ă���S�Ă�ݒu����B
		this.deployTo(1);
		this.deployTo(ThreadInfo.Total);
	},
	deployTo: function Thread_deployTo(to)
	{
		if (to <= 0) to = 1;
		if (to >= ThreadInfo.Total) to = ThreadInfo.Total;
		var min = to,  max = to;
		if (to < ThreadMessages.deployedMin)
		{
			max = ThreadMessages.deployedMin-1;
		}
		if (to > ThreadMessages.deployedMax)
		{
			min = ThreadMessages.deployedMax+1;
		}
		//console.log("deployTo: {0}->{1}".format(min,max));
		MessageLoader.load(min, max);
		ThreadMessages.deploy(min, max);
	},
	loadFocus: function Thread_loadFocus(_no)
	{
		var no = parseInt(_no);
		if ((no>=1) && (no<=ThreadInfo.Total))
		{
			this.deployTo(no);
			NodeUtil.focus(no);
		}
		else
		{
			Notice.add("cannot jump to {0}".format(no));
		}
	},
	getNavigation: function Thread_getNavigation()
	{
		if (!this._navi)
		{
			navi = document.createElement("NAV");
			navi.id = "navigation";
			var html = "";
			
			//Chapter
			html += '<h1>CHAPTER</h1><ul>';
			var w = Preference.ChapterWidth;
			var m = ThreadInfo.Total;
			for (var i=0; i< (m/w); i++)
			{
				html+= '<li><a class="navchapter">{0}-{1}</a></li>'.format(i*w+1, (i+1)*w);
			}
			html += '<li><a class="navprevchapter">prev.</a></li>';
			html += '<li><a class="navnextchapter">next.</a></li>';
			html += '</ul>';
			
			//BacklogWidth
			html += '<h1>BACKLOG</h1><ul>';
			var backlogWidths = ["l10", "l50", "l100", "l250", "l500", "l750", "*ALL*" ];
			for (var i=0; i<backlogWidths.length; i++)
			{
				html+= '<li><a class="navbacklog">{0}</a></li>'.format(backlogWidths[i]);
			}
			//���̑�
			html += '<h1>etc.</h1><ul>';
			html += '<li><form onsubmit="Thread.loadFocus(jumpto.value);return false;">JumpTo:<input type="text" size="4" name="jumpto"></form></li>';
			html += '<li><a class="navboardlist">�X���ꗗ</a></li>';
			html += '<li><a class="navprevthread">�O�X��</a></li>';
			html += '<li><a class="navnextthread">���X��</a></li>';
			html += '</ul>';

			navi.innerHTML = html;
			this._navi = navi;
		}
		return this._navi.cloneNode(true);
	},
	isNavigationElement: function Thread_isNavigationElement(e)
	{
		switch(e.className)
		{
			case "navchapter":
			case "navprevchapter":
			case "navnextchapter":
			case "navbacklog":
			case "navboardlist":
			case "navprevthread":
			case "navnextthread":
				return true;
			default:
				return false;
		}
	},
	invokeNavigation: function Thread_invokeNavigation(e)
	{	//altkey�̏�ԂƂ���荞��ŁA�ʃE�B���h�E�\���Ƃ��������ׂ����H
		var c = e.textContent;
		switch(e.className)
		{
			case "navchapter":
			case "navbacklog":
				this.reload(c == "*ALL*" ? "" : c);
				break;
			case "navprevchapter":
				this.reloadToPrevChapter();
				break;
			case "navnextchapter":
				this.reloadToNextChapter();
				break;
			case "navboardlist":
				this.transitToThreadList();
				break;
			case "navprevthread":
				this.transitToPrevThread();
				break;
			case "navnextthread":
				this.transitToNextThread();
				break;
			default:
				return;
		}
	},
	reload: function Thread_reload(range)
	{
		window.location.href = ThreadInfo.Server + ThreadInfo.Url + range;
	},
	reloadToPrevChapter: function Thread_reloadToPrevChapter(w)
	{
		if (!w) w = Preference.ChapterWidth;
		var max = ThreadMessages.deployedMin - 1;
		var min = max - w - 1;
		if (min < 0) min = 1;
		if (max < min) max = min;
		this.reload(min + "-" + max);
	},
	reloadToNextChapter: function Thread_reloadToNextChapter(w)
	{
		if (!w) w = Preference.ChapterWidth;
		var min = ThreadMessages.deployedMax +1;
		var max = min + w - 1;
		if (min < 0) min = 1;
		if (max < min) max = min;
		this.reload(min + "-" + max);
	},
	transitToThreadList: function Thread_transitToThreadList()
	{	//�X���ꗗ
		window.location.href = "bbs2ch:board:" + ThreadInfo.Board;
	},
	transitToPrevThread: function Thread_transitToPrevThread()
	{	//�O�X���\��
		if (this.prevThread.url)
		{
			window.location.href = ThreadInfo.Server + this.prevThread.url + "l" + Preference.ChapterWidth;
		}
	},
	transitToNextThread: function Thread_transitToNextThread()
	{	//���X���\��
		if (this.nextThread.url)
		{
			window.location.href = ThreadInfo.Server + this.nextThread.url + "l" + Preference.ChapterWidth;
		}
	},
	textNextThread: function Thread_textNextThread(anchor, node)
	{	//���X��URL���m�F�E�E�E
		if (this.nextThread.userDecided) return;			//���[�U�[�����߂����X��������Ƃ��A�������Ȃ�
		if (!Preference.EnableNextThreadSearch) return;		//�@�\����
		if (!anchor)return;
		if (!node) node = Util.getDecendantNode(anchor, "ARTICLE");
		var nodeNo = parseInt(node.dataset.no);
		var url = new URL(anchor.href);
		if (url.maybeThread
		 && (url.boardId == this.boardId)					//������
		 && (nodeNo >= this.nextThread.linkedNode) 			//�O�Ɍ��߂��ԍ�����̃��X
		 && (nodeNo >= Preference.NextThreadSearchBeginsAt))	//���X���A�h���X�`�F�b�N�ԍ��ȍ~�̃��X
		{
			this.setNextThread(anchor.href, false, nodeNo);
		}
	},
	setNextThread: function Thread_setNextThread(href, ud, nodeNo)
	{	//ud: ���[�U�[�����߂����H true�̂Ƃ��A����ɏ㏑������Ȃ���Ԃŏo�Ă���B
		var url = new URL(href);
		ud = ud ? true : false;	//�^�U�l�̐��K��
		var nextThread = { url: href, id: url.threadId, userDecided: ud, linkedNode: nodeNo};
		this.nextThread = nextThread;
		this.saveNextThreadInfo(nextThread);	//TODO::�����Ŗ���ĂԂƕ��ׂ��|����ꍇ�����邩���H����ȍ~���v���낤���ǁB
		document.body.dataset.nextThread = nextThread.url || "";
	},
	saveNextThreadInfo: function Thread_saveNextThreadInfo(nextThread)
	{
		var saveStr = '{url: "{0}", id: "{1}", userDecided: {2}, linkedNode: {3} }'
		              .format(nextThread.url, nextThread.id, nextThread.userDecided, nextThread.linkedNode);
		CommonPref.writeThreadObject("nextThread", saveStr);
	},
	loadNextThreadInfo: function Thread_loadNextThreadInfo(objStr)
	{
		objStr = objStr ? objStr : CommonPref.readThreadObject("nextThread");
		try
		{
			if (objStr)
			{
				var n;
				eval("n="+objStr);
				return n;
			}
		}catch(e){}
		return {url: null, id: null, userDecided: false, linkedNode: 0};	//�f�t�H���g
	},
	searchPrevThread: function Thread_searchPrevThread()
	{
		var This = this;
		var ret = {url: null};
		CommonPref.foreach("nextThread", function(key, dat)
		{
			var info = This.loadNextThreadInfo(dat);
			if (info.id == This.threadId)
			{	//URL => ���̃A�h���X�̐����̂Ƃ����key�̖����̐����Œu������������
				if (key.match(/(\d+)$/))
				{
					var num = RegExp.$1;
					var url = ThreadInfo.Url.replace(/\/(\d+)\/$/, function(a,b,c){	return "/" + num + "/"; });
					ret = {url: url};
				}
			}
		});
		document.body.dataset.prevThread = ret.url || "";	//���ꂪ�����ł����̂񂩂ȁH
		return ret;
	},
};

/* �����X�̏��������������������������������������������������������������� */
var ThreadMessages = {
	domobj: new Array(),	//DOM�I�u�W�F�N�g�Bindex�̓��X�ԍ�
	outLinks: new Array(),
	
	deployedMin: 0,
	deployedMax: 0,
	
	init: function ThreadMessages_init()
	{
		var e = $("resContainer");
		for(var i=0; i<e.children.length; i++)
		{	//����A�L���[�ɓo�^���Ĕ񓯊��Ƃ��ɂ����ق��������̂����B
			this.processMessage(e.children[i]);
		}
		this.updateDeployedInfo();
		//�����W�J
		if (Preference.AutoPreviewOutlinks)
		{	
			Menu.PreviewOutlinks();
		}
	},
	updateDeployedInfo: function ThreadMessages_updateDeployedInfo(e)
	{
		if(!e) e = $("resContainer");
		var min = parseInt(e.firstElementChild.dataset.no);
		if ((e.children.length != 1) && (min == 1))
		{
			var second = parseInt(e.children[1].dataset.no);
			min = (second == 2) ? 1 : second;
		}
		this.deployedMin = min;
		this.deployedMax = parseInt(e.lastElementChild.dataset.no);
	},
	deploy: function ThreadMessages_deploy(min, max)
	{	//min����max�܂ł�deployNode����B
		//���[�h����Ă��Ȃ����̂̓��[�h���Ȃ��̂ł��炩����load(min, max���Ă����悤��!�j
		for(var i=min; i<=max; i++)
		{
			this.deployNode(this.domobj[i]);
		}
	},
	
	push: function ThreadMessages_push(nodes)
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
	},

	processMessage: function ThreadMessages_processMessage(node)
	{
		if (node.tagName == "ARTICLE")
		{
			var no = new Number(node.dataset.no) + 0;
			var msgNode = node.childNodes[1];
			this.extendAnchor(msgNode);
			this.replaceStr(msgNode);
			this.domobj[no] = node;
			this.outLinks[no] = $A( node.getElementsByClassName("outLink"));
			//�V������
			if(node.childNodes[0].className=="new")
			{
				document.body.dataset.hasNew = "y";
			}
			
			//���O�ƃg���b�v�̒��o
			var name = node.childNodes[0].childNodes[3].textContent;
			node.dataset.author = name;
			if (name.match(/��([^\s]+)/))
			{
				node.dataset.trip = RegExp.$1;
			}
			if (name.match(/^(\d+)(��.+)?/))
			{
				node.dataset.numberdName = "y";
			}
			//���b�Z�[�W�\�����
			MessageStructure.push(node);
			
			MarkerServices.nodeLoaded(node);
		}
	},
	
	deployNode: function ThreadMessages_deployNode(node)
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
		if ((this.deployedMin == 2) && this.isDeployed(1)) this.deployedMin = 1;
		if (nn > this.deployedMax) this.deployedMax = nn;
		if (Preference.AutoPreviewOutlinks)
		{
			OutlinkPlugins.preview(node);
		}
	},
	
	findDeployedNextSibling: function ThreadMessages_findDeployedNextSibing(no)
	{	//insertBefore�̑�Q�����Ɏg�����߂ɁAno�𒴂���no������deployed�A�C�e���̂����A�ł�no�̏��������̂�Ԃ��B
		for(var i=no; i<=this.deployedMax; i++)
		{
			if(this.isDeployed(i))
			{
				return this.domobj[i];
			}
		}
		return null;
	},
	
	extendAnchor: function ThreadMessages_extendAnchor(e)
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
				Thread.textNextThread(a);
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
	replaceStr: function ThreadMessages_replaceStr(e)
	{	//replaceStr.txt�ɂ��u��
	},
	getNode: function ThreadMessages_getNode(id, clone)
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
	foreach: function ThreadMessages_foreach(func, includePopup)
	{
		var nodes = includePopup ? $A(document.body.getElementsByTagName("ARTICLE")) : this.domobj;
		for (var i=0, j=nodes.length; i<j; i++)
		{
			if (nodes[i]) func(nodes[i]);
		}
	},
	apply: function ThreadMessages_apply(func, filter, includePopup)
	{
		var nodes = includePopup ? $A(document.body.getElementsByTagName("ARTICLE")) : this.domobj;
		for (var i=0, j=nodes.length; i<j; i++)
		{
			if (nodes[i] && filter(nodes[i])) func(nodes[i]);
		}
	},
	getDeployMode: function ThreadMessages_getDeployMode(no)
	{	//�u�b�N�}�[�N�̈ʒu�ɂ����n(��),yb(�\���͈͂��O),y(�\���͈͓�),ya(�\���͈͂����)�̂����ꂩ��Ԃ�
		if (no <= 0)
		{
			return "n";
		}
		else if (no < ThreadMessages.deployedMin)
		{
			return "yb";
		}
		else if (no > ThreadMessages.deployedMax)
		{
			return "ya";
		}
		else
		{
			return "y";
		}
	},
	isReady: function ThreadMessages_isReady(id)
	{	//�ǂݍ��ݍς݂��H
		return (this.domobj[id]);
	},
	isDeployed: function ThreadMessages_isDeployed(id)
	{	//���ʂɕ\������Ă��邩�H
		if ( this.domobj[id])
			if (this.domobj[id].parentNode)
				if (this.domobj[id].parentNode.id == "resContainer")
					return true;
		return false;
	},
	_dblSizeAnchorRegExp: new RegExp("(����|��|&gt;&gt;|&gt;)([0-9�O-�X,\-]+)","g"),
	
};


/* �����[�_�[���������������������������������������������������������� */
var MessageLoader = {
	load: function MessageLoader_load(min, max)
	{	//min����max�܂ł����O�s�b�N�A�b�v���[�h�œǂݏo����Ready�ɂ���B
		//alert([min, max]);
		if (min instanceof Array)
		{
			for(var i=0; i<min.length; i++)
			{
				this.load(min[i],min[i]);
			}
			return;
		}
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
		if ((tmin <= tmax) && (tmin != 0))
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
	
	loadByAnchorStr: function MessageLoader_loadByAnchorStr(str)
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
};

/* ���}�[�J�[�T�[�r�X������������������������������������������������������ */
function MarkerService(g,k,m,ma){this.init(g,k,m,ma);}
MarkerService.prototype = {
	global: false,	//�X�����ƂɊo����}�[�J�[��false, �S�̂Ŋo����}�[�J�[��true�ɂ���
	storageKey: "_markerservice",	//�X�g���[�W�̃L�[
	mark: "mk",	//���X�Ƀ}�[�L���O���鎞�̃f�[�^�Z�b�g�̖��O�Bmk�Ȃ�node.dataset.mk="y"(y�̕�����MarkerService_getMarkerClass�Ŏ擾)�ƂȂ�B
	markAllNode: true,	//�S�m�[�h�}�[�N�H�����݂����ȁAdomobj�ɂ����e���Ȃ����̂�false�ɂ��Ă����Ǝ኱���x�A�b�v���邩��

	init: function MarkerService_init(g,k,m,ma)
	{
		this.global = g;
		this.storageKey = k;
		this.mark = m;
		this.markAllNode = ma;
	},
	onStorageChanged: function MarkerService_onStorageChanged(e)
	{	//�X�g���[�W���e���ω������Ƃ���т������B
		//console.log("{0}:{1} => {2}".format(e.key, e.oldValue, e.newValue));
		if (this.isMineStorageDataChanged(e.key))
		{
			this.refresh(e.newValue, e.oldValue);
		}
	},
	isMineStorageDataChanged: function MarkerService_isMineStorageDataChanged(key)
	{
		if(this.global)
		{
			return (CommonPref.getGlobalObjectKey(this.storageKey) == key);
		}
		else
		{
			return (CommonPref.getThreadObjectKey(this.storageKey) == key);
		}
	},
	save: function MarkserService_save()
	{
		var str = this.getSaveStr();
		if (this.global)
		{
			CommonPref.writeGlobalObject(this.storageKey, str);
		}
		else
		{
			CommonPref.writeThreadObject(this.storageKey, str);
		}
	},
	load: function MarkerService_load()
	{
		return (this.global) ?
			CommonPref.readGlobalObject(this.storageKey) : CommonPref.readThreadObject(this.storageKey);
	},
	refresh: function MarkerService_refresh(newValue, oldValue)
	{	//�}�[�L���O�����肳�ꂽ�肷�邲�Ƃɂ����ƕۑ����Ă����΁A���������������̂Ƃ̍����ɂ���ď����ł���ƌ����I
		
	},
	add: function MarkerService_set(no)
	{	//�������}�[�L���O����I�Ƃ����w��
		if (this._add(no))
		{
			this.setMark();
			this.save();
		}
	},
	del: function MarkerService_del(no)
	{	//�����̃}�[�L���O����������I�Ƃ����w��
		if (this._del(no))
		{
			this.setMark();
			this.save();
		}
	},
	isMarked: function MarkerService_isMarked(no)
	{	//�����̓}�[�L���O����Ă��܂����H
		//�����}�[�L���O�����f����Ă���΁A����ł����͂��B
		//�����̓|�b�v�A�b�v�Ƃ��ɋy�΂Ȃ����ǁAdomobj�ɂ͋y�Ԃ̂ŁB
		//var node = ThreadMessages.domobj[no];
		//return (node && (node.getAttribute("data-" + this.mark)=="y");
		return false;
	},
	setMark: function MarkerService_mark()
	{
		var mark = this.mark;
		var T = this;
		ThreadMessages.foreach(function(node){
			node.dataset[mark] = T.getMarkerClass(node);
		}, this.markAllNode);
		if(this.marked) this.marked();	//�}�[�N�㏈��
	},
	getMarkerClass: function MarkerService_getMarkerClass(node)
	{
		return "";
	},
	nodeLoaded: function MarkerService_nodeLoaded(node)
	{	//markAllNode��true�̂Ƃ��́A���[�h���ꂽ�Ƃ��ɂ��ꂪ��������B
		node.dataset[this.mark] = this.getMarkerClass(node);
		if(this.marked) this.marked();	//�}�[�N�㏈��
	},
};

var MarkerServices = {
	service: new Array(),
	
	push: function MarkerServices_push(service)
	{
		if(service)
		{
			this.service.push(service);
			if(this.service.length==1)
			{	//�ŏ��̈�o�^�����X�g���[�W�C�x���g��ǉ�
				window.addEventListener("storage", this.onStorageChanged.bind(this), false);
			}
		}
	},
	nodeLoaded: function MarkerServices_nodeLoaded(node)
	{
		for(var i=0, j=this.service.length; i<j;i++)
		{
			var s = this.service[i].nodeLoaded(node);
		}
	},
	onStorageChanged: function MarkerServices_onStorageChanged(ev)
	{
		if (e.newValue == e.oldValue) return;	//�ω��Ȃ��Ȃ�A��i����Ȃ��Ƃ����邩�ǂ����͒m��Ȃ��j
		for(var i=0, j=this.service.length; i<j;i++)
		{
			var s = this.service[i].onStorageChanged(ev);
		}
	},
};


/* ���u�b�N�}�[�N���������������������������������������������������������� */
var Bookmark = new MarkerService(false, "bm", "bm", true);
	Bookmark.init = function Bookmark_init()
	{
		this.no = 0;
		var no = parseInt(this.load());
		no = !no ? 0 : no;
		this.refresh(no, no);
		MarkerServices.push(this);
	}
	Bookmark.getSaveStr = function Bookmark_getSaveStr()
	{
		return this.no;
	}
	Bookmark._add = function Bookmark_add(no)
	{
		this.no = no;
		return true;
	}
	Bookmark._del = function Bookmark_del(no)
	{
		if (this.no == no)
		{
			this.add(0);
			return true;
		}
		return false;
	}
	Bookmark.refresh = function Bookmark_refresh(newValue, oldValue)
	{
		this.add(newValue);
	}
	Bookmark.getMarkerClass = function Bookmark_getMarkerClass(node)
	{
		return (node.dataset.no == this.no) ? "y" : "";
	}
	Bookmark.marked = function Bookmark_marked()
	{
		$("Menu_Bookmark").dataset.bm = ThreadMessages.getDeployMode(this.no);
		$("Menu_Bookmark").dataset.bmn= this.no;
	}
	Bookmark.focus = function Bookmark_focus()
	{
		Thread.deployTo(this.no);
		NodeUtil.focus(this.no)
	}

/* ���s�b�N�A�b�v���������������������������������������������������������� */
var Pickup = new MarkerService(false, "pk", "pickuped", true);
	Pickup.init = function Pickup_init()
	{
		var pickups = this.load();
		if (!pickups) pickups = "";
		this.refresh(pickups, pickups);
		MarkerServices.push(this);
	}
	Pickup.getSaveStr = function Pickup_getSaveStr()
	{
		return this.pickups + "";
	}
	Pickup._add = function Pickup_add(no)
	{
		if (!this.pickups.include(no))
		{
			this.pickups.push(no);
			this.pickups.sort(function(a,b){return a-b;});
			return true;
		}
		return false;
	}
	Pickup._del = function Pickup_del(no)
	{
		if (this.pickups.include(no))
		{
			this.pickups = this.pickups.filter(function(item, index, array){ return item != no });
			return true;
		}
		return false;
	}
	Pickup.refresh = function Pickup_refresh(nV, oV)
	{
		this.pickups = eval("[" + nV + "]");
		this.setMark();
	}
	Pickup.getMarkerClass = function Pickup_getMarkerClass(node)
	{
		return (this.pickups.include(node.dataset.no)) ? "y" : "";
	}
	Pickup.marked = function Pickup_marked()
	{
		$("Menu.Pickup").dataset.pk = this.pickups.length ? "y" : "n";
		$("Menu.Pickup").dataset.pkc= this.pickups.length;
	}

/* ���g���b�J�[������������������������������������������������������������ */
var Tracker =  new MarkerService(true, "tracker", "track", true);
	Tracker.init = function Tracker_init()
	{
		this._trackers = new Array();
		var trackers = this.load();
		if (!trackers) trackers = "";
		this.refresh(trackers, "");
		MarkerServices.push(this);
	}
	Tracker.getSaveStr = function Tracker_getSaveStr()
	{
		var tss = [];
		for(var i=0,j=this._trackers.length; i<j; i++)
		{
			if(this._trackers[i])
			{
				tss.push(this._trackers[i].toString());
			}
		}
		return "[{0}]".format(tss);
	}
	Tracker._add = function Tracker_add(no)
	{
		var node = ThreadMessages.domobj[no];
		if(!node) return false;
		//�g���b�N�ς݂Ȃ�g���b�L���O���Ȃ�
			//if (ThreadMessages.domobj[no].dataset.tracker != "") return false;	//���ł����̂���
		for(var i=0, j=this._trackers.length; i<j; i++)
		{
			if (this._trackers[i].check(no)) return false;
		}
		//�V�K�Ńg���b�N
		var trip = new Array();
		var aid = new Array();
		if (node.dataset.aid.length > 5) aid.push(node.dataset.aid);
		if (node.dataset.trip) trip.push(node.dataset.trip);
		var tr = new TrackerEntry(this.findBlankIndex(), trip, aid);
		tr.update();
		this._trackers.push(tr);
		return true;
	}
	Tracker._del = function Tracker_del(no)
	{
		var nt = new Array();
		for(var i=0, j=this._trackers.length; i<j; i++)
		{
			var tracker = this._trackers[i];
			if(tracker.check(no) == 0)
			{
				nt.push(tracker);
			}
		}
		if (nt.length != this._trackers.length)
		{
			this._trackers = nt;
			return true;
		}
		return false;
	}
	Tracker.refresh = function Tracker_refresh(nV, oV)
	{
		if (nV == oV) return;
		var obj;
		try
		{
			obj = eval(nV);
		} catch(e){ obj = new Array(); }
		var trackers = new Array();
		for (var i=0, j=obj.length; i<j; i++)
		{
			var o = obj[i];
			var tr = new TrackerEntry(o.index, o.trip, o.aid);
			tr.update();	//���̃X������̕�������̂ŁA���̃X���ň�����������̂��Ȃ����X�V������
			trackers.push(tr);
		}
		this._trackers = trackers;
		this.save();
		this.setMark();
	}
	Tracker.getMarkerClass = function Tracker_getMarkerClass(node)
	{
		var a = this._trackers;
		for(var i=0, j=a.length; i<j; i++)
		{
			if (a[i].check(node.dataset.no))
			{
				return "m" + a[i].index;
			}
		}
		return "";
	}
	Tracker.getTracker = function Tracker_getTracker(no)
	{
		var tr = ThreadMessages.domobj[no].dataset.track + "";
		if (tr.match(/^m(\d+)$/))
		{
			var index = RegExp.$1;
			for(var i=0, j=this._trackers.length; i<j; i++)
			{
				if (this._trackers[i].index == index)
				{
					return this._trackers[i];
				}
			}
		}
	}
	Tracker.findBlankIndex = function Tracker_findBlankIndex()
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
	}

function TrackerEntry(index, trip, aid){ this.init(index, trip, aid); };
TrackerEntry.prototype = {
	aid: null,
	trip: null,
	index: 0,
	
	init: function TrackerEntry_init(index, trip, aid)
	{
		this.aid = aid;
		this.trip = trip;
		this.index = index;
	},
	
	toString: function TrackerEntry_toString()
	{
		return "{index: {0}, aid: [{1}], trip: [{2}]}".format(this.index, $qA(this.aid), $qA(this.trip));
	},
	update: function TrackerEntry_update()
	{	//�����f�[�^���}�b�`���Ă���΍ċA�I�ɒǉ����Ă���
		var tr = this;
		ThreadMessages.foreach(function(node){
			var m = tr.check(node.dataset.no);
			if (m > 0)
			{
				if ((m & 1) && (node.dataset.aid.length > 5) && (!tr.containsId(node.dataset.aid)))
				{	//�g���b�v�ň�����������ID�����邯��ID���o�^��ID�o�^
					tr.aid.push(node.dataset.aid);
					tr.update();
				}
				else if ((m&2) && (node.dataset.trip) && (!tr.containsTrip(node.dataset.trip)))
				{	//ID�ň����������āA�g���b�v���Ă邯�ǂ��ꂪ�o�^����Ă��Ȃ����o�^
					tr.trip.push(node.dataset.trip);
					tr.update();
				}
			}
		},false);
	},
	check: function TrackerEntry_check(no)
	{	//Trip�����Ђ�����������1, ID�����Ђ�����������2, ������������������3
		var m = 0;
		if (!ThreadMessages.isReady(no)) return 0;
		var node = ThreadMessages.domobj[no];
		if (node.dataset.trip)
		{
			if (this.containsTrip(node.dataset.trip)) m += 1;
		}
		if (!m && (node.dataset.aid.length > 5))
		{
			if (this.containsId(node.dataset.aid)) m += 2;
		}
		return m;
	},
	containsId: function TrackerEntry_containsId(id)
	{
		return this.aid.include(id);
	},
	containsTrip: function TrackerEntry_containsTrip(trip)
	{
		return this.trip.include(trip);
	},
	getTrackingNumbers: function TrackerEntry_getTrackingNumbers()
	{
		var res = new Array();
		var tr = this;
		ThreadMessages.foreach(function(node){
			if (tr.check(node.dataset.no) > 0)
		{
				res.push(node.dataset.no);
			}
		}, false);
		return res;
	},

};

/* ���X���b�h�\�������������������������������������������������������������� */
var MessageStructure = {
	nodesById: new Array(),		//������ID
	nodesReplyFrom: new Array(),	//������t�Q�Ə��
	//�m�[�h���\���ɒǉ��B
	push: function MessageStructure_push(node)
	{
		var obj = node.dataset;
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
	getReplyTo: function MessageStructure_getReplyTo(node)
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
/* ��URL���� ������������������������������������������������������������������ */
function URL(url){ this.init(url); }
URL.prototype = {
	init: function URL_init(url)
	{
		this.url = url;
		//bbs2chreader/chaika �X���b�h�\��URL
		this.isReaderUrl = (this.startWith(ThreadInfo.Server));
		if(this.isReaderUrl) url = url.substr(ThreadInfo.Server.length);
		//bbs2chreader/chaika �X�L��
		this.isReaderSkinUrl = (this.startWith(ThreadInfo.Skin));
		if(this.isReaderSkinUrl) url = url.substr(ThreadInfo.Skin.length);
		//bbs2chreader/chaika �ꗗ
		var readerBoardScheme = "bbs2ch:board:";
		this.isReaderBoardUrl = (this.startWith(readerBoardScheme));
		if(this.isReaderBoardUrl) url = url.substr(readerBoardScheme.length);
		readerBoardScheme = "chaika://board/";
		this.isReaderBoardUrl = (this.startWith(readerBoardScheme));
		if(this.isReaderBoardUrl) url = url.substr(readerBoardScheme.length);

		//�h���C���ƃp�X�̐؂蕪��
		if (url.match(/http:\/\/([^\/]+)(.+)/i))
		{
			this.domain = RegExp.$1;
			this.path   = RegExp.$2;
		}
		
		//�X���b�h����
		this.maybeThread = url.match(/\/read.cgi\//) ? true : false;
		
		//4��(2ch����BBS��2ch�̃N���[�������̑�WWW���j�ɕ���
		if (this.domain.match(/(2ch.net|bbspink.com)$/))
		{
			this.type =  "2CH";
		}
		else if(this.domain.match(/(machi.to)$/))
		{
			this.type = "MACHI";
		}
		else if(this.maybeThread)
		{
			this.type = "CLONE";
		}
		else
		{
			this.type = "WWW";
		}
		
		//�X���b�h�Ȃ�
		if (this.maybeThread)
		{
			//�ƃX���b�h�ƕ\���͈͂̎w����擾
			if (url.match(/\/read.cgi\/([^\/]+)\/([^\/]+)(\/(.+))?/))
			{
				this.boardName = RegExp.$1;
				this.threadNo  = RegExp.$2;
				if (RegExp.$4)
				{
					this.range = RegExp.$4;
				}
				else
				{
					this.range = "";
				}
			}
			//identifier
			switch (this.type)
			{
				case "2CH":
					this.boardId = "";
					break;
				case "MACHI":
					this.boardId = "machi.";
					break;
				default:
					this.boardId = this.domain + ".";
					break;
			}
			this.boardId  =(this.boardId + this.boardName).toLowerCase();
			this.threadId = this.boardId + "." + this.threadNo;
		}
		//console.log(this);
	},
	startWith: function URL_startWith(x)
	{
		return this.url.substr(0, x.length) == x;
	},
};

/* ���O�������N���������������������������������������������������������������� */
const OUTLINK_NON   = 0;	//outlink����Ȃ�
const OUTLINK_IMAGE = 1;	//�摜
const OUTLINK_MOVIE = 2;	//����
const OUTLINK_2CH   = 3;	//2ch
const OUTLINK_ETC   = 4;	//���̑�

var OutlinkPlugins = {

	getOutlinkPlugin: function OutlinkPlugins_getOutlinkPlugin(node)
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
	popupPreview: function OutlinkPlugins_popupPreview(plugin, anchor, ev)
	{	//Outlink�̃v���r���[���|�b�v�A�b�v����
		if (anchor != null)
		{
			var tid = setTimeout(this.popup.bind(this, plugin, anchor), Preference.ResPopupDelay);
			anchor.addEventListener("mouseout", 
				function(){
					clearTimeout(tid);
					anchor.removeEventListener("mouseout", arguments.callee, false);
				},false);
		}
	},
	popup: function OutlinkPlugins_popup(plugin, anchor)
	{
		if (anchor.dataset.previewShowing!="y")
		{
			var p = new Popup();
			p._init(anchor);
			var c = plugin.getPreview(anchor.href, p.adjust.bind(p));
			if (c)
			{
				anchor.dataset.previewShowing = "y";
				var innerCont = document.createElement("DIV");
				innerCont.appendChild(c);
				p.show(innerCont);
				p.onClose = function(){ anchor.dataset.previewShowing = "n" };
			}
		}
	},
	preview: function OutlinkPlugins_preview(resNode)
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
	posivility: function OutlinkPluginForImage_posivility(href)
	{
		if (href.match(/\.jpg$|jpeg$|bmp$|png$|gif$/i))
		{
			return 1;
		}
		return 0;
	},
	getPreview: function OutlinkPluginForImage_getPreview(href, onload)
	{
		var p = (new ImageThumbnailOnClickOverlay(href,Preference.ImagePopupSize));
		p.onload = onload;
		return p.container;
	},
};

//����URL�p
var OutlinkPluginForMovie = {
	type: OUTLINK_MOVIE,
	posivility: function OutlinkPluginForMovie_posivility(href)
	{
		return 0;
	},
	getPreview: function OutlinkPluginForMovie_getPreview(href, onload)
	{
		return null;
	},
};

var OutlinkPluginForNicoNico = {
	type: OUTLINK_MOVIE,
	posivility: function OutlinkPluginForNicoNico_posivility(href)
	{	
		if(href.match(/http:\/\/www.nicovideo.jp\/watch\/sm\d+/i))
		{
			return 1;
		}
		return 0;
	},
	getPreview: function OutlinkPluginForNicoNico_getPreview(href, onload)
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
	posivility: function OutlinkPluginFor2ch_posivility(href)
	{
		return (this.is2ch(href)) ? 1 : 0;
	},
	getPreview: function OutlinkPluginFor2ch_getPreview(href, onload)
	{
		return null;
	},
	//b2r�œǂ߂����ȃA�h���X����true��Ԃ�
	is2ch: function OutlinkPluginFor2ch_is2ch(url)
	{
		return (url.match(/\/test\/read.cgi\//));
	},
	//2ch.net, bbspink�Ȃ�true
	isPure2ch: function OutlinkPluginFor2ch_isPure2ch(url)
	{
		return (url.match(/(2ch.net|bbspink.com|machi.to)\//));
	},
	
	//b2r�ŕ\�����H
	isb2r: function OutlinkPluginFor2ch_isb2r(url)
	{
		return (url.match(/\/\/127.0.0.1:\d+\/thread\//));
	},
};

var OutlinkPluginForDefault = {
	type: OUTLINK_ETC,
	posivility: function OutlinkPluginForDefault_posivility(href)
	{
		return 1;
	},
	getPreview: function OutlinkPluginForDefault_getPreview(href, onload)
	{
		var p = new ImageThumbnailOnClickOverlayFrame("http://img.simpleapi.net/small/" + href,Preference.ImagePopupSize);
		p.rel = href;
		return p.container;
	},
};

OutlinkPlugins.plugins = [OutlinkPluginForImage, OutlinkPluginForMovie, OutlinkPluginForNicoNico, OutlinkPluginFor2ch, OutlinkPluginForDefault];

/* �����[�h�}�l�[�W�������������������������������������������������������������� */
function loadManager(){ }
loadManager.prototype = {
	queue: new Array(),
	loadWidth: 5,		//�������[�h�v�����B�L���[������Ƃ��ɕς��Ă��Ӗ��Ȃ�
	b: false,
	push: function loadManager_push(href, callback)
	{	//���[�h�v���˂����ށB�L������(expired)�������ق������������H
		var qs = this.queue.length;
		this.queue.push({href: href, callback: callback});
		if (!this.b)
		{
			this.b = true;
			setTimeout(this.begin.bind(this), 1);
		}
	},
	begin: function loadManager_begin()
	{
		this.b = false;
		for(var i=0, j = Math.min(this.loadWidth, this.queue.length); i<j; i++)
		{
			this.request(this.queue.shift());
		}
	},
	request: function loadManager_request(obj)
	{
	},
	response: function loadmanager_response(obj, status)
	{
		//console.log("response "+ status + " " + obj.href);
		obj.status = status;
		if(obj.callback)obj.callback(obj);
		this.checkNext();
	},
	checkNext: function()
	{
		if (this.queue.length)
		{
			this.request(this.queue.shift());
		}
	},
};
var ImageLoadManager = new loadManager();
	ImageLoadManager.request = function ImageLoadManager_request(obj)
	{
		obj.img = new Image();
		obj.img.addEventListener("load", this.response.bind(this, obj, "OK"), false);
		obj.img.addEventListener("error", this.response.bind(this, obj, "NG"), false);
		obj.img.src = obj.href;
		//console.log("request "+obj.href);
	}

/* ���摜�T���l�C���������������������������������������������������������������� */
function ImageThumbnail(url, sz){this.thumbSize = sz; if(url) {this.init(url);}}
ImageThumbnail.prototype = {
	//thumbSize�𒴂��Ȃ��͈͂̑傫�������ADIV.ithumbcontainer>CANVAS�Ƃ����`�̗v�f�����B
	//canvas���ł���͉̂摜���[�h������̂݁B�G���[���͂ł��Ȃ��B
	thumbSize: 200,
	container: null,	//node�̎q�B
	loading: true,
	init: function ImageThumbnail_init(href)
	{
		this.src = href;
		this.container = document.createElement("DIV");
		this.container.className = "ithumbcontainer";
		this.container.dataset.state="loading";	//�摜��\��������������URL�������ɓ��ꂽ���Ȃ��̂ł���Ŋ撣���Đݒ�
		//this.container.style.width = this.container.style.height = this.thumbSize + "px";

		ImageLoadManager.push(href, this.onLoaderResponse.bind(this));
	},
	
	onLoaderResponse: function ImageThumbnail_onLoaderResponse(obj)
	{
		if (obj.status == "OK")
		{
			this.loaded(obj);
		}
		else
		{
			this.error(obj);
		}
	},
	
	loaded: function ImageThumbnail_loaded(obj)
	{
		this.loading = false;
		var ds = this.ds(obj.img.naturalWidth, obj.img.naturalHeight);
		var c = document.createElement("IMG");
		c.width = ds.width;
		c.height= ds.height;
		c.src   = obj.href;
		this.container.innerHTML = "";
		this.container.appendChild(c);
		this.container.dataset.state="ok";
		if (this.onload) this.onload();
	},
	error: function ImageThumbnail_error(e)
	{
		this.loading = false;
		this.container.dataset.state="error";
		if (this.onload) this.onload();
	},
	ds: function ImageThumbnail_ds(w, h)
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
function ImageThumbnailOnClickOverlay(url, sz){this.thumbSize = sz; this.init(url);}
ImageThumbnailOnClickOverlay.prototype = new ImageThumbnail();
ImageThumbnailOnClickOverlay.prototype.loaded = function ImageThumbnailOnClickOverlay_loaded(e)
{
	ImageThumbnail.prototype.loaded.call(this, e);
	this.container.addEventListener("click", this.showOverlay.bind(this), false);
}
ImageThumbnailOnClickOverlay.prototype.showOverlay = function ImageThumbnailOnClickOverlay_showOverlay()
{
	var ov = document.createElement("DIV");
	ov.className="overlay";
	ov.innerHTML = '<div><img src="{0}" class="ovlImg" style="max-height:{1}px; max-width:{2}px;margin:{3}px"></div>'.format(this.src, window.innerHeight-4, window.innerWidth-2,2);
	document.body.dataset.contentsOverlay = "y";
	ov.addEventListener("click", function(){ ov.parentNode.removeChild(ov); document.body.dataset.contentsOverlay = "";}, false);
	ov.addEventListener("DOMMouseScroll", function(e){ e.preventDefault(); } , false);
	document.body.appendChild(ov);
}

/* ���́A�N���b�N�����src�̓��e���I�[�o�[���C�ŕ\������T���l�C�� */
function ImageThumbnailOnClickOverlayFrame(url, sz){this.thumbSize = sz; this.init(url);}
ImageThumbnailOnClickOverlayFrame.prototype = new ImageThumbnail();
ImageThumbnailOnClickOverlayFrame.prototype.loaded = function ImageThumbnailOnClickOverlayFrame_loaded(e)
{
	ImageThumbnail.prototype.loaded.call(this, e);
	this.container.addEventListener("click", this.showOverlay.bind(this), false);
}
ImageThumbnailOnClickOverlayFrame.prototype.showOverlay = function ImageThumbnailOnClickOverlayFrame_showOverlay()
{
	var ov = document.createElement("DIV");
	ov.className="overlay";
	ov.innerHTML = '<div><iframe src="{0}" style="height:{1}px"></div>'.format(this.rel, window.innerHeight-32);
	document.body.dataset.contentsOverlay = "y";
	ov.addEventListener("click", function(){ ov.parentNode.removeChild(ov); document.body.dataset.contentsOverlay = ""; }, false);
	document.body.appendChild(ov);
}

/* ���|�b�v�A�b�v�������������������������������������������������������������� */
function Popup() { }
Popup.prototype = {
	closeOnMouseLeave: true,
	
	_init: function Popup_init(e)
	{	//e�͂Ȃɂ���|�b�v�A�b�v�����悤�Ƃ��Ă��邩�B�v�f�܂��͗v�f��ID���w�肷��B
		if (!e.tagName) e = $(e);
		if (!e)
		{
			console.log("PopupInitializedError");
			console.log(e);
			e = document.body;	//�Ȃ���Ȃ��Ȃ�Ƃ肠�����G���[�ɂȂ�Ȃ��悤��Body�ɂ��Ƃ�
		}
		this.arranged = e;	//�K�p��I�u�W�F�N�g
		this.fixed = Util.isFixedElement(e);	//�K�p��I�u�W�F�N�g�͌Œ肳�ꂽ���́H
		
		//�e�̒T��
		while (e)
		{
			if (e.popup)
			{	//�|�b�v�A�b�v����̃|�b�v�A�b�v���q�Ƃ��ēo�^
				e.popup.registorChild(this);
				break;
			}
			e = e.parentNode;
		}
		
		//�������쐬
		var c = document.createElement("DIV");
		c.addEventListener("mouseleave", this.checkClose.bind(this), false);
		c.className = "popup";
		c.dataset.popupEnchanted = "y";
		c.dataset.fixedPopup = this.fixed ? "y" : "";
		c.popup = this;
		this.container = c;
	},
	
	show: function Popup_show(content)
	{
		var pos = this.getPopupPos();
		this.container.appendChild(content);
		$("popupContainer").appendChild(this.container);
		this.limitSize(pos);
		this.adjust(pos);
	},
	checkClose: function Popup_checkClose(aEvent)
	{
		if (!this.closeOnMouseLeave) return;
		var e=this.container.firstChild;
		if (this.fixed)
		{
			pos = {x: aEvent.clientX, y: aEvent.clientY};
		}
		else
		{
			pos = {x: aEvent.pageX, y: aEvent.pageY};
		}
		var p = Util.getElementPagePos(e);
		if(pos.x<=p.pageX||
		   pos.y<=p.pageY||
		   pos.x>=p.pageX+p.width||
		   pos.y>=p.pageY+p.height)this.close();
	},
	close: function Popup_close()
	{
		if (this.closed) return;
		this.closed = true;
		if (this.container && this.container.parentNode) this.container.parentNode.removeChild(this.container);
		if (this.onClose) this.onClose(this);
		if (Preference.PopupDestructChain && this.childPopups)
		{
			for(var i=0, j=this.childPopups.length; i < j; i++)
			{
				this.childPopups[i].close();
			}
		}
	},
	//�T�C�Y����
	limitSize: function Popup_limitSize(pos)
	{
		var e = this.container.firstChild;
		//���E�E�E��ʕ���80%
		//�����E�E�E�A���J�[�ʒu�̉����ŉ�ʉ��[�܂�(40�͐����o���̃q�Q�̕��Ǝ኱�̗]�T�j�F�Œ�ۏ�R��
		var maxWidth = window.innerWidth *0.8;
		var poy = (this.fixed) ? 0 : window.pageYOffset;	//�Œ�̎��̓X�N���[���ʒu���C�ɂ��Ȃ�
		var maxHeight = window.innerHeight - (pos.pageY - poy) - 40;
		if (maxHeight < window.innerHeight*0.3) maxHeight = window.innerHeight*0.3;
		e.style.maxWidth = maxWidth + "px";
		e.style.maxHeight = maxHeight + "px";
	},
	//��ʓ��ɉ�������(�T�C�Y��������Ă���̂ŕK������͂�)�B���ɂ����o�Ȃ����A�c�ɂ̓X�N���[���ł���̂ŉ������������ށB
	adjust: function Popup_adjust(pos)
	{
		if (!pos) pos = this.getPopupPos();
		this.container.style.left = "-10000px";	//�����O�Ɉ�x�O�ɒǂ��o���Ȃ��Ɛ܂�Ԃ������ɂȂ��Ă�
		var px = pos.pageX, py = pos.pageY;
		var x = px + this.container.firstChild.offsetWidth - document.body.offsetWidth;
		this.container.style.left = px + "px";
		this.container.style.top  = py + "px";
		x = (x < 0) ?  -Preference.PopupLeft : -(x + Preference. PopupRightMargin);	//�����o���ʒu����
		this.container.firstChild.style.marginLeft = x + "px";
	},
	getPopupPos: function Popup_getPopupPos()
	{
		//�ʒu�v�Z(�A�����W����Ă���悤���̉��Ӓ������w���悤��)
		var pos = Util.getElementPagePos(this.arranged);
		pos.pageX += pos.width /2;
		pos.pageY += pos.height;
		return pos;
	},
	getPopupObj: function Popup_getPopupObj(element)
	{	//element�̐e�ɂ���ꂽpopup��T��
		if (element)
		{
			if (element.popup)	return element.popup;
			if (element.parentNode) return this.getPopupObj(element.parentNode);
		}
		return null;
	},
	registorChild: function Popup_registorChild(popup)
	{
		if (!this.childPopups) this.childPopups = new Array();
		this.childPopups.push(popup);
	},
};

function ResPopup(anchor){ this.init(anchor); }
ResPopup.prototype = new Popup();

	ResPopup.prototype.init = function ResPopup_init(anchor)
	{
		//Delay���d�|����
		if (anchor != null)
		{//.textContent
			var tid = setTimeout(this.popup.bind(this, anchor), Preference.ResPopupDelay);
			anchor.addEventListener("mouseout", 
				function(){
					clearTimeout(tid);
					anchor.removeEventListener("mouseout", arguments.callee, false);
				},false);
		}
	};
	
	ResPopup.prototype.popup =  function ResPopup_popup(obj, e)
	{
		var ids;
		if (!e) e = obj;
		if (obj.tagName)
		{	//�v�f�B�A���J�[���ƐM����
			ids = MessageUtil.splitResNumbers(obj.textContent);
			MessageLoader.loadByAnchorStr(obj.textContent);
		}
		else if (obj.length)
		{	//�z��E�E�E���Ƃ����Ȃ�
			ids = obj;
		}
		else
		{	//���̑��E�E�E�K����
			ids = [obj];
		}
		
		this._init(e);
		var innerContainer = document.createElement("DIV");
		for(var i=0, len=ids.length; i < len ; i++)
		{
			var node = ThreadMessages.getNode(ids[i], true);
			if (node != null)
			{
				innerContainer.appendChild(node);
			}
		}
		this.show(innerContainer);
	};

function GearPopup(enchantElement) { this.init(enchantElement); }
GearPopup.prototype = new Popup();
	GearPopup.prototype.init = function GearPopup_init(enchantElement)
	{
		this._init(enchantElement);
		this.content = document.createElement("DIV");
		if (enchantElement)
		{
			enchantElement.dataset.gearEnchanted = "y";
			enchantElement.enchantedGear = this;
		}
		this.onClose = function()
		{
			if (enchantElement)
			{
				enchantElement.dataset.gearEnchanted = "";
				enchantElement.enchantedGear = null;
			}
		};
	};
	GearPopup.prototype.changePos = function GearPopup_changePos(e)
	{	//���O�ǂ��Ȃ�
		this.arranged = e;
		this.adjust();
	};
	GearPopup.prototype.changeOrigin = function GearPopup_changeOrigin(no)
	{
		this.to(no);
		this.origin = no;
	};
	GearPopup.prototype.showPopup = function GearPopup_showPopup(no)
	{
		var n = this.getNode(no);
		this.content.appendChild(n);
		this.origin = no;
		this.show(this.content);
		var c = this.container;
		c.dataset.gearEnchanted = "y";
		c.enchantedGear = this;
	};
	GearPopup.prototype.to = function GearPopup_to(no)
	{
		if (this.stepping) return;
		this.stepping = true;
		var n = this.getNode(no);
		if (n)
		{
			this.content.innerHTML = "";
			this.content.appendChild(n);
			this.adjust();
		}
		this.stepping = false;
	};
	GearPopup.prototype.step = function GearPopup_step(cnt)
	{
		this.to(this.no + cnt);
	};
	GearPopup.prototype.getNode = function GearPopup_getNode(no)
	{
		if (no < 1) no = 1;
		if (no > ThreadInfo.Total) no = ThreadInfo.Total;
		MessageLoader.load(no, no);
		this.no = no;
		return ThreadMessages.getNode(no, true);
	};

/* �������E���o �������������������������������������������������������������� */
var Finder = {
	
	init: function Finder_init()
	{
		this.form = document.createElement("DIV");
		this.form.id = "finder";
		this.form.innerHTML =
			'<form id="fform" onsubmit="Finder.express();return false;">' +
			'<input type="text" size="40" name="q">' +
			'<input type="submit" value="���o">' +
			'<br>' +
			'<regend><input type="checkbox" name="r">���K�\��</regend>' +
			'<regend><input type="checkbox" name="i">�召���</regend>' +
			'<regend><input type="checkbox" name="p">pickup�̂�</regend>' +
			'<span id="fformerr"></span>' +
			'</form>' ;
	},
	showing: function Finder_showing()
	{
		return (this.popup != null);
	},
	enterExpressMode: function Finder_enterExpressMode()
	{
		if (document.body.dataset.expressMode != "y")
		{
			var content = this.form;
			var p = new Popup();
			p.closeOnMouseLeave = false;
			p._init("Menu.Finder");
			p.show(this.form);
			$("fform").q.value = document.getSelection()
			p.container.dataset.finder = "y";
			this.popup = p;

			this.pageY = window.scrollY;
			document.body.dataset.expressMode="y";
		}
	},
	leaveExpressMode: function Finder_leaveExpressMode()
	{
		document.body.dataset.expressMode="n";
		window.scrollTo(0,this.pageY);
		if (this.popup)
		{
			this.popup.close();
			this.popup = null;
		}
	},
	express: function Finder_express()
	{	//�����Z�b�g���Ă���R�����ĂԂƁA�����ɍ��v������̂Ƃ��Ȃ����̂�article�Ɉ������
		var cond = $("fform").q.value;
		var reg  = $("fform").r.checked;
		var icase=!$("fform").i.checked;
		var pick = $("fform").p.checked;
		
		if (cond.match(/\[resto:(\d+)\]/))
		{
			this.expressReffer(parseInt(RegExp.$1));
			return;
		}
		if (cond == "[tracked]")
		{
			this.expressTracked();
			return;
		}
		if (!reg) cond = this.escape(cond);
		var flag = icase ? "i" : "";
		var exp = null;
		try
		{
			exp = new RegExp(cond, flag);
		}
		catch(e)
		{
			$("fformerr").innerHTML = "<br>" + e;
			return;
		}
		ThreadMessages.foreach(function(node){
			node.dataset.express = (!pick || node.dataset.pickuped =="y") && exp.test(node.textContent) ? "y" : "n";
		}, false);
	},
	expressReffer: function Finder_expressReffer(no)
	{
		var t = MessageStructure.nodesReplyFrom[no];
		t = t ? t.clone() : [];
		t.push(no);
		ThreadMessages.foreach(function(node){
			node.dataset.express = t.include(node.dataset.no) ? "y" : "n";
		}, false);
	},
	expressTracked: function Finder_expressTracked()
	{
		ThreadMessages.foreach(function(node){
			node.dataset.express = Tracker.getMarkerClass(node) != "" ? "y" : "n";
		},false);
	},
	escape: function Finder_escape(str)
	{
		var escapechar = "\\{}()[]*-+?.,^$|";
		var ret = "";
		for(var i=0; i< str.length; i++)
		{
			for(var j=0; j<escapechar.length; j++)
			{
				if (escapechar[j] == str[i])
				{
					ret += "\\";
					break;
				}
			}
			ret += str[i];
		}
		return ret;
	},
};

/* ��Viewer�������������������������������������������������������������������� */
var Viewer = {
	_entries: null,
	_orderd: null,
	init: function Viewer_init()
	{
		this.auto = false;
		//�\���͈͂������ΏۂȂ̂ŁE�E�E
		this._entries = new Array();
		this._orderd  = new Array();
		var anchors = $("resContainer").getElementsByClassName("outLink");
		for(var i=0, j = anchors.length; i<j; i++)
		{
			var a = anchors[i];
			var op = OutlinkPlugins.getOutlinkPlugin(a);
			if (op && op.type == OUTLINK_IMAGE)
			{
				var href = a.href;
				if (!this._entries[href])
				{
					var entry = new ViewerEntry(href);
					if (Preference.ViewerPreloadWidth < 0) entry.prepare();
					this._entries[href] = entry;
					this._orderd.push(entry);
				}
				this._entries[href].addRelation(parseInt(Util.getDecendantNode(a, "ARTICLE").dataset.no));
			}
		}
	},
	enterViewerMode: function Viewer_enterViewerMode()
	{
		if (document.body.dataset.mediaview != "y")
		{
			var c = document.createElement("DIV");
			c.id = "ViewerContainer";
			var buttons = [ {name: "home", onclick: "Viewer.home();"},
				{name: "first", onclick: "Viewer.first();"},
				{name: "prev", onclick: "Viewer.prev();"},
				{name: "next", onclick: "Viewer.next();"},
				{name: "last", onclick: "Viewer.last();"},
				{name: "auto", onclick: "Viewer.toggleAuto();"},
				{name: "close", onclick: "Viewer.close();"} ];
			var bhtml = "";
			for(var i=0, j=buttons.length; i < j; i++)
			{
				bhtml += '<button name="{0}" onclick="{1} return false;">'.format(buttons[i].name, buttons[i].onclick);
			}
			c.innerHTML = '<form id="ViewerCtrl"><span id="viewerState"></span><div id="viewerCtrls">' + bhtml + '</div></form>';
			var cc = document.createElement("DIV");
			this.container = cc;
			c.appendChild(cc);
			document.body.appendChild(c);
			document.body.dataset.mediaview = "y";
			document.body.dataset.contentsOverlay = "y";
			EventHandlers.enter("viewer");
			this.cursorHideCheckTimer = setInterval(this.cursorHideCheck.bind(this), 1000);
			this.cursorShowHandler = this.cursorShow.bind(this);
			document.addEventListener("mousemove", this.cursorShowHandler, false);
			this.cursorHideCount = 0;
		}
	},
	leaveViewerMode: function Viewer_leaveViewerMode()
	{
		if (document.body.dataset.mediaview == "y")
		{
			document.body.removeChild($("ViewerContainer"));
			this.container = null;
			EventHandlers.leave("viewer");
			document.body.dataset.mediaview = "";
			document.body.dataset.contentsOverlay = "";
			clearInterval(this.cursorHideCheckTimer);
			document.removeEventListener("mousemove", this.cursorShowHandler, false);
		}
	},
	cursorHideCheck: function Viewer_cursorHideCheck()
	{
		this.cursorHideCount++;
		if (this.cursorHideCount == Preference.ViewerCursorHideAt)
		{
			this.container.dataset.cursor="hide";
		}
	},
	cursorShow: function Viewer_cursorShow()
	{
		this.cursorHideCount = 0;
		this.container.dataset.cursor="shown";
	},
	_clearContainer: function Viewer__clearContainer()
	{
		var nodes = $A(this.container.childNodes);
		for(var i=0, j=nodes.length; i<j; i++)
		{
			this.container.removeChild(nodes[i]);
		}
	},
	home: function Viewer_home()
	{
		this.endSlideshow();
		if(!this.homeCtrl)
		{
			var c = document.createElement("DIV");
			c.id = "viewerHomeCtrl";
			c.innerHTML = '<button name="play" onclick="Viewer.next();return false;"><button name="auto" onclick="Viewer.beginSlideshow();return false;">';
			this.homeCtrl = c;
		}
		var home = this.homeCtrl;
		home.dataset.images = this._orderd.length;
		if (home.parentNode) home.parentNode.removeChild(home);
		this._clearContainer();
		this.container.appendChild(home);
		this.index = -1;
		this.showStatus();
	},
	prev: function Viewer_prev()
	{
		var index = this.index -1;
		if (index < 0 ) index = this._orderd.length - 1;
		this.showImage(this.errorSkipToPrev(index));
	},
	next: function Viewer_next()
	{
		var index = this.index +1;
		if (index >= this._orderd.length) index = 0;
		this.showImage(this.errorSkipToNext(index));
	},
	last: function Viewer_last()
	{
		this.showImage(this.errorSkipToPrev(this._orderd.length - 1));
	},
	first: function Viewer_first()
	{
		this.showImage(this.errorSkipToNext(0));
	},
	toggleAuto: function Viewer_toggleAuto()
	{
		return this.auto ? this.endSlideshow() : this.beginSlideshow();
	},
	beginSlideshow: function Viewer_beginSlideshow()
	{
		if (!this.auto)
		{
			this.auto = true;
			this.slideshowTick = 0;
			if (this.index < 0) this.first();
			this.slideshowTimer = setInterval(this.slideshowUpdate.bind(this), 250);
		}
		$("viewerCtrls").dataset.auto = "y";
		return this.auto;
	},
	endSlideshow: function Viewer_endSlideshow()
	{
		if (this.auto)
		{
			this.auto = false;
			this.slideshowTick = 0;
			clearInterval(this.slideshowTimer);
		}
		$("viewerCtrls").dataset.auto = "";
		return this.auto;
	},
	slideshowUpdate: function Viewer_slideshowUpdate()
	{
		this.slideshowTick += 0.25;
		if (this.slideshowTick >= Preference.SlideshowInterval)
		{
			this.next();
			this.slideshowTick = 0;
		}
	},
	errorSkipToNext: function Viewer_errorSkipToNext(index)
	{
		for (var j = this._orderd.length; index < j; index++)
		{
			if (this._orderd[index].state != ViewerEntryState.Error)
			{
				return index;
			}
		}
		return index;
	},
	errorSkipToPrev: function Viewer_errorSkipToPrev(index)
	{
		for (; index >= 0; index--)
		{
			if (this._orderd[index].state != ViewerEntryState.Error)
			{
				return index;
			}
		}
		return index;
	},
	showImage: function Viewer_showImage(index)
	{
		if ((index < 0) || (index >= this._orderd.length))
		{
			this.home();
		}
		else
		{
			this._clearContainer();
			var e = this._orderd[index].getElement();
			e.style.maxHeight = window.innerHeight + "px";
			e.style.maxWidth  = window.innerWidth + "px";
			this.container.appendChild(e);
			this.index = index;
		}
		if (this.auto) this.slideshowTick = 0;	//�X���C�h�V���[���ɔC�ӂŔ�΂����炻������v��
		this.showStatus();
	},
	getStatus: function Viewer_getStatus()
	{
		var total=0, loading=0, loaded=0, error=0;
		for(var i=0, j=this._orderd.length; i < j ; i++)
		{
			total++;
			var s = this._orderd[i].state;
			if (s == ViewerEntryState.Loading)
			{
				loading++;
			}
			else if (s == ViewerEntryState.Loaded)
			{
				loaded++;
			}
			else if (s == ViewerEntryState.Error)
			{
				error++;
			}
		}
		return {total: total, loading: loading, loaded: loaded, error: error, index: this.index};
	},
	showStatus: function Viewer_showStatus()
	{
		var c = $("viewerState");
		if (c)
		{
			var s = this.getStatus();
			if (this.index >= 0)
			{
				var o = this._orderd[s.index];
				c.innerHTML = '{1}/{0} {5}<BR><a class="resPointer">&gt;&gt;{6}</a>'.format(s.total, s.index+1, s.loading, s.loaded, s.error, o.href, o.relations+"");
			}
			else
			{
				c.innerHTML = "{0} Images.<br><br>".format(s.total);
			}
			var ctrl = $("ViewerCtrl");
			Util.notifyRefreshInternal(ctrl);
		}
	},
	show: function Viewer_show()
	{
		this.init();
		this.enterViewerMode();
		this.home();
	},
	close: function Viewer_close()
	{
		this.endSlideshow();
		this.leaveViewerMode();
	},
};
const ViewerEntryState = { PreLoad: 0, Loading: 1, Loaded: 2, Error: -1}

function ViewerEntry(href){ this.init(href); }
ViewerEntry.prototype = {
	init: function ViewerEntry_init(href)
	{
		this.href = href;
		this.state = ViewerEntryState.PreLoad;
		this.relations = new Array();
	},
	addRelation: function ViewerEntry_addRelation(no)
	{
		if (!this.relations.include(no))
		{
			this.relations.push(no);
			this.relations.sort(function(a,b){return a-b;});
		}
	},
	getElement: function ViewerEntry_getElement()
	{
		this.prepare();
		return this.element;
	},
	loaded: function ViewerEntry_loaded(obj)
	{
		if (obj.status == "OK")
		{
			this.state = ViewerEntryState.Loaded;
			this.element.src = this.href;
		}
		else
		{
			this.state = ViewerEntryState.Error;
			this.element.src = ThreadInfo.Skin + "style/error.png";
		}
	},
	prepare: function ViewerEntry_prepare()
	{
		if (this.state == ViewerEntryState.PreLoad)
		{
			//console.log("preload request " + this.href);
			this.element = document.createElement("IMG");
			this.element.src = ThreadInfo.Skin + "style/loading.gif";
			this.state = ViewerEntryState.Loading;
			ImageLoadManager.push(this.href, this.loaded.bind(this));
		}
	},
	release: function ViewerEntry_release()
	{
		//console.log("release " + this.href);
		this.element = null;
		this.state = ViewerEntryState.PreLoad;
	},
	typename: "ViewerEntry",
};

/* ���ʒm�̈恡���������������������������������������������������������������� */
var Notice = {
	init: function Notice_init()
	{
		this.container = document.createElement("DIV");
		this.container.id = "noticeContainer";
		document.body.appendChild(this.container);
	},
	add: function Notice_add(msg)
	{
		if (!this.container) this.init();
		if (this.container.childNodes.length == Preference.NoticeLength)
		{
			this.container.removeChild(this.container.firstChild);
		}
		var e = document.createElement("P");
		e.innerHTML = msg;
		this.container.appendChild(e);
		Util.notifyRefreshInternal(this.container);
	},
};

/* �����[�e�B���e�B������������������������������������������������������������ */
var Util = {
	//�������ݶ��ɂ���
	toNarrowString: function Util_toNarrowString(src)
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
	
	isDecendantOf: function Util_isDecendantOf(e, id)
	{
		if (e.id == id) return e;
		if (e.parentNode  == null) return null;
		return this.isDecendantOf(e.parentNode, id);
	},
	getDecendantNode: function Util_getDecendantNode(e, tagName)
	{
		if (e.tagName == tagName) return e;
		if (e.parentNode  == null) return null;
		return this.getDecendantNode(e.parentNode, tagName);
	},
	getDecendantNodeByData: function  Util_getDecendantNodeByClass(e, x, v)
	{	//����ǉ��f�[�^�̒l�����e���A���B
		if (e.dataset && (e.dataset[x] == v))return e;
		if (e.parentNode == null) return null;
		return this.getDecendantNodeByData(e.parentNode, x, v);
	},
	isFixedElement: function Util_isFixedElement(e)
	{
		try
		{
			var style = document.defaultView.getComputedStyle(e, null);
			if (style.position == "fixed") return true;
			if (e.parentNode == null) return false;
			return this.isFixedElement(e.parentNode);
		} catch(e) { return false; }
	},
	getElementPagePos: function Util_getElementPagePos(e)
	{	//�v�f�̐�΍��W�����߂�
		rect = e.getBoundingClientRect();
		rect.pageX = Math.round(rect.left);
		rect.pageY = Math.round(rect.top);
		rect.fixed = this.isFixedElement(e);
		if (!rect.fixed)
		{
			rect.pageX += window.scrollX;
			rect.pageY += window.scrollY;
		}
		return {pageX: rect.pageX, pageY: rect.pageY,
		        width: Math.round(rect.right - rect.left), height: Math.round(rect.bottom - rect.top),
		        fixed: rect.fixed};
	},
	notifyRefreshInternal: function Util_notifyRefreshInternal(e)
	{
		var element = e;
		element.dataset.refreshState = "refresh";
		setTimeout(function(){element.dataset.refreshState = "";}, 15);
	},
	timestamp: function Util_timestamp(d)
	{
		if (!d) d = new Date();
		var h=d.getHours();
		var m=d.getMinutes();
		var s=d.getSeconds();
		if(m<10)m="0"+m;
		if(s<10)s="0"+s;
		return h+":"+m+":"+s;
	},
};

var MessageUtil = {
	splitResNumbers: function MessageUtil_splitResNumbers(str)
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

//�m�[�h�ɑ΂��鏈�����s�Ȃ��B
var NodeUtil = {
	resTo: function NodeUtil_resTo(nodeOrNo)
	{
		if (!nodeOrNo) return;
		var no = nodeOrNo.dataset ? nodeOrNo.dataset.no : nodeOrNo;
		Thread.openWriteDialog(no);
	},
	toggleRefferPopup: function NodeUtil_toggleRefferPopup(node, t)
	{
		if (!node)return;
		if (node.tagName != "ARTICLE")return;
		if (node.__refPopup)
		{
			node.__refPopup.close();
		}
		else
		{
			var ids = MessageStructure.nodesReplyFrom[node.dataset.no];
			if (ids)
			{
				ids = ($A(ids)).sort(function(a,b){return a-b;});
				if (!t) t = node.children[1].children[0];
				var pp = new ResPopup(null);
				node.__refPopup = pp;
				pp.onClose = function(){ node.__refPopup = null; };
				pp.popup(ids, t);
			}
		}
	},
	toggleIdPopup: function NodeUtil_toggleIdPopup(node, t)
	{
		if (!node)return;
		if (node.tagName != "ARTICLE")return;
		if (node.__idpopup)
		{
			node.__idpopup.close();
		}
		else
		{
			var ids = MessageStructure.nodesById[t.textContent];
			if (ids)
			{
				ids = ($A(ids)).sort(function(a,b){return a-b;});
				if (!t) t = node.children[1].children[2];
				var pp = new ResPopup(null);
				node.__idpopup = pp;
				pp.onClose = function(){ node.__idpopup = null; } ;
				pp.popup(ids, t);
			}
		}
	},
	expressReffer: function NodeUtil_expressReffer(nodeOrNo)
	{
		var no = nodeOrNo.dataset ? nodeOrNo.dataset.no : nodeOrNo;
		Finder.enterExpressMode();
		$("fform").q.value = "[resto:{0}]".format(no);
		Finder.express();
	},
	closeRefTree: function NodeUtil_closeRefTree(node)
	{
		if (!node)return;
		if (node.tagName != "ARTICLE")return;
		var nodes = $A(node.childNodes).filter(function(x){ return x.tagName == "ARTICLE"; });
		for(var i=0,j=nodes.length; i<j; i++)
		{
			node.removeChild(nodes[i]);
		}
		node.dataset.treed = "";
	},
	toggleRefTree: function NodeUtil_toggleRefTree(node)
	{
		if (!node)return;
		if (node.tagName != "ARTICLE")return;
		if (node.dataset.treed == "y")
		{
			this.closeRefTree(node);
		}
		else
		{
			this.openRefTree(node);
		}
	},
	openRefTree: function NodeUtil_openRefTree(node)
	{
		if (!node)return;
		if (node.tagName != "ARTICLE")return;
		this.closeRefTree(node);	//��x����
		var current = parseInt(node.dataset.no);
		node.dataset.treed = "y";
		this._openRefTreeEx(current, node);
	},
	_openRefTreeEx: function NodeUtil__openRefTreeEx(from, c)
	{
		if(MessageStructure.nodesReplyFrom[from])
		{
			var rf = MessageStructure.nodesReplyFrom[from];
			for(var i=0, j = rf.length; i < j; i++)
			{
				var node = ThreadMessages.getNode(rf[i], true);	//ARTICLE
				if (rf[i] > from)
				{	//��_���O�̃��X�͍ċA�I�ɊJ���Ȃ��i�������[�v�΍�j
					this._openRefTreeEx(rf[i], node);
				}
				else
				{
					node.dataset.backward = "y";
				}
				node.dataset.treed = "y";
				c.appendChild(node);
			}
		}
	},
	toggleBookmark: function NodeUtil_toggleBookmark(nodeOrNo)
	{
		if (!nodeOrNo) return;
		var no = nodeOrNo.dataset ? nodeOrNo.dataset.no : nodeOrNo;
		no = parseInt(no);
		if (Bookmark.no == no)
		{
			Bookmark.del(no);
		}
		else
		{
			Bookmark.add(no);
		}
	},
	setBookmark: function NodeUtil_setBookmark(nodeOrNo)
	{
		if (!nodeOrNo) return;
		var no = nodeOrNo.dataset ? nodeOrNo.dataset.no : nodeOrNo;
		no = parseInt(no);
		Bookmark.add(no);
	},
	resetBookmark: function NodeUtil_resetBookmark(nodeOrNo)
	{
		if (!nodeOrNo) return;
		var no = nodeOrNo.dataset ? nodeOrNo.dataset.no : nodeOrNo;
		no = parseInt(no);
		Bookmark.del(no);
	},
	togglePickup: function NodeUtil_togglePickup(nodeOrNo)
	{
		if (!nodeOrNo) return;
		var no = nodeOrNo.dataset ? nodeOrNo.dataset.no : nodeOrNo;
		no = parseInt(no);
		if (Pickup.pickups.include(no))
		{
			Pickup.del(no);
		}
		else
		{
			Pickup.add(no);
		}
	},
	setPickup: function NodeUtil_setPickup(nodeOrNo)
	{
		if (!nodeOrNo) return;
		var no = nodeOrNo.dataset ? nodeOrNo.dataset.no : nodeOrNo;
		no = parseInt(no);
		Pickup.add(no);
	},
	resetPickup: function NodeUtil_resetPickup(nodeOrNo)
	{
		if (!nodeOrNo) return;
		var no = nodeOrNo.dataset ? nodeOrNo.dataset.no : nodeOrNo;
		Pickup.del(no);
	},
	previewLinks: function NodeUtil_previewLinks(node)
	{
		if (!node) return;
		if (node.tagName != "ARTICLE")return;
		OutlinkPlugins.preview(node);
	},
	toggleTracking: function NodeUtil_toggleTracking(nodeOrNo)
	{
		if (!nodeOrNo) return;
		var no = nodeOrNo.dataset ? nodeOrNo.dataset.no : nodeOrNo;
	},
	beginTracking: function NodeUtil_beginTracking(nodeOrNo)
	{
		if (!nodeOrNo) return;
		var no = nodeOrNo.dataset ? nodeOrNo.dataset.no : nodeOrNo;
		Tracker.add(no);
	},
	endTracking: function NodeUtil_endTracking(nodeOrNo)
	{
		if (!nodeOrNo) return;
		var no = nodeOrNo.dataset ? nodeOrNo.dataset.no : nodeOrNo;
		Tracker.del(no);
	},
	
	focus: function NodeUtil_focus(no)
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
	closeIfPopup: function NodeUtil_closeIfPopup(node)
	{
		while(node)
		{
			if (node.popup)
			{
				node.popup.close();
			}
			node = node.parentNode;
		}
	},
};


/* ���C�x���g�n���h�������������������������������������������������������������� */
var EventHandlers = {
	//�C���X�^���X������������̂ɂ��ẮA�����Ńn���h����o�^�B
	//�ЂƂ����Ȃ����̂́AHTML����node�ɒ��ړo�^���Ă��܂���OK�B
	init: function EventHandlers_init()
	{
		this.mode = "thread";
		document.addEventListener("keydown", this.keydown.bind(this),false);
		document.addEventListener("mouseover", this.mouseOver.bind(this), false);
		document.addEventListener("click",     this.mouseClick.bind(this), false);
		document.addEventListener("dblclick",  this.mouseDblClick.bind(this), false);
		document.addEventListener("b2raboneadd", this.aboneImmidiate.bind(this), false);
		document.addEventListener("DOMMouseScroll", this.mouseWheel.bind(this), false);
		document.addEventListener("animationstart", this.animationStart.bind(this),false);
		document.addEventListener("animationend", this.animationEnd.bind(this),false);
	},
	enter: function EventHandlers_enter(mode)
	{	//�{���͂��������ʑJ�ڂ��`���Ă���ɍ��킹�ď���ɒǏ]���ׂ��Ȃ񂾂낤���ǖʓ|������̂ŕ��ʂɃ��[�h�㏑��
		this.mode = mode;
	},
	leave: function EventHandlers_leave(mode)
	{
		this.mode = "thread";
	},
	keydown: function EventHandlers_keydown(e)
	{	//�{����down�Ŋo���遨{keyup(esc)�Ŋo�������͏�����}��keyup�ŉ������L�[�o���Ă���Δ��΂Ƃ��������񂾂낤���ǖʓ|������
		//Input��ɂ���Ƃ��͂Ȃɂ����Ȃ��̂��g����
		if (e.target.tagName == "INPUT") return
		var p = true;
		if (this.mode == "thread")
		{
			p = this.invokeThreadKeyHandler(e);
		}
		else if (this.mode == "viewer")
		{
			p = this.invokeViewerKeyHandler(e);
		}
		if (p) e.preventDefault();
	},
	invokeThreadKeyHandler: function EventHandlers_invokeThreadKeyHandler(e)
	{
		switch(e.keyCode)
		{
			case 13:	//Enter
				Thread.openWriteDialog();
				break;
			default:
				return false;
				break;
		}
		return true;
	},
	invokeViewerKeyHandler: function EventHandlers_invokeViewerKeyHandler(e)
	{
		switch(e.keyCode)
		{
		case 27:
			Viewer.leaveViewerMode();
			break;
		case 33:	//PageUp
		case 37:	//��
			Viewer.prev();
			break;
		case 13:	//Enter
		case 32:	//Sp
		case 34:	//PageDown
		case 39:	//��
			Viewer.next();
			break;
		case 35:	//End
		case 40:	//��
			Viewer.last();
			break;
		case 36:	//Home
		case 38:	//��
			Viewer.first();
			break;
		default:
			return false;
			break;
		}
		return true;
	},
	mouseOver: function EventHandlers_mouseOver(aEvent)
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
	mouseClick: function EventHandlers_mouseClick(aEvent)
	{
		var t = aEvent.target;
		var cancel = false;
		if (t.className == "resPointer")
		{
			//jumpTo
			if(t.textContent.match(/(\d+)/))
			{
				var id = parseInt(RegExp.$1);
				NodeUtil.focus(id);
			}
			cancel = true;
		}
		else if(t.className == "no")
		{
			NodeUtil.toggleRefferPopup(Util.getDecendantNode(t, "ARTICLE"), t);
		}
		else if(t.className == "id")
		{	//ID�|�b�v�A�b�v
			NodeUtil.toggleIdPopup(Util.getDecendantNode(t, "ARTICLE") , t);
		}
		else if (t.id == "footer")
		{
			if (Notice.container) Util.notifyRefreshInternal(Notice.container);
		}
		else if (Thread.isNavigationElement(t))
		{
			Thread.invokeNavigation(t);
		}
		if(cancel){
			aEvent.preventDefault();
			aEvent.stopPropagation();
		}
	},
	mouseDblClick: function EventHandlers_mouseDblClick(e)
	{
		if (e.target.tagName == "ARTICLE")
		{
			var flg = 0;
			if (e.shiftKey) flg += 1;
			if (e.ctrlKey) flg += 2;
			if (e.altKey) flg += 4;
			var method = Preference.OnResDblClick[flg];
			var handler= this.dblClickMethod[method];
			if (handler) handler(e.target)
		}
	},
	LoadOnWheelDelta: 0,
	mouseWheel: function EventHandlers_mouseWheel(e)
	{
		if (e.target.id == "RMenu_Gear")
		{
			if (e.target.enchantedGear)
			{
				if (e.target.enchantedGear.origin != parseInt(MessageMenu._menu.dataset.binding))
				{	//adjust
					e.target.enchantedGear.changePos(e.target);
					e.target.enchantedGear.changeOrigin(parseInt(MessageMenu._menu.dataset.binding));
					e.preventDefault();
					return;
				}
			}
			else
			{
				MessageMenu.BeginGear();
				e.preventDefault();
				return;
			}
		}
		var t = Util.getDecendantNodeByData(e.target, "gearEnchanted", "y");
		if (t)
		{
			t.enchantedGear.step(e.detail < 0 ? -1 : 1);
			e.preventDefault();
			return;
		}
		t = Util.getDecendantNodeByData(e.target, "popupEnchanted", "y");
		if (t)
		{
			t = t.childNodes[0];
			if(((e.detail<0)&&(t.scrollTop==0))||
			   ((e.detail>0)&&(t.offsetHeight+t.scrollTop+1>=t.scrollHeight))){
				e.preventDefault();
				return;
			}
		}
		else if (this.mode=="thread")
		{
			if (Preference.LoadBackwardOnTopWheel || Preference.LoadForwardOnBottomWheel)this.resolveLoadOnWheel(e);
		}
	},
	resolveLoadOnWheel: function EventHandlers_resolveLoadOnWheel(e)
	{
		if (Preference.LoadBackwardOnTopWheel 
			&& (window.scrollY == 0)
			&& (e.detail < 0)
			&& (ThreadMessages.deployedMin != 1))
		{
			if (--this.LoadOnWheelDelta < -Preference.LoadOnWheelDelta)
			{
				this.LoadOnWheelDelta = 0;
				var focusTo = ThreadMessages.deployedMin - 1;
				Thread.deploy(-Preference.LoadOnWheelWidth);
				NodeUtil.focus(focusTo);
			}
			e.preventDefault();
		}
		else if (Preference.LoadForwardOnBottomWheel
			 && (window.scrollY >= document.body.offsetHeight - window.innerHeight - 20)
			 && (e.detail > 0)
			 && (ThreadMessages.deployedMax != ThreadInfo.Total))
		{
			if (++this.LoadOnWheelDelta > Preference.LoadOnWheelDelta)
			{
				this.LoadOnWheelDelta = 0;
				var focusTo = ThreadMessages.deployedMax + 1;
				Thread.deploy(Preference.LoadOnWheelWidth);
				NodeUtil.focus(focusTo);
			}
		}
		else
		{
			this.LoadOnWheelDelta = 0;
		}
	},
	animationStart: function EventHandlers_animationStart(aEvent)
	{
		//�A�j���[�V�������̃��X�g���uAndClose�v�ł���ꍇ�A�J�n����display���������iCSS�̒�`�ɏ]���j
		if (aEvent.animationName.match(/AndClose$/))
		{
			aEvent.target.style.display = "";
		}
	},
	animationEnd: function EventHandlers_animationEnd(aEvent)
	{
		//�A�j���[�V�������̃��X�g���uAndClose�v�ł���ꍇ�A�I������display��none�ɂ���
		if (aEvent.animationName.match(/AndClose$/))
		{
			aEvent.target.style.display = "none";
		}
	},
	aboneImmidiate: function EventHandlers_aboneImmidiate(aEvent)
	{
		var q   = aEvent.sourceEvent.type;	//�N�G��
		var filter = [
			function(node){return node.children[0].children[3].textContent.indexOf(q)>=0;},	//.nm
			function(node){return node.children[0].children[5].textContent.indexOf(q)>=0;},	//.ml
			function(node){return node.dataset.aid.indexOf(q)>=0;},	//data-aid
			function(node){return node.children[1].textContent.indexOf(q)>=0;},	//.ct
		];
		ThreadMessages.apply(function(node){
			node.dataset.ng = "y";
		}, filter[aEvent.detail], true);
	},
};

/* ���_�u���N���b�N�n���h�������������������������������������������������������������� */
EventHandlers.dblClickMethod = {
	//�K������bind�K�v�łȂ����̂����邪�S��bind���Ƃ����ق������S���낤
	bookmark:    NodeUtil.toggleBookmark.bind(NodeUtil),
	resto:       NodeUtil.resTo.bind(NodeUtil),
	pickup:      NodeUtil.togglePickup.bind(NodeUtil),
	tree:        NodeUtil.toggleRefTree.bind(NodeUtil),
	track:       NodeUtil.toggleTracking.bind(NodeUtil),
	preview:     NodeUtil.previewLinks.bind(NodeUtil),
	closepopup:  NodeUtil.closeIfPopup.bind(NodeUtil),
	setbookmark: NodeUtil.setBookmark.bind(NodeUtil),
	res:         Thread.openWriteDialog.bind(Thread, null),
};




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
	var dt1 = new Date();
	Thread.init();	//�������火�̏������̂�����������@������
	ThreadMessages.init();
	MessageMenu.init();
	BoardPane.init();
	Bookmark.init();
	Pickup.init();
	Tracker.init();
	Finder.init();
	ownerApp = $("wa").href.substr(0,6) == "chaika" ? "chaika" : "bbs2chReader";				//�A�v������
	$("footer").innerHTML = "powerd by {0} with {1} {2}".format(ownerApp, skinName, skinVer);	//�t�b�^�\�z
	document.title = ThreadInfo.Title + " - {0}({1})".format(ownerApp, skinName);				//�^�C�g���C��
	if (Preference.FocusNewResAfterLoad) Menu.JumpToNewMark();			//�V������΃W�����v
	//TODO::�Ȃ���΃u�b�N�}�[�N�փW�����v�Ƃ����邩��


	EventHandlers.init();

	Notice.add(ThreadInfo.Status);
	Notice.add("{0} messages.".format(ThreadInfo.Total));
	if (ThreadInfo.New) Notice.add("({0} new messages.)".format(ThreadInfo.New));

	var dt2 = new Date();
	Notice.add("{0} ms for initialize".format(dt2-dt1));
};

//�ȈՔ�string.format�B�u�������ł��Ȃ��B
// http://www.geekdaily.net/2007/06/21/cs-stringformat-for-javascript/
String.format = function String_format(p_txt){
	if ( arguments.length <= 1 ) {
		return p_txt;
	}
	for( var v_idx = 1, v_num = arguments.length; v_idx < v_num; v_idx++ )
	{
		p_txt = p_txt.replace(new RegExp("\\{" + (v_idx - 1) + "\\}", "gi"), arguments[v_idx]);
	}
	return p_txt;
};

String.prototype.format = function StringPrototype_format(){
Array.prototype.unshift.apply(arguments, [this]);
return String.format.apply(String, arguments);
};

