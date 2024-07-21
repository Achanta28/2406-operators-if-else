import React from 'react'

function Operator() {
    let score =0;
   
  return (
    
    <div>
        <h1>operators</h1>
        <button className='but'
        onClick={()=>{
            let a=45+36;
            console.log(a);
            let b = a;
            console.log(b);
            let c=5;
            let d = 5;
            console.log(d-c);
            console.log(c*d);
            console.log(c%d);
        }}>Arthmetic Operators</button>
         <button className='but'
        onClick={()=>{
            // let score =1;
           console.log(score++)
        }}>Increment</button>
         <button className='but'
        onClick={()=>{
            // let score =1;
           console.log(score--)
        }}>Decrement</button>
         <button className='but'
        onClick={()=>{
           let f = 2*3*9;
           console.log(f)
        }}>Operator Precedence</button>
        <button className='but'
        onClick={()=>{
          let a = 7;
          a+=7;
        a*=7;
        a-=5;
          console.log(a);
        }}>Assaignment Operators</button>
      <button className='but'
        onClick={()=>{
        let sansMarks =55;
        console.log(sansMarks >= 10);
        console.log(sansMarks <= 10);
        console.log(sansMarks == 10);
        console.log(sansMarks != 55);
        console.log(sansMarks < 56);
        console.log(sansMarks > 56);
        //     let a = 10;
        //    if(a<=20){
        //     console.log("a is big")

        //    }else{
        //     console.log("a is small")
        //    }

        }}>Comparision Operator</button>
    </div>
  )
}

export default Operator