import { describe, it, beforeEach, expect } from 'vitest';
import { WindowManager } from '../src/ventus.js';

describe('Window', () => {
  let wm;
  let testWindow;

  beforeEach(() => {
    wm = new WindowManager();
    testWindow = wm.createWindow({ title: 'test' });
  });

  it('new window should be in closed state', () => {
    expect(testWindow.closed).toBe(true);
  });

  it('sets is initialized with opened state', () => {
    testWindow.open();
    expect(testWindow.closed).toBe(false);
  });

  it('sets closed state to true when closed', () => {
    testWindow.open();
    testWindow.close();
    expect(testWindow.closed).toBe(true);
  });
});
