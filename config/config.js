module.exports = {
  'development': {
    'jwt': {
      'secret': 'rajat'
    },
    'paypalPayment': {
      'mode': 'sandbox',
      'client_id': 'AZYSrtxkjS_4k3UTOdvz_RRqgs_xnScvVxt_gOkn_5oyt4JYF2E_ttBSojVEJWhNn7MleU1Ws97hY30W',
      'client_secret': 'EK3q0x524f5a4WrqEepgmjLyBf3hV9qGUXFH6gZLVaHixIl4d0tr5g49vms1lket4uKHq3RD8NE9jluN'
    }
  },
  'test': {
    'jwt': {
      'secret': 'rajat'
    },
    'paypalPayment': {
      'mode': 'sandbox',
      'client_id': 'AZYSrtxkjS_4k3UTOdvz_RRqgs_xnScvVxt_gOkn_5oyt4JYF2E_ttBSojVEJWhNn7MleU1Ws97hY30W',
      'client_secret': 'EK3q0x524f5a4WrqEepgmjLyBf3hV9qGUXFH6gZLVaHixIl4d0tr5g49vms1lket4uKHq3RD8NE9jluN'
    }
  },
  'production': {
    'jwt': {
      'secret': 'rajat'
    },
    'payment': {
      'mode': 'live',
      'client_id': '',
      'client_secret': ''
    }

  }
}
