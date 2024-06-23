import { NextRequest, NextResponse } from 'next/server'
import * as fs from 'fs'
import { Schema } from '@src/core/schema'

const dirName = './schemas'
const fileName = 'sequelize-ui.json'

fs.mkdirSync(dirName, { recursive: true })

export async function GET(req: NextRequest) {
  try {
    const urlParams = req.nextUrl.searchParams
    let schemas = []
    try {
      const bufferFile = fs.readFileSync(`${dirName}/${fileName}`)
      schemas = JSON.parse(bufferFile.toString())
    } catch (err: any) {
      fs.writeFileSync(`${dirName}/${fileName}`, '[]')
    }
    if (urlParams.has('id')) {
      const id = urlParams.get('id')
      const schema = schemas.find((s: Schema) => s.id === id)
      return NextResponse.json(schema)
    } else {
      return NextResponse.json(schemas)
    }
  } catch (error) {
    return NextResponse.json({ error })
  }
}
export async function POST(req: NextRequest) {
  if (req.body) {
    const body = await req.json()
    fs.writeFileSync(`${dirName}/${fileName}`, JSON.stringify(body))
  }
  return NextResponse.json({ status: 'ok' })
}

export async function DELETE() {
  fs.writeFileSync(`${dirName}/${fileName}`, JSON.stringify('[]'))
  return NextResponse.json({ status: 'ok' })
}
