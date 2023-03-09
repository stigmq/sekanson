import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './o-k-02-new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1.css'

import WalletConnect from "../components/WalletConnect";

import { useAccount } from "wagmi";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

import abi from "../components/ABI.json";
import ok from "../components/ok.png";
import not from "../components/not.png";
import hourglass from "../components/hourglass.gif";


import { useEffect, useState } from "react";
import { ethers } from "ethers";
let signer;
let provider;
let client_address;
let welcomenft;
let n_address;
let n_PR;
let cost;





const OK02NewRewardsPAGEFORPRONLY1 = (props) => {

  const [connected, setconnection] = useState(false);

    // =================================================================================================
  // my code
  const { connector, address: userAccount } = useAccount();
  console.log({ connector, userAccount });



  ///GET THE COLLECTION ADDRESS AND ID FROM link
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const urlParams2 = new URLSearchParams(queryString);
  const _collec_url = urlParams.get("_collec_url"); //link example ?_collec_url=0x039e2e1DdaCA62Eb760b28C2c18e0f46eB165E26
  const _ID_url = urlParams2.get("_ID_url");
  const _ID_url2 = urlParams2.get("_ID_url2");
  //
  //const smart_contract = "0x9cdd9a5EA3DD9594237C84A6D9dDEad5B8570AD2"; 5pr
  const smart_contract = "0x2282C80d54f644C318CE818Fb7F739Ce55Cc33c5";
  //
  //
  //
  let list = [];
  let pr_list = [];
  let countlist = [];

  const [aconnected_, asetconnection_] = useState(false);
  const [whitelist, setwhitelist] = useState();
  const [nft_cost, set_nft_cost] = useState();
  const [check1, setcheck1] = useState();
  const [check2, setcheck2] = useState();
  const [prlist, setprlist] = useState();

  const [pr_, setpr_] = useState();
  const [countPR, setcountPR] = useState();

  const [money, setmoney] = useState();

  const[data_obtained, setdata] = useState(false);
  const[hourglass_, sethourglass_] = useState(false);

  const checkdata = async () => {
    let input = document.getElementById("_ID_url")?.value;
    let input2 = document.getElementById("_ID_url2")?.value;

    if (input != "") {
      let _check1 = await welcomenft.isWhitelisted(input);
      if (_check1 == true) {
        //console.log("address 1 whitelisted");
        setcheck1(true);
      }
      if (_check1 == false) {
        setcheck1(false);
      }
    }

    if (input2 != "") {
      let _check2 = await welcomenft.isWhitelisted(input2);
      if (_check2 == true) {
        //console.log("address 2 whitelisted");
        setcheck2(true);
      }

      if (_check2 == false) {
        setcheck2(false);
      }
    }

    else{
      //console.log("empty input");
    }


  };

  // funzione clessidra
  const startTimer = () => {
    // codice per far girare la clessidra
    console.log("working...");
    return (
      <div id="gif-container">
        <img src={hourglass} id="gif" alt="animated gif"></img>
      </div>
    );
  };

  const returndata = async () => {
    //const intervalId = setInterval(startTimer, 10000000000000000);
    //startTimer();


    let input = document.getElementById("_ID_url").value;
    let input2 = document.getElementById("_ID_url2").value;
    let _check1 = await welcomenft.isWhitelisted(input);
    let _check2 = await welcomenft.isWhitelisted(input2);

    if (_check1 == true) {
      //console.log("address 1 whitelisted");
      setcheck1(true);
    }
    if (_check1 == false) {
      setcheck1(false);
    }

    if (_check2 == true) {
      //console.log("address 2 whitelisted");
      setcheck2(true);
    }

    if (_check2 == false) {
      setcheck2(false);
    }

    if (_check1 != true && _check2 != true) {
      try{
          sethourglass_(true);
          await welcomenft.mint(1, input, input2, { value: cost, gasLimit: 10000000 })
          .then(() => {
                sethourglass_(false);
                })
                .catch((err) => {
                console.error(err);

                });
        }catch(err){
            console.log(err);

        }
    }

    //console.log(input);
    //console.log(input2);
    //clearInterval(intervalId);



  };
  useEffect(()=>{
    checkdata()
  },[check1,check2])

  const intervalId = setInterval(checkdata, 1000);


  async function resetconn() {
    setdata(false);
  }

  useEffect(() => {
    if (userAccount) {
      setconnection(true);
    } else {
      setconnection(false);
    }
  }, [userAccount]);

  const connection = async () => {
    await window.ethereum.enable();
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = await provider.getSigner();
    client_address = await signer.getAddress();
    setconnection(true);

    welcomenft = new ethers.Contract(smart_contract, abi, signer);
    n_address = await welcomenft.n_whitelisted();
    n_PR = await welcomenft.n_PR();
    cost = await welcomenft.cost();

    const isPR = await welcomenft.isPR(client_address);
    console.log(isPR);
    if (isPR == false) {
      const welcomeboard = await welcomenft.welcome(client_address);
      const _money = (await welcomeboard.money) / 1000000000000000000;
      console.log(_money);
      setmoney(_money);
    } else if (isPR == true) {
      const welcomeboard = await welcomenft.welcome_PR(client_address);
      const _money = (await welcomeboard.money) / 1000000000000000000;
      console.log(_money);
      setmoney(_money);
    }

    console.log(cost);
    set_nft_cost(cost / 1000000000000000000);

    console.log(n_address);
    for (let i = 0; i <= n_address + n_PR - 1; i++) {
      list[i] = await welcomenft.whitelist(i);
      console.log(list[i]);
      console.log("adding address");
    }

    setwhitelist(list);
    console.log(list);
    console.log("whitelist ready");
    prdata();
    console.log("data");

    setdata(true);
  };

  const switchAddress = async () => {
    await window.ethereum.enable();

    // Get the provider from MetaMask
    const provider_ = new ethers.providers.Web3Provider(window.ethereum);

    // Request access to the user's accounts
    await provider_.getSigner();

    // Get the user's accounts
    const accounts = await provider.listAccounts();

    // Select the first account
    const account = accounts[0];

    // Set the provider to use the selected account
    provider.resetSigningProviders(account);
  };

  const retire_r = async () => {
    await welcomenft.retire_reward();
  };

  async function switchaddress_() {
    const provider_ = new ethers.providers.Web3Provider(window.ethereum, "any");
    let accounts_ = await provider_.send("eth_requestAccounts", []);
    let account_ = accounts_[0];
    provider_.on("accountsChanged", function (accounts_) {
      account_ = accounts_[0];
      console.log(address_); // Print new address
    });

    const signer_ = provider_.getSigner();

    const address_ = await signer_.getAddress();

    console.log(address_);
  }

  function renderlist() {
    return (
      <div className="whitelist">
        <div> {whitelist[0]} </div>
        <div> {whitelist[1]} </div>
        <div> {whitelist[2]} </div>
        <div> {whitelist[3]} </div>
        <div> {whitelist[4]} </div>
        <div> {whitelist[5]} </div>
        <div> {whitelist[6]} </div>
        <div> {whitelist[7]} </div>
        <div> {whitelist[8]} </div>
        <div> {whitelist[9]} </div>
        <div> {whitelist[10]} </div>
        <div> {whitelist[11]} </div>
        <div> {whitelist[12]} </div>
        <div> {whitelist[13]} </div>
        <div> {whitelist[14]} </div>
        <div> {whitelist[15]} </div>
        <div> {whitelist[16]} </div>
        <div> {whitelist[17]} </div>
        <div> {whitelist[18]} </div>
        <div> {whitelist[19]} </div>
        <div> {whitelist[20]} </div>
        <div> {whitelist[21]} </div>
        <div> {whitelist[22]} </div>
        <div> {whitelist[23]} </div>
        <div> {whitelist[24]} </div>
        <div> {whitelist[25]} </div>
        <div> {whitelist[26]} </div>
        <div> {whitelist[27]} </div>
        <div> {whitelist[28]} </div>
        <div> {whitelist[29]} </div>
        <div> {whitelist[30]} </div>
        <div> {whitelist[31]} </div>
        <div> {whitelist[32]} </div>
        <div> {whitelist[33]} </div>
        <div> {whitelist[34]} </div>
        <div> {whitelist[35]} </div>
        <div> {whitelist[36]} </div>
        <div> {whitelist[37]} </div>
        <div> {whitelist[38]} </div>
        <div> {whitelist[39]} </div>
        <div> {whitelist[40]} </div>
        <div> {whitelist[41]} </div>
        <div> {whitelist[42]} </div>
        <div> {whitelist[43]} </div>
        <div> {whitelist[44]} </div>
        <div> {whitelist[45]} </div>
        <div> {whitelist[46]} </div>
        <div> {whitelist[47]} </div>
        <div> {whitelist[48]} </div>
        <div> {whitelist[49]} </div>
        <div> {whitelist[50]} </div>
        <div> {whitelist[51]} </div>
        <div> {whitelist[52]} </div>
        <div> {whitelist[53]} </div>
        <div> {whitelist[54]} </div>
        <div> {whitelist[55]} </div>
        <div> {whitelist[56]} </div>
        <div> {whitelist[57]} </div>
        <div> {whitelist[58]} </div>
        <div> {whitelist[59]} </div>
        <div> {whitelist[60]} </div>
        <div> {whitelist[61]} </div>
        <div> {whitelist[62]} </div>
        <div> {whitelist[63]} </div>
        <div> {whitelist[64]} </div>
        <div> {whitelist[65]} </div>
        <div> {whitelist[66]} </div>
        <div> {whitelist[67]} </div>
        <div> {whitelist[68]} </div>
        <div> {whitelist[69]} </div>
      </div>
    );
  }

  const ethers = require('ethers');

  const [trans_res, set_trans] = useState();

  const getTransactionResult_ = async() =>{

      let input = document.getElementById("_ID_url").value;
      let input2 = document.getElementById("_ID_url2").value;
      console.log(input);
      console.log(input2);
      await getTransactionResult(welcomenft, input, input2, cost);

  }

  async function getTransactionResult(contract, input1, input2, cost) {
      set_trans(false);
      console.log("start mint");
      //await welcomenft.mint(1, input1, input2, { value: cost, gasLimit: 10000000 })

      // Estimate the gas needed for the mint() function
      // const gasEstimate = await contract.estimate.mint(1, input1, input2, { value: cost });
      //
      // // Prepare the options for the transaction
      // const options = {
      //     gasLimit: gasEstimate,
      //     value: cost
      // };


      console.log("txPromise");
      // Call the mint() function on the contract
      const txPromise = await welcomenft.mint(1, input1, input2, { value: cost, gasLimit: 10000000 })
      //const txPromise = await welcomenft.mint(1, input1, input2, options);
      console.log(txPromise);


      // Wait for the transaction to be mined
      const receipt = await txPromise.wait();

      // Get the transaction status (true if success, false if failure)
      const status = receipt.status;

      // Get the output of the transaction, if any
      const output = receipt.logs[0].data;

      console.log("status: ");
      console.log(status);
      set_trans(status);
      console.log(trans_res);

      return {status, output};

  }


  async function prdata() {
    console.log("pr data");
    let pr_ = await welcomenft.PR(0);
    setpr_(pr_);
    console.log(pr_);




    let n_PR = await welcomenft.n_PR();
    console.log(n_PR);

    for (let i = 0; i <= n_PR -1 ; i++) {
      pr_list[i] = await welcomenft.PR(i);
      let countPR1_ = await welcomenft.countPR(pr_list[i]);
      countlist[i] = countPR1_/1;
    }
    setprlist(pr_list);
    console.log(pr_list);
    console.log(countlist);
    setcountPR(countlist);

  }







  return (
    <div className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-container">
      <Helmet>
        <title>
          OK-02-new-rewards-PAGE-FOR-PR-ONLY1 - AR Powered By ODlabs
        </title>
        <meta
          property="og:title"
          content="OK-02-new-rewards-PAGE-FOR-PR-ONLY1 - AR Powered By ODlabs"
        />
      </Helmet>
      <header
        data-role="Accordion"
        className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-header"
      >
        <img
          alt="logo"
          src="/playground_assets/mz-1500h.png"
          className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-image"
        />
        <div className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-separator"></div>
        <nav className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-nav">
          <NavigationLinks
            text="-"
            text1="MINT"
            text2="REWARDS"
            text3="TRY ME"
            text4="-"
            rootClassName="rootClassName28"
          ></NavigationLinks>
        </nav>
        <div
          data-role="AccordionHeader"
          className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-accordion-header"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-icon"
          >
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-role="AccordionContent"
          className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-accordion-content"
        >
          <div className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-nav1">
            <NavigationLinks rootClassName="rootClassName29"></NavigationLinks>
          </div>
        </div>
        <button className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-button button">
          ConnectWallet
        </button>

        <button className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-button2 button">
          Reset
        </button>
      </header>
      <div className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-pricing">
        <div className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-container1">
          <div className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-pricing-card">
            <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text">
              <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text01">
                YOUR ADDRESS WHITELISTED
              </span>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text02"></br>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text03"></br>
              <span> Leader Board                 Score</span>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text05"></br>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text06"></br>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text07"></br>
            </span>
            <div className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-container2">
              <ul className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-ul list">
                <li className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-li list-item">
                  <span>Text</span>
                </li>
                <li className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-li01 list-item">
                  <span>Text</span>
                </li>
                <li className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-li02 list-item">
                  <span>Text</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-pricing-card1">
            <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text11">
              <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text12">
                  PR DASHBOARD
              </span>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text13"></br>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text14"></br>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text15"></br>
              <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text16">
                      
              </span>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text17"></br>
            </span>
            <ul className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-ul1 list">
              <li className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-li03 list-item">
                <span>Text</span>
              </li>
              <li className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-li04 list-item">
                <span>Text</span>
              </li>
              <li className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-li05 list-item">
                <span>Text</span>
              </li>
            </ul>
            <ul className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-ul2 list">
              <li className="list-item"></li>
              <li className="list-item"></li>
              <li className="list-item"></li>
            </ul>
            <ul className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-ul3 list">
              <li className="list-item">
                <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text21">
                  1
                </span>
              </li>
              <li className="list-item">
                <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text22">
                  2
                </span>
              </li>
              <li className="list-item">
                <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text23">
                  3
                </span>
              </li>
            </ul>
          </div>
          <div className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-pricing-card2">
            <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text24">
              <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text25">
                PR REWARDS INTERFACE
              </span>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text26"></br>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text27"></br>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text28"></br>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text29"></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text31">
                Fee From Referral:                      ETH
              </span>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text32"></br>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text33"></br>
              <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text34">
                Expected From Airdrop:           ETH 
              </span>
              <br className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text35"></br>
            </span>
            <div className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-container3"></div>
            <button className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-button3 button">
              CLAIM
            </button>
          </div>
        </div>
      </div>
      <footer className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-footer">
        <div className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-container4">
          <nav className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-nav2">
            <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text36">
              TERM &amp; CONDITIONS
            </span>
            <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text37">
              PRIVACY
            </span>
            <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text38">
              LICENSE
            </span>
            <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text39">
              NFT PURCHASE AGREEMENT
            </span>
          </nav>
        </div>
        <div className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-separator1"></div>
        <div className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-container5">
          <span className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-text40">
            © 2023 ODLABS, All Rights Reserved.
          </span>
          <div className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-icon2"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-icon4"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-icon6"
            >
              <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
            </svg>
            <img
              alt="image"
              src="/playground_assets/r-200h.gif"
              className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-image1"
            />
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/r-200h.gif"
          className="o-k02new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1-image2"
        />
      </footer>
    </div>
  )
}

export default OK02NewRewardsPAGEFORPRONLY1
