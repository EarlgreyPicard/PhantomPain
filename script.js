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
	AutoAutoReloadPtn: "",		//�I�[�g���[�h�������J�n����X���b�hURL�̃p�^�[��
	ResPopupPageWidth: 5,		//���X�|�b�v�A�b�v���^�u�����镝
	ResPopupAlwaysShowTabs: false,	//���X�|�b�v�A�b�v���펞�^�u�ŕ\��
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
	ExtendAnchor: true,			//�A���J�[�g��
	URLShortenLength: 40,		//URL�\����Z�����钷��
	AutoOpenBoardPane: false,	//�ꗗ�y�C���̎����W�J
	AutoPreviewOutlinks: false,	//Outlink�������W�J
	ChapterWidth: 100,			//Navi�̃`���v�^�[��
	EnableNextThreadSearch: true,	//���X�������L���H
	UseReplaceStrTxt: false,		//ReplaceStr.txt���g�p����H
	NextThreadSearchBeginsAt: 900,	//���X�������J�n���X�ԍ�
	NoticeLength: 10,			//�\�����邨�m�点�̐�
	//���X���_�u���N���b�N������ǂ��Ȃ�H
	//              0=�f        1=shift,      2=ctr  3=shift+ctrl,4=alt ,5=shift+alt, 6=ctrl+alt,7=ctrl+alt+shift
	OnResDblClick: ["togglePickup", "closeIfPopup", "toggleBookmark", "toggleTracking", "resTo", "previewLinks", "previewLinks", "toggleRefTree"],
	//���g�� none(���ꂪ�f�t�H���g), ����ȊO��Manipulator�̃��\�b�h���B
 
};

var Content = {
	mode: "jp",
	_jp: {
		title: "{0} - {1}({2})",
		defaultBoardName: "���̑��̌f����",

		popupCaptionTemplate: "�e���v��",
		popupCaptionNavigation: "Navigation",
		popupCaptionPickup: "Pickup",
		popupCaptionTracking: "�ǐ�", 
		popupCaptionGear: "GEAR>>{0}",
		popupCaptionResTo: "ResTo>>{0}",
		popupCaptionId: "ID>>{0}",
		popupContentThreadDefault: "(�X���^�C���擾)",
		popupContentThreadError: "(�X���b�h���[�h�G���[)",
		popupContentThreadTitle: "�X���^�C���擾�B���ǃX���̏ꍇ�A���ǂɂȂ�܂��B",
		popupContentThreadSetNext: "���X���Ɏw��",
		
		messageLoaded: "{0} messages.",
		messageNewResDetected: "({0} new messages.)",
		messageResetPreference: "�ݒ���N���A���܂���",
		messageInitialized: "{0} ms for initialize",
		messageLoadError: "Load Error.",
		messageCheckedWithoutNew: "{0} �V���Ȃ�",
		messageCheckedWithNew: "{0} �V��{1}��",
		messageNextThreadSet: "���X���� {0} �ɐݒ肵�܂����B",
		messagePopupInitializedError: "PopupInitializedError",
		messageInvalidReplaceStr: "\"{0}\"��ReplaceStr�̏����Ƃ��ĔF���ł��܂���ł����B",
		navigatorChapterTitle: "CHAPTER",
		navigatorChapterNext: "next.",
		navigatorChapterPrev: "prev.",
		navigatorBacklogTitle: "BACKLOG",
		navigatorBacklogAll: "�S��",
		navigatorMiscTitle: "etc.",
		navigatorMiscJump: "JumpTo:",
		navigatorMiscList: "�X���ꗗ",
		navigatorMiscNext: "���X��",
		navigatorMiscPrev: "�O�X��",
		
		finderSubmit: "���o",
		finderRegExp: "���K�\��",
		finderCheckCase: "�召���",
		finderOnlyPickup: "pickup�̂�",
	},
	get: function Content_get(id)
	{
		return this["_" + this.mode][id] || this["_jp"][id] || "";
	},
}

var Macro = {
	exprain: {
		Write: "�������݃_�C�A���O",
		Template: "�e���v���\��",
		Viewer: "�r���[�A�[�\��",
		Config: "�ݒ�",
		Finder: "����",
		Navigation: "�i�r�Q�[�V�������j���[",
		Notice: "���m�点�\��",
		Preview: "�v���r���[�W�J",
		Jump: "�ԍ��w��W�����v",
		Check: "�V���`�F�b�N",
		AutoCheck: "�����V���`�F�b�N",
		ExpressPickup: "�s�b�N�A�b�v���o",
		BoardPane: "�X���ꗗ",
		FocusEnd: "�Ō�Ƀt�H�[�J�X",
		FocusTop: "�ŏ��Ƀt�H�[�J�X",
		FocusBookmark: "�u�b�N�}�[�N�Ƀt�H�[�J�X",
		FocusNew: "�V���Ƀt�H�[�J�X",
		ResetBookmark: "�u�b�N�}�[�N����",
		M_resTo: "�ԐM",
		M_toggleRefferPopup: "�t�Q�ƃ|�b�v�A�b�v",
		M_toggleIdPopup: "ID�|�b�v�A�b�v",
		M_expressReffer: "�t�Q�ƒ��o",
		M_toggleRefTree: "�t�Q�ƃc���[",
		M_openRefTree: "�t�Q�ƃc���[�\�z",
		M_closeRefTree: "�t�Q�ƃc���[���",
		M_toggleBookmark: "�u�b�N�}�[�N",
		M_setBookmark: "�u�b�N�}�[�N�ݒ�",
		M_resetBookmark: "�u�b�N�}�[�N����",
		M_togglePickup: "�s�b�N�A�b�v",
		M_setPickup: "�s�b�N�A�b�v�ݒ�",
		M_resetPickup: "�s�b�N�A�b�v����",
		M_toggleIgnore: "����(�ʂ��ځ[��)",
		M_setIgnore: "����(�ʂ��ځ[��)�ݒ�",
		M_resetIgnore: "����(�ʂ��ځ[��)����",
		M_toggleTracking: "�g���b�L���O",
		M_beginTracking: "�g���b�L���O�J�n",
		M_endTracking: "�g���b�L���O����",
		M_previewLinks: "�v���r���[(�P��)",
		M_focus: "�t�H�[�J�X",
		M_focusNextId: "ID�̎��̃��X�Ƀt�H�[�J�X",
		M_focusPrevId: "ID�̑O�̃��X�Ƀt�H�[�J�X",
		M_closeIfPopup: "�|�b�v�A�b�v�Ȃ����",
		M_exitExpressMode: "����ɒ��ڂ��Ē��o���[�h���I��",
	},
	_invoke: function(command, t)
	{	//Manipulator�R�}���h����t��node(�܂��͂��̎q�v�f)���w�肷�邱�ƁB
		//�Ȃ���΁A���X���j���[������m�[�h�B
		if (command.substr(0,2) == "M_")
		{
			if (!t) t = Skin.ResMenu._menu.parentNode;
			if (t)
			{
				var n = DOMUtil.getDecendantNode(t, "ARTICLE");
				if (n) $M(n).invoke(command.substr(2));
			}
		}
		else if (this[command]) this[command]();
	},
	//�ȉ��At�̓C�x���g�����������v�f�Bnull�Ȃ�Ȃ񂩃f�t�H���g���g���B
	Write: function(){ Skin.Thread.openWriteDialog(); },
	Template: function(t)
	{
		t = t || $("Menu_Template");
		if (Preference.TemplateLength)
		{
			var tids = [];
			for(var i=1; i<=Preference.TemplateLength; i++) tids.push(i);
			PopupUtil.toggleResPopup(t, tids, true, $C("popupCaptionTemplate"));
		}
		else 
		{	//TemplateLength = 0�ݒ莞�̓M�A�Ƃ��ďo��
			if (t.enchantedGear)
			{
				t.enchantedGear.close();
			}
			else
			{
				var pp = new GearPopup(t);
				pp.showPopup(1, DOMUtil.getElementPagePos(t), true);
			}
		}
	},
	Viewer: function(){ Skin.Viewer.show(); },
	Config: function(t){ Skin.Configulator.toggle(t || $("Menu_Config"));},
	Finder: function(){ Skin.Finder.toggleExpressMode();},
	Navigation: function(){ Skin.Thread.Navigator.toggle();},
	Notice: function(){ if (Notice.container) DOMUtil.notifyRefreshInternal(Notice.container); },
	Preview: function(){ Skin.Thread.Message.foreach(function(node){ $M(node).previewLinks(); }, false, true); },
	Jump: function(){ Skin.Thread.Navigator.open(); $("navjumpto").focus(); },
	DeployBackward: function()
	{
		var focusTo = Skin.Thread.Message.deployedMin-1;
		Skin.Thread.Message.deployTo(focusTo - Preference.MoreWidth);
		$M(focusTo).focus();
	},
	Check: function()
	{
		if (Skin.Thread.Message.deployedAll)
		{
			Skin.Thread.checkNewMessage();
		}
		else
		{
			var focusTo = Skin.Thread.Message.deployedMax+1;
			Skin.Thread.Message.deployTo(focusTo + Preference.MoreWidth);
			$M(focusTo).focus();
		}
	},
	AutoCheck: function(){ Skin.Services.AutoUpdate.toggle(); },
	PopupPickup: function(t){ PopupUtil.toggleResPopup(t || $("Menu_PopupPickups"), Pickup.pickups, true, $C("popupCaptionPickup"))},
	ExpressPickup: function()
	{
		Skin.Finder.enterExpressMode();
		$("fform").q.value = "";
		$("fform").p.checked = true;
		Skin.Finder.express();
	},
	BoardPane: function(){ Skin.BoardPane.toggle(); },
	FocusEnd: function(){ $M(Skin.Thread.Message.deployedMax).focus(); },
	FocusTop: function(){ $M(Skin.Thread.Message.deployedMin).focus(); },
	FocusBookmark: function(){ Bookmark.focus(); },
	FocusNew: function(){ $M(Skin.Thread.Info.Fetched + 1).focus(); },
	ResetBookmark: function(){ Bookmark.add(0); },
	ClearTracking: function(){ Tracker.refresh("[]", ""); },
	ReloadReplaceStr: function() { Skin.Thread.Message._replaceStr.reloadDefine(); },
};

const OUTLINK_NON   = 0;	//outlink����Ȃ�
const OUTLINK_IMAGE = 1;	//�摜
const OUTLINK_MOVIE = 2;	//����
const OUTLINK_2CH   = 3;	//2ch
const OUTLINK_ETC   = 4;	//���̑�

function PP3ResetPreference()
{	//�u�b�N�}�[�N���b�g�Ƃ��� javascript:PP3ResetPreference(); ��o�^���Ă����ƁA���Z�b�g���邱�Ƃ��ł��܂��B
	console.log($C("messageResetPreference"));
}

