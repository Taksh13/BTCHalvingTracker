import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import { Center, color, StylesProvider, Wrap, WrapItem, Text, Flex } from "@chakra-ui/react"
import axios from 'axios'
import './App.css';

function App() {

  let [currentBlockNumber, setCurrentBlockNumber] = useState(0)
  let [currentBitcoinPrice, setCurrentBitcoinPrice] = useState(0)
  let [chartData, setChartData] = useState({});
  let [btcPrice, setBtcPrice] = useState({});

  useEffect(() => {
    axios.get("https://api.blockcypher.com/v1/btc/main")
      .then((response) => {
        console.log("look here", response.data)
        setCurrentBlockNumber(response.data.height)
      })
      .catch((err) => {
        console.log("error", err)
      })
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        console.log("$", response.data)
        setCurrentBitcoinPrice(response.data.bpi.USD.rate)
      })
      .catch((err) => {
        console.log("error", err)
      })
  }, [])

  return (
    <div className="">
      <Flex align="center" justify="center">
        <Text color="#3B7080" fontSize="50px" textAlign="center">
          Bitcoin Halving Rate Tracker
        </Text>
      </Flex>
      {/* spacing 30 before */}
      <Wrap spacing="-15px" justify="center">
        <WrapItem d="flex" justifyContent="center" alignItems="center"
          w="450px" h="200px" bg="white" borderRadius="px"
          border="2px solid #3B7080"
        >
          <Text color="#3B7080">
            <h2 align={'center'}>Current BTC Price</h2>
            <h3 align={'center'}>{currentBitcoinPrice}</h3>
          </Text>
        </WrapItem>
        <WrapItem d="flex" justifyContent="center" alignItems="center"
          w="450px" h="200px" bg="white" borderRadius="px"
          border="2px solid #3B7080"
        >
          <Center >
            <Text color="#3B7080">
              <h2 align={'center'}>Last Halving Date and Block Number</h2>
              <h3 align={'center'}>11 May 2020, Block Number 630,000</h3>
            </Text>

          </Center>
        </WrapItem>
        <WrapItem d="flex" justifyContent="center" alignItems="center"
          w="450px" h="200px" bg="white" borderRadius="px"
          border="2px solid #3B7080"
        >
          <Center >
            <Text color="#3B7080">
              <h2 align={'center'}>Current Block Number</h2>
              <h3 align={'center'}>{currentBlockNumber}</h3>
            </Text>
          </Center>
        </WrapItem>
        <WrapItem d="flex" justifyContent="center" alignItems="center"
          w="450px" h="200px" bg="white" borderRadius="px"
          border="2px solid #3B7080"
        >
          <Center >
            <Text color="#3B7080">
              <h2 align={'center'}>Blocks Remaining Till Next Halvening</h2>
              <h3 align={'center'}>{(630000 + 210000) - currentBlockNumber}</h3>
            </Text>
          </Center>
        </WrapItem>
      </Wrap >
    </div >
  );
}

export default App;
//boxShadow="10px 10px 12px 2px rgba(255, 255, 255, .5)"