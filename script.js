// save click location
var lastClick = null
document.addEventListener('contextmenu', e => {
  lastClick = [e.clientX, e.clientY]
})

// create note
function createNote() {
  if (!lastClick) return

  // setup note props
  
  let height = 50
  let width = 81
  let x = lastClick[0] - width/2
  let y = lastClick[1] - height/2
  let defaultText = "Put this here..."

  // create in dom
  // TODO make it so that the text area switches to a button when unfocussed
  // when dragged let the text area be moved
  let note = document.createElement('textarea')
  note.innerHTML = defaultText
  note.style.position = "absolute"
  note.style.width = `${width}px`
  note.style.height = `${height}px`
  note.style.left = `${x}px`
  note.style.top = `${y}px`
  note.style.fontSize = "15px"
  note.style.borderRadius = "5px"
  note.style.boxShadow = "black 1px 1px 5px inset"
  note.style.padding = "10px"
  document.body.appendChild(note)
}

// bg controller
browser.runtime.onMessage.addListener(message => {
  if (message.greeting === "webnote-create") createNote()
})
