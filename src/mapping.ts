import { BigInt } from "@graphprotocol/graph-ts";
import {
  StMaster,
  AddedBatchMetadata,
  AddedCcyType,
  AddedSecTokenType,
  Approval,
  Burned,
  BurnedFullSecToken,
  BurnedPartialSecToken,
  CcyFundedLedger,
  CcyWithdrewLedger,
  Combine,
  FutureOpenInterest,
  IssuanceSubscribed,
  Minted,
  MintedSecToken,
  ReservedLedgerCcy,
  SetBatchOriginatorFee_Currency,
  SetBatchOriginatorFee_Token,
  SetFeeCcyBps,
  SetFeeCcyFix,
  SetFeeCcyMax,
  SetFeeCcyMin,
  SetFeeCcyPerMillion,
  SetFeeTokBps,
  SetFeeTokFix,
  SetFeeTokMax,
  SetFeeTokMin,
  SetFutureFeePerContract,
  SetFutureVariationMargin,
  SetInitialMarginOverride,
  TakePay2,
  TradedCcyTok,
  Transfer,
  TransferedFullSecToken,
  TransferedLedgerCcy,
  TransferedPartialSecToken,
} from "../generated/StMaster/StMaster";

// Note: If a handler doesn't require existing field values, it is faster
// _not_ to load the entity from the store. Instead, create it fresh with
// `new Entity(...)`, set the fields that should be updated and save the
// entity back to the store. Fields that were not set or unset remain
// unchanged, allowing for partial updates to be applied.

// It is also possible to access smart contracts from mappings. For
// example, the contract that has emitted the event can be connected to
// with:
//
// let contract = Contract.bind(event.address)
//
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.getCcyTypes(...)
// - contract.getFee(...)
// - contract.getLedgerEntry(...)
// - contract.getLedgerHashcode(...)
// - contract.getLedgerOwner(...)
// - contract.getLedgerOwnerCount(...)
// - contract.getLedgerOwners(...)
// - contract.getOwners(...)
// - contract.getSecToken(...)
// - contract.getSecTokenBatch(...)
// - contract.getSecTokenBatch_MaxId(...)
// - contract.getSecTokenTypes(...)
// - contract.getSecToken_BaseId(...)
// - contract.getSecToken_MaxId(...)
// - contract.getSecToken_totalBurnedQty(...)
// - contract.getSecToken_totalMintedQty(...)
// - contract.getWhitelist(...)
// - contract.name(...)
// - contract.readOnly(...)
// - contract.transfer_feePreview(...)
// - contract.transfer_feePreview_ExchangeOnly(...)
// - contract.getContractType(...)
// - contract.getContractSeal(...)
// - contract.version(...)
// - contract.unit(...)

// TODO: Formatting raw Contract Data

export function handleAddedBatchMetadata(event: AddedBatchMetadata): void {}

export function handleAddedCcyType(event: AddedCcyType): void {}

export function handleAddedSecTokenType(event: AddedSecTokenType): void {}

export function handleApproval(event: Approval): void {}

export function handleBurned(event: Burned): void {}

export function handleBurnedFullSecToken(event: BurnedFullSecToken): void {}

export function handleBurnedPartialSecToken(
  event: BurnedPartialSecToken
): void {}

export function handleCcyFundedLedger(event: CcyFundedLedger): void {}

export function handleCcyWithdrewLedger(event: CcyWithdrewLedger): void {}

export function handleCombine(event: Combine): void {}

export function handleFutureOpenInterest(event: FutureOpenInterest): void {}

export function handleIssuanceSubscribed(event: IssuanceSubscribed): void {}

export function handleMinted(event: Minted): void {}

export function handleMintedSecToken(event: MintedSecToken): void {}

export function handleReservedLedgerCcy(event: ReservedLedgerCcy): void {}

export function handleSetBatchOriginatorFee_Currency(
  event: SetBatchOriginatorFee_Currency
): void {}

export function handleSetBatchOriginatorFee_Token(
  event: SetBatchOriginatorFee_Token
): void {}

export function handleSetFeeCcyBps(event: SetFeeCcyBps): void {}

export function handleSetFeeCcyFix(event: SetFeeCcyFix): void {}

export function handleSetFeeCcyMax(event: SetFeeCcyMax): void {}

export function handleSetFeeCcyMin(event: SetFeeCcyMin): void {}

export function handleSetFeeCcyPerMillion(event: SetFeeCcyPerMillion): void {}

export function handleSetFeeTokBps(event: SetFeeTokBps): void {}

export function handleSetFeeTokFix(event: SetFeeTokFix): void {}

export function handleSetFeeTokMax(event: SetFeeTokMax): void {}

export function handleSetFeeTokMin(event: SetFeeTokMin): void {}

export function handleSetFutureFeePerContract(
  event: SetFutureFeePerContract
): void {}

export function handleSetFutureVariationMargin(
  event: SetFutureVariationMargin
): void {}

export function handleSetInitialMarginOverride(
  event: SetInitialMarginOverride
): void {}

export function handleTakePay2(event: TakePay2): void {}

export function handleTradedCcyTok(event: TradedCcyTok): void {}

export function handleTransfer(event: Transfer): void {}

export function handleTransferedFullSecToken(
  event: TransferedFullSecToken
): void {}

export function handleTransferedLedgerCcy(event: TransferedLedgerCcy): void {}

export function handleTransferedPartialSecToken(
  event: TransferedPartialSecToken
): void {}
