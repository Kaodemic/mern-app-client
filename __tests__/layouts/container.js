/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Container from '../../layouts/container';

it('renders ArticleItem', () => {
  const tree = renderer.create(<Container />);
  expect(tree.toJSON()).toMatchSnapshot();
});
