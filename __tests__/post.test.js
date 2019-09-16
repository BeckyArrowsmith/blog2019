/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Post from '../pages/post.js'

describe('With Enzyme', () => {
    it('App renders without crashing', () => {
        shallow(<Post />);
    });
})

describe('With Snapshot Testing', () => {
    it('Post is rendered', () => {
        const component = renderer.create(<Post />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})