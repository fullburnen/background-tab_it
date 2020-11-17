function get_menu_string() {
    try {
        browser.contextMenus.update( "background-tab_it-detect", { visible: true } );
        return "&Background-tab Link";
    }
    catch( e ) {
        return "Background-tab Link";
    }
}

var menu_string = get_menu_string();

browser.contextMenus.create({
    id: "background-tab_link",
    title: menu_string,
    contexts: [ "link" ],
});

browser.contextMenus.onClicked.addListener( ( info, tab ) => {
    if ( info.menuItemId === "background-tab_link" ) {
        var new_tab = browser.tabs.create({
            url: info.linkUrl,
            active: false
        });
    }
});
