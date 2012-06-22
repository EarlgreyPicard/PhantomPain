Function.prototype.bind = function prototype_bind()
{
	var __method = this, args = $A(arguments), object = args.shift();
	return function()
	{
		return __method.apply(object, args.concat($A(arguments)));
	}
}

var $A = Array.from = function prototype_arrayFrom(iterable) 
{
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
{	//$Aなんだけどクオートで囲む。クオートが入っていればエスケープ。
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

Array.prototype.include = function prototype_include(val)
{
	for(var i=0;i<this.length;i++){
		if (this[i]==val) return true;
	}
	return false;
}

function clone(obj)
{
	var f = function(){};
	f.prototype = obj;
	return new f;
}

var $=function prototype_getElementById(id){return document.getElementById(id);}

String.format = function String_format(p_txt)
{
	if ( arguments.length <= 1 ) {
		return p_txt;
	}
	for( var v_idx = 1, v_num = arguments.length; v_idx < v_num; v_idx++ )
	{
		p_txt = p_txt.replace(new RegExp("\\{" + (v_idx - 1) + "\\}", "gi"), arguments[v_idx]);
	}
	return p_txt;
};

String.prototype.format = function StringPrototype_format()
{
	Array.prototype.unshift.apply(arguments, [this]);
	return String.format.apply(String, arguments);
};

function EVAL(str, def)
{	//冷害が発生しないeval
	try
	{
		return eval(str);
	}
	catch(e)
	{
		console.log(str);
		console.log(e);
	}
	return def;
}

var Skin = PP3 = {
	skinName: "PhantomPain3",
	skinVer: "ver. \"closed alpha\"",
	init: function()
	{
		//loadPref
		this.BoardList.init();
		this.Thread.init();		//ThreadInit
	},
	Configulator: {
	},
	CommonPref: {
		_identifier: new String("UNKNOWN"),
		_storage: localStorage,
	
		setIdentifier: function CommonPref_setIdentifier(aThreadURL) {
			var url = new URL(aThreadURL);
			this._identifier = url.threadId;
		},
		getThreadObjectKey: function(objName)
		{
			return "bbs2chSkin.common." + objName + "." + this._identifier;
		},
		getGlobalObjectKey: function(objName)
		{
			return "bbs2chSkin.common." + objName;
		},
		
		//objName = ブックマーク：bm, ピックアップ：pk, Ignores: ig
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
	},
	
	BoardList: {
		init: function BoardList_init()
		{
			this.prepareBoardNames();
		},
		prepareBoardNames: function BoardList_prepareBoardNames()
		{	
			var sys = EVAL("[" + (Skin.CommonPref.readGlobalObject("BoardNames") || "") + "]", [])[0];
			var usr = EVAL("[" + (Skin.CommonPref.readGlobalObject("UserBoardNames") || "{}") + "]", [{}])[0]; 
			if (!sys) sys = this.reloadBoardNameTxt();
			this.boardNameListSys = sys;
			this.boardNameListUsr = usr;
		},
		save: function BoardList_save(list, prefName)
		{
			var json = "{";
			for(var key in list)
			{
				json += '"{0}": "{1}",'.format(key, list[key]);
			}
			json += "}";
			Skin.CommonPref.writeGlobalObject(prefName, json);
		},
		reloadBoardNameTxt: function BoardList_reloadBoardNameTxt()
		{
			var boardnameTxt = TextLoadManager.syncGet(ThreadInfo.Skin + "boardname.txt");
			var sys =  Util.eval("[" + (boardnameTxt|| "") + "]", [])[0] || {};
			this.save(sys, "BoardNames");
			return sys;
		},
		getBoardName: function BoardList_getBoardName(boardId)
		{
			if (this.boardNameListUsr && this.boardNameListUsr[boardId])
			{
				return  this.boardNameListUsr[boardId];
			}
			else if (this.boardNameListSys && this.boardNameListSys[boardId])
			{
				return  this.boardNameListSys[boardId];
			}
			return "その他の掲示板";
		},
		setBoardName: function BoardList_setBoardName(id, name)
		{
			if (!id) id = Thread.boardId;	//俺だよ、俺俺
			if (!name || name == "")
			{	//定義を消す
				if (this.boardNameListUsr && this.boardNameListUsr[id])
				{
					delete this.boardNameListUsr[id];
				}
			}
			else
			{
				if (!this.boardNameListUsr) this.boardNameListUsr = {};
				this.boardNameListUsr[id] = name;
				this.save(this.boardNameListUsr, "UserBoardNames");
			}
			if (id == Thread.boardId)
			{	//TODO::イベントを投げて板名変化を通知し、反映するように変更
				//特に、２箇所以上に影響が及ぶ場合はそのときに必ず実施。
				Thread.boardName = this.getBoardName(Thread.boardId);
				var e = $("threadName");
				if (e) e.dataset.boardName = Thread.boardName;
			}
		},
	},
	
	Thread: {
		init: function Thread_init()
		{
			//identifier
			//boardName
			//prev/next thread
			this.Message.init();			//message
		},
		openWriteDialog: function Thread_openWriteDialog(to)
		{
		},
		reload: function Thread_reload(range)
		{
		},
		checkNewMessage: function Thread_checkNewMessage()
		{
		},
		Message: {
			init: function Message_init()
			{
				var nodes = $A($("resContainer"));
				this.onLoad(nodes);
				this.onDeploy(nodes);
			},
			prepare: function Message_prepare(from, to)
			{
			},
			deploy: function Message_deploy(from, to)
			{
			},
			getNode: function Message_getNode(no, clone)
			{
			},
			getManipulator: function Message_getManipulator(NodeOrNo)
			{	//旧NodeUtil相当のオブジェクトを返すよ
			},
			getDeployMode: function Message_getDeployMode(no)
			{	//bmしか使ってないので廃止する
			},
			foreach: function Message_foreach(func, includeNotDeployed, includePopup)
			{
			},
			apply: function Message_foreach(func, filter, includeNotDeployed, includePopup)
			{
			},
			isReady: function Message_isReady(no)
			{
			},
			isDeployed: function Message_isDeployed(no)
			{
			},
			onLoad: function Message_onLoad(nodes)
			{
			},
			onDeploy: function Message_onDeploy(nodes)
			{
			},
			_processMessage: function Message__processMessage(node)
			{
			},
			_extendAnchor: function Message__extendAnchor(node)
			{
			},
			_replaceStr: function Message__replaceStr(node)
			{
			},
			Structure: {
				analyze: function MessageStructure_analyze(nodes)
				{
				},
				getReplyIdsByNo: function MessageStructure_getReplyIdsByNo(node)
				{	//指定したレス番号にレスしているレスのレス番号のリストを取得
				},
				getNodeIdsById: function MessageStructure_getNodeIdsById(id)
				{	//IDを指定してその人物が発言したレス番号のリストを取得
				},
			},
		},
		Navigator: {
			gotoPrevChapter: function Navigator_gotoPrevChapter()
			{
			},
			gotoNextChapter: function Navigator_gotoNextChapter()
			{
			},
			gotoThreadList: function Navigator_gotoThreadList()
			{
			},
			gotoPrevThread: function Navigator_gotoPrevThread()
			{
			},
			gotoNextThread: function Navigator_gotoNextThread()
			{
			},
			checkNextThread: function Navigator_checkNextThread(nodes)
			{
			},
			setNextThread: function Navigator_setNextThread(href, ud, nodeNo)
			{
			},
			saveNextThreadInfo: function Navigator_saveNextThreadInfo()
			{
			},
			loadNextThreadInfo: function Navigator_loadNextThreadInfo()
			{
			},
		},
	},
	Services: {
		Marker: {
			service: new Array(),
			push: function MarkerServices__push(service)
			{
			},
			nodeLoaded: function MarkerServices_nodeLoaded(node)
			{
			},
			onStorageChanged: function MarkerServices_onStorageChanged(ev)
			{
			},
		},
		OutLink: {
			getOutlinkPlugin: function OutlinkServices_getOutlinkPlugin(node)
			{
			},
		},
	},
	Menu: {
	},
	ResMenu: {
	},
	BoardPane:{
		//別のとこかも
	},
	Finder: {
	},
	Viewer: {
	},
	Notice: {
	},
	Util: {
		Popup: {
		},
		String: {
		},
		Dom: {
		},
	},
	EventHandler: {
	
	},
};

function MarkerService(){}
function BookmarkService(){}
function PickupServiece(){}
function TrackerService(){}
function TrackerEntry(){}
function URL(){}
function OutlinkPlugin(type){}
	OutlinkPlugin.prototype.posivility = function OutlinkPlugin_posivility(href){}
	OutlinkPlugin.prototype.getPreviewy = function OutlinkPlugin_getPreviewy(href, onload, isPopup){}
	OutlinkPlugin.prototype.showPreview = function OutlinkPlugin_showPreview(){}
	OutlinkPlugin.prototype.popupPreview = function OutlinkPlugin_popupPreview(){}
var OutlinkPluginForImage = new OutlinkPlugin();
	OutlinkPluginForImage.posivility = function OutlinkPluginForImage_posivility(href){}
	OutlinkPluginForImage.getPreview = function OutlinkPluginForImage_getPreview(href, onload, isPopup){}
var OutlinkPluginForMovie = new OutlinkPlugin();
var OutlinkPluginForNicoNico = new OutlinkPlugin();
var OutlinkPluginForThread = new OutlinkPlugin();
var OutlinkPluginForDefault = new OutlinkPlugin();

/* ■ロードマネージャ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
function loadManager(){ }
loadManager.prototype = {
	queue: new Array(),
	loadWidth: 5,		//同時ロード要求数。キューがあるときに変えても意味ない
	b: false,
	push: function loadManager_push(href, callback)
	{	//ロード要求突っ込む。有効期限(expired)あったほうがいいかも？
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
var TextLoadManager = new loadManager();
	TextLoadManager.syncGet = function TextLoadManager_syncGet(url, enableCache)
	{
		var req = new XMLHttpRequest();
		req.open('GET', url, false);	//sync
		if (!enableCache) req.setRequestHeader("If-Modified-Since", "Wed, 15 Nov 1995 00:00:00 GMT");	//キャッシュから読まない
		try
		{
			req.send(null);	
			if ((req.readyState==4)&&(req.status>=200)&&(req.status<300))
			{
				return req.responseText;
			}
		}
		catch(e){}
		return null;
	}
	
var ImageLoadManager = new loadManager();
	ImageLoadManager.request = function ImageLoadManager_request(obj)
	{
		obj.img = new Image();
		obj.img.addEventListener("load", this.response.bind(this, obj, "OK"), false);
		obj.img.addEventListener("error", this.response.bind(this, obj, "NG"), false);
		obj.img.src = obj.href;
		//console.log("request "+obj.href);
	}

function ImageThumbnail(url, sz){}
function ImageThumbnailOnClickOverlay(url, sz){this.thumbSize = sz; this.init(url);}
function ImageThumbnailOnClickOverlayFrame(url, sz){this.thumbSize = sz; this.init(url);}
function Popup(){}
function ResPopup(anchor){ this.init(anchor); }
function GearPopup(enchantElement) { this.init(enchantElement); }
function PopupDragDrop(popupContainer, aEvent){ this.init(popupContainer, aEvent);}
function ViewerEntry(href){ this.init(href); }
function ResManipulator(){}
ResManipulator.prototype = {
	resTo: function NodeUtil_resTo(){},
	toggleRefferPopup: function NodeUtil_toggleRefferPopup( t){},
	toggleIdPopup: function NodeUtil_toggleIdPopup( t){},
	expressReffer: function NodeUtil_expressReffer(){},
	closeRefTree: function NodeUtil_closeRefTree(){},
	toggleRefTree: function NodeUtil_toggleRefTree(){},
	openRefTree: function NodeUtil_openRefTree(){},
	toggleBookmark: function NodeUtil_toggleBookmark(){},
	setBookmark: function NodeUtil_setBookmark(){},
	resetBookmark: function NodeUtil_resetBookmark(){},
	togglePickup: function NodeUtil_togglePickup(){},
	setPickup: function NodeUtil_setPickup(){},
	resetPickup: function NodeUtil_resetPickup(){},
	previewLinks: function NodeUtil_previewLinks(){},
	toggleTracking: function NodeUtil_toggleTracking(){},
	beginTracking: function NodeUtil_beginTracking(){},
	endTracking: function NodeUtil_endTracking(){},
	focus: function NodeUtil_focus(no){},
	closeIfPopup: function NodeUtil_closeIfPopup(){},
};

//どこにおくか決めかねているもの
//AutoLoad.start, end, toggle
//MessageLoader_loadByAnchorStr(アンカー文字列からのThread.Message.prepare)


window.addEventListener("load", function(){ PP3.init(); });
