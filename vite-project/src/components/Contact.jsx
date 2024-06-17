
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from '@chakra-ui/react';


export function Contact() {
  return (
    
<Box> 
<Center fontSize={30}>
  Formúlario de contato
</Center>

<Flex>
  <Center
    w='100%'
    bg='white'
    top={50}
    boderradius={5}
    p='2'
    boxshadow={"0 1px 2px #ccc"}>

    <FormControl display='flex' flexDir='column' gap='4' mt={5}>

      <HStack spacing='5'>
      <Box w='100%'>
        <FormLabel>Nome Completo</FormLabel>
        <Input id='nome' placeholder='Nome Completo' />
      </Box>
      <Box w='100%'>
        <FormLabel>Email</FormLabel>
        <Input id='Email' placeholder='Email' />
      </Box>
      </HStack>

      <HStack spacing='5'>
        <Box w='100%'>
          <FormLabel>Data de Nascimento</FormLabel>
          <Input id='nasc' placeholder='Data de Nascimento' />
        </Box>
        <Box w='100%'>
          <FormLabel>Naturaliade</FormLabel>
          <Input id='naturalidade' placeholder='Naturaliade' />
        </Box>
      </HStack>

      
      <HStack spacing='5'>
        <Box w='100%'>
          <FormLabel>Celular</FormLabel>
          <Input id='cell' placeholder='Celular' />
        </Box>
        <Box w='100%'>
          <FormLabel>Telefone</FormLabel>
          <Input id='tell' placeholder='Telefone' />
        </Box>
      </HStack>

      
      <HStack spacing='5'>
        <Box w='100%'>
          <FormLabel>Endereço</FormLabel>
          <Input id='endereço' placeholder='Endereço' />
        </Box>
        <Box w='100%'>
          <FormLabel>Cidade</FormLabel>
          <Input id='cidade' placeholder='Cidade' />
        </Box>
      </HStack>
      
      <HStack spacing='5'>
        <Box w='100%'>
          <FormLabel>Sexo</FormLabel>
          <RadioGroup>
            <Radio value='Masculino'>Masculino</Radio>
            <Radio value='Feminino'>Feminino</Radio>
          </RadioGroup>
        </Box>
        <Box w='100%'>
          <FormLabel>Cep</FormLabel>
          <Input id='cep' placeholder='Cep' />
        </Box>
      </HStack>

     <HStack justify='center'>
      <Button 
      w={250}
      fontWeight={900}
      type='submit'
      bg='gray'
      fontSize=''
      mt={5}>
        Enviar
      </Button>
     </HStack>
    </FormControl>
  </Center>
</Flex>
</Box>

  )
}

