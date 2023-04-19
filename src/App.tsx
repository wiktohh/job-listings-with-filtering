import React, { useState } from 'react';
import './styles/App.scss';
import Main from './components/Main';

import {ReactComponent as Remove} from "./images/icon-remove.svg"

function App() {

  const [tags, setTags] = useState<string[]>([])

  const handleTags = (newTag: string) => {
    if(!tags.includes(newTag)){
    setTags([newTag, ...tags])
    }
  }

  const removeTag = (tag:string) => {
    const tmp = [...tags]
    const index = tmp.indexOf(tag)
    if(index > -1){
      tmp.splice(index,1)
    }
    setTags([...tmp])
  }

  const clearTags = () => {
    setTags([])
  }
  return (
    <div className="App">
      <div className="header"></div>
      {tags.length === 0 ? null : (
        <div className="tags">
          <div className='tagWrapper'>
            {tags.map(tag => (
          <div className='tag'>
            <p className='textTag'>{tag}</p>
            <button onClick={() => removeTag(tag)} className='removeBtn'><Remove/></button>
          </div>
        )

          )}
          </div>
          <button onClick={clearTags} className='clearBtn'>Clear</button>
          </div>
      )}
      <Main handleTags={handleTags}/>
    </div>
  );
}

export default App;
