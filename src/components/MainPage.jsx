import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion";

export default function MainPage() {
  return (
    <Box>
      <motion.h2 animate={{
        x: 700,
      }} transition={{ duration: 2 }} drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }} >
        <Text sx={{ color: "red" }} >
        </Text>
      </motion.h2>
    </Box>
  )
}
