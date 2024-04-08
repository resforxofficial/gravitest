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

title("array and object", () => {
  it("should be array", () => {
    t([]).expect("any[]" || "object");
  });

  it("should be array_2", () => {
    // t([1, 2, 3]).expect("number[]" || "");
  });

  it("should be array_3", () => {
    t(["hello", "world"]).expect("string[]" || "object");
  });

  it("should be Object", () => {
    t({}).expect("object");
  });
});

const a = {};
console.log(typeof a);
const b = { a: 1 };
console.log(typeof b);

const t2 = [1, 2, 3];
console.log(typeof t2);

function returng(id: number | string) {
  return { id, name: `user${id}@fake.com`}
}

title("toequal jest test", () => {
  it("toequal test", () => {
    t(returng(1)).expect("object");
  });
});

console.log(typeof returng);

// title("spfunc test", () => {
//   it("spfunc test", () => {
//   });
// });

async function get() {
  return { id: 2, name: "jonh", actual: "foo" }
}

title("async test", () => {
  it("async test", async () => {
    const res = await get();
    t(res).tasync(get(), "object")
  });
});