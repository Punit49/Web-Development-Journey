// ! STRINGS - JavaScript String is a sequence of characters, typically used to represent text. They are immutable (not changeble).
    let str = "Name is Punit";
    let str7 = "King";

// ? WAYS TO CREATE STRING -
    // * 1. SINGLE QUOTES 
    // * 2. DOUBLE QUOTES
    // * 3. STRING CONSTRUCTOR - RETURN OBJECT
        let str1 = new String('King');
        // console.log(str1);
    // * 4. Template Literals (String Interpolation)
    // * 5. EMPTY STRING 
        let str2 = " ";
    // * 6. MULTILINE STRING USING BACKTICKS
        // let str3 = ` 
        //             THIS IS A 
        //             STRING`
        // console.log(str3);

// ! Basic Operations on JavaScript Strings- 
// ? NOTE - String Methods does not change original value.
    // * 1. Finding the length of a String: The number of characters in a string, obtained using the length property.
    // console.log(str.length);

    // * 2. String Concatenation - You can combine two or more strings using + Operator OR Concatanation method.
        // 1. USING + 
            let str4 = " Sahu";
            // console.log(str + str4);

        // USING CONCATENATION METHOD - 
            // console.log(str.concat(str4));

    // * 3. Escape Characters - We can use escape characters in string to add single quotes, dual quotes, and backslash.
        // let newstring = "Hello My Name Is \"Punit\" ";
        // console.log(newstring);
    
    // * 4. Breaking string -
        // console.log("hello " + "Guys");

    // * 5. Find Substring of a String We can extract a portion of a string using the substring() method.
        // console.log(str.substring(0,4));

    // * 6. Convert String to Uppercase and Lowercase
        // console.log(str.toUpperCase());
        // console.log(str.toLowerCase());

    // * 7. String Search in JavaScript - Find the index of a substring within a string using indexOf() method.
        // console.log(str.indexOf("Punit"));

    // * 8. String Replace in JavaScript - Replace occurrences of a substring with another using replace() method.
        // console.log(str.replace("Punit", "Yuvraj"));

    // * 9. Trimming Whitespace from String - Remove leading and trailing whitespaces using trim() method.
        // let str5 = "  Punit    Sahu   ";
        // console.log(str5.trim());

    // * 10. Access Characters from String - Access individual characters in a string using bracket notation and charAt() method.
        // console.log(str[0]);
        // console.log(str.charAt(5));

    // * 11. String comparision - There are some inbuilt methods that can be used to compare strings such as the equality operator and another like localeCompare() method, returns the difference of ASCII values.
        // console.log(str7 == str1);
        // console.log(str1.localeCompare(str7)); //0

        // If the first string is greater than the second string, localeCompare() returns a positive value (usually 1).

    // * 12 slice - used to extract a portion of an array or a string and return it as a new array or strin.
    // types of values can be passed in slice are - starting and ending index both, only starting index and negtaive value which means string length - that number.

    let newStr = "Punit Kumar SAhu";

    // console.log(newStr.slice(6, 11));
    // console.log(newStr.slice(-10));
d
    // * 13. replace - used to find and replace a specified substring or pattern within a string with a new substring.

    let reStr = newStr.replace("Kumar", "Singh");
    // console.log(reStr);
    
    // * 14. repeat - used to create a new string by repeating the original string a specified number of times.
    let rStr = "Sorry ";
    let repeated = rStr.repeat(5);
    
    console.log(repeated);
    

