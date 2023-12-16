import { Box } from "@chakra-ui/react"
import { PropsWithChildren } from "react"

const GlobalLayout = (props: PropsWithChildren) => {
  return (
    <Box w={'100%'}>
      { props.children }
    </Box>
  )
}

export default GlobalLayout