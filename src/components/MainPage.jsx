import { Box, Button, Text } from '@chakra-ui/react'
import React,  from 'react'
import { motion } from "framer-motion";


// const variants = {
//   open : {opacity:"0",x:"0"},
//   close : {opacity:"0",x:'-100%'}

// }
// export default function MainPage() {
//   const [show, setShow] = useState(false)

//   return (
//     <Box>
//       <motion.nav
//         animate={show ? "open" : 'close'}
//         variants={variants}
//         transition={{duration:0}}
//       >
//         <motion.div color={"red"}>
//         <ul>
//         <li>
//           home
//         </li>
//         </ul>
        

//         </motion.div>
//       </motion.nav>
// <motion.button 
// onClick={()=> setShow(show != show)} 
// >
// button
// </motion.button>
//     </Box>
//   )
// }

import { motion, useScroll } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '10px',
          background: 'red',
          transformOrigin: '0%',
        }}
      />
    
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.

Fringilla quam urna. Cras turpis elit, euismod eget ligula quis, imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt neque tincidunt a.

Sub-header
In eget sodales arcu, consectetur efficitur metus. Duis efficitur tincidunt odio, sit amet laoreet massa fringilla eu.

Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.

Sed sem nisi, luctus consequat ligula in, congue sodales nisl.

Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.

Sub-header
Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium.

Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique, elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex ultricies, mollis mi in, euismod dolor.

Quisque convallis ligula non magna efficitur tincidunt.

Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.

Sed sem nisi, luctus consequat ligula in, congue sodales nisl.

Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.

Sub-header
Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium.

Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique, elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex ultricies, mollis mi in, euismod dolor.

Quisque convall
  </p>   
   </>
  );
}
