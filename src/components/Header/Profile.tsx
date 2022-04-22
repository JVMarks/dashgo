import { Avatar, Box, Flex, Text } from "@chakra-ui/react"


interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {
        showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>João Victor Marks</Text>
            <Text color="gray.300" fontSize="size">
              jovic.marks@gmail.com
            </Text>
          </Box>
        )
      }

      <Avatar size="md" name="João Victor Marks" src="https://avatars.githubusercontent.com/u/50274461?v=4" />
    </Flex>
  )
}