import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <a href="https://patreon.com/ancestralguidance" target="_blank" rel="noopener noreferrer">
          Patreon
        </a>
        <a href="https://twitter.com/shamansag" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a
          href="https://github.com/niseko/AncestralGuidance.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source
        </a>
      </footer>
    )
  }
}
