function consonantCount(str) {
    // ...
    let needArray=['a','i','e','o','u']
    let  strValue=str.split("") || str.split(" ")
    let needConsonant=[]
    const pattern=/\w+/gi
    // const allConsonant=/^[a-zA-Z]$/gi
// return strValue.length


     strValue.map(data=>!needArray.includes(data) && data.match('y')&& data.match(pattern) ? needConsonant.push(data):[])
return needConsonant.length
    }
  console.log(consonantCount("bcdfghjklmnpqrstvwxyz"))