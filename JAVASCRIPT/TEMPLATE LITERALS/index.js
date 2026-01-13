// ? Templete Literals - allow us to embed variables or expressions directly within them,  multi-line strings, string interpolation with embedded expressions.
// ? used to make Dynamic string

// ? Nested Templates

    let x = 10, y = 15, z = 5;
    let nestedliterals = `${(y > x && y > z) ? 'Y is greater' :  
        `${x > z ? 'X is greater': 'Z is greater'}`}`;
    console.log(nestedliterals);