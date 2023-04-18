import React, { useState } from 'react';
import './styles/App.scss';
import Main from './components/Main';

function App() {

  const [tags, setTags] = useState<string[]>([])

  const handleTags = (newTag: string) => {
    if(!tags.includes(newTag)){
    setTags([newTag, ...tags])
    }
  }

  return (
    <div className="App">
      <div className="header"></div>
      {tags.length === 0 ? null : (
        <div className="tags">{tags.map(tag => 
            <div className="tag">{tag}<button className='removeBtn'>X</button></div>
          )}</div>
      )}
      <Main handleTags={handleTags}/>
    </div>
  );
}

export default App;
