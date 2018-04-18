import React, { Component } from 'react';
import './App.css';
import CurrencySelect from './components/CurrencySelect';
import RatesTable from './components/RatesTable';
import * as request from 'request-promise-native';
const currencies = [
  "1ST",
  "2GIVE",
  "ABY",
  "ADA",
  "ADT",
  "ADX",
  "AEON",
  "AGRS",
  "AMP",
  "ANT",
  "APX",
  "ARDR",
  "ARK",
  "AUR",
  "BAT",
  "BAY",
  "BCC",
  "BCPT",
  "BCY",
  "BITB",
  "BITCNY",
  "BLITZ",
  "BLK",
  "BLOCK",
  "BNT",
  "BRK",
  "BRX",
  "BSD",
  "BTC",
  "BTCD",
  "BTCP",
  "BTG",
  "BTS",
  "BURST",
  "BYC",
  "CANN",
  "CFI",
  "CLAM",
  "CLOAK",
  "CLUB",
  "COVAL",
  "CPC",
  "CRB",
  "CRW",
  "CURE",
  "CVC",
  "DASH",
  "DCR",
  "DCT",
  "DGB",
  "DGD",
  "DMD",
  "DMT",
  "DNT",
  "DOGE",
  "DOPE",
  "DTB",
  "DYN",
  "EBST",
  "EDG",
  "EFL",
  "EGC",
  "EMC",
  "EMC2",
  "ENG",
  "ENRG",
  "ERC",
  "ETC",
  "ETH",
  "EXCL",
  "EXP",
  "FAIR",
  "FCT",
  "FLDC",
  "FLO",
  "FTC",
  "FUN",
  "GAM",
  "GAME",
  "GBG",
  "GBYTE",
  "GCR",
  "GEO",
  "GLD",
  "GNO",
  "GNT",
  "GOLOS",
  "GRC",
  "GRS",
  "GUP",
  "HMQ",
  "IGNIS",
  "INCNT",
  "INFX",
  "IOC",
  "ION",
  "IOP",
  "KMD",
  "KORE",
  "LBC",
  "LGD",
  "LMC",
  "LRC",
  "LSK",
  "LTC",
  "LUN",
  "MAID",
  "MANA",
  "MCO",
  "MEME",
  "MER",
  "MLN",
  "MONA",
  "MTL",
  "MUE",
  "MUSIC",
  "MYST",
  "NAV",
  "NBT",
  "NEO",
  "NEOS",
  "NLG",
  "NMR",
  "NXC",
  "NXS",
  "NXT",
  "OK",
  "OMG",
  "OMNI",
  "PART",
  "PAY",
  "PDC",
  "PINK",
  "PIVX",
  "PKB",
  "POLY",
  "POT",
  "POWR",
  "PPC",
  "PTC",
  "PTOY",
  "PXI",
  "QRL",
  "QTUM",
  "QWARK",
  "RADS",
  "RBY",
  "RCN",
  "RDD",
  "REP",
  "RISE",
  "RLC",
  "RVR",
  "SAFEX",
  "SALT",
  "SBD",
  "SC",
  "SEQ",
  "SHIFT",
  "SIB",
  "SLR",
  "SLS",
  "SNGLS",
  "SNRG",
  "SNT",
  "SPHR",
  "SPR",
  "SRN",
  "START",
  "STEEM",
  "STORJ",
  "STRAT",
  "SWIFT",
  "SWT",
  "SYNX",
  "SYS",
  "THC",
  "TIME",
  "TIX",
  "TKN",
  "TKS",
  "TRIG",
  "TRST",
  "TRUST",
  "TRX",
  "TUSD",
  "TX",
  "UBQ",
  "UKG",
  "UNB",
  "UP",
  "USDT",
  "VEE",
  "VIA",
  "VIB",
  "VRC",
  "VRM",
  "VTC",
  "VTR",
  "WAVES",
  "WAX",
  "WINGS",
  "XCP",
  "XDN",
  "XEL",
  "XEM",
  "XLM",
  "XMG",
  "XMR",
  "XMY",
  "XRP",
  "XST",
  "XVC",
  "XVG",
  "XWC",
  "XZC",
  "ZCL",
  "ZEC",
  "ZEN",
  "ZRX"
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromCurrency: "BTC",
      toCurrency:"ETH"
    };
  }
  componentDidMount() {
    this.getOrderBook(this.state.fromCurrency, this.state.toCurrency)
  }
  getOrderBook = (from, to) => {
    request({
      uri: `https://thawing-sands-84142.herokuapp.com/getOrderBooks?from=${from}&to=${to}`,
      json: true
    }).then( response => {
      this.setState({
        buy: response.buy,
        sell: response.sell
      })
    })
  }
  changeFromCurrency = ({ target }) => {
    this.setState({
      fromCurrency: target.value
    })
    this.getOrderBook(target.value, this.state.toCurrency)
  }
  changeToCurrency = ({ target }) => {
    this.setState({
      toCurrency: target.value
    })
    this.getOrderBook(this.state.fromCurrency, target.value)
  }
  render() {
    return (
      <div id="body">
        <div className="currencySelectors">
          <CurrencySelect currentValue={this.state.fromCurrency} onChange={this.changeFromCurrency} options={currencies}/>
          <span> to </span>
          <CurrencySelect currentValue={this.state.toCurrency} onChange={this.changeToCurrency} options={currencies}/>
        </div>
        <div className="tables">
          <RatesTable tableClassName="buy" tableName="Buy" ratesObject={this.state.buy}/>
          <RatesTable tableClassName="sell" tableName="Sell" ratesObject={this.state.sell}/>
        </div>
      </div>
    );
  }
}

export default App;
