console.log('Web.Notes')

// CREATE NOTE MENU
try {
  // add create button to menu
  browser.menus.create({
    id: 'create-web-note',
    type: 'normal',
    title: 'New Note',
    contexts: ['all'],
  })

  // listen for menu clicks
  browser.menus.onClicked.addListener((info, tab) => {
    browser.tabs.sendMessage(
      tab.id,
      { greeting: "webnote-create" }
    ).catch(e => console.log(`err ${e}`))
  })
} catch (e) {
  console.log(`WebNotes Failed: ${e}`)
}
