
    let obj1= { a : 20 ,b:30,c:40 };

    let obj2=Object.create(obj1)
    console.log(obj2.b);

    console.log(obj1.a)

    let d='c';

    console.log(obj1[d]);

    console.log(Object.keys(obj1).length);

    console.log('a' in obj1);
    console.log(obj1.hasOwnProperty('a')); //dont come from prototypes

    let obj3 = { c: 30, d: 40 };
    let obj4 = { d: 45, e: 50 };
    Object.assign(obj1, obj3, obj4); // 
    console.log(obj1);
    console.log(obj2);
    console.log(obj3);
     console.log(obj4);

     Object.freeze(obj1);
     console.log(Object.isFrozen(obj1));

     Object.seal(obj3);
     console.log(Object.isSealed(obj3));
     console.log(Object.isExtensible(obj3));

     Object.preventExtensions(obj4);
     console.log(Object.isExtensible(obj4));

     console.log(Object.keys(obj1));
     console.log(Object.values(obj1));
     console.log(Object.entries(obj1));
     console.log(Object.getOwnPropertyNames(obj1));






  



