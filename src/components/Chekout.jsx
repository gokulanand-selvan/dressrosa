import { Box,Text } from '@chakra-ui/react'
import React from 'react'


export default function Chekout({cart}) {
  return (
    <Box textAlign={"center"} >
    <Text 
    style={{color:"black"}}>
      {cart.map(e => (
      <>
         Item: {e.dress} <br />
          Price: {e.price} <br />
          </>
      ))}
    </Text>
   <Text color={"chocolate"} >  Total Item:  {cart.length} </Text>
    </Box>
  )
}

// import { Box, TableContainer, Table, Thead, Tbody, Tr,Th, Td } from "@chakra-ui/react";
// import React from "react";

// export default function Tables() {
 
//   return (
//     <Box>
//         <TableContainer>
//           <Table variant="simple">
//             <Thead>
//               <Tr>
//                 <Th> Item</Th>
//                 <Th>Price</Th>
//               </Tr>
//             </Thead>
//       {data.map((e) => (
//             <Tbody>
//                 <Td>
//                     {e.name}
//                 </Td>
//                 <Td>
//                     {e.age}
//                 </Td>
//                 <Td>
//                     {e.school}
//                 </Td>
//                 <Td>
//                     {e.class}
//                 </Td>
//             </Tbody>
//           ))}
//           </Table>
//         </TableContainer>
//     </Box>
//   );
// }
// Footer
