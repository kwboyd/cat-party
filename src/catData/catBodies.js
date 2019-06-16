import featureMap from './featureMap';

// alias the features so the cats are more readable
const l = featureMap.leftEye;
const r = featureMap.rightEye;
const w = featureMap.leftWhisker;
const v = featureMap.rightWhisker;
const n = featureMap.nose;

const bodies = [
    `
         /\\_____/\\     
        /  ${l}   ${r}  \\     
       ( ${w}  ${n}  ${v} )     
        )         (     
       (           )     
      ( (  )   (  ) )     
     (__(__)___(__)__)     
    `,
    `
      /\\ ___ /\\
     (  ${l}   ${r}  ) 
      \\ ${w}${n}${v} /
      /       \\  
     /         \\       ^
    |           |     //
     \\         /    //
    `,
    `
             A___A       
       ____ / ${l} ${r} \\      
     /~____  ${w}${n}${v}/
    (______)__m_m_)
    `,
    `
     /\\___/\\     
    (  ${l} ${r}  )    
     ${w} ${n} ${v}    
      )   (    
      ooooo    
    `
]

export default bodies;

// whiskers
// >= =< (DD)
// >> << (D)
// == == (D)
// ~~ ~~ (r) 

// eyes
// o o (D)
// ^ ^ (r)
// * * (r)
// ^ * (rr)

// nose
// ^ (r)
// u (D)
// v (D)
// - (DD)

// original cats
// 
// `
//          /\\_____/\\
//         /  o   o  \\
//        ( ==  ^  == )
//         )         (
//        (           )
//       ( (  )   (  ) )
//      (__(__)___(__)__)
//     `,
//     `
//       /\\ ___ /\\
//      (  o   o  ) 
//       \\ ==^== /
//       /       \\  
//      /         \\       ^
//     |           |     //
//      \\         /    //
//     `,
//     `
//              A___A       
//        ____ / o o \\      
//      /~____  ==^==/
//     (______)__m_m_)
//     `,
//     `
//      /\\___/\\
//     (  o o  )
//      == ^ ==
//       )   (
//       ooooo
//     `
