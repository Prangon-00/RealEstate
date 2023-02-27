import {Box} from '@chakra-ui/react';
import dynamic from "next/dynamic";
const Footer = ()=> (
    <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100">
  2022 Realtor, Inc.
    </Box>
)
export default dynamic (() => Promise.resolve(Footer), {ssr: false})