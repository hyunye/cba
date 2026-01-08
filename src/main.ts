import { EditorView, basicSetup } from "codemirror"
import { javascript } from "@codemirror/lang-javascript";

const container = document.querySelector('.nextInner')!
const div = document.createElement('div')
container.prepend(div)

const view = new EditorView({
  extensions: [basicSetup, javascript()],
  parent: div
})