// async function postResolve(student){
//    const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:'POST',
//     body: JSON.stringify(student)

//    }) 
// }

// const student={
//    stu1:'Gulsun',
//    stu2:'Gaukhar'
// }
// postResolve(student)

// for(const res in student){
//     let result=document.createElement('p')
//     result.innerHTML=student[res]
//     document.body.append(result)
// }















// async function putRes(){
//  await fetch('https://jsonplaceholder.typicode.com/update',{
//         method:'PUT',
//         body:JSON.stringify({
//             userName:'Goha',
//             userAge:14,
//             isMArried:false,
//             lang:'KG'
//         })
//     })
// }console.log(putRes);
























//  async function remove(){
//    await fetch('https://jsonplaceholder.typicode.com/delete',{
//     method:'DELETE',
//    })
// }
// remove()
















//  async function putFun (inf){
//     const response=await fetch('https://jsonplaceholder.typicode.com/posts/1',{
//         method:'PUT',
//         body:JSON.stringify(inf)
        
//     })
//  }
//  putFun ()
// const inf={
//    name:'Gaukhar',
//    age:14,
//    isMarried:false
// }
// function getRequest(){
// const response= fetch('https://jsonplaceholder.typicode.com/posts/1').then((result)=>{
// return result.json()
// }).then ((res)=>{
//   for( res in inf){
//     let resul=document.createElement('p')
//     resul.innerHTML=inf[res]
//     document.body.append(resul)
// }
// })
// }
// getRequest()