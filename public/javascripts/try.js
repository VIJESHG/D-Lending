var accounts,account;
var contractInstance;
function initContract() {
	System.new({from: accounts[0], gas: 3141592}).then(
	function(cont) {
		console.log(cont);
		contractInstance = cont;
		$("#contractAddress").html(cont.address);
		consol.log(cont.address)
	});
}
window.onload = function() {
	web3.eth.getAccounts(function(err, accs) {
	    if (err != null) {
	      alert("There was an error fetching your accounts.");
	      return;
	    }
	    if (accs.length == 0) {
	      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
	      return;
	    }
	    accounts = accs;
	    account = accounts[0];
  	    initContract();
  	});
	$("#register").click(function() {
		var val = $("#lenderAddress").val();
		lenderRegister(val);
	});
	$("#lend").click(function() {
		var val = $("#amount").val();
		var lenderAddress = $("#lenderAddress").val();
		lendMoney(lenderAddress, web3.toWei(val));
	});
	$("#withdraw").click(function() {
		var val = $("#amount").val();
		withdrawMoney(web3.toWei(val));
	});
	$("#getBalance").click(function() {
		var val = $("#walletAddress").val();
		getBalance(val);
	});	
};
