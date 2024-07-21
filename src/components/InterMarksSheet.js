import React, { useEffect, useRef } from 'react'

function InterMarksSheet() {
    let firstNameInputRef= useRef();
    let lastNameInputRef= useRef();
    let sansInputRef = useRef();
    let engInputRef = useRef();
    let mathsaInputRef = useRef();
    let mathsbInputRef = useRef();
    let PhyInputRef = useRef();
    let cheInputRef = useRef();
    let resultParaRef = useRef();
    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let sansNameResultRef = useRef();
    let engNameResultRef = useRef();
    let mathsaResultRef = useRef();
    let mathsbResultRef = useRef();
    let phyResultRef = useRef();
    let cheResultRef = useRef();


    useEffect(()=>{
        alert("welcome to our application");
    },[])




    let firstName1InputRef = useRef();
    let lastName1InputRef = useRef();
    let sans1InputRef = useRef();
    let eng1InputRef = useRef();
    let maths2aInputRef = useRef();
    let maths2bInputRef = useRef();
    let phy1InputRef = useRef();
    let che1InputRef = useRef();
    let phyPracticalInputRef = useRef();
    let chemPracticalInputRef = useRef();
    let resultPara1Ref = useRef();

    let firstName1ResultRef = useRef();
    let lastName1ResultRef = useRef();
    let sans1ResultRef = useRef();
    let eng1ResultRef = useRef();
    let maths2aResultRef = useRef();
    let maths2bResultRef = useRef();
    let phy1ResultRef = useRef();
    let che1ResultRef = useRef();
    let phyPracticalResultRef = useRef();
    let chemPracticalResultRef = useRef();
    

    

  return (
    <div>
        < form className='form'>
            <h1 className='mainHeding'>Inter Results</h1>
            <fieldset>
                <legend>Inter First Year</legend>
            <div className='formDiv'>
                <label className='formLabel'>FirstName</label>
                <input type='text' ref={firstNameInputRef}
                 onFocus={()=>{
                   
                    firstNameInputRef.current.style.backgroundColor="aqua";
                }}
                
                  
                   
                    
            
                onBlur={()=>{
                    firstNameInputRef.current.style.backgroundColor="";
                }}></input>
                <span ref={firstNameResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>LastName</label>
                <input type='text' ref={lastNameInputRef}
                 onFocus={()=>{
                    
                    lastNameInputRef.current.style.backgroundColor="aqua";
                }}
                
                onBlur={()=>{
                    
                    lastNameInputRef.current.style.backgroundColor="";
                }}></input>
                <span ref={lastNameResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Sanskrit</label>
                <input type='Number' ref={sansInputRef}
                onFocus={()=>{
                   
                    sansInputRef.current.style.backgroundColor="aqua";
                }}
                onChange={()=>{
                    // sansNameResultRef.current.innerHTML =
                    // sansInputRef.current.value  >= 35 ? "Pass":"Fail";
                    // sansNameResultRef.current.style.backgroundColor =
                    // sansInputRef.current.value  >= 35 ? "green":"red";
                if(sansInputRef.current.value  >= 35){
                    sansNameResultRef.current.innerHTML="Pass";
                    sansNameResultRef.current.style.backgroundColor ="green";

                }else{
                    sansNameResultRef.current.innerHTML="Fail";
                    sansNameResultRef.current.style.backgroundColor ="red";

                }
                   
                }}
                onBlur={()=>{
                   
                    sansInputRef.current.style.backgroundColor="";
                }}>
                </input>
                <span ref={sansNameResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>English</label>
                <input type='Number' ref={engInputRef}
                 onFocus={()=>{
                   
                    engInputRef.current.style.backgroundColor="aqua";
                }}
                onChange={()=>{
                    // engNameResultRef.current.innerHTML =
                    // engInputRef.current.value  >= 35 ? "Pass":"Fail";
                    // engNameResultRef.current.style.backgroundColor =
                    // engInputRef.current.value  >= 35 ? "green":"red";
                    if(engInputRef.current.value  >= 35){
                        engNameResultRef.current.innerHTML ="Pass";
                        engNameResultRef.current.style.backgroundColor ="green";
                        
                    }else{

                        engNameResultRef.current.innerHTML ="Fail";
                        engNameResultRef.current.style.backgroundColor ="red";
                    }
                   
                    
                }}
                onBlur={()=>{
                    console.log("English-onBlur");
                    engInputRef.current.style.backgroundColor="";
                }}></input>
                <span ref={engNameResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Maths-1A</label>
                <input type='Number' ref={mathsaInputRef}
                 onFocus={()=>{
                  
                    mathsaInputRef.current.style.backgroundColor="aqua";
                }}
                onChange={()=>{
                    // mathsaResultRef.current.innerHTML =
                    // mathsaInputRef.current.value >= 27 ? "Pass":"Fail";
                    // mathsaResultRef.current.style.backgroundColor =
                    // mathsaInputRef.current.value >= 27 ? "green":"red";
                    if(mathsaInputRef.current.value >= 27){
                        mathsaResultRef.current.innerHTML="Pass";
                    mathsaResultRef.current.style.backgroundColor ="green";
                        
    
                    }else{
                        mathsaResultRef.current.innerHTML="Fail";
                        mathsaResultRef.current.style.backgroundColor ="red";
    
                    }
                  
                    
                }}
                onBlur={()=>{
                    
                    mathsaInputRef.current.style.backgroundColor="";
                }}></input>
                <span ref={mathsaResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Maths-1B</label>
                <input type='Number' ref={mathsbInputRef}
                 onFocus={()=>{
                    
                    mathsbInputRef.current.style.backgroundColor="aqua";
                }}
                onChange={()=>{
                    // mathsbResultRef.current.innerHTML =
                    // mathsbInputRef.current.value >= 27 ? "Pass":"Fail";
                    // mathsbResultRef.current.style.backgroundColor =
                    // mathsbInputRef.current.value >= 27 ? "green":"red";
                    if(mathsbInputRef.current.value >= 27){
                        mathsbResultRef.current.innerHTML="Pass";
                        mathsbResultRef.current.style.backgroundColor="green";

                    }else{
                        mathsbResultRef.current.innerHTML ="Fail";
                        mathsbResultRef.current.style.backgroundColor="red";


                    }
                   
                    
                }}
                onBlur={()=>{
                 
                    mathsbInputRef.current.style.backgroundColor="";
                }}></input>
                <span ref={mathsbResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Physics</label>
                <input type='Number' ref={PhyInputRef}
                 onFocus={()=>{
                    
                    PhyInputRef.current.style.backgroundColor="aqua";
                }}
                onChange={()=>{
                    // phyResultRef.current.innerHTML =
                    // PhyInputRef.current.value >= 24 ? "Pass":"Fail";
                    // phyResultRef.current.style.backgroundColor =
                    // PhyInputRef.current.value >= 24 ? "green":"red";
                    if(PhyInputRef.current.value >= 24){
                        phyResultRef.current.innerHTML = "Pass";
                        phyResultRef.current.style.backgroundColor ="green"

                    }else{
                        phyResultRef.current.innerHTML ="Fail";
                        phyResultRef.current.style.backgroundColor="red";

                    }
                    
                    
                    
                }}
                onBlur={()=>{
                    
                    PhyInputRef.current.style.backgroundColor="";
                }}></input>
                <span ref={phyResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Chemistry</label>
                <input type='Number' ref={cheInputRef}
                 onFocus={()=>{
                    
                    cheInputRef.current.style.backgroundColor="aqua";
                }}
                onChange={()=>{
                    // cheResultRef.current.innerHTML =
                    // cheInputRef.current.value  >= 24 ? "Pass":"Fail";
                    // cheResultRef.current.style.backgroundColor =
                    // cheInputRef.current.value >= 24 ? "green":"red";
                    if(cheInputRef.current.value  >= 24 ){
                        cheResultRef.current.innerHTML="Pass";
                        cheResultRef.current.style.backgroundColor="green";
                        

                    }else{
                        cheResultRef.current.innerHTML="Fail";
                        cheResultRef.current.style.backgroundColor="red";

                    }

                  
                    
                }}
                onBlur={()=>{
                 
                    cheInputRef.current.style.backgroundColor="";
                }}></input>
                <span ref={cheResultRef}></span>
            </div>
            
            <p ref={resultParaRef}>Please Enter Values and Click Calculate</p>
            </fieldset>
            <div className='formDiv'>
                <button type='button' onMouseMove={()=>{
                    let firstName = firstNameInputRef.current.value;
                    let lastName = lastNameInputRef.current.value;
                    let sanMarks = Number(sansInputRef.current.value);
                    let engMarks =  Number(engInputRef.current.value);
                    let mathsaMarks =  Number(mathsaInputRef.current.value);
                    let mathsbMarks =  Number(mathsbInputRef.current.value);
                    let pyhMarks =  Number(PhyInputRef.current.value);
                    let cheMarks =  Number(cheInputRef.current.value);
                    

                    let totalMarks = sanMarks+engMarks+mathsaMarks+mathsbMarks+pyhMarks+cheMarks;
                    // alert(sansInputRef.current.value);
                    // sansInputRef.current.value=959595959;
                    // sansInputRef.current.style.backgroundColor = "red";
                     
                    // alert(`Total Marks are ${totalMarks}`);
                    resultParaRef.current.innerHTML =`${firstName} ${lastName} got total Marks are ${totalMarks}`;
                    // console.log("veeresh");
                }}>Calculate Result</button>
            </div>
        
        
        <fieldset>
            <legend>Inter Second Year</legend>
            <div className='formDiv'>
                <label className='formLabel' >FirstName</label>
                <input type='text' ref={firstName1InputRef}
                onFocus={()=>{

                    firstName1InputRef.current.style.backgroundColor="aqua";
                }}
                onBlur={()=>{
                    firstName1InputRef.current.style.backgroundColor="";

                }}></input>
                <span ref={firstName1ResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>LastName</label>
                <input type='text'ref={lastName1InputRef}
                onFocus={()=>{

                    lastName1InputRef.current.style.backgroundColor="aqua";
                }}
                onBlur={()=>{
                    lastName1InputRef.current.style.backgroundColor="";

                }}></input>
                <span ref={lastName1ResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Sanskrit</label>
                <input type='number' ref={sans1InputRef} 
                onFocus={()=>{
                    sans1InputRef.current.style.backgroundColor="aqua";
                }}
                onChange={()=>{
                    // sans1ResultRef.current.innerHTML=
                    // sans1InputRef.current.value >= 35? "😎":"😌";
                    if(sans1InputRef.current.value >= 35){
                        sans1ResultRef.current.innerHTML="😎"
                    

                    }else{
                          sans1ResultRef.current.innerHTML="😌"

                    }



                }}
                onBlur={()=>{
                    sans1InputRef.current.style.backgroundColor="";
                  
                }}
                ></input>
                <span ref={sans1ResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>English</label>
                <input type='number' ref={eng1InputRef}
                onFocus={()=>{
                    eng1InputRef.current.style.backgroundColor="aqua";
                }}
                onChange={()=>{
                    // eng1ResultRef.current.innerHTML=
                    // eng1InputRef.current.value >= 35? "😎":"😌";
                    if(eng1InputRef.current.value >= 35){
                        eng1ResultRef.current.innerHTML="😎";
                     

                    }else{
                        eng1ResultRef.current.innerHTML="😌";
                        
                    }



                }}
                onBlur={()=>{
                    eng1InputRef.current.style.backgroundColor="";
                  
                }}></input>
                <span ref={eng1ResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Maths-2A</label>
                <input type='number' ref={maths2aInputRef}
                onFocus={()=>{
                    maths2aInputRef.current.style.backgroundColor="aqua";
                }}
                onChange={()=>{
                    // maths2aResultRef.current.innerHTML=
                    // maths2aInputRef.current.value >= 27? "😎":"😌";
                    if(maths2aInputRef.current.value >= 27){
                        maths2aResultRef.current.innerHTML="😎"
                   

                    }else{
                        maths2aResultRef.current.innerHTML="😌";
                        
                    }



                }}
                onBlur={()=>{
                    maths2aInputRef.current.style.backgroundColor="";
                  
                }}></input>
                <span ref={maths2aResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Maths-2B</label>
                <input type='number' ref={maths2bInputRef}
                 onFocus={()=>{
                    maths2bInputRef.current.style.backgroundColor="aqua";
                }}
                onChange={()=>{
                    // maths2bResultRef.current.innerHTML=
                    // maths2bInputRef.current.value >= 27? "😎":"😌";
                    if(maths2bInputRef.current.value >= 27){
                        maths2bResultRef.current.innerHTML="😎";
                   

                    }else{
                        maths2bResultRef.current.innerHTML="😌"
                        
                    }



                }}
                onBlur={()=>{
                    maths2bInputRef.current.style.backgroundColor="";
                  
                }}></input>
                <span ref={maths2bResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Physics</label>
                <input type='number' ref={phy1InputRef}
                onFocus={()=>{
                    phy1InputRef.current.style.backgroundColor="aqua";
                }}
                onChange={()=>{
                    phy1ResultRef.current.innerHTML=
                    phy1InputRef.current.value >= 24? "😎":"😌";
                    if(phy1InputRef.current.value >= 24){
                        phy1ResultRef.current.innerHTML="😎";
                     

                    }else{
                        phy1ResultRef.current.innerHTML="😌";
                        
                    }



                }}
                onBlur={()=>{
                    phy1InputRef.current.style.backgroundColor="";
                  
                }}></input>
                <span ref={phy1ResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Chemistry</label>
                <input type='number' ref={che1InputRef}
                onFocus={()=>{
                    che1InputRef.current.style.backgroundColor="aqua";
                }}
                onChange={()=>{
                    // che1ResultRef.current.innerHTML=
                    // che1InputRef.current.value >= 24? "😎":"😌";
                    if( che1InputRef.current.value >= 24){
                        che1ResultRef.current.innerHTML="😎";
                       

                    }else{
                        che1ResultRef.current.innerHTML="😌";
                        
                    }



                }}
                onBlur={()=>{
                    che1InputRef.current.style.backgroundColor="";
                  
                }}></input>
                <span ref={che1ResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Physics Practical</label>
                <input type='number' ref={phyPracticalInputRef}
                 onFocus={()=>{
                    phyPracticalInputRef.current.style.backgroundColor="aqua";
                }}
                onChange={()=>{
                    // phyPracticalResultRef.current.innerHTML=
                    // phyPracticalInputRef.current.value >= 12? "😎":"😌";
                    if( phyPracticalInputRef.current.value >= 12){
                        phyPracticalResultRef.current.innerHTML="😎";
                   

                    }else{
                        phyPracticalResultRef.current.innerHTML="😌";
                    }



                }}
                onBlur={()=>{
                    phyPracticalInputRef.current.style.backgroundColor="";
                  
                }}></input>
                <span ref={phyPracticalResultRef}></span>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Chemistry Practical</label>
                <input type='number' ref={chemPracticalInputRef}
                onFocus={()=>{
                    chemPracticalInputRef.current.style.backgroundColor="aqua";
                }}
                onChange={()=>{
                    chemPracticalResultRef.current.innerHTML=
                    chemPracticalInputRef.current.value >= 12? "😎":"😌";
                    if( chemPracticalInputRef.current.value >= 12){
                        chemPracticalResultRef.current.innerHTML="😎";
                     

                    }else{
                        chemPracticalResultRef.current.innerHTML="😌";
                        
                    }



                }}
                onBlur={()=>{
                    chemPracticalInputRef.current.style.backgroundColor="";
                  
                }}></input>
                <span ref={chemPracticalResultRef}></span>
            </div>
            <p ref={resultPara1Ref}>Please Enter Values and Click Calculate</p>
            </fieldset>
            <div className='formDiv'>
                <button type='button' onMouseMove={()=>{
                    let firstName1= firstName1InputRef.current.value;
                    let lastName1 =lastName1InputRef.current.value;
                    let sanName =Number(sans1InputRef.current.value);
                    let engsName = Number(eng1InputRef.current.value);
                    let math2a =Number(maths2aInputRef.current.value);
                    let maths2b = Number(maths2bInputRef.current.value);
                    let physics =Number(phy1InputRef.current.value);
                    let chemistry =Number(che1InputRef.current.value);
                    let phyPractical = Number(phyPracticalInputRef.current.value);
                    let chePractical = Number(chemPracticalInputRef.current.value);
                    
                    
                   let totalMarks2 =sanName+engsName+math2a+maths2b+physics+chemistry
                   +phyPractical+chePractical;

                   resultPara1Ref.current.innerHTML =`${firstName1} ${lastName1} got total Marks are ${totalMarks2}`;
                    // alert(`Total Marks are ${totalMarks2}`);
                    // alert("totalMarks2");
                }}>Calculte Results</button>
            </div>
        </form>
    </div>
  )
}

export default InterMarksSheet