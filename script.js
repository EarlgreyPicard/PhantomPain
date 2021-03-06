var _Preference =
{	//設定初期値
	ResMenuAttachDelay: 250,	//レスメニューがアタッチされるまでのディレイ(ms)
	ResPopupDelay: 250,			//ポップアップ表示ディレイ(ms)
	PostScheme: "bbs2ch:post:",	//投稿リンクのスキーマ
	ReplyCheckMaxWidth: 10,		//これ以上の数のレスに言及する場合は逆参照としない(>>1-1000とか)
	ReplyCheckIgnoreTo1: true,	//1を含むレスアンカーは参照に含まない
	TemplateLength: 0,			//テンプレポップアップで表示するレスの数
	PopupLeft: 24,				//ポップアップコンテンツ左端〜吹き出し右端までの最短距離
	PopupRightMargin: 16,		//ポップアップコンテンツ右端〜画面端までの距離
	PopupDestructChain: true,	//ポップアップを連鎖的に破壊するか？
	FloatingPopupFixed: false,	//フロート状態のポップアップが画面に張り付くか？
	MoreWidth: 100,				//moreで読み込む幅。0なら全部。
	AutoReloadInterval: 300,	//オートロード間隔(秒)
	AutoAutoReloadPtn: "",		//オートロードを自動開始するスレッドURLのパターン
	ResPopupPageWidth: 5,		//レスポップアップをタブ化する幅
	ResPopupAlwaysShowTabs: false,	//レスポップアップを常時タブで表示
	ImagePopupSize: 200,		//画像ポップアップのサイズ
	ViewerPoorCatalogue: false,	//ビューアーのカタログをプアーなものにする
	FocusNewResAfterLoad: true,	//ロード時、新着レスにジャンプ
	ViewerPreloadWidth: -1,		//ビューアーの先読み幅。-1はロード時に全て。0は先読みなし。1〜は件数（ただし未実装）
	ViewerCursorHideAt: 5,		//メディアビューアでカーソルが消えるまでの時間（秒）
	SlideshowInterval: 5,		//スライドショーの間隔(秒)
	LoadBackwardOnTopWheel: true,	//一番上で上にスクロールしようとするとロードが掛かる
	LoadForwardOnBottomWheel: true,	//一番下で下にスクロールしようとするとロードが掛かる
	LoadOnWheelWidth: 30,		//LoadOnWheelで読み出すレスの数
	LoadOnWheelCheckNew: false,	//LoadOnWheelで新着チェックするか？
	LoadOnWheelDelta: 10,		//LoadBackwardOnTopWheel,LoadForwardOnBottomWheelのかかる回転数
	ExtendAnchor: true,			//アンカー拡張
	URLShortenLength: 40,		//URL表示を短くする長さ
	AutoOpenBoardPane: false,	//板一覧ペインの自動展開
	AutoPreviewOutlinks: false,	//Outlinkを自動展開
	ChapterWidth: 100,			//Naviのチャプター幅
	EnableNextThreadSearch: true,	//次スレ検索有効？
	UseReplaceStrTxt: false,		//ReplaceStr.txtを使用する？
	NextThreadSearchBeginsAt: 900,	//次スレ検索開始レス番号
	NoticeLength: 10,			//表示するお知らせの数
	AutoStructure:	false,		//自動構造化
	FullStructured: true,		//完全構造化(falseだと、構造化中にすでに構造化されているレスを展開しない。trueだとする)
	ExtraStyle: "",				//追加スタイル
	ExtraStyleFile: "extra.css",		//追加スタイル定義ファイル(設定専用, 機能的には未使用)
	IndicateHasNewStateToFavicon: true,	//新着ありをfaviconで表示するか？
	UseStructureCache: false,	//構造キャッシュ機能を使用するか？(範囲外レスからの参照を検知可能になる)
	ShowIdCountInfo: false,		//IDごとの発言回数(n/m)を表示するか？
	AutoDetectOutlinkClass: true,	//自動的に外部リンクのクラスを判定するか？(OFFでも画像展開や次スレ検索で勝手に判定される）
	//レスをダブルクリックしたらどうなる？
	//              0=素        1=shift,      2=ctr  3=shift+ctrl,4=alt ,5=shift+alt, 6=ctrl+alt,7=ctrl+alt+shift
	OnResDblClick: ["togglePickup", "closeIfPopup", "toggleBookmark", "toggleTracking", "resTo", "previewLinks", "previewLinks", "toggleRefTree"],
	//中身は none(これがデフォルト), それ以外はManipulatorのメソッド名。
 
};

var Content = {
	mode: "jp",
	_jp: {
		title: "{0} - {1}({2})",
		defaultBoardName: "その他の掲示板",

		popupCaptionTemplate: "テンプレ",
		popupCaptionNavigation: "Navigation",
		popupCaptionPickup: "Pickup",
		popupCaptionTracking: "追跡", 
		popupCaptionGear: "GEAR>>{0}",
		popupCaptionResTo: "ResTo>>{0}",
		popupCaptionId: "ID>>{0}",
		popupContentThreadDefault: "(スレタイ未取得)",
		popupContentThreadError: "(スレッドロードエラー)",
		popupContentThreadTitle: "スレタイを取得。未読スレの場合、既読になります。",
		popupContentThreadSetNext: "次スレに指定",
		
		messageLoaded: "{0} messages.",
		messageNewResDetected: "({0} new messages.)",
		messageResetPreference: "設定を初期化しました",
		messageSavePreference: "設定を保存しました",
		messageInitialized: "{0} ms for initialize",
		messageLoadError: "Load Error.",
		messageCheckedWithoutNew: "{0} 新着なし",
		messageCheckedWithNew: "{0} 新着{1}件",
		messageNextThreadSet: "次スレを {0} に設定しました。",
		messagePopupInitializedError: "PopupInitializedError",
		messageInvalidReplaceStr: "\"{0}\"をReplaceStrの書式として認識できませんでした。",
		navigatorChapterTitle: "CHAPTER",
		navigatorChapterNext: "next.",
		navigatorChapterPrev: "prev.",
		navigatorBacklogTitle: "BACKLOG",
		navigatorBacklogAll: "全て",
		navigatorMiscTitle: "etc.",
		navigatorMiscJump: "JumpTo:",
		navigatorMiscList: "スレ一覧",
		navigatorMiscNext: "次スレ",
		navigatorMiscPrev: "前スレ",
		
		ReplaceStrReloaded: "ReplaceStr.txtを再読み込みしました。リロードしてください。",
		ExtraStyleReloaded: "追加スタイル {0} を適用しました。",
		ExtraStyleCleared: "追加スタイルを無効にしました。",
		
		configulatorPrevThread: "前スレ(自動判定)",
		configulatorNextThread: "次スレ候補",
		configulatorNextPrevThreadNotFound: "なし",
		
		finderSubmit: "抽出",
		finderRegExp: "正規表現",
		finderCheckCase: "大小区別",
		finderOnlyPickup: "pickupのみ",
	},
	get: function Content_get(id)
	{
		return (this["_" + this.mode] || this["_jp"])[id] || "";
	},
}

