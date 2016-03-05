import 'babel-polyfill';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Panel } from './../src/';

function setup() {
  let renderer = TestUtils.createRenderer();
  renderer.render(<Panel />)
  let output = renderer.getRenderOutput();

  return {
    output,
    renderer
  }
}

describe('components', () => {
  describe('Panel', () => {
    it('should render', () => {
      const { output } = setup();
      expect(output.type).toExist();
    });
  })
})