var _ = {
    map: function (arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = callback(arr[i]);
        }
        return arr;
    },
    reduce: function (arr, callback, accumulator = 0) {
        let r = accumulator;
        for (var i = 0; i < arr.length; i++) {
            r += callback(arr[i]);
        }
        return r;
    },
    find: function (arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                return arr[i]
            }
        }
        return undefined;
    },
    filter: function (arr, callback) {
        let r = []
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                r.push(arr[i]);
            }
        }
        return r;
    },
    reject: function (arr, callback) {
        let r = []
        for (var i = 0; i < arr.length; i++) {
            if (!callback(arr[i])) {
                r.push(arr[i]);
            }
        }
        return r;
    }
}


let t = [1, 2, 3, 4];

let r = _.map(t, function (v) { return v * 2; });

console.log(r);


console.log(_.reduce(r, function (v) { return v + 3; }));



console.log(_.find(r, function (o) { return o >= 6; }))

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];

console.log(_.find(users, function (o) { return o.age < 40; }));

console.log(_.filter(r, function (o) { return o < 6; }));

console.log(_.reject(r, function (o) { return o < 6; }));
