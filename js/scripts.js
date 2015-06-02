function BankAccount(owner, initialAmount) {
  this.owner = owner;
  this.initialAmount = initialAmount;
  this.currentAmount = this.initialAmount;
}

BankAccount.prototype.withdraw = function() {
  var inputtedWithdrawl = parseInt($("input#withdrawl").val());
  this.currentAmount -= inputtedWithdrawl;
}

BankAccount.prototype.deposit = function() {
  var inputtedDeposit = parseInt($("input#deposit").val());
  this.currentAmount += inputtedDeposit;
}

$(function() {
  $("form#new-bank-account").submit(function(event) {
    var inputtedOwner = $("input#account-name").val();
    var inputtedInitialAmount = parseInt($("input#initial-amount").val());
    var newAccount = new BankAccount(inputtedOwner, inputtedInitialAmount);

    $("#bank-accounts").append("<li><span class='bank-account'>" + newAccount.owner + "</span></li>");
    event.preventDefault();

    $(".bank-account").last().click(function() {
      $("#create-account").slideUp("slow");
      $("#bank-accounts").fadeOut();
      $("#account-info").delay(750).fadeIn();
      $("#current").text(newAccount.currentAmount);
    });

    $("input#account-name").val("");
    $("input#initial-amount").val("");

    $("form#balance-update").submit(function(event) {

      var checkWithdrawl = parseInt($("input#withdrawl").val());
      var checkDeposit = parseInt($("input#deposit").val());
      debugger;
      if (!checkWithdrawl) {
        newAccount.deposit();
      } else if (!checkDeposit) {
        newAccount.withdraw();
      } else {
      newAccount.withdraw();
      newAccount.deposit();
      }

      $("#current").text(newAccount.currentAmount);
      event.preventDefault();
    });
  });
});
