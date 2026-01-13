let nums = [3,3];
let target = 6;
let result = [];

for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
        if(nums[i] + nums[j] == target){
            result.push(i, j);
            return result;
        }
    }
}

console.log(result);