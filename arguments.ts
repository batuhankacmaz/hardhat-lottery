import { network } from "hardhat"
import { networkConfig } from "./helper-hardhat-config"

module.exports = [
    networkConfig[network.config.chainId!]["vrfCoordinatorV2"],
    networkConfig[network.config.chainId!]["subscriptionId"],
    networkConfig[network.config.chainId!]["gasLane"],
    networkConfig[network.config.chainId!]["keepersUpdateInterval"],
    networkConfig[network.config.chainId!]["raffleEntranceFee"],
    networkConfig[network.config.chainId!]["callbackGasLimit"],
]
