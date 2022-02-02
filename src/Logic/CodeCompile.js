export default function Compile() {

  // Retrieving the contents of each individual editor
  let html = document.getElementById('html');
  let css = document.getElementById('css');
  let js = document.getElementById('js');
  let code = document.getElementById('code').contentWindow.document;
  
  // Write the code in the iframe
  code.open();
  code.writeln(
      `${html.value}<style>${css.value}</style><script>${js.value}</script>`
  )
  code.close();
}