Function.prototype.bind = function prototype_bind()
{
	var __method = this, args = $A(arguments), object = args.shift();
	return function _bind()
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

Array.prototype.include = function prototype_include(val)
{
	for(var i=0;i<this.length;i++){
		if (this[i]==val) return true;
	}
	return false;
}

Array.prototype.clone = function prototype_clone()
{
	return Array.apply(null, this);
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
	if ( arguments.length <= 1 ) return p_txt;
	var A=arguments;
	return p_txt.replace(/{(\d+)}/g, function StringFormat_Replacement(all,$1) {return A[parseInt($1)+1];});
};

String.prototype.format = function StringPrototype_format()
{
	Array.prototype.unshift.apply(arguments, [this]);
	return String.format.apply(String, arguments);
};

function getType(o)
{
	if (o === null) return 'null';
	if (typeof o == 'undefined') return 'undefined';
	if (typeof o == 'boolean') return 'boolean';
	if (typeof o == 'string') return 'string';
	if (typeof o == 'number') return 'number';
	if (o instanceof Array) return 'array';
	if (o instanceof RegExp) return 'regexp';
	if (o instanceof Date) return 'date';
	if (typeof o == 'function') return 'function';
	if (typeof o == 'object') return 'object'
	return 'unknown';
}

function getJsonStr(obj)
{
	var ret = "";
	var t = getType(obj);
	if ((t == "null") || (t == "undefined"))
	{
		ret = t;
	}
	else if ((t == "boolean") || (t == "number"))
	{
		ret = obj + "";
	}
	else if (t == "string")
	{
		ret = '"' +  escapeStrToJson(obj) + '"';
	}
	else if (t == "array")
	{
		ret = "[";
		for (var i=0; i< obj.length; i++)
		{
			ret += getJsonStr(obj[i]) + ",";
		}
		ret += "]";
	}
	else if (t == "object")
	{
		ret = "{";
		for(var key in obj)
		{
			ret += '"' + key + '":' + getJsonStr(obj[key]) + ","
		}
		ret += "}";
	}
	return ret;	//���ɖ߂��Ƃ��� var obj = EVAL("("+ret+")", null);
}

function escapeStrToJson(str)
{
	return str.replace(/(\r|\n|\t|\\|")/g, function(all, $1){
		switch ($1)
		{
		case "\r": return "\\r";
		case "\n": return "\\n";
		case "\t": return "\\t";
		case "\\": return "\\\\";
		case '"':  return '\\"';
		}
	});
}

function EVAL(str, def)
{	//��O���������Ȃ�eval
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
init: function PP3_init()
{
	var dt1 = new Date();

	//loadPref
	if (Preference.AutoOpenBoardPane) this.BoardPane.toggle();
	this.BoardList.init();
	this.Thread.init();
	this.Services.Marker.init();
	this.ResMenu.init();
	
	this.ownerApp = $("wa").href.substr(0,6) == "chaika" ? "chaika" : "bbs2chReader";				//�A�v������
	$("footer").innerHTML = "powerd by {0} with {1} {2}".format(this.ownerApp, this.skinName, this.skinVer);	//�t�b�^�\�z
	document.title = $C("title").format(Skin.Thread.Info.Title, this.ownerApp, this.skinName);				//�^�C�g���C��
	
	if (Preference.FocusNewResAfterLoad) Macro.FocusNew();			//�V������΃W�����v

	this.EventHandler.init();

	Notice.add(Skin.Thread.Info.Status);
	Notice.add($C("messageLoaded").format(Skin.Thread.Info.Total));
	if (Skin.Thread.Info.New) Notice.add($C("messageNewResDetected").format(Skin.Thread.Info.New));

	var dt2 = new Date();
	Notice.add($C("messageInitialized").format(dt2-dt1));

	if (Preference.AutoAutoReloadPtn && (Skin.Thread.Info.Url.match(Preference.AutoAutoReloadPtn))) this.Services.AutoUpdate.begin();
},
Configulator: {
	toggle: function Configulator_toggle(t)
	{
		if (!t) return;
		if (!t.tagName) t = $(t);
		if (!t) return;
		if (!this.editor)
		{	//������
			var cont = document.createElement("DIV");
			cont.id = "prefMenu";
			var html = TextLoadManager.syncGet(Skin.Thread.Info.Skin + "pref.txt") || "";
			this.htmlTemplate = html;
			//�e���v���[�g�G���W�������I
			//���̕��@�ŏ����l�𖄂߂�Ȃ�A�J���Ȃ������Ƃ��̏������l���Ȃ��ƃ_�������B
			//�����ł����ύX����Ȃ��l�͂ǂ��ł��������ǁB
			html = html.replace(/@<([^@]+?)>@/g, function Configulator_templateEngine(all,$1){ return eval($1);});
			cont.innerHTML = html;
			this.editor = cont.firstChild;
			cont.removeChild(this.editor);
			var pages = this.editor.children[1];
			this.editor.removeChild(pages);
			this.pages = {};
			for(var i=0; i<pages.children.length; i++)
			{
				var page = pages.children[i];
				this.pages[page.dataset.key] = page;
			}
		}
		PopupUtil.toggle(t, this.editor, false);
	},
	page: function Configulator_page(aEvent)
	{
		var name = aEvent.explicitOriginalTarget.name;
		var page = this.pages[name];
		if (!page) return false;
		PopupUtil.toggle(aEvent.explicitOriginalTarget, page, false, true, "prefpage");
		return false;
	},
},
CommonPref: {
	_identifier: new String("UNKNOWN"),
	_storage: localStorage,

	getThreadObjectKey: function CommonPref_getThreadObjectKey(objName)
	{
		return "bbs2chSkin.common." + objName + "." + this._identifier;
	},
	getGlobalObjectKey: function CommonPref_getGlobalObjectKey(objName)
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
		var boardnameTxt = TextLoadManager.syncGet(Skin.Thread.Info.Skin + "boardname.txt");
		var sys =  EVAL("[" + (boardnameTxt|| "") + "]", [])[0] || {};
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
		return $C("defaultBoardName").format(boardId);
	},
	setBoardName: function BoardList_setBoardName(id, name)
	{
		if (!id) id = Skin.Thread.boardId;	//������A����
		if (!name || name == "")
		{	//��`������
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
		if (id == Skin.Thread.boardId)
		{	//TODO::�C�x���g�𓊂��Ĕ��ω���ʒm���A���f����悤�ɕύX
			//���ɁA�Q�ӏ��ȏ�ɉe�����y�ԏꍇ�͂��̂Ƃ��ɕK�����{�B
			Skin.Thread.boardName = this.getBoardName(Skin.Thread.boardId);
			var e = $("threadName");
			if (e) e.dataset.boardName = Skin.Thread.boardName;
		}
	},
},

Thread: {
	init: function Thread_init()
	{
		//identifier�ݒ�
		var url = new URL(this.Info.Url);
		this.boardId  = url.boardId;
		this.threadId = url.threadId;
		
		//�X���b�h��ID�����ʐݒ�Ɏg�킹��(������O�ɃX���b�h�ʐݒ���g�p���Ă͂Ȃ�Ȃ�)
		Skin.CommonPref._identifier = url.threadId;

		//��
		this.boardName = Skin.BoardList.getBoardName(this.boardId);

		//�X���^�C�\������deta-board�ɓo�^�i�Ȃ��X���^�C���Ƃ�����Ό����ڂɊւ��邱�ƂȂ̂ŁA�ݒ�ŕς�����ق������������j
		var e = $("threadName");
		if (e)
		{
			 e.dataset.board = this.boardId;
			 e.dataset.boardName = this.boardName;
		}

		//���X���O�X��
		this.Navigator.init();

		//���b�Z�[�W�̕���
		this.Message.init();			//message
	},
	openWriteDialog: function Thread_openWriteDialog(to)
	{
		if (!to) to = "";
		var url = Preference.PostScheme + this.Info.Url + to
		window.location.href = url;
	},
	checkNewMessage: function Thread_checkNewMessage()
	{
		this.autoTickCount = 0;	//���ǂݍ��񂾂炻�̂Ƃ��Ɏ������[�h�J�E���^���Z�b�g
		if (this.Message.deployedMax != this.Info.Total)
		{	//�Ō�܂ŕ\������Ă��Ȃ��Ƃ��͑S���\�����Ă���B
			this.Message.deployTo(Skin.Thread.Info.Total);
		}
		if (!this.checking)
		{
			this.checking = true;
			document.body.dataset.loading = "y";
			TextLoadManager.push(Skin.Thread.Info.Server + Skin.Thread.Info.Url + "l1n", this._loaded.bind(this));
		}
	},
	_loaded: function Thread__loaded(obj)
	{
		if (!obj || obj.status == "NG")
		{
			Notice.add($C("messageLoadError"));
		}
		else
		{
			var html = obj.responseText;
			this._checkNewMessage(html);
		}
		document.body.dataset.loading = "";
		this.checking = false;
	},
	_checkNewMessage: function Thread__checkNewMessage(html)
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
					this.Message.onLoad($A(nc.getElementsByTagName("ARTICLE")));
				}
				this.Info.Total = obj.total;
				this.Info.New = obj.new;
			}
			this.Info.Status = obj.status;
			if (this.updateFetchedOnCheckNewMessage)
			{
				this.updateFetchedOnCheckNewMessage = false;	//�}�E�X�̈ړ��ƃz�C�[����������m����true�ɂȂ�B
				this.Info.Fetched = obj.total - obj.new;
				NewMark.add(this.Info.Fetched);
				Notice.add("withFetchedUpdate");
			}
			else
			{
				Notice.add("withoutFetchedUpdate");
			}
			if (obj.new)
			{
				this.Message.deployTo(this.Info.Total);
				$M(this.Info.Fetched + 1).focus();
			}
			var format = obj.new ? "messageCheckedWithNew" : "messageCheckedWithoutNew";
			Notice.add($C(format).format(StringUtil.timestamp(), obj.new));
		}
	},
	Message: {
		domobj: new Array(),	//DOM�I�u�W�F�N�g�Bindex�̓��X�ԍ�
		outLinks: new Array(),	
		deployedMin: 0,
		deployedMax: 0,
		init: function Message_init()
		{
			this._replaceStr.init();
			var nodes = $A($("resContainer").children);
			this.onLoad(nodes);
			this.onDeploy(nodes);
		},
		prepare: function Message_prepare(from, to)
		{	//���̃X���̊��ǃ��X�����[�h�Bmin�ɂ�ids�܂��̓A���J�[�̕�������w��\�B
			//alert([min, max]);
			if (from instanceof Array)
			{
				return this.prepareIds(from);
			}
			else if ((from+"").substr(0,1) == ">")
			{
				return this.prepareAnchorStr(from+"");
			}
			var tmin = parseInt(from);
			if (!tmin)return false;
			var tmax = to;
			if (tmax > Skin.Thread.Info.Total) tmax = Skin.Thread.Info.Total;	//��Ύ��Ȃ��Ƃ���͂Ƃ�ɍs���Ȃ��B
			for(; tmin <= tmax; tmin++)
			{	//tmin�ʒu���ǂݍ��ݍς݂Ȃ�tmin��+1
				if (!this.isReady(tmin))	break;
			}
			for(; tmax >= tmin; tmax--)
			{	//tmax�ʒu���ǂݍ��ݍς݂Ȃ�tmax��-1
				if (!this.isReady(tmax))	break;	
			}
			if ((tmin <= tmax) && (tmin != 0))
			{	//min-max�͈̔͂ɏ��Ȃ��Ƃ��P�͎擾���ׂ����X����
				var loardUrlStr = Skin.Thread.Info.Server + Skin.Thread.Info.Url + tmin + "-" + tmax;
				var html = TextLoadManager.syncGet(loardUrlStr) || "";
				if (html.match(/<!--BODY.START-->([\s\S]+)<!--BODY.END-->/))
				{
					var nc = document.createElement("DIV");
					nc.innerHTML = RegExp.$1;
					this.onLoad($A(nc.getElementsByTagName("ARTICLE")));
					return true;
				}
				else
				{
					return false;
				}
			}
			return true;
		},
		prepareIds: function Message_prepareIds(ids)
		{	//ids���ł��邾�����Ȃ��񐔂Ń��[�h����悤�ɂ���B
			//�{���͂�����Ƃ��炢�̊Ԍ��Ȃ番�����Ƀ��[�h�����ق���������ʂ�����񂾂낤���ǁH
			ids = ids.sort(function prepareIds_sort(a,b){return a-b;});
			var from = 0;
			var b = true;
			for(var i=0; i<ids.length; i++)
			{
				var no = ids[i];
				if (from == 0)
				{
					if (!this.isReady(no)) from = no;
				}
				else
				{
					if (this.isReady(no))
					{
						b &= this.prepare(from, no-1);
						from = 0;
					}
				}
			}
			if (from) b &= this.prepare(from, ids[ids.length-1]);
			return b;
		},
		prepareAnchorStr: function message_prepareAnchorStr(str)
		{
			str=str.replace(/>/g,"");
			var e=str.split(",");
			var r=new Array();
			var b = true;
			for(var i=0;i<e.length;i++)
			{
				if(e[i].match(/(\d+)(-(\d+))?/))
				{
					var min = parseInt(RegExp.$1);
					var max = parseInt(RegExp.$3);
					if (!max) max = min;
					b &= this.prepare(min, max);
				}
			}
			return b;
		},
		deployAll: function message_deployAll()
		{
			this.deployTo(1);
			this.deployTo(Skin.Thread.Info.Total);
		},
		deployTo: function Thread_deployTo(to)
		{
			if (to <= 0) to = 1;
			if (to >= Skin.Thread.Info.Total) to = Skin.Thread.Info.Total;
			var min = to,  max = to;
			if (to < this.deployedMin)
			{
				max = this.deployedMin-1;
			}
			if (to > this.deployedMax)
			{
				min = this.deployedMax+1;
			}
			this.deploy(min, max);
		},
		deploy: function Message_deploy(from, to)
		{
			this.prepare(from, to);
			var nodes = new Array();
			for(var i = from; i<= to; i++)
			{
				nodes.push(this.domobj[i]);
				this._deployNode(this.domobj[i]);
			}
			this.onDeploy(nodes);
		},
		_deployNode: function Message_deployNode(node)
		{
			if (!node)return;	//�ق���I
			if (node.tagName != "ARTICLE") return;	//�ق���I
			if (this.isDeployed(node.dataset.no)) return;
			if (node.parentNode)
			{	//�����̐e�����O�Bload���痈������div���Ǝv����B
				node.parentNode.removeChild(node);
			}
			var rc = $("resContainer");
			var nn =  parseInt(node.dataset.no);
			var nextSibling = this._findDeployedNextSibling(nn);
			if (nextSibling)
			{
				rc.insertBefore(node, nextSibling);
			}
			else
			{
				rc.appendChild(node);
			}
		},
		_findDeployedNextSibling: function Message__findDeployedNextSibing(no)
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
		getNode: function Message_getNode(no, clone)
		{
			if (this.domobj[no] != null)
			{
				var obj = this.domobj[no];
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
		getManipulator: function Message_getManipulator(NodeOrNo)
		{	//��NodeUtil�����̃I�u�W�F�N�g��Ԃ���
			return new ResManipulator(NodeOrNo);
		},
		foreach: function Message_foreach(func, includeNotDeployed, includePopup)
		{
			if (includeNotDeployed)
			{	//all loaded
				nodes = includePopup ? $A(document.body.getElementsByTagName("ARTICLE")) : this.domobj;
			}
			else
			{	//only deployed
				nodes = $A($("resContainer").children);
				if (includePopup)
				{
					var pn = $A($("popupContainer").getElementsByTagName("ARTICLE"));
					for(var i=0; i<pn.length; i++)
					{
						nodes.push(pn[i]);
					}
				}
			}
			for (var i=0, j=nodes.length; i<j; i++)
			{
				if (nodes[i]) func(nodes[i]);
			}
		},
		apply: function Message_foreach(func, filter, includeNotDeployed, includePopup)
		{
			this.foreach(function message_apply_func(node){
				if (filter(node)) func(node);
			}, includeNotDeployed, includePopup);
		},
		isReady: function Message_isReady(no)
		{
			return (this.domobj[no]);
		},
		isDeployed: function Message_isDeployed(no)
		{
			if ( this.domobj[no])
				if (this.domobj[no].parentNode)
					if (this.domobj[no].parentNode.id == "resContainer")
						return true;
			return false;
		},
		onLoad: function Message_onLoad(nodes)
		{
			for(var i=0; i<nodes.length; i++)
			{
				var node = nodes[i];
				if ((node.tagName == "ARTICLE") && (!this.isReady(node.dataset.no)))
				{	//�����O�̃��X�ł���ꍇ�c�i�{���͑��X������Ȃ����m�F���v��̂����H�j
					var no = parseInt(node.dataset.no);
					var msgNode = node.childNodes[1];
					this._extendAnchor(msgNode);
					this._replaceStr.replace(node);
					this.domobj[no] = node;
					this.outLinks[no] = $A( node.getElementsByClassName("outLink"));
					
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
				}
			}
			//�\�����
			this.Structure.analyze(nodes);
			//�}�[�J�[�o�^
			Skin.Services.Marker.nodeLoaded(nodes);
		},
		onDeploy: function Message_onDeploy(nodes)
		{
			for(var i=0; i<nodes.length; i++)
			{
				var node = nodes[i];
				var n = parseInt(node.dataset.no);
				if ((this.deployedMin == 0) || (n < this.deployedMin)) this.deployedMin = n;
				if ((n==2) && (this.isDeployed(2))) this.deployedMin = 1;
				if (this.deployedMax < n) this.deployedMax = n;
				this.deployedFirst = (this.deployedMin == 1);
				this.deployedAll   = (this.deployedMax == Skin.Thread.Info.Total);
				document.body.dataset.deployedFirst = this.deployedFirst ? "y" : "";
				document.body.dataset.deployedAll   = this.deployedAll   ? "y" : "";
				if (Preference.AutoPreviewOutLinks)
				{
					$M(node).previewLinks();
				}
			}
		},
		_extendAnchor: function Message__extendAnchor(node)
		{	//<a href="#res1" class="resPointer">&gt;&gt;1</a>,3,5,7 
			var msg = node.innerHTML;
			var oldmsg = msg;
			var hasImage = false;
			var hasLink  = false;
			msg = msg.replace(this._extendPtn, function extendAnchor__replacement(all, dblDigit, dblFirstDigit, trPre, trDigit, anchorPre, href, anchorStr, exclude)
			{
				if (exclude) return all;
				if (anchorStr)
				{
					hasLink = true;
					if (OutlinkPluginForImage.posivility(href))
					{
						hasImage = true;
					}
					else
					{
						Skin.Thread.Navigator.checkNextThread({href: href}, node.parentNode);
					}
					if (anchorStr.length > Preference.URLShortenLength)
					{
						var url = new URL(anchorStr);
						return anchorPre + url.shorten() + "</a>";
					}
					return all;
				}
				else if (trPre)
				{
					return trPre + StringUtil.toNarrowString(trDigit) + "</a>";
				}
				return '<a href="#res{1}" class="resPointer">&gt;&gt;{0}</a>'.format(StringUtil.toNarrowString(dblDigit), StringUtil.toNarrowString(dblFirstDigit));
			});
			if(hasImage) node.parentNode.dataset.hasImage = "y";
			if(hasLink)  node.parentNode.dataset.hasLink  = "y";
			if((Preference.ExtendAnchor) && (oldmsg != msg)) node.innerHTML = msg;
		},
		_extendPtn: new RegExp(/(?:(?:����|��|&gt;&gt;|&gt;)(([\d�O-�X]+)(?:[0\d�O-�X,\-]+)?))|(?:(class="resPointer">&gt;&gt;[^<]+?)<\/a>([,\-\d�O-�X]+))|(?:(<a\s[^<]*href="([^"]+)" class="outLink">)([^<]+)<\/a>)|(class="resPointer">&gt;&gt;[\d\-]+<\/a>)/g),
		Structure: {
			nodesById: new Array(),		//������ID
			nodesReplyFrom: new Array(),	//������t�Q�Ə��
			analyze: function MessageStructure_analyze(nodes)
			{
				if (this._scriptedStyle == null)
				{
					this._scriptedStyle = $("scriptedStyle");
				}
				var html = "";
				for(var i=0; i<nodes.length; i++)
				{
					html += this._analyze(nodes[i]);
				}
				this._scriptedStyle.innerHTML += html;
			},
			getReplyIdsByNo: function MessageStructure_getReplyIdsByNo(no)
			{	//�w�肵�����X�ԍ��Ƀ��X���Ă��郌�X�̃��X�ԍ��̃��X�g���擾
				return this.nodesReplyFrom[no];
			},
			getNodeIdsById: function MessageStructure_getNodeIdsById(id)
			{	//ID���w�肵�Ă��̐l���������������X�ԍ��̃��X�g���擾
				return this.nodesById[id];
			},
			_analyze: function MessageStructure__analyze(node)
			{
				var obj = node.dataset;
				var html ="";
				//ID�ɂ��\��
				if (obj.aid.length > 5)		//"????"���
				{
					if (!this.nodesById[obj.aid]) this.nodesById[obj.aid] = new Array();
					this.nodesById[obj.aid].push(obj.no);
					if (this.nodesById[obj.aid].length == 2)
					{	//ID�̋����\���B����������̂���IDCOLOR��IDBACKGROUNDCOLOR���L���B�����đ����B
						html += "article[data-aid=\"{0}\"] > h2 > .id { color: {1}; background-color: {2}; font-weight: bold; }"
						       .format(obj.aid, obj.idcolor, obj.idbackcolor);
					}
				}
				
				//Reply�ɂ��\��
				var replyTo = this._getReplyTo(node);
				for(var i=0, j=replyTo.length; i < j; i++)
				{
					var t = replyTo[i];
					if(!this.nodesReplyFrom[t])
					{
						this.nodesReplyFrom[t] = new Array();
						//�t�Q�Ƃ���̋����\��
						//����Marker�ł��ǂ��C�����Ă����B
						node.dataset.hasReply = "y";
					}
					this.nodesReplyFrom[t].push(obj.no);
				}
				return html;
			},
			_getReplyTo: function MessageStructure__getReplyTo(node)
			{
				var anchors = node.getElementsByClassName("resPointer");
				var replyTo = new Array();
				for (var i=0, j=anchors.length; i<j; i++)
				{
					var target = anchors[i].textContent;
					var ids = StringUtil.splitResNumbers(target);
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
		},
		_replaceStr: {
			info: null,
			init: function ReplaceStr_init()
			{
				if (!Preference.UseReplaceStrTxt) return;
				this.info = EVAL("[" + (Skin.CommonPref.readGlobalObject("ReplaceStr") || "") + "]", [])[0];
				if (!this.info) this.reloadDefine();
			},
			reloadDefine: function ReplaceStr_reloadDefine()
			{
				this.info = new Array();
				var txt = TextLoadManager.syncGet(Skin.Thread.Info.Skin + "ReplaceStr.txt");
				if (txt=="")return;
				txt = txt.replace(/\r/g, "\n");
				var d=txt.split("\n");
				for(var i=0,j=d.length;i<j;i++)
				{
					if (d[i].length && (!d[i].match(/^('|;|\/\/)/)))
					{
						this.addPattern(d[i]);
					}
				}
				this.saveDefine();
			},
			saveDefine: function ReplaceStr_saveDefine()
			{
				var saveStr = "[";
				var e = function ReplaceStr_saveDefine_replacement(s)
				{
					s = s.replace(/\\/g, "\\\\");
					s = s.replace(/"/g, "\\\"");
					return s;
				};
				for(var i=0; i<this.info.length; i++)
				{
					var ii = this.info[i];
					saveStr += '{ mode: "{0}", ptn: "{1}", str: "{2}", tgt: "{3}", n: "{4}", url: "{5}"}, '.format(
						e(ii.mode), e(ii.ptn), e(ii.str), e(ii.tgt), e(ii.n), e(ii.url) );
				}
				saveStr += "]";
				Skin.CommonPref.writeGlobalObject("ReplaceStr", saveStr);
			},
			addPattern: function ReplaceStr_addPattern(ptn)
			{
				//<ex>?�u���Ώۂ̕�����\t�u��������?\t?�u���Ώ�?\t?<n>?�Ώ�URL/�^�C�g��?
				if(ptn.match(/^(<([^>]*)>)?([^\t]*)\t([^\t]*)\t?([^\t]*)\t?(<([0-5])>)?(.*)/i))
				{
					var c = {
						mode: RegExp.$2.toLowerCase() || "ex",
						ptn:  RegExp.$3, str:  RegExp.$4,
						tgt:  RegExp.$5 || "all",
						n:    RegExp.$7 || "6",  url:  RegExp.$8,
					};
					if (!c.ptn.length || (this.urlFilter[c.n] && (this.urlFilter[c.n](c.url, Skin.Thread.Info.Url + "/" + Skin.Thread.Info.Title))))
					{
						this.info.push(c);
						return;
					}
				}
				Notice.add($C("messageInvalidReplaceStr").format(ptn));
			},
			replace: function ReplaceStr_replace(node)
			{
				if (!this.info) return;
				if (node.tagName != "ARTICLE") return;
				for (var i=0; i< this.info.length; i++)
				{
					var c = this.info[i];
					if(!c.convert) c.convert = this.createConverter(c);
					c.convert(node);
				}
			},
			createConverter: function ReplaceStr_createConverter(c)
			{
				var ptn = this.pattern[c.mode] || this.pattern.ex;
				var reg = ptn(c.ptn, this.escapeRegPtn);
				var sel = this.selector[c.tgt] || this.selector.all;
				var str = c.str;
				return function ReplaceStr_createConverter_replacement(node)
				{
					var s = sel(node);
					s.innerHTML = s.innerHTML.replace(reg, str);
				};
			},
			escapeRegPtn: function ReplaceStr_escapteRegPtn(ptn)
			{
				return ptn.replace(/([\\\/\.\+\-\*\[\(\)\]\{\}\$\|])/g,"\\$1");
			},
			urlFilter: [
				function urlFilter_n0(p, u){ return u.indexOf(p) >= 0; },
				function urlFilter_n1(p, u){ return u.indexOf(p) <  0; },
				function urlFilter_n2(p, u){ return u == p; },
				function urlFilter_n3(p, u){ return u != p; },
				function urlFilter_n4(p, u){ return u.match(p); },
				function urlFilter_n5(p, u){ return !u.match(p); },
				function urlFilter_n6(p, u){ return true; },
			],
			selector: {
				all:  function ReplaceStr_nodeSelector_all(node){ return node; },
				name: function ReplaceStr_nodeSelector_name(node){ return node.children[0].children[3]; },
				mail: function ReplaceStr_nodeSelector_mail(node){ return node.children[0].children[5]; },
				date: function ReplaceStr_nodeSelector_date(node){ return node.children[0].children[1]; },
				msg:  function ReplaceStr_nodeSelector_msg(node){ return node.children[1]; },
				id:   function ReplaceStr_nodeSelector_id(node){ return node.children[0].children[2]; },
				be:   function ReplaceStr_nodeSelector_id(node){ return node.children[0].children[4]; },
			},
			pattern: {
				ex: function ReplaceStr_pattern_ex(ptn, esc){ return new RegExp(esc(ptn), "g"); },
				ex2: function ReplaceStr_pattern_ex2(ptn, esc){ return new RegExp(esc(ptn), "ig"); },
				rx: function ReplaceStr_pattern_rx(ptn, esc){ return new RegExp(ptn, "g"); },
				rx2: function ReplaceStr_pattern_rx2(ptn, esc){ return new RegExp(ptn, "ig"); },
				rx3: function ReplaceStr_pattern_rx2(ptn, esc){ return new RegExp(ptn, "igm"); },
			},
		},
	},
	Navigator: {
		init: function Navigator_init()
		{
			//���X��/�O�X�����
			this.nextThread = this.loadNextThreadInfo();
			this.prevThread = this.searchPrevThread();
		},
		toggle: function Navigator_toggle()
		{
 			PopupUtil.toggle($("Menu_Navi"), Skin.Thread.Navigator.getNavigation(), true, $C("popupCaptionNavigation"));
 		},
 		open: function Navigator_open()
 		{
 			if (!$("navigation")) this.toggle();
 		},
 		close: function Navigator_close()
 		{
 			if ($("navigation")) this.toggle();
 		},
		getNavigation: function Navigation_getNavigation()
		{
			if (!this._navi)
			{
				navi = document.createElement("NAV");
				navi.id = "navigation";
				var html = "";
				
				//Chapter
				html += '<h1>' +$C("navigatorChapterTitle")+ '</h1><ul>';
				var w = Preference.ChapterWidth;
				var m = Skin.Thread.Info.Total;
				for (var i=0; i< (m/w); i++)
				{
					html+= '<li><a class="navchapter">{0}-{1}</a></li>'.format(i*w+1, (i+1)*w);
				}
				html += '<li><a class="navprevchapter">' +$C("navigatorChapterNext")+ '</a></li>';
				html += '<li><a class="navnextchapter">' +$C("navigatorChapterPrev")+ '</a></li>';
				html += '</ul>';
				
				//BacklogWidth
				html += '<h1>' +$C("navigatorBacklogTitle")+ '</h1><ul>';
				var backlogWidths = ["l10", "l50", "l100", "l250", "l500", "l750"];
				for (var i=0; i<backlogWidths.length; i++)
				{
					html+= '<li><a class="navbacklog">{0}</a></li>'.format(backlogWidths[i]);
				}
				html+= '<li><a class="navbacklogall">' +$C("navigatorBacklogAll")+ '</a></li>';
				//���̑�
				html += '<h1>' +$C("navigatorMiscTitle")+ '</h1><ul>';
				html += '<li><form onsubmit="Skin.Thread.Message.deployTo(jumpto.value);$M(jumpto.value).focus();return false;">' +$C("navigatorMiscJump")+ '<input type="text" size="4" name="jumpto" id="navjumpto"></form></li>';
				html += '<li><a class="navboardlist">' +$C("navigatorMiscList")+ '</a></li>';
				html += '<li><a class="navprevthread">' +$C("navigatorMiscPrev")+ '</a></li>';
				html += '<li><a class="navnextthread">' +$C("navigatorMiscNext")+ '</a></li>';
				html += '</ul>';
	
				navi.innerHTML = html;
				this._navi = navi;
			}
			return this._navi.cloneNode(true);
		},
		isNavigationElement: function Navigator_isNavigationElement(e)
		{
			switch(e.className)
			{
				case "navchapter":
				case "navprevchapter":
				case "navnextchapter":
				case "navbacklog":
				case "navbacklogall":
				case "navboardlist":
				case "navprevthread":
				case "navnextthread":
					return true;
				default:
					return false;
			}
		},
		invokeNavigation: function Navigator_invokeNavigation(e)
		{	//altkey�̏�ԂƂ���荞��ŁA�ʃE�B���h�E�\���Ƃ��������ׂ����H
			var c = e.textContent;
			switch(e.className)
			{
				case "navchapter":
				case "navbacklog":
					this.goto(c);
					break;
				case "navbacklogall":
					this.goto("");
					break;
				case "navprevchapter":
					this.gotoPrevChapter();
					break;
				case "navnextchapter":
					this.gotoNextChapter();
					break;
				case "navboardlist":
					this.gotoThreadList();
					break;
				case "navprevthread":
					this.gotoPrevThread();
					break;
				case "navnextthread":
					this.gotoNextThread();
					break;
				default:
					return;
			}
		},
		goto: function Navigator_goto(range)
		{
			window.location.href = Skin.Thread.Info.Server + Skin.Thread.Info.Url + range;
		},
		gotoPrevChapter: function Navigator_gotoPrevChapter(w)
		{
			if (!w) w = Preference.ChapterWidth;
			var max = Skin.Thread.Message.deployedMin - 1;
			var min = max - w - 1;
			if (min < 0) min = 1;
			if (max < min) max = min;
			this.goto(min + "-" + max);
		},
		gotoNextChapter: function Navigator_gotoNextChapter(w)
		{
			if (!w) w = Preference.ChapterWidth;
			var min = Skin.Thread.Message.deployedMax +1;
			var max = min + w - 1;
			if (min < 0) min = 1;
			if (max < min) max = min;
			this.goto(min + "-" + max);
		},
		gotoThreadList: function Navigator_gotoThreadList()
		{
			window.location.href = "bbs2ch:board:" + Skin.Thread.Info.Board;
		},
		gotoPrevThread: function Navigator_gotoPrevThread(w)
		{
			if (!w) w = Preference.ChapterWidth;
			if (this.prevThread.url)
			{
				window.location.href = Skin.Thread.Info.Server + this.prevThread.url + "l" + w;
			}
		},
		gotoNextThread: function Navigator_gotoNextThread(w)
		{
			if (!w) w = Preference.ChapterWidth;
			if (this.nextThread.url)
			{
				window.location.href = Skin.Thread.Info.Server + this.nextThread.url + "l" + w;
			}
		},
		checkNextThread: function Navigator_checkNextThread(anchor, node)
		{
			if (this.nextThread.userDecided) return;			//���[�U�[�����߂����X��������Ƃ��A�������Ȃ�
			if (!Preference.EnableNextThreadSearch) return;		//�@�\����
			if (!anchor)return;
			if (!node) node = DOMUtil.getDecendantNode(anchor, "ARTICLE");
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
		setNextThread: function Navigator_setNextThread(href, ud, nodeNo)
		{	//ud: ���[�U�[�����߂����H true�̂Ƃ��A����ɏ㏑������Ȃ���Ԃŏo�Ă���B
			var url = new URL(href);
			ud = ud ? true : false;	//�^�U�l�̐��K��
			var nextThread = { url: href, id: url.threadId, userDecided: ud, linkedNode: nodeNo};
			this.nextThread = nextThread;
			this.saveNextThreadInfo(nextThread);	//TODO::�����Ŗ���ĂԂƕ��ׂ��|����ꍇ�����邩���H����ȍ~���v���낤���ǁB
			document.body.dataset.nextThread = nextThread.url || "";
		},
		saveNextThreadInfo: function Navigator_saveNextThreadInfo(nextThread)
		{
			var saveStr = '{url: "{0}", id: "{1}", userDecided: {2}, linkedNode: {3} }'
			              .format(nextThread.url, nextThread.id, nextThread.userDecided, nextThread.linkedNode);
			Skin.CommonPref.writeThreadObject("nextThread", saveStr);
		},
		loadNextThreadInfo: function NavigatorloadNextThreadInfo(objStr)
		{
			objStr = objStr ? objStr : Skin.CommonPref.readThreadObject("nextThread");
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
		searchPrevThread: function Navigator_searchPrevThread()
		{
			var This = this;
			var ret = {url: null};
			Skin.CommonPref.foreach("nextThread", function searchPrevTheread_checker(key, dat)
			{
				var info = This.loadNextThreadInfo(dat);
				if (info.id == Skin.Thread.threadId)
				{	//URL => ���̃A�h���X�̐����̂Ƃ����key�̖����̐����Œu������������
					if (key.match(/(\d+)$/))
					{
						var num = RegExp.$1;
						var url = Skin.Thread.Info.Url.replace(/\/(\d+)\/$/, function searchPrevThread_replacement(a,$1){	return "/" + num + "/"; });
						ret = {url: url};
					}
				}
			});
			document.body.dataset.prevThread = ret.url || "";	//���ꂪ�����ł����̂񂩂ȁH
			return ret;
		},
	},
},
Services: {
	Marker: {
		service: new Array(),
		
		init: function MarkerServices_init()
		{
			NewMark.init();
			Bookmark.init();
			Pickup.init();
			Ignore.init();
			Tracker.init();
			this.push(NewMark);
			this.push(Bookmark);
			this.push(Pickup);
			this.push(Ignore);
			this.push(Tracker);
		},
		
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
		nodeLoaded: function MarkerServices_nodeLoaded(nodes)
		{
			for(var i=0, j=this.service.length; i<j;i++)
			{
				var s = this.service[i].nodeLoaded(nodes);
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
	},
	OutLink: {
		getOutlinkPlugin: function OutlinkServices_getOutlinkPlugin(node)
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
	},
	AutoUpdate: {
		begin: function AutoUpdate_begin()
		{
			if (this.running) return;
			this.running = true;
			document.body.dataset.autoload = "y";
			this.autoTickCount = 0;
			this.autoTimer = setInterval(this._check.bind(this), 1000);
		},
		end: function AutoUpdate_end()
		{
			if (!this.running) return;
			this.running = false;
			document.body.dataset.autoload = "";
			clearInterval(this.autoTimer);
			this.autoTimer = 0;
		},
		toggle: function AutoUpdate_toggle()
		{
			if (this.running)
			{
				this.end();
			}
			else
			{
				this.begin();
			}
		},
		_check: function AutoUpdate__check()
		{
			if (++this.autoTickCount >= Preference.AutoReloadInterval)
			{
				Skin.Thread.checkNewMessage();
				this.autoTickCount = 0;
			}
		},
	},
},
ResMenu: {
	init: function ResMenu_init()
	{
		this._menu = $("resMenu");
		this._menu.parentNode.removeChild(this._menu);
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
},
BoardPane: {
	init: function BoardPane_init()
	{
		this.container = $("boardPane");
		this.container.innerHTML = "";	//�S�q���E��

		this.boardList = document.createElement("IFRAME");
		this.boardList.id = "boardList";

		this.container.appendChild(this.boardList);
	},
	toggle: function BoardPane_toggle()
	{
		if (!this.container) this.init();
		this._size = this._size ? 0 : window.innerHeight /2;
		this.update();
	},
	update: function BoardPane_update()
	{
		if (!this.container) this.init();
		this.container.style.height = this._size + "px";
		if (this._size)
		{
			var url = "bbs2ch:board:" + Skin.Thread.Info.Board;
			if (!this.boardList.src) this.boardList.src = url;
		}
	},
},
Finder: {
	init: function Finder_init()
	{
		this.form = document.createElement("DIV");
		this.form.id = "finder";
		this.form.innerHTML =
			'<form id="fform" onsubmit="Skin.Finder.express();return false;">' +
			'<input type="text" size="40" name="q">' +
			'<input type="submit" value="' +$C("finderSubmit")+ '">' +
			'<br>' +
			'<regend><input type="checkbox" name="r">' +$C("finderRegExp")+ '</regend>' +
			'<regend><input type="checkbox" name="i">' +$C("finderCheckCase")+ '</regend>' +
			'<regend><input type="checkbox" name="p">' +$C("finderOnlyPickup")+ '</regend>' +
			'<span id="fformerr"></span>' +
			'</form>' ;
	},
	showing: function Finder_showing()
	{
		return (this.popup != null);
	},
	toggleExpressMode: function Finder_toggleExpressMode()
	{
		if (this.showing())
		{
			this.leaveExpressMode();
		}
		else
		{
			this.enterExpressMode();
		}
	},
	enterExpressMode: function Finder_enterExpressMode()
	{
		if (!this.form) this.init();
		if (document.body.dataset.expressMode != "y")
		{
			var content = this.form;
			var p = new Popup();
			p.closeOnMouseLeave = false;
			p._init("Menu_Finder");
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
		Skin.Thread.Message.foreach(function Finder_markFound(node){
			node.dataset.express = (!pick || node.dataset.pickuped =="y") && exp.test(node.textContent) ? "y" : "n";
		}, false);
	},
	expressReffer: function Finder_expressReffer(no)
	{
		var t = Skin.Thread.Message.Structure.getReplyIdsByNo(no);
		t = t ? t.clone() : [];
		t.push(no);
		Skin.Thread.Message.foreach(function Finder_markReffer(node){
			node.dataset.express = t.include(node.dataset.no) ? "y" : "n";
		}, false);
	},
	expressTracked: function Finder_expressTracked()
	{
		Skin.Thread.Message.foreach(function Finder_markTracked(node){
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
},
Viewer: {
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
			var op = Skin.Services.OutLink.getOutlinkPlugin(a);
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
				this._entries[href].addRelation(parseInt(DOMUtil.getDecendantNode(a, "ARTICLE").dataset.no));
			}
		}
	},
	enterViewerMode: function Viewer_enterViewerMode()
	{
		if (document.body.dataset.mediaview != "y")
		{
			var c = document.createElement("DIV");
			c.id = "ViewerContainer";
			var buttons = [ {name: "home", onclick: "Skin.Viewer.home();"},
				{name: "first", onclick: "Skin.Viewer.first();"},
				{name: "prev", onclick: "Skin.Viewer.prev();"},
				{name: "next", onclick: "Skin.Viewer.next();"},
				{name: "last", onclick: "Skin.Viewer.last();"},
				{name: "auto", onclick: "Skin.Viewer.toggleAuto();"},
				{name: "close", onclick: "Skin.Viewer.close();"} ];
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
			Skin.EventHandler.enter("viewer");
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
			Skin.EventHandler.leave("viewer");
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
			c.innerHTML = '<button name="play" onclick="Skin.Viewer.next();return false;"><button name="auto" onclick="Skin.Viewer.beginSlideshow();return false;">';
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
			DOMUtil.notifyRefreshInternal(ctrl);
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
},
Notice: {
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
		DOMUtil.notifyRefreshInternal(this.container);
	},
},
Util: {
	Popup: {
		toggle: function PopupUtil_toggle(target, content, closeOnMouseLeave, toTopBeforeHide, category)
		{
			if (target.__popup)
			{
				var p = target.__popup;
				if (!toTopBeforeHide || (p.isTopLevelPopup(category)))
				{	//�g�b�v���x���Ɉ�x�o���Ȃ����A�g�b�v���x���̂Ƃ��N���[�Y
					p.close();
				}
				else
				{	//�g�b�v���x���Ɉ�x�o��
					p.toTop();
				}
			}
			else
			{
				var p = new Popup();
				p.closeOnMouseLeave = closeOnMouseLeave;
				p._init(target);
				p.onClose = this._onCloseHandler.bind(target);
				target.__popup = p;
				p.show(content);
			}
		},
		toggleResPopup: function PopupUtil_toggleResPopup(target, ids, closeOnMouseLeave, caption)
		{
			if (target.__popup)
			{
				target.__popup.close();
			}
			else if (ids)
			{
				ids = ($A(ids)).sort(function _sort(a,b){return a-b;});
				Skin.Thread.Message.prepare(ids);
				var p = new ResPopup();
				p.closeOnMouseLeave = closeOnMouseLeave;
				p.onClose = this._onCloseHandler.bind(target);
				target.__popup = p;
				p.popup(ids, target, caption);
			}
		},
		_onCloseHandler: function PopupUtil__onCloseHandler()
		{
			this.__popup = null;
		},
		isPopup: function PopupUtil_isPopup(e)
		{
			return this.getPopup(e) != null;
		},
		getPopup: function PopupUtil_getPopup(e)
		{
			while (e)
			{
				if (e.popup) return e.popup;
				e = e.parentNode;
			}
			return null;
		},
	},
	String: {
		toNarrowString: function StringUtil_toNarrowString(src)
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
		timestamp: function StringUtil_timestamp(d)
		{
			if (!d) d = new Date();
			var h=d.getHours();
			var m=d.getMinutes();
			var s=d.getSeconds();
			if(m<10)m="0"+m;
			if(s<10)s="0"+s;
			return h+":"+m+":"+s;
		},
		splitResNumbers: function StringUtil_splitResNumbers(str)
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
	},
	Dom: {
		isDecendantOf: function DOMUtil_isDecendantOf(e, id)
		{
			if (e.id == id) return e;
			if (e.parentNode  == null) return null;
			return this.isDecendantOf(e.parentNode, id);
		},
		getDecendantNode: function DOMUtil_getDecendantNode(e, tagName)
		{
			if (e.tagName == tagName) return e;
			if (e.parentNode  == null) return null;
			return this.getDecendantNode(e.parentNode, tagName);
		},
		getDecendantNodeByData: function  DOMUtil_getDecendantNodeByClass(e, x, v)
		{	//����ǉ��f�[�^�̒l�����e���A���B
			if (e.dataset && (e.dataset[x] == v))return e;
			if (e.parentNode == null) return null;
			return this.getDecendantNodeByData(e.parentNode, x, v);
		},
		isFixedElement: function DOMUtil_isFixedElement(e)
		{
			try
			{
				var style = document.defaultView.getComputedStyle(e, null);
				if (style.position == "fixed") return true;
				if (e.parentNode == null) return false;
				return this.isFixedElement(e.parentNode);
			} catch(e) { return false; }
		},
		getElementPagePos: function DOMUtil_getElementPagePos(e)
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
		notifyRefreshInternal: function DOMUtil_notifyRefreshInternal(e)
		{
			var element = e;
			element.dataset.refreshState = "refresh";
			setTimeout(function _notifyTimeout(){element.dataset.refreshState = "";}, 15);
		},
	},
},
EventHandler: {
	init: function EventHandler_init()
	{
		this.mode = "thread";
		document.addEventListener("keydown", this.keydown.bind(this),false);
		document.addEventListener("mouseover", this.mouseOver.bind(this), false);
		document.addEventListener("mousedown", this.mouseDown.bind(this), false);
		document.addEventListener("mouseup", this.mouseUp.bind(this), false);
		document.addEventListener("mousemove", this.mouseMove.bind(this), false);
		document.addEventListener("click",     this.mouseClick.bind(this), false);
		document.addEventListener("dblclick",  this.mouseDblClick.bind(this), false);
		document.addEventListener("b2raboneadd", this.aboneImmidiate.bind(this), false);
		document.addEventListener("DOMMouseScroll", this.mouseWheel.bind(this), false);
		document.addEventListener("animationstart", this.animationStart.bind(this),false);
		document.addEventListener("animationend", this.animationEnd.bind(this),false);
	},
	enter: function EventHandler_enter(mode)
	{	//�{���͂��������ʑJ�ڂ��`���Ă���ɍ��킹�ď���ɒǏ]���ׂ��Ȃ񂾂낤���ǖʓ|������̂ŕ��ʂɃ��[�h�㏑��
		this.mode = mode;
	},
	leave: function EventHandler_leave(mode)
	{
		this.mode = "thread";
	},
	keydown: function EventHandler_keydown(e)
	{
		var vk = "";
		if (e.shiftKey) vk += "Shift";
		if (e.ctrlKey)  vk += "Ctrl";
		if (e.altKey)   vk += "Alt";
		var c = e.which;
		if (this.specialKey[c])
		{
			vk += this.specialKey[c];
		}
		else if ((c >= 48) && (c<=90))
		{
			vk += String.fromCharCode(c);
		}
		else if ((c >= 96) && (c <= 105))
		{
			vk += "NUM" + (c-96);
		}
		else if ((c >=112) && (c <= 123))
		{
			vk += "F" + (c-111);
		}
		if (e.target.className == "KeyCheck")
		{
			e.target.value = vk;
		}
		else if (e.target.tagName == "INPUT")
		{
		}
		else if (this.keyAssign[this.mode] && this.keyAssign[this.mode][vk])
		{
			var command = this.keyAssign[this.mode][vk];
			Macro._invoke(command);
			e.preventDefault();
		}
	},
	keyAssign: {
		thread: {
			Enter:	"Write",
			AltEnter:	"Write",
			AltW:	"Write",
			AltA:	"Viewer",
			AltD:	"Config",
			AltZ:	"Finder",
			AltI:	"Preview",
			AltJ:	"Jump",
			AltN:	"FocusNew",
			AltR:	"Check",
			AltP:	"expressPickup",
			AltX:	"BoardPane",
			AltNum0:	"FocusEnd",
			AltNum1:	"FocusTop",
			AltNum2:	"FocusBookmark",
			AltNum3:	"FocusNew",
			CtrlSpace:	"Check",
			ShiftCtrlSpace:	"AutoCheck",
		},
		viewer: {
			Escape:	"Viewer.Exit",
			Left:	"Viewer.Prev",
			PageUp:	"Viewer.Prev",
			Enter:	"Viewer.Next",
			Space:	"Viewer.Next",
			Right:	"Viewer.Next",
			PageDown:	"Viewer.Next",
			End:	"Viewer.Last",
			Down:	"Viewer.Last",
			Home:	"Viewer.First",
			Up: 	"Viewer.First",
		},
	},
	specialKey: {
		8: "BS",
		9: "Tab",
		13: "Enter",
		19: "Pause",
		27: "Esc",
		28: "Convert",		//	�ϊ�
		29: "NonConvert",	//	���ϊ�
		32: "Space",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "Left",
		38: "Up",
		39: "Right",
		40: "Down",
		45: "Insert",
		46: "Delete",
		91: "LeftWin",
		92: "RigthWin",
		93: "App",
		106: "*",
		107: ";",
		107: "+",
		109: "-",
		110: ".",
		111: "/",
		144: "NumLock",
		145: "ScrollLock",
		188: ",",
		190: ".",
		191: "/",
		192: "@",
		219: "[",
		220: "BackSlash",
		221: "]",
		222: "^",
		226: "_",
		240: "CapsLock",
		242: "Hiragana",
	},
	mouseDown: function EventHandler_mouseDown(aEvent)
	{
		Skin.Thread.updateFetchedOnCheckNewMessage = true;
		if (this._dragDrop)return;
		var t = aEvent.target;
		if ((t.className == "popup") && (!t.popup.fixed))
		{	//�Œ�łȂ��|�b�v�A�b�v�̓q�Q�̂Ƃ�����h���b�O�ł���
			this._dragDrop = new PopupDragDrop(t, aEvent);
			aEvent.preventDefault();
		}
	},
	mouseUp: function EventHandler_mouseDown(aEvent)
	{
		if (this._dragDrop && (this._dragDrop.which == aEvent.button))
		{
			this._dragDrop.drop(aEvent);
			this._dragDrop = null;
		}
	},
	mouseMove: function EventHandler_mosueMove(aEvent)
	{
		Skin.Thread.updateFetchedOnCheckNewMessage = true;
		if (this._dragDrop)
		{
			this._dragDrop.drag(aEvent);
			aEvent.preventDefault();
			return;
		}
	},
	mouseOver: function EventHandler_mouseOver(aEvent)
	{
		var t = aEvent.target;
		if (DOMUtil.isDecendantOf(t, "resMenu"))
		{	//���X���j���[�Ƀ|�C���g �� �������Ȃ�
			//(resMenu��Article�̎q�v�f�ɂȂ�̂ŁA���ꂪ�Ȃ��Ɗ����Ă��܂�
			return;
		}
		var res = DOMUtil.getDecendantNode(t, "ARTICLE");
		if (res != null)
		{	//���X�̏�Ƀ|�C���g �� ���X���j���[��(���ԍ���)�����Ă���
			var tid = setTimeout(Skin.ResMenu.attach.bind(Skin.ResMenu, res), Preference.ResMenuAttachDelay);
			res.addEventListener("mouseout",
				function cancelHover(){
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
			var p = Skin.Services.OutLink.getOutlinkPlugin(t);
			if (p) p.popupPreview(t, aEvent);
		}
	},
	mouseClick: function EventHandler_mouseClick(e)
	{
		var t = e.target;
		var cancel = false;
		if (t.id && (this.IdClickHandler[t.id]))
		{
			cancel = this.IdClickHandler[t.id](t, e);
		}
		if (t.className && (this.ClassClickHandler[t.className]))
		{
			cancel = this.ClassClickHandler[t.className](t, e);
		}
		if (t.dataset.action)
		{
			var M = $M(DOMUtil.getDecendantNode(t, "ARTICLE"));
			if (M[t.dataset.action]) M[t.dataset.action]();
		}
		if (Skin.Thread.Navigator.isNavigationElement(t))
		{
			Skin.Thread.Navigator.invokeNavigation(t);
		}
		if (PopupUtil.isPopup(t))
		{
			var popup = PopupUtil.getPopup(t);
			if (popup.floating && !popup.isTopLevelPopup())
			{
				popup.toTop();
			}
		}
		if(cancel){
			e.preventDefault();
			e.stopPropagation();
		}
	},
	IdClickHandler: {
		footer: 			Macro.Notice,
		Menu_Template: 		Macro.Template,
		Menu_Bookmark: 		Macro.FocusBookmark,
		Menu_ResetBookmark:	Macro.ResetBookmark,
		Menu_PopupPickups:	Macro.PopupPickup,
		Menu_ExpressPickups: Macro.ExpressPickup,
		Menu_Finder:		Macro.Finder,
		Menu_PreviewOutlinks: Macro.Preview,
		Menu_Viewer:		Macro.Viewer,
		Menu_Deploy:		Macro.Check,
		Menu_DeployBackward: Macro.DeployBackward,
		Menu_AutoCheck:		Macro.AutoCheck,
		Menu_NewMark:		Macro.FocusNew,
		Menu_Navi:			Macro.Navigation,
		Menu_Config:		Macro.Config,
		RMenu_Ref: function IdClickhandler_RMenu_Ref(t, ev)
		{
			var node = DOMUtil.getDecendantNode(t, "ARTICLE");
			if (node.dataset.popupRefShowing != "y")
			{
				node.dataset.popupRefShowing = "y";
				var pp = new ResPopup(null);
				pp.onClose = function Rmenu_onClose(){ node.dataset.popupRefShowing = ""; node.refPopup = null; }
				pp.popup(Skin.Thread.Message.Structure.getReplyIdsByNo(node.dataset.no), "RMenu_Ref");
				node.refPopup = pp;	//��₱�����Ȃ邩��dom��obj�������������Ȃ����ǂȂ��E�E�E
			}
			else
			{
				if (node.refPopup) node.refPopup.close();
			}
		},
		RMenu_Track: function IdClickhandler_RMenu_Track(t, ev)
		{
			var node = DOMUtil.getDecendantNode(t, "ARTICLE");
			var tracking = Tracker.getTracker(node.dataset.no);
			if (tracking)
			{
				PopupUtil.toggleResPopup($("RMenu_Track"), tracking.getTrackingNumbers(), true, $C("popupCaptionTracking"));
			}
		},
		RMenu_Gear: function IdClickhandler_RMenu_Gear(t, ev)
		{
			if (t.enchantedGear)
			{
				t.enchantedGear.close();
			}
			else
			{
				var node = DOMUtil.getDecendantNode(t, "ARTICLE");
				var pp = new GearPopup(t);
				pp.showPopup(parseInt(node.dataset.no), DOMUtil.getElementPagePos(t), false);
			}
		},
	},
	ClassClickHandler: {
		resPointer: function ClassClickHandler_resPointer(t, ev)
		{
			if(t.textContent.match(/(\d+)/)) $M(RegExp.$1).focus();
			return true;
		},
		no: function ClassClickHandler_no(t, ev)
		{
			$M(DOMUtil.getDecendantNode(t, "ARTICLE")).toggleRefferPopup(t);
			return false;
		},
		id: function ClassClickHandler_id(t, ev)
		{
			$M(DOMUtil.getDecendantNode(t, "ARTICLE")).toggleIdPopup(t);
			return false;
		},
	},
	mouseDblClick: function EventHandler_mouseDblClick(e)
	{
		var t = e.target;
		if (t.tagName == "ARTICLE")
		{
			var flg = 0;
			if (e.shiftKey) flg += 1;
			if (e.ctrlKey) flg += 2;
			if (e.altKey) flg += 4;
			var method = Preference.OnResDblClick[flg];
			$M(t).invoke(method);
		}
		else if (t.id == "bpHandle")
		{
			Skin.BoardPane.toggle();
		}
		else if (t.className && (this.ClassDblClickHandler[t.className]))
		{
			this.ClassDblClickHandler[t.className](t, e);
		}
	},
	ClassDblClickHandler: {
		resPointer: function ClassDblClickHandler_resPointer(t, e)
		{
			if(t.textContent.match(/(\d+)/))
			{
				Skin.Thread.Message.deployTo(RegExp.$1);
				$M(RegExp.$1).focus();
			}
		},
		popup: function ClassDblClickHandler_popup(t, e)
		{
			t.popup.close();
		},
	},
	mouseWheel: function EventHandler_mouseWheel(e)
	{
		Skin.Thread.updateFetchedOnCheckNewMessage = true;
		if (e.target.id == "RMenu_Gear")
		{
			var node = DOMUtil.getDecendantNode(e.target, "ARTICLE");
			if (e.target.enchantedGear)
			{
				if (e.target.enchantedGear.origin != parseInt(node.dataset.no))
				{	//adjust
					e.target.enchantedGear.changePos(e.target);
					e.target.enchantedGear.changeOrigin(parseInt(node.dataset.no));
					e.preventDefault();
					return;
				}
			}
			else
			{
				var pp = new GearPopup(e.target);
				pp.showPopup(parseInt(node.dataset.no), DOMUtil.getElementPagePos(e.target), false);
				e.preventDefault();
				return;
			}
		}
		else if (e.target.className == "id")
		{
			e.preventDefault();
			var node = DOMUtil.getDecendantNode(e.target, "ARTICLE");
			if (e.detail < 0) $M(node).focusPrevId() ; else $M(node).focusNextId();
		}
		var t = DOMUtil.getDecendantNodeByData(e.target, "gearEnchanted", "y");
		if (t)
		{
			t.enchantedGear.step(e.detail < 0 ? -1 : 1);
			e.preventDefault();
			return;
		}
		t = DOMUtil.getDecendantNodeByData(e.target, "popupEnchanted", "y");
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
			&& (Skin.Thread.Message.deployedMin != 1))
		{
			if (--this.LoadOnWheelDelta < -Preference.LoadOnWheelDelta)
			{
				this.LoadOnWheelDelta = 0;
				var focusTo = Skin.Thread.Message.deployedMin - 1;
				Skin.Thread.Message.deployTo(focusTo-Preference.LoadOnWheelWidth);
				$M(focusTo).focus();
			}
			e.preventDefault();
		}
		else if (Preference.LoadForwardOnBottomWheel
			 && (window.scrollY >= document.body.offsetHeight - window.innerHeight - 20)
			 && (e.detail > 0)
			 && (Skin.Thread.Message.deployedMax != Skin.Thread.Info.Total))
		{
			if (++this.LoadOnWheelDelta > Preference.LoadOnWheelDelta)
			{
				this.LoadOnWheelDelta = 0;
				var focusTo = Skin.Thread.Message.deployedMax + 1;
				Skin.Thread.Message.deployTo(focusTo + Preference.LoadOnWheelWidth);
				$M(focusTo).focus();
			}
		}
		else
		{
			this.LoadOnWheelDelta = 0;
		}
	},
	animationStart: function EventHandler_animationStart(aEvent)
	{
		//�A�j���[�V�������̃��X�g���uAndClose�v�ł���ꍇ�A�J�n����display���������iCSS�̒�`�ɏ]���j
		if (aEvent.animationName.match(/AndClose$/))
		{
			aEvent.target.style.display = "";
		}
	},
	animationEnd: function EventHandler_animationEnd(aEvent)
	{
		//�A�j���[�V�������̃��X�g���uAndClose�v�ł���ꍇ�A�I������display��none�ɂ���
		if (aEvent.animationName.match(/AndClose$/))
		{
			aEvent.target.style.display = "none";
		}
	},
	aboneImmidiate: function EventHandler_aboneImmidiate(aEvent)
	{
		var q   = aEvent.sourceEvent.type;	//�N�G��
		var filter = [
			function aboneHelper_Nm(node){return node.children[0].children[3].textContent.indexOf(q)>=0;},	//.nm
			function aboneHelper_Ml(node){return node.children[0].children[5].textContent.indexOf(q)>=0;},	//.ml
			function aboneHelper_Id(node){return node.dataset.aid.indexOf(q)>=0;},	//data-aid
			function aboneHelper_Ct(node){return node.children[1].textContent.indexOf(q)>=0;},	//.ct
		];
		Skin.Thread.Message.apply(function aboneHelper(node){
			node.dataset.ng = "y";
		}, filter[aEvent.detail], true);
	},
},
};


/* ��URL���� ������������������������������������������������������������������ */
function URL(url){ this.init(url); }
URL.prototype = {
	init: function URL_init(url)
	{
		try
		{
			this.url = url;
			//bbs2chreader/chaika �X���b�h�\��URL
			this.isReaderUrl = (this.startWith(Skin.Thread.Info.Server));
			if(this.isReaderUrl) url = url.substr(Skin.Thread.Info.Server.length);
			//bbs2chreader/chaika �X�L��
			this.isReaderSkinUrl = (this.startWith(Skin.Thread.Info.Skin));
			//bbs2chreader/chaika �ꗗ
			var readerBoardScheme = "bbs2ch:board:";
			this.isReaderBoardUrl = (this.startWith(readerBoardScheme));
			if(this.isReaderBoardUrl) url = url.substr(readerBoardScheme.length);
			readerBoardScheme = "chaika://board/";
			this.isReaderBoardUrl = (this.startWith(readerBoardScheme));
			if(this.isReaderBoardUrl) url = url.substr(readerBoardScheme.length);
			
			//�h���C���ƃp�X�̐؂蕪��
			if (url.match(/([a-z]+):\/\/([^\/]+)(.*)/i))
			{
				this.scheme = RegExp.$1;
				this.domain = RegExp.$2;
				this.path   = RegExp.$3;
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
				if (url.match(/^(.+\/read.cgi\/([^\/]+)\/([^\/]+))(\/(.+))?/))
				{
					this.threadUrl = RegExp.$1 + "/";
					this.boardName = RegExp.$2;
					this.threadNo  = RegExp.$3;
					if (RegExp.$5)
					{
						this.range = RegExp.$5;
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
		}
		catch(e)
		{
			this.invalidUrl = true;
			console.log("INVALID URL\t:" + url);
		}
		
		//console.log(this);
	},
	startWith: function URL_startWith(x)
	{
		return this.url.substr(0, x.length) == x;
	},
	shorten: function URL_shorten()
	{
		if (this.url.match(/^(([a-z]+):\/\/[^\/]+)(.+?)?([^\/]*\/?)$/i))
		{
			return RegExp.$1 + "/.../" + RegExp.$4;
		}
		return this.url;
	},
};

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
	checkNext: function loadManager_checkNext()
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
		if (!enableCache) req.setRequestHeader("If-Modified-Since", "Wed, 15 Nov 1995 00:00:00 GMT");	//�L���b�V������ǂ܂Ȃ�
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
	TextLoadManager.request = function TextLoadManager_request(obj)
	{
		var req = new XMLHttpRequest();
		req.onreadystatechange = this._loadCheck.bind(this, req, obj);
		req.open('GET', obj.href , true);
		if (!obj.enableCache) req.setRequestHeader("If-Modified-Since", "Wed, 15 Nov 1995 00:00:00 GMT");
		req.send(null);
	}
	TextLoadManager._loadCheck = function TextLoadManager__loadCheck(req, obj)
	{
		if (req.readyState==4)
		{
			obj.responseText = req.responseText;
			this.response(obj, ((req.status >= 200) && (req.status<300)) ? "OK" : "NG");
		}
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


/* ���^�u�R���g���[���������������������������������������������������������������� */
function TabElement(contents){ this.init(contents); }
TabElement.prototype = {
	init: function TabElement_init(contents)
	{	//contents��[{title, content}]�ł���Atitle��string, content�̓m�[�h(�̃N���[��)]
		var tabButtonContainer = document.createElement("DIV");
		tabButtonContainer.className="tabButtons";
		var tabPageContainer = document.createElement("DIV");
		tabPageContainer.className="tabPages";
		var container = document.createElement("DIV");
		container.className = "tabContainer";

		for(var i=0; i<contents.length; i++)
		{
			var t = contents[i].title;
			var c = contents[i].content;
			if (c.parentNode) c = c.clone(true);	//�N���̂��̂Ȃ�N���[�j���O���Ďg��
			c.style.display = i==0 ? "" : "none";
			var button = document.createElement("BUTTON");
			button.innerHTML = t;
			button.addEventListener("click", this.click.bind(this, i), false);
			
			tabButtonContainer.appendChild(button);
			tabPageContainer.appendChild(c);
		}
		container.appendChild(tabButtonContainer);
		container.appendChild(tabPageContainer);
		this.container = container;
	},
	click: function TabElement_click(activeNo)
	{
		var nodes = this.container.children[1].children;
		for(var i=0,j=nodes.length; i<j; i++)
		{
			nodes[i].style.display = i == activeNo ? "" : "none";
		}
	},
};

/* ���摜�T���l�C���������������������������������������������������������������� */
function ImageThumbnail(url, sz){this.thumbSize = sz; if(url) {this.init(url);}}
ImageThumbnail.prototype = {
	thumbSize: 200,		//�ő�T�C�Y
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
	ov.addEventListener("click", function ImageThumbnailOnClickOverlay_onClick(){ ov.parentNode.removeChild(ov); document.body.dataset.contentsOverlay = "";}, false);
	ov.addEventListener("DOMMouseScroll", function ImageThumbnailOnClickOverlay_DOMMouseScroll(e){ e.preventDefault(); } , false);
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
	ov.addEventListener("click", function ImageThumbnailOnClickOverlayFrame_onClick(){ ov.parentNode.removeChild(ov); document.body.dataset.contentsOverlay = ""; }, false);
	document.body.appendChild(ov);
}


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
			return (Skin.CommonPref.getGlobalObjectKey(this.storageKey) == key);
		}
		else
		{
			return (Skin.CommonPref.getThreadObjectKey(this.storageKey) == key);
		}
	},
	save: function MarkserService_save()
	{
		if (!this.storageKey) return;
		var str = this.getSaveStr();
		(this.global) ?
			Skin.CommonPref.writeGlobalObject(this.storageKey, str) : Skin.CommonPref.writeThreadObject(this.storageKey, str);
	},
	load: function MarkerService_load()
	{
		if (!this.storageKey) return;
		return (this.global) ?
			Skin.CommonPref.readGlobalObject(this.storageKey) : Skin.CommonPref.readThreadObject(this.storageKey);
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
		Skin.Thread.Message.foreach(function MarkerService_markInvoke(node){
			node.dataset[mark] = T.getMarkerClass(node);
		}, this.markAllNode);
		if(this.marked) this.marked();	//�}�[�N�㏈��
	},
	getMarkerClass: function MarkerService_getMarkerClass(node)
	{
		return "";
	},
	nodeLoaded: function MarkerService_nodeLoaded(nodes)
	{	//markAllNode��true�̂Ƃ��́A���[�h���ꂽ�Ƃ��ɂ��ꂪ��������B
		for(var i=0;i<nodes.length; i++)
		{
			nodes[i].dataset[this.mark] = this.getMarkerClass(nodes[i]);
		}
		if(this.marked) this.marked();	//�}�[�N�㏈��
	},
};

/* ���V���}�[�N������������������������������������������������������������ */
var NewMark = new MarkerService(false, null, "new", true);
	NewMark.init = function NewMark_init()
	{
		//�{����setMark�����ׂ��Ȃ񂾂낤���AresNew.html�ɂ�ă}�[�N�ςݏ�ԂɂȂ��Ă���͂��Ȃ̂ŏȗ��ł���B
		this.fetched = Skin.Thread.Info.Fetched;
		this.marked();
	}
	NewMark.getMarkerClass = function NewMark_getMarkerClass(node)
	{
		return (parseInt(node.dataset.no) > this.fetched) ? "y" : "";
	}
	NewMark._add = function NewMark_add(no)
	{
		this.fetched = no;
	}
	NewMark.marked = function NewMark_marked()
	{
		document.body.dataset.hasNew = (this.fetched == Skin.Thread.Info.Total) ? "" : "y";
	}
	NewMark.getSaveStr = NewMark._del = function NewMark_dmy(){}

/* ���u�b�N�}�[�N���������������������������������������������������������� */
var Bookmark = new MarkerService(false, "bm", "bm", true);
	Bookmark.init = function Bookmark_init()
	{
		this.no = 0;
		var no = parseInt(this.load());
		no = !no ? 0 : no;
		this.refresh(no, no);
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
		$("Menu_Bookmark").dataset.bm = this.getDeployMode(this.no);
		$("Menu_Bookmark").dataset.bmn= this.no;
	}
	Bookmark.focus = function Bookmark_focus()
	{
		Skin.Thread.Message.deployTo(this.no);
		$M(this.no).focus();
	}
	Bookmark.getDeployMode =  function ThreadMessages_getDeployMode(no)
	{	//�u�b�N�}�[�N�̈ʒu�ɂ����n(��),yb(�\���͈͂��O),y(�\���͈͓�),ya(�\���͈͂����)�̂����ꂩ��Ԃ�
		if (no <= 0)
		{
			return "n";
		}
		else if (no < Skin.Thread.Message.deployedMin)
		{
			return "yb";
		}
		else if (no > Skin.Thread.Message.deployedMax)
		{
			return "ya";
		}
		else
		{
			return "y";
		}
	}

/* ���s�b�N�A�b�v���������������������������������������������������������� */
var Pickup = new MarkerService(false, "pk", "pickuped", true);
	Pickup.init = function Pickup_init()
	{
		var pickups = this.load();
		if (!pickups) pickups = "";
		this.refresh(pickups, pickups);
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
			this.pickups.sort(function _sort(a,b){return a-b;});
			return true;
		}
		return false;
	}
	Pickup._del = function Pickup_del(no)
	{
		if (this.pickups.include(no))
		{
			this.pickups = this.pickups.filter(function Pickup_delFilter(item, index, array){ return item != no });
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
		$("Menu_Pickup").dataset.pk = this.pickups.length ? "y" : "n";
		$("Menu_Pickup").dataset.pkc= this.pickups.length;
	}

/* ���ʖ����������������������������������������������������������������� */
var Ignore = new MarkerService(false, "ig", "ignored", true);
	Ignore.init = function Ignore_init()
	{
		var ignores = this.load();
		if (!ignores) ignores = "";
		this.refresh(ignores, ignores);
	}
	Ignore.getSaveStr = function Ignore_getSaveStr()
	{
		return this.ignores + "";
	}
	Ignore._add = function Ignore_add(no)
	{
		if (!this.ignores.include(no))
		{
			this.ignores.push(no);
			this.ignores.sort(function _sort(a,b){return a-b;});
			return true;
		}
		return false;
	}
	Ignore._del = function Ignore_del(no)
	{
		if (this.ignores.include(no))
		{
			this.ignores = this.ignores.filter(function Ignore_delFilter(item, index, array){ return item != no });
			return true;
		}
		return false;
	}
	Ignore.refresh = function Ignore_refresh(nV, oV)
	{
		this.ignores = eval("[" + nV + "]");
		this.setMark();
	}
	Ignore.getMarkerClass = function Ignore_getMarkerClass(node)
	{
		return (this.ignores.include(node.dataset.no)) ? "y" : "";
	}

/* ���g���b�J�[������������������������������������������������������������ */
var Tracker =  new MarkerService(true, "tracker", "track", true);
	Tracker.init = function Tracker_init()
	{
		this._trackers = new Array();
		var trackers = this.load();
		if (!trackers) trackers = "";
		this.refresh(trackers, "");
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
		var node = Skin.Thread.Message.domobj[no];
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
		var tr = Skin.Thread.Message.domobj[no].dataset.track + "";
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
		Skin.Thread.Message.foreach(function TrackerEntry_traversal(node){
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
		if (!Skin.Thread.Message.isReady(no)) return 0;
		var node = Skin.Thread.Message.domobj[no];
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
		Skin.Thread.Message.foreach(function TrackerEntry_getNumber(node){
			if (tr.check(node.dataset.no) > 0)
			{
					res.push(node.dataset.no);
				}
			}, false);
		return res;
	},

};


/* ���O�������N�v���O�C�������������������������������������������������������� */

function OutlinkPlugin(type){ this.type = type; }
OutlinkPlugin.prototype = {
	posivility:  function OutlinkPlugin_posivility(href){ return 0; },
	getPreviewy: function OutlinkPlugin_getPreviewy(href, onload, isPopup){ return 0; },
	popupPreview: function OutlinkPlugin_popupPreview(anchor, ev)
	{
		if (anchor != null)
		{
			var tid = setTimeout(this._popup.bind(this, anchor), Preference.ResPopupDelay);
			anchor.addEventListener("mouseout", 
				function outlink_popupCancel(){
					clearTimeout(tid);
					anchor.removeEventListener("mouseout", arguments.callee, false);
				},false);
		}
	},
	_popup: function OutlinkPlugin__popup(anchor)
	{
		if (anchor.dataset.previewShowing!="y")
		{
			var p = new Popup();
			p._init(anchor);
			p.dontLimitSize = true;	//���m�ɂ���ĕύX�ł���悤�ɂ���������
			var c = this.getPreview(anchor.href, p.adjust.bind(p), true);
			if (c)
			{
				anchor.dataset.previewShowing = "y";
				var innerCont = document.createElement("DIV");
				innerCont.appendChild(c);
				p.container.dataset.popupCaption = anchor.href;
				p.show(innerCont);
				p.onClose = function outlinkplugin_popup_onClose(){ anchor.dataset.previewShowing = "n" };
			}
		}
	},
};

var OutlinkPluginForImage = new OutlinkPlugin(OUTLINK_IMAGE);
	OutlinkPluginForImage.posivility = function OutlinkPluginForImage_posivility(href)
	{
		if (href.match(/\.jpg$|jpeg$|bmp$|png$|gif$/i))
		{
			return 1;
		}
		return 0;
	}
	OutlinkPluginForImage.getPreview = function OutlinkPluginForImage_getPreview(href, onload, isPopup)
	{
		var p = (new ImageThumbnailOnClickOverlay(href,Preference.ImagePopupSize));
		p.onload = onload;
		return p.container;
	}

var OutlinkPluginForMovie = new OutlinkPlugin(OUTLINK_MOVIE);
var OutlinkPluginForNicoNico = new OutlinkPlugin(OUTLINK_MOVIE);
	OutlinkPluginForNicoNico.posivility = function OutlinkPluginForNicoNico_posivility(href)
	{	
		if(href.match(/http:\/\/www.nicovideo.jp\/watch\/sm\d+/i))
		{
			return 1;
		}
		return 0;
	}
	OutlinkPluginForNicoNico.getPreview = function OutlinkPluginForNicoNico_getPreview(href, onload, isPopup)
	{
		if(href.match(/http:\/\/www.nicovideo.jp\/watch\/(sm\d+)/i))
		{
			var c = document.createElement("DIV");
			var thurl = "http://ext.nicovideo.jp/thumb/" + RegExp.$1
			c.innerHTML = '<iframe width="312" height="176" src="{0}" scrolling="no" style="border:solid 1px #CCC;margin-top:12px;" frameborder="0"></iframe>'.format(thurl);
			return c;
		}
		return null;
	}

var OutlinkPluginForThread = new OutlinkPlugin(OUTLINK_2CH);
	OutlinkPluginForThread.posivility = function OutlinkPluginForThread_posivility(href)
	{
		//�{���AURL.maybeThread���m�F����΂悢���A���ʂȃA�N�V�����������̂ŏ����������o
		return  href.match(/\/read.cgi\//) ? 1 : 0;
	}
	OutlinkPluginForThread.getPreview = function OutlinkPluginForThread_getPreview(href, onload, isPopup)
	{
		if (!isPopup) return null;	//�|�b�v�A�b�v�ɂ����\�����Ȃ�
		var url = new URL(href);
		href = url.threadUrl;
		var html = '<input type="button" data-ref="{0}" class="icon_getthreadtitle" onclick="OutlinkPluginForThread.getThreadTitle(event)" title="' +$C("popupContentThreadTitle")+ '">';
		if (url.boardId == Skin.Thread.boardId)
		{
			html += '<input type="button" data-ref="{0}" class="icon_settonextthread" onclick="OutlinkPluginForThread.setToNextThread(event)" title="' +$C("popupContentThreadSetNext")+ '">';
		}
		var t = (this._titleBuffer[href]) ? this._titleBuffer[href] : $C("popupContentThreadDefault");
		var b = Skin.BoardList.getBoardName(url.boardId);
		html = html.format(href, t, b);
		var preview = document.createElement("DIV");
		preview.className = "threadtitlePopup";
		preview.dataset.board = b;
		preview.dataset.thread = t;
		preview.dataset.threadState = (this._titleBuffer[href]) ? "y" : "";
		preview.innerHTML = html;
		return preview;
	}
	OutlinkPluginForThread.getThreadTitle =  function OutlinkPluginForThread_getThreadTitle(aEvent)
	{
		var href = aEvent.target.dataset.ref;
		var html = TextLoadManager.syncGet(Skin.Thread.Info.Server + href + "1");
		if (html && (html.match(/<a id="threadName">(.+?)<\/a>/)))
		{
			this._titleBuffer[href]  = RegExp.$1;
		}
		var t = this._titleBuffer[href] || $C("popupContentThreadError");
		var preview = aEvent.target.parentNode;
		preview.dataset.thread = t;
		preview.dataset.titleState = (this._titleBuffer[href]) ? "y" : "e";
	}
	OutlinkPluginForThread.setToNextThread =  function OutlinkPluginForThread_setToNextThread(aEvent)
	{
		Skin.Thread.Navigator.setNextThread(aEvent.target.dataset.ref, true, 0);
		Notice.add($C("messageNextThreadSet").format(aEvent.target.dataset.ref));
	}
	OutlinkPluginForThread._titleBuffer = {};

var OutlinkPluginForDefault = new OutlinkPlugin(OUTLINK_ETC);
	OutlinkPluginForDefault.posivility = function OutlinkPluginForDefault_posivility(href)
	{
		return 1;
	}
	OutlinkPluginForDefault.getPreview = function OutlinkPluginForDefault_getPreview(href, onload)
	{
		var p = new ImageThumbnailOnClickOverlayFrame("http://img.simpleapi.net/small/" + href,Preference.ImagePopupSize);
		p.rel = href;
		return p.container;
	}

Skin.Services.OutLink.plugins = [OutlinkPluginForImage, OutlinkPluginForMovie, OutlinkPluginForNicoNico, OutlinkPluginForThread, OutlinkPluginForDefault];

/* ���|�b�v�A�b�v�������������������������������������������������������������� */
function Popup() { }
Popup.prototype = {
	closeOnMouseLeave: true,
	dontLimitSize: false,
	_init: function Popup_init(e)
	{	//e�͂Ȃɂ���|�b�v�A�b�v�����悤�Ƃ��Ă��邩�B�v�f�܂��͗v�f��ID���w�肷��B
		if (!e.tagName) e = $(e);
		if (!e)
		{
			console.log($C("messagePopupInitializedError"));
			console.log(e);
			e = document.body;	//�Ȃ���Ȃ��Ȃ�Ƃ肠�����G���[�ɂȂ�Ȃ��悤��Body�ɂ��Ƃ�
		}
		this.arranged = e;	//�K�p��I�u�W�F�N�g
		this.fixed = DOMUtil.isFixedElement(e);	//�K�p��I�u�W�F�N�g�͌Œ肳�ꂽ���́H
		
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
		var p = DOMUtil.getElementPagePos(e);
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
		if (this.parentPopup) this.parentPopup.unregistorChild(this);
	},
	//�T�C�Y����
	limitSize: function Popup_limitSize(pos)
	{
		if (this.dontLimitSize) return;
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
	float: function Popup_float()
	{
		if (!this.floating)
		{
			this.closeOnMouseLeave = false;
			this.floatingRect = DOMUtil.getElementPagePos(this.container.firstChild);
			this.floatingRect.pageX -= Preference.PopupLeft;
			this.floatingRect.pageY -= 4;
			this.container.dataset.floatingPopup = "y";
			this.container.style.left = this.floatingRect.pageX + "px";
			this.container.style.top  = this.floatingRect.pageY + "px";
			this.container.firstChild.style.marginLeft = "0px";
			if (this.parentPopup) this.parentPopup.unregistorChild(this);
			this.floating = true;
		}
		this.toTop();
	},
	offsetFloat: function Popup_float(dx, dy)
	{
		if (!this.floating) return;
		this.floatingRect.pageX += dx;
		this.floatingRect.pageY += dy;
		this.container.style.left = this.floatingRect.pageX + "px";
		this.container.style.top  = this.floatingRect.pageY + "px";
	},
	getPopupPos: function Popup_getPopupPos()
	{
		//�ʒu�v�Z(�A�����W����Ă���悤���̉��Ӓ������w���悤��)
		var pos = DOMUtil.getElementPagePos(this.arranged);
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
		popup.parentPopup = this;
	},
	unregistorChild: function Popup_unregistorChild(popup)
	{
		if (popup && (popup.parentPopup == this))
		{
			this.childPopups = this.childPopups.filter(function pupup_unregistor_checker(x){ return x != popup; });
			popup.parentPopup = null;
		}
	},
	isTopLevelPopup: function Popup_isTopLevelPopup(cls)
	{
		var container = $("popupContainer");
		var topLevelPopup = "";
		for(var i=0; i<container.children.length; i++)
		{
			var popup = container.children[i];
			if (popup.firstChild && (!cls || (popup.firstChild.className == cls)))
			{	//�{���͂��Ԃ��Ă邩�ǂ����Ŕ��肵���ق����ǂ��H
				topLevelPopup = popup;
			}
		}
		return topLevelPopup == this.container;
	},
	toTop: function Popup_toTop()
	{	//��񔲂��Ă܂�����邾��
		$("popupContainer").removeChild(this.container);
		$("popupContainer").appendChild(this.container);
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
				function ResPopup_cancel(){
					clearTimeout(tid);
					anchor.removeEventListener("mouseout", arguments.callee, false);
				},false);
		}
	}	
	ResPopup.prototype.popup =  function ResPopup_popup(obj, e, caption)
	{
		var ids;
		if (!e) e = obj;
		this._init(e);
		if (obj.tagName)
		{	//�v�f�B�A���J�[���ƐM����
			ids = StringUtil.splitResNumbers(obj.textContent);
			Skin.Thread.Message.prepare(obj.textContent);
			this.container.dataset.popupCaption = (caption||"") + obj.textContent;
		}
		else if (obj.length)
		{	//�z��E�E�E���Ƃ����Ȃ�
			ids = obj;
			//prepare�����̂��H
			this.container.dataset.popupCaption = caption;
		}
		else
		{	//���̑��E�E�E�K����
			ids = [obj];
			//prepare�����̂��H
			this.container.dataset.popupCaption = caption;
		}
		
		this.show(this.createContent(ids));
	}
	ResPopup.prototype.createContent = function resPopup_createContent(ids)
	{
		var pageWidth = Preference.ResPopupPageWidth || ids.length;
		var tabContents = new Array();
		var pageCount = Math.ceil(ids.length / pageWidth);
		for (var i=0; i<pageCount; i++)
		{
			var content = document.createElement("DIV");
			for(var index=i*pageWidth; (index < ids.length) && (index < (i+1)*pageWidth) ; index++)
			{
				var node = Skin.Thread.Message.getNode(ids[index], true);
				if (node != null) content.appendChild(node);
			}
			tabContents.push({title: ids[i*pageWidth] + "-", content: content});
		}
		if ((pageCount == 1) && !Preference.ResPopupAlwaysShowTabs)
		{
			return tabContents[0].content;
		}
		else
		{
			var tab = new TabElement(tabContents);
			return innerContent= tab.container;
		}
	}

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
		this.onClose = function GearPopup_onClose()
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
		c.dataset.popupCaption = $C("popupCaptionGear").format(n.dataset.no);
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
			this.container.dataset.popupCaption = $C("popupCaptionGear").format(n.dataset.no);
			this.content.appendChild(n);
			if (!this.floating) this.adjust();
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
		if (no > Skin.Thread.Info.Total) no = Skin.Thread.Info.Total;
		Skin.Thread.Message.prepare(no, no);
		this.no = no;
		return Skin.Thread.Message.getNode(no, true);
	};

/* ���h���b�O�h���b�v������������������������������������������������������������ */
function PopupDragDrop(popupContainer, aEvent){ this.init(popupContainer, aEvent);}
PopupDragDrop.prototype = {
	init: function PopupDragDrop_init(popupContainer, aEvent)
	{
		this.popupContainer = popupContainer;
		this.popup = popupContainer.popup;
		this.which = aEvent.button;
		this.origin = {clientX: aEvent.clientX, clientY: aEvent.clientY, pageX: aEvent.pageX, pageY: aEvent.pageY};
	},
	drag: function PopupDragDrop_drag(aEvent)
	{
		var dx = aEvent.clientX - this.origin.clientX;
		var dy = aEvent.clientY - this.origin.clientY;
		if (!this.procceed)
		{
			var d2 = dx*dx + dy*dy;
			if (d2 >= 3*3)
			{	//���a3�s�N�Z�����傫���������ƃh���b�O�J�n
				this.procceed = true;
				this.popup.float();
			}
		}
		else
		{
			this.popup.offsetFloat(dx, dy);
			this.origin = {clientX: aEvent.clientX, clientY: aEvent.clientY, pageX: aEvent.pageX, pageY: aEvent.pageY};
		}
	},
	drop: function PopupDragDrop_drop(aEvent)
	{
		this.proceed = false;
	},
}


/* ���r���[�A�̃G���g�������������������������������������������������������������� */
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
			this.relations.sort(function _sort(a,b){return a-b;});
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
			this.element.src = Skin.Thread.Info.Skin + "style/error.png";
		}
	},
	prepare: function ViewerEntry_prepare()
	{
		if (this.state == ViewerEntryState.PreLoad)
		{
			//console.log("preload request " + this.href);
			this.element = document.createElement("IMG");
			this.element.src =  Skin.Thread.Info.Skin + "style/loading.gif";
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

function ResManipulator(NodeOrNo){ this.init(NodeOrNo);}
ResManipulator.prototype = {
	init: function ResManipulator_init(NodeOrNo)
	{
		if (NodeOrNo.tagName && (NodeOrNo.tagName == "ARTICLE"))
		{
			this.node = NodeOrNo;
			this.no = parseInt(this.node.dataset.no);
		}
		else
		{
			this.no = parseInt(NodeOrNo);
		}
	},
	invoke: function ResManipulator_invoke(methodName)
	{
		if (this[methodName]) this[methodName]();
	},
	resTo: function ResManipulator_resTo()
	{
		if (this.no) Skin.Thread.openWriteDialog(this.no);
	},
	toggleRefferPopup: function ResManipulator_toggleRefferPopup(t)
	{
		if (this.node)
		{
			if (!t) t = this.node.children[1].children[0];	//No�̂Ƃ�
			PopupUtil.toggleResPopup(t, Skin.Thread.Message.Structure.getReplyIdsByNo(this.no), true,  $C("popupCaptionResTo").format(this.no));
		}
	},
	toggleIdPopup: function ResManipulator_toggleIdPopup(t)
	{
		if (this.node)
		{
			if (!t) t = this.node.children[1].children[2];	//ID�̂Ƃ�
			PopupUtil.toggleResPopup(t,Skin.Thread.Message.Structure.getNodeIdsById(this.node.dataset.aid),true, $C("popupCaptionId").format(t.textContent));
		}
	},
	expressReffer: function ResManipulator_expressReffer()
	{
		Skin.Finder.enterExpressMode();
		$("fform").q.value = "[resto:{0}]".format(this.no);
		Skin.Finder.express();
	},
	toggleRefTree: function ResManipulator_toggleRefTree()
	{
		if (this.node)
		{
			if (this.node.dataset.treed == "y")
			{
				this.closeRefTree(this.node);
			}
			else
			{
				this.openRefTree(this.node);
			}
		}
	},
	openRefTree: function ResManipulator_openRefTree()
	{
		if (this.node)
		{
			this.closeRefTree();	//��x����
			this.node.dataset.treed = "y";
			this._openRefTreeEx(this.no, this.node);
		}
	},
	closeRefTree: function ResManipulator_closeRefTree()
	{
		if (this.node)
		{
			var nodes = $A(this.node.childNodes).filter(function closeRefTree_findChild(x){ return x.tagName == "ARTICLE"; });
			for(var i=0,j=nodes.length; i<j; i++)
			{
				this.node.removeChild(nodes[i]);
			}
			this.node.dataset.treed = "";
		}
	},
	toggleBookmark: function ResManipulator_toggleBookmark()
	{
		if (this.no)
		{
			if (Bookmark.no == this.no)
			{
				Bookmark.del(this.no);
			}
			else
			{
				Bookmark.add(this.no);
			}
		}
	},
	setBookmark: function ResManipulator_setBookmark()
	{
		if (this.no) Bookmark.add(this.no);
	},
	resetBookmark: function ResManipulator_resetBookmark()
	{
		if (this.no == Bookmark.no) Bookmark.del(this.no);
	},
	togglePickup: function ResManipulator_togglePickup()
	{
		if (this.no)
		{
			if (Pickup.pickups.include(this.no))
			{
				Pickup.del(this.no);
			}
			else
			{
				Pickup.add(this.no);
			}
		}
	},
	setPickup: function ResManipulator_setPickup()
	{
		if (this.no) Pickup.add(this.no);
	},
	resetPickup: function ResManipulator_resetPickup()
	{
		if (this.no) Pickup.del(this.no);
	},
	toggleIgnore: function ResManipulator_toggleIgnore()
	{
		if (this.no)
		{
			if (Ignore.ignores.include(this.no))
			{
				Ignore.del(this.no);
			}
			else
			{
				Ignore.add(this.no);
			}
		}
	},
	setIgnore: function ResManipulator_setIgnore()
	{
		if (this.no) Ignore.add(this.no);
	},
	resetIgnore: function ResManipulator_resetIgnore()
	{
		if (this.no) Ignore.del(this.no);
	},
	toggleTracking: function ResManipulator_toggleTracking()
	{
		var node = this.node || Skin.Thread.Message.getNode(this.no, false);
		if (node)
		{
			if (node.datset.track == "")
			{
				Tracker.add(this.no);
			}
			else
			{
				Tracker.del(this.no);
			}
		}
	},
	beginTracking: function ResManipulator_beginTracking()
	{
		if (this.no) Tracker.add(this.no);
	},
	endTracking: function ResManipulator_endTracking()
	{
		if (this.no) Tracker.del(this.no);
	},
	previewLinks: function ResManipulator_previewLinks()
	{
		if (this.node)
		{
			var outlinks = this.node.getElementsByClassName("outLink");
			var container = this.node.getElementsByClassName("outLinkPreview");
			if ((outlinks.length > 0) && (container.length == 0))
			{
				container = document.createElement("DIV");
				container.className = "outLinkPreview";
				this.node.appendChild(container);
				for(var i=0,j=outlinks.length; i<j; i++)
				{
					var plugin = Skin.Services.OutLink.getOutlinkPlugin(outlinks[i]);
					var c = plugin.getPreview(outlinks[i].href, null, false);
					if (c) container.appendChild(c);
				}
			}
			else
			{	//�W�J�ς� or Outlink�Ȃ�
				return;
			}
		}
	},
	focus: function ResManipulator_focus()
	{
		if (Skin.Thread.Message.isDeployed(this.no))
		{
			var node = this.node || Skin.Thread.Message.getNode(this.no, false);
			if (node)
			{
				window.scrollTo(0, DOMUtil.getElementPagePos(node).pageY - (window.innerHeight * 0.3));
				//�ڗ�������
				node.dataset.focus = "on";
				setTimeout(function focus_timeout(){ node.dataset.focus = ""; }, 1000)
			}
		}
	},
	focusNextId: function ResManipulator_focusNextId()
	{
		if (!this.node) return;
		var aids = Skin.Thread.Message.Structure.getNodeIdsById(this.node.dataset.aid);
		if (!aids) return;
		var found = false;
		for(var i=0; i<aids.length; i++)
		{
			if (!found)
			{
				if (aids[i] == this.no) found = true;
			}
			else
			{
				$M(aids[i]).focus();
				return;
			}
		}
	},
	focusPrevId: function ResManipulator_focusPrevId()
	{
		if (!this.node) return;
		var aids = Skin.Thread.Message.Structure.getNodeIdsById(this.node.dataset.aid);
		if (!aids) return;
		var no = 0;
		for(var i=0; i<aids.length; i++)
		{
			if (aids[i] == this.no)
			{
				if (no) $M(no).focus();
				return;
			}
			no = aids[i];
		}
	},
	closeIfPopup: function ResManipulator_closeIfPopup()
	{
		var node = this.node;
		while(node)
		{
			if (node.popup)
			{
				node.popup.close();
			}
			node = node.parentNode;
		}
	},
	exitExpressMode: function ResManipulator_exitExpressMode()
	{
		Skin.Finder.leaveExpressMode();
		this.focus();
	},
	_openRefTreeEx: function ResManipulator__openRefTreeEx(from, c)
	{
		var rf = Skin.Thread.Message.Structure.getReplyIdsByNo(from);
		if(rf)
		{
			for(var i=0, j = rf.length; i < j; i++)
			{
				var node = Skin.Thread.Message.getNode(rf[i], true);	//ARTICLE
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

};

//�V���[�g�J�b�g
var Preference = Skin.Preference = clone(_Preference);
var Notice = Skin.Notice;
var PopupUtil = Skin.Util.Popup;
var StringUtil = Skin.Util.String;
var DOMUtil = Skin.Util.Dom;
var $M = Skin.Thread.Message.getManipulator.bind(Skin.Thread.Message);
var $C = Content.get.bind(Content);

window.addEventListener("load", function pp3initializer(){ PP3.init(); });
