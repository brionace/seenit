import React from "react";
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';


import { Modal } from './Modal'
import { Card } from './Card'

configure({ adapter: new Adapter() });

  describe('<Modal />', () => {
    it('renders card when passed in', () => {
        const wrapper = shallow((
          <Modal>
            <Card />
          </Modal>
        ));
        expect(wrapper.contains(<Card />)).to.equal(true);
      });
  })