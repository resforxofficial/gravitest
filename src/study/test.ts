/* case 1 initial test */
import { title, it, t } from './index';

title('Type checks', () => {
  it('should check if value is a number', () => {
    t(42).expect('number');
  });

  it('should check if value is a string', () => {
    t('hello').expect('string');
  });
});

title('Math operations', () => {
  it('should add two numbers correctly', () => {
    t(1 + 2).expect('number');
  });

  it('should concatenate two strings', () => {
    t('Hello, ' + 'world!').expect('string');
  });
});
