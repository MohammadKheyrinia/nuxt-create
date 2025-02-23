import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || ''
const client = new MongoClient(uri)

import { User } from "../models/models"

export default defineEventHandler(async (event) => {

  const database = client.db("tst1")
  const userData = database.collection("Users")

  const formData = await readBody(event)
  const data = await userData.findOne({
    email: formData.email,
  })

  if (!data) {
    console.log("not found!");

    try {
      const doc = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      }

      const result = await userData.insertOne(doc)

      console.log('a document was inserted');
    } finally {
      await client.close()
    }

  }

  if (data) {
    console.log("user exists")
  }
})