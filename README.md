# ACPET scavenger hunt

Next.js app. Clues live in DynamoDB table `clue-app` (`us-west-2`).

```
npm install
npm run dev
```

- Hunt: `/k8v3q` and the other trail codes
- Admin: `/admin`

On Vercel set these environment variables (same region as the table):

```
AWS_REGION=us-west-2
CLUE_TABLE=clue-app
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

Redeploy after saving them. Without the keys, pages still load the built-in clues, but admin cannot write to DynamoDB.
