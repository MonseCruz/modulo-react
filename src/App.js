import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import Clock from './components/Clock/Clock'
import Card from './components/Card/Card'
import Popular from './components/Popular/Popular'
import Counter from './components/Counter/Counter';

const data = [
  {
    'category':'PROGRAMMING',
    'title':'8 VS Code Extensions You Might Love',
    'description':'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more',
    'author':'Marvin Wendt in Better Programming',
    'publicationDate':'May 4',
    'readTime':'3 min read'
  },
  {
    'category':'PROGRAMMING',
    'title':'Solving the Mysteries of Pure CSS Dropdowns',
    'description':'How it works and why it works, with code',
    'author':'Aphinya Dechalert',
    'publicationDate':'Apr 16',
    'readTime':'11 min read'
  },
  {
    'category':'BASED ON YOUR READING HISTORY',
    'title':'React UX: Master the Scroll',
    'description':'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more',
    'author':'Marvin Wendt in Better Programming',
    'publicationDate':'May 4',
    'readTime':'26 min read'
  }
]

const dataPopular = [
  {
    'number':'01',
    'title':'The CEO of Airbnb Taught Us an Extraordinary Lesson When He Fired 25% of His Company',
    'author':'Tim Denning in Mind Cafe',
    'publicationDate':'May 10',
    'readTime':'10 min read'
  },
  {
    'number':'02',
    'title':'How Sunlight, the Immune System, and Covid-19 Interact',
    'author':'Markham Heid in Elemental',
    'publicationDate':'May 13',
    'readTime':'10 min read'
  },
  {
    'number':'03',
    'title':'Inslee announces contact tracing initiative',
    'author':'WA Governor’s Office in Washington State',
    'publicationDate':'May 12',
    'readTime':'3 min read'
  }
]

export default class App extends Component {

  _renderCards() {
    return data.map(({
      category,
      title,
      description,
      author,
      publicationDate,
      readTime
    }) => {
      return (
        <Card 
          category={category}
          title={title}
          description={description}
          author={author}
          publicationDate={publicationDate}
          readTime={readTime}
        />
      )
    })
  }
  
  _renderPopulars() {
    return dataPopular.map(({
      number,
      title,
      author,
      publicationDate,
      readTime
    }) => {
      return (
        <Popular 
          number={number}
          title={title}
          author={author}
          publicationDate={publicationDate}
          readTime={readTime}
        />
      )
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
        { <Clock /> }
        { <Counter /> }
        </header>
        <div className="container-body">
          <div className='cards-container'>
            {this._renderCards()}
          </div>
          <div className='populars-container'>
            {this._renderPopulars()}
          </div>
        </div>
       
      </div>
    )
  }
}
