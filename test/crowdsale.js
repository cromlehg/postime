
import ether from './helpers/ether'
import {advanceBlock} from './helpers/advanceToBlock'
import {increaseTimeTo, duration} from './helpers/increaseTime'
import latestTime from './helpers/latestTime'
import EVMThrow from './helpers/EVMThrow'

const BigNumber = web3.BigNumber

const should = require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should()


const CommonSale = artifacts.require('Crowdsale')

contract('Crowdsale', function(wallets) {

  var owner = wallets[0]

  var notOwner = wallets[1]

  var newOwner = wallets[2]

  var wallet = wallets[3]

  var foundersTokensWallet = wallets[4]

  var foundersTokensPercent = 25

  const price = new BigNumber(1000000000000)

  const value = ether(42)

  const m0Period = new BigNumber(1)
  const m1Period = new BigNumber(2)
  const m2Period = new BigNumber(3)
  const m3Period = new BigNumber(4)
  const m0Bonus = new BigNumber(10)
  const m1Bonus = new BigNumber(20)
  const m2Bonus = new BigNumber(30)
  const m3Bonus = new BigNumber(40)

  const start = new BigNumber(1613205200)


  before(async function() {
   //Advance to the next block to correctly read time in the solidity "now" function interpreted by testrpc
   await advanceBlock()
  })


  beforeEach(async function () {
    this.crowdsale = await CommonSale.new()
    this.token = await his.crowdsale.token()
  })	 


})
