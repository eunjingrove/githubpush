import React, { useState } from 'react'

function Detail() {
  return (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  )
}

function Question() {
  return (
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
    </p>
  )
}

function Review() {
  return (
    <p>
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    </p>
  )
}

function ContentsContainer({ listName }) {
  if (listName === 'detail') {
    return <Detail />
  } else if (listName === 'qa') {
    return <Question />
  } else {
    return <Review />
  }
}

function App() {
  const [listName, setListName] = useState('detail')
  function checkId(e) {
    setListName(e.target.id)
  }

  return (
    <div>
      <nav>
        <ul>
          <li id='detail' style={listName === 'detail' ? { color: 'red' } : { color: 'black' }} onClick={checkId}>Detail</li>
          <li id='qa' style={listName === 'qa' ? { color: 'red' } : { color: 'black' }} onClick={checkId}>Question</li>
          <li id='review' style={listName === 'review' ? { color: 'red' } : { color: 'black' }} onClick={checkId}>Review</li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </div>
  )
}

export default App