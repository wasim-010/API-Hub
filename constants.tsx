import { Provider, Category } from './types';
import { Truck, Box, Activity, MessageSquare } from 'lucide-react';

export const CATEGORIES: Category[] = [
  { 
    id: 'courier', 
    name: 'Courier & Logistics', 
    description: 'Delivery tracking, order management, and logistics services for Bangladesh.', 
    icon: Truck 
  },
  {
    id: 'sms',
    name: 'SMS Aggregators',
    description: 'SMS gateway APIs for OTP, transactional, and promotional messaging in Bangladesh.',
    icon: MessageSquare
  }
];

export const PROVIDERS: Provider[] = [
  {
    id: 'pathao',
    name: 'Pathao Courier',
    category: 'courier',
    color: '#e8394d',
    logoChar: 'P',
    logoUrl: 'https://merchant.pathao.com/assets/logo_pathao_courier.a3ef9b7c.svg',
    authType: 'OAuth 2.0',
    version: 'v1',
    description: 'Leading logistics provider in Bangladesh with OAuth 2.0 security.',
    weightUnit: 'kg',
    sandbox: {
      baseUrl: 'https://courier-api-sandbox.pathao.com',
      credentials: [
        { label: 'client_id', value: '7N1aMJQbWm' },
        { label: 'client_secret', value: 'wRcaibZkUdSNz2EI9ZyuXLlNrnAv0TdPUPXMnD39' },
        { label: 'username', value: 'test@pathao.com' },
        { label: 'password', value: 'lovePathao' }
      ]
    },
    production: {
      baseUrl: 'https://api-hermes.pathao.com',
      credentials: [
        { label: 'client_id', value: '8mepQVNaMy' },
        { label: 'client_secret', value: '(Retrieve from Merchant Dashboard)' }
      ]
    },
    callouts: [
      {
        type: 'warning',
        title: 'Token Expiry',
        message: 'Save both tokens to your database. Access token expires in 432000 seconds (5 days).'
      }
    ],
    webhooks: {
      signatureHeader: 'X-PATHAO-Signature',
      integrationRequirements: [
        'Your URL should be reachable.',
        'Your URL should be resolved within 3 redirections.',
        'If using HTTPS, your SSL certificate should be valid.',
        'Your URL should respond within 10 seconds.',
        'Your URL should return status code 202 for the webhook_integration event.',
        'Your URL should return a response with header X-Pathao-Merchant-Webhook-Integration-Secret.',
        'The header X-Pathao-Merchant-Webhook-Integration-Secret value should be exactly f3992ecc-59da-4cbe-a049-a13da2018d51.'
      ],
      integrationPayload: JSON.stringify({ event: "webhook_integration" }, null, 2),
      headers: [
        { name: 'X-PATHAO-Signature', value: 'Secret provided by you during integration.' },
        { name: 'Content-Type', value: 'application/json' }
      ],
      events: [
        {
          name: 'order.created',
          description: 'Triggered when a new order is created.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:50:32",
            timestamp: "2024-12-27T17:50:32+00:00",
            store_id: 130820,
            event: "order.created",
            delivery_fee: 83.46
          }, null, 2)
        },
        {
          name: 'order.updated',
          description: 'Triggered when an existing order is updated.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:50:32",
            timestamp: "2024-12-27T17:50:32+00:00",
            store_id: 130820,
            event: "order.updated",
            delivery_fee: 83.46
          }, null, 2)
        },
        {
          name: 'order.pickup-requested',
          description: 'Triggered when a pickup is requested by the merchant.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:50:32",
            timestamp: "2024-12-27T17:50:32+00:00",
            store_id: 130820,
            event: "order.pickup-requested",
            delivery_fee: 83.46
          }, null, 2)
        },
        {
          name: 'order.assigned-for-pickup',
          description: 'Triggered when a rider is assigned for pickup.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:51:01",
            timestamp: "2024-12-27T17:51:01+00:00",
            store_id: 130820,
            event: "order.assigned-for-pickup"
          }, null, 2)
        },
        {
          name: 'order.picked',
          description: 'Triggered when the parcel is picked up from the store.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:51:17",
            timestamp: "2024-12-27T17:51:17+00:00",
            store_id: 130820,
            event: "order.picked"
          }, null, 2)
        },
        {
          name: 'order.pickup-failed',
          description: 'Triggered when a pickup attempt fails.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:51:33",
            timestamp: "2024-12-27T17:51:33+00:00",
            store_id: 130820,
            event: "order.pickup-failed"
          }, null, 2)
        },
        {
          name: 'order.pickup-cancelled',
          description: 'Triggered when a pickup is cancelled.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:51:49",
            timestamp: "2024-12-27T17:51:49+00:00",
            store_id: 130820,
            event: "order.pickup-cancelled"
          }, null, 2)
        },
        {
          name: 'order.at-the-sorting-hub',
          description: 'Triggered when the parcel arrives at the sorting hub.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:52:15",
            timestamp: "2024-12-27T17:52:15+00:00",
            store_id: 130820,
            event: "order.at-the-sorting-hub"
          }, null, 2)
        },
        {
          name: 'order.in-transit',
          description: 'Triggered when the parcel is in transit to the destination.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:52:32",
            timestamp: "2024-12-27T17:52:32+00:00",
            store_id: 130820,
            event: "order.in-transit"
          }, null, 2)
        },
        {
          name: 'order.received-at-last-mile-hub',
          description: 'Triggered when the parcel is received at the last mile hub.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:52:48",
            timestamp: "2024-12-27T17:52:48+00:00",
            store_id: 130820,
            event: "order.received-at-last-mile-hub"
          }, null, 2)
        },
        {
          name: 'order.assigned-for-delivery',
          description: 'Triggered when a rider is assigned for delivery.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:53:05",
            timestamp: "2024-12-27T17:53:05+00:00",
            store_id: 130820,
            event: "order.assigned-for-delivery"
          }, null, 2)
        },
        {
          name: 'order.delivered',
          description: 'Triggered when the parcel is delivered successfully.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:53:23",
            timestamp: "2024-12-27T17:53:23+00:00",
            store_id: 130820,
            event: "order.delivered",
            collected_amount: 60
          }, null, 2)
        },
        {
          name: 'order.partial-delivery',
          description: 'Triggered when the parcel is partially delivered.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:53:45",
            timestamp: "2024-12-27T17:53:45+00:00",
            store_id: 130820,
            event: "order.partial-delivery",
            collected_amount: 60,
            reason: "This field might not be present in some cases."
          }, null, 2)
        },
        {
          name: 'order.returned',
          description: 'Triggered when the parcel is returned to the merchant.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:54:02",
            timestamp: "2024-12-27T17:54:02+00:00",
            store_id: 130820,
            event: "order.returned",
            reason: "This field might not be present in some cases."
          }, null, 2)
        },
        {
          name: 'order.delivery-failed',
          description: 'Triggered when a delivery attempt fails.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:54:21",
            timestamp: "2024-12-27T17:54:21+00:00",
            store_id: 130820,
            event: "order.delivery-failed",
            reason: "This field might not be present in some cases."
          }, null, 2)
        },
        {
          name: 'order.on-hold',
          description: 'Triggered when a delivery is put on hold.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:54:46",
            timestamp: "2024-12-27T17:54:46+00:00",
            store_id: 130820,
            event: "order.on-hold",
            reason: "This field might not be present in some cases."
          }, null, 2)
        },
        {
          name: 'order.paid',
          description: 'Triggered when a payment invoice is generated.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:55:01",
            timestamp: "2024-12-27T17:55:01+00:00",
            store_id: 130820,
            event: "order.paid",
            invoice_id: "121224IBW19790"
          }, null, 2)
        },
        {
          name: 'order.paid-return',
          description: 'Triggered when a returned parcel payment is settled.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:55:17",
            timestamp: "2024-12-27T17:55:17+00:00",
            store_id: 130820,
            event: "order.paid-return",
            collected_amount: 60,
            reason: "This field might not be present in some cases."
          }, null, 2)
        },
        {
          name: 'order.exchanged',
          description: 'Triggered when an order is exchanged.',
          payloadExample: JSON.stringify({
            consignment_id: "DL121224VS8TTJ",
            merchant_order_id: "TS-123",
            updated_at: "2024-12-27 23:55:34",
            timestamp: "2024-12-27T17:55:34+00:00",
            store_id: 130820,
            event: "order.exchanged",
            reason: "This field might not be present in some cases.",
            collected_amount: 60
          }, null, 2)
        },
        {
          name: 'store.created',
          description: 'Triggered when a new store is created.',
          payloadExample: JSON.stringify({
            store_id: 1,
            store_name: "Test Store",
            store_address: "Test store address",
            is_active: 1,
            event: "store.created",
            updated_at: "2024-12-27 23:55:34",
            timestamp: "2024-12-27T17:55:34+00:00"
          }, null, 2)
        },
        {
          name: 'store.updated',
          description: 'Triggered when an existing store is updated.',
          payloadExample: JSON.stringify({
            store_id: 1,
            store_name: "Test Store",
            store_address: "Test store address",
            is_active: 1,
            event: "store.updated",
            updated_at: "2024-12-27 23:55:34",
            timestamp: "2024-12-27T17:55:34+00:00"
          }, null, 2)
        }
      ],
      payloadExample: JSON.stringify({
        consignment_id: "DL121224VS8TTJ",
        merchant_order_id: "TS-123",
        updated_at: "2024-12-27 23:50:32",
        timestamp: "2024-12-27T17:50:32+00:00",
        store_id: 130820,
        event: "order.pickup-requested",
        delivery_fee: 83.46
      }, null, 2)
    },
    groups: [
      {
        name: 'Auth',
        endpoints: [
          {
            id: 'pathao-issue-token',
            method: 'POST',
            path: '/aladdin/api/v1/issue-token',
            title: 'Issue Access Token',
            description: 'Obtain a Bearer token for authentication. Use grant_type="password".',
            bodyParams: [
              { field: 'client_id', type: 'string', required: true, description: 'Test/Production environment Client Id.' },
              { field: 'client_secret', type: 'string', required: true, description: 'Test/Production environment Client Secret.' },
              { field: 'grant_type', type: 'string', required: true, description: 'Must use grant type password for issue token api.' },
              { field: 'username', type: 'string', required: true, description: 'Test environment/your login email address.' },
              { field: 'password', type: 'string', required: true, description: 'Test environment/your login password.' }
            ],
            responseExample: JSON.stringify({ token_type: "Bearer", expires_in: 432000, access_token: "ISSUED_ACCESS_TOKEN", refresh_token: "ISSUED_REFRESH_TOKEN" }, null, 2)
          },
          {
            id: 'pathao-refresh-token',
            method: 'POST',
            path: '/aladdin/api/v1/issue-token',
            title: 'Issue Access Token from Refresh Token',
            description: 'Obtain a new access token using your refresh token. Use grant_type="refresh_token".',
            bodyParams: [
              { field: 'client_id', type: 'string', required: true, description: 'Your Client Id generated by Pathao Courier.' },
              { field: 'client_secret', type: 'string', required: true, description: 'Your Client Secret generated by Pathao Courier.' },
              { field: 'grant_type', type: 'string', required: true, description: 'Must use grant type refresh_token for refresh token api.' },
              { field: 'refresh_token', type: 'string', required: true, description: 'Provide your refresh token in order to generate access_token' }
            ],
            responseExample: JSON.stringify({ token_type: "Bearer", expires_in: 432000, access_token: "ISSUED_ACCESS_TOKEN", refresh_token: "ISSUED_REFRESH_TOKEN" }, null, 2)
          }
        ]
      },
      {
        name: 'Price Calculation',
        endpoints: [
           {
            id: 'pathao-price-plan',
            method: 'POST',
            path: '/aladdin/api/v1/merchant/price-plan',
            title: 'Price Calculation Api',
            description: 'To calculate price of the order use this post api.',
            bodyParams: [
              { field: 'store_id', type: 'integer', required: true, description: 'store_id is provided by the merchant and not changeable. This store ID will set the pickup location of the order according to the location of the store.' },
              { field: 'item_type', type: 'integer', required: true, description: '1 for Document, 2 for Parcel' },
              { field: 'delivery_type', type: 'integer', required: true, description: '48 for Normal Delivery, 12 for On Demand Delivery' },
              { field: 'item_weight', type: 'float', required: true, description: 'Minimum 0.5 KG to Maximum 10 kg. Weight of your parcel in kg' },
              { field: 'recipient_city', type: 'integer', required: true, description: 'Parcel receivers city_id' },
              { field: 'recipient_zone', type: 'integer', required: true, description: 'Parcel receivers zone_id' }
            ],
            responseExample: JSON.stringify({
              message: "price",
              type: "success",
              code: 200,
              data: {
                price: 80,
                discount: 0,
                promo_discount: 0,
                plan_id: 69,
                cod_enabled: 1,
                cod_percentage: 0.01,
                additional_charge: 0,
                final_price: 80
              }
            }, null, 2)
          }
        ]
      },
      {
        name: 'Orders',
        endpoints: [
          {
            id: 'pathao-create-order',
            method: 'POST',
            path: '/aladdin/api/v1/orders',
            title: 'Create a New Order',
            description: 'Create a new delivery order. Recipient location fields (city/zone/area) are optional but recommended; system will populate them based on address if omitted.',
            bodyParams: [
              { field: 'store_id', type: 'integer', required: true, description: 'store_id is provided by the merchant and not changeable. This store ID will set the pickup location of the order according to the location of the store.' },
              { field: 'merchant_order_id', type: 'string', required: false, description: 'Optional parameter, merchant order info/tracking id' },
              { field: 'recipient_name', type: 'string', required: true, description: 'Parcel receivers name. Name length should be between 3 to 100 characters.' },
              { field: 'recipient_phone', type: 'string', required: true, description: 'Parcel receivers contact number. Recipient phone length should be 11 characters.' },
              { field: 'recipient_secondary_phone', type: 'string', required: false, description: 'Parcel receivers secondary contact number. Recipient secondary phone length should be 11 characters. This field is optional.' },
              { field: 'recipient_address', type: 'string', required: true, description: 'Parcel receivers full address. Address length should be between 10 to 220 characters.' },
              { field: 'recipient_city', type: 'integer', required: false, description: "Parcel receiver's city_id. This is an optional parameter, so do not send a null value. If not included in the request payload, then our system will populate it automatically based on the recipient_address you will be provided." },
              { field: 'recipient_zone', type: 'integer', required: false, description: "Parcel receiver's zone_id. This is an optional parameter, so do not send a null value. If not included in the request payload, then our system will populate it automatically based on the recipient_address you will be provided." },
              { field: 'recipient_area', type: 'integer', required: false, description: "Parcel receiver's area_id. This is an optional parameter. If not included in the request payload, then our system will populate it automatically based on the recipient_address you will be provided." },
              { field: 'delivery_type', type: 'integer', required: true, description: '48 for Normal Delivery, 12 for On Demand Delivery' },
              { field: 'item_type', type: 'integer', required: true, description: '1 for Document, 2 for Parcel' },
              { field: 'special_instruction', type: 'string', required: false, description: 'Any special instruction you may want to provide to us.' },
              { field: 'item_quantity', type: 'integer', required: true, description: 'Quantity of your parcels' },
              { field: 'item_weight', type: 'float', required: true, description: 'Minimum 0.5 KG to Maximum 10 kg. Weight of your parcel in kg' },
              { field: 'item_description', type: 'string', required: false, description: 'You can provide a description of your parcel' },
              { field: 'amount_to_collect', type: 'integer', required: true, description: 'Recipient Payable Amount. Default should be 0 in case of NON Cash-On-Delivery(COD)The collectible amount from the customer.' }
            ],
            responseExample: JSON.stringify({ message: "Order Created Successfully", type: "success", code: 200, data: { consignment_id: "{{ORDER_CONSIGNMENT_ID}}", merchant_order_id: "{{merchant_order_id}}", order_status: "Pending", delivery_fee: 80 } }, null, 2)
          },
          {
            id: 'pathao-bulk-order',
            method: 'POST',
            path: '/aladdin/api/v1/orders/bulk',
            title: 'Create a Bulk Order',
            description: 'Create multiple orders at a time. Returns 202 immediately. Orders processed asynchronously.',
            bodyParams: [
              { field: 'orders', type: 'array', required: true, description: 'An array of order objects is required to send within the request body.' }
            ],
            bodyExample: JSON.stringify({
              orders: [
                {
                  store_id: 123,
                  merchant_order_id: "ORD-001",
                  recipient_name: "Demo Recipient One",
                  recipient_phone: "017XXXXXXXX",
                  recipient_address: "House 123, Road 4, Sector 10, Uttara, Dhaka",
                  delivery_type: 48,
                  item_type: 2,
                  special_instruction: "Do not put water",
                  item_quantity: 2,
                  item_weight: 0.5,
                  amount_to_collect: 100,
                  item_description: "Cloth item"
                },
                {
                  store_id: 123,
                  merchant_order_id: "ORD-002",
                  recipient_name: "Demo Recipient Two",
                  recipient_phone: "015XXXXXXXX",
                  recipient_address: "House 3, Road 14, Dhanmondi, Dhaka",
                  delivery_type: 48,
                  item_type: 2,
                  item_quantity: 1,
                  item_weight: 0.5,
                  amount_to_collect: 200
                }
              ]
            }, null, 2),
            responseExample: JSON.stringify({ message: "Your bulk order creation request is accepted,<br>  please wait some time to complete order creation.", type: "success", code: 202, data: true }, null, 2)
          },
          {
             id: 'pathao-order-info',
             method: 'GET',
             path: '/aladdin/api/v1/orders/{consignment_id}/info',
             title: 'Get Order Short Info',
             description: 'Get a short summary of your specific order.',
             pathParams: [{ field: 'consignment_id', type: 'string', required: true, description: 'This unique id is used to identify the consignment.' }],
             responseExample: JSON.stringify({ message: "Order info", type: "success", code: 200, data: { consignment_id: "{{consignment_id}}", merchant_order_id: "{{merchant_order_id}}", order_status: "Pending", order_status_slug: "Pending", updated_at: "2024-11-20 15:11:40", invoice_id: null } }, null, 2)
          }
        ]
      },
      {
        name: 'Stores',
        endpoints: [
          {
            id: 'pathao-create-store',
            method: 'POST',
            path: '/aladdin/api/v1/stores',
            title: 'Create a New Store',
            description: 'Create a new store for pickup.',
            bodyParams: [
              { field: 'name', type: 'string', required: true, description: 'Name of the store. Store name length should be between 3 to 50 characters.' },
              { field: 'contact_name', type: 'string', required: true, description: 'Contact person of the store need for issue related communication. Contact person name length should be between 3 to 50 characters.' },
              { field: 'contact_number', type: 'string', required: true, description: 'Store contact person phone number. Contact number length should be 11 characters.' },
              { field: 'secondary_contact', type: 'string', required: false, description: 'Store contact person secondary phone number. Secondary contact number length should be 11 characters. This field is optional.' },
              { field: 'otp_number', type: 'string', required: false, description: 'OTP for orders from this order will be sent to this number' },
              { field: 'address', type: 'string', required: true, description: 'Merchant Store address. Address length should be between 15 to 120 characters.' },
              { field: 'city_id', type: 'integer', required: true, description: 'Recipient city_id' },
              { field: 'zone_id', type: 'integer', required: true, description: 'Recipient zone_id' },
              { field: 'area_id', type: 'integer', required: true, description: 'Recipient area_id' }
            ],
            responseExample: JSON.stringify({ message: "Store created successfully, Please wait one hour for approval.", type: "success", code: 200, data: { store_name: "Demo Store" } }, null, 2)
          },
          {
            id: 'pathao-stores',
            method: 'GET',
            path: '/aladdin/api/v1/stores',
            title: 'Get Merchant Store Info',
            description: 'Get a summary of your current stores.',
            responseExample: JSON.stringify({ 
              message: "Store list fetched.",
              type: "success",
              code: 200,
              data: {
                data: [
                   {
                      store_id: 12345,
                      store_name: "My Store Name",
                      store_address: "House 123, Road 4, Sector 10, Uttara, Dhaka-1230, Bangladesh",
                      is_active: 1,
                      city_id: 1,
                      zone_id: 101,
                      hub_id: 50,
                      is_default_store: false,
                      is_default_return_store: false
                   }
                ],
                total: 1,
                current_page: 1,
                per_page: 1000,
                total_in_page: 1,
                last_page: 1,
                path: "https://api-hermes.pathao.com/aladdin/api/v1/stores",
                to: 1,
                from: 1,
                last_page_url: "https://api-hermes.pathao.com/aladdin/api/v1/stores?page=1",
                first_page_url: "https://api-hermes.pathao.com/aladdin/api/v1/stores?page=1"
              }
            }, null, 2)
          }
        ]
      },
      {
        name: 'Location',
        endpoints: [
          {
            id: 'pathao-cities',
            method: 'GET',
            path: '/aladdin/api/v1/city-list',
            title: 'Get List of Cities',
            description: 'Get all available cities.',
            responseExample: JSON.stringify({ message: "City successfully fetched.", type: "success", code: 200, data: { data: [ { city_id: 1, city_name: "Dhaka" }, { city_id: 2, city_name: "Chittagong" } ] } }, null, 2)
          },
          {
            id: 'pathao-zones',
            method: 'GET',
            path: '/aladdin/api/v1/cities/{city_id}/zone-list',
            title: 'Get Zones in City',
            description: 'Get list of zones within a particular city.',
            pathParams: [{ field: 'city_id', type: 'integer', required: true, description: 'A unique identifier for the city' }],
            responseExample: JSON.stringify({ message: "Zone list fetched.", type: "success", code: 200, data: { data: [ { zone_id: 298, zone_name: "60 feet" }, { zone_id: 1070, zone_name: "Abdullahpur Uttara" } ] } }, null, 2)
          },
           {
            id: 'pathao-areas',
            method: 'GET',
            path: '/aladdin/api/v1/zones/{zone_id}/area-list',
            title: 'Get Areas in Zone',
            description: 'Get list of areas within a particular zone.',
            pathParams: [{ field: 'zone_id', type: 'integer', required: true, description: 'A unique identifier for the zone' }],
            responseExample: JSON.stringify({ message: "Area list fetched.", type: "success", code: 200, data: { data: [ { area_id: 37, area_name: " Bonolota", home_delivery_available: true, pickup_available: true }, { area_id: 3, area_name: " Road 03", home_delivery_available: true, pickup_available: true } ] } }, null, 2)
          }
        ]
      }
    ]
  },
  {
    id: 'redx',
    name: 'RedX',
    category: 'courier',
    color: '#e83232',
    logoChar: 'R',
    logoUrl: 'https://redx.com.bd/images/new-redx-logo.svg',
    authType: 'Static JWT',
    version: 'v1.0.0-beta',
    description: 'Tech-first logistics with static JWT authentication.',
    weightUnit: 'g',
    sandbox: {
      baseUrl: 'https://sandbox.redx.com.bd/v1.0.0-beta',
      credentials: [
        { label: 'Token', value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzM1NTMxNjU2LCJpc3MiOiJ0OTlnbEVnZTBUTm5MYTNvalh6MG9VaGxtNEVoamNFMyIsInNob3BfaWQiOjEsInVzZXJfaWQiOjZ9.zpKfyHK6zPBVaTrYevnCqnUA-e2jFKQJ7lK-z4aOx2g' }
      ]
    },
    production: {
      baseUrl: 'https://openapi.redx.com.bd/v1.0.0-beta',
      credentials: [
        { label: 'Token', value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NjAzNjgiLCJpYXQiOjE3NzEzMDIzNjEsImlzcyI6InhBN3JRejVubmNwa05XZTAyRVM3ZUE4UkVSSGdHSVRIIiwic2hvcF9pZCI6OTYwMzY4LCJ1c2VyX2lkIjoxMjAxNjQ0fQ.dc2TCOwiHbZm1Jq5E3egZkZ_f1SafvoYyNSVsgeCPFY' }
      ]
    },
    callouts: [
      {
        type: 'info',
        title: 'Authentication',
        message: 'RedX uses a static JWT token. Add it as header: `API-ACCESS-TOKEN: Bearer {token}`.'
      }
    ],
    webhooks: {
      events: [
        { name: 'ready-for-delivery', description: 'Parcel received from merchants' },
        { name: 'delivery-in-progress', description: 'Parcels have been dispatched to rider' },
        { name: 'delivered', description: 'Parcels delivered by rider' },
        { name: 'agent-hold', description: 'Parcels are on hold to agent' },
        { name: 'agent-returning', description: 'Parcel return-in-progress' },
        { name: 'returned', description: 'Parcels returned' },
        { name: 'agent-area-change', description: 'Area change requested & in progress' }
      ],
      payloadExample: JSON.stringify({
        tracking_number: "REDX-12345",
        timestamp: "2023-10-25T10:00:00Z",
        status: "delivered",
        message_en: "Delivered Successfully",
        message_bn: "পার্সেলটি সফলভাবে ডেলিভার হয়েছে",
        invoice_number: "INV-123"
      }, null, 2)
    },
    groups: [
      {
        name: 'Parcels',
        endpoints: [
          {
            id: 'redx-track',
            method: 'GET',
            path: '/parcel/track/{tracking_id}',
            title: 'Track Parcel',
            pathParams: [{ field: 'tracking_id', type: 'string', required: true, description: 'Unique identifier assigned to a parcel for tracking.' }],
            responseExample: JSON.stringify({ tracking: [ { message_en: 'Package is created successfully', message_bn: 'পার্সেলটি সফল ভাবে প্লেস করা হয়েছে', time: '2020-02-04T21:19:41.000Z' }, { message_en: 'Package is picked up', message_bn: 'পার্সেল পিকাপ সম্পন্ন হয়েছে ', time: '2020-02-05T11:41:03.000Z' } ] }, null, 2)
          },
          {
            id: 'redx-parcel-info',
            method: 'GET',
            path: '/parcel/info/{tracking_id}',
            title: 'Get Parcel Details',
            pathParams: [{ field: 'tracking_id', type: 'string', required: true, description: 'Unique identifier assigned to a parcel for tracking.' }],
            responseExample: JSON.stringify({ parcel: { tracking_id: '21A427TU4BN3R', customer_address: 'Test Address', delivery_area: 'Mirpur DOHS', delivery_area_id: 12, charge: 60, customer_name: 'Test Customer', customer_phone: '01987654321', cash_collection_amount: 13293, parcel_weight: 500, merchant_invoice_id: 'ACBD1234TEST', status: 'pickup-pending', instruction: '', created_at: '2021-04-27T08:29:14.000Z', delivery_type: 'regular', value: '0', pickup_location: { id: 1, name: 'Malibag', address: 'Malibagh', area_name: 'Malibag', area_id: 1 } } }, null, 2)
          },
          {
            id: 'redx-create-parcel',
            method: 'POST',
            path: '/parcel',
            title: 'Create Parcel',
            description: 'Create a new parcel for delivery.',
            bodyParams: [
              { field: 'customer_name', type: 'string', required: true, description: 'Full name of the customer receiving the parcel.' },
              { field: 'customer_phone', type: 'string', required: true, description: 'Contact phone number of the customer.' },
              { field: 'delivery_area', type: 'string', required: true, description: 'Name of the delivery area where the parcel will be sent.' },
              { field: 'delivery_area_id', type: 'integer', required: true, description: 'Unique identifier of the delivery area.' },
              { field: 'customer_address', type: 'string', required: true, description: 'Complete address of the customer for parcel delivery.' },
              { field: 'cash_collection_amount', type: 'string', required: true, description: 'Amount to be collected from the customer upon delivery.' },
              { field: 'parcel_weight', type: 'string', required: true, description: 'Weight of the parcel in appropriate units (e.g., kg, g).' },
              { field: 'value', type: 'string', required: true, description: 'Declared value of the parcel for compensation calculation.' },
              { field: 'merchant_invoice_id', type: 'string', required: false, description: 'Invoice ID generated by the merchant for reference.' },
              { field: 'instruction', type: 'string', required: false, description: 'Special instructions for the delivery (if any).' },
              { field: 'type', type: 'string', required: false, description: 'Defines the parcel type, mainly used for reverse shipments.' },
              { field: 'is_closed_box', type: 'string', required: false, description: 'Whether the parcel is a closed box.' },
              { field: 'pickup_store_id', type: 'integer', required: false, description: 'Identifier of the pickup store where the parcel is collected from.' },
              { field: 'parcel_details_json', type: 'array', required: false, description: 'JSON object containing additional parcel details.' }
            ],
            bodyExample: JSON.stringify({
                customer_name: "Test Customer",
                customer_phone: "01700000000",
                delivery_area: "Gulshan",
                delivery_area_id: 12,
                customer_address: "House 12, Road 3",
                merchant_invoice_id: "ACBD1234TEST",
                cash_collection_amount: "1500",
                parcel_weight: 500,
                instruction: "Handle with care",
                value: 1500,
                is_closed_box: "0",
                pickup_store_id: 1,
                parcel_details_json: [
                    { name: "Shirt", category: "Clothing", value: 1500 },
                    { name: "Pants", category: "Clothing", value: 1200 }
                ]
            }, null, 2),
            responseExample: JSON.stringify({ tracking_id: "20A312THJDJ8" }, null, 2)
          },
          {
            id: 'redx-update-parcel',
            method: 'PATCH',
            path: '/parcels',
            title: 'Update Parcel',
            description: 'Update parcel status or details.',
            bodyParams: [
              { field: 'entity_type', type: 'string', required: true, description: "Type of entity being updated, e.g., 'parcel-tracking-id'." },
              { field: 'entity_id', type: 'string', required: true, description: 'Unique identifier of the parcel to be updated.' },
              { field: 'update_details', type: 'object', required: true, description: 'Object containing details of the update to be applied.' }
            ],
            responseExample: JSON.stringify({ success: true, message: "Request Accepted" }, null, 2)
          }
        ]
      },
      {
        name: 'Logistics',
        endpoints: [
          {
            id: 'redx-areas',
            method: 'GET',
            path: '/areas',
            title: 'Get Areas',
            description: 'Get all areas, or filter by postal code / district.',
            queryParams: [
              { field: 'post_code', type: 'integer', required: false, description: 'The postal code for which areas need to be retrieved.' },
              { field: 'district_name', type: 'string', required: false, description: 'The name of the district for which areas need to be retrieved.' }
            ],
            responseExample: JSON.stringify({ areas: [ { id: 1, name: "Mohammadpur(Dhaka)", post_code: 1207, division_name: "Dhaka", zone_id: 1 } ] }, null, 2)
          },
          {
            id: 'redx-charge-calculator',
            method: 'GET',
            path: '/charge/charge_calculator',
            title: 'Calculate Parcel Charge',
            queryParams: [
               { field: 'delivery_area_id', type: 'integer', required: true, description: 'The unique identifier of the area where the parcel will be delivered.' },
               { field: 'pickup_area_id', type: 'integer', required: true, description: 'The unique identifier of the area where the parcel will be picked up.' },
               { field: 'cash_collection_amount', type: 'integer', required: true, description: 'The total cash amount to be collected upon delivery.' },
               { field: 'weight', type: 'integer', required: true, description: 'The weight of the parcel in grams.' }
            ],
            responseExample: JSON.stringify({ deliveryCharge: 60, codCharge: 0 }, null, 2)
          }
        ]
      },
      {
        name: 'Pickup Stores',
        endpoints: [
           {
            id: 'redx-create-pickup-store',
            method: 'POST',
            path: '/pickup/store',
            title: 'Create Pickup Store',
            bodyParams: [
              { field: 'name', type: 'string', required: true, description: 'The name of the pickup store.' },
              { field: 'phone', type: 'string', required: true, description: 'The contact phone number for the pickup store.' },
              { field: 'address', type: 'string', required: true, description: 'The physical address of the pickup store.' },
              { field: 'area_id', type: 'integer', required: true, description: 'The unique identifier of the area where the pickup store is located.' }
            ],
            responseExample: JSON.stringify({ id: 1, name: "Test Pickup Store", address: "Test Address", area_id: 1, area_name: "Malibag", phone: "01700000000" }, null, 2)
           },
           {
            id: 'redx-get-pickup-stores',
            method: 'GET',
            path: '/pickup/stores',
            title: 'Get Pickup Stores',
            responseExample: JSON.stringify({ pickup_stores: [ { id: 1, name: "Store 1", address: "Address 1", area_name: "Malibag", area_id: 1, phone: "01700000000", created_at: "2021-04-27T08:29:14.000Z" } ] }, null, 2)
           },
           {
            id: 'redx-pickup-store-info',
            method: 'GET',
            path: '/pickup/store/info/{pickup_store_id}',
            title: 'Pickup Store Details',
            pathParams: [{ field: 'pickup_store_id', type: 'integer', required: true, description: 'The unique identifier of the pickup store whose details need to be retrieved.' }],
            responseExample: JSON.stringify({ pickup_store: { id: 1, name: "Test Store", address: "Dhaka", phone: "01700000000", area_name: "Malibag", area_id: 1, created_at: "2021-04-27T08:29:14.000Z" } }, null, 2)
           }
        ]
      }
    ]
  },
  {
    id: 'steadfast',
    name: 'Steadfast Courier',
    category: 'courier',
    color: '#1a73e8',
    logoChar: 'S',
    logoUrl: 'https://merchant.packzy.com/assets/images/logo/logo.svg',
    authType: 'API Key',
    version: 'v1',
    description: 'Simple API Key authentication. No tokens required.',
    weightUnit: 'kg', // N/A effectively, but keeping type consistent
    sandbox: null, // No sandbox
    production: {
      baseUrl: 'https://portal.packzy.com/api/v1',
      credentials: [
        { label: 'Api-Key', value: '(Retrieve from Steadfast Dashboard)' },
        { label: 'Secret-Key', value: '(Retrieve from Steadfast Dashboard)' },
        { label: 'Content-Type', value: 'application/json' }
      ]
    },
    callouts: [
      {
        type: 'tip',
        title: 'Simple Auth',
        message: 'Just add Api-Key and Secret-Key headers to every request.'
      },
      {
        type: 'warning',
        title: 'Bulk Order Format',
        message: 'For bulk orders, the payload is a JSON object with a single "data" key, containing an array of order objects.'
      }
    ],
    statuses: [
      { slug: 'pending', meaning: 'Consignment is not delivered or cancelled yet.' },
      { slug: 'delivered_approval_pending', meaning: 'Consignment is delivered but waiting for admin approval.' },
      { slug: 'partial_delivered_approval_pending', meaning: 'Consignment is delivered partially and waiting for admin approval.' },
      { slug: 'cancelled_approval_pending', meaning: 'Consignment is cancelled and waiting for admin approval.' },
      { slug: 'unknown_approval_pending', meaning: 'Unknown Pending status. Need contact with the support team.' },
      { slug: 'delivered', meaning: 'Consignment is delivered and balance added.' },
      { slug: 'partial_delivered', meaning: 'Consignment is partially delivered and balance added.' },
      { slug: 'cancelled', meaning: 'Consignment is cancelled and balance updated.' },
      { slug: 'hold', meaning: 'Consignment is held.' },
      { slug: 'in_review', meaning: 'Order is placed and waiting to be reviewed.' },
      { slug: 'unknown', meaning: 'Unknown status. Need contact with the support team.' }
    ],
    groups: [
      {
        name: 'Orders',
        endpoints: [
          {
            id: 'steadfast-create',
            method: 'POST',
            path: '/create_order',
            title: 'Placing an order',
            description: 'Create a new consignment order.',
            bodyParams: [
              { field: 'invoice', type: 'string', required: true, description: 'Must be Unique and can be alpha-numeric including hyphens and underscores.' },
              { field: 'recipient_name', type: 'string', required: true, description: 'Within 100 characters.' },
              { field: 'recipient_phone', type: 'string', required: true, description: 'Must be 11 Digits Phone number.' },
              { field: 'alternative_phone', type: 'string', required: false, description: 'Must be 11 Digits Phone number.' },
              { field: 'recipient_email', type: 'string', required: false, description: 'Recipient email address.' },
              { field: 'recipient_address', type: 'string', required: true, description: 'Recipient’s address within 250 characters.' },
              { field: 'cod_amount', type: 'numeric', required: true, description: "Cash on delivery amount in BDT including all charges. Can't be less than 0." },
              { field: 'note', type: 'string', required: false, description: 'Delivery instructions or other notes.' },
              { field: 'item_description', type: 'string', required: false, description: 'Items name and other information' },
              { field: 'total_lot', type: 'numeric', required: false, description: 'Total Lot of items.' },
              { field: 'delivery_type', type: 'numeric', required: false, description: '0 = Home Delivery, 1 = Point Delivery/Steadfast Hub Pick Up.' }
            ],
            responseExample: JSON.stringify({
              status: 200,
              message: "Consignment has been created successfully.",
              consignment: {
                consignment_id: 1424107,
                invoice: "Aa12-das4",
                tracking_code: "15BAEB8A",
                recipient_name: "John Smith",
                recipient_phone: "01234567890",
                recipient_address: "Fla# A1,House# 17/1, Road# 3/A, Dhanmondi,Dhaka-1209",
                cod_amount: 1060,
                status: "in_review",
                note: "Deliver within 3PM",
                created_at: "2021-03-21T07:05:31.000000Z",
                updated_at: "2021-03-21T07:05:31.000000Z"
              }
            }, null, 2)
          },
          {
            id: 'steadfast-bulk',
            method: 'POST',
            path: '/create_order/bulk-order',
            title: 'Bulk Order Create',
            description: 'Maximum 500 items are allowed. Payload is a JSON object with a "data" key containing the array.',
            bodyParams: [
              { field: 'data', type: 'array', required: true, description: 'Array of order objects.' }
            ],
            bodyExample: JSON.stringify({
              data: [
                {
                   invoice: "123",
                   recipient_name: "John Doe",
                   recipient_address: "Address here",
                   recipient_phone: "01700000000",
                   cod_amount: 500,
                   note: "Urgent"
                },
                {
                   invoice: "124",
                   recipient_name: "Jane Doe",
                   recipient_address: "Address there",
                   recipient_phone: "01800000000",
                   cod_amount: 0,
                   note: "Prepaid"
                }
              ]
            }, null, 2),
            responseExample: JSON.stringify([
              {
                invoice: "230822-1",
                recipient_name: "John Doe",
                recipient_address: "House 44, Road 2/A, Dhanmondi, Dhaka 1209",
                recipient_phone: "0171111111",
                cod_amount: "0.00",
                note: null,
                consignment_id: 11543968,
                tracking_code: "B025A038",
                status: "success"
              }
            ], null, 2)
          }
        ]
      },
      {
        name: 'Status',
        endpoints: [
          {
            id: 'steadfast-status-cid',
            method: 'GET',
            path: '/status_by_cid/{id}',
            title: 'Check Status by Consignment ID',
            pathParams: [{ field: 'id', type: 'string', required: true, description: 'Consignment ID' }],
            responseExample: JSON.stringify({ status: 200, delivery_status: "in_review" }, null, 2)
          },
          {
            id: 'steadfast-status-invoice',
            method: 'GET',
            path: '/status_by_invoice/{invoice}',
            title: 'Check Status by Invoice ID',
            pathParams: [{ field: 'invoice', type: 'string', required: true, description: 'Your Invoice ID' }],
            responseExample: JSON.stringify({ status: 200, delivery_status: "delivered" }, null, 2)
          },
          {
            id: 'steadfast-status-tracking',
            method: 'GET',
            path: '/status_by_trackingcode/{trackingCode}',
            title: 'Check Status by Tracking Code',
            pathParams: [{ field: 'trackingCode', type: 'string', required: true, description: 'Tracking Code' }],
            responseExample: JSON.stringify({ status: 200, delivery_status: "cancelled" }, null, 2)
          }
        ]
      },
      {
        name: 'Account & Payments',
        endpoints: [
          {
            id: 'steadfast-balance',
            method: 'GET',
            path: '/get_balance',
            title: 'Checking Current Balance',
            responseExample: JSON.stringify({ status: 200, current_balance: 0 }, null, 2)
          },
          {
            id: 'steadfast-payments',
            method: 'GET',
            path: '/payments',
            title: 'Get Payments',
            description: 'Get list of payments.',
            responseExample: JSON.stringify({ payments: [] }, null, 2)
          },
          {
            id: 'steadfast-single-payment',
            method: 'GET',
            path: '/payments/{payment_id}',
            title: 'Get Single Payment with Consignments',
            pathParams: [{ field: 'payment_id', type: 'string', required: true, description: 'Payment ID' }],
            responseExample: JSON.stringify({ payment: { id: 123, amount: 5000, consignments: [] } }, null, 2)
          }
        ]
      },
      {
        name: 'Return Requests',
        endpoints: [
          {
             id: 'steadfast-create-return',
             method: 'POST',
             path: '/create_return_request',
             title: 'Creating Return Requests',
             bodyParams: [
                { field: 'consignment_id', type: 'numeric/string', required: true, description: 'Consignment id or user defined invoice id or tracking code of the consignment of the requesting consignment.' },
                { field: 'reason', type: 'string', required: false, description: 'Reason for return.' }
             ],
             responseExample: JSON.stringify({
                id: 1,
                user_id: 1,
                consignment_id: 10000042,
                reason: null,
                status: "pending",
                created_at: "2025-07-30T23:11:45.000000Z",
                updated_at: "2025-07-30T23:11:45.000000Z"
             }, null, 2)
          },
          {
             id: 'steadfast-get-return',
             method: 'GET',
             path: '/get_return_request/{id}',
             title: 'Single Return Request View',
             pathParams: [{ field: 'id', type: 'string', required: true, description: 'Return Request ID' }],
             responseExample: JSON.stringify({ id: 1, status: "pending" }, null, 2)
          },
          {
             id: 'steadfast-get-returns',
             method: 'GET',
             path: '/get_return_requests',
             title: 'Get Return Requests',
             responseExample: JSON.stringify({ data: [] }, null, 2)
          }
        ]
      },
      {
         name: 'General',
         endpoints: [
            {
               id: 'steadfast-police',
               method: 'GET',
               path: '/police_stations',
               title: 'Get Policestations',
               responseExample: JSON.stringify({ data: [] }, null, 2)
            }
         ]
      }
    ]
  },
  {
    id: 'carrybee',
    name: 'Carrybee',
    category: 'courier',
    color: '#f59e0b',
    logoChar: 'C',
    logoUrl: 'https://merchant.carrybee.com/_next/image?url=%2Fassets%2Fimages%2Flogo-with-tag.png&w=256&q=75',
    authType: 'Client Headers',
    version: 'v2.0',
    description: 'Context-aware client headers authentication.',
    weightUnit: 'g',
    sandbox: {
      baseUrl: 'https://stage-sandbox.carrybee.com',
      credentials: [
        { label: 'Client ID', value: '1a89c1a6-fc68-4395-9c09-628e0d3eaafc' },
        { label: 'Client Secret', value: '1d7152c9-5b2d-4e4e-9c20-652b93333704' },
        { label: 'Client Context', value: 'DzJwPsx31WaTbS745XZoBjmQLcNqwK' }
      ]
    },
    production: {
      baseUrl: 'https://developers.carrybee.com',
      credentials: [
        { label: 'Credentials', value: 'Available in dashboard' }
      ]
    },
    callouts: [
      {
        type: 'warning',
        title: 'Weight Unit',
        message: 'item_weight is in GRAMS not kilograms! 500 = 0.5kg.'
      },
      {
        type: 'tip',
        title: 'Validation',
        message: 'Search fields like query in address details must be >10 chars. Area search >3 chars.'
      }
    ],
    webhooks: {
      events: [
        { name: 'order.created', description: 'New order created' },
        { name: 'order.updated', description: 'Order details updated' },
        { name: 'order.pickup-requested', description: 'Pickup requested by merchant' },
        { name: 'order.assigned-for-pickup', description: 'Rider assigned for pickup' },
        { name: 'order.picked', description: 'Parcel collected from store' },
        { name: 'order.pickup-failed', description: 'Pickup failed' },
        { name: 'order.pickup-cancelled', description: 'Pickup cancelled' },
        { name: 'order.at-the-sorting-hub', description: 'Parcel at sorting hub' },
        { name: 'order.on-the-way-to-central-warehouse', description: 'Moving to central WH' },
        { name: 'order.at-central-warehouse', description: 'At Central Warehouse' },
        { name: 'order.in-transit', description: 'In transit to destination' },
        { name: 'order.received-at-last-mile-hub', description: 'At destination hub' },
        { name: 'order.assigned-for-delivery', description: 'Rider assigned for delivery' },
        { name: 'order.delivery-on-hold', description: 'Delivery on hold' },
        { name: 'order.delivered', description: 'Delivered successfully' },
        { name: 'order.partial-delivery', description: 'Partially delivered' },
        { name: 'order.delivery-failed', description: 'Delivery failed' },
        { name: 'order.returned', description: 'Returned to merchant' },
        { name: 'order.paid-return', description: 'Returned with payment' },
        { name: 'order.exchange', description: 'Order exchanged' },
        { name: 'order.paid', description: 'Payment settled' },
        { name: 'order.returned-at-sorting', description: 'Returned from sorting' },
        { name: 'order.returned-in-transit', description: 'Returned during transit' },
        { name: 'order.returned-to-merchant', description: 'Physically returned to merchant' }
      ],
      payloadExample: JSON.stringify({
         event: "order.created",
         store_id: "a1b2c3d4",
         consignment_id: "FX1212124433",
         merchant_order_id: "order-1234",
         timestamptz: "2025-07-30T10:11:12+00:00",
         collectable_amount: "1592",
         cod_fee: 15.92,
         delivery_fee: "85"
      }, null, 2),
      signatureHeader: 'X-Carrybee-Webhook-Signature',
      testCurl: `curl --location '{{webhook_url}}' \\
  --header 'X-Carrybee-Webhook-Signature: "{{WEBHOOK_SIGNATURE}}"' \\
  --data '{
    "content": "your webhook event data"
  }'`,
      testNote: '{{WEBHOOK_SIGNATURE}} is provided by you to Carrybee. Verify this header on your server.'
    },
    groups: [
      {
        name: 'Location',
        endpoints: [
          {
            id: 'carrybee-cities',
            method: 'GET',
            path: '/api/v2/cities',
            title: 'Get Cities',
            responseExample: JSON.stringify({ error: false, message: "City list fetched successfully", data: { cities: [{ id: 14, name: "Dhaka" }] } }, null, 2)
          },
          {
            id: 'carrybee-zones',
            method: 'GET',
            path: '/api/v2/cities/{city_id}/zones',
            title: 'Get Zones',
            pathParams: [{ field: 'city_id', type: 'integer', required: true, description: 'City ID' }],
            responseExample: JSON.stringify({ error: false, message: "Zones", data: { zones: [{ id: 290, name: "Zoo Road", city_id: 14 }] } }, null, 2)
          },
          {
            id: 'carrybee-areas',
            method: 'GET',
            path: '/api/v2/cities/{city_id}/zones/{zone_id}/areas',
            title: 'Get Areas',
            pathParams: [
              { field: 'city_id', type: 'integer', required: true, description: 'City ID' },
              { field: 'zone_id', type: 'integer', required: true, description: 'Zone ID' }
            ],
            responseExample: JSON.stringify({ error: false, message: "Area list fetched successfully", data: { areas: [{ id: 8803, name: "Zirani Kata", zone_id: 356 }] } }, null, 2)
          },
          {
            id: 'carrybee-area-suggestion',
            method: 'GET',
            path: '/api/v2/area-suggestion',
            title: 'Get Area Suggestion',
            description: 'Search for areas, zones, or cities. Min 3 chars.',
            queryParams: [{ field: 'search', type: 'string', required: true, description: 'Field search should be at least 3 characters long, allowing to search for the text in the area/zone/city.' }],
            responseExample: JSON.stringify({ error: false, data: { items: [{ city_id: 14, city_name: "Dhaka", zone_id: 161, zone_name: "Mirpur", area_id: 8803, area_name: "Alal Avenue" }] } }, null, 2)
          },
          {
            id: 'carrybee-address',
            method: 'POST',
            path: '/api/v2/address-details',
            title: 'Address Lookup',
            description: 'Get city_id and zone_id from an address string (min 10 chars).',
            bodyParams: [
              { field: 'query', type: 'string', required: true, description: 'Field query is required, and should be at least 10 characters long.' }
            ],
            responseExample: JSON.stringify({ error: false, message: "Address details", data: { city_id: 14, zone_id: 161 } }, null, 2)
          }
        ]
      },
      {
        name: 'Stores',
        endpoints: [
          {
            id: 'carrybee-create-store',
            method: 'POST',
            path: '/api/v2/stores',
            title: 'Create Store',
            bodyParams: [
               { field: 'name', type: 'string', required: true, description: 'name field should be between 3 and 30 characters.' },
               { field: 'contact_person_name', type: 'string', required: true, description: 'contact_person_name field should be between 3 and 30 characters.' },
               { field: 'contact_person_number', type: 'string', required: true, description: 'contact_person_number field should be a valid phone number.' },
               { field: 'contact_person_secondary_number', type: 'string', required: false, description: 'Optional. If present, must be a valid phone number.' },
               { field: 'address', type: 'string', required: true, description: 'address field should be between 3 and 100 characters.' },
               { field: 'city_id', type: 'integer', required: true, description: 'City ID' },
               { field: 'zone_id', type: 'integer', required: true, description: 'Zone ID' },
               { field: 'area_id', type: 'integer', required: true, description: 'Area ID' },
               { field: 'lat', type: 'float', required: false, description: 'Optional. Must be a valid latitude field.' },
               { field: 'lng', type: 'float', required: false, description: 'Optional. Must be a valid longitude field.' }
            ],
            responseExample: JSON.stringify({ error: false, message: "Store created successfully" }, null, 2)
          },
          {
            id: 'carrybee-get-stores',
            method: 'GET',
            path: '/api/v2/stores',
            title: 'Get All Stores',
            responseExample: JSON.stringify({ error: false, message: "Store list", data: { stores: [{ id: "abcd-1234", name: "Store of Anik", is_active: true }] } }, null, 2)
          }
        ]
      },
      {
        name: 'Orders',
        endpoints: [
          {
            id: 'carrybee-create',
            method: 'POST',
            path: '/api/v2/orders',
            title: 'Create Single Order',
            callouts: [
              {
                type: 'warning',
                title: 'API Typo Alert',
                message: 'The secondary phone field is spelled `recipient_secendary_phone` (not `secondary`) in the Carrybee API. Use the misspelled version exactly in your payload.'
              },
              {
                 type: 'info',
                 title: 'Weights',
                 message: 'item_weight must be in GRAMS (1-25000).'
              }
            ],
            bodyParams: [
              { field: 'store_id', type: 'string', required: true, description: 'Required. Should be string. Is the value (data.stores[*].id) from the Get list of stores response.' },
              { field: 'merchant_order_id', type: 'string', required: false, description: 'Optional. If present in the request, should be a string with length below 50 characters.' },
              { field: 'delivery_type', type: 'integer', required: true, description: 'Value should be 1 for Normal delivery, 2 for Express Delivery.' },
              { field: 'product_type', type: 'integer', required: true, description: 'Value should be 1 for Parcel, 2 for Book, 3 for Document.' },
              { field: 'recipient_name', type: 'string', required: true, description: 'The length between 2 and 99 characters.' },
              { field: 'recipient_phone', type: 'string', required: true, description: 'Must be a valid phone number string.' },
              { field: 'recipient_secendary_phone', type: 'string', required: false, description: 'Optional. If present, must be a valid phone number string.' },
              { field: 'recipient_address', type: 'string', required: true, description: 'The length between 10 and 200 characters.' },
              { field: 'city_id', type: 'integer', required: true, description: 'The value of (data.cities[*].id) from the Get cities response.' },
              { field: 'zone_id', type: 'integer', required: true, description: 'The value of (data.zones[*].id) from the Get zones response.' },
              { field: 'area_id', type: 'integer', required: false, description: 'Optional. The value of (data.areas[*].id) from the Get areas response.' },
              { field: 'item_weight', type: 'integer', required: true, description: 'An integer field. The value should be in GRAMS, not in KILOGRAMS. The value should be in between 1 and 25000.' },
              { field: 'item_quantity', type: 'integer', required: false, description: 'An integer field. The value should be in between 1 and 200.' },
              { field: 'collectable_amount', type: 'integer', required: false, description: 'Receives in Taka, is an optional and integer field. If present, value should be between 0 and 100000.' },
              { field: 'special_instruction', type: 'string', required: false, description: 'Optional. If present, the value should be a string and the length should be less then 256 characters.' },
              { field: 'product_description', type: 'string', required: false, description: 'Optional. If present, the value should be a string and the length should be less then 256 characters.' },
              { field: 'is_closed', type: 'boolean', required: false, description: 'Optional and boolean field (default: false). If an order is supposed to be a close box item, the field should be true.' }
            ],
            responseExample: JSON.stringify({ error: false, message: "Order Created Successfully", data: { order: { consignment_id: "FX1212124433", store_id: "a1b2c3d4", merchant_order_id: "order-1234", collectable_amount: "15000", cod_fee: 15, delivery_fee: "60" } } }, null, 2)
          },
          {
             id: 'carrybee-bulk',
             method: 'POST',
             path: '/api/v2/orders-bulk',
             title: 'Create Bulk Order',
             description: 'Accepts an array of order objects (same structure as single order).',
             bodyParams: [
                { field: 'orders', type: 'array', required: true, description: 'Array of order objects' }
             ],
             bodyExample: JSON.stringify({
                orders: [
                   {
                      store_id: "a1b2c3d4",
                      merchant_order_id: "order-1",
                      delivery_type: 1,
                      product_type: 1,
                      recipient_phone: "01700000000",
                      recipient_name: "John Doe",
                      recipient_address: "House 10, Road 5",
                      city_id: 14,
                      zone_id: 5,
                      item_weight: 500
                   },
                   {
                      store_id: "a1b2c3d4",
                      merchant_order_id: "order-2",
                      delivery_type: 1,
                      product_type: 1,
                      recipient_phone: "01800000000",
                      recipient_name: "Jane Doe",
                      recipient_address: "House 12, Road 3",
                      city_id: 14,
                      zone_id: 5,
                      item_weight: 1000
                   }
                ]
             }, null, 2),
             responseExample: JSON.stringify({ error: false, message: "Order list accepted to be processed" }, null, 2)
          },
          {
            id: 'carrybee-get-order',
            method: 'GET',
            path: '/api/v2/orders/{consignment_id}/details',
            title: 'Get Order Details',
            pathParams: [{ field: 'consignment_id', type: 'string', required: true, description: 'The consignment_id should either be our consignment id or the your tracking/booking id. In case you are using your tracking/booking id, the ID should be at least 3 characters long, also it should be path parameter friendly.' }],
            responseExample: JSON.stringify({ 
              error: false,
              message: "Order details",
              data: { 
                transfer_status: "In transit",
                consignment_id: "FX1212124433", 
                merchant_order_id: "order-1234",
                recipient_name: "John Doe",
                recipient_phone: "01700000000",
                recipient_secondary_phone: null,
                recipient_address: "House 10, Road 5",
                collectable_amount: "1000",
                collected_amount: "0",
                cod_fee: 10,
                delivery_fee: "105",
                attempt: 0,
                updated_at: "2025-07-30T10:11:12+00:00"
              } 
            }, null, 2)
          },
          {
            id: 'carrybee-cancel',
            method: 'POST',
            path: '/api/v2/orders/{consignment_id}/cancel',
            title: 'Cancel Order',
            pathParams: [{ field: 'consignment_id', type: 'string', required: true, description: 'Consignment ID' }],
            bodyParams: [
               { field: 'cancellation_reason', type: 'string', required: true, description: 'The value should contain less than 200 characters.' }
            ],
            responseExample: JSON.stringify({ error: false, message: "Order cancelled successfully" }, null, 2)
          }
        ]
      }
    ]
  },
  // --- SMS PROVIDERS ---
  {
    id: 'ssl-wireless',
    name: 'SSL Wireless',
    category: 'sms',
    color: '#0072bc',
    logoChar: 'S',
    logoUrl: 'https://sslcommerz.com/wp-content/uploads/2021/11/logo.png',
    authType: 'API Token',
    version: 'v3.0.0',
    description: 'Enterprise SMS gateway by SSL Wireless (Software Shop Limited). Push SMS connectivity with single, bulk, and dynamic message support.',
    weightUnit: 'kg' as const,
    sandbox: null,
    production: {
      baseUrl: '<domain>/api/v3',
      credentials: [
        { label: 'api_token', value: '(Retrieve from SSL Wireless Dashboard)' },
        { label: 'sid', value: '(Your registered Sender ID)' },
        { label: 'Content-Type', value: 'application/json' }
      ]
    },
    callouts: [
      {
        type: 'info' as const,
        title: 'Authentication',
        message: 'Every request requires your api_token and sid (Sender ID / Stakeholder ID) in the JSON body. IP whitelisting is supported for production security.'
      },
      {
        type: 'warning' as const,
        title: 'BTRC Compliance',
        message: 'All SMS must be in Bangla as per BTRC notice. Only OTP digits, URLs, and mobile numbers can be in English. OTP messages can be sent in both English and Bangla. Accounts sending English promotional content will be disconnected.'
      },
      {
        type: 'tip' as const,
        title: 'OTP Delivery',
        message: 'Dedicated high-priority OTP route with average delivery latency of ~1 second across all operators (GP, Robi, Banglalink, Teletalk). Success rate: 99.99% (operator dependent).'
      },
      {
        type: 'info' as const,
        title: 'Failover & Routing',
        message: 'Routing can be manually changed in case of any operator gateway downtime, based on confirmation. No automatic failover.'
      },
      {
        type: 'info' as const,
        title: 'Dashboard & Reporting',
        message: 'Real-time dashboard access for SMS reports. Delivery reports available on demand. No DLR webhook support. Operator-wise statistics are not available.'
      }
    ],
    statuses: [
      { slug: 'SUCCESS (200)', meaning: 'Request processed successfully.' },
      { slug: 'FAILED (4001)', meaning: 'Unauthorized — Invalid API token.' },
      { slug: 'FAILED (4002)', meaning: 'SID/Stakeholder is not permitted to send SMS.' },
      { slug: 'FAILED (4003)', meaning: 'IP Blacklisted — Client IP is blacklisted in SSL API gateway.' },
      { slug: 'FAILED (4004)', meaning: 'Endpoint Not Found — Invalid API URL.' },
      { slug: 'FAILED (4005)', meaning: 'Invalid request format — Invalid content type or not valid JSON.' },
      { slug: 'FAILED (4020)', meaning: 'Invalid CSMS ID — CSMS ID is not valid.' },
      { slug: 'FAILED (4022)', meaning: 'Required Parameter Missing — Mandatory field not provided.' },
      { slug: 'FAILED (4023)', meaning: 'Duplicate CSMS ID — CSMS ID is duplicate in the same day.' },
      { slug: 'FAILED (4025)', meaning: 'Invalid MSISDN — Provided MSISDN is invalid.' },
      { slug: 'FAILED (4026)', meaning: 'Blocked MSISDN — MSISDN is blocked.' },
      { slug: 'FAILED (4027)', meaning: 'Message length exceeded maximum.' },
      { slug: 'FAILED (4028)', meaning: 'Invalid message data — No SMS is successful on bulk or dynamic request.' },
      { slug: 'FAILED (4029)', meaning: 'Too many requests — API request limit exceeded.' },
      { slug: 'FAILED (4030)', meaning: 'Limit Exceeded — Max MSISDN exceeded for one request.' },
      { slug: 'FAILED (4031)', meaning: 'TPS Exceeded — Transactions per second limit exceeded.' },
      { slug: 'FAILED (5000)', meaning: 'Unknown Error — Error for undefined reason.' },
      { slug: 'SMS: SUCCESS', meaning: 'SMS delivered successfully.' },
      { slug: 'SMS: INVALID (MSISDN)', meaning: 'Provided MSISDN is invalid.' },
      { slug: 'SMS: INVALID (Length)', meaning: 'Maximum message length exceeded.' },
      { slug: 'SMS: INVALID (CSMS ID)', meaning: 'CSMS ID is invalid.' },
      { slug: 'SMS: DUPLICATE (CSMS ID)', meaning: 'CSMS ID is duplicate on the same day.' },
      { slug: 'SMS: DUPLICATE (MSISDN)', meaning: 'MSISDN is duplicate on the same request.' }
    ],
    groups: [
      {
        name: 'Send SMS',
        endpoints: [
          {
            id: 'ssl-single-sms',
            method: 'POST' as const,
            path: '/api/v3/send-sms',
            title: 'Send Single SMS',
            description: 'Send a single SMS to one MSISDN. Supports both GET and POST methods with JSON content type.',
            callouts: [
              {
                type: 'tip' as const,
                title: 'GET Support',
                message: 'This endpoint also supports GET method. You can pass the same parameters as query strings.'
              }
            ],
            bodyParams: [
              { field: 'api_token', type: 'string', required: true, description: 'Your unique API token provided by SSL for authentication. Max 50 chars.' },
              { field: 'sid', type: 'string', required: true, description: 'Unique Sender ID / Stakeholder ID for your brand/masking name, provided by SSL. Max 20 chars.' },
              { field: 'msisdn', type: 'string', required: true, description: 'Recipient mobile number (max 16 digits), e.g. 88019XXXXXXXX.' },
              { field: 'sms', type: 'string', required: true, description: 'SMS message body (max 1000 chars). Length differs for Unicode SMS.' },
              { field: 'csms_id', type: 'string', required: true, description: 'Unique client-side message ID (max 20 chars). Must be unique for the same day only.' }
            ],
            bodyExample: JSON.stringify({
              api_token: "1279-98d2bb25-3f7e-49bf-a1e2-5d1a6c6c588f",
              sid: "ENGINEERING",
              msisdn: "88019XXXXXXXX",
              sms: "Message Body",
              csms_id: "4473433434pZ684333392"
            }, null, 2),
            responseExample: JSON.stringify({
              status: "SUCCESS",
              status_code: 200,
              error_message: "",
              smsinfo: [
                {
                  sms_status: "SUCCESS",
                  status_message: "Success",
                  msisdn: "88019XXXXXXXX",
                  sms_type: "EN",
                  sms_body: "Message Body",
                  csms_id: "4473433434pZ684333392",
                  reference_id: "5da2f0b5ba3a2248110"
                }
              ]
            }, null, 2)
          },
          {
            id: 'ssl-bulk-sms',
            method: 'POST' as const,
            path: '/api/v3/send-sms/bulk',
            title: 'Send Bulk SMS',
            description: 'Send a common SMS body to multiple MSISDNs. POST only. MSISDN limit: 100 per request.',
            bodyParams: [
              { field: 'api_token', type: 'string', required: true, description: 'Your unique API token provided by SSL. Max 50 chars.' },
              { field: 'sid', type: 'string', required: true, description: 'Unique Sender ID / Stakeholder ID. Max 20 chars.' },
              { field: 'msisdn', type: 'array', required: true, description: 'Array of recipient mobile numbers (max 100 per request, each max 16 digits).' },
              { field: 'sms', type: 'string', required: true, description: 'Common SMS body for all recipients (max 1000 chars). Length differs for Unicode.' },
              { field: 'batch_csms_id', type: 'string', required: true, description: 'Unique batch reference ID from client (max 20 chars). Must be unique for the same day.' }
            ],
            bodyExample: JSON.stringify({
              api_token: "1279-98d2bb25-3f7e-49bf-a1e2-5d1a6c6c588f",
              sid: "ENGINEERING",
              msisdn: ["019XXXXXXXX", "017XXXXXXXX", "018XXXXXXXX"],
              sms: "Message Body",
              batch_csms_id: "4437343343P3Z684333392"
            }, null, 2),
            responseExample: JSON.stringify({
              status: "SUCCESS",
              status_code: 200,
              error_message: "",
              smsinfo: [
                {
                  sms_status: "SUCCESS",
                  status_message: "Success",
                  msisdn: "88019XXXXXXXX",
                  sms_type: "EN",
                  sms_body: "Message Body",
                  csms_id: "4437343343P3Z684333392",
                  reference_id: "5da2f0b5ba3a2248110"
                },
                {
                  sms_status: "SUCCESS",
                  status_message: "Success",
                  msisdn: "88017XXXXXXXX",
                  sms_type: "EN",
                  sms_body: "Message Body",
                  csms_id: "4437343343P3Z684333392",
                  reference_id: "5da2f0b5ba3a2248111"
                },
                {
                  sms_status: "SUCCESS",
                  status_message: "Success",
                  msisdn: "88018XXXXXXXX",
                  sms_type: "EN",
                  sms_body: "Message Body",
                  csms_id: "4437343343P3Z684333392",
                  reference_id: "5da2f0b5ba3a2248112"
                }
              ]
            }, null, 2)
          },
          {
            id: 'ssl-dynamic-sms',
            method: 'POST' as const,
            path: '/api/v3/send-sms/dynamic',
            title: 'Send Dynamic SMS',
            description: 'Send unique SMS bodies to multiple MSISDNs in a single request. POST only. SMS limit: 100 per request. Note: Each message uses the "text" field (not "sms") for the message body.',
            callouts: [
              {
                type: 'warning' as const,
                title: 'Field Name Difference',
                message: 'Unlike Single/Bulk SMS which use "sms" for the message body, Dynamic SMS uses "text" inside each sms array object for the message content.'
              }
            ],
            bodyParams: [
              { field: 'api_token', type: 'string', required: true, description: 'Your unique API token provided by SSL. Max 50 chars.' },
              { field: 'sid', type: 'string', required: true, description: 'Unique Sender ID / Stakeholder ID. Max 20 chars.' },
              { field: 'sms', type: 'array', required: true, description: 'Array of SMS objects. Each object contains: msisdn (recipient, max 16 digits), text (message body, max 1000 chars), csms_id (unique ref ID, max 20 chars).' }
            ],
            bodyExample: JSON.stringify({
              api_token: "1279-98d2bb25-3f7e-49bf-a1e2-5d1a6c6c588f",
              sid: "ENGINEERING",
              sms: [
                { text: "Message Body 1", msisdn: "019XXXXXXXX", csms_id: "234444343222" },
                { text: "Message Body 2", msisdn: "017XXXXXXXX", csms_id: "222334242244" },
                { text: "Message Body 3", msisdn: "018XXXXXXXX", csms_id: "232352235235" }
              ]
            }, null, 2),
            responseExample: JSON.stringify({
              status: "SUCCESS",
              status_code: 200,
              error_message: "",
              smsinfo: [
                {
                  sms_status: "SUCCESS",
                  status_message: "Success",
                  msisdn: "88019XXXXXXXX",
                  sms_type: "EN",
                  sms_body: "Message Body 1",
                  csms_id: "234444343222",
                  reference_id: "5da2f0b5ba3a2248110"
                },
                {
                  sms_status: "SUCCESS",
                  status_message: "Success",
                  msisdn: "88017XXXXXXXX",
                  sms_type: "EN",
                  sms_body: "Message Body 2",
                  csms_id: "222334242244",
                  reference_id: "5da2f0b5ba3a2248111"
                },
                {
                  sms_status: "SUCCESS",
                  status_message: "Success",
                  msisdn: "88018XXXXXXXX",
                  sms_type: "EN",
                  sms_body: "Message Body 3",
                  csms_id: "232352235235",
                  reference_id: "5da2f0b5ba3a2248112"
                }
              ]
            }, null, 2)
          }
        ]
      }
    ],
    smsMeta: {
      floorPrice: '0.3200 BDT (Non-Masking incl. VAT)',
      pricing: [
        { serviceType: 'Non-Masking', startPrice: '৳0.3200', bestFor: 'General Alerts', keyFeature: 'Shows generic number. Unit Price: ৳0.3048 + VAT.' },
        { serviceType: 'Masking', startPrice: '৳0.5250', bestFor: 'Brand Identity', keyFeature: 'Shows Brand Name. Unit Price: ৳0.5000 + VAT.' },
        { serviceType: 'OTP SMS', startPrice: 'Negotiable', bestFor: 'High Priority', keyFeature: 'Dedicated route; ~1s delivery latency. Pricing based on volume & opportunity.' },
        { serviceType: 'Location-Based', startPrice: '—', bestFor: 'Targeted Ads', keyFeature: '—' },
        { serviceType: '2-Way SMS', startPrice: '—', bestFor: 'Interactive', keyFeature: '—' }
      ],
      compliance: {
        banglaLanguageRule: 'Per BTRC notice, all types of SMS must be in Bangla.',
        englishExceptions: 'OTP messages can be sent in both English and Bangla. Only numeric digits (OTPs), URLs, and Mobile Numbers can be in English for other SMS types.',
        noInternationalOtp: 'International OTPs prohibited (e.g. Google/Facebook).',
        characterLimits: {
          english: '160 chars (EN type)',
          unicode: '70 chars (BN type)',
          longSms: 'Concatenated (max 1000 chars per API field)'
        },
        penalty: 'Disconnection for English promotional content.'
      },
      registrationDocs: [
        { category: 'Masking Documents', requirement: 'Declaration Form + Authorization Form (normal case).' },
        { category: 'Masking Approval', requirement: '3 Working Days for BTRC approval of custom Masking Sender ID.' },
        { category: 'Masking Fee', requirement: 'One-time registration fee ~৳5,000 (Market Rate).' },
        { category: 'Validity', requirement: '1 Year validity for enterprise packages.' },
        { category: 'Payment Terms', requirement: '100% advance payment required.' }
      ],
      maskingApproval: '3 Working Days',
      proTip: 'OTP SMS pricing is negotiation-based — discuss opportunity & volume first. For high volumes, contact hotline for volume-based discounts. Payment is 100% advance with 1-year validity. Dashboard provides real-time SMS reports; delivery reports available on demand.',
      contact: {
        address: '93 B New Eskaton Road, Dhaka 1000, Bangladesh',
        phone: '+880 9612222020',
        fax: '+880 2 913 2172',
        email: 'service.operation@sslwireless.com',
        website: 'https://www.sslwireless.com'
      }
    }
  },
  {
    id: 'mim-sms',
    name: 'MiM SMS',
    category: 'sms',
    color: '#e91e63',
    logoChar: 'M',
    logoUrl: 'https://www.mimsms.com/storage/2021/04/MiM-SMS-Transparent-Logo.png',
    authType: 'API Key',
    version: 'v1',
    description: 'MiM Digital SMS gateway with transactional, promotional, and dynamic messaging. HTTP and JSON API interfaces.',
    weightUnit: 'kg' as const,
    sandbox: null,
    production: {
      baseUrl: 'https://api.mimsms.com',
      credentials: [
        { label: 'UserName', value: '(Your registered email)' },
        { label: 'Apikey', value: '(Generate from Developer Option in MiM SMS Portal)' },
        { label: 'Content-Type', value: 'application/json' }
      ]
    },
    callouts: [
      {
        type: 'info' as const,
        title: 'Authentication',
        message: 'Every request requires UserName (your email) and Apikey in the JSON body or query string. API Key is generated from the Developer Option in the MiM SMS Portal.'
      },
      {
        type: 'warning' as const,
        title: 'BTRC Compliance (2026)',
        message: 'All SMS must be in Bangla per BTRC notice. Only OTP digits, URLs, and mobile numbers can be in English. Accounts sending purely English promotional content will be disconnected.'
      },
      {
        type: 'tip' as const,
        title: 'Phone Number Format',
        message: 'Use international format without + sign, e.g. 8801844909020. Multiple numbers for promotional SMS can be comma-separated.'
      },
      {
        type: 'warning' as const,
        title: 'Promotional SMS',
        message: 'Sending promotional messages requires prior approval from the regulatory authority (BTRC). CampaignId is mandatory for promotional SMS.'
      },
      {
        type: 'info' as const,
        title: 'Transaction ID (trxnId)',
        message: 'Each message successfully submitted is uniquely identified with a trxnId. This Transaction ID can be used for checking delivery status or sent message logs.'
      }
    ],
    statuses: [
      { slug: '200 SUCCESS', meaning: 'SMS sent successfully.' },
      { slug: '401 UNAUTHORIZED', meaning: 'IP blacklisted or invalid username/password.' },
      { slug: '208 FAILED', meaning: 'Invalid Sender ID.' },
      { slug: '205 FAILED', meaning: 'Invalid message content.' },
      { slug: '206 FAILED', meaning: 'Invalid mobile number.' },
      { slug: '209 FAILED', meaning: 'SMS length exceeds maximum level.' },
      { slug: '221 FAILED', meaning: 'SMS sending failed.' },
      { slug: '500 FAILED', meaning: 'Internal server error.' },
      { slug: '213 FAILED', meaning: 'Parameter mismatch.' },
      { slug: '216 FAILED', meaning: 'Insufficient balance — recharge your account.' },
      { slug: '210 FAILED', meaning: 'Invalid CampaignId.' },
      { slug: '207 FAILED', meaning: 'Invalid transaction type.' },
      { slug: 'DLR: Delivered', meaning: 'Delivered in handset.' },
      { slug: 'DLR: Absent subscriber', meaning: 'Handset off or out of coverage for 12+ hours. Retry: 3.' },
      { slug: 'DLR: Undelivered', meaning: 'Handset memory full, unable to receive. No retry.' },
      { slug: 'DLR: Subscriber Busy', meaning: 'MSC busy handling another transaction. Retry: 3.' },
      { slug: 'DLR: Unidentified subscriber', meaning: 'MT number unknown in the network MSC. No retry.' },
      { slug: 'DLR: Barred subscriber', meaning: 'Number cannot receive SMS (unpaid bills, blacklisted, or user-requested block). No retry.' },
      { slug: 'DLR: Illegal subscriber', meaning: 'Sender ID blocked by operators for illegal SMS traffic. No retry.' },
      { slug: 'DLR: SMS Failed', meaning: 'Sender ID blocked or network failure in SMSC link. Retry: 3.' },
      { slug: 'DLR: System failure', meaning: 'SS7 protocol or network failure. Retry: 3.' },
      { slug: 'DLR: SMSC Timeout-abort', meaning: 'SMSC timeout. Retry: 3.' }
    ],
    groups: [
      {
        name: 'Send SMS',
        endpoints: [
          {
            id: 'mim-send-sms',
            method: 'POST' as const,
            path: '/api/SmsSending/SMS',
            title: 'Send Single SMS',
            description: 'Send a single SMS to one phone number. Use TransactionType: T (transactional), P (promotional), D (dynamic).',
            bodyParams: [
              { field: 'UserName', type: 'string', required: true, description: 'Your registered email address (username).' },
              { field: 'Apikey', type: 'string', required: true, description: 'Your API Key from MiM SMS Portal Developer Option.' },
              { field: 'MobileNumber', type: 'string', required: true, description: 'Destination mobile number in international format (e.g. 88018xxxxxxxx).' },
              { field: 'CampaignId', type: 'string', required: false, description: 'Approved campaign ID — mandatory for Promotional SMS, set to "null" otherwise.' },
              { field: 'SenderName', type: 'string', required: true, description: 'Your registered Sender ID.' },
              { field: 'TransactionType', type: 'string', required: true, description: 'T: Transactional, P: Promotional, D: Dynamic.' },
              { field: 'Message', type: 'string', required: true, description: 'Your SMS message body.' }
            ],
            bodyExample: JSON.stringify({
              UserName: "you@example.com",
              Apikey: "XXXXXXXXXXXXXXXXXXXXXX",
              MobileNumber: "88018xxxxxxxx",
              CampaignId: "null",
              SenderName: "MiM Digital",
              TransactionType: "T",
              Message: "My first API SMS from MiM Digital"
            }, null, 2),
            responseExample: JSON.stringify({
              statusCode: "200",
              status: "Success",
              trxnId: "1OSY3FSZ7H4IHOU",
              responseResult: "SMS Send Successfuly"
            }, null, 2)
          },
          {
            id: 'mim-one-to-many',
            method: 'POST' as const,
            path: '/api/SmsSending/OneToMany',
            title: 'Send One-to-Many SMS',
            description: 'Send a single message to multiple recipients. Mobile numbers comma-separated.',
            bodyParams: [
              { field: 'UserName', type: 'string', required: true, description: 'Your registered email address.' },
              { field: 'Apikey', type: 'string', required: true, description: 'Your API Key.' },
              { field: 'MobileNumber', type: 'string', required: true, description: 'Comma-separated mobile numbers (e.g. 88018xxxxxxxx,88017xxxxxxxx).' },
              { field: 'CampaignId', type: 'string', required: false, description: 'Approved campaign ID for promotional SMS.' },
              { field: 'SenderName', type: 'string', required: true, description: 'Registered Sender ID.' },
              { field: 'TransactionType', type: 'string', required: true, description: 'T: Transactional, P: Promotional.' },
              { field: 'Message', type: 'string', required: true, description: 'Message body (same for all recipients).' }
            ],
            bodyExample: JSON.stringify({
              UserName: "you@example.com",
              Apikey: "XXXXXXXXXXXXXXXXXXXXXX",
              MobileNumber: "88018xxxxxxxx,88017xxxxxxxx,88019xxxxxxxx",
              CampaignId: "null",
              SenderName: "MiM SMS",
              TransactionType: "T",
              Message: "My first API SMS from MiM Digital"
            }, null, 2),
            responseExample: JSON.stringify({
              statusCode: "200",
              status: "Success",
              trxnId: "133585142743231481",
              responseResult: "SMS Send Successfuly"
            }, null, 2)
          },
          {
            id: 'mim-dynamic-sms',
            method: 'POST' as const,
            path: '/api/SmsSending/DSMS',
            title: 'Send Dynamic SMS',
            description: 'Send unique messages to multiple destinations in a single API call.',
            bodyParams: [
              { field: 'UserName', type: 'string', required: true, description: 'Your registered email address.' },
              { field: 'Apikey', type: 'string', required: true, description: 'Your API Key.' },
              { field: 'SenderName', type: 'string', required: true, description: 'Registered Sender ID.' },
              { field: 'TransactionType', type: 'string', required: true, description: 'Must be D for Dynamic SMS.' },
              { field: 'SmsData', type: 'array', required: true, description: 'Array of objects with MobNumber and Message fields.' }
            ],
            bodyExample: JSON.stringify({
              UserName: "you@example.com",
              Apikey: "XXXXXXXXXXXXXXXXXXXXXX",
              SenderName: "ABCD",
              TransactionType: "D",
              SmsData: [
                { MobNumber: "8801844909020", Message: "Hello Dear Mohammad" },
                { MobNumber: "8801844909021", Message: "Hello Dear Abdur Rahman" }
              ]
            }, null, 2),
            responseExample: JSON.stringify({
              statusCode: "200",
              status: "Success",
              trxnId: "ZICU7TMXV9B6ZG8_C28",
              responseResult: "SMS Send Successfuly"
            }, null, 2)
          }
        ]
      },
      {
        name: 'Query (GET)',
        endpoints: [
          {
            id: 'mim-send-get',
            method: 'GET' as const,
            path: '/api/SmsSending/Send',
            title: 'Send SMS (HTTP GET)',
            description: 'Send SMS via query string parameters. Alternative to JSON POST.',
            queryParams: [
              { field: 'UserName', type: 'string', required: true, description: 'Your registered email.' },
              { field: 'Apikey', type: 'string', required: true, description: 'Your API Key.' },
              { field: 'MobileNumber', type: 'string', required: true, description: 'Destination mobile number.' },
              { field: 'SenderName', type: 'string', required: true, description: 'Registered Sender ID.' },
              { field: 'TransactionType', type: 'string', required: true, description: 'T, P, or D.' },
              { field: 'Message', type: 'string', required: true, description: 'SMS message body.' }
            ],
            responseExample: JSON.stringify({
              statusCode: "200",
              status: "Success",
              responseResult: "SMS Send Successfuly",
              trxnId: "J4Y3RQ6Z5QIL7H2"
            }, null, 2)
          },
          {
            id: 'mim-one-to-many-get',
            method: 'GET' as const,
            path: '/api/SmsSending/SendOneToMany',
            title: 'One-to-Many SMS (HTTP GET)',
            description: 'Send to multiple numbers via GET. Numbers comma-separated in MobileNumber param.',
            queryParams: [
              { field: 'UserName', type: 'string', required: true, description: 'Your registered email.' },
              { field: 'Apikey', type: 'string', required: true, description: 'Your API Key.' },
              { field: 'MobileNumber', type: 'string', required: true, description: 'Comma-separated mobile numbers.' },
              { field: 'CampaignId', type: 'string', required: false, description: 'Campaign ID or "null".' },
              { field: 'SenderName', type: 'string', required: true, description: 'Registered Sender ID.' },
              { field: 'TransactionType', type: 'string', required: true, description: 'T or P.' },
              { field: 'Message', type: 'string', required: true, description: 'Message body.' }
            ],
            responseExample: JSON.stringify({
              statusCode: "200",
              status: "Success",
              responseResult: "SMS Send successfully",
              trxnId: "J4Y3RQ6Z5QIL7H2"
            }, null, 2)
          }
        ]
      },
      {
        name: 'Account',
        endpoints: [
          {
            id: 'mim-balance-post',
            method: 'POST' as const,
            path: '/api/SmsSending/balanceCheck',
            title: 'Balance Check (POST)',
            description: 'Check your current SMS balance.',
            bodyParams: [
              { field: 'UserName', type: 'string', required: true, description: 'Your registered email.' },
              { field: 'Apikey', type: 'string', required: true, description: 'Your API Key.' }
            ],
            responseExample: JSON.stringify({
              statusCode: "200",
              status: "Ok",
              trxnId: "",
              responseResult: "999.54"
            }, null, 2)
          },
          {
            id: 'mim-balance-get',
            method: 'GET' as const,
            path: '/api/SmsSending/balanceCheck',
            title: 'Balance Check (GET)',
            description: 'Check balance via query string.',
            queryParams: [
              { field: 'userName', type: 'string', required: true, description: 'Your registered email.' },
              { field: 'Apikey', type: 'string', required: true, description: 'Your API Key.' }
            ],
            responseExample: JSON.stringify({
              statusCode: "200",
              status: "Ok",
              responseResult: "999.08"
            }, null, 2)
          }
        ]
      }
    ],
    smsMeta: {
      floorPrice: '0.30 BDT (Non-Masking)',
      pricing: [
        { serviceType: 'Non-Masking', startPrice: '0.30 BDT', bestFor: 'Startups / Alerts', keyFeature: 'Shared numeric sender ID; fast setup.' },
        { serviceType: 'Masking', startPrice: '0.48 BDT', bestFor: 'Established Brands', keyFeature: 'Shows your Brand Name (max 11 chars).' },
        { serviceType: 'OTP SMS', startPrice: '0.35 BDT', bestFor: 'App Verification', keyFeature: 'High priority; <10s delivery guarantee.' },
        { serviceType: 'Location-Based', startPrice: '0.32 BDT', bestFor: 'Marketing', keyFeature: 'Targeting specific Thana/Districts.' },
        { serviceType: '2-Way SMS', startPrice: '499 BDT/Mo', bestFor: 'Interactive Apps', keyFeature: 'Unlimited incoming SMS via Virtual Inbox/API.' }
      ],
      compliance: {
        banglaLanguageRule: 'Per BTRC notice (Sharok: 14.32.0000.600.43.008.21.492), all types of SMS must be in Bangla.',
        englishExceptions: 'Only numeric digits (OTPs), URLs, and Mobile Numbers can be in English.',
        noInternationalOtp: 'Prohibited from sending OTPs for international services (Facebook, Google, etc.).',
        characterLimits: {
          english: '160 characters per SMS',
          unicode: '70 characters per SMS (Bangla)',
          longSms: 'Up to 1,530 characters (concatenated)'
        },
        penalty: 'Accounts sending purely English promotional content will be disconnected.'
      },
      registrationDocs: [
        { category: 'Valid Photo ID', requirement: 'NID, Passport, or Driving License.' },
        { category: 'For Businesses', requirement: 'Trade License or VAT/BIN Certificate.' },
        { category: 'For Freelancers', requirement: 'Proof of online business (Digital Business ID/DBID) or Payment Gateway certificate.' },
        { category: 'For Gov/NGOs', requirement: 'Official authorization letter on letterhead.' },
        { category: 'Masking Approval', requirement: 'Masking Application Form on official company pad. Approval takes 7–15 days.' }
      ],
      maskingApproval: '7–15 days',
      proTip: 'MiM SMS follows BTRC Floor Price closely. All prices are subject to VAT/SD as per the 2024 government tax hike. Submit documents through their Client Verification Page to activate your account.',
      contact: {
        address: '',
        phone: '01844909020-23 (10AM - 5PM)',
        fax: '',
        email: 'support@mimsms.com',
        website: 'https://www.mimsms.com'
      }
  }
  },
  {
    id: 'zaman-it',
    name: 'ZAMAN IT',
    category: 'sms',
    color: '#0e76a8',
    logoChar: 'Z',
    logoUrl: 'https://zaman-it.com/wp-content/uploads/2024/04/Zaman-IT.png',
    authType: 'API Key',
    version: 'v1',
    description: '1st SMS API provider in BD (since 2008). BTRC enlisted aggregator. Supports Masking, Non-Masking, and Location Based SMS.',
    weightUnit: 'kg' as const,
    sandbox: null,
    production: {
      baseUrl: 'http://[server-ip]/api',
      credentials: [
        { label: 'api_key', value: '(Generate in ZAMAN IT Panel)' }
      ]
    },
    callouts: [
      {
        type: 'info' as const,
        title: 'Authentication',
        message: 'Pass the api_key as a query parameter or form data field in your request.'
      },
      {
        type: 'tip' as const,
        title: 'SMS Type (type)',
        message: 'Set type="text" for English SMS, or type="unicode" for Bangla SMS.'
      },
      {
        type: 'warning' as const,
        title: 'Prohibited Content',
        message: 'Spam, betting, anti-government messages, and International OTPs are strictly prohibited.'
      },
      {
        type: 'info' as const,
        title: 'URL Encoding',
        message: 'Use URL encoding for the message body to send special characters like &, $, @ properly.'
      }
    ],
    statuses: [
      { slug: '1001 FAILED', meaning: 'Wrong API Key.' },
      { slug: '1002 FAILED', meaning: 'Wrong Sender ID.' },
      { slug: '1003 FAILED', meaning: 'Type must be text or unicode.' },
      { slug: '1004 FAILED', meaning: 'Only GET and POST Methods Allowed.' },
      { slug: '1005 FAILED', meaning: 'Cannot send SMS to this prefix (prefix inactivity).' },
      { slug: '1006 FAILED', meaning: 'Insufficient Balance.' },
      { slug: '1007 FAILED', meaning: 'Please use country code (88).' },
      { slug: 'SUCCESS', meaning: 'Only Delivered SMS will be charged.' }
    ],
    groups: [
      {
        name: 'Send SMS',
        endpoints: [
          {
            id: 'zaman-send-sms',
            method: 'GET' as const,
            path: '/sendsms',
            title: 'Send SMS (GET / POST)',
            description: 'Send SMS (text or unicode). Supports Masking, Non-Masking, OTP, etc. Documentation provides an example using query parameters.',
            queryParams: [
              { field: 'api_key', type: 'string', required: true, description: 'Your generated API Key.' },
              { field: 'type', type: 'string', required: true, description: 'Message type: "text" (English) or "unicode" (Bangla).' },
              { field: 'phone', type: 'string', required: true, description: 'Recipient number with country code (e.g. 88017XXXXXXXX).' },
              { field: 'senderid', type: 'string', required: true, description: 'Your approved Sender ID.' },
              { field: 'message', type: 'string', required: true, description: 'URL encoded message body.' }
            ],
            responseExample: JSON.stringify({
              status: "Success",
              message: "SMS Submitted Successfully"
            }, null, 2)
          }
        ]
      }
    ],
    smsMeta: {
      floorPrice: '0.35 BDT (Non-Masking, Enterprise Pack)',
      pricing: [
        { serviceType: 'Non-Masking (Basic)', startPrice: '0.40 BDT', bestFor: 'Small Company (10K SMS)', keyFeature: '৳4,000. Free Non-Masking Sender ID.' },
        { serviceType: 'Non-Masking (Business)', startPrice: '0.38 BDT', bestFor: 'Medium Company (50K SMS)', keyFeature: '৳19,000. Free Non-Masking Sender ID.' },
        { serviceType: 'Non-Masking (Enterprise)', startPrice: '0.35 BDT', bestFor: 'Large Company (100K SMS)', keyFeature: '৳35,000. Free Non-Masking Sender ID.' },
        { serviceType: 'Masking (Basic)', startPrice: '0.70 BDT', bestFor: 'Small Company (10K SMS)', keyFeature: '৳7,000. Tax/VAT/Masking cost excluded.' },
        { serviceType: 'Masking (Business)', startPrice: '0.65 BDT', bestFor: 'Medium Company (50K SMS)', keyFeature: '৳32,500. Tax/VAT/Masking cost excluded.' },
        { serviceType: 'Masking (Enterprise)', startPrice: '0.60 BDT', bestFor: 'Large Company (100K SMS)', keyFeature: '৳60,000. Tax/VAT/Masking cost excluded.' }
      ],
      compliance: {
        banglaLanguageRule: 'Supports both English & Bangla (Unicode) SMS. Must follow BTRC guidelines.',
        englishExceptions: 'N/A',
        noInternationalOtp: 'International OTPs are strictly prohibited.',
        characterLimits: {
          english: 'Standard (text type)',
          unicode: 'Standard (unicode type)',
          longSms: 'Supported (Dynamic Messaging)'
        },
        penalty: 'Prohibited content (Spam, Betting, Anti-Gov) will likely lead to restrictions.'
      },
      registrationDocs: [
        { category: 'Masking Approval', requirement: 'Masking Reg Time: 3 Working Days. Additional masking costs apply.' }
      ],
      maskingApproval: '3 Working Days',
      proTip: 'ZAMAN IT offers a 4.5 crore free mobile number database for marketing campaigns, and does not charge for failed deliveries (Only Delivered SMS will be charged).',
      contact: {
        address: 'Own Office Building in Uttara',
        phone: '01973009007 / 01959061004',
        fax: '',
        email: '',
        website: 'https://www.zaman-it.com'
      }
    }
  },
  {
    id: 'bulk-sms-dhaka',
    name: 'Bulk SMS Dhaka',
    category: 'sms',
    color: '#f97316',
    logoChar: 'B',
    logoUrl: 'https://bulksmsdhaka.com/public/images/logo.png',
    authType: 'API Key',
    version: 'v1',
    description: 'Advanced SMS API in Bangladesh with unbeatable rates starting at 0.34 TK. Offers Masking, Non-Masking, Voice SMS, and Email Marketing. Includes plugins for WordPress, WHMCS, and Laravel.',
    weightUnit: 'kg' as const,
    sandbox: null,
    production: {
      baseUrl: 'https://bulksmsdhaka.net/api',
      credentials: [
        { label: 'api_key', value: '(Generate in Bulk SMS Dhaka Portal)' },
        { label: 'callerID', value: '(1234 for Non-Masking, Brand Name for Masking)' }
      ]
    },
    callouts: [
      {
        type: 'info' as const,
        title: 'Authentication',
        message: 'Pass the `apikey` and `callerID` as query parameters in your GET/POST request.'
      },
      {
        type: 'tip' as const,
        title: 'OTP Length',
        message: 'OTP SMS content must be exactly within 70 characters, otherwise the OTP will not be sent but your balance will still be deducted.'
      },
      {
        type: 'warning' as const,
        title: 'Prohibited Content & Compliance',
        message: 'SPAM detection is active (Error 1005). Masking SMS must be sent in Bengali (Error 1012).'
      },
      {
        type: 'info' as const,
        title: 'URL Encoding',
        message: 'Use URL encoding for the message body to send special characters like &, $, @ properly.'
      }
    ],
    statuses: [
      { slug: '1000 SUCCESS', meaning: 'SMS request successful.' },
      { slug: '1001 INFO', meaning: 'Request sent.' },
      { slug: '1002 PENDING', meaning: 'Request pending.' },
      { slug: '1003 FAILED', meaning: 'Request failed.' },
      { slug: '1005 FAILED', meaning: 'SPAM Detected.' },
      { slug: '1006 FAILED', meaning: 'SMS Content Validation Fails.' },
      { slug: '1008 FAILED', meaning: 'IP Not Whitelisted.' },
      { slug: '1009 FAILED', meaning: 'Account Not Verified. Contact Administrator.' },
      { slug: '1010 FAILED', meaning: 'Account is disabled.' },
      { slug: '1011 FAILED', meaning: 'Sender ID not found by API key.' },
      { slug: '1012 FAILED', meaning: 'Masking SMS must be sent in Bengali.' },
      { slug: '2001 FAILED', meaning: 'Balance Insufficient.' },
      { slug: '1013 FAILED', meaning: 'Balance Validity Not Available.' },
      { slug: '1014 FAILED', meaning: 'Internal Server Error.' },
      { slug: '1015 FAILED', meaning: 'Authorization failed.' },
      { slug: '1016 FAILED', meaning: 'Message ID invalid or query already done for the same ID.' },
      { slug: '1017 FAILED', meaning: 'Message ID wasn\'t provided.' },
      { slug: '1018 FAILED', meaning: 'API key wasn\'t provided.' }
    ],
    groups: [
      {
        name: 'Send SMS / OTP',
        endpoints: [
          {
            id: 'bd-send-text',
            method: 'GET' as const,
            path: '/sendtext',
            title: 'Send Text SMS',
            description: 'Send regular Masking or Non-Masking SMS. Supports GET/POST methods.',
            queryParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API Key' },
              { field: 'callerID', type: 'string', required: true, description: '1234 for Non-Masking, Brand Name for Masking.' },
              { field: 'number', type: 'string', required: true, description: 'Recipient number (e.g. 017XXXXXXXX) or space separated for multiple.' },
              { field: 'message', type: 'string', required: true, description: 'URL encoded message body.' }
            ],
            responseExample: JSON.stringify({
              Status: "1000",
              Success: "true",
              Message: "Your sms request successful!!"
            }, null, 2)
          },
          {
            id: 'bd-send-otp',
            method: 'GET' as const,
            path: '/otpsend',
            title: 'Send OTP SMS',
            description: 'Send OTP messages. Message content MUST be within 70 chars. Format: Your {Brand/Company Name} OTP is XXXX',
            queryParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API Key' },
              { field: 'callerID', type: 'string', required: true, description: '1234 for Non-Masking, Brand Name for Masking.' },
              { field: 'number', type: 'string', required: true, description: 'Recipient number.' },
              { field: 'message', type: 'string', required: true, description: 'OTP message.' }
            ],
            responseExample: JSON.stringify({
              Status: "1000",
              Success: "true",
              Message: "Your OTP Send Successful!!"
            }, null, 2)
          }
        ]
      },
      {
        name: 'Reports & Balance',
        endpoints: [
          {
            id: 'bd-delivery-status',
            method: 'GET' as const,
            path: '/getstatus',
            title: 'Delivery Report API',
            description: 'Get delivery status for single or multiple SMS using messageid.',
            queryParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API Key' },
              { field: 'messageid', type: 'string', required: true, description: 'Message ID from SMS Portal Report/Logs.' }
            ],
            responseExample: JSON.stringify({
              Status: "4",
              Success: "true",
              Message: "DELIVRD"
            }, null, 2)
          },
          {
            id: 'bd-get-balance',
            method: 'GET' as const,
            path: '/getBalance',
            title: 'Credit Balance API',
            description: 'Get your current account balance.',
            queryParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API Key' }
            ],
            responseExample: JSON.stringify({
              Balance: "49.32",
              Status: "100",
              Success: "true",
              Message: "Successfully Done."
            }, null, 2)
          }
        ]
      }
    ],
    smsMeta: {
      floorPrice: '0.34 BDT (Non-Masking)',
      pricing: [
        { serviceType: 'Non-Masking', startPrice: '0.34 BDT', bestFor: 'SME Beginner', keyFeature: 'Min Buy: 500 Tk (1470 SMS). 3 Mo Validity. 6 Poisa MNP Included. SMS From TXT/CSV/API.' },
        { serviceType: 'Masking', startPrice: '0.55 BDT', bestFor: 'SME Beginner', keyFeature: 'Min Buy: 2000 Tk (3636 SMS). Dedicated Sender ID. 3 Mo Validity. 6 Poisa MNP Included.' },
        { serviceType: 'Voice SMS', startPrice: '1.20 BDT', bestFor: 'SME Beginner', keyFeature: 'Min Buy: 2000 Tk (1666 Voice). 3 Mo Validity. No API/OTP access. SMS From TXT/CSV only.' },
        { serviceType: 'Email Marketing', startPrice: '0.11 BDT', bestFor: 'Enterprise Business', keyFeature: 'Min Buy: 3000 Tk (27272 Emails). Sender ID: Name@yourdomain.com.' }
      ],
      compliance: {
        banglaLanguageRule: 'Masking SMS MUST be sent in Bengali (Error 1012 if violated).',
        englishExceptions: 'N/A',
        noInternationalOtp: 'N/A',
        characterLimits: {
          english: 'Standard',
          unicode: 'Standard',
          longSms: 'OTP MUST be <= 70 chars.'
        },
        penalty: 'SPAM Detection active; failed OTPs >70 chars will still deduct balance.'
      },
      registrationDocs: [
        { category: 'Plugins & Addons', requirement: 'Offers WordPress Plugin, WHMCS Plugin, and Laravel Package.' },
        { category: 'Free Database', requirement: 'Access to 32K+ specific contacts (Clubs, FBCCI, Universities) & 1.9L+ broader segments (Engineers, Lawyers, Doctors).' }
      ],
      maskingApproval: 'N/A',
      proTip: 'Provides a free database of 5 Lac phone numbers for SMS marketing. Operators supported: GP, Banglalink, Teletalk, Robi, Airtel. 24/7 expert support available.',
      contact: {
        address: '87 BNS Center, Sector:07, Uttara, Dhaka 1230',
        phone: '+8801682314951',
        fax: '',
        email: 'bulksmsdhaka@gmail.com, sales@bulksmsdhaka.com',
        website: 'https://bulksmsdhaka.com'
      }
    }
  },
  {
    id: 'greenweb-bd',
    name: 'GreenWeb BD',
    category: 'sms',
    color: '#10b981',
    logoChar: 'G',
    logoUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_mikN7vluOStCI2XUE116QyJY60xbH9jzj5jG4RTbwjbg=s900-c-k-c0x00ffffff-no-rj',
    authType: 'Token',
    version: 'v1',
    description: 'Bulk SMS provider supporting complex JSON and URL Encoded payload structures with extensive utility endpoints for rates, balance, and stats.',
    weightUnit: 'kg' as const,
    sandbox: null,
    production: {
      baseUrl: 'http://api.greenweb.com.bd',
      credentials: [
        { label: 'token', value: '(Generate from gwb.li/token)' }
      ]
    },
    callouts: [
      {
        type: 'info' as const,
        title: 'Authentication',
        message: 'Pass the token as a query parameter (for GET) or in the body/headers (for POST JSON). Demo token for testing: `1234567890123456789` (Returns valid response, doesn\'t send SMS).'
      },
      {
        type: 'tip' as const,
        title: 'Response Formatting',
        message: 'Outputs HTML line-by-line (Ok: / Error:) by default. Append `?json` (or `&json`) to the endpoint for JSON array responses.'
      },
      {
        type: 'warning' as const,
        title: 'GET Requests',
        message: 'If using GET method, you MUST URL Encode the `message` text (e.g. `rawurlencode()` in PHP or `encodeURI()` in JS).'
      }
    ],
    statuses: [
      { slug: 'Ok:', meaning: 'HTML Response: SMS Sent Successfully.' },
      { slug: 'Error:', meaning: 'HTML Response: SMS Failed (e.g. Invalid Number).' },
      { slug: 'SENT', meaning: 'JSON Response: Message sent successfully.' },
      { slug: 'FAILED', meaning: 'JSON Response: Message failed to send.' }
    ],
    groups: [
      {
        name: 'Send SMS',
        endpoints: [
          {
            id: 'gw-send-sms-post',
            method: 'POST' as const,
            path: '/api.php',
            title: 'Send Bulk SMS (Form URL Encoded / Standard)',
            description: 'Send SMS via standard URL-encoded POST payload. Returns Line-by-Line HTML by default (use ?json for JSON).',
            bodyParams: [
              { field: 'token', type: 'string', required: true, description: 'Your access token.' },
              { field: 'to', type: 'string', required: true, description: 'Recipient number format +8801xxxxxxxxx (comma separated for multiple).' },
              { field: 'message', type: 'string', required: true, description: 'Your message text.' }
            ],
            responseExample: `Ok: SMS Sent Successfully To +8801xxxxxxxxx\nError: +8801xxxxxxxxx Invalid Number !`
          },
          {
            id: 'gw-send-sms-json',
            method: 'POST' as const,
            path: '/api.php?json',
            title: 'Send Bulk SMS (JSON)',
            description: 'Send many-to-many SMS with different messages to different recipients. Supports 3 JSON patterns (Standard, Token in URL, Token in Header).',
            bodyExample: JSON.stringify({
              token: "replace_it_with_your_token_code",
              smsdata: [
                { to: "+8801XXXXXXXXX", message: "বাংলা ম্যাসেজ" },
                { to: "018xxxxxxxxxxx", message: "test message" }
              ]
            }, null, 2),
            responseExample: JSON.stringify([
              { to: "+8801xxxxxxx", message: "বাংলা ম্যাসেজ", status: "SENT", statusmsg: "SMS Sent Successfully..." },
              { to: "018xxxxxxxxx", message: "test message", status: "FAILED", statusmsg: "Invalid Number" }
            ], null, 2)
          }
        ]
      },
      {
        name: 'Account & Utilities',
        endpoints: [
          {
            id: 'gw-utilities',
            method: 'GET' as const,
            path: '/g_api.php',
            title: 'Utility API (Balance, Rate, Stats)',
            description: 'Access all stats through combination of query parameters. Append `&json` for JSON output.',
            queryParams: [
              { field: 'token', type: 'string', required: true, description: 'Your access token.' },
              { field: 'balance', type: 'boolean', required: false, description: 'Include to check account balance.' },
              { field: 'rate', type: 'boolean', required: false, description: 'Include to check SMS rate.' },
              { field: 'expiry', type: 'boolean', required: false, description: 'Include to check SMS validity/expiry date.' },
              { field: 'totalsms', type: 'boolean', required: false, description: 'Total sent SMS stats from account.' },
              { field: 'monthlysms', type: 'string', required: false, description: 'Monthly stats from account (format m-Y, e.g. 03-2026).' },
              { field: 'tokensms', type: 'boolean', required: false, description: 'Total sent SMS stats using this specific token.' },
              { field: 'tokenmonthlysms', type: 'string', required: false, description: 'Monthly stats from specific token (format m-Y).' },
              { field: 'json', type: 'boolean', required: false, description: 'Include to receive JSON response.' }
            ],
            responseExample: JSON.stringify({
              Balance: "49.32",
              Status: "100"
            }, null, 2)
          }
        ]
      }
    ],
    smsMeta: {
      floorPrice: 'N/A (See Rate API)',
      pricing: [],
      compliance: {
        banglaLanguageRule: 'N/A',
        englishExceptions: 'N/A',
        noInternationalOtp: 'N/A',
        characterLimits: {
          english: 'Standard',
          unicode: 'Standard',
          longSms: 'Supported'
        },
        penalty: 'N/A'
      },
      registrationDocs: [],
      maskingApproval: 'N/A',
      proTip: 'For integrating, use the demo token `1234567890123456789` to write your parser logic without burning real SMS credit. It perfectly mocks live API responses.',
      contact: {
        address: '',
        phone: '',
        fax: '',
        email: '',
        website: 'https://greenweb.com.bd'
      }
    }
  },
  {
    id: 'alpha-sms',
    name: 'Alpha SMS',
    category: 'sms',
    color: '#8b5cf6',
    logoChar: 'A',
    logoUrl: 'https://sms.bd/Content/img/logo/alphasms.svg',
    authType: 'API Key',
    version: 'v1',
    description: 'RESTful API provider in Bangladesh supporting both GET and POST JSON methods. Features built-in campaign content tracking and scheduling.',
    weightUnit: 'kg' as const,
    sandbox: null,
    production: {
      baseUrl: 'https://api.sms.net.bd',
      credentials: [
        { label: 'api_key', value: '(Generate in SMS Panel)' }
      ]
    },
    callouts: [
      {
        type: 'info' as const,
        title: 'Authentication',
        message: 'Pass the `api_key` as a query parameter (for GET) or in the JSON body (for POST).'
      },
      {
        type: 'warning' as const,
        title: 'Recipient Numbers',
        message: 'The `to` field MUST start with the country code (880) or Standard 01X. E.g. 8801800000000'
      }
    ],
    statuses: [
      { slug: '0 SUCCESS', meaning: 'Everything worked as expected.' },
      { slug: '400 FAILED', meaning: 'Missing or invalid parameter.' },
      { slug: '403 FAILED', meaning: 'No permission to perform request.' },
      { slug: '404 FAILED', meaning: 'Requested resource not found.' },
      { slug: '405 FAILED', meaning: 'Authorization required.' },
      { slug: '409 FAILED', meaning: 'Unknown error occurred on Server end.' },
      { slug: '410 FAILED', meaning: 'Account expired.' },
      { slug: '411 FAILED', meaning: 'Reseller Account expired or suspended.' },
      { slug: '412 FAILED', meaning: 'Invalid Schedule.' },
      { slug: '413 FAILED', meaning: 'Invalid Sender ID.' },
      { slug: '414 FAILED', meaning: 'Message is empty.' },
      { slug: '415 FAILED', meaning: 'Message is too long.' },
      { slug: '416 FAILED', meaning: 'No valid number found.' },
      { slug: '417 FAILED', meaning: 'Insufficient balance.' },
      { slug: '420 FAILED', meaning: 'Content Blocked.' }
    ],
    groups: [
      {
        name: 'Sending SMS',
        endpoints: [
          {
            id: 'alpha-send-sms',
            method: 'POST' as const,
            path: '/sendsms',
            title: 'Send Bulk SMS',
            description: 'Send SMS messages. Supports GET and POST JSON formats.',
            bodyParams: [
              { field: 'api_key', type: 'string', required: true, description: 'Authentication Key.' },
              { field: 'msg', type: 'string', required: true, description: 'Body content of your message.' },
              { field: 'to', type: 'string', required: true, description: 'Recipient numbers (e.g. 8801800000000). Comma separated for campaigns.' },
              { field: 'schedule', type: 'string', required: false, description: 'Format: Y-m-d H:i:s (e.g. 2021-10-13 16:00:52)' },
              { field: 'sender_id', type: 'string', required: false, description: 'Approved Sender ID.' },
              { field: 'content_id', type: 'string', required: false, description: 'Approved campaign content ID (Required for bulk sms).' }
            ],
            bodyExample: JSON.stringify({
              api_key: "YOUR_API_KEY",
              msg: "JSON API Testing",
              to: "8801800000000"
            }, null, 2),
            responseExample: JSON.stringify({
              error: 0,
              msg: "Request successfully submitted",
              data: {
                  request_id: "0000"
              }
            }, null, 2)
          }
        ]
      },
      {
        name: 'Reports & Balance',
        endpoints: [
          {
            id: 'alpha-report',
            method: 'GET' as const,
            path: '/report/request/{id}/',
            title: 'Report API',
            description: 'Get delivery reports using the request_id returned from sending an SMS.',
            queryParams: [
              { field: 'api_key', type: 'string', required: true, description: 'Authentication Key.' }
            ],
            responseExample: JSON.stringify({
              error: 0,
              msg: "Success",
              data: {
                request_id: "0000",
                request_status: "Complete",
                request_charge: "0.0000",
                recipients: [
                  { number: "8801800000000", charge: "0.0000", status: "Sent" }
                ]
              }
            }, null, 2)
          },
          {
            id: 'alpha-balance',
            method: 'GET' as const,
            path: '/user/balance/',
            title: 'Balance API',
            description: 'Retrieve current account balance.',
            queryParams: [
              { field: 'api_key', type: 'string', required: true, description: 'Authentication Key.' }
            ],
            responseExample: JSON.stringify({
              error: 0,
              msg: "Success",
              data: { balance: "00.0000" }
            }, null, 2)
          }
        ]
      }
    ],
    smsMeta: {
      floorPrice: 'N/A (Check Portal)',
      pricing: [],
      compliance: {
        banglaLanguageRule: 'N/A',
        englishExceptions: 'N/A',
        noInternationalOtp: 'N/A',
        characterLimits: {
          english: 'Standard',
          unicode: 'Standard',
          longSms: 'Supported (Error 415 if too long)'
        },
        penalty: 'N/A'
      },
      registrationDocs: [],
      maskingApproval: 'N/A',
      proTip: 'For bulk campaigns, ensure you pass the approved `content_id` to avoid Error 420 (Content Blocked). View their Github for SDKs.',
      contact: {
        address: '',
        phone: '',
        fax: '',
        email: '',
        website: 'https://sms.net.bd'
      }
    }
  },
  {
    id: 'cloudwave',
    name: 'CloudWave BulkSMS',
    category: 'sms',
    color: '#0ea5e9',
    logoChar: 'C',
    logoUrl: 'https://www.bulksms.com/images/bulksms-logo.png',
    authType: 'HTTP Basic Auth',
    version: 'v1',
    description: 'Robust API based on BulkSMS spec. Features automatic Unicode detection, Deduplication IDs, rich JSON/Form encoded endpoints, Webhook Mgmt, and Attachment storage.',
    weightUnit: 'kg' as const,
    sandbox: null,
    production: {
      baseUrl: 'https://api.bulksms.com/v1',
      credentials: [
        { label: 'Authorization', value: 'Basic (Base64 encoded Username:Password or API Token:Secret)' }
      ]
    },
    callouts: [
      {
        type: 'info' as const,
        title: 'Authentication',
        message: 'Must pass an `Authorization` header. Format: `Basic [Base64(tokenId:tokenSecret)]` e.g., `Basic QWxhZGRpbjpPcGVuU2VzYW1l`.'
      },
      {
        type: 'tip' as const,
        title: 'Auto Unicode & Deduplication',
        message: 'Pass `auto-unicode=true` to handle non-GSM chars. Pass `deduplication-id` to prevent double-charging on network retries.'
      }
    ],
    statuses: [
      { slug: '200 OK', meaning: 'Success for retrieval/utility endpoints.' },
      { slug: '201 CREATED', meaning: 'Messages successfully queued / webhook created.' },
      { slug: '400 BAD REQ', meaning: 'Invalid submission structure or parameter.' },
      { slug: '403 FORBIDDEN', meaning: 'Insufficient credits or invalid credentials.' },
      { slug: '404 NOT FOUND', meaning: 'Requested message or webhook ID does not exist.' }
    ],
    groups: [
      {
        name: 'Messaging',
        endpoints: [
          {
            id: 'cw-send-sms',
            method: 'POST' as const,
            path: '/messages',
            title: 'Send Messages (JSON)',
            description: 'Send up to 50k messages per batch (4k recommended for retries). Supports templates, scheduling, and custom routing.',
            queryParams: [
              { field: 'deduplication-id', type: 'integer', required: false, description: 'ID to prevent duplicate sends on connection fail.' },
              { field: 'auto-unicode', type: 'boolean', required: false, description: 'Auto-convert non-GSM chars to Unicode (costlier).' },
              { field: 'schedule-date', type: 'string', required: false, description: 'ISO-8601 Date (e.g. 2019-02-18T13:00:00+02:00).' }
            ],
            bodyParams: [
              { field: 'to', type: 'string | array | object', required: true, description: 'Recipients. E.g. "+27001234567" or array of objects with templates.' },
              { field: 'body', type: 'string', required: true, description: 'Message content.' },
              { field: 'from', type: 'string | object', required: false, description: 'Sender ID / Repliable config.' },
              { field: 'routingGroup', type: 'string', required: false, description: 'ECONOMY, STANDARD, PREMIUM (Default).' },
              { field: 'encoding', type: 'string', required: false, description: 'TEXT, UNICODE, BINARY.' },
              { field: 'longMessageMaxParts', type: 'integer', required: false, description: 'Maximum concatenated parts (Default 3).' },
              { field: 'userSuppliedId', type: 'string', required: false, description: 'Custom correlation ID (Max 20 chars).' },
              { field: 'deliveryReports', type: 'string', required: false, description: 'ALL, ERRORS, NONE.' }
            ],
            bodyExample: JSON.stringify([
              { to: "+27001234567", body: "Hello World!" },
              { from: { type: "REPLIABLE" }, to: "+27002345678", body: "Hello Universe!" }
            ], null, 2),
            responseExample: JSON.stringify([
              { id: "1-00000000", type: "SENT", from: "CloudWave BulkSMS", to: "+27001234567", body: "Hello World!", encoding: "TEXT", creditCost: 1, status: { type: "ACCEPTED" } }
            ], null, 2)
          },
          {
            id: 'cw-send-simple',
            method: 'POST' as const,
            path: '/messages/send',
            title: 'Send Message (Simple Form)',
            description: 'Simple interface for a single message via POST (form-urlencoded) or GET.',
            queryParams: [
              { field: 'to', type: 'string', required: true, description: 'Recipient number.' },
              { field: 'body', type: 'string', required: true, description: 'Message text.' },
              { field: 'deduplication-id', type: 'integer', required: false, description: 'Refer to deduplication.' }
            ],
            responseExample: JSON.stringify([
              { id: "1-00000000", type: "SENT", from: "CloudWave BulkSMS", to: "+27001234567", body: "Hello World!", encoding: "TEXT", creditCost: 1, status: { type: "ACCEPTED" } }
            ], null, 2)
          },
          {
            id: 'cw-retrieve-msgs',
            method: 'GET' as const,
            path: '/messages',
            title: 'Retrieve Messages',
            description: 'Fetch sent/received messages with query clauses (e.g. `type=SENT&submission.id=123`).',
            queryParams: [
              { field: 'filter', type: 'string', required: false, description: 'URL Encoded filter (e.g. type%3DSENT).' },
              { field: 'limit', type: 'integer', required: false, description: 'Max records (Default 1000).' },
              { field: 'sortOrder', type: 'string', required: false, description: 'ASCENDING or DESCENDING (Default).' }
            ],
            responseExample: JSON.stringify([
              { id: "1-00000000", type: "SENT", from: "CloudWave BulkSMS", to: "+27001234567", body: "Hello World!", encoding: "TEXT", creditCost: 1, status: { type: "ACCEPTED" } }
            ], null, 2)
          },
          {
            id: 'cw-related-msgs',
            method: 'GET' as const,
            path: '/messages/{id}/relatedReceivedMessages',
            title: 'List Related Messages',
            description: 'Get received messages (replies) related to a specific sent message ID.',
            responseExample: JSON.stringify([
              { id: "1-00000000", type: "RECEIVED", from: "+27001234567", to: "CloudWave BulkSMS", body: "Yes!", encoding: "TEXT", status: { type: "RECEIVED" } }
            ], null, 2)
          }
        ]
      },
      {
        name: 'Webhooks & Attachments',
        endpoints: [
          {
            id: 'cw-webhooks',
            method: 'POST' as const,
            path: '/webhooks',
            title: 'Create Webhook',
            description: 'Register a URL for DLRs. Supports SENT and RECEIVED scopes. Robust retry logic (90s, 3m, 6m...).',
            bodyParams: [
              { field: 'name', type: 'string', required: true, description: 'Unique webhook name.' },
              { field: 'url', type: 'string', required: true, description: 'Target HTTPS URL.' },
              { field: 'triggerScope', type: 'string', required: true, description: 'SENT or RECEIVED.' },
              { field: 'invokeOption', type: 'string', required: false, description: 'ONE or MANY (batching up to 10 msgs).' },
              { field: 'contactEmailAddress', type: 'string', required: false, description: 'For failure notices.' }
            ],
            responseExample: JSON.stringify({
              id: 234,
              name: "My MT Webhook",
              url: "https://www.example.com",
              triggerScope: "SENT",
              active: true
            }, null, 2)
          },
          {
            id: 'cw-attachments',
            method: 'POST' as const,
            path: '/rmm/pre-sign-attachment',
            title: 'Upload Attachment (Pre-Sign)',
            description: 'Get a signed URL to PUT files (up to 20MB) to BulkSMS storage, returning a `fetchUrl` to include in SMS body.',
            bodyParams: [
              { field: 'fileExtension', type: 'string', required: false, description: 'e.g., pdf' },
              { field: 'mediaType', type: 'string', required: false, description: 'e.g., application/pdf' }
            ],
            responseExample: JSON.stringify({
              putUrl: "https://some.place/aethzd.pdf?Token=...",
              fetchUrl: "https://smsattach.it/bedhkd.pdf",
              fields: [{}]
            }, null, 2)
          }
        ]
      },
      {
        name: 'Account Tools',
        endpoints: [
          {
            id: 'cw-profile',
            method: 'GET' as const,
            path: '/profile',
            title: 'Get Profile',
            description: 'View account data, quotas, and credit limits.',
            responseExample: JSON.stringify({
              id: "123",
              username: "account_name",
              credits: { balance: 50.0 }
            }, null, 2)
          },
          {
            id: 'cw-blocked',
            method: 'GET' as const,
            path: '/blocked-numbers',
            title: 'List Blocked Numbers',
            description: 'View numbers not permitted to receive your SMS.',
            responseExample: JSON.stringify([
              { id: 234, phoneNumber: "44123456789" }
            ], null, 2)
          },
          {
            id: 'cw-credit-transfer',
            method: 'POST' as const,
            path: '/credit/transfer',
            title: 'Transfer Credits',
            description: 'Transfer credits to another enabled BulkSMS account using the same currency.',
            responseExample: "{}"
          }
        ]
      }
    ],
    smsMeta: {
      floorPrice: '~ €0.27 (Network Dependent)',
      pricing: [
        { serviceType: 'Standard Send', startPrice: '€156.00 / 5k Credits', bestFor: 'International & Bulk', keyFeature: 'Credit cost varies by network (e.g. GrameenPhone: 6, Others: 10). Estimate 577 SMS per 5k credits (~27.04c/SMS).' },
        { serviceType: 'Non-Profit', startPrice: 'Discounted', bestFor: 'NGOs', keyFeature: 'Cost effective options available for communities or causes.' },
        { serviceType: 'Enterprise', startPrice: 'Custom', bestFor: 'Large Volumes', keyFeature: 'Custom solutions for high-volume messaging.' }
      ],
      compliance: {
        banglaLanguageRule: 'N/A',
        englishExceptions: 'N/A',
        noInternationalOtp: 'N/A',
        characterLimits: {
          english: 'Standard (Auto-GSM conversion flag available)',
          unicode: 'Standard',
          longSms: 'Allowed via `longMessageMaxParts` (Default 3 up to 99 parts)'
        },
        penalty: 'N/A'
      },
      registrationDocs: [
        { category: 'Contract', requirement: 'No hidden fees or long-term contracts. Transparent pay-as-you-go service.' }
      ],
      maskingApproval: 'N/A',
      proTip: 'Flexible payment options (Visa, Mastercard, Swift, Paypal, Stripe) and a Money Back Guarantee for unused credits. Deduplication IDs prevent double charging on retries.',
      contact: {
        address: '',
        phone: '',
        fax: '',
        email: 'sales@bulksms.com',
        website: 'https://www.bulksms.com'
      }
    }
  },
  // --- REVE SMS ---
  {
    id: 'reve-sms',
    name: 'REVE SMS',
    category: 'sms',
    color: '#00b894',
    logoChar: 'R',
    logoUrl: 'https://www.revesoft.com/cdn/assets/images/reve-systems-logo.svg',
    authType: 'API Key + Secret',
    version: 'v1',
    description: 'REVE Systems SMS gateway with HTTP and SMPP connectivity. Supports multiple auth methods (Query, Path, Body, Basic Auth), bulk/dynamic messaging, DLR push/pull, and Mobile Originated (MO) SMS.',
    weightUnit: 'kg' as const,
    sandbox: {
      baseUrl: 'http://149.20.188.8:4479',
      credentials: [
        { label: 'apikey', value: 'd29778ff37949197' },
        { label: 'secretkey', value: 'd5f3708e' },
        { label: 'callerID', value: '88017841784148' }
      ]
    },
    production: {
      baseUrl: 'https://smpp.revesms.com:7790',
      credentials: [
        { label: 'apikey', value: '(Retrieve from REVE SMS Portal)' },
        { label: 'secretkey', value: '(Retrieve from REVE SMS Portal)' },
        { label: 'callerID', value: '(Your registered Sender ID)' },
        { label: 'SMPP IP', value: '103.177.125.106' },
        { label: 'SMPP Port', value: '9988' }
      ]
    },
    callouts: [
      {
        type: 'info' as const,
        title: 'Multiple Base URLs',
        message: 'REVE SMS is accessible via multiple domains and IPs: HTTPS (:7790), HTTP (:7788), C-Panel (apismpp.revesms.com), White Level (bulksms.smsvaults.work:7788), and direct IPs (149.20.188.26:8124, 199.188.150.40:8124). Use whichever suits your routing.'
      },
      {
        type: 'tip' as const,
        title: 'Flexible Authentication',
        message: 'Supports 4 auth methods: (1) Query params, (2) Path variables (/sendtext/{apikey}/{secretkey}), (3) JSON body, (4) HTTP Basic Auth (base64 of apikey:secretkey). All endpoints support both GET and POST.'
      },
      {
        type: 'info' as const,
        title: 'SMPP Connectivity',
        message: 'Direct SMPP access available at IP 103.177.125.106 on port 9988 (Smpp iTel). HTTP API on ports 7788/8124, HTTPS on 7790/8125.'
      },
      {
        type: 'warning' as const,
        title: 'Multi-Number Format',
        message: 'Multiple recipients in toUser must be comma-separated without spaces (e.g. "880171256481,8801835414"). No array format — use a single string.'
      },
      {
        type: 'info' as const,
        title: 'Portal Access',
        message: 'Billing Portal: https://smpp.revesms.com | White Level Login: http://103.177.125.109/login | C-Panel: http://cpanel.smsvaults.work'
      }
    ],
    statuses: [
      { slug: '0 — ACCEPTD', meaning: 'Request successful. SMS accepted for delivery.' },
      { slug: '1 — REJECTD', meaning: 'Request failed. SMS rejected.' },
      { slug: '2 — PENDING', meaning: 'DLR request pending. Message still in queue.' },
      { slug: '4 — SENT', meaning: 'Message has been sent but not yet delivered.' },
      { slug: '0 — DELIVRD (DLR)', meaning: 'SMS successfully delivered to handset.' },
      { slug: '-42 — REJECTD', meaning: 'Authorization failed. Invalid credentials.' },
      { slug: '101 — Internal Error', meaning: 'Internal server error occurred.' },
      { slug: '108 — REJECTD', meaning: 'Wrong password or password not provided.' },
      { slug: '109 — REJECTD', meaning: 'User/API key not provided or account deleted.' },
      { slug: '114 — REJECTD', meaning: 'Content/Message ID not provided or invalid. Also returned for already-queried message IDs.' },
      { slug: '136 — Profile Blocked', meaning: 'Profile or Provider is blocked.' },
      { slug: '137 — TPS Exceeded', meaning: 'Transactions per second limit exceeded.' },
      { slug: '151 — Invalid Traffic', meaning: 'Invalid traffic type.' },
      { slug: '170 — Invalid Content-Type', meaning: 'Invalid Content-Type. Supports only JSON/XML.' },
      { slug: '5400 — IP Restricted', meaning: 'Client IP is restricted from accessing the API.' }
    ],
    groups: [
      {
        name: 'Send SMS',
        endpoints: [
          {
            id: 'reve-send-get',
            method: 'GET' as const,
            path: '/sendtext',
            title: 'Send SMS (GET — Query Params)',
            description: 'Send a text message via GET with credentials as query parameters. Multiple numbers can be passed in toUser by comma-separating them.',
            queryParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your unique API key from REVE SMS Portal.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key from REVE SMS Portal.' },
              { field: 'callerID', type: 'string', required: true, description: 'Sender ID / Caller ID for the message.' },
              { field: 'toUser', type: 'string', required: true, description: 'Recipient mobile number(s). Comma-separated for multiple (e.g. 880171256481,8801835414).' },
              { field: 'messageContent', type: 'string', required: true, description: 'The SMS message body.' }
            ],
            responseExample: JSON.stringify({ Status: "0", Text: "ACCEPTD", Message_ID: "1373129" }, null, 2)
          },
          {
            id: 'reve-send-post-json',
            method: 'POST' as const,
            path: '/sendtext',
            title: 'Send SMS (POST — JSON Body)',
            description: 'Send a text message via POST with credentials in the JSON request body.',
            bodyParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your unique API key.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key.' },
              { field: 'callerID', type: 'string', required: true, description: 'Sender ID for the message.' },
              { field: 'toUser', type: 'string', required: true, description: 'Recipient mobile number(s). Comma-separated for multiple.' },
              { field: 'messageContent', type: 'string', required: true, description: 'The SMS message body.' }
            ],
            bodyExample: JSON.stringify({
              apikey: "34dd062b35bad338",
              secretkey: "9e138d90",
              callerID: "testSender",
              toUser: "8801835414333",
              messageContent: "test message"
            }, null, 2),
            responseExample: JSON.stringify({ Status: "0", Text: "ACCEPTD", Message_ID: "1373129" }, null, 2)
          },
          {
            id: 'reve-send-path-vars',
            method: 'POST' as const,
            path: '/sendtext/{apikey}/{secretkey}',
            title: 'Send SMS (Path Variables)',
            description: 'Send SMS with API key and secret key as URL path segments. Supports both GET and POST. Remaining params in body or query.',
            pathParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API key as a path segment.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key as a path segment.' }
            ],
            bodyParams: [
              { field: 'callerID', type: 'string', required: true, description: 'Sender ID for the message.' },
              { field: 'toUser', type: 'string', required: true, description: 'Recipient number(s), comma-separated.' },
              { field: 'messageContent', type: 'string', required: true, description: 'The SMS message body.' }
            ],
            bodyExample: JSON.stringify({
              callerID: "testSender",
              toUser: "8801835414333,8801835478147",
              messageContent: "test message"
            }, null, 2),
            responseExample: JSON.stringify({ Status: "0", Text: "ACCEPTD", Message_ID: "1373129" }, null, 2)
          },
          {
            id: 'reve-send-basic-auth',
            method: 'POST' as const,
            path: '/sendtext',
            title: 'Send SMS (Basic Auth)',
            description: 'Send SMS using HTTP Basic Authentication. The Authorization header is base64-encoded apikey:secretkey. Credentials are NOT in the body.',
            callouts: [
              {
                type: 'tip' as const,
                title: 'Basic Auth Header',
                message: 'Header format: Authorization: Basic <base64(apikey:secretkey)>. For example, apikey "34dd062b35bad338" and secretkey "9e138d90" → base64("34dd062b35bad338:9e138d90").'
              }
            ],
            bodyParams: [
              { field: 'callerID', type: 'string', required: true, description: 'Sender ID for the message.' },
              { field: 'toUser', type: 'string', required: true, description: 'Recipient number(s).' },
              { field: 'messageContent', type: 'string', required: true, description: 'The SMS message body.' }
            ],
            bodyExample: JSON.stringify({
              callerID: "testSender",
              toUser: "8801835414333",
              messageContent: "test message"
            }, null, 2),
            responseExample: JSON.stringify({ Status: "0", Text: "ACCEPTD", Message_ID: "1373129" }, null, 2)
          },
          {
            id: 'reve-send-form',
            method: 'POST' as const,
            path: '/sendtext/{apikey}/{secretkey}',
            title: 'Send SMS (Form URL-Encoded)',
            description: 'Send SMS using x-www-form-urlencoded content type with path variable auth.',
            callouts: [
              {
                type: 'info' as const,
                title: 'Content-Type',
                message: 'Set Content-Type: application/x-www-form-urlencoded. Body fields: callerID, toUser, messageContent.'
              }
            ],
            pathParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API key as a path segment.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key as a path segment.' }
            ],
            bodyParams: [
              { field: 'callerID', type: 'string', required: true, description: 'Sender ID.' },
              { field: 'toUser', type: 'string', required: true, description: 'Recipient number.' },
              { field: 'messageContent', type: 'string', required: true, description: 'Message body.' }
            ],
            responseExample: JSON.stringify({ Status: "0", Text: "ACCEPTD", Message_ID: "1373129" }, null, 2)
          }
        ]
      },
      {
        name: 'Bulk & Dynamic SMS',
        endpoints: [
          {
            id: 'reve-bulk-get',
            method: 'GET' as const,
            path: '/send',
            title: 'Bulk/Dynamic SMS (GET)',
            description: 'Send multiple messages via GET. Pass a JSON array in the "content" query parameter. Supports multi-contact with same or different content.',
            queryParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API key.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key.' },
              { field: 'content', type: 'string', required: true, description: 'URL-encoded JSON array of message objects. Each object has callerID, toUser, and messageContent.' }
            ],
            responseExample: JSON.stringify({ Status: "0", Text: "ACCEPTD", Message_ID: "1373129" }, null, 2)
          },
          {
            id: 'reve-bulk-post',
            method: 'POST' as const,
            path: '/send',
            title: 'Bulk/Dynamic SMS (POST — JSON)',
            description: 'Send multiple messages in a single POST request. Each item in the content array can have different callerID, toUser, and messageContent.',
            bodyParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API key.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key.' },
              { field: 'content', type: 'array', required: true, description: 'Array of message objects. Each has: callerID (sender), toUser (comma-separated recipients), messageContent (SMS body).' }
            ],
            bodyExample: JSON.stringify({
              apikey: "API_KEY",
              secretkey: "SECRET_KEY",
              content: [
                { callerID: "8801847", toUser: "8801149,8801182", messageContent: "SMS1" },
                { callerID: "9101847", toUser: "8801147", messageContent: "SMS2" }
              ]
            }, null, 2),
            responseExample: JSON.stringify({ Status: "0", Text: "ACCEPTD", Message_ID: "1373129" }, null, 2)
          }
        ]
      },
      {
        name: 'Delivery Status (DLR)',
        endpoints: [
          {
            id: 'reve-dlr-get',
            method: 'GET' as const,
            path: '/getstatus',
            title: 'Get DLR Status (GET)',
            description: 'Check the delivery status of a sent message by its message ID.',
            queryParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API key.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key.' },
              { field: 'messageid', type: 'string', required: true, description: 'The Message_ID returned from the send response.' }
            ],
            responseExample: JSON.stringify({ Status: "0", Text: "DELIVRD", Message_ID: "444", "Delivery Time": "0" }, null, 2)
          },
          {
            id: 'reve-dlr-post',
            method: 'POST' as const,
            path: '/getstatus',
            title: 'Get DLR Status (POST — JSON)',
            description: 'Check delivery status via POST with JSON body.',
            bodyParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API key.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key.' },
              { field: 'messageid', type: 'string', required: true, description: 'The Message_ID from the send response.' }
            ],
            bodyExample: JSON.stringify({
              apikey: "34dd062b35bad338",
              secretkey: "9e138d90",
              messageid: "1373106"
            }, null, 2),
            responseExample: JSON.stringify({ Status: "0", Text: "DELIVRD", Message_ID: "1373106", "Delivery Time": "0" }, null, 2)
          },
          {
            id: 'reve-dlr-path-vars',
            method: 'GET' as const,
            path: '/getstatus/{apikey}/{secretkey}',
            title: 'Get DLR Status (Path Variables)',
            description: 'Check delivery status with API key and secret key as URL path segments.',
            pathParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API key as a path segment.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key as a path segment.' }
            ],
            queryParams: [
              { field: 'messageid', type: 'string', required: true, description: 'The Message_ID from the send response.' }
            ],
            responseExample: JSON.stringify({ Status: "0", Text: "DELIVRD", Message_ID: "1373129", "Delivery Time": "0" }, null, 2)
          },
          {
            id: 'reve-multi-status',
            method: 'GET' as const,
            path: '/getmultistatus',
            title: 'Get Multiple DLR Statuses',
            description: 'Check delivery status for multiple message IDs in a single request. IDs are comma-separated.',
            queryParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API key.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key.' },
              { field: 'messageids', type: 'string', required: true, description: 'Comma-separated message IDs (e.g. 7331,7332,7333).' }
            ],
            responseExample: JSON.stringify([
              { Status: "0", Text: "DELIVRD", Message_ID: "7331", "Delivery Time": "0" },
              { Status: "2", Text: "PENDING", Message_ID: "7332", "Delivery Time": "0" },
              { Status: "1", Text: "REJECTD", Message_ID: "7333", "Delivery Time": "0" }
            ], null, 2)
          }
        ]
      },
      {
        name: 'DLR Push (Webhook)',
        endpoints: [
          {
            id: 'reve-dlr-push-post',
            method: 'POST' as const,
            path: '/submitstatus',
            title: 'Push DLR Status (POST)',
            description: 'Manually push a delivery report update back to the REVE server.',
            bodyParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API key.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key.' },
              { field: 'messageid', type: 'string', required: true, description: 'The Message_ID of the original SMS.' },
              { field: 'text', type: 'string', required: true, description: 'DLR status text (e.g. DELIVRD, REJECTD).' }
            ],
            bodyExample: JSON.stringify({
              apikey: "3812690755112271",
              secretkey: "b7aa9272",
              messageid: "123456",
              text: "DELIVRD"
            }, null, 2),
            responseExample: JSON.stringify({ Status: "0", Text: "ACCEPTD" }, null, 2)
          },
          {
            id: 'reve-dlr-push-get',
            method: 'GET' as const,
            path: '/submitstatus',
            title: 'Push DLR Status (GET)',
            description: 'Push a delivery report update via GET query parameters.',
            queryParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API key.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key.' },
              { field: 'messageid', type: 'string', required: true, description: 'The Message_ID of the original SMS.' },
              { field: 'text', type: 'string', required: true, description: 'DLR status text (e.g. DELIVRD, REJECTD).' }
            ],
            responseExample: JSON.stringify({ Status: "0", Text: "ACCEPTD" }, null, 2)
          }
        ]
      },
      {
        name: 'Mobile Originated (MO)',
        endpoints: [
          {
            id: 'reve-mo-post',
            method: 'POST' as const,
            path: '/mo/message',
            title: 'Mobile Originated SMS (POST)',
            description: 'Process incoming SMS (Mobile Originated). Submit MO messages to the REVE platform via JSON body.',
            bodyParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API key.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key.' },
              { field: 'callerID', type: 'string', required: true, description: 'Originating mobile number (sender of incoming SMS).' },
              { field: 'toUser', type: 'string', required: true, description: 'Short code or virtual number that received the SMS.' },
              { field: 'messageContent', type: 'string', required: true, description: 'Content of the incoming SMS.' }
            ],
            bodyExample: JSON.stringify({
              callerID: "8801833307414",
              toUser: "87885",
              messageContent: "inserted test",
              apikey: "5e4d53576e077575",
              secretkey: "23e476f3"
            }, null, 2),
            responseExample: JSON.stringify({ Status: "0", Text: "ACCEPTD", Message_ID: "9201250" }, null, 2)
          },
          {
            id: 'reve-mo-get',
            method: 'GET' as const,
            path: '/mo/message',
            title: 'Mobile Originated SMS (GET)',
            description: 'Submit MO messages via GET query parameters.',
            queryParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API key.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key.' },
              { field: 'callerID', type: 'string', required: true, description: 'Originating mobile number.' },
              { field: 'toUser', type: 'string', required: true, description: 'Short code or virtual number.' },
              { field: 'messageContent', type: 'string', required: true, description: 'Content of the incoming SMS.' }
            ],
            responseExample: JSON.stringify({ Status: "0", Text: "ACCEPTD", Message_ID: "9201250" }, null, 2)
          }
        ]
      },
      {
        name: 'Account Balance',
        endpoints: [
          {
            id: 'reve-balance-v2',
            method: 'POST' as const,
            path: '/api/v2/balance',
            title: 'Check Balance (API v2 — JSON)',
            description: 'Check your SMS account balance using the v2 JSON API. Note: This endpoint may use a different base URL (e.g. http://199.188.150.40:8124).',
            callouts: [
              {
                type: 'warning' as const,
                title: 'Different Base URL',
                message: 'This endpoint uses a separate IP: http://199.188.150.40:8124/api/v2/balance — not the standard SMPP domain.'
              }
            ],
            bodyParams: [
              { field: 'apikey', type: 'string', required: true, description: 'Your API key.' },
              { field: 'secretkey', type: 'string', required: true, description: 'Your secret key.' },
              { field: 'clienttransid', type: 'string', required: false, description: 'Client-side transaction reference ID.' }
            ],
            bodyExample: JSON.stringify({
              apikey: "7c3c1fc90315c9a0",
              secretkey: "dc67c774",
              clienttransid: "123456"
            }, null, 2),
            responseExample: JSON.stringify({ Status: "0", balance: "5000.00", currency: "BDT" }, null, 2)
          },
          {
            id: 'reve-balance-legacy',
            method: 'GET' as const,
            path: '/sms/smsConfiguration/smsClientBalance.jsp',
            title: 'Check Balance (Legacy JSP)',
            description: 'Legacy endpoint to check balance. Available on the billing portal (smpp.revesms.com or 103.177.125.106/portal).',
            queryParams: [
              { field: 'client', type: 'string', required: true, description: 'Your Client ID.' }
            ],
            responseExample: "Balance: 5000.00 BDT"
          }
        ]
      }
    ],
    smsMeta: {
      floorPrice: 'Contact Sales',
      pricing: [
        { serviceType: 'Non-Masking', startPrice: 'Contact Sales', bestFor: 'Alerts & OTP', keyFeature: 'Shows generic number. Multiple IP endpoints for redundancy.' },
        { serviceType: 'Masking', startPrice: 'Contact Sales', bestFor: 'Brand Identity', keyFeature: 'Shows Brand Name as Sender ID (callerID).' },
        { serviceType: 'Bulk SMS', startPrice: 'Volume-Based', bestFor: 'Campaigns', keyFeature: 'Dynamic /send endpoint with JSON arrays for multi-content.' },
        { serviceType: 'SMPP Direct', startPrice: 'Enterprise', bestFor: 'High Throughput', keyFeature: 'Direct SMPP on port 9988 for carrier-grade integration.' }
      ],
      compliance: {
        banglaLanguageRule: 'Follow BTRC regulations for Bangla SMS content.',
        englishExceptions: 'OTP and transactional messages may use English.',
        noInternationalOtp: 'Check with REVE for international OTP support.',
        characterLimits: {
          english: 'Standard GSM character set',
          unicode: 'Standard Unicode support',
          longSms: 'Concatenated SMS supported'
        },
        penalty: 'IP restriction (Error 5400) or profile blocking (Error 136) for violations.'
      },
      registrationDocs: [
        { category: 'Account Setup', requirement: 'Contact REVE Systems sales for API credentials (apikey + secretkey).' },
        { category: 'Sender ID', requirement: 'callerID / Sender ID provided during onboarding.' },
        { category: 'IP Whitelisting', requirement: 'Production IPs must be whitelisted. Error 5400 returned for restricted IPs.' }
      ],
      maskingApproval: 'Contact Sales',
      proTip: 'REVE offers multi-IP redundancy (103.177.125.106, 149.20.188.26, 199.188.150.40) — use different IPs as failover. The testbed (149.20.188.8:4479) is great for development. DLR Push (/submitstatus) lets you build a webhook-like flow by pushing delivery reports back.',
      contact: {
        address: '',
        phone: '',
        fax: '',
        email: '',
        website: 'https://www.revesms.com'
      }
    }
  }
];

