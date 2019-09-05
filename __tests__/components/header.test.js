/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../../pages/index.js'
import Header from '../../components/Header.js'

describe('With Enzyme', () => {
    it('Header renders without crashing', () => {
      shallow(<Header />);
    });
})

describe('With Snapshot Testing', () => {
    it('Header renders without crashing', () => {
        const component = renderer.create(<Header />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})