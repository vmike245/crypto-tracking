import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrencySelect from './CurrencySelect';
import RatesTable from './RatesTable';
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

const testData = {
  "buy": {
    "0.06235543": {
      "quantity": 0.0225216,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06236274": {
      "quantity": 0.03372496,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06237042": {
      "quantity": 0.00833327,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06239059": {
      "quantity": 0.32056115,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0623932": {
      "quantity": 0.01602739,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0624": {
      "quantity": 0.56151024,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06240163": {
      "quantity": 0.15526308,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06240416": {
      "quantity": 0.33,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0624042": {
      "quantity": 0.2,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06240916": {
      "quantity": 0.17243999,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06240917": {
      "quantity": 22.7645,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06244114": {
      "quantity": 0.00832383,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06245946": {
      "quantity": 0.02,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06245947": {
      "quantity": 115.02321107,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06249": {
      "quantity": 79.81294244,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06249244": {
      "quantity": 0.03107359,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06249779": {
      "quantity": 0.06377873,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0625": {
      "quantity": 16.52939614,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06250003": {
      "quantity": 1.31239799,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06250099": {
      "quantity": 0.03191981,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.062501": {
      "quantity": 16.4816,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.062516": {
      "quantity": 0.2,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06251996": {
      "quantity": 0.00900119,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06252": {
      "quantity": 0.74397348,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06253013": {
      "quantity": 0.01273802,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06253031": {
      "quantity": 0.07996122,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06253037": {
      "quantity": 0.15992229,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06254": {
      "quantity": 1,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06256697": {
      "quantity": 1.59828738,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06257038": {
      "quantity": 0.11366574,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0625855": {
      "quantity": 0.13831479,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06258572": {
      "quantity": 4.75181479,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06258626": {
      "quantity": 0.1,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06259191": {
      "quantity": 0.31953011,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06259223": {
      "quantity": 3.9303,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06259399": {
      "quantity": 0.00383424,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.062594": {
      "quantity": 0.01757357,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06259412": {
      "quantity": 0.16374328,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06259422": {
      "quantity": 4.7506507,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06259588": {
      "quantity": 0.00161353,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06259989": {
      "quantity": 0.12064643,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0626": {
      "quantity": 4.29982639,
      "supportedExchanges": [
        "Bittrex",
        "Poloniex"
      ]
    },
    "0.06260042": {
      "quantity": 0.00798717,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0626006": {
      "quantity": 6.11711218,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06260331": {
      "quantity": 7.9017715,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06260515": {
      "quantity": 0.00319144,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06260581": {
      "quantity": 0.07042194,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06260649": {
      "quantity": 15.93285297,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06260765": {
      "quantity": 4,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06260803": {
      "quantity": 0.74156739,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06260863": {
      "quantity": 0.0082848,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06260917": {
      "quantity": 0.0171,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06261": {
      "quantity": 0.00796678,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0626137": {
      "quantity": 0.02311323,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06261865": {
      "quantity": 1.74069546,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06262496": {
      "quantity": 34.10497555,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06262626": {
      "quantity": 1.05555556,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06262694": {
      "quantity": 0.0676925,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06262698": {
      "quantity": 52.949,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06262856": {
      "quantity": 0.28961588,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06263755": {
      "quantity": 7.9017715,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06264818": {
      "quantity": 0.00660991,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06264819": {
      "quantity": 45.8450959,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06265": {
      "quantity": 0.35,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06265109": {
      "quantity": 0.01651328,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06265621": {
      "quantity": 0.18414719,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06266206": {
      "quantity": 0.00242636,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06266464": {
      "quantity": 0.07666,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06267231": {
      "quantity": 0.01643469,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06267251": {
      "quantity": 0.007594,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06268139": {
      "quantity": 0.5,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06268241": {
      "quantity": 0.57195231,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0626837": {
      "quantity": 0.15456441,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06268509": {
      "quantity": 0.13809504,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0626851": {
      "quantity": 0.13809502,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06268988": {
      "quantity": 0.31578775,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0626932": {
      "quantity": 0.00602011,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06269602": {
      "quantity": 0.15,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06269866": {
      "quantity": 0.01,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06269897": {
      "quantity": 0.2416,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0627": {
      "quantity": 3.41664324,
      "supportedExchanges": [
        "Bittrex",
        "Poloniex"
      ]
    },
    "0.06270552": {
      "quantity": 0.00205405,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06271063": {
      "quantity": 5.56232887,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0627108": {
      "quantity": 0.00381438,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0627141": {
      "quantity": 0.008548,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06271709": {
      "quantity": 0.3188923,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06271723": {
      "quantity": 0.07972291,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06271828": {
      "quantity": 4.75184456,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06272186": {
      "quantity": 7.84688916,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06272347": {
      "quantity": 0.163007,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0627239": {
      "quantity": 4.1451501,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06272421": {
      "quantity": 0.28951989,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0627278": {
      "quantity": 1.511,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06272805": {
      "quantity": 0.07931061,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06272831": {
      "quantity": 0.46831356,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06272968": {
      "quantity": 0.00165888,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06273339": {
      "quantity": 0.25720185,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06273972": {
      "quantity": 1.59388662,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06274": {
      "quantity": 1,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06274048": {
      "quantity": 0.1,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06274176": {
      "quantity": 0.07283188,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06274203": {
      "quantity": 0.00796914,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06274293": {
      "quantity": 0.00549175,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06274362": {
      "quantity": 0.00796894,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06274378": {
      "quantity": 0.05644784,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06274973": {
      "quantity": 0.95617936,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06275121": {
      "quantity": 0.41041917,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06275571": {
      "quantity": 0.00318697,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06275843": {
      "quantity": 0.01206394,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.062759": {
      "quantity": 0.01567,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06276032": {
      "quantity": 0.01213566,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06276156": {
      "quantity": 0.00380753,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06276222": {
      "quantity": 0.01220315,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06276412": {
      "quantity": 0.01223562,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06276426": {
      "quantity": 0.15552323,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06276602": {
      "quantity": 0.01233125,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06276748": {
      "quantity": 0.01991477,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0627679": {
      "quantity": 0.00368023,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06276792": {
      "quantity": 0.01240344,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06276982": {
      "quantity": 0.01247462,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06277": {
      "quantity": 0.22661094,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0627702": {
      "quantity": 0.00241357,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06277055": {
      "quantity": 0.25,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06277319": {
      "quantity": 0.111019,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06277552": {
      "quantity": 0.01249407,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06277601": {
      "quantity": 1,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06277723": {
      "quantity": 0.0796467,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06277742": {
      "quantity": 0.01255176,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06278024": {
      "quantity": 0.10482361,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06278031": {
      "quantity": 0.06349172,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06278581": {
      "quantity": 0.04031443,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06278668": {
      "quantity": 0.12728816,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06279": {
      "quantity": 0.17679884,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06279058": {
      "quantity": 0.32416943,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06279092": {
      "quantity": 0.0031227,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06279212": {
      "quantity": 0.097388,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06279356": {
      "quantity": 0.0171,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.062795": {
      "quantity": 4,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.062798": {
      "quantity": 0.95305472,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0628": {
      "quantity": 73.79823209,
      "supportedExchanges": [
        "Bittrex",
        "Poloniex"
      ]
    },
    "0.06280239": {
      "quantity": 0.08199433,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06280264": {
      "quantity": 0.00354295,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06280304": {
      "quantity": 0.0384191,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06280306": {
      "quantity": 0.07683787,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06280409": {
      "quantity": 8.32845079,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06280709": {
      "quantity": 0.03845032,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06280809": {
      "quantity": 0.76889948,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0628081": {
      "quantity": 1.58,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06280909": {
      "quantity": 0.01331025,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06281395": {
      "quantity": 0.15920029,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06281727": {
      "quantity": 0.125166,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06281967": {
      "quantity": 1.9454868,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06282": {
      "quantity": 0.1,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0628254": {
      "quantity": 0.08439022,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06282761": {
      "quantity": 2.003,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0628318": {
      "quantity": 0.13800796,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06283204": {
      "quantity": 0.10549187,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0628357": {
      "quantity": 0.0079241,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06283678": {
      "quantity": 0.02,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0628484": {
      "quantity": 0.31822606,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06284848": {
      "quantity": 0.02,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06285": {
      "quantity": 0.95233579,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06285101": {
      "quantity": 0.12906377,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06285753": {
      "quantity": 1.17726548,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06285806": {
      "quantity": 83.03,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06285941": {
      "quantity": 0.00160676,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06286088": {
      "quantity": 0.0060451,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06286415": {
      "quantity": 0.00165888,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0628681": {
      "quantity": 0.25905197,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06287067": {
      "quantity": 0.03835104,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06287852": {
      "quantity": 1.5863923,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06287952": {
      "quantity": 0.00174858,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06288242": {
      "quantity": 0.10900402,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06290001": {
      "quantity": 15.85850304,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0629055": {
      "quantity": 0.00395432,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06290551": {
      "quantity": 30,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06292814": {
      "quantity": 0.00199138,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06294": {
      "quantity": 5.99162734,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06299887": {
      "quantity": 0.41414541,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.063": {
      "quantity": 100.04761921,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06300003": {
      "quantity": 49.81,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06300004": {
      "quantity": 69.2410685,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06301": {
      "quantity": 2.9925,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06301311": {
      "quantity": 3.72,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06302395": {
      "quantity": 0.12368681,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06303813": {
      "quantity": 0.066,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06304": {
      "quantity": 19.7629,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06304418": {
      "quantity": 2.73461541,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0630472": {
      "quantity": 0.45610241,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06305001": {
      "quantity": 0.84057688,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06305002": {
      "quantity": 1.58604232,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06305752": {
      "quantity": 6.04,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06305754": {
      "quantity": 11.63,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06305755": {
      "quantity": 4.11841897,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06308": {
      "quantity": 19.7433,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0632": {
      "quantity": 28.92618734,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06320001": {
      "quantity": 8.30301,
      "supportedExchanges": [
        "Bittrex"
      ]
    }
  },
  "sell": {
    "0.06319": {
      "quantity": 19.7531,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0631948": {
      "quantity": 13.7379799,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06319979": {
      "quantity": 0.00198026,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0632146": {
      "quantity": 0.45875479,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06325382": {
      "quantity": 9.72629596,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06325403": {
      "quantity": 4.75322046,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06327434": {
      "quantity": 0.00336776,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06327435": {
      "quantity": 0.19584016,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0633103": {
      "quantity": 0.0039441,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06331727": {
      "quantity": 0.00974205,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06334788": {
      "quantity": 0.02372697,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06334789": {
      "quantity": 0.00790594,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06335017": {
      "quantity": 4.848,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06339": {
      "quantity": 0.1,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06339637": {
      "quantity": 0.01582112,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06342488": {
      "quantity": 0.00728175,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0634273": {
      "quantity": 1.48208927,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06342771": {
      "quantity": 5.12646942,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06343471": {
      "quantity": 12.754,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06343472": {
      "quantity": 1.359,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06343494": {
      "quantity": 3.14750489,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06343999": {
      "quantity": 0.02075465,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06344493": {
      "quantity": 408.52422151,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06344494": {
      "quantity": 68.14927839,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06344499": {
      "quantity": 2.33935572,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06344831": {
      "quantity": 4.75100197,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06345261": {
      "quantity": 0.01203386,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06346247": {
      "quantity": 5.48396833,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06348404": {
      "quantity": 0.00631655,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06349": {
      "quantity": 0.63555778,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06349208": {
      "quantity": 0.15169741,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06349492": {
      "quantity": 0.00300276,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0634978": {
      "quantity": 0.31575897,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0635": {
      "quantity": 0.09973044,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06350213": {
      "quantity": 0.26030828,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06350329": {
      "quantity": 0.00788141,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.063505": {
      "quantity": 33.9144,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06350959": {
      "quantity": 0.03123153,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06350999": {
      "quantity": 6.60484534,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06351": {
      "quantity": 0.59246913,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06351189": {
      "quantity": 0.30720735,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06351473": {
      "quantity": 19.7961,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06351816": {
      "quantity": 7.87176563,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06351943": {
      "quantity": 0.01771709,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06351999": {
      "quantity": 0.07979665,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06352": {
      "quantity": 366.72928311,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06352017": {
      "quantity": 30,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06352246": {
      "quantity": 0.62969853,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06352303": {
      "quantity": 8.35,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06352354": {
      "quantity": 0.21894173,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06352375": {
      "quantity": 0.21069369,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.063525": {
      "quantity": 0.0161467,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06352833": {
      "quantity": 0.00435664,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.063537": {
      "quantity": 0.02230912,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06354788": {
      "quantity": 2.06358659,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0635482": {
      "quantity": 0.01583062,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06355": {
      "quantity": 15.68003104,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06355682": {
      "quantity": 0.07112187,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0635602": {
      "quantity": 3.45799656,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.063561": {
      "quantity": 0.00391703,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06356603": {
      "quantity": 8,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06357107": {
      "quantity": 0.00176619,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06357115": {
      "quantity": 0.15895724,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06357149": {
      "quantity": 0.1357378,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06357855": {
      "quantity": 0.43169785,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06357888": {
      "quantity": 0.945,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06358": {
      "quantity": 0.27625977,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06358125": {
      "quantity": 0.15890672,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06358533": {
      "quantity": 0.5,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06358564": {
      "quantity": 0.62907285,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06359005": {
      "quantity": 0.15915963,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06359007": {
      "quantity": 1.31545452,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06359065": {
      "quantity": 0.15885623,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06359501": {
      "quantity": 2,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0636": {
      "quantity": 4.3859306,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06360183": {
      "quantity": 1.98,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.063605": {
      "quantity": 0.01561254,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06360544": {
      "quantity": 1.89577578,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06360893": {
      "quantity": 0.0017562,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06361427": {
      "quantity": 8,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06361541": {
      "quantity": 0.02342457,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06361929": {
      "quantity": 0.00471504,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06362": {
      "quantity": 0.01578453,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06362141": {
      "quantity": 0.11234791,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06362468": {
      "quantity": 0.06308777,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06362484": {
      "quantity": 0.00159681,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06362735": {
      "quantity": 0.2,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06362802": {
      "quantity": 0.00707688,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06362945": {
      "quantity": 2,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06363453": {
      "quantity": 0.31776294,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06363471": {
      "quantity": 0.31764845,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06363504": {
      "quantity": 14.23131989,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06363639": {
      "quantity": 0.00237154,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06363656": {
      "quantity": 0.01581591,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0636629": {
      "quantity": 0.29880835,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06366434": {
      "quantity": 0.0159518,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06366497": {
      "quantity": 0.28350478,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.063665": {
      "quantity": 3.7,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06366667": {
      "quantity": 7.9017715,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06366691": {
      "quantity": 0.35870082,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06366998": {
      "quantity": 0.08312786,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06368605": {
      "quantity": 0.01787608,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06368857": {
      "quantity": 0.04478773,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0636889": {
      "quantity": 0.88237519,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06369": {
      "quantity": 0.45902706,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06369401": {
      "quantity": 2,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06369448": {
      "quantity": 0.47470971,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06369461": {
      "quantity": 0.01030154,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06369501": {
      "quantity": 2,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06369542": {
      "quantity": 0.49925002,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06369859": {
      "quantity": 0.0245958,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0637": {
      "quantity": 0.03780844,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06370163": {
      "quantity": 1.96972616,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06370237": {
      "quantity": 0.01576826,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06370623": {
      "quantity": 0.15,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06371489": {
      "quantity": 0.02,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06371728": {
      "quantity": 0.01578049,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06371858": {
      "quantity": 0.31647314,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06372065": {
      "quantity": 0.00174088,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06372401": {
      "quantity": 2.31291702,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06372572": {
      "quantity": 0.35911507,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06372594": {
      "quantity": 0.10777134,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06372885": {
      "quantity": 24.59905506,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06373037": {
      "quantity": 1.57977882,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06373459": {
      "quantity": 0.19971161,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06373599": {
      "quantity": 0.00503664,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06373831": {
      "quantity": 0.0944587,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06374238": {
      "quantity": 0.01783867,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06374453": {
      "quantity": 0.05,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06374491": {
      "quantity": 2.455,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06374588": {
      "quantity": 15.429,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06374589": {
      "quantity": 300,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06375032": {
      "quantity": 0.03151302,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06375568": {
      "quantity": 85.80084068,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06375569": {
      "quantity": 0.04006043,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.063756": {
      "quantity": 0.15902296,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06375629": {
      "quantity": 0.01229573,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06375659": {
      "quantity": 0.00436253,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06376591": {
      "quantity": 0.00784118,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0637669": {
      "quantity": 0.00389338,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06376999": {
      "quantity": 8.91934965,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06377": {
      "quantity": 0.09266,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06377333": {
      "quantity": 8.303,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0637744": {
      "quantity": 0.12378754,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06377722": {
      "quantity": 0.01574975,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06378176": {
      "quantity": 0.35838871,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06378515": {
      "quantity": 0.01417943,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06378569": {
      "quantity": 0.00445821,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06378613": {
      "quantity": 0.18264055,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06378713": {
      "quantity": 0.02582559,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06379501": {
      "quantity": 1,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.06379578": {
      "quantity": 0.10480565,
      "supportedExchanges": [
        "Poloniex"
      ]
    },
    "0.0638": {
      "quantity": 2.93656653,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06381053": {
      "quantity": 7.9017715,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06382319": {
      "quantity": 35.25364378,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06382537": {
      "quantity": 0.47475919,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0638367": {
      "quantity": 1.2791852,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06385296": {
      "quantity": 0.45953263,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06386542": {
      "quantity": 0.4075755,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06388178": {
      "quantity": 0.02711687,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06388729": {
      "quantity": 0.15887352,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0638933": {
      "quantity": 0.32,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06389397": {
      "quantity": 0.00939056,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06389654": {
      "quantity": 0.09009591,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0639": {
      "quantity": 10.33124028,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06391": {
      "quantity": 0.124,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0639148": {
      "quantity": 0.1,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06392146": {
      "quantity": 4.80609559,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06396529": {
      "quantity": 0.01,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.063974": {
      "quantity": 0.32814748,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.063975": {
      "quantity": 0.89042662,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0639816": {
      "quantity": 0.062068,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06398345": {
      "quantity": 0.02847272,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06398999": {
      "quantity": 78.1026,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06399": {
      "quantity": 0.55050526,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06399716": {
      "quantity": 0.0353386,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06399923": {
      "quantity": 0.17868056,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.064": {
      "quantity": 636.93921782,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06400053": {
      "quantity": 0.80503015,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06400621": {
      "quantity": 0.02366957,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06400808": {
      "quantity": 4,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06400994": {
      "quantity": 0.33,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06401": {
      "quantity": 1.16743156,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06404711": {
      "quantity": 0.06348218,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06405": {
      "quantity": 7.744922,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06405274": {
      "quantity": 4.04698245,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06405633": {
      "quantity": 0.32477195,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06407": {
      "quantity": 0.46940846,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06407196": {
      "quantity": 0.00993239,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06407974": {
      "quantity": 3.5,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06409326": {
      "quantity": 0.02989635,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.0640944": {
      "quantity": 0.07336993,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06409797": {
      "quantity": 0.01247731,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06409798": {
      "quantity": 0.01247877,
      "supportedExchanges": [
        "Bittrex"
      ]
    },
    "0.06409799": {
      "quantity": 0.01247785,
      "supportedExchanges": [
        "Bittrex"
      ]
    }
  }
}

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
    console.log('Getting Order Book')
    this.setState({
      buy: testData.buy,
      sell: testData.sell
    })
    // request({
    //   uri: `https://thawing-sands-84142.herokuapp.com/getOrderBooks?from=${from}&to=${to}`,
    //   json: true
    // }).then( response => {
    //   this.setState({
    //     buy: response.buy,
    //     sell: response.sell
    //   })
    // })
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
    console.log
    return (
      <div id="body">
        <CurrencySelect currentValue={this.state.fromCurrency} onChange={this.changeFromCurrency} options={currencies}/>
        <CurrencySelect currentValue={this.state.toCurrency} onChange={this.changeToCurrency} options={currencies}/>
        <div className="tables">
          <RatesTable tableName="Buy" ratesObject={this.state.buy}/>
          <RatesTable tableName="Sell" ratesObject={this.state.sell}/>
        </div>
      </div>
    );
  }
}

export default App;
