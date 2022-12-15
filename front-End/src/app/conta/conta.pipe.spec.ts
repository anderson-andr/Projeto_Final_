import { ContaPipe } from './conta.pipe';

describe('ContaPipe', () => {
  it('create an instance', () => {
    const pipe = new ContaPipe();
    expect(pipe).toBeTruthy();
  });
});
