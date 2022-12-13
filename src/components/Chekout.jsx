import { Box, TableContainer, Table, Thead, Tbody, Tr,Th, Td,Tfoot,Text } from "@chakra-ui/react";
import React from 'react'


export default function Chekout({cart}) {
  return (
    <Box textAlign={"center"} >
    <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th> Item</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
      {cart.map((e) => (
            <Tbody>
                <Td>
                    {e.dress}
                </Td>
                <Td>
                    {e.price}
                </Td>
            </Tbody>
          ))}
            <Tfoot>
            <Text  border={"1px solid black"} width={'10em'} textAlign={"center"} color={"chocolate"} >  Total Item:  {cart.length} </Text>
            </Tfoot>
          </Table>
        </TableContainer>
    </Box>
  )
}

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
//       {cart.map((e) => (
//             <Tbody>
//                 <Td>
//                     {e.dress}
//                 </Td>
//                 <Td>
//                     {e.price}
//                 </Td>
//             </Tbody>
//           ))}
//             <Tfoot>
//             <Text color={"chocolate"} >  Total Item:  {cart.length} </Text>
//             </Tfoot>
//           </Table>
//         </TableContainer>
//     </Box>
//   );
// }
// Footer
