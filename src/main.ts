import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";

let view = new EditorView({
  extensions: [javascript()],
  parent: document.body
})