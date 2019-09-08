/* eslint-env jest */

import * as React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Footer from '../../components/Footer.js'


describe('With Enzyme', () => {
    it('Check Footer has rendered links', function () {
        const wrap = mount(<Footer />)
        expect(wrap.find('footer').text()).toContain('GitHub')
    })
})

describe('With Snapshot Testing', () => {
    it('App is rendered is rendered', () => {
        const component = renderer.create(<Footer />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})