export const GET_QUERIES_URL = '/api/ticket/'
export const GET_LABELS_URL = '/api/ticket/label_list/'
export const GET_LABEL_URL = '/api/ticket/'
export const GET_STATUSES_URL = '/api/ticket/status_list/'
export const UPDATE_QUERIES_URL = '/api/ticket'
export const UNLABELED_CATEGORY = 'unlabeled'
export const TODO_STATUS = 'to_do'
export const DOING_STATUS = 'doing'
export const DONE_STATUS = 'done'
export const DROP_STATUS = 'drop'

export const MOCK_QUERY_DATA = {
  'id': 1,
  'title': 'Слабый сигнал сети',
  'description': 'Очень длинное поисание\r\nкакая у нас фиговая сеть\r\nсделайте что-нибудь\r\nпожалуйста',
  'date_time': '2019-10-24T11:49:35.878279Z',
  'point': {
    'id': 1,
    'x': 12.0,
    'y': 14.0,
    'location': {
      'id': 1,
      'img': 'http://localhost:8000/api/ticket/cok_et.jpg',
      'city': 'Москва',
      'address': 'Кутузовский проспект, д.32, корпус g',
      'floor': 5
    }
  },
  'speed_test': {
    '157.45.63.23': {
      'ping': 123.4,
      'upload': 123.34,
      'download': 3342.123
    },
    'sber.server.ru': {
      'ping': 123.4,
      'upload': 123.34,
      'download': 3342.123
    }
  },
  'wifi_points': {
    'points': [
      {
        'rssi': -34.0,
        'ssid': 'FIKSIKI_5G',
        'bssid': '28:6c:07:44:30:c9',
        'connected': false,
        'frequency': 5805,
        'isVisible': true,
        'availableWps': true,
        'capabilities': [
          {
            'authScheme': 'WPA',
            'cipherMethod': 'TKIP',
            'keyManagementAlgorithm': 'PSK'
          },
          {
            'authScheme': 'WPA',
            'cipherMethod': 'CCMP',
            'keyManagementAlgorithm': 'PSK'
          },
          {
            'authScheme': 'WPA',
            'cipherMethod': 'TKIP',
            'keyManagementAlgorithm': 'PSK'
          },
          {
            'authScheme': 'WPA2',
            'cipherMethod': 'CCMP',
            'keyManagementAlgorithm': 'PSK'
          }
        ],
        'topologyMode': 'ESS'
      }
    ]
  },
  'status': 'to_do',
  'label': 'unlabeled',
  'author': [
    'first_name',
    'last_name',
    'group',
    'email'
  ]
}

export const MOCK_STATUSES = {
  'statuses_list': [
    {
      'not_see': 'Not Visible WiFi'
    },
    {
      'low_signal': 'Low Wifi Signal'
    },
    {
      'noise': 'Noisy Channels'
    },
    {
      'lost_traffic': 'Package Lost'
    },
    {
      'other': 'Other'
    },
    {
      'unlabeled': 'No Label'
    }
  ]
}
export const MOCK_LABELS = {
  'label_list': [
    {
      'not_see': 'Not Visible WiFi'
    },
    {
      'low_signal': 'Low Wifi Signal'
    },
    {
      'noise': 'Noisy Channels'
    },
    {
      'lost_traffic': 'Package Lost'
    },
    {
      'other': 'Other'
    },
    {
      'unlabeled': 'No Label'
    }
  ]
}
export const MOCK_DATA = [
  {
    'id': 1,
    'date': '1571916863560',
    'title': 'Слабый сигнал сети',
    'description': 'Очень длинное поисание\r\nкакая у нас фиговая сеть\r\nсделайте что-нибудь\r\nпожалуйста',
    'speed_test': {
      '157.45.63.23': {
        'ping': 123.4,
        'upload': 123.34,
        'download': 3342.123
      },
      'sber.server.ru': {
        'ping': 123.4,
        'upload': 123.34,
        'download': 3342.123
      }
    },
    'points': {
      'points': [
        {
          'rssi': -34.0,
          'ssid': 'FIKSIKI_5G',
          'bssid': '28:6c:07:44:30:c9',
          'connected': false,
          'frequency': 5805,
          'isVisible': true,
          'availableWps': true,
          'capabilities': [
            {
              'authScheme': 'WPA',
              'cipherMethod': 'TKIP',
              'keyManagementAlgorithm': 'PSK'
            },
            {
              'authScheme': 'WPA',
              'cipherMethod': 'CCMP',
              'keyManagementAlgorithm': 'PSK'
            },
            {
              'authScheme': 'WPA',
              'cipherMethod': 'TKIP',
              'keyManagementAlgorithm': 'PSK'
            },
            {
              'authScheme': 'WPA2',
              'cipherMethod': 'CCMP',
              'keyManagementAlgorithm': 'PSK'
            }
          ],
          'topologyMode': 'ESS'
        }
      ]
    },
    'status': 'to_do',
    'label': 'unlabeled',
    'point': 1,
    'author': 2
  }
]
