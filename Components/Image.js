
import Link from 'next/link';


 const ImagesBox=(props)=>{
    return(
     <>
       <b> {props.text}</b>
       {props.children}
     </>
    )
     }
 export default ImagesBox;
