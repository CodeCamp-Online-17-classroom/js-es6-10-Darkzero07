// จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

function cloneObject(obj) {
    return {...obj}
}

const originalObject = { a: 1, b: 2, c: 3 };
const clonedObject = cloneObject(originalObject);

console.log(originalObject); // { a: 1, b: 2, c: 3 }
console.log(clonedObject); // { a: 1, b: 2, c: 3 }