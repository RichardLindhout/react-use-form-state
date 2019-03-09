import React from 'react';
import { useFormState } from '../src';

useFormState();
useFormState({});
useFormState(null);

interface FormFields {
  name: string;
  colors: string[];
  power_level: number;
  remember_me: boolean;
}

const initialState = {
  name: 'wsmd',
};

const [formState, input] = useFormState<FormFields>(initialState, {
  onChange(e, stateValues, nextStateValues) {
    const { name, value } = e.target;
    if (name === 'name') {
      // string
      stateValues[name].toLowerCase();
    }
    if (name === 'colors') {
      // string[]
      stateValues[name].forEach(color => console.log(color));
    }
  },
  onBlur(e) {
    const { name, value } = e.target;
  },
  onTouched(e) {
    const { name, value } = e.target;
  },
});

let name: string = formState.values.name;

formState.values.colors.forEach(color => console.log(color));

/**
 * numeric values will be retrieved as strings
 */
let level: string = formState.values.power_level;

let rememberMe: boolean = formState.values.remember_me;

/**
 * values of validity and touched will be determined via the blur event. Until
 * the even is fired, the values will be of type undefined
 */
formState.touched.colors;
formState.validity.username;

<input {...input.checkbox('name', 'value')} />;
<input {...input.radio('name', 'value')} />;
<input {...input.radio('name', true)} />;
<input {...input.radio('name', 123)} />;
<input {...input.radio('name', ['a', 'b'])} />;
<input {...input.color('name')} />;
<input {...input.date('name')} />;
<input {...input.email('name')} />;
<input {...input.month('name')} />;
<input {...input.number('name')} />;
<input {...input.password('name')} />;
<input {...input.range('name')} />;
<input {...input.search('name')} />;
<input {...input.tel('name')} />;
<input {...input.text('name')} />;
<input {...input.time('name')} />;
<input {...input.url('name')} />;
<input {...input.week('name')} />;

<select {...input.select('name')} />;
<select {...input.selectMultiple('name')} />;

<textarea {...input.textarea('name')} />;

<label {...input.label('name')} />;

input.id('name');

// typed state

interface ConnectFormState {
  user: string;
  host: string;
  password: string;
  database: string;
  port: number;
}

const [typedState] = useFormState<ConnectFormState>({
  user: 'wsmd',
  port: 80,
});

const { port, host }: { port: string; host: string } = typedState.values;

// untyped

const [state, { text }] = useFormState({
  foo: 1,
});
state.values.bar;
text('test');