/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('With Enzyme', () => {
    it('App renders without crashing', () => {
      shallow(<App />);
    });
})

describe('With Snapshot Testing', () => {
    it('App is rendered is rendered', () => {
        const component = renderer.create(<App />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
