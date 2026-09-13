import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb'
import { defaultClues } from './defaults.js'

const TableName = process.env.CLUE_TABLE || 'clue-app'
const PK = 'HUNT'

const doc = DynamoDBDocumentClient.from(
  new DynamoDBClient({ region: process.env.AWS_REGION || 'us-west-2' }),
)

export async function loadClues() {
  const res = await doc.send(new GetCommand({ TableName, Key: { pk: PK } }))
  if (Array.isArray(res.Item?.clues) && res.Item.clues.length) return res.Item.clues
  await saveClues(defaultClues)
  return defaultClues
}

export async function saveClues(clues) {
  await doc.send(new PutCommand({ TableName, Item: { pk: PK, clues } }))
}

export async function findClue(id) {
  const clues = await loadClues()
  return clues.find((c) => c.id.toLowerCase() === String(id).toLowerCase()) || null
}
