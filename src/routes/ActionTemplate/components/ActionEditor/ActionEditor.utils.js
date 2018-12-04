import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/tern/tern.css'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/keymap/sublime'
import 'codemirror/addon/fold/xml-fold' // Needed to match JSX
import 'codemirror/addon/edit/matchtags'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/comment/comment'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'

export const getCodeMirror = (el, doc) => {
  // Needed for Firepad to load CodeMirror
  window.CodeMirror = CodeMirror
  const cm = new CodeMirror(el, {
    value: doc,
    theme: 'oceanic',
    keyMap: 'sublime',
    indentUnit: 2,
    autoCloseBrackets: true,
    matchTags: { bothTags: true },
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    lineNumbers: true,
    lineWrapping: false,
    styleActiveLine: true,
    lint: false
  })

  return cm
}