export const COMPARISON_DATA = [
  { feature: 'Auth Type', pathao: 'OAuth 2.0', redx: 'Static JWT', steadfast: 'API Key', carrybee: 'Client Headers' },
  { feature: 'Token Refresh', pathao: 'Yes', redx: 'No', steadfast: 'No', carrybee: 'No' },
  { feature: 'Sandbox', pathao: 'Yes', redx: 'Yes', steadfast: 'No', carrybee: 'Yes' },
  { feature: 'Bulk Orders', pathao: 'Yes (async)', redx: 'No', steadfast: 'Yes (max 500)', carrybee: 'Yes (async)' },
  { feature: 'Webhooks', pathao: 'Yes (20+)', redx: 'Yes', steadfast: 'No', carrybee: 'Yes (20+)' },
  { feature: 'Weight Unit', pathao: 'kg', redx: 'grams', steadfast: 'N/A', carrybee: 'grams' },
  { feature: 'Price Calc API', pathao: 'Yes', redx: 'Yes', steadfast: 'No', carrybee: 'No' },
];

export const SMS_COMPARISON_DATA = [
  { feature: 'Auth Method', 'ssl-wireless': 'API Token (Body)', 'mim-sms': 'Username + API Key', 'zaman-it': 'API Key (Query)', 'bulk-sms-dhaka': 'API Key (Query)', 'greenweb-bd': 'Token', 'alpha-sms': 'API Key (Body/Query)', 'cloudwave': 'HTTP Basic Auth', 'reve-sms': 'API Key + Secret (Multi)' },
  { feature: 'API Protocol', 'ssl-wireless': 'REST (GET/POST, JSON)', 'mim-sms': 'REST (JSON + Query)', 'zaman-it': 'HTTP GET/POST', 'bulk-sms-dhaka': 'REST (GET/POST)', 'greenweb-bd': 'GET/POST (HTML/JSON)', 'alpha-sms': 'REST (GET/POST JSON)', 'cloudwave': 'REST (JSON) + Form', 'reve-sms': 'HTTP/SMPP (GET/POST/Form)' },
  { feature: 'Single SMS', 'ssl-wireless': 'Yes (GET + POST)', 'mim-sms': 'Yes', 'zaman-it': 'Yes', 'bulk-sms-dhaka': 'Yes', 'greenweb-bd': 'Yes', 'alpha-sms': 'Yes', 'cloudwave': 'Yes', 'reve-sms': 'Yes (GET + POST + Form)' },
  { feature: 'Bulk SMS', 'ssl-wireless': 'Yes (100/req)', 'mim-sms': 'Yes (One-to-Many)', 'zaman-it': 'Yes', 'bulk-sms-dhaka': 'Yes', 'greenweb-bd': 'Yes (JSON Array)', 'alpha-sms': 'Yes (Comma Separated)', 'cloudwave': 'Yes (Max 50k Batches)', 'reve-sms': 'Yes (JSON Array /send)' },
  { feature: 'Dynamic SMS', 'ssl-wireless': 'Yes (100/req)', 'mim-sms': 'Yes', 'zaman-it': 'Yes (Dynamic Messaging)', 'bulk-sms-dhaka': 'Yes (Location/2-way)', 'greenweb-bd': 'Yes', 'alpha-sms': 'Yes', 'cloudwave': 'Yes (Template Engine)', 'reve-sms': 'Yes (Multi-Content /send)' },
  { feature: 'Balance Check API', 'ssl-wireless': '—', 'mim-sms': 'Yes (POST + GET)', 'zaman-it': '—', 'bulk-sms-dhaka': 'Yes (GET)', 'greenweb-bd': 'Yes (GET)', 'alpha-sms': 'Yes (GET)', 'cloudwave': 'Yes (Profile API)', 'reve-sms': 'Yes (v2 POST + Legacy JSP)' },
  { feature: 'DLR Webhook', 'ssl-wireless': 'No', 'mim-sms': '—', 'zaman-it': '—', 'bulk-sms-dhaka': 'No', 'greenweb-bd': '—', 'alpha-sms': '—', 'cloudwave': 'Yes (Robust Retries)', 'reve-sms': 'Yes (DLR Push /submitstatus)' },
  { feature: 'IP Whitelisting', 'ssl-wireless': 'Yes', 'mim-sms': '—', 'zaman-it': '—', 'bulk-sms-dhaka': 'Yes (Error 1008)', 'greenweb-bd': '—', 'alpha-sms': '—', 'cloudwave': '—', 'reve-sms': 'Yes (Error 5400)' },
  { feature: 'Failover Routing', 'ssl-wireless': 'Manual (on confirmation)', 'mim-sms': '—', 'zaman-it': '—', 'bulk-sms-dhaka': '—', 'greenweb-bd': '—', 'alpha-sms': '—', 'cloudwave': '—', 'reve-sms': 'Multi-IP Redundancy' },
  { feature: 'OTP Route', 'ssl-wireless': 'Dedicated (~1s)', 'mim-sms': '<10s guarantee', 'zaman-it': 'Yes', 'bulk-sms-dhaka': 'Yes', 'greenweb-bd': '—', 'alpha-sms': '—', 'cloudwave': '—', 'reve-sms': 'Yes' },
  { feature: 'OTP Language', 'ssl-wireless': 'English + Bangla', 'mim-sms': 'English + Bangla', 'zaman-it': 'English + Bangla', 'bulk-sms-dhaka': 'Masking in Bangla', 'greenweb-bd': '—', 'alpha-sms': '—', 'cloudwave': 'Unicode Conversion', 'reve-sms': 'English + Bangla' },
  { feature: 'Non-Masking Price', 'ssl-wireless': '৳0.3200', 'mim-sms': '0.30 BDT', 'zaman-it': '0.35 - 0.40 BDT', 'bulk-sms-dhaka': '0.34 BDT', 'greenweb-bd': 'See Rate API', 'alpha-sms': '—', 'cloudwave': '~ €0.27 / SMS', 'reve-sms': 'Contact Sales' },
  { feature: 'Masking Price', 'ssl-wireless': '৳0.5250', 'mim-sms': '0.48 BDT', 'zaman-it': '0.60 - 0.70 BDT', 'bulk-sms-dhaka': '0.55 BDT', 'greenweb-bd': 'See Rate API', 'alpha-sms': '—', 'cloudwave': '—', 'reve-sms': 'Contact Sales' },
  { feature: 'OTP Price', 'ssl-wireless': 'Negotiable', 'mim-sms': '0.35 BDT', 'zaman-it': '—', 'bulk-sms-dhaka': '—', 'greenweb-bd': '—', 'alpha-sms': '—', 'cloudwave': '—', 'reve-sms': 'Contact Sales' },
  { feature: 'Masking Approval', 'ssl-wireless': '3 Working Days', 'mim-sms': '7–15 Days', 'zaman-it': '3 Working Days', 'bulk-sms-dhaka': '—', 'greenweb-bd': 'N/A', 'alpha-sms': '—', 'cloudwave': '—', 'reve-sms': 'Contact Sales' },
  { feature: 'Masking Documents', 'ssl-wireless': 'Declaration + Authorization Form', 'mim-sms': 'Masking Application Form', 'zaman-it': '—', 'bulk-sms-dhaka': '—', 'greenweb-bd': 'N/A', 'alpha-sms': '—', 'cloudwave': '—', 'reve-sms': '—' },
  { feature: 'Dashboard Reports', 'ssl-wireless': 'Yes (DLR on demand)', 'mim-sms': '—', 'zaman-it': 'Yes (Delivery Report)', 'bulk-sms-dhaka': 'Yes (Delivery Status API)', 'greenweb-bd': 'Yes (Stats API)', 'alpha-sms': 'Yes (Report API)', 'cloudwave': 'Yes (Messages API)', 'reve-sms': 'Yes (DLR API + Portal)' },
  { feature: 'Operator Stats', 'ssl-wireless': 'No', 'mim-sms': '—', 'zaman-it': '—', 'bulk-sms-dhaka': '—', 'greenweb-bd': '—', 'alpha-sms': '—', 'cloudwave': '—', 'reve-sms': '—' },
  { feature: 'Success Rate', 'ssl-wireless': '99.99% (operator dependent)', 'mim-sms': '—', 'zaman-it': '100% Delivery Guarantee', 'bulk-sms-dhaka': 'High Delivery Speed', 'greenweb-bd': '—', 'alpha-sms': '—', 'cloudwave': '—', 'reve-sms': '—' },
];