
import React from 'react';
import chalk from 'chalk';
import { test, expect } from 'vitest';
import { render } from 'ink-testing-library';
import App from '../src/app.js';

test('greet unknown user', t => {
	const { lastFrame } = render(<App name={undefined} />);

	// t.is(lastFrame(), `Hello, ${chalk.green('Stranger')}`);
	expect(lastFrame()).toBe(`Hello, ${chalk.green('Stranger')}`);
});

test('greet user with a name', t => {
	const { lastFrame } = render(<App name="Jane" />);

	// t.is(lastFrame(), `Hello, ${chalk.green('Jane')}`);
	expect(lastFrame()).toBe(`Hello, ${chalk.green('Jane')}`);
});
