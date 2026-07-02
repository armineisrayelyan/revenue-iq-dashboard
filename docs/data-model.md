# RevenueIQ Data Model

## Customer

- id
- avatar
- fullName
- email
- company
- plan
- status
- country
- joinedAt
- monthlyRevenue

---

## Subscription

- id
- customerId
- plan
- status
- billingCycle
- startDate
- renewalDate
- price

---

## Payment

- id
- customerId
- amount
- currency
- status
- paymentMethod
- paidAt

---

## Dashboard Metrics

- Monthly Recurring Revenue (MRR)
- Annual Recurring Revenue (ARR)
- Active Customers
- Active Subscriptions
- New Customers
- Churn Rate
- Conversion Rate

---

## Revenue

- month
- revenue
- expenses
- profit

---

## Notifications

- id
- title
- message
- createdAt
- read