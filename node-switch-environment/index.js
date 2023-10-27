require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`})

console.log(process.env.name_ja);
console.log(process.env.name_en);