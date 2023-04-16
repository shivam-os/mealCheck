import {
  Card,
  Heading,
  Stack,
  CardBody,
  CardFooter,
  Button,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  HStack,
  VStack
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

const fs = () => {
  return <Card
  direction="row"
  overflow="hidden"
  variant="outline"
>

  <Stack>
    <CardBody>
      <Heading size="md">The perfect latte</Heading>

      <Text py="2">
        Caffè latte is a coffee beverage of Italian origin made with
        espresso and steamed milk.
      </Text>
    </CardBody>
  </Stack>

  <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<SettingsIcon />}
      variant="outline"
    />
    <MenuList>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Delete</MenuItem>
    </MenuList>
  </Menu>
</Card> 
  
}

export default function MealCard() {
  return (
    <HStack w="95%" justifyContent="space-between" p="1rem" boxShadow="md" border="1px solid gray">
    <VStack alignItems="flex-start">
      <Text fontSize="lg" fontWeight="bold">lorem</Text>
      <Text>Cal: 344 | Time: 08:45 PM</Text>
    </VStack>
    <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<SettingsIcon />}
      variant="outline"
    />
    <MenuList>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Delete</MenuItem>
    </MenuList>
  </Menu>
  </HStack>
  );
}