var Macro = {
	explain: {
		Write: "書き込みダイアログ",
		Template: "テンプレ表示",
		Viewer: "ビューアー表示",
		ViewerExit: "ビューアー閉じる",
		ViewerFirst: "(ビューアー)先頭",
		ViewerLast: "(ビューアー)末尾",
		ViewerPrev: "(ビューアー)前",
		ViewerNext: "(ビューアー)次",
		Config: "設定",
		Finder: "検索",
		Navigation: "ナビゲーションメニュー",
		Notice: "お知らせ表示",
		Preview: "プレビュー展開",
		Jump: "番号指定ジャンプ",
		Check: "新着チェック",
		AutoCheck: "自動新着チェック",
		ExpressPickup: "ピックアップ抽出",
		BoardPane: "スレ一覧",
		FocusEnd: "最後にフォーカス",
		FocusTop: "最初にフォーカス",
		FocusBookmark: "ブックマークにフォーカス",
		FocusNew: "新着にフォーカス",
		ResetBookmark: "ブックマーク解除",
		M_resTo: "返信",
		M_toggleRefferPopup: "逆参照ポップアップ",
		M_toggleIdPopup: "IDポップアップ",
		M_expressReffer: "逆参照抽出",
		M_toggleRefTree: "逆参照ツリー切替",
		M_openRefTree: "逆参照ツリー構築",
		M_closeRefTree: "逆参照ツリー解体",
		M_toggleBookmark: "ブックマーク切替",
		M_setBookmark: "ブックマーク設定",
		M_resetBookmark: "ブックマーク解除",
		M_togglePickup: "ピックアップ切替",
		M_setPickup: "ピックアップ設定",
		M_resetPickup: "ピックアップ解除",
		M_toggleIgnore: "個別あぼーん切替",
		M_setIgnore: "個別あぼーん設定",
		M_resetIgnore: "個別あぼーん解除",
		M_toggleTracking: "トラッキング切替",
		M_beginTracking: "トラッキング開始",
		M_endTracking: "トラッキング解除",
		M_previewLinks: "プレビュー(単一)",
		M_focus: "フォーカス",
		M_focusNextId: "IDの次のレスにフォーカス",
		M_focusPrevId: "IDの前のレスにフォーカス",
		M_closeIfPopup: "ポップアップなら閉じる",
		M_exitExpressMode: "これに注目して抽出モードを終了",
	},
	_invoke: function(command, t)
	{	//Manipulatorコマンド時はtにnode(またはその子要素)を指定すること。
		//なければ、レスメニューがあるノード。
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
	//以下、tはイベントが発生した要素。nullならなんかデフォルトを使う。
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
		{	//TemplateLength = 0設定時はギアとして出す
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
	ViewerExit: function(){ Skin.Viewer.leaveViewerMode(); },
	ViewerFirst: function(){ Skin.Viewer.first(); },
	ViewerLast: function(){ Skin.Viewer.last(); },
	ViewerPrev: function(){ Skin.Viewer.prev(); },
	ViewerNext: function(){ Skin.Viewer.next(); },
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

const OUTLINK_NON   = 0;	//outlinkじゃない
const OUTLINK_IMAGE = 1;	//画像
const OUTLINK_MOVIE = 2;	//動画
const OUTLINK_2CH   = 3;	//2ch
const OUTLINK_ETC   = 4;	//その他

function PP3ResetPreference()
{	//ブックマークレットとして javascript:PP3ResetPreference(); を登録しておくと、リセットすることができます。
	Notice.add($C("messageResetPreference"));
	Skin.Configulator.resetPreference();
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

Array.prototype.pushDistinct = function prototype_distinct(val)
{
	if (!this.include(val)) this.push(val);
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

function AscNum(a, b){return a-b;}
function DescNum(a, b){return b-a;}

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
		ret = "null";
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
		var c = "";
		for (var i=0; i< obj.length; i++)
		{
			ret += c + getJsonStr(obj[i]);
			c = ", ";
		}
		ret += "]";
	}
	else if (t == "object")
	{
		ret = "{";
		var c = "";
		for(var key in obj)
		{
			ret += c + '"' + key + '":' + getJsonStr(obj[key]);
			c = ", ";
		}
		ret += "}";
	}
	return ret;	//元に戻すときは var obj = EVAL("("+ret+")", null);
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
{	//例外が発生しないeval
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
skinVer: "ver. \"beta 3\"",
init: function PP3_init()
{
	var dt1 = new Date();
	Skin.ScriptedStyle.set("ExtraStyle", Preference.ExtraStyle);
	if (Preference.AutoOpenBoardPane) this.BoardPane.toggle();
	this.BoardList.init();
	this.Thread.init();
	this.Services.Marker.init();
	this.ResMenu.init();
	this.StructuredViewer.init();
	
	this.ownerApp = $("wa").href.substr(0,6) == "chaika" ? "chaika" : "bbs2chReader";				//アプリ判定
	$("footer").innerHTML = "powerd by {0} with {1} {2}".format(this.ownerApp, this.skinName, this.skinVer);	//フッタ構築
	document.title = $C("title").format(Skin.Thread.Info.Title, this.ownerApp, this.skinName);				//タイトル修正
	
	if (Preference.FocusNewResAfterLoad) Macro.FocusNew();			//新着あればジャンプ

	this.EventHandler.init();

	Notice.add(Skin.Thread.Info.Status);
	Notice.add($C("messageLoaded").format(Skin.Thread.Info.Total));
	if (Skin.Thread.Info.New) Notice.add($C("messageNewResDetected").format(Skin.Thread.Info.New));

	var dt2 = new Date();
	Notice.add($C("messageInitialized").format(dt2-dt1));
	
	if (Preference.AutoAutoReloadPtn && (Skin.Thread.Info.Url.match(Preference.AutoAutoReloadPtn))) this.Services.AutoUpdate.begin();
},
reloadExtraStyle: function PP3_reloadExtraStyle(file)
{
	var patch = {};
	if (file)
	{
		patch.ExtraStyle = TextLoadManager.syncGet(Skin.Thread.Info.Skin + "style/" + file) || "";
		patch.ExtraStyleFile = file;
		Notice.add($C("ExtraStyleReloaded").format(file));
	}
	else
	{
		patch.ExtraStyle = "";
		Notice.add($C("ExtraStyleCleared"));
	}
	Skin.Configulator.patch(Preference, patch);
	Skin.Configulator.save();
	Skin.ScriptedStyle.set("ExtraStyle", Preference.ExtraStyle);
},
Configulator: {
	_key: "PhantomPain3.Preferences",
	load: function Configulator_load()
	{
		var p = clone(_Preference);	//オリジナルをクローン
		p.OnResDblClick = _Preference.OnResDblClick.clone();	//配列はディープコピー
		var t = localStorage.getItem(this._key);
		var pref = EVAL("(" + t + ")", {}) || {};
		this.patch(p, pref);
		return p;
	},
	patch: function Configulator_patch(p, pref)
	{
		for (var key in _Preference)
		{
			if (getType(_Preference[key]) == getType(pref[key]))
			{
				p[key] = pref[key];
			}
		}
	},
	save: function Configulator_save()
	{
		var p = getJsonStr(Preference);
		localStorage.setItem(this._key, p);
		Notice.add($C("messageSavePreference"));
	},
	resetPreference: function Configulator_resetPreference()
	{
		Preference = clone(_Preference);
		Preference.OnResDblClick = _Preference.OnResDblClick.clone();	//配列はディープコピー
		this.save();
	},
	toggle: function Configulator_toggle(t)
	{
		if (!t) return;
		if (!t.tagName) t = $(t);
		if (!t) return;
		if (!this.editor)
		{	//初期化
			var cont = document.createElement("DIV");
			cont.id = "prefMenu";
			var html = TextLoadManager.syncGet(Skin.Thread.Info.Skin + "pref.txt") || "";
			this.htmlTemplate = html;
			//テンプレートエンジン発動！
			//この方法で初期値を埋めるなら、開きなおしたときの処理を考えないとダメかも。
			//ここでしか変更されない値はどうでもいいけど。
			html = html.replace(/@(CHECKED|MACRO|COMMAND)?<(([^@]|[\r\n])+?)>@/g, function Configulator_templateEngine(all,mode,script)
			{
				if (mode == "CHECKED")
				{
					return eval(script) ? "checked" : "";
				}
				else if (mode =="MACRO")
				{
					var current = eval(script);
					var opt = "";
					for(var key in Macro.explain)
					{
						if (key.substr(0, 2) == "M_")
						{
							var macro = key.substr(2);
							opt += '<option value="{0}"{2}>{1}</option>'.format(macro, Macro.explain[key], (current == macro) ? ' selected="selected"' : "");
						}
					}
					return opt;
				}
				else if (mode == "COMMAND")
				{
					eval(script);
					return "";
				}
				return eval(script);
			});
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
	getThreadSelectorHTML: function Configulator_getThreadSelectorHTML()
	{
		var html ="";
		html += '<li>' + $C('configulatorPrevThread') +'<ul>';
		var prev = Skin.Thread.Navigator.prevThread;
		if (prev.url)
		{
			html += '<li><a href="{1}" class="outLink">{0}</a>'.format(OutlinkPluginForThread.getCachedTitle(prev.url), prev.url);
		}
		else
		{
			html += '<li>' + $C('configulatorNextPrevThreadNotFound');
		}
		html += '</ul>';
		html += '<li>' + $C('configulatorNextThread') +'<ul class="nextThreadCandidates">';
		nexts = [];
		var links = Skin.Thread.Message.outLinks;
		var distincts = [];
		for (var i=0, j=links.length; i<j; i++)
		{
			if (links[i])
			for (var ii=0, jj=links[i].length; ii<jj; ii++)
			{
				var href = links[i][ii].href;
				var url = new URL(href);
				if (url.maybeThread && (url.boardId == Skin.Thread.boardId) && (!distincts.include(url.threadId)))
				{
					distincts.push(url.threadId);
					nexts.push(href);
				}
			}
		}
		if (nexts.length)
		{
			var n = Skin.Thread.Navigator.nextThread;
			for(var i=0,j=nexts.length; i<j; i++)
			{
				html += '<li{2}><a href="{1}" class="outLink">{0}</a>'.format(OutlinkPluginForThread.getCachedTitle(nexts[i]), nexts[i], (n.url == nexts[i]) ? ' class="selectedCandidates"' : '');
				//TODO::このボタンを押して次スレを変更したことをここに反映
				html += ('<input type="button" data-ref="{0}" class="icon_settonextthread" onclick="OutlinkPluginForThread.setToNextThread(event)" title="' +$C("popupContentThreadSetNext")+ '">').format(nexts[i]);
				html += '</li>\n';
			}
		}
		else
		{
			html += '<li>' + $C('configulatorNextPrevThreadNotFound');
		}
		html += '</ul>';
		return html;
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

ScriptedStyle: {
	add: function ScriptedStyle_add(ep, styleF){ this.set(ep, this.get(ep) + styleF);},
	clear: function ScriptedStyle_clear(ep){ this.set(ep, ""); },
	get: function ScriptedStyle_get(ep) { return this.ss[ep] || ""; },
	set: function ScriptedStyle_set(ep, style)
	{
		if ((!this.ss[ep]) && (!this.ssk.include(ep))) this.ssk.push(ep);
		this.ss[ep] = style;
		if (!this.se)
		{
			this.se = $("scriptedStyle");
			this.origin = this.se.innerHTML + "\n";
		}
		var style = this.origin;
		for(var i=0, j=this.ssk.length; i<j; i++)
		{
			style += "/* {0} */\n{1}\n".format(this.ssk[i], this.ss[this.ssk[i]]);
		}
		this.se.innerHTML = style;
		//console.log(this.se.innerHTML);
	},
	ss: {}, ssk: [],
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
		if (!id) id = Skin.Thread.boardId;	//俺だよ、俺俺
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
		if (id == Skin.Thread.boardId)
		{	//TODO::イベントを投げて板名変化を通知し、反映するように変更
			//特に、２箇所以上に影響が及ぶ場合はそのときに必ず実施。
			Skin.Thread.boardName = this.getBoardName(Skin.Thread.boardId);
			var e = $("threadName");
			if (e) e.dataset.boardName = Skin.Thread.boardName;
		}
	},
},

Thread: {
	init: function Thread_init()
	{
		//identifier設定
		var url = new URL(this.Info.Url);
		this.boardId  = url.boardId;
		this.threadId = url.threadId;
		
		//スレッドのIDを共通設定に使わせる(これより前にスレッド個別設定を使用してはならない)
		Skin.CommonPref._identifier = url.threadId;

		//板名
		this.boardName = Skin.BoardList.getBoardName(this.boardId);

		//スレタイ表示部のdeta-boardに登録（なぜスレタイかといわれれば見た目に関することなので、設定で変えられるほうがいいかも）
		var e = $("threadName");
		if (e)
		{
			 e.dataset.board = this.boardId;
			 e.dataset.boardName = this.boardName;
		}

		//次スレ前スレ
		this.Navigator.init();

		//メッセージの分析
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
		this.autoTickCount = 0;	//一回読み込んだらそのときに自動ロードカウンタリセット
		if (this.Message.deployedMax != this.Info.Total)
		{	//最後まで表示されていないときは全部表示してから。
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
			{	//新着があるとき〜
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
				this.updateFetchedOnCheckNewMessage = false;	//マウスの移動とホイール操作を検知してtrueになる。
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
		domobj: new Array(),	//DOMオブジェクト。indexはレス番号
		outLinks: new Array(),	
		deployedMin: 0,
		deployedMax: 0,
		init: function Message_init()
		{
			this._replaceStr.init();
			this.Structure.loadStructureCache();
			var nodes = $A($("resContainer").children);
			this.onLoad(nodes);
			this.onDeploy(nodes);
		},
		prepare: function Message_prepare(from, to)
		{	//今のスレの既読レスをロード。minにはidsまたはアンカーの文字列を指定可能。
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
			if (tmax > Skin.Thread.Info.Total) tmax = Skin.Thread.Info.Total;	//絶対取れないところはとりに行かない。
			for(; tmin <= tmax; tmin++)
			{	//tmin位置が読み込み済みならtminを+1
				if (!this.isReady(tmin))	break;
			}
			for(; tmax >= tmin; tmax--)
			{	//tmax位置が読み込み済みならtmaxを-1
				if (!this.isReady(tmax))	break;	
			}
			if ((tmin <= tmax) && (tmin != 0))
			{	//min-maxの範囲に少なくとも１個は取得すべきレスあり
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
		{	//idsをできるだけ少ない回数でロードするようにする。
			//本当はちょっとぐらいの間隙なら分けずにロードしたほうが早い場面もあるんだろうけど？
			ids = ids.sort(AscNum);
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
			if (!node)return;	//ほぎゃ！
			if (node.tagName != "ARTICLE") return;	//ほぎゃ！
			if (this.isDeployed(node.dataset.no)) return;
			if (node.parentNode)
			{	//既存の親を除外。loadから来た仮のdivだと思われる。
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
		{	//insertBeforeの第２引数に使うために、noを超えるnoを持つdeployedアイテムのうち、最もnoの小さいものを返す。
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
					//objから、本来備わっていないもの(=レスメニューと展開済みツリー、展開済み画像）を削除する。
					//article> { H , (div) , p , オマケたち } の順に並んでいるので、divとオマケを削除する。
					obj.dataset.strfetched = "";
					obj.dataset.treed = "";

					if (obj.children[1].tagName == "DIV")
					{
						obj.removeChild(obj.children[1]);
					}
					while(obj.children.length > 2)
					{
						obj.removeChild(obj.children[2]);
					}
					//outlinkのpreviewShowingをすべてnにする
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
		{	//旧NodeUtil相当のオブジェクトを返すよ
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
				{	//処理前のレスである場合…（本当は他スレじゃないか確認が要るのかも？）
					var no = parseInt(node.dataset.no);
					var msgNode = node.children[1];
					this._extendAnchor(msgNode);
					this._replaceStr.replace(node);
					this.domobj[no] = node;
					var ols = this.outLinks[no] = $A( node.getElementsByClassName("outLink"));
					if (Preference.AutoDetectOutlinkClass)
					{	//暗黙的外部リンククラス判定
						for (var i=0,j=ols.length; i<j; i++)
						{
							var p = Skin.Services.OutLink.getOutlinkPlugin(ols[i]);
						}
					}
					
					//名前とトリップの抽出
					var name = node.children[0].children[3].textContent;
					node.dataset.author = name;
					if (name.match(/◆([^\s]+)/))
					{
						node.dataset.trip = RegExp.$1;
					}
					if (name.match(/^(\d+)(◆.+)?/))
					{
						node.dataset.numberdName = "y";
					}
				}
			}
			//構造解析
			this.Structure.analyze(nodes);
			//マーカー登録
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
			Skin.StructuredViewer.init();
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
		_extendPtn: new RegExp(/(?:(?:＞＞|＞|&gt;&gt;|&gt;)(([\d０-９]+)(?:[\d０-９,\-]+)?))|(?:(class="resPointer">&gt;&gt;[^<]+?)<\/a>([,\-\d０-９]+))|(?:(<a\s[^<]*href="([^"]+)" class="outLink">)([^<]+)<\/a>)|(class="resPointer">&gt;&gt;[\d\-]+<\/a>)/g),
		Structure: {
			nodesById: {},		//いわゆるID
			nodesReplyFrom: {},	//いわゆる逆参照情報
			nodesReplyTo: {},	//参照情報
			nodesSuggests: {},	//さじぇっちょん
			disableReplyCache: false,
			disableIdCache: false,
			replyCacheDirty: false,	//参照キャッシュのダーティーフラグ。disableReplyCacheを替えるときもtrueになる点に注意
			idCacheDirty: false,	//同ＩＤキャッシュのダーティーフラグ。
			idStyled: {},		//IDにスタイルったーか？

			loadStructureCache: function MessageStructure_loadStructureCache()
			{
				if (Preference.UseStructureCache == false) return;			//使用しない設定の時はロードしない
				if (Skin.Thread.Info.Total == Skin.Thread.Info.New)	return;	//新着または削除後に来たものはロードしない
				this._loadReplyCache();
				this._loadIdCache();
			},
			saveStructureCache: function MessageStructure_saveStructureCache()
			{
				if (Preference.UseStructureCache == false) return;			//使用しない設定の時はセーブしない
				this._saveReplyCache();
				this._saveIdCache();
			},
			analyze: function MessageStructure_analyze(nodes)
			{
				var html = "";
				for(var i=0, j = nodes.length; i<j; i++)
				{
					html += this._analyze(nodes[i]);
				}
				Skin.ScriptedStyle.add("idcolor", html);
				
				var thisTimeIds = new Array();
				if (Preference.ShowIdCountInfo)
				{	//pushDistinctが早いとは思えないので・・・
					for(var i=0, j = nodes.length; i<j; i++)
					{
						if (nodes[i].dataset.aid.length > 5)
						{
							thisTimeIds.pushDistinct(nodes[i].dataset.aid);
						}
					}
				}
				this.updateIdCountInfo(thisTimeIds);
			},
			updateIdCountInfo: function MessageStructure_updateIdCountInfo(aids)
			{
				document.body.dataset.showIdCountInfo = Preference.ShowIdCountInfo ? "y" : "n";	//情報が更新されなくなったときに古い情報が消えるように。
				if (Preference.ShowIdCountInfo == false) return;	 //なんもしまへん
				var m = Skin.Thread.Message;
				for(var i=0, j=aids.length; i<j ; i++)
				{
					var aid = aids[i];
					var a = this.nodesById[aid] = this.nodesById[aid].sort(AscNum);
					var tc = a.length;
					for(var ii=0; ii < tc; ii++)
					{
						if (m.isReady(a[ii]))
						{
							var n = m.getNode(a[ii], false).children[0].children[2];
							n.dataset.idTotal = tc;
							n.dataset.idSeq   = ii+1;
						}
					}
				}
			},
			getReplyIdsByNo: function MessageStructure_getReplyIdsByNo(no)
			{	//指定したレス番号にレスしているレスのレス番号のリストを取得
				return this.nodesReplyFrom[no];
			},
			getNodeIdsById: function MessageStructure_getNodeIdsById(id)
			{	//IDを指定してその人物が発言したレス番号のリストを取得
				return this.nodesById[id];
			},
			FocusFirstId: function(id)
			{
				var aids = $A(this.nodesById[id]).sort(AscNum);
				if (aids && aids.length >0)
				{
					$M(aids[0]).focus();
				}
			},
			_loadReplyCache: function MessageStructure__loadReplyCache()
			{
				var refcache = Skin.CommonPref.readThreadObject("RefCache");
				//var refcache = '{6: "20,25-30", 18: "17", 22: "95,106,109", 30: "2,29", 34: "30", 36: "35", 43: "42", 44: "43", 46: "45", }';
				if (!refcache)
				{
					this.disableReplyCache = false;
					return;
				}
				if (refcache == "DISABLED")
				{
					this.disableReplyCache = true;
					return;		//このスレでは無効設定
				}
				this.disableReplyCache = false;
				var refobj   = EVAL("(" + refcache + ")", {});
				var replyFrom= {};
				var suggest  = {};
				for(var no in refobj)
				{
					var o = refobj[no] = StringUtil.splitResNumbers(refobj[no]);
					for(var i = 0, j = o.length; i < j; i++)
					{
						this._addEntry(replyFrom, o[i], parseInt(no));
						this._addEntry(suggest, o[i], "ref");
					}
				}
				this.nodesReplyTo   = refobj;
				this.nodesReplyFrom = replyFrom;
				this.nodesSuggests  = suggest;
			},
			_loadIdCache: function MessageStructure__loadIdCache()
			{
				var idcache  = Skin.CommonPref.readThreadObject("IdCache");
				//var idcache  = '{"tDMUeJ6o": "5", "eWL/w6Cw": "6-12", "TpKOrKVg": "13-15", "z3sfcCM2": "16-17", "wyplad5E": "18", "a/GPkts+": "19-20", "p5oaXyEo": "21", "zhb2Cwtw": "22", "vs/1O32A": "23-24", "S9zcrRG2": "25", "gu7tls0k": "26", "OHcgPyCU": "27", "7iNgPzuk": "28", "bPIegJn+": "29", "48vIHYGQ": "30-31", "eOoWrHIE": "32-33", "20FmFDEM": "34", "VpR2FhSI": "35", "epbpCnsI": "36", "XqRVW2mM": "37-38", "IumsISa+": "39-41", "jbS5tJ1k": "42,44,46", "SDFMoums": "43,45", "mSlanJ42": "47-50", }';
				if (!idcache)
				{
					this.disableIdCache = false;
					return;
				}
				if (idcache == "DISABLED")
				{
					this.disableIdCache = true;
					return;		//このスレでは無効設定
				}
				this.disableIdCache = false;
				var idobj    = EVAL("(" + idcache  + ")", {});
				for(var id in idobj)
				{
					idobj[id] = StringUtil.splitResNumbers(idobj[id]);
				}
				this.nodesById = idobj;
			},
			_saveReplyCache: function MessageStructure__saveReplyCache()
			{
				if (!this.replyCacheDirty) return;
				this.replyCacheDirty = false;
				//参照の保存
				var refcache = "";
				if (this.disableReplyCache)
				{
					refcache = "DISABLED";
				}
				else
				{
					for (var i=1; i<= Skin.Thread.Info.Total; i++)
					{
						if (this.nodesReplyTo[i] && (this.nodesReplyTo[i].length > 0))
						{
							refcache += (i + ": \"" + StringUtil.joinResNumbers(this.nodesReplyTo[i]) + "\", ");
						}
					}
					refcache= "{" + refcache + "}";
				}
				Skin.CommonPref.writeThreadObject("RefCache", refcache);
			},
			_saveIdCache: function MessageStructure__saveIdCache()
			{
				if (!this.idCacheDirty) return;
				this.idCacheDirty = false;
				//IDの保存
				var idcache = "";
				if (this.disableIdCache)
				{
					idcache = "DISABLED";
				}
				else
				{
					for(var id in this.nodesById)
					{
						idcache += ( "\"" + id + "\": \"" + StringUtil.joinResNumbers(this.nodesById[id]) + "\", ");
					}
					idcache = "{" + idcache + "}";
				}
				Skin.CommonPref.writeThreadObject("IdCache", idcache);
			},
			_addEntry: function MessageStructure__addEntry(table, key, value)
			{
				if (!table[key])
				{
					table[key] = [ value ];
					return true;
				}
				else if (table[key].include(value) == false)
				{
					table[key].push(value);
					return true;
				}
				return false;
			},
			_hasEntry: function MessageStructure__hasEntry(table, key)
			{
				return (table[key]) && (table[key].length != 0);
			},
			_analyze: function MessageStructure__analyze(node)
			{
				var obj = node.dataset;
				var html ="";
				//IDによる構造
				if (obj.aid.length > 5)		//"????"回避
				{
					this.idCacheDirty |= this._addEntry(this.nodesById, obj.aid, parseInt(obj.no));
					if (!this.idStyled[obj.aid] && (this.nodesById[obj.aid].length >= 2))
					{	//IDの強調表示。複数あるものだけIDCOLORとIDBACKGROUNDCOLORが有効。そして太字。
						html += "article[data-aid=\"{0}\"] > h2 > .id { color: {1}; background-color: {2}; font-weight: bold; }\n"
						       .format(obj.aid, obj.idcolor, obj.idbackcolor);
						this.idStyled[obj.aid] = true;
					}
				}
				
				//suggest
				this._getSuggest(node);
				return html;
			},
			_getSuggest: function MessageStructure__getSuggest(node)
			{
				var content = node.getElementsByClassName("ct")[0].childNodes;
				var txt = "";
				var leadA = 0;
				var no = parseInt(node.dataset.no);
				for(var i=0;  i<content.length; i++)
				{
					var e = content[i];
					if (e.tagName)
					{
						if (e.tagName == "A")
						{
							this._getSuggestElement(leadA, txt, no);
							leadA = e;
							txt = "";
						}
						//else if (e.tagName == "BR")
						//{
						//	if (txt) txt += "\n";
						//}
					}
					else
					{
						txt += e.textContent;
					}
				}
				this._getSuggestElement(leadA, txt, no);
			},
			_getSuggestElement:function MessageStructure__getSuggestElement(a, txt, no)
			{
				if (a && txt)
				{
					//初期化
					if (this._noticePtnReg == null)
					{
						this._noticePtnReg = {};
						for(var key in this._noticePtn)
						{
							this._noticePtnReg[key] = new RegExp(this._noticePtn[key], "i");
						}
					}
					var linkto;
					if (a.className == "resPointer")
					{
						linkto = StringUtil.splitResNumbers(a.textContent);
						this._addSuggest("ref", linkto, no);
					}
					for (var key in this._noticePtnReg)
					{
						if (this._noticePtnReg[key].test(txt))
						{
							if (a.className == "resPointer")
							{	//resPointerの指す先をサジェスト
								this._addSuggest(key, linkto, no);
							}
							else
							{	//自分自身をサジェスト
								this._addSuggest(key, no, no);
							}
						}
					}
				}
			},
			_addSuggest: function MessageStructure__addSuggest(cls, no , src)
			{
				if (getType(no) != 'array')
				{
					var t = new Array();
					t.push(no);
					no = t;
				}
				if (((Preference.ReplyCheckIgnoreTo1 == false) || (!no.include(1)))
					 && (no.length < Preference.ReplyCheckMaxWidth))
				{
					for (var i = 0, j = no.length; i < j; i++)
					{
						var id = no[i];
						this._addEntry(this.nodesSuggests, id, cls);
						if (cls == "ref")
						{
							this._addEntry(this.nodesReplyFrom, id, src);
							this.replyCacheDirty |= this._addEntry(this.nodesReplyTo, src, id);
						}
					}
				}
			},
			_noticePtn: { fav: "(gj|ＧＪ|詳細)", warn: "(グロ|注意|警告|危険|ブラクラ)" },
			_noticePtnReg: null,
			HasReference: function MessageStructure_HasReference(no)
			{	//返事しているか（参照しているか）
				return this._hasEntry(this.nodesReplyTo, parseInt(no));
			},
			HasReply: function MessageStructure_HasReply(no)
			{	//返事があるか（参照されているか）
				return this._hasEntry(this.nodesReplyFrom, parseInt(no));
			},
			HasSuggest: function MessageStructure_HasSuggest(id, cls)
			{
				return this.nodesSuggests[id] && this.nodesSuggests[id].include(cls);
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
				Notice.add($C("ReplaceStrReloaded"));
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
				//<ex>?置換対象の文字列\t置換文字列?\t?置換対象?\t?<n>?対象URL/タイトル?
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
			//次スレ/前スレ情報
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
				//その他
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
		{	//altkeyの状態とか取り込んで、別ウィンドウ表示とか実装すべきか？
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
			if (this.nextThread.userDecided) return;			//ユーザーが決めた次スレがあるとき、何もしない
			if (!Preference.EnableNextThreadSearch) return;		//機能無効
			if (!anchor)return;
			if (!node) node = DOMUtil.getDecendantNode(anchor, "ARTICLE");
			var nodeNo = parseInt(node.dataset.no);
			var url = new URL(anchor.href);
			if (url.maybeThread
			 && (url.boardId == this.boardId)					//同じ板
			 && (nodeNo >= this.nextThread.linkedNode) 			//前に決めた番号より後のレス
			 && (nodeNo >= Preference.NextThreadSearchBeginsAt))	//次スレアドレスチェック番号以降のレス
			{
				this.setNextThread(anchor.href, false, nodeNo);
			}
		},
		setNextThread: function Navigator_setNextThread(href, ud, nodeNo)
		{	//ud: ユーザーが決めたか？ trueのとき、勝手に上書きされない状態で出てくる。
			var url = new URL(href);
			ud = ud ? true : false;	//真偽値の正規化
			var nextThread = { url: href, id: url.threadId, userDecided: ud, linkedNode: nodeNo};
			this.nextThread = nextThread;
			this.saveNextThreadInfo(nextThread);	//TODO::ここで毎回呼ぶと負荷が掛かる場合があるかも？次回以降大丈夫だろうけど。
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
			return {url: null, id: null, userDecided: false, linkedNode: 0};	//デフォルト
		},
		searchPrevThread: function Navigator_searchPrevThread()
		{
			var This = this;
			var ret = {url: null};
			Skin.CommonPref.foreach("nextThread", function searchPrevTheread_checker(key, dat)
			{
				var info = This.loadNextThreadInfo(dat);
				if (info.id == Skin.Thread.threadId)
				{	//URL => 今のアドレスの数字のところをkeyの末尾の数字で置き換えたもの
					if (key.match(/(\d+)$/))
					{
						var num = RegExp.$1;
						var url = Skin.Thread.Info.Url.replace(/\/(\d+)\/$/, function searchPrevThread_replacement(a,$1){	return "/" + num + "/"; });
						ret = {url: url};
					}
				}
			});
			document.body.dataset.prevThread = ret.url || "";	//これがここでええのんかな？
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
			HasReplyMark.init();
			HasSuggestFavMark.init();
			HasSuggestWarnMark.init();
			this.push(NewMark);
			this.push(Bookmark);
			this.push(Pickup);
			this.push(Ignore);
			this.push(Tracker);
			this.push(HasReplyMark);
			this.push(HasSuggestFavMark);
			this.push(HasSuggestWarnMark);
		},
		
		push: function MarkerServices_push(service)
		{
			if(service)
			{
				this.service.push(service);
				if(this.service.length==1)
				{	//最初の一個登録時→ストレージイベントを追加
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
			if (e.newValue == e.oldValue) return;	//変化なしなら帰る（そんなことがあるかどうかは知らない）
			for(var i=0, j=this.service.length; i<j;i++)
			{
				var s = this.service[i].onStorageChanged(ev);
			}
		},
	},
	OutLink: {
		getOutlinkPlugin: function OutlinkServices_getOutlinkPlugin(node)
		{	//適合するアウトリンクプラグインを求める。
			//適合率1ならそれに決定。
			//そうでなければ、より適合率の高そうなものが出るまで繰り返す。
			if (node.className != "outLink") return null;
			var mp = 0;
			var mpt = null;
			for(var i=0, j=this.plugins.length; i < j ; i++)
			{
				var p = this.plugins[i].posivility(node.href);
				if (p >= 1)
				{
					mpt = this.plugins[i];
					break;
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
			if (mpt) node.dataset.linkClass = mpt.getClass(node.href);
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
	{	//nodeはARTICLEでなければならない。ARTICLE以外(nullを含む)を指定すると、メニューはどこにも表示されなくなる。
		var m = this._menu;		//参照コピ〜
		if (m == null) return;	//レスメニューなし
		if (node == m.parentNode) return;	//同じとこに割り当て→無視
		if (m.parentNode != null) m.parentNode.removeChild(m);	//デタッチ
		this.popTrack = null;
		if ((node != null) && (node.tagName == "ARTICLE"))
		{
			m.dataset.binding = node.dataset.no;
			node.insertBefore(m, node.children[1]);
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
		this.container.innerHTML = "";	//全子供殺す

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
			if (document.getSelection() != "")
			{
				$("fform").q.value = document.getSelection();
			}
			p.container.dataset.finder = "y";
			this.popup = p;

			this.pageY = window.scrollY;
			document.body.dataset.expressMode="y";
			
			this.express();
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
	{	//条件セットしてからコレを呼ぶと、条件に合致するものとしないものでarticleに印をつける
		var cond = $("fform").q.value;
		var reg  = $("fform").r.checked;
		var icase=!$("fform").i.checked;
		var pick = $("fform").p.checked;
		
		this.clearFoundKey()
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
		var flag = icase ? "ig" : "g";
		var exp = null;
		if (cond != "")
		{
			try
			{
				exp = new RegExp(cond, flag);
			}
			catch(e)
			{
				$("fformerr").innerHTML = "<br>" + e;
				return;
			}
			Skin.Thread.Message.foreach((function Finder_markFound(node){
				node.dataset.express = (!pick || node.dataset.pickuped =="y") && exp.test(node.textContent) ? "y" : "n";
				if (node.dataset.express == "y") this.markFoundKey(node, exp);
			}).bind(this), false);
		}
		else
		{
			Skin.Thread.Message.foreach(function Finder_markFound(node){
				node.dataset.express = "y";
			}, false);
		}
	},
	markFoundKey: function Finder_markFoundKey(node, exp)
	{
		for (var n = node.firstChild; n; n = n.nextSibling)
		{
			if (n.tagName)
			{	//element
				this.markFoundKey(n, exp);
			}
			else
			{	//text
				var m = exp.exec(n.nodeValue);
				while(m)
				{
					this._wrapText(n, m.index, m.index+m[0].length);
					m = exp.exec(n.nodeValue);
				}
			}
		}
	},
	_wrapText: function Finder__wrapText(textNode, begin, end)
	{ // タグで挟む部分より前のテキストを新しいテキスト ノードにして textNode の前に挿入
		var fore = document.createTextNode(textNode.nodeValue.substring(0, begin));
		textNode.parentNode.insertBefore(fore, textNode);
		// タグで挟む部分を新しい要素にして textNode の前に挿入 
		var wrapped = document.createElement("SPAN"); 
		wrapped.appendChild(document.createTextNode(textNode.nodeValue.substring(begin, end))); 
		wrapped.className="foundkey";
		textNode.parentNode.insertBefore(wrapped, textNode);
		// textNode の内容からタグで挟んだ部分までを削除 
		textNode.nodeValue = textNode.nodeValue.substring(end);
	},
	clearFoundKey: function Finder_clearFoundKey()
	{
		//先行する全マークを解体
		var keys =$("resContainer").getElementsByClassName("foundkey");
		for(var i=0, j=keys.length; i<j; i++)
		{	//stripの結果、keysの配列からなくなってしまうので常に0を指定しなければならない。
			DOMUtil.stripElement(keys[0]);
		}
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
StructuredViewer: {
	init: function StructuredViewer_init()
	{
		if (Preference.AutoStructure)
		{
			this.enter();
		}
	},
	toggle: function StructuredViewer_enter()
	{
		if (document.body.dataset.structuredMode == "y")
		{
			this.leave();
		}
		else
		{
			this.enter();
		}
	},
	enter: function StructuredViewer_enter()
	{
		this.leave();
		document.body.dataset.structuredMode = "y";
		//前から順番に展開していく・・・
		Skin.Thread.Message.foreach(function StructuredViewer_setMark(node)
		{
			if (node.dataset.strfetched != "y")
			{
				node.dataset.treed = ("y");
				$M(node)._openRefTreeEx(node.dataset.no, node, function(cn)
				{
					if (!cn) return false;
					var node0 = Skin.Thread.Message.getNode(cn.dataset.no, false);
					if (node0)
					{
						if (node0.dataset.strfetched == "y")
						{
							return (Preference.FullStructured) ? true : false;	//そのままpref値を返しても問題なさげ
						}
						if (parseInt(node.dataset.no) < parseInt(node0.dataset.no))
						{	//先を指すアンカーでおかしくなるので・・・
							node0.dataset.strfetched = "y";
						}
					}
					return true;
				});
			}
		}, false);
	},
	leave: function StructuredViewer_leave()
	{
		document.body.dataset.structuredMode = "n";
		Skin.Thread.Message.foreach(function StructuredViewer_resetMark(node)
		{	//全ノードのツリーを解体して
			node.dataset.strfetched = "n";
			$M(node).closeRefTree();
		}, false);
	},
},
Viewer: {
	_entries: null,
	_orderd: null,
	init: function Viewer_init()
	{
		this.auto = false;
		//表示範囲だけが対象なので・・・
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
			c.innerHTML = '<form id="ViewerCtrl"><span id="viewerState"></span><div id="viewerCtrls">{0}</div></form><div id="viewerCtrlsRT"">{0}</div>'.format(bhtml);
			var cc = document.createElement("DIV");
			this.container = cc;
			c.appendChild(cc);
			document.body.appendChild(c);
			document.body.dataset.mediaview = "y";
			document.body.dataset.contentsOverlay = "y";
			this.appendCatalogue();
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
			this.removeCatalogue();
			this.container = null;
			Skin.EventHandler.leave("viewer");
			document.body.dataset.mediaview = "";
			document.body.dataset.contentsOverlay = "";
			clearInterval(this.cursorHideCheckTimer);
			document.removeEventListener("mousemove", this.cursorShowHandler, false);
		}
	},
	appendCatalogue: function Viewer_createCatalogue()
	{
		var cont = DOMUtil.createDIV("viewerCatalogue");
		var style = "";
		if (Preference.ViewerPoorCatalogue)
		{
			cont.className="poor";
			for (var i=0, j=this._orderd.length; i<j; i++)
			{
				var btn = document.createElement("button");
				btn.className = "viewerPoorThumbnail";
				btn.addEventListener("click", Skin.Viewer.showImage.bind(Skin.Viewer, i),false);
				if (i%10==0) btn.className+= " spacer";
				cont.appendChild(btn);
			}
		}
		else
		{
			for (var i=0, j=this._orderd.length; i<j; i++)
			{
				var entry = this._orderd[i];
				var cid = this.getCatalogueId(entry.href);
				var tcont = DOMUtil.createDIV(null, "viewerThumbContainer");
				var thumb = DOMUtil.createDIV(cid, "viewerThumb");
				var img = document.createElement("IMG");
				img.dataset.state="preload";
				thumb.insertBefore(img, thumb.children[0]);
				tcont.appendChild(thumb);
				cont.appendChild(tcont);
				entry.thumbnail = img;
				style += '#{0}:after{background-image: -moz-linear-gradient(black 25%,rgba(0,0,0,0.1)),-moz-element(#{0});}\n'.format(cid);
				tcont.addEventListener("click", Skin.Viewer.showImage.bind(Skin.Viewer, i),false);
				entry.onLoad = function(e){ e.thumbnail.src = e.href; e.thumbnail.dataset.state = e.state+""; };
				entry.onRelease = function(e){ e.thumbnail.src =""; e.thumbnail.dataset.state = "preload"; };
			}
		}
		Skin.ScriptedStyle.set("viewerCatalogue", style);
		document.body.appendChild(cont);
	},
	removeCatalogue: function Viewer_removeCatalogue()
	{
		if ($("viewerCatalogue")) document.body.removeChild($("viewerCatalogue"));
		Skin.ScriptedStyle.clear("viewerCatalogue");
	},
	getCatalogueId: function Viewer_getCatalogueId(href)
	{
		href = href.replace(/[.:\/]/g, "_");
		return href;
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
		var nodes = $A(this.container.children);
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
		if (this.auto) this.slideshowTick = 0;	//スライドショー中に任意で飛ばしたらそこから計測
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
		if (this.container.children.length == Preference.NoticeLength)
		{
			this.container.removeChild(this.container.firstChild);
		}
		var e = document.createElement("P");
		e.innerHTML = msg;
		this.container.appendChild(e);
		DOMUtil.notifyRefreshInternal(this.container);
	},
},
Diagnostics: {
	RefreshIdReport: function Diagnostics_RefreshIdReport(node)
	{
		var ids = Skin.Thread.Message.Structure.nodesById;
		var d = [];
		var total = 0;
		for(var id in ids)
		{
			if (ids[id].length) d.push({id: id, count: ids[id].length});
			total += ids[id].length;
		}
		d = d.sort(function(a,b){ return b.count - a.count; });
		var ret = '<div><table class="diagnostics_id">';
		var rank = 1;
		var rankBase = d[0].count;
		for(var i=0; i<d.length; i++)
		{
			if (d[i].count != rankBase)
			{
				rank = i + 1;
				rankBase = d[i].count;
			}
			p = (d[i].count / total) * 100;
			ret += '<tr><th>{2}</th><td class="diag_id" onclick="Skin.Thread.Message.Structure.FocusFirstId(\'{0}\')">{0}</td><td class="bar100"><div class="bar_rank{2}" style="width:{3}px;">&nbsp;</div></td><td>{1}/{4}</td></tr>\n'.format(d[i].id, d[i].count, rank, p, total);
		}
		ret += '</table></div>';
		node.innerHTML = ret;
	},
	RefreshDiary: function Diagnostics_RefresDiary(node)
	{
		var a = this.analyzeDateTime();
		this.nodesByDate = a.d;
		this.nodesByHour = a.h;
		
		//初期表示ノードの選定
		if (a.ys == 1)
		{	//一年分しかない
			if (a.ms == 1)
			{
				//一か月分しかない
				if (a.ds == 1)
				{	//一日分しかない→日間
					this.ChangeDiaryRange(node, a.yyyy, a.mm, a.dd);
				}
				else
				{	//何日分かある→月間
					this.ChangeDiaryRange(node, a.yyyy, a.mm, 0);
				}
			}
			else
			{	//複数化月分ある→年間
				this.ChangeDiaryRange(node, a.yyyy, 0, 0);
			}
		}
		else
		{	//複数年分ある→全部
			this.ChangeDiaryRange(node, 0, 0, 0);
		}
	},
	RefreshHours: function Diagnostics_RefreshHours(node)
	{
		var a = this.analyzeDateTime();
		this.nodesByDate = a.d;
		this.nodesByHour = a.h;
		var ret = '<div><table>';
		for(var i=0; i<24; i++)
		{
			var c = a.h[i] ? a.h[i].length : 0;
			var g = this._getBarGraph(c, a.total);
			ret += '<tr><th class="diary_hour">{0}</th><td class="diary_amount">{1}</td>{2}</td>'.format(i, c, g);
		}
		ret += '</table></div>';
		node.innerHTML = ret;
	},
	_getBarGraph: function Diagnostics__getBarGraph(c, t, barSize)
	{
		if (!barSize) barSize = 200;
		var r = t == 0 ? 0 : c / t;
		return '<td class="bar sz{1}"><div style="width:{0}px;">&nbsp;</div></td>'.format(r*barSize, barSize);
	},
	analyzeDateTime: function Diagnostics_analyzeDateTime()
	{
		var d = {};
		var h = {};
		var ys = 0, ms = 0, ds = 0, ts = 0;
		var yyyy = 0, mm = 0, dd = 0;
		var This = this;
		
		Skin.Thread.Message.foreach(function(node){
			var obj = node.dataset;
			var date = This._normalizeDate(obj.date);
			if (date)
			{
				ts++;
				if (!d[date.y])
				{
					d[date.y] = {};
					ys++;
					yyyy = date.y;
				}
				if (!d[date.y][date.m])
				{
					d[date.y][date.m] = {};
					ms++;
					mm = date.m;
				}
				if (!d[date.y][date.m][date.d])
				{
					d[date.y][date.m][date.d] = [];
					ds++;
					dd = date.d;
				}
				d[date.y][date.m][date.d].push(parseInt(obj.no));
				if (date.h >= 0)
				{
					if (!h[date.h])
					{
						h[date.h] = [];
					}
					h[date.h].push(parseInt(obj.no));
				}
			}
		}, false);
		return {d: d, h:h, ys: ys, ms: ms, ds: ds, yyyy: yyyy, mm: mm, dd: dd, total: ts };
	},
	ChangeDiaryRange: function Diagnostics_ChangeDiaryRange(node, y, m, d)
	{
		if (!node)
		{
			node = this.diaryNode;
		}
		else
		{
			this.diaryNode = node;
		}
		var ret = "";
		if(y == 0)
		{
			ret = this.getTotalDiaryHTML(node, y, m, d);
		}
		else if (m == 0)
		{
			ret = this.getYearDiaryHTML(node, y, m, d);
		}
		else if (d == 0)
		{
			ret = this.getMonthDiaryHTML(node, y, m, d);
		}
		else
		{
			ret = this.getDayDiaryHTML(node, y, m, d);
		}
		node.innerHTML = ret;
	},
	getTotalDiaryHTML: function Diagnostics_getTotalDiaryHTML(node, y, m, d)
	{
		var min = 10000;
		var max = 0;
		var d = this.nodesByDate;
		for (var year in d)
		{
			var y = parseInt(year);
			min = Math.min(min, y);
			max = Math.max(max, y);
		}
		var total = 0;
		var counts = {};
		for (var year = min; year <= max; year ++)
		{
			var c = 0;
			for(var month in d[year])
			{
				for(var day in d[year][month])
				{
					c += d[year][month][day].length;
				}
			}
			counts[year] = c;
			total += c;
		}
		var ret = "<div><table>";
		for (var year = min; year <= max; year ++)
		{
			var str = this.DiaryRangeToHTML(this.getDiaryRangeY(year))
			var g = this._getBarGraph(counts[year], total);
			ret += '<tr><th class="diary_year" onclick="Skin.Diagnostics.ChangeDiaryRange(null,{0}, 0, 0);">{0}</th><td class="diary_amount">{1}</td>{3}</td><td>{4}</td></tr>'.format(year, counts[year], total, g, str);
		}
		ret += "</table></div>";
		return  ret;
	},
	getYearDiaryHTML: function Diagnostics_getTotalDiaryHTML(node, y, m, d)
	{
		var d = this.nodesByDate;
		var counts = {};
		var total = 0;
		for(var m=1; m<=12; m++)
		{
			var c = 0;
			if (!d[y] || !d[y][m])
			{
				c = 0;
			}
			else
			{
				for(var day in d[y][m])
				{
					c += d[y][m][day].length;
				}
			}
			counts[m] = c;
			total += c;
		}
		var ret = '<div><table><tr><th colspan="4" class="diary_year" onclick="Skin.Diagnostics.ChangeDiaryRange(null,0,0,0);">{0}</td></tr>'.format(y);
		for(var m=1; m<=12; m++)
		{
			var str = this.DiaryRangeToHTML(this.getDiaryRangeM(y, m))
			var g = this._getBarGraph(counts[m], total);
			ret += '<tr><th class="diary_month" onclick="Skin.Diagnostics.ChangeDiaryRange(null,{0}, {1}, 0);">{1}</th><td class="diary_amount">{2}</td>{4}<td>{5}</td></tr>'.format(y, m, counts[m], total, g, str);
		}
		ret += "</table></div>";
		return  ret;
	},
	getMonthDiaryHTML: function Diagnostics_getTotalDiaryHTML(node, y, m, d)
	{
		var d = this.nodesByDate;
		var counts = {};
		var total = 0;
		var days = 31;	//TODO::一ヶ月の長さを可変にする
		for(var day=1; day<=days; day++)
		{
			var c = 0;
			if (!d[y] || !d[y][m] || !d[y][m][day])
			{
				c = 0;
			}
			else
			{
				c += d[y][m][day].length;
			}
			counts[day] = c;
			total += c;
		}
		var ret = '<div><table><tr><th class="diary_year" onclick="Skin.Diagnostics.ChangeDiaryRange(null,0,0,0);">{0}</td>'.format(y);
		ret += '<th colspan="3" class="diary_month" onclick="Skin.Diagnostics.ChangeDiaryRange(null,{0},0,0);">{1}</td></tr>'.format(y, m);
		for(var day=1; day<=days; day++)
		{
			var str = this.DiaryRangeToHTML(this.getDiaryRangeD(y, m, day))
			var g = this._getBarGraph(counts[day], total);
			ret += '<tr><th class="diary_day" onclick="Skin.Diagnostics.ChangeDiaryRange(null,{0}, {1}, {2});">{2}</th><td class="diary_amount">{3}</td>{5}<td>{6}</td></tr>'.format(y, m, day, counts[day], total, g, str);
		}
		ret += "</table></div>";
		return  ret;
	},
	getDayDiaryHTML: function Diagnostics_getTotalDiaryHTML(node, y, m, d)
	{
		var dd = this.nodesByDate;
		if (dd[y] && dd[y][m] && dd[y][m][d])
		{
			var days = dd[y][m][d];
			var h = {};
			var t = 0;
			for(var i=0; i<days.length; i++)
			{
				var obj = Skin.Thread.Message.domobj[days[i]].dataset;
				var date = this._normalizeDate(obj.date);
				if (date.h >= 0)
				{
					if (!h[date.h])
					{
						h[date.h] = [];
					}
					h[date.h].push(parseInt(obj.no));
					t++;
				}
			}
			var ret = '<div><table><tr><th class="diary_year" onclick="Skin.Diagnostics.ChangeDiaryRange(null,0,0,0);">{0}</td>'.format(y);
			ret += '<th class="diary_month" onclick="Skin.Diagnostics.ChangeDiaryRange(null,{0},0,0);">{1}</td>'.format(y, m);
			ret += '<th colspan="2" class="diary_day" onclick="Skin.Diagnostics.ChangeDiaryRange(null,{0},{1},0);">{2}</td></tr>'.format(y, m, d);
			for(var i=0; i<24; i++)
			{
				var c = h[i] ? h[i].length : 0;
				var s = this.DiaryRangeToHTML(this.getRange(h[i]));
				var g = this._getBarGraph(c, t);
				ret += '<tr><th class="diary_hour">{0}</th><td class="diary_amount">{1}</td>{2}</td><td>{3}</td></tr>'.format(i, c, g, s);
			}
			ret += '</table></div>';
			return ret;
		}
		return  this.getMonthDiaryHTML(node, y, m, d);	//その日はないよ
	},
	getDiaryRangeY: function Diagnostics_getDiaryRangeY(y)
	{
		var min = 0;
		var max = 0;
		for(var m=1; m<=12; m++)
		{
			var r = this.getDiaryRangeM(y, m);
			if ((min == 0) || ((r.min != 0) && (min > r.min)))
			{
				min = r.min;
			}
			if (max < r.max)
			{
				max = r.max;
			}
		}
		return {min: min, max: max};
	},
	getDiaryRangeM: function Diagnostics_getDiaryRangeM(y, m)
	{
		var min = 0;
		var max = 0;
		for(var d=1; d<=31; d++)
		{
			var r = this.getDiaryRangeD(y, m, d);
			if ((min == 0) || ((r.min != 0) && (min > r.min)))
			{
				min = r.min;
			}
			if (max < r.max)
			{
				max = r.max;
			}
		}
		return {min: min, max: max};
	},
	getDiaryRangeD: function Diagnostics_getDiaryRangeD(y, m, d)
	{
		var dd = this.nodesByDate;
		var min = 0;
		var max = 0;
		if (!dd[y] || !dd[y][m] || !dd[y][m][d])
		{
		}
		else
		{
			return this.getRange(dd[y][m][d]);
		}
		return {min: min, max: max};
	},
	getRange: function Diagnostics_getDiaryRange(res)
	{
		var min = 0;
		var max = 0;
		if (res)
		{
			for(var i=0; i<res.length; i++)
			{
				if ((min==0) ||(min > res[i]))
				{
					min = res[i];
				}
				if (max < res[i])
				{
					max = res[i];
				}
			}
		}
		return {min: min, max: max};
	},
	DiaryRangeToHTML: function Diagnostics_DiaryRangeToHTML(r)
	{
		var str ="";
		if (r.min)
		{
			str = (r.max != r.min) ?  "&gt;&gt;{0}-{1}" : "&gt;&gt;{0}";
			str = str.format(r.min , r.max);
			str = '<a onclick="$M({0}).focus();">{2}</a>'.format(r.min, r.max, str);
		}
		return str;
	},
	diaryNode: null,
	nodesByDate: {},		//日付別
	_dateReg: new RegExp(/(\d{4})\/(\d{2})\/(\d{2})/),
	_timeReg: new RegExp(/(\d{2}):\d{2}/),
	_normalizeDate: function Diagnostics__normalizeDate(str)
	{
		if (this._dateReg.test(str))
		{	//TODO::AM/PM考慮必要あり？
			var d = {y: parseInt(RegExp.$1,10), m:parseInt(RegExp.$2,10), d: parseInt(RegExp.$3,10)};
			d.h = (this._timeReg.test(str)) ? parseInt(RegExp.$1, 10) : -1;
			return d;
		}
		return null;
	},
	RefreshStoryHeads: function Diagnostics_RefreshStoryHeads(node)
	{
		var ids = this.getStoryHeads();
		var html= "";
		for (var i=0, j =ids.length; i<j; i++)
		{
			html += '<a class="resPointer" href="#{0}">&gt;&gt;{0}</a> '.format(ids[i]);
		}
		node.innerHTML = html;
	},
	getStoryHeads: function Diagnostics_getStoryHeads(min, max)
	{	//表示範囲内で、以下の条件を満たすレスを検索
		//1. 参照されている
		//2. 参照していない
		if (!min) min = Skin.Thread.Message.deployedMin;
		if (!max) max = Skin.Thread.Message.deployedMax;
		var Structure = Skin.Thread.Message.Structure;
		var ret = [];
		for (var i=min ;i <=max; i++)
		{
			if (Structure.HasReply(i) && !Structure.HasReference(i))
			{
				ret.push(i);
			}
		}
		return ret;
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
				{	//トップレベルに一度出さないか、トップレベルのときクローズ
					p.close();
				}
				else
				{	//トップレベルに一度出す
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
				ids = ($A(ids)).sort(AscNum);
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
		{	//レス番号の切り分け（10-11とかを10,11,12,13,14...に分ける）。戻り値は数字の配列。
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
		joinResNumbers: function StringUtil_joinResNumbers(ids)
		{	//splitResNumbersの逆
			var str = "";
			var state = 0;
			var bid = 0;
			if (ids)
			{
				ids = $A(ids).sort(AscNum);
				if (ids.length <= 1) return ids[0]+"";
				bid = parseInt(ids[0]);
				for (var i=1, j=ids.length; i<j; i++)
				{
					if (parseInt(ids[i-1])+1 != parseInt(ids[i]))
					{
						if (str != "") str += ","
						str += (bid == ids[i-1]) ? bid : bid + "-" + ids[i-1];
						bid = parseInt(ids[i]);
					}
				}
				if (str != "") str += ","
				str += (bid == ids[ids.length-1]) ? bid : bid + "-" + ids[ids.length-1];
				return str;
			}
			return "";
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
		{	//特定追加データの値を持つ親を帰す。
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
		{	//要素の絶対座標を求める
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
		createDIV: function DOMUtil_createDIV(id, className, innerHTML)
		{
			var e = document.createElement("DIV");
			if (id) e.id = id;
			if (className) e.className = className;
			if (innerHTML) e.innerHTML = innerHTML;
			return e;
		},
		stripElement: function DOMUtil_removeStripElement(node)
		{
			for(var i=0, j = node.children.length; i < j; i++)
			{
				var n = node.children[0];	//↓でremoveしてしまうので常に0
				node.removeChild(n);
				node.parentNode.insertBefore(n, node);
			}
			node.parentNode.removeChild(node);
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
	{	//本当はしっかり画面遷移を定義してそれに合わせて勝手に追従すべきなんだろうけど面倒すぎるので普通にモード上書き
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
			Esc:	"ViewerExit",
			Left:	"ViewerPrev",
			PageUp:	"ViewerPrev",
			Enter:	"ViewerNext",
			Space:	"ViewerNext",
			Right:	"ViewerNext",
			PageDown:	"ViewerNext",
			End:	"ViewerLast",
			Down:	"ViewerLast",
			Home:	"ViewerFirst",
			Up: 	"ViewerFirst",
		},
	},
	specialKey: {
		8: "BS",
		9: "Tab",
		13: "Enter",
		19: "Pause",
		27: "Esc",
		28: "Convert",		//	変換
		29: "NonConvert",	//	無変換
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
		{	//固定でないポップアップはヒゲのところをドラッグできる
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
		{	//レスメニューにポイント → 何もしない
			//(resMenuがArticleの子要素になるので、これがないと干渉してしまう
			return;
		}
		var res = DOMUtil.getDecendantNode(t, "ARTICLE");
		if (res != null)
		{	//レスの上にポイント → レスメニューを(時間差で)持ってくる
			var tid = setTimeout(Skin.ResMenu.attach.bind(Skin.ResMenu, res), Preference.ResMenuAttachDelay);
			res.addEventListener("mouseout",
				function cancelHover(){
					clearTimeout(tid);
					res.removeEventListener("mouseout", arguments.callee, false);
			}, false);
		}
		if (aEvent.shiftKey)
		{
			//shiftKey押下中はポップアップさせない
		}
		else if (t.className=="resPointer")
		{	//レスアンカーにポイント → レスポップアップ
			new ResPopup(t);
		}
		else if (t.className == "outLink")
		{	//リソース(画像とか動画とか)リンクにポイント → リソースポップアップ
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
		Menu_Structured: function(){ Skin.StructuredViewer.toggle(); },
		RMenu_Ref: function IdClickhandler_RMenu_Ref(t, ev)
		{
			var node = DOMUtil.getDecendantNode(t, "ARTICLE");
			if (node.dataset.popupRefShowing != "y")
			{
				node.dataset.popupRefShowing = "y";
				var pp = new ResPopup(null);
				pp.onClose = function Rmenu_onClose(){ node.dataset.popupRefShowing = ""; node.refPopup = null; }
				pp.popup(Skin.Thread.Message.Structure.getReplyIdsByNo(node.dataset.no), "RMenu_Ref");
				node.refPopup = pp;	//ややこしくなるからdomにobjを持たせたくないけどなぁ・・・
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
		no: function ClassClickHandler_no(t, ev)
		{
			$M(DOMUtil.getDecendantNode(t, "ARTICLE")).resTo(t);
			return false;
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
			t = t.children[0];
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
		//アニメーション名のラストが「AndClose」である場合、開始時にdisplayを初期化（CSSの定義に従う）
		if (aEvent.animationName.match(/AndClose$/))
		{
			aEvent.target.style.display = "";
		}
	},
	animationEnd: function EventHandler_animationEnd(aEvent)
	{
		//アニメーション名のラストが「AndClose」である場合、終了時にdisplayをnoneにする
		if (aEvent.animationName.match(/AndClose$/))
		{
			aEvent.target.style.display = "none";
		}
	},
	aboneImmidiate: function EventHandler_aboneImmidiate(aEvent)
	{
		var q   = aEvent.sourceEvent.type;	//クエリ
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


/* ■URL分析 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
function URL(url){ this.init(url); }
URL.prototype = {
	init: function URL_init(url)
	{
		try
		{
			this.url = url;
			//bbs2chreader/chaika スレッド表示URL
			this.isReaderUrl = (this.startWith(Skin.Thread.Info.Server));
			if(this.isReaderUrl) url = url.substr(Skin.Thread.Info.Server.length);
			//bbs2chreader/chaika スキン
			this.isReaderSkinUrl = (this.startWith(Skin.Thread.Info.Skin));
			//bbs2chreader/chaika 板一覧
			var readerBoardScheme = "bbs2ch:board:";
			this.isReaderBoardUrl = (this.startWith(readerBoardScheme));
			if(this.isReaderBoardUrl) url = url.substr(readerBoardScheme.length);
			readerBoardScheme = "chaika://board/";
			this.isReaderBoardUrl = (this.startWith(readerBoardScheme));
			if(this.isReaderBoardUrl) url = url.substr(readerBoardScheme.length);
			
			//ドメインとパスの切り分け
			if (url.match(/([a-z]+):\/\/([^\/]+)(.*)/i))
			{
				this.scheme = RegExp.$1;
				this.domain = RegExp.$2;
				this.path   = RegExp.$3;
			}
			
			//スレッド判定
			this.maybeThread = url.match(/\/read\.cgi\//) ? true : false;
			
			//4つ(2chか町BBSか2chのクローンかその他WWWか）に分類
			if (this.domain.match(/(2ch\.net|bbspink\.com)$/))
			{
				this.type =  "2CH";
			}
			else if(this.domain.match(/(machi\.to)$/))
			{
				this.type = "MACHI";
			}
			else if(this.domain.match(/(jbbs\.livedoor\.jp)$/))
			{
				this.type = "JBBS";
			}
			else if(this.maybeThread)
			{
				this.type = "CLONE";
			}
			else
			{
				this.type = "WWW";
			}
			
			//スレッドなら
			if (this.maybeThread)
			{
				//板とスレッドと表示範囲の指定を取得
				if ((url.match(/^(.+jbbs\.livedoor\.jp\/.+\/read.cgi\/([^\/]+\/\d+)\/([^\/]+))(\/(.+))?/)) ||
					(url.match(/^(.+\/read.cgi\/([^\/]+)\/([^\/]+))(\/(.+))?/)))
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
					default:	//JBBSもここ。デフォの板一覧に入ってないんだからその他有象無象と同じだ！
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


/* ■タブコントロール■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
function TabElement(contents){ this.init(contents); }
TabElement.prototype = {
	init: function TabElement_init(contents)
	{	//contentsは[{title, content}]であり、titleはstring, contentはノード(のクローン)]
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
			if (c.parentNode) c = c.clone(true);	//誰かのものならクローニングして使う
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
		this.click(0);
	},
	click: function TabElement_click(activeNo)
	{
		var buttons=this.container.children[0].children;
		var nodes = this.container.children[1].children;
		for(var i=0,j=nodes.length; i<j; i++)
		{
			buttons[i].dataset.selected = i == activeNo ? "y" : "";
			nodes[i].style.display = i == activeNo ? "" : "none";
		}
	},
};

/* ■画像サムネイル■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
function ImageThumbnail(url, sz){this.thumbSize = sz; if(url) {this.init(url);}}
ImageThumbnail.prototype = {
	thumbSize: 200,		//最大サイズ
	container: null,	//nodeの子。
	loading: true,
	init: function ImageThumbnail_init(href)
	{
		this.src = href;
		this.container = document.createElement("DIV");
		this.container.className = "ithumbcontainer";
		this.container.dataset.state="loading";	//画像を表示させたいけどURLをここに入れたくないのでこれで頑張って設定
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
	{	//w, hをthmbSizeの矩形に押し込んだときの縦横のサイズを求める。戻り値は{width:?, height:? }
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
/* 下は、クリックするとsrcの内容をオーバーレイで表示するサムネイル */
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

/* 下は、クリックするとsrcの内容をオーバーレイで表示するサムネイル */
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


/* ■マーカーサービス■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
function MarkerService(g,k,m,ma){this.init(g,k,m,ma);}
MarkerService.prototype = {
	global: false,	//スレごとに覚えるマーカーはfalse, 全体で覚えるマーカーはtrueにする
	storageKey: "_markerservice",	//ストレージのキー
	mark: "mk",	//レスにマーキングする時のデータセットの名前。mkならnode.dataset.mk="y"(yの部分はMarkerService_getMarkerClassで取得)となる。
	markAllNode: true,	//全ノードマーク？検索みたいな、domobjにしか影響ないものはfalseにしておくと若干速度アップするかも

	init: function MarkerService_init(g,k,m,ma)
	{
		this.global = g;
		this.storageKey = k;
		this.mark = m;
		this.markAllNode = ma;
	},
	onStorageChanged: function MarkerService_onStorageChanged(e)
	{	//ストレージ内容が変化したときよびだされる。
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
	{	//マーキングしたりされたりするごとにちゃんと保存しておけば、自分が書いたものとの差分によって処理できると見た！
		
	},
	add: function MarkerService_set(no)
	{	//こいつをマーキングしろ！という指示
		if (this._add(no))
		{
			this.setMark();
			this.save();
		}
	},
	del: function MarkerService_del(no)
	{	//こいつのマーキングを解除しろ！という指示
		if (this._del(no))
		{
			this.setMark();
			this.save();
		}
	},
	isMarked: function MarkerService_isMarked(no)
	{	//こいつはマーキングされていますか？
		//逐次マーキングが反映されていれば、これでいいはず。
		//検索はポップアップとかに及ばないけど、domobjには及ぶので。
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
		if(this.marked) this.marked();	//マーク後処理
	},
	getMarkerClass: function MarkerService_getMarkerClass(node)
	{
		return "";
	},
	nodeLoaded: function MarkerService_nodeLoaded(nodes)
	{	//markAllNodeがtrueのときは、ロードされたときにこれが発動する。
		for(var i=0;i<nodes.length; i++)
		{
			nodes[i].dataset[this.mark] = this.getMarkerClass(nodes[i]);
		}
		if(this.marked) this.marked();	//マーク後処理
	},
};

/* ■新着マーク■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
var NewMark = new MarkerService(false, null, "new", true);
	NewMark.init = function NewMark_init()
	{
		//本来はsetMarkをやるべきなんだろうが、resNew.htmlによてマーク済み状態になっているはずなので省略できる。
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
		var hasNew = (this.fetched != Skin.Thread.Info.Total);
		document.body.dataset.hasNew = hasNew ? "y" : "";
		if (Preference.IndicateHasNewStateToFavicon)
		{
			var favicon = $("favicon");
			favicon.href = hasNew ? "type-2ch-n.gif" : "type-2ch.gif";
			fp = favicon.parentNode;
			fp.removeChild(favicon);	//タブのマークに反映するには一度抜かねばならぬようです。
			fp.appendChild(favicon);
		}
	}
	NewMark.getSaveStr = NewMark._del = function NewMark_dmy(){}

/* ■応答ありマーク■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
var HasReplyMark = new MarkerService(false, null, "hasReply", true);
	HasReplyMark.init = function HasReplyMark_init()
	{
		this.setMark();
	}
	HasReplyMark.getMarkerClass = function HasReplyMark_getMarkerClass(node)
	{
		return (Skin.Thread.Message.Structure.HasSuggest(node.dataset.no, "ref")) ? "y" : "";
	}
	HasReplyMark.nodeLoaded = function HasReplyMark_nodeLoaded(nodes)
	{	//他のノードによって勝手にマークされるので。
		//Trackerも似たようなものだが都度addされるので問題ない。
		this.setMark();
	}
	HasReplyMark.getSaveStr = HasReplyMark._del = HasReplyMark._add = HasReplyMark.marked = function HasReplyMark_dmy(){}

/* ■サジェストマーク(fav)■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
var HasSuggestFavMark = new MarkerService(false, null, "suggestFav", true);
	HasSuggestFavMark.init = function HasSuggestFavMark_init()
	{
		this.setMark();
	}
	HasSuggestFavMark.getMarkerClass = function HasSuggestFavMark_getMarkerClass(node)
	{
		return (Skin.Thread.Message.Structure.HasSuggest(node.dataset.no, "fav")) ? "y" : "";
	}
	HasSuggestFavMark.nodeLoaded = function HasSuggestFavMark_nodeLoaded(nodes)
	{	//他のノードによって勝手にマークされるので。
		//Trackerも似たようなものだが都度addされるので問題ない。
		this.setMark();
	}
	HasSuggestFavMark.getSaveStr = HasSuggestFavMark._del = HasSuggestFavMark._add = HasSuggestFavMark.marked = function HasSuggestFavMark_dmy(){}

/* ■サジェストマーク(warn)■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
var HasSuggestWarnMark = new MarkerService(false, null, "suggestWarn", true);
	HasSuggestWarnMark.init = function HasSuggestFavMark_init()
	{
		this.setMark();
	}
	HasSuggestWarnMark.getMarkerClass = function HasSuggestWarnMark_getMarkerClass(node)
	{
		return (Skin.Thread.Message.Structure.HasSuggest(node.dataset.no, "warn")) ? "y" : "";
	}
	HasSuggestWarnMark.nodeLoaded = function HasSuggestWarnMarkk_nodeLoaded(nodes)
	{	//他のノードによって勝手にマークされるので。
		//Trackerも似たようなものだが都度addされるので問題ない。
		this.setMark();
	}
	HasSuggestWarnMark.getSaveStr = HasSuggestWarnMark._del = HasSuggestWarnMark._add = HasSuggestWarnMark.marked = function HasSuggestWarnMark_dmy(){}

/* ■ブックマーク■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
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
	{	//ブックマークの位置によってn(変),yb(表示範囲より前),y(表示範囲内),ya(表示範囲より後ろ)のいずれかを返す
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

/* ■ピックアップ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
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
			this.pickups.sort(AscNum);
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

/* ■個別無視■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
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
			this.ignores.sort(AscNum);
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

/* ■トラッカー■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
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
		this.report(this.reportShownTo);	//どこか良い場所はないか・・・
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
		//トラック済みならトラッキングしない
			//if (ThreadMessages.domobj[no].dataset.tracker != "") return false;	//←でいいのかも
		for(var i=0, j=this._trackers.length; i<j; i++)
		{
			if (this._trackers[i].check(no)) return false;
		}
		//新規でトラック
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
			tr.update();	//他のスレからの分もあるので、今のスレで引っかかるものがないか更新かける
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
		//空いてる番号を探す
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
	Tracker.report = function Tracker_report(e)
	{
		if (!e) return;
		this.reportShownTo = e;
		var html = '<table id="trackerInfo">';
		for(var i=0, j=this._trackers.length; i<j; i++)
		{
			html += this._trackers[i].getReportHTML();
		}
		html += "</table>";
		e.innerHTML = html;
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
	{	//既存データがマッチしていれば再帰的に追加していく
		var tr = this;
		Skin.Thread.Message.foreach(function TrackerEntry_traversal(node){
			var m = tr.check(node.dataset.no);
			if (m > 0)
			{
				if ((m & 1) && (node.dataset.aid.length > 5) && (!tr.containsId(node.dataset.aid)))
				{	//トリップで引っかかってIDがあるけどID未登録→ID登録
					tr.aid.push(node.dataset.aid);
					tr.update();
				}
				else if ((m&2) && (node.dataset.trip) && (!tr.containsTrip(node.dataset.trip)))
				{	//IDで引っかかって、トリップついてるけどそれが登録されていない→登録
					tr.trip.push(node.dataset.trip);
					tr.update();
				}
			}
		},false);
	},
	check: function TrackerEntry_check(no)
	{	//Tripだけひっかかったら1, IDだけひっかかったら2, 両方引っかかったら3
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
	getReportHTML: function TrackerEntry_getReportHTML()
	{
		var html = "";
		html += '<tr><th class="trrep_trhead" colspan="2">{1}</th></tr>'.format(this.index, this.index+1);
		html += '<tr><td class="trrep_blank"></td><th class="trrep_idhead"></th></tr>';
		if (this.aid.length)
		{
			for(var i=0,j=this.aid.length; i<j;i++)
			{
				html += '<tr><td class="trrep_blank"></td><td class="trrep_id">{0}</td></tr>'.format(this.aid[i]);
			}
		}
		else
		{
			html += '<tr><td class="trrep_blank"></td><td class="trrep_no"></td></tr>';
		}
		html += '<tr><td class="trrep_blank"></td><th class="trrep_triphead"></th></tr>';
		if (this.trip.length)
		{
			for(var i=0,j=this.trip.length; i<j;i++)
			{
				html += '<tr><td class="trrep_blank"></td><td class="trrep_trip">{0}</td></tr>'.format(this.trip[i]);
			}
		}
		else
		{
			html += '<tr><td class="trrep_blank"></td><td class="trrep_no"></td></tr>';
		}
		var trackingNumbers = this.getTrackingNumbers();
		if (trackingNumbers.length)
		{
			html += '<tr><td class="trrep_blank"></td><th class="trrep_idshead"></th></tr>';
			html += '<tr><td class="trrep_blank"></td><td class="trrep_ids"><span onclick="$M({1}).focus();">&gt;&gt;{0}</span></td></tr>'.format(StringUtil.joinResNumbers(trackingNumbers), trackingNumbers[0]);
		}
		return html;
	},
};


/* ■外部リンクプラグイン■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

function OutlinkPlugin(type, cls){ this.type = type; this.cls = cls; }
OutlinkPlugin.prototype = {
	posivility:  function OutlinkPlugin_posivility(href){ return 0; },
	getPreviewy: function OutlinkPlugin_getPreviewy(href, onload, isPopup){ return 0; },
	getClass: function OutlinkPlugin_getClass(href){ return this.cls; },
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
			p.dontLimitSize = true;	//モノによって変更できるようにしたいかも
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

var OutlinkPluginForImage = new OutlinkPlugin(OUTLINK_IMAGE, "image");
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

var OutlinkPluginForMovie = new OutlinkPlugin(OUTLINK_MOVIE, "movie-etc");
var OutlinkPluginForNicoNico = new OutlinkPlugin(OUTLINK_MOVIE, "movie-nico");
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

var OutlinkPluginForThread = new OutlinkPlugin(OUTLINK_2CH, "thread-unknown");
	OutlinkPluginForThread.posivility = function OutlinkPluginForThread_posivility(href)
	{
		//本来、URL.maybeThreadを確認すればよいが、無駄なアクションも多いので処理だけ抽出
		return  href.match(/\/read.cgi\//) ? 1 : 0;
	}
	OutlinkPluginForThread.initCache = function OutlinkPluginForThread_initCache()
	{
		//Skin.CommonPref.writeGlobalObject("ThreadTitleCache", undefined);
		if (!this._titleBuffer)
		{
		
			var obj = Skin.CommonPref.readGlobalObject("ThreadTitleCache");
			this._titleBuffer = EVAL("({0})".format(obj), {}) || {};
			if (!this._titleBuffer[Skin.Thread.threadId])
			{	//自己登録
				this._titleBuffer[Skin.Thread.threadId] = Skin.Thread.Info.Title;
				Skin.CommonPref.writeGlobalObject("ThreadTitleCache", getJsonStr(this._titleBuffer));
			}
		}
	}
	OutlinkPluginForThread.getCachedTitle = function OutlinkPluginForThread_getCachedTitle(href)
	{
		this.initCache();
		var url = new URL(href);
		return (this._titleBuffer[url.threadId]) ? this._titleBuffer[url.threadId] : $C("popupContentThreadDefault");
	}
	OutlinkPluginForThread.getPreview = function OutlinkPluginForThread_getPreview(href, onload, isPopup)
	{
		if (!isPopup) return null;	//ポップアップにしか表示しない
		var url = new URL(href);
		href = url.threadUrl;
		var html = '<input type="button" data-ref="{0}" class="icon_getthreadtitle" onclick="OutlinkPluginForThread.getThreadTitle(event)" title="' +$C("popupContentThreadTitle")+ '">';
		if (url.boardId == Skin.Thread.boardId)
		{
			html += '<input type="button" data-ref="{0}" class="icon_settonextthread" onclick="OutlinkPluginForThread.setToNextThread(event)" title="' +$C("popupContentThreadSetNext")+ '">';
		}
		var t = this.getCachedTitle(href);
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
		this.initCache();
		var href = aEvent.target.dataset.ref;
		var html = TextLoadManager.syncGet(Skin.Thread.Info.Server + href + "1");
		var url= new URL(href);
		if (html && (html.match(/<a id="threadName">(.+?)<\/a>/)))
		{
			this._titleBuffer[url.threadId]  = RegExp.$1;
		}
		var t = this._titleBuffer[url.threadId] || $C("popupContentThreadError");
		var preview = aEvent.target.parentNode;
		preview.dataset.thread = t;
		preview.dataset.titleState = (this._titleBuffer[href]) ? "y" : "e";
		Skin.CommonPref.writeGlobalObject("ThreadTitleCache", getJsonStr(this._titleBuffer));
	}
	OutlinkPluginForThread.setToNextThread =  function OutlinkPluginForThread_setToNextThread(aEvent)
	{
		Skin.Thread.Navigator.setNextThread(aEvent.target.dataset.ref, true, 0);
		Notice.add($C("messageNextThreadSet").format(aEvent.target.dataset.ref));
	}
	OutlinkPluginForThread.getClass = function OutlinkPluginForThread_getClass(href)
	{
		var url= new URL(href);
		if (url.type == "2CH")
		{
			return "thread-2ch";
		}
		else if (url.type == "MACHI")
		{
			return "thread-machi";
		}
		else if (url.type == "JBBS")
		{
			return "thread-jbbs";
		}
		else if (url.type == "CLONE")
		{
			return "thread-etc";
		}
		return "thread-unknown";
	}

var OutlinkPluginForDefault = new OutlinkPlugin(OUTLINK_ETC, "etc");
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

/* ■ポップアップ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
function Popup() { }
Popup.prototype = {
	closeOnMouseLeave: true,
	dontLimitSize: false,
	_init: function Popup_init(e)
	{	//eはなにからポップアップさせようとしているか。要素または要素のIDを指定する。
		if (!e.tagName) e = $(e);
		if (!e)
		{
			console.log($C("messagePopupInitializedError"));
			console.log(e);
			e = document.body;	//なんもないならとりあえずエラーにならないようにBodyにつけとく
		}
		this.arranged = e;	//適用先オブジェクト
		this.fixed = DOMUtil.isFixedElement(e);	//適用先オブジェクトは固定されたもの？
		
		//親の探索
		while (e)
		{
			if (e.popup)
			{	//ポップアップからのポップアップ→子として登録
				e.popup.registorChild(this);
				break;
			}
			e = e.parentNode;
		}
		
		//自分を作成
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
			var children = this.childPopups.clone();	//closeからunregistorされるので配列構成が変わるため凍結
			for(var i=0, j=children.length; i < j; i++)
			{
				children[i].close();
			}
		}
		if (this.parentPopup) this.parentPopup.unregistorChild(this);
	},
	//サイズ制限
	limitSize: function Popup_limitSize(pos)
	{
		if (this.dontLimitSize) return;
		var e = this.container.firstChild;
		//幅・・・画面幅の80%
		//高さ・・・アンカー位置の下側で画面下端まで(40は吹き出しのヒゲの分と若干の余裕）：最低保障３割
		var maxWidth = window.innerWidth *0.8;
		var poy = (this.fixed) ? 0 : window.pageYOffset;	//固定の時はスクロール位置を気にしない
		var maxHeight = window.innerHeight - (pos.pageY - poy) - 40;
		if (maxHeight < window.innerHeight*0.3) maxHeight = window.innerHeight*0.3;
		e.style.maxWidth = maxWidth + "px";
		e.style.maxHeight = maxHeight + "px";
	},
	//画面内に押し込む(サイズ制限されているので必ず入るはず)。下にしか出ないし、縦にはスクロールできるので横だけ押し込む。
	adjust: function Popup_adjust(pos)
	{
		if (!pos) pos = this.getPopupPos();
		this.container.style.left = "-10000px";	//調整前に一度外に追い出さないと折り返した幅になってる
		var px = pos.pageX, py = pos.pageY;
		var x = px + this.container.firstChild.offsetWidth - document.body.offsetWidth;
		this.container.style.left = px + "px";
		this.container.style.top  = py + "px";
		x = (x < 0) ?  -Preference.PopupLeft : -(x + Preference. PopupRightMargin);	//吹き出し位置調整
		this.container.firstChild.style.marginLeft = x + "px";
	},
	float: function Popup_float()
	{
		if (!this.floating)
		{
			this.floatingRect = DOMUtil.getElementPagePos(this.container.firstChild);
			if (Preference.FloatingPopupFixed)
			{
				this.floatingRect.pageX -= window.scrollX;
				this.floatingRect.pageY -= window.scrollY;;
				this.container.style.position = "fixed";
			}
			else
			{
				this.floatingRect.pageX -= Preference.PopupLeft;
				this.floatingRect.pageY -= 4;
			}
			this.closeOnMouseLeave = false;
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
		//位置計算(アレンジされているようその下辺中央を指すように)
		var pos = DOMUtil.getElementPagePos(this.arranged);
		pos.pageX += pos.width /2;
		pos.pageY += pos.height;
		return pos;
	},
	getPopupObj: function Popup_getPopupObj(element)
	{	//elementの親につけられたpopupを探す
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
			{	//本当はかぶってるかどうかで判定したほうが良い？
				topLevelPopup = popup;
			}
		}
		return topLevelPopup == this.container;
	},
	toTop: function Popup_toTop()
	{	//一回抜いてまた入れるだけ
		$("popupContainer").removeChild(this.container);
		$("popupContainer").appendChild(this.container);
	},
};

function ResPopup(anchor){ this.init(anchor); }
ResPopup.prototype = new Popup();
	ResPopup.prototype.init = function ResPopup_init(anchor)
	{
		//Delayを仕掛ける
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
		{	//要素。アンカーだと信じる
			ids = StringUtil.splitResNumbers(obj.textContent);
			Skin.Thread.Message.prepare(obj.textContent);
			this.container.dataset.popupCaption = (caption||"") + obj.textContent;
		}
		else if (obj.length)
		{	//配列・・・だといいなぁ
			ids = obj;
			//prepareいらんのか？
			this.container.dataset.popupCaption = caption;
		}
		else
		{	//その他・・・適当に
			ids = [obj];
			//prepareいらんのか？
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
	{	//名前良くない
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

/* ■ドラッグドロップ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
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
			{	//半径3ピクセルより大きく動かすとドラッグ開始
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


/* ■ビューアのエントリ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
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
			this.relations.sort(AscNum);
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
		if (this.onLoad) this.onLoad(this);
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
		if (this.onRelease) this.onRelease(this);
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
			if (!t) t = this.node.children[1].children[0];	//Noのとこ
			PopupUtil.toggleResPopup(t, Skin.Thread.Message.Structure.getReplyIdsByNo(this.no), true,  $C("popupCaptionResTo").format(this.no));
		}
	},
	toggleIdPopup: function ResManipulator_toggleIdPopup(t)
	{
		if (this.node)
		{
			if (!t) t = this.node.children[1].children[2];	//IDのとこ
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
			this.closeRefTree();	//一度閉じる
			this.node.dataset.treed = "y";
			this._openRefTreeEx(this.no, this.node);
		}
	},
	closeRefTree: function ResManipulator_closeRefTree()
	{
		if (this.node)
		{
			var nodes = $A(this.node.children).filter(function closeRefTree_findChild(x){ return x.tagName == "ARTICLE"; });
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
			{	//展開済み or Outlinkなし
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
				//目立たせる
				node.dataset.focus = "on";
				setTimeout(function focus_timeout(){ node.dataset.focus = ""; }, 1000)
			}
		}
	},
	focusNextId: function ResManipulator_focusNextId()
	{
		if (!this.node) return;
		var aids = $A(Skin.Thread.Message.Structure.getNodeIdsById(this.node.dataset.aid)).sort(AscNum);
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
		var aids = $A(Skin.Thread.Message.Structure.getNodeIdsById(this.node.dataset.aid)).sort(AscNum);
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
	_openRefTreeEx: function ResManipulator__openRefTreeEx(from, c, onclonecallback)
	{
		var rf = Skin.Thread.Message.Structure.getReplyIdsByNo(from);
		if(rf)
		{
			for(var i=0, j = rf.length; i < j; i++)
			{
				var node = Skin.Thread.Message.getNode(rf[i], true);	//ARTICLE
				if (onclonecallback)
				{
					if (onclonecallback(node) == false)
					{	//コールバックがfalseを返すときは展開しない
						return;
					}
				}
				if (rf[i] > from)
				{	//基点より前のレスは再帰的に開かない（無限ループ対策）
					this._openRefTreeEx(rf[i], node, onclonecallback);
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

//ショートカット
var Preference = Skin.Preference = Skin.Configulator.load();
var Notice = Skin.Notice;
var PopupUtil = Skin.Util.Popup;
var StringUtil = Skin.Util.String;
var DOMUtil = Skin.Util.Dom;
var $M = Skin.Thread.Message.getManipulator.bind(Skin.Thread.Message);
var $C = Content.get.bind(Content);

window.addEventListener("load", function pp3initializer(){ PP3.init(); });
