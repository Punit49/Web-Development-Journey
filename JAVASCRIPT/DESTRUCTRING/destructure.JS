// ! destructuring is a syntax that allows you to extract values from arrays or properties from objects and assign them to variables in a clean and concise way.

// ? Object Destructuring 
    const Course = {
        Name: "JS",
        Price: 999,
        Teacher: "Hitesh"
    }

    // console.log(Course.Name); // Regular way

    const {Price} = Course;
    // console.log(Price);

// ? Array Destructuring 
    const Arr = ["Apple", "Banana", "Lichi"];
    const [first, second, third] = Arr;
    // console.log(first, third, second);

    // * Destructuring from function 
    const returnFun = () => {
        return [1, 2, 3];
    }

    const [x, y, z] = returnFun();
    // console.log(x,y,z);

    // * Renaming fields using Destructuring
    const {Name: Naam, Price: Rate, Teacher: Guru} = Course;
    console.log(Naam, Rate, Guru);