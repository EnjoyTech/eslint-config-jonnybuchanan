// This file should pass linting based on the tweaks made to the standard,
// standard-jsx and standard-react presets.
import React from 'react'

// Allow == for typeof, which always returns a string
// Require Stroustrup brace style - else/catch etc. on a new line
if (typeof global == 'object') {
  console.log('global')
}
else if (typeof window == 'object') {
  console.log('window')
}

// Braces can be on same line
if (typeof window.__DATA__) { console.log('data') }

// A space after function name convention is not enforced either way
function space () {
  return 'space!'
}
function noSpace() {
  return 'no space!'
}

let OtherComponent = () => <h2>Test</h2>

let TestComponent = React.createClass({
  render() {
    // Multiline JSX statements don't need wrapping parens
    return <div className="test">
      {/* Declaration of propTypes is not enforced */}
      <h1>Test {this.props.name}</h1>
      {/* Self-closing of components without children is not enforced */}
      <OtherComponent></OtherComponent>
      {`${space()} ${noSpace()}`}
      {/* Spacing before self-closing is not enforced */}
      <OtherComponent test/>
      <OtherComponent test />
    </div>
  }
})

export default TestComponent
