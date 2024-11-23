// Solana Volume Bot - Advanced Trading Features
// Version: 3.0

const botFeatures = {
    name: "Solana Volume Bot Pro",
    version: "3.0",

    // Contact to Purchase Bot
    Telegram: "metaDevxi",
    
    // Basic Trading Commands
    tradingCommands: {
        '/start': {
            description: 'Start the trading bot',
            usage: '/start',
            features: [
                'Initiates all trading operations',
                'Activates set strategies',
                'Begins volume generation',
                'Monitors market conditions'
            ]
        },
        
        '/stop': {
            description: 'Stop all trading activities',
            usage: '/stop',
            features: [
                'Safely closes all active trades',
                'Stops volume generation',
                'Preserves trading data',
                'Emergency stop capability'
            ]
        },
        
        '/status': {
            description: 'Check current bot status',
            usage: '/status',
            features: [
                'Real-time trading status',
                'Active pairs information',
                'Current volume stats',
                'Wallet balances',
                'Active strategies'
            ]
        },
        
        '/volume': {
            description: 'Adjust trading volume',
            usage: '/volume [amount]',
            features: [
                'Set daily volume limits',
                'Adjust per-trade volume',
                'Volume distribution settings',
                'Custom volume patterns'
            ]
        },
        
        '/pairs': {
            description: 'Manage trading pairs',
            usage: '/pairs [add/remove] [pair]',
            features: [
                'Add/remove trading pairs',
                'Set pair priorities',
                'Configure pair-specific settings',
                'View pair performance'
            ]
        }
    },

    // Wallet Management
    walletCommands: {
        '/Generate Wallet': {
            description: 'Generate main trading wallet',
            usage: '/Generate Wallet',
            features: [
                'Creates secure main wallet',
                'Generates unique keypair',
                'Sets up wallet permissions',
                'Initializes trading capability'
            ]
        },

        '/Generate Sub Wallets': {
            description: 'Generate multiple sub wallets',
            usage: '/Generate Sub Wallets [number]',
            features: [
                'Create up to 100 sub wallets',
                'Automated wallet generation',
                'Unique addresses for each wallet',
                'Integrated security features'
            ]
        },

        '/Delete Wallets': {
            description: 'Delete all generated wallets',
            usage: '/Delete Wallets',
            features: [
                'Safe wallet deletion',
                'Clear all wallet data',
                'Reset wallet system',
                'Option to generate new wallets'
            ]
        }
    },

    // Trading Operations
    tradingOperations: {
        '/Auto Buy/sell': {
            description: 'Automated trading mode',
            usage: '/Auto Buy/sell',
            features: [
                'Smart market analysis',
                'Automatic order execution',
                'Dynamic price adaptation',
                'Risk management integration'
            ]
        },

        '/Only Buy': {
            description: 'Buy-only mode',
            usage: '/Only Buy',
            features: [
                'Focus on buying operations',
                'Custom buy strategies',
                'Price threshold settings',
                'Volume distribution for buys'
            ]
        },

        '/Only Sell': {
            description: 'Sell-only mode',
            usage: '/Only Sell',
            features: [
                'Focus on selling operations',
                'Custom sell strategies',
                'Profit taking settings',
                'Volume distribution for sells'
            ]
        },

        '/Set Amount': {
            description: 'Set fixed trading amount',
            usage: '/Set Amount [value]',
            features: [
                'Fixed trade size setting',
                'Amount verification',
                'Balance checks',
                'Risk limit integration'
            ]
        }
    },

    // Fund Management
    fundManagement: {
        '/Distribute Funds': {
            description: 'Distribute funds to sub wallets',
            usage: '/Distribute Funds [amount]',
            features: [
                'Smart fund distribution',
                'Balance optimization',
                'Transaction verification',
                'Distribution confirmation'
            ]
        },

        '/Fund Recover': {
            description: 'Recover funds from sub wallets',
            usage: '/Fund Recover',
            features: [
                'Automatic fund recovery',
                'Balance consolidation',
                'Transaction verification',
                'Recovery confirmation'
            ]
        },

        '/Withdraw': {
            description: 'Withdraw tokens or SOL',
            usage: '/Withdraw [amount] [token] [address]',
            features: [
                'Secure withdrawal process',
                'Multiple token support',
                'Transaction verification',
                'Withdrawal confirmation'
            ]
        }
    },

    // Contact Information
    contact: {
        support: {
            telegram: "@metaDevxi",
            email: "metaDevxi@gmail.com"
        }
        
    }
};

// Helper Functions
function getCommandHelp(command) {
    for (const category of Object.values(botFeatures)) {
        if (category[command]) {
            return `
📍 Command: ${command}
📝 Description: ${category[command].description}
🔧 Usage: ${category[command].usage}

✨ Features:
${category[command].features.map(f => `• ${f}`).join('\n')}
            `;
        }
    }
    return "Command not found";
}

function getAllCommands() {
    console.log(`
🤖 Available Commands:

🔹 Basic Trading:
/start - Start trading
/stop - Stop trading
/status - Check bot status
/volume - Adjust volume
/pairs - Manage trading pairs

🔹 Wallet Management:
/Generate Wallet - Generate main wallet
/Generate Sub Wallets - Create up to 100 sub wallets
/Delete Wallets - Delete all wallets

🔹 Trading Operations:
/Auto Buy/sell - Automated trading
/Only Buy - Buy-only mode
/Only Sell - Sell-only mode
/Set Amount - Set fixed amount

🔹 Fund Management:
/Distribute Funds - Distribute to sub wallets
/Fund Recover - Recover from sub wallets
/Withdraw - Withdraw funds

For detailed help on any command, use: getCommandHelp('/command')
    `);
}

// Export Functions
module.exports = {
    botFeatures,
    getCommandHelp,
    getAllCommands
};

/*
Usage Example:
-------------
const bot = require('./bot.js');

// Get all commands
bot.getAllCommands();

// Get help for specific command
console.log(bot.getCommandHelp('/Start'));
*/