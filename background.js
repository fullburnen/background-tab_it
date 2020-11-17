browser.contextMenus.create({
    id: "background-tab_link",
    title: "Background-tab Link",
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
