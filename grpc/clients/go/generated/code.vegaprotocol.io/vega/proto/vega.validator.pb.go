// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: vega.proto

package proto

import (
	fmt "fmt"
	math "math"

	proto "github.com/golang/protobuf/proto"
	_ "github.com/mwitkow/go-proto-validators"
	github_com_mwitkow_go_proto_validators "github.com/mwitkow/go-proto-validators"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

func (this *Price) Validate() error {
	return nil
}
func (this *Timestamp) Validate() error {
	return nil
}
func (this *Party) Validate() error {
	return nil
}
func (this *RiskFactor) Validate() error {
	return nil
}
func (this *RiskResult) Validate() error {
	// Validation of proto3 map<> fields is unsupported.
	// Validation of proto3 map<> fields is unsupported.
	return nil
}
func (this *PeggedOrder) Validate() error {
	return nil
}
func (this *Order) Validate() error {
	if this.PeggedOrder != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.PeggedOrder); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("PeggedOrder", err)
		}
	}
	return nil
}
func (this *OrderCancellationConfirmation) Validate() error {
	if this.Order != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Order); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Order", err)
		}
	}
	return nil
}
func (this *OrderConfirmation) Validate() error {
	if this.Order != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Order); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Order", err)
		}
	}
	for _, item := range this.Trades {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Trades", err)
			}
		}
	}
	for _, item := range this.PassiveOrdersAffected {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("PassiveOrdersAffected", err)
			}
		}
	}
	return nil
}
func (this *AuctionIndicativeState) Validate() error {
	return nil
}
func (this *Trade) Validate() error {
	if this.BuyerFee != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.BuyerFee); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("BuyerFee", err)
		}
	}
	if this.SellerFee != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.SellerFee); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("SellerFee", err)
		}
	}
	return nil
}
func (this *Fee) Validate() error {
	return nil
}
func (this *TradeSet) Validate() error {
	for _, item := range this.Trades {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Trades", err)
			}
		}
	}
	return nil
}
func (this *Candle) Validate() error {
	return nil
}
func (this *PriceLevel) Validate() error {
	return nil
}
func (this *MarketDepth) Validate() error {
	for _, item := range this.Buy {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Buy", err)
			}
		}
	}
	for _, item := range this.Sell {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Sell", err)
			}
		}
	}
	return nil
}
func (this *MarketDepthUpdate) Validate() error {
	for _, item := range this.Buy {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Buy", err)
			}
		}
	}
	for _, item := range this.Sell {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Sell", err)
			}
		}
	}
	return nil
}
func (this *Position) Validate() error {
	return nil
}
func (this *PositionTrade) Validate() error {
	return nil
}
func (this *Statistics) Validate() error {
	return nil
}
func (this *Deposit) Validate() error {
	return nil
}
func (this *Withdrawal) Validate() error {
	if this.Ext != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Ext); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Ext", err)
		}
	}
	return nil
}
func (this *WithdrawExt) Validate() error {
	if oneOfNester, ok := this.GetExt().(*WithdrawExt_Erc20); ok {
		if oneOfNester.Erc20 != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.Erc20); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Erc20", err)
			}
		}
	}
	return nil
}
func (this *Erc20WithdrawExt) Validate() error {
	return nil
}
func (this *Account) Validate() error {
	return nil
}
func (this *FinancialAmount) Validate() error {
	return nil
}
func (this *Transfer) Validate() error {
	if this.Amount != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Amount); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Amount", err)
		}
	}
	return nil
}
func (this *TransferRequest) Validate() error {
	for _, item := range this.FromAccount {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("FromAccount", err)
			}
		}
	}
	for _, item := range this.ToAccount {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("ToAccount", err)
			}
		}
	}
	return nil
}
func (this *LedgerEntry) Validate() error {
	return nil
}
func (this *TransferBalance) Validate() error {
	if this.Account != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Account); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Account", err)
		}
	}
	return nil
}
func (this *TransferResponse) Validate() error {
	for _, item := range this.Transfers {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Transfers", err)
			}
		}
	}
	for _, item := range this.Balances {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Balances", err)
			}
		}
	}
	return nil
}
func (this *MarginLevels) Validate() error {
	return nil
}
func (this *MarketData) Validate() error {
	for _, item := range this.PriceMonitoringBounds {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("PriceMonitoringBounds", err)
			}
		}
	}
	for _, item := range this.LiquidityProviderFeeShare {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("LiquidityProviderFeeShare", err)
			}
		}
	}
	return nil
}
func (this *LiquidityProviderFeeShare) Validate() error {
	return nil
}
func (this *PriceMonitoringBounds) Validate() error {
	if this.Trigger != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Trigger); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Trigger", err)
		}
	}
	return nil
}
func (this *ErrorDetail) Validate() error {
	return nil
}
func (this *Transaction) Validate() error {
	return nil
}
func (this *Signature) Validate() error {
	return nil
}
func (this *SignedBundle) Validate() error {
	if this.Sig != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Sig); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Sig", err)
		}
	}
	return nil
}
func (this *NetworkParameter) Validate() error {
	return nil
}
func (this *LiquidityOrder) Validate() error {
	return nil
}
func (this *LiquidityOrderReference) Validate() error {
	if this.LiquidityOrder != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.LiquidityOrder); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("LiquidityOrder", err)
		}
	}
	return nil
}
func (this *LiquidityProvision) Validate() error {
	if this.MarketId == "" {
		return github_com_mwitkow_go_proto_validators.FieldError("MarketId", fmt.Errorf(`value '%v' must not be an empty string`, this.MarketId))
	}
	for _, item := range this.Sells {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Sells", err)
			}
		}
	}
	for _, item := range this.Buys {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Buys", err)
			}
		}
	}
	return nil
}
func (this *EthereumConfig) Validate() error {
	return nil
}
