/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../../pages/index.js'
import Footer from '../../components/Footer.js'

describe('With Enzyme', () => {
    it('Footer renders without crashing', () => {
      shallow(<Footer />);
    });
})

describe('With Snapshot Testing', () => {
    it('Footer renders without crashing', () => {
        const component = renderer.create(<Footer />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})