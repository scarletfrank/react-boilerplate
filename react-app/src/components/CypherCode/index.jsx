import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { cypher } from '@codemirror/legacy-modes/mode/cypher';
import { StreamLanguage } from '@codemirror/language';
function App() {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);
    const javaLang = `MATCH (n)-[r]-(b) return r`;
    return (
        <CodeMirror
            value={javaLang}
            height="200px"
            extensions={[StreamLanguage.define(cypher)]}
            onChange={onChange}
        />
    );
}
export default App;