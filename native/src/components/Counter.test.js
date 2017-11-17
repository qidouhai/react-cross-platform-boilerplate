import assert from 'assert';
import Counter from './Counter';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import { Button, Text, View, StatusBar } from 'react-native';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Counter', () => {

    let props = {};

    beforeEach(() => {
        props.count = 0;
        props.onClickDecrement = sinon.stub();
        props.onClickIncrement = sinon.stub();
        props.onClickReset = sinon.stub();
    });

    it('should render count', () => {
        const wrapper = shallow(<Counter {...props} count={1} />);

        assert.ok(wrapper.contains(<Text>Count: 1</Text>));
    });

    it('should be able to click decrement', () => {
        const wrapper = shallow(<Counter {...props} />);

        wrapper.find('[title="Decrement"]').simulate('press');

        assert.ok(props.onClickDecrement.called);
    });
});
