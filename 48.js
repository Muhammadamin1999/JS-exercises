const func = (obj, inherited = false)=>
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
    ).filter(key => typeof obj[key]=== 'function');
    function Foo(){
         this.a = ()=> 1;
         this.b = ()=> 2;
    }

    Foo.prototype.c = () => 3;
    console.log(func(new Foo()))