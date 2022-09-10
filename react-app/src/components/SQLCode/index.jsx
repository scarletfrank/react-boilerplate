import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
function App() {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);
    const javaLang = `SELECT * FROM TB_USER;`;
    return (
        <CodeMirror
            value={javaLang}
            height="200px"
            extensions={[sql({ jsx: true })]}
            onChange={onChange}
        />
    );
}
export default App;