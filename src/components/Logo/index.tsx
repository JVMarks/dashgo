import { Text, TextProps } from "@chakra-ui/react";


type LogoProps = TextProps;


export function Logo({ ...rest }: LogoProps) {
  return (
    <Text
      fontSize={['2x1', '3x1']}
      fontWeight="bold"
      letterSpacing="tight"
      width="64"
    >
      dashgo
      <Text
      as="span"
      color="pink.500"
      marginLeft="1"
      >
        .
      </Text>
    </Text>
  )
}