/* eslint-env jest */

import * as React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Header from '../../components/Header.js'


describe('With Enzyme', () => {
    it('Check Header has rendered H1', function () {
        const wrap = mount(<Header />)
        expect(wrap.find('header').text()).toContain('becky.codes')
    })
})

describe('With Snapshot Testing', () => {
    it('App is rendered is rendered', () => {
        const component = renderer.create(<Header />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})