import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from 'apexcharts';
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/SideBar";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options: ApexOptions = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: theme.colors.gray['500'],
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
  xaxis: {
    type: 'datetime',
    axisBorder: { color: theme.colors.gray['600'] },
    axisTicks: { color: theme.colors.gray['600'] },
    categories: [
      '2021-04-02T00:00:00:00.000Z',
      '2021-04-03T00:00:00:00.000Z',
      '2021-04-04T00:00:00:00.000Z',
      '2021-04-05T00:00:00:00.000Z',
      '2021-04-06T00:00:00:00.000Z',
      '2021-04-07T00:00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: 'series1', data: [57, 36, 13, 29, 6, 19] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />


      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}