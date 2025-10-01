function remove(n, m) {
    if (n.length === 0) return 0;
    let i = 0; let h = n.length - 1; 
         for (let j = 1; j < m; j++) {
             let temp = n[i];
              n[i] = n[j];
              i++;
              n[j] = n[temp];
             console.log(); 
    }
    return i + 1 ;
}

let n = [1, 2, 3, 4, 5];
let m = [3];
let newLength = remove(n, m);
console.log(n.slice(0, newLength)); 
