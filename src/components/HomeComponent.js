import Web3 from "web3";
import Button from '@mui/material/Button';
import {useState} from "react";
import {Grid} from "@mui/material";
import AssetListComponent from "./AssetListComponent";

var web3 = null;

const MY_ADDRESS = "0x3B0E3699617D4ac482B8106CF75fC80fb1203179";
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}
const HomeComponent = () => {

    const [isLoggedIn, setLoggedIn] = useState();
    const [balance, setBalance] = useState();
    const [assets, setAssets] = useState([]);



    //useEffect(()=>{},[])

    const loadMetaMaskAccount = async () => {
        if (typeof window.ethereum !== 'undefined') {
            // Instance web3 with the provided information
            web3 = new Web3(window.ethereum);
            try {
                // Request account access
                await window.ethereum.enable();
                return true
            } catch (e) {
                // User denied access
                return false
            }
        }
    }

    const doLogin = async () => {
        const enable = await loadMetaMaskAccount();
        setLoggedIn(enable)

    }

    const loadBalance = async () => {
        await web3.eth.getAccounts();
        await web3.eth.getAccounts(console.log)
        setBalance(await web3.eth.getBalance(MY_ADDRESS));
    }

    const loadAssets = async () => {
        const options = {method: 'GET'};
        const response = await fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20', options)
        const {assets} = await response.json();
        setAssets(assets);

    }

    return (
        <>
            <br/>
            {isLoggedIn && <>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                Account Balance is {balance} <Button variant="contained" name="Login" onClick={loadBalance}> Get
                                Balance </Button>
                            </Grid>
                            <Grid item xs={4}>

                            </Grid>

                            <Grid item xs={8}>
                                Assets Lists  <Button variant="contained" name="Login" onClick={loadAssets}> Get
                                Asset </Button>
                            </Grid>
                            <Grid item xs={4}>

                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <AssetListComponent assets={assets}/>
                    </Grid>

                </Grid>
            </>}

            {!isLoggedIn && <>
                <br/>
                <Button variant="contained" name="Login" onClick={doLogin}> Login By Meta Mask </Button>
            </>}

        </>
    )


}

export default HomeComponent;
