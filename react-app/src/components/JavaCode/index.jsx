import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
function App() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);
  const javaLang = `"System.out.println("Hello World!")`;
  return (
    <CodeMirror
      value={javaLang}
      height="200px"
      extensions={[java({ jsx: true })]}
      onChange={onChange}
    />
  );
}
export default App;