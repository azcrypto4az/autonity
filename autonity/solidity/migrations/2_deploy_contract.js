const Autonity = artifacts.require("Autonity.sol");

module.exports = function(deployer, network, accounts) {
    const vals = [
        {
            "treasury": accounts[1],
            "addr": accounts[1],
            "enode": "enode://d73b857969c86415c0c000371bcebd9ed3cca6c376032b3f65e58e9e2b79276fbc6f59eb1e22fcd6356ab95f42a666f70afd4985933bd8f3e05beb1a2bf8fdde@172.25.0.11:30303",
            "commissionRate": 100,
            "bondedStake": 100,
            "totalSlashed": 0,
            "liquidContract": accounts[1],
            "liquidSupply": 0,
            "registrationBlock": 0,
            "state": 0,
        },
        {
            "treasury": accounts[2],
            "addr": accounts[2],
            "enode": "enode://1f207dfb3bcbbd338fbc991ec13e40d204b58fe7275cea48cfeb53c2c24e1071e1b4ef2959325fe48a5893de8ff37c73a24a412f367e505e5dec832813da546a@172.25.0.12:30303",
            "commissionRate": 100,
            "bondedStake": 90,
            "totalSlashed": 0,
            "liquidContract": accounts[2],
            "liquidSupply": 0,
            "registrationBlock": 0,
            "state": 0,
        },
        {
            "treasury": accounts[3],
            "addr": accounts[3],
            "enode": "enode://e766ac390e2d99b559aef773c3656fa8d50df2310496ac26ca6c3fc84e21dabb8a0162cc8e34f938d45e0a8ed04955f8ddf1c380182f8ef17a3f08885064505f@172.25.0.13:30303",
            "commissionRate": 100,
            "bondedStake": 80,
            "totalSlashed": 0,
            "liquidContract": accounts[3],
            "liquidSupply": 0,
            "registrationBlock": 0,
            "state": 0,
        },
        {
            "treasury": accounts[4],
            "addr": accounts[4],
            "enode": "enode://438a5c2cd8fdc2ecbc508bf7362e41c0f0c3754ba1d3267127a3756324caf45e6546b02140e2144b205aeb372c96c5df9641485f721dc7c5b27eb9e35f5d887b@172.25.0.14:30303",
            "commissionRate": 100,
            "bondedStake": 110,
            "totalSlashed": 0,
            "liquidContract": accounts[4],
            "liquidSupply": 0,
            "registrationBlock": 0,
            "state": 0,
        },
        {
            "treasury": accounts[5],
            "addr": accounts[5],
            "enode": "enode://3ce6c053cb563bfd94f4e0e248510a07ccee1bc836c9784da1816dba4b10564e7be1ba42e0bd8d73c8f6274f8e9878dc13814adb381c823264265c06048b4b59@172.25.0.15:30303",
            "commissionRate": 1000,
            "bondedStake": 120,
            "totalSlashed": 0,
            "liquidContract": accounts[5],
            "liquidSupply": 0,
            "registrationBlock": 0,
            "state": 0,
        },
    ];

    const config = {
        "operatorAccount": accounts[0],
        "treasuryAccount": accounts[0],
        "treasuryFee": 1,
        "minBaseFee": 5000,
        "delegationRate": 100,
        "epochPeriod": 30,
        "unbondingPeriod": 60,
        "committeeSize": 1000,
        "contractVersion": 1,
        "blockPeriod": 1,
    };

    deployer.deploy(Autonity, vals, config, { from:accounts[8]} );
};
