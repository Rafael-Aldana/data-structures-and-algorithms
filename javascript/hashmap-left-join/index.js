'use strict';

const leftjoin = (hashmap1, hashmap2) => {
  let position = hashmap1.hash(key)
  let position2 = hashmap2.hash(key)
  let table = new hashTable();
  let k = ""
  for (i = 0; i < hashmap1.length; i++) {
    let k = position;
    for (i = 0; i < hashmap2.length; i++) {
      if (position2 === k) {
        table.set(`${k}`, k.value, position2.value);
      }
    } if (!(key in hashmap2 === k)) {
      table.set(`${k}`, k.value, null);
    }
  } return table;
}
