const payperAbi = [{
  inputs: [{
    internalType: 'address', name: 'owner', type: 'address',
  }],
  stateMutability: 'nonpayable',
  type: 'constructor',
}, {
  inputs: [{
    internalType: 'address', name: 'owner', type: 'address',
  }],
  name: 'OwnableInvalidOwner',
  type: 'error',
}, {
  inputs: [{
    internalType: 'address', name: 'account', type: 'address',
  }],
  name: 'OwnableUnauthorizedAccount',
  type: 'error',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'uint256', name: 'articleId', type: 'uint256',
  }, {
    indexed: false, internalType: 'address', name: 'purchaser', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'paidAmount', type: 'uint256',
  }],
  name: 'ArticlePurchased',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'uint256', name: 'articleId', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'rating', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'totalRating', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'amountOfRatings', type: 'uint256',
  }],
  name: 'ArticleRated',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'uint256', name: 'id', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'date', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256[]', name: 'articlesOfEdition', type: 'uint256[]',
  }],
  name: 'CreatedEdition',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'string', name: 'name', type: 'string',
  }, {
    indexed: false, internalType: 'string', name: 'description', type: 'string',
  }, {
    indexed: false, internalType: 'address', name: 'journalistAddress', type: 'address',
  }],
  name: 'CreatedJournalist',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'address', name: 'journalist', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'tipAmount', type: 'uint256',
  }, {
    indexed: false, internalType: 'string', name: 'message', type: 'string',
  }],
  name: 'JounralistTipped',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'address', name: 'journalist', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'rating', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'totalRating', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'amountOfRatings', type: 'uint256',
  }],
  name: 'JournalistRated',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'previousOwner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'newOwner', type: 'address',
  }],
  name: 'OwnershipTransferred',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'uint256', name: 'id', type: 'uint256',
  }, {
    indexed: false, internalType: 'string', name: 'name', type: 'string',
  }, {
    indexed: false, internalType: 'address', name: 'journalist', type: 'address',
  }, {
    indexed: false, internalType: 'string', name: 'freeContent', type: 'string',
  }, {
    indexed: false, internalType: 'string', name: 'url', type: 'string',
  }, {
    indexed: false, internalType: 'uint256', name: 'price', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'date', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'newsType', type: 'uint256',
  }],
  name: 'PostedArticle',
  type: 'event',
}, {
  inputs: [{
    internalType: 'uint256', name: '', type: 'uint256',
  }],
  name: 'articles',
  outputs: [{
    internalType: 'uint256', name: 'id', type: 'uint256',
  }, {
    internalType: 'address', name: 'journalist', type: 'address',
  }, {
    internalType: 'string', name: 'name', type: 'string',
  }, {
    internalType: 'string', name: 'freeContent', type: 'string',
  }, {
    internalType: 'string', name: 'encryptedUrl', type: 'string',
  }, {
    internalType: 'uint256', name: 'totalRating', type: 'uint256',
  }, {
    internalType: 'uint256', name: 'amountOfRatings', type: 'uint256',
  }, {
    internalType: 'uint256', name: 'price', type: 'uint256',
  }, {
    internalType: 'uint256', name: 'totalPaymentReceived', type: 'uint256',
  }, {
    internalType: 'uint256', name: 'date', type: 'uint256',
  }, {
    internalType: 'enum PayPer.NewsType', name: 'newsType', type: 'uint8',
  }],
  stateMutability: 'view',
  type: 'function',
}, {
  inputs: [{
    internalType: 'uint256', name: 'articleId', type: 'uint256',
  }],
  name: 'buyArticle',
  outputs: [],
  stateMutability: 'payable',
  type: 'function',
}, {
  inputs: [{
    internalType: 'uint256[]', name: 'articlesOfEdition', type: 'uint256[]',
  }],
  name: 'createEdition',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
}, {
  inputs: [{
    internalType: 'string', name: 'name', type: 'string',
  }, {
    internalType: 'string', name: 'description', type: 'string',
  }, {
    internalType: 'address', name: 'journalistAddress', type: 'address',
  }],
  name: 'createJournalist',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
}, {
  inputs: [],
  name: 'currentArticleId',
  outputs: [{
    internalType: 'uint256', name: '', type: 'uint256',
  }],
  stateMutability: 'view',
  type: 'function',
}, {
  inputs: [],
  name: 'currentEditionId',
  outputs: [{
    internalType: 'uint256', name: '', type: 'uint256',
  }],
  stateMutability: 'view',
  type: 'function',
}, {
  inputs: [{
    internalType: 'uint256', name: '', type: 'uint256',
  }],
  name: 'editions',
  outputs: [{
    internalType: 'uint256', name: 'id', type: 'uint256',
  }, {
    internalType: 'uint256', name: 'date', type: 'uint256',
  }],
  stateMutability: 'view',
  type: 'function',
}, {
  inputs: [{
    internalType: 'address', name: '', type: 'address',
  }],
  name: 'journalists',
  outputs: [{
    internalType: 'address', name: 'id', type: 'address',
  }, {
    internalType: 'string', name: 'name', type: 'string',
  }, {
    internalType: 'string', name: 'description', type: 'string',
  }, {
    internalType: 'uint256', name: 'totalRating', type: 'uint256',
  }, {
    internalType: 'uint256', name: 'amountOfRatings', type: 'uint256',
  }],
  stateMutability: 'view',
  type: 'function',
}, {
  inputs: [],
  name: 'owner',
  outputs: [{
    internalType: 'address', name: '', type: 'address',
  }],
  stateMutability: 'view',
  type: 'function',
}, {
  inputs: [{
    internalType: 'string', name: 'name', type: 'string',
  }, {
    internalType: 'string', name: 'freeContent', type: 'string',
  }, {
    internalType: 'string', name: 'url', type: 'string',
  }, {
    internalType: 'uint256', name: 'price', type: 'uint256',
  }, {
    internalType: 'uint256', name: 'newsType', type: 'uint256',
  }],
  name: 'postArticle',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
}, {
  inputs: [{
    internalType: 'uint256', name: 'articleId', type: 'uint256',
  }, {
    internalType: 'uint256', name: 'rating', type: 'uint256',
  }],
  name: 'rateArticle',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
}, {
  inputs: [{
    internalType: 'address', name: 'journalistAddress', type: 'address',
  }, {
    internalType: 'uint256', name: 'rating', type: 'uint256',
  }],
  name: 'rateJournalist',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
}, {
  inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{
    internalType: 'address', name: 'journalist', type: 'address',
  }, {
    internalType: 'string', name: 'message', type: 'string',
  }],
  name: 'tipJournalist',
  outputs: [],
  stateMutability: 'payable',
  type: 'function',
}, {
  inputs: [{
    internalType: 'address', name: 'newOwner', type: 'address',
  }],
  name: 'transferOwnership',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
}] as const;

export default payperAbi;
