import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './assets/init-data';
import ReactConcept from './components/ReactConcept';
import ReactConceptChildrenProp from './components/ReactConceptChildrenProp';
import cuteKitten from "./assets/kitten.jfif";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <ReactConcept title={data[0].title} description={data[0].description} kitten={data[0].kitten}></ReactConcept>
      <ReactConcept title={data[1].title} description={data[1].description} kitten={data[1].kitten}></ReactConcept>
      <ReactConcept title={data[2].title} description={data[2].description} kitten={data[2].kitten}></ReactConcept>
      <ReactConcept title={data[3].title} description={data[3].description} kitten={data[3].kitten}></ReactConcept>
      <h1>Pod timto je varianta vytvorena pomoci children prop</h1>
      <ReactConceptChildrenProp>{data[0]}</ReactConceptChildrenProp>
      <ReactConceptChildrenProp>{data[1]}</ReactConceptChildrenProp>
      <ReactConceptChildrenProp>{data[2]}</ReactConceptChildrenProp>
      <ReactConceptChildrenProp>{data[3]}</ReactConceptChildrenProp>
      <img src={cuteKitten}></img>
    </div>
  )
}

export default App
