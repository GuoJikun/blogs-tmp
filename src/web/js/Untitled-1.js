// 深拷贝

const type = val => {
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
};

function deepClone(data) {
    const map = new WeakMap();

    const dp = data => {
        let result;
        const typeStr = type(data);
        if (typeStr === "object") {
            result = {};
        } else if (typeStr === "array") {
            result = [];
        } else {
            return data;
        }
        for (const key in data) {
            const value = data[key];
            const valueType = type(data[key]);

            if (map.get(value)) {
                result[key] = map.get(value);
            } else {
                if (valueType === "object") {
                    map.set(value, value);
                    result[key] = dp(value);
                } else if (valueType === "array") {
                    map.set(value, value);
                    result[key] = dp(value);
                } else {
                    result[key] = value;
                }
            }
        }
        return result;
    };
    const target = dp(data);
    console.log(map);
    return target;
}

const obj = {
    a: 1,
    b: 2,
    c: {
        aa: 1,
        bb: "2",
        cc: true,
        dd: [1, 1, 3, 4, 5, 6],
        ee: { c4: 3 },
    },
    d: [1, 2, 3, 4, 5],
    e: [{ a1: 1 }, { b2: 2 }, { c3: 3 }],
    h: undefined,
    i: null,
    j: Symbol("fo"),
    k: new Date(),
    l: /^\d+$/,
    m: function ast() {
        return -1;
    },
};

obj["f"] = obj;
obj["g"] = obj.c;

const copyObj = deepClone(obj);
copyObj.c = {
    aa: 1,
    bb: "2",
    cc: true,
    dd: [1, 1, 3, 4, 5],
    ee: { c4: 3 },
    ff: 6,
};

console.log(copyObj);
