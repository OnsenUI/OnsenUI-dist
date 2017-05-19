/// <reference path="onsenui.d.ts" />
function onsStatic() {
    ons.ready(function () {
        alert('Ready!');
    });
    var onsOptions = {
        parentScope: 'ons-page'
    };
    ons.createAlertDialog('myPage.html', onsOptions);
    ons.createDialog('myPage.html');
    ons.createPopover('myPage.html');
    ons.disableAnimations();
    ons.disableAutoStatusBarFill();
    ons.enableDeviceBackButtonHandler();
    ons.forcePlatformStyling('platform');
    ons.isReady();
    ons.isWebView();
    var options = {
        message: 'text message'
    };
    ons.notification.alert(options);
    ons.notification.confirm(options);
    ons.notification.prompt(options);
    var portrait = ons.orientation.isPortrait();
    var isLandscape = ons.orientation.isLandscape();
    ons.orientation.on('eventName', null);
    ons.orientation.once('eventName', null);
    ons.orientation.off('eventName', null);
    var web = ons.platform.isWebView();
    var ios = ons.platform.isIOS();
    var iPhone = ons.platform.isIPhone();
    var iPad = ons.platform.isIPad();
    var blackBerry = ons.platform.isBlackBerry();
    var opera = ons.platform.isOpera();
    var firefox = ons.platform.isFirefox();
    var safari = ons.platform.isSafari();
    var chrome = ons.platform.isChrome();
    var ie = ons.platform.isIE();
    var ios7above = ons.platform.isIOS7above();
}
function onsPage(page) {
    page.backButtonHandler;
    page.onInfiniteScroll;
    page.data;
}
function onsCarousel(carousel, options) {
    var options = {
        animation: 'default',
        callback: Function,
        animationOptions: {}
    };
    carousel.autoScroll;
    carousel.autoScrollRatio;
    carousel.centered;
    carousel.disabled;
    carousel.first();
    carousel.getActiveIndex;
    carousel.itemCount;
    carousel.last();
    carousel.next();
    carousel.overscrollable;
    carousel.prev();
    carousel.refresh();
    carousel.setActiveIndex(6, options.animationOptions);
    carousel.swipeable;
}
function onsPullHook(pullHook) {
    pullHook.disabled;
    pullHook.height;
    pullHook.pullDistance;
    pullHook.onAction();
    pullHook.state;
    pullHook.thresholdHeight;
}
function onsAlertDialog(alertDialog) {
    var options = {
        animation: 'default',
        callback: function myFunction() { }
    };
    alertDialog.cancelable;
    alertDialog.disabled;
    alertDialog.hide(options.animation);
    alertDialog.show();
}
function onsDialog(dialog) {
    var options = {
        animation: 'default',
        callback: Function
    };
    dialog.cancelable;
    dialog.disabled;
    dialog.destroy();
    dialog.hide(options);
    dialog.show(options.animation);
}
function onsSwitch(switchVar) {
    switchVar.checkbox;
    switchVar.checked;
    switchVar.disabled;
}
function onsModal(modal) {
    var options = {
        animation: 'fade',
        animationOptions: 'none'
    };
    modal.toggle();
    modal.show();
    modal.hide(options.animation);
    modal.onDeviceBackButton;
    modal.visible;
}
function onsNavigator(navigator) {
    var options = {
        animation: 'slide',
        animationOptions: "{duration: 0.2, delay: 0.4, timing: 'ease-in'}",
        refresh: true,
        callback: function myFunction() { }
    };
    var pushOptions;
    pushOptions.options.animation = 'left';
    navigator.pushPage('myPage.html', pushOptions);
    navigator.pushPage({}, pushOptions);
    navigator.pushPage(null, pushOptions);
    navigator.insertPage(2, 'myPage2.html');
    navigator.insertPage(2, {});
    navigator.popPage();
    navigator.resetToPage('myPage.html');
    navigator.resetToPage({});
    navigator.replacePage('myPage.html');
    navigator.replacePage(null);
    navigator.bringPageTop('myPage.html');
    navigator.bringPageTop('myPage.html', {});
    navigator.options.animationOptions = 'lift';
    navigator.pushPage('', pushOptions.options.animationOptions);
    navigator.pushPage('', pushOptions.options.callback);
    var replaceOptions;
    navigator.replacePage('', replaceOptions.options.callback);
    navigator.pushPage('', 'string');
}
function onsTabbar(tabBar) {
    var options = {
        keepPage: true
    };
    tabBar.setActiveTab(2, options);
    var activeTab = tabBar.getActiveTabIndex();
    tabBar.loadPage('myPage.html');
    tabBar.setTabbarVisibility(true);
}
function onsPopover(popover) {
    var options = {
        animation: 'fade'
    };
    popover.show('#element5', options);
    popover.hide(options);
    popover.onDeviceBackButton;
    popover.cancelable;
    popover.visible;
}
function OnsSpeedDial(speedDial) {
    speedDial.disabled;
    speedDial.hide();
    speedDial.hideItems();
    speedDial.inline;
    speedDial.show();
    speedDial.showItems();
    speedDial.toggle();
    speedDial.toggleItems();
    speedDial.visible;
}
function LazyRepeat(lazyRepeat) {
    lazyRepeat.refresh();
    lazyRepeat.delegate.calculateItemHeight;
    lazyRepeat.delegate.configureItemScope;
    lazyRepeat.delegate.countItems;
    lazyRepeat.delegate.createItemContent;
    lazyRepeat.delegate.destroyItem;
}
function SplitterContent(splitterContent) {
    var options = {
        callback: Function
    };
    splitterContent.load('myPage.html', options);
    splitterContent.load({}, options);
    splitterContent.page;
}
function onsSplitterSide(splitterSide) {
    splitterSide.page;
    splitterSide.mode;
    splitterSide.isOpen;
    var options = {
        callback: function myFunction() { }
    };
    splitterSide.open(options);
    splitterSide.close(options);
    splitterSide.toggle(options);
    splitterSide.load('string', options);
}
function onsLazyRepeat(lazyRepeat) {
    lazyRepeat.refresh();
    var content = document.getElementById('#my-content');
    var delegate = {
        createItemContent: content,
        countItems: 0,
        calculateItemHeight: 0,
        destroyItem: 'string',
        configureItemScope: 0
    };
    lazyRepeat.delegate.calculateItemHeight;
    lazyRepeat.delegate.configureItemScope;
    lazyRepeat.delegate.countItems;
    lazyRepeat.delegate.createItemContent;
    lazyRepeat.delegate.destroyItem;
}
function OnsButton(button) {
    button.disabled;
}
function FabElement(fab) {
    fab.hide();
    fab.show();
    fab.toggle();
    fab.disabled;
    fab.visible;
}
function onsInput(input) {
    input.value;
    input.checked;
    input.disabled;
}
function onsRange(range) {
    range.disabled;
    range.value;
}
function onsRipple(ripple) {
    ripple.disabled;
}
function onsSplitterContent(splitterContent) {
    var options = {
        callback: function myFunction() { }
    };
    splitterContent.load('myPage.html', options);
    splitterContent.load({}, options);
}
function onsSplitter(splitter) {
    splitter.left;
    splitter.right;
    splitter.content;
    splitter.onDeviceBackButton;
}
function onsBackButton(backButton) {
    var options = {
        animation: 'string',
        animationOptions: 'string',
        callback: function myFunction() { },
        refresh: true
    };
}
function onsProgressBar(progressBar) {
    progressBar.value;
    progressBar.secondaryValue;
    progressBar.indeterminate;
}
function onsProgressCircular(progressCircular) {
    progressCircular.value;
    progressCircular.secondaryValue;
    progressCircular.indeterminate;
}
function onsPageLoader() {
    const loader = new ons.PageLoader();
    loader.load({ page: 'foobar.html', parent: document.createElement('div') }, function ({ unload, element }) { });
    loader.internalLoader = function () { };
}
