var menuItem = {
    "id": "say",
    "title": "Sayit",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId =="say" && clickData.selectionText){
        chrome.tts.speak(clickData.selectionText, {'rate': 0.9});
    }
});