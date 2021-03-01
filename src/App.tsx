import Editor from '@monaco-editor/react';
import React from 'react';

import { DesktopProvider, Desktop } from 'desktop.js'


function App() { 

  const [source, setSource] = React.useState<string | undefined>('');

  return (
    <DesktopProvider>
      <Desktop.Shortcut 
        name="Karel" 
        window={{ 
          title: "yee",
          content: (
            <Editor 
              language="typescript"
              theme="vs-dark"
              value={source}
              onChange={setSource} /> 
          )
        }} />
    </DesktopProvider>
  )
}


export default App;
